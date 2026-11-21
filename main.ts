// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line — someone asleep, someone awake beside them,
// the earth turning the sleeping town toward morning, and a star that outlasts a
// grandmother still burning over it. 5 lines, 257 code points, under the 280 the
// competition allows.
const ENTRY = "Beside you she sleeps, one hand loose on the quilt.\nYou stay awake a while, as you did when she was small.\nOutside, the earth turns the town toward morning,\nand a star that was burning before her grandmother was born\nis still burning over the sleeping town.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');