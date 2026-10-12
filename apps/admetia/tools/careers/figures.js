/* ---------------------------------------------------------------------------
 * Career Explorer: the figures.
 *
 *   field pages   one drawn plate in the header, img/plates/field-<slug>-*.webp
 *                 (decorative: it repeats the standfirst in pictures)
 *   role pages    twenty roles carry one figure beside "What you actually do":
 *                 a drawn scene where the workplace is physical and unfamiliar,
 *                 or a diagram where the paragraph hides a structure
 *
 * A diagram uses only words the role's own paragraph contains, so it changes
 * when the research does; its labels are live text, in English like the
 * paragraph. Captions and alternative text are interface strings (ui()).
 * The drawings are built by tools/build-plates.sh; docs/image-audit/ has the
 * reasoning behind which pages carry one.
 * ------------------------------------------------------------------------- */

'use strict';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ------------------------------------------------------------ diagrams --- */

const W = 320, LH = 17, PAD = 10;
/* 13px Hanken Grotesk runs at about 6.6px a character. */
function wrap(text, width) {
  const max = Math.floor((width - 2 * PAD) / 6.6), out = [];
  let line = '';
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > max) { out.push(line); line = word; } else line = line ? line + ' ' + word : word;
  }
  if (line) out.push(line);
  return out;
}
/* A ruled box: an optional bold head, then wrapped lines. Returns its height. */
function box(x, y, w, head, body, cls) {
  const lines = (head ? wrap(head, w).map((t) => [t, 'dg-t dg-h']) : []).concat(body ? wrap(body, w).map((t) => [t, 'dg-t']) : []);
  const h = lines.length * LH + 2 * PAD - 3;
  const text = lines.map(([t, c], i) => `<text class="${c}" x="${x + PAD}" y="${y + PAD + 11 + i * LH}">${esc(t)}</text>`).join('');
  return { h, svg: `<rect class="dg-box${cls ? ' ' + cls : ''}" x="${x + 0.5}" y="${y + 0.5}" width="${w - 1}" height="${h - 1}"/>${text}` };
}
const head = (x, y, dir) => dir === 'down' ? `M${x - 4} ${y - 6}L${x} ${y}L${x + 4} ${y - 6}` : dir === 'left' ? `M${x + 6} ${y - 4}L${x} ${y}L${x + 6} ${y + 4}` : `M${x - 6} ${y - 4}L${x} ${y}L${x - 6} ${y + 4}`;
const down = (x, y1, y2) => `<path class="dg-line" d="M${x} ${y1}V${y2}${head(x, y2, 'down')}"/>`;
const svg = (h, body) => `<svg viewBox="0 0 ${W} ${h}" width="${W}" height="${h}" aria-hidden="true" focusable="false" lang="en">${body}</svg>`;
const tick = (x, y) => `<path class="dg-line dg-teal" d="M${x - 5} ${y}l4 4l7 -8"/>`;

/* Boxes down the page, joined by arrows. items: [head, body, cls]. */
function stack(items, x, w, y0, gap, arrows, label) {
  let y = y0, out = '';
  const at = [];
  items.forEach(([hd, bd, cls], i) => {
    const b = box(x, y, w, hd, bd, cls);
    out += b.svg;
    at.push([y, y + b.h]);
    if (i < items.length - 1) {
      if (arrows) out += down(x + w / 2, y + b.h, y + b.h + gap);
      if (label && label[i]) out += `<text class="dg-t dg-note" x="${x + w / 2 + 10}" y="${y + b.h + gap / 2 + 4}">${esc(label[i])}</text>`;
    }
    y += b.h + gap;
  });
  return { svg: out, at, h: y - gap };
}
/* A return line up the right-hand side, from the last box to the first. */
function back(s, x, w, label) {
  const rx = x + w + 26, y1 = (s.at[s.at.length - 1][0] + s.at[s.at.length - 1][1]) / 2, y0 = (s.at[0][0] + s.at[0][1]) / 2, my = (y0 + y1) / 2;
  return `<path class="dg-line dg-dash" d="M${x + w} ${y1}H${rx}V${y0}H${x + w}${head(x + w, y0, 'left')}"/>` +
    `<text class="dg-t dg-note" text-anchor="middle" transform="translate(${rx + 16} ${my}) rotate(-90)">${esc(label)}</text>`;
}

