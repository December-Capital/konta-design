# Shape, space and motion

Sources: [`tokens/shape.json`](../tokens/shape.json), [`tokens/layout.json`](../tokens/layout.json),
[`tokens/motion.json`](../tokens/motion.json). Taken from the redesign's `DESIGN.md` of
2026-10-23, section "Shapes and motion".

## Corners

| Token | Value | For |
| --- | --- | --- |
| `--radius-s` | 4px | Small boxes; rows inside a group |
| `--radius-m` | 8px | Controls |
| `--radius-l` | 10px | Panels |
| `--radius-pill` | 999px | Buttons |

Rows inside a group take `--radius-s`, and the group's outer corners take the group's radius,
so the group reads as one panel.

## Surfaces

Surfaces separate by a step in tone, not by borders: Hârtie on Nisip, Grafit 700 on Grafit 800.
Tables keep thin rules (`--line`). The logo never gets a shadow, glow or outline.

> **Not decided:** whether, and where, panels carry a shadow.

## Space

Body text runs the full width of its column, to the same right edge as the headings, panels and
tables around it: `--measure: 100%`. No paragraph, lead, note or list stops partway across the
page at a character count, and sentences run on rather than starting a new line each. Where a
page has two columns side by side (text beside a form or a table), the text fills its own
column. The owner set this on 2026-11-03, after seeing text end in the middle of konta.md; it
replaces the brand book's 65 characters (page 19).

> **Not decided:** content width, side margins on phones, section spacing and the spacing steps
> inside components. The `space` and `layout` groups stay open until they are.

## Motion

One entrance: content below the first screen rises and fades in once, as it scrolls into view.

| Token | Value |
| --- | --- |
| `--motion-entrance-duration` | 800ms |
| `--motion-entrance-easing` | `cubic-bezier(0.16, 1, 0.3, 1)`, an ease-out |
| `--motion-entrance-distance` | 22px, how far it rises |

- Off under `prefers-reduced-motion`: the content is simply there.
- Off for screenshots and print (the mockups use `?static` in the URL).
- Nothing else moves on its own.

> **Not decided:** hover and other transition timings.
