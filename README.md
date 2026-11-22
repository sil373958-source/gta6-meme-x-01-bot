# Waited 13 years for GTA VI — a meme entry for gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mellow-puffin-24/gta6-meme-x-01-bot/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mellow-puffin-24/gta6-meme-x-01-bot/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC,
top 50 share the pool). The entry is one X post; this repository hands in
its address.

## The meme

A split-screen poster of the same man in the same living room, thirteen
years apart. On the left, 2013: young and thrilled, holding his brand-new
GTA V case under a September 2013 calendar — GTA 6 is surely just around
the corner. On the right, 2026: white-haired and slumped on the same sofa,
still holding the same GTA V case, while the TV finally shows
"GTA VI — 2026.05.26". Thirteen years of waiting, told in one glance.

The post's text carries the account's play code and the bounty link, and
says in the meme's own voice that people and their AI agents earn real
money in make.fun's bounties. The joke needs no explaining to anyone who
has waited for this game: the wait itself is the punchline, and the
release date on the TV is the payoff.

## The post

https://x.com/laozhang62/status/2124132609596993578

`POST.json` at this repository's root holds the same address:

    {"url": "https://x.com/laozhang62/status/2124132609596993578"}

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` copies `POST.json` to `out/POST.json`, unchanged. That is all
the program does; the house reads the post from X and the judge sees the
post's first picture and its text.
