/* Jazz Family Tree — Bebop, Afro-Cuban, Cool & Third Stream, West Coast, Post-war Vocalists.
   Branches: bebop, afro-cuban, cool, west-coast, vocal-postwar. */
JAZZ.add({
  branches: {
    "bebop": {
      summary: "Bebop took shape in the early 1940s in after-hours Harlem jam sessions at Minton's Playhouse and Monroe's Uptown House, then moved downtown to the clubs of 52nd Street by 1944–45. Built on fast tempos, extended and altered chord changes, angular melodic lines and a more conversational rhythm section, it was conceived as music for listening rather than dancing. Charlie Parker, Dizzy Gillespie, Thelonious Monk, Bud Powell, Kenny Clarke and Max Roach created the harmonic and rhythmic language on which nearly all later modern jazz is built.",
      keyAlbums: [
        "Groovin' High — Dizzy Gillespie (1945)",
        "Ko-Ko — Charlie Parker (1945)",
        "'Round Midnight — Thelonious Monk (1947)",
        "Un Poco Loco — Bud Powell (1951)",
        "Jazz at Massey Hall — The Quintet (1953)"
      ],
      places: ["Minton's Playhouse", "Monroe's Uptown House", "52nd Street (Onyx Club, Three Deuces)", "Royal Roost", "Birdland"]
    },
    "afro-cuban": {
      summary: "Afro-Cuban jazz (also called Cubop) fused Cuban clave-based rhythms and percussion with jazz harmony and big-band arranging. Mario Bauzá and Machito's Afro-Cubans, founded in New York in 1940, pioneered the blend, with Bauzá's 'Tanga' (c. 1943) often cited as its first composition. Dizzy Gillespie's 1947 collaboration with the Cuban conguero Chano Pozo on 'Manteca' and 'Cubana Be/Cubano Bop' brought it into bebop, laying the foundation for Latin jazz and, later, salsa.",
      keyAlbums: [
        "Manteca — Dizzy Gillespie Orchestra with Chano Pozo (1947)",
        "Cubana Be/Cubano Bop — Dizzy Gillespie Orchestra (1947)",
        "Afro-Cuban Jazz Suite — Chico O'Farrill with Machito & Charlie Parker (1950)",
        "Afro — Dizzy Gillespie (1954)",
        "Dance Mania — Tito Puente (1958)"
      ],
      places: ["Palladium Ballroom", "Spanish Harlem (El Barrio)", "Carnegie Hall", "Havana"]
    },
    "cool": {
      summary: "Cool jazz emerged in New York in the late 1940s as a reaction to bebop's heat: lighter tones, relaxed tempos, contrapuntal writing and unusual instrumentation such as French horn and tuba. Its seedbed was Gil Evans's 55th Street apartment and Claude Thornhill's orchestra, leading to Miles Davis's 1949–50 nonet sessions later issued as Birth of the Cool; Lennie Tristano's school pursued a parallel, cerebral path. In 1957 Gunther Schuller named the 'Third Stream', a fusion of jazz and classical composition championed by John Lewis and the Modern Jazz Quartet.",
      keyAlbums: [
        "Birth of the Cool — Miles Davis (1949–50)",
        "Crosscurrents — Lennie Tristano & Lee Konitz (1949)",
        "Django — Modern Jazz Quartet (1956)",
        "Miles Ahead — Miles Davis & Gil Evans (1957)",
        "Focus — Stan Getz (1961)"
      ],
      places: ["Gil Evans's 55th Street apartment", "Royal Roost", "Lenox School of Jazz", "Birdland"]
    },
    "west-coast": {
      summary: "West Coast jazz was the cool, carefully arranged small-group sound that flourished in Los Angeles and San Francisco in the 1950s. Many of its players were Stan Kenton and Woody Herman alumni who also worked in Hollywood studios, and it was documented by the Pacific Jazz and Contemporary labels and at the Lighthouse Café in Hermosa Beach. Gerry Mulligan's pianoless quartet with Chet Baker and Dave Brubeck's odd-meter experiments reached a wide audience, while Central Avenue's Black bebop scene ran alongside it.",
      keyAlbums: [
        "Modern Sounds — Shorty Rogers (1951)",
        "Bernie's Tune — Gerry Mulligan Quartet (1952)",
        "Chet Baker Sings — Chet Baker (1954)",
        "Art Pepper Meets the Rhythm Section — Art Pepper (1957)",
        "Time Out — Dave Brubeck Quartet (1959)"
      ],
      places: ["Lighthouse Café, Hermosa Beach", "The Haig, Los Angeles", "Central Avenue, Los Angeles", "Black Hawk, San Francisco", "Shelly's Manne-Hole"]
    },
    "vocal-postwar": {
      summary: "After World War II, singers absorbed bebop's harmonic language and phrasing. Sarah Vaughan and Billy Eckstine came out of the Earl Hines and Eckstine bands where bebop was born; Dinah Washington tied jazz to blues and R&B; Betty Carter and Carmen McRae made improvisation central to the vocalist's role. Eddie Jefferson's vocalese, setting lyrics to recorded solos, was taken up by Lambert, Hendricks & Ross, while Abbey Lincoln and Nina Simone carried jazz singing into the civil-rights era.",
      keyAlbums: [
        "Lover Man — Sarah Vaughan with Dizzy Gillespie (1945)",
        "Sarah Vaughan with Clifford Brown — Sarah Vaughan (1955)",
        "Sing a Song of Basie — Lambert, Hendricks & Ross (1957)",
        "What a Diff'rence a Day Makes! — Dinah Washington (1959)",
        "John Coltrane and Johnny Hartman — Johnny Hartman (1963)"
      ],
      places: ["Apollo Theater", "Birdland", "Village Vanguard", "Newport Jazz Festival"]
    }
  },

  artists: [
    // ───────────────────────── BEBOP ─────────────────────────
    {
      id: "charlie-parker", name: "Charlie Parker", nickname: "Bird", type: "person",
      born: 1920, died: 1955, origin: "Kansas City, Kansas, USA",
      instruments: ["alto saxophone"], branch: "bebop", styles: ["kansas-city"],
      emerged: 1945, tier: 1, wiki: "Charlie_Parker",
      bio: "Raised in Kansas City, Missouri, Parker came up through Jay McShann's band before joining the Harlem jam sessions where bebop was forged. His 1945 recordings with Dizzy Gillespie and his own Savoy and Dial sides set a new standard of speed, harmonic sophistication and blues feeling. Heroin addiction shortened his life, but nearly every later jazz improviser on any instrument learned from his language.",
      records: ["Ko-Ko (1945)", "Ornithology (1946)", "Parker's Mood (1948)"],
      influences: ["lester-young", "jay-mcshann"]
    },
    {
      id: "dizzy-gillespie", name: "Dizzy Gillespie", nickname: "Dizzy", type: "person",
      born: 1917, died: 1993, origin: "Cheraw, South Carolina, USA",
      instruments: ["trumpet", "vocals"], branch: "bebop", styles: ["afro-cuban"],
      emerged: 1945, tier: 1, wiki: "Dizzy_Gillespie",
      bio: "Gillespie built on Roy Eldridge's virtuosity to become bebop's great trumpeter and its most articulate teacher, codifying the new harmonies for fellow musicians. His 1945 small-group records with Charlie Parker defined the style, and his big band of 1946–49 brought bebop to an orchestra. Hiring Cuban conguero Chano Pozo in 1947, he helped launch Afro-Cuban jazz, and he remained a tireless ambassador for the music.",
      records: ["Groovin' High (1945)", "Salt Peanuts (1945)", "Manteca (1947)"],
      influences: ["roy-eldridge", "cab-calloway", "mario-bauza"]
    },
    {
      id: "thelonious-monk", name: "Thelonious Monk", type: "person",
      born: 1917, died: 1982, origin: "Rocky Mount, North Carolina, USA (raised New York City)",
      instruments: ["piano"], branch: "bebop", styles: ["hard-bop"],
      emerged: 1947, tier: 1, wiki: "Thelonious_Monk",
      bio: "House pianist at Minton's Playhouse in the early 1940s, Monk helped create bebop's harmonic vocabulary but developed a style entirely his own: percussive attack, dissonant clusters, silence and stride-rooted swing. Long underrated, he became one of jazz's most-performed composers, with standards such as \"'Round Midnight\", \"Straight, No Chaser\" and \"Ruby, My Dear\". He appeared on the cover of Time in 1964.",
      records: ["'Round Midnight (1947)", "Brilliant Corners (1957)", "Monk's Dream (1963)"],
      influences: ["james-p-johnson", "coleman-hawkins", "mary-lou-williams"]
    },
    {
      id: "bud-powell", name: "Bud Powell", type: "person",
      born: 1924, died: 1966, origin: "New York City (Harlem), USA",
      instruments: ["piano"], branch: "bebop",
      emerged: 1946, tier: 1, wiki: "Bud_Powell",
      bio: "Powell translated Charlie Parker's horn lines to the keyboard, playing long, rapid right-hand melodies over sparse left-hand chords, a model that became the standard bebop piano approach. Mentored by Thelonious Monk, he recorded brilliantly for Blue Note and Verve around 1949–51 and played the 1953 Massey Hall concert. Mental illness, aggravated by a 1945 police beating and later hospitalizations, darkened his career.",
      records: ["Tempus Fugue-It (1949)", "Un Poco Loco (1951)", "Jazz at Massey Hall (1953)"],
      influences: ["thelonious-monk", "art-tatum", "charlie-parker", "cootie-williams"]
    },
    {
      id: "kenny-clarke", name: "Kenny Clarke", nickname: "Klook", type: "person",
      born: 1914, died: 1985, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["drums"], branch: "bebop", styles: ["cool"],
      emerged: 1941, tier: 2, wiki: "Kenny_Clarke",
      bio: "As house drummer at Minton's Playhouse around 1941, Clarke moved the basic timekeeping pulse from the bass drum to the ride cymbal and used the bass drum for off-beat accents ('dropping bombs'), the foundation of modern jazz drumming. He co-wrote \"Epistrophy\" with Monk, was a founding member of the Modern Jazz Quartet, and from 1956 lived in France, co-leading the Clarke-Boland Big Band.",
      records: ["Walkin' with Miles Davis (1954)", "Django with the Modern Jazz Quartet (1954)", "Bohemia After Dark (1955)"],
      influences: []
    },
    {
      id: "max-roach", name: "Max Roach", type: "person",
      born: 1924, died: 2007, origin: "Newland, North Carolina, USA (raised Brooklyn)",
      instruments: ["drums"], branch: "bebop", styles: ["hard-bop"],
      emerged: 1945, tier: 1, wiki: "Max_Roach",
      bio: "Roach drummed on Charlie Parker's 1945 'Ko-Ko' session and became bebop's most melodic drummer, treating the kit as a compositional voice. He co-led the Clifford Brown–Max Roach Quintet (1954–56), a cornerstone of hard bop, and his We Insist! Freedom Now Suite (1960), with Abbey Lincoln, made him a leading voice of jazz's civil-rights engagement. He later taught and explored solo percussion.",
      records: ["Ko-Ko with Charlie Parker (1945)", "Clifford Brown and Max Roach (1954)", "We Insist! Max Roach's Freedom Now Suite (1960)"],
      influences: ["kenny-clarke", "jo-jones", "charlie-parker"]
    },
    {
      id: "oscar-pettiford", name: "Oscar Pettiford", type: "person",
      born: 1922, died: 1960, origin: "Okmulgee, Oklahoma, USA",
      instruments: ["double bass", "cello"], branch: "bebop",
      emerged: 1943, tier: 2, wiki: "Oscar_Pettiford",
      bio: "Carrying Jimmy Blanton's melodic approach into bebop, Pettiford co-led with Dizzy Gillespie the group at the Onyx Club on 52nd Street (1943–44) often called the first working bebop band. He played in Duke Ellington's and Woody Herman's orchestras, pioneered jazz cello, and wrote standards including \"Bohemia After Dark\" and \"Tricotism\". He spent his last years in Europe and died in Copenhagen.",
      records: ["The Man I Love with Coleman Hawkins (1943)", "Tricotism with Lucky Thompson (1956)", "The Oscar Pettiford Orchestra in Hi-Fi (1956)"],
      influences: ["jimmy-blanton", "duke-ellington"]
    },
    {
      id: "ray-brown", name: "Ray Brown", type: "person",
      born: 1926, died: 2002, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["double bass"], branch: "bebop",
      emerged: 1946, tier: 2, wiki: "Ray_Brown_(musician)",
      bio: "Brown joined Dizzy Gillespie within days of reaching New York in 1945 and anchored his big band; 'One Bass Hit' and 'Two Bass Hit' showcased him. With Milt Jackson and John Lewis he formed the rhythm unit that grew into the Modern Jazz Quartet. For fifteen years (1951–66) he was the bedrock of the Oscar Peterson Trio, and his huge tone and impeccable time made him one of the most recorded bassists in jazz.",
      records: ["One Bass Hit with Dizzy Gillespie (1946)", "At the Stratford Shakespearean Festival with Oscar Peterson (1956)", "Night Train with Oscar Peterson (1963)"],
      influences: ["jimmy-blanton", "dizzy-gillespie"]
    },
    {
      id: "fats-navarro", name: "Fats Navarro", type: "person",
      born: 1923, died: 1950, origin: "Key West, Florida, USA",
      instruments: ["trumpet"], branch: "bebop",
      emerged: 1946, tier: 2, wiki: "Fats_Navarro",
      bio: "After stints with Andy Kirk and Billy Eckstine, where he replaced Dizzy Gillespie, Navarro became one of bebop's most lyrical trumpeters, combining Gillespie's harmonic daring with a full, burnished tone and clean articulation. His 1947–49 sessions with Tadd Dameron and Bud Powell are among the era's finest. He died of tuberculosis, complicated by heroin addiction, at 26; Clifford Brown carried his approach forward.",
      records: ["Nostalgia (1947)", "Lady Bird with Tadd Dameron (1948)", "Bouncing with Bud with Bud Powell (1949)"],
      influences: ["dizzy-gillespie", "andy-kirk", "billy-eckstine"]
    },
    {
      id: "jj-johnson", name: "J. J. Johnson", type: "person",
      born: 1924, died: 2001, origin: "Indianapolis, Indiana, USA",
      instruments: ["trombone"], branch: "bebop", styles: ["hard-bop"],
      emerged: 1946, tier: 2, wiki: "J._J._Johnson",
      bio: "Johnson proved the slide trombone could articulate bebop's fast, intricate lines, setting the model for modern jazz trombone. After apprenticeships with Benny Carter and Count Basie, he recorded with Charlie Parker and Bud Powell, co-led the popular two-trombone Jay and Kai quintet with Kai Winding, and became a respected composer whose \"Lament\" became a standard. He later scored films and television.",
      records: ["Mad Be Bop (1946)", "The Eminent Jay Jay Johnson (1953)", "Lament (1954)"],
      influences: ["benny-carter", "count-basie", "lester-young"]
    },
    {
      id: "dexter-gordon", name: "Dexter Gordon", nickname: "Long Tall Dexter", type: "person",
      born: 1923, died: 1990, origin: "Los Angeles, California, USA",
      instruments: ["tenor saxophone"], branch: "bebop", styles: ["hard-bop"],
      emerged: 1945, tier: 2, wiki: "Dexter_Gordon",
      bio: "Gordon was the first tenor saxophonist to fully absorb bebop, merging Lester Young's flow with Charlie Parker's language and his own large, laid-back sound. His 1947 tenor duel 'The Chase' with Wardell Gray became Dial's best seller. After 1950s drug troubles he returned with classic Blue Note albums, lived in Copenhagen from 1962, and earned an Oscar nomination for the film 'Round Midnight (1986).",
      records: ["The Chase (1947)", "Go (1962)", "Our Man in Paris (1963)"],
      influences: ["lester-young", "lionel-hampton", "billy-eckstine", "charlie-parker"]
    },
    {
      id: "wardell-gray", name: "Wardell Gray", type: "person",
      born: 1921, died: 1955, origin: "Oklahoma City, Oklahoma, USA (raised Detroit)",
      instruments: ["tenor saxophone"], branch: "bebop", styles: ["west-coast"],
      emerged: 1947, tier: 3, wiki: "Wardell_Gray",
      bio: "A fluent, Lester Young-rooted tenor who mastered bebop, Gray played with Earl Hines before becoming a mainstay of the Los Angeles Central Avenue scene. His tenor duels with Dexter Gordon, above all 'The Chase' (1947), made both men nationally known, and he later worked with Benny Goodman and Count Basie. His tune \"Twisted\" became a vocalese classic. He died in unclear circumstances near Las Vegas at 34.",
      records: ["The Chase with Dexter Gordon (1947)", "Twisted (1949)", "Easy Living (1949)"],
      influences: ["lester-young", "earl-hines"]
    },
    {
      id: "tadd-dameron", name: "Tadd Dameron", type: "person",
      born: 1917, died: 1965, origin: "Cleveland, Ohio, USA",
      instruments: ["piano", "arranging"], branch: "bebop",
      emerged: 1945, tier: 2, wiki: "Tadd_Dameron",
      bio: "Dameron was bebop's leading composer-arranger, bringing lyrical melody and lush voicings to the new idiom. He wrote \"Hot House\", \"Good Bait\" and \"Lady Bird\" and arranged for Dizzy Gillespie, Billy Eckstine and Sarah Vaughan. His 1948 band at the Royal Roost featured Fats Navarro, and his later Fontainebleau (1956) and Mating Call (1957), with John Coltrane, show his gift for writing. Drug problems and prison interrupted his career.",
      records: ["Lady Bird (1948)", "Fontainebleau (1956)", "Mating Call (1957)"],
      influences: ["dizzy-gillespie"]
    },
    {
      id: "sonny-stitt", name: "Sonny Stitt", type: "person",
      born: 1924, died: 1982, origin: "Boston, Massachusetts, USA (raised Saginaw, Michigan)",
      instruments: ["alto saxophone", "tenor saxophone"], branch: "bebop", styles: ["hard-bop"],
      emerged: 1946, tier: 2, wiki: "Sonny_Stitt",
      bio: "Stitt developed a Parker-like alto style largely in parallel with Bird, then switched often to tenor partly to escape the comparison. A ferocious competitor on the bandstand, he played in Billy Eckstine's and Dizzy Gillespie's bands, co-led a tenor partnership with Gene Ammons, and recorded well over 100 albums, among the best-documented saxophonists of his era.",
      records: ["Sonny Stitt/Bud Powell/J. J. Johnson (1949)", "Sonny Side Up with Dizzy Gillespie & Sonny Rollins (1957)", "Stitt Plays Bird (1963)"],
      influences: ["charlie-parker", "lester-young"]
    },
    {
      id: "milt-jackson", name: "Milt Jackson", nickname: "Bags", type: "person",
      born: 1923, died: 1999, origin: "Detroit, Michigan, USA",
      instruments: ["vibraphone"], branch: "bebop", styles: ["cool", "hard-bop"],
      emerged: 1946, tier: 2, wiki: "Milt_Jackson",
      bio: "Brought to New York by Dizzy Gillespie in 1945, Jackson became the first great bebop vibraphonist, slowing the instrument's vibrato to produce a warm, vocal, blues-drenched sound. He was the improvising star of the Modern Jazz Quartet for over two decades and recorded widely as a leader with Miles Davis, Ray Charles, John Coltrane and others. His \"Bags' Groove\" is a blues standard.",
      records: ["Bags' Groove (1952)", "Django with the Modern Jazz Quartet (1956)", "Bags & Trane with John Coltrane (1961)"],
      influences: ["dizzy-gillespie", "lionel-hampton"]
    },
    {
      id: "howard-mcghee", name: "Howard McGhee", nickname: "Maggie", type: "person",
      born: 1918, died: 1987, origin: "Tulsa, Oklahoma, USA (raised Detroit)",
      instruments: ["trumpet"], branch: "bebop",
      emerged: 1945, tier: 3, wiki: "Howard_McGhee",
      bio: "One of the first bebop trumpeters, McGhee played with Andy Kirk and Charlie Barnet before touring California with Coleman Hawkins in 1945. Settling in Los Angeles, he helped plant bebop on the West Coast and led the band on Charlie Parker's 1947 Dial sessions. He influenced Fats Navarro, whom he met in Kirk's band. Narcotics problems sidelined him in the 1950s.",
      records: ["McGhee Special (1945)", "Relaxin' at Camarillo with Charlie Parker (1947)", "The Return of Howard McGhee (1955)"],
      influences: ["roy-eldridge", "andy-kirk", "coleman-hawkins"]
    },
    {
      id: "billy-eckstine", name: "Billy Eckstine", nickname: "Mr. B", type: "person",
      born: 1914, died: 1993, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["vocals", "valve trombone", "trumpet"], branch: "bebop", styles: ["vocal-postwar"],
      emerged: 1944, tier: 2, wiki: "Billy_Eckstine",
      bio: "A star vocalist with Earl Hines's band, Eckstine formed his own orchestra in 1944, the first bebop big band, with Charlie Parker, Dizzy Gillespie, Dexter Gordon, Art Blakey and Sarah Vaughan passing through. His rich baritone then made him one of the most popular solo singers of the late 1940s and early 1950s and one of the first Black male romantic idols in mainstream American pop.",
      records: ["Jelly, Jelly with Earl Hines (1940)", "Blowing the Blues Away (1944)", "My Foolish Heart (1950)"],
      influences: ["earl-hines"]
    },
    {
      id: "erroll-garner", name: "Erroll Garner", type: "person",
      born: 1921, died: 1977, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["piano"], branch: "bebop", styles: ["swing"],
      emerged: 1945, tier: 2, wiki: "Erroll_Garner",
      bio: "A self-taught pianist who never learned to read music, Garner developed an orchestral style of his own: a strumming, guitar-like left hand lagging slightly behind a richly voiced right, framed by teasing introductions. He recorded with Charlie Parker in 1947, wrote the standard \"Misty\", and his live Concert by the Sea (1955) became one of the best-selling jazz albums of its time.",
      records: ["Laura (1945)", "Misty (1954)", "Concert by the Sea (1955)"],
      influences: []
    },
    {
      id: "oscar-peterson", name: "Oscar Peterson", type: "person",
      born: 1925, died: 2007, origin: "Montreal, Quebec, Canada",
      instruments: ["piano"], branch: "bebop", styles: ["swing"],
      emerged: 1949, tier: 2, wiki: "Oscar_Peterson",
      bio: "Introduced to U.S. audiences by Norman Granz at Jazz at the Philharmonic's 1949 Carnegie Hall concert, Peterson combined Art Tatum's virtuosity with bop and swing. His trios, especially with Ray Brown and guitarist Herb Ellis or drummer Ed Thigpen, set a benchmark for swinging precision. He recorded over 200 albums, won eight Grammys and wrote the Canadiana Suite (1964).",
      records: ["At the Stratford Shakespearean Festival (1956)", "Night Train (1963)", "Canadiana Suite (1964)"],
      influences: ["art-tatum", "nat-king-cole", "teddy-wilson"]
    },

    // ─────────────────────── AFRO-CUBAN ───────────────────────
    {
      id: "mario-bauza", name: "Mario Bauzá", type: "person",
      born: 1911, died: 1993, origin: "Havana, Cuba",
      instruments: ["trumpet", "saxophone", "clarinet", "arranging"], branch: "afro-cuban",
      emerged: 1940, tier: 2, wiki: "Mario_Bauzá",
      bio: "A conservatory-trained Havana musician, Bauzá came to New York in 1930 and became music director of Chick Webb's band and a trumpeter with Cab Calloway, where he befriended Dizzy Gillespie. In 1940 he became music director of his brother-in-law Machito's Afro-Cubans, and his 'Tanga' (c. 1943) is regarded as the first Afro-Cuban jazz piece. He introduced Chano Pozo to Gillespie in 1947.",
      records: ["Tanga with Machito (c. 1943)", "Afro-Cuban Jazz Suite with Chico O'Farrill (1950)", "Tanga (1992)"],
      influences: ["chick-webb", "cab-calloway"]
    },
    {
      id: "machito", name: "Machito", type: "person",
      born: 1909, died: 1984, origin: "Havana, Cuba",
      instruments: ["vocals", "maracas"], branch: "afro-cuban",
      emerged: 1940, tier: 2, wiki: "Machito",
      bio: "Frank Grillo, known as Machito, founded Machito and his Afro-Cubans in New York in 1940 with Mario Bauzá as music director. The band fused Cuban son and rumba rhythms with big-band jazz arranging, defining Cubop; Charlie Parker, Flip Phillips and Stan Kenton all recorded with or for it. A mainstay of the Palladium Ballroom's mambo era, the band was a direct ancestor of Latin jazz and salsa.",
      records: ["Tanga (c. 1943)", "Afro-Cuban Jazz Suite with Chico O'Farrill & Charlie Parker (1950)", "Kenya (1957)"],
      influences: ["mario-bauza"]
    },
    {
      id: "chano-pozo", name: "Chano Pozo", type: "person",
      born: 1915, died: 1948, origin: "Havana, Cuba",
      instruments: ["congas", "vocals", "dance"], branch: "afro-cuban",
      emerged: 1947, tier: 2, wiki: "Chano_Pozo",
      bio: "A rumbero and composer from Havana's Afro-Cuban religious and carnival traditions, Pozo came to New York in 1946. Mario Bauzá introduced him to Dizzy Gillespie, and in 1947 he joined Gillespie's big band, performing at Carnegie Hall and co-writing \"Manteca\" and \"Tin Tin Deo\". His conga drumming brought Afro-Cuban percussion into bebop. He was shot dead in a Harlem bar in December 1948, aged 33.",
      records: ["Cubana Be/Cubano Bop with Dizzy Gillespie (1947)", "Manteca with Dizzy Gillespie (1947)", "Guarachi Guaro with Dizzy Gillespie (1947)"],
      influences: ["mario-bauza"]
    },
    {
      id: "chico-ofarrill", name: "Chico O'Farrill", type: "person",
      born: 1921, died: 2001, origin: "Havana, Cuba",
      instruments: ["arranging", "composition", "trumpet"], branch: "afro-cuban",
      emerged: 1950, tier: 2, wiki: "Chico_O'Farrill",
      bio: "Arturo 'Chico' O'Farrill moved from Havana to New York in 1948 and wrote for Benny Goodman, Stan Kenton and Machito. His Afro-Cuban Jazz Suite (1950), recorded by Machito's orchestra with Charlie Parker, was a landmark extended work of Cubop, followed by the Manteca Suite for Dizzy Gillespie (1954). Late in life he led the Afro-Cuban Jazz Orchestra, which his son Arturo continues.",
      records: ["Afro-Cuban Jazz Suite (1950)", "Manteca Suite with Dizzy Gillespie (1954)", "Pure Emotion (1995)"],
      influences: ["machito", "dizzy-gillespie"]
    },
    {
      id: "tito-puente", name: "Tito Puente", nickname: "El Rey del Timbal", type: "person",
      born: 1923, died: 2000, origin: "New York City (Spanish Harlem), USA",
      instruments: ["timbales", "vibraphone", "percussion"], branch: "afro-cuban", styles: ["latin-jazz"],
      emerged: 1949, tier: 2, wiki: "Tito_Puente",
      bio: "The son of Puerto Rican parents, Puente played drums with Machito before forming his own orchestra in 1948. A star of the Palladium Ballroom's mambo era, he brought timbales to the front of the stage and blended mambo and cha-cha-chá with jazz harmony. Dance Mania (1958) became a classic, and his \"Oye Como Va\" reached rock audiences through Santana. He recorded well over 100 albums.",
      records: ["Puente Goes Jazz (1956)", "Dance Mania (1958)", "Oye Como Va (1963)"],
      influences: ["machito"]
    },
    {
      id: "mongo-santamaria", name: "Mongo Santamaría", type: "person",
      born: 1917, died: 2003, origin: "Havana, Cuba",
      instruments: ["congas", "percussion"], branch: "afro-cuban", styles: ["soul-jazz", "latin-jazz"],
      emerged: 1959, tier: 2, wiki: "Mongo_Santamaría",
      bio: "Santamaría came to New York in 1950, played conga with Pérez Prado and Tito Puente, then joined Cal Tjader's band in San Francisco. His composition \"Afro Blue\" (1959) became a jazz standard through John Coltrane, and his 1963 cover of Herbie Hancock's \"Watermelon Man\" was a Top 10 pop hit. His bands fused Cuban rhythms with soul jazz and R&B and trained many young players.",
      records: ["Afro Blue (1959)", "Watermelon Man (1963)", "Mongo at the Village Gate (1963)"],
      influences: ["tito-puente", "cal-tjader"]
    },
    {
      id: "cal-tjader", name: "Cal Tjader", type: "person",
      born: 1925, died: 1982, origin: "St. Louis, Missouri, USA (raised San Mateo, California)",
      instruments: ["vibraphone", "drums", "percussion"], branch: "afro-cuban", styles: ["west-coast", "latin-jazz"],
      emerged: 1954, tier: 2, wiki: "Cal_Tjader",
      bio: "Tjader drummed in Dave Brubeck's early octet and trio, then played vibes with George Shearing, whose percussionists drew him to Afro-Cuban music. From the mid-1950s his San Francisco bands, featuring Mongo Santamaría and Willie Bobo, made him the most successful non-Latino Latin jazz leader, mixing mambo with cool jazz. Soul Sauce (1964) was a hit, and La Onda Va Bien won a 1980 Grammy.",
      records: ["Mambo with Tjader (1954)", "Soul Sauce (1964)", "La Onda Va Bien (1979)"],
      influences: ["dave-brubeck", "george-shearing"]
    },
    {
      id: "candido-camero", name: "Cándido", type: "person",
      born: 1921, died: 2020, origin: "San Antonio de los Baños, Cuba",
      instruments: ["congas", "bongos"], branch: "afro-cuban",
      emerged: 1953, tier: 3, wiki: "Cándido_Camero",
      bio: "Cándido Camero first performed in New York in 1946 and settled there in the early 1950s, recording with Dizzy Gillespie, Billy Taylor, Stan Kenton, Art Blakey and Sonny Rollins. He pioneered playing several tuned congas at once, letting a single percussionist play melodic patterns, and helped make the conga a standard jazz instrument. He received an NEA Jazz Master award in 2008 and performed into his nineties.",
      records: ["Afro with Dizzy Gillespie (1954)", "Candido (1956)", "Thousand Finger Man (1969)"],
      influences: ["chano-pozo"]
    },

    // ───────────────────── COOL & THIRD STREAM ─────────────────────
    {
      id: "miles-davis", name: "Miles Davis", type: "person",
      born: 1926, died: 1991, origin: "Alton, Illinois, USA (raised East St. Louis)",
      instruments: ["trumpet", "flugelhorn", "composition"], branch: "cool", styles: ["bebop", "hard-bop", "modal", "fusion"],
      emerged: 1949, tier: 1, wiki: "Miles_Davis",
      bio: "Davis apprenticed in Charlie Parker's quintet (1945–48), then led the 1949–50 nonet sessions later issued as Birth of the Cool. Over four decades he repeatedly redirected jazz: hard bop with his 1950s quintet, orchestral works with Gil Evans, modal improvisation on Kind of Blue (1959), the 1960s second quintet, and electric fusion with Bitches Brew (1970). No other musician shaped as many of jazz's eras.",
      records: ["Birth of the Cool (1949–50)", "Kind of Blue (1959)", "Bitches Brew (1970)"],
      influences: ["charlie-parker", "dizzy-gillespie", "gil-evans", "ahmad-jamal"]
    },
    {
      id: "gil-evans", name: "Gil Evans", type: "person",
      born: 1912, died: 1988, origin: "Toronto, Ontario, Canada",
      instruments: ["arranging", "piano", "composition"], branch: "cool", styles: ["fusion"],
      emerged: 1949, tier: 1, wiki: "Gil_Evans",
      bio: "Evans developed his floating, impressionistic textures, with French horns, tuba and sustained chords, as arranger for Claude Thornhill. His 55th Street apartment was the meeting place for the Birth of the Cool nonet. His orchestral albums with Miles Davis (Miles Ahead, Porgy and Bess, Sketches of Spain) redefined jazz orchestration, and his later big bands embraced rock and Jimi Hendrix's music.",
      records: ["Miles Ahead with Miles Davis (1957)", "Sketches of Spain with Miles Davis (1960)", "Out of the Cool (1961)"],
      influences: ["claude-thornhill", "duke-ellington"]
    },
    {
      id: "claude-thornhill", name: "Claude Thornhill", type: "person",
      born: 1908, died: 1965, origin: "Terre Haute, Indiana, USA",
      instruments: ["piano", "arranging"], branch: "cool", styles: ["swing"],
      emerged: 1940, tier: 3, wiki: "Claude_Thornhill",
      bio: "Thornhill's dance orchestra, formed in 1940, cultivated a hushed, vibrato-less sound with French horns, tuba and clarinets voiced in sustained chords. His theme \"Snowfall\" was a hit, and after the war Gil Evans's arrangements of bebop tunes such as \"Anthropology\" and \"Donna Lee\" gave the band modern harmony. Its textures and players, including Lee Konitz, were the direct model for the Birth of the Cool nonet.",
      records: ["Snowfall (1941)", "Anthropology (1947)", "Donna Lee (1947)"],
      influences: []
    },
    {
      id: "gerry-mulligan", name: "Gerry Mulligan", nickname: "Jeru", type: "person",
      born: 1927, died: 1996, origin: "New York City (Queens), USA",
      instruments: ["baritone saxophone", "arranging", "piano"], branch: "cool", styles: ["west-coast"],
      emerged: 1949, tier: 2, wiki: "Gerry_Mulligan",
      bio: "Mulligan wrote and played baritone on the Birth of the Cool sessions after arranging for Gene Krupa and Claude Thornhill. In Los Angeles in 1952 his pianoless quartet with Chet Baker, built on contrapuntal horn lines over bass and drums, became the emblem of West Coast jazz. The leading baritone saxophonist of his era, he later led the Concert Jazz Band (1960–64).",
      records: ["Jeru (1949)", "Bernie's Tune (1952)", "Night Lights (1963)"],
      influences: ["claude-thornhill", "gil-evans", "lester-young"]
    },
    {
      id: "lennie-tristano", name: "Lennie Tristano", type: "person",
      born: 1919, died: 1978, origin: "Chicago, Illinois, USA",
      instruments: ["piano"], branch: "cool", styles: ["free"],
      emerged: 1949, tier: 2, wiki: "Lennie_Tristano",
      bio: "Blind from childhood, Tristano moved to New York in 1946 and became an influential teacher whose students, notably Lee Konitz and Warne Marsh, favored long, even-toned melodic lines, counterpoint and harmonic tension over bebop clichés. His 1949 recordings 'Intuition' and 'Digression' are among the first freely improvised jazz performances, and his 1950s overdubbing experiments were radical for their time.",
      records: ["Wow (1949)", "Intuition (1949)", "Lennie Tristano (1955)"],
      influences: ["art-tatum", "charlie-parker"]
    },
    {
      id: "lee-konitz", name: "Lee Konitz", type: "person",
      born: 1927, died: 2020, origin: "Chicago, Illinois, USA",
      instruments: ["alto saxophone"], branch: "cool",
      emerged: 1949, tier: 2, wiki: "Lee_Konitz",
      bio: "A Tristano disciple who played with Claude Thornhill and on the Birth of the Cool sessions, Konitz was among the few altoists of the late 1940s to forge a style independent of Charlie Parker: a light, dry tone and long, unpredictable lines. Restlessly exploratory for seven decades, he recorded in settings from duos to free improvisation. He died of COVID-19 complications in New York in April 2020, aged 92.",
      records: ["Subconscious-Lee (1949)", "Lee Konitz with Warne Marsh (1955)", "Motion (1961)"],
      influences: ["lennie-tristano", "lester-young", "claude-thornhill"]
    },
    {
      id: "warne-marsh", name: "Warne Marsh", type: "person",
      born: 1927, died: 1987, origin: "Los Angeles, California, USA",
      instruments: ["tenor saxophone"], branch: "cool",
      emerged: 1949, tier: 3, wiki: "Warne_Marsh",
      bio: "Lennie Tristano's most uncompromising protégé, Marsh developed a cool, airy tenor tone and long, rhythmically elusive lines that avoided bebop formulas. His contrapuntal partnership with Lee Konitz in the late 1940s and 1950s was a high point of the Tristano school. Largely underappreciated in his lifetime, he gained attention in the 1970s with Supersax and died on stage at Donte's in Los Angeles in 1987.",
      records: ["Wow with Lennie Tristano (1949)", "Lee Konitz with Warne Marsh (1955)", "Ne Plus Ultra (1970)"],
      influences: ["lennie-tristano", "lester-young"]
    },
    {
      id: "john-lewis", name: "John Lewis", type: "person",
      born: 1920, died: 2001, origin: "La Grange, Illinois, USA (raised Albuquerque, New Mexico)",
      instruments: ["piano", "composition"], branch: "cool", styles: ["bebop"],
      emerged: 1952, tier: 2, wiki: "John_Lewis_(pianist)",
      bio: "Pianist with Dizzy Gillespie's big band and on Birth of the Cool, Lewis founded and directed the Modern Jazz Quartet, shaping its blend of blues, bebop and Baroque counterpoint. A leading figure of the Third Stream, he wrote \"Django\" and \"Afternoon in Paris\", directed the Lenox School of Jazz (1957–60), and co-founded the Orchestra U.S.A. His spare, bluesy piano was a deliberate counterweight to bebop flash.",
      records: ["Django (1954)", "Fontessa (1956)", "The Golden Striker (1960)"],
      influences: ["dizzy-gillespie"]
    },
    {
      id: "modern-jazz-quartet", name: "Modern Jazz Quartet", type: "band",
      active: [1952, 1997], origin: "New York City, USA",
      instruments: ["piano", "vibraphone", "double bass", "drums"], branch: "cool", styles: ["bebop"],
      emerged: 1952, tier: 2, wiki: "Modern_Jazz_Quartet",
      bio: "Formed from Dizzy Gillespie's rhythm section, the MJQ (John Lewis, Milt Jackson, Percy Heath, and Kenny Clarke, replaced by Connie Kay in 1955) performed in tuxedos in concert halls, balancing Lewis's fugues and chamber-music forms with Jackson's blues improvisation. It became a model of Third Stream jazz and one of jazz's longest-running groups, disbanding in 1974 and reuniting from 1981 into the 1990s.",
      records: ["Django (1956)", "Fontessa (1956)", "The Last Concert (1974)"],
      influences: ["dizzy-gillespie"],
      members: ["john-lewis", "milt-jackson", "kenny-clarke"]
    },
    {
      id: "gunther-schuller", name: "Gunther Schuller", type: "person",
      born: 1925, died: 2015, origin: "New York City, USA",
      instruments: ["French horn", "composition", "conducting"], branch: "cool",
      emerged: 1957, tier: 2, wiki: "Gunther_Schuller",
      bio: "A classical horn player who played on Miles Davis's Birth of the Cool sessions, Schuller coined the term 'Third Stream' in 1957 for music fusing jazz and classical composition, and wrote works for the Modern Jazz Quartet and Ornette Coleman. He was also a key historian (Early Jazz, 1968; The Swing Era, 1989), president of the New England Conservatory, and won the 1994 Pulitzer Prize for Music.",
      records: ["Transformation (1957)", "Third Stream Music with the Modern Jazz Quartet (1960)", "Jazz Abstractions (1961)"],
      influences: ["duke-ellington"]
    },
    {
      id: "george-russell", name: "George Russell", type: "person",
      born: 1923, died: 2009, origin: "Cincinnati, Ohio, USA",
      instruments: ["composition", "piano", "arranging"], branch: "cool", styles: ["afro-cuban", "modal"],
      emerged: 1947, tier: 2, wiki: "George_Russell_(composer)",
      bio: "Russell co-wrote \"Cubana Be/Cubano Bop\" (1947) for Dizzy Gillespie and Chano Pozo, a founding work of Afro-Cuban jazz. His Lydian Chromatic Concept of Tonal Organization (1953), the first theory to emerge from jazz itself, influenced Miles Davis and Bill Evans and helped prepare modal jazz. His Jazz Workshop and Sextet recordings were landmarks of the Third Stream and avant-garde.",
      records: ["Cubana Be/Cubano Bop with Dizzy Gillespie (1947)", "Jazz Workshop (1956)", "Ezz-thetics (1961)"],
      influences: ["dizzy-gillespie"]
    },
    {
      id: "stan-getz", name: "Stan Getz", nickname: "The Sound", type: "person",
      born: 1927, died: 1991, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["tenor saxophone"], branch: "cool", styles: ["brazil"],
      emerged: 1948, tier: 2, wiki: "Stan_Getz",
      bio: "Getz's light, lyrical tenor, modeled on Lester Young, first won fame with his solo on Woody Herman's \"Early Autumn\" (1948) in the Four Brothers sax section. He became cool jazz's most popular saxophonist, recorded Eddie Sauter's orchestral Focus (1961), and with Charlie Byrd's Jazz Samba (1962) and Getz/Gilberto (1964) brought bossa nova to a mass audience; \"The Girl from Ipanema\" became a global hit.",
      records: ["Early Autumn with Woody Herman (1948)", "Focus (1961)", "Getz/Gilberto (1964)"],
      influences: ["lester-young", "woody-herman"]
    },
    {
      id: "george-shearing", name: "George Shearing", type: "person",
      born: 1919, died: 2011, origin: "London, England",
      instruments: ["piano"], branch: "cool",
      emerged: 1949, tier: 3, wiki: "George_Shearing",
      bio: "Blind from birth, Shearing moved from London to the U.S. in 1947. His quintet's 1949 hit \"September in the Rain\" introduced the 'Shearing sound': locked-hands block chords doubled by vibraphone and guitar, a polished cool texture that made him a major popular draw. He wrote \"Lullaby of Birdland\", featured Latin percussion that inspired Cal Tjader, and was knighted in 2007.",
      records: ["September in the Rain (1949)", "Lullaby of Birdland (1952)", "The Shearing Spell (1955)"],
      influences: ["art-tatum", "teddy-wilson"]
    },
    {
      id: "ahmad-jamal", name: "Ahmad Jamal", type: "person",
      born: 1930, died: 2023, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["piano"], branch: "cool", styles: ["modal"],
      emerged: 1958, tier: 2, wiki: "Ahmad_Jamal",
      bio: "Jamal's Chicago trio of the 1950s used space, dynamics, vamps and sudden shifts of texture as compositional tools, an approach Miles Davis repeatedly credited as an influence on his own groups. The live At the Pershing: But Not for Me (1958), including \"Poinciana\", stayed on the Billboard album chart for more than two years. He remained an active, evolving bandleader until shortly before his death in April 2023.",
      records: ["Ahmad's Blues (1958)", "At the Pershing: But Not for Me (1958)", "The Awakening (1970)"],
      influences: ["erroll-garner", "art-tatum"]
    },

    // ───────────────────────── WEST COAST ─────────────────────────
    {
      id: "stan-kenton", name: "Stan Kenton", type: "person",
      born: 1911, died: 1979, origin: "Wichita, Kansas, USA (raised Los Angeles)",
      instruments: ["piano", "bandleader", "arranging"], branch: "west-coast", styles: ["swing", "afro-cuban"],
      emerged: 1941, tier: 2, wiki: "Stan_Kenton",
      bio: "Kenton founded his orchestra in Southern California in 1941 and pursued a loud, brass-heavy 'progressive jazz', recording Afro-Cuban works such as \"The Peanut Vendor\" and Bob Graettinger's dissonant City of Glass. His bands trained many of the players who created West Coast jazz, including Art Pepper, Shorty Rogers, Shelly Manne and Bud Shank, and he later became a pioneer of jazz education.",
      records: ["Artistry in Rhythm (1943)", "The Peanut Vendor (1947)", "New Concepts of Artistry in Rhythm (1952)"],
      influences: ["machito"]
    },
    {
      id: "shorty-rogers", name: "Shorty Rogers", type: "person",
      born: 1924, died: 1994, origin: "Great Barrington, Massachusetts, USA",
      instruments: ["trumpet", "flugelhorn", "arranging"], branch: "west-coast",
      emerged: 1951, tier: 2, wiki: "Shorty_Rogers",
      bio: "A trumpeter and arranger for Woody Herman's Second Herd and Stan Kenton, Rogers settled in Los Angeles and became one of the principal architects of West Coast jazz. His 1951 Modern Sounds session, a Birth of the Cool-style tentet, and his Giants groups with Art Pepper, Jimmy Giuffre and Shelly Manne set the style's crisp, arranged sound. He later wrote widely for film and television.",
      records: ["Modern Sounds (1951)", "Cool and Crazy (1953)", "Shorty Rogers and His Giants (1953)"],
      influences: ["woody-herman", "stan-kenton", "miles-davis"]
    },
    {
      id: "shelly-manne", name: "Shelly Manne", type: "person",
      born: 1920, died: 1984, origin: "New York City, USA",
      instruments: ["drums"], branch: "west-coast",
      emerged: 1952, tier: 2, wiki: "Shelly_Manne",
      bio: "A veteran of 52nd Street and Stan Kenton's orchestra, Manne moved to Los Angeles in the early 1950s and became West Coast jazz's most versatile drummer, as subtle with brushes as he was propulsive. His jazz treatment of My Fair Lady (1956) with André Previn was a best-seller, and his club Shelly's Manne-Hole (1960–74) was a hub of L.A. jazz. He also played on hundreds of film soundtracks.",
      records: ["The West Coast Sound (1953)", "My Fair Lady (1956)", "At the Black Hawk (1959)"],
      influences: ["stan-kenton"]
    },
    {
      id: "art-pepper", name: "Art Pepper", type: "person",
      born: 1925, died: 1982, origin: "Gardena, California, USA",
      instruments: ["alto saxophone", "clarinet", "tenor saxophone"], branch: "west-coast",
      emerged: 1951, tier: 2, wiki: "Art_Pepper",
      bio: "Pepper came up on Central Avenue and in the bands of Benny Carter and Stan Kenton before becoming the most emotionally intense altoist of West Coast jazz. Heroin addiction led to repeated prison terms, including San Quentin, yet his 1950s records remain classics. After rehabilitation at Synanon he made a remarkable late comeback, and his candid autobiography Straight Life (1979) is a classic of jazz literature.",
      records: ["Surf Ride (1952)", "Art Pepper Meets the Rhythm Section (1957)", "Smack Up (1960)"],
      influences: ["benny-carter", "stan-kenton", "lester-young"]
    },
    {
      id: "chet-baker", name: "Chet Baker", type: "person",
      born: 1929, died: 1988, origin: "Yale, Oklahoma, USA (raised Southern California)",
      instruments: ["trumpet", "vocals"], branch: "west-coast", styles: ["cool", "vocal-postwar"],
      emerged: 1952, tier: 2, wiki: "Chet_Baker",
      bio: "After playing with Charlie Parker on the West Coast in 1952, Baker became famous in Gerry Mulligan's pianoless quartet, where his fragile, intimate trumpet on \"My Funny Valentine\" defined cool lyricism. His soft, vibrato-light singing on Chet Baker Sings (1954) made him a matinee-idol figure. Decades of heroin addiction marked his life; he died after a fall from an Amsterdam hotel window in 1988.",
      records: ["My Funny Valentine with Gerry Mulligan (1952)", "Chet Baker Sings (1954)", "Chet (1959)"],
      influences: ["gerry-mulligan", "charlie-parker", "miles-davis"]
    },
    {
      id: "chico-hamilton", name: "Chico Hamilton", type: "person",
      born: 1921, died: 2013, origin: "Los Angeles, California, USA",
      instruments: ["drums"], branch: "west-coast",
      emerged: 1952, tier: 3, wiki: "Chico_Hamilton",
      bio: "A Central Avenue product who played with Lionel Hampton and Count Basie, Hamilton was the original drummer in Gerry Mulligan's 1952 quartet. His own quintet (from 1955), with Buddy Collette's reeds, Jim Hall's guitar and Fred Katz's cello, produced a distinctive chamber-jazz sound and appeared in the film Jazz on a Summer's Day. He launched many careers, including Eric Dolphy's and Charles Lloyd's.",
      records: ["Bernie's Tune with Gerry Mulligan (1952)", "Blue Sands (1955)", "Gongs East! (1958)"],
      influences: ["jo-jones", "lionel-hampton", "gerry-mulligan"]
    },
    {
      id: "jimmy-giuffre", name: "Jimmy Giuffre", type: "person",
      born: 1921, died: 2008, origin: "Dallas, Texas, USA",
      instruments: ["clarinet", "tenor saxophone", "baritone saxophone", "composition"], branch: "west-coast", styles: ["free"],
      emerged: 1947, tier: 2, wiki: "Jimmy_Giuffre",
      bio: "Giuffre wrote \"Four Brothers\" (1947) for Woody Herman's Second Herd, then became a key West Coast composer with Shorty Rogers and the Lighthouse All-Stars. His drummerless trio with Jim Hall made \"The Train and the River\" (1957) a folk-tinged cool classic, and his 1961–62 trio with Paul Bley and Steve Swallow (Fusion, Free Fall) was a pioneering experiment in quiet free improvisation.",
      records: ["Four Brothers with Woody Herman (1947)", "The Train and the River (1957)", "Free Fall (1962)"],
      influences: ["woody-herman", "lester-young"]
    },
    {
      id: "bud-shank", name: "Bud Shank", type: "person",
      born: 1926, died: 2009, origin: "Dayton, Ohio, USA",
      instruments: ["alto saxophone", "flute"], branch: "west-coast", styles: ["brazil"],
      emerged: 1953, tier: 3, wiki: "Bud_Shank",
      bio: "A Stan Kenton alumnus and Lighthouse All-Star, Shank was one of the first jazz players to feature flute as a principal voice. His 1953 recordings with Brazilian guitarist Laurindo Almeida (Brazilliance) anticipated bossa nova by several years. He spent decades as a Hollywood studio musician, playing the flute solo on the Mamas & the Papas' \"California Dreamin'\", before returning to hard-edged alto playing.",
      records: ["Brazilliance with Laurindo Almeida (1953)", "The Bud Shank Quartet (1956)", "California Dreamin' with the Mamas & the Papas (1965)"],
      influences: ["stan-kenton", "charlie-parker"]
    },
    {
      id: "hampton-hawes", name: "Hampton Hawes", type: "person",
      born: 1928, died: 1977, origin: "Los Angeles, California, USA",
      instruments: ["piano"], branch: "west-coast", styles: ["bebop"],
      emerged: 1955, tier: 3, wiki: "Hampton_Hawes",
      bio: "A Central Avenue prodigy who played with Charlie Parker and Howard McGhee as a teenager, Hawes brought hard-swinging, blues-rich bebop to Los Angeles, a counterweight to the cooler West Coast sound. His mid-1950s Contemporary trio albums were widely praised. Sentenced in 1958 on a heroin charge, he received a presidential pardon from John F. Kennedy in 1963; his memoir Raise Up Off Me (1974) is highly regarded.",
      records: ["The Trio, Vol. 1 (1955)", "All Night Session! (1956)", "Four! (1958)"],
      influences: ["charlie-parker", "bud-powell"]
    },
    {
      id: "dave-brubeck", name: "Dave Brubeck", type: "person",
      born: 1920, died: 2012, origin: "Concord, California, USA",
      instruments: ["piano", "composition"], branch: "west-coast", styles: ["cool"],
      emerged: 1953, tier: 1, wiki: "Dave_Brubeck",
      bio: "A student of composer Darius Milhaud, Brubeck brought classical counterpoint, polytonality and unusual meters into jazz. His quartet's college-campus concerts built a huge new audience, he appeared on the cover of Time in 1954, and Time Out (1959), with \"Take Five\" and \"Blue Rondo à la Turk\", became the first jazz album to sell a million copies. He kept composing and touring, including sacred works, into his nineties.",
      records: ["Jazz at Oberlin (1953)", "Time Out (1959)", "Time Further Out (1961)"],
      influences: []
    },
    {
      id: "paul-desmond", name: "Paul Desmond", type: "person",
      born: 1924, died: 1977, origin: "San Francisco, California, USA",
      instruments: ["alto saxophone"], branch: "west-coast", styles: ["cool"],
      emerged: 1951, tier: 2, wiki: "Paul_Desmond",
      bio: "Desmond's pure, dry alto tone, he said he wanted to sound 'like a dry martini', and his witty, melodic improvisations were the lyrical counterweight to Dave Brubeck's dense piano in the Dave Brubeck Quartet (1951–67). He composed \"Take Five\", the best-selling jazz single of its era, and later recorded elegant albums with guitarist Jim Hall.",
      records: ["Jazz at Oberlin with Dave Brubeck (1953)", "Take Five (1959)", "Desmond Blue (1961)"],
      influences: ["dave-brubeck"]
    },
    {
      id: "dave-brubeck-quartet", name: "Dave Brubeck Quartet", type: "band",
      active: [1951, 1967], origin: "San Francisco, California, USA",
      instruments: ["piano", "alto saxophone", "double bass", "drums"], branch: "west-coast", styles: ["cool"],
      emerged: 1953, tier: 2, wiki: "Dave_Brubeck",
      bio: "Founded in 1951 with Paul Desmond, the quartet reached its classic lineup in 1958 with drummer Joe Morello and bassist Eugene Wright. Its campus concerts (Jazz at Oberlin, Jazz Goes to College) helped invent the jazz college circuit, and Time Out (1959) explored 5/4 and 9/8, producing the hit \"Take Five\". A 1958 State Department tour took it to Poland, India and the Middle East.",
      records: ["Jazz at Oberlin (1953)", "Jazz Goes to College (1954)", "Time Out (1959)"],
      influences: [],
      members: ["dave-brubeck", "paul-desmond"]
    },
    {
      id: "vince-guaraldi", name: "Vince Guaraldi", type: "person",
      born: 1928, died: 1976, origin: "San Francisco, California, USA",
      instruments: ["piano", "composition"], branch: "west-coast", styles: ["brazil"],
      emerged: 1962, tier: 3, wiki: "Vince_Guaraldi",
      bio: "A San Francisco pianist who worked with Cal Tjader and Woody Herman, Guaraldi won a 1963 Grammy for \"Cast Your Fate to the Wind\", from his bossa-tinged Jazz Impressions of Black Orpheus. His scores for the Peanuts television specials, beginning with A Charlie Brown Christmas (1965) and its theme \"Linus and Lucy\", made his gentle, lyrical jazz piano familiar to generations of listeners.",
      records: ["Jazz Impressions of Black Orpheus (1962)", "Cast Your Fate to the Wind (1962)", "A Charlie Brown Christmas (1965)"],
      influences: ["cal-tjader", "woody-herman"]
    },

    // ───────────────────── POST-WAR VOCALISTS ─────────────────────
    {
      id: "sarah-vaughan", name: "Sarah Vaughan", nickname: "Sassy", type: "person",
      born: 1924, died: 1990, origin: "Newark, New Jersey, USA",
      instruments: ["vocals", "piano"], branch: "vocal-postwar", styles: ["bebop"],
      emerged: 1945, tier: 1, wiki: "Sarah_Vaughan",
      bio: "After winning an Apollo amateur night, Vaughan sang with Earl Hines and Billy Eckstine's bebop-heavy bands, absorbing the music's harmonies first-hand; she recorded \"Lover Man\" with Gillespie and Parker in 1945. Her wide range, operatic control and daring melodic variations made her the first great bebop singer, and over a 45-year career she moved between jazz and pop with equal authority.",
      records: ["Lover Man (1945)", "Sarah Vaughan with Clifford Brown (1955)", "Broken-Hearted Melody (1959)"],
      influences: ["billy-eckstine", "earl-hines", "dizzy-gillespie", "charlie-parker"]
    },
    {
      id: "dinah-washington", name: "Dinah Washington", type: "person",
      born: 1924, died: 1963, origin: "Tuscaloosa, Alabama, USA (raised Chicago)",
      instruments: ["vocals", "piano"], branch: "vocal-postwar", styles: ["blues"],
      emerged: 1943, tier: 2, wiki: "Dinah_Washington",
      bio: "Raised on Chicago gospel, Washington sang with Lionel Hampton (1943–46) before becoming one of the most popular Black female recording artists of the 1950s. Her sharp, crystal-clear diction and blues phrasing crossed effortlessly between jazz, blues, R&B and pop; she recorded jam sessions with Clifford Brown and a Bessie Smith tribute. \"What a Diff'rence a Day Makes\" won a Grammy. She died at 39.",
      records: ["Evil Gal Blues with Lionel Hampton (1943)", "Dinah Jams (1954)", "What a Diff'rence a Day Makes! (1959)"],
      influences: ["lionel-hampton", "bessie-smith", "billie-holiday"]
    },
    {
      id: "carmen-mcrae", name: "Carmen McRae", type: "person",
      born: 1920, died: 1994, origin: "New York City (Harlem), USA",
      instruments: ["vocals", "piano"], branch: "vocal-postwar",
      emerged: 1954, tier: 2, wiki: "Carmen_McRae",
      bio: "A pianist and singer who absorbed bebop at Minton's Playhouse and sang with Benny Carter and Mercer Ellington, McRae broke through in 1954. Billie Holiday was her idol and friend; McRae made Holiday's behind-the-beat phrasing and ironic understatement her own, adding sharp diction and a bebopper's harmonic ear. Her late Carmen Sings Monk (1990) is a landmark of jazz singing.",
      records: ["By Special Request (1955)", "Carmen McRae Sings Lover Man (1962)", "Carmen Sings Monk (1990)"],
      influences: ["billie-holiday", "benny-carter"]
    },
    {
      id: "betty-carter", name: "Betty Carter", nickname: "Betty Bebop", type: "person",
      born: 1929, died: 1998, origin: "Flint, Michigan, USA (raised Detroit)",
      instruments: ["vocals"], branch: "vocal-postwar", styles: ["bebop"],
      emerged: 1948, tier: 2, wiki: "Betty_Carter",
      bio: "Carter sat in with Charlie Parker in Detroit and joined Lionel Hampton (1948–51), who nicknamed her 'Betty Bebop'. She became the most radical improviser among jazz singers, reshaping melodies, tempos and lyrics like a horn player. She ran her own label (Bet-Car) and for decades used her trios as a training ground for young pianists and drummers. Look What I Got! won a 1989 Grammy.",
      records: ["Ray Charles and Betty Carter (1961)", "The Audience with Betty Carter (1980)", "Look What I Got! (1988)"],
      influences: ["charlie-parker", "lionel-hampton", "sarah-vaughan"]
    },
    {
      id: "joe-williams", name: "Joe Williams", type: "person",
      born: 1918, died: 1999, origin: "Cordele, Georgia, USA (raised Chicago)",
      instruments: ["vocals"], branch: "vocal-postwar", styles: ["kansas-city"],
      emerged: 1955, tier: 2, wiki: "Joe_Williams_(jazz_singer)",
      bio: "Williams joined Count Basie's orchestra in 1954, and his rich baritone on \"Every Day I Have the Blues\" (1955) helped revive the band's popularity. Equally convincing on blues shouts and ballads, he was the great male band singer of the 1950s and continued as a successful soloist after leaving Basie in 1961, often reuniting with his old band.",
      records: ["Every Day I Have the Blues (1955)", "Count Basie Swings, Joe Williams Sings (1956)", "A Swingin' Night at Birdland (1962)"],
      influences: ["count-basie"]
    },
    {
      id: "eddie-jefferson", name: "Eddie Jefferson", type: "person",
      born: 1918, died: 1979, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["vocals"], branch: "vocal-postwar", styles: ["bebop"],
      emerged: 1952, tier: 3, wiki: "Eddie_Jefferson",
      bio: "Jefferson is credited as an originator of vocalese, setting lyrics to recorded jazz solos, starting with Coleman Hawkins's \"Body and Soul\". His lyric to James Moody's \"I'm in the Mood for Love\" solo became the hit \"Moody's Mood for Love\" (1952) for King Pleasure. He sang with Moody's band for years and inspired Lambert, Hendricks & Ross. He was shot dead outside a Detroit club in 1979.",
      records: ["Moody's Mood for Love (1952)", "Letter from Home (1962)", "Body and Soul (1968)"],
      influences: ["coleman-hawkins"]
    },
    {
      id: "lambert-hendricks-ross", name: "Lambert, Hendricks & Ross", type: "band",
      active: [1957, 1964], origin: "New York City, USA",
      instruments: ["vocals"], branch: "vocal-postwar",
      emerged: 1957, tier: 2, wiki: "Lambert,_Hendricks_&_Ross",
      bio: "Dave Lambert, Jon Hendricks and Annie Ross used multitracking on Sing a Song of Basie (1957) to recreate Count Basie arrangements entirely with voices, Hendricks writing lyrics to every part and solo. The trio became the definitive vocalese group, influencing The Manhattan Transfer and generations of jazz singers. Ross left in 1962; Yolande Bavan replaced her until the group ended in 1964.",
      records: ["Sing a Song of Basie (1957)", "The Hottest New Group in Jazz (1959)", "Sing Ellington (1960)"],
      influences: ["count-basie", "eddie-jefferson"],
      members: []
    },
    {
      id: "mel-torme", name: "Mel Tormé", nickname: "The Velvet Fog", type: "person",
      born: 1925, died: 1999, origin: "Chicago, Illinois, USA",
      instruments: ["vocals", "drums", "piano", "arranging"], branch: "vocal-postwar",
      emerged: 1947, tier: 3, wiki: "Mel_Tormé",
      bio: "A child performer who became a skilled drummer, arranger and songwriter, Tormé co-wrote \"The Christmas Song\" (1945) and became a crooning idol in the late 1940s. His 1950s albums with arranger Marty Paich's Dek-Tette established him as one of the most musicianly jazz singers, with flawless intonation and inventive scat. He enjoyed a strong late-career revival in the 1980s.",
      records: ["Careless Hands (1949)", "Mel Tormé with the Marty Paich Dek-Tette (1956)", "Swings Shubert Alley (1960)"],
      influences: []
    },
    {
      id: "johnny-hartman", name: "Johnny Hartman", type: "person",
      born: 1923, died: 1983, origin: "Houma, Louisiana, USA (raised Chicago)",
      instruments: ["vocals"], branch: "vocal-postwar",
      emerged: 1947, tier: 3, wiki: "Johnny_Hartman",
      bio: "Hartman sang with Earl Hines and Dizzy Gillespie's big bands in the late 1940s, but his warm, unhurried baritone found little commercial success until John Coltrane chose him for a ballad album. John Coltrane and Johnny Hartman (1963), recorded largely in single takes, became one of the most revered vocal records in jazz and secured his reputation, though he remained underrecognized in his lifetime.",
      records: ["Songs from the Heart (1956)", "John Coltrane and Johnny Hartman (1963)", "I Just Dropped By to Say Hello (1964)"],
      influences: ["billy-eckstine", "earl-hines", "dizzy-gillespie"]
    },
    {
      id: "abbey-lincoln", name: "Abbey Lincoln", type: "person",
      born: 1930, died: 2010, origin: "Chicago, Illinois, USA (raised Calvin Center, Michigan)",
      instruments: ["vocals", "songwriting"], branch: "vocal-postwar",
      emerged: 1957, tier: 2, wiki: "Abbey_Lincoln",
      bio: "After starting as a supper-club singer, Lincoln turned to jazz under the guidance of Max Roach, her husband from 1962 to 1970. Her searing vocals on We Insist! Freedom Now Suite (1960) and her own Straight Ahead (1961) made her a voice of the civil-rights era. Also an actress, she reemerged in the 1990s on Verve as a celebrated songwriter-singer of introspective, deeply personal material.",
      records: ["We Insist! Freedom Now Suite with Max Roach (1960)", "Straight Ahead (1961)", "The World Is Falling Down (1990)"],
      influences: ["billie-holiday", "max-roach"]
    },
    {
      id: "nina-simone", name: "Nina Simone", type: "person",
      born: 1933, died: 2003, origin: "Tryon, North Carolina, USA",
      instruments: ["vocals", "piano"], branch: "vocal-postwar", styles: ["soul-jazz"],
      emerged: 1959, tier: 2, wiki: "Nina_Simone",
      bio: "Trained as a classical pianist, Simone turned to nightclub work and reached the charts in 1959 with \"I Loves You, Porgy\" from Little Girl Blue. Mixing jazz, blues, gospel, folk and Bach-like counterpoint, she resisted any single label. \"Mississippi Goddam\" (1964) and \"To Be Young, Gifted and Black\" made her a defining artist of the civil-rights movement. She later lived in Europe and died in France.",
      records: ["I Loves You, Porgy (1959)", "Mississippi Goddam (1964)", "Feeling Good (1965)"],
      influences: []
    },
    {
      id: "shirley-horn", name: "Shirley Horn", type: "person",
      born: 1934, died: 2005, origin: "Washington, D.C., USA",
      instruments: ["vocals", "piano"], branch: "vocal-postwar",
      emerged: 1961, tier: 3, wiki: "Shirley_Horn",
      bio: "A singer-pianist who accompanied herself, Horn was championed by Miles Davis after hearing her debut Embers and Ashes (1961). She cut back her career to raise her family in Washington, then reemerged on Verve in the late 1980s. Her extremely slow tempos, hushed intimacy and subtle piano made her a master of the ballad; Here's to Life (1992) was a success and I Remember Miles (1998) won a Grammy.",
      records: ["Embers and Ashes (1961)", "Here's to Life (1992)", "I Remember Miles (1998)"],
      influences: ["miles-davis"]
    }
  ]
});
