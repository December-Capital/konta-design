// Checks WCAG contrast for every text-on-surface pair the roles promise, in both themes and on
// both surfaces. Reads build/json/tokens.json, so run the build first.
//
//   node tools/check-contrast.mjs
//
// Text needs 4.5:1. Pairs marked `large` (figures, graphics, display type) need 3:1.

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(join(root, 'build/json/tokens.json'), 'utf8'));

const PAIRS = [
  ['text', 'bg'], ['text-2', 'bg'], ['text-3', 'bg'],
  ['text', 'bg-raised'], ['text-2', 'bg-raised'], ['text-3', 'bg-raised'],
  ['text', 'bg-sunken'], ['text-2', 'bg-sunken'],
  ['text', 'hero'], ['text-2', 'hero'], ['text', 'bar'], ['text-2', 'bar'],
  ['on-primary', 'primary'], ['on-primary', 'primary-hover'],
  ['accent-text', 'bg'], ['accent-text', 'bg-raised'], ['accent-text', 'warn-bg'],
  ['accent', 'bg', 'large'],
  ['on-field', 'field'], ['on-field-2', 'field'], ['field-accent', 'field'],
  ['on-notice', 'notice'],
  ['on-footer', 'footer'], ['on-footer-2', 'footer'], ['footer-head', 'footer'],
  ['ok', 'ok-bg'], ['bad', 'bad-bg'], ['plan', 'plan-bg'],
  ['ok', 'bg-raised'], ['bad', 'bg-raised'],
  ['on-selection', 'selection'],
];

function luminance(hex) {
  const n = hex.replace('#', '');
  return [0, 2, 4]
    .map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
}
function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

let failures = 0;
let checked = 0;
for (const [surface, themes] of Object.entries({ site: tokens.site, app: tokens.app })) {
  for (const [theme, roles] of Object.entries(themes)) {
    for (const [fg, bg, size] of PAIRS) {
      if (!roles[fg] || !roles[bg]) continue;
      const r = ratio(roles[fg], roles[bg]);
      const need = size === 'large' ? 3 : 4.5;
      checked++;
      if (r < need) {
        failures++;
        console.log(`FAIL ${surface} ${theme}: ${fg} ${roles[fg]} on ${bg} ${roles[bg]} = ${r.toFixed(2)}:1, needs ${need}:1`);
      }
    }
  }
}
console.log(`${checked} pairs checked, ${failures} below WCAG AA`);
process.exit(failures ? 1 : 0);
