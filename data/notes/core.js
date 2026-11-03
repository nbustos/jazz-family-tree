/* Notes on Notes — registry for the composition analyses. Piece data lives in data/notes/*.js. */
(function (g) {
  const NOTES = {
    eras: {},       // era id -> { overview, changes: [] , sources: [] }
    pieces: [],
    add(chunk) {
      if (chunk.eras) Object.assign(this.eras, chunk.eras);
      if (chunk.pieces) this.pieces.push(...chunk.pieces);
    },
  };
  // The five throughlines are the five lines of the staff (top line first).
  NOTES.throughlines = [
    { id: "written", name: "Written & Improvised", color: "#8fb3d9" },
    { id: "rhythm",  name: "Rhythm & the Spanish Tinge", color: "#e0894a" },
    { id: "song",    name: "The Borrowed Song", color: "#c9a0dc" },
    { id: "call",    name: "Call, Response & Riff", color: "#7fbf7f" },
    { id: "blues",   name: "The Blues", color: "#5d8ff0" },
  ];
  g.NOTES = NOTES;
})(typeof window !== "undefined" ? window : globalThis);
