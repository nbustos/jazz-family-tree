/* Playlists — one list per era (plus Deep Roots), shown in three columns: YouTube, Spotify, Apple Music. */
(function () {
  const J = window.JAZZ || { eras: [], branches: [], artists: [] };
  const P = window.PLAYLISTS || [];
  const APPLE = window.PLAYLISTS_APPLE || {};
  const IMAGES = J.images || {};
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const eraById = Object.fromEntries(J.eras.map((e) => [e.id, e]));
  const branchById = Object.fromEntries(J.branches.map((b) => [b.id, b]));
  const artistById = Object.fromEntries(J.artists.map((a) => [a.id, a]));

  // ---------- Theme ----------
  const setTheme = (t) => { document.body.dataset.theme = t; document.documentElement.dataset.theme = t; localStorage.setItem("jft-theme", t); };
  setTheme(new URLSearchParams(location.search).get("theme") || localStorage.getItem("jft-theme") || "night");
  $("btn-theme").addEventListener("click", () => setTheme(document.body.dataset.theme === "night" ? "paper" : "night"));

  // ---------- Services ----------
  const query = (t) => `${t.title} ${t.artist.split(/ feat\.? /i)[0]}`.replace(/[“”"]/g, "");
  const appleHit = (t) => t.apple !== false && APPLE[`${t.artist}|${t.title}`];
  const SERVICES = [
    { id: "youtube", name: "YouTube", link: (t) => ({ href: `https://www.youtube.com/results?search_query=${encodeURIComponent(query(t))}` }),
      foot: () => "Each track opens a YouTube search." },
    { id: "spotify", name: "Spotify", link: (t) => ({ href: `https://open.spotify.com/search/${encodeURIComponent(query(t))}` }),
      foot: () => "Each track opens a Spotify search." },
    { id: "apple", name: "Apple Music", link: (t) => { const h = appleHit(t); return h ? { href: h.url, direct: true } : { href: `https://music.apple.com/us/search?term=${encodeURIComponent(query(t))}` }; },
      foot: (p) => { const n = p.tracks.filter(appleHit).length; return n === p.tracks.length ? "Every track links straight to Apple Music." : `${n} of ${p.tracks.length} link straight to the track; the rest open a search.`; } },
  ];
  const SVC_ICON = {
    youtube: `<svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3z" class="fill"/></svg>`,
    spotify: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M7 9.5c3.5-1 7.3-.7 10.3 1M7.6 12.6c2.8-.8 5.8-.5 8.3.9M8.3 15.5c2.1-.5 4.3-.3 6.2.7"/></svg>`,
    apple: `<svg viewBox="0 0 24 24"><path d="M9 18V6.5l10-2.5v11.5"/><circle cx="6.8" cy="18" r="2.3"/><circle cx="16.8" cy="15.5" r="2.3"/></svg>`,
  };
  const SEARCH = `<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/></svg>`;
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  const lists = P.map((p) => {
    const era = p.era ? eraById[p.era] : null;
    const name = p.name || (era && era.name) || p.id;
    const years = p.years || (era ? `${era.years[0]}–${p.era === "today" ? "now" : era.years[1]}` : "");
    const href = p.href || (era ? `./#era-${era.id}` : "./");
    const num = era ? ROMAN[J.eras.indexOf(era)] : "⁂";
    return { ...p, name, yearsText: years, href, num };
  });
  const colorOf = (t) => {
    const b = branchById[t.branch] || branchById[(artistById[(t.artistIds || [])[0]] || {}).branch];
    return b ? b.color : "var(--ink-3)";
  };
  const branchName = (t) => { const b = branchById[t.branch] || branchById[(artistById[(t.artistIds || [])[0]] || {}).branch]; return b ? b.name : ""; };
  const yearOf = (t) => t.when || t.year || "";

  // ---------- Render ----------
  const total = lists.reduce((s, p) => s + p.tracks.length, 0);
  const direct = lists.reduce((s, p) => s + p.tracks.filter(appleHit).length, 0);
  $("ep-stats").innerHTML = `<span><b>${lists.length}</b> playlists</span><span><b>${total}</b> tracks</span><span><b>${new Set(lists.flatMap((p) => p.tracks.map((t) => t.artist))).size}</b> artists and bands</span><span><b>3</b> services</span>`;
  $("svc-switch").innerHTML = SERVICES.map((s) => `<button data-svc="${s.id}" class="svc-${s.id}">${SVC_ICON[s.id]}<span>${s.name}</span></button>`).join("");

  const row = (p, t, i, s) => {
    const l = s.link(t);
    return `<li data-i="${i}"><a href="${esc(l.href)}" target="_blank" rel="noopener" title="${l.direct ? "Open" : "Search"} on ${s.name}: ${esc(t.title)} — ${esc(t.artist)}">
      <span class="n">${String(i + 1).padStart(2, "0")}</span>
      <span class="tx"><span class="t">${esc(t.title)}</span><span class="a"><s style="background:${colorOf(t)}"></s><span class="an">${esc(t.artist)}</span><span class="yr">· ${esc(yearOf(t))}</span></span></span>
      <span class="go" aria-hidden="true">${l.direct ? "↗" : SEARCH}</span></a></li>`;
  };
  const column = (p, s) => `<div class="svc-col svc-${s.id}" data-svc="${s.id}">
      <div class="svc-head">${SVC_ICON[s.id]}<b>${s.name}</b><button class="copy" data-list="${p.id}" title="Copy as “Title — Artist” lines">Copy list</button></div>
      <ol class="tracks">${p.tracks.map((t, i) => row(p, t, i, s)).join("")}</ol>
      <div class="svc-foot">${esc(s.foot(p))}</div>
    </div>`;
  const chip = (id) => {
    const a = artistById[id]; if (!a) return "";
    const im = IMAGES[id];
    return `<a class="link-chip person" href="./#${esc(id)}">${im && im.src ? `<img src="${esc(im.src)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ""}${esc(a.name)}</a>`;
  };
  const liner = (p) => `<details class="liner"><summary>Liner notes <span>${p.tracks.length} tracks</span></summary>
      <ol>${p.tracks.map((t) => `<li><div class="lh"><b>${esc(t.title)}</b> <span>${esc(t.artist)} · ${esc(yearOf(t))}${branchName(t) ? ` · <i style="color:${colorOf(t)}">●</i> ${esc(branchName(t))}` : ""}</span></div>
        <p>${esc(t.note)}</p>${(t.artistIds || []).some((id) => artistById[id]) ? `<div class="link-chips">${t.artistIds.map(chip).join("")}</div>` : ""}</li>`).join("")}</ol></details>`;

  $("playlists").innerHTML = lists.map((p) => `<section class="ep" id="${esc(p.id)}">
      <header class="ep-head">
        <div class="ep-num">${p.num}</div>
        <div class="ep-title"><h2>${esc(p.name)}</h2><div class="ep-years">${esc(p.yearsText)} · ${p.tracks.length} tracks · <a href="${esc(p.href)}">${p.era ? "See this era on the tree" : "Read Deep Roots"} →</a></div></div>
      </header>
      <p class="ep-intro">${esc(p.intro)}</p>
      <div class="svc-grid">${SERVICES.map((s) => column(p, s)).join("")}</div>
      <div class="now-note" aria-live="polite"><span class="nn-k">Liner note</span><span class="nn-t">Hover a track to read why it’s here.</span></div>
      ${liner(p)}
    </section>`).join("");

  // ---------- Interaction ----------
  // Hovering a track lights the same row in all three columns and shows its liner note.
  document.querySelectorAll(".ep").forEach((sec) => {
    const p = lists.find((x) => x.id === sec.id);
    const nn = sec.querySelector(".nn-t"), def = nn.textContent;
    const mark = (i) => {
      sec.querySelectorAll(".tracks li").forEach((li) => li.classList.toggle("hot", li.dataset.i === i));
      const t = i != null ? p.tracks[+i] : null;
      nn.innerHTML = t ? `<b>${esc(t.title)}</b> · ${esc(t.note)}` : esc(def);
      sec.querySelector(".now-note").classList.toggle("on", !!t);
    };
    sec.addEventListener("mouseover", (e) => { const li = e.target.closest(".tracks li"); if (li) mark(li.dataset.i); });
    sec.addEventListener("focusin", (e) => { const li = e.target.closest(".tracks li"); if (li) mark(li.dataset.i); });
    sec.querySelector(".svc-grid").addEventListener("mouseleave", () => mark(null));
  });

  document.body.addEventListener("click", async (e) => {
    const c = e.target.closest(".copy");
    if (c) {
      const p = lists.find((x) => x.id === c.dataset.list);
      const text = p.tracks.map((t) => `${t.title} — ${t.artist}`).join("\n");
      try { await navigator.clipboard.writeText(text); c.textContent = "Copied ✓"; }
      catch { c.textContent = "Copy failed"; }
      setTimeout(() => (c.textContent = "Copy list"), 1600);
      return;
    }
    const b = e.target.closest(".svc-switch button");
    if (b) setSvc(b.dataset.svc);
  });
  // On narrow screens one column shows at a time; the switch picks which.
  const setSvc = (id) => {
    document.body.dataset.svc = id;
    document.querySelectorAll(".svc-switch button").forEach((x) => x.classList.toggle("on", x.dataset.svc === id));
    localStorage.setItem("jft-svc", id);
  };
  setSvc(new URLSearchParams(location.search).get("svc") || localStorage.getItem("jft-svc") || "youtube");

  // ---------- Section index ----------
  const idx = $("era-index");
  idx.innerHTML = lists.map((p) => `<a href="#${esc(p.id)}" data-era="${esc(p.id)}"><i>${p.num}</i><span>${esc(p.name)}</span></a>`).join("");
  const obs = new IntersectionObserver((ens) => {
    for (const en of ens) if (en.isIntersecting) idx.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.era === en.target.id));
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll(".ep").forEach((s) => obs.observe(s));
  if (location.hash) setTimeout(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(), 50);
  window.__pl = { lists, direct, total };
})();
