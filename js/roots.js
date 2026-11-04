/* Deep Roots — renders the Africa map, embarkation chart, region chapters, and the crossing / principles / loop sections. */
(function () {
  const R = window.ROOTS;
  const MAP = window.AFRICA_MAP;
  const J = window.JAZZ || { artists: [] };
  const N = window.NOTES || { pieces: [] };
  const artistName = Object.fromEntries((J.artists || []).map((a) => [a.id, a.name]));
  const pieceTitle = Object.fromEntries((N.pieces || []).map((p) => [p.id, p.title]));
  const regionData = Object.fromEntries(R.regions.map((r) => [r.id, r]));
  const META = Object.fromEntries(R.REGIONS.map((r) => [r.id, r]));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const tip = $("note-tip");

  // ---------- Theme ----------
  const setTheme = (t) => { document.body.dataset.theme = t; document.documentElement.dataset.theme = t; localStorage.setItem("jft-theme", t); };
  setTheme(localStorage.getItem("jft-theme") || "night");
  $("btn-theme").addEventListener("click", () => setTheme(document.body.dataset.theme === "night" ? "paper" : "night"));

  // Footnote markers like [3] or [2, 5] → links to the section's sources.
  const fn = (text, prefix) => esc(text).replace(/\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, (m, inner) =>
    inner.split(/\s*,\s*/).map((n) => {
      const first = n.split(/[–-]/)[0].trim();
      return `<a class="fn" href="#${prefix}-src-${first}">${esc(n)}</a>`;
    }).join(""));
  const paras = (arr, prefix, cls = "") => (arr || []).map((p) => `<p class="${cls}">${fn(p, prefix)}</p>`).join("");
  const chips = (artistIds, pieceIds) => {
    const a = (artistIds || []).filter((id) => artistName[id]).map((id) => `<a class="link-chip" href="./#${id}">${esc(artistName[id])}</a>`);
    const p = (pieceIds || []).filter((id) => pieceTitle[id]).map((id) => `<a class="link-chip piece" href="notes.html#${id}">♪ ${esc(pieceTitle[id])}</a>`);
    return a.length || p.length ? `<div class="link-chips">${a.join("")}${p.join("")}</div>` : "";
  };
  const figure = (img, cls = "") => img ? `<figure class="${cls}">
      <img src="${esc(img.src)}" alt="${esc(img.caption)}" loading="lazy" referrerpolicy="no-referrer">
      <figcaption>${esc(img.caption)} <span class="credit">${esc(img.credit || "")}${img.license ? ` · ${esc(img.license)}` : ""}${img.page ? ` · <a href="${esc(img.page)}" target="_blank" rel="noopener">source</a>` : ""}</span></figcaption>
    </figure>` : "";
  const sourcesList = (sources, prefix) => sources && sources.length
    ? `<ol class="sources">${sources.map((s, i) => `<li id="${prefix}-src-${i + 1}">${esc(s.cite)}${s.url ? ` <a href="${esc(s.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ol>` : "";
  const demoBtn = (demo, key) => demo && demo.events && demo.events.length
    ? `<button class="demo" data-demo="${esc(key)}"><span class="ic">▶</span>${esc(demo.label || "Hear it")}</button>` : "";
  const DEMOS = {};

  // ---------- Map ----------
  const X = (lon) => (lon - MAP.lon0) * MAP.scale * MAP.squeeze;
  const Y = (lat) => (MAP.lat0 - lat) * MAP.scale;
  // Embarkation coasts (bubble anchors) and label positions [lon, lat]; labels sit in the ocean where possible.
  const ANCHOR = {
    senegambia:        { bubble: [-16.9, 14.7], label: [-25, 19], align: "start" },
    "upper-guinea":    { bubble: [-13.2, 8.5],  label: [-25, 10.5], align: "start" },
    "gold-coast":      { bubble: [-1.3, 5.1],   label: [-21, 1.5], align: "start" },
    "bight-of-benin":  { bubble: [2.1, 6.3],    label: [-17, -3.5], align: "start" },
    "bight-of-biafra": { bubble: [7.1, 4.4],    label: [-12, -8.5], align: "start" },
    "west-central":    { bubble: [12.3, -6.5],  label: [-6, -15], align: "start" },
    southeast:         { bubble: [40.7, -15],   label: [50.5, -22], align: "middle" },
    rainforest:        { label: [20.5, 3.2], align: "middle" },
    southern:          { label: [24.5, -29.8], align: "middle" },
    "east-horn":       { label: [39.5, 8.5], align: "middle" },
    north:             { label: [9, 26], align: "middle" },
  };
  const trade = Object.fromEntries((R.trade || []).map((t) => [t.region, t]));
  const maxEmb = Math.max(1, ...Object.values(trade).map((t) => t.embarked || 0));
  const regionsOf = (code) => R.REGIONS.filter((r) => r.countries.includes(code));

  function drawMap() {
    const host = $("africa-map");
    if (!MAP) { host.innerHTML = ""; return; }
    let svg = `<svg viewBox="0 0 ${MAP.width} ${MAP.height}" role="img" aria-label="Map of Africa with the eleven regions and embarkation volumes">`;
    svg += `<path class="ctx" d="${MAP.context}"/>`;
    for (const [code, d] of Object.entries(MAP.countries)) {
      const rs = regionsOf(code).map((r) => r.id).join(" ");
      svg += `<path class="country" data-code="${code}" data-regions="${rs}" d="${d}"/>`;
    }
    // Bubbles (area ∝ embarked) with leader lines to their labels.
    for (const reg of R.REGIONS) {
      const a = ANCHOR[reg.id]; if (!a) continue;
      const t = trade[reg.id];
      const [lx, ly] = [X(a.label[0]), Y(a.label[1])];
      if (a.bubble && t && t.embarked) {
        const [bx, by] = [X(a.bubble[0]), Y(a.bubble[1])];
        const r = 6 + 40 * Math.sqrt(t.embarked / maxEmb);
        svg += `<line class="leader" x1="${lx}" y1="${ly - 4}" x2="${bx}" y2="${by}"/>`;
        svg += `<circle class="bubble" data-region="${reg.id}" cx="${bx}" cy="${by}" r="${r.toFixed(1)}"/>`;
      }
    }
    for (const reg of R.REGIONS) {
      const a = ANCHOR[reg.id]; if (!a) continue;
      const t = trade[reg.id];
      const [lx, ly] = [X(a.label[0]), Y(a.label[1])];
      svg += `<g class="rlabel" data-region="${reg.id}" tabindex="0" role="link">
        <text x="${lx}" y="${ly}" text-anchor="${a.align}" class="rl-name">${esc(reg.name.replace(/^The /, ""))}</text>
        ${t && t.share ? `<text x="${lx}" y="${ly + 21}" text-anchor="${a.align}" class="rl-sub">${t.share.toFixed(1)}% of embarkations</text>` : ""}
      </g>`;
    }
    svg += `</svg>`;
    host.innerHTML = svg;
  }

  function highlight(id) {
    document.querySelectorAll("#africa-map .country").forEach((p) => p.classList.toggle("hl", !!id && p.dataset.regions.split(" ").includes(id)));
    document.querySelectorAll("#africa-map [data-region], #region-list [data-region], #trade-chart [data-region]").forEach((el) => el.classList.toggle("on", el.dataset.region === id));
  }
  function goRegion(id) {
    const el = document.getElementById("r-" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const mapHost = $("africa-map");
  mapHost.addEventListener("mouseover", (e) => {
    const c = e.target.closest(".country"), r = e.target.closest("[data-region]");
    if (r) { highlight(r.dataset.region); showTip(regionTip(r.dataset.region)); return; }
    if (c) {
      const rs = regionsOf(c.dataset.code);
      highlight(rs[0] && rs[0].id);
      showTip(`<b>${esc(MAP.names[c.dataset.code] || c.dataset.code)}</b>${rs.length ? `<span>${rs.map((x) => esc(x.name)).join(" · ")}</span>` : ""}`);
    }
  });
  mapHost.addEventListener("mouseleave", () => { highlight(null); tip.classList.remove("show"); });
  mapHost.addEventListener("click", (e) => {
    const r = e.target.closest("[data-region]") || e.target.closest(".country");
    if (!r) return;
    const id = r.dataset.region || (regionsOf(r.dataset.code)[0] || {}).id;
    if (id) goRegion(id);
  });
  function regionTip(id) {
    const m = META[id], t = trade[id], d = regionData[id];
    return `<b>${esc(m.name)}</b>${d && d.peoples ? `<span>${esc(d.peoples.slice(0, 4).join(", "))}</span>` : ""}${t && t.embarked ? `<em>${t.embarked.toLocaleString()} people embarked (${t.share.toFixed(1)}%)</em>` : ""}`;
  }
  function showTip(html) { tip.innerHTML = html; tip.classList.add("show"); }
  document.addEventListener("mousemove", (e) => {
    if (!tip.classList.contains("show")) return;
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 16, y = e.clientY + 16;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 16;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 16;
    tip.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Region list (chips).
  $("region-list").innerHTML = R.REGIONS.map((m, i) => `<button data-region="${m.id}"><i>${i + 1}</i>${esc(m.name)}</button>`).join("");
  $("region-list").addEventListener("mouseover", (e) => { const b = e.target.closest("[data-region]"); if (b) highlight(b.dataset.region); });
  $("region-list").addEventListener("mouseleave", () => highlight(null));
  $("region-list").addEventListener("click", (e) => { const b = e.target.closest("[data-region]"); if (b) goRegion(b.dataset.region); });

  // ---------- Embarkation chart (single series; hover tooltips; doubles as the table view) ----------
  function drawChart() {
    const rows = (R.trade || []).filter((t) => t.embarked).sort((a, b) => b.embarked - a.embarked);
    if (!rows.length) { $("trade-chart").innerHTML = ""; return; }
    const total = rows.reduce((s, t) => s + t.embarked, 0);
    $("trade-chart").innerHTML = `
      <h3>People embarked for the Americas, by African region, 1501–1866</h3>
      <div class="bars-h" role="table">
        ${rows.map((t) => `<div class="hb" role="row" data-region="${t.region}" tabindex="0" title="${esc(t.note || "")}">
          <span class="hb-l" role="cell">${esc(META[t.region] ? META[t.region].name : t.label)}</span>
          <span class="hb-track" role="cell"><span class="hb-bar" style="width:${(100 * t.embarked) / rows[0].embarked}%"></span></span>
          <span class="hb-v" role="cell">${(t.embarked / 1e6).toFixed(2)}M <em>${t.share.toFixed(1)}%</em></span>
        </div>`).join("")}
      </div>
      <p class="chart-note">Total shown: ${total.toLocaleString()}. Source: Trans-Atlantic Slave Trade Database estimates (SlaveVoyages). Hover a row for notes.</p>`;
  }
  $("trade-chart").addEventListener("mouseover", (e) => {
    const r = e.target.closest(".hb"); if (!r) return;
    highlight(r.dataset.region);
    const t = trade[r.dataset.region];
    showTip(`<b>${esc(t.label)}</b><span>${t.embarked.toLocaleString()} embarked · ${t.share.toFixed(1)}% of the total</span>${t.note ? `<em>${esc(t.note)}</em>` : ""}`);
  });
  $("trade-chart").addEventListener("mouseleave", () => { highlight(null); tip.classList.remove("show"); });
  $("trade-chart").addEventListener("click", (e) => { const r = e.target.closest(".hb"); if (r) goRegion(r.dataset.region); });

  // ---------- Region chapters ----------
  function regionHTML(m, i) {
    const d = regionData[m.id];
    if (!d) return "";
    const px = "r-" + m.id;
    const imgs = d.images || [];
    if (d.demo) DEMOS[px] = d.demo;
    const t = trade[m.id];
    return `<section class="region era" id="${px}" style="--rc:${m.color}">
      <header class="era-head">
        <div class="era-num">${i + 1}</div>
        <div><h2>${esc(d.name || m.name)}</h2>
          <div class="era-yrs">${esc((d.peoples || []).join(" · "))}</div>
        </div>
      </header>
      ${d.span ? `<div class="span-line">${esc(d.span)}</div>` : ""}
      <p class="era-ov">${fn(d.lead || "", px)}</p>
      ${t && t.embarked ? `<div class="stat"><b>${t.embarked.toLocaleString()}</b><span>people embarked from this region for the Americas, ${t.share.toFixed(1)}% of the transatlantic total (SlaveVoyages estimate)</span></div>` : ""}
      ${imgs.length ? `<div class="gallery">${imgs.map((im, k) => figure(im, k === 0 ? "wide" : "")).join("")}</div>` : ""}
      <div class="chapter">
        <h3>History</h3>${paras(d.history, px)}
        <h3>The music</h3>${paras(d.music, px)}
        ${d.instruments && d.instruments.length ? `<h3>Instruments</h3><div class="instruments">${d.instruments.map((ins) => `
          <div class="inst">${ins.image != null && imgs[ins.image] ? `<img src="${esc(imgs[ins.image].src)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ""}
            <div><b>${esc(ins.name)}</b>${ins.local && ins.local !== ins.name ? `<small>${esc(ins.local)}</small>` : ""}<p>${fn(ins.text, px)}</p></div></div>`).join("")}</div>` : ""}
        <h3>Music in society</h3>${paras(d.society, px)}
        ${d.crossing ? `<div class="crossing-box"><h3>Across the Atlantic</h3>${paras([].concat(d.crossing.text || []), px)}${chips(d.crossing.artistIds, d.crossing.pieceIds)}</div>` : ""}
        <div class="actions">
          ${demoBtn(d.demo, px)}
          ${(d.listen || []).map((l) => `<a class="listen" href="https://www.youtube.com/results?search_query=${encodeURIComponent(l.query || l.title)}" target="_blank" rel="noopener">▶ ${esc(l.title)}</a>`).join("")}
        </div>
        ${sourcesList(d.sources, px)}
      </div>
    </section>`;
  }
  $("regions").innerHTML = `<div class="part-head" id="part-regions"><span>Part one</span><h2>Eleven regions</h2></div>` + R.REGIONS.map(regionHTML).join("");

  // ---------- Sections: crossing, principles, loop ----------
  function crossingHTML(s) {
    const px = "s-crossing", imgs = s.images || [];
    return `<section class="era xsec" id="${px}">
      <div class="part-head"><span>Part two</span><h2>${esc(s.title || "The Crossing")}</h2></div>
      <p class="era-ov">${fn(s.lead || "", px)}</p>
      ${(s.blocks || []).map((b) => `<div class="block" id="${px}-${esc(b.id || "")}">
        <h3>${esc(b.heading)}</h3>
        <div class="block-body ${b.images && b.images.length ? "with-fig" : ""}">
          <div>${paras(b.paragraphs, px)}</div>
          ${(b.images || []).map((k) => figure(imgs[k])).join("")}
        </div></div>`).join("")}
      ${s.tradeToNorthAmerica && s.tradeToNorthAmerica.length ? `<div class="block"><h3>Arrivals in mainland North America, by African region</h3>
        <table class="mini-table"><thead><tr><th>Region</th><th>People</th><th>Share</th></tr></thead><tbody>
        ${s.tradeToNorthAmerica.map((r) => `<tr><td>${esc(r.label || (META[r.region] || {}).name || r.region)}</td><td>${r.disembarked != null ? Number(r.disembarked).toLocaleString() : r.embarked != null ? Number(r.embarked).toLocaleString() : "–"}</td><td>${r.share != null ? r.share.toFixed(1) + "%" : "–"}</td></tr>`).join("")}
        </tbody></table>${s.tradeToNorthAmericaNote ? `<p class="chart-note">${esc(s.tradeToNorthAmericaNote)}</p>` : ""}</div>` : ""}
      ${sourcesList(s.sources, px)}
    </section>`;
  }
  function principlesHTML(s) {
    const px = "s-principles", imgs = s.images || [];
    return `<section class="era xsec" id="${px}">
      <div class="part-head"><span>Part three</span><h2>${esc(s.title || "What crossed")}</h2></div>
      <p class="era-ov">${fn(s.lead || "", px)}</p>
      <div class="principles">${(s.items || []).map((it, i) => {
        const key = `${px}-${it.id || i}`;
        if (it.demo) DEMOS[key] = it.demo;
        return `<article class="principle" id="${key}">
          <div class="p-num">${i + 1}</div>
          <div class="p-body">
            <h3>${esc(it.title)}</h3>
            <div class="two-col">
              <div><h4>In Africa</h4><p>${fn(it.africa || "", px)}</p></div>
              <div><h4>In jazz &amp; the Americas</h4><p>${fn(it.jazz || "", px)}</p></div>
            </div>
            ${it.image != null && imgs[it.image] ? figure(imgs[it.image], "inline") : ""}
            <div class="actions">${demoBtn(it.demo, key)}</div>
            ${chips(it.artistIds, it.pieceIds)}
          </div>
        </article>`;
      }).join("")}</div>
      ${sourcesList(s.sources, px)}
    </section>`;
  }
  function loopHTML(s) {
    const px = "s-loop", imgs = s.images || [];
    const items = (s.items || []).slice().sort((a, b) => (a.year || 0) - (b.year || 0));
    return `<section class="era xsec" id="${px}">
      <div class="part-head"><span>Part four</span><h2>${esc(s.title || "The loop back")}</h2></div>
      <p class="era-ov">${fn(s.lead || "", px)}</p>
      <div class="loop">${items.map((it) => `<article class="loop-item">
          <div class="loop-year">${it.year || ""}</div>
          <div class="loop-body">
            ${it.image != null && imgs[it.image] ? figure(imgs[it.image], "inline") : ""}
            <h3>${esc(it.title)}</h3><p>${fn(it.text || "", px)}</p>
            ${chips(it.artistIds, it.pieceIds)}
          </div>
        </article>`).join("")}</div>
      ${sourcesList(s.sources, px)}
    </section>`;
  }
  const S = R.sections;
  $("sections").innerHTML = (S.crossing ? crossingHTML(S.crossing) : "") + (S.principles ? principlesHTML(S.principles) : "") + (S.loop ? loopHTML(S.loop) : "");

  // ---------- Demos ----------
  document.body.addEventListener("click", (e) => {
    const b = e.target.closest(".demo[data-demo]"); if (!b) return;
    const was = b.classList.contains("playing");
    document.querySelectorAll(".demo.playing").forEach((x) => { x.classList.remove("playing"); x.querySelector(".ic").textContent = "▶"; });
    if (was) { JazzSynth.stop(); return; }
    if (window.JazzPlayer && window.JazzPlayer.playing()) window.JazzPlayer.pause();
    b.classList.add("playing"); b.querySelector(".ic").textContent = "■";
    JazzSynth.play(DEMOS[b.dataset.demo], () => { b.classList.remove("playing"); b.querySelector(".ic").textContent = "▶"; });
  });

  // ---------- Bibliography ----------
  const bib = new Map();
  const allSources = [...R.regions.flatMap((r) => r.sources || []), ...Object.values(S).flatMap((s) => s.sources || [])];
  for (const s of allSources) {
    const key = s.cite.replace(/,?\s*(pp?\.|ch\.|chapter|chs?\.)\s.*$/i, "").trim();
    if (!bib.has(key)) bib.set(key, s.url || "");
  }
  $("bibliography").innerHTML = `<ul>${[...bib.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([c, u]) => `<li>${esc(c)}${u ? ` <a href="${esc(u)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ul>`;

  // ---------- Section index ----------
  const idx = $("era-index");
  const entries = [["continent", "◎", "The continent"], ...R.REGIONS.filter((m) => regionData[m.id]).map((m, i) => ["r-" + m.id, String(i + 1), m.name]),
    ...(S.crossing ? [["s-crossing", "II", "The Crossing"]] : []), ...(S.principles ? [["s-principles", "III", "What crossed"]] : []), ...(S.loop ? [["s-loop", "IV", "The loop back"]] : [])];
  idx.innerHTML = entries.map(([id, n, label]) => `<a href="#${id}" data-era="${id}"><i>${n}</i><span>${esc(label)}</span></a>`).join("");
  const obs = new IntersectionObserver((ens) => {
    for (const en of ens) if (en.isIntersecting) idx.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.era === en.target.id));
  }, { rootMargin: "-40% 0px -55% 0px" });
  entries.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });

  drawMap();
  drawChart();
  // Debug/screenshot hook: ?solo=<section id> shows only that section.
  const solo = new URLSearchParams(location.search).get("solo");
  if (solo) document.querySelectorAll(".hero, .map-wrap, .region, .xsec, .part-head, .colophon").forEach((el) => { if (el.id !== solo && !el.contains(document.getElementById(solo))) el.style.display = "none"; });
  if (location.hash.length > 1) setTimeout(() => { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView({ block: "start" }); }, 250);
})();
