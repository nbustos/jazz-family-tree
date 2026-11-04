/* Conjoining Voices — Web Audio sample engine.
   Plays recorded notes (pitch-shifted from the nearest sample), drum hits, per-voice buses for mixing,
   a shared analyser for live spectra, and offline analysis of samples (harmonic fingerprint, envelope). */
(function (g) {
  const S = g.VOICES_SAMPLES || {};
  const NAMES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  let ac = null, master = null, analyser = null;
  const buffers = new Map();   // url -> Promise<AudioBuffer>
  const buses = new Map();     // key -> GainNode
  let active = [];             // live sources (for stopAll)

  function midi(note) {
    const m = /^([A-Ga-g])(#|b)?(-?\d)$/.exec(String(note).trim());
    if (!m) throw new Error("bad pitch " + note);
    return NAMES[m[1].toUpperCase()] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0) + (Number(m[3]) + 1) * 12;
  }
  const hz = (n) => 440 * Math.pow(2, ((typeof n === "number" ? n : midi(n)) - 69) / 12);
  const FLAT = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
  const nameOf = (m) => FLAT[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1);

  function ctx() {
    if (!ac) {
      ac = new (g.AudioContext || g.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = 0.8;
      analyser = ac.createAnalyser(); analyser.fftSize = 8192; analyser.smoothingTimeConstant = 0.72;
      analyser.minDecibels = -100; analyser.maxDecibels = -20;
      const comp = ac.createDynamicsCompressor(); comp.threshold.value = -10; comp.ratio.value = 4;
      master.connect(comp); comp.connect(analyser); analyser.connect(ac.destination);
    }
    if (ac.state === "suspended") ac.resume();
    return ac;
  }
  function bus(key) {
    ctx();
    if (!buses.has(key)) { const b = ac.createGain(); b.connect(master); buses.set(key, b); }
    return buses.get(key);
  }
  function setMute(key, muted) { const b = bus(key); b.gain.setTargetAtTime(muted ? 0 : 1, ac.currentTime, 0.02); }

  function load(url) {
    if (!buffers.has(url)) {
      buffers.set(url, fetch(url).then((r) => { if (!r.ok) throw new Error(r.status + " " + url); return r.arrayBuffer(); })
        .then((ab) => new Promise((res, rej) => ctx().decodeAudioData(ab, res, rej))));
    }
    return buffers.get(url);
  }
  const has = (id) => !!(S[id] && (S[id].notes || S[id].hits));
  function sampledNotes(id) {
    const n = (S[id] && S[id].notes) || {};
    return Object.keys(n).map((k) => ({ name: k, m: midi(k), url: n[k] })).sort((a, b) => a.m - b.m);
  }
  function nearest(id, m) {
    const list = sampledNotes(id);
    if (!list.length) return null;
    let best = list[0];
    for (const s of list) if (Math.abs(s.m - m) < Math.abs(best.m - m)) best = s;
    return best;
  }
  function range(id) { const l = sampledNotes(id); return l.length ? [l[0].m, l[l.length - 1].m] : null; }
  async function preload(id) {
    const s = S[id]; if (!s) return;
    const urls = s.notes ? Object.values(s.notes) : Object.values(s.hits || {});
    await Promise.all(urls.map((u) => load(u).catch(() => null)));
  }

  // Play a note: when = seconds from now; dur = seconds (sustain before release).
  async function note(id, n, { when = 0, dur = 1.2, gain = 0.8, busKey } = {}) {
    const m = typeof n === "number" ? n : midi(n);
    const s = nearest(id, m); if (!s) return null;
    const buf = await load(s.url).catch(() => null); if (!buf) return null;
    ctx();
    const t0 = Math.max(ac.currentTime + 0.01, ac.currentTime + when);
    const src = ac.createBufferSource(); src.buffer = buf;
    src.playbackRate.value = Math.pow(2, (m - s.m) / 12);
    const env = ac.createGain();
    const rel = 0.12, len = Math.min(dur, buf.duration / src.playbackRate.value);
    env.gain.setValueAtTime(gain, t0);
    env.gain.setValueAtTime(gain, t0 + Math.max(0.02, len - 0.01));
    env.gain.linearRampToValueAtTime(0.0001, t0 + len + rel);
    src.connect(env); env.connect(bus(busKey || id));
    src.start(t0); src.stop(t0 + len + rel + 0.02);
    active.push(src); src.onended = () => { active = active.filter((x) => x !== src); };
    return src;
  }
  async function hit(piece, { when = 0, gain = 0.8, busKey } = {}) {
    const url = S.drums && S.drums.hits && S.drums.hits[piece]; if (!url) return null;
    const buf = await load(url).catch(() => null); if (!buf) return null;
    ctx();
    const t0 = Math.max(ac.currentTime + 0.01, ac.currentTime + when);
    const src = ac.createBufferSource(); src.buffer = buf;
    const env = ac.createGain(); env.gain.value = gain;
    src.connect(env); env.connect(bus(busKey || "drums"));
    src.start(t0);
    active.push(src); src.onended = () => { active = active.filter((x) => x !== src); };
    return src;
  }
  function stopAll() {
    for (const s of active) { try { s.stop(); } catch (e) { /* already stopped */ } }
    active = [];
  }

  // ---------- Offline analysis ----------
  function fft(re, im) {   // in-place radix-2
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) {
      let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit;
      if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
    }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = (-2 * Math.PI) / len, wr = Math.cos(ang), wi = Math.sin(ang);
      for (let i = 0; i < n; i += len) {
        let cr = 1, ci = 0;
        for (let k = 0; k < len / 2; k++) {
          const ar = re[i + k], ai = im[i + k], br = re[i + k + len / 2], bi = im[i + k + len / 2];
          const tr = br * cr - bi * ci, ti = br * ci + bi * cr;
          re[i + k] = ar + tr; im[i + k] = ai + ti; re[i + k + len / 2] = ar - tr; im[i + k + len / 2] = ai - ti;
          const ncr = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = ncr;
        }
      }
    }
  }
  const cache = new Map();
  // Harmonic amplitudes (dB re. strongest) for the first `count` partials, measured 120–400 ms into the note.
  async function analyse(id, n, count = 16) {
    const key = id + "|" + n;
    if (cache.has(key)) return cache.get(key);
    const s = nearest(id, midi(n)); if (!s) return null;
    const buf = await load(s.url).catch(() => null); if (!buf) return null;
    const x = buf.getChannelData(0), sr = buf.sampleRate, N = 16384;
    const start = Math.min(Math.floor(0.12 * sr), Math.max(0, x.length - N));
    const re = new Float32Array(N), im = new Float32Array(N);
    for (let i = 0; i < N && start + i < x.length; i++) re[i] = x[start + i] * (0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (N - 1)));
    fft(re, im);
    const mag = (k) => Math.hypot(re[k], im[k]);
    const f0 = hz(s.m), bin = sr / N;
    const parts = [];
    for (let h = 1; h <= count; h++) {
      const f = f0 * h; if (f > sr / 2 - 200) break;
      const c = Math.round(f / bin), w = Math.max(2, Math.round((f0 * 0.03 * h) / bin));
      let peak = 0; for (let k = c - w; k <= c + w; k++) if (k > 0 && k < N / 2) peak = Math.max(peak, mag(k));
      parts.push({ h, f, a: peak });
    }
    const top = Math.max(...parts.map((p) => p.a), 1e-9);
    parts.forEach((p) => (p.db = Math.max(-60, 20 * Math.log10(p.a / top + 1e-9))));
    // Envelope: RMS in 10 ms frames.
    const fr = Math.floor(sr * 0.01), env = [];
    for (let i = 0; i + fr <= x.length; i += fr) { let e = 0; for (let k = 0; k < fr; k++) e += x[i + k] * x[i + k]; env.push(Math.sqrt(e / fr)); }
    const emax = Math.max(...env, 1e-9);
    // Spectral centroid of the frame (a standard correlate of perceived brightness).
    let num = 0, den = 0; for (let k = 1; k < N / 2; k++) { const a = mag(k); num += a * k * bin; den += a; }
    const result = { sampled: s.name, f0, partials: parts, envelope: env.map((v) => v / emax), duration: buf.duration, centroid: num / (den || 1) };
    cache.set(key, result);
    return result;
  }

  g.JazzSampler = {
    ctx, midi, hz, nameOf, has, sampledNotes, range, preload, note, hit, stopAll, analyse, setMute, bus,
    analyser: () => (ctx(), analyser),
    now: () => (ac ? ac.currentTime : 0),
  };
})(window);
