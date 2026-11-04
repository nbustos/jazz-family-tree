#!/usr/bin/env node
// Checks the Labels & Locals data: schema, unique ids, cross-references (artists, Notes pieces, labels,
// clubs, cities), footnote numbers and image fields. Usage: node tools/validate-labels.js
const fs = require("fs");
const path = require("path");
global.window = global;
const root = path.join(__dirname, "..");
const req = (p) => require(path.join(root, p));

req("data/core.js");
for (const f of fs.readdirSync(path.join(root, "data/artists")).sort()) req("data/artists/" + f);
req("data/notes/core.js");
for (const f of fs.readdirSync(path.join(root, "data/notes")).sort()) if (f.startsWith("era")) req("data/notes/" + f);
req("data/labels/core.js");
for (const f of fs.readdirSync(path.join(root, "data/labels")).sort()) {
  if (["core.js", "world-map.js", "by-artist.js"].includes(f) || !f.endsWith(".js")) continue;
  try { req("data/labels/" + f); } catch (e) { console.error(`✗ ${f} failed to load: ${e.message}`); process.exitCode = 1; }
}

// Ids planned for the page, so files written in parallel can reference each other before they exist.
const PLANNED_LABELS = `victor columbia okeh gennett paramount black-swan brunswick decca bluebird commodore keynote v-disc
blue-note savoy dial prestige riverside contemporary pacific-jazz verve atlantic impulse debut argo candid esp-disk saturn delmark
strata-east black-jazz tribe cti pablo jcoa concord
swing vogue esquire metronome mps ecm enja fmp icp incus ogun black-saint steeplechase amiga melodiya leo-records polish-jazz brownswood
gallo as-shams amha elenco egrem three-blind-mice east-wind pi-recordings international-anthem brainfeeder`.split(/\s+/);
const PLANNED_CLUBS = `cotton-club savoy-ballroom smalls-paradise mintons monroes-uptown-house apollo-theater fifty-second-street cafe-society
village-vanguard royal-roost birdland five-spot half-note village-gate slugs studio-rivbea sweet-basil blue-note-nyc knitting-factory
smalls the-stone jazz-gallery dizzys
storyville funky-butt-hall preservation-hall snug-harbor lincoln-gardens sunset-cafe grand-terrace green-mill jazz-showcase velvet-lounge
reno-club cherry-blossom mutual-musicians-foundation central-avenue lighthouse-cafe world-stage black-hawk keystone-korner blue-bird-inn
crawford-grill bohemian-caverns
bricktops caveau-de-la-huchette club-saint-germain le-chat-qui-peche new-morning club-eleven ronnie-scotts hundred-club cafe-oto
jazzhus-montmartre nalen gyllene-cirkeln bimhuis quasimodo cafe-molodyozhnoye chigusa shinjuku-pit-inn
afrika-shrine tropicana beco-das-garrafas rockheads-paradise peace-hotel taj-mahal-hotel bennetts-lane`.split(/\s+/);

const L = global.LABELS;
const J = global.JAZZ, N = global.NOTES;
const artists = new Set(J.artists.map((a) => a.id));
const pieces = new Set(N.pieces.map((p) => p.id));
const labelIds = new Set([...PLANNED_LABELS, ...L.labels.map((l) => l.id)]);
const clubIds = new Set([...PLANNED_CLUBS, ...L.clubs.map((c) => c.id)]);
const cities = new Set(L.CITIES.map((c) => c.id));
const kinds = new Set(L.KINDS.map((k) => k.id));
const regions = new Set(L.REGIONS.map((r) => r.id));
let errors = 0, warnings = 0;
const err = (where, msg) => { errors++; console.log(`✗ ${where}: ${msg}`); };
const warn = (where, msg) => { warnings++; console.log(`· ${where}: ${msg}`); };

