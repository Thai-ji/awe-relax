// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one still picture per line, a body under wool, and a last image that
// keeps opening outward — the earth carrying the whole house the long way round.
// 255 code points, under the 280 the competition allows.
const ENTRY = "Rain has been falling on this roof since before the town had a name.\nUnder the wool, your hands are two warm stones.\nOutside, the earth turns the night toward morning,\ncarrying this house and the roof's slow leak\nthe long way round, without waking anyone.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
