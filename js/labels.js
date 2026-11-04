/* Labels & Locals — renders the atlas (map + year scrubber), label lifelines, label cards, essays,
   the "Live at…" bridge between venues and labels, and the city chapters with their clubs. */
(function () {
  const L = window.LABELS;
  const MAP = window.WORLD_MAP;
  const J = window.JAZZ || { artists: [] };
  const N = window.NOTES || { pieces: [] };
  const IMG = J.images || {};
  const NOW = 2026, ALL = 2027, Y0 = 1895;
  const artistName = Object.fromEntries((J.artists || []).map((a) => [a.id, a.name]));
  const pieceTitle = Object.fromEntries((N.pieces || []).map((p) => [p.id, p.title]));
  const labelById = Object.fromEntries(L.labels.map((l) => [l.id, l]));
  const clubById = Object.fromEntries(L.clubs.map((c) => [c.id, c]));
  const cityById = Object.fromEntries(L.CITIES.map((c) => [c.id, c]));
  const KIND = Object.fromEntries(L.KINDS.map((k) => [k.id, k]));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = (s) => String(s ?? "").replace(/\s*\[\d+(?:\s*[,–-]\s*\d+)*\]/g, "");
  const $ = (id) => document.getElementById(id);
  const tip = $("note-tip");

  // ---------- Theme ----------
  const setTheme = (t) => { document.body.dataset.theme = t; document.documentElement.dataset.theme = t; localStorage.setItem("jft-theme", t); };
  setTheme(new URLSearchParams(location.search).get("theme") || localStorage.getItem("jft-theme") || "night");
  $("btn-theme").addEventListener("click", () => setTheme(document.body.dataset.theme === "night" ? "paper" : "night"));

  // ---------- Shared helpers ----------
  const fn = (text, prefix) => esc(text).replace(/\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, (m, inner) =>
    inner.split(/\s*,\s*/).map((n) => `<a class="fn" href="#${prefix}-src-${n.split(/[–-]/)[0].trim()}">${esc(n)}</a>`).join(""));
  const paras = (arr, prefix) => [].concat(arr || []).map((p) => `<p>${fn(p, prefix)}</p>`).join("");
  const sourcesList = (sources, prefix) => sources && sources.length
    ? `<details class="srcs"><summary>Sources (${sources.length})</summary><ol class="sources">${sources.map((s, i) => `<li id="${prefix}-src-${i + 1}">${esc(s.cite)}${s.url ? ` <a href="${esc(s.url)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ol></details>` : "";
  const figure = (img, cls = "") => img ? `<figure class="${cls}">
      <img src="${esc(img.src)}" alt="${esc(img.caption)}" loading="lazy" referrerpolicy="no-referrer">
      <figcaption>${esc(img.caption)} <span class="credit">${esc(strip(img.credit || ""))}${img.license ? ` · ${esc(img.license)}` : ""}${img.page ? ` · <a href="${esc(img.page)}" target="_blank" rel="noopener">source</a>` : ""}</span></figcaption>
    </figure>` : "";
  const artistChip = (id) => artistName[id]
    ? `<a class="link-chip person" href="./#${id}">${IMG[id] ? `<img src="${esc(IMG[id].src)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ""}${esc(artistName[id])}</a>` : "";
  const artistChips = (ids) => { const a = [...new Set(ids || [])].map(artistChip).filter(Boolean); return a.length ? `<div class="link-chips">${a.join("")}</div>` : ""; };
  const pieceChip = (id) => pieceTitle[id] ? `<a class="link-chip piece" href="notes.html#${id}">♪ ${esc(pieceTitle[id])} in Notes on Notes</a>` : "";
  const labelChip = (id, name) => labelById[id] ? `<a class="link-chip lab k-${labelById[id].kind}" href="#l-${id}" data-open="l-${id}"><i></i>${esc(labelById[id].name)}</a>` : name ? `<span class="link-chip plain">${esc(name)}</span>` : "";
  const clubChip = (id) => clubById[id] ? `<a class="link-chip club" href="#c-${id}" data-open="c-${id}"><i></i>${esc(clubById[id].name)}</a>` : "";
  // Short display names for tight spots (disc labels, chart rows).
  const shortName = (l) => l.short || l.name.replace(/\s*\(.*?\)\s*/g, " ").trim()
    .replace(/ (Records|Recordings|Recording Company|Record Company|Talking Machine Company|Phonograph Corporation|Phonograph Company|Music)$/i, "").replace(/^Disques /, "").replace(/^Jazz Composers Orchestra Association$/, "JCOA");
  // Label names given as free text on live records ("Fresh Sound (2006 issue)") → just the label.
  const cleanLabel = (n) => String(n || "").replace(/\s*\(.*?\)/g, "").split(/;|,/)[0].trim();
  // Trim a label to roughly fit `px` at font size `fs` (average glyph ≈ 0.55em).
  const fit = (t, px, fs) => { const n = Math.floor(px / (fs * 0.55)); return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t; };
  const spans = (e) => e.periods && e.periods.length ? e.periods : [[e.founded ?? e.opened, e.ended ?? e.closed ?? null]];
  const openIn = (e, y) => y >= ALL || spans(e).some(([a, b]) => y >= a && y <= (b ?? NOW));
  const yearsText = (e) => spans(e).map(([a, b]) => b == null ? `${a}–` : a === b ? `${a}` : `${a}–${b}`).join(", ");
  const first = (e) => Math.min(...spans(e).map((s) => s[0]));
  const lastYr = (e) => Math.max(...spans(e).map((s) => s[1] ?? NOW));

  function showTip(html) { tip.innerHTML = html; tip.classList.add("show"); }
  function hideTip() { tip.classList.remove("show"); }
  document.addEventListener("mousemove", (e) => {
    if (!tip.classList.contains("show")) return;
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 16, y = e.clientY + 16;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 16;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 16;
    tip.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Labels in display order: by region, then by founding year.
  const REGION_ORDER = L.REGIONS.map((r) => r.id);
  const labels = L.labels.slice().sort((a, b) => REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region) || first(a) - first(b) || a.name.localeCompare(b.name));
  // Cities with venues, in table order; clubs within a city by opening year.
  const clubsIn = (cid) => L.clubs.filter((c) => c.city === cid).sort((a, b) => first(a) - first(b));
  const cities = L.CITIES.filter((c) => clubsIn(c.id).length || c.story);

  // ---------- Public-domain 78s from the site player, matched to labels by the issue named in `recorded` ----------
  const LIST = window.JAZZ_PLAYLIST || [];
  const ISSUER = { victor: /Victor/, columbia: /Columbia/, okeh: /OKeh/, gennett: /Gennett/, paramount: /Paramount/, brunswick: /Vocalion|Brunswick/ };
  const tracksFor = (id) => ISSUER[id] ? LIST.map((t, i) => ({ t, i })).filter(({ t }) => ISSUER[id].test(t.recorded || "")) : [];

  // =====================================================================
  // Atlas
  // =====================================================================
  const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;
  function P(lon, lat) {
    const l = (lon * Math.PI) / 180, t = Math.asin(M * Math.sin((lat * Math.PI) / 180));
    const t2 = t * t, t6 = t2 * t2 * t2;
    const x = (l * Math.cos(t)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))), y = t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
    return [(x - MAP.xMin) * MAP.scale, (MAP.yTop - y) * MAP.scale];
  }
  // Label "places": labels grouped by home city; groups near a club city share its spot.
  const places = [];
  for (const l of L.labels) {
    let p = places.find((q) => q.city === l.city);
    if (!p) { p = { city: l.city, coords: l.coords, labels: [] }; places.push(p); }
    p.labels.push(l);
  }
  for (const p of places) {
    const near = L.CITIES.filter((c) => clubsIn(c.id).length).map((c) => ({ c, d: Math.hypot(c.coords[0] - p.coords[0], c.coords[1] - p.coords[1]) })).sort((a, b) => a.d - b.d)[0];
    p.attach = near && near.d < 0.8 ? near.c.id : null;
  }
  const maxClubs = Math.max(1, ...cities.map((c) => clubsIn(c.id).length));
  const maxLabs = Math.max(1, ...L.CITIES.map((c) => places.filter((p) => p.attach === c.id).reduce((s, p) => s + p.labels.length, 0)), ...places.map((p) => p.labels.length));
  const rClub = (n) => (n ? 3.5 + 12 * Math.sqrt(n / maxClubs) : 2.6);
  const sLab = (n) => (n ? 3 + 7 * Math.sqrt(n / maxLabs) : 2.4);

  const VIEWS = { world: null, america: [[-126, 52], [-58, 17]], europe: [[-11, 61], [40, 41]] };
  function viewBox(name) {
    if (!MAP) return [0, 0, 1, 1];
    if (!VIEWS[name]) return [0, 0, MAP.width, MAP.height];
    const [[w, n], [e, s]] = VIEWS[name];
    const pts = [];
    for (let lon = w; lon <= e; lon += (e - w) / 8) for (const lat of [n, s, (n + s) / 2]) pts.push(P(lon, lat));
    let x0 = Math.min(...pts.map((p) => p[0])), x1 = Math.max(...pts.map((p) => p[0])), y0 = Math.min(...pts.map((p) => p[1])), y1 = Math.max(...pts.map((p) => p[1]));
    const ar = MAP.width / MAP.height;
    if ((x1 - x0) / (y1 - y0) > ar) { const h = (x1 - x0) / ar, c = (y0 + y1) / 2; y0 = c - h / 2; y1 = c + h / 2; } else { const w2 = (y1 - y0) * ar, c = (x0 + x1) / 2; x0 = c - w2 / 2; x1 = c + w2 / 2; }
    return [x0, y0, x1 - x0, y1 - y0];
  }
  let view = viewBox("world"), year = ALL;
  const mapHost = $("world-map");

  function drawMapBase() {
    if (!MAP) { mapHost.innerHTML = ""; return; }
    mapHost.innerHTML = `<svg viewBox="${view.join(" ")}" role="img" aria-label="World map of the clubs and record labels on this page">
      <rect class="sea" x="-2000" y="-2000" width="6000" height="6000"/>
      <path class="land" d="${MAP.land}"/>
      <g id="marks"></g></svg>`;
  }
  function drawMarks() {
    const svg = mapHost.querySelector("svg"); if (!svg) return;
    svg.setAttribute("viewBox", view.join(" "));
    const cw = svg.clientWidth || mapHost.clientWidth || 800, u = view[2] / cw;
    svg.querySelector(".land").style.strokeWidth = 0.7 * u;
    const marks = [], texts = [];
    const placed = [];
    // Clubs per city.
    for (const c of cities) {
      const all = clubsIn(c.id); if (!all.length) continue;
      const open = all.filter((x) => openIn(x, year));
      const [x, y] = P(...c.coords);
      const r = rClub(open.length);
      marks.push({ kind: "city", id: c.id, x, y, r, n: open.length, name: c.name.replace(/ \(.*\)$/, "") });
    }
    // Labels per place (diamonds), beside the city circle when they share a city.
    for (const p of places) {
      const act = p.labels.filter((l) => openIn(l, year));
      const s = sLab(act.length);
      let [x, y] = P(...p.coords);
      const host = p.attach && marks.find((m) => m.kind === "city" && m.id === p.attach);
      if (host) {
        const sib = marks.filter((m) => m.kind === "lab" && m.attach === p.attach);
        if (sib.length) { sib[0].group.push(p); continue; }
        x = host.x - (host.r + s + 2.5) * u; y = host.y;
      }
      marks.push({ kind: "lab", attach: p.attach, group: [p], x, y, s, n: act.length, name: p.city });
    }
    // Merged label groups (several towns around one city) need their size recomputed.
    for (const m of marks.filter((m) => m.kind === "lab" && m.group.length > 1)) {
      m.n = m.group.reduce((s, p) => s + p.labels.filter((l) => openIn(l, year)).length, 0);
      const host = marks.find((h) => h.kind === "city" && h.id === m.attach);
      m.s = sLab(m.n); m.x = host.x - (host.r + m.s + 2.5) * u;
    }
    let out = "";
    for (const m of marks.filter((m) => m.kind === "lab")) {
      const s = m.s * u;
      out += `<path class="lab-mark ${m.n ? "" : "off"}" data-lab="${esc(m.group.map((p) => p.city).join("|"))}" d="M${m.x},${m.y - s * 1.25}L${m.x + s},${m.y}L${m.x},${m.y + s * 1.25}L${m.x - s},${m.y}Z" style="stroke-width:${1.6 * u}"/>`;
    }
    for (const m of marks.filter((m) => m.kind === "city").sort((a, b) => b.r - a.r)) {
      out += `<circle class="club-mark ${m.n ? "" : "off"}" data-city="${m.id}" cx="${m.x}" cy="${m.y}" r="${m.r * u}" style="stroke-width:${2 * u}"/>`;
    }
    // Direct labels for cities, greedily placed to avoid overlapping marks and each other (screen px).
    const boxes = marks.map((m) => { const r = m.kind === "city" ? m.r : m.s * 1.25; return [m.x / u - r, m.y / u - r, m.x / u + r, m.y / u + r]; });
    const hit = (b) => boxes.concat(placed).some((o) => b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]);
    const inView = (m) => m.x >= view[0] && m.x <= view[0] + view[2] && m.y >= view[1] && m.y <= view[1] + view[3];
    const fs = 11.5;
    for (const m of marks.filter((m) => m.kind === "city" && m.n && inView(m)).sort((a, b) => b.n - a.n)) {
      const w = m.name.length * fs * 0.56, h = fs + 2, px = m.x / u, py = m.y / u, r = m.r;
      const lab = marks.find((q) => q.kind === "lab" && q.attach === m.id);
      const left = lab ? r + 2 * lab.s + 6 : r + 4;
      for (const [bx, by, anchor] of [[px + r + 4, py + fs / 2.8, "start"], [px - left, py + fs / 2.8, "end"], [px, py - r - 4, "middle"], [px, py + r + fs + 2, "middle"]]) {
        const x0 = anchor === "start" ? bx : anchor === "end" ? bx - w : bx - w / 2;
        const b = [x0, by - fs, x0 + w, by + 3];
        if (b[0] < view[0] / u + 4 || b[2] > (view[0] + view[2]) / u - 4 || b[1] < view[1] / u + 2 || b[3] > (view[1] + view[3]) / u - 2) continue;
        if (hit(b)) continue;
        placed.push(b);
        texts.push(`<text class="city-lab" x="${bx * u}" y="${by * u}" text-anchor="${anchor}" style="font-size:${fs * u}px;stroke-width:${3 * u}px">${esc(m.name)}</text>`);
        break;
      }
    }
    svg.querySelector("#marks").innerHTML = out + texts.join("");
  }
  function setView(name, animate = true) {
    document.querySelectorAll(".views button").forEach((b) => b.classList.toggle("on", b.dataset.view === name));
    const from = view.slice(), to = viewBox(name);
    if (!animate || matchMedia("(prefers-reduced-motion: reduce)").matches) { view = to; drawMarks(); return; }
    const t0 = performance.now(), D = 650;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / D), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      view = from.map((v, i) => v + (to[i] - v) * e);
      drawMarks();
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  document.querySelector(".views").addEventListener("click", (e) => { const b = e.target.closest("[data-view]"); if (b) setView(b.dataset.view); });

  mapHost.addEventListener("mouseover", (e) => {
    const c = e.target.closest("[data-city]"), d = e.target.closest("[data-lab]");
    if (c) {
      const city = cityById[c.dataset.city], all = clubsIn(city.id), open = all.filter((x) => openIn(x, year));
      const labs = places.filter((p) => p.attach === city.id).flatMap((p) => p.labels).filter((l) => openIn(l, year));
      showTip(`<b>${esc(city.name)}</b><span>${year >= ALL ? `${all.length} venue${all.length === 1 ? "" : "s"} on this page` : `${open.length} of ${all.length} venue${all.length === 1 ? "" : "s"} open in ${year}`}</span>
        ${open.length ? `<em>${open.slice(0, 9).map((x) => esc(x.name)).join(" · ")}${open.length > 9 ? " …" : ""}</em>` : ""}
        ${labs.length ? `<em class="tip-labs">◆ ${labs.slice(0, 8).map((l) => esc(l.name)).join(" · ")}${labs.length > 8 ? " …" : ""}</em>` : ""}`);
    } else if (d) {
      const names = d.dataset.lab.split("|"), labs = places.filter((p) => names.includes(p.city)).flatMap((p) => p.labels);
      const act = labs.filter((l) => openIn(l, year));
      showTip(`<b>${esc(names.join(", "))}</b><span>${year >= ALL ? `${labs.length} label${labs.length === 1 ? "" : "s"}` : `${act.length} of ${labs.length} label${labs.length === 1 ? "" : "s"} active in ${year}`}</span>
        <em class="tip-labs">◆ ${(year >= ALL ? labs : act).map((l) => esc(l.name)).join(" · ") || "none active"}</em>`);
    }
  });
  mapHost.addEventListener("mouseout", (e) => { if (!e.relatedTarget || !mapHost.contains(e.relatedTarget) || !e.relatedTarget.closest("[data-city],[data-lab]")) hideTip(); });
  mapHost.addEventListener("click", (e) => {
    const c = e.target.closest("[data-city]"), d = e.target.closest("[data-lab]");
    if (c) go("city-" + c.dataset.city);
    else if (d) {
      const names = d.dataset.lab.split("|");
      const labs = places.filter((p) => names.includes(p.city)).flatMap((p) => p.labels);
      const pick = labs.find((l) => openIn(l, year)) || labs[0];
      if (pick) openCard("l-" + pick.id, true);
    }
  });

  // ---------- Year scrubber, counts and the moments ticker ----------
  const EVENTS = [];
  const seenTitle = new Set();
  for (const l of L.labels) {
    for (const [a, b] of spans(l)) {
      EVENTS.push({ y: a, w: 3, t: `<b>${esc(l.name)}</b> ${a === first(l) ? "founded" : "revived"} in ${esc(l.city)}`, href: "l-" + l.id, kind: "lab" });
      if (b != null) EVENTS.push({ y: b, w: 1, t: `<b>${esc(l.name)}</b> ${b === lastYr(l) ? "stops" : "goes quiet"}`, href: "l-" + l.id, kind: "lab" });
    }
    for (const r of l.records || []) {
      seenTitle.add(r.title.toLowerCase());
      EVENTS.push({ y: r.year, w: 2, t: `<i>${esc(r.title)}</i> — ${esc(r.artist || "")} (${esc(l.name)})`, href: "l-" + l.id, kind: "rec" });
    }
  }
  for (const c of L.clubs) {
    const city = cityById[c.city] ? cityById[c.city].name : "";
    for (const [a, b] of spans(c)) {
      EVENTS.push({ y: a, w: 3, t: `<b>${esc(c.name)}</b> ${a === first(c) ? "opens" : "reopens"} (${esc(city)})`, href: "c-" + c.id, kind: "club" });
      if (b != null) EVENTS.push({ y: b, w: 1, t: `<b>${esc(c.name)}</b> closes`, href: "c-" + c.id, kind: "club" });
    }
    for (const m of c.moments || []) EVENTS.push({ y: m.year, w: 2, t: `${esc(c.name)}: ${esc(strip(m.text))}`, href: "c-" + c.id, kind: "club" });
    for (const r of c.live || []) {
      if (seenTitle.has(r.title.toLowerCase())) continue;
      EVENTS.push({ y: r.year, w: 2, t: `<i>${esc(r.title)}</i> — ${esc(r.artist || "")}, live at ${esc(c.name)}`, href: "c-" + c.id, kind: "rec" });
    }
  }
  const yearInput = $("year");
  function setYear(y, fromInput) {
    year = y;
    if (!fromInput) yearInput.value = y;
    $("year-big").textContent = y >= ALL ? "All years" : y;
    const clubsOpen = L.clubs.filter((c) => openIn(c, y)).length, labsOpen = L.labels.filter((l) => openIn(l, y)).length;
    $("year-counts").innerHTML = y >= ALL
      ? `<div><b>${L.labels.length}</b> labels</div><div><b>${L.clubs.length}</b> venues</div><div><b>${cities.length}</b> cities</div>`
      : `<div><b>${clubsOpen}</b> venue${clubsOpen === 1 ? "" : "s"} open</div><div><b>${labsOpen}</b> label${labsOpen === 1 ? "" : "s"} active</div>`;
    const ev = y >= ALL ? [] : EVENTS.filter((e) => e.y === y).sort((a, b) => b.w - a.w);
    $("ticker-head").textContent = y >= ALL ? "How to read the map" : `Moments in ${y}`;
    $("ticker").innerHTML = y >= ALL
      ? `<li class="hint-li">Circles are cities with venues on this page; area shows how many. Diamonds are record labels. Drag the year (or press ▶) to see what was open when, and what happened that year.</li>`
      : ev.length ? ev.slice(0, 7).map((e) => `<li class="ev-${e.kind}"><a href="#${e.href}" data-open="${e.href}">${e.t}</a></li>`).join("") + (ev.length > 7 ? `<li class="more-li">+ ${ev.length - 7} more</li>` : "")
      : `<li class="hint-li">No openings, closings or landmark records on this page in ${y}.</li>`;
    drawMarks();
    drawCursor();
  }
  yearInput.addEventListener("input", () => { stopPlay(); setYear(+yearInput.value, true); });
  let playing = null;
  function stopPlay() { if (playing) { clearInterval(playing); playing = null; $("year-play").classList.remove("on"); $("year-play").firstElementChild.textContent = "▶"; } }
  $("year-play").addEventListener("click", () => {
    if (playing) { stopPlay(); return; }
    if (year >= NOW) setYear(1900);
    $("year-play").classList.add("on"); $("year-play").firstElementChild.textContent = "❚❚";
    playing = setInterval(() => { if (year >= NOW) { stopPlay(); return; } setYear(year + 1); }, 260);
  });
  $("scrub-axis").innerHTML = [1900, 1920, 1940, 1960, 1980, 2000, 2020].map((d) => `<span style="left:${(100 * (d - Y0)) / (ALL - Y0)}%">${d}</span>`).join("") + `<span class="all" style="left:100%">All</span>`;
  $("map-legend").innerHTML = `<div><svg width="18" height="18"><circle class="club-mark" cx="9" cy="9" r="6"/></svg>Venues open (area = number)</div>
    <div><svg width="18" height="18"><path class="lab-mark" d="M9,2L15,9L9,16L3,9Z"/></svg>Record labels active</div>`;

  // =====================================================================
  // Label lifelines
  // =====================================================================
  const hidden = new Set();
  $("kind-filter").innerHTML = L.KINDS.map((k) => {
    const n = L.labels.filter((l) => l.kind === k.id).length;
    return n ? `<button class="kf on k-${k.id}" data-kind="${k.id}" aria-pressed="true"><i></i>${esc(k.name)} <em>${n}</em></button>` : "";
  }).join("");
  $("kind-filter").addEventListener("click", (e) => {
    const b = e.target.closest("[data-kind]"); if (!b) return;
    const k = b.dataset.kind;
    if (hidden.has(k)) hidden.delete(k); else hidden.add(k);
    b.classList.toggle("on", !hidden.has(k)); b.setAttribute("aria-pressed", !hidden.has(k));
    drawLifelines();
  });
  let lifeX = null;
  function drawLifelines() {
    const host = $("lifelines");
    const W = Math.max(640, host.clientWidth || 1000), LEFT = Math.min(190, W * 0.24), RIGHT = 16, ROW = 19, HEAD = 30, TOP = 24;
    const x = (y) => LEFT + ((y - Y0) / (NOW + 1 - Y0)) * (W - LEFT - RIGHT);
    lifeX = x;
    const rows = labels.filter((l) => !hidden.has(l.kind));
    let yy = TOP, body = "";
    for (const reg of L.REGIONS) {
      const rs = rows.filter((l) => l.region === reg.id); if (!rs.length) continue;
      yy += 8;
      body += `<text class="grp" x="0" y="${yy + 14}">${esc(reg.name)}</text>`;
      yy += HEAD - 8;
      for (const l of rs) {
        const cy = yy + ROW / 2;
        body += `<g class="lrow" data-id="${l.id}" tabindex="0" role="link" aria-label="${esc(l.name)}, ${yearsText(l)}">
          <rect class="hit" x="0" y="${yy}" width="${W}" height="${ROW}"/>
          <text class="lname" x="${LEFT - 10}" y="${cy + 4}" text-anchor="end">${esc(fit(shortName(l), LEFT - 14, 12))}</text>
          ${spans(l).map(([a, b]) => {
            const x0 = x(Math.max(a, Y0)), x1 = x((b ?? NOW) + 1), open = b == null;
            return `<rect class="bar k-${l.kind}${open ? " open" : ""}" x="${x0}" y="${cy - 4.5}" width="${Math.max(3, x1 - x0)}" height="9" rx="4"/>` +
              (open ? `<path class="tail k-${l.kind}" d="M${x1 + 2},${cy - 4.5}l5,4.5l-5,4.5"/>` : "");
          }).join("")}
 ${first(l) < Y0 ? `<path class="tail k-${l.kind}" d="M${x(Y0) - 2},${cy - 4.5}l-5,4.5l5,4.5"/>` : ""}
          ${(l.records || []).map((r, i) => r.year < Y0 ? "" : `<circle class="rec" data-rec="${i}" cx="${x(r.year) + (x(r.year + 1) - x(r.year)) / 2}" cy="${cy}" r="3.4"/>`).join("")}
        </g>`;
        yy += ROW;
      }
    }
    const H = yy + 26;
    let axis = "";
    for (let d = 1900; d <= 2020; d += 10) {
      axis += `<line class="grid" x1="${x(d)}" x2="${x(d)}" y1="${TOP - 4}" y2="${H - 22}"/>`;
      if (d % 20 === 0 || W > 900) axis += `<text class="tick" x="${x(d)}" y="${TOP - 10}" text-anchor="middle">${d}</text><text class="tick" x="${x(d)}" y="${H - 6}" text-anchor="middle">${d}</text>`;
    }
    host.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Timeline of record labels by region, colored by ownership">
      <defs><pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" class="hatch-bg"/><line x1="0" y1="0" x2="0" y2="5" class="hatch-ln"/></pattern></defs>
      <rect class="plot-hit" x="${LEFT}" y="0" width="${W - LEFT - RIGHT}" height="${H}"/>
      ${axis}${body}
      <g id="life-cursor"><line y1="${TOP - 4}" y2="${H - 22}"/><rect y="${TOP - 22}" width="36" height="16" rx="8"/><text y="${TOP - 10}" text-anchor="middle"></text></g>
    </svg>`;
    host.dataset.h = H;
    drawCursor();
  }
  function drawCursor() {
    const g = document.querySelector("#life-cursor"); if (!g || !lifeX) return;
    g.style.display = year >= ALL ? "none" : "";
    if (year >= ALL) return;
    const cx = lifeX(year) + (lifeX(year + 1) - lifeX(year)) / 2;
    g.querySelector("line").setAttribute("x1", cx); g.querySelector("line").setAttribute("x2", cx);
    const t = g.querySelector("text"); t.setAttribute("x", cx); t.textContent = year;
    g.querySelector("rect").setAttribute("x", cx - 18);
  }
  const lifeHost = $("lifelines");
  lifeHost.addEventListener("mouseover", (e) => {
    const row = e.target.closest(".lrow"); if (!row) return;
    const l = labelById[row.dataset.id], rc = e.target.closest(".rec");
    if (rc) {
      const r = l.records[+rc.dataset.rec];
      showTip(`<b>${esc(r.title)}</b><span>${esc(r.artist || "")} · ${r.year}${r.catalog ? ` · ${esc(r.catalog)}` : ""}</span>${r.note ? `<em>${esc(strip(r.note))}</em>` : ""}`);
    } else {
      showTip(`<b>${esc(l.name)}</b><span>${yearsText(l)} · ${esc(l.city)}, ${esc(l.country)} · ${esc(KIND[l.kind].name)}</span><em>${esc(strip(l.lead))}</em>`);
    }
  });
  lifeHost.addEventListener("mouseout", (e) => { if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(".lrow")) hideTip(); });
  lifeHost.addEventListener("click", (e) => {
    const row = e.target.closest(".lrow");
    if (row) { openCard("l-" + row.dataset.id, true); return; }
    // Clicking empty plot area sets the year.
    const svg = lifeHost.querySelector("svg"); if (!svg || !lifeX) return;
    const px = e.clientX - svg.getBoundingClientRect().left;
    for (let y = Y0; y <= NOW; y++) if (px >= lifeX(y) && px < lifeX(y + 1)) { stopPlay(); setYear(y); break; }
  });
  lifeHost.addEventListener("keydown", (e) => { const row = e.target.closest(".lrow"); if (row && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCard("l-" + row.dataset.id, true); } });

  // =====================================================================
  // Label cards
  // =====================================================================
  function labelCard(l) {
    const px = "l-" + l.id, tr = tracksFor(l.id);
    const recs = l.records || [];
    return `<article class="entry lcard k-${l.kind}" id="${px}">
      <div class="card-top">
        <div class="disc" aria-hidden="true"><div class="disc-label"><span class="${shortName(l).length > 9 ? "long" : shortName(l).length > 6 ? "mid" : ""}">${esc(shortName(l))}</span><small>${esc(l.city)}</small></div></div>
        <div class="card-main">
          <div class="card-meta"><span class="kind-badge k-${l.kind}"><i></i>${esc(KIND[l.kind].short)}</span>${yearsText(l)} · ${esc(l.city)}, ${esc(l.country)}</div>
          <h3>${esc(l.name)}</h3>
          ${l.aka ? `<div class="aka">${esc(l.aka)}</div>` : ""}
          <p class="card-lead">${fn(l.lead, px)}</p>
          ${recs.length ? `<div class="rec-strip">${recs.slice(0, 4).map((r) => `<span><b>${r.year}</b> ${esc(r.title)}</span>`).join("")}</div>` : ""}
          <button class="more" aria-expanded="false">Read the story</button>
        </div>
      </div>
      <div class="card-full" hidden>
        <div class="full-grid ${l.image ? "with-fig" : ""}">
          <div class="full-text">
            ${paras(l.story, px)}
            ${l.sound ? `<h4>The sound</h4><p>${fn(l.sound, px)}</p>` : ""}
            ${l.significance ? `<h4>What it meant</h4><p>${fn(l.significance, px)}</p>` : ""}
          </div>
          ${l.image ? figure(l.image, "card-fig") : ""}
        </div>
        ${(l.founders || []).length || (l.people || []).length ? `<h4>People</h4><ul class="people">
          ${(l.founders || []).map((f) => `<li><b>${esc(f)}</b> <span>founder</span></li>`).join("")}
          ${(l.people || []).filter((p) => !(l.founders || []).includes(p.name)).map((p) => `<li><b>${p.artistId && artistName[p.artistId] ? `<a href="./#${p.artistId}">${esc(p.name)}</a>` : esc(p.name)}</b> <span>${esc(p.role || "")}</span></li>`).join("")}
        </ul>` : ""}
        ${recs.length ? `<h4>Landmark records</h4><ol class="records">${recs.map((r) => `<li>
            <div class="r-year">${r.year}</div>
            <div><b>${esc(r.title)}</b> <span class="r-by">${esc(r.artist || "")}</span>${r.catalog ? ` <span class="r-cat">${esc(r.catalog)}</span>` : ""}
              ${r.note ? `<p>${fn(r.note, px)}</p>` : ""}
              ${r.venue || r.piece ? `<div class="link-chips">${r.venue ? clubChip(r.venue) : ""}${r.piece ? pieceChip(r.piece) : ""}</div>` : ""}
            </div></li>`).join("")}</ol>` : ""}
        ${tr.length ? `<h4>Hear a ${esc(shortName(l))} 78</h4><div class="hear">${tr.map(({ t, i }) => `<button class="hear-btn" data-track="${i}"><span class="ic">▶</span>${esc(t.title)} <small>${esc(t.artist)}, ${t.year}</small></button>`).join("")}</div>` : ""}
        ${(l.artists || []).length ? `<h4>On the tree</h4>${artistChips(l.artists)}` : ""}
        ${l.endNote ? `<p class="end-note">${fn(l.endNote, px)}</p>` : ""}
        ${sourcesList(l.sources, px)}
      </div>
    </article>`;
  }
  function drawLabels() {
    $("labels").innerHTML = L.REGIONS.map((reg) => {
      const ls = labels.filter((l) => l.region === reg.id); if (!ls.length) return "";
      return `<h3 class="group-head">${esc(reg.name)} <em>${ls.length}</em></h3><div class="card-grid">${ls.map(labelCard).join("")}</div>`;
    }).join("");
  }

  // =====================================================================
  // Essays
  // =====================================================================
  const essayById = Object.fromEntries(L.essays.map((e) => [e.id, e]));
  function essayHTML(id) {
    const e = essayById[id]; if (!e) return "";
    const px = "e-" + e.id;
    return `<article class="essay" id="${px}">
      ${e.kicker ? `<div class="kicker">${esc(e.kicker)}</div>` : ""}
      <h3>${esc(e.title)}</h3>
      ${e.lead ? `<p class="standfirst">${fn(e.lead, px)}</p>` : ""}
      ${e.image ? figure(e.image, "essay-fig") : ""}
      <div class="essay-body">${paras(e.paras, px)}</div>
      ${sourcesList(e.sources, px)}
    </article>`;
  }
  const BUSINESS = ["race-records", "the-format", "producers", "self-determination", "elsewhere"];
  const ROOMS = ["the-room", "vice-dance-colour-line", "abroad"];
  const essayNav = (ids) => ids.filter((id) => essayById[id]).length > 1
    ? `<nav class="essay-nav">${ids.filter((id) => essayById[id]).map((id) => `<a href="#e-${id}"><b>${esc(essayById[id].title)}</b><span>${esc(essayById[id].kicker || "")}</span></a>`).join("")}</nav>` : "";
  $("essays-business").innerHTML = essayNav(BUSINESS) + BUSINESS.map(essayHTML).join("");
  $("essays-rooms").innerHTML = essayNav(ROOMS) + ROOMS.map(essayHTML).join("");
  $("essays-today").innerHTML = essayById.today ? `<div class="part-head"><span>Coda</span><h2>${esc(essayById.today.title)}</h2></div>` + essayHTML("today").replace(/<h3>.*?<\/h3>/, "") : "";
  for (const id of ["business-sec", "rooms-sec", "today-sec"]) if (!document.querySelector(`#${id} .essay`)) $(id).style.display = "none";

  // =====================================================================
  // Live at… (venue ↔ label bridge)
  // =====================================================================
  const LINKS = [];
  const linkKey = new Set();
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  for (const c of L.clubs) for (const r of c.live || []) {
    const k = c.id + "|" + norm(r.title); if (linkKey.has(k)) continue;
    const known = r.label && labelById[r.label];
    const name = known ? labelById[r.label].name : cleanLabel(r.labelName);
    if (!name || /^unknown|^unissued|^none/i.test(name)) continue;
    linkKey.add(k);
    LINKS.push({ club: c.id, label: known ? r.label : null, labelName: name, title: r.title, artist: r.artist, year: r.year, recorded: r.recorded });
  }
  for (const l of L.labels) for (const r of l.records || []) if (r.venue && clubById[r.venue]) {
    const k = r.venue + "|" + norm(r.title); if (linkKey.has(k)) continue; linkKey.add(k);
    LINKS.push({ club: r.venue, label: l.id, labelName: l.name, title: r.title, artist: r.artist, year: r.year });
  }
  function drawBridge() {
    const host = $("bridge");
    if (!LINKS.length) { $("live-sec").style.display = "none"; return; }
    const W = Math.max(600, host.clientWidth || 1000), ROW = 22, PAD = 14;
    const cityIdx = (id) => L.CITIES.findIndex((c) => c.id === id);
    const left = [...new Set(LINKS.map((k) => k.club))].sort((a, b) => cityIdx(clubById[a].city) - cityIdx(clubById[b].city) || first(clubById[a]) - first(clubById[b]));
    const rightKey = (k) => k.label || "name:" + k.labelName;
    const right = [...new Set(LINKS.map(rightKey))].sort((a, b) => {
      const la = labelById[a], lb = labelById[b];
      if (la && lb) return first(la) - first(lb); if (la) return -1; if (lb) return 1; return a.localeCompare(b);
    });
    const H = Math.max(left.length, right.length) * ROW + PAD * 2;
    const yL = (i) => PAD + (H - PAD * 2 - left.length * ROW) / 2 + i * ROW + ROW / 2;
    const yR = (i) => PAD + (H - PAD * 2 - right.length * ROW) / 2 + i * ROW + ROW / 2;
    const xl = Math.min(260, W * 0.3), xr = W - Math.min(230, W * 0.28);
    let paths = "";
    LINKS.forEach((k, i) => {
      const a = yL(left.indexOf(k.club)), b = yR(right.indexOf(rightKey(k)));
      const kind = k.label ? labelById[k.label].kind : "none";
      const mx = (xl + xr) / 2;
      paths += `<path class="blink k-${kind}" data-i="${i}" data-club="${k.club}" data-right="${esc(rightKey(k))}" d="M${xl + 8},${a} C${mx},${a} ${mx},${b} ${xr - 8},${b}"/>`;
    });
    const lt = left.map((id, i) => { const c = clubById[id]; return `<g class="bnode" data-club="${id}" tabindex="0" role="link"><circle class="club-dot" cx="${xl + 4}" cy="${yL(i)}" r="4"/><text x="${xl - 6}" y="${yL(i) + 4}" text-anchor="end">${esc(c.name)} <tspan class="sub">${esc((cityById[c.city] || {}).name || "")}</tspan></text></g>`; }).join("");
    const rt = right.map((key, i) => {
      const l = labelById[key];
      return `<g class="bnode" data-right="${esc(key)}" tabindex="0" role="link"><path class="lab-dot k-${l ? l.kind : "none"}" d="M${xr - 4},${yR(i) - 5}l4.5,5l-4.5,5l-4.5,-5Z"/><text x="${xr + 8}" y="${yR(i) + 4}">${esc(l ? shortName(l) : key.slice(5))}</text></g>`;
    }).join("");
    host.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Live recordings linking venues to the labels that issued them">
      <text class="bhead" x="${xl - 6}" y="10" text-anchor="end">VENUE</text><text class="bhead" x="${xr + 8}" y="10">LABEL</text>
      <g class="blinks">${paths}</g>${lt}${rt}</svg>`;
  }
  const bridge = $("bridge");
  function bridgeHL(sel) {
    const svg = bridge.querySelector("svg"); if (!svg) return;
    svg.classList.toggle("focus", !!sel);
    svg.querySelectorAll(".blink").forEach((p) => p.classList.toggle("hl", !!sel && sel(p)));
  }
  bridge.addEventListener("mouseover", (e) => {
    const p = e.target.closest(".blink"), n = e.target.closest(".bnode");
    if (p) {
      const k = LINKS[+p.dataset.i];
      bridgeHL((q) => q === p);
      showTip(`<b>${esc(k.title)}</b><span>${esc(k.artist || "")} · ${k.year}</span><em>Recorded at ${esc(clubById[k.club].name)}${k.recorded ? `, ${esc(k.recorded)}` : ""} · issued by ${esc(k.labelName)}</em>`);
    } else if (n) {
      const key = n.dataset.club ? ["club", n.dataset.club] : ["right", n.dataset.right];
      bridgeHL((q) => q.dataset[key[0]] === key[1]);
      const ks = LINKS.filter((k) => key[0] === "club" ? k.club === key[1] : (k.label || "name:" + k.labelName) === key[1]);
      showTip(`<b>${esc(key[0] === "club" ? clubById[key[1]].name : labelById[key[1]] ? labelById[key[1]].name : key[1].slice(5))}</b><em>${ks.sort((a, b) => a.year - b.year).map((k) => `${k.year} · ${esc(k.title)}`).join("<br>")}</em>`);
    }
  });
  bridge.addEventListener("mouseout", (e) => { if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(".blink, .bnode")) { bridgeHL(null); hideTip(); } });
  bridge.addEventListener("click", (e) => {
    const n = e.target.closest(".bnode"), p = e.target.closest(".blink");
    if (n && n.dataset.club) openCard("c-" + n.dataset.club, true);
    else if (n && labelById[n.dataset.right]) openCard("l-" + n.dataset.right, true);
    else if (p) openCard("c-" + p.dataset.club, true);
  });

  // =====================================================================
  // City chapters and club cards
  // =====================================================================
  function clubCard(c) {
    const px = "c-" + c.id;
    return `<article class="entry ccard" id="${px}">
      <div class="card-main">
        <div class="card-meta"><span class="venue-badge">${esc(L.VENUE_KINDS[c.kind] || c.kind)}</span>${yearsText(c)}${c.place ? ` · ${esc(c.place)}` : ""}</div>
        <h3>${esc(c.name)}</h3>
        ${c.aka ? `<div class="aka">${esc(c.aka)}</div>` : ""}
        <p class="card-lead">${fn(c.lead, px)}</p>
        ${(c.live || []).length ? `<div class="rec-strip">${c.live.slice(0, 3).map((r) => `<span><b>${r.year}</b> ${esc(r.title)}</span>`).join("")}</div>` : ""}
        <button class="more" aria-expanded="false">Read the story</button>
      </div>
      <div class="card-full" hidden>
        <div class="full-grid ${c.image ? "with-fig" : ""}">
          <div class="full-text">${paras(c.story, px)}</div>
          ${c.image ? figure(c.image, "card-fig") : ""}
        </div>
        ${(c.moments || []).length ? `<h4>Nights to remember</h4><ol class="moments">${c.moments.slice().sort((a, b) => a.year - b.year).map((m) => `<li><b>${m.year}</b><span>${fn(m.text, px)}</span></li>`).join("")}</ol>` : ""}
        ${(c.live || []).length ? `<h4>Recorded live here</h4><ol class="records">${c.live.map((r) => `<li>
            <div class="r-year">${r.year}</div>
            <div><b>${esc(r.title)}</b> <span class="r-by">${esc(r.artist || "")}</span>${r.recorded ? ` <span class="r-cat">${esc(r.recorded)}</span>` : ""}
              ${r.note ? `<p>${fn(r.note, px)}</p>` : ""}
              <div class="link-chips">${labelChip(r.label, r.labelName)}</div>
            </div></li>`).join("")}</ol>` : ""}
        ${(c.people || []).length ? `<h4>People</h4><ul class="people">${c.people.map((p) => `<li><b>${p.artistId && artistName[p.artistId] ? `<a href="./#${p.artistId}">${esc(p.name)}</a>` : esc(p.name)}</b> <span>${esc(p.role || "")}</span></li>`).join("")}</ul>` : ""}
        ${(c.regulars || []).length ? `<h4>On the bandstand</h4>${artistChips(c.regulars)}` : ""}
        ${c.closedNote ? `<p class="end-note">${fn(c.closedNote, px)}</p>` : ""}
        ${sourcesList(c.sources, px)}
      </div>
    </article>`;
  }
  function cityTimeline(city) {
    const cs = clubsIn(city.id); if (!cs.length) return "";
    const lo = Math.floor((Math.min(...cs.map(first)) - 3) / 10) * 10, hi = NOW + 1;
    return `<div class="city-tl" data-city="${city.id}" data-lo="${lo}"></div>`;
  }
  function drawCityTimelines() {
    document.querySelectorAll(".city-tl").forEach((host) => {
      const cs = clubsIn(host.dataset.city), lo = +host.dataset.lo, hi = NOW + 1;
      const W = Math.max(520, host.clientWidth || 800), LEFT = Math.min(200, W * 0.3), ROW = 18, TOP = 18;
      const x = (y) => LEFT + ((y - lo) / (hi - lo)) * (W - LEFT - 14);
      let s = "";
      for (let d = Math.ceil(lo / 10) * 10; d <= 2020; d += 10) {
        s += `<line class="grid" x1="${x(d)}" x2="${x(d)}" y1="${TOP - 4}" y2="${TOP + cs.length * ROW}"/>`;
        if (W > 700 || d % 20 === 0) s += `<text class="tick" x="${x(d)}" y="${TOP - 7}" text-anchor="middle">${d}</text>`;
      }
      cs.forEach((c, i) => {
        const cy = TOP + i * ROW + ROW / 2;
        s += `<g class="crow" data-id="${c.id}" tabindex="0" role="link"><rect class="hit" x="0" y="${cy - ROW / 2}" width="${W}" height="${ROW}"/>
          <text class="lname" x="${LEFT - 8}" y="${cy + 4}" text-anchor="end">${esc(fit(c.name, LEFT - 12, 12))}</text>
          ${spans(c).map(([a, b]) => { const x0 = x(a), x1 = x((b ?? NOW) + 1); return `<rect class="vbar${b == null ? " open" : ""}" x="${x0}" y="${cy - 4}" width="${Math.max(3, x1 - x0)}" height="8" rx="4"/>${b == null ? `<path class="vtail" d="M${x1 + 2},${cy - 4}l4.5,4l-4.5,4"/>` : ""}`; }).join("")}
          ${(c.moments || []).map((m) => `<circle class="rec" cx="${x(m.year) + (x(m.year + 1) - x(m.year)) / 2}" cy="${cy}" r="3"/>`).join("")}
        </g>`;
      });
      const H = TOP + cs.length * ROW + 6;
      host.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Timeline of venues in ${esc(cityById[host.dataset.city].name)}">${s}</svg>`;
    });
  }
  function drawCities() {
    $("city-nav").innerHTML = cities.map((c) => `<a href="#city-${c.id}">${esc(c.name)}${clubsIn(c.id).length ? ` <em>${clubsIn(c.id).length}</em>` : ""}</a>`).join("");
    $("cities").innerHTML = cities.map((city) => {
      const cs = clubsIn(city.id), px = "city-" + city.id;
      return `<section class="city" id="${px}">
        <header class="city-head"><h3>${esc(city.name)}</h3><div class="city-meta">${esc(city.country)}${cs.length ? ` · ${cs.length} venue${cs.length === 1 ? "" : "s"} · from ${Math.min(...cs.map(first))}` : " · the scene"}</div></header>
        ${city.lead ? `<p class="era-ov">${fn(city.lead, px)}</p>` : ""}
        ${city.story ? `<div class="city-story">${paras(city.story, px)}</div>` : ""}
        ${cityTimeline(city)}
        <div class="card-grid clubs">${cs.map(clubCard).join("")}</div>
        ${sourcesList(city.sources, px)}
      </section>`;
    }).join("");
  }
  $("cities").addEventListener("mouseover", (e) => {
    const r = e.target.closest(".crow"); if (!r) return;
    const c = clubById[r.dataset.id];
    showTip(`<b>${esc(c.name)}</b><span>${yearsText(c)}${c.place ? ` · ${esc(c.place)}` : ""}</span><em>${esc(strip(c.lead))}</em>`);
  });
  $("cities").addEventListener("mouseout", (e) => { if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(".crow")) hideTip(); });
  $("cities").addEventListener("click", (e) => { const r = e.target.closest(".crow"); if (r) openCard("c-" + r.dataset.id, true); });

  // ---------- Opening cards, in-page links, footnotes ----------
  function openCard(id, scroll) {
    const card = document.getElementById(id); if (!card) return;
    const full = card.querySelector(".card-full"), btn = card.querySelector(".more");
    if (full && full.hidden) { full.hidden = false; card.classList.add("open"); if (btn) { btn.textContent = "Close"; btn.setAttribute("aria-expanded", "true"); } }
    if (scroll) { card.scrollIntoView({ behavior: "smooth", block: "start" }); card.classList.remove("flash"); void card.offsetWidth; card.classList.add("flash"); }
  }
  function go(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  document.body.addEventListener("click", (e) => {
    const more = e.target.closest(".more");
    if (more) {
      const card = more.closest(".entry"), full = card.querySelector(".card-full");
      const open = full.hidden;
      full.hidden = !open; card.classList.toggle("open", open);
      more.textContent = open ? "Close" : "Read the story"; more.setAttribute("aria-expanded", open);
      if (!open && card.getBoundingClientRect().top < 0) card.scrollIntoView({ block: "start" });
      return;
    }
    const a = e.target.closest("a[data-open]");
    if (a) { e.preventDefault(); openCard(a.dataset.open, true); history.replaceState(null, "", "#" + a.dataset.open); return; }
    const f = e.target.closest("a.fn");
    if (f) {
      const target = document.getElementById(f.getAttribute("href").slice(1)); if (!target) return;
      e.preventDefault();
      const card = target.closest(".entry"); if (card) openCard(card.id, false);
      const det = target.closest("details"); if (det) det.open = true;
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.remove("flash-src"); void target.offsetWidth; target.classList.add("flash-src");
      return;
    }
    const h = e.target.closest(".hear-btn");
    if (h && window.JazzPlayer) window.JazzPlayer.playIndex(+h.dataset.track);
  });
  // Spin the disc of the label whose 78 is playing in the site player.
  function syncPlaying() {
    const P = window.JazzPlayer; if (!P || !P.current) return;
    const idx = P.index ? P.index() : -1, on = P.playing();
    document.querySelectorAll(".hear-btn").forEach((b) => { const me = on && +b.dataset.track === idx; b.classList.toggle("playing", me); b.querySelector(".ic").textContent = me ? "❚❚" : "▶"; });
    document.querySelectorAll(".lcard").forEach((c) => c.classList.toggle("spinning", on && !!c.querySelector(`.hear-btn[data-track="${idx}"]`)));
  }
  window.addEventListener("jft-track", syncPlaying);

  // =====================================================================
  // Bibliography, section index, boot
  // =====================================================================
  const bib = new Map();
  for (const s of [...L.labels, ...L.clubs, ...L.CITIES, ...L.essays].flatMap((x) => x.sources || [])) {
    const key = s.cite.replace(/,?\s*(pp?\.|ch\.|chapter|chs?\.)\s.*$/i, "").replace(/\.$/, "").trim();
    if (!bib.has(key)) bib.set(key, s.url || "");
  }
  $("bibliography").innerHTML = bib.size ? `<details class="srcs"><summary>Full bibliography (${bib.size})</summary><ul>${[...bib.entries()].sort((a, b) => a[0].replace(/^[“"]/, "").localeCompare(b[0].replace(/^[“"]/, ""))).map(([c, u]) => `<li>${esc(c)}${u ? ` <a href="${esc(u)}" target="_blank" rel="noopener">↗</a>` : ""}</li>`).join("")}</ul></details>` : "";

  drawLabels();
  drawCities();
  const idx = $("era-index");
  const entries = [["atlas", "◎", "The atlas"], ["lifelines-sec", "I", "Label lifelines"], ["labels-sec", "II", "The labels"], ["business-sec", "III", "The business of records"],
    ["live-sec", "IV", "Live at…"], ["locals-sec", "V", "The locals"], ["rooms-sec", "VI", "The rooms and the world"], ["today-sec", "♪", "Today"]]
    .filter(([id]) => { const el = $(id); return el && el.style.display !== "none"; });
  idx.innerHTML = entries.map(([id, n, label]) => `<a href="#${id}" data-era="${id}"><i>${n}</i><span>${esc(label)}</span></a>`).join("");
  const obs = new IntersectionObserver((ens) => {
    for (const en of ens) if (en.isIntersecting) idx.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.era === en.target.id));
  }, { rootMargin: "-40% 0px -55% 0px" });
  entries.forEach(([id]) => obs.observe($(id)));

  const q = new URLSearchParams(location.search);
  drawMapBase();
  if (q.get("view") && VIEWS[q.get("view")] !== undefined) { view = viewBox(q.get("view")); document.querySelectorAll(".views button").forEach((b) => b.classList.toggle("on", b.dataset.view === q.get("view"))); }
  drawLifelines();
  drawBridge();
  drawCityTimelines();
  setYear(q.get("year") ? Math.max(Y0, Math.min(ALL, +q.get("year"))) : ALL);
  syncPlaying();
  let rz;
  addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { drawMarks(); drawLifelines(); drawBridge(); drawCityTimelines(); }, 150); });

  // Debug/screenshot hooks: ?solo=<section id> shows only that section; ?open=<card id> expands a card.
  const solo = q.get("solo");
  if (solo) document.querySelectorAll(".hero, .atlas, .lsec, .colophon").forEach((el) => { if (el.id !== solo && !el.contains(document.getElementById(solo))) el.style.display = "none"; });
  if (q.get("open")) openCard(q.get("open"), false);
  if (location.hash.length > 1) setTimeout(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (/^[lc]-/.test(id)) openCard(id, true); else go(id);
  }, 250);
  if (solo) setTimeout(() => { drawMarks(); drawLifelines(); drawBridge(); drawCityTimelines(); }, 50);
})();
