# June Portfolio — Design System

A hand-made paper scrapbook for **June's personal portfolio site**. June is a Brand Campaign Manager with 4+ years of experience, a fresh MSc in Marketing (UCD Smurfit, 2025–2026), and a hobby illustrator (@drawin_june). The system restyles the existing site without changing its structure or copy. Site language: English.

**Keywords:** Warm · Crafted · Editorial · Confident. Keep the trust of a career; show the hand of someone who draws. Never a stiff corporate CV, never an AI-stamped template.

## Products / surfaces
One product, two page types:
1. **Main page** — one scroll: Cover → Profile → How I work → Project sections → Drawing → Contact.
2. **Case-study page** — opened from a project card; same template for every project (think ( ) wise, Tinder × Boiler Room, D8CRATE, A2 Milk (Yonsei Milk), Jjan-merang, social media for Hyundai/Dhuman/Goobne).

## Sources
- Local folder `portfolio-design-system/` (read-only mount): `README.md`, `main-page.md`, `case-study-page.md`, `source-spec-v8.md` (Korean original spec), `tokens.json`, `tokens.css`, `components/bundle.css` + per-component `preview.html`/`README.md`, `assets/` (Tape, Social QR, References R1–R7).
- The live site file `June Portfolio.dc.html` is referenced by the spec but was **not** provided — unquoted copy and imagery are placeholders in the UI kit.
- No logo exists. The brand name is set in plain type (DM Serif Display Italic) wherever a mark would go.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `paper.css`, `assets.css`. `tokens/tokens.json` is the source token file.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (below), each with `.d.ts`, `.prompt.md`, and a card.
- `ui_kits/portfolio/` — main page + case study click-through (`index.html`, `case-study.html`).
- `assets/tape/` (tape_red, tape_beige, tape_paper PNG) · `assets/social/qr_drawin_june.png` · `assets/references/` R1–R7 (mood only, not for use on the site).
- `SKILL.md` — Agent Skill wrapper. `thumbnail.html` — project tile.

## Components
Source inventory (from `components/` in the source): Button, Cover, Doodles, GridPaper, Icons, PaperCard, PaperTexture, QrCard, SpeechBubble, Tag, Tape, TextLink, TornEdge, TornSheet.
- `components/buttons/` — **Button** (primary; `onRed`), **TextLink**
- `components/tags/` — **Tag** (`outline` | `torn` sticker; `onRed`)
- `components/tape/` — **Tape** (red | beige | paper PNG, `angle`, `width`, `position`)
- `components/paper/` — **PaperTexture** (light = main | paper / deep = accent | red), **GridPaper**, **TornEdge** (tear 1–3)
- `components/sheets/` — **TornSheet** (sheet | band | label | bubble shapes, red backing), **SpeechBubble**
- `components/cards/` — **PaperCard** (project card), **QrCard**
- `components/doodles/` — **Doodle** (ellipse, crayon-star, star, arrow, accents) — source "Doodles"
- `components/icons/` — **Icon** (magnifier, bar-chart, light-bulb, pencil, checklist, medal, puzzle) — source "Icons"
- `components/cover/` — **Cover**

Intentional additions: `torn` Tag variant and `--torn-label` / `--torn-band` clip shapes — the spec requires torn tool stickers and a torn red Tools band but ships no shape for them. `rough.jsx` helper gives each SVG its own `#rough` filter id so marks work without a page-level filter.

---

## CONTENT FUNDAMENTALS
- **Voice:** first person, June speaking ("I took the creative lead…", "the part of this that was mine"). Confident and specific, never boastful; claims tie to a concrete action or number.
- **Tone:** warm-professional. Editorial sentences, not CV bullet fragments. Short declaratives mixed with one longer explanatory sentence.
- **Casing:** sentence case for titles ("How I work", "The Challenge", "My role"). Labels/eyebrows UPPERCASE via CSS with +0.12em ("MARKETING PROJECT", "WHAT I OWNED", "UCD SMURFIT · STUDENT ADVERT COMPETITION 2026"). Tags keep their written case ("Google Analytics").
- **Punctuation:** middle dot `·` as a separator; en dash for ranges (2025–2026); arrows in link copy ("See more on Instagram @drawin_june →", "← Back to portfolio"); `×` in collaborations (Tinder × Boiler Room).
- **Examples:** "Data-driven marketer, 4+ years turning insight into campaigns that move numbers." · "The aim was a pitch that already looked like a running campaign, not a proposal on paper." · Speech bubble: "Outcome?"
- **Structure:** What I owned (Hero) = keywords; My role = two ~3-line paragraphs explaining how. Never repeat a sentence between them.
- **No emoji. No exclamation-mark hype.** Copy is kept as on the live site — the only sanctioned rewrite is the My role drafts.

## Hard rules (check every page before delivering)
1. **Every change of ground is a torn edge — never a straight line.** Whenever two stacked sections have different grounds (red / paper-light / paper / paper-deep), the upper section ends with `<TornEdge>`. A straight horizontal seam between two grounds is a bug.
2. **Alternate grounds section by section** — paper-light and paper carry the page (e.g. Profile light → How I work paper → Projects light → School projects paper → Drawing light → Contact red). Neighbouring tears use different `tear` shapes (1/2/3).
3. **Seam-free placement:** the upper section is `position:relative` with a higher `z-index` than the next; TornEdge sits absolutely at its bottom: `<TornEdge tear={2} from="light" style={{position:'absolute',left:0,right:0,top:'100%',marginBottom:0}} />`. Give the next section ~40px extra top padding. Into red: add `to="red"` (no paper fibre strip).
4. **Text is left-aligned** — never justified, no auto-hyphens. Body Archivo 17/1.5; small 15; labels 13 uppercase +0.12em. Nothing below 13px.
5. **Text never tilts.** Only paper, tape, doodles and photos rotate.
6. **Tape:** one piece, top-centre (`position="tc"`), small varied angle, on each card/sheet.

