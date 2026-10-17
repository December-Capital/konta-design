# Colour

Source: [`tokens/color.json`](../tokens/color.json) for the palette,
[`tokens/themes/`](../tokens/themes) for the roles.

## Brand colours

Read off the logo. These are the only colours fixed so far.

| Token | Hex | From |
| --- | --- | --- |
| `--brand-sand` | `#ECE8E1` | the logo's light field |
| `--brand-plum` | `#3D2C4B` | the logo mark on light |
| `--brand-bronze` | `#A07F54` | the logo bars on light |
| `--brand-lavender` | `#C9B4DD` | the logo mark on dark |
| `--brand-gold` | `#C9A46B` | the logo bars on dark |
| `--brand-graphite` | `#16161A` | the dark ground of konta.md |

## To be written

- **The palette:** the scales built from the brand colours (tints and shades of each), the
  neutral line for text and surfaces, and the state colours (done, in review, planned, late).
- **The roles:** for each theme, which palette step is the page ground, the top bar, raised
  and sunken surfaces, text levels, the primary action, accents, brand bands, the footer, and
  each state. One table, light and dark side by side.
- **Rules:** proportions, which colours never sit on which, how light and dark differ in
  intent (not just inverted).
- **Contrast:** the key pairs with their ratios. `npm run check` enforces them.
- **The palette board:** an image of the final palette, rendered from an HTML page kept in
  `guide/palette/`.
