/* An isolated, browsable concept. The published site keeps The City. */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../..');
const built = path.join(root, '_site');
if (!fs.existsSync(path.join(built, 'index.html'))) throw new Error('Run npm run build first.');
const out = fs.mkdtempSync(path.join(os.tmpdir(), 'admetia-glass-'));
fs.copyFileSync(path.join(here, 'glass.css'), path.join(out, 'glass.css'));

function homepage(html) {
  const photo = html.match(/    <figure class="photo front-photo">[\s\S]*?<\/figure>/);
  if (!photo) throw new Error('The homepage photograph was not found.');
  html = html.replace(photo[0], '');
  return html.replace(/(<header class="front-head">)([\s\S]*?)(<\/header>)/,
    (_, open, content, close) => open + '<div class="glass-hero-copy"><p class="glass-eyebrow">THE WAY IN</p>' + content +
      '<div class="glass-hero-links"><a href="programmes.html">Explore programmes <span aria-hidden="true">↗</span></a><a href="careers/compass.html">Career Compass <span aria-hidden="true">→</span></a></div></div>' +
      photo[0] + '<div class="glass-stats"><span><b>136</b> programmes</span><span><b>124</b> role families</span><span><b>46</b> countries</span></div>' + close);
}

function mirror(from, to, style, rel = '') {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name), dst = path.join(to, entry.name);
    const file = path.posix.join(rel, entry.name);
    if (entry.name === 'sw.js') {
      fs.writeFileSync(dst, '// This isolated preview intentionally caches nothing.\n');
    } else if (entry.isDirectory()) {
      mirror(src, dst, style, file);
    } else if (entry.name.endsWith('.html')) {
      let html = fs.readFileSync(src, 'utf8');
      const depth = file.split('/').length;
      const up = '../'.repeat(depth);
      html = html.replace('<html ', `<html data-preview="${style}" `);
      html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="' + up + 'glass.css"></head>');
      // Skip the newspaper intro animation in this visual comparison.
      html = html.replace(/<script>[\s\S]*?<\/script>/g, script => script.includes('intro-on') ? '' : script);
      if (style === 'glass' && file === 'index.html') html = homepage(html);
      const toolbar = `<aside class="preview-toolbar" aria-label="Design preview"><span>DESIGN PREVIEW</span><nav aria-label="Compare designs"><a href="${up}glass/${file}"${style === 'glass' ? ' aria-current="page"' : ''}>Glassmorphism</a><a href="${up}city/${file}"${style === 'city' ? ' aria-current="page"' : ''}>The City</a></nav></aside>`;
      html = html.replace('<body>', '<body>' + toolbar);
      fs.writeFileSync(dst, html);
    } else {
      fs.symlinkSync(src, dst);
    }
  }
}
mirror(built, path.join(out, 'glass'), 'glass');
mirror(built, path.join(out, 'city'), 'city');
fs.writeFileSync(path.join(out, 'index.html'), '<!doctype html><meta http-equiv="refresh" content="0;url=glass/index.html"><a href="glass/index.html">Open Glassmorphism preview</a>');
console.log(out);
