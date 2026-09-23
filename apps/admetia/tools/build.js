#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Builds the published site into _site/. The pages in the repo run as they
 * are — open them from `python3 -m http.server` while working — and this only
 * repackages them for the web:
 *
 *   - Each page's scripts become one minified bundle, and fonts.css + app.css
 *     one minified stylesheet: two requests where there were up to seventeen.
 *   - js/theme.js is inlined in <head> (it has to run before first paint
 *     anyway) and the favicon becomes a data: URI.
 *   - The front pages (index, business, it) drop the ~200 KB of models and
 *     scoring. Their ticker gets its programme list precomputed here, and
 *     loads the models on its own only when there are saved answers to score.
 *   - Bundles are named by content hash, so a cached page can never pick up
 *     scripts from a different deploy.
 *   - sw.js gets the built file list and a VERSION derived from it.
 *
 * Everything else is copied as is, source scripts included, so a URL that
 * worked before keeps working. Nothing the reader sees changes.
 *
 *   npm run build        (needs `npm install` once, for esbuild)
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_site');
const PAGES = ['index.html', 'business.html', 'it.html', 'mba.html', 'masters.html', 'computing.html'];
/* Never published: tooling, the test suites (tests/fixtures alone is 2.6 MB),
 * parked mockups, and documents written for this repository rather than for
 * readers of the site. CREDITS.md does ship — it carries the photo and type
 * attributions. */
const SKIP = new Set(['.git', '.github', '.claude', 'node_modules', '_site', '.DS_Store',
  'package.json', 'package-lock.json', 'tests', 'tools', 'design', 'docs',
  'README.md', 'VERIFICATION.md']);

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 10);
const isModel = (f) => f.startsWith('data/') || /^js\/score-/.test(f);

function minifyJs(code, file) {
  return esbuild.transformSync(code, { loader: 'js', minify: true, charset: 'utf8', legalComments: 'none', sourcefile: file }).code;
}

/* Written once per distinct content; returns the published path. */
const emitted = new Map();
function emit(dir, name, ext, content) {
  const rel = `${dir}/${name}.${hash(content)}.${ext}`;
  if (!emitted.has(rel)) {
    fs.writeFileSync(path.join(OUT, rel), content);
    emitted.set(rel, content);
  }
  return rel;
}

function bundle(name, files, extra) {
  const parts = files.map((f) => minifyJs(read(f), f));
  if (extra) parts.splice(extra.at, 0, extra.code);
  return emit('js', name, 'js', parts.join('\n'));
}

/* The ticker's programme list, exactly as js/ticker.js would derive it from
 * the models in the browser. */
function tickerRows(modelFiles) {
  const noop = () => {};
  const ctx = { console, document: { addEventListener: noop } };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of [...modelFiles, 'js/ticker.js']) vm.runInContext(read(f), ctx, { filename: f });
  return ctx.Ticker.programmes();
}

function copyTree(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const src = path.join(from, entry.name), dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyTree(src, dst);
    else fs.copyFileSync(src, dst);
  }
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  copyTree(ROOT, OUT);

  const css = esbuild.transformSync(read('css/fonts.css') + '\n' + read('css/app.css'),
    { loader: 'css', minify: true, charset: 'utf8', legalComments: 'none' }).code;
  const cssPath = emit('css', 'app', 'css', css);

  const themeJs = minifyJs(read('js/theme.js'), 'js/theme.js').trim().replace(/<\/script/gi, '<\\/script');
  const favicon = 'data:image/svg+xml,' + encodeURIComponent(read('img/favicon.svg').replace(/\s*\n\s*/g, ''));

  /* The models bundle, in the order the calculator pages load them. */
  const scriptsOf = (html) => [...html.matchAll(/<script defer src="([^"]+)"><\/script>\n?/g)].map((m) => m[1]);
  const modelFiles = scriptsOf(read('mba.html')).filter(isModel);
  const modelsPath = bundle('models', modelFiles);
  const tickerData = 'window.TICKER_DATA=' + JSON.stringify({ rows: tickerRows(modelFiles), models: modelsPath }) + ';';

  const shell = ['./', ...PAGES, cssPath, modelsPath];
  for (const page of PAGES) {
    let html = read(page);
    const scripts = scriptsOf(html);
    const calculator = scripts.some((f) => /^js\/page-/.test(f));

    let js;
    if (calculator) {
      js = bundle(page.replace('.html', ''), scripts);
    } else {
      const files = scripts.filter((f) => !isModel(f));
      js = bundle('front', files, { at: files.indexOf('js/ticker.js'), code: tickerData });
    }
    shell.push(js);

    const swap = (from, to) => {
      if (!html.includes(from)) throw new Error(`${page}: expected to find ${from.trim()}`);
      html = html.replace(from, to);
    };
    swap('href="img/favicon.svg"', `href="${favicon}"`);
    swap('<script src="js/theme.js"></script>', `<script>${themeJs}</script>`);
    swap('<link rel="stylesheet" href="css/fonts.css">\n<link rel="stylesheet" href="css/app.css">',
      `<link rel="stylesheet" href="${cssPath}">`);
    html = html.replace(/(<script defer src="[^"]+"><\/script>\n?)+/, `<script defer src="${js}"></script>\n`);
    if (/<script defer src="(?!js\/[\w-]+\.[0-9a-f]{10}\.js)/.test(html)) throw new Error(`${page}: scripts left unbundled`);
    fs.writeFileSync(path.join(OUT, page), html);
  }

  const files = [...new Set(shell)];
  const version = hash(files.map((f) => emitted.get(f) || fs.readFileSync(path.join(OUT, f === './' ? 'index.html' : f), 'utf8')).join('\n'));
  let sw = read('sw.js');
  sw = sw.replace(/var VERSION = '[^']*';/, `var VERSION = '${version}';`)
    .replace(/var SHELL_FILES = \[[\s\S]*?\];/, `var SHELL_FILES = ${JSON.stringify(files)};`);
  if (!sw.includes(version) || !sw.includes(cssPath)) throw new Error('sw.js: could not rewrite its file list');
  fs.writeFileSync(path.join(OUT, 'sw.js'), minifyJs(sw, 'sw.js'));

  const kb = (n) => (n / 1024).toFixed(1) + ' KB';
  console.log(`Built _site/ (sw ${version})`);
  for (const [f, c] of emitted) console.log('  ' + f.padEnd(34) + kb(Buffer.byteLength(c)));
}

build();
