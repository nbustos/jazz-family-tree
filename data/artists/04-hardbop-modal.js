/* Jazz Family Tree — Hard Bop, Soul Jazz, Modal & Post-Bop, Spiritual Jazz.
   Dates verified against Wikipedia infoboxes and news obituaries (Nov 2026). */
JAZZ.add({
  branches: {
    "hard-bop": {
      summary: "Hard bop took shape in New York around 1954–55, when musicians such as Art Blakey, Horace Silver, Clifford Brown and Max Roach kept bebop's harmonic vocabulary but grounded it in blues, gospel and rhythm and blues. Its quintets favored strong original tunes, driving drummers and a darker, heavier sound than cool jazz. Blue Note, Prestige and Riverside, mostly recording at Rudy Van Gelder's studio, documented the style. It became the main training ground for modern jazz musicians through the 1960s.",
      keyAlbums: [
        "A Night at Birdland — Art Blakey Quintet (1954)",
        "Study in Brown — Clifford Brown & Max Roach (1955)",
        "Saxophone Colossus — Sonny Rollins (1957)",
        "Moanin' — Art Blakey and the Jazz Messengers (1958)",
        "Mingus Ah Um — Charles Mingus (1959)",
        "The Sidewinder — Lee Morgan (1964)"
      ],
      places: ["Birdland (New York)", "Café Bohemia (Greenwich Village)", "Van Gelder Studio (Hackensack & Englewood Cliffs, NJ)", "Blue Bird Inn (Detroit)"]
    },
    "soul-jazz": {
      summary: "Soul jazz grew out of hard bop in the late 1950s. It leaned harder on church harmonies, call-and-response riffs, blues shuffles and danceable backbeats. Jimmy Smith's Hammond B-3 recordings for Blue Note from 1956 launched the organ trio, which spread through Black neighborhood bars in Philadelphia, Newark, Harlem and Chicago. Hits such as Ramsey Lewis's 'The In Crowd' (1965) and Les McCann and Eddie Harris's 'Compared to What' (1969) took jazz onto the pop and R&B charts. The style later became a favorite source of hip-hop samples.",
      keyAlbums: [
        "The Sermon! — Jimmy Smith (1959)",
        "The Cannonball Adderley Quintet in San Francisco (1959)",
        "Back at the Chicken Shack — Jimmy Smith (1963)",
        "The In Crowd — Ramsey Lewis Trio (1965)",
        "Alligator Bogaloo — Lou Donaldson (1967)",
        "Swiss Movement — Les McCann & Eddie Harris (1969)"
      ],
      places: ["Smalls Paradise (Harlem)", "Bohemian Caverns (Washington, D.C.)", "Van Gelder Studio (Englewood Cliffs, NJ)", "Montreux Jazz Festival"]
    },
    "modal": {
      summary: "Modal jazz builds improvisation on scales (modes) held over long stretches, rather than on fast-moving chord changes. George Russell's theories and Miles Davis's 'Milestones' (1958) pointed the way, and Kind of Blue (1959) made the approach famous. Through the 1960s, John Coltrane's quartet, the Bill Evans Trio and Miles Davis's second quintet stretched it into a freer, more open 'post-bop' language. Blue Note sessions by Herbie Hancock, Wayne Shorter, Joe Henderson and Andrew Hill set out the harmonic vocabulary that most later jazz builds on.",
      keyAlbums: [
        "Kind of Blue — Miles Davis (1959)",
        "Sunday at the Village Vanguard — Bill Evans Trio (1961)",
        "A Love Supreme — John Coltrane (1965)",
        "Maiden Voyage — Herbie Hancock (1965)",
        "Speak No Evil — Wayne Shorter (1966)",
        "Miles Smiles — Miles Davis (1967)"
      ],
      places: ["Village Vanguard (New York)", "Columbia 30th Street Studio (New York)", "Van Gelder Studio (Englewood Cliffs, NJ)", "The Plugged Nickel (Chicago)"]
    },
    "spiritual": {
      summary: "Spiritual jazz grew out of John Coltrane's devotional late work, above all A Love Supreme (1965). It treated improvisation as prayer and drew on modal vamps, drones, harp, chant and percussion, along with Indian, African and Islamic sources. Pharoah Sanders, Alice Coltrane and Leon Thomas carried it forward on Impulse! after 1967. Artist-run labels and collectives spread it further: Strata-East in New York, Tribe in Detroit and Horace Tapscott's Arkestra in Los Angeles. Crate-diggers revived it decades later, and it shaped Kamasi Washington and London's young players.",
      keyAlbums: [
        "A Love Supreme — John Coltrane (1965)",
        "Karma — Pharoah Sanders (1969)",
        "The Giant Is Awakened — Horace Tapscott (1969)",
        "Journey in Satchidananda — Alice Coltrane (1971)",
        "Astral Traveling — Lonnie Liston Smith & the Cosmic Echoes (1973)"
      ],
      places: ["Van Gelder Studio (Impulse! sessions)", "Strata-East Records (New York)", "Tribe (Detroit)", "Watts, Los Angeles (Pan Afrikan Peoples Arkestra)"]
    }
  },

  artists: [
    // ───────────────────────── HARD BOP ─────────────────────────
    {
      id: "art-blakey", name: "Art Blakey", nickname: "Bu", type: "person",
      born: 1919, died: 1990, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["drums"], branch: "hard-bop", styles: ["bebop"],
      emerged: 1954, tier: 1, wiki: "Art_Blakey",
      bio: "Blakey learned his trade in Fletcher Henderson's and Billy Eckstine's big bands and in bebop groups with Thelonious Monk. From 1955 until his death he led the Jazz Messengers, the band most closely tied to hard bop. His thunderous press rolls and shuffle grooves drove it, and generations of young players passed through it on their way to leading bands of their own.",
      records: ["A Night at Birdland Vol. 1 (1954)", "Orgy in Rhythm (1957)", "Free for All (1965)"],
      influences: ["fletcher-henderson", "mary-lou-williams", "billy-eckstine", "chick-webb", "thelonious-monk"]
    },
    {
      id: "jazz-messengers", name: "Art Blakey and the Jazz Messengers", type: "band",
      active: [1955, 1990], origin: "New York City, USA",
      instruments: ["trumpet", "tenor saxophone", "piano", "double bass", "drums"],
      branch: "hard-bop", styles: ["soul-jazz", "young-lions"],
      emerged: 1955, tier: 1, wiki: "Art_Blakey_and_the_Jazz_Messengers",
      bio: "The Jazz Messengers began as a cooperative led by Horace Silver and Art Blakey. When Silver left in 1956 it became Blakey's band, and it lasted until his death in 1990. Its alumni include Lee Morgan, Benny Golson, Wayne Shorter, Freddie Hubbard and, in the 1980s, Wynton and Branford Marsalis. 'Moanin'' and 'Blues March' became hard bop anthems, and the band was the music's best-known finishing school.",
      records: ["Horace Silver and the Jazz Messengers (1956)", "Moanin' (1958)", "Mosaic (1962)"],
      influences: [],
      members: ["art-blakey", "horace-silver", "hank-mobley", "kenny-dorham", "donald-byrd", "jackie-mclean", "lee-morgan", "benny-golson", "bobby-timmons", "wayne-shorter", "freddie-hubbard", "gary-bartz", "woody-shaw", "wynton-marsalis", "branford-marsalis", "terence-blanchard", "donald-harrison", "wallace-roney", "mulgrew-miller"]
    },
    {
      id: "horace-silver", name: "Horace Silver", type: "person",
      born: 1928, died: 2014, origin: "Norwalk, Connecticut, USA",
      instruments: ["piano"], branch: "hard-bop", styles: ["soul-jazz"],
      emerged: 1954, tier: 1, wiki: "Horace_Silver",
      bio: "Stan Getz hired Silver in 1950. He co-founded the Jazz Messengers, then led his own quintet from 1956, and its trumpet-and-tenor format became the standard hard bop lineup. His funky, gospel- and blues-inflected tunes, including 'The Preacher', 'Doodlin'', 'Sister Sadie' and 'Song for My Father', also drew on his father's Cape Verdean folk music. They helped define both hard bop and soul jazz.",
      records: ["6 Pieces of Silver (1956)", "Blowin' the Blues Away (1959)", "Song for My Father (1965)"],
      influences: ["stan-getz", "bud-powell", "thelonious-monk", "nat-king-cole"]
    },
    {
      id: "clifford-brown", name: "Clifford Brown", nickname: "Brownie", type: "person",
      born: 1930, died: 1956, origin: "Wilmington, Delaware, USA",
      instruments: ["trumpet"], branch: "hard-bop", styles: ["bebop"],
      emerged: 1954, tier: 2, wiki: "Clifford_Brown",
      bio: "Fats Navarro encouraged Brown, and he worked with Tadd Dameron, Lionel Hampton and Art Blakey's 1954 Birdland quintet. He then co-led the Clifford Brown–Max Roach Quintet, a model hard bop band. His warm tone and flawless, logical lines influenced nearly every trumpeter who followed. He wrote 'Joy Spring' and 'Daahoud'. He died at 25 in a 1956 car crash, and Benny Golson wrote 'I Remember Clifford' in his memory.",
      records: ["Clifford Brown & Max Roach (1954)", "Clifford Brown with Strings (1955)", "Study in Brown (1955)"],
      influences: ["fats-navarro", "dizzy-gillespie", "tadd-dameron", "lionel-hampton", "max-roach"]
    },
    {
      id: "sonny-rollins", name: "Sonny Rollins", nickname: "Saxophone Colossus", type: "person",
      born: 1930, died: 2026, origin: "Harlem, New York City, USA",
      instruments: ["tenor saxophone"], branch: "hard-bop", styles: ["bebop", "modal"],
      emerged: 1954, tier: 1, wiki: "Sonny_Rollins",
      bio: "Rollins idolized Coleman Hawkins and was mentored by Thelonious Monk. He recorded with Bud Powell, Miles Davis and Charlie Parker, then joined the Clifford Brown–Max Roach Quintet. His thematic improvising, calypso 'St. Thomas' and pianoless trios made him the leading tenor of the 1950s. He also wrote standards such as 'Oleo' and 'Doxy'. In 1959 he took a famous sabbatical, practicing on the Williamsburg Bridge. He died in May 2026, aged 95.",
      records: ["Saxophone Colossus (1957)", "Way Out West (1957)", "The Bridge (1962)"],
      influences: ["coleman-hawkins", "charlie-parker", "thelonious-monk", "miles-davis", "max-roach"]
    },
    {
      id: "lee-morgan", name: "Lee Morgan", type: "person",
      born: 1938, died: 1972, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["trumpet"], branch: "hard-bop", styles: ["soul-jazz", "modal"],
      emerged: 1957, tier: 2, wiki: "Lee_Morgan",
      bio: "Morgan was a Philadelphia prodigy who took lessons from Clifford Brown. He joined Dizzy Gillespie's big band at 18 and Art Blakey's Jazz Messengers in 1958. His brash, bluesy trumpet and boogaloo title track made The Sidewinder (1964) one of Blue Note's biggest hits. Later albums such as Search for the New Land moved toward modal post-bop. He was shot dead between sets at Slug's Saloon in 1972, aged 33.",
      records: ["Candy (1958)", "The Sidewinder (1964)", "Search for the New Land (1966)"],
      influences: ["clifford-brown", "dizzy-gillespie", "art-blakey"]
    },
    {
      id: "hank-mobley", name: "Hank Mobley", type: "person",
      born: 1930, died: 1986, origin: "Eastman, Georgia, USA (raised Elizabeth, New Jersey)",
      instruments: ["tenor saxophone"], branch: "hard-bop",
      emerged: 1955, tier: 2, wiki: "Hank_Mobley",
      bio: "Max Roach brought Mobley onto the New York scene. He was a founding member of the Jazz Messengers and later replaced John Coltrane in Miles Davis's band (1961). Leonard Feather called him the 'middleweight champion of the tenor saxophone' for his round, relaxed tone, which sat between Coltrane's intensity and Stan Getz's softness. His many Blue Note dates, above all Soul Station, are hard bop touchstones.",
      records: ["Soul Station (1960)", "Roll Call (1961)", "No Room for Squares (1964)"],
      influences: ["max-roach", "dizzy-gillespie", "horace-silver", "art-blakey", "miles-davis"]
    },
    {
      id: "cannonball-adderley", name: "Cannonball Adderley", nickname: "Cannonball", type: "person",
      born: 1928, died: 1975, origin: "Tampa, Florida, USA",
      instruments: ["alto saxophone"], branch: "hard-bop", styles: ["soul-jazz", "modal"],
      emerged: 1955, tier: 2, wiki: "Cannonball_Adderley",
      bio: "Adderley was a Florida band director who caused a sensation sitting in at the Café Bohemia in 1955 and was hailed as Charlie Parker's heir. He played on Miles Davis's Milestones and Kind of Blue. With his brother Nat he led a quintet whose gospel-tinged hits, 'This Here', 'Work Song' and Joe Zawinul's 'Mercy, Mercy, Mercy', brought soul jazz to a mass audience.",
      records: ["Somethin' Else (1958)", "The Cannonball Adderley Quintet in San Francisco (1959)", "Mercy, Mercy, Mercy! Live at \"The Club\" (1967)"],
      influences: ["charlie-parker", "benny-carter", "miles-davis"]
    },
    {
      id: "benny-golson", name: "Benny Golson", type: "person",
      born: 1929, died: 2024, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["tenor saxophone", "composer", "arranger"], branch: "hard-bop",
      emerged: 1957, tier: 2, wiki: "Benny_Golson",
      bio: "Golson grew up alongside John Coltrane in Philadelphia and counted Tadd Dameron his key writing influence. He wrote some of hard bop's most enduring tunes: 'I Remember Clifford', 'Killer Joe', 'Along Came Betty', 'Whisper Not' and 'Blues March'. As musical director of the 1958 Jazz Messengers he shaped Moanin', and he co-founded the Jazztet with Art Farmer in 1959. He later scored for Hollywood television and died in 2024 at 95.",
      records: ["Benny Golson's New York Scene (1957)", "The Other Side of Benny Golson (1958)", "Meet the Jazztet (1960)"],
      influences: ["tadd-dameron", "coleman-hawkins", "lionel-hampton", "dizzy-gillespie", "art-blakey"]
    },
    {
      id: "kenny-dorham", name: "Kenny Dorham", type: "person",
      born: 1924, died: 1972, origin: "Fairfield, Texas, USA",
      instruments: ["trumpet"], branch: "hard-bop", styles: ["bebop"],
      emerged: 1955, tier: 2, wiki: "Kenny_Dorham",
      bio: "Dorham had played with Dizzy Gillespie, Billy Eckstine and Charlie Parker's quintet before becoming a founding Jazz Messenger. He then replaced Clifford Brown in Max Roach's quintet. Critics have long called him underrated: a lyrical, inventive trumpeter whose compositions include 'Blue Bossa' and 'Una Mas'. He also mentored the young Joe Henderson.",
      records: ["'Round About Midnight at the Cafe Bohemia (1956)", "Quiet Kenny (1960)", "Una Mas (1964)"],
      influences: ["dizzy-gillespie", "billy-eckstine", "charlie-parker", "art-blakey", "max-roach"]
    },
    {
      id: "jackie-mclean", name: "Jackie McLean", type: "person",
      born: 1931, died: 2006, origin: "New York City, USA",
      instruments: ["alto saxophone"], branch: "hard-bop", styles: ["modal", "free"],
      emerged: 1955, tier: 2, wiki: "Jackie_McLean",
      bio: "As a Harlem teenager McLean was informally tutored by his neighbors Bud Powell, Thelonious Monk and Charlie Parker. He played with Miles Davis, Charles Mingus and the Jazz Messengers, and his tart, cutting alto sound made him one of hard bop's essential voices. His 1960s Blue Note albums pushed toward the avant-garde. Later he founded the Artists Collective in Hartford and the jazz program at the University of Hartford.",
      records: ["Bluesnik (1962)", "Let Freedom Ring (1963)", "One Step Beyond (1964)"],
      influences: ["charlie-parker", "bud-powell", "thelonious-monk", "miles-davis", "charles-mingus"]
    },
    {
      id: "donald-byrd", name: "Donald Byrd", type: "person",
      born: 1932, died: 2013, origin: "Detroit, Michigan, USA",
      instruments: ["trumpet"], branch: "hard-bop", styles: ["soul-jazz", "jazz-funk"],
      emerged: 1956, tier: 2, wiki: "Donald_Byrd",
      bio: "Byrd was a Detroit trumpeter who succeeded Clifford Brown in the Jazz Messengers and became one of the most recorded sidemen of the hard bop era. A New Perspective (1964) added a gospel choir. He took the young Herbie Hancock under his wing. With the Mizell brothers he made Black Byrd (1973), for many years Blue Note's best-selling album. He was also a respected educator who founded the Blackbyrds.",
      records: ["Fuego (1960)", "A New Perspective (1964)", "Black Byrd (1973)"],
      influences: ["dizzy-gillespie", "clifford-brown", "art-blakey"]
    },
    {
      id: "wynton-kelly", name: "Wynton Kelly", type: "person",
      born: 1931, died: 1971, origin: "Brooklyn, New York City, USA",
      instruments: ["piano"], branch: "hard-bop",
      emerged: 1958, tier: 2, wiki: "Wynton_Kelly",
      bio: "Kelly was born in Brooklyn to Jamaican parents and accompanied Dinah Washington and Dizzy Gillespie before joining Miles Davis (1959–63). He plays on 'Freddie Freeloader' on Kind of Blue. His buoyant, blues-drenched swing made him one of jazz's most sought-after accompanists, and Smokin' at the Half Note with Wes Montgomery is a guitar-trio classic. He died after a seizure in Toronto in 1971, aged 39.",
      records: ["Kelly Blue (1959)", "Kind of Blue (1959)", "Smokin' at the Half Note (1965)"],
      influences: ["dinah-washington", "dizzy-gillespie", "miles-davis"]
    },
    {
      id: "paul-chambers", name: "Paul Chambers", type: "person",
      born: 1935, died: 1969, origin: "Pittsburgh, Pennsylvania, USA (raised Detroit)",
      instruments: ["double bass"], branch: "hard-bop", styles: ["modal"],
      emerged: 1955, tier: 2, wiki: "Paul_Chambers",
      bio: "Chambers came out of Detroit and anchored Miles Davis's rhythm section from 1955 to 1963, playing on Kind of Blue. He also played on hundreds of hard bop sessions, including Coltrane's Giant Steps, whose 'Mr. P.C.' is named for him. His huge walking lines and rare bowed solos set the standard for 1950s bass. He died of tuberculosis in 1969, aged 33.",
      records: ["Whims of Chambers (1957)", "Bass on Top (1957)", "Kind of Blue (1959)"],
      influences: ["jimmy-blanton", "oscar-pettiford", "ray-brown", "bud-powell", "miles-davis"]
    },
    {
      id: "philly-joe-jones", name: "Philly Joe Jones", nickname: "Philly Joe", type: "person",
      born: 1923, died: 1985, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["drums"], branch: "hard-bop", styles: ["bebop"],
      emerged: 1955, tier: 2, wiki: "Philly_Joe_Jones",
      bio: "Jones was a house drummer at Café Society who worked with Tadd Dameron. He became the explosive engine of Miles Davis's first great quintet (1955–58), known for crisp rim shots and inventive 'fours'. He also drove sessions by Coltrane, Bill Evans and Sonny Rollins. In his last years he led Dameronia, devoted to Dameron's music.",
      records: ["'Round About Midnight (1957)", "Blues for Dracula (1958)", "Drums Around the World (1959)"],
      influences: ["tadd-dameron", "miles-davis"]
    },
    {
      id: "red-garland", name: "Red Garland", nickname: "Red", type: "person",
      born: 1923, died: 1984, origin: "Dallas, Texas, USA",
      instruments: ["piano"], branch: "hard-bop",
      emerged: 1955, tier: 2, wiki: "Red_Garland",
      bio: "Garland was a Texan and briefly a boxer. He built his style out of Nat King Cole and Bud Powell, and at Miles Davis's urging absorbed Ahmad Jamal's lightness. In Davis's 1955–58 quintet his crisp comping and two-handed block-chord solos became a hallmark sound, and his own Prestige trio records made the format widely popular.",
      records: ["Workin' with the Miles Davis Quintet (1960)", "Red Garland's Piano (1957)", "Groovy (1957)"],
      influences: ["nat-king-cole", "bud-powell", "ahmad-jamal", "billy-eckstine", "miles-davis"]
    },
    {
      id: "charles-mingus", name: "Charles Mingus", type: "person",
      born: 1922, died: 1979, origin: "Nogales, Arizona, USA (raised Watts, Los Angeles)",
      instruments: ["double bass", "piano", "composer"], branch: "hard-bop", styles: ["bebop", "free", "ellington"],
      emerged: 1956, tier: 1, wiki: "Charles_Mingus",
      bio: "Mingus was devoted to Duke Ellington and toured with Louis Armstrong and Lionel Hampton. He became one of jazz's great composers and bandleaders, co-founding Debut Records with Max Roach and leading the Jazz Workshop. His music combined gospel shouts, blues, collective improvisation and protest, as in 'Fables of Faubus'. He was a formidable bassist, and The Black Saint and the Sinner Lady is a landmark of extended jazz composition.",
      records: ["Pithecanthropus Erectus (1956)", "Mingus Ah Um (1959)", "The Black Saint and the Sinner Lady (1963)"],
      influences: ["duke-ellington", "jimmy-blanton", "louis-armstrong", "lionel-hampton", "charlie-parker"]
    },
    {
      id: "wes-montgomery", name: "Wes Montgomery", type: "person",
      born: 1923, died: 1968, origin: "Indianapolis, Indiana, USA",
      instruments: ["guitar"], branch: "hard-bop", styles: ["soul-jazz"],
      emerged: 1960, tier: 2, wiki: "Wes_Montgomery",
      bio: "Montgomery taught himself guitar by copying Charlie Christian records and spent two years with Lionel Hampton. Recording for Riverside from 1959, he changed jazz guitar with a warm thumb-picked tone and a solo arc that climbed from single notes to octaves to block chords. His later pop-jazz albums for Verve and A&M foreshadowed smooth jazz. He died of a heart attack in 1968, aged 45.",
      records: ["The Incredible Jazz Guitar of Wes Montgomery (1960)", "Smokin' at the Half Note (1965)", "A Day in the Life (1967)"],
      influences: ["charlie-christian", "lionel-hampton", "john-coltrane"]
    },
    {
      id: "kenny-burrell", name: "Kenny Burrell", type: "person",
      born: 1931, died: null, origin: "Detroit, Michigan, USA",
      instruments: ["guitar"], branch: "hard-bop", styles: ["soul-jazz"],
      emerged: 1956, tier: 2, wiki: "Kenny_Burrell",
      bio: "Burrell came out of Detroit's 1950s scene and debuted on record with Dizzy Gillespie in 1951. He became the definitive blues-rooted bop guitarist and a fixture of Blue Note and Prestige sessions. His partnership with Jimmy Smith and his album Midnight Blue were touchstones of soul jazz. A noted Ellington scholar, he taught for decades at UCLA.",
      records: ["Introducing Kenny Burrell (1956)", "Midnight Blue (1963)", "Guitar Forms (1965)"],
      influences: ["charlie-christian", "django-reinhardt", "dizzy-gillespie", "oscar-peterson"]
    },
    {
      id: "tommy-flanagan", name: "Tommy Flanagan", type: "person",
      born: 1930, died: 2001, origin: "Detroit, Michigan, USA",
      instruments: ["piano"], branch: "hard-bop",
      emerged: 1957, tier: 2, wiki: "Tommy_Flanagan_(musician)",
      bio: "Flanagan was raised on Art Tatum, Teddy Wilson and Nat King Cole. Within months of reaching New York in 1956 he had played on Sonny Rollins's Saxophone Colossus, and he went on to record Coltrane's Giant Steps. He spent about 13 years as Ella Fitzgerald's accompanist and musical director. His elegant, quietly swinging trio work later earned him wide admiration.",
      records: ["Overseas (1958)", "Giant Steps (1960)", "Jazz Poet (1989)"],
      influences: ["art-tatum", "teddy-wilson", "nat-king-cole", "ella-fitzgerald"]
    },
    {
      id: "art-farmer", name: "Art Farmer", type: "person",
      born: 1928, died: 1999, origin: "Council Bluffs, Iowa, USA (raised Phoenix, Arizona)",
      instruments: ["trumpet", "flugelhorn"], branch: "hard-bop", styles: ["cool"],
      emerged: 1954, tier: 2, wiki: "Art_Farmer",
      bio: "After stints with Lionel Hampton, Gigi Gryce, Horace Silver and Gerry Mulligan, Farmer co-founded the Jazztet with Benny Golson in 1959. His soft, burnished lyricism stood apart from hard bop's brassier trumpeters. He later championed the flugelhorn, playing a trumpet-flugelhorn hybrid designed for him, and lived for decades in Vienna.",
      records: ["Modern Art (1958)", "Meet the Jazztet (1960)", "Sing Me Softly of the Blues (1965)"],
      influences: ["dizzy-gillespie", "fats-navarro", "lionel-hampton", "horace-silver", "gerry-mulligan"]
    },
    {
      id: "blue-mitchell", name: "Blue Mitchell", type: "person",
      born: 1930, died: 1979, origin: "Miami, Florida, USA",
      instruments: ["trumpet"], branch: "hard-bop", styles: ["soul-jazz"],
      emerged: 1958, tier: 3, wiki: "Blue_Mitchell",
      bio: "Mitchell was a Miami trumpeter recommended to Riverside Records by Cannonball Adderley. He became the front-line partner in Horace Silver's quintet from 1958 to 1964, playing on Blowin' the Blues Away and other records. His clean, singing tone and lyrical blues sense made Blue's Moods a quiet classic. He later worked across R&B, soul and funk.",
      records: ["Blue's Moods (1960)", "The Thing to Do (1965)", "Down with It! (1966)"],
      influences: ["dizzy-gillespie", "fats-navarro", "clifford-brown", "cannonball-adderley", "horace-silver"]
    },
    {
      id: "bobby-timmons", name: "Bobby Timmons", type: "person",
      born: 1935, died: 1974, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["piano"], branch: "hard-bop", styles: ["soul-jazz"],
      emerged: 1958, tier: 3, wiki: "Bobby_Timmons",
      bio: "Timmons was a Philadelphia pianist who wrote hard bop's most famous gospel-flavored tunes: 'Moanin'' for Art Blakey's Jazz Messengers (1958), and 'This Here' and 'Dat Dere' for Cannonball Adderley. Their church-style amen cadences and call-and-response riffs helped launch the soul jazz boom. He died in 1974, aged 38.",
      records: ["Moanin' (1958)", "The Cannonball Adderley Quintet in San Francisco (1959)", "This Here Is Bobby Timmons (1960)"],
      influences: ["art-blakey", "cannonball-adderley"]
    },
    {
      id: "sonny-clark", name: "Sonny Clark", type: "person",
      born: 1931, died: 1963, origin: "Herminie, Pennsylvania, USA",
      instruments: ["piano"], branch: "hard-bop",
      emerged: 1957, tier: 3, wiki: "Sonny_Clark",
      bio: "Clark apprenticed on the West Coast with Wardell Gray, Oscar Pettiford and Buddy DeFranco. He then became a Blue Note house pianist (1957–62), with a Bud Powell-derived, bluesy, behind-the-beat touch. As a leader, Cool Struttin' (1958) became a perennial favorite, especially in Japan. He died in 1963, aged 31.",
      records: ["Sonny Clark Trio (1958)", "Cool Struttin' (1958)", "Leapin' and Lopin' (1962)"],
      influences: ["bud-powell", "oscar-pettiford"]
    },

    // ───────────────────────── SOUL JAZZ ─────────────────────────
    {
      id: "jimmy-smith", name: "Jimmy Smith", type: "person",
      born: 1928, died: 2005, origin: "Norristown, Pennsylvania, USA",
      instruments: ["Hammond organ"], branch: "soul-jazz", styles: ["hard-bop"],
      emerged: 1956, tier: 2, wiki: "Jimmy_Smith_(musician)",
      bio: "Smith switched from piano to organ in 1954 after hearing Wild Bill Davis. From his 1956 Blue Note debut, his bebop-fast right hand, walking bass pedals and churchy swells made the Hammond B-3 a central jazz instrument. He launched the organ-trio craze and influenced Jimmy McGriff, Jack McDuff and rock keyboardists. His big-band Verve hits and Root Down (1972) later became sampling staples.",
      records: ["The Sermon! (1959)", "Back at the Chicken Shack (1963)", "The Cat (1964)"],
      influences: []
    },
    {
      id: "lou-donaldson", name: "Lou Donaldson", nickname: "Sweet Papa Lou", type: "person",
      born: 1926, died: 2024, origin: "Badin, North Carolina, USA",
      instruments: ["alto saxophone"], branch: "soul-jazz", styles: ["bebop", "hard-bop"],
      emerged: 1957, tier: 2, wiki: "Lou_Donaldson",
      bio: "Donaldson began as a Charlie Parker disciple. He recorded with Thelonious Monk and Milt Jackson in 1952 and played in Art Blakey's 1954 Birdland quintet, the prototype of the Jazz Messengers. Over a long Blue Note career he turned his bop alto toward blues and boogaloo grooves, as on Blues Walk and the hit Alligator Bogaloo. He also discovered Grant Green. He died in 2024, aged 98.",
      records: ["Blues Walk (1958)", "Alligator Bogaloo (1967)", "Everything I Play Is Funky (1970)"],
      influences: ["charlie-parker", "thelonious-monk", "art-blakey"]
    },
    {
      id: "ramsey-lewis", name: "Ramsey Lewis", type: "person",
      born: 1935, died: 2022, origin: "Chicago, Illinois, USA",
      instruments: ["piano", "keyboards"], branch: "soul-jazz", styles: ["jazz-funk"],
      emerged: 1965, tier: 2, wiki: "Ramsey_Lewis",
      bio: "Lewis was a classically trained Chicago church pianist who formed his trio with Eldee Young and Redd Holt in 1956. Their live, gospel-funky cover of 'The In Crowd' (1965), cut at Washington's Bohemian Caverns, was a top-five pop hit and won a Grammy. Sun Goddess (1974), with Earth, Wind & Fire's Maurice White, carried him into jazz-funk. He was also a longtime radio host.",
      records: ["The In Crowd (1965)", "Hang On Ramsey! (1965)", "Sun Goddess (1974)"],
      influences: []
    },
    {
      id: "les-mccann", name: "Les McCann", type: "person",
      born: 1935, died: 2023, origin: "Lexington, Kentucky, USA",
      instruments: ["piano", "vocals"], branch: "soul-jazz", styles: ["jazz-funk"],
      emerged: 1960, tier: 2, wiki: "Les_McCann",
      bio: "McCann was a Kentucky-born pianist and singer whose Los Angeles trio, Les McCann Ltd., brought gospel fervor to Pacific Jazz from 1960. His unrehearsed 1969 Montreux set with Eddie Harris, released as Swiss Movement, produced the protest anthem 'Compared to What' and became one of the best-selling jazz albums of its day. His grooves were later widely sampled in hip-hop.",
      records: ["Les McCann Ltd. Plays the Truth (1960)", "Swiss Movement (1969)", "Invitation to Openness (1972)"],
      influences: []
    },
    {
      id: "grant-green", name: "Grant Green", type: "person",
      born: 1935, died: 1979, origin: "St. Louis, Missouri, USA",
      instruments: ["guitar"], branch: "soul-jazz", styles: ["hard-bop", "jazz-funk"],
      emerged: 1961, tier: 2, wiki: "Grant_Green",
      bio: "Lou Donaldson discovered Green in a St. Louis bar and brought him to Blue Note, where he became the label's house guitarist of the early 1960s. Inspired by Charlie Christian and especially by Charlie Parker, he played spare, horn-like single-note lines steeped in blues. His late-period funk records were rediscovered by DJs and hip-hop producers. He died in 1979, aged 43.",
      records: ["Green Street (1961)", "Idle Moments (1965)", "Live at the Lighthouse (1972)"],
      influences: ["charlie-christian", "charlie-parker", "lester-young", "lou-donaldson"]
    },
    {
      id: "stanley-turrentine", name: "Stanley Turrentine", nickname: "Mr. T", type: "person",
      born: 1934, died: 2000, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["tenor saxophone"], branch: "soul-jazz", styles: ["hard-bop", "jazz-funk"],
      emerged: 1960, tier: 2, wiki: "Stanley_Turrentine",
      bio: "Turrentine came up through the R&B bands of Lowell Fulson and Earl Bostic, then worked with Tadd Dameron and Max Roach. His big, gospel-blues tenor became the voice of Blue Note soul jazz, on his own records and with Jimmy Smith and his then-wife, the organist Shirley Scott. He later had a CTI hit with Sugar (1970).",
      records: ["Up at \"Minton's\" (1961)", "Blue Flames (1964)", "Sugar (1970)"],
      influences: ["max-roach", "tadd-dameron"]
    },
    {
      id: "shirley-scott", name: "Shirley Scott", nickname: "Queen of the Organ", type: "person",
      born: 1934, died: 2002, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["Hammond organ"], branch: "soul-jazz",
      emerged: 1958, tier: 3, wiki: "Shirley_Scott",
      bio: "Scott was a Philadelphia organist who first gained notice with Eddie 'Lockjaw' Davis, including the hit 'In the Kitchen'. Mixing bebop, blues and gospel, she recorded prolifically for Prestige and Impulse!, often with her husband Stanley Turrentine. Called the 'Queen of the Organ', she was one of the few women to lead in the organ-combo world.",
      records: ["Blue Flames (1964)", "Great Scott!! (1964)", "Queen of the Organ (1965)"],
      influences: []
    },
    {
      id: "jimmy-mcgriff", name: "Jimmy McGriff", type: "person",
      born: 1936, died: 2008, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["Hammond organ"], branch: "soul-jazz",
      emerged: 1962, tier: 3, wiki: "Jimmy_McGriff",
      bio: "McGriff was a childhood friend of Jimmy Smith and studied organ with Richard 'Groove' Holmes, Milt Buckner and Smith himself. He scored an R&B hit with his 1962 instrumental of Ray Charles's 'I've Got a Woman'. Leaning more toward the blues than bebop, his gritty organ combos became a staple of jukeboxes and neighborhood bars.",
      records: ["I've Got a Woman (1962)", "The Worm (1968)", "Electric Funk (1970)"],
      influences: ["jimmy-smith"]
    },
    {
      id: "eddie-harris", name: "Eddie Harris", type: "person",
      born: 1934, died: 1996, origin: "Chicago, Illinois, USA",
      instruments: ["tenor saxophone", "electric saxophone", "electric piano"], branch: "soul-jazz", styles: ["jazz-funk"],
      emerged: 1961, tier: 3, wiki: "Eddie_Harris",
      bio: "Harris was a Walter Dyett pupil at Chicago's DuSable High who had a surprise hit with the 'Exodus' film theme in 1961. He pioneered the electrically amplified saxophone and wrote 'Freedom Jazz Dance', which Miles Davis recorded on Miles Smiles. With Les McCann he made Swiss Movement (1969), whose 'Compared to What' became a soul-jazz anthem.",
      records: ["Exodus to Jazz (1961)", "The Electrifying Eddie Harris (1968)", "Swiss Movement (1969)"],
      influences: []
    },
    {
      id: "jack-mcduff", name: "Brother Jack McDuff", nickname: "Brother Jack", type: "person",
      born: 1926, died: 2001, origin: "Champaign, Illinois, USA",
      instruments: ["Hammond organ"], branch: "soul-jazz",
      emerged: 1960, tier: 3, wiki: "Jack_McDuff",
      bio: "McDuff switched from bass to organ while in Willis Jackson's band. He recorded a run of grease-heavy Prestige albums from 1960 with partners including Gene Ammons, Sonny Stitt, Grant Green and Kenny Burrell. His working quartet was also the launching pad for the young guitarist George Benson.",
      records: ["Brother Jack (1960)", "The Honeydripper (1961)", "Brother Jack Meets the Boss (1962)"],
      influences: []
    },

    // ───────────────────────── MODAL & POST-BOP ─────────────────────────
    {
      id: "john-coltrane", name: "John Coltrane", nickname: "Trane", type: "person",
      born: 1926, died: 1967, origin: "Hamlet, North Carolina, USA (raised Philadelphia)",
      instruments: ["tenor saxophone", "soprano saxophone"], branch: "modal", styles: ["hard-bop", "spiritual", "free"],
      emerged: 1955, tier: 1, wiki: "John_Coltrane",
      bio: "Coltrane apprenticed with Dizzy Gillespie and Johnny Hodges, then played with Miles Davis (1955–60) and Thelonious Monk (1957). Giant Steps introduced the chord cycle now called Coltrane changes, and the soprano saxophone 'My Favorite Things' became a modal hit. His classic quartet's A Love Supreme turned improvisation into devotion and launched spiritual jazz. Few figures have influenced jazz more.",
      records: ["Giant Steps (1960)", "My Favorite Things (1961)", "A Love Supreme (1965)"],
      influences: ["johnny-hodges", "charlie-parker", "dizzy-gillespie", "miles-davis", "thelonious-monk"]
    },
    {
      id: "coltrane-classic-quartet", name: "John Coltrane Quartet", type: "band",
      active: [1961, 1965], origin: "New York City, USA",
      instruments: ["tenor saxophone", "soprano saxophone", "piano", "double bass", "drums"],
      branch: "modal", styles: ["spiritual"],
      emerged: 1961, tier: 2, wiki: "John_Coltrane",
      bio: "The classic quartet was Coltrane, McCoy Tyner, Jimmy Garrison and Elvin Jones, together from late 1961 until Tyner left at the end of 1965. It turned modal vamps into long, surging performances built on Tyner's fourth-based chords and Jones's rolling polyrhythms. Its Village Vanguard sets, Ballads, Crescent and A Love Supreme rank among the most influential small-group recordings in jazz.",
      records: ["Ballads (1963)", "Crescent (1964)", "A Love Supreme (1965)"],
      influences: [],
      members: ["john-coltrane", "mccoy-tyner", "jimmy-garrison", "elvin-jones"]
    },
    {
      id: "bill-evans", name: "Bill Evans", type: "person",
      born: 1929, died: 1980, origin: "Plainfield, New Jersey, USA",
      instruments: ["piano"], branch: "modal", styles: ["cool"],
      emerged: 1958, tier: 1, wiki: "Bill_Evans",
      bio: "Evans worked with theorist George Russell, then spent most of 1958 with Miles Davis's sextet. His impressionist, modal-tinged voicings shaped Kind of Blue, and he wrote its liner notes. His trio with Scott LaFaro and Paul Motian made the piano trio an equal three-way conversation. His introspective harmony and rootless voicings became the basis of modern jazz piano.",
      records: ["Everybody Digs Bill Evans (1959)", "Kind of Blue (1959)", "Conversations with Myself (1963)"],
      influences: ["nat-king-cole", "bud-powell", "art-tatum", "miles-davis"]
    },
    {
      id: "bill-evans-trio", name: "Bill Evans Trio (with Scott LaFaro & Paul Motian)", type: "band",
      active: [1959, 1961], origin: "New York City, USA",
      instruments: ["piano", "double bass", "drums"], branch: "modal", styles: ["cool"],
      emerged: 1959, tier: 2, wiki: "Bill_Evans",
      bio: "Bill Evans, bassist Scott LaFaro and drummer Paul Motian played together from 1959 until LaFaro's death in July 1961. They replaced the timekeeping piano trio with simultaneous, interactive improvisation. The live Village Vanguard recordings of 25 June 1961, released as Sunday at the Village Vanguard and Waltz for Debby, remain a benchmark for every jazz piano trio since.",
      records: ["Portrait in Jazz (1960)", "Explorations (1961)", "Sunday at the Village Vanguard (1961)", "Waltz for Debby (1962)"],
      influences: [],
      members: ["bill-evans", "scott-lafaro"]
    },
    {
      id: "scott-lafaro", name: "Scott LaFaro", type: "person",
      born: 1936, died: 1961, origin: "Newark, New Jersey, USA (raised Geneva, New York)",
      instruments: ["double bass"], branch: "modal", styles: ["free"],
      emerged: 1959, tier: 2, wiki: "Scott_LaFaro",
      bio: "LaFaro worked with Chet Baker, Stan Kenton and Benny Goodman before joining Bill Evans in 1959. He set the bass free from walking timekeeping, playing countermelodies with guitar-like speed and range. He also played on Ornette Coleman's Free Jazz. He died in a car crash in July 1961, at 25, only days after the Village Vanguard recordings that made him a model for later bassists.",
      records: ["Free Jazz: A Collective Improvisation (1961)", "Sunday at the Village Vanguard (1961)", "Waltz for Debby (1962)"],
      influences: ["chet-baker", "bill-evans"]
    },
    {
      id: "mccoy-tyner", name: "McCoy Tyner", type: "person",
      born: 1938, died: 2020, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["piano"], branch: "modal", styles: ["spiritual"],
      emerged: 1960, tier: 2, wiki: "McCoy_Tyner",
      bio: "Tyner grew up in Philadelphia with Bud Powell as a neighbor. He played in the first lineup of the Jazztet before joining John Coltrane's quartet (1960–65). There his percussive left hand, chords built in fourths and cascading pentatonic runs became the harmonic sound of modal jazz. As a leader, The Real McCoy and Sahara extended that style, and he became one of the most imitated jazz pianists.",
      records: ["Inception (1962)", "The Real McCoy (1967)", "Sahara (1972)"],
      influences: ["bud-powell", "thelonious-monk", "benny-golson", "john-coltrane"]
    },
    {
      id: "elvin-jones", name: "Elvin Jones", type: "person",
      born: 1927, died: 2004, origin: "Pontiac, Michigan, USA",
      instruments: ["drums"], branch: "modal", styles: ["hard-bop", "spiritual"],
      emerged: 1960, tier: 2, wiki: "Elvin_Jones",
      bio: "Jones was the youngest brother of Hank and Thad Jones and came up in Detroit's 1950s scene. In New York he recorded with Charles Mingus and Miles Davis, then joined John Coltrane (1960–65). His swirling, triplet-based polyrhythms changed jazz drumming, turning the kit into a second improvising voice. He later led his Jazz Machine for decades.",
      records: ["A Love Supreme (1965)", "Puttin' It Together (1968)", "Live at the Lighthouse (1973)"],
      influences: ["charles-mingus", "john-coltrane"]
    },
    {
      id: "jimmy-garrison", name: "Jimmy Garrison", type: "person",
      born: 1934, died: 1976, origin: "Miami, Florida, USA (raised Philadelphia)",
      instruments: ["double bass"], branch: "modal", styles: ["free", "spiritual"],
      emerged: 1961, tier: 3, wiki: "Jimmy_Garrison",
      bio: "Garrison had worked with Philly Joe Jones, Lennie Tristano and Ornette Coleman before anchoring John Coltrane's groups from 1961 to 1967. His deep, strummed pedal tones held down the quartet's modal storms, and his unaccompanied, flamenco-like solo introductions became a trademark. His bass states the four-note motif on A Love Supreme. He died in 1976, aged 42.",
      records: ["Ornette on Tenor (1962)", "Crescent (1964)", "A Love Supreme (1965)"],
      influences: ["philly-joe-jones", "lennie-tristano", "ornette-coleman", "john-coltrane"]
    },
    {
      id: "miles-davis-second-quintet", name: "Miles Davis Quintet (Second Great Quintet)", type: "band",
      active: [1964, 1968], origin: "New York City, USA",
      instruments: ["trumpet", "tenor saxophone", "piano", "double bass", "drums"],
      branch: "modal", styles: ["fusion"],
      emerged: 1964, tier: 2, wiki: "Miles_Davis_Quintet",
      bio: "This quintet was Miles Davis with Wayne Shorter, Herbie Hancock, Ron Carter and Tony Williams, complete once Shorter joined in September 1964. Its 'time, no changes' approach let tempo, harmony and form shift in real time. Shorter's tunes 'E.S.P.', 'Footprints' and 'Nefertiti' became post-bop standards, and the band's studio albums led straight into Davis's electric period.",
      records: ["E.S.P. (1965)", "Miles Smiles (1967)", "Nefertiti (1968)"],
      influences: [],
      members: ["miles-davis", "wayne-shorter", "herbie-hancock", "ron-carter", "tony-williams"]
    },
    {
      id: "herbie-hancock", name: "Herbie Hancock", type: "person",
      born: 1940, died: null, origin: "Chicago, Illinois, USA",
      instruments: ["piano", "keyboards", "synthesizer"], branch: "modal", styles: ["fusion", "jazz-funk"],
      emerged: 1962, tier: 1, wiki: "Herbie_Hancock",
      bio: "Hancock was a Chicago prodigy whom Donald Byrd brought to New York. He scored with 'Watermelon Man' on his 1962 debut, then redefined the rhythm section in Miles Davis's quintet (1963–68). Maiden Voyage set out modal post-bop's harmonic vocabulary, and Head Hunters (1973) became a jazz-funk landmark. With 'Rockit' and many Grammys, he has kept reinventing himself for six decades.",
      records: ["Takin' Off (1962)", "Maiden Voyage (1965)", "Head Hunters (1973)"],
      influences: ["donald-byrd", "miles-davis", "bill-evans", "gil-evans", "oscar-peterson"]
    },
    {
      id: "wayne-shorter", name: "Wayne Shorter", type: "person",
      born: 1933, died: 2023, origin: "Newark, New Jersey, USA",
      instruments: ["tenor saxophone", "soprano saxophone", "composer"], branch: "modal", styles: ["hard-bop", "fusion"],
      emerged: 1959, tier: 1, wiki: "Wayne_Shorter",
      bio: "Shorter was musical director of Art Blakey's Jazz Messengers (1959–64) and then the chief composer of Miles Davis's second quintet. He wrote some of the most original pieces in jazz, including 'Footprints', 'Speak No Evil', 'Infant Eyes' and 'Nefertiti'. He co-founded Weather Report in 1970, and his late quartet was among the most admired bands of the 2000s. He died in 2023, aged 89.",
      records: ["JuJu (1965)", "Speak No Evil (1966)", "Native Dancer (1975)"],
      influences: ["coleman-hawkins", "sonny-rollins", "john-coltrane", "art-blakey", "miles-davis"]
    },
    {
      id: "ron-carter", name: "Ron Carter", type: "person",
      born: 1937, died: null, origin: "Ferndale, Michigan, USA",
      instruments: ["double bass", "cello"], branch: "modal", styles: ["hard-bop"],
      emerged: 1963, tier: 2, wiki: "Ron_Carter",
      bio: "Carter was a classically trained cellist and bassist from the Eastman School. He worked with Chico Hamilton and Cannonball Adderley before anchoring Miles Davis's second quintet (1963–68) with elastic, harmonically daring lines. He became the most-recorded bassist in jazz history, with more than 2,200 sessions, from Blue Note and CTI classics to A Tribe Called Quest.",
      records: ["Where? (1961)", "Miles Smiles (1967)", "Uptown Conversation (1970)"],
      influences: ["chico-hamilton", "cannonball-adderley", "miles-davis"]
    },
    {
      id: "tony-williams", name: "Tony Williams", type: "person",
      born: 1945, died: 1997, origin: "Chicago, Illinois, USA (raised Boston)",
      instruments: ["drums"], branch: "modal", styles: ["fusion", "free"],
      emerged: 1963, tier: 2, wiki: "Tony_Williams_(drummer)",
      bio: "Williams studied with Alan Dawson and played with Sam Rivers and Jackie McLean as a teenager. He joined Miles Davis at 17 and broke the quintet's time open with shimmering ride cymbal, sudden accents and free pulse. In 1969 his Tony Williams Lifetime, with John McLaughlin and Larry Young, helped invent jazz-rock fusion. He died in 1997, aged 51.",
      records: ["Life Time (1965)", "Spring (1966)", "Emergency! (1969)"],
      influences: ["max-roach", "art-blakey", "sam-rivers", "jackie-mclean", "miles-davis"]
    },
    {
      id: "joe-henderson", name: "Joe Henderson", type: "person",
      born: 1937, died: 2001, origin: "Lima, Ohio, USA",
      instruments: ["tenor saxophone"], branch: "modal", styles: ["hard-bop"],
      emerged: 1963, tier: 2, wiki: "Joe_Henderson",
      bio: "Henderson memorized Lester Young solos as a student in Detroit, and in New York Kenny Dorham took him under his wing. His Blue Note records, Page One with 'Blue Bossa' and 'Recorda Me' and later Inner Urge, joined hard bop grit to modal searching. He also starred in Horace Silver's quintet. His 1990s Verve albums, starting with Lush Life, brought him belated acclaim and Grammys.",
      records: ["Page One (1963)", "Inner Urge (1966)", "Lush Life: The Music of Billy Strayhorn (1992)"],
      influences: ["lester-young", "charlie-parker", "dexter-gordon", "kenny-dorham", "horace-silver"]
    },
    {
      id: "bobby-hutcherson", name: "Bobby Hutcherson", type: "person",
      born: 1941, died: 2016, origin: "Los Angeles, California, USA",
      instruments: ["vibraphone", "marimba"], branch: "modal", styles: ["free"],
      emerged: 1963, tier: 2, wiki: "Bobby_Hutcherson",
      bio: "Hutcherson took up the vibraphone after hearing Milt Jackson on Miles Davis's 'Bemsha Swing'. In the mid-1960s he played on many of Blue Note's most adventurous sessions, including Eric Dolphy's Out to Lunch and Jackie McLean's records. His own Dialogue and Components applied modern harmony and free-leaning forms to the vibes, and he influenced every vibraphonist who followed.",
      records: ["Dialogue (1965)", "Components (1966)", "Happenings (1967)"],
      influences: ["milt-jackson", "eric-dolphy", "jackie-mclean"]
    },
    {
      id: "andrew-hill", name: "Andrew Hill", type: "person",
      born: 1931, died: 2007, origin: "Chicago, Illinois, USA",
      instruments: ["piano", "composer"], branch: "modal", styles: ["free"],
      emerged: 1963, tier: 2, wiki: "Andrew_Hill_(pianist)",
      bio: "Hill was encouraged as a boy by Earl Hines and studied informally with Paul Hindemith. His 1963–65 Blue Note albums offered a distinctive alternative inside post-bop, with angular, rhythmically elusive compositions rooted in Monk and Powell. The best known is Point of Departure, with Eric Dolphy, Joe Henderson and Tony Williams. Late albums such as Time Lines (2006) restored his reputation.",
      records: ["Black Fire (1964)", "Point of Departure (1965)", "Time Lines (2006)"],
      influences: ["earl-hines", "thelonious-monk", "bud-powell", "art-tatum"]
    },
    {
      id: "freddie-hubbard", name: "Freddie Hubbard", type: "person",
      born: 1938, died: 2008, origin: "Indianapolis, Indiana, USA",
      instruments: ["trumpet", "flugelhorn"], branch: "modal", styles: ["hard-bop", "free", "jazz-funk"],
      emerged: 1960, tier: 2, wiki: "Freddie_Hubbard",
      bio: "Hubbard came up with the Montgomery brothers in Indianapolis. In New York he played on landmark records of three different schools: Ornette Coleman's Free Jazz, Eric Dolphy's Out to Lunch and Herbie Hancock's Maiden Voyage. He was also a Jazz Messenger from 1961 to 1964. His brilliant, muscular tone dominated 1960s trumpet, and Red Clay (1970) became a CTI classic.",
      records: ["Open Sesame (1960)", "Hub-Tones (1963)", "Red Clay (1970)"],
      influences: ["clifford-brown", "wes-montgomery", "sonny-rollins", "eric-dolphy", "art-blakey"]
    },
    {
      id: "woody-shaw", name: "Woody Shaw", type: "person",
      born: 1944, died: 1989, origin: "Laurinburg, North Carolina, USA (raised Newark, New Jersey)",
      instruments: ["trumpet", "flugelhorn"], branch: "modal", styles: ["hard-bop"],
      emerged: 1965, tier: 2, wiki: "Woody_Shaw",
      bio: "Shaw was a Newark prodigy whose first major job was with Eric Dolphy in 1963. He then worked with Horace Silver, Larry Young (Unity), Art Blakey and Dexter Gordon. He built a new trumpet language on wide intervals and fourths, carrying Coltrane-era modal harmony onto the horn. His Columbia album Rosewood (1978) was acclaimed. He died in 1989 after being struck by a subway train.",
      records: ["Unity (1966)", "Blackstone Legacy (1971)", "Rosewood (1978)"],
      influences: ["dizzy-gillespie", "fats-navarro", "clifford-brown", "eric-dolphy", "horace-silver"]
    },
    {
      id: "larry-young", name: "Larry Young", type: "person",
      born: 1940, died: 1978, origin: "Newark, New Jersey, USA",
      instruments: ["Hammond organ"], branch: "modal", styles: ["soul-jazz", "fusion"],
      emerged: 1964, tier: 3, wiki: "Larry_Young_(musician)",
      bio: "Young started in Jimmy Smith's soul-jazz mold but, on Blue Note from 1964, brought Coltrane's modal harmony to the Hammond B-3. Unity, with Woody Shaw, Joe Henderson and Elvin Jones, is the defining post-bop organ album. He then played on Tony Williams Lifetime's Emergency! and Miles Davis's Bitches Brew. He died in 1978, aged 37.",
      records: ["Into Somethin' (1965)", "Unity (1966)", "Emergency! (1969)"],
      influences: ["jimmy-smith", "john-coltrane"]
    },
    {
      id: "charles-lloyd", name: "Charles Lloyd", type: "person",
      born: 1938, died: null, origin: "Memphis, Tennessee, USA",
      instruments: ["tenor saxophone", "flute"], branch: "modal", styles: ["spiritual", "ecm"],
      emerged: 1966, tier: 2, wiki: "Charles_Lloyd_(jazz_musician)",
      bio: "Lloyd grew up in Memphis studying with Phineas Newborn Jr. He was music director for Chico Hamilton and then played with Cannonball Adderley. His 1966 quartet with Keith Jarrett, Jack DeJohnette and Cecil McBee made Forest Flower a crossover hit and played the Fillmore to rock audiences. After years of retreat he returned with a searching, spiritual late style on ECM and Blue Note, still touring in 2026.",
      records: ["Dream Weaver (1966)", "Forest Flower (1967)", "The Water Is Wide (2000)"],
      influences: ["chico-hamilton", "cannonball-adderley"]
    },

    // ───────────────────────── SPIRITUAL JAZZ ─────────────────────────
    {
      id: "alice-coltrane", name: "Alice Coltrane", nickname: "Turiya", type: "person",
      born: 1937, died: 2007, origin: "Detroit, Michigan, USA",
      instruments: ["piano", "harp", "organ"], branch: "spiritual", styles: ["modal", "free"],
      emerged: 1968, tier: 2, wiki: "Alice_Coltrane",
      bio: "Alice McLeod studied with Bud Powell in Paris and played with Terry Gibbs. She married John Coltrane and replaced McCoy Tyner in his band (1966–67). Her Impulse! albums Ptah, the El Daoud and Journey in Satchidananda joined harp glissandi, Indian drones and modal jazz into the defining sound of spiritual jazz. As Swamini Turiyasangitananda she later led an ashram and recorded devotional music.",
      records: ["Ptah, the El Daoud (1970)", "Journey in Satchidananda (1971)", "Universal Consciousness (1971)"],
      influences: ["bud-powell", "john-coltrane"]
    },
    {
      id: "pharoah-sanders", name: "Pharoah Sanders", type: "person",
      born: 1940, died: 2022, origin: "Little Rock, Arkansas, USA",
      instruments: ["tenor saxophone"], branch: "spiritual", styles: ["free"],
      emerged: 1965, tier: 2, wiki: "Pharoah_Sanders",
      bio: "Sanders played with Sun Ra and then joined John Coltrane's final groups (1965–67), where his overblown screams and multiphonics pushed the music to its limits. On Impulse! he combined that ferocity with chant, bells and hypnotic vamps. Karma's 32-minute 'The Creator Has a Master Plan' became spiritual jazz's anthem. Promises (2021) introduced him to a new generation before his death in 2022.",
      records: ["Tauhid (1967)", "Karma (1969)", "Promises (2021)"],
      influences: ["john-coltrane", "sun-ra"]
    },
    {
      id: "yusef-lateef", name: "Yusef Lateef", type: "person",
      born: 1920, died: 2013, origin: "Chattanooga, Tennessee, USA (raised Detroit)",
      instruments: ["tenor saxophone", "flute", "oboe", "bamboo flute"], branch: "spiritual", styles: ["hard-bop"],
      emerged: 1957, tier: 2, wiki: "Yusef_Lateef",
      bio: "Lateef was a Detroit tenor who had toured with Dizzy Gillespie. From 1957 his records added flute, oboe and instruments from the Middle East and Asia to hard bop, a decade before 'world' or 'spiritual' jazz had names. He was later a member of Cannonball Adderley's sextet. A devout Ahmadiyya Muslim, scholar and teacher, he rejected the word 'jazz' for his 'autophysiopsychic' music.",
      records: ["Jazz Mood (1957)", "Eastern Sounds (1962)", "The Blue Yusef Lateef (1968)"],
      influences: ["lester-young", "dizzy-gillespie"]
    },
    {
      id: "lonnie-liston-smith", name: "Lonnie Liston Smith", type: "person",
      born: 1940, died: null, origin: "Richmond, Virginia, USA",
      instruments: ["piano", "keyboards"], branch: "spiritual", styles: ["jazz-funk"],
      emerged: 1969, tier: 3, wiki: "Lonnie_Liston_Smith",
      bio: "Smith played with Roland Kirk, Art Blakey, Pharoah Sanders (Karma), Gato Barbieri and Miles Davis. His Cosmic Echoes then fused modal spiritual jazz with electric-piano soul and funk. Astral Traveling and Expansions became cornerstones of rare-groove and dance-floor jazz, much sampled by hip-hop and house producers.",
      records: ["Astral Traveling (1973)", "Expansions (1975)", "Visions of a New World (1975)"],
      influences: ["pharoah-sanders", "john-coltrane", "miles-davis", "art-blakey"]
    },
    {
      id: "leon-thomas", name: "Leon Thomas", type: "person",
      born: 1937, died: 1999, origin: "East St. Louis, Illinois, USA",
      instruments: ["vocals"], branch: "spiritual", styles: ["free", "vocal-postwar"],
      emerged: 1969, tier: 3, wiki: "Leon_Thomas_(jazz_singer)",
      bio: "Thomas was a baritone who briefly sang with Count Basie. He invented a yodeling, glottal-stop scat style that became the human voice of spiritual jazz, above all on Pharoah Sanders's 'The Creator Has a Master Plan' (1969). His own Flying Dutchman albums mixed Afrocentric spirituality, blues and protest, and he later toured with Santana.",
      records: ["Karma (1969)", "Spirits Known and Unknown (1970)", "The Leon Thomas Album (1970)"],
      influences: ["count-basie", "john-coltrane", "pharoah-sanders"]
    },
    {
      id: "rashied-ali", name: "Rashied Ali", type: "person",
      born: 1933, died: 2009, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["drums"], branch: "spiritual", styles: ["free"],
      emerged: 1965, tier: 3, wiki: "Rashied_Ali",
      bio: "Ali studied with Philly Joe Jones and toured with Sonny Rollins. He replaced Elvin Jones in John Coltrane's last band, playing free, pulse-based 'multidirectional' rhythm instead of fixed time. His duets with Coltrane, released as Interstellar Space, are a high point of the late period. He later ran the loft club Ali's Alley and his own Survival label.",
      records: ["Meditations (1966)", "Duo Exchange (1973)", "Interstellar Space (1974)"],
      influences: ["philly-joe-jones", "sonny-rollins", "john-coltrane"]
    },
    {
      id: "horace-tapscott", name: "Horace Tapscott", type: "person",
      born: 1934, died: 1999, origin: "Houston, Texas, USA (raised Los Angeles)",
      instruments: ["piano", "trombone", "composer"], branch: "spiritual", styles: ["free"],
      emerged: 1969, tier: 3, wiki: "Horace_Tapscott",
      bio: "After playing trombone with Lionel Hampton, Tapscott returned to Los Angeles and in 1961 founded the Pan Afrikan Peoples Arkestra. It was a community orchestra rooted in Watts and devoted to preserving African American music, and players such as Arthur Blythe and David Murray came through it. The Giant Is Awakened (1969) and his Nimbus West recordings document a fiercely independent West Coast spiritual jazz.",
      records: ["The Giant Is Awakened (1969)", "The Call (1978)", "Dial 'B' for Barbra (1981)"],
      influences: ["lionel-hampton"]
    },
    {
      id: "gary-bartz", name: "Gary Bartz", type: "person",
      born: 1940, died: null, origin: "Baltimore, Maryland, USA",
      instruments: ["alto saxophone", "soprano saxophone"], branch: "spiritual", styles: ["modal", "jazz-funk"],
      emerged: 1968, tier: 3, wiki: "Gary_Bartz",
      bio: "Bartz trained at Juilliard and passed through Charles Mingus's Jazz Workshop, Max Roach and Abbey Lincoln's band, Art Blakey's Jazz Messengers and McCoy Tyner's group. He joined Miles Davis in 1970 and appears on Live-Evil. His Ntu Troop's Harlem Bush Music records and I've Known Rivers fused Afrocentric spiritual jazz with soul and funk. He remained active in 2026.",
      records: ["Another Earth (1969)", "Live-Evil (1971)", "Music Is My Sanctuary (1977)"],
      influences: ["charles-mingus", "max-roach", "art-blakey", "mccoy-tyner", "miles-davis"]
    }
  ]
});
