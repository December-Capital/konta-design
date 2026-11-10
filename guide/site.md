# konta.md (the site)

Repository: `konta-www`. The colours of every block below are in [color.md](color.md).

## Page structure

From the top, as konta.md has it since 2026-11-10:

1. **The "În dezvoltare" strip** (`notice`), above everything else. It scrolls away; the top
   bar stays.
2. **The top bar** (`bar`), sticky, frosted glass. Its button is "Încearcă Demo" ("Demo" on
   phones under 360px). Where one row is too narrow, the sections take rows of their own and
   fold away while the reader scrolls down.
3. **On the tools' pages, the tabs** (Salariu, TVA, Concediu de odihnă, Concediu medical, Zile
   lucrătoare, IT Park): the bar's second row, the same colour and glass, its thin rule
   (`bar-line`) between the two. They stay under the bar and rise with it when it folds.
4. **The first panel** (`hero`): the page's title and lead.
5. **Bands**, alternating plain (`bg`) and quiet (`bg-quiet`). Panels in them are one step
   lighter than the band.
6. **The footer** (`footer`).

## Components

- **Panels:** the register on the home page, the tools' result tables, the contact form card,
  the calendar's feed card, the home cards. All `bg-raised` or `bg-panel` (`results` for the
  tables), with the 6px corner. A result table rounds its corner cells too, so its sunken
  totals row follows the corner.
- **Notes under a result** ("În IT Park se plătește minimul…"): sunken, a coloured rule on the
  left, the 6px corner, like the verdict above the table.
- **Results that change:** each digit rolls on its own wheel to the new figure (see
  [shape-space-motion.md](shape-space-motion.md)); the cell then holds plain text again, so it
  can be copied.
- **Comparisons** (IT Park against the general regime): the verdict breaks before the yearly
  amount, its amounts in `ok` when the park costs less and `bad` when it costs more; in the
  totals row the smaller is `ok` and the larger `bad`.
- **The founding offer:** a brand band (`offer`) of its own, its title in Aur, its terms in
  Nisip 200, "șase luni Gratuit" in `ok`.
- **Forms:** fields clearly lighter than their card on dark (Mauve 7 on Mauve 4), as they are
  on light (Alb on Nisip).

## To be written

- **Pages:** the list of pages and the reference mockup for each.
- **Content rules:** what copy and numbers must be true, how unfinished features are
  described.
