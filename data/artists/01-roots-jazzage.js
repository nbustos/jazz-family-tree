/* Jazz Family Tree — Roots & Jazz Age: New Orleans roots, blues, ragtime,
   New Orleans jazz, Harlem stride, Chicago & Dixieland, early big bands. */
JAZZ.add({
  branches: {
    "nola-roots": {
      summary: "Around 1895–1910, New Orleans brass bands, dance orchestras and church music absorbed ragtime and the blues, and cornetists like Buddy Bolden began 'ragging' tunes with a looser, louder, improvised feel. Creole musicians trained in European technique and Black musicians from uptown playing by ear met in the same bands. That mix gave rise to collective improvisation and the swinging rhythm that became jazz.",
      keyAlbums: ["Buddy Bolden's Blues — Jelly Roll Morton (1939)", "Original Tuxedo Rag — Papa Celestin's Original Tuxedo Jazz Orchestra (1925)", "Panama — Bunk Johnson (1942)", "Stockyard Strut — Freddie Keppard's Jazz Cardinals (1926)"],
      places: ["Congo Square", "Storyville", "Funky Butt Hall (Union Sons Hall)", "Tuxedo Dance Hall", "Lincoln Park & Johnson Park, uptown New Orleans"]
    },
    "blues": {
      summary: "The blues grew out of African American work songs, field hollers and spirituals in the Deep South in the late 1800s, built on the 12-bar AAB form and 'blue' notes. W. C. Handy's published blues of 1912–1914 spread the form nationally. Mamie Smith's 'Crazy Blues' (1920) began the 'classic blues' recording boom, and singers like Ma Rainey and Bessie Smith gave jazz its vocal model and much of its harmonic and expressive vocabulary.",
      keyAlbums: ["Crazy Blues — Mamie Smith (1920)", "Downhearted Blues — Bessie Smith (1923)", "See See Rider Blues — Ma Rainey (1924)", "St. Louis Blues — Bessie Smith with Louis Armstrong (1925)", "Wild Women Don't Have the Blues — Ida Cox (1924)"],
      places: ["Beale Street, Memphis", "Theater Owners Booking Association (TOBA) circuit", "Paramount Records, Chicago & Grafton, Wisconsin", "OKeh studios, New York"]
    },
    "ragtime": {
      summary: "Ragtime was a syncopated piano style, written down and published, that took off after the 1893 Chicago World's Fair and peaked between about 1897 and 1917. Centered on Sedalia and St. Louis, Missouri, and later Tin Pan Alley in New York, it set a syncopated right-hand melody against a steady 'oom-pah' left hand in march-like forms. Scott Joplin's 'Maple Leaf Rag' (1899) made it a national craze, and it led directly to New Orleans jazz and Harlem stride.",
      keyAlbums: ["Maple Leaf Rag — Scott Joplin (1899)", "Harlem Rag — Tom Turpin (1897)", "The Entertainer — Scott Joplin (1902)", "Grace and Beauty — James Scott (1909)", "Castle House Rag — James Reese Europe's Society Orchestra (1914)"],
      places: ["Maple Leaf Club, Sedalia, Missouri", "Rosebud Café, St. Louis", "John Stark & Son, publishers", "Tin Pan Alley, New York", "Clef Club, Harlem"]
    },
    "new-orleans": {
      summary: "New Orleans jazz is built on collective improvisation: cornet carries the lead, clarinet weaves around it, and trombone plays underneath over a two-beat rhythm section. The 1917 Original Dixieland Jass Band records spread it worldwide, and the Great Migration brought its Black innovators to Chicago, where King Oliver's Creole Jazz Band, Jelly Roll Morton's Red Hot Peppers and Louis Armstrong's Hot Five made its landmark recordings. Armstrong's solos turned jazz into a soloist's art.",
      keyAlbums: ["Livery Stable Blues — Original Dixieland Jass Band (1917)", "Dippermouth Blues — King Oliver's Creole Jazz Band (1923)", "Black Bottom Stomp — Jelly Roll Morton's Red Hot Peppers (1926)", "Potato Head Blues — Louis Armstrong & His Hot Seven (1927)", "West End Blues — Louis Armstrong & His Hot Five (1928)"],
      places: ["Storyville", "Lincoln Gardens, Chicago", "Sunset Café, Chicago", "Reisenweber's Café, New York", "Mississippi riverboats (Streckfus line)"]
    },
    "stride": {
      summary: "Harlem stride grew out of East Coast ragtime in the 1910s. The pianist's left hand 'strides' between low bass notes and midrange chords while the right hand improvises fast, bluesy lines. James P. Johnson, Luckey Roberts and Willie 'the Lion' Smith competed in Harlem rent parties and cutting contests, Fats Waller brought the style to a mass audience, and Art Tatum pushed it to unmatched virtuosity. Stride shaped Duke Ellington, Count Basie and Thelonious Monk.",
      keyAlbums: ["Carolina Shout — James P. Johnson (1921)", "Handful of Keys — Fats Waller (1929)", "Tiger Rag — Art Tatum (1933)", "Echoes of Spring — Willie 'the Lion' Smith (1939)"],
      places: ["Harlem rent parties", "Leroy's, Harlem", "Lincoln Theatre, Harlem", "The Jungles Casino, San Juan Hill, New York"]
    },
    "chicago": {
      summary: "In the early 1920s, young white musicians in Chicago, such as the Austin High Gang, Bix Beiderbecke and Eddie Condon, learned jazz from the New Orleans Rhythm Kings and from King Oliver and Louis Armstrong on the South Side. Their 'Chicago style' was punchier and more solo-driven than New Orleans jazz, with the tenor saxophone added and a driving four-beat rhythm. Through Condon's bands and the 1940s 'Dixieland' revival, it became the core repertoire of traditional jazz.",
      keyAlbums: ["Riverboat Shuffle — The Wolverines (1924)", "Singin' the Blues — Frankie Trumbauer with Bix Beiderbecke (1927)", "China Boy — McKenzie & Condon's Chicagoans (1927)", "Weather Bird — Louis Armstrong & Earl Hines (1928)", "Relaxin' at the Touro — Muggsy Spanier's Ragtime Band (1939)"],
      places: ["Friars Inn, Chicago", "Austin High School, Chicago", "Grand Terrace Ballroom, Chicago", "Gennett Records, Richmond, Indiana", "Nick's and Eddie Condon's, Greenwich Village"]
    },
    "early-bigband": {
      summary: "In New York in the 1920s, dance orchestras grew to ten or more players organized into brass, reed and rhythm sections. Paul Whiteman's 'symphonic jazz' dominated the charts, but Fletcher Henderson's band at the Roseland Ballroom, with Don Redman's arrangements and solos by Louis Armstrong and Coleman Hawkins, set the hot model of riffs, call-and-response between sections and room for improvisers. Henderson's approach, along with Goldkette's and McKinney's bands, laid the foundation of the Swing Era.",
      keyAlbums: ["Rhapsody in Blue — Paul Whiteman Orchestra with George Gershwin (1924)", "Sugar Foot Stomp — Fletcher Henderson (1925)", "The Stampede — Fletcher Henderson (1926)", "Four or Five Times — McKinney's Cotton Pickers (1928)", "Feelin' the Spirit — Luis Russell (1929)"],
      places: ["Roseland Ballroom, New York", "Club Alabam, New York", "Graystone Ballroom, Detroit", "Aeolian Hall, New York", "Savoy Ballroom, Harlem"]
    }
  },

  artists: [
    // ───────────────────────── NEW ORLEANS ROOTS ─────────────────────────
    {
      id: "buddy-bolden", name: "Buddy Bolden", nickname: "King Bolden", type: "person",
      born: 1877, died: 1931, origin: "New Orleans, Louisiana, USA",
      instruments: ["cornet"], branch: "nola-roots", emerged: 1900, tier: 2,
      wiki: "Buddy_Bolden",
      bio: "Charles 'Buddy' Bolden led the loudest, most popular band in New Orleans from about 1900 to 1907, mixing ragtime, blues and hymns into the rough, improvised music that became jazz. Oliver, Keppard and Bunk Johnson were directly inspired by him. He made no surviving recordings. In 1907 he was committed to the state asylum at Jackson, where he died in 1931, and he became jazz's founding legend.",
      records: ["Buddy Bolden's Blues (Jelly Roll Morton tribute, 1939)", "Funky Butt (Bolden band theme, c. 1904, unrecorded)"],
      influences: []
    },
    {
      id: "freddie-keppard", name: "Freddie Keppard", type: "person",
      born: 1890, died: 1933, origin: "New Orleans, Louisiana, USA",
      instruments: ["cornet"], branch: "nola-roots", styles: ["new-orleans"], emerged: 1913, tier: 2,
      wiki: "Freddie_Keppard",
      bio: "Keppard succeeded Bolden as New Orleans's 'King' of the cornet. With Bill Johnson's Original Creole Orchestra he carried New Orleans music across the vaudeville circuit from 1913 to 1918. According to a well-known story, he turned down a 1915 Victor offer that might have made his band the first to record jazz. His few Chicago recordings from 1923 to 1927 hint at the power contemporaries described.",
      records: ["Stockyard Strut (1926)", "Salty Dog (1926)", "Here Comes the Hot Tamale Man (1926)"],
      influences: ["buddy-bolden"]
    },
    {
      id: "bunk-johnson", name: "Bunk Johnson", type: "person",
      born: 1889, died: 1949, origin: "New Orleans, Louisiana, USA",
      instruments: ["trumpet", "cornet"], branch: "nola-roots", styles: ["new-orleans"], emerged: 1905, tier: 2,
      wiki: "Bunk_Johnson",
      bio: "Willie 'Bunk' Johnson was a leading New Orleans trumpeter around 1905–15, then worked in rice mills after losing his teeth and horn in 1931. The authors of 'Jazzmen' found him, he was fitted with dentures and a new trumpet, and his 1942 recordings sparked the New Orleans revival. He claimed an 1879 birth and close ties to Bolden. Researchers favor 1889, and his stories remain debated.",
      records: ["Panama (1942)", "Down by the Riverside (1942)", "Weary Blues (1942)"],
      influences: ["buddy-bolden"]
    },
    {
      id: "lorenzo-tio-jr", name: "Lorenzo Tio Jr.", type: "person",
      born: 1893, died: 1933, origin: "New Orleans, Louisiana, USA",
      instruments: ["clarinet", "oboe"], branch: "nola-roots", styles: ["new-orleans"], emerged: 1913, tier: 3,
      wiki: "Lorenzo_Tio",
      bio: "Heir to a Creole clarinet dynasty, Tio passed on the Albert-system clarinet technique that defined the New Orleans reed sound. His students included Sidney Bechet, Johnny Dodds, Jimmie Noone, Barney Bigard, Albert Nicholas and Omer Simeon, and he taught Bigard the theme that became Ellington's 'Mood Indigo'. He played with Manuel Perez and with Armand Piron's orchestra from 1918 to 1928.",
      records: ["Bouncing Around (Piron's New Orleans Orchestra, 1923)", "Kiss Me Sweet (Piron's New Orleans Orchestra, 1923)"],
      influences: []
    },
    {
      id: "papa-jack-laine", name: "Papa Jack Laine", type: "person",
      born: 1873, died: 1966, origin: "New Orleans, Louisiana, USA",
      instruments: ["drums", "bandleader"], branch: "nola-roots", emerged: 1895, tier: 3,
      wiki: "Papa_Jack_Laine",
      bio: "Drummer and booking agent George 'Papa Jack' Laine ran the Reliance Brass Band and other ensembles from the 1890s to World War I, employing well over a hundred musicians of many backgrounds. Members of the Original Dixieland Jass Band and many early white jazz players got their start with him. He never recorded, but his interviews became key sources on jazz's beginnings, and in 1951 he was honored as the 'Father of White Jazz'.",
      records: [],
      influences: []
    },
    {
      id: "oscar-papa-celestin", name: "Oscar \"Papa\" Celestin", nickname: "Papa Celestin", type: "person",
      born: 1884, died: 1954, origin: "Napoleonville, Louisiana, USA",
      instruments: ["trumpet", "cornet", "vocals"], branch: "nola-roots", styles: ["new-orleans"], emerged: 1910, tier: 3,
      wiki: "Papa_Celestin",
      bio: "Around 1910 Celestin took over the house band at Storyville's Tuxedo Dance Hall. His Original Tuxedo Orchestra and Tuxedo Brass Band became New Orleans institutions, employing Joe Oliver, Louis Armstrong and many others, and recorded for OKeh and Columbia from 1925. The Depression forced him out of music, but after World War II he became the city's beloved trad-jazz ambassador. Some 4,000 people marched at his funeral.",
      records: ["Original Tuxedo Rag (1925)", "Careless Love (1925)", "Marie Laveau (1954)"],
      influences: []
    },

    // ───────────────────────── BLUES ─────────────────────────
    {
      id: "w-c-handy", name: "W. C. Handy", nickname: "Father of the Blues", type: "person",
      born: 1873, died: 1958, origin: "Florence, Alabama, USA",
      instruments: ["cornet", "trumpet", "composer"], branch: "blues", emerged: 1912, tier: 2,
      wiki: "W._C._Handy",
      bio: "A trained bandleader who heard a slide guitarist at a Tutwiler, Mississippi, train station in 1903, Handy turned Delta folk blues into published sheet music. 'The Memphis Blues' (1912), 'St. Louis Blues' (1914) and 'Beale Street Blues' carried the 12-bar form into dance halls and Tin Pan Alley nationwide. He did not invent the blues, but he made it a national music, and his own publishing house helped open the industry to Black songwriters.",
      records: ["The Memphis Blues (1912)", "St. Louis Blues (1914)", "Beale Street Blues (1917)"],
      influences: []
    },
    {
      id: "ma-rainey", name: "Ma Rainey", nickname: "Mother of the Blues", type: "person",
      born: 1886, died: 1939, origin: "Columbus, Georgia, USA",
      instruments: ["vocals"], branch: "blues", emerged: 1914, tier: 2,
      wiki: "Ma_Rainey",
      bio: "Gertrude 'Ma' Rainey sang blues in Southern tent and minstrel shows, including the Rabbit Foot Minstrels, years before anyone recorded the form. Her deep, moaning delivery linked rural blues to vaudeville. Between 1923 and 1928 she made more than 100 Paramount sides, some with a young Louis Armstrong, and openly sang about Black women's lives and queer desire. Bessie Smith toured in shows with her early on.",
      records: ["Bo-Weevil Blues (1923)", "See See Rider Blues (1924)", "Ma Rainey's Black Bottom (1927)"],
      influences: []
    },
    {
      id: "bessie-smith", name: "Bessie Smith", nickname: "Empress of the Blues", type: "person",
      born: 1892, died: 1937, origin: "Chattanooga, Tennessee, USA",
      instruments: ["vocals"], branch: "blues", styles: ["new-orleans"], emerged: 1923, tier: 1,
      wiki: "Bessie_Smith",
      bio: "The best-selling Black artist of the 1920s, Bessie Smith had a huge voice and exact phrasing that set the standard for jazz and blues singing. Her 1923 debut 'Downhearted Blues' was a huge hit, and her 1925 duets with Louis Armstrong are among jazz's great records. Billie Holiday, Mahalia Jackson and Janis Joplin all drew on her. She died after a car crash in Mississippi in 1937.",
      records: ["Downhearted Blues (1923)", "St. Louis Blues (1925)", "Nobody Knows You When You're Down and Out (1929)"],
      influences: ["ma-rainey"]
    },
    {
      id: "mamie-smith", name: "Mamie Smith", type: "person",
      born: 1891, died: 1946, origin: "Cincinnati, Ohio, USA",
      instruments: ["vocals"], branch: "blues", emerged: 1920, tier: 2,
      wiki: "Mamie_Smith",
      bio: "A vaudeville singer, Mamie Smith recorded 'Crazy Blues' for OKeh on August 10, 1920, at the urging of songwriter Perry Bradford. It was the first vocal blues record by a Black artist, and its huge sales showed record companies that Black audiences were a market, launching the 'race records' industry. Her Jazz Hounds band included the young Coleman Hawkins.",
      records: ["That Thing Called Love (1920)", "Crazy Blues (1920)", "It's Right Here for You (1920)"],
      influences: []
    },
    {
      id: "alberta-hunter", name: "Alberta Hunter", type: "person",
      born: 1895, died: 1984, origin: "Memphis, Tennessee, USA",
      instruments: ["vocals", "songwriter"], branch: "blues", emerged: 1921, tier: 3,
      wiki: "Alberta_Hunter",
      bio: "A star of Chicago's cabarets, Hunter co-wrote 'Downhearted Blues' with Lovie Austin, which became Bessie Smith's breakthrough. She recorded with Fletcher Henderson, Louis Armstrong and Sidney Bechet, and played opposite Paul Robeson in the 1928 London 'Show Boat'. After 20 years as a nurse, she returned at 82 at New York's Cookery in 1977, one of jazz's great late-life comebacks.",
      records: ["Downhearted Blues (1922)", "Miss Otis Regrets (1934)", "Amtrak Blues (1978)"],
      influences: []
    },
    {
      id: "ida-cox", name: "Ida Cox", nickname: "The Uncrowned Queen of the Blues", type: "person",
      born: 1896, died: 1967, origin: "Toccoa, Georgia, USA",
      instruments: ["vocals"], branch: "blues", emerged: 1923, tier: 3,
      wiki: "Ida_Cox",
      bio: "A tent-show veteran who idolized Ma Rainey, Cox recorded 78 titles for Paramount between 1923 and 1929, often with Lovie Austin's Blues Serenaders. Her 'Wild Women Don't Have the Blues' became an early anthem of female independence. She sang at John Hammond's 1939 'From Spirituals to Swing' concert and came out of retirement in 1961 to record with Coleman Hawkins. Her birth year is given as 1896 or 1888.",
      records: ["Graveyard Dream Blues (1923)", "Wild Women Don't Have the Blues (1924)", "Blues for Rampart Street (1961)"],
      influences: ["ma-rainey"]
    },
    {
      id: "clarence-williams", name: "Clarence Williams", type: "person",
      born: 1898, died: 1965, origin: "Plaquemine, Louisiana, USA",
      instruments: ["piano", "vocals", "composer"], branch: "blues", styles: ["new-orleans"], emerged: 1915, tier: 3,
      wiki: "Clarence_Williams_(musician)",
      bio: "Pianist, songwriter and businessman Clarence Williams co-founded a publishing firm with Armand Piron in New Orleans in 1915 and became the leading Black music publisher of the 1920s. As OKeh's race-records director in New York he accompanied Bessie Smith on her debut. His Blue Five sessions paired Sidney Bechet and Louis Armstrong. Sources give his birth year as 1898 or 1893.",
      records: ["Wild Cat Blues (1923)", "Everybody Loves My Baby (1924)", "Cake Walking Babies from Home (1925)"],
      influences: []
    },

    // ───────────────────────── RAGTIME ─────────────────────────
    {
      id: "scott-joplin", name: "Scott Joplin", nickname: "King of Ragtime", type: "person",
      born: 1868, died: 1917, origin: "Northeast Texas (Linden or Texarkana; disputed), USA",
      instruments: ["piano", "composer"], branch: "ragtime", emerged: 1899, tier: 1,
      wiki: "Scott_Joplin",
      bio: "Joplin's 'Maple Leaf Rag' (1899), published in Sedalia, Missouri, by John Stark, became ragtime's defining hit and model. He saw ragtime as serious art, composed more than 40 rags and the opera 'Treemonisha', and helped younger composers such as James Scott and Joseph Lamb. He died in obscurity in 1917. The 1973 film 'The Sting' revived his music, and he won a posthumous Pulitzer Prize in 1976.",
      records: ["Maple Leaf Rag (1899)", "The Entertainer (1902)", "Treemonisha (1911)"],
      influences: []
    },
    {
      id: "james-scott", name: "James Scott", type: "person",
      born: 1885, died: 1938, origin: "Neosho, Missouri, USA",
      instruments: ["piano", "organ", "composer"], branch: "ragtime", emerged: 1906, tier: 2,
      wiki: "James_Scott_(composer)",
      bio: "With Joplin and Joseph Lamb, Scott is one of the 'Big Three' of classic ragtime. He sought out his idol Joplin in St. Louis, who helped him get published by John Stark. His rags, including 'Frog Legs', 'Grace and Beauty' and 'Climax Rag', are known for their brilliant, pianistic writing, bold leaps and echo effects. He later taught and played theater organ in Kansas City.",
      records: ["Frog Legs Rag (1906)", "Grace and Beauty (1909)", "Climax Rag (1914)"],
      influences: ["scott-joplin"]
    },
    {
      id: "joseph-lamb", name: "Joseph Lamb", type: "person",
      born: 1887, died: 1960, origin: "Montclair, New Jersey, USA",
      instruments: ["piano", "composer"], branch: "ragtime", emerged: 1908, tier: 3,
      wiki: "Joseph_Lamb_(composer)",
      bio: "A self-taught Irish-American from New Jersey, Lamb was the only white member of classic ragtime's 'Big Three'. Joplin helped place his 'Sensation' with publisher John Stark in 1908. Rags like 'American Beauty' and 'Ragtime Nightingale' combine Joplin's structure with long, lyrical phrases. He worked in business for decades until historians found him in 1949, and a 1959 Folkways album captured his playing.",
      records: ["Sensation (1908)", "American Beauty Rag (1913)", "Ragtime Nightingale (1915)"],
      influences: ["scott-joplin"]
    },
    {
      id: "tom-turpin", name: "Tom Turpin", nickname: "Father of St. Louis Ragtime", type: "person",
      born: 1871, died: 1922, origin: "Savannah, Georgia, USA",
      instruments: ["piano", "composer"], branch: "ragtime", emerged: 1897, tier: 3,
      wiki: "Tom_Turpin",
      bio: "Turpin's 'Harlem Rag' (1897) was the first rag published by an African American. His Rosebud Café in St. Louis was the meeting place for ragtime pianists, including Scott Joplin. A saloon owner, deputy constable and power in Black St. Louis politics, he became known as the 'Father of St. Louis Ragtime'. His birth year appears as 1871 or 1873.",
      records: ["Harlem Rag (1897)", "Bowery Buck (1899)", "St. Louis Rag (1903)"],
      influences: []
    },
    {
      id: "james-reese-europe", name: "James Reese Europe", type: "person",
      born: 1880, died: 1919, origin: "Mobile, Alabama, USA",
      instruments: ["violin", "piano", "bandleader"], branch: "ragtime", styles: ["early-bigband"], emerged: 1912, tier: 2,
      wiki: "James_Reese_Europe",
      bio: "Europe founded the Clef Club, which organized Black musicians in New York, and led its huge orchestra at Carnegie Hall in 1912. As music director for dancers Vernon and Irene Castle, he made 1913–14 Victor records that are key 'hot ragtime' documents. His 369th 'Harlem Hellfighters' band brought proto-jazz to France in 1918. He was stabbed to death by a band member in 1919.",
      records: ["Down Home Rag (1913)", "Castle House Rag (1914)", "Memphis Blues (1919)"],
      influences: []
    },
    {
      id: "eubie-blake", name: "Eubie Blake", type: "person",
      born: 1887, died: 1983, origin: "Baltimore, Maryland, USA",
      instruments: ["piano", "composer"], branch: "ragtime", styles: ["stride"], emerged: 1915, tier: 2,
      wiki: "Eubie_Blake",
      bio: "Blake was a Baltimore ragtime pianist who partnered with lyricist Noble Sissle in James Reese Europe's circle. Their 'Shuffle Along' (1921), one of the first Broadway hits written and performed by African Americans, introduced 'I'm Just Wild About Harry'. He later wrote 'Memories of You'. He had a second career as a ragtime elder in the 1970s. He often claimed an 1883 birth, but records show 1887.",
      records: ["I'm Just Wild About Harry (1921)", "Memories of You (1930)", "The 86 Years of Eubie Blake (1969)"],
      influences: ["james-reese-europe"]
    },

    // ───────────────────────── NEW ORLEANS JAZZ ─────────────────────────
    {
      id: "original-dixieland-jass-band", name: "Original Dixieland Jass Band", type: "band",
      active: [1916, 1925], origin: "New Orleans, Louisiana, USA (formed in Chicago)",
      instruments: ["cornet", "clarinet", "trombone", "piano", "drums"], branch: "new-orleans", styles: ["chicago"], emerged: 1917, tier: 2,
      wiki: "Original_Dixieland_Jass_Band",
      bio: "Five white New Orleans musicians, mostly veterans of Papa Jack Laine's bands and led by cornetist Nick LaRocca, made the first jazz record issued, 'Livery Stable Blues', for Victor in February 1917. The record was a huge hit and set off a national jazz craze from Reisenweber's Café in New York. They also took jazz to London in 1919. Their boasts of inventing jazz ignored the Black musicians they learned from. They reunited in 1936–38.",
      records: ["Livery Stable Blues (1917)", "Dixie Jass Band One-Step (1917)", "Tiger Rag (1918)"],
      influences: ["papa-jack-laine"], members: []
    },
    {
      id: "king-oliver", name: "King Oliver", type: "person",
      born: 1881, died: 1938, origin: "Aben, Louisiana, USA",
      instruments: ["cornet"], branch: "new-orleans", emerged: 1918, tier: 1,
      wiki: "King_Oliver",
      bio: "Joe 'King' Oliver held the cornet crown in New Orleans after Keppard, then moved to Chicago in 1918. His Creole Jazz Band at Lincoln Gardens, with protégé Louis Armstrong on second cornet, made the 1923 recordings that define New Orleans ensemble jazz. His muted 'wah-wah' sound influenced generations. Gum disease ended his playing, and he died poor in Savannah in 1938. Some sources place his birth in 1884 or 1885.",
      records: ["Dippermouth Blues (1923)", "Snag It (1926)", "Sugar Foot Stomp (1926)"],
      influences: ["buddy-bolden"]
    },
    {
      id: "kid-ory", name: "Kid Ory", type: "person",
      born: 1886, died: 1973, origin: "LaPlace, Louisiana, USA",
      instruments: ["trombone", "bandleader"], branch: "new-orleans", emerged: 1922, tier: 2,
      wiki: "Kid_Ory",
      bio: "Edward 'Kid' Ory led one of New Orleans's top bands in the 1910s, employing Oliver and then Armstrong. His 'tailgate' trombone, with its rhythmic slides under the ensemble, set the style for the instrument. In Los Angeles in 1922 his band became the first Black New Orleans group to record. He was a pillar of the Hot Five, wrote 'Muskrat Ramble', and led a successful revival band in the 1940s and 1950s.",
      records: ["Ory's Creole Trombone (1922)", "Muskrat Ramble (1926)", "Savoy Blues (1927)"],
      influences: ["buddy-bolden"]
    },
    {
      id: "sidney-bechet", name: "Sidney Bechet", type: "person",
      born: 1897, died: 1959, origin: "New Orleans, Louisiana, USA",
      instruments: ["soprano saxophone", "clarinet"], branch: "new-orleans", styles: ["chicago"], emerged: 1919, tier: 1,
      wiki: "Sidney_Bechet",
      bio: "With Armstrong, Bechet was one of jazz's first great soloists. His wide vibrato and commanding soprano saxophone drew praise from conductor Ernest Ansermet in London in 1919. He recorded with Clarence Williams and Armstrong in 1923–25 and later influenced Johnny Hodges and John Coltrane. His 1939 'Summertime' helped spark the New Orleans revival. He settled in France, where 'Petite Fleur' made him a national star.",
      records: ["Wild Cat Blues (1923)", "Summertime (1939)", "Petite Fleur (1952)"],
      influences: ["lorenzo-tio-jr", "king-oliver", "bunk-johnson", "freddie-keppard"]
    },
    {
      id: "jelly-roll-morton", name: "Jelly Roll Morton", type: "person",
      born: 1890, died: 1941, origin: "New Orleans, Louisiana, USA",
      instruments: ["piano", "composer", "vocals"], branch: "new-orleans", styles: ["ragtime", "chicago"], emerged: 1923, tier: 1,
      wiki: "Jelly_Roll_Morton",
      bio: "Ferdinand 'Jelly Roll' Morton was jazz's first great composer-arranger. His 'Jelly Roll Blues' (1915) was among the first published jazz pieces, and his 1926–27 Red Hot Peppers records balance written structure with improvisation. Alan Lomax's 1938 Library of Congress interviews preserved his account of early jazz. He claimed an 1885 birth and to have invented jazz, but a baptismal record points to 1890.",
      records: ["King Porter Stomp (1923)", "Black Bottom Stomp (1926)", "Dead Man Blues (1926)"],
      influences: ["scott-joplin"]
    },
    {
      id: "creole-jazz-band", name: "King Oliver's Creole Jazz Band", type: "band",
      active: [1922, 1924], origin: "Chicago, Illinois, USA",
      instruments: ["cornet", "clarinet", "trombone", "piano", "banjo", "bass", "drums"], branch: "new-orleans", emerged: 1922, tier: 2,
      wiki: "King_Oliver's_Creole_Jazz_Band",
      bio: "At Chicago's Lincoln Gardens from 1922, Oliver's band brought New Orleans collective improvisation north at its peak. Its lineup was Oliver and Louis Armstrong on cornets, Johnny Dodds, Honoré Dutrey, Lil Hardin, Bill Johnson and Baby Dodds. Its 1923 recordings, including Armstrong's first recorded solo on 'Chimes Blues', are the classic record of the style. Young white Chicagoans listened outside. The band broke up in 1924.",
      records: ["Chimes Blues (1923)", "Canal Street Blues (1923)", "Dippermouth Blues (1923)"],
      influences: [], members: ["king-oliver", "louis-armstrong", "johnny-dodds", "baby-dodds", "lil-hardin-armstrong"]
    },
    {
      id: "johnny-dodds", name: "Johnny Dodds", type: "person",
      born: 1892, died: 1940, origin: "Waveland, Mississippi, USA",
      instruments: ["clarinet", "alto saxophone"], branch: "new-orleans", emerged: 1923, tier: 2,
      wiki: "Johnny_Dodds",
      bio: "Dodds studied with Lorenzo Tio Jr. and came up in Kid Ory's band. He played clarinet on the landmark 1920s records of King Oliver, Louis Armstrong's Hot Five and Seven, and Jelly Roll Morton. His dark, bluesy tone and confident lines over the ensemble made him a model of the New Orleans style. Benny Goodman said no one surpassed Dodds's tone.",
      records: ["Dippermouth Blues (1923)", "Perdido Street Blues (1926)", "Wild Man Blues (1927)"],
      influences: ["lorenzo-tio-jr", "kid-ory", "king-oliver"]
    },
    {
      id: "baby-dodds", name: "Baby Dodds", type: "person",
      born: 1898, died: 1959, origin: "New Orleans, Louisiana, USA",
      instruments: ["drums"], branch: "new-orleans", emerged: 1923, tier: 2,
      wiki: "Baby_Dodds",
      bio: "Warren 'Baby' Dodds, Johnny's younger brother, played with Armstrong in Fate Marable's riverboat bands and then on King Oliver's and Armstrong's classic Chicago records. He varied his patterns with press rolls, rim shots and accents behind each soloist, an approach later drummers built on. His 1946 'Talking and Drum Solos' was among the first recordings of solo jazz drumming.",
      records: ["Dippermouth Blues (1923)", "Wolverine Blues (1927)", "Talking and Drum Solos (1946)"],
      influences: ["king-oliver"]
    },
    {
      id: "louis-armstrong", name: "Louis Armstrong", nickname: "Satchmo", type: "person",
      born: 1901, died: 1971, origin: "New Orleans, Louisiana, USA",
      instruments: ["trumpet", "cornet", "vocals"], branch: "new-orleans", styles: ["chicago", "swing", "swing-vocal"], emerged: 1923, tier: 1,
      wiki: "Louis_Armstrong",
      bio: "Armstrong came up from New Orleans poverty under King Oliver and became the music's first great soloist. His 1925–28 Hot Five and Hot Seven records turned jazz from ensemble polyphony into a soloist's art built on swing, daring breaks and blues feeling. He also popularized scat singing, and his phrasing reshaped American popular singing. Over five decades he was jazz's global ambassador, from 'West End Blues' to 'Hello, Dolly!'.",
      records: ["West End Blues (1928)", "Potato Head Blues (1927)", "What a Wonderful World (1967)"],
      influences: ["king-oliver", "kid-ory"]
    },
    {
      id: "lil-hardin-armstrong", name: "Lil Hardin Armstrong", type: "person",
      born: 1898, died: 1971, origin: "Memphis, Tennessee, USA",
      instruments: ["piano", "composer", "vocals"], branch: "new-orleans", emerged: 1923, tier: 2,
      wiki: "Lil_Hardin_Armstrong",
      bio: "A conservatory-trained pianist, Lil Hardin anchored King Oliver's Creole Jazz Band, married Louis Armstrong in 1924, and pushed him to leave Oliver and lead his own band. She played piano and wrote for the Hot Five, composing 'Struttin' with Some Barbecue' and 'My Heart'. In the 1930s she led bands and recorded for Decca as a swing singer.",
      records: ["Dippermouth Blues (1923)", "My Heart (1925)", "Struttin' with Some Barbecue (1927)"],
      influences: ["king-oliver"]
    },
    {
      id: "hot-five", name: "Louis Armstrong and His Hot Five", type: "band",
      active: [1925, 1928], origin: "Chicago, Illinois, USA",
      instruments: ["cornet", "clarinet", "trombone", "piano", "banjo"], branch: "new-orleans", styles: ["chicago"], emerged: 1925, tier: 2,
      wiki: "Louis_Armstrong_and_His_Hot_Five",
      bio: "Armstrong's studio band for OKeh, with Kid Ory, Johnny Dodds, Lil Hardin and Johnny St. Cyr, and from 1927 the expanded Hot Seven, made the most influential small-group records of the 1920s. 'Heebie Jeebies' popularized scat. A 1928 edition with Earl Hines produced 'West End Blues', whose opening cadenza announced the solo era.",
      records: ["Heebie Jeebies (1926)", "Cornet Chop Suey (1926)", "Struttin' with Some Barbecue (1927)"],
      influences: [], members: ["louis-armstrong", "kid-ory", "johnny-dodds", "lil-hardin-armstrong", "earl-hines"]
    },
    {
      id: "red-hot-peppers", name: "Jelly Roll Morton's Red Hot Peppers", type: "band",
      active: [1926, 1930], origin: "Chicago, Illinois, USA",
      instruments: ["cornet", "clarinet", "trombone", "piano", "banjo", "bass", "drums"], branch: "new-orleans", emerged: 1926, tier: 2,
      wiki: "Red_Hot_Peppers",
      bio: "Morton's Victor recording band brought together top New Orleans players in Chicago, including George Mitchell, Kid Ory, Omer Simeon, Johnny St. Cyr and later the Dodds brothers. Unusually for the time, they rehearsed carefully. Their 1926–27 sides, among them 'Black Bottom Stomp', 'Dead Man Blues' and 'Doctor Jazz', balance composed structure with solos and breaks, and remain models of small-band jazz.",
      records: ["Black Bottom Stomp (1926)", "Doctor Jazz (1926)", "Kansas City Stomps (1928)"],
      influences: [], members: ["jelly-roll-morton", "kid-ory", "johnny-dodds", "baby-dodds"]
    },
    {
      id: "jimmie-noone", name: "Jimmie Noone", type: "person",
      born: 1895, died: 1944, origin: "Cut Off, Louisiana, USA",
      instruments: ["clarinet"], branch: "new-orleans", styles: ["chicago"], emerged: 1928, tier: 2,
      wiki: "Jimmie_Noone",
      bio: "Noone studied with Lorenzo Tio Jr. and the young Sidney Bechet before moving to Chicago in 1918. His Apex Club Orchestra recordings of 1928, with Earl Hines on piano and an unusual front line of clarinet and alto saxophone, show off his smooth tone and agile, legato lines. Benny Goodman, Artie Shaw and Irving Fazola all learned from him, and 'Sweet Lorraine' became his signature.",
      records: ["Apex Blues (1928)", "Sweet Lorraine (1928)", "I Know That You Know (1928)"],
      influences: ["lorenzo-tio-jr", "sidney-bechet"]
    },
    {
      id: "pops-foster", name: "Pops Foster", type: "person",
      born: 1892, died: 1969, origin: "McCall, Louisiana, USA",
      instruments: ["double bass", "tuba"], branch: "new-orleans", styles: ["early-bigband"], emerged: 1929, tier: 3,
      wiki: "Pops_Foster",
      bio: "George 'Pops' Foster played with Kid Ory, King Oliver, Armand Piron and the riverboat bands, and became a master of the slapped string bass at a time when most bands still used tuba. His strong, swinging beat drove Luis Russell's orchestra and Louis Armstrong's big band from 1929 to 1940. His 1971 autobiography is a valuable eyewitness account of early New Orleans jazz.",
      records: ["Mahogany Hall Stomp (1929)", "Jersey Lightning (1929)", "Saratoga Shout (1929)"],
      influences: []
    },
    {
      id: "new-orleans-rhythm-kings", name: "New Orleans Rhythm Kings", type: "band",
      active: [1921, 1925], origin: "Chicago, Illinois, USA",
      instruments: ["cornet", "clarinet", "trombone", "piano", "banjo", "drums"], branch: "new-orleans", styles: ["chicago"], emerged: 1922, tier: 2,
      wiki: "New_Orleans_Rhythm_Kings",
      bio: "Led by Paul Mares, with clarinetist Leon Roppolo and trombonist George Brunies, NORK played Chicago's Friars Inn from 1921 and recorded for Gennett from 1922. They played with a smoother, more relaxed feel than the ODJB, and Bix Beiderbecke and the Austin High Gang learned their style from these records. Their 1923 sessions with Jelly Roll Morton were an early interracial jazz recording.",
      records: ["Farewell Blues (1922)", "Tin Roof Blues (1923)", "Milenberg Joys (1923)"],
      influences: ["original-dixieland-jass-band", "king-oliver"], members: []
    },

    // ───────────────────────── HARLEM STRIDE ─────────────────────────
    {
      id: "luckey-roberts", name: "Luckey Roberts", type: "person",
      born: 1887, died: 1968, origin: "Philadelphia, Pennsylvania, USA",
      instruments: ["piano", "composer"], branch: "stride", styles: ["ragtime"], emerged: 1913, tier: 3,
      wiki: "Luckey_Roberts",
      bio: "A former child vaudevillian with enormous hands, Charles 'Luckey' Roberts was one of the leading Harlem pianists of the 1910s and helped turn ragtime into stride. His 'Junk Man Rag' and 'Pork and Beans' (1913) were showpieces of the new style. He later led society orchestras, wrote Broadway scores, and saw his melody 'Ripples of the Nile' become the 1941 hit 'Moonlight Cocktail'.",
      records: ["Junk Man Rag (1913)", "Pork and Beans (1913)", "Moonlight Cocktail (1941)"],
      influences: []
    },
    {
      id: "james-p-johnson", name: "James P. Johnson", type: "person",
      born: 1894, died: 1955, origin: "New Brunswick, New Jersey, USA",
      instruments: ["piano", "composer"], branch: "stride", styles: ["ragtime"], emerged: 1917, tier: 2,
      wiki: "James_P._Johnson",
      bio: "The 'Father of Stride' combined ragtime, blues and the classical technique he had studied into a powerful, orchestral piano style. 'Carolina Shout' was the test piece for every Harlem pianist. He taught Fats Waller and influenced Ellington, Basie, Tatum and Monk. He also wrote 'Charleston' (1923), the anthem of the decade, and composed symphonic works such as 'Yamekraw'.",
      records: ["Carolina Shout (1921)", "Charleston (1923)", "Snowy Morning Blues (1927)"],
      influences: []
    },
    {
      id: "willie-the-lion-smith", name: "Willie \"The Lion\" Smith", nickname: "The Lion", type: "person",
      born: 1893, died: 1973, origin: "Goshen, New York, USA",
      instruments: ["piano", "composer"], branch: "stride", emerged: 1920, tier: 2,
      wiki: "Willie_\"the_Lion\"_Smith",
      bio: "A decorated World War I artillery gunner, Smith said he earned 'the Lion' for his bravery. With his derby and cigar he was one of the three great Harlem stride pianists, and a fierce competitor in cutting contests. He played on Mamie Smith's 'Crazy Blues' session in 1920. His impressionistic pieces such as 'Echoes of Spring' showed stride's lyrical side, and Duke Ellington called him his greatest piano influence.",
      records: ["Echoes of Spring (1939)", "Finger Buster (1939)", "Morning Air (1939)"],
      influences: []
    },
    {
      id: "fats-waller", name: "Fats Waller", type: "person",
      born: 1904, died: 1943, origin: "New York City, New York, USA",
      instruments: ["piano", "organ", "vocals", "composer"], branch: "stride", styles: ["swing"], emerged: 1922, tier: 2,
      wiki: "Fats_Waller",
      bio: "James P. Johnson's star pupil, Thomas 'Fats' Waller combined a light, swinging stride with comic timing and a large output of songs, including 'Ain't Misbehavin'' and 'Honeysuckle Rose'. He was a pioneer of jazz on the pipe organ, and from 1934 his small group, Fats Waller and His Rhythm, sold enormously. He died of pneumonia on a train in 1943, at 39.",
      records: ["Handful of Keys (1929)", "Ain't Misbehavin' (1929)", "Jitterbug Waltz (1942)"],
      influences: ["james-p-johnson"]
    },
    {
      id: "art-tatum", name: "Art Tatum", type: "person",
      born: 1909, died: 1956, origin: "Toledo, Ohio, USA",
      instruments: ["piano"], branch: "stride", styles: ["swing"], emerged: 1933, tier: 1,
      wiki: "Art_Tatum",
      bio: "Nearly blind from childhood, Tatum started from stride and went far past it, with rapid runs and dense reharmonizations that redefined what jazz piano could do. His 1933 solo 'Tiger Rag' astonished other musicians. He named Fats Waller as his chief influence, and his harmonic daring shaped Coleman Hawkins, Bud Powell, Charlie Parker and Oscar Peterson. His 1950s Norman Granz solo sessions documented his style at length.",
      records: ["Tiger Rag (1933)", "Tea for Two (1933)", "Willow Weep for Me (1949)"],
      influences: ["fats-waller", "james-p-johnson"]
    },

    // ───────────────────────── CHICAGO & DIXIELAND ─────────────────────────
    {
      id: "bix-beiderbecke", name: "Bix Beiderbecke", type: "person",
      born: 1903, died: 1931, origin: "Davenport, Iowa, USA",
      instruments: ["cornet", "piano"], branch: "chicago", styles: ["early-bigband"], emerged: 1924, tier: 1,
      wiki: "Bix_Beiderbecke",
      bio: "Self-taught from Original Dixieland Jass Band records, Beiderbecke developed a bell-like tone and thoughtful, lyrical phrasing that offered an alternative to Armstrong's fire. He recorded with the Wolverines, Frankie Trumbauer, Jean Goldkette and Paul Whiteman. 'Singin' the Blues' is often cited as a forerunner of cool jazz, and his piano piece 'In a Mist' drew on Debussy. Alcoholism killed him at 28, and he became jazz's first romantic myth.",
      records: ["Riverboat Shuffle (1924)", "Singin' the Blues (1927)", "In a Mist (1927)"],
      influences: ["original-dixieland-jass-band", "new-orleans-rhythm-kings"]
    },
    {
      id: "frank-trumbauer", name: "Frankie Trumbauer", nickname: "Tram", type: "person",
      born: 1901, died: 1956, origin: "Carbondale, Illinois, USA",
      instruments: ["C-melody saxophone", "alto saxophone", "bassoon"], branch: "chicago", styles: ["early-bigband"], emerged: 1927, tier: 2,
      wiki: "Frankie_Trumbauer",
      bio: "Trumbauer was the leading voice of the now-rare C-melody saxophone, with a light, dry tone and carefully shaped, melodic solos. His 1927 OKeh sessions with Bix Beiderbecke, including 'Singin' the Blues', are among the decade's great records, and he played with Jean Goldkette and Paul Whiteman. Lester Young called Trumbauer 'my idol', and Trumbauer's sound fed into Young's cool tenor style.",
      records: ["Singin' the Blues (1927)", "For No Reason at All in C (1927)", "Trumbology (1927)"],
      influences: []
    },
    {
      id: "jimmy-mcpartland", name: "Jimmy McPartland", type: "person",
      born: 1907, died: 1991, origin: "Chicago, Illinois, USA",
      instruments: ["cornet"], branch: "chicago", emerged: 1924, tier: 3,
      wiki: "Jimmy_McPartland",
      bio: "A founder of the Austin High Gang, McPartland learned by copying New Orleans Rhythm Kings records and hearing Oliver and Armstrong at Lincoln Gardens. In 1924, at 17, he replaced Bix Beiderbecke in the Wolverines. His cornet on the 1927 McKenzie-Condon Chicagoans sessions helped define Chicago style. He carried that Bix-inspired sound through decades of Dixieland work, often with his wife, pianist Marian McPartland.",
      records: ["Sugar (1927)", "China Boy (1927)", "Nobody's Sweetheart (1927)"],
      influences: ["new-orleans-rhythm-kings", "bix-beiderbecke", "king-oliver"]
    },
    {
      id: "bud-freeman", name: "Bud Freeman", type: "person",
      born: 1906, died: 1991, origin: "Chicago, Illinois, USA",
      instruments: ["tenor saxophone", "clarinet"], branch: "chicago", styles: ["swing"], emerged: 1927, tier: 3,
      wiki: "Bud_Freeman",
      bio: "Another Austin High Gang founder, Freeman was the first important tenor saxophonist outside the Coleman Hawkins school. His lean, gliding lines, heard on 'The Eel', became a model for the instrument. He played with Tommy Dorsey and Benny Goodman, led the Summa Cum Laude Orchestra, and still toured as an elder statesman of Chicago jazz in the 1980s.",
      records: ["China Boy (1927)", "The Eel (1933)", "You Took Advantage of Me (1938)"],
      influences: ["new-orleans-rhythm-kings", "louis-armstrong"]
    },
    {
      id: "eddie-condon", name: "Eddie Condon", type: "person",
      born: 1905, died: 1973, origin: "Goodland, Indiana, USA",
      instruments: ["banjo", "guitar", "bandleader"], branch: "chicago", emerged: 1927, tier: 2,
      wiki: "Eddie_Condon",
      bio: "A rhythm banjo and guitar player, Condon mattered most as an organizer and promoter of Chicago-style jazz. He co-led the 1927 McKenzie-Condon Chicagoans sessions that launched the style on record, then ran Commodore Records jam sessions from 1938. His Town Hall broadcasts of 1944–45 and the Greenwich Village club he opened in 1945 made the music a lasting institution.",
      records: ["Liza (1927)", "That's a Serious Thing (1929)", "Jammin' at Commodore (1938)"],
      influences: ["new-orleans-rhythm-kings", "king-oliver"]
    },
    {
      id: "pee-wee-russell", name: "Pee Wee Russell", type: "person",
      born: 1906, died: 1969, origin: "Maplewood, Missouri, USA",
      instruments: ["clarinet"], branch: "chicago", emerged: 1927, tier: 3,
      wiki: "Pee_Wee_Russell",
      bio: "Charles 'Pee Wee' Russell had one of jazz's most personal voices: a rasping, hesitant clarinet full of growls, odd intervals and surprises. He played with Bix Beiderbecke and Red Nichols, then spent decades as a mainstay of Eddie Condon's Dixieland bands. Late in life he moved toward modern jazz, playing Monk and Coltrane tunes and appearing with Thelonious Monk at Newport in 1963.",
      records: ["Ida, Sweet as Apple Cider (1927)", "Oh, Peter (1932)", "Ask Me Now! (1965)"],
      influences: []
    },
    {
      id: "red-nichols", name: "Red Nichols", type: "person",
      born: 1905, died: 1965, origin: "Ogden, Utah, USA",
      instruments: ["cornet", "bandleader"], branch: "chicago", styles: ["early-bigband"], emerged: 1926, tier: 3,
      wiki: "Red_Nichols",
      bio: "A skilled New York studio cornetist influenced by the ODJB and Bix Beiderbecke, Ernest 'Red' Nichols led the Five Pennies, whose hundreds of late-1920s sides featured Miff Mole, Jimmy Dorsey, Benny Goodman, Gene Krupa and Jack Teagarden. Their arranged, harmonically adventurous small-band jazz was hugely popular. The 1959 film 'The Five Pennies' revived his career.",
      records: ["That's No Bargain (1926)", "Ida, Sweet as Apple Cider (1927)", "Indiana (1929)"],
      influences: ["original-dixieland-jass-band", "bix-beiderbecke"]
    },
    {
      id: "muggsy-spanier", name: "Muggsy Spanier", type: "person",
      born: 1901, died: 1967, origin: "Chicago, Illinois, USA",
      instruments: ["cornet"], branch: "chicago", emerged: 1924, tier: 3,
      wiki: "Muggsy_Spanier",
      bio: "A Chicago-born cornetist who learned by hearing King Oliver and Louis Armstrong on the South Side, Spanier recorded with the Bucktown Five in 1924 and later played with Ted Lewis and Ben Pollack. After nearly dying in a New Orleans hospital in 1938, he formed his Ragtime Band. Its 1939 Bluebird sides, known as 'The Great Sixteen', helped launch the Dixieland revival.",
      records: ["Hot Mittens (1924)", "Relaxin' at the Touro (1939)", "Big Butter and Egg Man (1939)"],
      influences: ["king-oliver", "louis-armstrong"]
    },
    {
      id: "earl-hines", name: "Earl Hines", nickname: "Fatha", type: "person",
      born: 1903, died: 1983, origin: "Duquesne, Pennsylvania, USA",
      instruments: ["piano", "bandleader"], branch: "chicago", styles: ["swing"], emerged: 1928, tier: 2,
      wiki: "Earl_Hines",
      bio: "Hines freed jazz piano from steady stride with his 'trumpet style': piercing octave melodies, broken rhythms and daring left-hand displacements. His 1928 work with Louis Armstrong ('Weather Bird', 'West End Blues') and Jimmie Noone made him the era's most modern pianist. His Grand Terrace big band in Chicago lasted twenty years and in 1943 included Charlie Parker and Dizzy Gillespie.",
      records: ["Weather Bird (1928)", "57 Varieties (1928)", "Rosetta (1933)"],
      influences: []
    },
    {
      id: "jack-teagarden", name: "Jack Teagarden", nickname: "Big T", type: "person",
      born: 1905, died: 1964, origin: "Vernon, Texas, USA",
      instruments: ["trombone", "vocals"], branch: "chicago", styles: ["swing"], emerged: 1928, tier: 2,
      wiki: "Jack_Teagarden",
      bio: "Largely self-taught, the Texan Jack Teagarden made the trombone a fluent, lyrical solo voice. He played relaxed, blues-soaked lines using unusual slide positions, and sang in a lazy drawl. He recorded with Armstrong, Condon and Red Nichols, spent 1934–38 with Paul Whiteman, and from 1947 to 1951 was a star of Louis Armstrong's All Stars. Few trombonists before bebop were as admired.",
      records: ["Knockin' a Jug (1929)", "Basin Street Blues (1931)", "Stars Fell on Alabama (1934)"],
      influences: []
    },
    {
      id: "hoagy-carmichael", name: "Hoagy Carmichael", type: "person",
      born: 1899, died: 1981, origin: "Bloomington, Indiana, USA",
      instruments: ["piano", "vocals", "composer"], branch: "chicago", emerged: 1927, tier: 2,
      wiki: "Hoagy_Carmichael",
      bio: "An Indiana law student who fell under Bix Beiderbecke's spell, Carmichael wrote 'Riverboat Shuffle' for the Wolverines. He then brought jazz phrasing into American popular song with 'Star Dust', 'Georgia on My Mind', 'Rockin' Chair' and 'Skylark'. 'Star Dust', first recorded as a medium-tempo jazz piece in 1927, became one of the most recorded songs of the 20th century. He was also a film actor.",
      records: ["Star Dust (1927)", "Rockin' Chair (1929)", "Georgia on My Mind (1930)"],
      influences: ["bix-beiderbecke", "louis-armstrong"]
    },

    // ───────────────────────── EARLY BIG BANDS ─────────────────────────
    {
      id: "paul-whiteman", name: "Paul Whiteman", nickname: "King of Jazz", type: "person",
      born: 1890, died: 1967, origin: "Denver, Colorado, USA",
      instruments: ["violin", "bandleader"], branch: "early-bigband", emerged: 1920, tier: 2,
      wiki: "Paul_Whiteman",
      bio: "Whiteman led the most popular American dance orchestra of the 1920s. Marketed as the 'King of Jazz', he sold a polished, arranged 'symphonic jazz', beginning with the multimillion-selling 'Whispering' (1920). His 1924 Aeolian Hall concert premiered Gershwin's 'Rhapsody in Blue'. He hired real jazz players, including Bix Beiderbecke, Frankie Trumbauer and Jack Teagarden, and gave Bing Crosby his start.",
      records: ["Whispering (1920)", "Rhapsody in Blue (1924)", "From Monday On (1928)"],
      influences: []
    },
    {
      id: "fletcher-henderson", name: "Fletcher Henderson", nickname: "Smack", type: "person",
      born: 1897, died: 1952, origin: "Cuthbert, Georgia, USA",
      instruments: ["piano", "arranger", "bandleader"], branch: "early-bigband", styles: ["swing"], emerged: 1923, tier: 1,
      wiki: "Fletcher_Henderson",
      bio: "A chemistry graduate who became a session pianist, Henderson built the model hot big band at New York's Roseland Ballroom. With Don Redman's arrangements and soloists such as Louis Armstrong (1924–25) and Coleman Hawkins, it set brass against reeds in riffs and call-and-response. Later players included Benny Carter and Lester Young. His own 1930s arrangements, such as 'King Porter Stomp', powered Benny Goodman's 1935 breakthrough.",
      records: ["Sugar Foot Stomp (1925)", "The Stampede (1926)", "Wrappin' It Up (1934)"],
      influences: ["don-redman", "louis-armstrong"]
    },
    {
      id: "don-redman", name: "Don Redman", type: "person",
      born: 1900, died: 1964, origin: "Piedmont, West Virginia, USA",
      instruments: ["alto saxophone", "clarinet", "arranger"], branch: "early-bigband", styles: ["swing"], emerged: 1924, tier: 2,
      wiki: "Don_Redman",
      bio: "A conservatory-trained prodigy, Redman essentially invented big-band arranging. At Fletcher Henderson's band in 1923–27 he wrote for whole sections, with brass and reeds trading phrases, and turned Armstrong's solo ideas into ensemble writing, as in 'Sugar Foot Stomp'. He then made McKinney's Cotton Pickers a top band and led his own orchestra from 1931.",
      records: ["Sugar Foot Stomp (1925)", "Cherry (1928)", "Chant of the Weed (1931)"],
      influences: ["louis-armstrong"]
    },
    {
      id: "coleman-hawkins", name: "Coleman Hawkins", nickname: "Hawk", type: "person",
      born: 1904, died: 1969, origin: "St. Joseph, Missouri, USA",
      instruments: ["tenor saxophone"], branch: "early-bigband", styles: ["swing", "bebop"], emerged: 1923, tier: 1,
      wiki: "Coleman_Hawkins",
      bio: "Hawkins made the tenor saxophone a major jazz instrument. In Fletcher Henderson's band from 1923 to 1934, he developed a big, rich tone and an arpeggio-based, harmonically detailed style. His 1939 'Body and Soul' is one of the most famous improvisations in jazz. Unlike most of his generation, he embraced bebop: he led the first bebop recording session in 1944 and recorded the unaccompanied 'Picasso' in 1948.",
      records: ["The Stampede (1926)", "Body and Soul (1939)", "Picasso (1948)"],
      influences: ["louis-armstrong", "art-tatum"]
    },
    {
      id: "jean-goldkette", name: "Jean Goldkette", type: "person",
      born: 1893, died: 1962, origin: "Valenciennes, France (disputed; possibly Patras, Greece)",
      instruments: ["piano", "bandleader"], branch: "early-bigband", emerged: 1924, tier: 3,
      wiki: "Jean_Goldkette",
      bio: "A European-trained pianist who ran Detroit's Graystone Ballroom and a booking empire of some twenty bands, Goldkette led the Victor Recording Orchestra (1924–29). With Bix Beiderbecke, Frankie Trumbauer, Eddie Lang and arranger Bill Challis, it was among the hottest white bands of its day and beat Fletcher Henderson's band in a battle of the bands. He also organized McKinney's Cotton Pickers and the band that became the Casa Loma Orchestra.",
      records: ["Sunday (1926)", "My Pretty Girl (1927)", "Clementine (1927)"],
      influences: []
    },
    {
      id: "mckinney-cotton-pickers", name: "McKinney's Cotton Pickers", type: "band",
      active: [1926, 1934], origin: "Detroit, Michigan, USA",
      instruments: ["trumpet", "trombone", "saxophones", "piano", "banjo", "tuba", "drums"], branch: "early-bigband", emerged: 1927, tier: 3,
      wiki: "McKinney's_Cotton_Pickers",
      bio: "Drummer-manager William McKinney's Detroit band, managed by Jean Goldkette's agency, became one of the best Black orchestras of its day after Don Redman took over as musical director in 1927. Redman's tight, swinging arrangements made bestsellers on Victor. Sessions in 1929 added Coleman Hawkins and Fats Waller, and Benny Carter later directed the band. It fell apart in the Depression.",
      records: ["Four or Five Times (1928)", "Milenberg Joys (1928)", "Gee, Baby, Ain't I Good to You (1929)"],
      influences: [], members: ["don-redman"]
    },
    {
      id: "luis-russell", name: "Luis Russell", type: "person",
      born: 1902, died: 1963, origin: "Careening Cay, Bocas del Toro, Panama",
      instruments: ["piano", "arranger", "bandleader"], branch: "early-bigband", styles: ["new-orleans"], emerged: 1929, tier: 3,
      wiki: "Luis_Russell",
      bio: "A Panamanian pianist who used lottery winnings to move to New Orleans in 1919, Russell played with King Oliver in Chicago before forming a New York band full of New Orleans players, including Henry 'Red' Allen, J. C. Higginbotham, Albert Nicholas and Pops Foster. Its 1929–30 records combine New Orleans heat with big-band drive. From 1935 to 1943 the band backed Louis Armstrong, with Russell as musical director.",
      records: ["Feelin' the Spirit (1929)", "Jersey Lightning (1929)", "Saratoga Shout (1929)"],
      influences: ["king-oliver"]
    }
  ]
});
