/* Notes on Notes — Swing (1930–1945) and Bebop (1940–1950). Three analysed pieces per era. */
NOTES.add({
  eras: {
    "swing": {
      overview: "Swing-era composition is dominated by two frames: the 32-bar popular song (usually AABA) and the 12-bar blues. On top of them the arranger becomes a central figure. Big-band music is mostly written: sections of reeds and brass voice the harmony, trade calls and responses, and leave fixed spaces for soloists. The Kansas City bands showed another way to compose. Their head arrangements were memorized rather than written down, built from short riffs stacked over the blues or over the changes of a song, with a rhythm section laying down an even four beats to the bar. Harmony gets denser (added sixths and ninths, diminished and chromatic passing chords), and a soloist like Coleman Hawkins could treat a pop ballad's changes as the real subject, a step toward bebop.",
      changes: [
        "The arranger’s score becomes the main compositional document: section writing, reed–brass call and response, and composed backgrounds behind soloists.",
        "Riff-built head arrangements (Kansas City) turn short repeated figures into whole pieces without a written score.",
        "The rhythm section moves from the two-beat feel to an even, walking four beats to the bar.",
        "Harmony gets richer: sixth and ninth chords, chromatic and diminished passing chords, and in the boldest writing (Ellington) deliberately dissonant voicings over simple forms.",
        "Improvisers start treating a song’s chord progression, not its melody, as the material to develop."
      ],
    },
    "bebop": {
      overview: "Bebop composition moves from the big band to the small combo, and from the dance floor to listening. The usual piece is now a short written head, often a fast unison line for trumpet and saxophone, followed by long improvised choruses and a return of the head. Many heads are contrafacts: new melodies over the chord progression of a standard (“I Got Rhythm,” “Cherokee,” “How High the Moon”). That let players rework familiar changes, and on record it let a label avoid paying royalties on the original tune. Harmony is pushed to the upper chord extensions and to tritone substitution, tempos reach 300 beats per minute, and drummers move the beat to the ride cymbal. Composed material shrinks to heads, introductions, interludes and breaks. Two composers carry the more elaborate writing: Gillespie with Afro-Cuban ostinatos, and Monk with harmonically idiosyncratic songs.",
      changes: [
        "The arranged big-band chart gives way to the combo routine of head, solos, head. Written material shrinks to heads, intros, interludes and breaks.",
        "Contrafacts become a standard way to compose: new lines over borrowed chord progressions, and sometimes no theme at all.",
        "Harmony moves into upper extensions (9ths, 11ths, 13ths, ♭5) and routine tritone substitution, and fast-modulating progressions like the “Cherokee” bridge become test pieces.",
        "Tempos jump, up to about 300 bpm on Parker’s “Ko Ko”, and the music is made for listening rather than dancing.",
        "Afro-Cuban rhythm enters jazz composition through bass ostinatos and alternating Latin and swing sections (Gillespie)."
      ],
    },
  },

  pieces: [
    /* ───────────────────────────── SWING ───────────────────────────── */
    {
      id: "body-and-soul-hawkins",
      era: "swing",
      title: "Body and Soul",
      composer: "Johnny Green (music), Edward Heyman, Robert Sour & Frank Eyton (lyrics)",
      performer: "Coleman Hawkins and His Orchestra",
      artistIds: ["coleman-hawkins"],
      year: 1939,
      recording: "Bluebird B-10523, recorded October 11, 1939, New York",
      key: "D♭ major",
      meter: "4/4",
      tempo: "ballad, ~ 90–95 bpm",
      form: {
        summary: "Short piano intro, two 32-bar AABA choruses of tenor improvisation, brief close",
        sections: [
          { label: "Intro", bars: 4, note: "piano (Gene Rodgers)" },
          { label: "A", bars: 8, note: "chorus 1: melody only hinted at" },
          { label: "A", bars: 8 },
          { label: "B", bars: 8, note: "D major, then C major" },
          { label: "A", bars: 8 },
          { label: "A", bars: 8, note: "chorus 2: band backgrounds" },
          { label: "A", bars: 8 },
          { label: "B", bars: 8 },
          { label: "A", bars: 8, note: "climax" },
          { label: "Coda", bars: 2, note: "short rubato close (≈2 bars in the Weimar transcription)" }
        ]
      },
      progression: {
        label: "Chorus 1, first A section, as annotated in the Weimar Jazz Database",
        bars: ["E♭m D7♯5", "E♭m7 D7", "D♭maj7 E♭m7", "Fm7 E°7", "E♭m7", "Cm7♭5 B7", "B♭m7 E♭m7 A♭7", "D♭maj7 Fm7♭5 B♭7♭9"]
      },
      findings: [
        { title: "A hit that leaves out the tune", text: "Hawkins plays two choruses of improvisation and points to Green’s melody only at the very start (in the first two bars, by Bowen’s account). After that the chord progression, not the song’s melody, is what holds the record together. Bowen shows that this version, not the sheet music, made D♭ the standard key (even for singers) and set a slower standard tempo of about quarter = 90.", source: 1 },
        { title: "A bridge a half step away", text: "Green’s bridge moves the first four bars up a half step from the home key, to D major, and the next four down a half step, to C major, before returning to E♭m (the ii chord of D♭) for the last A. The bridge’s eighth bar uses a tritone substitution, C7–B7–B♭7 in place of C7–F7–B♭7, which makes the bass slide down by half steps. A ballad full of chromatic key shifts like this rewarded an improviser who thought in chords.", source: 2 },
        { title: "Implied and substituted chords", text: "The Weimar Jazz Database annotation of the harmony under Hawkins’s solo reads E♭m7–D7 in bar 2, where D7 stands in for A♭7 (a tritone substitute resolving down a half step to D♭). It ends the bridge with C7–B7–B♭sus7–B♭7. Mark Gridley, quoted on JazzStandards.com, describes Hawkins inventing solo lines whose construction implied that chords had been added.", source: 0 },
        { title: "Double time inside a ballad", text: "In the second chorus Hawkins moves back and forth between straight sixteenth notes and sixteenths that swing like a band playing twice as fast as the ballad beneath him. These double-time passages add a second pulse inside a slow pop song, and the rhythm section never has to change tempo.", source: 1 },
        { title: "The bridge to bebop", text: "Scott DeVeaux opens The Birth of Bebop with a part titled “College of Music: Coleman Hawkins and the Swing Era.” He presents Hawkins’s harmonically driven improvising as the training ground the boppers came out of. Stephen Rush’s Library of Congress essay likewise calls the record a harbinger of bebop because it builds on the composition’s harmony and phrasing while all but ignoring its written melody.", source: 4 }
      ],
      throughlines: ["song", "written"],
      throughlineNotes: {
        "song": "A 1930 Broadway/London pop ballad becomes a jazz vehicle. The borrowed song survives as a chord progression rather than a melody.",
        "written": "Almost the whole record is improvised over a fixed harmonic plan. Only the piano intro and the backgrounds behind the second chorus are arranged."
      },
      demo: {
        label: "Bridge turnaround: C7–F7–B♭7 vs. Green’s tritone slide C7–B7–B♭7 into E♭m7",
        bpm: 80,
        beats: 20,
        events: [
          { t: 0, d: 2, notes: ["C3", "Bb3", "E4", "G4"], v: 0.75 },
          { t: 2, d: 2, notes: ["F2", "A3", "C4", "Eb4"], v: 0.75 },
          { t: 4, d: 2, notes: ["Bb2", "Ab3", "D4", "F4"], v: 0.75 },
          { t: 6, d: 4, notes: ["Eb3", "Db4", "Gb4", "Bb4"], v: 0.7 },
          { t: 10, d: 2, notes: ["C3", "Bb3", "E4", "G4"], v: 0.8 },
          { t: 12, d: 2, notes: ["B2", "A3", "D#4", "F#4"], v: 0.8 },
          { t: 14, d: 2, notes: ["Bb2", "Ab3", "D4", "F4"], v: 0.8 },
          { t: 16, d: 4, notes: ["Eb3", "Db4", "Gb4", "Bb4"], v: 0.7 }
        ]
      },
      listen: "Coleman Hawkins Body and Soul 1939",
      sources: [
        { cite: "Weimar Jazz Database (Jazzomat Research Project), “Coleman Hawkins – Body and Soul”: key, tempo (95 bpm), 2 choruses / 66 bars, chord annotation", url: "https://jazzomat.hfm-weimar.de/dbformat/synopsis/solo96.html" },
        { cite: "José Antonio Bowen, “Who Plays the Tune in ‘Body and Soul’? A Performance History Using Recorded Sources,” Journal of the Society for American Music 9/3 (2015): 259–292", url: "https://www.cambridge.org/core/journals/journal-of-the-society-for-american-music/article/who-plays-the-tune-in-body-and-soul-a-performance-history-using-recorded-sources/E974C46CC41BCA382F5DD691FB13E673" },
        { cite: "JazzStandards.com, “Body and Soul” (musical analysis by K. J. McElrath; quotes Mark C. Gridley, Jazz Styles, and William Zinsser, Easy to Remember)", url: "https://www.jazzstandards.com/compositions-0/bodyandsoul.htm" },
        { cite: "Stephen Rush, “‘Body and Soul’—Coleman Hawkins (1939),” National Recording Registry essay, Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/BodyAndSoul.pdf" },
        { cite: "Scott DeVeaux, The Birth of Bebop: A Social and Musical History (University of California Press, 1997), Part One, “College of Music: Coleman Hawkins and the Swing Era”", url: "https://www.ucpress.edu/books/the-birth-of-bebop/paper" }
      ]
    },

    {
      id: "ko-ko-ellington",
      era: "swing",
      title: "Ko-Ko",
      composer: "Duke Ellington",
      performer: "Duke Ellington and His Famous Orchestra",
      artistIds: ["duke-ellington", "jimmy-blanton", "harry-carney", "ben-webster"],
      year: 1940,
      recording: "Victor 26577 (matrix BS-044889), recorded March 6, 1940, Chicago",
      key: "E♭ minor",
      meter: "4/4",
      tempo: "medium-up, ~ 160 bpm",
      form: {
        summary: "8-bar intro, seven 12-bar minor-blues choruses, 12-bar coda recalling the intro",
        sections: [
          { label: "Intro", bars: 8, note: "baritone sax + trombones over tom-toms" },
          { label: "1", bars: 12, note: "Tizol valve trombone theme, saxes respond" },
          { label: "2", bars: 12, note: "Nanton plunger trombone over brass" },
          { label: "3", bars: 12, note: "Nanton continues" },
          { label: "4", bars: 12, note: "Ellington piano, whole-tone runs" },
          { label: "5", bars: 12, note: "trumpet riff answered by reeds & trombones" },
          { label: "6", bars: 12, note: "ensemble alternates with Blanton bass breaks" },
          { label: "7", bars: 12, note: "shout chorus" },
          { label: "Coda", bars: 12, note: "intro material + 4-bar extension" }
        ]
      },
      progression: {
        label: "The 12-bar minor blues under every chorus (JAAH annotation; bar 9 B7 per Berger’s score)",
        bars: ["E♭m6", "E♭m6", "E♭m6", "E♭m6", "A♭m6", "A♭m6", "E♭m6", "E♭m6", "B7", "B♭7", "E♭m6", "E♭m6"]
      },
      findings: [
        { title: "One motif, the whole piece", text: "David Berger’s notes to his Jazz at Lincoln Center transcription say the entire piece grows from one rhythmic motif: three eighth notes followed by a long note. It is the first sound on the record (floor tom-tom and low baritone saxophone) and the last (high reeds, baritone, bass and tom-toms), and it turns up in dozens of instrumental, melodic and harmonic combinations in between.", source: 0 },
        { title: "Same motif, different chord tones", text: "Andy Jaffe traces the motif through the piece and finds it aimed at a different note of the harmony each time. Carney’s baritone in the intro targets the tonic, Tizol’s valve-trombone chorus the third, the saxophone background behind the piano solo the seventh, and the trumpets in chorus 5 the ninth. Development by re-harmonizing one figure, not by writing new tunes, is classical motivic technique applied inside a dance-band blues.", source: 1 },
        { title: "A three-chord blues, harshly voiced", text: "The form is a basic three-chord minor blues, which, Berger notes, frees Ellington to put his invention into voicing and orchestration. In bars 9–10 of the first chorus the reeds and rhythm section move chromatically from B7 to B♭7. Ben Webster’s added fifth-reed part sits on B♭ (major 7th of B7) and D♭ (♯9 of B♭7), a deliberate half-step clash. In the shout chorus the trombones hold a tonic triad, the trumpets a G♭ upper-structure triad, the alto the 11th, and the clarinet the tonic on top.", source: 0 },
        { title: "Modern devices inside an accessible form", text: "Jaffe points to an E whole-tone scale in Ellington’s piano chorus, played against the prevailing E♭-minor harmony, and to the closing minor-11th chord built in stacked thirds. He hears that chord as anticipating modal jazz (“So What”) by almost two decades. All of these devices sit inside the comfortably accessible minor-blues form.", source: 1 },
        { title: "Call and response chorus by chorus", text: "Joyner’s listening guide lays out a call-and-response plan for each chorus. Tizol’s theme is answered by the saxes. Nanton’s plunger trombone cries over brass. The piano rides over sax and plunger-brass riffs. A trumpet riff is answered by reeds and trombone, then the ensemble trades phrases with Blanton’s bass, and a full shout chorus follows. The coda brings back the intro’s trombones and tom-toms and ends with rising chords.", source: 2 },
        { title: "Harmonic grids disagree on bar 9", text: "The audio-aligned JAAH annotation of the recording reads the turnaround as two bars of B♭7. Berger’s score-based notes (and Jaffe’s, which mention Webster’s B♭ against a B7 chord) put B7 in bar 9. The difference is a reminder that Ellington’s chromatic voicings can blur which chord is actually sounding.", source: 3 }
      ],
      throughlines: ["written", "blues", "call"],
      throughlineNotes: {
        "written": "This is a fully composed orchestral piece. Even the solos sit inside pre-planned backgrounds, so improvisation is one color among many.",
        "blues": "A 12-bar minor blues, the simplest frame in jazz, carries some of the most dissonant writing of the swing era.",
        "call": "Every chorus is organized as sections answering each other or a soloist."
      },
      demo: {
        label: "Ko-Ko’s minor-blues frame (one bar compressed to two beats): E♭m6 – A♭m6 – E♭m6 – B7–B♭7 – E♭m6",
        bpm: 110,
        beats: 24,
        events: [
          { t: 0, d: 8, notes: ["Eb2", "Bb2", "Gb3", "C4"], v: 0.75 },
          { t: 8, d: 4, notes: ["Ab2", "F3", "Cb4", "Eb4"], v: 0.75 },
          { t: 12, d: 4, notes: ["Eb2", "Bb2", "Gb3", "C4"], v: 0.75 },
          { t: 16, d: 2, notes: ["B2", "A3", "D#4", "F#4"], v: 0.85 },
          { t: 18, d: 2, notes: ["Bb2", "Ab3", "D4", "F4"], v: 0.85 },
          { t: 20, d: 4, notes: ["Eb2", "Bb2", "Gb3", "C4"], v: 0.7 }
        ]
      },
      listen: "Duke Ellington Ko-Ko 1940",
      sources: [
        { cite: "David Berger, rehearsal notes to “Ko-Ko” (transcription for Jazz at Lincoln Center, Essentially Ellington 2003), with comments by Wynton Marsalis", url: "https://content.alfred.com/catpages/00-JLCM02001.pdf" },
        { cite: "Andy Jaffe, “VCFA Talk on Ellington Composition Techniques” (Vermont College of Fine Arts lecture notes, Feb. 2017)", url: "https://jazzday.com/media/VCFA-Ellington-Lecture-Andy-Jaffe-Feb-2017.pdf" },
        { cite: "David Lee Joyner, American Popular Music, 3rd ed. (McGraw-Hill), Listening Guide 8.1, Ellington “Ko-Ko”", url: "https://highered.mheducation.com/sites/0073526576/student_view0/chapter8/listening_guides.html" },
        { cite: "Jazz Audio-Aligned Harmony (JAAH) dataset, Music Technology Group (UPF), “Ko-Ko” annotation", url: "https://mtg.github.io/JAAH/data/ko-ko(ellington).html" },
        { cite: "Discography of American Historical Recordings (UCSB), Victor matrix BS-044889 “Ko-ko”; Victor 26577", url: "https://adp.library.ucsb.edu/index.php/matrix/refer/200041186" }
      ]
    },

    {
      id: "lester-leaps-in",
      era: "swing",
      title: "Lester Leaps In",
      composer: "Lester Young (on the chord changes of George Gershwin’s “I Got Rhythm”)",
      performer: "Count Basie’s Kansas City Seven",
      artistIds: ["lester-young", "count-basie", "buck-clayton", "freddie-green", "walter-page", "jo-jones"],
      year: 1939,
      recording: "Vocalion 5118, recorded September 5, 1939, New York",
      key: "B♭ major",
      meter: "4/4",
      tempo: "fast, ~ 250 bpm",
      form: {
        summary: "Six 32-bar AABA choruses on rhythm changes: riff head, two Young choruses, three choruses of trading",
        sections: [
          { label: "Head", bars: 32, note: "ensemble riff chorus" },
          { label: "Young", bars: 32, note: "tenor solo" },
          { label: "Young", bars: 32, note: "stop time (Basie collision at the start)" },
          { label: "Fours", bars: 32, note: "Young ↔ Basie" },
          { label: "Fours", bars: 32, note: "Young ↔ ensemble" },
          { label: "Fours", bars: 32, note: "Basie ↔ ensemble" }
        ]
      },
      progression: {
        label: "Rhythm-changes bridge (bars 17–24), Weimar Jazz Database annotation",
        bars: ["D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7"]
      },
      findings: [
        { title: "A head arrangement turned composition", text: "Credited to Young, the piece is a head arrangement, a routine worked out by ear and carried in the Basie band book, built over the chord progression of Gershwin’s “I Got Rhythm.” Its melody is a riff tune. The Kansas City way of composing needs no score: a memorable figure, a familiar progression, and a plan for who plays when.", source: 0 },
        { title: "Form made of trading", text: "After the riff chorus and Young’s two choruses (the second in stop time), the last three choruses are organized entirely as exchanges of four bars. Young trades with Basie, then Young with the ensemble, then Basie with the ensemble. The arrangement is essentially a schedule of call and response laid over a 32-bar AABA frame.", source: 2 },
        { title: "The collision", text: "At the start of Young’s second chorus he and Basie collide. Dave Gelly writes that Young carries doggedly on while Basie stops to get his bearings, and they are back together eight bars later. Gunther Schuller (The Swing Era) suggests Basie simply forgot about Young’s second chorus. The take was issued anyway, a reminder that the routine lived in memory, not on paper.", source: 2 },
        { title: "Reducing the harmony", text: "Alyn Shipton, quoted on JazzStandards.com, contrasts Young’s tendency to “simplify or reduce the harmonic material” with Hawkins’s substitute chords. The Weimar Jazz Database chord grid for Young’s solo renders the A sections as plain B♭, and only the bridge’s chain of dominants (D7–G7–C7–F7) moves.", source: 3 },
        { title: "Rhythm as the variable", text: "Shipton notes that Young’s solo “abounds with rhythmic variation”: some phrases enter exactly on the beat, others are delayed by an eighth or a quarter note. A transcription study adds that Young avoids chord thirds on the bridge, favors ninths, and uses pitch scoops. The interest moves from what the chords are to where the phrases fall.", source: 3 }
      ],
      throughlines: ["call", "song", "written"],
      throughlineNotes: {
        "call": "A riff head and three closing choruses of four-bar exchanges make call and response the form itself.",
        "song": "The chord progression of Gershwin’s “I Got Rhythm” is reused under a new riff, a swing-era contrafact that points straight at bebop.",
        "written": "Nothing here needs to be written down. The arrangement is an agreed routine, and the record keeps the moment it went wrong."
      },
      demo: {
        label: "Rhythm-changes bridge: D7 – G7 – C7 – F7 (last dominant shortened) back to B♭6",
        bpm: 180,
        beats: 32,
        events: [
          { t: 0, d: 7.5, notes: ["D3", "F#3", "A3", "C4"], v: 0.75 },
          { t: 8, d: 7.5, notes: ["G2", "F3", "B3", "D4"], v: 0.75 },
          { t: 16, d: 7.5, notes: ["C3", "E3", "G3", "Bb3"], v: 0.75 },
          { t: 24, d: 3.5, notes: ["F2", "Eb3", "A3", "C4"], v: 0.75 },
          { t: 28, d: 4, notes: ["Bb2", "F3", "G3", "D4"], v: 0.7 }
        ]
      },
      listen: "Count Basie Kansas City Seven Lester Leaps In 1939",
      sources: [
        { cite: "Wikipedia, “Lester Leaps In” (recording data, personnel; citing Brian Rust, Jazz and Ragtime Records 1897–1942)", url: "https://en.wikipedia.org/wiki/Lester_Leaps_In" },
        { cite: "Weimar Jazz Database (Jazzomat Research Project), “Lester Young – Lester Leaps In”: key, tempo, form, chord annotation", url: "https://jazzomat.hfm-weimar.de/dbformat/synopsis/solo283.html" },
        { cite: "Core Jazz, “Lester Leaps In” (Sept. 5, 2012), summarizing Dave Gelly, Being Prez; Gunther Schuller, The Swing Era; Douglas Henry Daniels, Lester Leaps In; Alyn Shipton, A New History of Jazz", url: "https://corejazz.blogspot.com/2012/09/lester-leaps-in.html" },
        { cite: "JazzStandards.com, “Lester Leaps In” (quoting Alyn Shipton, A New History of Jazz)", url: "https://www.jazzstandards.com/compositions-2/lesterleapsin.htm" },
        { cite: "“A Lesson From Lester” (transcription study, University of North Carolina Wilmington)", url: "https://people.uncw.edu/russellr/lester.html" }
      ]
    },

    /* ───────────────────────────── BEBOP ───────────────────────────── */
    {
      id: "ko-ko-parker",
      era: "bebop",
      title: "Ko Ko",
      composer: "Charlie Parker (on the chord changes of Ray Noble’s “Cherokee”)",
      performer: "Charlie Parker’s Reboppers",
      artistIds: ["charlie-parker", "dizzy-gillespie", "max-roach"],
      year: 1945,
      recording: "Savoy 597, recorded November 26, 1945, WOR Studios, New York",
      key: "B♭ major (head harmonically ambiguous)",
      meter: "4/4",
      tempo: "very fast, ~ 300 bpm",
      form: {
        summary: "32-bar composed head (no Cherokee melody), two 64-bar choruses on Cherokee changes, drum solo, 28-bar coda",
        sections: [
          { label: "Head", bars: 32, note: "8 written / 8 trumpet / 8 alto / 8 written" },
          { label: "Chorus 1", bars: 64, note: "A16 A16 B16 A16" },
          { label: "Chorus 2", bars: 64, note: "opens with “High Society” lick" },
          { label: "Drums", bars: 32, note: "Max Roach (some accounts: 27 bars)" },
          { label: "Coda", bars: 28, note: "returns to head material" }
        ]
      },
      progression: {
        label: "The “Cherokee” bridge (bars 33–48 of the 64-bar chorus), Weimar Jazz Database annotation",
        bars: ["C♯m7", "F♯7", "Bmaj7", "Bmaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Cm7", "F7"]
      },
      findings: [
        { title: "An introduction that became the theme", text: "Parker meant the opening 32 bars as an introduction to “Cherokee.” On the first take the band went on to Noble’s melody and the take was stopped. The second take dropped “Cherokee” altogether, leaving time for a two-chorus solo and turning the introduction into the head of a new piece. Ed Komara adds that Savoy’s owner discouraged playing the original themes so as not to pay composer royalties.", source: 0 },
        { title: "A palindromic, harmonically suspended head", text: "Martin describes the head as a palindrome: eight bars written for alto and trumpet, eight improvised by trumpet, eight improvised by alto, and eight written. It seems conceived for horns and drums only, without piano or bass. G-minor and C-minor implications can be inferred, but the overall effect is suspended harmony over 32 bars, which Martin calls unique among Parker’s compositions.", source: 0 },
        { title: "The Cherokee bridge", text: "The 64-bar “Cherokee” form puts its hardest passage in the bridge: ii–V–I progressions into B, A and G major (all remote from B♭), then Gm7–C7–Cm7–F7 back home. Komara notes that on Basie’s 1939 “Cherokee” the soloists improvised only on the A sections and left the bridge to the full band. On “Ko Ko” Parker gets through the bridge partly by alluding to “Tea for Two” (around 1:41–1:47), in the manner of Art Tatum.", source: 1 },
        { title: "Formulas and thematic returns", text: "Martin, using Thomas Owens’s catalogue of Parker formulas, shows the solo assembled partly from stock figures. Owens’s M.44 (the “High Society” clarinet lick) opens the second chorus, and M.5C, a Gm7–C7 figure, closes both bridges. The opening four bars of the solo come back at the start of the second A and again at the final A, so the improvisation is shaped thematically, almost like a composition.", source: 0 },
        { title: "Higher intervals at 300 bpm", text: "Parker traced his breakthrough to working over “Cherokee” in 1939, when he found that he could use the higher intervals of a chord as a melody line, backed by related changes. On “Ko Ko” those 9ths, 11ths and 13ths go by at about 300 beats per minute, five beats a second, and Komara notes Parker still gives each note its full value.", source: 1 },
        { title: "A drum solo for logistical reasons", text: "Komara and Martin (quoting producer Teddy Reig) agree on why there is a drum solo. Gillespie played trumpet on the head, moved to piano for Parker’s solo, and needed time to get back to the microphone with his trumpet for the ending, so Max Roach’s solo was put in. The trumpeter’s identity is itself disputed: Gillespie said he played it, while some later researchers hear Miles Davis.", source: 3 }
      ],
      throughlines: ["song", "written"],
      throughlineNotes: {
        "song": "A 1938 dance-band hit keeps only its chord progression. The contrafact is the bebop way of borrowing a song.",
        "written": "A composed head and coda frame two improvised choruses, and the improvisation itself repeats prepared formulas and motives."
      },
      demo: {
        label: "The Cherokee bridge, compressed: ii–V–I in B, A and G, then Gm7–C7–Cm7–F7 heading back to B♭",
        bpm: 150,
        beats: 32,
        events: [
          { t: 0, d: 2, notes: ["C#3", "B3", "E4", "G#4"], v: 0.75 },
          { t: 2, d: 2, notes: ["F#2", "E3", "A#3", "C#4"], v: 0.75 },
          { t: 4, d: 4, notes: ["B2", "A#3", "D#4", "F#4"], v: 0.75 },
          { t: 8, d: 2, notes: ["B2", "A3", "D4", "F#4"], v: 0.75 },
          { t: 10, d: 2, notes: ["E2", "D3", "G#3", "B3"], v: 0.75 },
          { t: 12, d: 4, notes: ["A2", "G#3", "C#4", "E4"], v: 0.75 },
          { t: 16, d: 2, notes: ["A2", "G3", "C4", "E4"], v: 0.75 },
          { t: 18, d: 2, notes: ["D3", "C4", "F#4", "A4"], v: 0.75 },
          { t: 20, d: 4, notes: ["G2", "F#3", "B3", "D4"], v: 0.75 },
          { t: 24, d: 2, notes: ["G2", "F3", "Bb3", "D4"], v: 0.75 },
          { t: 26, d: 2, notes: ["C3", "Bb3", "E4", "G4"], v: 0.75 },
          { t: 28, d: 2, notes: ["C3", "Bb3", "Eb4", "G4"], v: 0.75 },
          { t: 30, d: 2, notes: ["F2", "Eb3", "A3", "C4"], v: 0.75 }
        ]
      },
      listen: "Charlie Parker Ko Ko 1945 Savoy",
      sources: [
        { cite: "Henry Martin, Charlie Parker, Composer (Oxford University Press, 2020), ch. 9, “Improvisational Frames with Composed Sections and Non-Standard Works,” §15 “Ko Ko (1945)” (citing Thomas Owens, Charlie Parker: Techniques of Improvisation, PhD diss., UCLA, 1974)", url: "https://academic.oup.com/book/40566/chapter/347965237" },
        { cite: "Ed Komara, “‘Ko Ko’—Charlie Parker, Miles Davis, Dizzy Gillespie, and others (1945),” National Recording Registry essay, Library of Congress", url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/ko-ko.pdf" },
        { cite: "Weimar Jazz Database (Jazzomat Research Project), “Charlie Parker – Ko-Ko”: key, tempo (≈299 bpm), chord annotation", url: "https://jazzomat.hfm-weimar.de/dbformat/synopsis/solo59.html" },
        { cite: "Wikipedia, “Ko-Ko” (structure and personnel dispute; citing James Patrick’s Savoy session notes and Chuck Haddix, Bird)", url: "https://en.wikipedia.org/wiki/Ko-Ko" }
      ]
    },

    {
      id: "night-in-tunisia-gillespie",
      era: "bebop",
      title: "A Night in Tunisia",
      composer: "Dizzy Gillespie (co-credited to Frank Paparelli)",
      performer: "Dizzy Gillespie and His Orchestra (septet: Don Byas, Milt Jackson, Al Haig, Bill DeArango, Ray Brown, J. C. Heard)",
      artistIds: ["dizzy-gillespie", "milt-jackson", "ray-brown", "charlie-parker"],
      year: 1946,
      recording: "Victor 40-0132 (matrix D6VB1683-1), recorded February 22, 1946, New York",
      key: "D minor",
      meter: "4/4",
      tempo: "medium-up",
      form: {
        summary: "Bass-ostinato intro, 32-bar AABA head (Latin A sections, swing bridge), 12-bar interlude and 4-bar break sending off each soloist",
        sections: [
          { label: "A", bars: 8, note: "E♭7 ↔ Dm over bass ostinato" },
          { label: "A", bars: 8 },
          { label: "B", bars: 8, note: "swing; “Alone Together” bridge" },
          { label: "A", bars: 8 },
          { label: "Interlude", bars: 12, note: "send-off" },
          { label: "Break", bars: 4, note: "solo break" }
        ]
      },
      progression: {
        label: "A section and bridge (Weimar Jazz Database annotation of a 1957 performance)",
        bars: ["E♭7", "Dm6", "E♭7", "Dm6", "E♭7", "Dm6", "Em7♭5 A7", "Dm6", "Am7♭5", "D7♭9", "Gm6", "Gm7 C7", "Gm7♭5", "C7♭9", "F6", "Em7♭5 A7"]
      },
      findings: [
        { title: "A dominant replaced by its tritone", text: "The A section is basically V7–i–V7–i in D minor. In place of A7 Gillespie uses E♭7, an altered ♭II (Neapolitan) chord that works as a tritone substitution, so the harmony rocks by half step between E♭7 and D minor. The melody leans on color tones and extensions rather than chord roots.", source: 2 },
        { title: "An ostinato instead of a walking bass", text: "Gillespie brought Afro-Cuban rhythm into the A sections, with a syncopated, repeating bass figure in place of the regular four-beat walking bass of swing. In his memoir he says the mixture introduced a special kind of syncopation in the bass line, and that the melody grew out of chords he was playing at the piano, with a Latin, oriental feel. In common practice only the intro and A sections take the Latin feel, and the bridge and solos swing.", source: 2 },
        { title: "A borrowed bridge", text: "Both Wikipedia and JazzStandards.com identify the bridge as the bridge of “Alone Together”: a minor ii–V into G minor (Am7♭5–D7♭9–Gm), a ii–V into F (Gm7♭5–C7♭9–F6), and an unresolved Em7♭5–A7 that sends the V chord back to the E♭7 of the A section. Even an original bebop tune borrows from Broadway.", source: 1 },
        { title: "Interlude and break as composition", text: "Martin reconstructs how the send-off grew. Sarah Vaughan’s December 1944 recording (as “Interlude”) has none. Gillespie’s January 26, 1945 arrangement for Boyd Raeburn adds the 12-bar send-off and a two-bar break, and later in 1945 the break was stretched to four bars. The interlude and break are the composed part, and the music they introduce is improvised.", source: 0 },
        { title: "The Famous Alto Break", text: "Parker took over the four-bar break, and Martin treats his “Famous Alto Break” as perhaps Parker’s most significant non-standard composition. Its authoritative version comes from Parker’s Dial session of March 28, 1946, five weeks after this Victor date. Of 21 known Parker recordings of the break, Marcello Caporaletti counts fifteen in the same basic form, with the opening and closing segments nearly fixed.", source: 0 },
        { title: "Where and when it was written", text: "Martin, citing Gillespie’s memoir, dates the tune to 1941–42 while Gillespie was with Benny Carter’s band at Kelly’s Stables on 52nd Street. JazzStandards.com instead places it in 1942 in Earl Hines’s band with Parker. Gillespie said Paparelli’s co-credit was payment for unrelated transcription work.", source: 0 }
      ],
      throughlines: ["rhythm", "written", "song"],
      throughlineNotes: {
        "rhythm": "An Afro-Cuban bass ostinato in the A sections, against a swing bridge, puts the Spanish tinge at the center of a bebop composition.",
        "written": "The 12-bar interlude and 4-bar break are composed launching pads for improvisation, and Parker’s break became a composition in its own right.",
        "song": "The bridge is taken straight from the bridge of “Alone Together.”"
      },
      demo: {
        label: "A-section harmony: E♭7 (tritone sub) ↔ Dm6, the Em7♭5–A7 turnaround, then the ordinary A7–Dm6 for comparison",
        bpm: 120,
        beats: 32,
        events: [
          { t: 0, d: 4, notes: ["Eb2", "G3", "Bb3", "Db4"], v: 0.8 },
          { t: 4, d: 4, notes: ["D2", "F3", "A3", "B3"], v: 0.75 },
          { t: 8, d: 4, notes: ["Eb2", "G3", "Bb3", "Db4"], v: 0.8 },
          { t: 12, d: 4, notes: ["D2", "F3", "A3", "B3"], v: 0.75 },
          { t: 16, d: 2, notes: ["E2", "G3", "Bb3", "D4"], v: 0.75 },
          { t: 18, d: 2, notes: ["A2", "E3", "G3", "C#4"], v: 0.75 },
          { t: 20, d: 4, notes: ["D2", "F3", "A3", "B3"], v: 0.7 },
          { t: 24, d: 4, notes: ["A2", "E3", "G3", "C#4"], v: 0.75 },
          { t: 28, d: 4, notes: ["D2", "F3", "A3", "B3"], v: 0.7 }
        ]
      },
      listen: "Dizzy Gillespie A Night in Tunisia 1946 Victor",
      sources: [
        { cite: "Henry Martin, Charlie Parker, Composer (Oxford University Press, 2020), ch. 9, §8 “The Famous Alto Break” (citing Gillespie, To Be, or Not … to Bop; Haddix, Bird; Caporaletti 2005–2006; Martin Williams)", url: "https://academic.oup.com/book/40566/chapter/347965237" },
        { cite: "Wikipedia, “A Night in Tunisia” (citing Gillespie, To Be, or Not … to Bop, and Ted Gioia, The Jazz Standards)", url: "https://en.wikipedia.org/wiki/A_Night_in_Tunisia" },
        { cite: "JazzStandards.com, “A Night in Tunisia” (musical analysis; quotes Gillespie’s memoir)", url: "https://jazzstandards.com/compositions-0/nightintunisia.htm" },
        { cite: "Weimar Jazz Database (Jazzomat Research Project), “A Night in Tunisia” (Pepper Adams solo, Lee Morgan, The Cooker, 1957): chord annotation", url: "https://jazzomat.hfm-weimar.de/dbformat/synopsis/solo354.html" },
        { cite: "Jazzdisco.org, Al Haig discography: Dizzy Gillespie and His Orchestra, NYC, February 22, 1946", url: "https://www.jazzdisco.org/al-haig/discography/" },
        { cite: "Reginald Thomas, “Rehearsal Strategies – A Night in Tunisia” (Jazz at Lincoln Center, Essentially Ellington), on Latin A sections vs. swing elsewhere", url: "https://jazz.org/wp-content/uploads/2024/04/Rehearsal-Strategies-TUNISIA.pdf" }
      ]
    },

    {
      id: "round-midnight-monk",
      era: "bebop",
      title: "’Round Midnight",
      composer: "Thelonious Monk (co-credited to Cootie Williams; lyrics Bernie Hanighen)",
      performer: "Thelonious Monk Quintet (George Taitt, Edmund Gregory [Sahib Shihab], Robert Paige, Art Blakey)",
      artistIds: ["thelonious-monk", "art-blakey", "cootie-williams", "dizzy-gillespie"],
      year: 1947,
      recording: "Blue Note 543 (matrix BN321-1, as “’Round About Midnight”), recorded November 21, 1947, WOR Studios, New York",
      key: "E♭ minor",
      meter: "4/4",
      tempo: "slow ballad",
      form: {
        summary: "8-bar intro, one 32-bar AABA chorus led by piano with horn harmony, 8-bar piano close",
        sections: [
          { label: "Intro", bars: 8, note: "alto & trumpet overlap; bass break bars 7–8" },
          { label: "A", bars: 8, note: "piano theme, horns harmonize" },
          { label: "A", bars: 8, note: "harmonic rhythm compressed at end" },
          { label: "B", bars: 8, note: "ends on E♭ major (Picardy third)" },
          { label: "A", bars: 8 },
          { label: "Piano", bars: 8, note: "8-bar piano solo ends the record" }
        ]
      },
      progression: null,
      findings: [
        { title: "A song before it was a standard", text: "Monk probably wrote the tune around 1940–41, though his manager dated an early version to about 1936. It was copyrighted in September 1943 in C minor as “I Need You So.” Cootie Williams made the first recording in August 1944, at Bud Powell’s urging, and took a co-composer credit. The now-standard introduction came from Gillespie, who first wrote it for the end of his arrangement of “I Can’t Get Started.”", source: 2 },
        { title: "Sliding ii–Vs", text: "The A section opens i–vi–ii7–V7 in E♭ minor. Its third and fourth bars then slide toward the subdominant (A♭) through Bm7–E7–B♭m7–E♭7. The first ii–V is an upper chromatic neighbour of the second, which gives descending guide tones. Hoiem’s parallel analysis of the 1947 record reads the same chords.", source: 1 },
        { title: "A bridge that sounds lost but isn’t", text: "The bridge sounds unsettled but rests on vi7♭5–II7–V7, with the II7 replaced by its tritone substitute so the bass can fall chromatically. The pattern is stated twice and then continues downward. The section ends on an E♭ major chord, a Picardy third in a minor-key tune, which blurs major and minor.", source: 0 },
        { title: "Compression and leftovers", text: "Monk speeds up the harmonic rhythm in the last bars of A2 so that it can resolve in bar 16. He then begins the bridge with the ‘missing’ end of A2, rhythmically shifted. This kind of compression and expansion of phrases is a compositional habit Hoiem also finds in “Straight, No Chaser” and “Blue Monk.”", source: 0 },
        { title: "Arranged as a piano piece with horns", text: "Lionel Grigson’s transcription notes describe the 1947 record. The intro overlaps alto and trumpet phrases over a descending Gm–Fm–E♭m progression, with a bass break in bars 7–8. The theme is then played by Monk with trumpet and saxophone adding harmony parts, and it soon turns into paraphrase and improvisation. The record ends, unusually, with an eight-bar piano solo after the theme.", source: 0 }
      ],
      throughlines: ["written", "song"],
      throughlineNotes: {
        "written": "Monk’s record is almost entirely the composition. Intro, voiced theme and closing piano bars leave room only for paraphrase, the reverse of the head-and-blowing routine.",
        "song": "A jazz musician’s own song becomes a standard through the bands of others (Williams, Gillespie), picking up their intro and lyrics along the way."
      },
      demo: {
        label: "’Round Midnight’s sliding ii–Vs: E♭m7, then Bm7–E7 dropping a half step to B♭m7–E♭7",
        bpm: 60,
        beats: 12,
        events: [
          { t: 0, d: 4, notes: ["Eb2", "Bb3", "Db4", "Gb4"], v: 0.7 },
          { t: 4, d: 2, notes: ["B2", "A3", "D4", "F#4"], v: 0.75 },
          { t: 6, d: 2, notes: ["E2", "G#3", "B3", "D4"], v: 0.75 },
          { t: 8, d: 2, notes: ["Bb2", "Ab3", "Db4", "F4"], v: 0.75 },
          { t: 10, d: 2, notes: ["Eb2", "G3", "Bb3", "Db4"], v: 0.75 }
        ]
      },
      listen: "Thelonious Monk Round Midnight 1947 Blue Note",
      sources: [
        { cite: "Rachel Hoiem, “Layin’ Dead – Composition Analysis: ’Round Midnight (1947),” As It Ought To Be (Oct. 6, 2009; archived), quoting Lionel Grigson’s transcription notes", url: "https://web.archive.org/web/20141226225316/http://asitoughttobe.com/2009/10/06/thelonious-monk/" },
        { cite: "JazzStandards.com, “’Round Midnight” (musical analysis by Noah Baerman and K. J. McElrath)", url: "https://www.jazzstandards.com/compositions-0/roundmidnight.htm" },
        { cite: "Wikipedia, “’Round Midnight (song)” (composition history; citing Robin D. G. Kelley, Thelonious Monk: The Life and Times of an American Original, 2009)", url: "https://en.wikipedia.org/wiki/%27Round_Midnight_(song)" },
        { cite: "Jazzdisco.org, Thelonious Monk discography: Thelonious Monk Quintet, WOR Studios, November 21, 1947", url: "https://www.jazzdisco.org/thelonious-monk/discography/" }
      ]
    }
  ]
});
