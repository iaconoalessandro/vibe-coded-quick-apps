/* Coverage and provenance for school identity assets. A missing/new programme
 * must fail here rather than silently ship without an identifying image. */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
for (const file of ['data/masters-model.js', 'data/computing-model.js', 'data/mba-model.js', 'js/school-logos.js']) {
  vm.runInContext(read(file), ctx, { filename: file });
}
const { institutions, programmes } = ctx.window.SchoolLogos;
const keys = ctx.window.MASTERS_MODEL.schools.concat(ctx.window.IT_MODEL.schools).map((s) => s.id)
  .concat(ctx.window.MBA_MODEL.adjustedSchools.concat(ctx.window.MBA_MODEL.generalSchools).map((s) => 'mba:' + s.name))
  .concat(ctx.window.MASTERS_MODEL.excluded.map((s) => 'excluded:' + s.name));
for (const key of keys) assert(institutions[programmes[key]], 'Missing school logo: ' + key);
assert.deepStrictEqual(Object.keys(programmes).sort(), Array.from(keys).sort(), 'Stale or missing programme mappings');

/* University and business school identities deliberately remain distinct. */
for (const [key, institution] of Object.entries({
  'mba:Stanford GSB': 'stanford-business', 'stanford-mscs': 'stanford',
  'mba:Berkeley Haas': 'berkeley-business', 'berkeley-meng': 'berkeley',
  'mba:Oxford Saïd': 'oxford-business', 'oxford-acs': 'oxford',
  'warwick-mgmt': 'warwick-business', 'warwick-cs': 'warwick',
  'mba:SDA Bocconi': 'sda-bocconi', 'bocconi-fin': 'bocconi',
  'mba:Michigan Ross': 'ross', 'ross-mm': 'ross',
  'mba:ESADE': 'esade', 'esade-fin': 'esade'
})) assert.strictEqual(programmes[key], institution, key);

const sources = JSON.parse(read('img/schools/sources.json'));
for (const [id, school] of Object.entries(institutions)) {
  assert(/^img\/schools\/[a-z-]+\.(png|svg)$/.test(school.src), 'Non-local image: ' + id);
  const data = fs.readFileSync(path.join(root, school.src));
  assert(sources[id] && sources[id].file === path.basename(school.src), 'Missing source: ' + id);
  assert(sources[id].website.startsWith('https://'), id);
  if (sources[id].kind === 'user-provided') {
    assert(sources[id].supplied_file && sources[id].source_note, 'Missing attachment provenance: ' + id);
    assert.strictEqual(sources[id].source_page, null, 'Attachment claimed as a web download: ' + id);
    assert.strictEqual(sources[id].asset_url, null, 'Attachment claimed as a web asset: ' + id);
  } else {
    assert(sources[id].source_page.startsWith('https://'), id);
  }
  if (school.src.endsWith('.png')) {
    assert.strictEqual(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Not a PNG: ' + id);
    assert.strictEqual(data.readUInt32BE(16), sources[id].width, 'Width mismatch: ' + id);
    assert.strictEqual(data.readUInt32BE(20), sources[id].height, 'Height mismatch: ' + id);
  } else {
    const viewBox = /viewBox="([^"]+)"/.exec(data.toString());
    assert(viewBox, 'Missing SVG viewBox: ' + id);
    const dimensions = viewBox[1].trim().split(/[\s,]+/).map(Number);
    assert.strictEqual(dimensions[2], sources[id].width, 'SVG width: ' + id);
    assert.strictEqual(dimensions[3], sources[id].height, 'SVG height: ' + id);
  }
  if (school.crop) {
    const [x, y, width, height] = school.crop;
    assert(x >= 0 && y >= 0 && width > 0 && height > 0, 'Invalid crop: ' + id);
    assert(x + width <= sources[id].width && y + height <= sources[id].height, 'Crop exceeds source: ' + id);
  }
}
for (const page of ['programmes.html', 'masters.html', 'mba.html']) {
  const html = read(page);
  assert(html.indexOf('js/school-logos.js') < html.indexOf('js/page-'), 'Logo script load order: ' + page);
  assert(html.includes('<script defer src="js/school-logos.js"></script>'), page);
}
console.log(`School logos: ${keys.length} programme identities, ${Object.keys(institutions).length} local assets verified`);
