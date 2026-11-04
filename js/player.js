/* Jazz Family Tree — background music player (public-domain recordings from data/playlist.js).
   Shared by the tree and Notes on Notes; remembers track, position and play state across pages.
   Fires a "jft-track" window event with { track, playing } so pages can react (e.g. highlight the artist). */
(function (g) {
  const LIST = g.JAZZ_PLAYLIST || [];
  if (!LIST.length) { g.JazzPlayer = { pause() {}, playIndex() {}, current: () => null, index: () => -1, playing: () => false }; return; }

  const KEY = "jft-player";
  const saved = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } })();
  let idx = Math.min(saved.idx || 0, LIST.length - 1);
  let wantPlay = false;
  const audio = new Audio();
  audio.preload = "none";
  audio.volume = saved.volume ?? 0.7;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const normT = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  const notesFor = (t) => ((g.NOTES && g.NOTES.pieces) || []).find((p) => normT(p.title) === normT(t.title) && Math.abs(p.year - t.year) <= 1);
  const notesHref = (p) => `${/notes\.html$/.test(location.pathname) ? "" : "notes.html"}#${p.id}`;
  const fmt = (s) => !isFinite(s) ? "–:––" : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  // ---------- UI ----------
  const el = document.createElement("div");
  el.id = "player";
  el.innerHTML = `
    <div class="pl-main">
      <button class="pl-btn pl-prev" aria-label="Previous track" title="Previous">
        <svg viewBox="0 0 24 24"><path d="M6 5v14M19 5 9 12l10 7z"/></svg></button>
      <button class="pl-btn pl-play" aria-label="Play" title="Play / pause (space)">
        <svg class="i-play" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>
        <svg class="i-pause" viewBox="0 0 24 24"><path d="M7 4h3.5v16H7zM13.5 4H17v16h-3.5z"/></svg></button>
      <button class="pl-btn pl-next" aria-label="Next track" title="Next">
        <svg viewBox="0 0 24 24"><path d="M18 5v14M5 5l10 7-10 7z"/></svg></button>
      <div class="pl-info">
        <div class="pl-title"></div>
        <div class="pl-artist"></div>
      </div>
      <div class="pl-eq" aria-hidden="true"><i></i><i></i><i></i></div>
      <button class="pl-btn pl-list" aria-label="Show playlist" title="Playlist">
        <svg viewBox="0 0 24 24"><path d="M4 6h12M4 12h12M4 18h8M18 15v6M18 21a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM18 15l3-1"/></svg></button>
    </div>
    <div class="pl-progress" role="slider" aria-label="Seek" tabindex="0"><div class="pl-fill"></div></div>
    <div class="pl-panel">
      <div class="pl-head"><b>On the turntable</b><span>${LIST.length} public-domain recordings, ${LIST[0].year}–${LIST[LIST.length - 1].year}</span></div>
      <ol class="pl-tracks">${LIST.map((t, i) => `<li data-i="${i}"><span class="n">${i + 1}</span><span class="t"><b>${esc(t.title)}</b><em>${esc(t.artist)} · ${t.year}</em></span>${notesFor(t) ? `<a class="an" href="${notesHref(notesFor(t))}" title="Read the analysis in Notes on Notes">♪</a>` : ""}<span class="d">${fmt(t.duration)}</span></li>`).join("")}</ol>
      <div class="pl-foot">Recordings made before 1926 are in the U.S. public domain. Sources: Wikimedia Commons &amp; the Internet Archive — <a class="pl-src" href="#" target="_blank" rel="noopener">provenance of this track ↗</a></div>
    </div>`;
  document.body.appendChild(el);
  const q = (s) => el.querySelector(s);

  function render() {
    const t = LIST[idx];
    q(".pl-title").textContent = t.title;
    const first = (t.artistIds || [])[0];
    q(".pl-artist").innerHTML = `${first ? `<a href="./#${esc(first)}" data-artist="${esc(first)}">${esc(t.artist)}</a>` : esc(t.artist)} · ${t.year}`;
    q(".pl-src").href = t.page || "#";
    el.querySelectorAll(".pl-tracks li").forEach((li) => li.classList.toggle("on", +li.dataset.i === idx));
    el.classList.toggle("playing", !audio.paused);
    q(".pl-play").setAttribute("aria-label", audio.paused ? "Play" : "Pause");
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: t.title, artist: `${t.artist} (${t.year})`, album: "Jazz Family Tree" });
    }
  }
  function save() {
    localStorage.setItem(KEY, JSON.stringify({ idx, t: Math.floor(audio.currentTime || 0), playing: !audio.paused, volume: audio.volume }));
  }
  function announce() { g.dispatchEvent(new CustomEvent("jft-track", { detail: { track: LIST[idx], playing: !audio.paused } })); }

  // Commons originals (.ogg) are better than their MP3 transcodes; use them where the browser can.
  const oggOK = !!audio.canPlayType('audio/ogg; codecs="vorbis"');
  function load(i, startAt = 0) {
    idx = (i + LIST.length) % LIST.length;
    const t = LIST[idx];
    const useAlt = oggOK && t.alt && /\.(ogg|oga)$/i.test(t.alt);
    audio.src = useAlt ? t.alt : t.src;
    audio.dataset.alt = useAlt ? t.src : t.alt || "";
    audio.dataset.start = startAt;
    render(); save();
  }
  function play() {
    wantPlay = true;
    const p = audio.play();
    if (p && p.catch) p.catch(() => { wantPlay = false; render(); });
  }
  function pause() { wantPlay = false; audio.pause(); }
  const toggle = () => (audio.paused ? play() : pause());
  const next = () => { load(idx + 1); play(); };
  const prev = () => { if (audio.currentTime > 4) { audio.currentTime = 0; return; } load(idx - 1); play(); };

  audio.addEventListener("loadedmetadata", () => {
    const s = +audio.dataset.start || 0;
    if (s > 0 && s < audio.duration - 2) audio.currentTime = s;
    audio.dataset.start = 0;
  });
  audio.addEventListener("play", () => { render(); save(); announce(); });
  audio.addEventListener("pause", () => { render(); save(); announce(); });
  audio.addEventListener("ended", next);
  audio.addEventListener("error", () => {
    // Try the alternate encoding once, otherwise skip ahead.
    if (audio.dataset.alt && audio.src !== audio.dataset.alt) { audio.src = audio.dataset.alt; audio.dataset.alt = ""; if (wantPlay) play(); }
    else if (wantPlay) setTimeout(next, 400);
  });
  let lastSave = 0;
  audio.addEventListener("timeupdate", () => {
    const d = audio.duration || LIST[idx].duration;
    q(".pl-fill").style.transform = `scaleX(${Math.min(1, (audio.currentTime || 0) / d)})`;
    if (Date.now() - lastSave > 3000) { save(); lastSave = Date.now(); }
  });

  q(".pl-play").addEventListener("click", toggle);
  q(".pl-next").addEventListener("click", next);
  q(".pl-prev").addEventListener("click", prev);
  q(".pl-list").addEventListener("click", () => el.classList.toggle("open"));
  q(".pl-tracks").addEventListener("click", (e) => { if (e.target.closest(".an")) return; const li = e.target.closest("li"); if (li) { load(+li.dataset.i); play(); } });
  q(".pl-progress").addEventListener("click", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const d = audio.duration || LIST[idx].duration;
    if (!audio.src) load(idx);
    audio.currentTime = Math.max(0, Math.min(d - 0.5, ((e.clientX - r.left) / r.width) * d));
  });
  q(".pl-progress").addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") audio.currentTime = Math.min((audio.duration || 0) - 0.5, audio.currentTime + 10);
    if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 10);
  });
  q(".pl-artist").addEventListener("click", (e) => {
    const a = e.target.closest("[data-artist]");
    if (a && g.__jft) { e.preventDefault(); g.__jft.select(a.dataset.artist, true); }
  });
  document.addEventListener("click", (e) => { if (!el.contains(e.target)) el.classList.remove("open"); });
  g.addEventListener("keydown", (e) => {
    if (e.code !== "Space" || /input|textarea|button|select/i.test(e.target.tagName) || e.target.isContentEditable) return;
    e.preventDefault(); toggle();
  });
  g.addEventListener("pagehide", save);
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", play);
    navigator.mediaSession.setActionHandler("pause", pause);
    navigator.mediaSession.setActionHandler("nexttrack", next);
    navigator.mediaSession.setActionHandler("previoustrack", prev);
  }

  load(idx, saved.t || 0);
  // Resume if the visitor had music on when they left the previous page (browsers may still block until a click).
  if (saved.playing) play();

  // Play a given track now (or pause it if it is already the one playing).
  const playIndex = (i) => { if (i === idx && !audio.paused) { pause(); return; } if (i !== idx) load(i); play(); };
  g.JazzPlayer = { play, pause, toggle, next, prev, playIndex, current: () => LIST[idx], index: () => idx, playing: () => !audio.paused, el };
})(window);
