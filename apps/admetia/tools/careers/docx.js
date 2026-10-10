/* ---------------------------------------------------------------------------
 * A Word (.docx) writer with no dependencies, for the application toolkit.
 *
 * A .docx is a zip of a few XML parts. This writes only what a one-column
 * CV or letter needs: paragraphs, bold and italic runs, a right tab stop for
 * dates, real bullets (numbering.xml) and the built-in Title and Heading 1
 * styles, which applicant tracking systems read as headings. No tables, text
 * boxes, headers or footers: the contact line stays in the body, where
 * parsers find it (research/getting-in/applications-and-interviews.md §2.1).
 *
 * Output is byte-for-byte reproducible (fixed zip timestamps, no dates in
 * the document properties), so the tests can compare the committed files
 * with a fresh build.
 * ------------------------------------------------------------------------- */

'use strict';

const zlib = require('zlib');

/* ------------------------------------------------------------------- zip */

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/* files: [[name, string]] in the order they should appear. */
function zip(files) {
  const DOS_TIME = 0, DOS_DATE = (0 << 9) | (1 << 5) | 1; /* 1980-01-01 00:00 */
  const locals = [], centrals = [];
  let offset = 0;
  for (const [name, text] of files) {
    const raw = Buffer.from(text, 'utf8');
    const data = zlib.deflateRawSync(raw, { level: 9 });
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = crc32(raw);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6); lh.writeUInt16LE(8, 8);
    lh.writeUInt16LE(DOS_TIME, 10); lh.writeUInt16LE(DOS_DATE, 12); lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(data.length, 18); lh.writeUInt32LE(raw.length, 22); lh.writeUInt16LE(nameBuf.length, 26); lh.writeUInt16LE(0, 28);
    locals.push(lh, nameBuf, data);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(20, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0, 8); ch.writeUInt16LE(8, 10);
    ch.writeUInt16LE(DOS_TIME, 12); ch.writeUInt16LE(DOS_DATE, 14); ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(data.length, 20); ch.writeUInt32LE(raw.length, 24); ch.writeUInt16LE(nameBuf.length, 28);
    ch.writeUInt16LE(0, 30); ch.writeUInt16LE(0, 32); ch.writeUInt16LE(0, 34); ch.writeUInt16LE(0, 36); ch.writeUInt32LE(0, 38);
    ch.writeUInt32LE(offset, 42);
    centrals.push(ch, nameBuf);
    offset += 30 + nameBuf.length + data.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(0, 4); end.writeUInt16LE(0, 6);
  end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16); end.writeUInt16LE(0, 20);
  return Buffer.concat([...locals, cd, end]);
}

/* ------------------------------------------------------------------- xml */

const x = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* "**bold** and *italic*" → runs. */
function runs(text, base = {}) {
  const out = [];
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0, m;
  const push = (t, f) => { if (t) out.push(run(t, { ...base, ...f })); };
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index), {});
    if (m[1] !== undefined) push(m[1], { b: true }); else push(m[2], { i: true });
    last = re.lastIndex;
  }
  push(text.slice(last), {});
  return out.join('');
}
function run(t, f) {
  const pr = [f.b ? '<w:b/>' : '', f.i ? '<w:i/>' : '', f.color ? `<w:color w:val="${f.color}"/>` : '', f.sz ? `<w:sz w:val="${f.sz}"/><w:szCs w:val="${f.sz}"/>` : ''].join('');
  return `<w:r>${pr ? `<w:rPr>${pr}</w:rPr>` : ''}<w:t xml:space="preserve">${x(t)}</w:t></w:r>`;
}
const TAB = '<w:r><w:tab/></w:r>';

/* A4, 1.6 cm margins: text width 11906 − 2 × 907 twips. */
const PAGE = { w: 11906, h: 16838, m: 907 };
const RIGHT = PAGE.w - 2 * PAGE.m;

function para(inner, { style, align, tabs, num, before, after, keep } = {}) {
  const pr = [
    style ? `<w:pStyle w:val="${style}"/>` : '',
    keep ? '<w:keepNext/>' : '',
    num ? '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>' : '',
    tabs ? `<w:tabs><w:tab w:val="right" w:pos="${RIGHT}"/></w:tabs>` : '',
    before !== undefined || after !== undefined ? `<w:spacing${before !== undefined ? ` w:before="${before}"` : ''}${after !== undefined ? ` w:after="${after}"` : ''}/>` : '',
    align ? `<w:jc w:val="${align}"/>` : ''
  ].join('');
  return `<w:p>${pr ? `<w:pPr>${pr}</w:pPr>` : ''}${inner}</w:p>`;
}

/* ------------------------------------------------------------- documents */

/* A CV or a letter skeleton, as blocks:
 *   { name }                        the candidate's name (Title style)
 *   { contact }                     one centred line
 *   { h }                           a section heading (Heading 1)
 *   { left, right }                 bold left, right-aligned date or place
 *   { sub, subRight }               italic second line of an entry
 *   { bullet }                      a bullet point
 *   { text }                        a plain paragraph
 *   { note }                        guidance, in grey italic
 */
function documentXml(blocks) {
  const body = blocks.map((b) => {
    if (b.name) return para(runs(b.name), { style: 'Title', align: 'center' });
    if (b.contact) return para(runs(b.contact), { align: 'center', after: 120 });
    if (b.h) return para(runs(b.h), { style: 'Heading1', keep: true });
    if (b.left !== undefined) return para(runs(b.left, { b: true }) + (b.right ? TAB + runs(b.right) : ''), { tabs: true, before: 80, after: 0, keep: true });
    if (b.sub !== undefined) return para(runs(b.sub, { i: true }) + (b.subRight ? TAB + runs(b.subRight, { i: true }) : ''), { tabs: true, after: 20, keep: true });
    if (b.bullet !== undefined) return para(runs(b.bullet), { num: true, after: 0 });
    if (b.note !== undefined) return para(runs(b.note, { i: true, color: '666666' }), { after: 80 });
    if (b.text !== undefined) return para(runs(b.text), { after: 60 });
    throw new Error('docx: unknown block ' + JSON.stringify(b));
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}<w:sectPr><w:pgSz w:w="${PAGE.w}" w:h="${PAGE.h}"/><w:pgMar w:top="${PAGE.m}" w:right="${PAGE.m}" w:bottom="${PAGE.m}" w:left="${PAGE.m}" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr></w:body></w:document>`;
}

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="en-GB"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="40" w:line="252" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="40"/><w:jc w:val="center"/></w:pPr><w:rPr><w:b/><w:sz w:val="34"/><w:szCs w:val="34"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="000000"/></w:pBdr><w:spacing w:before="180" w:after="60"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:caps/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:ind w:left="360"/></w:pPr></w:style>
</w:styles>`;

const NUMBERING = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="singleLevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="340" w:hanging="226"/></w:pPr><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/></w:rPr></w:lvl></w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>`;

const SETTINGS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:defaultTabStop w:val="720"/><w:characterSpacingControl w:val="doNotCompress"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;

function docx(blocks, title) {
  return zip([
    ['[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`],
    ['_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`],
    ['docProps/core.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>${x(title)}</dc:title><dc:creator>Admetia</dc:creator></cp:coreProperties>`],
    ['word/_rels/document.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/></Relationships>`],
    ['word/document.xml', documentXml(blocks)],
    ['word/styles.xml', STYLES],
    ['word/numbering.xml', NUMBERING],
    ['word/settings.xml', SETTINGS]
  ]);
}

module.exports = { docx, zip, crc32 };
