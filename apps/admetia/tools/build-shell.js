#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Stamps the shared chrome (tools/shell.js) into the hand-written root pages,
 * between their shell markers:
 *
 *   <!-- shell:top -->  … <!-- /shell:top -->     skip link, strip, nameplate,
 *                                                 navigation, breadcrumbs
 *   <!-- shell:foot --> … <!-- /shell:foot -->    the footer's site index
 *
 * The pages stay plain HTML that runs unbuilt; this only keeps the blocks
 * identical. The Career Explorer's pages get the same chrome from
 * tools/careers/render.js (npm run careers).
 *
 *   npm run shell
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const S = require('./shell');
const V = require('./visuals');

const ROOT = path.join(__dirname, '..');

function block(html, name, content, file) {
  const re = new RegExp(`([ \\t]*)<!-- shell:${name} -->[\\s\\S]*?<!-- /shell:${name} -->`);
  const m = re.exec(html);
  if (!m) throw new Error(`${file}: no shell:${name} markers`);
  const body = content.split('\n').map((l) => (l ? m[1] + l : l)).join('\n');
  return html.replace(re, () => `${m[1]}<!-- shell:${name} -->\n${body}\n${m[1]}<!-- /shell:${name} -->`);
}

/* Generated visuals and lists (tools/visuals.js), by marker name. */
const GEN = {
  pathways: () => V.pathways(),
  timeline: () => V.timeline(),
  'countries-hiring': () => V.countries('hiring', 'How hiring works, by country'),
  'countries-visas': () => V.countries('visas', 'Visas and permits, by country')
};

function stamp(file, html) {
  const cfg = S.ROOT_PAGES[file];
  if (!cfg) throw new Error(`${file}: not in tools/shell.js ROOT_PAGES`);
  html = block(html, 'top', S.top({ path: file, ...cfg }).trimEnd(), file);
  html = block(html, 'foot', S.foot({ path: file }), file);
  html = html.replace(/([ \t]*)<!-- gen:([a-z-]+) -->[\s\S]*?<!-- \/gen:\2 -->/g, (m, pad, name) => {
    if (!GEN[name]) throw new Error(`${file}: unknown generated block "${name}"`);
    return `${pad}<!-- gen:${name} -->\n${GEN[name]().split('\n').map((l) => (l ? pad + l : l)).join('\n')}\n${pad}<!-- /gen:${name} -->`;
  });
  return html;
}

function main() {
  for (const file of Object.keys(S.ROOT_PAGES)) {
    const f = path.join(ROOT, file);
    if (!fs.existsSync(f)) throw new Error(`${file}: listed in tools/shell.js but missing`);
    const before = fs.readFileSync(f, 'utf8');
    const after = stamp(file, before);
    if (after !== before) { fs.writeFileSync(f, after); console.log('stamped ' + file); }
  }
}

if (require.main === module) main();
module.exports = { stamp };
