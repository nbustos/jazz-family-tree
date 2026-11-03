/* Notes on Notes — renders the staff infographic, the throughline essays, and the era-by-era analyses. */
(function () {
  const N = window.NOTES;
  const J = window.JAZZ || { eras: [], artists: [] };
  const artistName = Object.fromEntries((J.artists || []).map((a) => [a.id, a.name]));
  const TL = N.throughlines;
  const tlById = Object.fromEntries(TL.map((t) => [t.id, t]));
  const ERA_SHORT = { roots: "Roots", "jazz-age": "Jazz Age", swing: "Swing", bebop: "Bebop", postbop: "Cool & Hard Bop", "modal-free": "Modal & Free", fusion: "Fusion", neo: "Neo-Trad & Downtown", modern: "Modern", today: "Today" };
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const eras = J.eras.length ? J.eras : Object.keys(ERA_SHORT).map((id) => ({ id, name: ERA_SHORT[id], years: [0, 0] }));
  const when = (p) => p.composed || p.year;   // staff placement: when the piece was written
  const pieces = N.pieces.slice().sort((a, b) => eras.findIndex((e) => e.id === a.era) - eras.findIndex((e) => e.id === b.era) || when(a) - when(b));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);

  // ---------- Theme ----------
  const setTheme = (t) => { document.body.dataset.theme = t; document.documentElement.dataset.theme = t; localStorage.setItem("jft-theme", t); };
  setTheme(localStorage.getItem("jft-theme") || "night");
  $("btn-theme").addEventListener("click", () => setTheme(document.body.dataset.theme === "night" ? "paper" : "night"));

  // ---------- Staff ----------
  const tip = $("note-tip");
  let focusThread = null;

  function drawStaff() {
    const host = $("staff");
    const W = Math.max(640, host.clientWidth), labelW = W < 760 ? 120 : 190, padR = 26;
    const gap = W < 760 ? 30 : 36, top = 58, H = top + gap * 4 + 70;
    const y0 = 1893, y1 = 2028;
    const X = (yr) => labelW + ((yr - y0) / (y1 - y0)) * (W - labelW - padR);
    const lineY = (i) => top + i * gap;
    const bounds = [1895, 1917, 1930, 1940, 1949, 1959, 1969, 1980, 1995, 2010, 2026];
    let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-label="Throughlines staff">`;
    // Era bar lines and labels.
    bounds.forEach((b, i) => {
      const x = X(b);
      svg += `<line class="barline" x1="${x}" x2="${x}" y1="${lineY(0)}" y2="${lineY(4)}"/>`;
      if (i < bounds.length - 1) {
        const e = eras[i], mid = (x + X(bounds[i + 1])) / 2, wd = X(bounds[i + 1]) - x;
        if (e) svg += `<a href="#era-${e.id}"><text class="era-lab" x="${mid}" y="${top - 26}" text-anchor="middle">${esc(wd > ERA_SHORT[e.id].length * 7.6 + 8 ? ERA_SHORT[e.id] : ROMAN[i])}</text></a>`;
        svg += `<text class="yr-lab" x="${x}" y="${lineY(4) + 22}" text-anchor="middle">${b}</text>`;
      }
    });
    svg += `<text class="yr-lab" x="${X(2026)}" y="${lineY(4) + 22}" text-anchor="middle">now</text>`;
    // Staff lines with names.
    TL.forEach((t, i) => {
      svg += `<line class="staff-line" data-tl="${t.id}" x1="${labelW - 6}" x2="${W - padR + 8}" y1="${lineY(i)}" y2="${lineY(i)}" style="--c:${t.color}"/>`;
      svg += `<text class="tl-lab" data-tl="${t.id}" x="${labelW - 14}" y="${lineY(i) + 4}" text-anchor="end" style="--c:${t.color}">${esc(W < 760 ? t.name.split(" ")[0] : t.name)}</text>`;
    });
    svg += `<text class="clef" x="${labelW + 2}" y="${lineY(3) + 22}">𝄞</text>`;
    // Pieces: chords of note-heads. Nudge apart pieces that land on the same spot.
    let lastX = -Infinity;
    pieces.forEach((p) => {
      let x = Math.max(X(when(p)), lastX + 15);
      if (x < labelW + 40) x = labelW + 40;
      lastX = x;
      const ys = (p.throughlines || []).map((id) => TL.findIndex((t) => t.id === id)).filter((i) => i >= 0).map(lineY);
      if (!ys.length) return;
      const hi = Math.min(...ys), lo = Math.max(...ys);
      svg += `<g class="chord" data-id="${p.id}" data-tls="${(p.throughlines || []).join(" ")}" tabindex="0" role="link" aria-label="${esc(p.title)} (${when(p)})">`;
      svg += `<rect class="hit" x="${x - 11}" y="${hi - 16}" width="24" height="${lo - hi + 52}"/>`;
      svg += `<line class="stem" x1="${x + 6.5}" x2="${x + 6.5}" y1="${lo}" y2="${hi - 34}"/>`;
      ys.forEach((y) => { svg += `<ellipse class="head" cx="${x}" cy="${y}" rx="7.4" ry="5.4" transform="rotate(-22 ${x} ${y})"/>`; });
      svg += `</g>`;
    });
    svg += `</svg>`;
    host.innerHTML = svg;
    applyFocus();
  }

  $("staff").addEventListener("mouseover", (e) => {
    const g = e.target.closest(".chord");
    if (!g) return;
    const p = pieces.find((q) => q.id === g.dataset.id);
    tip.innerHTML = `<b>${esc(p.title)}</b><span>${esc(p.performer)} · ${p.composed && p.composed !== p.year ? `${esc(p.composedNote || p.composed)}, rec. ${p.year}` : p.year}</span><em>${(p.throughlines || []).map((t) => `<i style="background:${tlById[t].color}"></i>${esc(tlById[t].name)}`).join("<br>")}</em>`;
    tip.classList.add("show");
  });
  $("staff").addEventListener("mousemove", (e) => {
    if (!tip.classList.contains("show")) return;
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 16, y = e.clientY + 16;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 16;
    tip.style.transform = `translate(${x}px, ${y}px)`;
  });
  $("staff").addEventListener("mouseout", (e) => { if (e.target.closest(".chord")) tip.classList.remove("show"); });
  $("staff").addEventListener("click", (e) => {
    const g = e.target.closest(".chord");
    if (g) return goTo(g.dataset.id);
    const l = e.target.closest("[data-tl]");
    if (l) toggleThread(l.dataset.tl);
  });
  $("staff").addEventListener("keydown", (e) => { const g = e.target.closest(".chord"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); goTo(g.dataset.id); } });

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
    history.replaceState(null, "", "#" + id);
  }
  function toggleThread(id) {
    focusThread = focusThread === id ? null : id;
    applyFocus();
  }
  function applyFocus() {
    document.body.dataset.thread = focusThread || "";
    document.querySelectorAll(".chord").forEach((g) => g.classList.toggle("dim", !!focusThread && !g.dataset.tls.split(" ").includes(focusThread)));
    document.querySelectorAll(".staff-line, .tl-lab").forEach((l) => l.classList.toggle("lit", l.dataset.tl === focusThread));
    document.querySelectorAll(".piece").forEach((c) => c.classList.toggle("dim", !!focusThread && !c.dataset.tls.split(" ").includes(focusThread)));
    document.querySelectorAll(".thread").forEach((t) => t.classList.toggle("on", t.dataset.tl === focusThread));
  }

  // ---------- Throughline essays ----------
  const essays = N.threadEssays || {};
  $("threads").innerHTML = `<h2>Five throughlines</h2>` + TL.slice().reverse().map((t) => {
    const carriers = pieces.filter((p) => (p.throughlines || []).includes(t.id));
    return `<article class="thread" data-tl="${t.id}" style="--c:${t.color}">
      <header><span class="swatch"></span><h3>${esc(t.name)}</h3><button class="follow" data-tl="${t.id}">Follow this thread</button></header>
      ${essays[t.id] ? essays[t.id].map((p) => `<p>${p}</p>`).join("") : ""}
      <div class="carriers">${carriers.map((p) => `<a href="#${p.id}" data-goto="${p.id}"><b>${esc(p.composedNote || when(p))}</b> ${esc(p.title)}</a>`).join("")}</div>
    </article>`;
  }).join("");
  $("threads").addEventListener("click", (e) => {
    const f = e.target.closest(".follow"); if (f) return toggleThread(f.dataset.tl);
    const a = e.target.closest("[data-goto]"); if (a) { e.preventDefault(); goTo(a.dataset.goto); }
  });

  // ---------- Eras & pieces ----------
  const SEG_TONES = ["var(--seg-a)", "var(--seg-b)", "var(--seg-c)", "var(--seg-d)"];
  function formDiagram(form) {
    if (!form || !form.sections || !form.sections.length) return "";
    const letters = {};
    let n = 0;
    const segs = form.sections.map((s) => {
      const key = String(s.label).replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase() || s.label;
      if (!(key in letters)) letters[key] = n++ % SEG_TONES.length;
      const grow = s.bars > 0 ? s.bars : 6;
      return `<div class="seg ${s.bars > 0 ? "" : "free"}" style="flex-grow:${grow};background:${SEG_TONES[letters[key]]}" title="${esc(s.note || "")}">
        <span class="seg-l">${esc(s.label)}</span>${s.bars > 0 ? `<span class="seg-b">${s.bars}</span>` : ""}
        ${s.note ? `<span class="seg-n">${esc(s.note)}</span>` : ""}</div>`;
    }).join("");
    return `<div class="form"><div class="form-cap">Form · ${esc(form.summary || "")}</div><div class="form-bar">${segs}</div></div>`;
  }
  function leadSheet(prog) {
    if (!prog || !prog.bars || !prog.bars.length) return "";
    return `<div class="lead"><div class="form-cap">${esc(prog.label || "Changes")}</div><div class="bars">${prog.bars.map((b, i) => `<div class="bar"><i>${i + 1}</i>${esc(b).split(/\s+/).map((c) => `<span>${c}</span>`).join("")}</div>`).join("")}</div></div>`;
  }
  function pieceCard(p) {
    const src = p.sources || [];
    const tls = (p.throughlines || []).filter((t) => tlById[t]);
    const people = (p.artistIds || []).filter((id) => artistName[id]);
    return `<article class="piece" id="${esc(p.id)}" data-tls="${tls.join(" ")}">
      <header class="piece-head">
        <div class="piece-year">${p.composed && p.composed !== p.year ? `${esc(p.composedNote || p.composed)}<small>recorded ${p.year}</small>` : p.year}</div>
        <div>
          <h3>${esc(p.title)}</h3>
          <div class="piece-by">${esc(p.performer)}${p.composer && p.composer !== p.performer ? ` <span>· composed by ${esc(p.composer)}</span>` : ""}</div>
          <div class="piece-rec">${esc(p.recording || "")}</div>
        </div>
      </header>
      <div class="facts">
        ${p.key ? `<div><small>Key</small>${esc(p.key)}</div>` : ""}
        ${p.meter ? `<div><small>Meter</small>${esc(p.meter)}</div>` : ""}
        ${p.tempo ? `<div><small>Tempo</small>${esc(p.tempo)}</div>` : ""}
      </div>
      <div class="tl-tags">${tls.map((t) => `<span style="--c:${tlById[t].color}" title="${esc((p.throughlineNotes || {})[t] || "")}"><i></i>${esc(tlById[t].name)}</span>`).join("")}</div>
      ${formDiagram(p.form)}
      ${leadSheet(p.progression)}
      <ol class="findings">${(p.findings || []).map((f) => `<li><h4>${esc(f.title)}</h4><p>${esc(f.text)}${src[f.source] ? ` <a class="fn" href="#${esc(p.id)}-src-${f.source}" aria-label="source ${f.source + 1}">${f.source + 1}</a>` : ""}</p></li>`).join("")}</ol>
      ${tls.length ? `<div class="threads-in">${tls.map((t) => (p.throughlineNotes || {})[t] ? `<p style="--c:${tlById[t].color}"><b>${esc(tlById[t].name)}.</b> ${esc(p.throughlineNotes[t])}</p>` : "").join("")}</div>` : ""}
      <div class="actions">
        ${p.demo && p.demo.events && p.demo.events.length ? `<button class="demo" data-id="${esc(p.id)}"><span class="ic">▶</span>${esc(p.demo.label || "Hear it")}</button>` : ""}
        <a class="listen" href="https://www.youtube.com/results?search_query=${encodeURIComponent(p.listen || p.title)}" target="_blank" rel="noopener">Listen to the recording ↗</a>
        ${people.length ? `<span class="on-tree">On the tree: ${people.map((id) => `<a href="./#${id}">${esc(artistName[id])}</a>`).join(", ")}</span>` : ""}
      </div>
      <ol class="sources">${src.map((s, i) => `<li id="${esc(p.id)}-src-${i}">${esc(s.cite)}${s.url ? ` <a href="${esc(s.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ol>
    </article>`;
  }

  $("eras").innerHTML = eras.map((e, i) => {
    const info = N.eras[e.id] || {};
    const ps = pieces.filter((p) => p.era === e.id);
    if (!ps.length && !info.overview) return "";
    return `<section class="era" id="era-${e.id}">
      <header class="era-head">
        <div class="era-num">${ROMAN[i]}</div>
        <div><h2>${esc(e.name)}</h2><div class="era-yrs">${e.years[0]}–${e.id === "today" ? "now" : e.years[1]}</div></div>
      </header>
      ${info.overview ? `<p class="era-ov">${esc(info.overview)}</p>` : ""}
      ${info.changes && info.changes.length ? `<div class="changes"><h4>What changed</h4><ul>${info.changes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>` : ""}
      <div class="pieces">${ps.map(pieceCard).join("")}</div>
    </section>`;
  }).join("");

  // Demos.
  $("eras").addEventListener("click", (e) => {
    const b = e.target.closest(".demo"); if (!b) return;
    const p = pieces.find((q) => q.id === b.dataset.id);
    const was = b.classList.contains("playing");
    document.querySelectorAll(".demo.playing").forEach((x) => { x.classList.remove("playing"); x.querySelector(".ic").textContent = "▶"; });
    if (was) { JazzSynth.stop(); return; }
    if (window.JazzPlayer && window.JazzPlayer.playing()) window.JazzPlayer.pause();
    b.classList.add("playing"); b.querySelector(".ic").textContent = "■";
    JazzSynth.play(p.demo, () => { b.classList.remove("playing"); b.querySelector(".ic").textContent = "▶"; });
  });

  // ---------- Bibliography ----------
  const bib = new Map();
  for (const p of pieces) for (const s of p.sources || []) {
    const key = s.cite.replace(/,?\s*(pp?\.|ch\.|chapter)\s.*$/i, "").trim();
    if (!bib.has(key)) bib.set(key, s.url || "");
  }
  $("bibliography").innerHTML = `<ul>${[...bib.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([c, u]) => `<li>${esc(c)}${u ? ` <a href="${esc(u)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ul>`;

  // ---------- Era index ----------
  const idx = $("era-index");
  idx.innerHTML = eras.map((e, i) => document.getElementById("era-" + e.id) ? `<a href="#era-${e.id}" data-era="${e.id}"><i>${ROMAN[i]}</i><span>${esc(ERA_SHORT[e.id])}</span></a>` : "").join("");
  const obs = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) {
      idx.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.era === en.target.id.slice(4)));
    }
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll(".era").forEach((s) => obs.observe(s));

  drawStaff();
  let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(drawStaff, 120); });
  if (location.hash.length > 1) setTimeout(() => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView({ block: "start" }); }, 200);
})();
