/* Jazz Family Tree — The Swing Era: Big Band Swing, Swing-Era Singers, Gypsy Jazz,
   Kansas City Jazz and Ellingtonia. */
JAZZ.add({
  branches: {
    "swing": {
      summary: "Swing turned the arranged big band into America's popular music. Building on Fletcher Henderson's call-and-response writing for reed and brass sections, Benny Goodman's August 1935 triumph at the Palomar Ballroom in Los Angeles set off a national craze that carried dozens of orchestras through ballrooms, radio and jukeboxes until World War II. The era also produced a new kind of virtuoso soloist, from Roy Eldridge to Charlie Christian, who pointed the way to bebop.",
      keyAlbums: [
        "King Porter Stomp — Benny Goodman Orchestra (1935)",
        "Sing, Sing, Sing — Benny Goodman Orchestra (1937)",
        "For Dancers Only — Jimmie Lunceford Orchestra (1937)",
        "The Famous 1938 Carnegie Hall Jazz Concert — Benny Goodman (rec. 1938)",
        "Begin the Beguine — Artie Shaw (1938)",
        "In the Mood — Glenn Miller Orchestra (1939)"
      ],
      places: ["Savoy Ballroom, Harlem", "Palomar Ballroom, Los Angeles", "Carnegie Hall", "Cotton Club"]
    },
    "swing-vocal": {
      summary: "The swing era made the band singer a star and then a solo artist. Drawing on Louis Armstrong's phrasing and the blues of Bessie Smith, singers such as Billie Holiday, Ella Fitzgerald and Mildred Bailey treated popular songs as material for jazz improvisation, while close-harmony groups like the Boswell Sisters brought jazz rhythm to mainstream radio. By the mid-1940s vocalists had overtaken the bandleaders, setting up the post-war era of jazz singers.",
      keyAlbums: [
        "Stormy Weather — Ethel Waters (1933)",
        "What a Little Moonlight Can Do — Teddy Wilson with Billie Holiday (1935)",
        "A-Tisket, A-Tasket — Chick Webb Orchestra with Ella Fitzgerald (1938)",
        "Strange Fruit — Billie Holiday (1939)",
        "Why Don't You Do Right? — Benny Goodman with Peggy Lee (1942)",
        "Straighten Up and Fly Right — King Cole Trio (1943)"
      ],
      places: ["Apollo Theater, Harlem", "Café Society, Greenwich Village", "52nd Street", "Cotton Club"]
    },
    "gypsy-jazz": {
      summary: "Gypsy jazz (jazz manouche) was born in Paris in 1934, when the Romani guitarist Django Reinhardt and violinist Stéphane Grappelli formed the Quintette du Hot Club de France. Its all-string sound — lead guitar and violin over a percussive 'pompe' rhythm guitar and bass, with no drums — was the first major jazz style created outside the United States. Reinhardt's repertoire and technique remain the basis of a living tradition carried on by Sinti and Manouche players across Europe.",
      keyAlbums: [
        "Dinah — Quintette du Hot Club de France (1934)",
        "Minor Swing — Quintette du Hot Club de France (1937)",
        "Nuages — Django Reinhardt (1940)",
        "Djangology — Django Reinhardt & Stéphane Grappelli (rec. 1949)",
        "Routes to Django — Biréli Lagrène (rec. 1980)",
        "Seresta — The Rosenberg Trio (1990)"
      ],
      places: ["Hôtel Claridge, Paris", "Hot Club de France, Paris", "Samois-sur-Seine"]
    },
    "kansas-city": {
      summary: "Kansas City jazz grew up in the late 1920s and early 1930s in the wide-open nightlife of Missouri's 'Paris of the Plains' under the Pendergast political machine. Territory bands such as Bennie Moten's orchestra and Walter Page's Blue Devils built a looser, blues-based style around head arrangements, repeated riffs and a light, even four-beat pulse, honed in all-night jam sessions. Count Basie's band carried it to New York in 1936–37, and the city later produced Charlie Parker.",
      keyAlbums: [
        "Moten Swing — Bennie Moten's Kansas City Orchestra (1932)",
        "Walkin' and Swingin' — Andy Kirk & His Twelve Clouds of Joy (1936)",
        "Lady Be Good — Jones-Smith Incorporated (1936)",
        "One O'Clock Jump — Count Basie Orchestra (1937)",
        "Roll 'Em Pete — Big Joe Turner & Pete Johnson (1938)",
        "Confessin' the Blues — Jay McShann Orchestra (1941)"
      ],
      places: ["18th & Vine", "Reno Club", "Sunset Club", "Cherry Blossom"]
    },
    "ellington": {
      summary: "Ellingtonia is the music Duke Ellington and Billy Strayhorn wrote for one specific band, treating its individual voices — Bubber Miley's growling plunger trumpet, Johnny Hodges's alto, Harry Carney's baritone — as the colors of a composer's palette. It took shape during the orchestra's 1927–31 residency at Harlem's Cotton Club, peaked artistically around 1940–42, and expanded into extended suites until Ellington's death in 1974. It remains the largest body of composition in jazz.",
      keyAlbums: [
        "Black and Tan Fantasy — Duke Ellington (1927)",
        "Mood Indigo — Duke Ellington (1930)",
        "Ko-Ko — Duke Ellington Orchestra (1940)",
        "Take the 'A' Train — Duke Ellington Orchestra (1941)",
        "Ellington at Newport — Duke Ellington Orchestra (1956)",
        "The Far East Suite — Duke Ellington (1967)"
      ],
      places: ["Cotton Club, Harlem", "Kentucky Club (Hollywood Club), Broadway", "Carnegie Hall", "Newport Jazz Festival"]
    }
  },

  artists: [
    // ================= BIG BAND SWING =================
    {
      id: "benny-goodman", name: "Benny Goodman", nickname: "The King of Swing", type: "person",
      born: 1909, died: 1986, origin: "Chicago, Illinois, USA",
      instruments: ["clarinet", "bandleader"], branch: "swing", styles: [],
      emerged: 1935, tier: 1, wiki: "Benny_Goodman",
      bio: "A virtuoso clarinetist schooled on Chicago's New Orleans players, Goodman launched the swing craze when his band, playing Fletcher Henderson's arrangements, caused a sensation at the Palomar Ballroom in 1935. His 1938 Carnegie Hall concert gave jazz concert-hall status, and his trio and quartet with Teddy Wilson and Lionel Hampton were among the first prominent racially integrated groups.",
      records: ["King Porter Stomp (1935)", "Sing, Sing, Sing (1937)", "The Famous 1938 Carnegie Hall Jazz Concert (1938)"],
      influences: ["jimmie-noone", "johnny-dodds", "new-orleans-rhythm-kings", "fletcher-henderson"]
    },
    {
      id: "chick-webb", name: "Chick Webb", type: "person",
      born: 1905, died: 1939, origin: "Baltimore, Maryland, USA",
      instruments: ["drums", "bandleader"], branch: "swing", styles: ["swing-vocal"],
      emerged: 1931, tier: 2, wiki: "Chick_Webb",
      bio: "Though left small and hunchbacked by spinal tuberculosis, Webb was the most powerful drummer of his day, leading the house band at Harlem's Savoy Ballroom from 1931 and winning its famous battles of the bands. He discovered the teenage Ella Fitzgerald in 1935, and his crisp, driving drumming influenced Gene Krupa, Buddy Rich and Art Blakey.",
      records: ["Stompin' at the Savoy (1934)", "A-Tisket, A-Tasket (1938)", "Liza (1938)"],
      influences: []
    },
    {
      id: "jimmie-lunceford", name: "Jimmie Lunceford", type: "person",
      born: 1902, died: 1947, origin: "Fulton, Mississippi, USA",
      instruments: ["alto saxophone", "bandleader"], branch: "swing", styles: [],
      emerged: 1934, tier: 2, wiki: "Jimmie_Lunceford",
      bio: "A former Memphis high-school teacher who built his band from student players, Lunceford built one of the most disciplined and showmanlike Black big bands of the 1930s, breaking through at the Cotton Club in 1934. Sy Oliver's arrangements, with their relaxed two-beat bounce and witty section writing, gave the band a style that rivalled Ellington and Basie. Lunceford died suddenly on tour in Seaside, Oregon, in 1947.",
      records: ["Rhythm Is Our Business (1934)", "For Dancers Only (1937)", "'Tain't What You Do (1939)"],
      influences: []
    },
    {
      id: "cab-calloway", name: "Cab Calloway", nickname: "The Hi-De-Ho Man", type: "person",
      born: 1907, died: 1994, origin: "Rochester, New York, USA",
      instruments: ["vocals", "bandleader"], branch: "swing", styles: ["swing-vocal"],
      emerged: 1931, tier: 2, wiki: "Cab_Calloway",
      bio: "Fronting the former Missourians, Calloway became a Cotton Club star and a national sensation with the call-and-response scat of 'Minnie the Moocher' in 1931. Behind his zoot-suited showmanship stood a first-rate band that featured Chu Berry, Ben Webster, Milt Hinton, Cozy Cole and a young Dizzy Gillespie, and his jive vocabulary echoed through later R&B and hip-hop.",
      records: ["Minnie the Moocher (1931)", "Reefer Man (1932)", "The Jumpin' Jive (1939)"],
      influences: ["louis-armstrong", "chick-webb"]
    },
    {
      id: "artie-shaw", name: "Artie Shaw", type: "person",
      born: 1910, died: 2004, origin: "New York City, New York, USA",
      instruments: ["clarinet", "bandleader", "composer"], branch: "swing", styles: [],
      emerged: 1938, tier: 2, wiki: "Artie_Shaw",
      bio: "Goodman's great rival on clarinet, Shaw had a smoother, more lyrical tone and wider harmonic ambition, experimenting with string sections and classical forms. His 1938 'Begin the Beguine' made him a superstar, and that year he hired Billie Holiday as the first Black woman to sing full-time with a white band. Restless and disdainful of fame, he quit music for good in 1954.",
      records: ["Begin the Beguine (1938)", "Frenesi (1940)", "Concerto for Clarinet (1940)"],
      influences: []
    },
    {
      id: "glenn-miller", name: "Glenn Miller", type: "person",
      born: 1904, died: 1944, origin: "Clarinda, Iowa, USA",
      instruments: ["trombone", "arranger", "bandleader"], branch: "swing", styles: [],
      emerged: 1939, tier: 2, wiki: "Glenn_Miller",
      bio: "A trombonist and arranger who had worked for Ben Pollack, Red Nichols and the Dorsey Brothers, Miller found his signature sound — a clarinet leading the saxophone section — and became the most commercially successful bandleader of 1939–42. 'Chattanooga Choo Choo' earned the first gold record. Leading the Army Air Force Band, he disappeared over the English Channel in December 1944.",
      records: ["Moonlight Serenade (1939)", "In the Mood (1939)", "Chattanooga Choo Choo (1941)"],
      influences: ["red-nichols"]
    },
    {
      id: "tommy-dorsey", name: "Tommy Dorsey", nickname: "The Sentimental Gentleman of Swing", type: "person",
      born: 1905, died: 1956, origin: "Shenandoah, Pennsylvania, USA",
      instruments: ["trombone", "trumpet", "bandleader"], branch: "swing", styles: [],
      emerged: 1935, tier: 2, wiki: "Tommy_Dorsey",
      bio: "After apprenticeships with Jean Goldkette and Paul Whiteman and a stormy co-leadership with his brother Jimmy, Dorsey formed his own orchestra in 1935. His silken trombone ballads, swinging Sy Oliver charts and a young Frank Sinatra, who joined in 1940, made it one of the era's most popular bands, admired by musicians for its precision.",
      records: ["I'm Getting Sentimental Over You (1935)", "Marie (1937)", "I'll Never Smile Again (1940)"],
      influences: ["jean-goldkette", "paul-whiteman", "jack-teagarden"]
    },
    {
      id: "woody-herman", name: "Woody Herman", type: "person",
      born: 1913, died: 1987, origin: "Milwaukee, Wisconsin, USA",
      instruments: ["clarinet", "alto saxophone", "vocals", "bandleader"], branch: "swing", styles: ["big-band-modern"],
      emerged: 1939, tier: 2, wiki: "Woody_Herman",
      bio: "Herman rose from the remnants of Isham Jones's orchestra with 'The Band That Plays the Blues', scoring a huge hit with 'Woodchopper's Ball' in 1939. His First Herd (1944–46) fused swing with bebop energy and commissioned Stravinsky's Ebony Concerto, and the Second Herd's 'Four Brothers' saxophone sound defined late-1940s big band jazz. He led 'Herds' of young players for five decades.",
      records: ["At the Woodchopper's Ball (1939)", "Apple Honey (1945)", "Four Brothers (1947)"],
      influences: ["duke-ellington"]
    },
    {
      id: "lionel-hampton", name: "Lionel Hampton", type: "person",
      born: 1908, died: 2002, origin: "Louisville, Kentucky, USA",
      instruments: ["vibraphone", "drums", "piano", "bandleader"], branch: "swing", styles: [],
      emerged: 1936, tier: 2, wiki: "Lionel_Hampton",
      bio: "Hampton introduced the vibraphone to jazz on a 1930 Louis Armstrong session and became a star in the Benny Goodman Quartet from 1936. His own big band, launched in 1940, scored with 'Flying Home', whose honking Illinois Jacquet tenor solo helped seed rhythm and blues. Over six decades his bands trained players from Dexter Gordon to Quincy Jones.",
      records: ["Moonglow (1936)", "Flying Home (1942)", "Hamp's Boogie Woogie (1944)"],
      influences: ["louis-armstrong", "benny-goodman"]
    },
    {
      id: "teddy-wilson", name: "Teddy Wilson", type: "person",
      born: 1912, died: 1986, origin: "Austin, Texas, USA",
      instruments: ["piano"], branch: "swing", styles: ["swing-vocal"],
      emerged: 1935, tier: 2, wiki: "Teddy_Wilson",
      bio: "Wilson refined the styles of Earl Hines and Art Tatum into the most elegant, even-flowing piano of the swing era. As a member of the Benny Goodman Trio from 1935 he broke the color line in a prominent band, and the small-group sessions he led for Brunswick from 1935 produced Billie Holiday's finest early records. His style became the swing piano standard.",
      records: ["What a Little Moonlight Can Do (1935)", "Body and Soul (1935)", "Moonglow (1936)"],
      influences: ["earl-hines", "art-tatum"]
    },
    {
      id: "gene-krupa", name: "Gene Krupa", type: "person",
      born: 1909, died: 1973, origin: "Chicago, Illinois, USA",
      instruments: ["drums", "bandleader"], branch: "swing", styles: ["chicago"],
      emerged: 1935, tier: 2, wiki: "Gene_Krupa",
      bio: "A product of the 1920s Chicago scene, Krupa became jazz's first celebrity drummer with Benny Goodman, whose 'Sing, Sing, Sing' featured the first extended drum solos on a commercial record. Leaving after the 1938 Carnegie Hall concert, he led his own band with Roy Eldridge and Anita O'Day, and his showmanship made the drum kit a featured solo instrument.",
      records: ["Sing, Sing, Sing (1937)", "Drum Boogie (1941)", "Let Me Off Uptown (1941)"],
      influences: ["baby-dodds", "chick-webb"]
    },
    {
      id: "harry-james", name: "Harry James", type: "person",
      born: 1916, died: 1983, origin: "Albany, Georgia, USA",
      instruments: ["trumpet", "bandleader"], branch: "swing", styles: [],
      emerged: 1937, tier: 3, wiki: "Harry_James",
      bio: "Raised in a travelling circus, James became the brassy trumpet star of Benny Goodman's band in 1937–38, then formed his own orchestra with Goodman's backing in 1939, briefly employing a young Frank Sinatra. Adding strings and sentimental ballads such as 'You Made Me Love You' made him one of the best-selling bandleaders of the war years.",
      records: ["Ciribiribin (1939)", "You Made Me Love You (1941)", "I've Heard That Song Before (1942)"],
      influences: ["louis-armstrong", "benny-goodman"]
    },
    {
      id: "roy-eldridge", name: "Roy Eldridge", nickname: "Little Jazz", type: "person",
      born: 1911, died: 1989, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["trumpet", "vocals"], branch: "swing", styles: ["bebop"],
      emerged: 1935, tier: 2, wiki: "Roy_Eldridge",
      bio: "Modelling his trumpet lines on the saxophones of Coleman Hawkins and Benny Carter, Eldridge developed a fast, high-register, harmonically adventurous style that was the bridge between Louis Armstrong and Dizzy Gillespie. He starred with Fletcher Henderson, then with Gene Krupa and Artie Shaw, becoming one of the first Black musicians featured in white big bands.",
      records: ["Christopher Columbus (1936)", "Wabash Stomp (1937)", "Rockin' Chair (1941)"],
      influences: ["coleman-hawkins", "benny-carter", "louis-armstrong"]
    },
    {
      id: "benny-carter", name: "Benny Carter", type: "person",
      born: 1907, died: 2003, origin: "New York City, New York, USA",
      instruments: ["alto saxophone", "trumpet", "arranger", "composer"], branch: "swing", styles: ["early-bigband"],
      emerged: 1930, tier: 2, wiki: "Benny_Carter",
      bio: "With Johnny Hodges, Carter defined swing-era alto saxophone, and his arrangements for Fletcher Henderson and McKinney's Cotton Pickers helped invent the smooth, harmonized saxophone-section writing of swing. He worked as a staff arranger for the BBC dance orchestra in London in the mid-1930s, later broke color barriers as a Hollywood film composer, and performed into his nineties.",
      records: ["Symphony in Riffs (1933)", "Crazy Rhythm (1937)", "Further Definitions (1961)"],
      influences: ["fletcher-henderson", "frank-trumbauer"]
    },
    {
      id: "charlie-christian", name: "Charlie Christian", type: "person",
      born: 1916, died: 1942, origin: "Bonham, Texas, USA (raised in Oklahoma City)",
      instruments: ["electric guitar"], branch: "swing", styles: ["bebop"],
      emerged: 1939, tier: 2, wiki: "Charlie_Christian",
      bio: "Discovered in Oklahoma City by John Hammond, Christian joined Benny Goodman in 1939 and turned the amplified guitar into a horn-like solo voice, phrasing long single-note lines in the manner of Lester Young. His after-hours jams at Minton's Playhouse fed directly into early bebop. He died of tuberculosis at 25, having changed the guitar's role in jazz in under two years.",
      records: ["Flying Home (1939)", "Seven Come Eleven (1939)", "Solo Flight (1941)"],
      influences: ["lester-young"]
    },
    {
      id: "louis-jordan", name: "Louis Jordan", nickname: "King of the Jukebox", type: "person",
      born: 1908, died: 1975, origin: "Brinkley, Arkansas, USA",
      instruments: ["alto saxophone", "vocals", "bandleader"], branch: "swing", styles: [],
      emerged: 1942, tier: 2, wiki: "Louis_Jordan",
      bio: "A saxophonist and singer in Chick Webb's band, Jordan left in 1938 to form the Tympany Five, a small group that distilled big-band swing into shuffling, humorous jump blues. His 1940s string of hits, from 'Caldonia' to 'Choo Choo Ch'Boogie', topped the Black charts and crossed over to white audiences, laying the groundwork for rhythm and blues and rock and roll.",
      records: ["Is You Is or Is You Ain't My Baby (1944)", "Caldonia (1945)", "Choo Choo Ch'Boogie (1946)"],
      influences: ["chick-webb"]
    },

    // ================= SWING-ERA SINGERS =================
    {
      id: "billie-holiday", name: "Billie Holiday", nickname: "Lady Day", type: "person",
      born: 1915, died: 1959, origin: "Philadelphia, Pennsylvania, USA (raised in Baltimore)",
      instruments: ["vocals"], branch: "swing-vocal", styles: [],
      emerged: 1935, tier: 1, wiki: "Billie_Holiday",
      bio: "Taking her cues from Louis Armstrong's phrasing and Bessie Smith's blues, Holiday sang behind the beat and reshaped melodies like a horn player, turning Tin Pan Alley songs into personal statements. Her 1935–41 records with Teddy Wilson and Lester Young are cornerstones of jazz, and 'Strange Fruit' (1939), a protest against lynching, made a song a political act.",
      records: ["What a Little Moonlight Can Do (1935)", "Strange Fruit (1939)", "God Bless the Child (1941)"],
      influences: ["louis-armstrong", "bessie-smith"]
    },
    {
      id: "ella-fitzgerald", name: "Ella Fitzgerald", nickname: "The First Lady of Song", type: "person",
      born: 1917, died: 1996, origin: "Newport News, Virginia, USA",
      instruments: ["vocals"], branch: "swing-vocal", styles: ["vocal-postwar"],
      emerged: 1935, tier: 1, wiki: "Ella_Fitzgerald",
      bio: "After winning an Apollo Theater amateur night in 1934 singing in the style of Connee Boswell, Fitzgerald joined Chick Webb's band and scored a national hit with 'A-Tisket, A-Tasket'. Her flawless pitch and inventive scat singing absorbed bebop in the 1940s, and her Verve Song Book albums from 1956 became the definitive survey of the Great American Songbook.",
      records: ["A-Tisket, A-Tasket (1938)", "Ella Fitzgerald Sings the Cole Porter Song Book (1956)", "Ella in Berlin: Mack the Knife (1960)"],
      influences: ["boswell-sisters", "chick-webb"]
    },
    {
      id: "ethel-waters", name: "Ethel Waters", type: "person",
      born: 1896, died: 1977, origin: "Chester, Pennsylvania, USA",
      instruments: ["vocals"], branch: "swing-vocal", styles: ["blues"],
      emerged: 1925, tier: 2, wiki: "Ethel_Waters",
      bio: "Beginning as a blues singer in the early 1920s, Waters developed a lighter, crisply enunciated jazz style that bridged blues and Broadway and shaped the swing-era singers who followed. Her hits 'Dinah' and 'Am I Blue?' and her Cotton Club introduction of 'Stormy Weather' made her one of the highest-paid entertainers of her time, and she later starred on stage and screen.",
      records: ["Dinah (1925)", "Am I Blue? (1929)", "Stormy Weather (1933)"],
      influences: []
    },
    {
      id: "mildred-bailey", name: "Mildred Bailey", nickname: "The Rockin' Chair Lady", type: "person",
      born: 1907, died: 1951, origin: "Tekoa, Washington, USA",
      instruments: ["vocals"], branch: "swing-vocal", styles: [],
      emerged: 1929, tier: 3, wiki: "Mildred_Bailey",
      bio: "Of Coeur d'Alene descent on her mother's side and raised in the Pacific Northwest, Bailey joined Paul Whiteman's orchestra in 1929, becoming one of the first women to sing regularly with a major dance band. Her light, swinging voice and relaxed phrasing made Hoagy Carmichael's 'Rockin' Chair' her signature, and with husband Red Norvo she formed the celebrated 'Mr. and Mrs. Swing' partnership in the late 1930s.",
      records: ["Rockin' Chair (1932)", "Please Be Kind (1938)", "Darn That Dream (1939)"],
      influences: ["paul-whiteman"]
    },
    {
      id: "nat-king-cole", name: "Nat King Cole", type: "person",
      born: 1919, died: 1965, origin: "Montgomery, Alabama, USA (raised in Chicago)",
      instruments: ["piano", "vocals"], branch: "swing-vocal", styles: ["vocal-postwar"],
      emerged: 1940, tier: 2, wiki: "Nat_King_Cole",
      bio: "Before he became one of America's best-loved pop baritones, Cole was a brilliant, Earl Hines-inspired pianist whose drumless King Cole Trio of piano, guitar and bass set the model for small jazz groups of the 1940s. Hits such as 'Straighten Up and Fly Right' led to a solo career, and in 1956 he became the first Black American to host a national network TV series.",
      records: ["Sweet Lorraine (1940)", "Straighten Up and Fly Right (1943)", "The Christmas Song (1946)"],
      influences: ["earl-hines"]
    },
    {
      id: "anita-oday", name: "Anita O'Day", type: "person",
      born: 1919, died: 2006, origin: "Kansas City, Missouri, USA (raised in Chicago)",
      instruments: ["vocals"], branch: "swing-vocal", styles: ["vocal-postwar", "cool"],
      emerged: 1941, tier: 3, wiki: "Anita_O'Day",
      bio: "Rejecting the decorative 'girl singer' role, O'Day joined Gene Krupa's band in 1941 as a hip, rhythmically daring jazz vocalist, and her 'Let Me Off Uptown' duet with Roy Eldridge was a hit. After a stint with Stan Kenton she became a key cool-era singer on Verve, and her 1958 Newport performance, filmed for Jazz on a Summer's Day, became iconic.",
      records: ["Let Me Off Uptown (1941)", "And Her Tears Flowed Like Wine (1944)", "Anita Sings the Most (1957)"],
      influences: ["mildred-bailey", "billie-holiday", "gene-krupa"]
    },
    {
      id: "peggy-lee", name: "Peggy Lee", type: "person",
      born: 1920, died: 2002, origin: "Jamestown, North Dakota, USA",
      instruments: ["vocals", "songwriter"], branch: "swing-vocal", styles: ["vocal-postwar"],
      emerged: 1942, tier: 2, wiki: "Peggy_Lee",
      bio: "Hired by Benny Goodman in 1941, Lee scored her first major hit with the bluesy 'Why Don't You Do Right?' and went on to a six-decade career, largely on Capitol. Learning from Billie Holiday and Maxine Sullivan, she perfected an intimate, understated delivery that could make a whisper swing, as on her 1958 'Fever', and she co-wrote songs for Disney's Lady and the Tramp.",
      records: ["Why Don't You Do Right? (1942)", "Mañana (1948)", "Fever (1958)"],
      influences: ["benny-goodman", "billie-holiday"]
    },
    {
      id: "boswell-sisters", name: "The Boswell Sisters", type: "band",
      active: [1925, 1936], origin: "New Orleans, Louisiana, USA",
      instruments: ["vocals"], branch: "swing-vocal", styles: [],
      emerged: 1931, tier: 2, wiki: "The_Boswell_Sisters",
      bio: "Martha, Connee and Vet Boswell grew up in New Orleans and turned close-harmony singing into jazz, with Connee's arrangements full of tempo shifts, scat and instrumental effects. Their 1931–35 Brunswick records with Dorsey Brothers, Bunny Berigan and Joe Venuti sidemen brought hot jazz to national radio, and Connee's style was the model for the young Ella Fitzgerald.",
      records: ["Heebie Jeebies (1931)", "Shout, Sister, Shout (1931)", "The Object of My Affection (1935)"],
      influences: [],
      members: []
    },

    // ================= GYPSY JAZZ =================
    {
      id: "django-reinhardt", name: "Django Reinhardt", type: "person",
      born: 1910, died: 1953, origin: "Liberchies, Belgium (raised near Paris)",
      instruments: ["guitar", "composer"], branch: "gypsy-jazz", styles: [],
      emerged: 1934, tier: 1, wiki: "Django_Reinhardt",
      bio: "A Manouche Romani guitarist whose fretting hand was badly burned in a 1928 caravan fire, Reinhardt rebuilt his technique around two fingers and became the first European jazz musician of world rank and lasting influence. With Stéphane Grappelli he founded the Quintette du Hot Club de France in 1934, and compositions such as 'Nuages' and 'Minor Swing' founded the gypsy jazz tradition.",
      records: ["Dinah (1934)", "Minor Swing (1937)", "Nuages (1940)"],
      influences: ["louis-armstrong"]
    },
    {
      id: "stephane-grappelli", name: "Stéphane Grappelli", type: "person",
      born: 1908, died: 1997, origin: "Paris, France",
      instruments: ["violin", "piano"], branch: "gypsy-jazz", styles: [],
      emerged: 1934, tier: 2, wiki: "Stéphane_Grappelli",
      bio: "Largely self-taught, Grappelli became the most elegant violinist in jazz, his lyrical, swinging lines the perfect foil for Django Reinhardt in the Quintette du Hot Club de France. Stranded in London when war broke out in 1939, he later rebuilt his career, and from the 1970s he enjoyed a remarkable late flowering, recording with Yehudi Menuhin, Oscar Peterson and Gary Burton.",
      records: ["Dinah (1934)", "Minor Swing (1937)", "Jealousy (with Yehudi Menuhin, 1973)"],
      influences: []
    },
    {
      id: "quintette-du-hot-club-de-france", name: "Quintette du Hot Club de France", type: "band",
      active: [1934, 1948], origin: "Paris, France",
      instruments: ["guitar", "violin", "double bass"], branch: "gypsy-jazz", styles: [],
      emerged: 1934, tier: 2, wiki: "Quintette_du_Hot_Club_de_France",
      bio: "Born from backstage jams at the Hôtel Claridge in 1934 and sponsored by Charles Delaunay's Hot Club de France, the Quintette paired Reinhardt's guitar and Grappelli's violin with two rhythm guitars and bass and no drums. One of the first significant jazz groups in Europe, it created the gypsy jazz sound; Reinhardt led later versions with clarinet in place of violin until 1948.",
      records: ["Dinah (1934)", "Minor Swing (1937)", "Nuages (1940)"],
      influences: [],
      members: ["django-reinhardt", "stephane-grappelli"]
    },
    {
      id: "bireli-lagrene", name: "Biréli Lagrène", type: "person",
      born: 1966, died: null, origin: "Soufflenheim, Alsace, France",
      instruments: ["guitar", "bass guitar"], branch: "gypsy-jazz", styles: ["fusion"],
      emerged: 1980, tier: 3, wiki: "Biréli_Lagrène",
      bio: "Born into a Sinti family in Alsace, Lagrène was a child prodigy who recorded his Django-inspired debut, Routes to Django, at 13. He then broadened into fusion, touring with Jaco Pastorius in the mid-1980s and working with Larry Coryell and Stanley Clarke, before returning to his roots with the Gipsy Project in 2001. He remains one of the most versatile virtuosos in jazz guitar.",
      records: ["Routes to Django (1980)", "Standards (1992)", "Gipsy Project (2001)"],
      influences: ["django-reinhardt"]
    },
    {
      id: "stochelo-rosenberg", name: "Stochelo Rosenberg", type: "person",
      born: 1968, died: null, origin: "Helmond, Netherlands",
      instruments: ["guitar"], branch: "gypsy-jazz", styles: [],
      emerged: 1989, tier: 3, wiki: "Stochelo_Rosenberg",
      bio: "A Dutch Sinti guitarist renowned for a clean, blazing technique, Rosenberg formed the Rosenberg Trio with his cousins Nous'che and Nonnie in 1989, debuting at the Django Reinhardt festival in Samois. The trio toured and recorded with Stéphane Grappelli in the 1990s and became the leading ambassadors of the modern Django style; he later founded the online Rosenberg Academy.",
      records: ["Seresta (1990)", "Caravan (1994)", "Django (2017)"],
      influences: ["django-reinhardt", "stephane-grappelli"]
    },

    // ================= KANSAS CITY =================
    {
      id: "bennie-moten", name: "Bennie Moten", type: "person",
      born: 1894, died: 1935, origin: "Kansas City, Missouri, USA",
      instruments: ["piano", "bandleader"], branch: "kansas-city", styles: [],
      emerged: 1923, tier: 2, wiki: "Bennie_Moten",
      bio: "Moten built Kansas City's leading band, recording from 1923 in a ragtime-rooted stomp style. In 1929–31 he absorbed the stars of Walter Page's Blue Devils — Count Basie, Jimmy Rushing, Hot Lips Page and Page himself — and his December 1932 session, including 'Moten Swing', is a milestone of four-beat swing. After his sudden death in 1935, Basie inherited the core of the band.",
      records: ["South (1928)", "Toby (1932)", "Moten Swing (1932)"],
      influences: ["fletcher-henderson"]
    },
    {
      id: "count-basie", name: "Count Basie", type: "person",
      born: 1904, died: 1984, origin: "Red Bank, New Jersey, USA",
      instruments: ["piano", "organ", "bandleader"], branch: "kansas-city", styles: ["swing"],
      emerged: 1935, tier: 1, wiki: "Count_Basie",
      bio: "A Harlem stride pianist who learned organ from Fats Waller, Basie was stranded in the Midwest, joined the Blue Devils and Bennie Moten, and in 1935 formed his own band at Kansas City's Reno Club. Its riff-based blues, light 'All-American Rhythm Section' and soloists like Lester Young conquered New York from 1937, and Basie's spare piano and buoyant swing defined big band style for five decades.",
      records: ["One O'Clock Jump (1937)", "Jumpin' at the Woodside (1938)", "April in Paris (1955)"],
      influences: ["fats-waller", "bennie-moten", "walter-page"]
    },
    {
      id: "lester-young", name: "Lester Young", nickname: "Pres", type: "person",
      born: 1909, died: 1959, origin: "Woodville, Mississippi, USA",
      instruments: ["tenor saxophone", "clarinet"], branch: "kansas-city", styles: ["swing"],
      emerged: 1936, tier: 1, wiki: "Lester_Young",
      bio: "Inspired by Frankie Trumbauer's C-melody saxophone, Young played the tenor with a light, airy tone and long, floating melodic lines — a radical alternative to Coleman Hawkins's dominant style. His solos with Count Basie from 1936 and his intimate recordings with Billie Holiday, who named him 'Pres', influenced Charlie Parker and laid the foundation for cool jazz.",
      records: ["Lady Be Good (1936)", "This Year's Kisses (1937)", "Lester Leaps In (1939)"],
      influences: ["frank-trumbauer", "louis-armstrong", "bix-beiderbecke", "walter-page"]
    },
    {
      id: "jo-jones", name: "Jo Jones", nickname: "Papa Jo", type: "person",
      born: 1911, died: 1985, origin: "Chicago, Illinois, USA (raised in Alabama)",
      instruments: ["drums"], branch: "kansas-city", styles: ["swing"],
      emerged: 1936, tier: 2, wiki: "Jo_Jones",
      bio: "After the Blue Devils, Jones anchored Count Basie's 'All-American Rhythm Section' from 1934 to 1948. By moving the beat from the bass drum to the hi-hat cymbal and playing with feather-light evenness, he created a flowing four-beat pulse that freed soloists and pointed straight to bebop's ride-cymbal timekeeping. Kenny Clarke, Max Roach and Roy Haynes all built on his innovations.",
      records: ["Lady Be Good (1936)", "Swingin' the Blues (1938)", "The Jo Jones Special (1955)"],
      influences: ["walter-page"]
    },
    {
      id: "walter-page", name: "Walter Page", nickname: "Big 'Un", type: "person",
      born: 1900, died: 1957, origin: "Gallatin, Missouri, USA",
      instruments: ["double bass", "tuba", "baritone saxophone", "bandleader"], branch: "kansas-city", styles: [],
      emerged: 1925, tier: 2, wiki: "Walter_Page",
      bio: "Page led the Oklahoma City Blue Devils, the territory band that nurtured Count Basie, Jimmy Rushing, Hot Lips Page and Lester Young, before joining Bennie Moten and then Basie's orchestra. More than any other bassist, he popularized the 'walking bass' line on all four beats, the foundation of the Basie rhythm section and of swing and modern jazz rhythm.",
      records: ["Blue Devil Blues (1929)", "Moten Swing (1932)", "One O'Clock Jump (1937)"],
      influences: ["bennie-moten"]
    },
    {
      id: "freddie-green", name: "Freddie Green", nickname: "Mr. Rhythm", type: "person",
      born: 1911, died: 1987, origin: "Charleston, South Carolina, USA",
      instruments: ["guitar"], branch: "kansas-city", styles: ["swing"],
      emerged: 1937, tier: 3, wiki: "Freddie_Green",
      bio: "Recommended to Count Basie by John Hammond, Green joined the band in 1937 and stayed for almost fifty years, completing the 'All-American Rhythm Section'. He rarely soloed; his unamplified acoustic guitar chopped out four even chords to the bar that blended with the drums and bass. The 'Freddie Green style' remains the model for big band rhythm guitar.",
      records: ["Swingin' the Blues (1938)", "Corner Pocket (1955)", "Mr. Rhythm (1955)"],
      influences: ["count-basie"]
    },
    {
      id: "jimmy-rushing", name: "Jimmy Rushing", nickname: "Mr. Five by Five", type: "person",
      born: 1901, died: 1972, origin: "Oklahoma City, Oklahoma, USA",
      instruments: ["vocals", "piano"], branch: "kansas-city", styles: ["blues"],
      emerged: 1929, tier: 2, wiki: "Jimmy_Rushing",
      bio: "A blues shouter with a high, ringing tenor that could ride over a full big band, Rushing sang with the Blue Devils and Bennie Moten before becoming Count Basie's featured vocalist from 1935 to 1948. His versions of 'Sent for You Yesterday' and 'Going to Chicago' defined Kansas City blues singing and anticipated post-war rhythm and blues.",
      records: ["Good Morning Blues (1937)", "Sent for You Yesterday (1938)", "Going to Chicago Blues (1941)"],
      influences: ["walter-page", "bennie-moten"]
    },
    {
      id: "big-joe-turner", name: "Big Joe Turner", nickname: "The Boss of the Blues", type: "person",
      born: 1911, died: 1985, origin: "Kansas City, Missouri, USA",
      instruments: ["vocals"], branch: "kansas-city", styles: ["blues"],
      emerged: 1938, tier: 2, wiki: "Big_Joe_Turner",
      bio: "A singing bartender in Kansas City clubs, Turner shouted the blues over Pete Johnson's boogie-woogie piano; their appearance at John Hammond's 'From Spirituals to Swing' concert at Carnegie Hall in 1938 and 'Roll 'Em Pete' helped launch the boogie-woogie craze. In the 1950s his 'Shake, Rattle and Roll' made him a founding figure of rock and roll.",
      records: ["Roll 'Em Pete (1938)", "Piney Brown Blues (1940)", "Shake, Rattle and Roll (1954)"],
      influences: ["pete-johnson"]
    },
    {
      id: "pete-johnson", name: "Pete Johnson", type: "person",
      born: 1904, died: 1967, origin: "Kansas City, Missouri, USA",
      instruments: ["piano"], branch: "kansas-city", styles: ["blues"],
      emerged: 1938, tier: 3, wiki: "Pete_Johnson_(musician)",
      bio: "Kansas City's great boogie-woogie pianist, Johnson accompanied Big Joe Turner in Kansas City clubs such as the Sunset for years before the pair stormed Carnegie Hall at 'From Spirituals to Swing' in 1938. With Albert Ammons and Meade Lux Lewis he formed the Boogie Woogie Trio that fueled the style's national vogue, and his rolling left hand helped shape jump blues and early rock and roll.",
      records: ["Roll 'Em Pete (1938)", "Boogie Woogie Prayer (1938)", "Piney Brown Blues (1940)"],
      influences: []
    },
    {
      id: "mary-lou-williams", name: "Mary Lou Williams", type: "person",
      born: 1910, died: 1981, origin: "Atlanta, Georgia, USA (raised in Pittsburgh)",
      instruments: ["piano", "arranger", "composer"], branch: "kansas-city", styles: ["swing", "bebop"],
      emerged: 1929, tier: 2, wiki: "Mary_Lou_Williams",
      bio: "Pianist, arranger and composer for Andy Kirk's Clouds of Joy, Williams shaped the Kansas City sound with pieces like 'Froggy Bottom' and 'Walkin' and Swingin'' and wrote for Benny Goodman and Duke Ellington. In 1940s Harlem she mentored Thelonious Monk, Bud Powell and Dizzy Gillespie, and she later created extended and sacred works, including the Zodiac Suite and Mary Lou's Mass.",
      records: ["Walkin' and Swingin' (1936)", "Roll 'Em (1937)", "Zodiac Suite (1945)"],
      influences: ["andy-kirk"]
    },
    {
      id: "andy-kirk", name: "Andy Kirk", type: "person",
      born: 1898, died: 1992, origin: "Newport, Kentucky, USA (raised in Denver)",
      instruments: ["tuba", "bass saxophone", "bandleader"], branch: "kansas-city", styles: ["swing"],
      emerged: 1929, tier: 3, wiki: "Andy_Kirk_(musician)",
      bio: "Elected leader of Terrence Holder's Dark Clouds of Joy in 1929, Kirk moved the band to Kansas City as the Twelve Clouds of Joy, where Mary Lou Williams's arrangements made it one of the city's finest. Ballad hits with singer Pha Terrell brought national success, and 'Take It and Git' became the first number one on the Harlem Hit Parade in 1942.",
      records: ["Until the Real Thing Comes Along (1936)", "Walkin' and Swingin' (1936)", "Take It and Git (1942)"],
      influences: []
    },
    {
      id: "jay-mcshann", name: "Jay McShann", nickname: "Hootie", type: "person",
      born: 1916, died: 2006, origin: "Muskogee, Oklahoma, USA",
      instruments: ["piano", "vocals", "bandleader"], branch: "kansas-city", styles: ["blues"],
      emerged: 1940, tier: 2, wiki: "Jay_McShann",
      bio: "A self-taught pianist raised on Earl Hines's radio broadcasts, McShann led the last great Kansas City band, steeped in blues and boogie-woogie. Its 1940–42 recordings, including 'Confessin' the Blues' with singer Walter Brown, gave the world its first hearing of the young Charlie Parker, and McShann kept performing Kansas City blues for six more decades.",
      records: ["Confessin' the Blues (1941)", "Hootie Blues (1941)", "Swingmatism (1941)"],
      influences: ["earl-hines"]
    },
    {
      id: "buck-clayton", name: "Buck Clayton", type: "person",
      born: 1911, died: 1991, origin: "Parsons, Kansas, USA",
      instruments: ["trumpet", "arranger"], branch: "kansas-city", styles: ["swing"],
      emerged: 1936, tier: 3, wiki: "Buck_Clayton",
      bio: "After leading a band in Shanghai in the mid-1930s, Clayton joined Count Basie in 1936 and became its lyrical, muted trumpet voice, also accompanying Billie Holiday on classic sides. An Armstrong disciple with a warm, economical style, he later led celebrated Columbia jam session records in the 1950s and became a prolific arranger for mainstream swing.",
      records: ["Dickie's Dream (1939)", "Taxi War Dance (1939)", "The Huckle-Buck and Robbins' Nest (1953)"],
      influences: ["louis-armstrong", "count-basie"]
    },
    {
      id: "hot-lips-page", name: "Hot Lips Page", type: "person",
      born: 1908, died: 1954, origin: "Dallas, Texas, USA",
      instruments: ["trumpet", "vocals"], branch: "kansas-city", styles: ["swing", "blues"],
      emerged: 1932, tier: 3, wiki: "Hot_Lips_Page",
      bio: "Oran 'Hot Lips' Page was the star trumpeter and blues singer of the Blue Devils and Bennie Moten's band, and a fixture at Basie's Reno Club shows. His Armstrong-derived power and blues feeling made him a jam session legend; he starred with Artie Shaw in 1941 and later recorded the hit 'Baby, It's Cold Outside' with Pearl Bailey.",
      records: ["Toby (1932)", "St. James Infirmary (1941)", "Baby, It's Cold Outside (1949)"],
      influences: ["louis-armstrong", "walter-page", "bennie-moten"]
    },

    // ================= ELLINGTONIA =================
    {
      id: "duke-ellington", name: "Duke Ellington", type: "person",
      born: 1899, died: 1974, origin: "Washington, D.C., USA",
      instruments: ["piano", "composer", "bandleader"], branch: "ellington", styles: ["swing"],
      emerged: 1927, tier: 1, wiki: "Duke_Ellington",
      bio: "A stride-trained pianist, Ellington became jazz's greatest composer by writing for the individual sounds of his musicians. The 'jungle' style of his 1927–31 Cotton Club years, masterpieces like 'Ko-Ko' (1940) and suites such as Black, Brown and Beige made the orchestra his instrument for nearly fifty years, and his 1956 Newport triumph renewed his fame. He wrote or co-wrote well over a thousand pieces.",
      records: ["Black and Tan Fantasy (1927)", "Mood Indigo (1930)", "Ko-Ko (1940)"],
      influences: ["james-p-johnson", "willie-the-lion-smith", "bubber-miley"]
    },
    {
      id: "billy-strayhorn", name: "Billy Strayhorn", nickname: "Swee' Pea", type: "person",
      born: 1915, died: 1967, origin: "Dayton, Ohio, USA (raised in Pittsburgh)",
      instruments: ["piano", "composer", "arranger"], branch: "ellington", styles: [],
      emerged: 1939, tier: 2, wiki: "Billy_Strayhorn",
      bio: "Strayhorn met Ellington in Pittsburgh in December 1938 and spent nearly three decades as his composing and arranging partner, so closely that their work is often hard to separate. He wrote the band's theme 'Take the 'A' Train', 'Chelsea Bridge' and the sophisticated ballad 'Lush Life', and co-wrote suites such as Such Sweet Thunder and The Far East Suite.",
      records: ["Take the 'A' Train (1941)", "Chelsea Bridge (1941)", "The Peaceful Side (1961)"],
      influences: ["duke-ellington"]
    },
    {
      id: "johnny-hodges", name: "Johnny Hodges", nickname: "Rabbit", type: "person",
      born: 1907, died: 1970, origin: "Cambridge, Massachusetts, USA",
      instruments: ["alto saxophone", "soprano saxophone"], branch: "ellington", styles: ["swing"],
      emerged: 1928, tier: 2, wiki: "Johnny_Hodges",
      bio: "Taught by Sidney Bechet, Hodges joined Ellington in 1928 and, apart from 1951–55, stayed until his death. His voluptuous tone, slow glissandi and blues authority made him the orchestra's signature soloist and one of the defining alto saxophonists before Charlie Parker; Ellington and Strayhorn wrote pieces like 'Passion Flower' expressly for his sound.",
      records: ["Jeep's Blues (1938)", "Passion Flower (1941)", "Back to Back (1959)"],
      influences: ["sidney-bechet"]
    },
    {
      id: "cootie-williams", name: "Cootie Williams", type: "person",
      born: 1911, died: 1985, origin: "Mobile, Alabama, USA",
      instruments: ["trumpet"], branch: "ellington", styles: ["swing"],
      emerged: 1929, tier: 3, wiki: "Cootie_Williams",
      bio: "Replacing Bubber Miley in 1929, Williams mastered the plunger-mute 'jungle' growl while also playing with a broad, open Armstrong-like tone. Ellington built 'Echoes of Harlem' and 'Concerto for Cootie' around him. His 1940 defection to Benny Goodman was national news; he later led a big band that recorded Monk's ''Round Midnight' first and returned to Ellington in 1962.",
      records: ["Echoes of Harlem (1936)", "Concerto for Cootie (1940)", "'Round Midnight (1944)"],
      influences: ["bubber-miley", "louis-armstrong"]
    },
    {
      id: "ben-webster", name: "Ben Webster", nickname: "The Brute", type: "person",
      born: 1909, died: 1973, origin: "Kansas City, Missouri, USA",
      instruments: ["tenor saxophone"], branch: "ellington", styles: ["swing", "kansas-city"],
      emerged: 1940, tier: 2, wiki: "Ben_Webster",
      bio: "Webster learned blues piano from Pete Johnson and moved through the bands of Bennie Moten, Andy Kirk, Fletcher Henderson and Cab Calloway before becoming Ellington's first major tenor soloist in 1940, his 'Cotton Tail' solo an instant classic. With Coleman Hawkins and Lester Young he is one of swing's three great tenors, famed for a breathy, tender ballad tone. He spent his last years in Europe.",
      records: ["Cotton Tail (1940)", "All Too Soon (1940)", "Soulville (1957)"],
      influences: ["coleman-hawkins", "johnny-hodges", "pete-johnson"]
    },
    {
      id: "jimmy-blanton", name: "Jimmy Blanton", type: "person",
      born: 1918, died: 1942, origin: "Chattanooga, Tennessee, USA",
      instruments: ["double bass"], branch: "ellington", styles: ["bebop"],
      emerged: 1939, tier: 2, wiki: "Jimmy_Blanton",
      bio: "Hired by Ellington in St. Louis in 1939 at age 21, Blanton revolutionized jazz bass in barely two years, playing melodic, horn-like pizzicato and bowed solos with a huge tone and perfect time. His duets with Ellington were the first commercially recorded piano-bass duets, and his propulsion powered the 1940–41 'Blanton-Webster band'. He died of tuberculosis at 23.",
      records: ["Jack the Bear (1940)", "Pitter Panther Patter (1940)", "Ko-Ko (1940)"],
      influences: ["duke-ellington"]
    },
    {
      id: "harry-carney", name: "Harry Carney", type: "person",
      born: 1910, died: 1974, origin: "Boston, Massachusetts, USA",
      instruments: ["baritone saxophone", "bass clarinet", "clarinet"], branch: "ellington", styles: [],
      emerged: 1927, tier: 3, wiki: "Harry_Carney",
      bio: "Joining Ellington at 17 in 1927, Carney stayed for 47 years, longer than any other member, and established the baritone saxophone as a jazz solo voice. His rich, sonorous tone anchored the reed section and gave the orchestra its distinctive bottom; he was also an early jazz exponent of circular breathing. He died four months after Ellington.",
      records: ["Rockin' in Rhythm (1930)", "Sophisticated Lady (1933)", "Ellington at Newport (1956)"],
      influences: ["coleman-hawkins", "sidney-bechet"]
    },
    {
      id: "bubber-miley", name: "Bubber Miley", type: "person",
      born: 1903, died: 1932, origin: "Aiken, South Carolina, USA (raised in New York)",
      instruments: ["trumpet", "cornet", "composer"], branch: "ellington", styles: ["early-bigband"],
      emerged: 1924, tier: 2, wiki: "Bubber_Miley",
      bio: "Inspired by King Oliver's mutes, Miley combined the plunger and a growl into a vocal, wailing trumpet sound that gave Ellington's early band its 'jungle' identity. He co-composed and starred on 'East St. Louis Toodle-Oo', 'Black and Tan Fantasy' and 'Creole Love Call', but alcoholism ended his Ellington tenure in 1929 and he died of tuberculosis at 29.",
      records: ["East St. Louis Toodle-Oo (1926)", "Black and Tan Fantasy (1927)", "Creole Love Call (1927)"],
      influences: ["king-oliver"]
    },
    {
      id: "paul-gonsalves", name: "Paul Gonsalves", type: "person",
      born: 1920, died: 1974, origin: "Brockton, Massachusetts, USA",
      instruments: ["tenor saxophone"], branch: "ellington", styles: [],
      emerged: 1956, tier: 3, wiki: "Paul_Gonsalves",
      bio: "A Cape Verdean-American tenor saxophonist who came from Count Basie's and Dizzy Gillespie's bands, Gonsalves joined Ellington in 1950. At the 1956 Newport Jazz Festival his 27-chorus solo on 'Diminuendo and Crescendo in Blue' set the crowd into an uproar and revived Ellington's career. A breathy, Webster-rooted balladeer as well, he died ten days before Ellington.",
      records: ["Diminuendo and Crescendo in Blue (1956)", "Cookin' (1957)", "Gettin' Together! (1960)"],
      influences: ["ben-webster", "count-basie"]
    },
    {
      id: "barney-bigard", name: "Barney Bigard", type: "person",
      born: 1906, died: 1980, origin: "New Orleans, Louisiana, USA",
      instruments: ["clarinet", "tenor saxophone"], branch: "ellington", styles: ["new-orleans"],
      emerged: 1927, tier: 3, wiki: "Barney_Bigard",
      bio: "A Creole clarinetist trained by Lorenzo Tio Jr., Bigard played with King Oliver before joining Ellington in December 1927 for fifteen years. His liquid, woody tone and swooping New Orleans runs gave the orchestra a key color, and he co-wrote 'Mood Indigo'. He later toured with Louis Armstrong's All Stars.",
      records: ["Mood Indigo (1930)", "Clarinet Lament (1936)", "C Jam Blues (1942)"],
      influences: ["lorenzo-tio-jr", "king-oliver"]
    },
    {
      id: "ivie-anderson", name: "Ivie Anderson", type: "person",
      born: 1905, died: 1949, origin: "Gilroy, California, USA",
      instruments: ["vocals"], branch: "ellington", styles: ["swing-vocal"],
      emerged: 1931, tier: 3, wiki: "Ivie_Anderson",
      bio: "After a stint with Earl Hines at Chicago's Grand Terrace, Anderson became Ellington's first full-time vocalist in 1931 and stayed until 1942. Her crisp, swinging delivery introduced 'It Don't Mean a Thing (If It Ain't Got That Swing)' on record in 1932 and graced 'I Got It Bad (and That Ain't Good)'. Chronic asthma forced her to leave the band in 1942.",
      records: ["It Don't Mean a Thing (If It Ain't Got That Swing) (1932)", "Stormy Weather (1933)", "I Got It Bad (and That Ain't Good) (1941)"],
      influences: ["earl-hines"]
    }
  ]
});
