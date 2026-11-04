/* Labels & Locals — New York: city chapter, 25 clubs, ballrooms, lofts and institutions, and the essay “The Room”. */
LABELS.add({
  cities: [
    {
      id: "new-york",
      lead: "No city has housed more of jazz’s history, and none has moved it around so often: uptown to Harlem’s cabarets and ballrooms, midtown to the brownstone basements of 52nd Street, downtown to the Village, the Bowery and the lofts, and finally into nonprofit rooms, institutions and subscription streams.",
      story: [
        "In the 1920s New York jazz meant Harlem. Rent parties in tenement apartments, where stride pianists such as James P. Johnson, Willie “The Lion” Smith and Fats Waller held cutting contests, helped tenants pay their landlords [1]. Bootleggers paid for the cabarets: the Cotton Club and Connie’s Inn presented Black performers to white-only audiences, while Ed Smalls’s Smalls Paradise admitted Harlem residents and the Savoy Ballroom kept an open dance floor on Lenox Avenue [2][3][4]. E. Simms Campbell’s 1932 cartoon map of Harlem nightlife joked that it left out the speakeasies, since there were “about 500 of them” [5]. Repeal in 1933, the Depression and the Harlem riot of 1935 drained the white trade uptown; in 1936 the Cotton Club itself moved to Broadway [2].",
        "After Repeal the music moved into the basements of brownstones on West 52nd Street, between Fifth and Seventh Avenues, close to the radio studios and Broadway theaters where musicians worked early in the evening [6][7]. In the early 1940s bebop was worked out at after-hours sessions in Harlem, at Minton’s and Monroe’s, then sold to a paying public on 52nd Street and in the Broadway rooms that followed, the Royal Roost and Birdland [8]. Policing followed the music. From about 1940 to 1967 anyone working in a New York nightclub needed a police-issued cabaret card, and a drug conviction could cost a musician the right to play the city’s clubs for years, as it did for Billie Holiday and Thelonious Monk [9][10].",
        "By the late 1950s the center had moved downtown, to Greenwich Village and the cheaper streets east of it: the Village Vanguard turned to jazz full-time, the Five Spot opened on the Bowery after the Third Avenue El came down, and Slugs’ opened deep in the East Village [11][12][13]. In the 1970s musicians shut out of the clubs presented their own concerts in SoHo and NoHo lofts, until rising rents ended most of them [14][15]. Since the 1980s the city’s rooms have divided among tourist-friendly brands, musician-run basements such as Smalls, nonprofits, and an institution, Jazz at Lincoln Center, which opened its own club in 2004. Rent remains the constant: it helped close Smalls in 2003 and the Knitting Factory’s Brooklyn room in 2022 [16][17][18]."
      ],
      sources: [
        { cite: "“Rent party,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Rent_party" },
        { cite: "“Cotton Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Cotton_Club" },
        { cite: "“Smalls Paradise,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Paradise" },
        { cite: "“Savoy Ballroom,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Savoy_Ballroom" },
        { cite: "E. Simms Campbell, “A Night-Club Map of Harlem” (Dell Publishing, 1932), Library of Congress; text quoted from the Wikimedia Commons description.", url: "https://commons.wikimedia.org/wiki/File:A_night-club_map_of_Harlem_LOC_2016585261.jpg" },
        { cite: "“52nd Street (Manhattan),” Wikipedia.", url: "https://en.wikipedia.org/wiki/52nd_Street_(Manhattan)" },
        { cite: "Arnold Shaw, 52nd Street: The Street of Jazz (New York: Da Capo, 1977; first published as The Street That Never Slept, 1971).", url: "" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (Berkeley: University of California Press, 1997).", url: "" },
        { cite: "“New York City Cabaret Card,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Cabaret_card" },
        { cite: "NPR, “The Law Police Used To Discriminate Against Musicians Of Color” (Jazz Night in America), June 3, 2020.", url: "https://www.witf.org/2020/06/03/the-law-police-used-to-discriminate-against-musicians-of-color/" },
        { cite: "“Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Village_Vanguard" },
        { cite: "“Five Spot Café,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Five_Spot_Caf%C3%A9" },
        { cite: "“Slugs’ Saloon,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Slugs%27_Saloon" },
        { cite: "“Loft jazz,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Loft_jazz" },
        { cite: "Michael C. Heller, Loft Jazz: Improvising New York in the 1970s (Oakland: University of California Press, 2017).", url: "" },
        { cite: "“Smalls Jazz Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Jazz_Club" },
        { cite: "“Knitting Factory,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Knitting_Factory" },
        { cite: "“Jazz at Lincoln Center,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Jazz_at_Lincoln_Center" }
      ]
    }
  ],

  clubs: [
    // ───────────────────────── Harlem ─────────────────────────
    {
      id: "cotton-club",
      name: "Cotton Club",
      aka: "",
      city: "new-york",
      place: "Lenox Avenue at 142nd Street, Harlem (1923–1936); Broadway at 48th Street (1936–1940)",
      kind: "cabaret",
      opened: 1923, closed: 1940,
      periods: null,
      closedNote: "Moved from Harlem to Broadway and 48th Street in 1936; closed 1940. Later clubs using the name, including one on West 125th Street from 1978, were unrelated businesses.",
      people: [
        { name: "Owney Madden", role: "bootlegger and gangster who took over the room in 1923" },
        { name: "Herman Stark", role: "stage manager, later in charge of the club" },
        { name: "Duke Ellington", role: "house bandleader, December 1927–1931", artistId: "duke-ellington" },
        { name: "Cab Calloway", role: "house bandleader from 1931", artistId: "cab-calloway" },
        { name: "Jimmie Lunceford", role: "house bandleader from 1934", artistId: "jimmie-lunceford" }
      ],
      lead: "Harlem’s most famous nightclub was a gangster’s showroom where Black entertainers performed for white audiences only. It was also where Duke Ellington, broadcasting from the bandstand, turned a dance band into an orchestra.",
      story: [
        "The club opened in 1923 in the upstairs room at Lenox Avenue and 142nd Street where the boxer Jack Johnson had run the Club Deluxe; the bootlegger Owney Madden took it over after his release from Sing Sing and used it, in effect, as an outlet for his beer [1][4]. Its revues, staged twice a year with songs by writers such as Dorothy Fields, Jimmy McHugh, Harold Arlen and Ted Koehler, used plantation and “jungle” décor for a whites-only audience, with rare exceptions for Black celebrities. The chorus line had a color line of its own: dancers had to be tall, young and light-skinned [1][2]. A two-dollar weekday minimum kept it expensive. Langston Hughes called it “a Jim Crow club for gangsters and monied whites” [1][3].",
        "Duke Ellington’s orchestra was the house band from December 4, 1927, until 1931, and the job transformed it. The shows demanded overtures, dance numbers, accompaniments and growling “jungle” effects, a freedom to experiment that touring bands rarely had, and radio broadcasts from the club, carried nationally over NBC from September 1929, made Ellington famous far beyond Harlem [1][5]. Cab Calloway’s band followed in 1931, then Jimmie Lunceford’s in 1934. The club eased its door policy somewhat in the mid-1930s, but after the Harlem riot of 1935 it moved to Broadway and 48th Street in 1936 [1]. It closed there in 1940, squeezed by higher rents, changing tastes and a federal investigation into the taxes of Manhattan nightclub owners [1][2]."
      ],
      moments: [
        { year: 1927, text: "Duke Ellington’s orchestra opens as the house band on December 4 [1]." },
        { year: 1929, text: "Broadcasts from the club begin to go out nationally over the NBC network in September [1]." },
        { year: 1933, text: "Ethel Waters sings Harold Arlen and Ted Koehler’s “Stormy Weather” in the Cotton Club Parade [1][2]." },
        { year: 1936, text: "After the 1935 Harlem riot the club reopens on Broadway at 48th Street with Cab Calloway and Bill Robinson [1]." }
      ],
      live: [],
      regulars: ["duke-ellington", "bubber-miley", "johnny-hodges", "harry-carney", "barney-bigard", "cootie-williams", "cab-calloway", "jimmie-lunceford", "ethel-waters"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_night-club_map_of_Harlem_LOC_2016585261.jpg/960px-A_night-club_map_of_Harlem_LOC_2016585261.jpg",
        page: "https://commons.wikimedia.org/wiki/File:A_night-club_map_of_Harlem_LOC_2016585261.jpg",
        caption: "E. Simms Campbell’s “A Night-Club Map of Harlem” (1932), a cartoon guide to the neighborhood’s cabarets, ballrooms and restaurants; stars mark the places open all night.",
        credit: "E. Simms Campbell / Dell Publishing Company; Library of Congress",
        license: "Public domain"
      },
      sources: [
        { cite: "“Cotton Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Cotton_Club" },
        { cite: "Jim Haskins, The Cotton Club (New York: Random House, 1977).", url: "" },
        { cite: "Langston Hughes, The Big Sea (New York: Alfred A. Knopf, 1940).", url: "" },
        { cite: "“Owney Madden,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Owney_Madden" },
        { cite: "Harvey G. Cohen, Duke Ellington’s America (Chicago: University of Chicago Press, 2010).", url: "" }
      ]
    },

    {
      id: "savoy-ballroom",
      name: "Savoy Ballroom",
      aka: "“The Home of Happy Feet”; “the Track”",
      city: "new-york",
      place: "596 Lenox Avenue, between 140th and 141st Streets, Harlem",
      kind: "ballroom",
      opened: 1926, closed: 1958,
      periods: null,
      closedNote: "Closed 1958; demolished in 1959 for the Delano Village housing development. A plaque on Lenox Avenue marks the site.",
      people: [
        { name: "Moe Gale", role: "co-owner; later Ella Fitzgerald’s manager" },
        { name: "Jay Faggen", role: "co-owner, also behind the Roseland Ballroom" },
        { name: "Charles Buchanan", role: "manager" },
        { name: "Herbert “Whitey” White", role: "bouncer turned floor manager; organized Whitey’s Lindy Hoppers" },
        { name: "Chick Webb", role: "leader of the most popular house band of the 1930s", artistId: "chick-webb" }
      ],
      lead: "A block-long ballroom on Lenox Avenue with a dance floor open to all, the Savoy was the laboratory of the Lindy Hop and the arena where Harlem’s bands fought for the crowd.",
      story: [
        "The Savoy opened on March 12, 1926, on the second floor of a building at 596 Lenox Avenue. It was owned by the white businessmen Jay Faggen and Moe Gale and managed by Charles Buchanan, a Black businessman born in the West Indies; it could hold about 4,000 people, and a double bandstand let one band take over the moment the other stopped [1]. Unlike the Cotton Club, it did not bar Black customers: its crowd was mostly Black with a white minority. Admission ran from thirty to eighty-five cents depending on the hour, and hostesses danced with anyone holding a twenty-five-cent ticket [1]. A photograph published in Life in 1936 noted that mixed Black-and-white dancing was “allowed” [2].",
        "The dancers set the standard. The Lindy Hop took shape on the Savoy’s floor in the late 1920s, and the best couples, among them Whitey’s Lindy Hoppers, claimed the corner known as Cats’ Corner [1][3]. For bands it was a proving ground: Chick Webb’s orchestra, the house favorite of the 1930s, was declared the winner over Benny Goodman’s in a 1937 battle of the bands and over Count Basie’s in 1938, though the second verdict was disputed [1][4]. Webb’s teenage singer, Ella Fitzgerald, joined him after winning an Apollo Amateur Night in 1934 [5]. The police and the Army closed the ballroom on vice charges in April 1943; its license was restored that October. It closed in 1958 and was torn down for housing [1]."
      ],
      moments: [
        { year: 1926, text: "Opening night, March 12; the New York Age reports 2,000 people turned away [1]." },
        { year: 1937, text: "Chick Webb’s band is declared the winner in a battle of the bands with Benny Goodman’s orchestra [1][4]." },
        { year: 1943, text: "Police and Army close the ballroom on vice charges in April; its license is renewed in October [1]." },
        { year: 1959, text: "The building is demolished for the Delano Village apartments despite protests [1]." }
      ],
      live: [],
      regulars: ["chick-webb", "ella-fitzgerald", "count-basie", "cootie-williams"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Dancing_at_the_Savoy_Ballroom_1936.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Dancing_at_the_Savoy_Ballroom_1936.jpg",
        caption: "Dancers at the Savoy Ballroom, from a photograph published in Life in 1936, whose caption noted that mixed Black-and-white dancing was allowed.",
        credit: "Unknown photographer (published in Life, 1936)",
        license: "Public domain"
      },
      sources: [
        { cite: "“Savoy Ballroom,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Savoy_Ballroom" },
        { cite: "“Dancing at the Savoy Ballroom 1936,” Wikimedia Commons (Life, 1936).", url: "https://commons.wikimedia.org/wiki/File:Dancing_at_the_Savoy_Ballroom_1936.jpg" },
        { cite: "“Lindy Hop,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Lindy_Hop" },
        { cite: "“Chick Webb,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Chick_Webb" },
        { cite: "“Ella Fitzgerald,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Ella_Fitzgerald" }
      ]
    },

    {
      id: "smalls-paradise",
      name: "Smalls Paradise",
      aka: "Small’s Paradise; Big Wilt’s Smalls Paradise (from 1961)",
      city: "new-york",
      place: "2294 Seventh Avenue (now Adam Clayton Powell Jr. Boulevard) at 134th Street, Harlem",
      kind: "cabaret",
      opened: 1925, closed: 1986,
      periods: null,
      closedNote: "Closed 1986; the building has housed the Thurgood Marshall Academy since 2004.",
      people: [
        { name: "Ed Smalls", role: "founder and owner, 1925–1955" },
        { name: "Charlie Johnson", role: "house bandleader for about ten years from opening night" },
        { name: "Tommy Smalls (“Dr. Jive”)", role: "disc jockey and owner from 1955 (no relation)" },
        { name: "Wilt Chamberlain", role: "basketball star and co-owner from 1961" }
      ],
      lead: "The one great Harlem cabaret of the 1920s that was Black-owned and open to Harlem’s own residents, Smalls Paradise ran all night and outlived its rivals by half a century.",
      story: [
        "Ed Smalls, who had run the Sugar Cane Club since 1917, opened Smalls Paradise in a basement at Seventh Avenue and 134th Street on October 26, 1925 [1]. Unlike the Cotton Club and Connie’s Inn, it welcomed Harlem residents as well as downtown visitors, and it kept later hours: when other clubs closed at three or four in the morning, Smalls began a breakfast dance with a full floor show at six [1][2]. Charlie Johnson’s band, which at times included Benny Carter, Jabbo Smith and Sidney Bechet, played there for about a decade, and musicians from other clubs came after work to sit in; Fats Waller hired sidemen from the house band for his 1934 Victor records [1].",
        "The club’s later history tracks Harlem’s changing tastes. Malcolm X waited tables there in 1942–43, and in 1951 it hosted W. E. B. Du Bois’s birthday dinner after a midtown hotel canceled it during the red scare [1]. Ed Smalls sold the club in 1955 to the disc jockey Tommy Smalls (no relation). In 1961 the basketball star Wilt Chamberlain bought it with a partner, renamed it Big Wilt’s Smalls Paradise and switched from jazz to rhythm and blues for economic reasons; its Tuesday-night Twist contests drew limousines uptown again [1]. It closed in 1986, the longest-running club in Harlem [1]."
      ],
      moments: [
        { year: 1925, text: "Opening gala on October 26, attended by nearly 1,500 people, with Charlie Johnson’s band [1]." },
        { year: 1934, text: "Fats Waller recruits Harry Dial and Herman Autrey from the house band for his Rhythm records [1]." },
        { year: 1961, text: "Wilt Chamberlain buys in and starts the Tuesday Twist contests [1]." }
      ],
      live: [],
      regulars: ["benny-carter", "sidney-bechet", "fats-waller"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Smalls_Paradise_circa_1942.jpg/960px-Smalls_Paradise_circa_1942.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Smalls_Paradise_circa_1942.jpg",
        caption: "A Smalls Paradise postcard, c. 1942, showing the Clover Bar, the Orchid Room and the marquee, with the founder Ed Smalls at center.",
        credit: "Eagle Post Card View Company, New York",
        license: "Public domain"
      },
      sources: [
        { cite: "“Smalls Paradise,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Paradise" },
        { cite: "“Connie’s Inn,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Connie%27s_Inn" }
      ]
    },

    {
      id: "mintons",
      name: "Minton’s Playhouse",
      aka: "Uptown Lounge at Minton’s Playhouse (2006–2010)",
      city: "new-york",
      place: "Hotel Cecil, 210 West 118th Street, Harlem",
      kind: "club",
      opened: 1938, closed: null,
      periods: [[1938, 1974], [2006, 2010], [2013, null]],
      closedNote: "Closed 1974; reopened 2006–2010 and again from 2013. Operating under new owners as of 2025. The Hotel Cecil and Minton’s Playhouse became a city landmark in 2023.",
      people: [
        { name: "Henry Minton", role: "founder; saxophonist and the first Black delegate to Local 802 of the musicians’ union" },
        { name: "Teddy Hill", role: "former bandleader, manager from late 1940" },
        { name: "Thelonious Monk", role: "house pianist", artistId: "thelonious-monk" },
        { name: "Kenny Clarke", role: "house drummer", artistId: "kenny-clarke" },
        { name: "Jerry Newman", role: "Columbia student who recorded the sessions in 1941" },
        { name: "Richard Parsons", role: "former Time Warner chief who led the 2013 revival" }
      ],
      lead: "In a room off a Harlem hotel lobby, a house band with Kenny Clarke and Thelonious Monk and a stream of after-hours visitors worked out the language that became bebop.",
      story: [
        "Henry Minton, a saxophonist who had been the first Black delegate to the musicians’ union Local 802, opened the club in the Hotel Cecil on West 118th Street in 1938 (the city’s landmark designation says 1938 or 1939) [1][2]. His union standing mattered: the union forbade unpaid jam sessions and its delegates fined musicians who took part, and Dizzy Gillespie recalled that players were “somewhat immune” at Minton’s [1]. In late 1940 Minton hired the former bandleader Teddy Hill to run the room. Hill’s house band had Monk on piano, Kenny Clarke on drums, Joe Guy on trumpet and Nick Fenton on bass, and on Monday nights the performers from the Apollo came by for free food and a session [1][3].",
        "Those sessions were both school and battlefield. Charlie Christian came uptown after his sets with Benny Goodman; Gillespie dueled with his idol Roy Eldridge; Lester Young, Ben Webster and Don Byas fought it out on tenor [1][3]. The house band discouraged weaker players by calling tunes in difficult keys, and Charles Mingus remembered: “To play at Minton’s you couldn’t just walk in and grab a bass” [1]. Jerry Newman, a Columbia student, recorded the room on a portable disc machine in 1941, preserving Christian and Monk at work [4][7]. Ralph Ellison, who knew the club, called what happened there in 1941–42 a “continuing symposium of jazz” [1][5].",
        "In the 1950s Minton’s traded its open sessions for name acts, and it closed in 1974 [1]. It reopened from 2006 to 2010, and again in 2013, when a group led by the former Time Warner chief Richard Parsons revived it as an upscale club and restaurant. The city designated the Hotel Cecil and Minton’s Playhouse a landmark in June 2023, and in 2025 a group of new owners was running the club, serving live jazz and food [1][2][6]."
      ],
      moments: [
        { year: 1940, text: "Teddy Hill takes over as manager and builds a house band around Monk and Kenny Clarke [1]." },
        { year: 1941, text: "Jerry Newman records Charlie Christian, Monk and others at the sessions [4]." },
        { year: 2023, text: "The Landmarks Preservation Commission designates the Hotel Cecil and Minton’s Playhouse on June 27 [2]." }
      ],
      live: [
        { title: "Midnight at Minton’s", artist: "Don Byas, with Thelonious Monk", artistIds: ["thelonious-monk"], year: 1941,
          recorded: "1941 (issued 1973)", label: null, labelName: "Onyx", note: "Jerry Newman’s amateur discs of a jam session, with Monk in the house band [7]." }
      ],
      regulars: ["thelonious-monk", "kenny-clarke", "charlie-christian", "dizzy-gillespie", "charlie-parker", "roy-eldridge", "lester-young", "ben-webster", "bud-powell", "miles-davis"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Thelonious_Monk%2C_Howard_McGhee%2C_Roy_Eldridge%2C_and_Teddy_Hill%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06201%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Thelonious_Monk,_Howard_McGhee,_Roy_Eldridge,_and_Teddy_Hill,_Minton%27s_Playhouse,_New_York,_N.Y.,_ca._Sept._1947_(William_P._Gottlieb_06201).jpg",
        caption: "Thelonious Monk, Howard McGhee, Roy Eldridge and the club’s manager, Teddy Hill, at Minton’s Playhouse, c. September 1947.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“Minton’s Playhouse,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Minton%27s_Playhouse" },
        { cite: "New York City Landmarks Preservation Commission, “LPC Designates Three Sites with Ties to Jazz History” (press release), June 27, 2023.", url: "https://home4.nyc.gov/site/lpc/about/pr2023/lpc-designates-three-sites-with-ties-to-jazz-history.page" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (Berkeley: University of California Press, 1997).", url: "" },
        { cite: "“Charlie Christian,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Charlie_Christian" },
        { cite: "Ralph Ellison, “The Golden Age, Time Past,” Esquire, January 1959; reprinted in Shadow and Act (New York: Random House, 1964).", url: "" },
        { cite: "ABC7 New York, “New owners determined to keep legacy alive for legendary Harlem jazz club Minton’s Playhouse,” February 6, 2025.", url: "https://abc7ny.com/post/new-owners-determined-keep-legacy-alive-legendary-harlem-jazz-club-mintons-playhouse/15873923" },
        { cite: "“Midnight at Minton’s,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Midnight_at_Minton%27s" }
      ]
    },

    {
      id: "monroes-uptown-house",
      name: "Clark Monroe’s Uptown House",
      aka: "Monroe’s",
      city: "new-york",
      place: "198 West 134th Street, Harlem",
      kind: "club",
      opened: 1936, closed: 1943,
      periods: null,
      closedNote: "Opened in the mid-1930s (the exact year is unclear). Monroe moved his business to 52nd Street in 1943 and opened the Spotlite there in December 1944.",
      people: [
        { name: "Clark Monroe", role: "owner" },
        { name: "Al Tinney", role: "pianist and house bandleader" }
      ],
      lead: "Minton’s twin and rival, Clark Monroe’s Harlem after-hours room ran its sessions until morning, and it was where the young Charlie Parker jammed most.",
      story: [
        "Clark Monroe opened the Uptown House in the mid-1930s in a building on West 134th Street that had earlier held Barron’s, where Duke Ellington worked in the early 1920s [1]. In the late 1930s it presented swing; Billie Holiday sang there for three months in 1937 [1]. In the early 1940s it became, with Minton’s, one of the two after-hours rooms where bebop was assembled. Its sessions ran even later than Minton’s, and before 1942 Charlie Parker spent more time there than on 118th Street [1][2]. The pianist Al Tinney led a house band that at times included the young Max Roach, the trumpeter Benny Harris and the bassist George Treadwell, and Charlie Parker was a featured soloist in 1943 [1].",
        "Jerry Newman’s 1941 discs include a session at Monroe’s with Charlie Christian and Hot Lips Page [3]. In 1943 Monroe took his business downtown to 52nd Street, and in December 1944 he opened the Spotlite there [1]. The move traced the path of bebop itself, from Harlem rooms where musicians played for one another after hours to Midtown clubs where the public paid to hear the results [4]. Grove ranks it, with Minton’s, as one of the two principal clubs in bebop’s early history [1]."
      ],
      moments: [
        { year: 1937, text: "Billie Holiday plays a three-month residency [1]." },
        { year: 1941, text: "Jerry Newman records Charlie Christian and Hot Lips Page at a session [3]." },
        { year: 1944, text: "Monroe opens the Spotlite on 52nd Street in December [1]." }
      ],
      live: [],
      regulars: ["charlie-parker", "max-roach", "billie-holiday", "charlie-christian", "hot-lips-page"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/%28Portrait_of_Coleman_Hawkins%2C_Spotlite_%28Club%29%2C_New_York%2C_N.Y.%2C_ca._Sept._1946%29_%28LOC%29_%284843746292%29.jpg/960px-%28Portrait_of_Coleman_Hawkins%2C_Spotlite_%28Club%29%2C_New_York%2C_N.Y.%2C_ca._Sept._1946%29_%28LOC%29_%284843746292%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:(Portrait_of_Coleman_Hawkins,_Spotlite_(Club),_New_York,_N.Y.,_ca._Sept._1946)_(LOC)_(4843746292).jpg",
        caption: "Coleman Hawkins at the Spotlite, the 52nd Street club Clark Monroe opened in 1944, c. September 1946.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“Clark Monroe’s Uptown House,” Wikipedia (drawing on Grove Jazz Online).", url: "https://en.wikipedia.org/wiki/Clark_Monroe%27s_Uptown_House" },
        { cite: "“Minton’s Playhouse,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Minton%27s_Playhouse" },
        { cite: "“Charlie Christian,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Charlie_Christian" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (Berkeley: University of California Press, 1997).", url: "" }
      ]
    },

    {
      id: "apollo-theater",
      name: "Apollo Theater",
      aka: "Hurtig & Seamon’s New Theatre (before 1934)",
      city: "new-york",
      place: "253 West 125th Street, Harlem",
      kind: "theater",
      opened: 1934, closed: null,
      periods: null,
      closedNote: "Built in 1913–14 as a whites-only burlesque house; reopened as the Apollo, for Black audiences, in 1934. Dark for stretches in the 1970s and early 1980s; reopened 1985; run by the nonprofit Apollo Theater Foundation since 1991.",
      people: [
        { name: "Sidney Cohen", role: "theater owner who reopened the house as the Apollo in January 1934" },
        { name: "Frank Schiffman", role: "operator with Leo Brecher from 1935; his family ran it until 1976" },
        { name: "Ralph Cooper", role: "host of Amateur Night for decades" },
        { name: "Percy Sutton", role: "former Manhattan borough president who bought it in 1981" }
      ],
      lead: "Harlem’s great variety theater was not a jazz club but a proving ground: its weekly Amateur Night launched Ella Fitzgerald, and nearly every major Black band of the swing era played its stage.",
      story: [
        "The theater on 125th Street was built in 1913–14 as Hurtig & Seamon’s, a burlesque house for white patrons. In January 1934 Sidney Cohen reopened it as the Apollo, with Black performers and an all-Black staff, and from 1935 Frank Schiffman and Leo Brecher, who had run the rival Lafayette Theatre and Harlem Opera House, operated it; the Schiffman family stayed until 1976 [1]. The format was the stage show: a band, singers, dancers and comedians several times a day, for a largely local Black audience who, Schiffman’s son Robert recalled, called it “our theater” [1][3].",
        "Amateur Night, held on Wednesdays, broadcast on radio and judged by the audience, was the theater’s engine; Ralph Cooper hosted it for decades [1]. On November 21, 1934, a 17-year-old Ella Fitzgerald won, and within months she was singing with Chick Webb’s band [2]. Sarah Vaughan was a later winner [1]. For a band, a week at the Apollo meant several shows a day in front of one of the most demanding audiences in the country [3]. The theater survived the 1970s precariously, was bought by Percy Sutton in 1981, reopened in 1985 and since 1991 has belonged to the state and been run by a nonprofit foundation [1]."
      ],
      moments: [
        { year: 1934, text: "Adelaide Hall becomes the first major star to headline the reopened theater, in February [1]." },
        { year: 1934, text: "Ella Fitzgerald, 17, wins Amateur Night on November 21 [2]." },
        { year: 1962, text: "James Brown records Live at the Apollo, which stays on the Billboard album chart for 66 weeks [1]." },
        { year: 1985, text: "The refurbished theater reopens on May 22 [1]." }
      ],
      live: [],
      regulars: ["ella-fitzgerald", "sarah-vaughan", "chick-webb", "count-basie", "duke-ellington"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/View_of_the_Apollo_Theatre_marquee%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28William_P._Gottlieb_00141%29.jpg/960px-View_of_the_Apollo_Theatre_marquee%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28William_P._Gottlieb_00141%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:View_of_the_Apollo_Theatre_marquee,_New_York,_N.Y.,_between_1946_and_1948_(William_P._Gottlieb_00141).jpg",
        caption: "The Apollo Theatre’s marquee at night, between 1946 and 1948.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“Apollo Theater,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Apollo_Theater" },
        { cite: "“Ella Fitzgerald,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Ella_Fitzgerald" },
        { cite: "Ted Fox, Showtime at the Apollo (New York: Holt, Rinehart and Winston, 1983).", url: "" }
      ]
    },

    // ───────────────────────── Midtown ─────────────────────────
    {
      id: "fifty-second-street",
      name: "52nd Street (“Swing Street”)",
      aka: "Swing Street; “The Street”: the Onyx, Famous Door, Three Deuces, Kelly’s Stable, Hickory House, Jimmy Ryan’s, the Spotlite and others",
      city: "new-york",
      place: "West 52nd Street between Fifth and Seventh Avenues, Midtown",
      kind: "district",
      opened: 1934, closed: 1950,
      periods: null,
      closedNote: "Most clubs had become strip joints or closed by about 1950. Jimmy Ryan’s, the last survivor, lost its brownstone in 1962 to the CBS Building.",
      people: [
        { name: "Joe Helbock", role: "owner of the original Onyx, first a speakeasy" },
        { name: "Jimmy Ryan and Matty Walsh", role: "owners of Jimmy Ryan’s, 1934–1983" },
        { name: "Clark Monroe", role: "owner of the Spotlite, opened 1944" },
        { name: "Symphony Sid (Sid Torin)", role: "disc jockey who broadcast from the street" }
      ],
      lead: "For about fifteen years after Prohibition, two blocks of brownstone basements in Midtown held more jazz per square foot than anywhere on earth, and they carried it from swing to bebop.",
      story: [
        "The Onyx began in 1927 as a speakeasy at 35 West 52nd Street for radio and studio musicians; when Prohibition ended it went legal in February 1934 at No. 72, and other clubs followed into the cellars of the row houses between Fifth and Seventh Avenues [1][2]. The street was close to the CBS studios and the Broadway theaters, and musicians who played for others early in the evening came there to play for themselves [1]. The Famous Door opened on March 1, 1935, with Louis Prima; Art Tatum was the Onyx’s intermission pianist; Billie Holiday, Stuff Smith, Maxine Sullivan and John Kirby built followings there [2][3][4].",
        "The street was not integrated by principle. Black stars filled the bandstands, but the Famous Door was largely a white musicians’ room, and it fired Billie Holiday and Teddy Wilson for mixing with the white bandleader Charlie Barnet in the audience [3]. Yet this was where new music met a paying public. Coleman Hawkins, back from Europe, played “Body and Soul” at Kelly’s Stable before recording it on October 11, 1939 [5]. In 1944 Dizzy Gillespie and Oscar Pettiford led one of the first bebop groups at the Onyx, and in 1945 Gillespie and Charlie Parker played the Three Deuces together [6][4].",
        "The decline came fast. Club Samoa had turned to striptease by 1943, and the Onyx did the same in 1949; by then modern jazz had moved a few blocks west to Broadway, to the Royal Roost and then Birdland [1][2]. Jimmy Ryan’s, the last survivor, was demolished with the rest of its row in 1962 for the new CBS headquarters [7]. Today the block between Fifth and Sixth Avenues is co-named “Swing Street” [1]."
      ],
      moments: [
        { year: 1934, text: "The Onyx reopens legally at 72 West 52nd Street in February [2]." },
        { year: 1935, text: "The Famous Door opens on March 1 with Louis Prima [3]." },
        { year: 1939, text: "Coleman Hawkins, playing at Kelly’s Stable, records “Body and Soul” on October 11 [5]." },
        { year: 1945, text: "Dizzy Gillespie and Charlie Parker lead a quintet at the Three Deuces [6][4]." },
        { year: 1962, text: "Jimmy Ryan’s brownstone is razed for the CBS Building [7]." }
      ],
      live: [],
      regulars: ["art-tatum", "billie-holiday", "teddy-wilson", "coleman-hawkins", "dizzy-gillespie", "charlie-parker", "oscar-pettiford", "max-roach", "miles-davis", "erroll-garner", "sarah-vaughan"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/52nd_Street%2C_New_York%2C_by_Gottlieb%2C_1948.jpg/960px-52nd_Street%2C_New_York%2C_by_Gottlieb%2C_1948.jpg",
        page: "https://commons.wikimedia.org/wiki/File:52nd_Street,_New_York,_by_Gottlieb,_1948.jpg",
        caption: "52nd Street at night, c. May 1948, with the neon of the Onyx, the Three Deuces and their neighbors, in a Kodachrome by William P. Gottlieb.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“52nd Street (Manhattan),” Wikipedia.", url: "https://en.wikipedia.org/wiki/52nd_Street_(Manhattan)" },
        { cite: "“Onyx Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Onyx_Club" },
        { cite: "“Famous Door,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Famous_Door" },
        { cite: "Arnold Shaw, 52nd Street: The Street of Jazz (New York: Da Capo, 1977; first published as The Street That Never Slept, 1971).", url: "" },
        { cite: "“Coleman Hawkins,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Coleman_Hawkins" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (Berkeley: University of California Press, 1997).", url: "" },
        { cite: "“Jimmy Ryan’s,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Jimmy_Ryan%27s" }
      ]
    },

    {
      id: "cafe-society",
      name: "Café Society",
      aka: "Café Society Downtown; Café Society Uptown (from 1940)",
      city: "new-york",
      place: "Basement at Sheridan Square, Greenwich Village; Café Society Uptown on East 58th Street between Park and Lexington Avenues",
      kind: "cabaret",
      opened: 1938, closed: 1949,
      periods: null,
      closedNote: "Both rooms closed in 1947–49 after a red-baiting press campaign; sources differ on the exact dates.",
      people: [
        { name: "Barney Josephson", role: "founder and owner" },
        { name: "John Hammond", role: "producer and the club’s unofficial music director" },
        { name: "Billie Holiday", role: "headliner of the opening show, 1938–39", artistId: "billie-holiday" },
        { name: "Big Joe Turner", role: "on the first bill and for four years after", artistId: "big-joe-turner" }
      ],
      lead: "Barney Josephson’s basement on Sheridan Square, billed as “The Wrong Place for the Right People,” was the first major nightclub in a white neighborhood to welcome customers of every race, and it was where Billie Holiday first sang “Strange Fruit.”",
      story: [
        "Josephson, a shoe salesman from Trenton with no show-business experience, opened Café Society in late December 1938 in a basement off Sheridan Square, with $6,000 borrowed from friends of his brother Leon and with John Hammond as his music adviser [1][2]. He later said: “I wanted a club where blacks and whites worked together behind the footlights and sat together out front” [2]. Village artists painted murals satirizing high society, and the opening bill included Billie Holiday, Big Joe Turner and the boogie-woogie pianists Albert Ammons, Meade Lux Lewis and Pete Johnson, many of them fresh from Hammond’s Carnegie Hall concert From Spirituals to Swing [1][2].",
        "In 1939 Holiday began closing her sets with “Strange Fruit,” Abel Meeropol’s song about lynching. Josephson staged it strictly: service stopped, the room went dark except for a spotlight on her face, and there was no encore [2][3][5]. The club made stars of Hazel Scott, Lena Horne and Josh White, and in 1940 Josephson opened Café Society Uptown on East 58th Street [1]. Politics brought it down. In 1947 his brother Leon was convicted of contempt of Congress after refusing to answer the House Un-American Activities Committee; columnists including Walter Winchell and Westbrook Pegler attacked the clubs, business fell by nearly half within weeks, and both rooms had closed by 1949 [1][2][4]."
      ],
      moments: [
        { year: 1938, text: "Opening night in late December, with Billie Holiday, Big Joe Turner and the boogie-woogie pianists [2]." },
        { year: 1939, text: "Holiday introduces “Strange Fruit” at the club and records it for Commodore with Frankie Newton’s Café Society band [3]." },
        { year: 1940, text: "Café Society Uptown opens on East 58th Street [1]." },
        { year: 1947, text: "Leon Josephson’s HUAC subpoena sets off the press campaign that empties the rooms [1][2]." }
      ],
      live: [],
      regulars: ["billie-holiday", "big-joe-turner", "pete-johnson", "teddy-wilson", "mary-lou-williams", "art-tatum", "sarah-vaughan"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Josh_White%2C_Caf%C3%A9_Society_%28Downtown%29%2C_New_York%2C_N.Y.%2C_ca._June_1946_%28William_P._Gottlieb_09091%29.jpg/960px-Josh_White%2C_Caf%C3%A9_Society_%28Downtown%29%2C_New_York%2C_N.Y.%2C_ca._June_1946_%28William_P._Gottlieb_09091%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Josh_White,_Caf%C3%A9_Society_(Downtown),_New_York,_N.Y.,_ca._June_1946_(William_P._Gottlieb_09091).jpg",
        caption: "The singer and guitarist Josh White, for years a headliner, at Café Society (Downtown), c. June 1946.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“Café Society,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Caf%C3%A9_Society" },
        { cite: "“Barney Josephson,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Barney_Josephson" },
        { cite: "“Strange Fruit,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Strange_Fruit" },
        { cite: "Barney Josephson with Terry Trilling-Josephson, Café Society: The Wrong Place for the Right People (Urbana: University of Illinois Press, 2009).", url: "" },
        { cite: "David Margolick, Strange Fruit: Billie Holiday, Café Society, and an Early Cry for Civil Rights (Philadelphia: Running Press, 2000).", url: "" }
      ]
    },

    // ───────────────────────── The Village & Broadway ─────────────────────────
    {
      id: "village-vanguard",
      name: "Village Vanguard",
      aka: "",
      city: "new-york",
      place: "178 Seventh Avenue South, Greenwich Village",
      kind: "club",
      opened: 1935, closed: null,
      periods: null,
      closedNote: "",
      people: [
        { name: "Max Gordon", role: "founder and owner, 1935–1989" },
        { name: "Lorraine Gordon", role: "owner, 1989–2018" },
        { name: "Deborah Gordon", role: "owner since 2018" },
        { name: "Jed Eisenman", role: "general manager" },
        { name: "Thad Jones and Mel Lewis", role: "leaders of the Monday-night big band from 1966", artistId: "thad-jones-mel-lewis-orchestra" }
      ],
      lead: "A wedge-shaped basement that began as a home for poets and folk singers, the Vanguard became the world’s most famous jazz room and its most recorded.",
      story: [
        "Max Gordon opened the Vanguard on February 22, 1935, in a former speakeasy at 178 Seventh Avenue South, after an earlier room on Charles Street could not get a cabaret license. Recalling the search, he wrote that he needed a place “with two johns, two exits, two hundred feet away from a church or synagogue or school, and with the rent under $100 a month” [1][2]. For two decades the Vanguard was a Village cabaret for poets, folk and calypso singers and comedians, with Lead Belly on the bill and jazz at Sunday-afternoon sessions [1]. In 1957 Gordon put jazz at the top of the bill, and it has been a jazz room ever since [1].",
        "From 1957 the Vanguard was the place to record a working band in front of an audience. Sonny Rollins made the club’s first live recording on November 3, 1957, for Blue Note [3]. Bill Evans’s trio recorded two albums on June 25, 1961, eleven days before the bassist Scott LaFaro was killed [4]. John Coltrane’s band with Eric Dolphy recorded over four nights that November, music a DownBeat critic called “a horrifying demonstration of what appears to be a growing anti-jazz trend” [5]. Since February 1966 a big band, founded by Thad Jones and Mel Lewis and now called the Vanguard Jazz Orchestra, has played Monday nights [6][7]. Blue Note’s Bruce Lundvall said the words “Live at the Village Vanguard” helped sell an album [1].",
        "Lorraine Gordon, who had been married to Blue Note’s Alfred Lion and who persuaded Max to book Thelonious Monk in 1948, married him in 1949 and ran the club after his death in 1989, reopening it the day after closing it in mourning [1][8]. She died in 2018. Her daughter Deborah Gordon has run it since, with Jed Eisenman as manager, and it still presents music every night [9][10][7]. Lorraine’s memoir, Alive at the Village Vanguard, appeared in 2006 [8]."
      ],
      moments: [
        { year: 1935, text: "Max Gordon opens the club on February 22 [1]." },
        { year: 1957, text: "Sonny Rollins records A Night at the Village Vanguard, the first live recording made at the club, on November 3 [3]." },
        { year: 1961, text: "The Bill Evans Trio plays five sets on Sunday, June 25, yielding two albums [4]." },
        { year: 1961, text: "John Coltrane records over four nights in early November [5]." },
        { year: 1966, text: "The Thad Jones/Mel Lewis Orchestra plays its first Monday night in February [6]." }
      ],
      live: [
        { title: "A Night at the “Village Vanguard”", artist: "Sonny Rollins", artistIds: ["sonny-rollins", "elvin-jones"], year: 1957,
          recorded: "November 3, 1957", label: "blue-note", labelName: "Blue Note", note: "Pianoless trios with two different rhythm sections; engineered by Rudy Van Gelder [3]." },
        { title: "Sunday at the Village Vanguard", artist: "Bill Evans Trio", artistIds: ["bill-evans", "bill-evans-trio"], year: 1961,
          recorded: "June 25, 1961", label: "riverside", labelName: "Riverside", note: "Released as a showcase for Scott LaFaro after his death [4]." },
        { title: "“Live” at the Village Vanguard", artist: "John Coltrane", artistIds: ["john-coltrane", "eric-dolphy", "mccoy-tyner", "jimmy-garrison", "elvin-jones"], year: 1961,
          recorded: "November 1961", label: "impulse", labelName: "Impulse!", note: "The first album to feature the members of Coltrane’s classic quartet, released amid charges of “anti-jazz” [5]." },
        { title: "The State of the Tenor, Vols. 1 & 2", artist: "Joe Henderson", artistIds: ["joe-henderson", "ron-carter"], year: 1985,
          recorded: "1985", label: "blue-note", labelName: "Blue Note", note: "A trio with Ron Carter and Al Foster, one of the club’s many later live records [1]." }
      ],
      regulars: ["sonny-rollins", "bill-evans", "bill-evans-trio", "john-coltrane", "eric-dolphy", "thelonious-monk", "thad-jones", "mel-lewis", "thad-jones-mel-lewis-orchestra", "joe-henderson", "wynton-marsalis", "cecile-mclorin-salvant", "mary-lou-williams", "sidney-bechet"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Village_Vanguard_at_night_1976.jpg/960px-The_Village_Vanguard_at_night_1976.jpg",
        page: "https://commons.wikimedia.org/wiki/File:The_Village_Vanguard_at_night_1976.jpg",
        caption: "The Village Vanguard’s awning at night, 1976, looking downtown along Seventh Avenue South.",
        credit: "Tom Marcello",
        license: "CC BY-SA 2.0"
      },
      sources: [
        { cite: "“Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Village_Vanguard" },
        { cite: "Max Gordon, Live at the Village Vanguard (New York: St. Martin’s Press, 1980).", url: "" },
        { cite: "“A Night at the ‘Village Vanguard’,” Wikipedia.", url: "https://en.wikipedia.org/wiki/A_Night_at_the_%22Village_Vanguard%22" },
        { cite: "“Sunday at the Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Sunday_at_the_Village_Vanguard" },
        { cite: "“Coltrane ‘Live’ at the Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Live!_at_the_Village_Vanguard" },
        { cite: "“The Thad Jones/Mel Lewis Orchestra” (Vanguard Jazz Orchestra), Wikipedia.", url: "https://en.wikipedia.org/wiki/Vanguard_Jazz_Orchestra" },
        { cite: "Village Vanguard, official website (calendar, November 2026).", url: "https://villagevanguard.com/" },
        { cite: "“Lorraine Gordon,” Wikipedia; Lorraine Gordon and Barry Singer, Alive at the Village Vanguard: My Life In and Out of Jazz Time (Milwaukee: Hal Leonard, 2006).", url: "https://en.wikipedia.org/wiki/Lorraine_Gordon" },
        { cite: "NPR, “Lorraine Gordon, Guardian Of Legendary Jazz Club, Dies At 95,” June 9, 2018.", url: "https://www.npr.org/2018/06/09/530726928" },
        { cite: "JazzTimes, “Lorraine Gordon, Owner of the Village Vanguard, Dies at 95,” June 2018.", url: "https://www.jazztimes.com/features/tributes-and-obituaries/lorraine-gordon-owner-of-the-village-vanguard-dies-at-95/" }
      ]
    },

    {
      id: "royal-roost",
      name: "Royal Roost",
      aka: "“The Metropolitan Bopera House”",
      city: "new-york",
      place: "1580 Broadway, Theater District",
      kind: "club",
      opened: 1948, closed: 1949,
      periods: null,
      closedNote: "Its modern-jazz policy ran from 1948 until Ralph Watkins moved it to his larger club, Bop City, around 1949; the exact closing date is unclear.",
      people: [
        { name: "Ralph Watkins", role: "owner" },
        { name: "Symphony Sid (Sid Torin)", role: "disc jockey who talked Watkins into booking bebop and broadcast from the club" }
      ],
      lead: "A Broadway chicken restaurant that a disc jockey talked into booking bebop, the Royal Roost was for a year or so the “Metropolitan Bopera House,” and the room where Miles Davis’s nonet first played in public.",
      story: [
        "Ralph Watkins opened the Royal Roost at 1580 Broadway as a chicken restaurant. When it struggled, the disc jockey Sid Torin, “Symphony Sid,” persuaded him to try modern jazz, and from 1948 the room presented Charlie Parker, Dizzy Gillespie, Fats Navarro, Dexter Gordon, Tadd Dameron and Max Roach [1]. Its nickname, the “Metropolitan Bopera House,” punned on the Metropolitan Opera a few blocks away [1]. With 52nd Street turning to striptease, the Roost showed that bebop could fill a Broadway room for young listeners who came to hear the music rather than to dance [1][3].",
        "In September 1948 Miles Davis’s nonet, with arrangements by Gil Evans, Gerry Mulligan and John Lewis, played a two-week engagement at the Roost opposite Count Basie, one of its very few public appearances. Capitol’s Pete Rugolo heard it and signed the group for the sessions later collected as Birth of the Cool; broadcasts from two nights were released decades later [2]. Basie, the headliner, said: “Those slow things sounded strange and good” [2]. In 1949 Watkins and partners founded Roost Records, and the club’s jazz soon moved to Watkins’s bigger room, Bop City [1]."
      ],
      moments: [
        { year: 1948, text: "Miles Davis’s nonet debuts in a two-week engagement opposite Count Basie in September [2]." },
        { year: 1949, text: "Watkins and partners found Roost Records to record the club’s musicians [1]." }
      ],
      live: [],
      regulars: ["charlie-parker", "dizzy-gillespie", "fats-navarro", "dexter-gordon", "tadd-dameron", "max-roach", "miles-davis", "gil-evans", "gerry-mulligan", "john-lewis", "count-basie"],
      image: null,
      sources: [
        { cite: "“Royal Roost,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Royal_Roost" },
        { cite: "“Birth of the Cool,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Birth_of_the_Cool" },
        { cite: "Ashley Kahn, “After Hours: New York’s Jazz Joints Through the Ages,” JazzTimes, September 2006.", url: "" }
      ]
    },

    {
      id: "birdland",
      name: "Birdland",
      aka: "“The Jazz Corner of the World”",
      city: "new-york",
      place: "1678 Broadway, just north of 52nd Street (1949–1965); 315 West 44th Street (since 1996)",
      kind: "club",
      opened: 1949, closed: null,
      periods: [[1949, 1965], [1986, null]],
      closedNote: "The original club closed in 1965. The name was revived at 2745 Broadway and 105th Street in 1986 (some sources say 1985) and moved to West 44th Street in 1996.",
      people: [
        { name: "Morris Levy", role: "co-owner; later founder of Roulette Records" },
        { name: "Irving Levy", role: "co-owner and manager; killed in the club in 1959" },
        { name: "Oscar Goodstein", role: "operator of the club" },
        { name: "Pee Wee Marquette", role: "master of ceremonies" },
        { name: "John Valenti", role: "owner of the revived club from 1986" }
      ],
      lead: "Named for Charlie Parker and billed as “the Jazz Corner of the World,” Birdland was the big-league room of the 1950s: a Broadway basement with a cheap bullpen for listeners, nightly radio, and owners who understood that the money was in copyrights.",
      story: [
        "Birdland opened on December 15, 1949, in a basement at 1678 Broadway, with a “Journey Through Jazz” bill that ran from Max Kaminsky and Hot Lips Page through Lester Young and Charlie Parker to Lennie Tristano [1]. It seated about 500 and had a bandstand big enough for Count Basie’s orchestra, a regular. A $1.50 admission bought a seat in a fenced “bullpen” where listeners, including teenagers, could hear the music without buying a table [1]. The tiny emcee Pee Wee Marquette introduced the acts, garbling the names of musicians who did not tip him, and Symphony Sid broadcast from the club [1][2].",
        "The money behind it came from Morris Levy and his brother Irving, with partners. Morris saw early that the real profits were in publishing: when George Shearing wrote “Lullaby of Birdland” in 1952 as the theme for a Birdland radio show, the composer’s rights went to Shearing and the publishing to Levy [3][4]. Levy, who founded Roulette Records in 1956, was investigated for decades over ties to organized crime and was convicted of extortion shortly before his death in 1990 [3][5]. Irving Levy was stabbed to death in the club in January 1959, and that August a policeman beat Miles Davis on the sidewalk outside during his engagement there [1].",
        "Art Blakey’s quintet with Clifford Brown recorded the A Night at Birdland albums for Blue Note on February 21, 1954, among the earliest hard-bop records, and John Coltrane’s quartet recorded part of Live at Birdland there on October 8, 1963 [6][7]. The club filed for bankruptcy in 1964 and closed in 1965 [1]. The name returned uptown in 1986 and moved in 1996 to West 44th Street, where Birdland still presents music nightly [1][8]."
      ],
      moments: [
        { year: 1949, text: "Opening night, December 15, with Charlie Parker on the bill [1]." },
        { year: 1952, text: "George Shearing writes “Lullaby of Birdland” as the club’s radio theme [4]." },
        { year: 1954, text: "Art Blakey’s quintet records A Night at Birdland on February 21 [6]." },
        { year: 1959, text: "Miles Davis is beaten by a policeman outside the club on August 25 [1]." },
        { year: 1965, text: "The original club closes after a 1964 bankruptcy filing [1]." }
      ],
      live: [
        { title: "A Night at Birdland, Vol. 1", artist: "Art Blakey Quintet", artistIds: ["art-blakey", "clifford-brown", "horace-silver", "lou-donaldson"], year: 1954,
          recorded: "February 21, 1954", label: "blue-note", labelName: "Blue Note", note: "Opens with Pee Wee Marquette’s introduction, later sampled by Us3 [1][6]." },
        { title: "Basie at Birdland", artist: "Count Basie Orchestra", artistIds: ["count-basie"], year: 1961,
          recorded: "1961", label: null, labelName: "Roulette", note: "Issued on Morris Levy’s own label [1][3]." },
        { title: "Live at Birdland", artist: "John Coltrane", artistIds: ["john-coltrane", "mccoy-tyner", "jimmy-garrison", "elvin-jones"], year: 1963,
          recorded: "October 8, 1963 (three tracks; the rest in the studio)", label: "impulse", labelName: "Impulse!", note: "Includes “Afro Blue” and “I Want to Talk About You” [7]." }
      ],
      regulars: ["charlie-parker", "count-basie", "art-blakey", "clifford-brown", "horace-silver", "john-coltrane", "miles-davis", "dizzy-gillespie", "thelonious-monk", "bud-powell", "lester-young", "stan-getz", "george-shearing", "lennie-tristano", "toshiko-akiyoshi"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Birdland_%22The_Jazz_Corner_of_the_World%2C%22_on_W._44th%2C_NYC_%282954363023%29.jpg/960px-Birdland_%22The_Jazz_Corner_of_the_World%2C%22_on_W._44th%2C_NYC_%282954363023%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Birdland_%22The_Jazz_Corner_of_the_World,%22_on_W._44th,_NYC_(2954363023).jpg",
        caption: "The revived Birdland on West 44th Street, October 2008, during a set by Kurt Rosenwinkel and Peter Bernstein.",
        credit: "Jazz Guy from New Jersey, United States",
        license: "CC BY 2.0"
      },
      sources: [
        { cite: "“Birdland (New York jazz club),” Wikipedia.", url: "https://en.wikipedia.org/wiki/Birdland_(New_York_jazz_club)" },
        { cite: "“Pee Wee Marquette,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Pee_Wee_Marquette" },
        { cite: "“Morris Levy,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Morris_Levy" },
        { cite: "“Lullaby of Birdland,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Lullaby_of_Birdland" },
        { cite: "Fredric Dannen, Hit Men: Power Brokers and Fast Money Inside the Music Business (New York: Times Books, 1990).", url: "" },
        { cite: "“A Night at Birdland, Vols. 1–3,” Wikipedia.", url: "https://en.wikipedia.org/wiki/A_Night_at_Birdland_Vol._1" },
        { cite: "“Live at Birdland (John Coltrane album),” Wikipedia.", url: "https://en.wikipedia.org/wiki/Live_at_Birdland_(John_Coltrane_album)" },
        { cite: "Birdland, “About,” official website.", url: "https://www.birdlandjazz.com/about" }
      ]
    },

    {
      id: "five-spot",
      name: "Five Spot Café",
      aka: "",
      city: "new-york",
      place: "5 Cooper Square, Bowery (1956–1962); 2 St. Marks Place (1962–1976)",
      kind: "club",
      opened: 1956, closed: 1976,
      periods: [[1956, 1967], [1974, 1976]],
      closedNote: "The original building was demolished in 1962 and the club moved to St. Marks Place; live music stopped in 1967, resumed in 1974–75, and the club closed in January 1976.",
      people: [
        { name: "Joe and Iggy Termini", role: "owners" },
        { name: "Salvatore Termini", role: "their father, who bought the bar in 1937" }
      ],
      lead: "A working-class bar on the Bowery turned jazz room, the Five Spot was where painters and poets heard Monk with Coltrane in 1957 and where Ornette Coleman’s quartet arrived from Los Angeles in 1959.",
      story: [
        "Salvatore Termini bought a Bowery bar under the Third Avenue El in 1937, and his sons Joe and Iggy took it over. After the El came down in 1955 and artists moved into the cheap lofts nearby, a pianist upstairs talked them into buying a used upright; they received a cabaret license on August 30, 1956, and opened as the Five Spot Café [1]. Its first official engagement was Cecil Taylor’s, from November 1956 into January 1957 [1]. Drinks were cheap, and the room filled with painters from the nearby Cedar Tavern, among them Willem de Kooning and Franz Kline, and poets including Frank O’Hara and Allen Ginsberg [1].",
        "In the summer of 1957 Thelonious Monk, his cabaret card restored with the Terminis’ help after years without one, began a residency with John Coltrane, Wilbur Ware and Shadow Wilson that ran until Christmas; almost none of it was recorded, and it lives largely in the memories of those who heard it [1][2][3]. On November 17, 1959, Ornette Coleman’s quartet with Don Cherry, Charlie Haden and Billy Higgins opened for what was meant to be two weeks and stayed ten, with Leonard Bernstein in the opening-night crowd and critics divided [1][4]. Eric Dolphy and Booker Little’s quintet was recorded there on July 16, 1961 [5]. The building was demolished in 1962 for senior housing [1]."
      ],
      moments: [
        { year: 1956, text: "Cecil Taylor’s quartet begins the club’s first official engagement on November 29 [1]." },
        { year: 1957, text: "Monk’s quartet with John Coltrane begins its residency [1][2]." },
        { year: 1959, text: "Ornette Coleman’s quartet makes its New York debut on November 17 [1][4]." },
        { year: 1961, text: "Eric Dolphy and Booker Little are recorded on the last night of their two-week run, July 16 [5]." }
      ],
      live: [
        { title: "Thelonious in Action", artist: "Thelonious Monk Quartet", artistIds: ["thelonious-monk"], year: 1958,
          recorded: "August 7, 1958", label: "riverside", labelName: "Riverside", note: "With Johnny Griffin; the same night produced Misterioso [6]." },
        { title: "On View at the Five Spot Cafe", artist: "Kenny Burrell, with Art Blakey", artistIds: ["kenny-burrell", "art-blakey"], year: 1959,
          recorded: "August 25, 1959", label: "blue-note", labelName: "Blue Note", note: "" },
        { title: "At the Five Spot, Vol. 1", artist: "Eric Dolphy and Booker Little", artistIds: ["eric-dolphy"], year: 1961,
          recorded: "July 16, 1961", label: "prestige", labelName: "Prestige", note: "Engineered on site by Rudy Van Gelder [5]." }
      ],
      regulars: ["thelonious-monk", "john-coltrane", "ornette-coleman", "don-cherry", "charlie-haden", "billy-higgins", "cecil-taylor", "eric-dolphy"],
      image: null,
      sources: [
        { cite: "“Five Spot Café,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Five_Spot_Caf%C3%A9" },
        { cite: "Robin D. G. Kelley, Thelonious Monk: The Life and Times of an American Original (New York: Free Press, 2009).", url: "" },
        { cite: "“Thelonious Monk,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Thelonious_Monk" },
        { cite: "“Ornette Coleman,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Ornette_Coleman" },
        { cite: "“At the Five Spot” (Eric Dolphy), Wikipedia.", url: "https://en.wikipedia.org/wiki/At_the_Five_Spot" },
        { cite: "“Thelonious in Action,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Thelonious_in_Action" }
      ]
    },

    {
      id: "half-note",
      name: "Half Note",
      aka: "",
      city: "new-york",
      place: "289 Hudson Street at Spring Street (1957–1972); 149 West 54th Street (1972–1974)",
      kind: "club",
      opened: 1957, closed: 1974,
      periods: null,
      closedNote: "Moved to West 54th Street in 1972; closed on January 1, 1975.",
      people: [
        { name: "The Canterino family", role: "owners: Frank and Jean Canterino and their children Mike, Sonny and Rosemarie" },
        { name: "Alan Grant", role: "host of the Friday-night radio show Portraits in Jazz" }
      ],
      lead: "A family-run bar in the industrial blocks west of the Village, the Half Note let musicians stretch out without strict set times and put them on the radio every Friday.",
      story: [
        "The Canterino family, parents Frank and Jean and their children Mike, Sonny and Rosemarie, ran the Half Note at 289 Hudson Street, at Spring Street, from 1957 [1]. It was known as a musicians’ room: bands could play as long as they wanted rather than to a clock, and a Friday-night radio show, Alan Grant’s Portraits in Jazz on WABC, helped pay the bills [1]. Zoot Sims and Al Cohn were regulars, Lennie Tristano’s quintet with Lee Konitz and Warne Marsh was filmed there for CBS television in 1964, and John Coltrane’s quartet played long broadcast sets there in 1965 [1]. Wes Montgomery recorded part of Smokin’ at the Half Note there in June 1965 with Wynton Kelly’s trio during one of Grant’s broadcasts [2]. In 1972 the brothers moved the club to a former carriage house on West 54th Street, where it closed at the start of 1975 [1]."
      ],
      moments: [
        { year: 1964, text: "Lennie Tristano’s quintet is televised from the club on CBS’s Look Up and Live, June 6 [1]." },
        { year: 1965, text: "Wes Montgomery and the Wynton Kelly Trio are recorded during a June broadcast [2]." }
      ],
      live: [
        { title: "Jazz Alive! A Night at the Half Note", artist: "Zoot Sims, Al Cohn & Phil Woods", artistIds: [], year: 1959,
          recorded: "1959", label: null, labelName: "United Artists", note: "" },
        { title: "Smokin’ at the Half Note", artist: "Wes Montgomery with the Wynton Kelly Trio", artistIds: ["wes-montgomery", "wynton-kelly"], year: 1965,
          recorded: "June 1965 (two tracks; the rest at Van Gelder Studio)", label: "verve", labelName: "Verve", note: "Its versions of “Unit 7” and “Four on Six” became standards [2]." },
        { title: "One Down, One Up: Live at the Half Note", artist: "John Coltrane Quartet", artistIds: ["john-coltrane", "coltrane-classic-quartet"], year: 1965,
          recorded: "Spring 1965 radio broadcasts (issued 2005)", label: "impulse", labelName: "Impulse!", note: "" }
      ],
      regulars: ["john-coltrane", "wes-montgomery", "wynton-kelly", "lennie-tristano", "lee-konitz", "warne-marsh", "anita-oday", "cannonball-adderley", "charles-mingus", "chet-baker"],
      image: null,
      sources: [
        { cite: "“Half Note Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Half_Note_Club" },
        { cite: "“Smokin’ at the Half Note,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smokin%27_at_the_Half_Note" }
      ]
    },

    {
      id: "village-gate",
      name: "Village Gate",
      aka: "",
      city: "new-york",
      place: "160 Bleecker Street at Thompson Street, Greenwich Village",
      kind: "club",
      opened: 1958, closed: 1994,
      periods: null,
      closedNote: "Closed in February 1994. Le Poisson Rouge opened in the basement space in 2008.",
      people: [
        { name: "Art D’Lugoff", role: "founder and owner" },
        { name: "Symphony Sid", role: "host of the 1960s Monday-night Latin sessions" },
        { name: "Roger Dawson", role: "disc jockey and conga player who created Salsa Meets Jazz in 1977" }
      ],
      lead: "Art D’Lugoff’s big club beneath a former men’s hotel on Bleecker Street mixed jazz with folk, comedy, theater and Latin music, and its Salsa Meets Jazz nights put New York’s two great dance-band traditions on one stage.",
      story: [
        "D’Lugoff opened the Village Gate in 1958 on the ground floor and basement of Mills House No. 1, an 1896 Ernest Flagg building then serving as a flophouse for transient men; a room upstairs, the Top of the Gate, came later [1]. He booked like an impresario rather than a purist: John Coltrane, Nina Simone, Dizzy Gillespie and Charles Mingus shared the calendar with comedians, folk singers and long-running revues, and Aretha Franklin made her first New York appearance there [1][2]. Nina Simone recorded a live album there in 1961; Herbie Mann’s hit “Comin’ Home Baby” came from a Gate set; and tapes of Coltrane with Eric Dolphy made by the house engineer that summer surfaced only in 2023 [3][4][5].",
        "In the 1960s Symphony Sid ran Monday-night Latin sessions, and the Alegre and Tico labels recorded all-star descargas at the club [1]. In 1977 the disc jockey and conga player Roger Dawson started Salsa Meets Jazz, pairing salsa bands with jazz soloists: Dexter Gordon with Machito, Dizzy Gillespie with Tito Puente, Sonny Stitt with Eddie Palmieri [1]. D’Lugoff declared bankruptcy in 1991 and closed the club in 1994; he later championed the idea that became the National Jazz Museum in Harlem [2]."
      ],
      moments: [
        { year: 1958, text: "Art D’Lugoff opens the club on Bleecker Street [1][2]." },
        { year: 1961, text: "Nina Simone records Nina Simone at the Village Gate in late March [3]." },
        { year: 1977, text: "Roger Dawson launches the Salsa Meets Jazz series [1]." },
        { year: 1994, text: "The club closes in February [1]." }
      ],
      live: [
        { title: "Nina Simone at the Village Gate", artist: "Nina Simone", artistIds: ["nina-simone"], year: 1961,
          recorded: "Late March 1961", label: null, labelName: "Colpix", note: "Recorded by the club’s sound engineer, Richard Alderson [3]." },
        { title: "Herbie Mann at the Village Gate", artist: "Herbie Mann", artistIds: [], year: 1961,
          recorded: "1961", label: "atlantic", labelName: "Atlantic", note: "Includes “Comin’ Home Baby” [4]." },
        { title: "Evenings at the Village Gate: John Coltrane with Eric Dolphy", artist: "John Coltrane with Eric Dolphy", artistIds: ["john-coltrane", "eric-dolphy"], year: 1961,
          recorded: "Summer 1961 (issued 2023)", label: "impulse", labelName: "Impulse!", note: "Found in a New York Public Library collection decades later [5]." }
      ],
      regulars: ["nina-simone", "john-coltrane", "eric-dolphy", "dizzy-gillespie", "charles-mingus", "machito", "tito-puente", "mongo-santamaria", "dexter-gordon", "sonny-stitt"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d8/VillageGate.jpg",
        page: "https://commons.wikimedia.org/wiki/File:VillageGate.jpg",
        caption: "The Village Gate sign at the corner of Thompson and Bleecker Streets, looking southwest from Thompson Street (photograph uploaded in 2006).",
        credit: "Srosenstock, English Wikipedia",
        license: "Public domain"
      },
      sources: [
        { cite: "“Village Gate,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Village_Gate" },
        { cite: "“Art D’Lugoff,” Wikipedia; see also “Art D’Lugoff, Village Gate Impresario, Dies at 85,” New York Times, November 6, 2009.", url: "https://en.wikipedia.org/wiki/Art_D%27Lugoff" },
        { cite: "“Nina at the Village Gate,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Nina_at_the_Village_Gate" },
        { cite: "“Herbie Mann at the Village Gate,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Herbie_Mann_at_the_Village_Gate" },
        { cite: "“Evenings at the Village Gate: John Coltrane with Eric Dolphy,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Evenings_at_the_Village_Gate:_John_Coltrane_with_Eric_Dolphy" }
      ]
    },

    // ───────────────────────── East Village, lofts and after ─────────────────────────
    {
      id: "slugs",
      name: "Slugs’ Saloon",
      aka: "Slugs’; “Slugs’ in the Far East”",
      city: "new-york",
      place: "242 East 3rd Street, between Avenues B and C, East Village",
      kind: "club",
      opened: 1964, closed: 1972,
      periods: null,
      closedNote: "Closed late in 1972.",
      people: [
        { name: "Robert Schoenholt and Jerry Schultz", role: "owners" }
      ],
      lead: "A narrow bar deep in the East Village, Slugs’ was the late-1960s musicians’ hangout where Sun Ra’s Arkestra played Monday nights and where Lee Morgan was shot.",
      story: [
        "Robert Schoenholt and Jerry Schultz opened Slugs’ in 1964 in a former Ukrainian bar on East 3rd Street, naming it after the “slugs” of G. I. Gurdjieff’s Beelzebub’s Tales to His Grandson; city rules made them drop “Saloon” from the sign [1]. Long and narrow, with the bandstand at the back, it held about 75 people and often twice that [1]. From March 1966 into late 1967 Sun Ra’s Arkestra played every Monday, building an audience that came to include critics and leading musicians, and Sonny Rollins, Albert Ayler and Ornette Coleman also played there [1][2].",
        "Charles Tolliver’s quartet Music Inc. recorded a two-volume live album there in 1970, released by the musician-owned Strata-East label in 1972 [3]. In the early hours of February 19, 1972, Lee Morgan was shot at the club by his common-law wife, Helen Moore, between sets, and died [1][4]. With the neighborhood in decline and Schultz worn down by the life of a club owner, Slugs’ closed later that year [1]."
      ],
      moments: [
        { year: 1966, text: "Sun Ra’s Arkestra begins its Monday-night residency in March [2]." },
        { year: 1972, text: "Lee Morgan is shot and killed at the club on February 19 [4]." }
      ],
      live: [
        { title: "Live at Slugs’", artist: "Charles Tolliver Music Inc.", artistIds: [], year: 1970,
          recorded: "1970 (issued 1972)", label: "strata-east", labelName: "Strata-East", note: "" }
      ],
      regulars: ["sun-ra", "sun-ra-arkestra", "lee-morgan", "albert-ayler", "ornette-coleman", "sonny-rollins"],
      image: null,
      sources: [
        { cite: "“Slugs’ Saloon,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Slugs%27_Saloon" },
        { cite: "“Sun Ra,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Sun_Ra" },
        { cite: "“Live at Slugs’,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Live_at_Slugs%27" },
        { cite: "“Lee Morgan,” Wikipedia; see also “Inside Slugs’ Saloon, Jazz’s Most Notorious Nightclub,” JazzTimes, September 10, 2015.", url: "https://en.wikipedia.org/wiki/Lee_Morgan" }
      ]
    },

    {
      id: "studio-rivbea",
      name: "Studio Rivbea",
      aka: "",
      city: "new-york",
      place: "24 Bond Street, NoHo",
      kind: "loft",
      opened: 1970, closed: 1978,
      periods: null,
      closedNote: "Usually dated c. 1970–1978; sources differ on both ends, some dating the first public concerts to 1972–73.",
      people: [
        { name: "Sam Rivers", role: "co-founder; saxophonist, flutist and composer", artistId: "sam-rivers" },
        { name: "Beatrice (Bea) Rivers", role: "co-founder" },
        { name: "Alan Douglas", role: "producer of the 1976 Wildflowers recordings" }
      ],
      lead: "Sam and Bea Rivers’s performance space in a Bond Street loft was, in the critic John Litweiler’s words, “the most famous of the lofts,” the center of a 1970s scene in which musicians presented their own music.",
      story: [
        "Sam Rivers, who had recorded for Blue Note in the 1960s, and his wife Beatrice ran Studio Rivbea, named for both of them, in a loft at 24 Bond Street [1][2]. Accounts date its opening as a public venue anywhere from 1970 to 1973, and it closed around 1978 [1][3][4]. Admission was by donation, which paid the rent and the musicians, and sets ran into the early morning [2]. Michael Heller describes loft practice as built on low admission, casual rooms that blurred the line between performer and audience, ownership by musicians, and spaces that mixed living quarters with performance [5]. Litweiler called Rivbea “the most famous of the lofts” [1][7].",
        "Rivbea anchored the loft scene that grew after 1972, when musicians organized the New York Musicians’ Jazz Festival as a counter to the Newport festival’s move to New York; members of Chicago’s AACM and St. Louis’s Black Artists Group, and Californians such as Arthur Blythe and David Murray, joined it [3]. In May 1976 the producer Alan Douglas recorded a festival at the loft and released five LPs, Wildflowers: The New York Loft Jazz Sessions, on his Douglas label in 1977 [6]. Rising rents ended most of the lofts by the early 1980s [3]."
      ],
      moments: [
        { year: 1972, text: "Musicians stage the New York Musicians’ Jazz Festival in parks, community centers and lofts, a counter to the Newport festival’s move to New York [3]." },
        { year: 1976, text: "Wildflowers is recorded at the loft between May 14 and 23 [6]." }
      ],
      live: [
        { title: "Wildflowers: The New York Loft Jazz Sessions", artist: "Various artists", artistIds: ["sam-rivers", "anthony-braxton", "david-murray", "henry-threadgill", "oliver-lake", "hamiet-bluiett", "wadada-leo-smith", "sunny-murray"], year: 1976,
          recorded: "May 14–23, 1976", label: null, labelName: "Douglas", note: "Five LPs, released 1977; reissued on CD by Knit Classics in 1999 [6]." }
      ],
      regulars: ["sam-rivers", "anthony-braxton", "david-murray", "arthur-blythe", "henry-threadgill", "oliver-lake", "hamiet-bluiett", "wadada-leo-smith", "sunny-murray"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sam_Rivers_2006.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Sam_Rivers_2006.jpg",
        caption: "Sam Rivers, co-founder of Studio Rivbea, in performance (photograph uploaded in 2006).",
        credit: "Childishknack, English Wikipedia",
        license: "CC BY-SA 3.0"
      },
      sources: [
        { cite: "“Sam Rivers (jazz musician),” Wikipedia.", url: "https://en.wikipedia.org/wiki/Sam_Rivers_(jazz_musician)" },
        { cite: "Untapped New York, “The Hidden History of 24 Bond Street, the Birthplace of NYC’s DIY Scene.”", url: "https://www.untappedcities.com/the-hidden-history-of-24-bond-street-the-birthplace-of-nycs-diy-scene/" },
        { cite: "“Loft jazz,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Loft_jazz" },
        { cite: "Ed Hazell, Energy Center: A History of Studio Rivbea (NoBusiness Records).", url: "" },
        { cite: "Michael C. Heller, Loft Jazz: Improvising New York in the 1970s (Oakland: University of California Press, 2017).", url: "" },
        { cite: "“Wildflowers: The New York Loft Jazz Sessions,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Wildflowers:_The_New_York_Loft_Jazz_Sessions" },
        { cite: "John Litweiler, The Freedom Principle: Jazz After 1958 (New York: William Morrow, 1984).", url: "" }
      ]
    },

    {
      id: "sweet-basil",
      name: "Sweet Basil",
      aka: "",
      city: "new-york",
      place: "88 Seventh Avenue South, Greenwich Village",
      kind: "club",
      opened: 1974, closed: 2001,
      periods: null,
      closedNote: "Closed in April 2001; briefly revived as Sweet Rhythm.",
      people: [
        { name: "Sharif Esmat", role: "founder" },
        { name: "Phyllis and Mel Litoff", role: "owners, 1981–1992" },
        { name: "Gil Evans", role: "leader of the Monday Night Orchestra from 1983", artistId: "gil-evans" }
      ],
      lead: "A restaurant on Seventh Avenue South, a few blocks from the Vanguard, Sweet Basil became one of the busiest and most recorded jazz rooms of the 1980s, and the Monday-night home of Gil Evans’s orchestra.",
      story: [
        "Sharif Esmat founded Sweet Basil at 88 Seventh Avenue South in 1974; it began as a restaurant and soon became a jazz club, owned from 1981 to 1992 by Phyllis and Mel Litoff [1][2]. In the 1980s it was among the city’s most prominent rooms and one of its most recorded, often by European and Japanese labels: Art Blakey’s Jazz Messengers, Abdullah Ibrahim, the David Murray Big Band, Paul Bley and McCoy Tyner all made live albums there [1].",
        "In April 1983 Gil Evans began rehearsing a band at the club on Monday nights to prepare for a tour of Japan. The club asked him to keep going, and the Monday Night Orchestra, with players such as Lew Soloff, George Adams and Howard Johnson, became a fixture for most of the years before Evans’s death in 1988; its 1984 sets were issued as Live at Sweet Basil [3]. The club closed in April 2001 [1][2]."
      ],
      moments: [
        { year: 1983, text: "Gil Evans starts his Monday-night workshop band in April [3]." },
        { year: 1984, text: "The David Murray Big Band and Gil Evans’s Monday Night Orchestra both record live albums at the club [1][3]." }
      ],
      live: [
        { title: "Live at Sweet Basil", artist: "Gil Evans and the Monday Night Orchestra", artistIds: ["gil-evans"], year: 1984,
          recorded: "1984", label: null, labelName: "Gramavision (U.S.); recorded by King Records of Japan", note: "" },
        { title: "Live at Sweet Basil, Vol. 1", artist: "David Murray Big Band", artistIds: ["david-murray"], year: 1984,
          recorded: "1984", label: "black-saint", labelName: "Black Saint", note: "" },
        { title: "Live at Sweet Basil", artist: "Art Blakey and the Jazz Messengers", artistIds: ["art-blakey", "jazz-messengers"], year: 1985,
          recorded: "1985", label: null, labelName: "Paddle Wheel / GNP Crescendo", note: "" }
      ],
      regulars: ["gil-evans", "art-blakey", "jazz-messengers", "david-murray", "mccoy-tyner", "abdullah-ibrahim", "paul-bley"],
      image: null,
      sources: [
        { cite: "“Sweet Basil Jazz Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Sweet_Basil_Jazz_Club" },
        { cite: "Untapped New York, “Jazz Clubs NYC: Sweet Basil’s – Past,” April 6, 2023.", url: "https://untappedcities.com/2023/04/06/jazz-clubs-nyc/7/" },
        { cite: "“Live at Sweet Basil (Gil Evans album),” Wikipedia.", url: "https://en.wikipedia.org/wiki/Live_at_Sweet_Basil_(Gil_Evans_album)" }
      ]
    },

    {
      id: "blue-note-nyc",
      name: "Blue Note",
      aka: "Blue Note Jazz Club",
      city: "new-york",
      place: "131 West 3rd Street, Greenwich Village",
      kind: "club",
      opened: 1981, closed: null,
      periods: null,
      closedNote: "",
      people: [
        { name: "Danny Bensusan", role: "founder and owner" }
      ],
      lead: "Danny Bensusan’s Blue Note, opened in 1981, turned the jazz club into a brand: star bookings, dinner, two shows a night and, in time, franchises from Tokyo to Rio.",
      story: [
        "Bensusan opened the club on September 30, 1981, with Nat Adderley’s quintet, betting that big names in a comfortable room with good food would fill it night after night [1][2]. It took its name from the musical term, not the record label, and it booked stars: Dizzy Gillespie, Sarah Vaughan, Oscar Peterson, Lionel Hampton, Ray Charles and the Modern Jazz Quartet [1]. In June 1994 Keith Jarrett’s trio with Gary Peacock and Jack DeJohnette played six sets over three nights there, which ECM released complete as a six-disc box the following year [3].",
        "The Blue Note became an export. Blue Note Tokyo opened in 1988, followed by Osaka and Fukuoka in 1990 and Milan in 2003, and after 2016 by clubs in Napa, Hawaii, China and Brazil, all run by the Blue Note Entertainment Group, which also stages a festival and runs a live label, Half Note Records [1]. Besides those, the group now lists clubs in Los Angeles, London, São Paulo and Shanghai; the Greenwich Village flagship on West 3rd Street is still in business [1][2]."
      ],
      moments: [
        { year: 1981, text: "Opening night, September 30, with the Nat Adderley Quintet [1]." },
        { year: 1988, text: "Blue Note Tokyo opens, the first branch abroad [1]." },
        { year: 1994, text: "Keith Jarrett’s Standards Trio records six sets over three nights in June [3]." }
      ],
      live: [
        { title: "Keith Jarrett at the Blue Note: The Complete Recordings", artist: "Keith Jarrett, Gary Peacock, Jack DeJohnette", artistIds: ["keith-jarrett", "gary-peacock", "jack-dejohnette"], year: 1994,
          recorded: "June 1994", label: "ecm", labelName: "ECM", note: "Six CDs, released in 1995 [3]." }
      ],
      regulars: ["dizzy-gillespie", "sarah-vaughan", "oscar-peterson", "lionel-hampton", "chick-corea", "keith-jarrett", "robert-glasper", "christian-mcbride", "ron-carter", "joshua-redman"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Blue_Note_Jazz_Club%2C_New_York_City.jpg/960px-Blue_Note_Jazz_Club%2C_New_York_City.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Blue_Note_Jazz_Club,_New_York_City.jpg",
        caption: "The Blue Note Jazz Club on West 3rd Street, December 2016.",
        credit: "Hantsheroes",
        license: "CC BY-SA 4.0"
      },
      sources: [
        { cite: "“Blue Note Jazz Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Blue_Note_Jazz_Club" },
        { cite: "Blue Note New York, “About,” official website.", url: "https://www.bluenotejazz.com/nyc/about/" },
        { cite: "“Keith Jarrett at the Blue Note,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Keith_Jarrett_at_the_Blue_Note" }
      ]
    },

    {
      id: "knitting-factory",
      name: "Knitting Factory",
      aka: "",
      city: "new-york",
      place: "47 East Houston Street (from 1987), later 74 Leonard Street, Tribeca",
      kind: "club",
      opened: 1987, closed: 2009,
      periods: null,
      closedNote: "The Manhattan club closed in July 2009. The brand moved to Williamsburg, Brooklyn (2009–2022) and briefly to the East Village (2023–24), mainly as a rock and comedy venue.",
      people: [
        { name: "Michael Dorf", role: "co-founder" },
        { name: "Louis Spitzer", role: "co-founder" },
        { name: "Bob Appel", role: "co-owner and co-manager" },
        { name: "John Zorn", role: "shaped the programming in the early years", artistId: "john-zorn" }
      ],
      lead: "Michael Dorf’s Knitting Factory gave the downtown scene of the late 1980s and ’90s, from John Zorn to the Lounge Lizards, a club, a festival and a record label.",
      story: [
        "Michael Dorf and Louis Spitzer opened the Knitting Factory in 1987 at 47 East Houston Street, near CBGB, as an art gallery with a performance space and café [1]. John Zorn shaped its programming in the early years, and it presented musicians who ignored the borders between jazz, rock and new music: the Lounge Lizards, Zorn, Don Byron, Dewey Redman, Anthony Braxton and Cecil Taylor [1]. The owners recorded performances and sent them to radio stations, started a nationally syndicated radio show around 1990 and a label, Knitting Factory Works, and from 1990 sponsored the What Is Jazz? festival [1][2].",
        "The club later moved to a larger building at 74 Leonard Street in Tribeca, with a main hall for rock and smaller basement stages at first devoted to the avant-garde [1]. In 2009 it left Manhattan for Williamsburg, where it became mainly a rock and comedy venue; that room closed in 2022, citing steep rent increases on top of pandemic losses [1]. A revival in the East Village, in the former Pyramid Club on Avenue A, opened in July 2023 and shut a year later [1]."
      ],
      moments: [
        { year: 1987, text: "Opens on East Houston Street [1]." },
        { year: 1990, text: "The What Is Jazz? festival begins [1]." },
        { year: 2009, text: "The last Manhattan show, July 25 [1]." }
      ],
      live: [],
      regulars: ["john-zorn", "don-byron", "dewey-redman", "anthony-braxton", "cecil-taylor"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Knitting_Factory_%28New_York%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Knitting_Factory_(New_York).jpg",
        caption: "The stage of the Knitting Factory in New York, December 2008, in the club’s last year in Manhattan.",
        credit: "honeymoon music",
        license: "CC BY 2.0"
      },
      sources: [
        { cite: "“Knitting Factory,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Knitting_Factory" },
        { cite: "Ashley Kahn, “After Hours: New York’s Jazz Joints Through the Ages,” JazzTimes, September 2006.", url: "" }
      ]
    },

    {
      id: "smalls",
      name: "Smalls Jazz Club",
      aka: "Smalls",
      city: "new-york",
      place: "183 West 10th Street, Greenwich Village",
      kind: "club",
      opened: 1994, closed: null,
      periods: [[1994, 2003], [2006, null]],
      closedNote: "Closed May 31, 2003; reopened in 2006 (some accounts say 2007).",
      people: [
        { name: "Mitch Borden", role: "founder; former Navy submariner and nurse" },
        { name: "Spike Wilner", role: "pianist; co-owner from the reopening, sole owner since 2019" },
        { name: "Frank Hewitt", role: "house pianist in the 1990s" },
        { name: "Luke Kaven", role: "producer of the club’s record label" }
      ],
      lead: "A basement on West 10th Street opened by a former submariner, Smalls revived the all-night jam session in the 1990s and later became a pioneer of streaming jazz.",
      story: [
        "Mitch Borden, a former Navy submariner and nurse, opened Smalls in 1994 in a basement that held about fifty people. It served no alcohol, charged $10 at the door and ran from 10:30 at night until as late as six in the morning [1]. It became a school for a generation of young players, among them Kurt Rosenwinkel, Mark Turner, Omer Avital, Jason Lindner and Peter Bernstein, with the veteran Frank Hewitt as house pianist [1]. Rising rents, the slump after September 11 and the city’s ban on smoking indoors closed it on May 31, 2003 [1].",
        "Borden reopened Smalls in 2006 with the pianist Spike Wilner and Lee Kostrinsky, this time with a bar and two or three sets a night instead of all-night sessions [1]. The club began streaming its sets in 2007 and keeps an archive of them; subscription revenue is shared with the musicians [1][2]. Wilner became sole owner after Borden retired, and during the pandemic he set up the nonprofit SmallsLIVE Foundation to support Smalls, its sister club Mezzrow and the musicians who play them [2][3][4]."
      ],
      moments: [
        { year: 1994, text: "Mitch Borden opens the club [1]." },
        { year: 2003, text: "Smalls closes on May 31 [1]." },
        { year: 2007, text: "The club starts streaming its sets live [2]." }
      ],
      live: [],
      regulars: ["kurt-rosenwinkel", "mark-turner"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mitchell_Borden_1998.jpg/960px-Mitchell_Borden_1998.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Mitchell_Borden_1998.jpg",
        caption: "Mitch Borden, Smalls’s founder, on the club’s staircase, April 1998.",
        credit: "MikaV",
        license: "CC BY-SA 4.0"
      },
      sources: [
        { cite: "“Smalls Jazz Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Jazz_Club" },
        { cite: "SmallsLIVE, “About.”", url: "https://www.smallslive.com/about" },
        { cite: "DownBeat, “Spike Wilner Announces SmallsLIVE Nonprofit.”", url: "https://downbeat.com/news/detail/spike-wilner-announces-smallslive-nonprofit" },
        { cite: "Jewish Insider, profile of Spike Wilner, March 2021.", url: "https://jewishinsider.com/2021/03/spike-wilner-jazz-new-york-city/" }
      ]
    },

    {
      id: "the-stone",
      name: "The Stone",
      aka: "",
      city: "new-york",
      place: "Avenue C at East 2nd Street (2005–2018); Glass Box Theatre, The New School, 55 West 13th Street (since 2018)",
      kind: "club",
      opened: 2005, closed: null,
      periods: null,
      closedNote: "Left the East Village in early 2018 for The New School.",
      people: [
        { name: "John Zorn", role: "founder and artistic director", artistId: "john-zorn" },
        { name: "Irving Stone", role: "the devoted concertgoer it is named for" }
      ],
      lead: "John Zorn’s nonprofit space serves no drinks, gives all the door money to the musicians and has offered experimental improvisers a stage, often for a week at a time, since 2005.",
      story: [
        "Zorn opened the Stone in April 2005 in a former Chinese restaurant at Avenue C and 2nd Street, naming it for Irving Stone, an “inveterate concertgoer” of the downtown scene [1]. It turned the club economy inside out: no food, no drinks, no cabaret license, and all admission money to the performers, with the space paid for by donations, benefit concerts and a series of limited-edition CDs [1]. Until 2013 a different guest curator booked each month; since then artists have taken week-long residencies, six nights a week, two sets a night [1].",
        "Zorn announced in December 2016 that the East Village room would close; after its last shows there in early 2018 the Stone moved into the Glass Box Theatre at The New School on West 13th Street [1][2]. It continues there, with Zorn as artistic director, running residencies from Wednesday through Saturday [3]. The old Avenue C room had no sign beyond small gold lettering on the door, visible only after the metal security gate rolled up a few hours before each show [1]."
      ],
      moments: [
        { year: 2005, text: "Opens in April at Avenue C and 2nd Street [1]." },
        { year: 2013, text: "Monthly guest curators give way to week-long residencies [1]." },
        { year: 2018, text: "Moves to The New School’s Glass Box Theatre [1][2]." }
      ],
      live: [],
      regulars: ["john-zorn"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/John_Zorn_at_Town_Hall%2C_September_2014.jpg/960px-John_Zorn_at_Town_Hall%2C_September_2014.jpg",
        page: "https://commons.wikimedia.org/wiki/File:John_Zorn_at_Town_Hall,_September_2014.jpg",
        caption: "John Zorn, the Stone’s founder and artistic director, at Town Hall, New York, September 2014.",
        credit: "Steven Pisano",
        license: "CC BY 2.0"
      },
      sources: [
        { cite: "“The Stone (music space),” Wikipedia.", url: "https://en.wikipedia.org/wiki/The_Stone_(music_space)" },
        { cite: "WBGO, “The Stone Announces a New Home in Partnership with The New School,” March 1, 2017.", url: "https://www.wbgo.org/music/2017-03-01/the-stone-announces-a-new-home-in-partnership-with-the-new-school" },
        { cite: "The New School, “The Stone.”", url: "https://ww3.newschool.edu/performing-arts/the-stone/" }
      ]
    },

    {
      id: "jazz-gallery",
      name: "The Jazz Gallery",
      aka: "",
      city: "new-york",
      place: "290 Hudson Street (1995–2012); Broadway at 27th Street, NoMad (since 2012)",
      kind: "club",
      opened: 1995, closed: null,
      periods: null,
      closedNote: "",
      people: [
        { name: "Dale Fitzgerald", role: "co-founder; executive director until 2009 (died 2015)" },
        { name: "Lezlie Harrison", role: "co-founder; vocalist" },
        { name: "Roy Hargrove", role: "co-founder; trumpeter", artistId: "roy-hargrove" },
        { name: "Rio Sakairi", role: "artistic director" }
      ],
      lead: "Founded in 1995 in a Hudson Street loft where Roy Hargrove rehearsed his big band, the Jazz Gallery became New York’s leading room for young composers and new work.",
      story: [
        "In 1992 Dale Fitzgerald leased a second-floor loft at 290 Hudson Street as a rehearsal space for Roy Hargrove, then his business client; by 1995 Fitzgerald, the singer Lezlie Harrison and Hargrove had turned it into the Jazz Gallery, a performance space and cultural center for visiting and local musicians [1][2]. Fitzgerald ran it as executive director until 2009 [3]. Instead of booking established names for profit, it commissions new work, offers residencies and presents emerging artists; it says twelve winners of the Thelonious Monk Competition got their start on its stage [1]. In 2012 it moved to a fifth-floor space on Broadway near 27th Street, with Rio Sakairi as artistic director [1][2]. Since 2022 the Roy Hargrove Big Band has held a monthly residency there, four years after Hargrove’s death [4]."
      ],
      moments: [
        { year: 1995, text: "The Gallery opens at 290 Hudson Street [1][2]." },
        { year: 2012, text: "Moves to Broadway in the Flatiron/NoMad district [2]." },
        { year: 2022, text: "The Roy Hargrove Big Band begins a monthly residency on March 10 [4]." }
      ],
      live: [],
      regulars: ["roy-hargrove"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Roy_Hargrove_1992.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Roy_Hargrove_1992.jpg",
        caption: "Roy Hargrove, a co-founder of the Jazz Gallery, at the Monterey Jazz Festival in 1992.",
        credit: "Brian McMillen",
        license: "CC BY-SA 4.0"
      },
      sources: [
        { cite: "The Jazz Gallery, “About.”", url: "https://jazzgallery.org/about" },
        { cite: "Jazz Speaks, “The Jazz Gallery Origins: Dale Fitzgerald and Lezlie Harrison Speak.”", url: "https://www.jazzspeaks.org/jazz-speaks/the-jazz-gallery-origins-dale-fitzgerald-and-lezlie-harrison-speak" },
        { cite: "JazzTimes, “Dale Fitzgerald, Co-Founder of NYC’s Jazz Gallery, Dies at 72,” March 2015.", url: "" },
        { cite: "The Jazz Gallery, “Roy Hargrove Big Band.”", url: "https://jazzgallery.org/roy-hargrove-big-band" }
      ]
    },

    {
      id: "dizzys",
      name: "Dizzy’s Club",
      aka: "Dizzy’s Club Coca-Cola (original sponsored name)",
      city: "new-york",
      place: "Frederick P. Rose Hall, Deutsche Bank Center (formerly Time Warner Center), Columbus Circle",
      kind: "institution",
      opened: 2004, closed: null,
      periods: null,
      closedNote: "",
      people: [
        { name: "Wynton Marsalis", role: "artistic director of Jazz at Lincoln Center", artistId: "wynton-marsalis" },
        { name: "Todd Barkan", role: "former owner of San Francisco’s Keystone Korner, who helped start the club" }
      ],
      lead: "The jazz club inside Jazz at Lincoln Center’s home at Columbus Circle, Dizzy’s is the clearest sign of jazz’s move from the nightclub economy into the institutional one.",
      story: [
        "Jazz at Lincoln Center, founded in 1987 with Wynton Marsalis as artistic director, opened its own $131 million home, Frederick P. Rose Hall, on the fifth floor of the Time Warner Center in October 2004, the first performance, education and broadcast complex built for jazz [1]. Of its three rooms, the smallest, a 140-seat club with windows over Columbus Circle and Central Park, was named for Dizzy Gillespie and designed for trios, pianists and singers [1]. A sponsorship gave it its original name, Dizzy’s Club Coca-Cola; the venue now calls itself Dizzy’s Club [2][3]. Todd Barkan, who had run San Francisco’s Keystone Korner, helped start it at Marsalis’s invitation [4].",
        "Jazz at Lincoln Center has been praised for giving jazz the standing of a concert-hall art and criticized for the narrow, neoclassical canon associated with Marsalis [5]. Dizzy’s sits between those positions: it works like a club, with nightly sets, a cover charge and a skyline view, but it belongs to a nonprofit whose orchestra, education programs and donors support it [1][3]. Barkan created festivals there, among them Women in Jazz and Generations in Jazz [4]."
      ],
      moments: [
        { year: 2004, text: "Opens in October with Frederick P. Rose Hall [1][2]." }
      ],
      live: [],
      regulars: ["wynton-marsalis", "jazz-at-lincoln-center-orchestra"],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tisziji_Munoz%2C_Dizzy%27s_Club_-_Jazz_at_Lincoln_Center%2C_2011.jpg/960px-Tisziji_Munoz%2C_Dizzy%27s_Club_-_Jazz_at_Lincoln_Center%2C_2011.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Tisziji_Munoz,_Dizzy%27s_Club_-_Jazz_at_Lincoln_Center,_2011.jpg",
        caption: "The guitarist Tisziji Muñoz performing at Dizzy’s Club, Jazz at Lincoln Center, 2011.",
        credit: "Km2329",
        license: "CC BY-SA 4.0"
      },
      sources: [
        { cite: "“Jazz at Lincoln Center,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Jazz_at_Lincoln_Center" },
        { cite: "All About Jazz, “Jazz at Lincoln Center Introduces Dizzy’s Club Coca-Cola.”", url: "https://www.allaboutjazz.com/news/jazz-at-lincoln-center-introduces-dizzys-club-coca-cola" },
        { cite: "Jazz at Lincoln Center, “Dizzy’s Club,” official website.", url: "https://www.jazz.org/dizzys/" },
        { cite: "National Endowment for the Arts, “Jazz Moments: Todd Barkan on Founding Dizzy’s Club Coca-Cola.”", url: "https://www.arts.gov/stories/jazz-moments/todd-barkan-founding-dizzys-club-coca-cola" },
        { cite: "Ted Gioia, The History of Jazz, 2nd ed. (New York: Oxford University Press, 2011).", url: "" }
      ]
    }
  ],

  essays: [
    {
      id: "the-room",
      title: "The Room",
      kicker: "What a club does to music",
      lead: "How the bandstand, the door, the police and the landlord shaped what jazz musicians played and who got to hear it.",
      paras: [
        "Clubs shaped jazz as surely as records did. The room decided how long a band played, who listened and who paid. At the Cotton Club, Duke Ellington wrote overtures, dance numbers and “jungle” effects for floor shows and radio, a discipline that helped turn his band into an orchestra [1]. At the Savoy two bands faced the crowd from a double bandstand so the dancing never stopped [2]. The listening room ran on the set: on June 25, 1961, Bill Evans’s trio played five sets at the Village Vanguard, two in the afternoon and three at night, each about half an hour [3]. The Half Note, unusually, let bands play as long as they liked [4].",
        "Before there were jazz schools, there was the jam session. At Harlem rent parties stride pianists held cutting contests for the right to the keyboard, and at Minton’s and Monroe’s in the early 1940s the after-hours session was both seminar and trial [5][6][31]. Minton’s house band called tunes in hard keys to scare off weaker players; Charles Mingus recalled that “to play at Minton’s you couldn’t just walk in and grab a bass” [6]. The sessions were also an economic workaround: the musicians’ union forbade unpaid jamming and fined offenders, and Henry Minton’s standing as a union delegate gave his room some protection [6]. Smalls revived the all-night session in the 1990s and trained a new generation the same way [7].",
        "Who could sit in the room mattered as much as who played on the stand. The Cotton Club and Connie’s Inn put Black entertainers before white-only audiences; Langston Hughes called the Cotton Club “a Jim Crow club for gangsters and monied whites” [1][8]. Smalls Paradise and the Savoy’s dance floor were open to Harlem, and in 1938 Barney Josephson opened Café Society in the Village so that, as he put it, Black and white performers would work together “behind the footlights” and customers would sit together “out front” [9][2][10]. On 52nd Street Black stars headlined rooms that did not always want Black customers, and the Famous Door fired Billie Holiday and Teddy Wilson for mixing with a white bandleader in the audience [11].",
        "The police shaped the music too. New York’s cabaret laws, on the books since the late 1920s, licensed rooms with music and dancing, and from about 1940 (some accounts say 1943) until 1967 everyone who worked in a nightclub had to carry a police-issued cabaret card [12][13][14]. A drug conviction could cost it. Billie Holiday lost hers after a 1947 narcotics conviction and afterward sang mostly in theaters and concert halls; Thelonious Monk lost his in 1951 and did not return to the city’s clubs until 1957, at the Five Spot; Charlie Parker, Chet Baker and Jackie McLean were among many others [15][16][27][13]. Control of the cards moved from the police in 1961, and the city abolished them in 1967 [13][17].",
        "Much of the business was owned by people the musicians did not choose. Prohibition made bootleggers such as Owney Madden into club owners, and the habit outlasted Repeal [1][18]. The money came through the cover charge, the drink minimum and the admission price: the Cotton Club charged a two-dollar minimum on weeknights, while Birdland’s $1.50 bullpen let young listeners in without buying a table [1][21]. Birdland’s Morris Levy learned that publishing paid better than the door. When George Shearing wrote “Lullaby of Birdland” in 1952 as the club’s radio theme, the publishing went to Levy, who later founded Roulette Records and was convicted of extortion shortly before he died [19][20]. Outside that club in 1959, a policeman beat Miles Davis [21].",
        "The live album turned the room into an instrument. Blue Note recorded Art Blakey at Birdland in 1954 and Sonny Rollins at the Village Vanguard in 1957, the first live recording made there; Riverside, Impulse!, Prestige and ECM followed into the Vanguard, the Five Spot and the Blue Note [22][23][3]. The applause, the clink of glasses and the long solos became part of the music’s sound, and the name sold records: Blue Note’s Bruce Lundvall said the words “Live at the Village Vanguard” had “a direct and positive influence on an album’s sales” [24]. Some of the most precious documents were never meant for release, such as Jerry Newman’s amateur discs at Minton’s in 1941 and tapes of Coltrane and Dolphy at the Village Gate that surfaced in 2023 [25][26].",
        "Rooms close because the land under them is worth more than the music in them. The Savoy was demolished for a housing development in 1959; the Five Spot’s building came down for senior housing in 1962, the same year Jimmy Ryan’s, the last club on 52nd Street, fell to the CBS Building [2][27][28]. Birdland closed in 1965 after a bankruptcy filing [21]. The lofts of the 1970s faded as rents rose; Smalls closed in 2003 under rising rent, the post–September 11 slump and the smoking ban; and the Knitting Factory left Brooklyn in 2022 citing rent increases [29][7][30]. The survivors have found other foundations: family ownership at the Vanguard, nonprofit status at the Stone, the Jazz Gallery and Smalls, and an institution at Jazz at Lincoln Center."
      ],
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Tommy_Potter%2C_Charlie_Parker_and_max_Raoch%2C_Three_Deuces%2C_NYC%2C_ca._August_1947._%28Gottlieb%29.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Tommy_Potter,_Charlie_Parker_and_max_Raoch,_Three_Deuces,_NYC,_ca._August_1947._(Gottlieb).jpg",
        caption: "Tommy Potter and Charlie Parker on the bandstand at the Three Deuces on 52nd Street, with Max Roach hidden behind them, c. August 1947.",
        credit: "William P. Gottlieb; Library of Congress, William P. Gottlieb Collection",
        license: "Public domain"
      },
      sources: [
        { cite: "“Cotton Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Cotton_Club" },
        { cite: "“Savoy Ballroom,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Savoy_Ballroom" },
        { cite: "“Sunday at the Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Sunday_at_the_Village_Vanguard" },
        { cite: "“Half Note Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Half_Note_Club" },
        { cite: "“Rent party,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Rent_party" },
        { cite: "“Minton’s Playhouse,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Minton%27s_Playhouse" },
        { cite: "“Smalls Jazz Club,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Jazz_Club" },
        { cite: "Langston Hughes, The Big Sea (New York: Alfred A. Knopf, 1940).", url: "" },
        { cite: "“Smalls Paradise,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Smalls_Paradise" },
        { cite: "“Barney Josephson,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Barney_Josephson" },
        { cite: "“Famous Door,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Famous_Door" },
        { cite: "Ben Houtman, “A Brief History of New York City’s Cabaret Laws,” Allegro (Local 802, AFM), May 2016.", url: "https://www.local802afm.org/allegro/articles/a-brief-history-of-new-york-citys-cabaret-laws/" },
        { cite: "“New York City Cabaret Card,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Cabaret_card" },
        { cite: "NPR, “The Law Police Used To Discriminate Against Musicians Of Color” (Jazz Night in America), June 3, 2020.", url: "https://www.witf.org/2020/06/03/the-law-police-used-to-discriminate-against-musicians-of-color/" },
        { cite: "“Billie Holiday,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Billie_Holiday" },
        { cite: "“Thelonious Monk,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Thelonious_Monk" },
        { cite: "Paul Chevigny, Gigs: Jazz and the Cabaret Laws in New York City (New York: Routledge, 1991).", url: "" },
        { cite: "“Owney Madden,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Owney_Madden" },
        { cite: "“Lullaby of Birdland,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Lullaby_of_Birdland" },
        { cite: "“Morris Levy,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Morris_Levy" },
        { cite: "“Birdland (New York jazz club),” Wikipedia.", url: "https://en.wikipedia.org/wiki/Birdland_(New_York_jazz_club)" },
        { cite: "“A Night at Birdland, Vols. 1–3,” Wikipedia.", url: "https://en.wikipedia.org/wiki/A_Night_at_Birdland_Vol._1" },
        { cite: "“A Night at the ‘Village Vanguard’,” Wikipedia.", url: "https://en.wikipedia.org/wiki/A_Night_at_the_%22Village_Vanguard%22" },
        { cite: "“Village Vanguard,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Village_Vanguard" },
        { cite: "“Midnight at Minton’s,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Midnight_at_Minton%27s" },
        { cite: "“Evenings at the Village Gate: John Coltrane with Eric Dolphy,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Evenings_at_the_Village_Gate:_John_Coltrane_with_Eric_Dolphy" },
        { cite: "“Five Spot Café,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Five_Spot_Caf%C3%A9" },
        { cite: "“Jimmy Ryan’s,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Jimmy_Ryan%27s" },
        { cite: "“Loft jazz,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Loft_jazz" },
        { cite: "“Knitting Factory,” Wikipedia.", url: "https://en.wikipedia.org/wiki/Knitting_Factory" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (Berkeley: University of California Press, 1997).", url: "" }
      ]
    }
  ]
});
