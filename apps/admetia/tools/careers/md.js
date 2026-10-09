/* ---------------------------------------------------------------------------
 * Career Explorer: the markdown the research reports use, as HTML.
 *
 * Only what the reports contain (checked by script when this was written):
 * ATX headings, paragraphs, "-" and "1." lists nested by indentation, pipe
 * tables, "---" rules, **bold**, *italic*, `code`, [links](...) and bare
 * URLs. Anything else is printed as text, never dropped. No dependencies.
 *
 * Links: http(s) addresses stay as they are (citations; following one is the
 * reader's choice, nothing is fetched). Links between report files are
 * rewritten by the caller's `link` function. Tables are wrapped so they
 * scroll sideways on a phone instead of widening the page.
 * ------------------------------------------------------------------------- */

'use strict';

const escHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ inline */

function inline(src, opts) {
  const keep = [];
  const stash = (html) => `\u0000${keep.push(html) - 1}\u0000`;
  let s = src;
  /* Code spans first: nothing inside them is markup. */
  s = s.replace(/`([^`]+)`/g, (m, c) => stash(`<code>${escHtml(c)}</code>`));
  /* [text](target) */
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) => {
    const href = /^https?:\/\//.test(url) ? url : (opts.link ? opts.link(url) : null);
    const inner = inline(text, { ...opts, noAuto: true });
    if (!href) return stash(inner);
    return stash(`<a href="${escHtml(href)}"${/^https?:/.test(href) ? ' rel="noopener noreferrer"' : ''}>${inner}</a>`);
  });
  /* Bare addresses. A closing bracket or sentence punctuation at the end is
   * the sentence's, not the address's. */
  if (!opts.noAuto) {
    s = s.replace(/https?:\/\/[^\s<>"]+/g, (url) => {
      let tail = '';
      for (;;) {
        const last = url.slice(-1);
        if (/[.,;:!?*]/.test(last)) { tail = last + tail; url = url.slice(0, -1); continue; }
        if (last === ')' && (url.match(/\(/g) || []).length < (url.match(/\)/g) || []).length) { tail = last + tail; url = url.slice(0, -1); continue; }
        break;
      }
      return stash(`<a class="cx-url" href="${escHtml(url)}" rel="noopener noreferrer">${escHtml(url)}</a>`) + tail;
    });
  }
  s = escHtml(s);
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<em>$2</em>');
  s = s.replace(/\u0000(\d+)\u0000/g, (m, i) => keep[Number(i)]);
  return s;
}

/* ------------------------------------------------------------------ blocks */

const LIST = /^(\s*)(-|\d+\.)\s+(.*)$/;

function render(md, opts = {}) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const shift = opts.headingShift || 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m;
    if ((m = /^(#{1,6}) (.*)$/.exec(line))) {
      const level = Math.min(6, m[1].length + shift);
      const id = opts.headingId ? opts.headingId(m[2], level) : null;
      out.push(`<h${level}${id ? ` id="${id}"` : ''}>${inline(m[2], opts)}</h${level}>`);
      i++; continue;
    }
    if (/^\s*---\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
    if (line.startsWith('|') && /^\|\s*:?-/.test(lines[i + 1] || '')) {
      const rows = [];
      let j = i;
      for (; j < lines.length && lines[j].startsWith('|'); j++) if (j !== i + 1) rows.push(cells(lines[j]));
      out.push(table(rows, opts));
      i = j; continue;
    }
    if (LIST.test(line)) {
      const end = listEnd(lines, i);
      out.push(list(lines.slice(i, end), opts));
      i = end; continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !LIST.test(lines[i]) && !/^#{1,6} /.test(lines[i]) &&
           !/^\s*---\s*$/.test(lines[i]) && !(lines[i].startsWith('|') && /^\|\s*:?-/.test(lines[i + 1] || ''))) {
      para.push(lines[i].trim()); i++;
    }
    out.push(`<p>${inline(para.join(' '), opts)}</p>`);
  }
  return out.join('\n');
}

function cells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

function table(rows, opts) {
  const [head, ...body] = rows;
  const th = head.map((c) => `<th scope="col">${inline(c, opts)}</th>`).join('');
  const tb = body.map((r) => '<tr>' + r.map((c, k) => k === 0 ? `<th scope="row">${inline(c, opts)}</th>` : `<td>${inline(c, opts)}</td>`).join('') + '</tr>').join('\n');
  return `<div class="cx-table" role="region" tabindex="0" aria-label="Table: ${escHtml(head.map((c) => c.replace(/[*`[\]]/g, '')).join(', ').slice(0, 120))}"><table>\n<thead><tr>${th}</tr></thead>\n<tbody>\n${tb}\n</tbody></table></div>`;
}

/* A list runs until a blank line followed by a non-list, non-indented line,
 * or a line that starts another block. */
function listEnd(lines, i) {
  let j = i + 1;
  for (; j < lines.length; j++) {
    const l = lines[j];
    if (!l.trim()) {
      const next = lines[j + 1] || '';
      if (LIST.test(next) || /^\s+\S/.test(next)) continue;
      break;
    }
    if (/^#{1,6} /.test(l) || /^\s*---\s*$/.test(l) || l.startsWith('|')) break;
  }
  return j;
}

/* Items by indentation: a line indented deeper than an item's marker belongs
 * to that item (a nested list or a continuation). */
function list(lines, opts) {
  const items = [];
  for (const l of lines) {
    if (!l.trim()) continue;
    const m = LIST.exec(l);
    const ind = (m ? m[1] : /^(\s*)/.exec(l)[1]).length;
    if (m && (!items.length || ind <= items[0].ind)) {
      items.push({ ind, ordered: /\d/.test(m[2]), num: parseInt(m[2], 10), text: [m[3]], child: [] });
    } else if (items.length) {
      const it = items[items.length - 1];
      if (m) it.child.push(l);
      else if (it.child.length) it.child.push(l);
      else it.text.push(l.trim());
    } else {
      items.push({ ind, ordered: false, text: [l.trim()], child: [] });
    }
  }
  /* Consecutive items of one kind make one list. */
  const groups = [];
  for (const it of items) {
    const g = groups[groups.length - 1];
    if (g && g.ordered === it.ordered) g.items.push(it); else groups.push({ ordered: it.ordered, items: [it] });
  }
  return groups.map((g) => {
    const tag = g.ordered ? 'ol' : 'ul';
    const start = g.ordered && g.items[0].num !== 1 ? ` start="${g.items[0].num}"` : '';
    const lis = g.items.map((it) => {
      let html = inline(it.text.join(' '), opts);
      if (it.child.length) {
        const base = Math.min(...it.child.filter((c) => c.trim()).map((c) => /^(\s*)/.exec(c)[1].length));
        html += '\n' + render(it.child.map((c) => c.slice(base)).join('\n'), opts);
      }
      return `<li>${html}</li>`;
    }).join('\n');
    return `<${tag}${start}>\n${lis}\n</${tag}>`;
  }).join('\n');
}

/* Words a reader sees, for the fidelity check: markdown syntax and link
 * targets removed, bare addresses kept (they are printed). */
function words(md) {
  const t = md
    .replace(/^\|\s*:?-[-|:\s]*$/gm, ' ')
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/^#{1,6} /gm, ' ')
    .replace(/^\s*(-|\d+\.)\s+/gm, ' ')
    .replace(/^\s*---\s*$/gm, ' ')
    .replace(/[|*`]/g, ' ');
  return countWords(t);
}
function countWords(text) {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

module.exports = { render, inline, escHtml, words, countWords };