const DIAGRAM = {
  rag() {
    const s = stack([
      ['1', 'Splitting documents into chunks'], ['2', 'Embedding them as vectors'], ['3', 'Storing them in a vector database'],
      ['4', 'Retrieving the best passages'], ['5', 'Prompting the model to answer from them, with citations']
    ].map(([n, t]) => [null, n + '  ' + t]), 12, W - 24, 12, 16, true);
    const h = s.h + 40;
    return svg(h, `<rect class="dg-box dg-dash" x="0.5" y="0.5" width="${W - 1}" height="${h - 1}"/>${s.svg}<text class="dg-t dg-h dg-accent" x="12" y="${h - 12}">Evaluation: regression checks on every change</text>`);
  },
  mlops() {
    const s = stack([
      ['1  MLOps / ML platform', 'Pipelines that train, test, register and deploy models'],
      ['2  AI infrastructure', 'Operate GPU clusters'],
      ['3  Inference and GPU performance', 'Make trained models serve faster and cheaper']
    ], 0, W, 0, 8, false);
    return svg(s.h, s.svg);
  },
  star() {
    const f = box(100, 86, 120, 'Fact table', 'events', 'dg-tint'), p = box(100, 0, 120, 'Dimension', 'product'), st = box(0, 172, 120, 'Dimension', 'store'), d = box(200, 172, 120, 'Dimension', 'date');
    return svg(172 + st.h, `<path class="dg-line" d="M160 ${p.h}V86M118 ${86 + f.h}L60 172M202 ${86 + f.h}L260 172"/>${f.svg}${p.svg}${st.svg}${d.svg}`);
  },
  soc() {
    const s = stack([
      ['Alert queue', 'SIEM and EDR alerts', 'dg-tint'], ['Tier 1', 'Reviews alerts, closes false positives'],
      ['Tier 2', 'Investigates escalations, isolates hosts'], ['Tier 3', 'Hunts proactively, writes detection rules']
    ], 0, 252, 0, 26, true, [null, 'escalate', 'escalate']);
    return svg(s.h, s.svg + back(s, 0, 252, 'detection rules'));
  },
  threeway() {
    const b = ['Order', 'Receipt', 'Invoice'].map((t, i) => box(i * 112, 0, 96, t, null));
    const pay = box(100, 168, 120, 'Payment', null, 'dg-tint');
    return svg(168 + pay.h, b.map((x) => x.svg).join('') +
      `<path class="dg-line" d="M48 ${b[0].h}L160 92M160 ${b[1].h}V92M272 ${b[2].h}L160 92"/><circle class="dg-box dg-paper" cx="160" cy="104" r="13"/>${tick(159, 104)}` +
      `<text class="dg-t dg-note" x="182" y="109">three-way match</text>${down(160, 117, 168)}${pay.svg}`);
  },
  vouching() {
    const ev = ['Contract', 'Delivery note', 'Bank receipt'].map((t, i) => [box(184, i * 58, 136, t, null), i * 58]);
    const inv = box(0, 46, 128, 'Sampled sales invoice', '1 of 25', 'dg-tint'), my = 46 + inv.h / 2;
    return svg(2 * 58 + ev[2][0].h, inv.svg + ev.map(([b, y]) => `${b.svg}${tick(304, y + b.h / 2)}<path class="dg-line" d="M128 ${my}L184 ${y + b.h / 2}${head(184, y + b.h / 2, 'right')}"/>`).join(''));
  },
  datastack(on) {
    const s = stack([
      ['Sources', 'applications, APIs, files'], ['Pipelines', 'clean, transform, load'], ['Warehouse or lakehouse', null],
      ['Transformation layer', 'source tables into clean marts'], [null, 'Analysts, BI tools, scientists, AI models']
    ], 0, 196, 0, 16, true);
    const span = (y1, y2, key, lines) => {
      const here = key === on, c = here ? ' dg-on' : ' dg-mute', my = (y1 + y2) / 2 - (lines.length + (here ? 1 : 0)) * LH / 2 + 12;
      return `<path class="dg-line${c}" d="M202 ${y1 + 1}h8V${y2 - 1}h-8"/>` + lines.concat(here ? ['this page'] : []).map((t, i) =>
        `<text class="dg-t${i < lines.length ? ' dg-h' : ' dg-accent'}" x="218" y="${my + i * LH}">${t}</text>`).join('');
    };
    return svg(s.h, s.svg + span(s.at[0][0], s.at[2][1], 'data-engineer', ['Data engineer']) + span(s.at[3][0], s.at[3][1], 'analytics-engineer', ['Analytics', 'engineer']));
  },
  sop() {
    const s = stack([
      ['Demand planner', 'Statistical forecast; adjusts it for promotions and launches; consensus with sales'],
      ['Supply planner', 'Production and purchasing plan against capacity, materials and lead times'],
      ['S&OP / IBP analyst', 'Gap analysis, scenarios, financial view']
    ], 0, 262, 0, 22, true);
    return svg(s.h, s.svg + back(s, 0, 262, 'monthly cycle'));
  }
};

