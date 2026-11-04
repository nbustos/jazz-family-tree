#!/usr/bin/env node
// Validates data/core.js + data/artists/*.js.
// Usage: node tools/validate.js [data/artists/some-file.js ...]   (no args = all files)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/core.js"), "utf8"), ctx, { filename: "core.js" });
const JAZZ = ctx.JAZZ;

const artistDir = path.join(root, "data/artists");
const files = process.argv.length > 2
  ? process.argv.slice(2).map((f) => path.resolve(f))
  : fs.readdirSync(artistDir).filter((f) => f.endsWith(".js")).sort().map((f) => path.join(artistDir, f));

let errors = 0, warnings = 0;
const err = (m) => { errors++; console.log("ERROR  " + m); };
const warn = (m) => { warnings++; console.log("warn   " + m); };

for (const f of files) {
  const before = JAZZ.artists.length;
  try {
    vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: path.basename(f) });
  } catch (e) {
    err(`${path.basename(f)}: failed to load — ${e.message}`);
    continue;
  }
  for (let i = before; i < JAZZ.artists.length; i++) JAZZ.artists[i]._file = path.basename(f);
}

const roster = JSON.parse(fs.readFileSync(path.join(__dirname, "roster.json"), "utf8"));
const known = new Set(Object.entries(roster).filter(([k]) => !k.startsWith("_")).flatMap(([, v]) => v));
const branchIds = new Set(JAZZ.branches.map((b) => b.id));
const seen = new Map();
JAZZ.artists.forEach((a) => known.add(a.id));

const THIS_YEAR = 2026;
for (const a of JAZZ.artists) {
  const where = `${a._file}:${a.id || "(no id)"}`;
  if (!a.id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.id)) err(`${where}: bad id`);
  if (seen.has(a.id)) err(`${where}: duplicate id (also in ${seen.get(a.id)})`);
  seen.set(a.id, a._file);
  for (const k of ["name", "type", "branch", "emerged", "wiki", "bio", "tier"]) if (a[k] === undefined || a[k] === "") err(`${where}: missing ${k}`);
  if (!["person", "band"].includes(a.type)) err(`${where}: type must be person|band`);
  if (!branchIds.has(a.branch)) err(`${where}: unknown branch ${a.branch}`);
  for (const s of a.styles || []) if (!branchIds.has(s)) err(`${where}: unknown style ${s}`);
  if (![1, 2, 3].includes(a.tier)) err(`${where}: tier must be 1|2|3`);
  const yr = (v) => v == null || (Number.isInteger(v) && v > 1840 && v <= THIS_YEAR);
  if (a.type === "person") {
    if (!yr(a.born) || a.born == null) err(`${where}: born must be a year`);
    if (!yr(a.died)) err(`${where}: died must be a year or null`);
  } else {
    if (!Array.isArray(a.active) || !yr(a.active[0]) || !yr(a.active[1])) err(`${where}: band needs active: [start, end|null]`);
  }
  if (!yr(a.emerged)) err(`${where}: emerged must be a year`);
  if (!Array.isArray(a.instruments) || !a.instruments.length) err(`${where}: instruments must be a non-empty array`);
  if (!Array.isArray(a.records) || a.records.length < 2) warn(`${where}: fewer than 2 records`);
  if (a.bio && a.bio.length > 700) warn(`${where}: bio is long (${a.bio.length} chars)`);
  if (/\s/.test(a.wiki || "")) err(`${where}: wiki title must use underscores, not spaces`);
  for (const r of [...(a.influences || []), ...(a.members || [])]) {
    if (!known.has(r)) warn(`${where}: reference to unknown id "${r}"`);
    if (r === a.id) err(`${where}: references itself`);
  }
}
for (const b of Object.keys(JAZZ.branchInfo)) if (!branchIds.has(b)) err(`branchInfo for unknown branch ${b}`);

// Playlists page: every track needs title/artist/note, a year or `when`, and known artist and branch ids.
const plFile = path.join(root, "data/playlists.js");
if (fs.existsSync(plFile)) {
  ctx.window = ctx;
  vm.runInContext(fs.readFileSync(plFile, "utf8"), ctx, { filename: "playlists.js" });
  const eraIds = new Set(JAZZ.eras.map((e) => e.id));
  for (const p of ctx.PLAYLISTS || []) {
    if (p.era && !eraIds.has(p.era)) err(`playlist ${p.id}: unknown era "${p.era}"`);
    if (!p.intro || !(p.tracks || []).length) err(`playlist ${p.id}: needs intro and tracks`);
    const seenT = new Set();
    for (const t of p.tracks || []) {
      const w = `playlist ${p.id} "${t.title}"`;
      if (!t.title || !t.artist || !t.note) err(`${w}: needs title, artist and note`);
      if (!(Number.isInteger(t.year) && t.year > 1840 && t.year <= THIS_YEAR) && !t.when) err(`${w}: needs a year or when`);
      if (t.branch && !branchIds.has(t.branch)) err(`${w}: unknown branch "${t.branch}"`);
      for (const id of t.artistIds || []) if (!known.has(id)) err(`${w}: unknown artist id "${id}"`);
      if (seenT.has(t.artist + "|" + t.title)) err(`${w}: duplicate track`); seenT.add(t.artist + "|" + t.title);
    }
  }
}

console.log(`\n${JAZZ.artists.length} artists from ${files.length} file(s): ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
