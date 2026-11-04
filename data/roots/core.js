/* Deep Roots — registry for the African roots deep dive. Region and section data live in data/roots/*.js. */
(function (g) {
  const ROOTS = {
    regions: [],      // filled by data files, ordered by REGION_ORDER below
    sections: {},     // "crossing", "principles", "loop" …
    trade: [],        // embarkation estimates by African region (for the chart)
    add(chunk) {
      if (chunk.regions) this.regions.push(...chunk.regions);
      if (chunk.sections) Object.assign(this.sections, chunk.sections);
      if (chunk.trade) this.trade.push(...chunk.trade);
    },
  };
  // Regions, west to east and north to south around the continent. `countries` are ISO 3166-1 alpha-3
  // codes used to highlight the map (a country can belong to more than one cultural region).
  ROOTS.REGIONS = [
    { id: "senegambia",     name: "Senegambia & the Western Sahel", color: "#d9a441", countries: ["SEN", "GMB", "GNB", "MLI", "MRT", "BFA"] },
    { id: "upper-guinea",   name: "Upper Guinea Coast",             color: "#c47f2c", countries: ["GIN", "SLE", "LBR"] },
    { id: "gold-coast",     name: "The Gold Coast",                 color: "#e0782f", countries: ["GHA", "CIV"] },
    { id: "bight-of-benin", name: "Bight of Benin",                 color: "#d9452f", countries: ["TGO", "BEN", "NGA"] },
    { id: "bight-of-biafra", name: "Bight of Biafra",               color: "#b8322a", countries: ["NGA", "CMR", "GNQ"] },
    { id: "west-central",   name: "West-Central Africa",            color: "#8a3fa8", countries: ["AGO", "COD", "COG", "GAB"] },
    { id: "rainforest",     name: "The Central African Forest",     color: "#2a9858", countries: ["CAF", "COG", "COD", "CMR"] },
    { id: "southeast",      name: "Southeast Africa",               color: "#22818a", countries: ["MOZ", "ZWE", "MWI", "ZMB", "MDG"] },
    { id: "southern",       name: "Southern Africa",                color: "#2a7ab8", countries: ["ZAF", "LSO", "SWZ", "BWA", "NAM"] },
    { id: "east-horn",      name: "East Africa & the Horn",         color: "#4f55b8", countries: ["ETH", "ERI", "SOM", "DJI", "SDN", "SSD", "KEN", "TZA", "UGA", "RWA", "BDI"] },
    { id: "north",          name: "North Africa & the Sahara",      color: "#a8864c", countries: ["MAR", "DZA", "TUN", "LBY", "EGY", "NER", "TCD", "ESH"] },
  ];
  g.ROOTS = ROOTS;
})(typeof window !== "undefined" ? window : globalThis);