/* --------------------------------------------------------------- roles --- */
/* slug → [image name or diagram key, alternative text, caption]. */

const ROLE = {
  'trader-at-a-bank': ['role-bank-trader-desk',
    'Drawing of a bank trading desk at dawn: six screens of prices, a dealer phone board, a notepad and a coffee cup, with rows of desks and a city skyline behind.',
    'A market-making desk before the open. Illustration.'],
  'trader-analyst-at-a-physical-commodity-trading-house': ['role-commodity-trading-cargo',
    'Drawing of a trader, seen from behind, at a desk by a window; outside, a tanker loads at a jetty beside storage tanks. A position sheet, a shipping schedule and a rolled chart lie in the foreground.',
    'Physical trading: the book on the desk is a cargo somewhere. Illustration.'],
  'embedded-firmware-systems-engineer': ['role-embedded-bench',
    'Drawing of an electronics bench: a circuit board wired to a debug probe and analyser clips, an oscilloscope showing a square wave with a glitch circled, a cable harness, a laptop and a datasheet.',
    'Firmware is debugged on the bench, with the board on the table. Illustration.'],
  'computer-vision-robotics-edge-ai-engineer': ['role-robot-cell-vision',
    'Drawing of a fenced robot cell: an industrial arm with a camera above a conveyor of metal parts, one of them outlined by a detection box, a calibration checkerboard and a small computer on the fence.',
    'Perception work is tested on the device, in the cell. Illustration.'],
  'incident-responder-digital-forensics': ['role-forensics-lab',
    'Drawing of a forensic workbench: a laptop linked through a write-blocker to a hard drive, two sealed evidence bags, a custody form on a clipboard and a wall clock at three.',
    'Chain of custody: evidence is copied through a write-blocker and signed for. Illustration.'],
  'ot-ics-security-specialist': ['role-ot-control-cabinet',
    'Drawing of an open industrial control cabinet with a controller rack, a network switch and a small monitoring sensor; a hard hat and a high-visibility vest hang on the door, and a worker walks away among the plant’s pipework.',
    'OT security is done in the plant: a passive sensor watches the control network without touching it. Illustration.'],
  'operations-manager': ['role-operations-shift-handover',
    'Drawing of a factory shift handover: six operators in overalls, seen from behind, face a board with three bars and a shift grid, beside a bottling line.',
    'The handover at the board, where the shift’s OEE is read. Illustration.'],
  'logistics-and-transport-coordinator-manager': ['role-transport-documents',
    'Drawing of a desk with a stamped bill of lading and a vessel schedule; behind it, a gantry crane lifts a container from a ship at a quay.',
    'Every container moves on documents: the bill of lading, the customs entry, the schedule. Illustration.'],
  'warehouse-distribution-operations-manager': ['role-warehouse-aisle',
    'Drawing of a warehouse aisle: racking on both sides, a pick cart of totes with a handheld scanner, a dashed pick path on the floor and workers at two loading docks at the far end.',
    'From pick path to dock door: the flow a shift manager keeps moving. Illustration.'],
  'shipping-and-maritime-roles': ['role-shipbroker-desk',
    'Drawing of a shipbroker’s desk with a chart of vessel positions, a charter contract, a phone and a headset; through the window, a bulk carrier lies at anchor.',
    'A fixture is a ship, a cargo and a contract, agreed by phone. Illustration.'],
  'brand-manager': ['role-brand-shelf',
    'Drawing of a supermarket shelf of plain packs, with one brand’s block highlighted at eye level and a promotion tag beneath; a creative brief and a flat packaging proof rest on a trolley in the foreground.',
    'Share is won on the shelf: facings, position and the promotion tag. Illustration.'],

  'ai-engineer-llm-application-engineer': ['rag',
    'Diagram: a RAG pipeline in five steps. Split documents into chunks; embed them as vectors; store them in a vector database; retrieve the best passages; prompt the model to answer from them, with citations. Regression checks run on every change.',
    'The pipeline this section describes, in order.'],
  'mlops-ml-platform-ai-infrastructure-engineer': ['mlops',
    'Diagram: three layers. One, the ML platform: pipelines that train, test, register and deploy models. Two, AI infrastructure: operating GPU clusters. Three, inference and GPU performance: making trained models serve faster and cheaper.',
    'The three layers named in this section.'],
  'bi-developer-bi-analyst': ['star',
    'Diagram: a star schema. A central fact table of events is joined to three dimension tables: product, store and date.',
    'Why it is called a star: one fact table, dimensions around it.'],
  'soc-analyst': ['soc',
    'Diagram: three SOC tiers. Tier 1 reviews alerts and closes false positives; Tier 2 investigates escalations and isolates hosts; Tier 3 hunts proactively and writes detection rules, which feed back into the alert queue.',
    'How an alert moves through the tiers, and what comes back.'],
  'internal-auditor': ['threeway',
    'Diagram: a three-way match. The order, the receipt and the invoice must agree with one another before payment.',
    'The control this section’s audit tests.'],
  'external-auditor': ['vouching',
    'Diagram: testing one sampled sales invoice, one of 25. The auditor matches it to the contract, the delivery note and the bank receipt.',
    'One test, repeated across the sample.'],
  'data-engineer': ['datastack',
    'Diagram: a data pipeline from sources, through pipelines and the warehouse, to the transformation layer and its users. The data engineer owns the stretch from the sources to the warehouse.',
    'The pipeline, with this role’s stretch marked.'],
  'analytics-engineer': ['datastack',
    'Diagram: a data pipeline from sources, through pipelines and the warehouse, to the transformation layer and its users. The analytics engineer owns the transformation layer, which turns source tables into clean marts.',
    'The pipeline, with this role’s stretch marked.'],
  'demand-supply-planner-and-s-and-op-analyst': ['sop',
    'Diagram: a monthly planning loop. The demand planner produces the forecast; the supply planner turns it into a production and purchasing plan; the S&OP analyst prepares the gap analysis, scenarios and financial view; then the cycle repeats.',
    'The three jobs in this family, as one cycle.']
};

const plate = (name) => ({ s400: `img/plates/${name}-400.webp`, s800: `img/plates/${name}-800.webp` });

module.exports = {
  ROLE, DIAGRAM,
  field: (slug) => plate('field-' + slug),
  /* { alt, cap } and either img (the two files) or svg (the markup). */
  role(slug) {
    const f = ROLE[slug];
    if (!f) return null;
    const [key, alt, cap] = f;
    return DIAGRAM[key] ? { alt, cap, svg: DIAGRAM[key](slug) } : { alt, cap, img: plate(key) };
  }
};
