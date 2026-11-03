/* Jazz Family Tree — Neo-Tradition & Downtown era:
   The Young Lions, Modern Big Bands, Downtown & M-Base, Acid Jazz & Jazz-Rap. */
JAZZ.add({
  branches: {
    "young-lions": {
      summary: "In the early 1980s a cohort of young, conservatory-trained players led by Wynton Marsalis, who joined Art Blakey's Jazz Messengers in 1980, revived acoustic, swing-based jazz rooted in bebop, hard bop and Ellington. Many came out of Ellis Marsalis's classes at the New Orleans Center for Creative Arts or Blakey's band, and major labels marketed them in sharp suits as 'Young Lions'. Jazz at Lincoln Center, launched in 1987, gave the movement an institutional home. Critics charged it with a neo-conservatism that wrote fusion and the post-1960s avant-garde out of the story, and the 'jazz wars' it sparked lasted into the 2000s.",
      keyAlbums: [
        "New York Second Line — Terence Blanchard & Donald Harrison (1983)",
        "Black Codes (From the Underground) — Wynton Marsalis (1985)",
        "Royal Garden Blues — Branford Marsalis (1986)",
        "Diamond in the Rough — Roy Hargrove (1990)",
        "Wish — Joshua Redman (1993)",
        "Blood on the Fields — Wynton Marsalis & the Lincoln Center Jazz Orchestra (1997)"
      ],
      places: ["New Orleans Center for Creative Arts", "Art Blakey's Jazz Messengers (bandstand school)", "Jazz at Lincoln Center", "Bradley's (Greenwich Village)"]
    },
    "big-band-modern": {
      summary: "With big bands commercially marginal after the swing era, Thad Jones and Mel Lewis began Monday nights at the Village Vanguard in February 1966 with an orchestra of top New York players, a residency that continues today as the Vanguard Jazz Orchestra. Jones's writing, Toshiko Akiyoshi's orchestra (formed in Los Angeles in 1973) and Bob Brookmeyer's classically informed scores turned the big band into a composer's medium rather than a dance band. Repertory ensembles like the Jazz at Lincoln Center Orchestra and the Mingus Big Band raised the 'jazz as museum' debate, while Maria Schneider and Darcy James Argue pushed toward through-composed, genre-blurring writing and fan-funded releases.",
      keyAlbums: [
        "Consummation — Thad Jones/Mel Lewis Orchestra (1970)",
        "Kogun — Toshiko Akiyoshi–Lew Tabackin Big Band (1974)",
        "Make Me Smile & Other New Works by Bob Brookmeyer — Mel Lewis Jazz Orchestra (1982)",
        "Concert in the Garden — Maria Schneider Orchestra (2004)",
        "Infernal Machines — Darcy James Argue's Secret Society (2009)"
      ],
      places: ["Village Vanguard", "Birdland", "Visiones (Greenwich Village)", "Jazz Standard"]
    },
    "downtown": {
      summary: "'Downtown' covers two overlapping New York scenes of the 1980s and 1990s. In Lower Manhattan lofts and clubs such as the Knitting Factory (opened 1987) and later Tonic, John Zorn, Bill Frisell, Tim Berne, Marc Ribot and Dave Douglas mixed free improvisation with punk, klezmer, film music and game-based composition. In Brooklyn, Steve Coleman, Greg Osby, Cassandra Wilson and Geri Allen formed the M-Base collective, building improvisation on interlocking, funk-derived rhythmic cycles. Both scenes were the main counterweight to the Young Lions' canon, and much of their work came out on JMT, Nonesuch and Zorn's Tzadik label.",
      keyAlbums: [
        "Motherland Pulse — Steve Coleman (1985)",
        "The Big Gundown — John Zorn (1986)",
        "Have a Little Faith — Bill Frisell (1993)",
        "Blue Light 'til Dawn — Cassandra Wilson (1993)",
        "Masada: Alef — Masada (1994)"
      ],
      places: ["Knitting Factory", "Tonic", "Fort Greene, Brooklyn"]
    },
    "acid-jazz": {
      summary: "In late-1980s London, DJs such as Gilles Peterson played rare 1960s–70s soul jazz, jazz-funk and Latin records to dancers, and the Acid Jazz (1988) and Talkin' Loud (1990) labels turned that club scene into bands like Galliano, the Brand New Heavies and Incognito. In New York, rap producers built tracks from Blue Note and CTI breaks: A Tribe Called Quest brought in bassist Ron Carter for The Low End Theory (1991), and Guru's Jazzmatazz put Donald Byrd and Roy Ayers in the studio. Us3's sample-based Hand on the Torch became Blue Note's first platinum album. Critics argued over whether sampling honored the music or exploited it, but the movement sent a generation back to the jazz catalogue.",
      keyAlbums: [
        "The Low End Theory — A Tribe Called Quest (1991)",
        "Reachin' (A New Refutation of Time and Space) — Digable Planets (1993)",
        "Jazzmatazz, Vol. 1 — Guru (1993)",
        "Hand on the Torch — Us3 (1993)",
        "Brother Sister — The Brand New Heavies (1994)",
        "Hard Groove — The RH Factor (2003)"
      ],
      places: ["Dingwalls (Camden, London)", "Electric Ballroom (Camden, London)", "Kiss FM (London)", "Queens & Brooklyn, New York"]
    }
  },

  artists: [
    // ───────────── THE YOUNG LIONS ─────────────
    {
      id: "ellis-marsalis", name: "Ellis Marsalis", type: "person",
      born: 1934, died: 2020, origin: "New Orleans, Louisiana, USA",
      instruments: ["piano", "educator"], branch: "young-lions", styles: ["hard-bop"],
      emerged: 1974, tier: 2, wiki: "Ellis_Marsalis_Jr.",
      bio: "A modern-jazz pianist in a trad-jazz town, Marsalis played with Ed Blackwell and Cannonball Adderley but had his greatest impact as a teacher. At the New Orleans Center for Creative Arts and later the University of New Orleans he taught Terence Blanchard, Donald Harrison, Harry Connick Jr. and Nicholas Payton, along with his sons Branford, Wynton, Delfeayo and Jason. He died of COVID-19 complications in 2020.",
      records: ["Fathers and Sons (1982)", "Heart of Gold (1992)", "Music Redeems (2010)"],
      influences: []
    },
    {
      id: "wynton-marsalis", name: "Wynton Marsalis", type: "person",
      born: 1961, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["trumpet", "composer"], branch: "young-lions", styles: ["big-band-modern"],
      emerged: 1982, tier: 1, wiki: "Wynton_Marsalis",
      bio: "Leaving Juilliard for Art Blakey's Jazz Messengers, Marsalis became the face of 1980s neo-traditionalism and won Grammys in both jazz and classical categories in the same year. He helped start Jazz at Lincoln Center in 1987, and in 1997 his oratorio Blood on the Fields became the first jazz work to win the Pulitzer Prize for Music. His narrow definition of jazz drew sharp criticism. He plans to step down as JALC artistic director in July 2027.",
      records: ["Black Codes (From the Underground) (1985)", "Marsalis Standard Time, Vol. 1 (1987)", "Blood on the Fields (1997)"],
      influences: ["ellis-marsalis", "art-blakey", "louis-armstrong", "duke-ellington", "clifford-brown"]
    },
    {
      id: "branford-marsalis", name: "Branford Marsalis", type: "person",
      born: 1960, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["tenor saxophone", "soprano saxophone"], branch: "young-lions", styles: ["acid-jazz"],
      emerged: 1982, tier: 1, wiki: "Branford_Marsalis",
      bio: "Wynton's older brother played in the Jazz Messengers and his brother's first quintet, then broke ranks in 1985 to tour with Sting. His quartet with Kenny Kirkland and Jeff 'Tain' Watts became one of the era's defining small groups. More willing than Wynton to cross genres, he co-wrote Gang Starr's 'Jazz Thing', led Buckshot LeFonque, and led the Tonight Show band from 1992 to 1995.",
      records: ["Royal Garden Blues (1986)", "Trio Jeepy (1989)", "Footsteps of Our Fathers (2002)"],
      influences: ["ellis-marsalis", "art-blakey", "john-coltrane", "sonny-rollins"]
    },
    {
      id: "terence-blanchard", name: "Terence Blanchard", type: "person",
      born: 1962, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["trumpet", "composer"], branch: "young-lions",
      emerged: 1982, tier: 2, wiki: "Terence_Blanchard",
      bio: "A NOCCA student of Ellis Marsalis, Blanchard replaced Wynton in the Jazz Messengers in 1982 and became Blakey's musical director, then co-led a quintet with Donald Harrison. As Spike Lee's longtime composer he scored Malcolm X and BlacKkKlansman. His Fire Shut Up in My Bones (2021) was the first opera by a Black composer staged by the Metropolitan Opera. He became SFJAZZ's executive artistic director in 2023.",
      records: ["New York Second Line (1983)", "Malcolm X (1992)", "A Tale of God's Will (A Requiem for Katrina) (2007)"],
      influences: ["ellis-marsalis", "art-blakey", "lionel-hampton"]
    },
    {
      id: "donald-harrison", name: "Donald Harrison", nickname: "Big Chief", type: "person",
      born: 1960, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["alto saxophone"], branch: "young-lions", styles: ["acid-jazz"],
      emerged: 1982, tier: 2, wiki: "Donald_Harrison",
      bio: "Son of a Mardi Gras Indian Big Chief, Harrison played alto with Art Blakey's Jazz Messengers alongside Terence Blanchard before the two co-led their own quintet. His 'Nouveau Swing' fused acoustic swing with second-line, Caribbean, dance and hip-hop rhythms, and Indian Blues (1992) brought Mardi Gras Indian chants into modern jazz. He mentored his nephew Christian Scott aTunde Adjuah and is an NEA Jazz Master.",
      records: ["New York Second Line (1983)", "Indian Blues (1992)", "Nouveau Swing (1997)"],
      influences: ["art-blakey", "ellis-marsalis", "jack-mcduff"]
    },
    {
      id: "marcus-roberts", name: "Marcus Roberts", type: "person",
      born: 1963, died: null, origin: "Jacksonville, Florida, USA",
      instruments: ["piano", "composer"], branch: "young-lions",
      emerged: 1985, tier: 2, wiki: "Marcus_Roberts",
      bio: "Blind since age five, Roberts replaced Kenny Kirkland in Wynton Marsalis's band in the mid-1980s and became the movement's most committed historian at the keyboard. He favors stride, ragtime and Jelly Roll Morton over modal piano. His trio recasts Ellington, Monk and Gershwin, and he has premiered piano concertos with symphony orchestras. He teaches at Florida State University.",
      records: ["The Truth Is Spoken Here (1989)", "Deep in the Shed (1990)", "Alone with Three Giants (1991)"],
      influences: ["wynton-marsalis", "jelly-roll-morton", "thelonious-monk", "duke-ellington"]
    },
    {
      id: "kenny-kirkland", name: "Kenny Kirkland", type: "person",
      born: 1955, died: 1998, origin: "Brooklyn, New York, USA",
      instruments: ["piano", "keyboards"], branch: "young-lions", styles: ["fusion"],
      emerged: 1982, tier: 2, wiki: "Kenny_Kirkland",
      bio: "A Manhattan School of Music pianist who first toured with fusion violinist Michał Urbaniak, Kirkland was the harmonic engine of Wynton Marsalis's first quintet and then of Branford Marsalis's quartet. He also played in Sting's Blue Turtles band and the Tonight Show band. His lush, Hancock-influenced voicings shaped the 1980s small-group sound. He died in 1998 at 43, months after recording on Jeff Watts's Citizen Tain.",
      records: ["Black Codes (From the Underground) (1985)", "The Dream of the Blue Turtles (1985)", "Kenny Kirkland (1991)"],
      influences: ["herbie-hancock"]
    },
    {
      id: "jeff-tain-watts", name: "Jeff \"Tain\" Watts", nickname: "Tain", type: "person",
      born: 1960, died: null, origin: "Pittsburgh, Pennsylvania, USA",
      instruments: ["drums", "composer"], branch: "young-lions",
      emerged: 1982, tier: 2, wiki: "Jeff_\"Tain\"_Watts",
      bio: "Watts met Branford Marsalis at Berklee and powered both Wynton Marsalis's early quintet and Branford's long-running quartet. His thunderous, polyrhythmic drumming made those bands sound modern rather than retro. He later worked with Michael Brecker, McCoy Tyner and Alice Coltrane, and led his own bands from Megawatts (1991) on. He received a Guggenheim Fellowship in composition in 2017.",
      records: ["Black Codes (From the Underground) (1985)", "Citizen Tain (1999)", "Bar Talk (2002)"],
      influences: ["elvin-jones"]
    },
    {
      id: "wallace-roney", name: "Wallace Roney", type: "person",
      born: 1960, died: 2020, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["trumpet"], branch: "young-lions", styles: ["modal"],
      emerged: 1986, tier: 2, wiki: "Wallace_Roney",
      bio: "Roney succeeded Terence Blanchard in the Jazz Messengers in 1986, played in Tony Williams's quintet, and was the only trumpeter Miles Davis personally mentored. He played alongside Davis at Montreux in 1991 and toured with Hancock, Shorter, Carter and Williams after Davis's death, winning a Grammy for A Tribute to Miles. Critics often faulted him for sounding too close to his idol. He died of COVID-19 complications in 2020.",
      records: ["Verses (1987)", "A Tribute to Miles (1994)", "No Room for Argument (2000)"],
      influences: ["miles-davis", "art-blakey", "tony-williams", "dizzy-gillespie"]
    },
    {
      id: "roy-hargrove", name: "Roy Hargrove", type: "person",
      born: 1969, died: 2018, origin: "Waco, Texas, USA",
      instruments: ["trumpet", "flugelhorn"], branch: "young-lions", styles: ["acid-jazz", "latin-jazz"],
      emerged: 1990, tier: 2, wiki: "Roy_Hargrove",
      bio: "Wynton Marsalis discovered Hargrove at a Dallas arts high school, and his Novus albums of the early 1990s were among the era's best-selling straight-ahead records. He won Grammys for the Afro-Cuban Habana (with Crisol) and for Directions in Music with Hancock and Brecker. With the RH Factor and on D'Angelo's Voodoo he bridged jazz and neo-soul. He died in 2018 at 49.",
      records: ["Diamond in the Rough (1990)", "Habana (1997)", "Earfood (2008)"],
      influences: ["wynton-marsalis", "freddie-hubbard"]
    },
    {
      id: "nicholas-payton", name: "Nicholas Payton", type: "person",
      born: 1973, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["trumpet", "keyboards", "composer"], branch: "young-lions", styles: ["genre-fluid"],
      emerged: 1995, tier: 2, wiki: "Nicholas_Payton",
      bio: "The son of bassist Walter Payton, he sat in with the Young Tuxedo Brass Band at nine and studied at NOCCA and with Ellis Marsalis. After touring with Marcus Roberts and Elvin Jones, he won a 1997 Grammy for his duets with 91-year-old Doc Cheatham. Later he rejected the word 'jazz' in favor of 'Black American Music' (#BAM), and his outspoken essays fueled one of the 2010s' liveliest debates.",
      records: ["Gumbo Nouveau (1996)", "Doc Cheatham & Nicholas Payton (1997)", "Dear Louis (2001)"],
      influences: ["ellis-marsalis", "louis-armstrong", "marcus-roberts", "elvin-jones"]
    },
    {
      id: "christian-mcbride", name: "Christian McBride", type: "person",
      born: 1972, died: null, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["double bass", "bass guitar", "bandleader"], branch: "young-lions", styles: ["modern-mainstream", "big-band-modern"],
      emerged: 1990, tier: 2, wiki: "Christian_McBride",
      bio: "A teenage prodigy, McBride joined Bobby Watson's Horizon at 17 and went on to back Freddie Hubbard, Milt Jackson and J. J. Johnson before 22. Ray Brown made him a protégé in the trio SuperBass. Since then he has played on hundreds of records, from McCoy Tyner to James Brown and The Roots, led a Grammy-winning big band, and served as artistic director of the Newport Jazz Festival.",
      records: ["Gettin' to It (1995)", "Kind of Brown (2009)", "The Good Feeling (2011)"],
      influences: ["ray-brown", "freddie-hubbard"]
    },
    {
      id: "joshua-redman", name: "Joshua Redman", type: "person",
      born: 1969, died: null, origin: "Berkeley, California, USA",
      instruments: ["tenor saxophone", "soprano saxophone"], branch: "young-lions", styles: ["modern-mainstream"],
      emerged: 1991, tier: 2, wiki: "Joshua_Redman",
      bio: "The son of Dewey Redman, he graduated summa cum laude from Harvard and deferred Yale Law School. Then he won the 1991 Thelonious Monk saxophone competition and became the most marketable young tenor of the decade. His 1990s quartet with Brad Mehldau, Christian McBride and Brian Blade helped launch the next generation, and he later explored groove, electric and chamber settings.",
      records: ["Joshua Redman (1993)", "Wish (1993)", "MoodSwing (1994)"],
      influences: ["dewey-redman", "john-coltrane", "ornette-coleman", "cannonball-adderley"]
    },
    {
      id: "kenny-garrett", name: "Kenny Garrett", type: "person",
      born: 1960, died: null, origin: "Detroit, Michigan, USA",
      instruments: ["alto saxophone", "soprano saxophone", "flute"], branch: "young-lions", styles: ["modern-mainstream"],
      emerged: 1986, tier: 2, wiki: "Kenny_Garrett",
      bio: "Garrett came up in Mercer Ellington's Duke Ellington Orchestra from 1978, then played with Art Blakey, Freddie Hubbard and Woody Shaw before spending the late 1980s in Miles Davis's band. Less of a traditionalist than his peers, he built a searing, Coltrane-rooted alto sound and a run of Warner Bros. albums from Black Hope (1992) onward, later drawing on East Asian and Afro-diasporic music.",
      records: ["Black Hope (1992)", "Pursuance: The Music of John Coltrane (1996)", "Seeds from the Underground (2012)"],
      influences: ["miles-davis", "art-blakey", "john-coltrane", "freddie-hubbard"]
    },
    {
      id: "mulgrew-miller", name: "Mulgrew Miller", type: "person",
      born: 1955, died: 2013, origin: "Greenwood, Mississippi, USA",
      instruments: ["piano", "educator"], branch: "young-lions", styles: ["hard-bop"],
      emerged: 1983, tier: 2, wiki: "Mulgrew_Miller",
      bio: "A church pianist from the Mississippi Delta, Miller toured with Mercer Ellington's orchestra, Betty Carter and Woody Shaw before joining Art Blakey's Jazz Messengers (1983–86) and Tony Williams's quintet. His muscular, blues-rich synthesis of Oscar Peterson and McCoy Tyner shaped a generation of pianists. He directed jazz studies at William Paterson University from 2005 until his death in 2013.",
      records: ["Keys to the City (1985)", "Wingspan (1987)", "Live at Yoshi's, Vol. 1 (2004)"],
      influences: ["ramsey-lewis", "oscar-peterson", "mccoy-tyner", "woody-shaw", "art-blakey"]
    },
    {
      id: "jazz-at-lincoln-center-orchestra", name: "Jazz at Lincoln Center Orchestra", type: "band",
      active: [1988, null], origin: "New York City, New York, USA",
      instruments: ["big band"], branch: "young-lions", styles: ["big-band-modern"],
      emerged: 1991, tier: 2, wiki: "Jazz_at_Lincoln_Center_Orchestra",
      bio: "Formed in 1988 out of Lincoln Center's Classical Jazz series and led by Wynton Marsalis from 1991, this 15-piece orchestra treats Ellington, Basie, Mingus and Monk as repertoire to be played with symphonic seriousness. It premiered the Pulitzer-winning Blood on the Fields and runs the Essentially Ellington high-school program. It has played in Frederick P. Rose Hall since 2004.",
      records: ["Portraits by Ellington (1992)", "Blood on the Fields (1997)", "Live in Swing City: Swingin' with Duke (1999)"],
      influences: ["duke-ellington"],
      members: ["wynton-marsalis"]
    },
    {
      id: "harry-connick-jr", name: "Harry Connick Jr.", type: "person",
      born: 1967, died: null, origin: "New Orleans, Louisiana, USA",
      instruments: ["vocals", "piano"], branch: "young-lions", styles: ["voices"],
      emerged: 1989, tier: 3, wiki: "Harry_Connick_Jr.",
      bio: "A NOCCA student of Ellis Marsalis and James Booker, Connick signed with Columbia as a teenage pianist. His swing-era crooning on the When Harry Met Sally... soundtrack (1989) made him a pop star. With more No. 1 jazz albums than anyone in chart history (as of 2009), he took the Young Lions' retro aesthetic to a mass audience and later built a film and TV career.",
      records: ["20 (1988)", "When Harry Met Sally... (1989)", "We Are in Love (1990)"],
      influences: ["ellis-marsalis", "thelonious-monk"]
    },
    {
      id: "courtney-pine", name: "Courtney Pine", type: "person",
      born: 1964, died: null, origin: "London, England, UK",
      instruments: ["tenor saxophone", "soprano saxophone", "bass clarinet", "flute"], branch: "young-lions", styles: ["acid-jazz", "london"],
      emerged: 1986, tier: 3, wiki: "Courtney_Pine",
      bio: "Britain's answer to the Young Lions, Pine founded the Black British big band the Jazz Warriors in 1985. His debut, Journey to the Urge Within (1986), made the UK Top 40. He sat in with Art Blakey and later folded reggae, hip-hop, drum and bass and garage into his music, and he guested on Guru's Jazzmatazz. The Jazz Warriors became a training ground for later London players.",
      records: ["Journey to the Urge Within (1986)", "Modern Day Jazz Stories (1995)", "Underground (1997)"],
      influences: ["sonny-rollins", "john-coltrane", "art-blakey"]
    },

    // ───────────── MODERN BIG BANDS ─────────────
    {
      id: "thad-jones", name: "Thad Jones", type: "person",
      born: 1923, died: 1986, origin: "Pontiac, Michigan, USA",
      instruments: ["trumpet", "cornet", "flugelhorn", "composer", "arranger"], branch: "big-band-modern", styles: ["kansas-city", "hard-bop"],
      emerged: 1966, tier: 2, wiki: "Thad_Jones",
      bio: "Brother of Hank and Elvin Jones, Thad Jones was a star soloist and arranger in Count Basie's band (1954–63) before co-founding the Thad Jones/Mel Lewis Orchestra in 1965. His charts, such as 'A Child Is Born' and 'Central Park North', with their dense, piano-like voicings and loose swing, became the template for modern big-band writing. He moved to Copenhagen in 1978 and briefly led the Basie band before his death.",
      records: ["The Magnificent Thad Jones (1956)", "Presenting Thad Jones/Mel Lewis and the Jazz Orchestra (1966)", "Consummation (1970)"],
      influences: ["count-basie", "charles-mingus"]
    },
    {
      id: "mel-lewis", name: "Mel Lewis", type: "person",
      born: 1929, died: 1990, origin: "Buffalo, New York, USA",
      instruments: ["drums"], branch: "big-band-modern", styles: ["west-coast"],
      emerged: 1966, tier: 3, wiki: "Mel_Lewis",
      bio: "A Stan Kenton alumnus and busy Los Angeles studio drummer, Lewis co-founded the Thad Jones/Mel Lewis Orchestra and kept it going as the Mel Lewis Jazz Orchestra after Jones left in 1978. He brought small-group looseness and a dark, riveted-cymbal sound to big-band drumming. Buddy Rich said he 'doesn't sound like anybody else.' He played the band's Village Vanguard Mondays until shortly before his death in 1990.",
      records: ["Live at the Village Vanguard (1967)", "Mel Lewis and Friends (1976)", "Make Me Smile & Other New Works by Bob Brookmeyer (1982)"],
      influences: ["stan-kenton"]
    },
    {
      id: "thad-jones-mel-lewis-orchestra", name: "Thad Jones/Mel Lewis Orchestra", type: "band",
      active: [1965, null], origin: "New York City, New York, USA",
      instruments: ["big band"], branch: "big-band-modern",
      emerged: 1966, tier: 1, wiki: "The_Thad_Jones/Mel_Lewis_Orchestra",
      bio: "Born of late-night sessions by top New York studio players, the band began Mondays at the Village Vanguard in February 1966. Continued under Mel Lewis and, since 1990, as the Vanguard Jazz Orchestra, it has held that residency for six decades. Often called the most influential big band since the swing era, it shaped composers from Brookmeyer to Maria Schneider and won Grammys for Live in Munich and Monday Night Live at the Village Vanguard.",
      records: ["Presenting Thad Jones/Mel Lewis and the Jazz Orchestra (1966)", "Central Park North (1969)", "Consummation (1970)"],
      influences: ["count-basie"],
      members: ["thad-jones", "mel-lewis", "bob-brookmeyer"]
    },
    {
      id: "toshiko-akiyoshi", name: "Toshiko Akiyoshi", type: "person",
      born: 1929, died: null, origin: "Liaoyang, Manchuria; raised in Japan",
      instruments: ["piano", "composer", "arranger", "bandleader"], branch: "big-band-modern", styles: ["bebop"],
      emerged: 1974, tier: 2, wiki: "Toshiko_Akiyoshi",
      bio: "Discovered in Tokyo by Oscar Peterson, Akiyoshi became Berklee's first Japanese student in 1956 as a Bud Powell-styled pianist. In 1973 she and saxophonist Lew Tabackin formed a Los Angeles big band whose suites, such as Kogun and 'Minamata', joined Ellingtonian writing with Japanese instruments and themes. She received 14 Grammy nominations and was the first woman to win DownBeat's readers' poll as best arranger and composer.",
      records: ["Kogun (1974)", "Long Yellow Road (1975)", "Insights (1976)"],
      influences: ["bud-powell", "oscar-peterson", "teddy-wilson", "duke-ellington"]
    },
    {
      id: "bob-brookmeyer", name: "Bob Brookmeyer", type: "person",
      born: 1929, died: 2011, origin: "Kansas City, Missouri, USA",
      instruments: ["valve trombone", "piano", "composer", "arranger"], branch: "big-band-modern", styles: ["cool"],
      emerged: 1979, tier: 2, wiki: "Bob_Brookmeyer",
      bio: "Brookmeyer first became known as Gerry Mulligan's valve-trombone partner in the 1950s. After years in the studios and a battle with alcoholism, he became music director of the Mel Lewis band in 1979 and reinvented himself as a composer, bringing Ligeti- and Lutosławski-inspired techniques into big-band writing. As a teacher in the Netherlands and at New England Conservatory he mentored Maria Schneider and Darcy James Argue.",
      records: ["Make Me Smile & Other New Works by Bob Brookmeyer (1982)", "Electricity (1991)", "Spirit Music (2006)"],
      influences: ["gerry-mulligan", "claude-thornhill", "thad-jones"]
    },
    {
      id: "maria-schneider", name: "Maria Schneider", type: "person",
      born: 1960, died: null, origin: "Windom, Minnesota, USA",
      instruments: ["composer", "bandleader"], branch: "big-band-modern", styles: ["modern-mainstream"],
      emerged: 1994, tier: 1, wiki: "Maria_Schneider_(musician)",
      bio: "Schneider worked as Gil Evans's copyist and assistant and studied with Bob Brookmeyer. Her orchestra, a weekly fixture at Greenwich Village's Visiones from 1993, plays lyrical, landscape-like long-form works. Concert in the Garden (2004), released via fan-funded ArtistShare, won a Grammy; she has since won in jazz and classical categories and worked with David Bowie on 'Sue'. She is an outspoken advocate for musicians' rights online.",
      records: ["Evanescence (1994)", "Concert in the Garden (2004)", "Data Lords (2020)"],
      influences: ["gil-evans", "bob-brookmeyer"]
    },
    {
      id: "darcy-james-argue", name: "Darcy James Argue", type: "person",
      born: 1975, died: null, origin: "Vancouver, British Columbia, Canada",
      instruments: ["composer", "bandleader"], branch: "big-band-modern", styles: ["new-creative"],
      emerged: 2009, tier: 3, wiki: "Darcy_James_Argue",
      bio: "A Brookmeyer student at New England Conservatory, Argue founded the 18-piece Secret Society in Brooklyn in 2005. He calls it a 'steampunk big band': large-ensemble jazz built on post-rock textures and politically charged multimedia concepts, from Brooklyn Babylon to the conspiracy-theory suite Real Enemies. All four of its albums have been Grammy-nominated for Best Large Jazz Ensemble Album.",
      records: ["Infernal Machines (2009)", "Brooklyn Babylon (2013)", "Dynamic Maximum Tension (2023)"],
      influences: ["bob-brookmeyer"]
    },
    {
      id: "mingus-big-band", name: "Mingus Big Band", type: "band",
      active: [1991, null], origin: "New York City, New York, USA",
      instruments: ["big band"], branch: "big-band-modern",
      emerged: 1991, tier: 3, wiki: "Mingus_Big_Band",
      bio: "Organized in 1991 by Charles Mingus's widow Sue Mingus, this repertory ensemble arranged Mingus's often small-group music for a raucous 14-piece band and played it weekly in New York for more than three decades. Alongside the Jazz at Lincoln Center Orchestra, it showed that a dead composer's book could sustain a working band. It won the 2011 Grammy for Best Large Jazz Ensemble Album.",
      records: ["Nostalgia in Times Square (1993)", "Gunslinging Birds (1995)", "Mingus Big Band Live at Jazz Standard (2010)"],
      influences: ["charles-mingus"],
      members: []
    },

    // ───────────── DOWNTOWN & M-BASE ─────────────
    {
      id: "steve-coleman", name: "Steve Coleman", type: "person",
      born: 1956, died: null, origin: "Chicago, Illinois, USA",
      instruments: ["alto saxophone", "composer"], branch: "downtown", styles: ["new-creative"],
      emerged: 1985, tier: 2, wiki: "Steve_Coleman",
      bio: "Raised on Chicago's South Side, Coleman came to New York in 1978, played in the Thad Jones/Mel Lewis Orchestra and with Dave Holland, and formed Five Elements. He was the central thinker of the Brooklyn M-Base collective, building improvisation on nested rhythmic cycles drawn from funk and West African, Afro-Cuban and Indian traditions. He received a MacArthur Fellowship in 2014. In 2017 he faced sexual misconduct allegations.",
      records: ["Motherland Pulse (1985)", "Sine Die (1988)", "The Sign and the Seal (1996)"],
      influences: ["charlie-parker", "thad-jones-mel-lewis-orchestra", "dave-holland"]
    },
    {
      id: "greg-osby", name: "Greg Osby", type: "person",
      born: 1960, died: null, origin: "St. Louis, Missouri, USA",
      instruments: ["alto saxophone", "soprano saxophone", "composer"], branch: "downtown", styles: ["modern-mainstream"],
      emerged: 1987, tier: 3, wiki: "Greg_Osby",
      bio: "A founding member of M-Base, Osby played in Jack DeJohnette's Special Edition and co-led the Strata Institute with Steve Coleman. On Blue Note from 1989 he moved from hip-hop-tinged experiments to angular acoustic quartets. Through those bands he launched Jason Moran and other young players, and the New York Times called him 'one of the sturdier bridges between jazz generations.'",
      records: ["3-D Lifestyles (1993)", "Banned in New York (1998)", "Symbols of Light (A Solution) (2001)"],
      influences: ["jack-dejohnette", "steve-coleman", "andrew-hill"]
    },
    {
      id: "cassandra-wilson", name: "Cassandra Wilson", type: "person",
      born: 1955, died: 2026, origin: "Jackson, Mississippi, USA",
      instruments: ["vocals", "guitar", "producer"], branch: "downtown", styles: ["voices"],
      emerged: 1986, tier: 1, wiki: "Cassandra_Wilson",
      bio: "Wilson was the voice of Steve Coleman's M-Base circle on JMT in the 1980s. On Blue Note she turned her smoky contralto to Delta blues, folk, country and pop, covering Robert Johnson, Joni Mitchell and the Monkees with acoustic, string-based bands. Blue Light 'til Dawn (1993) set the template for much later jazz singing. She won two Grammys, became an NEA Jazz Master in 2022, and died in Jackson in September 2026.",
      records: ["Point of View (1986)", "Blue Light 'til Dawn (1993)", "New Moon Daughter (1995)"],
      influences: ["abbey-lincoln", "betty-carter", "miles-davis", "steve-coleman", "ellis-marsalis"]
    },
    {
      id: "geri-allen", name: "Geri Allen", type: "person",
      born: 1957, died: 2017, origin: "Pontiac, Michigan, USA (raised in Detroit)",
      instruments: ["piano", "composer", "educator"], branch: "downtown", styles: ["modern-mainstream"],
      emerged: 1984, tier: 2, wiki: "Geri_Allen",
      bio: "Detroit-raised and Howard-trained, Allen played on early M-Base sessions and debuted with The Printmakers (1984). She then moved easily between Ornette Coleman's Sound Museum, a trio with Ron Carter and Tony Williams, and gospel and Motown tributes. She was the first woman to win Denmark's Jazzpar Prize (1996). She directed jazz studies at the University of Pittsburgh before her death from cancer in 2017.",
      records: ["The Printmakers (1984)", "Twenty One (1994)", "Timeless Portraits and Dreams (2006)"],
      influences: ["thelonious-monk", "herbie-hancock", "mccoy-tyner", "cecil-taylor", "mary-lou-williams"]
    },
    {
      id: "john-zorn", name: "John Zorn", type: "person",
      born: 1953, died: null, origin: "New York City (Queens), New York, USA",
      instruments: ["alto saxophone", "composer", "producer"], branch: "downtown", styles: ["free"],
      emerged: 1986, tier: 1, wiki: "John_Zorn",
      bio: "The central figure of the Lower Manhattan scene, Zorn moved from game-piece improvisations like Cobra to The Big Gundown (1986), his radical recasting of Ennio Morricone. Next came the jump-cut thrash of Naked City and Masada's 'radical Jewish music', more than 600 compositions in all. His Tzadik label, founded in 1995, has released hundreds of records by the downtown community.",
      records: ["The Big Gundown (1986)", "Spillane (1987)", "Naked City (1990)"],
      influences: ["anthony-braxton", "ornette-coleman", "oliver-lake"]
    },
    {
      id: "masada", name: "Masada", type: "band",
      active: [1993, null], origin: "New York City, New York, USA",
      instruments: ["alto saxophone", "trumpet", "double bass", "drums"], branch: "downtown",
      emerged: 1994, tier: 2, wiki: "Masada_(band)",
      bio: "John Zorn formed Masada in 1993 with Dave Douglas, Greg Cohen and Joey Baron. The band set Jewish modes and klezmer-like melodies in the pianoless format of Ornette Coleman's quartet. The ten DIW studio albums named after Hebrew letters, and the 613-tune Masada songbook played by many groups, made it one of the most widely heard downtown projects. The quartet announced its breakup in 2007 but has reunited occasionally.",
      records: ["Alef (1994)", "Live in Jerusalem 1994 (1997)", "Sanhedrin 1994–1997 (2005)"],
      influences: ["ornette-coleman"],
      members: ["john-zorn", "dave-douglas"]
    },
    {
      id: "bill-frisell", name: "Bill Frisell", type: "person",
      born: 1951, died: null, origin: "Baltimore, Maryland, USA (raised in Denver)",
      instruments: ["guitar", "composer"], branch: "downtown", styles: ["ecm"],
      emerged: 1983, tier: 2, wiki: "Bill_Frisell",
      bio: "A Berklee student of Jim Hall, Frisell became ECM's house guitarist in the early 1980s and a long-time member of Paul Motian's trio. Downtown he was a key Zorn collaborator in Naked City. His floating, effects-shaded sound later absorbed Americana, country and folk, starting with Have a Little Faith (1993), and opened a path between jazz and roots music. He won a Grammy for Unspeakable (2004).",
      records: ["In Line (1983)", "Have a Little Faith (1993)", "Nashville (1997)"],
      influences: []
    },
    {
      id: "tim-berne", name: "Tim Berne", type: "person",
      born: 1954, died: null, origin: "Syracuse, New York, USA",
      instruments: ["alto saxophone", "baritone saxophone", "composer"], branch: "downtown",
      emerged: 1987, tier: 3, wiki: "Tim_Berne",
      bio: "After Julius Hemphill's Dogon A.D. turned him on to jazz, Berne sought Hemphill out in New York for lessons. He self-released records on his Empire label from 1979, made two albums for Columbia, and in the 1990s led Bloodcount, whose sprawling, episodic compositions defined one strand of downtown writing. His Screwgun label and later bands such as Snakeoil on ECM extended that approach.",
      records: ["The Five Year Plan (1979)", "Fulton Street Maul (1987)", "Snakeoil (2012)"],
      influences: ["julius-hemphill"]
    },
    {
      id: "dave-douglas", name: "Dave Douglas", type: "person",
      born: 1963, died: null, origin: "Montclair, New Jersey, USA",
      instruments: ["trumpet", "composer"], branch: "downtown", styles: ["modern-mainstream"],
      emerged: 1993, tier: 2, wiki: "Dave_Douglas_(trumpeter)",
      bio: "After touring with Horace Silver, Douglas became the defining trumpeter of 1990s downtown through Zorn's Masada and his own groups: the String Group, Tiny Bell Trio and sextets. These drew on Balkan music, Booker Little, Webern and Mary Lou Williams. He later founded the Greenleaf Music label (2005) and the Festival of New Trumpet Music, and has released more than 90 albums as a leader.",
      records: ["Parallel Worlds (1993)", "In Our Lifetime (1995)", "Soul on Soul (2000)"],
      influences: ["horace-silver", "john-zorn"]
    },
    {
      id: "marc-ribot", name: "Marc Ribot", type: "person",
      born: 1954, died: null, origin: "Newark, New Jersey, USA",
      instruments: ["guitar"], branch: "downtown", styles: ["free"],
      emerged: 1985, tier: 3, wiki: "Marc_Ribot",
      bio: "Ribot's jagged, noise-tinged guitar redefined Tom Waits's sound on Rain Dogs (1985), and he spent the late 1980s in the Lounge Lizards. He became a mainstay of Zorn's projects and also led the Rootless Cosmopolitans, the Cuban dance band Los Cubanos Postizos, and an Albert Ayler tribute. His range runs from no wave to son montuno, and he has recorded with Elvis Costello and Robert Plant & Alison Krauss.",
      records: ["Rootless Cosmopolitans (1990)", "Marc Ribot y Los Cubanos Postizos (1998)", "Spiritual Unity (2005)"],
      influences: []
    },
    {
      id: "the-lounge-lizards", name: "The Lounge Lizards", type: "band",
      active: [1978, 1998], origin: "New York City, New York, USA",
      instruments: ["alto saxophone", "piano", "guitar", "bass", "drums"], branch: "downtown",
      emerged: 1981, tier: 3, wiki: "The_Lounge_Lizards",
      bio: "Founded by saxophonist John Lurie and his brother Evan in the no wave scene, the Lounge Lizards began as ironic 'fake jazz'. Their Teo Macero-produced 1981 debut included two Monk tunes. Later lineups with Marc Ribot, Roy Nathanson and Curtis Fowlkes played Lurie's sophisticated, cinematic compositions, and about 80 New York musicians passed through the band before it went quiet around 1998.",
      records: ["The Lounge Lizards (1981)", "No Pain for Cakes (1987)", "Queen of All Ears (1998)"],
      influences: ["thelonious-monk"],
      members: ["marc-ribot"]
    },
    {
      id: "don-byron", name: "Don Byron", type: "person",
      born: 1958, died: null, origin: "New York City (the Bronx), New York, USA",
      instruments: ["clarinet", "bass clarinet", "saxophone", "composer"], branch: "downtown",
      emerged: 1992, tier: 3, wiki: "Don_Byron",
      bio: "A Black clarinetist from the South Bronx who studied with George Russell and played in the Klezmer Conservatory Band, Byron gained wide notice with a Mickey Katz klezmer tribute. His records range from the protest suite Tuskegee Experiments to Raymond Scott and John Kirby revivals (Bug Music), Lester Young homages and hip-hop. That range broke stereotypes of what a jazz clarinetist plays. He was a 2009 Pulitzer finalist.",
      records: ["Tuskegee Experiments (1992)", "Don Byron Plays the Music of Mickey Katz (1993)", "Bug Music (1996)"],
      influences: ["artie-shaw", "joe-henderson"]
    },
    {
      id: "uri-caine", name: "Uri Caine", type: "person",
      born: 1956, died: null, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["piano", "composer"], branch: "downtown", styles: ["ecm"],
      emerged: 1993, tier: 3, wiki: "Uri_Caine",
      bio: "A Philadelphia pianist taught by Bernard Peiffer and George Crumb, Caine was a key sideman for Don Byron and Dave Douglas. He is best known for refracting classical repertoire through jazz, klezmer and electronica: his Mahler project (1997) won a German Mahler Society award despite outraging some jurors, followed by Bach's Goldberg and Beethoven's Diabelli Variations. He also co-led The Philadelphia Experiment with Questlove and McBride.",
      records: ["Urlicht / Primal Light (1997)", "The Goldberg Variations (2000)", "The Philadelphia Experiment (2001)"],
      influences: []
    },

    // ───────────── ACID JAZZ & JAZZ-RAP ─────────────
    {
      id: "gilles-peterson", name: "Gilles Peterson", type: "person",
      born: 1964, died: null, origin: "Caen, France (raised in South London)",
      instruments: ["DJ", "broadcaster", "label owner"], branch: "acid-jazz", styles: ["london"],
      emerged: 1988, tier: 2, wiki: "Gilles_Peterson",
      bio: "A South London pirate-radio DJ, Peterson is widely credited with naming acid jazz. He co-founded the Acid Jazz label in 1988 and Talkin' Loud in 1990, signing Galliano, Incognito and Roni Size. Through BBC Radio 1 and 6 Music, Worldwide FM and his Brownswood label (2006), including the 2018 compilation We Out Here, he later championed the young London jazz scene.",
      records: ["Havana Cultura: The New Cuba Sound (2009)", "We Out Here (2018)", "Aspects (as STR4TA, 2021)"],
      influences: []
    },
    {
      id: "a-tribe-called-quest", name: "A Tribe Called Quest", type: "band",
      active: [1985, 2017], origin: "Queens, New York, USA",
      instruments: ["rap", "turntables", "production"], branch: "acid-jazz", styles: ["la-scene"],
      emerged: 1990, tier: 1, wiki: "A_Tribe_Called_Quest",
      bio: "Q-Tip, Phife Dawg, Ali Shaheed Muhammad and Jarobi White came out of the Native Tongues collective. Their second album, The Low End Theory (1991), built spare, bass-heavy beats from jazz records and brought Ron Carter in to play double bass on 'Verses from the Abstract'. With Midnight Marauders (1993), it became a blueprint for jazz rap and later neo-soul. Their final album appeared in 2016, after Phife's death.",
      records: ["People's Instinctive Travels and the Paths of Rhythm (1990)", "The Low End Theory (1991)", "Midnight Marauders (1993)"],
      influences: ["ron-carter"],
      members: []
    },
    {
      id: "gang-starr", name: "Gang Starr", type: "band",
      active: [1985, 2003], origin: "Boston, Massachusetts & Brooklyn, New York, USA",
      instruments: ["rap", "turntables", "production"], branch: "acid-jazz",
      emerged: 1989, tier: 2, wiki: "Gang_Starr",
      bio: "Rapper Guru and producer DJ Premier made Gang Starr the model MC-and-producer duo, with Premier's chopped jazz loops underpinning Guru's measured delivery. 'Jazz Thing' (1990), co-written with Branford Marsalis for Spike Lee's Mo' Better Blues, rapped a history of jazz over a band of Marsalis, Terence Blanchard, Kenny Kirkland and Jeff Watts. Guru died in 2010.",
      records: ["No More Mr. Nice Guy (1989)", "Step in the Arena (1991)", "Moment of Truth (1998)"],
      influences: ["branford-marsalis"],
      members: []
    },
    {
      id: "guru-jazzmatazz", name: "Guru's Jazzmatazz", type: "band",
      active: [1993, 2007], origin: "New York City, New York, USA",
      instruments: ["rap", "live jazz band"], branch: "acid-jazz",
      emerged: 1993, tier: 2, wiki: "Jazzmatazz",
      bio: "Gang Starr's Guru wanted to get 'the actual dudes we were sampling' into the studio. Jazzmatazz, Vol. 1 (1993) put Donald Byrd, Roy Ayers, Lonnie Liston Smith, Branford Marsalis and Courtney Pine with singers N'Dea Davenport and MC Solaar over hip-hop beats. It sold modestly in the US but well in Europe, and the series ran through four volumes to 2007.",
      records: ["Jazzmatazz, Vol. 1 (1993)", "Jazzmatazz, Vol. 2: The New Reality (1995)", "Streetsoul (2000)"],
      influences: ["gang-starr"],
      members: ["donald-byrd", "roy-ayers", "lonnie-liston-smith", "branford-marsalis", "courtney-pine"]
    },
    {
      id: "digable-planets", name: "Digable Planets", type: "band",
      active: [1987, null], origin: "Brooklyn, New York, USA",
      instruments: ["rap", "production"], branch: "acid-jazz",
      emerged: 1993, tier: 2, wiki: "Digable_Planets",
      bio: "Ishmael 'Butterfly' Butler, Mariana 'Ladybug Mecca' Vieira and Craig 'Doodlebug' Irving dressed their debut in beatnik cool, sampling records from Butler's father's jazz collection. 'Rebirth of Slick (Cool Like Dat)', built on the bassline of Art Blakey and the Jazz Messengers' 'Stretching', reached the Top 20 and won a Grammy. The group split in 1995 and has since reunited.",
      records: ["Reachin' (A New Refutation of Time and Space) (1993)", "Blowout Comb (1994)"],
      influences: ["jazz-messengers", "gang-starr"],
      members: []
    },
    {
      id: "us3", name: "Us3", type: "band",
      active: [1992, null], origin: "London, England, UK",
      instruments: ["production", "rap", "trumpet"], branch: "acid-jazz",
      emerged: 1993, tier: 2, wiki: "Us3",
      bio: "Producers Geoff Wilkinson and Mel Simpson used an uncleared Grant Green sample, and rather than sue, Blue Note signed them and opened its archive to them. 'Cantaloop (Flip Fantasia)', built on Herbie Hancock's 'Cantaloupe Island', became a worldwide hit. Hand on the Torch (1993), made entirely from Blue Note samples, was the label's first platinum album. The group is named after Horace Parlan's Us Three.",
      records: ["Hand on the Torch (1993)", "Broadway & 52nd (1997)"],
      influences: ["herbie-hancock", "horace-silver", "jazz-messengers"],
      members: []
    },
    {
      id: "incognito", name: "Incognito", type: "band",
      active: [1979, null], origin: "London, England, UK",
      instruments: ["guitar", "vocals", "horns", "rhythm section"], branch: "acid-jazz", styles: ["jazz-funk"],
      emerged: 1991, tier: 3, wiki: "Incognito_(band)",
      bio: "Founded by Jean-Paul 'Bluey' Maunick as an offshoot of the Brit-funk band Light of the World, Incognito debuted with Jazz Funk (1981). After signing to Gilles Peterson's Talkin' Loud, they had UK hits with a cover of Ronnie Laws's 'Always There' (1991) and Stevie Wonder's 'Don't You Worry 'bout a Thing'. With a rotating cast of singers led by Maunick, they remain one of acid jazz's longest-running live bands.",
      records: ["Inside Life (1991)", "Tribes, Vibes and Scribes (1992)", "Positivity (1993)"],
      influences: [],
      members: []
    },
    {
      id: "the-brand-new-heavies", name: "The Brand New Heavies", type: "band",
      active: [1985, null], origin: "London, England, UK",
      instruments: ["guitar", "bass", "drums", "keyboards", "vocals"], branch: "acid-jazz", styles: ["jazz-funk"],
      emerged: 1990, tier: 2, wiki: "The_Brand_New_Heavies",
      bio: "Simon Bartholomew, Andrew Levy and Jan Kincaid released their 1990 debut on Acid Jazz. With American singer N'Dea Davenport they became the movement's biggest crossover act on hits such as 'Never Stop' and 'Dream On Dreamer'. Their Heavy Rhyme Experience, Vol. 1 (1992) paired the live band with rappers including Gang Starr and the Pharcyde, and Brother Sister (1994) went platinum in the UK.",
      records: ["The Brand New Heavies (1990)", "Heavy Rhyme Experience, Vol. 1 (1992)", "Brother Sister (1994)"],
      influences: [],
      members: []
    },
    {
      id: "rh-factor", name: "The RH Factor", type: "band",
      active: [2003, 2006], origin: "New York City, New York, USA",
      instruments: ["trumpet", "keyboards", "bass", "drums", "vocals"], branch: "acid-jazz", styles: ["la-scene"],
      emerged: 2003, tier: 3, wiki: "Roy_Hargrove",
      bio: "Roy Hargrove's genre-crossing collective blended hard bop with soul, funk and hip-hop. It grew out of his work with the Soulquarians, the circle of D'Angelo, Erykah Badu and Q-Tip, all of whom appear on Hard Groove (2003), recorded at Electric Lady Studios. Critics called it 'genre-busting', and it anticipated the jazz/R&B fusions of Robert Glasper's generation.",
      records: ["Hard Groove (2003)", "Strength (2004)", "Distractions (2006)"],
      influences: [],
      members: ["roy-hargrove"]
    },
    {
      id: "galliano", name: "Galliano", type: "band",
      active: [1988, null], origin: "London, England, UK",
      instruments: ["vocals", "spoken word", "percussion", "keyboards"], branch: "acid-jazz",
      emerged: 1991, tier: 3, wiki: "Galliano_(band)",
      bio: "Fronted by Rob Gallagher, Galliano was the first act on the Acid Jazz label and then the first signing to Gilles Peterson's Talkin' Loud. Their Last Poets-influenced spoken word over live jazz-funk grooves defined London's club sound. Their debut featured Roy Ayers, and The Plot Thickens (1994) reached the UK top ten. They split in 1997 and reformed in 2023.",
      records: ["In Pursuit of the 13th Note (1991)", "A Joyful Noise Unto the Creator (1992)", "The Plot Thickens (1994)"],
      influences: ["roy-ayers"],
      members: []
    }
  ]
});
