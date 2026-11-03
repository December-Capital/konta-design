# The logo

Files: [`assets/logo/`](../assets/logo), Affinity sources in
[`assets/logo/source/`](../assets/logo/source). Rules from the brand book (version 1.0, October
2026, pages 5–12 and 22).

Always start from the supplied files. Never redraw, retype or rearrange the logo.

## The mark

An open ledger with rising bars and a check: the books are kept, growing, and correct. The
check cuts through the bars so the parts never touch; those gaps stay open in every version
and at every size.

## Lockups

| Lockup | For | In this repository |
| --- | --- | --- |
| A · Horizontal, the primary logo | Site and app headers, invoices, letterheads, contracts, email signatures, partner pages | not yet |
| B · Stacked | Square and round slots, sponsor grids, posters, roll-ups, sign-in screens | not yet |
| C · Mark | Where Konta is already written nearby: watermarks, corners, loading states | `konta-mark-*.png` |
| D · Icon | App icon, browser tab, profile pictures | `konta-icon-*.png`, [`assets/favicon/`](../assets/favicon) |
| E · Wordmark | Text-only lists and credits, or under a large app icon | not yet |
| konta.md, horizontal and stacked | Ads, social posts, flyers, roll-ups, merchandise, event material | `konta-horizontal-domain-*.png`, `konta-stacked-domain-*.png` |

The horizontal lockup is the default; choose another only when the space asks for it. Use
**Konta** (not konta.md) on partner logo walls, invoices, contracts, the app, and anywhere the
logo is small.

The name is Literata SemiBold, 24pt cut, tracking −1.5%, converted to curves, in title case:
Konta, never KONTA or konta. The konta.md version is lowercase, same size and baseline, with
".md" in the accent colour so name and domain read apart.

## Construction

Everything is measured in **H, the height of the mark**. The mark is 1.351 H wide. The book's
outer corners sit at 0.756 H; the name's baseline sits on that line.

| Lockup | At H = 1000 px | Name |
| --- | --- | --- |
| A · Horizontal | 3754 × 1000 | cap height 0.5 H, top at 0.256 H, 0.375 H after the mark |
| B · Stacked | 1351 × 1526 | cap height 0.30 H, 0.22 H below the mark, centred |
| konta.md horizontal | 5011 × 1000 | name height 554, X 1726, Y 213 |
| konta.md stacked | 1971 × 1527 | the name is wider than the mark; the mark is centred over it |

## Clear space and minimum size

Clear space is the area around the logo that no text, edge or other logo may enter. It is a
rule for layouts; the files themselves are cropped tight.

- **Lockups A, B, E and konta.md:** x on every side, where x is the height of the K (0.5 H in the
  horizontal lockup).
- **Mark C:** x = ¼ H, the width of two chart bars.

| Lockup | Smallest on screen | Smallest in print |
| --- | --- | --- |
| A · Horizontal | 24px mark height (about 90px wide) | 7mm mark height (about 26mm wide) |
| B · Stacked | 40px mark height | 12mm mark height |
| C · Mark and D · Icon | 24px; 16px only as the favicon from `favicon.ico` | 6mm |
| konta.md | 30px mark height | 9mm mark height |

## Colour versions: which one on which background

Choose by the background. Full colour wherever it fits; one colour when the print process or
the background rules full colour out.

| Version | File suffix | Colours | Use on |
| --- | --- | --- | --- |
| 1 · Colour | `-color` | Prună and Bronz, name in Prună | Nisip, Hârtie, white, light photos |
| 2 · Colour on dark | `-color-on-dark` | Liliac and Aur, name in Nisip | Prună, Prună 900, Grafit, dark photos |
| 3 · Prună | `-plum` | Prună only | One-ink print, embroidery, stamps, engraving; also on Aur and Liliac |
| 4 · White | `-white` | White only | Photos, video, a partner's own brand colour |
| 5 · Black | `-black` | Black only | Black-and-white laser print, newspapers, forms |

On the site and in the app this means: `-color` in the light theme, `-color-on-dark` in the dark
theme and on the Prună brand band and footer.

## What not to do

- Don't stretch or squash it; scale with the proportions locked.
- Don't recolour it; use only the five versions.
- Don't put the dark version on light: Liliac on Nisip is 1.6:1 and can't be read.
- Don't retype the name; use the outlined name from the files.
- Don't rearrange the parts: the mark comes first, or on top.
- Don't add shadows, glows, outlines or gradients.
- Don't rotate it.
- Don't place it on busy images; use the white version on a calm, dark area.

## The icon

A square Prună tile with the mark in Liliac and Aur at 68% of the tile's width, centred. Supply
it square: app stores and social networks round it or crop it to a circle themselves. In a
circle the mark stays inside 62% of the width.

`konta-icon-1024.png`, `-512.png` and `-180.png`, and the favicons in
[`assets/favicon/`](../assets/favicon) (`favicon.ico` with 16, 32 and 48px, `favicon-64.png`,
`apple-touch-icon.png` at 180px), are made by exactly that rule from `konta-mark-color-on-dark.png`.

## Next to a partner

- The horizontal lockup, with the partner's logo to the right.
- Between them a thin rule, Prună at 35% (white at 35% on dark), exactly H tall.
- x, the height of the K, on each side of the rule. Scale the partner logo until both look
  equally heavy.

## Files

Every file is named `konta-<lockup>-<colour>`: lockups `horizontal`, `stacked`, `mark`,
`wordmark`, `horizontal-domain`, `stacked-domain`; colours `color`, `color-on-dark`, `plum`,
`white`, `black`.

| In `assets/logo/` | From |
| --- | --- |
| `konta-mark-{color,color-on-dark,plum,white,black}.png`, 2171 × 1606, transparent, cropped tight | the brand book's marks |
| `konta-horizontal-domain-{color,color-on-dark,white,black}.png`, 5000 × 1000, transparent | the owner's exports, `source/konta-horizontal-domain.af` |
| `konta-stacked-domain-{color,color-on-dark,white,black}.png`, 3000 × 3000, transparent, with margin | the owner's exports, `source/konta-stacked-domain.af` |
| `konta-icon-{1024,512,180}.png` | made here by the icon rule |
| `source/konta-logo-initial-vector.af` | the first vector drawing of the mark |
| `source/konta-logo.af` | the earlier logo, kept as it was |

> **Pending:** the two `-domain-color-on-dark` exports set "konta" in Liliac; the brand book
> (pages 8 and 10) sets the name in Nisip on dark, with ".md" in Aur. The files are kept as
> exported until the owner says which is right.

The brand book also lists SVG and PDF files (for screens and print), the lockups A, B and E with
the name "Konta", a `-plum` konta.md version and `-small` PNGs for email. They are exported from
the Affinity sources and are not here yet.
