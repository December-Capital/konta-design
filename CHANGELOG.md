# Changelog

What changed in each release of `konta-design`, newest first. Products pin a release tag;
read the entries between their pinned version and the new one before upgrading.

## 0.2.0 (unreleased)

The brand of 2026-10-23: the owner's logo files, palette, Literata and brand book, with the
redesign's `DESIGN.md` for the roles, corners and motion.

- **Palette.** Five scales from the brand book: Prună (`--plum50`…`--plum950`), Bronz și Aur
  (`--bronze*`), Nisip și Grafit (`--neutral0`…`--neutral950`), Salvie and Cărămidă for states,
  and Cerneală (`--ink`). The six `--brand-*` colours keep their values and now point at their
  step.
- **Roles, light and dark,** for the site (38 roles) and the app's overrides (9), as in
  `DESIGN.md`. The dark theme is its own design: Grafit 600–800, colour only in Liliac and Aur.
  All 140 text-on-surface pairs pass WCAG AA; the check now also covers the app's side menu
  and row hover.
- **Type.** Literata for headings, always at the 24pt optical size, and IBM Plex Sans for text,
  with the brand book's web sizes (`--type-*`). The web fonts and the print cut, with their
  SIL Open Font Licences, in `assets/fonts/`.
- **Shape and motion.** Radii 4, 8 and 10px and pill buttons; one entrance, 800ms, 22px rise.
  `--measure: 65ch` for body text.
- **Logo.** The mark in five colour versions and the konta.md lockups (horizontal and stacked)
  in four, named `konta-<lockup>-<colour>` as the brand book asks, with their Affinity sources.
  The earlier drawing's PNGs (`konta-mark.png`, `konta-mark-dark.png`, `konta-icon-*.png`,
  `konta-app-icon.png`, `konta-mark-on-*.png`) are removed; konta.md keeps its own copies.
- **Icon and favicons** remade by the brand book's rule: the mark at 68% on a Prună tile
  (`konta-icon-1024/512/180.png`, `favicon.ico`, `favicon-64.png`, `apple-touch-icon.png`).
- **Guide.** `color.md`, `typography.md`, `shape-space-motion.md` written, `logo.md` added, and
  the palette board in `guide/palette/` with screenshots in both themes.

Not in this release, waiting on the owner: the text typeface (`DESIGN.md` says Onest), the
name's colour in the konta.md on-dark files, SVG and PDF logo files, the plain "Konta" lockups,
new social images, spacing, and the app's type sizes.

## 0.1.0 (unreleased)

The structure, with no design decided yet.

- Token sources in W3C Design Tokens format under `tokens/`: the six brand colours read off the
  logo, and empty groups for the rest of the palette, type, shape, layout, motion and the
  site and app roles for light and dark.
- Build (`npm run build`) to CSS, TypeScript and JSON in `build/`, and `npm run check` to fail
  on a stale build or a role pair below WCAG AA.
- `tools/compare-css.mjs` to list what would change in a product before it adopts a release.
- Brand assets: the logo with its Affinity source, favicons, social images, as used on
  konta.md today.
- The design guide's chapters as templates, and the process for any visual change.
