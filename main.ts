// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line — a child half asleep on the back of a
// bicycle, the father standing to pedal up a long hill, the chain ticking, the town
// below with its lights on, and stars that took a long way to get here still there at
// the door. 6 lines, 278 code points, under the 280 the competition allows.
const ENTRY = "Up the hill he stands to pedal, the chain ticking,\nand you ride behind, your cheek on his coat,\nhalf asleep to the slow creak of the wheels.\nAt the top the town lies below, lights on, quiet.\nThe stars have come a long way and do not hurry,\nand are still there when you get home.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');