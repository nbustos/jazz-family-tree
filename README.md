# Jazz Family Tree

An interactive family tree of jazz, from its African roots to the scenes of today.

The trunk climbs through ten eras, from Roots (1895) to Jazz Today. Each era sends out limbs for its styles and regional scenes, and every portrait on a limb is a musician or band. Below ground, the roots trace polyrhythm, call and response, the ring shout, spirituals and work songs through 1619 and 1865 to 1895. Faint green offshoots mark kindred genres such as gospel, R&B, soul, funk and hip-hop.

**Interaction**
- **Hover** — a fisheye lens magnifies the tree under the cursor. In vintage mode, portraits turn from sepia to colour as they enlarge.
- **Scroll or pinch** to zoom, **drag** to pan. Use the dots on the right to jump to an era.
- **Click** a portrait to open its panel: bio, essential recordings, who the musician learned from, and who they influenced. The panel also lists relationships named in jazz oral histories.
- **Click** a plaque for a style, era, root or kindred genre.
- **Search** with <kbd>/</kbd>. Highlight by instrument using the bar at the bottom.
- **Keyboard:** <kbd>L</kbd> lens · <kbd>[</kbd> <kbd>]</kbd> lens size · <kbd>R</kbd> whole tree · <kbd>Esc</kbd> close.
- **Deep links:** `#louis-armstrong` opens that musician directly.

**Conjoining Voices** (`voices.html`) is an interactive sonic analysis of 18 jazz instruments, played from real recordings. It has five parts:
- **The hearing spectrum:** a log-frequency map of every instrument's range against a piano keyboard and landmarks of human hearing. A live spectrum analyzer lights up the harmonics as you play.
- **The instruments:** how each instrument makes a note, with a harmonic fingerprint and envelope measured in the browser from the recordings, plus timbre, role, emotion and listening examples.
- **Conjoining voices:** a chord mixer with seven sourced voicings (Ellington's "Mood Indigo" trio, the So What chord, rootless voicings, Basie's rhythm section, sax soli, a big-band shout chord and a blue-third chord). Each voice can be muted.
- **Rhythm and melody:** a playable rhythm section on an original blues, with each part mutable and its frequency band shown.
- **Emotion and storytelling:** one original melody cast for six different voices, alongside the research on timbre and emotion.

Recordings (205 notes, 5.9 MB in `assets/sounds/`) come from the University of Iowa Musical Instrument Samples, VSCO 2 CE (CC0), Freesound (CC0 and CC BY, including MTG good-sounds) and VocalSet (CC BY 4.0). Per-file credits are in `data/voices/samples.js` and at the foot of the page.

**Deep Roots** (`roots.html`) traces the tree's roots in Africa. An interactive map leads into chapters on 11 regions, from Senegambia to the Horn and the Sahara. Each chapter covers history, musical analysis, instruments, the social role of music, and what crossed the Atlantic, with 67 credited photographs from Wikimedia Commons. Three further parts follow:
- **The Crossing:** the Middle Passage in numbers, using the Trans-Atlantic Slave Trade Database estimates; Louisiana; Congo Square; and the scholarly debate over how much African practice survived.
- **What crossed:** nine musical principles, with synthesized rhythm demos.
- **The loop back:** how African musicians and jazz musicians closed the circle.

On the tree, each African region is a root, and clicking one opens a link to its chapter.

**Labels & Locals** (`labels.html`) covers the business and the rooms of jazz: 63 record labels and 68 clubs, ballrooms, halls and lofts in 25 cities, from Victor's 1917 "jass" disc to today's musician-run labels. It has six parts and a coda:
- **The atlas:** a world map (Equal Earth projection) of every venue and label, with a year scrubber that shows what was open in a given year and what happened then.
- **Label lifelines:** a timeline of each label's working life with its landmark records, colored by ownership (major, independent, musician-run, state).
- **The labels:** a card per label with its story, sound, social meaning, people, landmark records and links to the tree. Labels from the 78 era also have public-domain records you can play through the site player.
- **The business of records:** essays on race records, the format (78 to streaming), producers and engineers, musician-owned labels, and labels outside the US.
- **Live at…:** a diagram linking venues to the labels that issued live recordings made there.
- **The locals:** city chapters with a timeline of each city's venues and a card per venue.
- **The rooms and the world:** essays on what a club does to music, vice, dance and the color line, and jazz abroad.
- **Coda, Today:** streaming, consolidation, the new independents and venues after the pandemic.

On the tree, an artist's panel links to the labels and venues that name them.

