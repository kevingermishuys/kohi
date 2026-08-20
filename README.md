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

## No photography right now — the record-sleeve graphic system

All photography and the hero video have been pulled from this build (client is sending through
real shots later). In their place is an original, illustrated system built entirely from the
locked palette (§2.1) — no photos, no stock art:

- **Hero** (`.hero__art`) — a spinning vinyl (`#vinyl-record` symbol) with a resting tonearm,
  a halftone-dot wash, rising steam wisps and a decorative equalizer strip along the bottom edge.
- **A2 The room / A3 The bar / B1 The walls** (`.art-panel` + modifiers `--room`/`--bar`/`--walls`)
  — Blue-Note-style record-sleeve cards: an oversized faint section numeral, halftone texture,
  and a section-specific motif (spinning vinyl / steam wisps / overlapping "frame" shapes for the
  rotating gallery wall).
- **Visit** (`.pin-ping`) — a pulsing location pin over halftone texture, in place of the old
  map-poster image.
- A scrolling **ticker** band (`MUSIC · COFFEE · MATCHA · VINYL · JAZZ KISSA · 44 STANLEY`) and a
  subtle full-viewport **film-grain overlay** (`.grain`) round out the "less static, more jazz
  kissa" pass. Everything continuous (vinyl spin, steam, ticker, pulse rings, marquee) is wrapped
  in `@media (prefers-reduced-motion: no-preference)`, matching the existing `.reveal`/tonearm
  convention — reduced-motion visitors get the static layout only.

All of this lives in shared `<symbol>`/`<pattern>` defs at the top of `index.html`
(`#vinyl-record`, `#steam-wisp`, `#pin-mark`, `#halftone-dots`) plus the `.art-panel`,
`.hero__art`, `.ticker`, `.grain`, `.pin-ping` rules in `style.css`.

**Swapping in real photography when it lands:** the old `.figure`/`.figure img`/`.figure figcaption`
CSS rules are still in `style.css` for exactly this. Drop files into `assets/photos/`, replace the
relevant `.art-panel` block in `index.html` with a `<figure class="figure"><picture>…</picture>
<figcaption>…</figcaption></figure>` (see git history for the original A2 markup as a template),
and delete that panel's illustration. No need to touch anything else — the illustrated panels are
scoped per-section and don't share state.

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
