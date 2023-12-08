// fraction 3/4 equals to {n: 3, d: 4}
// export type Fraction = {
//   n: number;
//   d: number;
// };

export type Key = 'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F' | 'F#' | 'G' | 'Ab' | 'A' | 'Bb' | 'B'
export type DurationNumerator = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
export type DurationDenominator = 2 | 4 | 8 | 16

// export type ScaleStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// type Chord = {
//   tonic: ScaleStep; // in relation to the key
//   triad: "maj" | "min" | "sus2" | "sus4" | "dim" | "aug";
//   duration: Fraction;
//   // additional: unknown; to be defined
// };

// export type Sequence = {
//   key: ScaleStep; // in relation to C
//   minor: boolean;
//   timeSignature: Fraction; // bar duration
//   tempo: number;
//   chordDuration: Fraction;
//   repeats: number;
//   chords: Chord[];
// };

// export type Composition = {
//   id: string;
//   key: ScaleStep; // sequence key by default
//   minor: boolean; // sequence minor by default
//   name: string;
//   sequences: Sequence[];
//   tempo: number; // sequence tempo by default
//   timeSignature: Fraction; // sequence timeSignature (bar duration) by default
//   // chordDuration: Fraction; // sequence chordDuration by default
// };

export type Chord = {
  chord: string
  duration: {
    first: number
    second: number
  }
}

export type Section = {
  id: string
  name: string
  key: Key
  signature: {
    numerator: DurationNumerator
    denominator: DurationDenominator
  }
  repeat: number
  chords: Chord[]
}
