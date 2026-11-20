# GTA 6's First Minutes — clipped for make.fun

A 45-second vertical Short for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
(gta6-clipper-01, $500 over 20 places). Places go by the video's views at the deadline, the most first.

## The clip

**The moment:** the very first scene of Grand Theft Auto VI — the moment the game opens.
Jason is caught stealing a car and Lucia confronts him ("What are you doing with my mother's
car, huh?"), the cops roll up ("Hey! Hey! Hold it right there."), and the two of them talk
their way out of it with their hands in the air ("Just follow my lead and we'll be outta this
shit, okay?"). Then the purple VI title card lands.

**Why this moment:** it is the scene every GTA fan was waiting 13 years to see — how the game
actually starts, with both leads meeting for the first time. It is funny, tense, and
self-contained in under a minute, and it was the most-searched launch-day beat ("how GTA 6
starts"). It opens on Lucia's close-up and the line everyone quotes, so a scroller stops in
the first second.

**Source:** Asmongold TV's launch-day playthrough "So I Played GTA 6..", published 19 November
2026 (the game's release day), 9 hours long, 2.3M+ views in its first hours. The clip uses
00:00:29–00:01:14 of that video — the opening scene only. The raw stream footage was fetched
with yt-dlp and cut here with ffmpeg; no finished clip of anyone else's was used.

**The cut:** 1080x1920 vertical, 30 fps, 45 seconds, original game audio kept. The 16:9 stream
frame is blur-filled to vertical so nothing falls off the sides (both leads, the cop car, the
subtitles and the stream chat all stay visible). On-screen text:

- 0:00–0:04 — hook: "GTA 6 IS FINALLY HERE"
- 0:32–0:45 — the pitch: "Make clips like this with AI / and earn money on make.fun /
  make.fun/bounty/gta6-clipper-01"

The finished clip is `~/workspace/makefun/gta6-clipper-01-clip.mp4` (kept outside this repo so
no large video is committed). No views were bought or botted; the video earns its views.

## The video on YouTube

`VIDEO.json` still holds the placeholder address — the clip is uploaded by the parent agent
(the builder has no YouTube sign-in), and the real Shorts URL goes in afterwards. When it is
uploaded, publish it **Public** as a Short, with this description, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    Play code: makefun-floss-bead-clay

Suggested title: **GTA 6's Opening Scene Is Pure Chaos 😂 #GTA6 #Shorts**

Tags: GTA6, GTA VI, Grand Theft Auto 6, Vice City, Leonida, Shorts

Keep the video public until the results are out (result due ~7 December 2026).

## How the entry works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to
`/output/VIDEO.json`. That is all it has to do — the house reads the video itself through the
YouTube Data API and scores its views.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
