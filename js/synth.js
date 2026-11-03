/* Tiny Web Audio synth for the "hear it" sketches on Notes on Notes.
   A soft electric-piano-ish tone: sine + slightly detuned triangle through a low-pass filter. */
(function (g) {
  let ac = null, master = null, playing = null;
  const NAMES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

  function midi(note) {
    const m = /^([A-Ga-g])(#{1,2}|b{1,2}|♯|♭)?(-?\d)$/.exec(String(note).trim());
    if (!m) throw new Error("bad pitch " + note);
    let n = NAMES[m[1].toUpperCase()];
    const acc = m[2] || "";
    n += (acc.match(/#|♯/g) || []).length - (acc.match(/b|♭/g) || []).length;
    return n + (Number(m[3]) + 1) * 12;
  }
  const freq = (note, cents = 0) => 440 * Math.pow(2, (midi(note) - 69 + cents / 100) / 12);

  function ensure() {
    if (!ac) {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = 0.22;
      const comp = ac.createDynamicsCompressor();
      master.connect(comp); comp.connect(ac.destination);
    }
    if (ac.state === "suspended") ac.resume();
    return ac;
  }

  function voice(t0, dur, f, vel, out) {
    const env = ac.createGain();
    const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = Math.min(5200, 900 + f * 5); lp.Q.value = 0.4;
    const o1 = ac.createOscillator(); o1.type = "sine"; o1.frequency.value = f;
    const o2 = ac.createOscillator(); o2.type = "triangle"; o2.frequency.value = f; o2.detune.value = 6;
    const g2 = ac.createGain(); g2.gain.value = f < 180 ? 0.55 : 0.35;
    o1.connect(env); o2.connect(g2); g2.connect(env); env.connect(lp); lp.connect(out);
    const peak = 0.5 * vel / (f < 150 ? 0.8 : 1);
    const rel = Math.min(0.9, 0.25 + dur * 0.3);
    env.gain.setValueAtTime(0.0001, t0);
    env.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
    env.gain.exponentialRampToValueAtTime(peak * 0.55, t0 + 0.25);
    env.gain.setValueAtTime(peak * 0.55, t0 + Math.max(0.03, dur - 0.02));
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + rel);
    for (const o of [o1, o2]) { o.start(t0); o.stop(t0 + dur + rel + 0.05); }
    return [o1, o2];
  }

  // demo: { bpm, beats, events: [{ t, d, notes: [...], v?, cents? }] }
  function play(demo, onEnd) {
    stop();
    ensure();
    const spb = 60 / (demo.bpm || 100);
    const bus = ac.createGain(); bus.connect(master);
    const start = ac.currentTime + 0.06;
    const oscs = [];
    for (const ev of demo.events || []) {
      for (const n of ev.notes || []) {
        oscs.push(...voice(start + ev.t * spb, Math.max(0.08, ev.d * spb), freq(n, ev.cents || 0), ev.v ?? 0.8, bus));
      }
    }
    const total = (demo.beats || Math.max(...demo.events.map((e) => e.t + e.d))) * spb + 1;
    const timer = setTimeout(() => { if (playing && playing.timer === timer) { playing = null; onEnd && onEnd(); } }, total * 1000);
    playing = { bus, oscs, timer, onEnd };
  }

  function stop() {
    if (!playing) return;
    const p = playing; playing = null;
    clearTimeout(p.timer);
    try { p.bus.gain.setTargetAtTime(0, ac.currentTime, 0.03); } catch (e) { /* already stopped */ }
    setTimeout(() => p.oscs.forEach((o) => { try { o.stop(); } catch (e) { /* ended */ } }), 200);
    p.onEnd && p.onEnd();
  }

  g.JazzSynth = { play, stop, midi };
})(window);
