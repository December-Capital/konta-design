# Konta design guide

How Konta looks and why, for anyone building or changing a Konta surface: the site
(`konta-www`), the web app (`konta`), and later the iOS and Android apps.

The values live in [`../tokens`](../tokens); this guide explains how to use them. When the two
disagree, the tokens are right and the guide is out of date.

> **Status:** the structure is in place, the content is not. Each chapter lists what it will
> hold. Chapters are filled as the palette and each surface are decided, following
> [redesign-process.md](redesign-process.md).

## Chapters

| Chapter | Will cover | State |
| --- | --- | --- |
| [color.md](color.md) | The palette, the role of each colour in each theme, contrast rules | Brand colours only |
| [typography.md](typography.md) | Typefaces, sizes, figures, Romanian and Cyrillic | Empty |
| [shape-space-motion.md](shape-space-motion.md) | Corners, spacing, surfaces, movement | Empty |
| [site.md](site.md) | konta.md: page structure and components | Empty |
| [app.md](app.md) | app.konta.md: the working screens | Empty |
| [mobile.md](mobile.md) | How the tokens reach iOS and Android | Approach written |
| [redesign-process.md](redesign-process.md) | How any visual change is made and released | Written |

## Fixed already

- **Tokens are the source of truth.** Products use role tokens, never raw colour values. A new
  colour is a change to `tokens/`, reviewed like any other.
- **Nothing leaves the domain.** Fonts, icons and scripts are served from Konta's own
  servers, as konta.md promises today. Products copy released files; they never load them
  from this repository or a CDN at runtime.
- **Contrast is checked by the build.** Every text-on-surface role pair must pass WCAG AA in
  both themes; `npm run check` fails otherwise.
