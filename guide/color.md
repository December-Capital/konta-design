# Colour

Source: [`tokens/color.json`](../tokens/color.json) for the palette,
[`tokens/themes/`](../tokens/themes) for the roles. Taken from the brand book (version 1.0,
October 2026, pages 13–17) and the redesign's `DESIGN.md` of 2026-10-23. The board in
[`palette/`](palette) shows all of it, in both themes.

Konta is calm. Most of any layout is paper (Nisip or Hârtie), Prună marks what matters, and
Bronz and Aur appear in small doses.

## Brand colours

Six colours, read from the logo. Each one is a step on a scale below; the `--brand-*` names
point at that step.

| Token | Name | Hex | Step | Role |
| --- | --- | --- | --- | --- |
| `--brand-sand` | Nisip | `#ECE8E1` | `--neutral100` | The light background: the paper of the ledger |
| `--brand-plum` | Prună | `#3D2C4B` | `--plum800` | The main colour on light: buttons, headings, brand bands, the footer |
| `--brand-bronze` | Bronz | `#A07F54` | `--bronze600` | The accent on light grounds and the chart bars |
| `--brand-lavender` | Liliac | `#C9B4DD` | `--plum300` | The main colour on dark grounds |
| `--brand-gold` | Aur | `#C9A46B` | `--bronze400` | The accent on Prună and Grafit; large figures |
| `--brand-graphite` | Grafit | `#16161A` | `--neutral900` | The base of the dark scale, and the text on Liliac |

Print: give the printer the hex values with a printed sample and ask for a proof. Prună prints
muddy from a straight RGB-to-CMYK conversion, so have it matched, or a Pantone chosen, against
the sample.

## Scales

Steps from 50 (lightest) to 950 (darkest). Build tints and shades from these steps, never by
adding transparency.

| Step | Prună `--plum*` | Bronz și Aur `--bronze*` | Nisip și Grafit `--neutral*` |
| --- | --- | --- | --- |
| 0 | | | `#FFFFFF` Alb |
| 50 | `#F4F0F7` | `#F8F2E8` | `#F7F5F1` Hârtie |
| 100 | `#E7DEEF` | `#F0E4CF` | `#ECE8E1` **Nisip** |
| 200 | `#D8C9E6` | `#E3CDA6` | `#DED8CE` Nisip adânc |
| 300 | `#C9B4DD` **Liliac** | `#D6B886` | `#CFC7BA` |
| 400 | `#A58DBD` | `#C9A46B` **Aur** | `#A5A3AD` |
| 500 | `#7E6797` | `#B39060` | `#79777F` |
| 600 | `#5E4874` | `#A07F54` **Bronz** | `#3C3B44` |
| 700 | `#4E3A60` | `#8A6A42` | `#2B2B32` |
| 800 | `#3D2C4B` **Prună** | `#7A5E3A` Bronz text | `#1D1D22` Grafit 2 |
| 900 | `#2A2033` Prună noapte | `#5E4830` | `#16161A` **Grafit** |
| 950 | `#1C1522` | `#3F3020` | `#121215` |

Outside the scales: Cerneală `--ink` `#241B2E`, the text on light grounds, and two state
families, Salvie (done) and Cărămidă (late, error), each with four steps:

| Step | Salvie `--sage*` | Cărămidă `--brick*` |
| --- | --- | --- |
| 50 | `#E4ECE5` | `#F3E3E0` |
| 300 | `#77A385` | `#CD8880` |
| 600 | `#3F6B4D` | `#8F3F38` |
| 900 | `#1E2B22` | `#2E1D1B` |

## Roles

Pages use roles, never a scale step or a hex value. Light and dark are designed separately:
**Prună is a light-theme colour.** In the dark theme depth comes from the lighter Grafit steps
(800 ground, 700 bar, raised surfaces and footer, 600 strip, band and controls), and only Liliac
(action) and Aur (accent) carry colour.

### Site (konta.md)

