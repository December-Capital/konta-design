# Changelog

What changed in each release of `konta-design`, newest first. Products pin a release tag;
read the entries between their pinned version and the new one before upgrading.

## 0.2.0 (unreleased)

The palette and the site's roles, as konta.md serves them since 2026-11-10.

- The palette: the Prună, Bronz and Aur, and Nisip scales from the brand book (1.1), Cerneală
  and Alb, Salvie and Cărămidă for states, and Radix Mauve (`--mauve1` to `--mauve12`), the
  neutral the dark theme is now built on. `--brand-graphite` stays as the text on Liliac.
- The site's roles for light and dark (39 each): page, quiet bands (on dark the darker step,
  so panels stand out), panels and result tables, sunken rows, the top bar with the tools'
  tabs and its rule, text levels, primary action, fields and form card, the notice strip, the
  brand band, the footer, and the states. The app has no roles of its own yet.
- One corner, `--radius-m` (6px), for panels, result tables and their notes, buttons, fields.
- Motion: the tools' rolling digits (650ms, a spring's settle) and the header fold (250ms).
- `npm run check` tests 18 more pairs: quiet bands, panels, results in green and red, the
  bar's hover, the strip's flag, the brand band. One known gap on light (Salvie 600 on Nisip
  adânc, 4.33:1) is listed in `guide/color.md` and left out until fixed.
- The guide: colour (palette, roles, rules, contrast), the site's page structure and
  components, shape, surfaces and motion. The palette board in `guide/palette/`.

Differences from konta.md that remain: the footer text (`#E7EEEF` on the site, Nisip here) and
the dark accent rule (`#96794F` on the site, Gold 700 here).

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
