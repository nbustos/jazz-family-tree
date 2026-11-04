/* Labels & Locals — registry for the record labels and the clubs (and halls, ballrooms, lofts) that shaped jazz.
   Label, city, club and essay data live in data/labels/*.js and are merged in with LABELS.add(). */
(function (g) {
  const LABELS = {
    labels: [],
    clubs: [],
    essays: [],
    add(chunk) {
      if (chunk.labels) this.labels.push(...chunk.labels);
      if (chunk.clubs) this.clubs.push(...chunk.clubs);
      if (chunk.essays) this.essays.push(...chunk.essays);
      // City chapters are merged into the CITIES table below by id.
      for (const c of chunk.cities || []) {
        const m = this.CITIES.find((x) => x.id === c.id);
        if (m) Object.assign(m, c); else this.CITIES.push(c);
      }
    },
  };

  // Who owned the label. This is the one categorical dimension the page colors by.
  LABELS.KINDS = [
    { id: "major",       name: "Major company",               short: "Major" },
    { id: "independent", name: "Independent",                 short: "Independent" },
    { id: "artist",      name: "Musician- or community-run",  short: "Musician-run" },
    { id: "state",       name: "State or public body",        short: "State" },
  ];

  LABELS.REGIONS = [
    { id: "us",     name: "United States" },
    { id: "europe", name: "Europe" },
    { id: "africa", name: "Africa" },
    { id: "asia",   name: "Asia" },
    { id: "latam",  name: "Latin America & the Caribbean" },
    { id: "north",  name: "Canada" },
    { id: "oceania", name: "Oceania" },
  ];

  // What sort of room a "local" is.
  LABELS.VENUE_KINDS = {
    club: "Club", ballroom: "Ballroom", hall: "Hall", district: "District / street", loft: "Loft",
    cafe: "Café / bar", theater: "Theatre", hotel: "Hotel", cabaret: "Cabaret", institution: "Institution",
  };

  // Cities with clubs on the page. coords are [longitude, latitude]; `region` matches LABELS.REGIONS.
  // City chapters (lead, story, sources) are added by the club data files.
  LABELS.CITIES = [
    { id: "new-orleans",   name: "New Orleans",    country: "USA",          region: "us",     coords: [-90.07, 29.95] },
    { id: "chicago",       name: "Chicago",        country: "USA",          region: "us",     coords: [-87.63, 41.88] },
    { id: "kansas-city",   name: "Kansas City",    country: "USA",          region: "us",     coords: [-94.58, 39.10] },
    { id: "new-york",      name: "New York",       country: "USA",          region: "us",     coords: [-73.99, 40.73] },
    { id: "washington",    name: "Washington, D.C.", country: "USA",        region: "us",     coords: [-77.03, 38.91] },
    { id: "pittsburgh",    name: "Pittsburgh",     country: "USA",          region: "us",     coords: [-79.99, 40.44] },
    { id: "detroit",       name: "Detroit",        country: "USA",          region: "us",     coords: [-83.05, 42.33] },
    { id: "los-angeles",   name: "Los Angeles",    country: "USA",          region: "us",     coords: [-118.25, 34.05] },
    { id: "san-francisco", name: "San Francisco",  country: "USA",          region: "us",     coords: [-122.42, 37.77] },
    { id: "montreal",      name: "Montreal",       country: "Canada",       region: "north",  coords: [-73.57, 45.50] },
    { id: "havana",        name: "Havana",         country: "Cuba",         region: "latam",  coords: [-82.38, 23.13] },
    { id: "rio",           name: "Rio de Janeiro", country: "Brazil",       region: "latam",  coords: [-43.18, -22.97] },
    { id: "london",        name: "London",         country: "UK",           region: "europe", coords: [-0.13, 51.51] },
    { id: "paris",         name: "Paris",          country: "France",       region: "europe", coords: [2.35, 48.85] },
    { id: "amsterdam",     name: "Amsterdam",      country: "Netherlands",  region: "europe", coords: [4.90, 52.37] },
    { id: "copenhagen",    name: "Copenhagen",     country: "Denmark",      region: "europe", coords: [12.57, 55.68] },
    { id: "stockholm",     name: "Stockholm",      country: "Sweden",       region: "europe", coords: [18.07, 59.33] },
    { id: "berlin",        name: "Berlin",         country: "Germany",      region: "europe", coords: [13.40, 52.52] },
    { id: "moscow",        name: "Moscow",         country: "Russia",       region: "europe", coords: [37.62, 55.75] },
    { id: "johannesburg",  name: "Johannesburg",   country: "South Africa", region: "africa", coords: [28.05, -26.20] },
    { id: "lagos",         name: "Lagos",          country: "Nigeria",      region: "africa", coords: [3.38, 6.52] },
    { id: "bombay",        name: "Bombay (Mumbai)", country: "India",       region: "asia",   coords: [72.83, 18.93] },
    { id: "shanghai",      name: "Shanghai",       country: "China",        region: "asia",   coords: [121.49, 31.24] },
    { id: "tokyo",         name: "Tokyo & Yokohama", country: "Japan",      region: "asia",   coords: [139.69, 35.69] },
    { id: "melbourne",     name: "Melbourne",      country: "Australia",    region: "oceania", coords: [144.96, -37.81] },
  ];

  // Essay order (ids are written by the data files).
  LABELS.ESSAY_ORDER = ["race-records", "the-format", "producers", "self-determination", "the-room", "vice-dance-colour-line", "abroad", "elsewhere", "today"];

  g.LABELS = LABELS;
})(typeof window !== "undefined" ? window : globalThis);
