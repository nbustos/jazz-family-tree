/* Jazz Family Tree — renderer and interaction.
   Everything is drawn on one canvas. A fisheye lens follows the pointer and magnifies the tree
   around it (Sarkar & Brown graphical fisheye); wheel/pinch zooms, drag pans. */
(function () {
  const J = window.JAZZ;
  const L = JazzLayout.computeLayout(J);
  const IMAGES = J.images || {};
  const NET = J.network || {};
  const branchById = Object.fromEntries(J.branches.map((b) => [b.id, b]));
  const eraById = Object.fromEntries(L.eras.map((e) => [e.id, e]));
  const nodeById = new Map(L.nodes.map((n) => [n.id, n]));

  // Reverse relationships.
  const influenced = new Map(), memberOf = new Map();
  for (const a of J.artists) {
    for (const i of a.influences || []) if (nodeById.has(i)) (influenced.get(i) || influenced.set(i, []).get(i)).push(a.id);
    for (const m of a.members || []) if (nodeById.has(m)) (memberOf.get(m) || memberOf.set(m, []).get(m)).push(a.id);
  }

  // ---------- Themes (canvas colors; CSS handles the chrome) ----------
  const THEMES = {
    night: {
      trunk: ["#4a3828", "#7d6248", "#4a3828"], bark: "rgba(30,20,12,.35)", limb: "#6e5640",
      twig: "rgba(150,120,90,.75)", leaf: ["#4f7a33", "#6e9a45", "#86ad55"], root: "#5a4532",
      plate: "#3c3633", plateEdge: "#655b54", plateText: "#efe3cf", plateSub: "#b9a98f",
      kin: "#4f7d43", kinText: "#eaf3df", kinLine: "rgba(120,170,100,.5)",
      label: "#f1e6d4", labelSub: "#b8a78f", halo: "rgba(18,13,10,.85)",
      ruler: "rgba(232,220,200,.75)", rulerFaint: "rgba(232,220,200,.18)", strata: "rgba(232,220,200,.28)",
      ring: "#d8c7a8", lens: "rgba(255,240,210,.10)", link: "#e7b54a", linkOut: "#62c3b3",
    },
    paper: {
      trunk: ["#2e2018", "#5a4130", "#2e2018"], bark: "rgba(255,240,220,.10)", limb: "#3b2a1e",
      twig: "rgba(70,50,35,.8)", leaf: ["#5d6d2f", "#7a8a3e", "#97a552"], root: "#3b2a1e",
      plate: "#fbf6ea", plateEdge: "#d6c6a6", plateText: "#b3261e", plateSub: "#7b6a52",
      kin: "#6f8a3a", kinText: "#fbfbf2", kinLine: "rgba(90,120,50,.5)",
      label: "#2a1d14", labelSub: "#7b6a52", halo: "rgba(246,239,225,.9)",
      ruler: "rgba(60,40,25,.8)", rulerFaint: "rgba(60,40,25,.15)", strata: "rgba(60,40,25,.3)",
      ring: "#8a6f4e", lens: "rgba(120,80,30,.07)", link: "#c0392b", linkOut: "#1f7a8c",
    },
  };
  let theme = THEMES[localStorage.getItem("jft-theme") || "night"] || THEMES.night;

  // ---------- Canvas & view ----------
  const canvas = document.getElementById("stage");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, DPR = 1;
  const view = { k: 0.2, x: 0, y: 0 };
  let minK = 0.05, maxK = 3.2;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    lens.R = Math.max(42, Math.min(85, Math.min(W, H) * 0.08));   // a quarter of the original loupe
    dirty = true;
  }

  function fitView(animate) {
    const b = L.bounds;
    const top = 70, bottom = 64, side = 70;
    const k = Math.min((W - 2 * side) / (b.maxX - b.minX), (H - top - bottom) / (b.maxY - b.minY));
    minK = k * 0.7;
    const target = { k, x: W / 2 - ((b.minX + b.maxX) / 2) * k, y: top + (H - top - bottom) / 2 - ((b.minY + b.maxY) / 2) * k };
    animate ? flyTo(target) : Object.assign(view, target);
    dirty = true;
  }

  // ---------- Fisheye lens ----------
  const lens = { x: -9999, y: -9999, tx: -9999, ty: -9999, s: 0, ts: 0, R: 65, D: 3.6, enabled: true };
  let fe = { on: false };
  function prepFisheye() {
    const D = lens.D * lens.s;
    fe = { on: D > 0.02, D, R: lens.R, mx: lens.x, my: lens.y };
    if (fe.on) { fe.k0 = (Math.exp(D) / (Math.exp(D) - 1)) * fe.R; fe.k1 = D / fe.R; }
  }
  // world → screen with distortion. Returns [x, y, z] where z is local magnification.
  function P(wx, wy) {
    const sx = wx * view.k + view.x, sy = wy * view.k + view.y;
    if (!fe.on) return [sx, sy, 1];
    const dx = sx - fe.mx, dy = sy - fe.my, d = Math.hypot(dx, dy);
    if (!d || d >= fe.R) return [sx, sy, d ? 1 : 1 + (fe.k0 * fe.k1 - 1) * 0.75];
    const k = (fe.k0 * (1 - Math.exp(-d * fe.k1))) / d * 0.75 + 0.25;
    return [fe.mx + dx * k, fe.my + dy * k, Math.min(k, 8)];
  }
  const toWorld = (sx, sy) => [(sx - view.x) / view.k, (sy - view.y) / view.k];

  // ---------- Images ----------
  const imgCache = new Map();
  function getImg(id) {
    if (imgCache.has(id)) return imgCache.get(id);
    const meta = IMAGES[id];
    let entry = null;
    if (meta && meta.src) {
      const img = new Image();
      img.decoding = "async";
      img.referrerPolicy = "no-referrer";
      entry = { img, ok: false, meta };
      img.onload = () => { entry.ok = true; dirty = true; };
      img.src = meta.src;
    }
    imgCache.set(id, entry);
    return entry;
  }

  // ---------- State ----------
  let dirty = true;
  let growing = false;      // instrument-highlight resize still animating
  let hover = null;          // hit object under pointer
  let selected = null;       // node id
  let filter = null;         // instrument family key
  let vintage = localStorage.getItem("jft-vintage") !== "0";
  let hits = [];
  let anim = null;

  const FAMILIES = [
    { key: "brass", label: "Trumpet & Cornet", test: (i) => /trumpet|cornet|flugel/.test(i) },
    { key: "sax", label: "Saxophone", test: (i) => /sax/.test(i) },
    { key: "reeds", label: "Clarinet & Flute", test: (i) => /clarinet|flute/.test(i) },
    { key: "trombone", label: "Trombone", test: (i) => /trombone/.test(i) },
    { key: "keys", label: "Piano & Keys", test: (i) => /piano|keyboard|organ|synth|rhodes/.test(i) },
    { key: "guitar", label: "Guitar", test: (i) => /guitar|banjo/.test(i) && !/bass guitar/.test(i) },
    { key: "bass", label: "Bass", test: (i) => /bass|tuba/.test(i) && !/clarinet|sax|trombone/.test(i) },
    { key: "drums", label: "Drums & Percussion", test: (i) => /drum|percussion|conga|timbal|vibra|marimba/.test(i) },
    { key: "strings", label: "Violin & Strings", test: (i) => /violin|cello|harp|viola/.test(i) },
    { key: "vocals", label: "Voice", test: (i) => /vocal|sing/.test(i) },
    { key: "band", label: "Bands", test: null },
  ];
  const famOf = (a, f) => f.key === "band" ? a.type === "band" : a.type !== "band" && (a.instruments || []).some((i) => f.test(i.toLowerCase()));

  function related(id) {
    const a = nodeById.get(id).a;
    return new Set([id, ...(a.influences || []), ...(influenced.get(id) || []), ...(a.members || []), ...(memberOf.get(id) || [])]);
  }
  let relatedSet = null;

  // ---------- Drawing helpers ----------
  function tapered(pts, widths, fill) {
    const n = pts.length;
    const sp = pts.map((p) => P(p.x, p.y));
    const left = [], right = [];
    for (let i = 0; i < n; i++) {
      const a = sp[Math.max(0, i - 1)], b = sp[Math.min(n - 1, i + 1)];
      let dx = b[0] - a[0], dy = b[1] - a[1];
      const len = Math.hypot(dx, dy) || 1; dx /= len; dy /= len;
      const w = (widths[i] * view.k * sp[i][2]) / 2 + 0.35;
      left.push([sp[i][0] - dy * w, sp[i][1] + dx * w]);
      right.push([sp[i][0] + dy * w, sp[i][1] - dx * w]);
    }
    ctx.beginPath();
    smooth(left, true);
    const r = right.reverse();
    ctx.lineTo(r[0][0], r[0][1]);
    smooth(r, false);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    return sp;
  }
  function smooth(pts, move) {
    if (move) ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
      ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
    }
    const last = pts[pts.length - 1];
    ctx.lineTo(last[0], last[1]);
  }
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  const onScreen = (x, y, m) => x > -m && x < W + m && y > -m && y < H + m;

  function plaque(text, sub, x, y, scale, opts) {
    let fs = Math.min(opts.maxFs || 22, opts.fs * scale);
    if (opts.floor) fs = Math.max(opts.floor, fs);
    if (fs < (opts.minFs || 8.5)) return null;
    ctx.font = `${opts.weight || 600} ${fs}px ${opts.family || "Inter, system-ui, sans-serif"}`;
    const tw = ctx.measureText(text).width;
    let sw = 0, sfs = fs * 0.62;
    if (sub && fs > 11) { ctx.font = `500 ${sfs}px Inter, system-ui, sans-serif`; sw = ctx.measureText(sub).width; }
    const w = Math.max(tw, sw) + fs * 1.1, h = fs * (sub && fs > 11 ? 2.05 : 1.55);
    const bx = opts.align === "left" ? x : opts.align === "right" ? x - w : x - w / 2;
    const by = y - h / 2;
    ctx.save();
    ctx.globalAlpha = opts.alpha ?? 1;
    ctx.shadowColor = "rgba(0,0,0,.35)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
    roundRect(bx, by, w, h, Math.min(6, fs * 0.35));
    ctx.fillStyle = opts.bg; ctx.fill();
    ctx.shadowColor = "transparent";
    if (opts.edge) { ctx.strokeStyle = opts.edge; ctx.lineWidth = 1; ctx.stroke(); }
    if (opts.stripe) { ctx.fillStyle = opts.stripe; roundRect(bx, by, Math.max(3, fs * 0.28), h, 2); ctx.fill(); }
    ctx.fillStyle = opts.color; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = `${opts.weight || 600} ${fs}px ${opts.family || "Inter, system-ui, sans-serif"}`;
    const cx = bx + w / 2 + (opts.stripe ? fs * 0.12 : 0);
    ctx.fillText(text, cx, sub && fs > 11 ? by + h * 0.37 : by + h / 2 + 0.5);
    if (sub && fs > 11) {
      ctx.font = `500 ${sfs}px Inter, system-ui, sans-serif`; ctx.fillStyle = opts.subColor || opts.color;
      ctx.fillText(sub, cx, by + h * 0.72);
    }
    ctx.restore();
    return { x: bx, y: by, w, h };
  }

  // ---------- Render ----------
  function render(t) {
    prepFisheye();
    const th = theme;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, W, H);
    hits = [];
    const k = view.k;

    // Ground strata (dated layers below the trunk).
    for (const layer of L.rootLayers) {
      const [, yTop] = P(0, layer.y0);
      if (layer.id !== 2) {
        ctx.save();
        ctx.strokeStyle = th.strata; ctx.setLineDash([10, 8]); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(0, yTop); ctx.lineTo(W, yTop); ctx.stroke();
        ctx.restore();
      }
    }
    const groundY = P(0, 40)[1];
    ctx.save();
    const gg = ctx.createLinearGradient(0, groundY, 0, groundY + 200 * k + 40);
    gg.addColorStop(0, "rgba(0,0,0,0)"); gg.addColorStop(1, theme === THEMES.night ? "rgba(0,0,0,.25)" : "rgba(90,60,30,.06)");
    ctx.fillStyle = gg; ctx.fillRect(0, groundY, W, H);
    ctx.restore();

    // Roots.
    for (const r of L.roots) {
      for (const l of r.rootlets) {
        const a = P(l.x0, l.y0), b = P(l.x1, l.y1);
        ctx.strokeStyle = th.root; ctx.lineWidth = Math.max(0.6, l.w * k * a[2]);
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(b[0], a[1], b[0], b[1]); ctx.stroke();
      }
      tapered(r.pts, r.widths, th.root);
    }

    // Trunk.
    {
      const pts = [], widths = [];
      for (let wy = 60; wy >= L.trunkTopY; wy -= 40) { pts.push({ x: 0, y: wy }); widths.push(L.trunkHW(wy) * 2); }
      pts.push({ x: 0, y: L.trunkTopY - 40 }); widths.push(6);
      const c0 = P(0, 0), c1 = P(0, L.trunkTopY);
      const hw = L.trunkHW(0) * k;
      const grad = ctx.createLinearGradient(c0[0] - hw, 0, c0[0] + hw, 0);
      grad.addColorStop(0, th.trunk[0]); grad.addColorStop(0.5, th.trunk[1]); grad.addColorStop(1, th.trunk[2]);
      tapered(pts, widths, grad);
      // Bark grain.
      ctx.strokeStyle = th.bark; ctx.lineWidth = Math.max(0.6, 2 * k);
      for (const f of [-0.55, -0.2, 0.25, 0.6]) {
        ctx.beginPath();
        let first = true;
        for (let wy = 40; wy >= L.trunkTopY + 80; wy -= 60) {
          const wob = Math.sin(wy * 0.01 + f * 9) * 6;
          const p = P(f * L.trunkHW(wy) + wob, wy);
          first ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]); first = false;
        }
        ctx.stroke();
      }
      void c1;
    }

    // Limbs.
    for (const l of L.limbs) l.sp = tapered(l.pts, l.widths, th.limb);

    // Twigs.
    ctx.lineCap = "round";
    for (const tw of L.twigs) {
      const a = P(tw.from.x, tw.from.y), c = P(tw.ctrl.x, tw.ctrl.y), b = P(tw.node.x, tw.node.y);
      if (!onScreen(b[0], b[1], 80) && !onScreen(a[0], a[1], 80)) continue;
      const dim = isDim(tw.node);
      ctx.globalAlpha = dim ? 0.25 : 1;
      ctx.strokeStyle = th.twig; ctx.lineWidth = Math.max(0.5, 2.6 * k * b[2]);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(c[0], c[1], b[0], b[1]); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Leaves.
    const drawLeaf = (lf) => {
      const p = P(lf.x, lf.y);
      if (!onScreen(p[0], p[1], 30)) return;
      const len = lf.len * k * p[2];
      if (len < 0.8) return;
      ctx.fillStyle = th.leaf[Math.floor(lf.tone * 3) % 3];
      ctx.beginPath(); ctx.ellipse(p[0], p[1], len, len * 0.36, lf.a, 0, Math.PI * 2); ctx.fill();
    };
    L.leaves.forEach(drawLeaf);
    L.crown.forEach(drawLeaf);

    // Kindred genres.
    for (const kn of L.kin) {
      const a = P(kn.from.x, kn.from.y), b = P(kn.x, kn.y);
      ctx.save();
      ctx.strokeStyle = th.kinLine; ctx.setLineDash([4, 5]); ctx.lineWidth = Math.max(0.7, 1.6 * k * b[2]);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]);
      ctx.bezierCurveTo((a[0] + b[0]) / 2, a[1], (a[0] + b[0]) / 2, b[1], b[0], b[1]); ctx.stroke();
      ctx.restore();
      const box = plaque(kn.name, String(kn.year) + "s", b[0], b[1], k * b[2], { fs: 26, maxFs: 18, bg: th.kin, color: th.kinText, subColor: th.kinText, weight: 600 });
      if (box) hits.push({ type: "kin", obj: kn, ...box });
    }

    // Root plaques + strata labels.
    for (const r of L.roots) {
      const p = P(r.tip.x, r.tip.y);
      const box = plaque(r.root.name, null, p[0], p[1], k * p[2], { fs: 30, maxFs: 18, bg: th.plate, edge: th.plateEdge, color: th.plateText, family: "'Playfair Display', Georgia, serif", weight: 700 });
      if (box) hits.push({ type: "root", obj: r.root, ...box });
    }
    {
      const africa = P(0, 880);
      ctx.save();
      ctx.font = `italic 700 ${Math.max(12, Math.min(48, 80 * k * africa[2]))}px 'Playfair Display', Georgia, serif`;
      ctx.fillStyle = th.plateText === "#b3261e" ? "#7b4a2a" : "#e9dcc5"; ctx.globalAlpha = 0.9;
      ctx.textAlign = "center"; ctx.fillText("Africa", africa[0], africa[1]);
      ctx.restore();
    }

    // Branch plaques.
    for (const pq of L.plaques) {
      const p = P(pq.x, pq.y);
      if (!onScreen(p[0], p[1], 200)) continue;
      const b = pq.branch;
      const dim = filter || relatedSet ? 0.55 : 1;
      const box = plaque(b.name, b.region, p[0], p[1], k * p[2], {
        fs: 17, maxFs: 20, minFs: 7, bg: th.plate, edge: th.plateEdge, color: th.plateText, subColor: th.plateSub,
        stripe: b.color, family: "'Playfair Display', Georgia, serif", weight: 700, alpha: dim,
      });
      if (box) hits.push({ type: "branch", obj: b, ...box });
    }

    // Era plates on the trunk.
    for (const pl of L.plates) {
      const p = P(pl.x, pl.y);
      const e = pl.era;
      const yrs = `${e.years[0]}–${e.id === "today" ? "now" : e.years[1]}`;
      const box = plaque(e.name.toUpperCase(), yrs, p[0], p[1], k * p[2], {
        fs: 22, maxFs: 22, minFs: 9, floor: 9.5, bg: th.plate, edge: th.plateEdge, color: th.plateText, subColor: th.plateSub,
        family: "'Playfair Display', Georgia, serif", weight: 900,
      });
      if (box) hits.push({ type: "era", obj: e, ...box });
    }

    // Lineage links for the focused node.
    const focus = selected || (hover && hover.type === "node" ? hover.obj.id : null);
    if (focus) drawLinks(focus, t);

    // Portraits: draw magnified ones last.
    const drawList = [];
    const fam = filter && FAMILIES.find((q) => q.key === filter);
    for (const n of L.nodes) {
      const p = P(n.x, n.y);
      n.sx = p[0]; n.sy = p[1]; n.z = p[2];
      // Instrument highlight: matching portraits ease up to twice their size.
      const target = fam && famOf(n.a, fam) ? 2 : 1;
      n.grow = n.grow ?? 1;
      if (Math.abs(target - n.grow) > 0.005) { n.grow += (target - n.grow) * 0.2; growing = true; } else n.grow = target;
      let R = n.r * k * p[2] * n.grow;
      if (hover && hover.obj === n) R *= 1.12;
      if (selected === n.id) R *= 1.08;
      n.sr = R;
      if (onScreen(p[0], p[1], R + 40)) drawList.push(n);
    }
    drawList.sort((a, b) => a.sr - b.sr);
    for (const n of drawList) drawNode(n);
    for (const n of drawList) drawLabel(n);
    for (let i = drawList.length - 1; i >= 0; i--) {
      const n = drawList[i];
      hits.push({ type: "node", obj: n, cx: n.sx, cy: n.sy, r: Math.max(n.sr, 5) });
    }
    hits.reverse(); // nodes (largest first) take priority over plaques

    // Lens glass.
    if (fe.on && lens.s > 0.05) {
      ctx.save();
      ctx.globalAlpha = lens.s;
      ctx.strokeStyle = th.lens; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(lens.x, lens.y, lens.R * 0.98, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }

    drawRuler();
  }

  function isDim(n) {
    if (relatedSet && !relatedSet.has(n.id)) return true;
    if (filter) { const f = FAMILIES.find((q) => q.key === filter); if (!famOf(n.a, f)) return true; }
    return false;
  }

  function drawNode(n) {
    const th = theme, R = n.sr, x = n.sx, y = n.sy, a = n.a;
    const dim = isDim(n);
    ctx.save();
    ctx.globalAlpha = dim ? 0.18 : 1;
    if (R < 2.2) {
      ctx.fillStyle = n.branch.color;
      ctx.beginPath(); ctx.arc(x, y, Math.max(R, 1.2), 0, Math.PI * 2); ctx.fill();
      ctx.restore(); return;
    }
    const band = a.type === "band";
    const shape = (r) => band ? roundRect(x - r, y - r, 2 * r, 2 * r, r * 0.32) : (ctx.beginPath(), ctx.arc(x, y, r, 0, Math.PI * 2));
    if (nowPlaying && nowPlaying.has(n.id)) {
      const ph = (performance.now() % 1600) / 1600;
      ctx.save();
      ctx.strokeStyle = th.link; ctx.lineWidth = 2;
      ctx.globalAlpha = (dim ? 0.3 : 1) * (1 - ph);
      ctx.beginPath(); ctx.arc(x, y, R + 3 + ph * Math.max(30, R * 2.4), 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }
    // Ring in branch color.
    const ring = Math.max(1.2, R * 0.09);
    if (R > 6) { ctx.shadowColor = "rgba(0,0,0,.45)"; ctx.shadowBlur = R * 0.35; ctx.shadowOffsetY = R * 0.08; }
    shape(R + ring); ctx.fillStyle = selected === n.id ? th.link : n.branch.color; ctx.fill();
    ctx.shadowColor = "transparent";
    shape(R); ctx.save(); ctx.clip();
    const im = getImg(n.id);
    if (im && im.ok) {
      const iw = im.img.naturalWidth, ih = im.img.naturalHeight;
      const s = Math.max((2 * R) / iw, (2 * R) / ih);
      const dw = iw * s, dh = ih * s;
      const portrait = ih > iw * 1.1;
      ctx.drawImage(im.img, x - dw / 2, portrait ? y - R - (dh - 2 * R) * 0.12 : y - dh / 2, dw, dh);
      if (vintage) {
        const isFocus = selected === n.id || (hover && hover.obj === n);
        const amt = isFocus ? 0 : Math.max(0, Math.min(1, 1 - (n.z - 1) / 1.6)) * 0.92;
        if (amt > 0.02) {
          ctx.globalCompositeOperation = "saturation";
          ctx.fillStyle = `rgba(128,128,128,${amt})`; ctx.fillRect(x - R, y - R, 2 * R, 2 * R);
          ctx.globalCompositeOperation = "color";
          ctx.fillStyle = `rgba(150,105,55,${amt * 0.35})`; ctx.fillRect(x - R, y - R, 2 * R, 2 * R);
        }
      }
    } else {
      const g = ctx.createLinearGradient(x, y - R, x, y + R);
      g.addColorStop(0, n.branch.color); g.addColorStop(1, shade(n.branch.color, -0.45));
      ctx.fillStyle = g; ctx.fillRect(x - R, y - R, 2 * R, 2 * R);
      if (R > 7) {
        ctx.fillStyle = "rgba(255,248,235,.92)";
        ctx.font = `700 ${R * 0.72}px 'Playfair Display', Georgia, serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(initials(a.name), x, y + R * 0.04);
      }
    }
    ctx.restore();
    ctx.restore();
  }

  function drawLabel(n) {
    const R = n.sr, th = theme;
    const need = n.a.tier === 1 ? 10 : 14;
    if (R < need) return;
    const alpha = Math.min(1, (R - need) / 5) * (isDim(n) ? 0.25 : 1);
    const fs = Math.max(10, Math.min(15, 8 + R * 0.16));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    ctx.font = `600 ${fs}px Inter, system-ui, sans-serif`;
    ctx.lineJoin = "round"; ctx.strokeStyle = th.halo; ctx.lineWidth = 3.5;
    const ty = n.sy + R + Math.max(4, R * 0.12) + 2;
    ctx.strokeText(n.a.name, n.sx, ty); ctx.fillStyle = th.label; ctx.fillText(n.a.name, n.sx, ty);
    if (R > 24) {
      ctx.font = `500 ${fs * 0.78}px Inter, system-ui, sans-serif`;
      const sub = yearsOf(n.a);
      ctx.strokeText(sub, n.sx, ty + fs * 1.2); ctx.fillStyle = th.labelSub; ctx.fillText(sub, n.sx, ty + fs * 1.2);
    }
    ctx.restore();
  }

  function drawLinks(id, t) {
    const n = nodeById.get(id);
    if (!n) return;
    const a = n.a, th = theme;
    const P0 = P(n.x, n.y);
    const draw = (other, color, incoming) => {
      const o = nodeById.get(other); if (!o) return;
      const p = P(o.x, o.y);
      const [x0, y0] = incoming ? p : P0, [x1, y1] = incoming ? P0 : p;
      const dx = x1 - x0, dy = y1 - y0, d = Math.hypot(dx, dy) || 1;
      const bend = Math.min(160, d * 0.25);
      const cx = (x0 + x1) / 2 - (dy / d) * bend, cy = (y0 + y1) / 2 + (dx / d) * bend;
      ctx.save();
      ctx.strokeStyle = color; ctx.globalAlpha = 0.9; ctx.lineWidth = 2;
      ctx.setLineDash([7, 6]); ctx.lineDashOffset = -(t / 40) % 13;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(cx, cy, x1, y1); ctx.stroke();
      ctx.restore();
    };
    for (const i of a.influences || []) draw(i, th.link, true);
    for (const o of influenced.get(id) || []) draw(o, th.linkOut, false);
    for (const m of a.members || []) draw(m, th.linkOut, false);
    for (const b of memberOf.get(id) || []) draw(b, th.link, true);
  }

  function drawRuler() {
    const th = theme;
    const x = 0, w = 54;
    ctx.save();
    ctx.fillStyle = theme === THEMES.night ? "rgba(15,11,8,.55)" : "rgba(242,233,214,.75)";
    ctx.fillRect(x, 0, w, H);
    ctx.strokeStyle = th.rulerFaint; ctx.beginPath(); ctx.moveTo(w, 0); ctx.lineTo(w, H); ctx.stroke();
    let lastY = Infinity;
    const list = L.ticks.slice().sort((a, b) => a.year - b.year); // bottom → top
    for (const tk of list) {
      const sy = tk.y * view.k + view.y;
      if (sy < 56 || sy > H - 6) continue;
      const major = tk.major || tk.era;
      if (lastY - sy < (major ? 16 : 26)) continue;
      lastY = sy;
      ctx.strokeStyle = th.ruler; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(w - (major ? 12 : 6), sy); ctx.lineTo(w, sy); ctx.stroke();
      ctx.fillStyle = major ? th.ruler : th.rulerFaint.replace(".18", ".55").replace(".15", ".5");
      ctx.font = `${major ? 700 : 500} ${major ? 12 : 11}px Inter, system-ui, sans-serif`;
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      ctx.fillText(String(tk.year), w - 15, sy);
    }
    // Strata captions.
    const cap = (txt, wy) => {
      const sy = wy * view.k + view.y;
      if (sy < 60 || sy > H - 10) return;
      ctx.fillStyle = th.ruler; ctx.font = "600 11px Inter, system-ui, sans-serif"; ctx.textAlign = "left";
      ctx.fillText(txt, w + 10, sy - 9);
    };
    cap("1865 · Emancipation", L.rootLayers[2].y1);
    cap("1619 · Enslavement begins", L.rootLayers[1].y1);
    ctx.restore();
  }

  // ---------- Utilities ----------
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const f = (c) => Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
    return `rgb(${f(r)},${f(g)},${f(b)})`;
  }
  function initials(name) {
    const w = name.replace(/^(The|A)\s+/i, "").split(/[\s&-]+/).filter((s) => /^[A-Za-zÀ-ž]/.test(s));
    return (w[0]?.[0] || "") + (w.length > 1 ? w[w.length - 1][0] : "");
  }
  function yearsOf(a) {
    if (a.type === "band") return `${a.active[0]}–${a.active[1] ?? "present"}`;
    return a.died ? `${a.born}–${a.died}` : `b. ${a.born}`;
  }
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Animation loop ----------
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function flyTo(target, ms = 850) {
    anim = { from: { ...view }, to: target, t0: performance.now(), ms };
  }
  function flyToWorld(wx, wy, k) {
    k = Math.max(minK, Math.min(maxK, k));
    flyTo({ k, x: W / 2 - wx * k - (panelOpen() ? 200 : 0), y: H / 2 - wy * k });
  }

  function frame(t) {
    if (anim) {
      const p = Math.min(1, (t - anim.t0) / anim.ms), e = easeInOut(p);
      const lk = Math.log(anim.from.k) + (Math.log(anim.to.k) - Math.log(anim.from.k)) * e;
      // Interpolate the screen-center's world point so zoom and pan feel coherent.
      const cf = toWorldFrom(anim.from), ct = toWorldFrom(anim.to);
      view.k = Math.exp(lk);
      view.x = W / 2 - (cf[0] + (ct[0] - cf[0]) * e) * view.k;
      view.y = H / 2 - (cf[1] + (ct[1] - cf[1]) * e) * view.k;
      if (p >= 1) { Object.assign(view, anim.to); anim = null; }
      dirty = true;
    }
    // Ease the lens toward the pointer.
    const ls = lens.s, lx = lens.x, ly = lens.y;
    lens.s += (lens.ts - lens.s) * 0.16;
    if (lens.s < 0.01 && lens.ts === 0) lens.s = 0;
    lens.x += (lens.tx - lens.x) * 0.38; lens.y += (lens.ty - lens.y) * 0.38;
    if (Math.abs(lens.s - ls) > 0.002 || Math.abs(lens.x - lx) > 0.3 || Math.abs(lens.y - ly) > 0.3) dirty = true;
    const focus = selected || (hover && hover.type === "node") || nowPlaying;
    if (dirty || focus || growing) { growing = false; render(t); dirty = false; if (pointer.inside) updateHover(); }
    requestAnimationFrame(frame);
  }
  const toWorldFrom = (v) => [(W / 2 - v.x) / v.k, (H / 2 - v.y) / v.k];

  // ---------- Pointer interaction ----------
  const pointer = { x: 0, y: 0, inside: false, down: false, dragging: false, sx: 0, sy: 0, vx: 0, vy: 0, touches: new Map() };
  let pinch = null;
  const tooltip = document.getElementById("tooltip");

  function hitTest(x, y) {
    for (const h of hits) {
      if (h.type === "node") { if ((x - h.cx) ** 2 + (y - h.cy) ** 2 <= h.r * h.r) return h; }
      else if (x >= h.x && x <= h.x + h.w && y >= h.y && y <= h.y + h.h) return h;
    }
    return null;
  }
  function updateHover() {
    if (pointer.dragging) return;
    const h = hitTest(pointer.x, pointer.y);
    const prev = hover;
    hover = h;
    if ((prev && prev.obj) !== (h && h.obj)) { dirty = true; showTooltip(h); }
    canvas.style.cursor = h ? "pointer" : pointer.down ? "grabbing" : "grab";
    if (h) positionTooltip();
  }
  function showTooltip(h) {
    if (!h || h.type !== "node") { tooltip.classList.remove("show"); return; }
    const a = h.obj.a;
    tooltip.innerHTML = `<b>${esc(a.name)}</b><span>${esc(yearsOf(a))} · ${esc((a.instruments || []).slice(0, 2).join(", "))}</span><em style="color:${h.obj.branch.color}">${esc(h.obj.branch.name)}</em>`;
    tooltip.classList.add("show");
  }
  function positionTooltip() {
    const r = tooltip.getBoundingClientRect();
    let x = pointer.x + 18, y = pointer.y + 18;
    if (x + r.width > W - 8) x = pointer.x - r.width - 18;
    if (y + r.height > H - 8) y = pointer.y - r.height - 18;
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
  }

  canvas.addEventListener("pointerdown", (e) => {
    canvas.setPointerCapture(e.pointerId);
    pointer.touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointer.touches.size === 2) {
      const [a, b] = [...pointer.touches.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: view.k, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
      return;
    }
    pointer.down = true; pointer.dragging = false;
    pointer.sx = e.clientX; pointer.sy = e.clientY;
    pointer.vx = view.x; pointer.vy = view.y;
    anim = null;
  });
  canvas.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY; pointer.inside = true;
    if (pointer.touches.has(e.pointerId)) pointer.touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointer.touches.size === 2) {
      const [a, b] = [...pointer.touches.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt(pinch.cx, pinch.cy, (pinch.k * d) / pinch.d / view.k);
      return;
    }
    if (e.pointerType === "mouse" && lens.enabled) { lens.tx = e.clientX; lens.ty = e.clientY; lens.ts = pointer.dragging ? 0.25 : 1; if (lens.s === 0) { lens.x = lens.tx; lens.y = lens.ty; } }
    if (pointer.down) {
      const dx = e.clientX - pointer.sx, dy = e.clientY - pointer.sy;
      if (!pointer.dragging && Math.hypot(dx, dy) > 4) { pointer.dragging = true; tooltip.classList.remove("show"); hover = null; }
      if (pointer.dragging) { view.x = pointer.vx + dx; view.y = pointer.vy + dy; lens.ts = Math.min(lens.ts, 0.25); canvas.style.cursor = "grabbing"; }
    }
    dirty = true;
    updateHover();
  });
  const endPointer = (e) => {
    pointer.touches.delete(e.pointerId);
    if (pointer.touches.size < 2) pinch = null;
    if (!pointer.down) return;
    pointer.down = false;
    if (!pointer.dragging) {
      const h = hitTest(e.clientX, e.clientY);
      if (h) activate(h); else if (selected) { select(null); }
    }
    pointer.dragging = false;
    if (lens.enabled && e.pointerType === "mouse") lens.ts = 1;
    dirty = true;
  };
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("pointerleave", () => { pointer.inside = false; lens.ts = 0; hover = null; tooltip.classList.remove("show"); dirty = true; });
  canvas.addEventListener("dblclick", (e) => { const [wx, wy] = toWorld(e.clientX, e.clientY); flyToWorld(wx, wy, view.k * 2); });

  function zoomAt(sx, sy, factor) {
    const k = Math.max(minK, Math.min(maxK, view.k * factor));
    const [wx, wy] = toWorld(sx, sy);
    view.k = k; view.x = sx - wx * k; view.y = sy - wy * k;
    dirty = true;
  }
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    anim = null;
    if (e.ctrlKey || e.metaKey || Math.abs(e.deltaY) > Math.abs(e.deltaX) * 1.2 && !isTrackpadPan(e)) {
      zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018)));
    } else {
      view.x -= e.deltaX; view.y -= e.deltaY; dirty = true;
    }
  }, { passive: false });
  // Trackpads send small pixel deltas with both axes; treat those as panning, mouse wheels as zoom.
  function isTrackpadPan(e) { return e.deltaMode === 0 && Math.abs(e.deltaY) < 40 && e.deltaX !== 0; }

  // ---------- Activation / panels ----------
  const panel = document.getElementById("panel");
  const panelBody = panel.querySelector(".panel-body");
  const panelOpen = () => panel.classList.contains("open");

  function activate(h) {
    if (h.type === "node") select(h.obj.id);
    else if (h.type === "branch") showBranch(h.obj.id, false);
    else if (h.type === "era") showEra(h.obj.id, false);
    else if (h.type === "root") showText(h.obj.name, h.obj.layer === 0 ? "Roots in Africa" : "Roots of jazz", h.obj.text,
      h.obj.deep ? `roots.html#${h.obj.deep}` : null, h.obj.layer === 0 ? "Read the deep dive" : "Read about the crossing");
    else if (h.type === "kin") showText(h.obj.name, `Kindred genre · ${h.obj.year}s`, h.obj.text);
  }

  function select(id, fly) {
    selected = id;
    relatedSet = id ? related(id) : null;
    dirty = true;
    if (!id) { closePanel(); return; }
    const n = nodeById.get(id);
    if (fly) flyToWorld(n.x, n.y, Math.max(view.k, 0.9));
    showArtist(n);
    history.replaceState(null, "", "#" + id);
  }

  function chip(id) {
    const n = nodeById.get(id); if (!n) return "";
    const im = IMAGES[id];
    const av = im && im.src ? `<img src="${esc(im.src)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : `<i style="background:${n.branch.color}">${esc(initials(n.a.name))}</i>`;
    return `<button class="chip person" data-id="${esc(id)}">${av}<span>${esc(n.a.name)}</span></button>`;
  }
  const branchChip = (bid) => { const b = branchById[bid]; return b ? `<button class="chip branch" data-branch="${b.id}"><s style="background:${b.color}"></s>${esc(b.name)}</button>` : ""; };
  function listen(rec, a) {
    const q = encodeURIComponent(`${a.name} ${rec.replace(/\s*\(\d{4}\)\s*$/, "")}`);
    return `<a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener" title="Search on YouTube">▶</a>`;
  }

  function showArtist(n) {
    const a = n.a, b = n.branch, era = eraById[b.era];
    const im = IMAGES[a.id];
    const big = im && im.src ? (im.large || im.src) : null;
    const photo = big
      ? `<div class="p-photo ${a.type === "band" ? "band" : ""}"><img src="${esc(big)}" alt="${esc(a.name)}" referrerpolicy="no-referrer"></div>`
      : `<div class="p-photo mono ${a.type === "band" ? "band" : ""}" style="background:linear-gradient(${b.color},${shade(b.color, -0.5)})"><span>${esc(initials(a.name))}</span></div>`;
    const sec = (title, ids) => ids && ids.length ? `<h4>${title}</h4><div class="chips">${ids.map(chip).join("")}</div>` : "";
    const styles = (a.styles || []).filter((s) => s !== b.id);
    panelBody.innerHTML = `
      ${photo}
      <div class="p-kicker"><s style="background:${b.color}"></s><button class="link" data-branch="${b.id}">${esc(b.name)}</button> · <button class="link" data-era="${era.id}">${esc(era.name)}</button></div>
      <h2>${esc(a.name)}</h2>
      ${a.nickname ? `<div class="p-nick">“${esc(a.nickname)}”</div>` : ""}
      <div class="p-meta">${esc(yearsOf(a))}${a.origin ? ` · ${esc(a.origin)}` : ""}</div>
      <div class="p-inst">${(a.instruments || []).map((i) => `<span>${esc(i)}</span>`).join("")}</div>
      <p class="p-bio">${esc(a.bio)}</p>
      ${a.records && a.records.length ? `<h4>Essential recordings</h4><ul class="p-records">${a.records.map((r) => `<li>${listen(r, a)}<span>${esc(r)}</span></li>`).join("")}</ul>` : ""}
      ${sec("Influenced by", a.influences)}
      ${sec("Members", a.members)}
      ${sec("Member of", memberOf.get(a.id))}
      ${sec("Influenced", influenced.get(a.id))}
      ${analyzed(a.id)}
      ${oral(a.id)}
      ${styles.length ? `<h4>Also on the branches of</h4><div class="chips">${styles.map(branchChip).join("")}</div>` : ""}
      <div class="p-links">
        <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(a.wiki)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a>
        ${im && im.file ? `<a class="credit" href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(im.file)}" target="_blank" rel="noopener">Photo: Wikimedia Commons ↗</a>` : ""}
      </div>`;
    openPanel("artist");
  }

  function analyzed(id) {
    const ps = ((window.NOTES && window.NOTES.pieces) || []).filter((p) => (p.artistIds || []).includes(id));
    if (!ps.length) return "";
    return `<h4>Analyzed in Notes on Notes</h4><ul class="p-records">${ps.map((p) => `<li><a href="notes.html#${esc(p.id)}" title="Read the analysis">♪</a><span><a class="plain" href="notes.html#${esc(p.id)}">${esc(p.title)}</a> (${p.year})</span></li>`).join("")}</ul>`;
  }

  function oral(id) {
    const e = NET[id];
    if (!e) return "";
    const part = (label, ids) => ids && ids.length ? `<div class="oral-row"><span>${label}</span><div class="chips">${ids.map(chip).join("")}</div></div>` : "";
    return `<h4>In the oral histories</h4>
      <div class="oral">
        ${part("Mentored by", e.mentors)}${part("Mentored", e.mentees)}${part("Played with", e.played)}${part("Friends with", e.friends)}
        <p class="oral-note">Relationships named in jazz oral-history interviews, via <a href="https://linkedjazz.org/" target="_blank" rel="noopener">Linked Jazz</a> (Pratt Institute).</p>
      </div>`;
  }

  function showBranch(bid, fly = true) {
    const b = branchById[bid], info = J.branchInfo[bid] || {}, era = eraById[b.era];
    const members = L.nodes.filter((n) => n.branch.id === bid).map((n) => n.id);
    const also = J.artists.filter((a) => a.branch !== bid && (a.styles || []).includes(bid)).map((a) => a.id);
    selected = null; relatedSet = new Set(members); dirty = true;
    panelBody.innerHTML = `
      <div class="p-band" style="background:${b.color}"></div>
      <div class="p-kicker">Branch · <button class="link" data-era="${era.id}">${esc(era.name)}</button></div>
      <h2>${esc(b.name)}</h2>
      <div class="p-meta">${esc(b.region)} · ${b.years[0]}–${b.years[1] >= 2026 ? "today" : b.years[1]}</div>
      ${info.summary ? `<p class="p-bio">${esc(info.summary)}</p>` : ""}
      ${info.keyAlbums ? `<h4>Landmark recordings</h4><ul class="p-records">${info.keyAlbums.map((r) => `<li>${listen(r.replace(/ — /, " "), { name: "" })}<span>${esc(r)}</span></li>`).join("")}</ul>` : ""}
      ${info.places ? `<h4>Places</h4><div class="p-inst">${info.places.map((p) => `<span>${esc(p)}</span>`).join("")}</div>` : ""}
      <h4>On this branch</h4><div class="chips">${members.map(chip).join("")}</div>
      ${also.length ? `<h4>Also played this style</h4><div class="chips">${also.map(chip).join("")}</div>` : ""}`;
    openPanel("branch");
    if (fly) { const bl = L.blocks.find((x) => x.branch.id === bid); if (bl) flyToWorld(bl.center.x, bl.center.y, Math.max(minK * 2.2, 0.55)); }
  }

  function showEra(eid, fly = true) {
    const e = eraById[eid];
    const bs = J.branches.filter((b) => b.era === eid);
    selected = null; relatedSet = new Set(L.nodes.filter((n) => n.branch.era === eid).map((n) => n.id)); dirty = true;
    panelBody.innerHTML = `
      <div class="p-kicker">Era · ${e.years[0]}–${eid === "today" ? "now" : e.years[1]}</div>
      <h2>${esc(e.name)}</h2>
      <p class="p-bio">${esc(e.summary)}</p>
      <h4>Branches</h4><div class="chips">${bs.map((b) => branchChip(b.id)).join("")}</div>`;
    openPanel("era");
    if (fly) flyToWorld(0, (e.y0 + e.y1) / 2, Math.max(minK * 1.6, Math.min(0.42, (H - 140) / e.bandH)));
  }

  function showText(title, kicker, text, href, linkText) {
    selected = null; relatedSet = null; dirty = true;
    panelBody.innerHTML = `<div class="p-kicker">${esc(kicker)}</div><h2>${esc(title)}</h2><p class="p-bio">${esc(text)}</p>`
      + (href ? `<a class="deep-link" href="${esc(href)}">${esc(linkText || "Read more")} →</a>` : "");
    openPanel("text");
  }

  function openPanel() { panel.classList.add("open"); document.body.classList.add("panel-open"); panel.scrollTop = 0; panelBody.scrollTop = 0; }
  function closePanel() {
    panel.classList.remove("open");
    document.body.classList.remove("panel-open");
    selected = null; relatedSet = null; dirty = true;
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }
  panel.querySelector(".panel-close").addEventListener("click", closePanel);
  panel.addEventListener("click", (e) => {
    const t = e.target.closest("[data-id],[data-branch],[data-era]");
    if (!t) return;
    if (t.dataset.id) select(t.dataset.id, true);
    else if (t.dataset.branch) showBranch(t.dataset.branch);
    else if (t.dataset.era) showEra(t.dataset.era);
  });

  // ---------- Search ----------
  const search = document.getElementById("search");
  const results = document.getElementById("search-results");
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const index = [
    ...J.artists.map((a) => ({ kind: "artist", id: a.id, label: a.name, sub: `${yearsOf(a)} · ${branchById[a.branch].name}`, key: norm(`${a.name} ${a.nickname || ""} ${(a.instruments || []).join(" ")}`) })),
    ...J.branches.map((b) => ({ kind: "branch", id: b.id, label: b.name, sub: `Branch · ${b.region}`, key: norm(`${b.name} ${b.region}`) })),
    ...J.eras.map((e) => ({ kind: "era", id: e.id, label: e.name, sub: `Era · ${e.years[0]}–${e.years[1]}`, key: norm(e.name) })),
  ];
  let active = 0, current = [];
  function runSearch() {
    const q = norm(search.value.trim());
    if (!q) { results.classList.remove("show"); return; }
    const words = q.split(/\s+/);
    current = index
      .map((it) => ({ it, s: words.every((w) => it.key.includes(w)) ? (it.key.startsWith(q) ? 0 : norm(it.label).includes(q) ? 1 : 2) + (it.kind === "artist" ? 0 : 0.5) : -1 }))
      .filter((r) => r.s >= 0).sort((a, b) => a.s - b.s).slice(0, 8).map((r) => r.it);
    active = 0;
    results.innerHTML = current.length
      ? current.map((r, i) => `<li class="${i === 0 ? "active" : ""}" data-i="${i}"><b>${esc(r.label)}</b><span>${esc(r.sub)}</span></li>`).join("")
      : `<li class="empty">No matches</li>`;
    results.classList.add("show");
  }
  function choose(r) {
    if (!r) return;
    results.classList.remove("show"); search.blur();
    if (r.kind === "artist") select(r.id, true);
    else if (r.kind === "branch") showBranch(r.id);
    else showEra(r.id);
  }
  search.addEventListener("input", runSearch);
  search.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      active = (active + (e.key === "ArrowDown" ? 1 : -1) + current.length) % Math.max(1, current.length);
      [...results.children].forEach((li, i) => li.classList.toggle("active", i === active));
    } else if (e.key === "Enter") choose(current[active]);
    else if (e.key === "Escape") { search.value = ""; results.classList.remove("show"); search.blur(); }
  });
  results.addEventListener("mousedown", (e) => { const li = e.target.closest("li[data-i]"); if (li) choose(current[+li.dataset.i]); });
  search.addEventListener("blur", () => setTimeout(() => results.classList.remove("show"), 120));

  // ---------- Filters ----------
  const filters = document.getElementById("filters");
  filters.innerHTML = FAMILIES.map((f) => `<button data-f="${f.key}">${f.label}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-f]"); if (!b) return;
    filter = filter === b.dataset.f ? null : b.dataset.f;
    [...filters.children].forEach((c) => c.classList.toggle("on", c.dataset.f === filter));
    dirty = true;
  });

  // ---------- Era navigator ----------
  const eraNav = document.getElementById("era-nav");
  eraNav.innerHTML = L.eras.slice().reverse().map((e) => `<button data-era="${e.id}"><i></i><span>${esc(e.name)}<em>${e.years[0]}</em></span></button>`).join("")
    + `<button data-roots="1"><i></i><span>Roots below ground<em>Africa–1895</em></span></button>`;
  eraNav.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.roots) { flyToWorld(0, 460, Math.max(minK * 1.5, (H - 140) / 1000)); return; }
    showEra(b.dataset.era);
  });
  function updateEraNav() {
    const [, cy] = toWorld(W / 2, H / 2);
    let cur = cy > 0 ? "roots-below" : null;
    if (!cur) for (const e of L.eras) if (cy <= e.y0 && cy >= e.y1) cur = e.id;
    if (!cur && cy < L.eras[L.eras.length - 1].y1) cur = "today";
    [...eraNav.children].forEach((b) => b.classList.toggle("on", b.dataset.era === cur || (cur === "roots-below" && b.dataset.roots)));
  }
  setInterval(updateEraNav, 250);

  // ---------- Toolbar ----------
  const $ = (id) => document.getElementById(id);
  function setToggle(btn, on) { btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", on); }
  setToggle($("btn-lens"), lens.enabled);
  setToggle($("btn-vintage"), vintage);
  $("btn-lens").addEventListener("click", () => { lens.enabled = !lens.enabled; lens.ts = lens.enabled ? 1 : 0; setToggle($("btn-lens"), lens.enabled); });
  $("btn-vintage").addEventListener("click", () => { vintage = !vintage; localStorage.setItem("jft-vintage", vintage ? "1" : "0"); setToggle($("btn-vintage"), vintage); dirty = true; });
  $("btn-theme").addEventListener("click", () => {
    const next = theme === THEMES.night ? "paper" : "night";
    theme = THEMES[next]; document.body.dataset.theme = next; localStorage.setItem("jft-theme", next); dirty = true;
  });
  $("btn-reset").addEventListener("click", () => { closePanel(); fitView(true); });
  $("btn-about").addEventListener("click", () => $("about").classList.add("open"));
  document.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", () => b.closest(".modal").classList.remove("open")));
  document.body.dataset.theme = theme === THEMES.night ? "night" : "paper";

  window.addEventListener("keydown", (e) => {
    if (e.target === search) return;
    if (e.key === "/") { e.preventDefault(); search.focus(); }
    else if (e.key === "Escape") { document.querySelectorAll(".modal.open").forEach((m) => m.classList.remove("open")); closePanel(); }
    else if (e.key === "l" || e.key === "L") $("btn-lens").click();
    else if (e.key === "r" || e.key === "R") $("btn-reset").click();
    else if (e.key === "+" || e.key === "=") zoomAt(W / 2, H / 2, 1.3);
    else if (e.key === "-") zoomAt(W / 2, H / 2, 1 / 1.3);
    else if (e.key === "[") { lens.R = Math.max(30, lens.R - 15); dirty = true; }
    else if (e.key === "]") { lens.R = Math.min(520, lens.R + 15); dirty = true; }
  });

  // Intro card.
  const intro = $("intro");
  if (localStorage.getItem("jft-intro") === "seen") intro.classList.remove("open");
  intro.querySelectorAll("[data-music]").forEach((b) => b.addEventListener("click", () => {
    intro.classList.remove("open"); localStorage.setItem("jft-intro", "seen");
    if (b.dataset.music === "1" && window.JazzPlayer) window.JazzPlayer.play();
  }));

  // Now playing: pulse the portraits of the musicians on the current record.
  let nowPlaying = null;
  window.addEventListener("jft-track", (e) => {
    nowPlaying = e.detail.playing ? new Set(e.detail.track.artistIds || []) : null;
    dirty = true;
  });

  // Stats in the about box.
  const people = J.artists.filter((a) => a.type === "person").length;
  document.querySelectorAll("[data-stat]").forEach((el) => {
    el.textContent = { people, bands: J.artists.length - people, branches: J.branches.length, eras: J.eras.length }[el.dataset.stat];
  });

  // ---------- Boot ----------
  window.addEventListener("resize", () => { resize(); fitView(false); });
  resize();
  fitView(false);
  if (document.fonts) document.fonts.ready.then(() => (dirty = true));
  const deep = decodeURIComponent(location.hash.slice(1));
  if (deep && nodeById.has(deep)) setTimeout(() => select(deep, true), 300);
  requestAnimationFrame(frame);

  // Debug/screenshot hook: ?lens=x,y places the lens; ?zoom=k,wx,wy sets the view.
  const qs = new URLSearchParams(location.search);
  if (qs.get("zoom")) { const [kk, wx, wy] = qs.get("zoom").split(",").map(Number); view.k = kk; view.x = W / 2 - wx * kk; view.y = H / 2 - wy * kk; }
  if (qs.get("lens")) { const [x, y] = qs.get("lens").split(",").map(Number); Object.assign(lens, { x, y, tx: x, ty: y, s: 1, ts: 1 }); }
  if (qs.get("intro") === "0") intro.classList.remove("open");
  if (qs.get("filter")) setTimeout(() => filters.querySelector(`[data-f="${qs.get("filter")}"]`)?.click(), 50);
  if (THEMES[qs.get("theme")]) { theme = THEMES[qs.get("theme")]; document.body.dataset.theme = qs.get("theme"); }
  window.__jft = { L, view, lens, select, showBranch, showEra };
})();
