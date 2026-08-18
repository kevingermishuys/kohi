# Kōhī by Ifuku — site

Static, hand-written HTML/CSS/JS per the client brief (no Next/React/Tailwind — that's an
explicit override of the studio default, see `brief.md` §7.1). No build step.

## Run locally

```
node tools/serve.js
```

then open http://localhost:8787/. (No framework, so there's nothing to `npm install` for the
site itself — `tools/` only holds the one-off asset pipeline scripts and their `node_modules`,
which never ship.)

## Deploy — Cloudflare Pages

- Framework preset: **None**
- Build command: *(empty)*
- Build output directory: **/** (repo root)
- Everything under `/assets`, `_headers`, `favicon*`, `apple-touch-icon.png`, and `index.html`
  is the deployable site.

## What's a placeholder right now

The brief's asset manifest (§6.3) calls for four dedicated interior/product photos. Only the
hero video and the two logo files were actually delivered — no photography. Rather than invent
imagery, this build:

- Used two privacy-safe frame-grabs from the hero video (hi-fi rack + doorway/plant, and a
  hands-only vinyl shot) for **A2 (The room)** and the **A4 (Sessions)** bonus image.
- Left **A3 (The bar)** and **B1 (The walls)** as styled placeholder panels — no photo — because
  the only available frames of those moments show identifiable customers' faces, and the brief's
  own Q2 flags publishing identifiable people as a POPIA risk pending consent. See
  `brief.md` §9 Q2 and Q7.
- Dropped the B1 "ARTIST CREDITS TO BE CONFIRMED" line entirely, since there's no gallery-wall
  photo in this build to credit (brief explicitly allows this: "placeholder must be replaced or
  the whole credit line removed").

Swap in real photography by dropping files into `assets/photos/` and updating the `<picture>`
sources in `index.html` — the CSS placeholder panels (`.photo-placeholder`) can be deleted once
real images land.

## Open items before launch

Brief §9 blockers Q1, Q3, Q4, Q5, Q6 are still open (menu/prices, phone number confirmation,
Sessions start time, hours conflict, artist credits). Q3's phone number and Q4's start time were
resolved *in the copy* per the brief's own §5 instructions (client's own number; opening time
only, no session start time printed) — but should still be confirmed with the client before this
goes live. Full checklist: `brief.md` §10.

## Font budget

103.2KB across 5 files (Shippori Mincho B1 700 only — the brief listed 600/700 but didn't
assign either to a specific role, so 600 was dropped to clear the 120KB target; Zen Kaku Gothic
New 400/500; DM Mono 300/400). Verified DM Mono's Google-served latin-ext subset does include
U+014D/U+012B, contrary to the brief's hedge — no macron fallback to Zen Kaku was needed.
