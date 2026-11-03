/* Jazz Family Tree — layout.
   Turns JAZZ data into world-space geometry: a trunk of eras (bottom → top), limbs per branch
   that leave the trunk left or right, portraits hanging above/below each limb on twigs,
   a dated root system below ground, and kindred-genre offshoots at the edges. */
(function (g) {
  const NODE_R = { 1: 31, 2: 24, 3: 19 };
  const COL_W = 76;
  const ELBOW = 70;          // trunk edge → limb elbow
  const FIRST_COL = 240;     // block start → first column (room for the branch plaque)
  const ROW_IN = 62;
  const BAND_PAD = 58;
  const TRUNK_BASE = 74, TRUNK_TOP = 24;
  const ROOT_LAYERS = [ // y ranges below ground (y > 0)
    { id: 0, label: "Africa", y0: 640, y1: 930 },
    { id: 1, label: "1619 – 1865", y0: 320, y1: 640 },
    { id: 2, label: "1865 – 1895", y0: 40, y1: 320 },
  ];

  // Deterministic pseudo-random in [0,1) from a string.
  function rnd(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
    return (h >>> 0) / 4294967296;
  }
  const lerp = (a, b, t) => a + (b - a) * t;

  function computeLayout(J) {
    const byId = new Map(J.artists.map((a) => [a.id, a]));
    const byBranch = {};
    for (const a of J.artists) (byBranch[a.branch] ||= []).push(a);

    // ---- Pass 1: one lane (limb) per side per era. Branches on that side are chained outward along it.
    let y = 0;
    let trunkTopY = 0;
    const eras = [];
    const lanes = [];
    const laneH = 2 * ROW_IN + 2 * NODE_R[1] + 56;
    for (const era of J.eras) {
      const bandH = laneH + 2 * BAND_PAD;
      for (const side of [-1, 1]) {
        const blocks = J.branches.filter((b) => b.era === era.id && b.side === side).map((b) => {
          const members = (byBranch[b.id] || []).slice().sort((p, q) =>
            p.emerged - q.emerged || p.tier - q.tier || p.name.localeCompare(q.name));
          return { branch: b, members, cols: Math.max(1, Math.ceil(members.length / 2)) };
        });
        if (!blocks.length) continue;
        // Offset the right side slightly so limbs don't mirror each other exactly.
        lanes.push({ era, side, blocks, limbY: y - bandH / 2 + (side > 0 ? -16 : 12) });
      }
      eras.push({ ...era, y0: y, y1: y - bandH, bandH });
      y -= bandH;
    }
    trunkTopY = y - 150;

    const trunkHW = (wy) => {
      if (wy >= 0) return TRUNK_BASE + Math.min(wy, 70) * 0.9;            // flare at the base
      const t = Math.min(1, wy / trunkTopY);
      return lerp(TRUNK_BASE, TRUNK_TOP, Math.pow(t, 0.8));
    };

    // ---- Pass 2: limbs, plaques, nodes, twigs, leaves.
    const limbs = [], plaques = [], blocksOut = [], nodes = [], twigs = [], leaves = [];
    for (const lane of lanes) {
      const s = lane.side, yb = lane.limbY, seed = lane.era.id + s;
      const hw = trunkHW(yb);
      const elbowAX = hw + ELBOW;
      // Horizontal extent of each block along the lane.
      let ax0 = elbowAX;
      for (const blk of lane.blocks) {
        blk.startAX = ax0;
        blk.firstAX = ax0 + FIRST_COL;
        blk.endAX = blk.firstAX + (blk.cols - 1) * COL_W + 46;
        ax0 = blk.endAX;
      }
      const tipAX = ax0 + 70;
      const span = tipAX - elbowAX;
      const rise = Math.min(85, 24 + span * 0.03);
      const phase = rnd(seed) * 6;
      const limbYAt = (ax) => {
        if (ax <= elbowAX) return yb;
        const t = Math.min(1.1, (ax - elbowAX) / span);
        return yb - rise * Math.pow(t, 1.6) + Math.sin(ax * 0.0045 + phase) * 7 * Math.min(1, t * 4);
      };

      // Limb centerline: curve out of the trunk, then out to the tip.
      const pts = [];
      const p0 = { x: s * hw * 0.25, y: yb + 110 }, c = { x: s * hw * 0.95, y: yb + 14 }, p1 = { x: s * elbowAX, y: yb };
      for (let i = 0; i <= 10; i++) {
        const t = i / 10, u = 1 - t;
        pts.push({ x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x, y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y });
      }
      for (let ax = elbowAX + 30; ax < tipAX; ax += 30) pts.push({ x: s * ax, y: limbYAt(ax) });
      pts.push({ x: s * tipAX, y: limbYAt(tipAX) });
      const widths = pts.map((_, i) => lerp(26, 3.5, Math.pow(i / (pts.length - 1), 0.75)));
      const limb = { era: lane.era.id, side: s, pts, widths, tip: pts[pts.length - 1] };
      limbs.push(limb);

      // Leaves along the limb and a cluster at the tip.
      for (let i = 12; i < pts.length - 1; i += 2) {
        const r = rnd(seed + i);
        if (r < 0.35) continue;
        const a = Math.atan2(pts[i + 1].y - pts[i].y, pts[i + 1].x - pts[i].x);
        const up = r > 0.67 ? -1 : 1;
        leaves.push({ x: pts[i].x, y: pts[i].y + up * 9, a: a + up * s * 0.9 + (r - 0.5), len: 10 + r * 6, tone: r });
      }
      const tipCluster = (pt, key, n) => {
        for (let i = 0; i < n; i++) {
          const r = rnd(key + i);
          const a = (s > 0 ? 0 : Math.PI) + (i - n / 2) * 0.34 + (r - 0.5) * 0.3;
          const d = 10 + r * 22;
          leaves.push({ x: pt.x + Math.cos(a) * d, y: pt.y + Math.sin(a) * d, a, len: 11 + r * 7, tone: r });
        }
      };
      tipCluster(limb.tip, seed + "tip", 9);

      const rowOff = [-ROW_IN, ROW_IN];
      lane.blocks.forEach((blk, bi) => {
        const b = blk.branch;
        const plaque = { branch: b, x: s * (blk.startAX + FIRST_COL * 0.47), y: limbYAt(blk.startAX + FIRST_COL * 0.47) + 1 };
        plaques.push(plaque);
        blocksOut.push({ branch: b, side: s, center: { x: s * (blk.startAX + blk.endAX) / 2, y: yb }, plaque });
        if (bi > 0) tipCluster({ x: s * (blk.startAX + 8), y: limbYAt(blk.startAX + 8) - 10 }, b.id + "fork", 5);

        // Portrait nodes: alternate above/below the limb, oldest nearest the trunk.
        blk.members.forEach((a, i) => {
          const col = Math.floor(i / 2), row = i % 2;
          const jx = (rnd(a.id + "x") - 0.5) * 12, jy = (rnd(a.id + "y") - 0.5) * 16;
          const ax = blk.firstAX + col * COL_W + (row ? COL_W * 0.18 : 0) + jx;
          const node = { id: a.id, a, branch: b, r: NODE_R[a.tier] || NODE_R[3], x: s * ax, y: limbYAt(ax) + rowOff[row] + jy };
          nodes.push(node);
          const anchorAX = ax - 18;
          const anchor = { x: s * anchorAX, y: limbYAt(anchorAX) };
          const ctrl = { x: s * lerp(anchorAX, ax, 0.1), y: lerp(anchor.y, node.y, 0.7) };
          twigs.push({ node, from: anchor, ctrl, color: b.color });
          const r = rnd(a.id + "leaf");
          if (r > 0.3) {
            const t = 0.45;
            const mx = lerp(lerp(anchor.x, ctrl.x, t), lerp(ctrl.x, node.x, t), t);
            const my = lerp(lerp(anchor.y, ctrl.y, t), lerp(ctrl.y, node.y, t), t);
            leaves.push({ x: mx + s * 7, y: my, a: (node.y < anchor.y ? -1 : 1) * 0.6 + (s > 0 ? 0 : Math.PI), len: 9 + r * 5, tone: r });
          }
        });
      });
    }

    // Era plates sit on the trunk just above each band boundary.
    const plates = eras.map((e) => ({ era: e, x: 0, y: e.y0 - 34 }));

    // Side extents per era (for kindred-genre placement).
    const extent = {};
    for (const l of limbs) {
      const k = l.era + l.side;
      extent[k] = Math.max(extent[k] || 0, Math.abs(l.tip.x));
    }
    const eraById = Object.fromEntries(eras.map((e) => [e.id, e]));
    const kin = (J.kin || []).map((k) => {
      const e = eraById[k.era];
      const t = Math.min(1, Math.max(0, (k.year - e.years[0]) / (e.years[1] - e.years[0])));
      const ex = extent[k.era + k.side] || 600;
      const ky = lerp(e.y0 - BAND_PAD, e.y1 + BAND_PAD, t);
      // Connect to the nearest limb tip on that side of the era.
      let best = null, bd = Infinity;
      for (const l of limbs) if (l.side === k.side && l.era === k.era) {
        const d = Math.abs(l.tip.y - ky);
        if (d < bd) { bd = d; best = l; }
      }
      const from = best ? best.tip : { x: k.side * ex, y: ky };
      return { ...k, x: k.side * (ex + 190), y: ky, from };
    });

    // Root system.
    const roots = [];
    const rootsBySlot = {};
    for (const r of J.roots || []) (rootsBySlot[r.layer + ":" + r.side] ||= []).push(r);
    for (const [slot, list] of Object.entries(rootsBySlot)) {
      const [layer, side] = slot.split(":").map(Number);
      const L = ROOT_LAYERS.find((l) => l.id === layer);
      list.forEach((r, i) => {
        const tipX = side * (layer === 0 ? 300 + i * 360 : 330 + i * 420 + (2 - layer) * 40);
        const tipY = lerp(L.y0, L.y1, 0.55) + (i % 2 ? -40 : 30);
        const start = { x: side * (TRUNK_BASE * (layer === 0 ? 0.25 : 0.7)), y: 20 };
        const c1 = { x: side * Math.abs(tipX) * 0.15, y: lerp(start.y, tipY, 0.7) };
        const c2 = { x: tipX * 0.75, y: tipY - 10 };
        const pts = [];
        for (let k = 0; k <= 22; k++) {
          const t = k / 22, u = 1 - t;
          pts.push({
            x: u * u * u * start.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * tipX,
            y: u * u * u * start.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * tipY,
          });
        }
        const w0 = layer === 0 ? 46 : layer === 1 ? 30 : 20;
        const widths = pts.map((_, k) => lerp(w0, 3, Math.pow(k / 22, 0.7)));
        // A few rootlets.
        const lets = [];
        for (let k = 0; k < 4; k++) {
          const p = pts[8 + k * 3];
          const rr = rnd(r.id + k);
          lets.push({ x0: p.x, y0: p.y, x1: p.x + side * (40 + rr * 70), y1: p.y + 50 + rr * 60, w: 3 + rr * 3 });
        }
        roots.push({ root: r, pts, widths, rootlets: lets, tip: { x: tipX, y: tipY } });
      });
    }

    // Crown at the top of the trunk.
    const crown = [];
    for (let i = 0; i < 70; i++) {
      const r1 = rnd("crown" + i), r2 = rnd("crown2" + i);
      const a = -Math.PI / 2 + (r1 - 0.5) * Math.PI * 1.1;
      const d = 40 + r2 * 190;
      crown.push({ x: Math.cos(a) * d * 1.3, y: trunkTopY + 40 + Math.sin(a) * d * 0.75, a: a + (r2 - 0.5), len: 11 + r1 * 8, tone: r2 });
    }

    // Year axis: maps years to world y (non-linear across eras; linear within each band).
    const anchors = [
      { year: 1619, y: ROOT_LAYERS[1].y1 },
      { year: 1865, y: ROOT_LAYERS[2].y1 },
      ...eras.map((e) => ({ year: e.years[0], y: e.y0 })),
      { year: J.eras[J.eras.length - 1].years[1], y: eras[eras.length - 1].y1 },
    ];
    const yearToY = (yr) => {
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i], b = anchors[i + 1];
        if (yr >= a.year && yr <= b.year) return lerp(a.y, b.y, (yr - a.year) / (b.year - a.year));
      }
      return yr < anchors[0].year ? anchors[0].y : anchors[anchors.length - 1].y;
    };
    const ticks = [];
    for (let yr = 1900; yr <= 2020; yr += 10) ticks.push({ year: yr, y: yearToY(yr), major: yr % 50 === 0 });
    for (const a of anchors) if (!ticks.some((t) => t.year === a.year)) ticks.push({ year: a.year, y: a.y, major: true, era: true });
    ticks.sort((p, q) => p.year - q.year);

    let minX = Infinity, maxX = -Infinity;
    for (const n of nodes) { minX = Math.min(minX, n.x - n.r); maxX = Math.max(maxX, n.x + n.r); }
    for (const l of limbs) { minX = Math.min(minX, l.tip.x); maxX = Math.max(maxX, l.tip.x); }
    for (const k of kin) { minX = Math.min(minX, k.x - 90); maxX = Math.max(maxX, k.x + 90); }
    for (const r of roots) { minX = Math.min(minX, r.tip.x - 120); maxX = Math.max(maxX, r.tip.x + 120); }
    const bounds = { minX, maxX, minY: trunkTopY - 260, maxY: ROOT_LAYERS[0].y1 + 40 };

    return {
      nodes, limbs, plaques, blocks: blocksOut, twigs, leaves, plates, kin, roots, crown, eras, bounds,
      rootLayers: ROOT_LAYERS, trunkTopY, trunkHW, yearToY, ticks, byId,
    };
  }

  g.JazzLayout = { computeLayout, NODE_R };
})(window);
