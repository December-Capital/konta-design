# Shape, space and motion

Sources: [`tokens/shape.json`](../tokens/shape.json), [`tokens/layout.json`](../tokens/layout.json),
[`tokens/motion.json`](../tokens/motion.json).

## Corners

One corner so far, `--radius-m`, 6px: panels (the register, the tools' result tables and the
notes under them, the contact form card), buttons, fields and the header's chips. A table is
rounded like a panel only when its cells keep their own borders and its corner cells are
rounded as well, so a row with its own ground follows the corner.

## Surfaces

Surfaces are told apart by a step in tone, not by borders or shadows: a panel is one step
lighter than its band, neighbouring bands differ (see [color.md](color.md)). The top bar and
the tools' tabs are frosted glass over the page, the one place a surface is see-through.

## Motion

- **Rolling digits** (`--motion-roll-duration` 650ms, `--motion-roll-easing`): when a tool's
  result changes, each digit turns on a wheel of 0 to 9 to the new one, the space between
  thousands kept from the first frame, then the cell holds plain text. Screen readers get the
  new text at once.
- **The header fold** (`--motion-fold-duration` 250ms, ease): the bar's rows of sections fold
  away while the reader scrolls down and come back on the way up; the tools' tabs rise with
  them.
- Readers who ask for reduced motion get every change at once.

## To be written

- **Space:** content width, side margins on phones, section spacing, the spacing steps used
  inside components.
