// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post named in POST.json: a GTA 6 meme made for
// make.fun's "Post a GTA 6 meme on X" bounty and posted from a public
// account. This program's whole job is to hand that address to the gate:
// it copies POST.json from the repository root into the output directory,
// byte for byte, and prints nothing on success.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
