// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line — a child half asleep on the floor at her
// mother's feet, wrapped in the cloth she is sewing, while the sewing machine runs and
// stops, the lamp warm, the window black a long way out, and the needle still going by
// morning. 6 lines, 275 code points, under the 280 the competition allows.
const ENTRY = "Her foot on the pedal, the needle goes and stops,\nyou lie at her feet in the cloth she sews,\nhalf asleep in the warm ring of the lamp.\nThe window is black and stays black far out.\nThe thread runs on, the needle runs on,\nand by morning it will be a whole garment, in no hurry.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');