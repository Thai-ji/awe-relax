// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line — a child half asleep on the back of a bicycle,
// the father standing to pedal up a long hill, the chain ticking, the town below at the
// top with its lights on and quiet, the old road under you, the dark running on past the
// last streetlight, and the turning earth carrying you home without waking you. 6 lines,
// 275 code points, under the 280 the competition allows.
const ENTRY = "Up the hill he stands to pedal, the chain ticking,\nyou ride behind, your cheek on his coat,\nhalf asleep.\nAt the top, the town below, lights on and quiet, the road older still,\nthe dark goes on past the last streetlight,\nand the turning earth carries you home, not waking you.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');