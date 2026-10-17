# How to change the design

Any change to how Konta looks goes through this repository first, then reaches each product
when that product chooses to upgrade. Nothing here changes konta.md or the app on its own.

## Sizes of change

| Change | Example | What it needs |
| --- | --- | --- |
| **Fix** | A token has a typo; a contrast pair fails | A pull request changing `tokens/`, a patch version |
| **Refinement** | Tighter spacing, a new status colour, a darker footer | Tokens and guide in one pull request, screenshots before and after, a minor version |
| **Redesign** | A new look for the site or the app | A mockup set in `mockups/`, then tokens and guide, a major version |

## Steps for a redesign

1. **Branch.** `redesign/<yyyy-mm>-<name>`, e.g. `redesign/2026-11-site`.
2. **Mock it up.** Static pages in `mockups/<yyyy-mm>-<name>/`, with real copy and no
   connection to anything. Each set has a README: what it covers, what is sample data, and
   how to open it. Mockups are a frozen record: once merged, they are not edited to match
   later decisions.
3. **Change the tokens.** Edit `tokens/`, never `build/`. New colours go on a palette scale
   first, then into a role. Run:

   ```bash
   npm run build
   ```

   ```bash
   npm run check
   ```

   `check` fails if `build/` is stale or any role pair drops below WCAG AA.
4. **Compare with what is live.** Before a product adopts the change, list exactly what would
   move:

   ```bash
   node tools/compare-css.mjs --a build/css/konta-tokens.css --b ../konta-www/assets/site.css
   ```

5. **Update the guide.** The chapter for each surface touched, the palette board in
   `guide/palette/` when colours changed, and `CHANGELOG.md`.
6. **Review and merge.** Screenshots of every affected page, light and dark, at desktop and
   phone width, go in the pull request.
7. **Release.** Bump `version` in `package.json` and tag it (`v1.1.0`). The tag is what
   products pin to.
8. **Adopt, one product at a time.** Each product upgrades in its own pull request, in its
   own repository, on its own schedule. See
   [`../docs/DEVELOPMENT.md`](../docs/DEVELOPMENT.md#using-the-tokens-in-a-product).

## Checklist for any visual change

- [ ] Every new colour is on a palette scale and used through a role
- [ ] Light and dark were both designed, not inverted
- [ ] `npm run check` passes
- [ ] Phone width: no sideways scroll, nothing below 16px margin
- [ ] Keyboard focus is visible on every control
- [ ] Status shown in words as well as colour
- [ ] Fonts and assets still served from Konta's own domain
- [ ] `CHANGELOG.md` says what changed and why
