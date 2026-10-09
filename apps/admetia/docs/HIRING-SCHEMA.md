# How hiring works: file schema and writing brief

Every country has `data/atlas/entry/<id>.js` (id in lower case: `de`, `gb`…). The plan
(`docs/PLANNING-INTELLIGENCE-SPEC.md` §1) asks for the **same rows in every country**. This file
says what each row is, the exact keys, and how to write them. `node tools/hiring-check.js <id…>`
checks your countries and prints what is missing; **run it until your countries pass.**

Vocabulary (ids you may use) lives in `data/atlas/index.js`: `entryRoutes`, `entryPaths`,
`entryBasis`, `entryRows`, `entryCustoms`, `entryLang`, `entryIntl`, `entryFields`, `workRows`.

## Rules (read first)

1. **Every line is a triple `[English, Italian, 'source-ids']`.** The Italian is a real translation and
   keeps every number identical to the English (same digits; `12,000` ↔ `12.000` is fine). Source ids
   are keys in the file's own `sources: {…}`, space-separated, or `ours`.
2. **Never state a fact you did not read.** Read the page (WebFetch / WebSearch). A number needs a
   source that shows it. `ours` ("Our reading", shown to the reader as Admetia's own judgment) is for
   a general statement of practice that no single page states; use it sparingly, never for a number
   or a named programme, and never to fill space. If you cannot establish a row, say what is known
   in general terms and mark it `ours`: the plan wants every row present, honest about its basis.
3. **Tags** on sources: `data` (statistics, laws, official tables), `employer-stated` (an employer's or
   university's own page), `practitioner consensus` (career guides, research-library briefs),
   `anecdotal` (one person's account; never used as a rule). Source format:
   `'id': ['tag', 'Title and publisher', 'https://…', '2026-10-08']` (date you read it; links must be
   https pages. `research/…md` links are allowed for the library's own briefs but prefer the primary page.)
4. Today is **2026-10-08**; set `checked: '2026-10-08'` for what you touched, `review` six months on.
5. Keep what is already in the file when it is right: extend, do not rewrite. Fix anything you find
   wrong. Every source must be cited somewhere (the check fails on orphans).
6. Short and concrete: 1–3 sentences per line, named things (programmes, portals, laws), numbers
   with years. No marketing language, no padding.
7. Only edit `data/atlas/entry/<id>.js` and `data/atlas/<id>.js` for **your** countries. Do not touch any
   other file. Do not run `graphify`, `git`, or the build.

## What to add to each entry file

### `ways` (extend the existing list; 3–6 routes, ranked most-used first)

Add to every way: `r` (route id), `p` (paths it serves: `first`, `intern`, `exp`, space-separated),
`basis` (what the *ranking* rests on: `data`, `consensus`, `anecdotal`). Put the evidence for the
ranking in the way's text (a share, a survey, a count). Make sure the list includes, where they
exist in that country: graduate schemes; internship-to-offer conversion; dual-study / working-student;
apprenticeship / alternance; campus recruiting; the national new-graduate cycle (Japan shinsotsu,
Korea open recruitment, China campus seasons, India-style placements); public-sector exams; agencies;
referrals; start-ups; contract/freelance first; company transfer. Also include a way for the
**experienced hire** (`p: 'exp'`) somewhere.

```js
{ name: ['Internship (Praktikum)…', 'Tirocinio (Praktikum)…'], r: 'intern', p: 'first intern', basis: 'data', t: [ [en, it, 'ids'] ] }
```

### `customs`: a verdict plus a line for **all 17**

Each is `{ k: id, v: valueId, t: [lines] }`. Exactly one of each:

| group | k | values |
|---|---|---|
| market | `season` | fixed (one national season) · cyclical · rolling |
| market | `masters` | expected · helpful · irrelevant · handicap (overqualified) |
| market | `degrees` | free (foreign degrees accepted without paperwork) · eval (evaluation often asked) · regulated (only regulated professions — law, medicine, engineering, teaching, architecture, accountancy — need recognition). The line names the body (ENIC-NARIC centre, Anabin, ENIC, etc.) |
| market | `brand` | high · some · low (school-blind / skills-based) |
| market | `dual` | strong · some · little (apprenticeship / dual-study culture) |
| market | `publicw` | high · mid · low (weight of the public sector as graduate employer) |
| market | `sponsorr` | ready · some · rare (employers who actually sponsor visas; link to Visas, do not repeat the rules) |
| apply | `photo` | expected · common · optional · avoid |
| apply | `cv` | one · two · long (typical CV length and format) |
| apply | `letter` | expected · optional · skip |
| apply | `refs` | required · later · none |
| apply | `docs` | certified (certified/translated/apostilled copies) · copies · none (transcripts, certificates, Zeugnisse) |
| apply | `salary` | asked · later · never (salary expectation in the application) |
| apply | `check` | routine · some · rare (background and reference checks) |
| apply | `contact` | people · mixed · open |
| apply | `abroad` | there · hard · workable |
| apply | `language` | local · mostly · english |

The existing four (`photo`, `contact`, `abroad`, `language`) stay; check them and add the other 13.

### `rows`: five text rows, each a list of lines

```js
rows: {
  process:  [...], // number and type of stages (online tests, video interviews, assessment centres, cases, coding tests, panels, group exercises), typical time from application to offer, interview language, dress/punctuality, assessment-centre norms
  offer:    [...], // how an offer and contract arrive: probation, 13th/14th salary, notice period, whether you negotiate, time to decide
  sponsor:  [...], // which employers actually sponsor non-citizens, labour-market tests, quotas/caps, how early to ask, what an employer wants to hear (not the visa rules themselves)
  where:    [...], // official portals, employer career pages, graduate boards, career fairs, university career services, recruiters worth knowing, communities (name them; cite the pages)
  mistakes: [...]  // the common mistakes in this country: wrong window, rejected CV format, skipping the internship that is the real entry …
}
```
(`where` text should name the portals in the prepared list below, only those you can verify.)

### `lang`: language at work by field (≥3 entries, ≥1 business and ≥1 computing)

`{ f: fieldId, v: 'english'|'bilingual'|'local', lv: 'B2'|'C1'|…, t: [lines] }` — the level
employers ask and the evidence they ask for (certificate, interview, test). Fields: `finance, accounting,
consulting, marketing, business, public, tech, ai, cyber`. Aim for 5–9 of the nine fields.

### `programmes`: ≥3 named employer programmes (more for big hubs)

```js
{ n: 'Programme name', o: 'Employer', f: 'finance', in: 19 /* intake per year or null */,
  w: [9, 11] /* months applications open, first,last, or null */, lang: 'DE EN', intl: 'eu', ids: 'src-id' }
```
`intl`: `yes` (takes international graduates), `eu` (EU/EEA citizens only), `local` (local degree
or residents only), `unknown`. Use real programmes whose page you read. Intake and window `null`
if the page does not say. No Italian needed (names and numbers only).

### `outcomes` (optional): lines on what the national figures miss

Return-offer or conversion rates, time to first job, over-qualification context, with sources.
The statistical table itself is generated (`data/atlas/outcomes.js`); do not copy it.

### Existing keys
`lead, cycle, fields, schools, events, sources, checked, review` as before. `cycle`, `schools`,
`events` and both field groups must be present (`fields`: at least one business and one computing).

## Working there (in `data/atlas/<id>.js`, the country record)

`rec.work` must hold these four rows, with these exact names, each `{ k, c: [claimIds] }`:
**Language**, **Recruiting calendar**, **Where demand is now**, **Graduate labour market** — plus any
pay, tax, rent or cost rows already there (leave those alone; another stream owns them). If a row has a
variant name (`Graduate employment and unemployment`, `Where graduates go`, `Labour market`…) rename it to the
canonical name when the content fits. For a missing row add the claim(s) to `rec.claims`
(`{ t, tag, src, by, seen }`, a real source you read) and the Italian for every new sentence in the file's
`I18N.add('it', {…})` dictionary (key = the English string, exactly). Recruiting calendar: the months when
graduate applications open and close, internships and the main intake dates. Language: the language
reality at work, with a source. Where demand is now: a dated statistic or named employer evidence.
Graduate labour market: a number (graduate employment/unemployment) or the most reliable statement
available; the generated Eurostat table does not replace the sentence.

## Raw material already collected

In `/private/tmp/claude-501/-Users-alessandro-Documents-Vibe-Coding-Projects-admetia/69b39413-44fe-4ed1-b3d7-76e3c56cc8d9/scratchpad/raw/`:
`where-1.json` (GB IE FR BE NL LU DE AT CH IT ES PT), `where-2.json` (DK SE NO FI IS EE LT PL CZ RO BG GR MT),
`where-3.json` (US CA AU NZ JP KR CN HK SG TW MY TH VN), `where-4.json` (TR IL RU AE SA QA KW OM): portals,
boards, fairs, university services, public recruitment, recruiters, collected by a quick pass. Treat
them as leads, not truth: **open a page yourself before you cite it**. A file may not exist yet; then search.
The library has material too: `research/getting-in/{employer-pipelines,breaking-in,recruiting-calendar,
applications-and-interviews}.md`, `research/countries/<id>-<name>.md`, `research/places/*.md`,
`research/careers/*.md`, `research/visas_immigration/<country>/`.

## Working notes (learned the hard way)

- **Search is a shared, limited resource** (200 searches per turn across all agents, and an account rate
  limit). Use WebSearch sparingly: at most ~20 per country. Prefer WebFetch on pages you already
  know (an employer's graduate page, a ministry page, a university career-service page, the Wikipedia/
  official page for a law) and on the leads in `raw/where-N.json`. If a search or fetch is refused for
  rate-limit reasons, stop, finish and check whatever country you are in, and report what is left.
- **Save progress**: finish one country completely (check passes) before starting the next, so a
  stop never leaves a half-edited file. Never leave a file that does not run (`node tools/hiring-check.js
  <id>` loads it).
- **PDFs**: `python3 -c "import pypdf"` works. Save with `curl -sL -o x.pdf URL` into the
  scratchpad (not the repo) and extract with `pypdf.PdfReader(...).pages[i].extract_text()`.
- Already read in earlier rounds (extracted text in the scratchpad: `jasso.txt`, `gk.txt`, `nzage.txt`,
  and dl/, pdf/): JASSO job-hunting guide 2027, Gakujo survey Aug 2026, NZAGE Key Insights 2026.
- Denmark (`data/atlas/entry/dk.js`, `data/atlas/dk.js`) and Germany, the UK, Estonia, Malta, Romania,
  China are finished: use any of them as a model for shape, length and tone.

## Finishing

Run `node tools/hiring-check.js <your ids>` until it prints `N of N countries pass`, then
`node tests/atlas-test.js` and `node tests/i18n-test.js` (other countries' failures are not yours; yours must be clean).
Reply with: per country, the number of `ours` lines left, anything you could not establish, and
any fact in the existing file you corrected.
