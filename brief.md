# brief.md — Kōhī by Ifuku

**Client-specific override on `~/.claude/CLAUDE.md` (Kokerboom Studio — Cloudflare Pages & Website Design Standards).**
Where this file and the global standards disagree, **this file wins**. Where this file is silent, the global standards apply in full.

- **Project:** Kōhī by Ifuku — single-page showcase site
- **Studio:** Kokerboom Studio
- **Deploy target:** Cloudflare Pages (Git-connected)
- **Status:** Brief complete. Build not started.
- **Brief date:** 18 August 2026
- **Prepared from:** client dossier PDF, client logo file, one 25s interior video, four interior/product photos, the live site at kohibyifuku.co.za, the 44 Stanley tenant directory, and third-party listings.

---

## 0. The one-line thesis

> **Kōhī is a listening room that happens to serve the best matcha in Joburg. The site should feel like walking in during a quiet Tuesday set — dark, warm, expensive, unhurried.**

The single job of this page: **make a first-time visitor decide to travel to 44 Stanley.** Not to order online, not to sign up. To *go there*. Every section is measured against that.

---

## 1. Client context (locked facts — do not invent around these)

### 1.1 Business snapshot

| Field | Value | Source |
|---|---|---|
| Trading name | Kōhī by Ifuku (also written *Kōhī*, *KŌHĪ*) | Dossier, live site, IG bio |
| Founder | Rodreck "Rodney" Mudzengerere | Dossier, 44 Stanley, YourLuxury Africa |
| Parent brand | IFUKU — vintage/selvedge denim & workwear, retail store steps away in the same complex | YourLuxury Africa, 44 Stanley directory |
| Established | 2024 | Dossier, live site footer |
| Category | Specialty coffee & matcha bar · micro-gallery · vinyl listening room (*jazz kissa*, ジャズ喫茶) | Dossier |
| Address | 44 Stanley Avenue, Braamfontein Werf, Johannesburg, 2092 | Dossier, live site, IG |
| Complex | 44 Stanley — a 1930s light-industrial complex converted in 2003 into a boutique retail/creative precinct | 44 Stanley |
| Phone (published on own site) | +27 62 314 1224 | kohibyifuku.co.za |
| Phone (published in 44 Stanley directory) | +27 61 295 3300 | 44stanley.co.za |
| Website | kohibyifuku.co.za (currently a generic template — this build replaces it) | Live |
| Instagram | [@kohi_by_ifuku](https://www.instagram.com/kohi_by_ifuku/) — ~3.8k followers, ~250 posts | IG |
| Playlist | Apple Music — "Jazz Kōhī": `https://music.apple.com/za/playlist/jazz-kohi/pl.u-pMylDXvu43Wj6xz` | Live site |
| Hours (client's own site) | Mon–Sat 08:00–17:00 · Sun 08:00–16:00 | kohibyifuku.co.za, IG bio, dossier |
| Price band | $$ / roughly R150–R200 per head | BrownPages listing |
| Public rating | 4.3 from a small review base (~19 reviews) | BrownPages listing |
| Furniture maker | Mady by Us Furniture Studio (handcrafted wooden furniture, built for the space) | YourLuxury Africa |

**Founder's own framing, in his words (usable, verified):** he calls Kōhī the dream he had to bring to life, and describes the crossover simply — most denim lovers are also coffee people. The IFUKU philosophy he applies to denim is *longevity is luxury*. That sentence is the intellectual spine of this brand and should inform tone everywhere.

> **Do not use** the detail about the founder's car accident and the loss of his eye. It appears in one published profile. It is his to tell, not ours, and it has nothing to do with why someone should visit.

### 1.2 Who the customer is

Three real audiences, in priority order:

1. **The Joburg creative-class regular** — 25–40, works from cafés, buys design objects, follows 44 Stanley tenants. Wants a beautiful room with good Wi-Fi and no rush. Converts by *arriving*.
2. **The vinyl / jazz kissa person** — comes specifically for Kōhī Sessions and the hi-fi. Small, loud, high-loyalty group. Converts by *checking the Sessions date*.
3. **The destination visitor** — out-of-towner or first-timer who has seen the matcha on TikTok/Instagram. Converts by *getting directions*.

All three are already primed by the photography. None of them need to be sold to. They need to be **shown the room and told when it's open.**

### 1.3 What is actually served (verified — no prices published anywhere)

Verified items: ceremonial matcha latte, oat milk cinnamon matcha, iced matcha, black sesame latte, espresso, ethical pour-over, hot chocolate, burnt Basque cheesecake (this is the dessert in `IMG_8839`), matcha & white chocolate cookies, tiramisu cupcakes, house cookies, croissants, danishes.

**Hard rule: no prices on the site.** The client's own `/menu` page currently reads "COMING SOON". A single third-party review mentions R82 for two cookies — that is hearsay, not a price list. Ship a menu section that names the drinks and the craft, with a clear line that the full list is in-store. See §9 Q1.

### 1.4 The competitive/reputation reality (internal — informs restraint, not copy)

Sentiment is genuinely mixed. The room, the matcha and the staff are consistently praised. There are also public reviews calling the food overpriced and one calling the place an aesthetic destination more than a coffee one. This has a direct design consequence:

- **The site must not overclaim.** The current live site says *"Ready to Experience the Best Coffee in Town?"* — that is exactly the kind of line that hands a critic their opening paragraph. Kill it.
- **Posh is demonstrated, not asserted.** Show the speakers, the plaster, the joinery, the whisk. Never write the word "premium".
- Where we make a claim, it is a *specific* one (bowl-whisked matcha, first & last Sunday, BYO vinyl), never a superlative.

---

## 2. Brand system

### 2.1 Where the palette came from

Every hex below was sampled from the client's own assets with PIL — channel-relationship filtering on the four photos and on frames extracted from the hero video, not eyedropped by eye and not taken from the dossier.

The dossier PDF proposes `#121212 / #D4A373 / #556B2F / #F4EAE1`. That palette is *directionally right and numerically wrong* — it reads as a description of the room rather than a measurement of it. **The values below supersede the dossier palette.** Where the dossier is close, I've kept its naming spirit.

| Token | Hex | Derived from | Role |
|---|---|---|---|
| `--ink` | `#14140F` | Mean of the darkest cluster across the listening-room and gallery frames (`#12120A`, `#0C0908`, `#19181B`) | Page background. The room with the lights down. |
| `--surface` | `#211F1A` | Shadowed plaster / bench shadow cluster (`#251F1A`, `#25241E`) | Raised panels, cards, the sticky header once scrolled. |
| `--plaster` | `#95968F` | Low-saturation mid-value mask across both gallery photos (`#969A94`, `#93938D`) | Secondary text, hairlines, captions. The actual wall colour. |
| `--teak` | `#9C6640` | Red>green>blue mask across the cheesecake photo and two video frames (`#A26D3E`, `#936340`, `#945C3A`) | Large display type, rules, the tonearm. **Decorative and large-scale only** (3.86:1 on ink). |
| `--teak-light` | `#BF8257` | `--teak` lifted in HSV to clear AA | Any amber used at body/UI size (5.76:1 on ink). |
| `--matcha` | `#7D9945` | Mean of green-dominant pixels in the matcha-latte photo | Secondary accent: underlines, the Sessions marker, links on hover. |
| `--matcha-bright` | `#B3D458` | Brightest quartile of the same mask — this is the actual colour of their whisked matcha in daylight | **Reserved.** Now-playing dot and focus rings only. Nowhere else. |
| `--washi` | `#D4C9B7` | Ceramic/parchment cluster (`#D2CBBC`, `#D6C7B1`, `#C4BDAC`) | Primary text and the wordmark on dark. |

**Why this palette, in one sentence:** it is the room measured — burnt-charcoal listening dark, the greenish lime plaster of the walls, the teak of Mady by Us's joinery, the parchment of the ceramics, and one green that is literally the drink.

**Contrast, computed (WCAG, pure-Python luminance):**

| Pair | Ratio | Verdict |
|---|---|---|
| `--washi` on `--ink` | 11.29:1 | AAA — body default |
| `--plaster` on `--ink` | 6.19:1 | AA — captions, secondary |
| `--matcha` on `--ink` | 5.73:1 | AA |
| `--teak-light` on `--ink` | 5.76:1 | AA |
| `--teak` on `--ink` | 3.86:1 | **AA Large only** — ≥24px or ≥19px bold, or non-text |
| `--ink` on `--washi` | 11.29:1 | AAA — inverted button |
| `--washi` on `--surface` | 10.06:1 | AAA |

### 2.2 Anti-tell guard (read this before you pick a single colour)

The global standards ban *"near-black background with one acid-green or vermilion accent."* This palette is dark with a green in it, so it lives one bad decision away from that tell. The guard:

- The dominant accent is **teak**, not green. Amber-to-green surface area should be roughly 3:1 in teak's favour.
- `--matcha` is muted (59% sat, mid value), used as **line and label**, never as a filled button, never as a glow, never as a border on everything.
- `--matcha-bright` appears in **two places on the entire page**: the now-playing dot, and `:focus-visible` rings. If you find yourself using it a third time, you've broken the rule.
- No neon. No glow. No `box-shadow` in an accent colour anywhere.
- The page has **five** tonal steps (ink, surface, plaster, teak, washi) — it should read as a graded photograph, not a dark theme with one highlight.

### 2.3 Typography

Never Inter, Poppins or Montserrat. This pairing is chosen because the brand is literally bilingual and the name **must** render its macrons correctly — Kōhī, not Kohi.

| Role | Face | Why this one |
|---|---|---|
| Display | **Shippori Mincho B1** (600/700) | A true Japanese *mincho* serif. Real brush-derived stroke modulation, sharp triangular serifs. It gives the ceremonial, expensive register without reaching for a Western fashion serif. Full macron support. |
| Body / UI | **Zen Kaku Gothic New** (400/500) | A Japanese humanist gothic. Quiet, generous counters, sets Latin cleanly and sits under the mincho like the same designer drew both — because in spirit, they did. |
| Liner note | **DM Mono** (300/400, letter-spaced) | Times, dates, track markers, captions. Reads like the credits on the back of a record sleeve. Used small, wide-tracked, in `--plaster`. |

**Macron QA (mandatory):** confirm at runtime that `ō` (U+014D) and `ī` (U+012B) render in each face and are not falling back to a system font. DM Mono in particular may lack Latin Extended-A — **if the mono lacks the glyphs, any string containing macrons must be set in Zen Kaku Gothic New instead.** A broken macron in the brand name is a launch blocker.

**Loading:** self-host `.woff2` subsets (latin + latin-ext + the specific kana used, if any), `font-display: swap`, `preload` the display 700 and the body 400 only. Total font payload target **≤ 120KB**.

**Type scale** (fluid, 1.333 major-fourth at the top end, tightening down the scale):

```
--step--1  clamp(0.78rem, 0.75rem + 0.15vw, 0.86rem)   DM Mono, liner notes
--step-0   clamp(1.00rem, 0.96rem + 0.20vw, 1.13rem)   Zen Kaku, body
--step-1   clamp(1.25rem, 1.15rem + 0.50vw, 1.50rem)   lead paragraphs
--step-2   clamp(1.75rem, 1.50rem + 1.20vw, 2.60rem)   section heads (Shippori)
--step-3   clamp(2.60rem, 2.00rem + 3.00vw, 4.80rem)   hero + pull statements
```

Measure: **62ch** max on body text, 46ch on lead paragraphs. Body line-height 1.72 (this is a slow page). Display line-height 1.12, `letter-spacing: -0.01em`. DM Mono `letter-spacing: 0.14em`, uppercase.

### 2.4 The logo

`Untitled_design.png` is a 2000×2000 PNG containing a white plate plus black glyphs. I've cut the plate, trimmed to ink, and produced transparent variants (see §5).

**Read the mark honestly:** it's a plump, rounded, hand-drawn lowercase wordmark with strong macron bars. It is *not* austere. It is the warm, friendly note in an otherwise disciplined identity — and that tension is the brand. **Do not fight it, do not redraw it, do not letter-space it, do not put it in a box.** Let it be the one soft shape on a page of tight type.

- Wordmark aspect ratio **2.771:1** — lock it.
- Header lockup: `--washi` version at 92px wide on mobile, 116px on desktop.
- Clear space: **0.5× the cap height of the `k`** on all sides, minimum.
- Never place the wordmark over the video without a solid or heavily-scrimmed backing.
- Favicon: the `ō` glyph alone, ink-on-washi, in a squircle. Generate `favicon.svg` + 180px apple-touch.

---

## 3. The signature element — "The Tonearm"

One element. Everything else stays quiet.

A fixed, full-height **rail** on the left edge (desktop) / a slim top progress bar (mobile), styled like the arm and platter of the turntable that sits in the client's own room:

- A **12px record disc** in `--teak`, with a `--matcha-bright` centre dot, that **rotates in proportion to scroll position** — not on a timer. Scroll down, the record turns. Stop, it stops. One full rotation across the page.
- A **hairline tonearm** in `--teak` whose angle tracks scroll depth, sweeping from outer edge to centre exactly as a real arm does across a side.
- A **now-playing label** in DM Mono beside it that swaps as each section enters view: `A1 — THE ROOM`, `A2 — THE BAR`, and so on.

**Why track markers are permitted here.** The global standards ban `01 / 02 / 03` markers unless the content is genuinely sequential. A record side *is* sequence — the markers encode side and track order, which is the actual metaphor of the room. This is the one place the convention earns its keep. Use `A1…A4 / B1…B3`, never `01/02/03`.

**Implementation:** one `IntersectionObserver` for the labels, one `scroll` listener behind `requestAnimationFrame` writing a single CSS custom property (`--scroll-progress`) that drives both `rotate()` transforms. **No scroll library. No Framer Motion. No GSAP.** Budget: **under 2KB of JS**, `passive: true`.

**`prefers-reduced-motion: reduce`:** disc and arm freeze at their at-rest positions, labels still update on section change, no transition. The rail remains legible and useful.

**Everything else on the page:** a single fade-and-rise of 12px on section entry, 420ms, `cubic-bezier(.2,.6,.2,1)`, `once: true`, and nothing more. No parallax. No counters. No stagger on individual list items. No scroll-jacking. Motion budget spent; leave.

---

## 4. Page architecture

**Ship one page.** A single-scroll landing page with anchored sections. Per the global workflow boundary: **do not add routes, sections or dependencies not listed here without asking.** `/gallery` and `/menu` are noted in §9 as future scope, not this build.

```
┌──────────────────────────────────────────────────────────┐
│  ▍ kōhī            the room   the bar   sessions   visit  │ ← header, transparent
├──────┬───────────────────────────────────────────────────┤    → --surface on scroll
│      │                                    ┌────────────┐ │
│  ●   │   KŌHĪ                             │            │ │
│  │   │   Music. Coffee. Matcha.           │   VIDEO    │ │
│  │   │                                    │  portrait  │ │
│  A1  │   44 Stanley · Braamfontein Werf   │  1180×2048 │ │
│      │                                    │  muted     │ │
│      │   [ Get directions ]  [ Call us ]  │  loop      │ │
│      │                                    └────────────┘ │
│      │   ── open today until 17:00 ────────────────────  │
├──────┼───────────────────────────────────────────────────┤
│  A2  │  THE ROOM        [room-gallery-corner]            │
│      │  two columns: statement left, photo right         │
├──────┼───────────────────────────────────────────────────┤
│  A3  │  THE BAR         [seating-matcha-work]            │
│      │  drink list, no prices, craft note                │
├──────┼───────────────────────────────────────────────────┤
│  A4  │  KŌHĪ SESSIONS   first & last Sunday · BYO vinyl  │
│      │  full-bleed --surface band, playlist link         │
├──────┼───────────────────────────────────────────────────┤
│  B1  │  THE WALLS       [portrait-print-plant]           │
│      │  micro-gallery + Mady by Us joinery credit        │
├──────┼───────────────────────────────────────────────────┤
│  B2  │  FROM THE ROOM   three short quotes, mono-set     │
├──────┼───────────────────────────────────────────────────┤
│  B3  │  VISIT           hours · address · map · phone    │
└──────┴───────────────────────────────────────────────────┘
```

Mobile (360–480px): the rail collapses to a 2px top progress bar with the label beneath the header; the hero video goes full-bleed behind an ink scrim; all two-column sections stack photo-under-text.

---

## 5. Section-by-section spec and copy

Copy is written in the client's voice, from the customer's side of the screen. Sentence case. Plain verbs. **This is final copy — set it as written unless the client corrects it.**

### A1 — Hero

**The video is the thesis.** It is a 25-second handheld walk through the actual room: the hi-fi rack and the big three-way speaker, someone cueing a record, the doorway onto the 44 Stanley courtyard, a man taking a call by the window, two people playing chess over a matcha. Nothing about it is styled and that is exactly why it works. The whole page is then **graded to this footage** — the palette in §2.1 is literally extracted from these frames, so the video should feel like the source of the design rather than an asset dropped into it.

**Framing — this matters.** The source is **portrait, 1180×2048**. Do not stretch it across a widescreen hero and do not crop the top and bottom off it. Instead:

- **Desktop (≥1024px):** the video sits in a tall panel on the right, roughly 38vw wide, full viewport height minus header, `object-fit: cover`, with a 1px `--teak` hairline on its left edge — framed like the doorway it keeps showing. Type occupies the left.
- **Tablet:** panel narrows to 46vw, type stacks above.
- **Mobile:** full-bleed, `100dvh`, `object-fit: cover`, with `linear-gradient(to top, --ink 0%, transparent 55%)` scrim so type stays at 11:1 contrast over it.

**Video element rules:**

```html
<video
  autoplay muted loop playsinline
  preload="metadata"
  poster="/assets/video/kohi-hero-poster.jpg"
  aria-hidden="true"
  class="hero__video">
  <source src="/assets/video/kohi-hero-1080.mp4" type="video/mp4" media="(min-width: 1024px)">
  <source src="/assets/video/kohi-hero-720.mp4"  type="video/mp4">
</video>
```

- **No audio, ever.** The audio track has been stripped in encoding (§6.2) — the original contains whatever record was playing in the room, which we have no licence to publish. Do not add a sound toggle, do not re-add the track.
- The video is decorative: `aria-hidden="true"`, and the room is described in the A2 copy for anyone who never sees it.
- `prefers-reduced-motion: reduce` → do not autoplay; render the poster as a static `<img>` instead. Implement with a `matchMedia` check, not just CSS.
- Poster is the **LCP element**. `<link rel="preload" as="image">` it. Video is `preload="metadata"` so it never competes with the poster for bandwidth.
- Add a `navigator.connection.saveData` check: if true, skip the video entirely and show the poster.

**Copy:**

- Wordmark (as image, `alt="Kōhī by Ifuku"`), then:
- H1 (Shippori, `--step-3`): **Music. Coffee. Matcha.**
- Lead (`--step-1`, `--plaster`): **A listening room and coffee bar at 44 Stanley, where Japanese craft, *jazu* and African hospitality share a table.**
- Liner note (DM Mono, `--plaster`): `44 STANLEY AVE · BRAAMFONTEIN WERF · JOBURG`
- Primary button: **Get directions to 44 Stanley** → `https://maps.app.goo.gl/bEwSYWbxE543MDVM7`
- Secondary button: **Call to book a table** → `tel:+27623141224`
- Live status line, computed client-side from the hours in §1.1 in `Africa/Johannesburg`: `Open today until 17:00` / `Closed — opens tomorrow at 08:00`. Small, mono, `--matcha`. If the JS fails, fall back to the static hours string in HTML — never render an empty slot.

### A2 — The room

- Eyebrow (mono): `A2 — THE ROOM`
- H2: **A room built to be sat in slowly.**
- Body:

> Kōhī means coffee in Japanese. The room takes the rest of its manners from the *jazz kissa* — the listening bars where records are played properly and nobody is hurried out.
>
> Lime plaster, concrete floors, hand-built teak by Mady by Us, ceramics chosen one at a time. Turntables and full-range speakers at the centre of it, because that is what the room is arranged around. It sits in the courtyard at 44 Stanley, a 1930s workshop block that became a home for people who make things.
>
> Globally informed. Grounded in Joburg's creative soil.

- Photo: `room-gallery-corner` — alt: *"The corner gallery wall at Kōhī: framed prints and a woven textile on lime plaster above teak benches and stools."*
- Founder credit line (mono, `--plaster`): `FOUNDED 2024 BY RODNEY MUDZENGERERE · A COMPANION TO IFUKU, NEXT DOOR`

### A3 — The bar

- Eyebrow: `A3 — THE BAR`
- H2: **Whisked, poured, and paid attention to.**
- Body: **Matcha whisked in the bowl the way it should be. Single-origin beans, ground to order, brewed with the water temperature written down. Pastry baked the same morning.**
- Two lists, set in Zen Kaku with `--teak` hairline dividers, **no prices, no icons, no emoji**:

  **Matcha** — Ceremonial matcha latte · Oat milk cinnamon matcha · Iced matcha · Black sesame latte
  **Coffee & bakes** — Espresso · Pour-over · Burnt Basque cheesecake · Croissants and danishes · House cookies

- Closing line (`--plaster`, small): **The full list lives on the board in the shop — it changes as the pastry does.**
- Photo: `seating-matcha-work` — alt: *"A customer working at a teak table at Kōhī with an iced matcha, beneath a framed photographic print."*

### A4 — Kōhī Sessions

Full-bleed `--surface` band. This is the section the vinyl audience came for; give it air.

- Eyebrow: `A4 — SESSIONS`
- H2: **Kōhī Sessions — first and last Sunday of the month.**
- Body: **Selectors and friends take the turntables. Bring your own records if you'd like to play something. Coffee and pastry run as usual. No cover, no list, no rush.**
- Detail line (mono): `FIRST & LAST SUNDAY · FROM 08:00 · BYO VINYL`
- Button: **Open the Jazz Kōhī playlist** → the Apple Music URL in §1.1, `target="_blank" rel="noopener"`, with a visually-hidden "opens in Apple Music" for screen readers.
- **Do not print a start time for the session itself until the client confirms it** (§9 Q4). The line above states opening time only, which is verified.

### B1 — The walls

- Eyebrow: `B1 — THE WALLS`
- H2: **The art changes. The friends who made it don't.**
- Body: **Kōhī doubles as a micro-gallery — photography, textile work and sculpture by artists in the founder's circle, rotated as new work arrives. The furniture is its own exhibit: every table, bench and stool built for this room by Mady by Us Furniture Studio.**
- Photo: `portrait-print-plant` — alt: *"A framed black-and-white portrait of an elderly man in an embroidered cap, hung on plaster and seen past the leaves of a potted plant."*
- Credit line (mono, `--plaster`): `ARTIST CREDITS TO BE CONFIRMED` — **placeholder must be replaced or the whole credit line removed before launch.** See §9 Q6.

### B2 — From the room

Three quotes, `--washi` on `--ink`, Shippori italic-weight display at `--step-1`, attribution in mono `--plaster`. No stars, no cards, no carousel, no five-gold-icons row.

1. **"The best oat milk cinnamon matcha I've had in my entire life."** — Robyn C., Google
2. **"Made just like it is made in Japan."** — Aidan, BrewAtlas
3. **"I told the barista to restore my faith in coffee and he delivered."** — Faatimah, Cape Town

Keep them exactly this short. Attribute every one. If the client can't confirm permission to republish, cut B2 entirely — the page holds without it.

### B3 — Visit

- Eyebrow: `B3 — VISIT`
- H2: **Come sit down.**
- Address block: **44 Stanley Avenue, Braamfontein Werf, Johannesburg, 2092** with the Google Maps link.
- Hours table (mono, aligned):
  `MON–SAT   08:00 — 17:00`
  `SUNDAY    08:00 — 16:00`
- Contact: `+27 62 314 1224` as a `tel:` link, and `@kohi_by_ifuku` as a text link — **no emoji, no icon-font pins, no ❤️.** The current live site uses 📍📞❤️; those do not survive this rebuild.
- Map: a **static** map image (or a click-to-load `<iframe>` façade behind a poster). Never load a Google Maps iframe on first paint — it costs more than the rest of the page combined.
- Footer: wordmark, © 2026 Kōhī by Ifuku, and one line: **A companion to IFUKU. Both at 44 Stanley.**

**Nowhere on this page:** "premium", "best coffee in town", "your journey", "crafted with ❤️", "elevate", "curated experience", "solutions". If a sentence would fit on any other café's site, rewrite it.

---

## 6. Asset manifest

All processed assets are in `assets/` alongside this brief. Copy the tree into `public/` at the repo root.

### 6.1 Brand

| File | Size | Notes |
|---|---|---|
| `assets/brand/kohi-wordmark-washi-{1600,800,400}.png` | 2.771:1 | `#D4C9B7` ink, transparent. **Default header/footer mark.** |
| `assets/brand/kohi-wordmark-light-{1600,800,400}.png` | 2.771:1 | `#F5F2EC` ink, transparent. For photo overlays only. |
| `assets/brand/kohi-wordmark-ink-{1600,800,400}.png` | 2.771:1 | `#14140F` ink, transparent. For light backgrounds, print, OG fallback. |

Source `Untitled_design.png` had an opaque white plate behind the glyphs — that has been removed and the mark trimmed to its true ink bounds. Do not re-derive from the original.

**To do in build:** trace the 1600px ink version to `kohi-wordmark.svg` (the shapes are simple closed curves — a clean autotrace will hold). Use the SVG in the header; keep the PNGs for OG/social.

### 6.2 Video

| File | Size | Spec |
|---|---|---|
| `assets/video/kohi-hero-1080.mp4` | 6.3 MB | H.264 High, 1080×1874, 30fps, CRF 25, faststart, **no audio** |
| `assets/video/kohi-hero-720.mp4` | 3.0 MB | H.264 High, 720×1250, 30fps, CRF 26, faststart, **no audio** |
| `assets/video/kohi-hero-poster.jpg` | 152 KB | 1080px wide, frame at 0.2s — the hi-fi rack and the record being cued |

Source, verified with `ffprobe` (not from the filename): HEVC, **1180×2048**, 60fps, 24.78s, 18.1 Mbps, 56.4 MB, with a stereo AAC track. It is a phone screen recording with no UI chrome in frame, so it is usable as-is. **56 MB would have been a catastrophic hero;** the 720 variant is 3.0 MB, a 95% reduction, and 60fps → 30fps costs nothing on handheld footage.

Optional further saving — run if the Lighthouse number needs it:

```bash
ffmpeg -i kohi-hero-720.mp4 -an -c:v libvpx-vp9 -crf 34 -b:v 0 \
  -row-mt 1 -deadline good -cpu-used 3 kohi-hero-720.webm
```
…and add it as the first `<source>`. Optional, not required.

### 6.3 Photography

| File | Native | Use |
|---|---|---|
| `assets/photos/room-gallery-corner-{1000,640}.webp` + `-1000.jpg` | 1177×1194 | A2 |
| `assets/photos/seating-matcha-work-{1000,640}.webp` + `-1000.jpg` | 1178×1157 | A3 |
| `assets/photos/portrait-print-plant-{1000,640}.webp` + `-1000.jpg` | 1178×1175 | B1 |
| `assets/photos/basque-cheesecake-{1000,640}.webp` + `-1000.jpg` | 1178×985 | Reserve — OG image candidate, or A3 if the client wants food shown |

**Resolution ceiling:** the originals top out at ~1178px wide. **Never display any of them wider than ~590 CSS px on a 2× screen.** No full-bleed photo bands, no edge-to-edge hero stills. The two-column layout in §4 exists partly for this reason. If the client wants a wide image band later, we need new photography (§9 Q7).

All four are near-square. Crop to **4:5** for the section slots — the vertical crop suits the room's tall plaster walls and matches the hero's portrait orientation.

---

## 7. Technical specification

### 7.1 Stack

**Astro, static output** — or hand-written HTML/CSS/JS if that gets there faster. This is one page with roughly 2KB of behaviour; a React bundle on this project is indefensible.

- No React, no Next, no Tailwind runtime, no component library, no animation library.
- Plain CSS with custom properties, one stylesheet, cascade layers (`@layer reset, base, layout, components, utilities`) to keep specificity honest.
- Total JS shipped: **≤ 5KB** (tonearm rail, open/closed status, section observer, map façade).
- Self-hosted fonts. No Google Fonts CDN call.

### 7.2 Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Astro (or **None** if hand-written) |
| Build command | `npm run build` (or leave empty) |
| Build output directory | `dist` (or `/`) |
| Node version | `NODE_VERSION=20` |
| Environment variables | **None required.** If any are added later they go in the Pages dashboard, never in source. |
| Custom domain | `kohibyifuku.co.za` + `www` — needs a DNS move (§9 Q9) |

Add `public/_headers`:
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable
/*.html
  Cache-Control: public, max-age=0, must-revalidate
/
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

Fingerprint asset filenames at build so the immutable cache header is safe.

### 7.3 Head, SEO, schema

- `<title>` **Kōhī by Ifuku — coffee, matcha and a listening room at 44 Stanley, Johannesburg**
- `<meta name="description">` **A specialty coffee and matcha bar, micro-gallery and vinyl listening room at 44 Stanley, Braamfontein Werf. Open Mon–Sat 8am–5pm, Sunday 8am–4pm.**
- `lang="en-ZA"`, canonical to the `www` or apex (pick one, 301 the other).
- OG image: 1200×630 composed from the poster frame with the ink wordmark bottom-left. Generate at build.
- JSON-LD, `CafeOrCoffeeShop`:

```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Kōhī by Ifuku",
  "image": "https://kohibyifuku.co.za/assets/video/kohi-hero-poster.jpg",
  "url": "https://kohibyifuku.co.za",
  "telephone": "+27623141224",
  "priceRange": "$$",
  "servesCuisine": ["Coffee", "Matcha", "Pastries"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "44 Stanley Avenue",
    "addressLocality": "Braamfontein Werf, Johannesburg",
    "postalCode": "2092",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday", "opens": "08:00", "closes": "16:00" }
  ],
  "sameAs": ["https://www.instagram.com/kohi_by_ifuku/"],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Work-friendly tables", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Courtyard seating", "value": true }
  ]
}
```

Add `geo` coordinates once confirmed. **Do not add `aggregateRating`** — we would be self-reporting a third-party number, which is both against Google's guidelines and, at 19 reviews, not worth claiming. **Do not add `Event` schema for Sessions** until real dates and a start time exist (§9 Q4).

### 7.4 Performance targets

| Metric | Target |
|---|---|
| LCP (mobile, 4G) | < 2.0s — poster image, preloaded |
| CLS | 0 — explicit `width`/`height` or `aspect-ratio` on every media element |
| Total JS | ≤ 5KB |
| Total CSS | ≤ 14KB |
| Fonts | ≤ 120KB, 3 files |
| Initial page weight excluding video | **< 400KB** |
| Lighthouse (mobile) | ≥ 95 across the board |

The video does not count against LCP because it never blocks the poster — verify that in the trace, don't assume it.

### 7.5 Quality floor

- Responsive to **360px**. Test the hero at 360×640 specifically; that's where a `100dvh` video hero usually breaks.
- `:focus-visible` ring: 2px `--matcha-bright`, 2px offset, on every interactive element. Visible against both `--ink` and `--surface`.
- `prefers-reduced-motion` honoured by the rail, the section reveals, and the video autoplay.
- Semantic landmarks, one `h1`, no heading level skips.
- Real alt text (written above for each photo). Decorative video is `aria-hidden`.
- Tap targets ≥ 44px.
- Works with JS off: hours render statically, video falls back to poster, rail is hidden.

---

## 8. Explicit overrides on `CLAUDE.md`

Flagged so future sessions know where client rules beat studio defaults:

1. **Dark background permitted and required.** The global "banned tells" list warns off near-black backgrounds with a single bright accent. Here the dark is the client's actual listening room, and the guard in §2.2 (five tonal steps, teak-dominant, matcha-bright restricted to two uses) is what keeps it from becoming the tell.
2. **Sequential markers permitted.** `A1…B3` track markers are allowed because a record side is genuinely a sequence. `01/02/03` remains banned.
3. **Palette overrides the client dossier.** The dossier's four hexes are superseded by the eight measured tokens in §2.1.
4. **No WhatsApp CTA.** Standard Kokerboom conversion pattern does not apply — no WhatsApp line is verified for this client. Primary CTAs are directions and phone. Revisit if §9 Q3 comes back positive.
5. **No pricing anywhere**, contrary to the usual services-and-pricing pattern (§1.3).
6. **Photography ceiling.** Contrary to the usual full-bleed hero-image pattern, no photo may exceed ~590 CSS px display width (§6.3).

---

## 9. Open questions and blockers

**Pre-launch blockers — the site cannot go live until these are cleared.**

| # | Item | Why it blocks | Ask |
|---|---|---|---|
| **Q1** | **Menu and prices.** The client's own `/menu` reads "COMING SOON". | We are shipping a drink list with no prices. If they want prices, we need the real board — not a review's guess. | *Do you want prices on the site at all, or should the board stay the only source?* |
| **Q2** | **People in the video.** Six or seven identifiable customers appear, including close shots. Under POPIA, publishing identifiable people for commercial purposes needs a lawful basis. | Highest-risk item in the build. | *Were these customers asked? If not, we either get consent, re-shoot on a quiet morning, or I can blur faces — but blurring will damage the footage.* |
| **Q3** | **Which phone number is public?** Their site says +27 62 314 1224; the 44 Stanley directory says +27 61 295 3300. | The CTA can only have one. | *Which number should the button dial?* |
| **Q4** | **Sessions start time and the next two dates.** "First and last Sunday" is confirmed; the time is not. | Without it we can't publish Event schema, and the section reads vague. | *What time does a session actually start, and can I list the next two dates?* |
| **Q5** | **Hours conflict.** Their site and Instagram say 17:00 close; Tripadvisor and In Your Pocket say 17:30 daily. | The open/closed status line and the schema both depend on it. | *Confirm the real closing time — and I'll fix the wrong listings while we're at it.* |
| **Q6** | **Artist and artwork credits.** The gallery photos show at least five identifiable artworks by named artists. | Reproducing artwork commercially without credit or permission. | *Who made the works in these photos? I'd like to credit them properly, which is also good for them.* |

**Non-blocking, but ask at the pitch.**

| # | Item | Ask |
|---|---|---|
| Q7 | Photography resolution caps at ~1178px, which constrains the layout. | *Do you have the original full-resolution files, or a photographer's folder?* |
| Q8 | No email address is published anywhere. | *Is there a bookings/enquiries address, or is phone and Instagram the whole channel?* |
| Q9 | The domain is live on another host; Pages needs the DNS. | *Who holds the domain, and can we point the nameservers at Cloudflare?* |
| Q10 | Google presence is thin — 4.3 from roughly 19 reviews, and the Tripadvisor listing has none and shows the wrong suburb. | *Worth a small in-store review prompt once the site is live. I can fix the wrong listings.* |
| Q11 | Table bookings are listed as an amenity, but there's no mechanism. | *Do you want a booking form, or is phone enough?* |
| Q12 | `/gallery` and `/menu` exist on the current site. | *This build is one page by design. Do you want those brought across as a second phase?* |
| Q13 | Review quotes in B2 come from Google, BrewAtlas and the client dossier. | *Happy to publish these with names attached?* |
| Q14 | Sound. The video's original audio was stripped. | *If you ever want sound on the site, we'd need a licensed track — the room's own vinyl isn't ours to publish.* |

---

## 10. Definition of done

- [ ] Palette implemented from the eight tokens in §2.1 — no other hex values in the stylesheet
- [ ] Anti-tell guard §2.2 held: `--matcha-bright` appears exactly twice
- [ ] Shippori Mincho B1 / Zen Kaku Gothic New / DM Mono self-hosted as woff2, ≤120KB total
- [ ] **Macrons verified** — `Kōhī` renders correctly in all three faces at all weights, no fallback
- [ ] Wordmark from `assets/brand/`, 2.771:1 preserved, clear space respected
- [ ] Hero video: portrait framing per §5.A1, muted, looping, poster preloaded, no audio track present in the file
- [ ] `prefers-reduced-motion` → poster only, rail frozen, no section reveals
- [ ] `saveData` → poster only
- [ ] The Tonearm: scroll-linked rotation, ≤2KB JS, `A1…B3` labels, mobile progress-bar variant
- [ ] Open/closed status computes in `Africa/Johannesburg` and degrades to static hours without JS
- [ ] All copy set exactly as §5 — zero placeholder text, zero banned phrases, zero emoji
- [ ] Alt text set as written for all three photos; video `aria-hidden`
- [ ] No photo displayed wider than 590 CSS px
- [ ] Map is a static image or click-to-load façade
- [ ] `CafeOrCoffeeShop` JSON-LD validates; no `aggregateRating`, no `Event`
- [ ] `_headers` in place, asset filenames fingerprinted
- [ ] Lighthouse mobile ≥95 across all four categories; LCP < 2.0s
- [ ] 360px verified, including hero at 360×640
- [ ] Keyboard pass: every interactive element reachable, ring visible on ink and surface
- [ ] Deployed to Cloudflare Pages from GitHub; preview URL sent before DNS moves
- [ ] Self-critique pass done: weakest section identified and fixed before commit
- [ ] Q1–Q6 answered and reflected in the build

---

## 11. Self-check

> *"Would I produce this same design for any other client with a similar prompt?"*

No — and here is the audit trail. The palette is measured from this room's plaster, this maker's teak and this bar's matcha. The type pairing is two Japanese families chosen because the brand name carries macrons and the register is ceremonial. The hero is portrait because the client's footage is portrait and cropping it would be a lie about the space. The signature element is a tonearm because there is a real turntable at the centre of the real room, and the track markers are permitted only because a record side is a real sequence.

The risk taken: a near-black page with a green in it, one bad decision from the most common AI tell there is. §2.2 is the discipline that earns it. If in build it starts to read as "dark theme with a green accent," pull the matcha back further and let the teak carry it.

---

*Kokerboom Studio · brief for Claude Code · Kōhī by Ifuku · 18 August 2026*
