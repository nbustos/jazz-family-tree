/* Notes on Notes — eras "modern" (1995–2010) and "today" (2010–2026). */
NOTES.add({
  eras: {
    "modern": {
      overview: "Around 1995 the piano trio became jazz's main workshop for composition. Brad Mehldau and The Bad Plus turned songs by Radiohead, Nick Drake and Nirvana into new repertoire, and Vijay Iyer recast soul-jazz and M.I.A. tracks with formal rhythmic systems. Odd meters (5/4, 7/4, 11/8) and metric games became everyday trio vocabulary, while many harmonies moved toward modal vamps and slow-moving pop progressions. The written/improvised balance moved two ways. The composing increasingly happened in the arrangement (transcribing a programmed beat or re-proportioning a vamp). Meanwhile veterans like Wayne Shorter's quartet treated their own famous heads as raw motifs for 'spontaneous composition.' Orchestral writers such as Maria Schneider went the other way, toward long programmatic scores like her 22-minute 'Cerulean Skies.'",
      changes: [
        "The repertoire widened: rock, folk-pop and hip-hop-era songs joined the Great American Songbook as material to arrange.",
        "Odd and shifting meters moved from special effect to default trio language (e.g. Mehldau's 7/4 'All the Things You Are').",
        "The arrangement itself became the composition: re-proportioning a groove, or orchestrating a drum-machine track for acoustic trio.",
        "Heads lost authority as fixed forms. Bands treated them as motifs and gestures, and players spoke of being 'less constricted by whatever form we were in.'",
        "Musician-scholars (Iyer) brought cognitive science and microtiming research directly into how rhythm was composed."
      ],
    },
    "today": {
      overview: "Since 2010 the studio and the laptop have become compositional instruments in their own right. Makaya McCraven builds albums by editing recorded improvisations in Ableton, Jacob Collier multitracks every voice of an arrangement himself, and Robert Glasper's Black Radio (2012) folded R&B and hip-hop production into a jazz band's working method. Scale has expanded at both ends. Kamasi Washington's orchestral-choral suites use classical devices like counterpoint as public statements, while home-studio arrangers distribute dense reharmonization (even microtonal tuning) online. Rhythm draws on beat-making, odd-meter polyrhythm and, in London, Caribbean and African diaspora dance music. The written/improvised line is often crossed after the fact: improvisations become compositions through editing, and compositions are built to be layered.",
      changes: [
        "Post-production became composition: live improvisations are cut, looped, overdubbed and rearranged into fixed works.",
        "Harmony moved beyond the tempered grid: just-intonation pivots and microtonal modulation (Collier) reached a mass online audience.",
        "Large forms returned at orchestral-choral scale, organized by classical procedures such as layered counterpoint.",
        "Groove vocabulary now comes from hip-hop production, odd-meter polyrhythm (7/8, 5/8, 11/8) and diaspora dance music, and is often designed with sampling and editing in mind.",
        "Concept-first composition is common: a title, idea or multimedia commission defines the structure before the notes."
      ],
    }
  },
  pieces: [
    // ───────────────────────── MODERN (1995–2010) ─────────────────────────
    {
      id: "exit-music-mehldau",
      era: "modern",
      title: "Exit Music (For a Film)",
      composer: "Radiohead",
      performer: "Brad Mehldau Trio",
      artistIds: ["brad-mehldau"],
      year: 1998,
      recording: "Songs: The Art of the Trio, Volume Three, Warner Bros., 1998 (Mehldau, Larry Grenadier, Jorge Rossy); live version on Art of the Trio 4: Back at the Vanguard (rec. Jan. 1999)",
      key: "Minor ('the minor-key ballad', per Gioia)",
      meter: null,
      tempo: "Ballad ('between a dirge and a sonata')",
      form: {
        summary: "A rock ballad's song structure is taken over whole. The theme is stated complete, then opens into improvisation, and later versions add a climax.",
        sections: [
          { label: "Theme", bars: 0, note: "Radiohead's song stated in full, 'with reverence' (Gioia)" },
          { label: "Excursion", bars: 0, note: "Mehldau's improvisation over the song's material" },
          { label: "Climax", bars: 0, note: "In the 8:53 Vanguard version, a 'maelstrom climax' (Steinberg)" }
        ]
      },
      progression: null,
      findings: [
        { title: "'Song' as a compositional ideal", text: "Mehldau's notes for the Songs album say he was thinking about what 'song' meant: 'simplicity of melody, an economy of material and a short form,' and a piece that 'ends quickly' yet gives 'a feeling of endlessness.' Choosing a 1997 Radiohead ballad was part of that agenda. He was treating a contemporary pop song with the same respect as a Kern or Rodgers standard, and the album also includes Nick Drake's 'River Man.'", source: 1 },
        { title: "Theme first, then the excursion", text: "Ted Gioia hears the trio treat the 'minor-key ballad' 'with reverence, stating its theme fully before veering off into his own excursions.' He calls it 'something between a dirge and a sonata.' Grenadier and Rossy 'provide the barest of accoutrements,' so the song's own harmony and melody carry the form. That differs from the bebop practice of mining a standard for its changes.", source: 0 },
        { title: "An inherited dramatic arc", text: "Radiohead's original is built as one long crescendo rather than a repeating chorus. It starts with voice and acoustic guitar, adds a Mellotron choir, peaks with drums and fuzz bass, and then sinks back to voice, guitar and Mellotron. Taking over this arc gives the trio an arc-shaped form instead of the AABA chorus cycle of the Songbook.", source: 3 },
        { title: "The arrangement grows in performance", text: "The Songs version runs under four and a half minutes. By the January 1999 Village Vanguard recording, the piece had become a 'much different, fierier version.' In the same liner notes Mehldau says the trio felt 'less and less constricted by whatever form we were in,' and the set also includes their 7/4 'All the Things You Are.'", source: 2 },
        { title: "From cover to repertoire", text: "Reviewing the 1999 live album, Aaron Steinberg described 'an eight-minute workout' that builds to a 'maelstrom climax Thom Yorke probably never envisioned.' The song became a staple of the trio's concerts. That is how a 1990s rock song gained the reworked-in-performance life of a jazz standard.", source: 4 }
      ],
      throughlines: ["song", "written"],
      throughlineNotes: {
        "song": "The borrowed-song tradition reaches past Broadway: a 1997 Radiohead ballad becomes trio repertoire, and later a standard of sorts.",
        "written": "The song is stated almost intact and improvisation grows from its arc rather than from a chorus of changes."
      },
      demo: null,
      listen: "Brad Mehldau Trio Exit Music (For a Film) Songs Art of the Trio Volume Three",
      sources: [
        { cite: "Ted Gioia, 'Brad Mehldau: Exit Music (For a Film),' Jazz.com (track review)", url: "https://jazz.com/music/brad-mehldau-exit-music-for-a-film" },
        { cite: "Brad Mehldau, notes on Songs: The Art of the Trio, Volume Three (bradmehldaumusic.com)", url: "https://bradmehldaumusic.com/songs" },
        { cite: "Brad Mehldau, notes on Art of the Trio 4: Back at the Vanguard (bradmehldaumusic.com)", url: "https://www.bradmehldaumusic.com/back-at-the-vanguard" },
        { cite: "'Exit Music (For a Film),' Wikipedia (song structure, citing Footman 2007 and Randall 2000)", url: "https://en.wikipedia.org/wiki/Exit_Music_(For_a_Film)" },
        { cite: "Aaron Steinberg, 'Brad Mehldau' (concert preview), Cleveland Scene, 29 June 2000", url: "https://www.clevescene.com/music/brad-mehldau-1474581/" },
        { cite: "'Art of the Trio 4: Back at the Vanguard,' Wikipedia (rec. 5–10 Jan. 1999; 'Exit Music' 8:53)", url: "https://en.wikipedia.org/wiki/Art_of_the_Trio_4:_Back_at_the_Vanguard" }
      ]
    },
    {
      id: "mystic-brew-iyer",
      era: "modern",
      title: "Mystic Brew",
      composer: "Ronnie Foster (arr. Vijay Iyer)",
      performer: "Vijay Iyer Trio (Iyer, Stephan Crump, Marcus Gilmore)",
      artistIds: ["vijay-iyer"],
      year: 2009,
      recording: "Historicity, ACT, 2009 (rec. Systems Two, Brooklyn, 3 Nov. 2008 & 31 Mar. 2009)",
      key: null,
      meter: "Source in 4/4. The trio's cycles run 8, then 13, then 21 beats (3+5 → 5+8 → 8+13)",
      tempo: null,
      form: {
        summary: "A two-chord soul-jazz vamp whose short-long harmonic rhythm is re-proportioned along the Fibonacci series",
        sections: [
          { label: "3 + 5", bars: 0, note: "Foster's original: short chord, long chord = 8 beats" },
          { label: "5 + 8", bars: 0, note: "faster pulse, 13 beats in about the same span" },
          { label: "8 + 13", bars: 0, note: "faster still, 21 beats; same golden-ish split" }
        ]
      },
      progression: null,
      findings: [
        { title: "An asymmetric source", text: "Iyer points out that the harmonic rhythm of Ronnie Foster's 1972 original is already 'asymmetric in a Fibonacci way: a short chord and then a long chord.' It is three beats plus five, totalling eight, inside ordinary 4/4. He describes the chord changes as falling on the steps of a walking pulse, so the proportion is something the body feels as well as something you can count.", source: 0 },
        { title: "Re-proportioning instead of re-metering", text: "Rather than simply moving the vamp into another meter, the trio 'move it through Fibonacci-like transformations.' The 3+5 cycle becomes a faster 5+8 (13 beats) and then an even faster 8+13 (21 beats), each filling roughly the same span of time. The second chord therefore always arrives at nearly the same point: 3/8 = .375, 5/13 ≈ .385 and 8/21 ≈ .381 of the cycle.", source: 0 },
        { title: "Hearing the system", text: "No Treble's reviewer described the arrangement as built on 'the ratio 3:5, 5:8, 8:13, 13:21 etc,' used 'to develop the piece's rhythmic figure.' That continues the series one step further than Iyer's own essay does. Ian Mann heard a piece that 'seems almost simple' until 'complex rhythms, grooves and time signatures soon emerge as the piece builds.' The math is meant to be felt as groove, not displayed.", source: 1 },
        { title: "Rhythm as embodied cognition", text: "The arrangement puts Iyer's scholarship into practice. His 2002 Music Perception article applied theories of embodied mind and situated cognition to expressive microtiming in African-American music, building on his 1998 Berkeley dissertation. In the Fibonacci essay he likewise argues that well-accented changes make even an irregular 21-beat cycle sound simple and natural.", source: 2 },
        { title: "A tune known through hip-hop", text: "'Mystic Brew' comes from Foster's 1972 Blue Note album Two Headed Freap and is best known as the sample under A Tribe Called Quest's 'Electric Relaxation.' Historicity applies the same method to M.I.A.'s 'Galang.' Iyer says he 'transcribed all the different rhythm tracks' of that programmed track to orchestrate them for acoustic trio. The source material and the technique both come from beat culture.", source: 3 }
      ],
      throughlines: ["rhythm", "song", "call"],
      throughlineNotes: {
        "rhythm": "The two-chord groove is recomposed by changing its proportions, so the meter itself becomes the material.",
        "song": "The borrowed tune now arrives through hip-hop sampling (Tribe's 'Electric Relaxation') rather than Broadway.",
        "call": "A riff-based, two-chord vamp, the oldest kind of jazz groove, is the whole structure."
      },
      demo: {
        label: "Fibonacci vamp: 3+5 → 5+8 → 8+13 (pitches arbitrary)",
        bpm: 96,
        beats: 24,
        events: [
          { t: 0, d: 2.95, notes: ["C3", "G3"], v: 0.8 },
          { t: 3, d: 4.95, notes: ["D3", "A3"], v: 0.8 },
          { t: 0, d: 0.2, notes: ["E5"], v: 0.35 }, { t: 1, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 2, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 3, d: 0.2, notes: ["E5"], v: 0.35 }, { t: 4, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 5, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 6, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 7, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 8, d: 3.027, notes: ["C3", "G3"], v: 0.8 },
          { t: 11.077, d: 4.873, notes: ["D3", "A3"], v: 0.8 },
          { t: 8, d: 0.2, notes: ["E5"], v: 0.35 }, { t: 8.615, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 9.231, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 9.846, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 10.462, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 11.077, d: 0.2, notes: ["E5"], v: 0.35 },
          { t: 11.692, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 12.308, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 12.923, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 13.538, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 14.154, d: 0.2, notes: ["E5"], v: 0.18 }, { t: 14.769, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 15.385, d: 0.2, notes: ["E5"], v: 0.18 },
          { t: 16, d: 2.998, notes: ["C3", "G3"], v: 0.8 },
          { t: 19.048, d: 4.902, notes: ["D3", "A3"], v: 0.8 },
          { t: 16, d: 0.19, notes: ["E5"], v: 0.35 }, { t: 16.381, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 16.762, d: 0.19, notes: ["E5"], v: 0.18 },
          { t: 17.143, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 17.524, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 17.905, d: 0.19, notes: ["E5"], v: 0.18 },
          { t: 18.286, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 18.667, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 19.048, d: 0.19, notes: ["E5"], v: 0.35 },
          { t: 19.429, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 19.81, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 20.19, d: 0.19, notes: ["E5"], v: 0.18 },
          { t: 20.571, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 20.952, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 21.333, d: 0.19, notes: ["E5"], v: 0.18 },
          { t: 21.714, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 22.095, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 22.476, d: 0.19, notes: ["E5"], v: 0.18 },
          { t: 22.857, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 23.238, d: 0.19, notes: ["E5"], v: 0.18 }, { t: 23.619, d: 0.19, notes: ["E5"], v: 0.18 }
        ]
      },
      listen: "Vijay Iyer Trio Mystic Brew Historicity",
      sources: [
        { cite: "Vijay Iyer, 'Strength in numbers: How Fibonacci taught us how to swing,' The Guardian, 15 Oct. 2009; reprinted as 'Music and its links with math,' Taipei Times, 20 Oct. 2009, p. 9", url: "https://www.taipeitimes.com/News/editorials/archives/2009/10/20/2003456369" },
        { cite: "Phil Wain, 'A review of Vijay Iyer Trio's Historicity,' No Treble, 10 Nov. 2009 (with Ian Mann, The Jazz Mann, 9 Sept. 2009: https://www.thejazzmann.com/reviews/review/vijay-iyer-trio-historicity)", url: "https://www.notreble.com/buzz/2009/11/10/a-review-of-vijay-iyer-trios-historicity/" },
        { cite: "Vijay Iyer, 'Embodied Mind, Situated Cognition, and Expressive Microtiming in African-American Music,' Music Perception 19/3 (2002): 387–414", url: "https://cnmat.berkeley.edu/publications/embodied-mind-situated-cognition-and-expressive-microtiming-african-american-music" },
        { cite: "David Dacks, 'Vijay Iyer' (interview), Exclaim!, 23 Feb. 2011; and 'Two Headed Freap,' Wikipedia (Foster original, 1972; Tribe sample)", url: "https://exclaim.ca/music/article/vijay_iyer" },
        { cite: "'Math Curse: Vijay Iyer on Funk and Fibonacci,' Stuck Between Stations, 14 Feb. 2010 (describes the 'three beats followed by five' chord pair)", url: "https://stuckbetweenstations.org/2010/02/14/math-curse-vijay-iyer-on-funk-and-fibonacci/" },
        { cite: "ACT Music, Historicity (ACT 9489), album page: recording data and Iyer's note on 'historicity'", url: "https://www.actmusic.com/en/historicity/ACT-9489" }
      ]
    },
    {
      id: "footprints-live-shorter",
      era: "modern",
      title: "Footprints (live)",
      composer: "Wayne Shorter",
      performer: "Wayne Shorter Quartet (Shorter, Danilo Pérez, John Patitucci, Brian Blade)",
      artistIds: ["wayne-shorter-quartet", "wayne-shorter", "john-patitucci", "brian-blade"],
      year: 2002,
      recording: "Footprints Live!, Verve, 2002 (rec. Festival de Jazz de Vitoria-Gasteiz, Spain, 20 July 2001; 7:55)",
      key: "C minor",
      meter: "Triple/compound. Notated variously as 3/4, 6/8 or 12/8 (sources differ)",
      tempo: null,
      form: {
        summary: "A 1966 minor-blues head is used as a pool of motifs for open quartet improvisation ('zero gravity')",
        sections: [
          { label: "Head", bars: 12, note: "12-bar C-minor blues in triple time (24 bars if counted in 3/4)" },
          { label: "Open group improvisation", bars: 0, note: "motivic and rhythmic gestures replace the chorus cycle as the anchor (Petrucelli)" }
        ]
      },
      progression: null,
      findings: [
        { title: "A blues in disguise", text: "'Footprints,' first recorded on Adam's Apple (1966) and months later on Miles Smiles, is a 12-bar C-minor blues. Its triple-time feel alternates between simple and compound meter, so it is 'not a jazz waltz.' Sources disagree on notation: Wikipedia lists 3/4, 6/8 and 12/8, Blue Note's own essay calls it a '6/8 minor blues,' and a Euromac 2017 paper asks whether it should be heard as a 24-bar double blues.", source: 0 },
        { title: "A turnaround that hides the blues", text: "Where a blues would cadence predictably, Shorter's last bars move through F♯m9(♭5) – F7(♯11) – E9(♭5) – A7(♯9) – Cm7, a chromatic slide that masks the form. Jam-session players often simplify it to D7(♯11) – D♭7(♯11) – Cm7. Even in 1966 the tune was built to unsettle the expected cadence.", source: 0 },
        { title: "35 years later, a new band", text: "The live version was recorded at Vitoria-Gasteiz on 20 July 2001, about a year into the quartet's life. It was Shorter's first official live album under his own name and the first album by the 'Footprints Quartet.' Shorter plays both tenor and soprano on this track.", source: 1 },
        { title: "'Zero gravity': gesture over form", text: "John Petrucelli's dissertation treats Shorter's concept of 'zero gravity' as the quartet's working method. Familiar Shorter tunes, with 'Footprints' named among his case studies, 'often deviate highly from expectations' because the band plays down form and harmony. Instead, motivic and rhythmic fragments act as gestures that the players use to build a narrative on the spot, and these gestures change from one performance to the next.", source: 2 },
        { title: "Composing the unexpected", text: "Asked about the quartet in 2013, Shorter recalled never rehearsing with Miles and said: 'This music, it's dealing with the unexpected... How do you rehearse the unknown?' He added that 'Jazz shouldn't have any mandates.' The written head is no longer a structure to be repeated. It is a seed for composing in real time.", source: 3 }
      ],
      throughlines: ["written", "blues", "rhythm"],
      throughlineNotes: {
        "written": "The fullest late-20th-century swing toward the improvised: a famous composed head becomes a source of motifs for real-time composition.",
        "blues": "Underneath the disguise is a 12-bar minor blues, the oldest jazz form, recast in triple time.",
        "rhythm": "The tune's ambiguous simple/compound triple meter gives the quartet room to shift the pulse."
      },
      demo: null,
      listen: "Wayne Shorter Quartet Footprints Live 2001",
      sources: [
        { cite: "'Footprints (composition),' Wikipedia (form, meter and harmony, citing Boras, Jazz Composition and Arranging, 2005, and Waters, The Studio Recordings of the Miles Davis Quintet, 2011); with Blue Note Records, 'Wayne Shorter Finds His Groove on Adam's Apple,' 19 Nov. 2013", url: "https://en.wikipedia.org/wiki/Footprints_(composition)" },
        { cite: "'Footprints Live!,' Wikipedia (recording dates, venues, durations, personnel)", url: "https://en.wikipedia.org/wiki/Footprints_Live!" },
        { cite: "John Petrucelli, Beyond the Sound Barrier: Improvisation, Repertoire and Narrativity in the Wayne Shorter Quartet, 2000–2015 (PhD diss., University of Pittsburgh, 2018), abstract; and IJS Roundtable summary, 'Gesture and Interpretation in Wayne Shorter's Quartet,' 18 Mar. 2015", url: "http://d-scholarship.pitt.edu/34609/" },
        { cite: "Laura Sullivan, 'Wayne Shorter On Jazz: How Do You Rehearse The Unknown?,' NPR, 2 Feb. 2013", url: "https://www.wkar.org/2013-02-02/wayne-shorter-on-jazz-how-do-you-rehearse-the-unknown" },
        { cite: "IJS Roundtable announcement: John Petrucelli, 'Gesture and Interpretation in Wayne Shorter's Quartet' (pieces discussed: 'Masqualero,' 'Footprints,' 'Sanctuary,' 'Orbits')", url: "https://jazzpromoservices.com/jazz-news/gesture-and-interpretation-in-wayne-shorters-quartet-by-john-petrucelli-ijs-roundtable-at-a-special-time-3-18-15/" }
      ]
    },

    // ───────────────────────── TODAY (2010–2026) ─────────────────────────
    {
      id: "truth-kamasi",
      era: "today",
      title: "Truth",
      composer: "Kamasi Washington",
      performer: "Kamasi Washington",
      artistIds: ["kamasi-washington", "terrace-martin", "thundercat", "miles-mosley", "west-coast-get-down"],
      year: 2017,
      recording: "Harmony of Difference EP, Young Turks, 2017 (rec. Vox Recording Studios, Los Angeles); suite premiered at the 2017 Whitney Biennial",
      key: null,
      meter: null,
      tempo: null,
      form: {
        summary: "The 13½-minute sixth movement of a six-part suite. It combines the five preceding compositions and grows by accumulation to a choral-orchestral restatement.",
        sections: [
          { label: "Layering", bars: 0, note: "keyboards, then guitar, vibraphone, brass, finally wordless choir" },
          { label: "Tenor solo", bars: 0, note: "after the crescendo, Washington's 'groove permeated solo'" },
          { label: "Restatement", bars: 0, note: "choir and orchestra 'triumphantly restate the theme'" }
        ]
      },
      progression: null,
      findings: [
        { title: "The concept came first", text: "Washington says he normally writes the music first and works out its meaning afterwards. Here 'the idea of a Harmony of Difference was what came first,' and ''Truth' was actually the first title.' He then wrote the other pieces as 'the steps, or the path, to finding Truth.' The suite was planned backwards from its final movement.", source: 0 },
        { title: "Counterpoint as program", text: "The suite was announced as a six-part work that 'explores the philosophical possibilities of the musical technique known as counterpoint.' Washington defined counterpoint as 'the art of balancing similarity and difference to create harmony between separate melodies.' A Baroque procedure became the organizing metaphor for a statement about social difference.", source: 1 },
        { title: "Five compositions, played at once", text: "The press materials state that 'each of the first five movements is its own unique composition,' namely 'Desire,' 'Humility,' 'Knowledge,' 'Perspective' and 'Integrity.' 'The sixth movement fuses all five compositions into one simultaneous performance.' Exclaim! reported the same simultaneity. WBUR instead described the five as 'threaded together,' with 'the same melody' appearing in each song 'presented in a different way.' The sources disagree on how literally the layering should be heard.", source: 2 },
        { title: "Five styles to reconcile", text: "The source movements differ in idiom. One reviewer heard 'Desire' as a lush CTI-style groove, 'Humility' as a 'bop based workout,' 'Perspective' as 'pop soul jazz,' and 'Integrity' as 'a nice trip to Rio.' Making them sound together means reconciling melodies written in different grooves as well as different lines.", source: 4 },
        { title: "Orchestration as the reconciler", text: "'Truth' runs 13:30 of the EP's 31:56, while the other movements run 2:46–4:37. The extra players are added for this track only: a nine-voice choir, an eight-piece string section, flute, vibraphone, guitar, Terrace Martin on alto and Thundercat on electric bass. In 'Truth' the arrangement does the composing.", source: 3 },
        { title: "Architecture of accumulation", text: "The track 'builds, layer upon layer, keyboards, then guitar, then vibraphone, brass and finally, a wordless vocal choir.' At the crescendo Washington takes a groove-based tenor solo, and then 'the choir and orchestra' return 'to triumphantly restate the theme.' The improvised solo is framed by composed accumulation and restatement.", source: 4 }
      ],
      throughlines: ["written", "call"],
      throughlineNotes: {
        "written": "Composition reasserts itself at the largest scale. Through-composed layering and orchestration frame a single improvised solo.",
        "call": "Choir and orchestra answer the band in the old ensemble-and-response manner, scaled up to a spiritual-jazz anthem."
      },
      demo: null,
      listen: "Kamasi Washington Truth Harmony of Difference",
      sources: [
        { cite: "Andrew O'Brien, 'Kamasi Washington Talks Tussling With Truth…' (interview), Live for Live Music, 20 Nov. 2017", url: "https://liveforlivemusic.com/features/interview-kamasi-washington/" },
        { cite: "Gabriela Tully Claymore, 'Kamasi Washington Announces Harmony of Difference EP,' Stereogum, 31 July 2017 (quoting the press release)", url: "https://stereogum.com/1954909/kamasi-washington-announces-harmony-of-difference-ep/news" },
        { cite: "C. von Hassett, 'Lovely New Work From Kamasi Washington: Truth,' Riot Material, 17 Apr. 2017 (quoting the Whitney press release); cf. Sarah Murphy, Exclaim!, 12 Apr. 2017, and Jacquinn Sinclair, WBUR, 17 Nov. 2017", url: "https://www.riotmaterial.com/new-work-from-kamasi-washington-truth/" },
        { cite: "'Harmony of Difference,' Wikipedia (track timings and personnel)", url: "https://en.wikipedia.org/wiki/Harmony_of_Difference" },
        { cite: "Curtis Davenport, 'Album Review: Harmony of Difference – Kamasi Washington,' CurtJazz, 21 Oct. 2017", url: "https://curtjazz.com/2017/10/21/album-review-harmony-of-difference-kamasi-washington/" },
        { cite: "Jacquinn Sinclair, 'Kamasi Washington…,' WBUR, 17 Nov. 2017 (Whitney Biennial premiere; 'threaded together')", url: "https://www.wbur.org/news/2017/11/17/kamasi-washington-royale" }
      ]
    },
    {
      id: "bleak-midwinter-collier",
      era: "today",
      title: "In the Bleak Midwinter",
      composer: "Harold Darke (setting of Christina Rossetti), arr. Jacob Collier",
      performer: "Jacob Collier",
      artistIds: ["jacob-collier"],
      year: 2016,
      recording: "Multitrack video, Jacob Collier YouTube channel, 14 Dec. 2016",
      key: "E major by verse 3, then 'G half-sharp' major (≈ +350¢ above E)",
      meter: "4/4 (initial time signature, per the Rossetti-in-Music catalogue)",
      tempo: null,
      form: {
        summary: "Strophic carol (Darke's setting), reharmonized for about ten self-sung parts, with a microtonal modulating bridge before the fourth verse",
        sections: [
          { label: "Verses 1–3", bars: 0, note: "dense a cappella reharmonization; verse 3 in E" },
          { label: "Bridge", bars: 0, note: "the four 'magical chords' (Hein links it at about 4:05)" },
          { label: "Verse 4", bars: 0, note: "in 'G half-sharp', a quarter tone off the piano" }
        ]
      },
      progression: null,
      findings: [
        { title: "A carol as a vehicle", text: "Collier's source is Harold Darke's choral setting, not Holst's hymn tune. He rebuilt it as a 'ten-part, mostly a cappella' arrangement and sang every part himself. The Rossetti-in-Music project calls the change of tuning system a 'radical modification' of Darke's setting. The borrowed song is kept recognizable, and all the invention goes into harmony and tuning.", source: 1 },
        { title: "From E to 'G half-sharp'", text: "Ethan Hein identifies the arrangement's central event as a modulation 'between the third and fourth verses' from the key of E 'to the key of G half-sharp,' meaning 'the key which is halfway between G and G-sharp.' The final verse is sung in a tonic that lies a quarter tone (50 cents) from every key on a piano.", source: 0 },
        { title: "Four 'magical chords'", text: "The pivot uses what Collier calls four 'magical chords.' Hein explains: 'Each of the four magical chords is overall a little bit sharper than the one before, but it still sounds in tune because it also shares a tone exactly in common with the previous chord.' The device exploits the gap between equal-tempered intervals and pure, harmonic-series intervals. Each step is tuned justly to the last, so the whole system drifts upward.", source: 0 },
        { title: "The arithmetic of the drift", text: "E to G is 300 cents in equal temperament, and the extra half-sharp adds 50, so the tonic rises about 350 cents overall (this figure is computed from the key names Hein gives). Common-tone retuning can creep sharp by small amounts, such as the 21.5-cent syntonic comma, which is how a cappella voices can arrive somewhere a fixed keyboard cannot. Published sources do not give the per-chord cent values.", source: 0 },
        { title: "'My first foray into the microtonal realm'", text: "Collier himself later described the arrangement as 'My first foray into the microtonal realm.' Madeleine Hughes's 2020 honours thesis treats it as the first of three case studies, with 'Moon River' (2019) and 'All I Need' (2020), in 'contextual tuning' used as a compositional technique rather than as a performance nuance.", source: 2 }
      ],
      throughlines: ["song", "written"],
      throughlineNotes: {
        "song": "A Victorian carol is treated like a standard, a familiar melody that exists to be reharmonized, extending the reharmonization habit back past Tin Pan Alley.",
        "written": "This is fully arranged and multitracked with no improvisation. Composing happens in the studio, voice by voice."
      },
      demo: {
        label: "Endpoints only: E major → tempered G major → G 'half-sharp' (+50¢)",
        bpm: 60,
        beats: 14,
        events: [
          { t: 0, d: 4, notes: ["E3", "G#3", "B3", "E4"], v: 0.7 },
          { t: 4.5, d: 3.5, notes: ["G3", "B3", "D4", "G4"], v: 0.55 },
          { t: 8.5, d: 5, notes: ["G3", "B3", "D4", "G4"], v: 0.7, cents: 50 }
        ]
      },
      listen: "Jacob Collier In the Bleak Midwinter",
      sources: [
        { cite: "Ethan Hein, 'Jacob Collier's four magical chords,' Ethan teaches you music (Substack), 17 July 2019", url: "https://ethanhein.substack.com/p/jacob-colliers-four-magical-chords" },
        { cite: "Emily McConkey, 'In Recent Years,' Christina Rossetti in Music exhibit, University of Ottawa (with catalogue record 2530: Darke setting, a cappella, 4/4, YouTube 14 Dec. 2016)", url: "https://omeka.uottawa.ca/christinarossettiinmusic/exhibits/show/inthebleakmidwinter-popculture/in-recent-years" },
        { cite: "Madeleine Hughes, 'Contextual tuning as a compositional technique: Investigating the paradigms of Jacob Collier's music' (BMus Hons thesis, Edith Cowan University/WAAPA, 2020); Collier's 'first foray' post quoted in 'Selected Settings for Christmas 2020,' Christina Rossetti in Music", url: "https://ro.ecu.edu.au/theses_hons/1562" },
        { cite: "Christina Rossetti in Music, catalogue record: 'In the Bleak Midwinter' [Darke, arr. Collier], 2016", url: "https://omeka.uottawa.ca/christinarossettiinmusic/items/show/2530" }
      ]
    },
    {
      id: "in-the-moment-mccraven",
      era: "today",
      title: "In the Moment",
      composer: "Makaya McCraven (edited from collective improvisations)",
      performer: "Makaya McCraven with Junius Paul, Matt Ulery, Marquis Hill, Jeff Parker, De'Sean Jones, Tony Barba, Justefan, Joshua Abrams",
      artistIds: ["makaya-mccraven", "jeff-parker"],
      year: 2015,
      recording: "In the Moment, International Anthem, 2015 (live sources: weekly series at The Bedford, Chicago, from 2013)",
      key: null,
      meter: null,
      tempo: null,
      form: {
        summary: "Composition by post-production: about 48 hours from 28 shows, edited into 19 tracks",
        sections: [
          { label: "Capture", bars: 0, note: "improvised sets (two 45-minute sets per show), recorded in full" },
          { label: "Mixdown", bars: 0, note: "engineer Dave Vettraino's stereo bounce of each session" },
          { label: "Cut & loop", bars: 0, note: "chopped, colour-coded and rearranged in Ableton Live" },
          { label: "Overdub", bars: 0, note: "added parts at McCraven's home studio" }
        ]
      },
      progression: null,
      findings: [
        { title: "A year of improvisation as raw material", text: "The album was 'pared from nearly 48 hours of live improvised performance' over '12 months and 28 shows' at one venue. The venue was The Bedford, a Chicago restaurant whose lounge sat in the basement of a converted 1920s bank, where a weekly improvised series began in early 2013. The sessions were taped with 'a simple stereo pair' that was later supplemented, so the source is a room recording of a working band.", source: 0 },
        { title: "Editing as composing", text: "McCraven 'cut and looped' the stereo mixdowns into new compositions. Sometimes he used 'transparent editing to make an improvisation more seamless,' and sometimes he made a 'more choppy sounding beat,' then added overdubs at home. In Ableton he says he chops 'freehand' in Arrangement View, colour-codes and rearranges, or builds clips to view the music 'cyclically as loops which can go on forever.'", source: 1 },
        { title: "Playing for the edit", text: "The source sets were 'Spontaneous Composition' nights: 'We were playing free but I like to try and bring in different grooves.' McCraven adds that looseness 'makes it more interesting for the sampling than if we're super tight.' The improvisers' choices are shaped in advance by the knowledge that they will be sampled later.", source: 1 },
        { title: "Grooves, figures and looped applause", text: "Matthew Grigg heard tracks that are 'either primarily groove oriented or based around repeated melodic figures.' He noted that 'First Thing First' is the only unedited track. Elsewhere, post-production reinforces sections with overdubs and loops phrases, and even crowd exclamations become 'another texture or looped rhythmic element.' He compared the results to Madlib's Blue Note remixes and A Tribe Called Quest's beats.", source: 2 },
        { title: "After-the-fact composition", text: "McCraven describes capturing 'something that's intimate and more imperfect,' then refiguring it 'in the dream state of production and editing.' The produced recordings 'become solidified into compositions of their own.' He calls In the Moment and Universal Beings 'much more collective, spontaneous composition.' His later In These Times (2022) moved toward written odd-meter polyrhythm in 7/8, 5/8 and 11/8.", source: 3 }
      ],
      throughlines: ["written", "call", "rhythm"],
      throughlineNotes: {
        "written": "The relation is reversed. Improvisation comes first and the 'written' composition is made afterwards with a razor blade, or in this case a DAW.",
        "call": "The loop is the riff's newest form: a phrase, or even a shout from the crowd, repeated until it becomes structure.",
        "rhythm": "Hip-hop's sampled-break aesthetic is applied to live jazz drumming, so the groove is both played and constructed."
      },
      demo: null,
      listen: "Makaya McCraven In the Moment International Anthem",
      sources: [
        { cite: "International Anthem, In the Moment (IA11 Edition) product page and liner notes by Dave Vettraino", url: "https://www.intlanthem.com/makaya-mccraven-in-the-moment-ia11-edition" },
        { cite: "Emma Warren, 'Makaya McCraven: The Beat Scientist,' Ableton blog, 8 Sept. 2020", url: "https://www.ableton.com/en/blog/makaya-mccraven-beat-scientist/" },
        { cite: "Matthew Grigg, review of Makaya McCraven, In the Moment, The Free Jazz Collective, 13 Apr. 2015", url: "https://www.freejazzblog.org/2015/04/makaya-mccraven-in-moment-international.html" },
        { cite: "Ammar Kalia, 'Makaya McCraven and the philosophy of improvisation,' The Line of Best Fit, 24 Nov. 2025; and Jeff Terich, Grammy.com, 21 Sept. 2022 (In These Times, 7/8, 5/8, 11/8)", url: "https://www.thelineofbestfit.com/features/interviews/makaya-mccraven-philosophy-of-improvisation" },
        { cite: "Jeff Terich, 'Makaya McCraven… In These Times,' Grammy.com, 21 Sept. 2022", url: "https://grammy.com/news/makaya-mccraven-new-album-in-these-times-rhythmic-odyssey" }
      ]
    }
  ]
});
