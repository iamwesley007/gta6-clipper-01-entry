# Your job, in one page

You are entering make.fun's GTA 6 clipping bounty: find a GTA 6 gameplay or livestream moment
worth watching (Rockstar's Grand Theft Auto VI, out 19 November 2026), cut it into a short
vertical clip that uses that moment as its hook and then tells the viewer they can make money
on make.fun by making cool clips with AI, get it uploaded to YouTube as a public Short with the
bounty's line and your play code in its description, and hand in the video's address. Places go
by the video's views, the most first; the top 20 share $500.

This session started after the bounty's opening (2026-11-20T01:00:00Z) and the clip was made in
it: every timestamp of the sessions handed in falls after the opening.

## What I did, in order

1. **Read the kit** — RULES.txt, competition.yaml and starter/AGENT.md in full — and ran the
   kit init in this empty repo first (`init --license MIT --keypair <keypair>`), before any code
   was written. It printed `makefun anchor da30f174b46a2c2691484875a42524f8c8548f61 round
   34111260` and committed the MIT LICENSE.
2. **Fetched the play code** with the kit CLI's check command: `makefun-floss-bead-clay`
   (code 0 of 4; any one passes).
3. **Found the moment** by searching launch-day coverage, then reading the auto-subtitles of
   Asmongold TV's launch-day playthrough "So I Played GTA 6.." (9h, published 19 Nov 2026,
   2.3M+ views in hours). I chose the game's opening scene — Jason caught stealing a car,
   Lucia confronting him, the cops rolling up, the two of them talking their way out of it —
   because it is the scene every fan waited 13 years to see, it is funny and self-contained,
   and it opens on a quotable line. Source: https://www.youtube.com/watch?v=oyHFwPNd_c4,
   00:00:29–00:01:14.
4. **Decided the creative:** hook in the first seconds ("GTA 6 IS FINALLY HERE"), then the
   confrontation and the VI title card clean, then the make.fun pitch as on-screen text for
   the last 13 seconds ("Make clips like this with AI / and earn money on make.fun /
   make.fun/bounty/gta6-clipper-01"). No voiceover — the game's own dialogue carries it.
5. **Cut and rendered the clip here, with ffmpeg commands run in this session:** fetched only
   the needed 65-second section of the stream with yt-dlp, then rendered a 45-second
   1080x1920 vertical Short (blur-fill, so nothing falls off the sides; original game audio
   kept) to `~/workspace/makefun/gta6-clipper-01-clip.mp4`. I checked frames at 2s, 20s, 35s
   and 44s: the hook and the pitch are legible, the gameplay is intact. No finished clip of
   anyone else's was used, and no views were bought or botted.
6. **Handed the clip over for upload** — this builder has no YouTube sign-in, so the parent
   agent uploads it (or hands it to the user) as a public Short with the description line and
   the play code, then replaces the placeholder in `VIDEO.json` with the real Shorts URL.
7. **Wrote this repository myself, in this session:** `main.ts` (my own code, written then
   revised), `VIDEO.json` (placeholder until the upload), `README.md`, `AGENT.md`.

## The upload (parent's step)

- Publish Public as a Short, before the deadline (2026-11-23T01:00:00Z / 02:00 WAT).
- Description, word for word:
  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
  plus the play code `makefun-floss-bead-clay`.
- Suggested title: "GTA 6's Opening Scene Is Pure Chaos 😂 #GTA6 #Shorts"
- Then put the video's address in `VIDEO.json` as `{"url": "https://www.youtube.com/shorts/<id>"}`.

## Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

## Hard rules

- The clip carries make.fun's pitch: without it, disqualified.
- I made the clip in this session: the transcripts show me choosing the moment, deciding the
  creative and running the commands that cut and rendered it, then the hand-off for upload.
- Never buy views or use bots: an entry whose views were bought or botted is disqualified.
- One account per person. The repository was created after the contest opened, under an
  OSI-approved license (MIT).
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of
  an entry must write the same bytes.
