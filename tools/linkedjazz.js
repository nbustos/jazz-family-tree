#!/usr/bin/env node
// Builds data/linkedjazz.js: relationships between musicians on the tree, drawn from the
// Linked Jazz project (Semantic Lab at Pratt), which extracted them from jazz oral-history
// interviews (Smithsonian, Rutgers IJS, Hamilton College, UCLA Central Avenue Sounds, U. Michigan).
// Data: CC0 1.0 — doi:10.5281/zenodo.3608406
// Usage: node tools/linkedjazz.js [path/to/relationships.nt]
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const SRC = "https://raw.githubusercontent.com/SemanticLab/linked-jazz-datasets/master/relationships.nt";
const UA = "JazzFamilyTree/1.0 (https://github.com/nbustos/jazz-family-tree)";

const CATEGORY = {
  "http://purl.org/ontology/mo/collaborated_with": "played",
  "http://linkedjazz.org/ontology/playedTogether": "played",
  "http://linkedjazz.org/ontology/inBandTogether": "played",
  "http://linkedjazz.org/ontology/bandmember": "played",
  "http://linkedjazz.org/ontology/touredWith": "played",
  "http://linkedjazz.org/ontology/bandLeaderOf": "played",
  "http://purl.org/vocab/relationship/friendOf": "friends",
  // mentorOf / influencedBy are deliberately excluded: their crowd-sourced direction is unreliable
  // (e.g. "Billy Eckstine mentorOf Earl Hines"), and the tree's own influence links are researched separately.
};

const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/core.js"), "utf8"), ctx);
for (const f of fs.readdirSync(path.join(root, "data/artists")).filter((f) => f.endsWith(".js")).sort())
  vm.runInContext(fs.readFileSync(path.join(root, "data/artists", f), "utf8"), ctx);
const artists = ctx.JAZZ.artists;
const byId = new Map(artists.map((a) => [a.id, a]));

const norm = (t) => t.replace(/_/g, " ").normalize("NFC").trim().toLowerCase();

async function canonical(titles) {
  // Resolve redirects/normalization so different spellings of the same article match.
  const out = new Map();
  const list = [...new Set(titles)];
  for (let i = 0; i < list.length; i += 50) {
    const chunk = list.slice(i, i + 50);
    const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&titles="
      + encodeURIComponent(chunk.join("|"));
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    const d = await r.json();
    const map = new Map(chunk.map((t) => [t, t]));
    for (const n of d.query.normalized || []) for (const [k, v] of map) if (v === n.from) map.set(k, n.to);
    for (const n of d.query.redirects || []) for (const [k, v] of map) if (v === n.from) map.set(k, n.to);
    for (const [k, v] of map) out.set(k, norm(v));
  }
  return out;
}

(async () => {
  const text = process.argv[2]
    ? fs.readFileSync(process.argv[2], "utf8")
    : await (await fetch(SRC, { headers: { "User-Agent": UA } })).text();

  const triples = [];
  const ljTitles = new Set();
  for (const line of text.split("\n")) {
    const m = line.match(/^<([^>]+)> <([^>]+)> <([^>]+)> \.$/);
    if (!m || !CATEGORY[m[2]]) continue;
    const t = (u) => u.startsWith("http://dbpedia.org/resource/") ? decodeURIComponent(u.slice(28)).replace(/_/g, " ") : null;
    const s = t(m[1]), o = t(m[3]);
    if (!s || !o) continue;
    triples.push([s, CATEGORY[m[2]], o]);
    ljTitles.add(s); ljTitles.add(o);
  }

  const ourCanon = await canonical(artists.map((a) => a.wiki.replace(/_/g, " ")));
  const titleToId = new Map();
  // Some bands link to their leader's article; people win so the leader keeps their own links.
  for (const a of artists) {
    const t = ourCanon.get(a.wiki.replace(/_/g, " "));
    if (!titleToId.has(t) || a.type === "person") titleToId.set(t, a.id);
  }
  // Only resolve LJ titles that could plausibly match (cheap prefilter on surname).
  const surnames = new Set(artists.map((a) => norm(a.name).split(" ").pop()));
  const candidates = [...ljTitles].filter((t) => surnames.has(norm(t).replace(/ \(.*\)$/, "").split(" ").pop()));
  const ljCanon = await canonical(candidates);
  const idOf = (t) => titleToId.get(ljCanon.get(t) || norm(t));

  const year = (a) => a.type === "band" ? a.active[0] - 25 : a.born;
  const net = {};
  const add = (a, key, b) => {
    const e = (net[a] ||= {});
    (e[key] ||= new Set()).add(b);
  };
  let used = 0, dropped = 0;
  for (const [s, cat, o] of triples) {
    const a = idOf(s), b = idOf(o);
    if (!a || !b || a === b) continue;
    if (cat === "played" || cat === "friends") { add(a, cat, b); add(b, cat, a); used++; continue; }
    // Directed: mentor → mentee. Reject assertions that contradict birth order (the crowd labels are noisy).
    const [mentor, mentee] = cat === "mentorOf" ? [a, b] : [b, a];
    if (year(byId.get(mentor)) > year(byId.get(mentee)) + 2) { dropped++; continue; }
    add(mentee, "mentors", mentor); add(mentor, "mentees", mentee); used++;
  }
  // A pair that is both "played" and "friends" keeps both; mentors are removed from "played" to avoid repetition.
  const out = {};
  for (const id of Object.keys(net).sort()) {
    const e = net[id], o = {};
    for (const k of ["mentors", "mentees", "played", "friends"]) {
      if (!e[k]) continue;
      let list = [...e[k]];
      if (k === "played") list = list.filter((x) => !(e.mentors && e.mentors.has(x)) && !(e.mentees && e.mentees.has(x)));
      if (list.length) o[k] = list.sort();
    }
    if (Object.keys(o).length) out[id] = o;
  }
  fs.writeFileSync(path.join(root, "data/linkedjazz.js"),
    "// Generated by tools/linkedjazz.js from the Linked Jazz project (Semantic Lab at Pratt), CC0 1.0,\n"
    + "// doi:10.5281/zenodo.3608406. Relationships asserted in jazz oral-history interviews.\n"
    + "window.JAZZ.network = " + JSON.stringify(out) + ";\n");
  console.log(`${Object.keys(out).length} artists connected; ${used} assertions used, ${dropped} dropped for contradicting birth order.`);
})();