const yearOk = (y) => y == null || (Number.isInteger(y) && y >= 1850 && y <= 2026);
function notes(where, texts, sources) {
  const n = (sources || []).length;
  for (const t of texts.flat().filter(Boolean)) {
    for (const m of String(t).matchAll(/\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g)) {
      for (const part of m[1].split(/\s*[,–-]\s*/)) {
        const k = +part;
        if (k < 1 || k > n) err(where, `footnote [${k}] but only ${n} sources`);
      }
    }
  }
  (sources || []).forEach((s, i) => { if (!s || !s.cite) err(where, `source ${i + 1} has no cite`); });
}
function image(where, img) {
  if (!img) return;
  for (const im of [].concat(img)) {
    for (const k of ["src", "page", "caption", "credit", "license"]) if (!im[k]) err(where, `image missing ${k}`);
    if (im.src && !/^https:\/\/upload\.wikimedia\.org\//.test(im.src)) err(where, `image src not on upload.wikimedia.org`);
    if (im.page && !/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(im.page)) err(where, `image page not a Commons file page`);
  }
}
function artistRefs(where, ids) { for (const id of ids || []) if (!artists.has(id)) err(where, `unknown artist id "${id}"`); }

const seen = new Set();
for (const l of L.labels) {
  const w = `label ${l.id}`;
  if (seen.has(l.id)) err(w, "duplicate id"); seen.add(l.id);
  if (!PLANNED_LABELS.includes(l.id)) warn(w, "not in the planned id list");
  for (const k of ["name", "founded", "kind", "city", "country", "coords", "region", "lead", "story", "records", "sources"]) if (l[k] == null) err(w, `missing ${k}`);
  if (!kinds.has(l.kind)) err(w, `bad kind "${l.kind}"`);
  if (!regions.has(l.region)) err(w, `bad region "${l.region}"`);
  if (!yearOk(l.founded) || !yearOk(l.ended)) err(w, "bad founded/ended year");
  if (l.periods) for (const [a, b] of l.periods) if (!yearOk(a) || !yearOk(b)) err(w, "bad period");
  if (!Array.isArray(l.coords) || l.coords.length !== 2 || Math.abs(l.coords[0]) > 180 || Math.abs(l.coords[1]) > 90) err(w, "coords must be [lon, lat]");
  artistRefs(w, l.artists);
  for (const p of l.people || []) if (p.artistId) artistRefs(w, [p.artistId]);
  for (const r of l.records || []) {
    if (!r.title || !r.year) err(w, `record missing title/year`);
    artistRefs(w + ` record "${r.title}"`, r.artistIds);
    if (r.piece && !pieces.has(r.piece)) err(w, `unknown Notes piece "${r.piece}"`);
    if (r.venue && !clubIds.has(r.venue)) err(w, `unknown venue "${r.venue}"`);
  }
  notes(w, [l.lead, l.story, l.sound, l.significance, (l.records || []).map((r) => r.note)], l.sources);
  image(w, l.image);
}
for (const c of L.clubs) {
  const w = `club ${c.id}`;
  if (seen.has(c.id)) err(w, "duplicate id"); seen.add(c.id);
  if (!PLANNED_CLUBS.includes(c.id)) warn(w, "not in the planned id list");
  for (const k of ["name", "city", "kind", "opened", "lead", "story", "sources"]) if (c[k] == null) err(w, `missing ${k}`);
  if (!cities.has(c.city)) err(w, `unknown city "${c.city}"`);
  if (!L.VENUE_KINDS[c.kind]) err(w, `bad kind "${c.kind}"`);
  if (!yearOk(c.opened) || !yearOk(c.closed)) err(w, "bad opened/closed year");
  if (c.periods) for (const [a, b] of c.periods) if (!yearOk(a) || !yearOk(b)) err(w, "bad period");
  artistRefs(w, c.regulars);
  for (const p of c.people || []) if (p.artistId) artistRefs(w, [p.artistId]);
  for (const r of c.live || []) {
    if (!r.title || !r.year) err(w, "live record missing title/year");
    artistRefs(w + ` live "${r.title}"`, r.artistIds);
    if (r.label && !labelIds.has(r.label)) err(w, `live record label "${r.label}" is not a label id (use labelName for others)`);
  }
  notes(w, [c.lead, c.story, (c.moments || []).map((m) => m.text), (c.live || []).map((r) => r.note)], c.sources);
  image(w, c.image);
}
for (const city of L.CITIES) if (city.story) notes(`city ${city.id}`, [city.lead, city.story], city.sources);
for (const e of L.essays) {
  if (!L.ESSAY_ORDER.includes(e.id)) warn(`essay ${e.id}`, "not in ESSAY_ORDER");
  notes(`essay ${e.id}`, [e.lead, e.paras], e.sources);
  image(`essay ${e.id}`, e.image);
}
console.log(`\n${L.labels.length} labels, ${L.clubs.length} clubs, ${L.CITIES.filter((c) => c.story).length} city chapters, ${L.essays.length} essays — ${errors} errors, ${warnings} warnings`);
if (errors) process.exitCode = 1;
