// Compares the custom properties of two sets of CSS files, theme by theme, after resolving
// var() chains. Use it when a product adopts the tokens: point it at the product's current CSS
// and at build/css to see every colour or size that would change.
//
//   node tools/compare-css.mjs --a <file.css>[,<file.css>] --b <file.css>[,<file.css>]
//
// Exit code 1 when a property present on both sides resolves to different values.

import { readFileSync } from 'node:fs';

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i < 0 || !process.argv[i + 1]) {
    console.error('usage: node tools/compare-css.mjs --a <css>[,<css>] --b <css>[,<css>]');
    process.exit(2);
  }
  return process.argv[i + 1].split(',');
}

// Which theme a rule's selector belongs to. Rules for components are skipped: only blocks that
// declare custom properties on :root count.
function scopeOf(selector, insideDarkMedia) {
  const s = selector.replace(/\s+/g, '');
  if (s === ':root') return insideDarkMedia ? null : 'light';
  if (s === ":root:not([data-theme='light'])" || s === ':root:not([data-theme="light"])') return insideDarkMedia ? 'dark' : null;
  if (s === ":root[data-theme='dark']" || s === ':root[data-theme="dark"]') return 'dark-explicit';
  return null;
}

function parse(files) {
  const scopes = { light: new Map(), dark: new Map(), 'dark-explicit': new Map() };
  for (const file of files) {
    const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    let i = 0;
    let darkDepth = -1;
    const stack = [];
    while (i < css.length) {
      const open = css.indexOf('{', i);
      const close = css.indexOf('}', i);
      if (open < 0 && close < 0) break;
      if (open >= 0 && (close < 0 || open < close)) {
        const head = css.slice(i, open).trim().split(';').pop().trim();
        stack.push(head);
        if (/prefers-color-scheme:\s*dark/.test(head)) darkDepth = stack.length;
        i = open + 1;
      } else {
        const body = css.slice(i, close);
        const head = stack[stack.length - 1] ?? '';
        const scope = scopeOf(head, darkDepth > 0 && stack.length > darkDepth);
        if (scope) {
          for (const m of body.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) scopes[scope].set(m[1], m[2].trim());
        }
        if (stack.length === darkDepth) darkDepth = -1;
        stack.pop();
        i = close + 1;
      }
    }
  }
  return scopes;
}

const norm = (v) => v.toLowerCase().replace(/["']/g, '').replace(/\s+/g, ' ').replace(/(\D)0\./g, '$1.').trim();

function resolve(name, scope, scopes, seen = new Set()) {
  const order = scope === 'light' ? ['light'] : [scope, 'light'];
  for (const s of order) {
    const v = scopes[s].get(name);
    if (v === undefined) continue;
    return v.replace(/var\(--([\w-]+)\)/g, (_, ref) => {
      if (seen.has(ref)) return `var(--${ref})`;
      return resolve(ref, scope, scopes, new Set([...seen, name])) ?? `var(--${ref})`;
    });
  }
  return undefined;
}

const a = parse(arg('--a'));
const b = parse(arg('--b'));
let differ = 0;

for (const scope of ['light', 'dark', 'dark-explicit']) {
  const names = new Set([...a[scope].keys(), ...b[scope].keys()]);
  const onlyA = [];
  const onlyB = [];
  let same = 0;
  for (const name of [...names].sort()) {
    const va = resolve(name, scope, a);
    const vb = resolve(name, scope, b);
    if (a[scope].has(name) && !b[scope].has(name)) { onlyA.push(name); continue; }
    if (b[scope].has(name) && !a[scope].has(name)) { onlyB.push(name); continue; }
    if (norm(va) === norm(vb)) { same++; continue; }
    differ++;
    console.log(`DIFFERENT ${scope} --${name}: ${va}  vs  ${vb}`);
  }
  console.log(`${scope}: ${same} equal${onlyA.length ? `, only in A: ${onlyA.join(' ')}` : ''}${onlyB.length ? `, only in B: ${onlyB.join(' ')}` : ''}`);
}
process.exit(differ ? 1 : 0);
