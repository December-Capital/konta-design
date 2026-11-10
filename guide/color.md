# Colour

Source: [`tokens/color.json`](../tokens/color.json) for the palette,
[`tokens/themes/`](../tokens/themes) for the roles. The palette board is
[`palette/konta-paleta.png`](palette/konta-paleta.png), rendered from
[`palette/paleta.html`](palette/paleta.html). The brand book (1.1, November 2026) shows the
same colours for print and partners.

## Brand colours

Read off the logo.

| Token | Hex | From |
| --- | --- | --- |
| `--brand-sand` | `#ECE8E1` | the logo's light field |
| `--brand-plum` | `#3D2C4B` | the logo mark on light |
| `--brand-bronze` | `#A07F54` | the logo bars on light |
| `--brand-lavender` | `#C9B4DD` | the logo mark on dark |
| `--brand-gold` | `#C9A46B` | the logo bars on dark |
| `--brand-graphite` | `#16161A` | text on Liliac in the dark theme; the dark ground until 2026-11-10 |

## The palette

- **Prună** (`--plum50` to `--plum950`): 300 is Liliac, 800 is Prună, 900 is Prună noapte.
- **Bronz and Aur** (`--gold50` to `--gold950`): 400 is Aur, 600 is Bronz, 800 is Bronz text.
- **Nisip** (`--sand50` to `--sand300`): Hârtie, Nisip, Nisip adânc, and 300 for secondary
  text on dark.
- **Mauve** (`--mauve1` to `--mauve12`): [Radix Mauve](https://www.radix-ui.com/colors), dark.
  The dark theme is built on it since 2026-11-10. The owner's tuned dark shades were within
  ΔE 2 of it, so the published scale was adopted, each step in the role Radix gives it.
- **Salvie** (`--sage50`, `300`, `600`, `900`) and **Cărămidă** (`--brick50`, `300`, `600`,
  `900`): the state colours.
- **Cerneală** (`--ink`) and **Alb** (`--white`).

## The roles

The site's roles, as konta-www serves them. The app has no roles of its own yet.

| Role | Light | Dark |
| --- | --- | --- |
| `bg`, `hero` (page, plain bands) | Nisip | Mauve 3 |
| `bg-quiet` (quiet bands) | Hârtie | Mauve 2 |
| `bg-raised`, `bg-panel`, `results` (panels) | Hârtie, Alb, Nisip | Mauve 4 |
| `bg-sunken` (rows inside a panel) | Nisip adânc | Mauve 5 |
| `bar` (top bar and the tools' tabs) | Hârtie | Mauve 6 |
| `bar-line`, `bar-hover` | Nisip adânc | Mauve 7 |
| `rule`, `rule-strong` | Nisip adânc, Nisip 300 | Mauve 6, Mauve 10 |
| `text`, `text-2`, `text-3` | Cerneală, Prună 700, Prună 600 | Nisip, Nisip 300, Mauve 11 |
| `primary`, `on-primary` | Prună, Alb | Liliac, Grafit |
| `accent-text`, `accent-rule` | Bronz text, Bronz | Aur, Gold 700 |
| `field`, `form-card` | Alb on Nisip | Mauve 7 on Mauve 4 |
| `notice` (the "În dezvoltare" strip) | Prună, text Prună 200 | Mauve 3, text Nisip 300 |
| `offer` (brand band) | Prună | Mauve 4 |
| `footer` | Prună 900 | Mauve 3 |
| `ok`, `bad` | Salvie 600, Cărămidă 600 | Salvie 300, Cărămidă 300 |
| `ok-bg`, `bad-bg`, `plan-bg`, `warn-bg` | the 50 or 100 step of each | Salvie 900, Cărămidă 900, Mauve 5, Gold 950 |

## Rules

- Mostly paper: Nisip or Hârtie for most of a light page, Prună where it matters, Bronz and
  Aur in small doses. On dark, the depth comes from Mauve 2 to 6, and only Liliac and Aur
  carry colour.
- A panel is one step lighter than the band it sits on, and neighbouring bands differ. On dark,
  quiet bands are the darker step (Mauve 2), so the register, the results tables, the contact
  form and the cards stand out at Mauve 4.
- The top bar and the tools' tabs are one surface: the same colour and frosted glass, the
  bar's thin rule between them and another under the tabs.
- On dark, Liliac and Aur text need Mauve 6 or darker under them, Salvie and Cărămidă Mauve 5
  or darker. Mauve 7 carries only Nisip text (fields, hover).
- When two amounts are compared, the smaller is Salvie and the larger Cărămidă, in each
  theme's own shade. The verdict above them uses the same colour for its amounts. A word that
  is good news, like "Gratis", may be Salvie too.
- Liliac never sits on Nisip (1.6:1); Bronz on Nisip only for graphics or text above 24px.

## Contrast

`npm run check` tests every role pair in both themes against WCAG AA (4.5:1 for text, 3:1 for
large text). Key pairs:

| Pair | Ratio |
| --- | --- |
| Prună on Nisip, Nisip on Prună | 10.4 |
| Aur on Prună | 5.4 |
| Liliac on Prună | 6.7 |
| Nisip on Mauve 3 | 13.0 |
| Liliac on Mauve 3 | 8.3 |
| Aur on Mauve 3 | 6.8 |
| Nisip on Mauve 7 (fields) | 7.5 |
| Salvie 300 on Mauve 5 (dark totals row) | 4.6 |
| Bronz text on Nisip | 4.9 |

## Open

- On light, Salvie 600 on Nisip adânc is 4.33:1: the IT Park total in green on its sunken row
  falls just short of 4.5:1. The pair is left out of `npm run check` until it is fixed, by a
  darker green for that row or a lighter row.
- The footer's text on konta.md is `#E7EEEF`; the tokens give Nisip (`#ECE8E1`).
- `accent-rule` on dark is `#96794F` on konta.md; the nearest palette step is Gold 700
  (`#8A6A42`).