**Playlists** (`playlists.html`) has a listening list for each era of the tree, plus one for Deep Roots: 11 playlists and 142 tracks. Each playlist is shown in three columns: YouTube, Spotify and Apple Music. Apple Music links go straight to the track where Apple's public catalog search found a confident match. YouTube and Spotify links open a search on the service. Hovering a track shows its liner note, and each list can be copied as plain text for playlist-transfer tools.

**Notes on Notes** (`notes.html`) is a companion page on how jazz composition changed from era to era. It analyzes 30 pieces, three per era, from "Maple Leaf Rag" to Kamasi Washington's "Truth". Each analysis covers form, harmony, rhythm and the balance between written and improvised material, with footnoted sources. A five-line staff runs through the page, one line per throughline: the blues; call, response & riff; the borrowed song; rhythm & the Spanish tinge; and written vs. improvised. Short "hear it" sketches are synthesized in the browser and illustrate harmony or rhythm only.

**Music:** a player on both pages streams 20 recordings from 1917 to 1925, from the Original Dixieland Jass Band to Bessie Smith with Louis Armstrong. All are U.S. public domain (sound recordings made before 1926), hosted on Wikimedia Commons and the Internet Archive. It has play/pause (<kbd>Space</kbd>), previous/next, seeking and a playlist, and it remembers your place across pages. On the tree, the portraits of the musicians on the current record pulse.

The site is plain HTML, CSS and JavaScript drawn on a single canvas. It has no build step and no dependencies, so it runs on GitHub Pages or straight from the file system.

## Data

| File | Contents |
|---|---|
| `data/core.js` | Eras (trunk), branches (styles and scenes), roots and kindred genres |
| `data/artists/*.js` | Musicians and bands, one file per slice of history |
| `data/images.js` | Generated by `tools/fetch-images.js`: free-license portraits from Wikimedia Commons |
| `data/notes/*.js` | Notes on Notes: era overviews, 30 piece analyses, throughline essays |
| `data/roots/*.js` | Deep Roots: region chapters, the crossing, principles, loop back; `africa-map.js` is generated by `tools/build-africa-map.js` from Natural Earth (public domain) |
| `data/voices/*.js` | Conjoining Voices: instrument acoustics, ensemble voicings/groove/emotion, sample manifest |
| `data/labels/*.js` | Labels & Locals: labels, cities, venues and essays; `world-map.js` is generated by `tools/build-world-map.js` from Natural Earth, `by-artist.js` by `tools/build-labels-index.js` |
| `data/playlists.js` | Playlists: the era lists and liner notes; `playlists-apple.js` (Apple Music track links) is generated by `tools/resolve-apple.js` |
| `data/playlist.js` | Public-domain recordings for the player, with a provenance link for each |
| `data/linkedjazz.js` | Generated by `tools/linkedjazz.js`: oral-history relationships from Linked Jazz (CC0) |

Each artist record has dates, origin, instruments, primary branch and other styles, a short bio, three essential recordings, and documented influences. Influence links are limited to teachers, bandleaders the musician apprenticed under, and influences they acknowledged.

```sh
node tools/validate.js          # schema + cross-reference checks
node tools/fetch-images.js      # refresh portraits
node tools/linkedjazz.js        # refresh oral-history relationships
node tools/validate-labels.js   # Labels & Locals checks
node tools/build-labels-index.js  # artist → labels/venues index for the tree
node tools/resolve-apple.js     # Apple Music links for new playlist tracks (--all to redo)
```

To add a musician, append a record to the matching file in `data/artists/`, run the three commands above, and reload.

## Sources

- Library of Congress, [Jazz: A Research Guide](https://guides.loc.gov/jazz-research/beginning-your-research)
- Kernfeld (ed.), *The New Grove Dictionary of Jazz*
- Feather & Gitler, *The Biographical Encyclopedia of Jazz*
- Kubik, *Jazz Transatlantic*
- Gioia, *The History of Jazz*
- Tom Lord, [The Jazz Discography](https://www.lordisco.com/tjd/)
- [Linked Jazz](https://linkedjazz.org/), Semantic Lab at Pratt Institute (CC0, doi:10.5281/zenodo.3608406)
- Wikipedia, Britannica, AllMusic, NPR, Jazz at Lincoln Center and published obituaries, used to cross-check dates

Portraits come from Wikimedia Commons under their respective free licenses. Each musician's panel links to the image's file page for attribution.

Inspired by the poster *Highlights of the Jazz Story in USA* and by [The Jazz History Tree](https://jazzhistorytree.com).

Found an error? Corrections are welcome — please open an issue.
