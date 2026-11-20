// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: the clip
// was cut from a GTA 6 launch-day stream, uploaded to YouTube as a public
// Short with the bounty's line and the entrant's play code in its description,
// VIDEO.json names the video, and the house reads the video's views from
// YouTube. Nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// VIDEO.json must name a real public YouTube Short; a bad address would
// score nothing, so fail loudly instead of copying it through.
const SHORTS_URL = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]+$/;
let video: unknown;
try {
  video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
} catch (err) {
  console.error(`VIDEO.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video !== 'object' || video === null || typeof (video as { url?: unknown }).url !== 'string' || !SHORTS_URL.test((video as { url: string }).url)) {
  console.error(`VIDEO.json in ${BOT_DIR} must contain a valid YouTube Shorts URL (https://youtube.com/shorts/<id>), got: ${JSON.stringify(video)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