## VISUAL FOUNDATIONS
- **Colour:** 8 tokens only — red `#BE2E22` (hover `#9E2419`), ink `#1A1A1A`, charcoal `#3D3B38`, paper `#F9F5EC`, paper-light `#FFFDF8`, paper-deep `#F1EADC`, line `#EAE3D6`. No pure white, no other hues. On red, every text/border/line is paper-light (5.4:1). Red as text on paper only for titles, numbers, links, short accents; long copy is ink. Outside red sections red covers ≤ ~10% of the screen. On paper-deep, red text only at 24px+.
- **Type:** DM Serif Display *Italic* 400 for every title and number (never bold); Archivo 400/500/700 for body and UI; Mrs Saint Delafield exactly once ("Meet June" on the cover). Scale 120 · 72 · 64 · 56 · 48 · 40 · 24 (display) · 17 · 15 · 13 (Archivo body/small/label; mobile sizes below 768px). Body 17/1.5, **left-aligned, never justified**, no auto-hyphens; never leading ≥1.8. Measure 64ch on the main page; case body fills 840px.
- **Backgrounds:** every ground is textured paper (fine watercolour grain + faint mottling via SVG noise). Red paper: cover, Contact, case Hero, case footer. **Main ground is paper-light** (`.paper`) for content sections and the case body. Main page alternates grounds section by section — Profile paper-light → How I work paper → Projects paper-light → School projects paper → Drawing paper-light → Contact red — with a torn edge at every change (paper-light and paper carry the page; paper-deep is reserved for small inset accents). TornEdge sits absolutely at `top:100%` of the upper section (which gets a higher z-index) so its texture continues seamlessly and no horizontal seam appears.
- **Torn edges:** every boundary where the ground changes is torn (see Hard rules). Tears wander gently like real ripped paper (never sawtooth); the exposed paper core shows as an uneven, fibrous, slightly translucent paper-light strip. Into red, no fibre strip.
- **Layered paper:** torn paper-light sheets over a red backing shifted 12–16px down-left (R7). Used for the Strength sheet, My role note, notes, bubble, tool stickers, behind the profile photo.
- **Tape:** only the three PNGs, 80–160px, −12°…+12°, never the same twice, no extra opacity. Paper/beige grounds → red or beige tape; red → paper or beige.
- **Hand-drawn marks:** wobbly pen/crayon strokes, all through the `#rough` displacement filter; only on paper edges and outside, never over text or faces. 3–5 decorations per section unless a count is set.
- **Tilt:** nearly everything sits slightly off-square: sheet −0.8°, index card +1°, note −1.5°, tools band −1°, hero image −1.5°, photo −2…−3°, drawings −4…+4°, stickers −3…+3°. QR always 0°.
- **Corners & cards:** radius 4px on buttons and tags only. Paper, cards and photos are square (paper gets torn edges). Cards = paper-light, no border, paper shadow, a tape strip on a corner.
- **Shadow:** one only — `filter: drop-shadow(0 2px 6px rgba(26,26,26,.12))` on paper pieces. No inner shadows, no elevation scale.
- **Borders:** 1px charcoal on tags (paper-light on red); 1px `color-line` rules; overview divider paper-light at 40%.
- **Animation:** none added. No scroll-in, no hover movement (lift/tilt/zoom).
- **Hover:** colour only → `--color-primary-hover` (button fill, link text). On red, button text darkens; links stay paper-light.
- **Press/focus:** no shrink. Focus ring 2px solid ink, 3px offset (paper-light on red).
- **Transparency/blur:** none, apart from the tape PNGs' own translucency and the 40% overview divider.
- **Imagery:** June's own photos and drawings in their natural colours; no duotone/filter (old red/orange duotones become `#BE2E22`). Profile = cut-out PNG with a 6–10px paper-light sticker outline.
- **Layout:** cover and Contact ~75vh (min 560px) so the next section peeks past the tear. Case study: 1200 container = 280 sticky head + 80 gap + 840 body; every block ends on the 840 edge. Spacing only from 4 · 8 · 16 · 24 · 32 · 48 · 80 · 120. Breakpoints 768 / 1024.

## ICONOGRAPHY
- Hand-drawn black pen icons only, defined as SVG paths in the source Icons card and rebuilt here as `<Icon>`: magnifier, bar chart, light bulb, pencil, checklist, medal, puzzle. Stroke 2.2–2.4px, round caps/joins, `#rough` filter, ink on paper / paper-light on red. 48–64px beside text, never inline in a paragraph.
- Mapping: Strategy & insight → magnifier or bar chart; Creative & content → light bulb or pencil; Execution & management → checklist; medal/puzzle for result and contribution notes.
- Decorative marks via `<Doodle>`: ellipse, crayon star, outline star, curved arrow, accent marks.
- **No icon font, no clean vector set (no Lucide etc.), no emoji, no unicode glyph icons** — only the text arrows → ← inside link copy.
- Bitmap assets: tape PNGs, QR PNG. These icons may later be replaced by June's own drawings.

## Font note
All three families are Google Fonts loaded by `@import` in `tokens/fonts.css`; no font binaries were supplied.
