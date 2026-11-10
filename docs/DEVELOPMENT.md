# konta-design, for developers

The technical notes behind the README: how the tokens are organised, how the build works, and
how a product starts using them.

## What is here

| Path | Contents |
| --- | --- |
| `tokens/` | The source. W3C Design Tokens (DTCG) JSON: `$value`, `$type`, `$description` |
| `tokens/color.json` | The palette: the brand colours, the Prună, Bronz and Aur, Nisip and Radix Mauve scales, Salvie and Cărămidă |
| `tokens/typography.json`, `shape.json`, `layout.json`, `motion.json` | Type, corners, layout and spacing, motion. One corner and two motions decided; the rest empty until decided |
| `tokens/themes/site-light.json`, `site-dark.json` | The roles for konta.md, each pointing at a palette token, as the site serves them |
| `tokens/themes/app-light.json`, `app-dark.json` | The app's overrides on top of the site roles. Empty until decided |
| `build/` | Generated, committed so products can copy files without Node. Never edit by hand |
| `build/css/konta-tokens.css` | Palette, type, shape, layout, motion, then the site roles for light and dark |
| `build/css/konta-tokens-app.css` | The app's role overrides; load after `konta-tokens.css` |
| `build/json/tokens.json` | Every value resolved to plain hex or size, for scripts and future native builds |
| `build/ts/tokens.ts` | The same, typed, for the React app |
| `tools/build.mjs` | Builds `build/` from `tokens/`; `--check` fails when `build/` is stale |
| `tools/check-contrast.mjs` | WCAG AA check of every text-on-surface role pair, both themes, both surfaces |
| `tools/compare-css.mjs` | Lists every custom property that differs between two sets of CSS files, per theme |
| `assets/` | Logos (with the Affinity source), favicons, social images |
| `guide/` | The design guide and the palette board |
| `mockups/` | Dated design explorations, one folder per round, frozen once merged |

## Commands

```bash
npm ci
```

```bash
npm run build
```

```bash
npm run check
```

Node 22 or later. The only dependency is Style Dictionary, pinned to an exact version.

## How names are made

Style Dictionary resolves the tokens; `tools/build.mjs` names and writes them, because one CSS
file carries the palette, the light roles and the dark roles twice (system preference and
explicit `data-theme`), which no built-in format does.

| Token path | CSS name | Rule |
| --- | --- | --- |
| `color.brand.sand` | `--brand-sand` | colours drop `color` |
| `color.plum.800` | `--plum800` | a numeric step is glued to its scale |
| `role.bg-raised` | `--bg-raised` | roles drop `role` |
| `font.serif` | `--serif` | fonts drop `font` |
| `shape.radius.l` | `--radius-l` | shape drops `shape` |
| `layout.gutter` | `--gutter` | layout drops `layout` |
| `type.h1.size` | `--type-h1-size` | everything else keeps its full path |

A role that points at a palette token is written as `var(--brand-sand)`, so a colour value
exists in exactly one place. A role file looks like this:

```json
{
  "role": {
    "$type": "color",
    "bg": { "$value": "{color.brand.sand}", "$description": "Page ground" },
    "text": { "$value": "{color.brand.plum}" }
  }
}
```

Every role name must exist in both the light and the dark file of the same surface.
`tools/check-contrast.mjs` lists the pairs it tests (`text` on `bg`, `on-primary` on
`primary`...); when roles are defined, keep that list in step with the role names.

## Using the tokens in a product

Products never load anything from this repository at runtime. Each one copies a released
version into itself, so konta.md keeps its promise that the browser talks to no one but
konta.md.

### konta-www

1. Copy `build/css/konta-tokens.css` from a tagged release into `assets/`, with the version in a
   comment at the top, and link it before `site.css`.
2. Map the site's own variables to the roles. konta-www names its variables differently today
   (`--surface`, `--ink-2`, `--btn-bg`...), so the first adoption renames them; keep the
   mapping in that pull request.
3. Before publishing, see what changes:

   ```bash
   node tools/compare-css.mjs --a build/css/konta-tokens.css --b ../konta-www/assets/site.css
   ```

4. Self-host the chosen typefaces the same way `tools/fetch-fonts.py` in konta-www fetches
   today's fonts.

### konta (web app)

Pin a tag in `web/package.json`:

```json
"konta-design": "github:December-Capital/konta-design#v0.1.0"
```

Import `konta-design/build/css/konta-tokens.css` and `konta-tokens-app.css` once at the root,
and `konta-design/build/ts/tokens.ts` where code needs a value (charts, canvas). If the
repository stays private, use a copied folder with the version in its name instead, so CI
does not need extra credentials.

### iOS and Android

See [`guide/mobile.md`](../guide/mobile.md). The outputs are added to `tools/build.mjs` when the
first native screen is built.

## Releasing

1. Change `tokens/`, run `npm run build` and `npm run check`.
2. Update `CHANGELOG.md` and the guide.
3. Bump `version` in `package.json` (patch: fix, minor: refinement, major: redesign).
4. Tag the commit `vX.Y.Z` and push the tag. Products pin the tag.
