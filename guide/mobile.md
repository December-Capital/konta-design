# iOS and Android

Neither app exists yet. This chapter fixes how the tokens will reach them, so the first
native screen uses the same values as the site and the web app.

## What carries over

- **Colours:** the palette and the roles for light and dark. Phones follow the system theme,
  so the dark roles are the ones used under the system's dark setting.
- **Type:** the same typefaces, bundled in the app. Sizes follow the platform's text styles
  (Dynamic Type on iOS, `sp` on Android) rather than the web sizes.
- **Corners and spacing:** the same steps, as points (iOS) or dp (Android).
- **Rules:** contrast, state shown in words as well as colour.

What does not carry over: web layout widths, section spacing, hover effects. Native
components follow the platform; Konta's look lives in their colours, type and patterns.

## How the tokens get there

When the mobile work starts, add two outputs to `tools/build.mjs`:

| Platform | Output | Shape |
| --- | --- | --- |
| iOS | `build/ios/KontaColors.xcassets`, `build/ios/KontaTokens.swift` | One colour set per role with Any and Dark appearances, so a role follows the system theme |
| Android | `build/android/values/colors.xml`, `values-night/colors.xml`, `KontaTheme.kt` | The roles as resources for both modes, and a Compose colour scheme built from them |

Each app pins a released version of `konta-design` (a Swift Package from a git tag, a Gradle
dependency, or a copied folder with the version in its name) and upgrades on purpose, like
the web products.

When the roles are defined, add a table here mapping each Konta role to its SwiftUI and
Material 3 counterpart (background, surface, primary, error, outline...).
