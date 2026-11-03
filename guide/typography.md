# Typography

Source: [`tokens/typography.json`](../tokens/typography.json). Taken from the brand book
(version 1.0, October 2026, pages 18–19).

## Typefaces

Two families, never more.

| | Literata | IBM Plex Sans |
| --- | --- | --- |
| Token | `--serif` | `--sans` |
| For | The name in the logo, headings, large figures | Body text, labels, tables, buttons, the app |
| Weights | SemiBold 600 | Regular 400, Medium 500, SemiBold 600 |
| Fallbacks | Georgia, Times New Roman, serif | Segoe UI, Roboto, Arial, sans-serif |
| By | TypeTogether for Google | Mike Abbink for IBM |
| Licence | SIL Open Font License 1.1 | SIL Open Font License 1.1 |

**Decided (owner, 2026-10-24):** text and interface are IBM Plex Sans, as in the brand book and
on konta.md today. The redesign's `DESIGN.md` names Onest for text and Source Serif 4 for
titles; neither applies.

**Literata is always set at the 24pt optical size** (`font-variation-settings: 'opsz' 24`,
token `--type-heading-optical-size`). Literata's display cuts thin the K's arm to a hairline.
For print, install `Literata_24pt-SemiBold.ttf` from [`assets/fonts`](../assets/fonts).

Both families cover Romanian (ș and ț with the comma below, ă, â, î) and Cyrillic, so the
Russian pages need no other font.

### Files

[`assets/fonts/`](../assets/fonts) holds the web files, the same ones konta.md serves: one
variable `woff2` per subset (latin, latin-ext, cyrillic, cyrillic-ext), Literata 500–600 with
optical sizes 7–72, Plex 400–600. `fonts.css` declares them. Each family's licence is beside
the files (`Literata-OFL.txt`, `IBMPlexSans-OFL.txt`) and travels with them. Products copy the
files into their own domain; nothing loads a font from Google or a CDN.

## Sizes

The web scale. Where the brand book gives a range, the tokens hold its two ends
(`--type-h1-size-min`, `--type-h1-size-max`); how a size moves between them across screen
widths is not decided yet.

| Style | Face | Web | Line height | Print |
| --- | --- | --- | --- | --- |
| Display | Literata 600 | 64–96px | 1.05 | 40–72pt |
| Heading 1 | Literata 600 | 32–50px | 1.16 | 24–30pt |
| Heading 2 | Literata 600 | 24–32px | 1.22 | 16–20pt |
| Heading 3 | Plex Sans 600 | 17px | 1.3 | 11pt |
| Body | Plex Sans 400 | 17px | 1.62 | 9.5–10pt |
| Small | Plex Sans 400 | 14–15px | 1.5 | 8pt |
| Label | Plex Sans 600 | 12–13px, capitals, +8% tracking | | 7pt |

Headings track at −1% (`--type-heading-tracking`); the name in the logo at −1.5%. Heading 3 is
Plex Sans, not Literata.

The app's denser sizes are not decided yet.

## Numbers

- Tabular figures for every amount (`font-variant-numeric: tabular-nums`, token
  `--type-figures`), so digits line up in columns.
- A space between thousands: `1 700 000 MDL`. Decimals after a comma: `4 500,00`.
- Large figures on a Prună band are Literata, in Aur.

## Writing

- Sentence case for headings and buttons. Capitals only for short labels, with the extra
  letter-spacing.
- Body text runs the full width of its column (`--measure: 100%`); see
  [shape-space-motion.md](shape-space-motion.md#space).
- The name is always Konta, in title case: never KONTA or konta (the konta.md address is the
  one lowercase exception).