| Role | Light | Dark | For |
| --- | --- | --- | --- |
| `--notice`, `--on-notice` | Prună 800, Prună 200 | Grafit 600, Nisip 300 | The „În dezvoltare” strip |
| `--bar`, `--bar-line` | Hârtie, Nisip 200 | Grafit 700, Grafit 600 | Top bar, one step lighter than the first panel |
| `--hero` | Nisip | Grafit 800 | First panel |
| `--bg` | Nisip | Grafit 800 | Page ground |
| `--bg-raised` | Hârtie | Grafit 700 | Raised surface |
| `--bg-sunken` | Nisip 200 | Grafit 600 | Controls, sunken surfaces |
| `--line` | Nisip 300 | Grafit 600 | Table rules |
| `--text`, `--text-2`, `--text-3` | Cerneală, Prună 700, Prună 600 | Nisip, Nisip 300, Nisip 400 | Text, secondary, tertiary |
| `--primary`, `--primary-hover`, `--on-primary` | Prună 800, Prună 700, Nisip | Liliac, Prună 200, Grafit 900 | Primary action |
| `--accent` | Bronz | Aur | Accent graphics: bars, seals, the focus ring |
| `--accent-text` | Bronz 800 | Aur | Small accent text |
| `--on-gold` | Prună 900 | Grafit 900 | Text on an Aur surface |
| `--field`, `--on-field`, `--on-field-2`, `--field-accent`, `--on-field-btn` | Prună 800, Nisip, Prună 200, Aur, Prună 800 | Grafit 600, Nisip, Nisip 300, Aur, Grafit 900 | The brand band, once per page |
| `--footer`, `--on-footer`, `--on-footer-2`, `--footer-head`, `--footer-line` | Prună 900, Prună 100, Prună 200, Aur, Prună 700 | Grafit 700, Nisip, Nisip 300, Aur, Grafit 600 | Footer: ground, links, text, headings, rules |
| `--tint` | Prună 50 | Grafit 600 | A faint highlight field |
| `--ok`, `--ok-bg` | Salvie 600 on Salvie 50 | Salvie 300 on Salvie 900 | Done |
| `--accent-text`, `--warn-bg` | Bronz 800 on Bronz 100 | Aur on Bronz 950 | In review |
| `--plan`, `--plan-bg` | Prună 600 on Prună 100 | Nisip 300 on Grafit 600 | Planned |
| `--bad`, `--bad-bg` | Cărămidă 600 on Cărămidă 50 | Cărămidă 300 on Cărămidă 900 | Late, error |
| `--selection`, `--on-selection` | Liliac, Prună 900 | Liliac, Grafit 900 | Selected text |

### App (app.konta.md)

`konta-tokens-app.css` overrides these on top of the site roles. The app is calmer: white
surfaces on Hârtie in the light theme, the same Grafit steps in the dark.

| Role | Light | Dark | For |
| --- | --- | --- | --- |
| `--bg` | Hârtie | Grafit 800 | Page ground |
| `--bar`, `--bg-raised` | Alb | Grafit 700 | Top bar, panels |
| `--bg-sunken` | Nisip | Grafit 600 | Controls, search |
| `--line` | Nisip 200 | Grafit 600 | Rules |
| `--rail`, `--rail-hover`, `--rail-raised` | Nisip, Nisip 200, Alb | Grafit 700, Grafit 600, Grafit 600 | Side menu, its hover, the company switcher |
| `--row-hover` | Hârtie | Grafit 600 | Table row, hover |

## Rules

- **Proportion.** On light, about 60 parts paper, 25 Prună, 10 text, 5 Bronz. On dark, Grafit
  600–800 together 65, Nisip text 20, Liliac 10, Aur 5.
- **One accent per view.** The Bronz or Aur detail should be the only one.
- **Large figures on a Prună band go in Aur.**
- **Surfaces separate by a step in tone, not by borders.** Tables keep thin rules.
- **Dark grounds stay between Grafit 600 and 800.** On Grafit 500 and lighter, Liliac and Aur
  text fall below 4.5:1. Nothing darker than 800 is a background.
- **Nisip 400 (`--text-3` in the dark) needs Grafit 700 or 800 under it:** 5.6:1 there, 4.4:1 on
  Grafit 600.
- **Grafit 900 is the text colour on Liliac.**
- **Never Liliac as text on Nisip** (1.6:1). Never the dark logo on a light ground.
- **Bronz on Nisip only for graphics or text above 24px** (3.0:1). Small bronze text is Bronz 800.
- **Status in words as well as colour.** Every state chip carries its label.

## Contrast

WCAG 2.1: normal text needs 4.5:1 (AA); text above 24px, or 19px bold, needs 3:1.
`npm run check` tests every text-on-surface role pair, site and app, light and dark.

| Pair | Ratio | Grade |
| --- | --- | --- |
| Prună on Nisip, Nisip on Prună | 10.4:1 | AAA |
| Aur on Prună, Prună on Aur | 5.4:1 | AA |
| Liliac on Prună, Prună on Liliac | 6.7:1 | AA |
| Nisip on Grafit | 14.8:1 | AAA |
| Liliac on Grafit | 9.5:1 | AAA |
| Aur on Grafit | 7.7:1 | AAA |
| Bronz 800 on Nisip | 4.9:1 | AA |
| Bronz on Nisip | 3.0:1 | large text and graphics only |
| Liliac on Nisip | 1.6:1 | never |

## The palette board

[`palette/index.html`](palette/index.html) draws the scales, the roles and the state chips from
`build/css/konta-tokens.css`, so it cannot drift from the tokens. Its images,
[`palette/palette-light.png`](palette/palette-light.png) and
[`palette/palette-dark.png`](palette/palette-dark.png), are screenshots of it in each theme;
retake them when colours change.
