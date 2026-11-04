/* Conjoining Voices — page renderer: spectrum map with live analyser, instrument studio,
   chord mixer, rhythm-section groove, and emotion castings. */
(function () {
  const V = window.VOICES;
  const SP = window.JazzSampler;
  const SAMP = window.VOICES_SAMPLES || {};
  const J = window.JAZZ || { artists: [] };
  const N = window.NOTES || { pieces: [] };
  const artistName = Object.fromEntries((J.artists || []).map((a) => [a.id, a.name]));
  const pieceTitle = Object.fromEntries((N.pieces || []).map((p) => [p.id, p.title]));
  const INST = Object.fromEntries(V.instruments.map((i) => [i.id, i]));
  const SEC = V.sections || {};
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const tip = $("note-tip");
  // Categorical slots (validated for both surfaces; every coloured mark also carries a text label).
  const PALETTE = { night: ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300"], paper: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4", "#008300"] };
  const pal = () => PALETTE[document.body.dataset.theme === "paper" ? "paper" : "night"];
  const nameOfInst = (id) => (INST[id] && INST[id].name) || id;

  // ---------- Theme ----------
  const setTheme = (t) => { document.body.dataset.theme = t; document.documentElement.dataset.theme = t; localStorage.setItem("jft-theme", t); renderAll(); };
  document.body.dataset.theme = localStorage.getItem("jft-theme") || "night";
  $("btn-theme").addEventListener("click", () => setTheme(document.body.dataset.theme === "night" ? "paper" : "night"));

  const fn = (text, prefix) => esc(text).replace(/\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, (m, inner) =>
    inner.split(/\s*,\s*/).map((n) => `<a class="fn" href="#${prefix}-src-${n.split(/[–-]/)[0].trim()}">${esc(n)}</a>`).join(""));
  const paras = (arr, px) => (arr || []).map((p) => `<p>${fn(p, px)}</p>`).join("");
  const normSrc = (s) => typeof s === "string" ? { cite: s.replace(/\s*(https?:\/\/\S+)\s*$/, ""), url: (s.match(/https?:\/\/\S+/) || [""])[0].replace(/[).,]+$/, "") } : s;
  const sourcesList = (sources, px) => sources && sources.length
    ? `<ol class="sources">${sources.map(normSrc).map((s, i) => `<li id="${px}-src-${i + 1}">${esc(s.cite)}${s.url ? ` <a href="${esc(s.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ol>` : "";
  const fmtHz = (f) => (f >= 1000 ? (f / 1000).toFixed(f >= 10000 ? 0 : 1) + " kHz" : Math.round(f) + " Hz");
  const pauseMusic = () => { if (window.JazzPlayer && window.JazzPlayer.playing()) window.JazzPlayer.pause(); };
  function showTip(html, e) { tip.innerHTML = html; tip.classList.add("show"); if (e) moveTip(e); }
  function moveTip(e) {
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 16, y = e.clientY + 16;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 16;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 16;
    tip.style.transform = `translate(${x}px, ${y}px)`;
  }
  document.addEventListener("mousemove", (e) => { if (tip.classList.contains("show")) moveTip(e); });

  // ---------- Log-frequency axis & live spectrum ----------
  const F0 = 20, F1 = 20000;
  const lx = (f, x0, w) => x0 + ((Math.log10(f) - Math.log10(F0)) / (Math.log10(F1) - Math.log10(F0))) * w;
  let liveUntil = 0;
  const views = [];   // { canvas, x0, w, top, h }
  function poke(sec = 2.5) { liveUntil = Math.max(liveUntil, performance.now() + sec * 1000); }
  function drawLive() {
    const an = window.__voicesAudio && SP.analyser();
    const on = an && performance.now() < liveUntil;
    let data = null;
    if (on) { data = new Float32Array(an.frequencyBinCount); an.getFloatFrequencyData(data); }
    for (const v of views) {
      const c = v.canvas, dpr = Math.min(2, devicePixelRatio || 1);
      const W = c.clientWidth, H = c.clientHeight;
      if (c.width !== W * dpr || c.height !== H * dpr) { c.width = W * dpr; c.height = H * dpr; }
      const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
      if (!data) continue;
      const sr = SP.ctx().sampleRate, bin = sr / 2 / data.length;
      const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#e7b54a";
      g.beginPath(); g.moveTo(v.x0, v.top + v.h);
      for (let px = 0; px <= v.w; px += 1) {
        const fa = F0 * Math.pow(F1 / F0, px / v.w), fb = F0 * Math.pow(F1 / F0, (px + 1) / v.w);
        let m = -140; for (let k = Math.floor(fa / bin); k <= Math.ceil(fb / bin) && k < data.length; k++) m = Math.max(m, data[k]);
        const t = Math.max(0, Math.min(1, (m + 100) / 75));
        g.lineTo(v.x0 + px, v.top + v.h - t * v.h);
      }
      g.lineTo(v.x0 + v.w, v.top + v.h); g.closePath();
      const grad = g.createLinearGradient(0, v.top, 0, v.top + v.h);
      grad.addColorStop(0, accent + "cc"); grad.addColorStop(1, accent + "10");
      g.fillStyle = grad; g.fill();
    }
    requestAnimationFrame(drawLive);
  }
  requestAnimationFrame(drawLive);
  // The audio context may only start after a user gesture.
  document.addEventListener("pointerdown", () => { window.__voicesAudio = true; }, { once: true, capture: true });

  // ---------- Part one: spectrum map ----------
  const shortName = (n) => n.replace(/\s*\(.*\)\s*/, "");
  const ORDER = V.instruments.filter((i) => i.range && i.range.lowHz && !i.kit).slice()
    .sort((a, b) => Math.sqrt(b.range.lowHz * b.range.highHz) - Math.sqrt(a.range.lowHz * a.range.highHz));
  const drumInst = INST.drums;
  function drawSpectrum() {
    const host = $("spectrum");
    const W = Math.max(680, host.clientWidth), labelW = W < 760 ? 112 : 170, padR = 16;
    const rowH = 25, keysH = 26, top = 34 + keysH + 8;
    const rows = ORDER.length + (drumInst && drumInst.kit ? 1 : 0);
    const plotH = rows * rowH, H = top + plotH + 54;
    const x0 = labelW, w = W - labelW - padR;
    const X = (f) => lx(f, x0, w);
    let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-label="Instrument ranges on the hearing spectrum">`;
    // Landmarks (behind).
    for (const lm of (SEC.hearing && SEC.hearing.landmarks) || []) {
      if (lm.kind === "band" && lm.toHz) svg += `<rect class="lm-band" x="${X(lm.hz)}" y="${top - 6}" width="${X(lm.toHz) - X(lm.hz)}" height="${plotH + 12}"><title>${esc(lm.label)}</title></rect>`;
    }
    // Octave grid + Hz labels.
    for (const f of [20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]) {
      svg += `<line class="grid" x1="${X(f)}" x2="${X(f)}" y1="${top - 6}" y2="${top + plotH + 6}"/><text class="axis" x="${X(f)}" y="${top + plotH + 22}" text-anchor="middle">${fmtHz(f)}</text>`;
    }
    // Piano keyboard (A0–C8): on a log axis every key is the same width.
    for (let m = 21; m <= 108; m++) {
      const blk = [1, 3, 6, 8, 10].includes(m % 12);
      const xa = X(SP.hz(m - 0.5)), xb = X(SP.hz(m + 0.5));
      svg += `<rect class="key ${blk ? "blk" : "wht"}" data-midi="${m}" x="${xa}" y="${blk ? 34 : 34}" width="${Math.max(0.5, xb - xa - 0.4)}" height="${blk ? keysH * 0.62 : keysH}"/>`;
      if (m % 12 === 0) svg += `<text class="axis" x="${(xa + xb) / 2}" y="28" text-anchor="middle">C${m / 12 - 1}</text>`;
    }
    // Rows.
    ORDER.forEach((ins, i) => {
      const y = top + i * rowH + rowH / 2, r = ins.range;
      svg += `<g class="srow" data-id="${ins.id}" tabindex="0" role="button" aria-label="${esc(ins.name)}">
        <rect class="hit" x="0" y="${y - rowH / 2}" width="${W}" height="${rowH}"/>
        <text class="rname" x="${labelW - 10}" y="${y + 4}" text-anchor="end">${esc(shortName(ins.name))}</text>
        ${ins.overtonesTo ? `<line class="ovt" x1="${X(r.highHz)}" x2="${X(Math.min(F1, ins.overtonesTo))}" y1="${y}" y2="${y}"/>` : ""}
        <rect class="fund" x="${X(r.lowHz)}" y="${y - 5}" width="${Math.max(3, X(r.highHz) - X(r.lowHz))}" height="10" rx="4"/>
        <circle class="now" cx="-20" cy="${y}" r="5"/>
      </g>`;
    });
    if (drumInst && drumInst.kit) {
      const y = top + ORDER.length * rowH + rowH / 2;
      svg += `<g class="srow drums" data-id="drums"><rect class="hit" x="0" y="${y - rowH / 2}" width="${W}" height="${rowH}"/>
        <text class="rname" x="${labelW - 10}" y="${y + 4}" text-anchor="end">${esc(shortName(drumInst.name))}</text>
        ${drumInst.kit.filter((k) => k.bandHz).map((k, j) => `<rect class="kitband" data-piece="${esc(k.id)}" x="${X(k.bandHz[0])}" y="${y - 7 + (j % 2) * 7}" width="${X(k.bandHz[1]) - X(k.bandHz[0])}" height="6" rx="3"><title>${esc(k.name)}: ${fmtHz(k.bandHz[0])}–${fmtHz(k.bandHz[1])}</title></rect>`).join("")}
      </g>`;
    }
    // Landmark labels (bottom).
    let ly = top + plotH + 40;
    for (const lm of (SEC.hearing && SEC.hearing.landmarks) || []) {
      const xx = lm.kind === "band" && lm.toHz ? (X(lm.hz) + X(lm.toHz)) / 2 : X(lm.hz);
      if (lm.kind !== "band") svg += `<line class="lm-pt" x1="${xx}" x2="${xx}" y1="${top - 6}" y2="${top + plotH + 6}"/>`;
    }
    svg += `<text class="axis strong" x="${x0}" y="${ly}">Hover the shaded bands and lines for hearing landmarks</text>`;
    svg += `</svg>`;
    host.innerHTML = `<div class="spec-stack"><canvas class="live"></canvas>${svg}</div>`;
    const canvas = host.querySelector("canvas");
    views.splice(0, views.length, ...views.filter((v) => v.canvas.isConnected));
    views.push({ canvas, x0, w, top: top - 6, h: plotH + 12 });
    // Landmark tooltips.
    host.querySelectorAll(".lm-band, .lm-pt").forEach((el, i) => {
      const lms = ((SEC.hearing && SEC.hearing.landmarks) || []);
      const bands = lms.filter((l) => l.kind === "band" && l.toHz), pts = lms.filter((l) => l.kind !== "band");
      const lm = el.classList.contains("lm-band") ? bands[[...host.querySelectorAll(".lm-band")].indexOf(el)] : pts[[...host.querySelectorAll(".lm-pt")].indexOf(el)];
      if (!lm) return;
      el.addEventListener("mouseenter", (e) => showTip(`<b>${esc(lm.label)}</b><span>${fmtHz(lm.hz)}${lm.toHz ? " – " + fmtHz(lm.toHz) : ""}</span>`, e));
      el.addEventListener("mouseleave", () => tip.classList.remove("show"));
    });
  }
  function markNow(id, m) {
    const row = document.querySelector(`#spectrum .srow[data-id="${id}"]`); if (!row) return;
    const dot = row.querySelector(".now");
    const svg = row.ownerSVGElement, W = svg.viewBox.baseVal.width;
    const labelW = W < 760 ? 112 : 170;
    dot.setAttribute("cx", lx(SP.hz(m), labelW, W - labelW - 16));
    dot.classList.add("on"); setTimeout(() => dot.classList.remove("on"), 900);
    document.querySelectorAll(`#spectrum .key.on`).forEach((k) => k.classList.remove("on"));
    const key = document.querySelector(`#spectrum .key[data-midi="${m}"]`); if (key) { key.classList.add("on"); setTimeout(() => key.classList.remove("on"), 900); }
  }
  async function playRegisters(id) {
    pauseMusic(); window.__voicesAudio = true;
    const r = SP.range(id); if (!r) return;
    const ms = [r[0] + 2, Math.round((r[0] + r[1]) / 2), r[1] - 2];
    for (let i = 0; i < ms.length; i++) {
      setTimeout(() => { SP.note(id, ms[i], { dur: 0.9 }); markNow(id, ms[i]); poke(1.6); }, i * 950);
    }
  }
  $("spectrum").addEventListener("click", (e) => {
    const row = e.target.closest(".srow"); if (!row) return;
    if (row.dataset.id === "drums") { const b = e.target.closest(".kitband"); kitDemo(b && b.dataset.piece); return; }
    playRegisters(row.dataset.id);
  });
  $("spectrum").addEventListener("mouseover", (e) => {
    const row = e.target.closest(".srow"); if (!row || row.dataset.id === "drums") return;
    const ins = INST[row.dataset.id], r = ins.range;
    showTip(`<b>${esc(ins.name)}</b><span>${esc(r.low)}–${esc(r.high)} · ${fmtHz(r.lowHz)}–${fmtHz(r.highHz)}</span>${ins.overtonesTo ? `<em>overtones to ~${fmtHz(ins.overtonesTo)}</em>` : ""}<em>${SP.has(ins.id) ? "Click to hear low, middle and high" : "No recording available"}</em>`, e);
  });
  $("spectrum").addEventListener("mouseout", (e) => { if (e.target.closest(".srow")) tip.classList.remove("show"); });
  function kitDemo(piece) {
    pauseMusic(); window.__voicesAudio = true;
    const pieces = piece ? [piece] : ["kick", "snare", "hihat-closed", "ride"];
    pieces.forEach((p, i) => setTimeout(() => { SP.hit(mapKit(p)); poke(1.4); }, i * 420));
  }
  const mapKit = (p) => ({ hihat: "hihat-closed", "hi-hat": "hihat-closed", snare: "snare", kick: "kick", ride: "ride", brush: "snare-brush" }[p] || p);

  function renderAcoustics() {
    const a = SEC.acoustics, h = SEC.hearing;
    $("acoustics").innerHTML = (a ? `<div><h3>${esc(a.title)}</h3>${paras(a.paragraphs, "acou")}${sourcesList(a.sources, "acou")}</div>` : "")
      + (h ? `<div><h3>${esc(h.title)}</h3>${paras(h.paragraphs, "hear")}${sourcesList(h.sources, "hear")}</div>` : "");
  }

  // ---------- Part two: instrument studio ----------
  let current = null, currentNote = null;
  function renderGrid() {
    $("inst-grid").innerHTML = V.instruments.map((ins) => `<button class="inst-card ${ins.id === current ? "on" : ""}" data-id="${ins.id}" role="tab">
      <b>${esc(ins.name)}</b><small>${esc(ins.family || "")}${ins.range ? ` · ${esc(ins.range.low)}–${esc(ins.range.high)}` : ""}</small>${SP.has(ins.id) ? "" : `<em>no recording</em>`}</button>`).join("");
  }
  $("inst-grid").addEventListener("click", (e) => { const b = e.target.closest(".inst-card"); if (b) selectInst(b.dataset.id, true); });

  function keyboardHTML(id) {
    const r = SP.range(id) || (INST[id].range ? [SP.midi(INST[id].range.low), SP.midi(INST[id].range.high)] : null);
    if (!r) return "";
    let html = `<div class="kb" role="group" aria-label="Play a note">`;
    for (let m = r[0]; m <= r[1]; m++) {
      const blk = [1, 3, 6, 8, 10].includes(m % 12);
      html += `<button class="k ${blk ? "b" : "w"} ${m === currentNote ? "on" : ""}" data-m="${m}" title="${SP.nameOf(m)} · ${fmtHz(SP.hz(m))}">${m % 12 === 0 ? `<i>${SP.nameOf(m)}</i>` : ""}</button>`;
    }
    return html + `</div>`;
  }
  function selectInst(id, play) {
    current = id; renderGrid();
    const ins = INST[id], px = "inst-" + id;
    const r = SP.range(id);
    // Default to the recorded note nearest the middle of the range, so analysis and playback use an unshifted sample.
    const rec = SP.sampledNotes(id);
    currentNote = rec.length ? rec.reduce((b, x) => (Math.abs(x.m - (r[0] + r[1]) / 2) < Math.abs(b.m - (r[0] + r[1]) / 2) ? x : b)).m : null;
    const kit = ins.kit || [];
    $("inst-detail").innerHTML = `<article class="inst-panel">
      <header><h3>${esc(ins.name)}</h3>
        <div class="chips-row">${ins.production ? `<span class="tag">Exciter: ${esc(ins.production.exciter || "")}</span><span class="tag">Resonator: ${esc(ins.production.resonator || "")}</span>` : ""}${ins.range ? `<span class="tag">${esc(ins.range.low)}–${esc(ins.range.high)} · ${fmtHz(ins.range.lowHz)}–${fmtHz(ins.range.highHz)}</span>` : ""}</div>
      </header>
      ${id === "drums" ? `<div class="kit-row">${kit.map((k) => `<button class="kit-btn" data-piece="${esc(k.id)}"><b>${esc(k.name)}</b>${k.bandHz ? `<small>${fmtHz(k.bandHz[0])}–${fmtHz(k.bandHz[1])}</small>` : ""}</button>`).join("")}</div>
        <div class="kit-text">${kit.map((k) => `<p><b>${esc(k.name)}.</b> ${fn(k.text || "", px)}</p>`).join("")}</div>`
      : `${SP.has(id) ? keyboardHTML(id) : `<p class="muted">No free-license recording of this instrument was available, so it can't be played here.</p>`}
        <div class="analysis">
          <div class="an-col"><h4>Harmonic fingerprint <span class="an-note"></span></h4><div class="harm"></div><p class="an-cap">Strength of each partial (harmonic) relative to the strongest, measured from the recording. The pattern is a large part of what makes the instrument sound like itself.</p></div>
          <div class="an-col"><h4>Envelope</h4><div class="env"></div><p class="an-cap">Loudness over the life of the note: how fast it speaks, how it sustains and how it dies away.</p></div>
        </div>`}
      ${recLine(id)}
      <div class="inst-text">
        <div><h4>How it makes a note</h4><p>${fn(ins.production ? ins.production.text : "", px)}</p>
          <h4>Timbre</h4><p>${fn(ins.timbre || "", px)}</p>
          <h4>Attack and decay</h4><p>${fn(ins.envelope || "", px)}</p>
          <h4>Role in the band</h4><p>${fn(ins.role || "", px)}</p></div>
        <div><h4>Emotion and story</h4>${paras(ins.emotion, px)}
          ${ins.exemplars && ins.exemplars.length ? `<h4>Listen for it</h4><ul class="exemplars">${ins.exemplars.map((x) => `<li>${artistName[x.artistId] ? `<a href="./#${esc(x.artistId)}">${esc(artistName[x.artistId])}</a> — ` : ""}${esc(x.text)}</li>`).join("")}</ul>` : ""}</div>
      </div>
      ${sourcesList(ins.sources, px)}
    </article>`;
    if (SP.has(id) && id !== "drums") { updateAnalysis(); if (play) playCurrent(); }
  }
  function recLine(id) {
    const src = SAMP[id] && SAMP[id].source; if (!src) return "";
    return `<p class="rec-src">Recording: ${esc(src.name || "")}${src.detail ? ` — ${esc(src.detail)}` : ""} · ${esc(src.license || "")}${src.url ? ` <a href="${esc(src.url)}" target="_blank" rel="noopener">↗</a>` : ""}</p>`;
  }
  function playCurrent() {
    if (currentNote == null) return;
    pauseMusic(); window.__voicesAudio = true;
    SP.note(current, currentNote, { dur: 1.6 }); markNow(current, currentNote); poke(2.2);
  }
  async function updateAnalysis() {
    const id = current, m = currentNote;
    const an = await SP.analyse(id, SP.nameOf(m));
    if (!an || id !== current) return;
    const panel = $("inst-detail");
    panel.querySelector(".an-note").textContent = `· measured on ${an.sampled} (${fmtHz(an.f0)}) · spectral centroid ${fmtHz(an.centroid)}`;
    const W = 360, H = 150, n = an.partials.length, bw = W / n;
    panel.querySelector(".harm").innerHTML = `<svg viewBox="0 0 ${W} ${H + 18}" width="100%" role="img" aria-label="Harmonic amplitudes">
      ${[0, -20, -40, -60].map((d) => `<line class="grid" x1="0" x2="${W}" y1="${(-d / 60) * H}" y2="${(-d / 60) * H}"/><text class="axis" x="${W}" y="${(-d / 60) * H - 2}" text-anchor="end">${d} dB</text>`).join("")}
      ${an.partials.map((p, i) => { const h = ((p.db + 60) / 60) * H; return `<rect class="hbar" data-i="${i}" x="${i * bw + 2}" y="${H - h}" width="${bw - 4}" height="${Math.max(1, h)}" rx="2"><title>Partial ${p.h} · ${fmtHz(p.f)} · ${p.db.toFixed(1)} dB</title></rect><text class="axis" x="${i * bw + bw / 2}" y="${H + 14}" text-anchor="middle">${p.h}</text>`; }).join("")}
    </svg>`;
    const env = an.envelope, dur = an.duration, EW = 360, EH = 120;
    const step = Math.max(1, Math.floor(env.length / 180));
    let d = `M0,${EH}`; for (let i = 0; i < env.length; i += step) d += `L${((i / env.length) * EW).toFixed(1)},${(EH - env[i] * EH).toFixed(1)}`;
    d += `L${EW},${EH}Z`;
    panel.querySelector(".env").innerHTML = `<svg viewBox="0 0 ${EW} ${EH + 18}" width="100%" role="img" aria-label="Amplitude envelope">
      <path class="envpath" d="${d}"/>${[0, 0.5, 1, 1.5, 2, 2.5].filter((t) => t < dur).map((t) => `<text class="axis" x="${(t / dur) * EW}" y="${EH + 14}">${t}s</text>`).join("")}</svg>`;
  }
  $("inst-detail").addEventListener("click", (e) => {
    const k = e.target.closest(".k"); if (k) { currentNote = +k.dataset.m; document.querySelectorAll("#inst-detail .k.on").forEach((x) => x.classList.remove("on")); k.classList.add("on"); playCurrent(); updateAnalysis(); return; }
    const kb = e.target.closest(".kit-btn"); if (kb) { kitDemo(kb.dataset.piece); }
  });

  // ---------- Part three: conjoining voices (chord mixer) ----------
  let voicing = null; const muted = new Set();
  function renderConjoin() {
    const s = SEC.voicings; if (!s) { $("conjoin").innerHTML = ""; return; }
    const items = s.items || [];
    if (!voicing && items.length) voicing = items[0].id;
    const v = items.find((x) => x.id === voicing) || items[0];
    const px = "voi";
    const voices = (v.voices || []).slice().sort((a, b) => SP.midi(b.note) - SP.midi(a.note));
    // Colour follows the instrument (never cycled): one slot per distinct instrument, in order of appearance.
    const instOrder = [...new Set(voices.map((x) => x.instrument))];
    const slot = (vc) => pal()[instOrder.indexOf(vc.instrument) % pal().length];
    const STATUS = { documented: "Pitches documented", textbook: "Textbook voicing", illustrative: "Illustrative pitches" };
    $("conjoin").innerHTML = `<p class="era-ov">${fn(s.lead || "", px)}</p>
      <div class="mixer">
        <div class="presets">${items.map((x) => `<button class="${x.id === v.id ? "on" : ""}" data-v="${esc(x.id)}"><b>${esc(x.title)}</b><small>${esc(x.context || "")}</small></button>`).join("")}</div>
        <div class="mix-main">
          <h3>${esc(v.title)}</h3><div class="ctx">${esc(v.context || "")}${v.pitchStatus ? ` <span class="pstatus ${esc(v.pitchStatus)}" title="${esc(v.pitchStatusNote || "")}">${esc(STATUS[v.pitchStatus] || v.pitchStatus)}</span>` : ""}</div>
          <p>${fn(v.text || "", px)}</p>
          <div class="voices">${voices.map((vc, i) => `<div class="vrow ${muted.has(i) ? "off" : ""}" data-i="${i}" style="--c:${slot(vc)}">
              <button class="vtoggle" data-i="${i}" aria-pressed="${!muted.has(i)}" title="Mute / unmute">${muted.has(i) ? "○" : "●"}</button>
              <span class="vinst">${esc(nameOfInst(vc.instrument))}</span>
              <span class="vnote">${esc(vc.note)}${vc.label ? ` <em>${esc(vc.label)}</em>` : ""}</span>
              <span class="vhz">${fmtHz(SP.hz(vc.note))}</span>
              ${SP.has(vc.instrument) ? "" : `<span class="vmiss">no recording</span>`}
            </div>`).join("")}</div>
          <div class="strip-wrap"><canvas class="live"></canvas><div class="strip"></div></div>
          <div class="actions">
            <button class="demo" data-act="block"><span class="ic">▶</span>Play the chord</button>
            <button class="secondary small" data-act="arp">Arpeggiate, low to high</button>
            <button class="secondary small" data-act="each">Each voice alone</button>
          </div>
          ${(v.artistIds || []).length || (v.pieceIds || []).length ? `<div class="link-chips">${(v.artistIds || []).filter((a) => artistName[a]).map((a) => `<a class="link-chip" href="./#${a}">${esc(artistName[a])}</a>`).join("")}${(v.pieceIds || []).filter((p) => pieceTitle[p]).map((p) => `<a class="link-chip piece" href="notes.html#${p}">♪ ${esc(pieceTitle[p])}</a>`).join("")}</div>` : ""}
        </div>
      </div>
      ${sourcesList(s.sources, px)}`;
    // Harmonic strip: each voice's fundamental and first harmonics on the log axis, directly labelled.
    const host = $("conjoin").querySelector(".strip"), W = Math.max(520, host.clientWidth || 700), rowH = 22, H = voices.length * rowH + 30;
    const x0 = 8, w = W - 16, X = (f) => lx(f, x0, w);
    let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}">`;
    for (const f of [50, 100, 200, 500, 1000, 2000, 5000, 10000]) svg += `<line class="grid" x1="${X(f)}" x2="${X(f)}" y1="0" y2="${H - 20}"/><text class="axis" x="${X(f)}" y="${H - 6}" text-anchor="middle">${fmtHz(f)}</text>`;
    voices.forEach((vc, i) => {
      const y = i * rowH + 12, f0 = SP.hz(vc.note), c = slot(vc);
      svg += `<g class="${muted.has(i) ? "off" : ""}" style="--c:${c}">`;
      for (let h = 1; h <= 10; h++) { const f = f0 * h; if (f > F1) break; svg += `<line class="harmtick" x1="${X(f)}" x2="${X(f)}" y1="${y - (h === 1 ? 8 : 5)}" y2="${y + (h === 1 ? 8 : 5)}" style="opacity:${h === 1 ? 1 : 0.85 - h * 0.06}"/>`; }
      svg += `<text class="slab" x="${X(f0) - 6}" y="${y + 4}" text-anchor="end">${esc(nameOfInst(vc.instrument))} ${esc(vc.note)}</text></g>`;
    });
    host.innerHTML = svg + `</svg>`;
    const cv = $("conjoin").querySelector("canvas.live");
    views.splice(0, views.length, ...views.filter((x) => x.canvas.isConnected));
    views.push({ canvas: cv, x0, w, top: 0, h: H - 20 });
    $("conjoin").dataset.ready = "1";
    $("conjoin")._voices = voices;
  }
  $("conjoin").addEventListener("click", (e) => {
    const p = e.target.closest("[data-v]"); if (p) { voicing = p.dataset.v; muted.clear(); renderConjoin(); return; }
    const t = e.target.closest(".vtoggle"); if (t) { const i = +t.dataset.i; muted.has(i) ? muted.delete(i) : muted.add(i); renderConjoin(); return; }
    const a = e.target.closest("[data-act]"); if (!a) return;
    pauseMusic(); window.__voicesAudio = true;
    const voices = $("conjoin")._voices || [];
    const live = voices.map((v, i) => ({ v, i })).filter((x) => !muted.has(x.i));
    if (a.dataset.act === "block") live.forEach(({ v }) => SP.note(v.instrument, v.note, { dur: 2.2, gain: 0.7 }));
    if (a.dataset.act === "arp") live.slice().reverse().forEach(({ v }, k) => SP.note(v.instrument, v.note, { when: k * 0.45, dur: 2.4 - k * 0.3, gain: 0.7 }));
    if (a.dataset.act === "each") live.slice().reverse().forEach(({ v }, k) => SP.note(v.instrument, v.note, { when: k * 1.0, dur: 0.9, gain: 0.75 }));
    poke(a.dataset.act === "block" ? 3 : 2 + live.length);
  });

  // ---------- Part four: groove ----------
  const PARTS = [
    { key: "ride", label: "Ride cymbal", inst: "drums" },
    { key: "hihat", label: "Hi-hat (2 & 4)", inst: "drums" },
    { key: "kick", label: "Bass drum", inst: "drums" },
    { key: "bass", label: "Walking bass", inst: "bass-pizz" },
    { key: "piano", label: "Piano comping", inst: "piano" },
    { key: "melody", label: "Melody", inst: "tenor-sax" },
  ];
  const gMuted = new Set();
  let gTimer = null, gStart = 0, gNext = 0, gBpm = 150;
  function renderGroove() {
    const s = SEC.groove; if (!s) { $("groove").innerHTML = ""; return; }
    const pat = s.pattern || {};
    if (pat.bpm && !gTimer) gBpm = pat.bpm;
    const colors = pal();
    const melInst = pat.melodyInstrument || "tenor-sax";
    PARTS.find((p) => p.key === "melody").inst = melInst;
    $("groove").innerHTML = `<div class="two-text">${paras(s.paragraphs, "grv")}</div>
      <div class="groove-box">
        <div class="transport">
          <button class="demo" id="g-play"><span class="ic">${gTimer ? "■" : "▶"}</span>${gTimer ? "Stop" : "Play the band"}</button>
          <label class="tempo">Tempo <input type="range" id="g-bpm" min="90" max="240" value="${gBpm}"> <b id="g-bpm-v">${gBpm}</b> bpm</label>
        </div>
        <div class="parts">${PARTS.map((p, i) => `<button class="part ${gMuted.has(p.key) ? "off" : ""}" data-part="${p.key}" style="--c:${colors[i]}" aria-pressed="${!gMuted.has(p.key)}"><i></i>${esc(p.label)}<small>${esc(nameOfInst(p.inst))}</small></button>`).join("")}</div>
        <div class="chord-grid">${(pat.chords || []).map((c, i) => `<span data-bar="${i}">${esc(c)}</span>`).join("")}</div>
        <div class="strip-wrap"><canvas class="live"></canvas><div class="gstrip"></div></div>
        <p class="chart-note">An original 12-bar blues in ${esc(pat.key || "F")}, written for this page. Mute parts to hear what each contributes; the coloured bands show the frequency region each part's fundamentals occupy.</p>
      </div>
      ${sourcesList(s.sources, "grv")}`;
    // Band strip.
    const host = $("groove").querySelector(".gstrip"), W = Math.max(520, host.clientWidth || 700), rowH = 18, H = PARTS.length * rowH + 30;
    const x0 = 8, w = W - 16, X = (f) => lx(f, x0, w);
    const kit = (INST.drums && INST.drums.kit) || [];
    const band = (p) => {
      if (p.inst === "drums") { const k = kit.find((k) => k.id === p.key || (p.key === "hihat" && /hat/.test(k.id)) || (p.key === "kick" && /kick|bass/.test(k.id))); return k && k.bandHz; }
      const notes = (pat.parts && pat.parts[p.key]) || [];
      const ms = notes.flatMap((e) => (e.notes || [e.note]).filter(Boolean).map(SP.midi));
      return ms.length ? [SP.hz(Math.min(...ms)), SP.hz(Math.max(...ms))] : null;
    };
    let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}">`;
    for (const f of [50, 100, 200, 500, 1000, 2000, 5000, 10000]) svg += `<line class="grid" x1="${X(f)}" x2="${X(f)}" y1="0" y2="${H - 20}"/><text class="axis" x="${X(f)}" y="${H - 6}" text-anchor="middle">${fmtHz(f)}</text>`;
    PARTS.forEach((p, i) => {
      const b = band(p); if (!b) return;
      const y = i * rowH + 10;
      const right = X(b[1]) + 6 + p.label.length * 7 < W;   // label after the band if it fits, otherwise before it
      svg += `<g class="${gMuted.has(p.key) ? "off" : ""}" style="--c:${colors[i]}"><rect class="gband" x="${X(b[0])}" y="${y - 5}" width="${Math.max(4, X(b[1]) - X(b[0]))}" height="10" rx="4"/><text class="slab" x="${right ? X(b[1]) + 6 : X(b[0]) - 6}" y="${y + 4}" text-anchor="${right ? "start" : "end"}">${esc(p.label)}</text></g>`;
    });
    host.innerHTML = svg + `</svg>`;
    views.splice(0, views.length, ...views.filter((x) => x.canvas.isConnected));
    views.push({ canvas: $("groove").querySelector("canvas.live"), x0, w, top: 0, h: H - 20 });
  }
  function grooveStart() {
    const pat = SEC.groove && SEC.groove.pattern; if (!pat) return;
    pauseMusic(); window.__voicesAudio = true;
    PARTS.forEach((p) => SP.setMute("g-" + p.key, gMuted.has(p.key)));
    ["drums", "bass-pizz", "piano", PARTS[5].inst].forEach((i) => SP.preload(i));
    const total = (pat.bars || 12) * 4;
    gStart = SP.now() + 0.15; gNext = 0;
    const sw = pat.swing || 0.66;
    // Swing: events written on the 8th-note grid (x.5) are delayed to the swing position.
    const swingT = (t) => { const b = Math.floor(t), f = t - b; return Math.abs(f - 0.5) < 0.01 ? b + sw : t; };
    const events = [];
    const P = pat.parts || {};
    (P.ride || []).forEach((t) => events.push({ t, part: "ride", hit: "ride" }));
    (P.hihat || []).forEach((t) => events.push({ t, part: "hihat", hit: "hihat-foot" }));
    (P.kick || []).forEach((t) => events.push({ t, part: "kick", hit: "kick", g: 0.35 }));
    (P.bass || []).forEach((e) => events.push({ t: e.t, part: "bass", inst: "bass-pizz", notes: [e.note], d: e.d }));
    (P.piano || []).forEach((e) => events.push({ t: e.t, part: "piano", inst: "piano", notes: e.notes || [e.note], d: e.d, g: 0.45 }));
    (P.melody || []).forEach((e) => events.push({ t: e.t, part: "melody", inst: PARTS[5].inst, notes: [e.note], d: e.d, g: 0.7 }));
    events.forEach((e) => (e.t = swingT(e.t)));
    events.sort((a, b) => a.t - b.t);
    let idx = 0, loop = 0;
    const tick = () => {
      const spb = 60 / gBpm, now = SP.now(), horizon = now + 0.25;
      while (true) {
        if (idx >= events.length) { idx = 0; loop++; }
        const e = events[idx];
        const at = gStart + (loop * total + e.t) * spb;
        if (at > horizon) break;
        const when = Math.max(0, at - now);
        if (e.hit) SP.hit(e.hit, { when, gain: e.g || (e.part === "ride" ? 0.5 : 0.6), busKey: "g-" + e.part });
        else e.notes.forEach((n) => SP.note(e.inst, n, { when, dur: Math.max(0.15, (e.d || 1) * spb * 0.95), gain: e.g || 0.7, busKey: "g-" + e.part }));
        idx++;
      }
      const beat = ((now - gStart) / spb) % total;
      const bar = Math.floor(beat / 4);
      $("groove").querySelectorAll(".chord-grid span").forEach((s) => s.classList.toggle("on", +s.dataset.bar === bar));
      poke(0.5);
    };
    gTimer = setInterval(tick, 40); tick();
    renderGrooveButton();
  }
  function grooveStop() { clearInterval(gTimer); gTimer = null; SP.stopAll(); renderGrooveButton(); $("groove").querySelectorAll(".chord-grid span.on").forEach((s) => s.classList.remove("on")); }
  function renderGrooveButton() { const b = $("g-play"); if (b) b.innerHTML = `<span class="ic">${gTimer ? "■" : "▶"}</span>${gTimer ? "Stop" : "Play the band"}`; }
  $("groove").addEventListener("click", (e) => {
    if (e.target.closest("#g-play")) { gTimer ? grooveStop() : grooveStart(); return; }
    const p = e.target.closest(".part"); if (!p) return;
    const k = p.dataset.part; gMuted.has(k) ? gMuted.delete(k) : gMuted.add(k);
    SP.setMute("g-" + k, gMuted.has(k));
    p.classList.toggle("off", gMuted.has(k)); p.setAttribute("aria-pressed", !gMuted.has(k));
    const i = PARTS.findIndex((x) => x.key === k);
    const g = $("groove").querySelectorAll(".gstrip g")[i]; if (g) g.classList.toggle("off", gMuted.has(k));
  });
  $("groove").addEventListener("input", (e) => { if (e.target.id === "g-bpm") { gBpm = +e.target.value; $("g-bpm-v").textContent = gBpm; } });
  // Keep the music player from fighting the groove.
  window.addEventListener("jft-track", (e) => { if (e.detail.playing && gTimer) grooveStop(); });

  // ---------- Part five: emotion ----------
  function renderEmotion() {
    const s = SEC.emotion; if (!s) { $("emotion").innerHTML = ""; return; }
    $("emotion").innerHTML = `<div class="two-text">${paras(s.paragraphs, "emo")}</div>
      ${s.melodyDemo && s.castings ? `<div class="castings"><h3>One melody, many voices</h3><p class="muted">The same original eight-bar phrase, cast for different instruments and registers.</p>
        <div class="cast-grid">${s.castings.map((c, i) => `<button class="cast" data-i="${i}"><span class="ic">▶</span><b>${esc(c.label)}</b><small>${esc(nameOfInst(c.instrument))}${c.octaveShift ? ` · ${c.octaveShift > 0 ? "+" : ""}${c.octaveShift} octave` : ""}</small><span class="ct">${fn(c.text || "", "emo")}</span></button>`).join("")}</div></div>` : ""}
      ${sourcesList(s.sources, "emo")}`;
  }
  $("emotion").addEventListener("click", (e) => {
    const b = e.target.closest(".cast"); if (!b || e.target.closest("a")) return;
    const s = SEC.emotion, c = s.castings[+b.dataset.i];
    pauseMusic(); window.__voicesAudio = true; SP.stopAll();
    $("emotion").querySelectorAll(".cast.on").forEach((x) => x.classList.remove("on")); b.classList.add("on");
    const spb = 60 / (s.melodyBpm || 96);
    let end = 0;
    for (const n of s.melodyDemo) {
      const m = SP.midi(n.note) + 12 * (c.octaveShift || 0);
      SP.note(c.instrument, m, { when: n.t * spb, dur: Math.max(0.15, n.d * spb * 0.98), gain: 0.75 });
      end = Math.max(end, (n.t + n.d) * spb);
    }
    poke(end + 1);
    setTimeout(() => b.classList.remove("on"), (end + 0.5) * 1000);
  });

  // ---------- Credits & bibliography ----------
  function renderCredits() {
    const rows = Object.entries(SAMP).map(([id, s]) => {
      if (s.sources) return Object.entries(s.sources).map(([k, src]) => `<li><b>${esc(nameOfInst(id))} — ${esc(k)}</b>: ${esc(src.name || "")}${src.author ? `, ${esc(src.author)}` : ""} · ${esc(src.license || "")}${src.url ? ` <a href="${esc(src.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("");
      const src = s.source || {};
      return `<li><b>${esc(nameOfInst(id))}</b>: ${esc(src.name || "")}${src.detail ? ` (${esc(src.detail)})` : ""}${src.author ? `, ${esc(src.author)}` : ""} · ${esc(src.license || "")}${src.url ? ` <a href="${esc(src.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`;
    }).join("");
    $("sample-credits").innerHTML = rows ? `<h3>Recordings</h3><ul class="credits">${rows}</ul>` : "";
    const bib = new Map();
    const all = [...V.instruments.flatMap((i) => i.sources || []), ...Object.values(SEC).flatMap((s) => s.sources || [])];
    for (const s0 of all) { const s = normSrc(s0); const key = s.cite.replace(/,?\s*(pp?\.|ch\.|chapter)\s.*$/i, "").trim(); if (!bib.has(key)) bib.set(key, s.url || ""); }
    $("bibliography").innerHTML = `<h3>Bibliography</h3><ul>${[...bib.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([c, u]) => `<li>${esc(c)}${u ? ` <a href="${esc(u)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ul>`;
  }

  // ---------- Section index ----------
  const idx = $("era-index");
  const entries = [["spectrum-sec", "I", "Hearing spectrum"], ["studio-sec", "II", "Instruments"], ["conjoin-sec", "III", "Conjoining"], ["groove-sec", "IV", "Rhythm & melody"], ["emotion-sec", "V", "Emotion"]];
  idx.innerHTML = entries.map(([id, n, l]) => `<a href="#${id}" data-era="${id}"><i>${n}</i><span>${esc(l)}</span></a>`).join("");
  const obs = new IntersectionObserver((ens) => { for (const en of ens) if (en.isIntersecting) idx.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.era === en.target.id)); }, { rootMargin: "-40% 0px -55% 0px" });
  entries.forEach(([id]) => obs.observe($(id)));

  function renderAll() {
    drawSpectrum(); renderAcoustics(); renderGrid();
    if (current) selectInst(current, false);
    renderConjoin(); renderGroove(); renderEmotion(); renderCredits();
  }
  current = (V.instruments.find((i) => i.id === "tenor-sax" && SP.has("tenor-sax")) || V.instruments.find((i) => SP.has(i.id)) || V.instruments[0] || {}).id;
  renderAll();
  // Debug/screenshot hook: ?solo=<section id> shows only that section.
  const solo = new URLSearchParams(location.search).get("solo");
  if (solo) document.querySelectorAll(".hero, .vsec, .colophon").forEach((el) => { if (el.id !== solo) el.style.display = "none"; });
  let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { drawSpectrum(); renderConjoin(); renderGroove(); }, 150); });
})();
