// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line — a child standing straight against the door
// frame while her father measures her height, his palm resting on her head, the pencil
// cold then warm leaving a new line, the older lines climbing back down the wall to a
// mark from when she was small, the house keeping every one the way the sky keeps its
// stars. 6 lines, 275 code points, under the 280 the competition allows.
const ENTRY = "His palm on your head, your back to the door frame,\nthe pencil cold, then warm, a line stays.\nOld lines climb the wall below it, one a year,\nto a mark near the floor, when you were small.\nThe house keeps them as the sky keeps stars,\nand more will climb, long after you sleep.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');