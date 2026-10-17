# Changelog

What changed in each release of `konta-design`, newest first. Products pin a release tag;
read the entries between their pinned version and the new one before upgrading.

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
