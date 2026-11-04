/* Conjoining Voices — registry. Instrument facts: data/voices/instruments.js; ensemble/voicings/hearing:
   data/voices/ensemble.js; recorded samples: data/voices/samples.js (assets/sounds/). */
(function (g) {
  const VOICES = {
    instruments: [],
    sections: {},
    add(chunk) {
      if (chunk.instruments) this.instruments.push(...chunk.instruments);
      if (chunk.sections) Object.assign(this.sections, chunk.sections);
    },
  };
  // Fixed instrument ids shared by facts, samples and voicings. Pitches are CONCERT (sounding) pitch.
  VOICES.IDS = [
    "voice-female", "voice-male",
    "trumpet", "trumpet-harmon", "trombone", "tuba",
    "clarinet", "flute", "soprano-sax", "alto-sax", "tenor-sax", "baritone-sax",
    "piano", "vibraphone", "guitar",
    "bass-pizz", "bass-arco",
    "drums",   // kit pieces: ride, hihat, snare, snare-brush, kick
  ];
  g.VOICES = VOICES;
})(typeof window !== "undefined" ? window : globalThis);
