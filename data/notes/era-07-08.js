/* Notes on Notes — eras 7–8: Fusion & New Directions (1969–1980), Neo-Tradition & Downtown (1980–1995). */
NOTES.add({
  eras: {
    "fusion": {
      overview: "Fusion moved the centre of composition from cycling chord changes to the groove. Tunes became vamps, pedal points and bass ostinatos: Davis turned Zawinul's 'In a Silent Way' into a melody over a single E pedal, and 'Chameleon' runs on two chords, B♭m7 and E♭7. Under them sat straight-eighth rock or sixteenth-note funk drumming, played on electric keyboards, synthesizers and electric bass. The studio became a compositional tool. Teo Macero's tape splices built a whole album side out of fragments and exact repeats, and overdubbing let bands stack interlocking riffs. By the late 1970s the balance swung back toward the written: Weather Report's 'Birdland' is a tightly composed chain of riff-themes in a one-off form, and Barry Kernfeld observes that in fusion improvisation 'has come into balance with, and has sometimes been overshadowed by, composition and arrangement'.",
      changes: [
        "Harmony slows to vamps and pedals: one or two chords, or a single bass note, replace the fast-moving changes of bebop and hard bop.",
        "The bass line becomes the hook. Ostinatos on electric bass or synthesizer carry a tune's identity.",
        "Swing gives way to straight-eighth rock and swung-sixteenth funk grooves, often layered with Latin and Brazilian percussion.",
        "Editing and overdubbing become ways of composing: a record can be assembled rather than simply performed.",
        "Forms become one-offs: multi-section suites, groove changes cued on the bandstand, and fade-outs in place of endings."
      ],
    },
    "neo": {
      overview: "After 1980 there was no single 'next style', only rival answers to the question of what a jazz composition is. Neo-traditionalists led by Wynton Marsalis brought back acoustic instruments, swing, the blues and the head–solos–head form, and presented jazz as an art music. Hip-hop's jazz rappers later borrowed that prestige. Downtown, John Zorn wrote rules instead of notes: 'Cobra' governs who may play and when, but never what. Steve Coleman's M-Base built pieces from fixed rhythmic cycles of different lengths, so that rhythm rather than harmony carried the form. Sampling turned the recording itself into raw material. Us3 looped a 1964 Blue Note record under programmed drums, rap and live horns, and the sampled composer received a writing credit.",
      changes: [
        "The composer becomes a rule-maker: game pieces fix cues and interactions and leave every pitch to the players.",
        "Rhythm becomes the main structure. Superimposed cycles of 5, 6 and 9 beats replace chord changes as the form a player has to hear.",
        "The record becomes a score: a looped recording supplies harmony, groove and quotation at once, and authorship stretches to the sampled artist.",
        "Genres and quotations become material, as in jump-cut sound blocks, Ivesian superimpositions of styles, and jazz 'codes' used inside hip-hop.",
        "A neo-traditional counter-current restores acoustic swing, the blues and song forms against fusion's electric vamps."
      ],
    }
  },

  pieces: [
    /* ------------------------------------------------------------------ FUSION */
    {
      id: "in-a-silent-way",
      era: "fusion",
      title: "In a Silent Way / It's About That Time",
      composer: "Joe Zawinul (In a Silent Way); Miles Davis (It's About That Time, credited)",
      performer: "Miles Davis (In a Silent Way, side 2); produced and edited by Teo Macero",
      artistIds: ["miles-davis", "joe-zawinul", "john-mclaughlin", "wayne-shorter", "herbie-hancock", "chick-corea", "tony-williams", "dave-holland"],
      year: 1969,
      recording: "Columbia CS 9875; recorded February 18, 1969, CBS 30th Street Studio, New York",
      key: "E pedal (In a Silent Way) → F tonic, blues-inflected (It's About That Time)",
      meter: "4/4 (rubato over the pedal, then a steady rock groove)",
      tempo: "Free over the pedal → medium groove",
      form: {
        summary: "An A–B–A side assembled on tape. The outer A sections are the same recorded take of Zawinul's tune, heard twice. The B section is 'It's About That Time': three grooves cued during the performance, cut together from several takes.",
        sections: [
          { label: "A: In a Silent Way", bars: 0, note: "0:00–4:10 · one complete take; guitar states Zawinul's melody over an E pedal" },
          { label: "Splice → groove 1", bars: 0, note: "4:10 · abrupt cut into F, entering partway through a Davis solo taken from later in the master" },
          { label: "Groove 2 / McLaughlin solo", bars: 0, note: "4:57 and 5:31 tape edits; guitar solo from 5:42; switch to groove 3 at 8:18" },
          { label: "Shorter solo", bars: 0, note: "9:09 edit (another take of groove 2); soprano solo 9:30–11:37" },
          { label: "Davis solo", bars: 0, note: "11:51–15:14 · grooves 1 and 3 alternate; 13:50–14:37 repeats tape heard earlier at 4:10" },
          { label: "A: In a Silent Way (repeat)", bars: 0, note: "15:38–19:52 · the opening take spliced in again" }
        ]
      },
      progression: null,
      findings: [
        { title: "Chords removed, pedal kept", text: "Zawinul brought the tune to the session with written chord changes. Davis told McLaughlin simply to play the melody and had Dave Holland hold an E pedal underneath, so the harmony is implied rather than played. Zawinul disliked losing the chords and recorded his own version with them in 1970 for his album 'Zawinul'.", source: 1 },
        { title: "A melody that hints at its harmony", text: "Over the E pedal the melody begins on G♯, the third of an E-major chord the band never plays. It makes a leap of a minor seventh and comes to rest on B, the fifth. Apart from that passing major third, the harmony stays open and ambiguous.", source: 1 },
        { title: "The splice as form", text: "Each side of the LP is a three-part arch, and its outer sections are identical copies of the same tape rather than two performances. On side 2 the complete 4:10 take returns at 15:38 after a cut from the last note of the groove. Wikipedia's account links Macero's assembly to sonata form: exposition, development, recapitulation.", source: 0 },
        { title: "Grooves cued on the bandstand", text: "'It's About That Time' consists of three grooves that repeat for no fixed length, apparently switched on Davis's cue. In groove 1 the bass rocks between the 6th and ♭7th degrees (D and E♭ in F) and never touches the root. The solos mix A♭ and A natural freely, a blues colour that is neither major nor minor.", source: 0 },
        { title: "A middle section built from takes", text: "The editing chart in Tingen's 'Miles Beyond' locates tape edits at 4:10, 4:57, 5:31, 9:09 and 15:38, plus a duplicated stretch at 13:50–14:37. The ordering of solos and grooves we hear was largely decided after the session.", source: 3 },
        { title: "Disputed authorship", text: "Zawinul said he wrote the bass line and the descending melody of 'It's About That Time' and was not credited. The case shows how riff-based composition blurred the line between writing a tune and setting up a groove.", source: 2 }
      ],
      throughlines: ["written", "rhythm", "blues"],
      throughlineNotes: {
        "written": "The editor's razor blade becomes a composer's tool: form, repetition and the order of solos are fixed after the music is played.",
        "rhythm": "A single pedal note and a straight rock groove replace the walking bass and swing ride cymbal.",
        "blues": "Over the F groove the soloists blur major and minor thirds, a blues inflection kept inside a modal vamp."
      },
      demo: {
        label: "E pedal (In a Silent Way) → splice → It's About That Time groove 1: bass rocking D–E♭ under a rootless F7♯9",
        bpm: 84,
        beats: 16,
        events: [
          { t: 0, d: 8, notes: ["E2", "E3"], v: 0.55 },
          { t: 2, d: 6, notes: ["B3"], v: 0.3 },
          { t: 8, d: 1, notes: ["D2"], v: 0.7 },
          { t: 8, d: 4, notes: ["A3", "Eb4", "Ab4"], v: 0.4 },
          { t: 9, d: 1, notes: ["Eb2"], v: 0.6 },
          { t: 10, d: 1, notes: ["D2"], v: 0.7 },
          { t: 11, d: 1, notes: ["Eb2"], v: 0.6 },
          { t: 12, d: 1, notes: ["D2"], v: 0.7 },
          { t: 12, d: 4, notes: ["A3", "Eb4", "Ab4"], v: 0.4 },
          { t: 13, d: 1, notes: ["Eb2"], v: 0.6 },
          { t: 14, d: 1, notes: ["D2"], v: 0.7 },
          { t: 15, d: 1, notes: ["Eb2"], v: 0.6 }
        ]
      },
      listen: "Miles Davis In a Silent Way It's About That Time",
      sources: [
        { cite: "Ethan Hein, \"Miles Davis – In a Silent Way\" (2021): side-by-side timeline of both sides, built from Paul Tingen's editing chart; with Wikipedia, \"In a Silent Way\" (track timings 4:11 / 11:27 / 4:14; sonata-form framing of Macero's editing)", url: "https://ethanhein.com/wp/2021/miles-davis-in-a-silent-way/" },
        { cite: "MIT OpenCourseWare, 21M.355 Musical Improvisation (Spring 2013), Lecture 7: \"In a Silent Way\" (lecture transcript)", url: "https://ocw.mit.edu/courses/21m-355-musical-improvisation-spring-2013/" },
        { cite: "Wikipedia, \"In a Silent Way\" (citing Davis & Troupe, Miles: The Autobiography, and Tingen, Miles Beyond)", url: "https://en.wikipedia.org/wiki/In_a_Silent_Way" },
        { cite: "Paul Tingen, Miles Beyond: The Electric Explorations of Miles Davis, 1967–1991 (Billboard Books, 2001): editing chart of In a Silent Way, as reported by Hein", url: "" },
        { cite: "Ethan Hein, \"In A Silent Way is a remix of itself\" (Substack)", url: "https://ethanhein.substack.com/p/in-a-silent-way" }
      ]
    },

    {
      id: "chameleon",
      era: "fusion",
      title: "Chameleon",
      composer: "Herbie Hancock, Paul Jackson, Harvey Mason, Bennie Maupin",
      performer: "Herbie Hancock (Head Hunters)",
      artistIds: ["herbie-hancock", "the-headhunters"],
      year: 1973,
      recording: "Head Hunters, Columbia KC 32731; recorded September 1973, Wally Heider Studios and Different Fur, San Francisco",
      key: "B♭ minor (B♭ Dorian; B♭ blues scale in keys and horns)",
      meter: "4/4 (swung sixteenths)",
      tempo: "≈ 90–98 bpm at the start, gradually accelerating",
      form: {
        summary: "An A–B–A' suite of grooves lasting about 15½ minutes. A long B♭m7–E♭7 vamp with the horn theme and ARP synthesizer solo gives way to a second, more open groove with a new bass line and a Fender Rhodes solo. The opening riff then returns at a faster tempo and fades out.",
        sections: [
          { label: "Intro: synth bass alone", bars: 4, note: "0:00 · unaccompanied synthesizer bass in nearly straight sixteenths" },
          { label: "A: B♭m7–E♭7 groove", bars: 0, note: "drums enter at bar 5 (≈0:12); clavinet, horn theme and ARP solo build up in layers, until ≈7:40" },
          { label: "B: new groove", bars: 0, note: "≈7:42 · new bass line, more open harmony; extended Fender Rhodes solo" },
          { label: "A': opening riff returns", bars: 0, note: "≈13:10–13:20 · back to the head at a faster tempo; sax solo, fade-out from ≈15:15" }
        ]
      },
      progression: { label: "A-section vamp (one bar each, repeated)", bars: ["B♭m7", "E♭7"] },
      findings: [
        { title: "Two chords, one scale", text: "The A section loops B♭m7 and E♭7, i–IV in B♭ Dorian. The two chords share the same seven pitches (the A♭-major collection), so E♭7 sounds as E♭ Mixolydian. Keyboard and horn lines draw on the B♭ blues scale over the top.", source: 1 },
        { title: "The bass line as the composition", text: "Reduced to its downbeats, the bass line is just the roots B♭ and E♭. Around them it plays partial arpeggios: root–♭7–root over B♭m7 and root–5–♭7 over E♭7. These are grouped in threes, tresillo-style, and linked by chromatic walk-ups through A♮ and D♮, notes outside the mode.", source: 1 },
        { title: "Layering and microtiming", text: "The synth bass plays four bars alone in almost straight sixteenths. When Harvey Mason's drums enter at bar 5, the bass begins to swing its sixteenths and locks to the kit. Hein's measurements show the amount of swing changes from bar to bar. Quantizing the groove to either straight or uniformly swung sixteenths loses the feel.", source: 2 },
        { title: "A suite of grooves", text: "At about 7:42 a new bass line steers the piece into more open, jazz-oriented territory for Hancock's Fender Rhodes solo. After a turnaround the band returns to the opening riff at a faster tempo. As in an extended funk jam, the track speeds up gradually throughout.", source: 3 },
        { title: "Composed by the band, still improvised", text: "Pond describes the head's 'funky foundation' as 'supplied by the signature synthesizer bass'. The other parts are layered on top, and 'Chameleon' is credited to four members of the band. Pond also answers critics who heard the platinum album as a betrayal of jazz: 'in fact the album is highly improvisational'.", source: 0 },
        { title: "Which synthesizer?", text: "Sources disagree about the instrument behind the bass line. Wikipedia names an ARP Odyssey, while Tingen's production history describes a Minimoog and credits the ARP Soloist for Hancock's first synthesizer solo. Either way, an analog synthesizer, not an electric bass, carries the tune's defining part.", source: 3 }
      ],
      throughlines: ["rhythm", "call", "blues"],
      throughlineNotes: {
        "rhythm": "Funk's swung-sixteenth groove, with a bass line grouped in tresillo threes, becomes the engine of the whole composition.",
        "call": "Instruments enter one at a time with interlocking riffs, the riff-band principle of Kansas City swing rebuilt on funk.",
        "blues": "Over the Dorian vamp, the B♭ blues scale shapes the horn theme and the solos."
      },
      demo: {
        label: "B♭m7 | E♭7 vamp with roots grouped 3+3+2 sixteenths (tresillo) — harmony/rhythm sketch, not the actual bass line",
        bpm: 96,
        beats: 16,
        events: [
          { t: 0, d: 0.5, notes: ["Bb2"], v: 0.8 },
          { t: 0, d: 4, notes: ["Db4", "F4", "Ab4"], v: 0.35 },
          { t: 0.75, d: 0.5, notes: ["Bb2"], v: 0.6 },
          { t: 1.5, d: 0.5, notes: ["Bb2"], v: 0.7 },
          { t: 4, d: 0.5, notes: ["Eb2"], v: 0.8 },
          { t: 4, d: 4, notes: ["G3", "Db4", "F4"], v: 0.35 },
          { t: 4.75, d: 0.5, notes: ["Eb2"], v: 0.6 },
          { t: 5.5, d: 0.5, notes: ["Eb2"], v: 0.7 },
          { t: 8, d: 0.5, notes: ["Bb2"], v: 0.8 },
          { t: 8, d: 4, notes: ["Db4", "F4", "Ab4"], v: 0.35 },
          { t: 8.75, d: 0.5, notes: ["Bb2"], v: 0.6 },
          { t: 9.5, d: 0.5, notes: ["Bb2"], v: 0.7 },
          { t: 12, d: 0.5, notes: ["Eb2"], v: 0.8 },
          { t: 12, d: 4, notes: ["G3", "Db4", "F4"], v: 0.35 },
          { t: 12.75, d: 0.5, notes: ["Eb2"], v: 0.6 },
          { t: 13.5, d: 0.5, notes: ["Eb2"], v: 0.7 }
        ]
      },
      listen: "Herbie Hancock Chameleon",
      sources: [
        { cite: "Steven F. Pond, Head Hunters: The Making of Jazz's First Platinum Album (University of Michigan Press, 2005); and \"In Conversation with Steven F. Pond,\" NewMusicBox (New Music USA)", url: "https://newmusicusa.org/?p=272674" },
        { cite: "Ethan Hein, \"Deconstructing the bassline in Herbie Hancock's 'Chameleon'\" (2017)", url: "https://ethanhein.com/wp/2017/deconstructing-the-bassline-in-herbie-hancocks-chameleon/" },
        { cite: "Ethan Hein, \"Dilla Time in 'Chameleon'\" (Substack)", url: "https://ethanhein.substack.com/p/dilla-time-in-chameleon" },
        { cite: "Paul Tingen, \"Songs That Changed Music: 'Chameleon' – Herbie Hancock,\" Produce Like A Pro (2024); instrument cross-checked against Wikipedia, \"Chameleon (composition)\"", url: "https://producelikeapro.com/blog/songs-that-changed-music-chameleon-herbie-hancock/" },
        { cite: "Jazz in America (Herbie Hancock Institute of Jazz), listening guide: \"Chameleon\" (key B♭ minor, tempo 98, form A–B)", url: "https://jazzinamerica.org/Media/Audio/22" }
      ]
    },

    {
      id: "birdland",
      era: "fusion",
      title: "Birdland",
      composer: "Joe Zawinul",
      performer: "Weather Report (Heavy Weather)",
      artistIds: ["weather-report", "joe-zawinul", "jaco-pastorius", "wayne-shorter"],
      year: 1977,
      recording: "Heavy Weather, Columbia (CD CK 34418); recorded 1976, North Hollywood, Calif.",
      key: "G major (see source note: published analyses differ)",
      meter: "4/4",
      tempo: "≈ 155 bpm",
      form: {
        summary: "Kernfeld's example of a one-off ('ad hoc') composed form: an introduction and eight distinct themes, labelled A–F with variants, then a shortened reprise. Only the final theme becomes a repeating chorus, which fades out (Kernfeld 1995, ex. 30a).",
        sections: [
          { label: "Introduction", bars: 12, note: "0:00 · synth bass riff, three 4-bar statements" },
          { label: "A", bars: 16, note: "0:18 · Pastorius's bass melody in harmonics over the riff" },
          { label: "B", bars: 8, note: "0:43" },
          { label: "C", bars: 24, note: "0:55" },
          { label: "C′", bars: 18, note: "1:31" },
          { label: "D", bars: 16, note: "1:59" },
          { label: "D′", bars: 8, note: "2:24" },
          { label: "E", bars: 20, note: "2:36 · drone on the tonic" },
          { label: "F", bars: 14, note: "3:07" },
          { label: "Transition", bars: 4, note: "3:29" },
          { label: "A", bars: 16, note: "3:35" },
          { label: "B", bars: 8, note: "3:59" },
          { label: "C", bars: 8, note: "4:11" },
          { label: "D", bars: 16, note: "4:24" },
          { label: "D′ (chorus + fade)", bars: 40, note: "4:48 · 40 bars + fade; repeated chorus under synth solo" }
        ]
      },
      progression: null,
      findings: [
        { title: "A one-off form for a hit", text: "Kernfeld uses 'Birdland' as his example of unconventional form in composed jazz. It runs through an introduction and eight themes (A, B, C, C′, D, D′, E, F) with irregular lengths of 8, 14, 18, 20 and 24 bars, then gives a shortened reprise. He ties this to a wider trend: from the mid-1970s fusion's interest in composition 'generated a number of sophisticated new ad hoc forms'.", source: 0 },
        { title: "Syncopation built into the bass", text: "Zawinul's synthesizer bass attacks each held note on the last eighth note of a bar and holds it through the next downbeat. After three statements a disco beat starts: continuous sixteenths on tambourine and alternating closed and open hi-hat eighths. Sixteen bars later a rim click on every beat is added, 'quarter notes, eighth notes, sixteenth notes—a beginner's music lesson'.", source: 0 },
        { title: "Electric timbre as orchestration", text: "Kernfeld points to the synthesizer's ability to 'roar in the true bass range' in the introduction. Against it, Pastorius's 'incisive twang' on electric bass is a foil to the rounder keyboard, tenor saxophone and vocal sounds (1:45, 1:59). He also notes that the 'mandocello' credited to Pastorius cannot be located on the track.", source: 0 },
        { title: "A bass melody in harmonics", text: "Burns's transcription shows the bass guitar entering on a sixteenth-note push after the third four-bar synth phrase, while the synth riff continues underneath. Pastorius then plays a syncopated, chromatic 16-bar melody in artificial ('false') harmonics, sounding an octave higher. After the melody, the bass answers the keyboard bass part.", source: 1 },
        { title: "Ending by fading out", text: "The last section is the only true chorus form, a progression repeated again and again from 4:48. Zawinul arranges it so that as the volume drops his synthesizer solo grows more intense, and the hand-claps speed up fourfold from a backbeat to continuous eighth notes. The piece 'disappears from actual sound'.", source: 0 },
        { title: "Written parts outweigh improvisation", text: "Kernfeld uses 'Birdland' to illustrate fusion's later balance, in which fixed parts and a polished studio sound often outweigh solo improvisation. He also notes that when the band later 'dressed up' the tune live with a swinging shuffle, it dragged. The composition depends on its straight disco pulse.", source: 0 }
      ],
      throughlines: ["written", "call", "rhythm"],
      throughlineNotes: {
        "written": "A fully composed sequence of themes in an irregular, one-off form, with improvisation largely kept to the closing vamp.",
        "call": "Each theme is a short riff-hook stated and answered by different timbres: synth, bass harmonics, saxophone, voices.",
        "rhythm": "A bass that pushes every bar onto the last eighth, over a layered disco pulse."
      },
      demo: {
        label: "Bass attack on the last eighth of each bar, tied over the barline (one pitch, G) against a steady quarter-note click",
        bpm: 155,
        beats: 16,
        events: [
          { t: 0, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 1, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 2, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 3, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 3.5, d: 1.5, notes: ["G2"], v: 0.85 },
          { t: 4, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 5, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 6, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 7, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 7.5, d: 1.5, notes: ["G2"], v: 0.85 },
          { t: 8, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 9, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 10, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 11, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 11.5, d: 1.5, notes: ["G2"], v: 0.85 },
          { t: 12, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 13, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 14, d: 0.1, notes: ["D6"], v: 0.25 }, { t: 15, d: 0.1, notes: ["D6"], v: 0.25 },
          { t: 15.5, d: 0.5, notes: ["G2"], v: 0.85 }
        ]
      },
      listen: "Weather Report Birdland",
      sources: [
        { cite: "Barry Kernfeld, What to Listen For in Jazz (Yale University Press, 1995), pp. 19, 29, 44, 69–71 (ex. 30a, form of Birdland), 175–76, 196–97", url: "" },
        { cite: "Rob Burns, \"Deep Thinking: Weather Report's Birdland,\" NZ Musician (bass lesson/transcription)", url: "https://nzmusician.co.nz/lessons/deep-thinking-weather-reports-birdland/" },
        { cite: "Wikipedia, \"Birdland (Weather Report song)\" (personnel: ARP 2600 and Oberheim polyphonic synthesizers; Pastorius on fretless bass and mandocello)", url: "https://en.wikipedia.org/wiki/Birdland_(Weather_Report_song)" },
        { cite: "Key check: Musicnotes official piano arrangement, 'Original Published Key: G Major'; Burns (above) places the drone section on G; Kernfeld's theme E is a tonic drone", url: "https://api.musicnotes.com/sheetmusic/weather-report/birdland/MN0108444" }
      ]
    },

    /* ------------------------------------------------------------------ NEO */
    {
      id: "cobra",
      era: "neo",
      title: "Cobra",
      composer: "John Zorn",
      performer: "John Zorn (prompter) with Downtown improvisers (Bill Frisell, Arto Lindsay, Elliott Sharp, Zeena Parkins, Christian Marclay, Bobby Previte, Wayne Horvitz, Guy Klucevsek and others)",
      artistIds: ["john-zorn", "bill-frisell"],
      year: 1984,
      recording: "Completed October 9, 1984; premiered late 1984 at Roulette, New York. First recording: Hat Hut 2-LP (1987), with studio versions recorded May 9, 1986, at Radio City Studios, NYC, and a live version recorded October 21, 1985, at Rensselaer Polytechnic Institute, Troy, NY",
      key: "None prescribed (all pitch material chosen by players)",
      meter: "None prescribed; time is divided by the prompter's 'downbeats'",
      tempo: "Variable (recorded versions are titled 'Allegro', 'Largo', etc. after the fact)",
      form: {
        summary: "A game piece with no fixed sequence of events. The 'score' is one page listing the possible cues. Each performance, or 'version', is a chain of sound blocks: players call cues with hand signals, the prompter shows a coloured card, and lowering the card starts the next block.",
        sections: [
          { label: "Players & prompter", bars: 0, note: "Open instrumentation; Zorn prefers 10–20 players. The prompter is a guide, not a conductor, and may refuse calls." },
          { label: "Operation 1: cue cards", bars: 0, note: "19 cues called by pointing to mouth, nose, eye, ear or head with 1–4 fingers. Yellow (personnel changes), white (duos, trades), orange (cartoon trades), blue (music change, volume)." },
          { label: "Head cues: Sound Memories 1–3", bars: 0, note: "Red cards 'record' the current texture so it can be recalled at a later downbeat." },
          { label: "Guerrilla systems", bars: 0, note: "A player in a headband may ignore the rules and 'capture' others. A three-player squad can start Operation 2: Divisi, Intercut, or Fencing (the 'Ivesian Trio'). A squad lasts seven downbeats." },
          { label: "Palm cues (endings)", bars: 0, note: "Sudden stop; 6–10-second coda; hold and fade. The prompter may veto up to twice." }
        ]
      },
      progression: null,
      findings: [
        { title: "A score of relationships, not sounds", text: "The one-page 'score' is closer to 'a key that lists all of the possible cues'. What actually happens during each cue is 'entirely up to the performers' (Brackett, p. 50). Zorn told Edward Strickland: 'I make no musical decisions. I set the situation up, I set the rules up' (p. 59).", source: 0 },
        { title: "The downbeat as the unit of form", text: "A player asks for a cue with a hand signal. The prompter accepts it by holding up a coloured card, and lowering the card counts as a 'downbeat' that switches the music (p. 50). The mouth cues on yellow cards change who is playing: Pool, Runner, Substitute, Substitute Crossfade (p. 51). The form is a succession of blocks rather than a cycle of choruses.", source: 0 },
        { title: "Trading fours turned into rules", text: "The nose and eye cues set up duos, 'Trades' passed along a chain of players, 'Buddies', and 'Cartoon Trades' of single sounds thrown from player to player by eye contact (pp. 51–52). The red Head cues store a texture as a 'Sound Memory' to bring back later (pp. 52–53). Brackett hears these returns as creating 'ritornello-like' forms on the Tokyo recording (p. 59).", source: 0 },
        { title: "Guerrillas and the Ivesian Trio", text: "Any player can put on a headband, become a guerrilla, ignore the downbeats and 'capture' other players. A three-player squad can take over as prompter (Divisi), cut in as an unaccompanied trio (Intercut), or play 'Fencing', the 'Ivesian Trio' (pp. 53–54). In Fencing the leader plays a recognisable genre while the other two superimpose a contrasting one.", source: 0 },
        { title: "Between free jazz and playing on changes", text: "Brackett places Cobra between free jazz, with almost no formal constraints, and improvising over chord changes, which is bound to a tune's form (p. 55). He calls it 'anarchic' freedom inside 'democratic' rules, with 'fascist' strains in the guerrillas' power and the prompter's right to refuse. Zorn calls it a 'psychodrama' (pp. 55–56).", source: 0 },
        { title: "Versions ordered after the fact", text: "On the Hat Hut LPs each track is a complete version, and Zorn sequenced them after the session (pp. 57–58). Quotation arrives as material chosen by the players: the opening of Beethoven's Fifth on tremolo guitar in 'Largo', and Christian Marclay's turntable Wagner in 'Moderato' (p. 58). Wikipedia names Stockhausen's 'Plus-Minus' as a model.", source: 1 }
      ],
      throughlines: ["written", "call", "song"],
      throughlineNotes: {
        "written": "The extreme case of the written/improvised split: the composer writes only the rules of interaction, and every sound is improvised.",
        "call": "Trading, duos and called cues, the bandstand's call-and-response habits, are turned into the actual mechanics of the piece.",
        "song": "Borrowed music (Beethoven, Wagner, easy listening) turns up as found objects dropped into the cue blocks."
      },
      demo: null,
      listen: "John Zorn Cobra 1987 Hat Hut",
      sources: [
        { cite: "John Brackett, \"Some Notes on John Zorn's Cobra,\" American Music 28, no. 1 (Spring 2010): 44–75 (pages cited in findings)", url: "https://muse.jhu.edu/journals/american_music/summary/v028/28.1.brackett.html" },
        { cite: "Brackett (above), pp. 57–58; with Wikipedia, \"Cobra (Zorn)\" (completion date October 9, 1984; Stockhausen's Plus-Minus as a model)", url: "https://en.wikipedia.org/wiki/Cobra_(Zorn)" }
      ]
    },

    {
      id: "cantaloop",
      era: "neo",
      title: "Cantaloop (Flip Fantasia)",
      composer: "Herbie Hancock, Geoff Wilkinson, Mel Simpson, Rahsaan Kelly",
      performer: "Us3 featuring Rahsaan (rap) and Gerard Presencer (trumpet)",
      artistIds: ["us3", "herbie-hancock", "art-blakey"],
      year: 1992,
      recording: "Blue Note single, UK, October 1992; on Hand On the Torch (Blue Note, 1993). Samples Hancock's 'Cantaloupe Island' (rec. June 17, 1964, Van Gelder Studio) and Pee Wee Marquette's introduction from A Night at Birdland, Vol. 1 (1954)",
      key: "F minor",
      meter: "4/4",
      tempo: "≈ 116 bpm (Hancock's 1964 original ≈ 115–117)",
      form: {
        summary: "Built in layers. The 'composition' is a loop of Hancock's 1964 vamp tune under a programmed hip-hop beat, framed by a sampled nightclub announcement. Raps by Rahsaan and live horn parts and solos by young British jazz players are overdubbed on top.",
        sections: [
          { label: "Intro: sampled MC", bars: 0, note: "Pee Wee Marquette's Birdland announcement (Art Blakey Quintet, 1954)" },
          { label: "Loop: Cantaloupe Island", bars: 16, note: "Hancock's 16-bar vamp form (4 + 4 + 4 + 4 bars) from the 1964 Blue Note master" },
          { label: "Rap verses", bars: 0, note: "Rahsaan over the looped groove" },
          { label: "Horn hooks & trumpet solo", bars: 0, note: "live horns overdubbed; trumpet solo by Gerard Presencer" }
        ]
      },
      progression: {
        label: "Cantaloupe Island (Hancock, 1964), the 16-bar vamp form that Us3 sampled",
        bars: ["Fm7", "Fm7", "Fm7", "Fm7", "D♭7", "D♭7", "D♭7", "D♭7", "Dm7", "Dm7", "Dm7", "Dm7", "Fm7", "Fm7", "Fm7", "Fm7"]
      },
      findings: [
        { title: "A vamp tune ready to loop", text: "Hancock's 1964 tune is already a modal vamp: a 16-bar form in four-bar blocks of F minor, D♭7, a rhythmic figure on Dm7, and F minor again. Pelletier-Bacquaert's analysis assigns F Dorian, D♭ Mixolydian (or Lydian dominant) and D Dorian to the three chords. Its static, riff-based harmony let a sampler turn a 1964 performance into an endless groove at almost the original tempo (about 115 bpm in 1964, about 116 for Us3).", source: 0 },
        { title: "Composing by curating an archive", text: "Blue Note threatened legal action over an uncleared Grant Green sample. Instead it gave Geoff Wilkinson access to its back catalogue, and Hand On the Torch drew its samples entirely from Blue Note records. Wilkinson summed up the method: 'By sampling classic jazz tracks, mixing them with beats and raps, and having younger jazz cats playing on top.'", source: 1 },
        { title: "Shared authorship", text: "The songwriting credit lists Hancock next to Wilkinson, Simpson and the rapper Rahsaan Kelly, so the sampled 1964 composer is a co-author of the 1992 track. The single reached No. 9 on the US Billboard Hot 100, and Billboard noted its 'live horns' on top of the sampled bed.", source: 2 },
        { title: "Jazz codes as prestige", text: "Justin Williams shows that around 1989–93 hip-hop artists used jazz 'codes' to set jazz rap apart as a high-art alternative to gangsta and pop rap. 'Cantaloop', a hit built entirely from Blue Note samples, belongs to the end of that period.", source: 3 },
        { title: "Sampling a room as well as a band", text: "The sampled Birdland announcement puts a live 1950s jazz-club setting at the front of a studio-built track. Reviewing Williams's book, Ethnomusicology Review highlights his argument that jazz-rap production suggests a particular listening space, 'such as a jazz club or a living-room hi-fi'.", source: 4 }
      ],
      throughlines: ["song", "call", "rhythm"],
      throughlineNotes: {
        "song": "The borrowed song in its most literal form: not a reharmonized standard but the original recording, looped and credited.",
        "call": "A short repeating vamp is answered by raps, horn hooks and a trumpet solo: the riff-and-response texture moved into the sampler.",
        "rhythm": "A programmed hip-hop beat replaces Tony Williams's 1964 drumming under Hancock's vamp."
      },
      demo: {
        label: "Cantaloupe Island changes (Fm7 – D♭7 – Dm7 – Fm7); each 4-bar block shortened to 2 bars",
        bpm: 116,
        beats: 32,
        events: [
          { t: 0, d: 2, notes: ["F2"], v: 0.75 }, { t: 0, d: 4, notes: ["Ab3", "C4", "Eb4"], v: 0.4 },
          { t: 2, d: 2, notes: ["C3"], v: 0.6 },
          { t: 4, d: 2, notes: ["F2"], v: 0.75 }, { t: 4, d: 4, notes: ["Ab3", "C4", "Eb4"], v: 0.4 },
          { t: 6, d: 2, notes: ["C3"], v: 0.6 },
          { t: 8, d: 2, notes: ["Db2"], v: 0.75 }, { t: 8, d: 4, notes: ["F3", "Ab3", "B3"], v: 0.4 },
          { t: 10, d: 2, notes: ["Ab2"], v: 0.6 },
          { t: 12, d: 2, notes: ["Db2"], v: 0.75 }, { t: 12, d: 4, notes: ["F3", "Ab3", "B3"], v: 0.4 },
          { t: 14, d: 2, notes: ["Ab2"], v: 0.6 },
          { t: 16, d: 2, notes: ["D2"], v: 0.75 }, { t: 16, d: 4, notes: ["F3", "A3", "C4"], v: 0.4 },
          { t: 18, d: 2, notes: ["A2"], v: 0.6 },
          { t: 20, d: 2, notes: ["D2"], v: 0.75 }, { t: 20, d: 4, notes: ["F3", "A3", "C4"], v: 0.4 },
          { t: 22, d: 2, notes: ["A2"], v: 0.6 },
          { t: 24, d: 2, notes: ["F2"], v: 0.75 }, { t: 24, d: 4, notes: ["Ab3", "C4", "Eb4"], v: 0.4 },
          { t: 26, d: 2, notes: ["C3"], v: 0.6 },
          { t: 28, d: 2, notes: ["F2"], v: 0.75 }, { t: 28, d: 4, notes: ["Ab3", "C4", "Eb4"], v: 0.4 },
          { t: 30, d: 2, notes: ["C3"], v: 0.6 }
        ]
      },
      listen: "Us3 Cantaloop (Flip Fantasia)",
      sources: [
        { cite: "Bruno Pelletier-Bacquaert, \"Cantaloupe Island – Herbie Hancock – Empyrean Isles – arpeggios – modes\" (brunojazz.com); 16-bar form and ≈115 bpm cross-checked with Todd Bishop's Tony Williams transcription (Cruise Ship Drummer!, 2023)", url: "https://www.brunojazz.com/vt-CantaloupeIsland.htm" },
        { cite: "\"'Hand On The Torch': How Us3 Took Blue Note Back To The Future,\" uDiscover Music (with Geoff Wilkinson interview)", url: "https://www.udiscovermusic.com/stories/us3-hand-on-the-torch-feature/" },
        { cite: "Wikipedia, \"Cantaloop (Flip Fantasia)\" (credits; samples; Larry Flick, Billboard, 13 Mar 1993, p. 118, on 'live horns')", url: "https://en.wikipedia.org/wiki/Cantaloop_(Flip_Fantasia)" },
        { cite: "Justin A. Williams, \"The Construction of Jazz Rap as High Art in Hip-Hop Music,\" Journal of Musicology 27, no. 4 (2010): 435–59; expanded as ch. 2 of Rhymin' and Stealin': Musical Borrowing in Hip-Hop (University of Michigan Press, 2013)", url: "https://research-information.bris.ac.uk/en/publications/the-construction-of-jazz-rap-as-high-art-in-hip-hop-music/" },
        { cite: "Review of Justin A. Williams, Rhymin' and Stealin', Ethnomusicology Review (UCLA)", url: "https://ethnomusicologyreview.ucla.edu/node/720" }
      ]
    },

    {
      id: "drop-kick",
      era: "neo",
      title: "Drop Kick",
      composer: "Steve Coleman",
      performer: "Steve Coleman and Five Elements",
      artistIds: ["steve-coleman"],
      year: 1992,
      recording: "Drop Kick, RCA Novus; recorded January 1992, Brooklyn, NY (Joe Marciano, engineer)",
      key: "Ambiguous: F♯-minor colour over a bass whose most accented note is F (E♯)",
      meter: "Six-beat bass/drum cycle inside a 30-beat form (5 × 6, or equally 6 × 5)",
      tempo: "Steady funk pulse (tempo not given in sources)",
      form: {
        summary: "A cyclic form built from rhythm rather than chord changes. Fixed parts of 6, 9, 5 and 5 beats enter one at a time and run against each other inside a 30-beat cycle. A 20-beat 'telescoping' rhythmic bridge is played twice on the record.",
        sections: [
          { label: "Bass & drums", bars: 0, note: "fixed six-beat group with most accents off the main beats; the drum part is 'exactly three-fourths' of a well-known James Brown beat" },
          { label: "Guitar", bars: 0, note: "fixed nine-beat line that accents the main pulse" },
          { label: "Piano", bars: 0, note: "fixed five-beat part" },
          { label: "Two saxophones (overdubbed)", bars: 0, note: "fixed five-beat background part" },
          { label: "Form cycle", bars: 0, note: "five six-beat measures (30 beats), two of which sometimes carry the main theme" },
          { label: "Rhythmic bridge", bars: 0, note: "20 beats: a fixed phrase separated by varying rests, grouped 4½ + 5 + 5½ + 5; heard twice" }
        ]
      },
      progression: null,
      findings: [
        { title: "Cycles of different lengths as the form", text: "Iyer's transcription shows four fixed layers: a six-beat bass-and-drum group, a nine-beat guitar line, a five-beat piano part and a five-beat part for two saxophones. Each enters gradually and stays roughly constant. The whole form is five six-beat measures, which can just as well be heard as six five-beat measures, 'reinforcing the emphasis on multiplicity of perspectives'.", source: 0 },
        { title: "Hearing the true pulse", text: "Most accents in the bass and drums fall off the main beats, so strongly that casual listeners place the pulse half a beat away from where it really is. Iyer notes that the drum part is 'exactly three-fourths' of a well-known James Brown beat, in which the pulse is never in doubt. Coleman's phrasing mostly confirms the real pulse, but at times he shifts the same accented G♯ by half a beat.", source: 0 },
        { title: "Two tonal centres at once", text: "The piece sounds like F♯ minor, yet the most accented bass note and the most frequent guitar note are F (E♯). Coleman's solo starts out in F♯ minor and gradually explores the clash. At one point he drops in a stock bebop phrase in F, a humorous Signifyin(g) nod to his roots.", source: 0 },
        { title: "A 'telescoping' bridge", text: "Twice the saxophones play a percussive phrase a major second apart, separated by rests of varying length and grouped 4½ + 5 + 5½ + 5 beats. The total is 20 beats, four times a five-beat phrase, and it may or may not break the 30-beat form. Iyer compares it to James Brown's practice of 'takin' it to the bridge'.", source: 0 },
        { title: "The composer's account", text: "Coleman says the rhythm imitates the movement of a martial-arts drop kick. Different sections, played by separate groups of instruments, each run on 'their own independent time base'. He describes the album as carrying his earlier rhythmic work into melody and voice leading, and names Ellington's pieces as models.", source: 1 },
        { title: "A stance, not a style", text: "M-Base, short for 'Macro-Basic Array of Structured Extemporizations', is in Iyer's words better understood as 'a stance … an approach to creativity' than as a style. Iyer compares Coleman's solo to a West African lead drum working against the fixed parts. In the collective, players learn every interlocking part so that they can improvise interactively within it.", source: 2 }
      ],
      throughlines: ["rhythm", "call", "written"],
      throughlineNotes: {
        "rhythm": "African-derived cross-rhythm and James Brown funk become the composition itself: superimposed 5-, 6- and 9-beat cycles.",
        "call": "The solo answers the fixed parts like a lead drummer, at times trading phrase for phrase with the saxophone backgrounds.",
        "written": "Fixed, composed rhythmic layers are the frame, and improvisation consists of moving between them."
      },
      demo: {
        label: "Cycle lengths only (not the actual parts): bass/drums every 6 beats, piano every 5, guitar every 9, across a 30-beat form",
        bpm: 110,
        beats: 30,
        events: [
          { t: 0, d: 1, notes: ["F2"], v: 0.85 }, { t: 6, d: 1, notes: ["F2"], v: 0.85 },
          { t: 12, d: 1, notes: ["F2"], v: 0.85 }, { t: 18, d: 1, notes: ["F2"], v: 0.85 },
          { t: 24, d: 1, notes: ["F2"], v: 0.85 },
          { t: 0, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 }, { t: 5, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 },
          { t: 10, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 }, { t: 15, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 },
          { t: 20, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 }, { t: 25, d: 0.75, notes: ["F#3", "A3", "C#4"], v: 0.45 },
          { t: 0, d: 0.5, notes: ["F4"], v: 0.5 }, { t: 9, d: 0.5, notes: ["F4"], v: 0.5 },
          { t: 18, d: 0.5, notes: ["F4"], v: 0.5 }, { t: 27, d: 0.5, notes: ["F4"], v: 0.5 }
        ]
      },
      listen: "Steve Coleman Five Elements Drop Kick",
      sources: [
        { cite: "Vijay Iyer, \"Steve Coleman, M-Base, and Musical Collectivism,\" Part 4: \"M-Base: Some musical elaborations\" (online essay, mid-1990s)", url: "https://cnmat.org/~vijay/mbase4.html" },
        { cite: "Steve Coleman, notes on Drop Kick (RCA Novus, 1992), m-base.com", url: "https://m-base.com/recordings/drop-kick/" },
        { cite: "Vijay Iyer, \"Steve Coleman, M-Base, and Musical Collectivism,\" Part 3: \"M-Base: Texts and contexts\"; with Part 4 on collective learning", url: "https://cnmat.org/~vijay/mbase3.html" }
      ]
    }
  ]
});
