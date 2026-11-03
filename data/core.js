/* Jazz Family Tree — core registry: eras (the trunk) and branches (styles / scenes).
   Artist data lives in data/artists/*.js and is registered through JAZZ.add(). */
(function (g) {
  const JAZZ = {
    eras: [],
    branches: [],
    branchInfo: {},
    artists: [],
    add(chunk) {
      if (chunk.branches) Object.assign(this.branchInfo, chunk.branches);
      if (chunk.artists) this.artists.push(...chunk.artists);
    },
  };

  // The trunk, read bottom to top.
  JAZZ.eras = [
    { id: "roots",     name: "Roots",                    years: [1895, 1917],
      summary: "Blues, ragtime, spirituals, work songs and the brass-band tradition of New Orleans converge at the turn of the century. In the city's dance halls and parade streets, musicians start to 'rag' and improvise on popular tunes." },
    { id: "jazz-age",  name: "The Jazz Age",             years: [1917, 1930],
      summary: "The first jazz records (1917) and the Great Migration carry New Orleans music north to Chicago and New York. Louis Armstrong turns jazz into a soloist's art, Harlem stride pianists dazzle at rent parties, and the first big bands take shape." },
    { id: "swing",     name: "The Swing Era",            years: [1930, 1945],
      summary: "Big bands become America's popular music. Benny Goodman's 1935 breakthrough launches a national craze, Ellington composes for his orchestra as an instrument, and Kansas City's riff-driven, blues-soaked bands bring Count Basie and Lester Young to New York." },
    { id: "bebop",     name: "Bebop",                    years: [1940, 1950],
      summary: "In after-hours jam sessions at Minton's Playhouse and Monroe's Uptown House, young players forge a fast, harmonically daring music for listening rather than dancing. Charlie Parker and Dizzy Gillespie lead the revolution; Afro-Cuban rhythm enters jazz." },
    { id: "postbop",   name: "Cool, Hard Bop & Soul",    years: [1949, 1960],
      summary: "Bebop splits into currents: the restrained, arranged sound of cool and West Coast jazz, and the hard-driving, gospel- and blues-rooted hard bop of New York and Blue Note Records, with soul jazz organ trios bringing it to neighborhood bars." },
    { id: "modal-free", name: "Modal & Free",            years: [1959, 1970],
      summary: "1959 changes everything: Kind of Blue opens up modal improvisation and Ornette Coleman's 'The Shape of Jazz to Come' questions fixed harmony altogether. Coltrane's quest turns spiritual, the avant-garde blooms, and bossa nova arrives from Brazil." },
    { id: "fusion",    name: "Fusion & New Directions", years: [1969, 1980],
      summary: "Miles Davis's In a Silent Way and Bitches Brew plug jazz into rock and funk. Fusion supergroups fill arenas, ECM defines a spacious European sound, Chicago's AACM builds a new creative music, and jazz spreads into Latin, African and global idioms." },
    { id: "neo",       name: "Neo-Tradition & Downtown", years: [1980, 1995],
      summary: "Wynton Marsalis and the 'Young Lions' revive acoustic, tradition-centered jazz, while New York's downtown and M-Base scenes push outward. DJs and rappers sample hard bop, giving birth to acid jazz and jazz-rap." },
    { id: "modern",    name: "Modern Jazz",              years: [1995, 2010],
      summary: "A new mainstream absorbs everything before it: odd meters, pop and rock repertoire, global influences. Piano trios reinvent themselves, Nordic and European scenes flourish, and a new wave of singers bridges jazz and popular song." },
    { id: "today",     name: "Jazz Today",               years: [2010, 2026],
      summary: "Jazz is plural again. Los Angeles musicians power hip-hop's biggest records, London's young scene packs clubs and festivals, Chicago and New York produce a new creative avant-garde, and a streaming-native generation blurs every genre line." },
  ];

  // Branches: side -1 = left of trunk, 1 = right. Within an era, branches on the same side share one limb,
  // chained outward in the order listed (nearest the trunk first). Colors are used for plaques and accents.
  JAZZ.branches = [
    // Roots
    { id: "nola-roots",   era: "roots",     side: -1, name: "New Orleans Roots",       region: "New Orleans",          years: [1895, 1917], color: "#b35c33" },
    { id: "blues",        era: "roots",     side: -1, name: "Blues",                   region: "The American South",   years: [1900, 1930], color: "#7a4a2e" },
    { id: "ragtime",      era: "roots",     side: 1,  name: "Ragtime",                 region: "Missouri · New York",  years: [1895, 1920], color: "#a8864c" },
    // Jazz Age
    { id: "new-orleans",  era: "jazz-age",  side: -1, name: "New Orleans Jazz",        region: "New Orleans → Chicago", years: [1917, 1930], color: "#cf6f32" },
    { id: "stride",       era: "jazz-age",  side: -1, name: "Harlem Stride",           region: "Harlem, New York",     years: [1917, 1940], color: "#9c4f27" },
    { id: "chicago",      era: "jazz-age",  side: 1,  name: "Chicago & Dixieland",     region: "Chicago",              years: [1922, 1935], color: "#c39a23" },
    { id: "early-bigband", era: "jazz-age", side: 1,  name: "Early Big Bands",         region: "New York",             years: [1923, 1932], color: "#b07a2a" },
    // Swing
    { id: "swing",        era: "swing",     side: -1, name: "Big Band Swing",          region: "New York · national",  years: [1930, 1946], color: "#d39b2f" },
    { id: "swing-vocal",  era: "swing",     side: -1, name: "Swing-Era Singers",       region: "New York",             years: [1930, 1950], color: "#b8506e" },
    { id: "kansas-city",  era: "swing",     side: 1,  name: "Kansas City Jazz",        region: "Kansas City",          years: [1927, 1945], color: "#bf6d24" },
    { id: "ellington",    era: "swing",     side: 1,  name: "Ellingtonia",             region: "Harlem · Cotton Club", years: [1927, 1974], color: "#4f55b8" },
    { id: "gypsy-jazz",   era: "swing",     side: 1,  name: "Gypsy Jazz",              region: "Paris",                years: [1934, 1953], color: "#7d8b34" },
    // Bebop
    { id: "bebop",        era: "bebop",     side: -1, name: "Bebop",                   region: "52nd Street · Harlem", years: [1941, 1955], color: "#d9452f" },
    { id: "afro-cuban",   era: "bebop",     side: 1,  name: "Afro-Cuban Jazz",         region: "New York · Havana",    years: [1940, 1960], color: "#e0782f" },
    // Cool, Hard Bop & Soul
    { id: "hard-bop",     era: "postbop",   side: -1, name: "Hard Bop",                region: "New York · Detroit · Philadelphia", years: [1953, 1968], color: "#2b5aa0" },
    { id: "soul-jazz",    era: "postbop",   side: -1, name: "Soul Jazz & Organ",       region: "Philadelphia · Newark", years: [1956, 1972], color: "#7a45b0" },
    { id: "cool",         era: "postbop",   side: 1,  name: "Cool Jazz & Third Stream", region: "New York",            years: [1948, 1960], color: "#4a8cc2" },
    { id: "west-coast",   era: "postbop",   side: 1,  name: "West Coast Jazz",         region: "Los Angeles · San Francisco", years: [1951, 1962], color: "#3fb0c4" },
    { id: "vocal-postwar", era: "postbop",  side: 1,  name: "Post-war Vocalists",      region: "New York · national",  years: [1945, 1970], color: "#c2456b" },
    // Modal & Free
    { id: "modal",        era: "modal-free", side: -1, name: "Modal & Post-Bop",       region: "New York",             years: [1958, 1970], color: "#22818a" },
    { id: "spiritual",    era: "modal-free", side: -1, name: "Spiritual Jazz",         region: "New York · Detroit · LA", years: [1964, 1977], color: "#c9971a" },
    { id: "free",         era: "modal-free", side: 1,  name: "Free Jazz & Avant-Garde", region: "New York · Los Angeles", years: [1959, 1975], color: "#b8322a" },
    { id: "brazil",       era: "modal-free", side: 1,  name: "Bossa Nova & Brazil",    region: "Rio de Janeiro",       years: [1958, 1980], color: "#2a9858" },
    // Fusion
    { id: "fusion",       era: "fusion",    side: -1, name: "Jazz-Rock Fusion",        region: "New York · Los Angeles", years: [1969, 1985], color: "#e2741d" },
    { id: "jazz-funk",    era: "fusion",    side: -1, name: "Jazz-Funk & Smooth",      region: "Los Angeles · New York", years: [1971, 1995], color: "#c2501a" },
    { id: "latin-jazz",   era: "fusion",    side: -1, name: "Latin Jazz Expands",      region: "Havana · New York · Puerto Rico", years: [1965, 2000], color: "#d8463a" },
    { id: "ecm",          era: "fusion",    side: 1,  name: "ECM & European Jazz",     region: "Munich · Oslo · London", years: [1969, 2000], color: "#5f8aa6" },
    { id: "aacm",         era: "fusion",    side: 1,  name: "AACM, BAG & the Lofts",   region: "Chicago · St. Louis · New York", years: [1965, 1985], color: "#8a3fa8" },
    { id: "south-africa", era: "fusion",    side: 1,  name: "South African Jazz",      region: "Johannesburg · Cape Town · London", years: [1959, 1990], color: "#25a25c" },
    // Neo-Tradition & Downtown
    { id: "young-lions",  era: "neo",       side: -1, name: "The Young Lions",         region: "New Orleans · New York", years: [1980, 2000], color: "#b58316" },
    { id: "big-band-modern", era: "neo",    side: -1, name: "Modern Big Bands",        region: "New York · Los Angeles", years: [1966, 2026], color: "#9d7550" },
    { id: "downtown",     era: "neo",       side: 1,  name: "Downtown & M-Base",       region: "Lower Manhattan · Brooklyn", years: [1979, 2005], color: "#7e8d8f" },
    { id: "acid-jazz",    era: "neo",       side: 1,  name: "Acid Jazz & Jazz-Rap",    region: "London · New York",    years: [1987, 2000], color: "#14967f" },
    // Modern
    { id: "modern-mainstream", era: "modern", side: -1, name: "Modern Mainstream",     region: "New York",             years: [1990, 2026], color: "#2a7ab8" },
    { id: "voices",       era: "modern",    side: -1, name: "Modern Voices",           region: "International",        years: [1990, 2026], color: "#bd1d5f" },
    { id: "euro-global",  era: "modern",    side: 1,  name: "Global & European Currents", region: "Stockholm · Oslo · Tel Aviv · Tokyo", years: [1993, 2026], color: "#0a8a7c" },
    // Today
    { id: "la-scene",     era: "today",     side: -1, name: "LA & the Hip-Hop Bridge", region: "Los Angeles",          years: [2005, 2026], color: "#7b22a8" },
    { id: "genre-fluid",  era: "today",     side: -1, name: "Genre-Fluid Generation",  region: "Online · everywhere",  years: [2008, 2026], color: "#e8930c" },
    { id: "london",       era: "today",     side: 1,  name: "The London Scene",        region: "London",               years: [2012, 2026], color: "#d81b60" },
    { id: "new-creative", era: "today",     side: 1,  name: "New Creative Music",      region: "Chicago · New York",   years: [2010, 2026], color: "#0097b2" },
  ];

  // The root system, drawn below the trunk. layer: 0 = Africa (deepest), 1 = 1619–1865, 2 = 1865–1895.
  JAZZ.roots = [
    { id: "polyrhythm", layer: 0, side: -1, name: "Polyrhythm & the Drum",
      text: "West and Central African musical practice — layered, interlocking rhythms, the drum as a voice, and music woven into dance and community life — is the deepest root of jazz's rhythmic feel and its emphasis on group interplay." },
    { id: "call-response", layer: 0, side: 1, name: "Call & Response",
      text: "The leader-and-chorus exchange found across West African music survived the Middle Passage in work songs, church services and later in the riffing brass and reed sections of big bands and the 'trading fours' of jazz soloists." },
    { id: "ring-shout", layer: 1, side: -1, name: "Ring Shout",
      text: "A counter-clockwise, shuffling sacred dance with hand-clapping and call-and-response singing, practiced by enslaved Africans in the American South. Scholars such as Sterling Stuckey and Samuel Floyd identify it as a crucible of African American musical style." },
    { id: "congo-square", layer: 1, side: 1, name: "Congo Square",
      text: "On Sunday afternoons from the late 1700s into the 1840s, enslaved and free people of color gathered in this New Orleans plaza to drum, sing and dance in African and Caribbean traditions — a rare public survival of African music on U.S. soil." },
    { id: "spirituals", layer: 1, side: -1, name: "Spirituals",
      text: "Religious songs created by enslaved African Americans, blending Protestant hymnody with African vocal practice: bent pitches, call-and-response, and coded longing for freedom. The Fisk Jubilee Singers brought them to world audiences from 1871." },
    { id: "work-songs", layer: 1, side: 1, name: "Work Songs & Field Hollers",
      text: "Rhythmic songs that paced collective labor and the solitary, melismatic 'hollers' sung across the fields. Their blue notes and free phrasing fed directly into the blues." },
    { id: "brass-bands", layer: 2, side: -1, name: "Brass Bands & Marches",
      text: "After the Civil War, cheap surplus military instruments and the craze for Sousa-style marches put brass bands in every Black community in New Orleans. Parade, funeral and social-club bands became the training ground of the first jazz musicians." },
    { id: "creole", layer: 2, side: 1, name: "Creole & Caribbean Currents",
      text: "New Orleans' Creoles of color brought conservatory training, French and Spanish musical traditions, and the Afro-Caribbean 'Spanish tinge' (the habanera rhythm) that Jelly Roll Morton called an essential ingredient of jazz." },
    { id: "european-harmony", layer: 2, side: 1, name: "European Harmony",
      text: "Hymns, parlor songs, opera and the piano repertoire supplied the chord progressions and song forms that African American musicians reshaped with syncopation, blue notes and improvisation." },
  ];

  // Kindred genres: cousins of jazz that share its roots. Drawn as small text-only offshoots.
  JAZZ.kin = [
    { name: "Gospel",        year: 1930, era: "swing",      side: 1,  text: "Thomas A. Dorsey fused blues with sacred song in Chicago in the early 1930s. Gospel's call-and-response and church fervor later fed hard bop, soul jazz and spiritual jazz." },
    { name: "Boogie-Woogie", year: 1928, era: "jazz-age",   side: -1, text: "A driving, blues-based piano style with rolling eight-to-the-bar bass lines, popularized by Pine Top Smith (1928), Meade Lux Lewis, Albert Ammons and Pete Johnson." },
    { name: "Rhythm & Blues", year: 1945, era: "bebop",     side: -1, text: "Jump blues bands led by Louis Jordan and others stripped swing down to a shouting, dance-driven small-group sound that became R&B — and, soon, rock and roll." },
    { name: "Rock & Roll",   year: 1954, era: "postbop",    side: 1,  text: "Built from R&B, jump blues, country and gospel, rock and roll borrowed the honking tenor sax and backbeat of jump bands, and later pulled jazz into fusion." },
    { name: "Soul",          year: 1960, era: "modal-free", side: -1, text: "Gospel's intensity in secular song (Ray Charles, Sam Cooke, Aretha Franklin). Soul and jazz shared musicians, studios and audiences throughout the 1960s." },
    { name: "Funk",          year: 1967, era: "fusion",     side: -1, text: "James Brown's rhythm-first music — everything on 'the one' — gave fusion and jazz-funk their grooves; many funk horn players came from jazz." },
    { name: "Afrobeat",      year: 1970, era: "fusion",     side: 1,  text: "Fela Kuti and drummer Tony Allen fused Yoruba music, highlife, funk and jazz in Lagos. Jazz in turn borrowed back — from the London scene to today." },
    { name: "Hip-Hop",       year: 1979, era: "neo",        side: 1,  text: "Born in the Bronx; by the late 1980s producers were sampling Blue Note and CTI records, and jazz-rap and acid jazz connected the genres directly." },
    { name: "Neo-Soul",      year: 1996, era: "modern",     side: -1, text: "D'Angelo, Erykah Badu and the Soulquarians drew on jazz harmony and live musicianship; drummer Questlove and keyboardist James Poyser bridged both worlds." },
    { name: "Electronic & Beat Music", year: 2008, era: "today", side: 1, text: "J Dilla's off-grid drum programming and LA's beat scene reshaped how a generation of jazz drummers play time." },
  ];

  g.JAZZ = JAZZ;
})(typeof window !== "undefined" ? window : globalThis);
