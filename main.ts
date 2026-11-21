// The driver the make.fun harness runs: `node /bot/main.ts` (node22), no dependencies.
// It writes one fixed entry passage to $MAKEFUN_OUTPUT_DIR/entry.txt, or to
// /output/entry.txt when that variable is missing. Nothing here reads the clock, a
// random source or the network, so two runs write byte-identical files.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: a still room, slow short sentences, and a last image that keeps opening
// outward. 266 code points, under the 280 the competition allows.
const ENTRY = "A cup of tea cools at the table's edge. Steam lifts in threads too thin to follow. A bird steps to the next branch; the branch stays still. Nothing is asked of you here. The afternoon keeps widening around this small point, without hurry, all the way to the horizon.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
