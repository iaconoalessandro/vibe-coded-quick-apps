---
title: Brief for the Atlas expansion (round 5)
last_researched: 2026-10-03
scope: Instructions for the five researchers who deepen the 46 Atlas countries and their hubs, write one country brief each, and add standing and metrics to every hub. Internal.
confidence: n/a
review_by: 2027-03-31
---

# Brief: deepening the Atlas, country by country (round 5, 3 October 2026)

Today is **3 October 2026**. The Atlas (`map.html`) is a world map of 46 countries. Each country has a
record in `data/atlas/<id>.js` with hubs (cities), and each hub says which role families it hires for.
The first pass was fast and thin: many hubs rest on two or three claims, many families are "not rated",
and no country has its own research brief. Your job is to make each of your countries **deep, well
sourced and comparable**.

Read first, in this order:
1. `research/_working/brief-for-researchers.md`: the evidence standard (tags, sources, no invented
   numbers, save early, curl fallback). It all applies.
2. `data/atlas/index.js`: the vocabulary — role families, demand levels, the **standing** rubric,
   the **metrics** and the **areas**. Read the comments; they are the rules.
3. `data/atlas/de.js` (a big record) and `data/atlas/ee.js` (a small one): the record format.
4. `tests/atlas-test.js`: what the checks enforce.

## What to produce, for every country you are given

Work **one country at a time** and finish it (brief, record, Italian, tests passing, log) before you
start the next. Saved, passing countries are what survive an interruption.

### 1. A country brief: `research/countries/<id>-<slug>.md`

For example `research/countries/ee-estonia.md`, `research/countries/gb-united-kingdom.md`. Frontmatter
as in the shared brief (`last_researched: 2026-10-03`). Sections, in order:

1. **Bottom line** (5–8 bullets): where a European business or computing graduate should look in this
   country, and why.
2. **The economy and the graduate labour market**: size, structure, main sectors, youth/graduate
   unemployment, entry pay (by field where a source has it), language of work, how hiring works
   (graduate schemes, internships, calendar), visa/permit headline (point to the record's route for detail).
3. **Hubs**, one sub-section per hub: what the city is, population and output (with the metric
   sources), the sectors and the **named employers** (HQs, big sites, graduate programmes, with links),
   universities and business schools, start-up ecosystem, cost of living, and its **standing** for each
   key family at national / regional / world scale, with the reasoning and the rankings behind it.
4. **A comparison table of the hubs**: population, GDP, average pay, rent, top families, standing.
5. **Hypotheses tested** (3+), **Common mistakes and myths**, **Decision rules** (5–10).
6. **Gaps and claims to verify**, then **Sources** (every URL, with title and the date read).

Target 2,000–5,000 words for a big country, 1,200–2,500 for a small one. Concrete numbers, named
employers, dates. Plain British English.

### 2. A deeper record: `data/atlas/<id>.js`

- **More claims per hub.** Aim for at least 5 claims behind each hub (today many have 2–3): why it is a
  hub, size of the key sectors, named employers with HQs or large sites, graduate programmes, ecosystem
  rankings. Every claim follows the existing format: `{ t, tag, src, by, seen }`, `seen: '2026-10-03'`.
- **More named employers**: 4–8 per big hub, each with a short note and, where you have one, a claim (`c`).
- **Re-rate demand** where the new evidence supports it, strictly by the rule in `index.js`
  (dominant needs a `data` claim; strong needs a statistic or two claims about named employers with an
  HQ or major site; present needs one such employer; marginal needs a source saying entry hiring is
  small). A family you cannot support stays `'gap'`. Never upgrade on impression.
- **Standing** (new) on every hub: an array, one entry per key family — at least every family the hub
  rates dominant or strong, and at least one entry per hub:
  ```js
  standing: [
    { f: 'software', s: [5, 3, 1], c: ['ee-ict', 'ee-gser'] },   // national, regional, world
    { f: 'finance',  s: [4, 2, 1], c: ['ee-wise'] }
  ],
  ```
  The three steps never rise (national ≥ regional ≥ world). The region is the country's map view:
  Europe; North America (US, Canada); the Middle East (Gulf states, Turkey, Israel); Asia-Pacific (the
  rest, Australia and New Zealand included). A 4 or 5 beyond the country needs a claim that compares
  cities across that area: a published ranking (GFCI for financial centres, Startup Genome's GSER for
  start-up ecosystems, Fortune Global 500 headquarters counts, Kearney Global Cities, QS Best Student
  Cities, a Eurostat or OECD regional table…) or a cross-country statistic. Say in the brief why each
  step is what it is. Benchmarks, so steps mean the same everywhere: world 5 in finance is New York or
  London; world 5 in software/AI is the San Francisco Bay Area; regional 5 in European finance is London.
  Most hubs are 1–2 at world scale. Be sober: a regional 4 means "top five in Europe".
- **Metrics** (new) on every hub, as many of the four as you can source; `pop` is required:
  ```js
  metrics: {
    pop:  { v: 461000, year: 2025, area: 'city',   tag: 'data', src: 'https://…', by: 'Statistics Estonia, population by municipality', seen: '2026-10-03' },
    gdp:  { v: 25.1, cur: 'EUR', year: 2023, area: 'region', tag: 'data', src: 'https://…', by: 'Statistics Estonia, GDP by county', seen: '2026-10-03' },
    wage: { v: 2350, cur: 'EUR', basis: 'mean', year: 2025, area: 'region', tag: 'data', src: 'https://…', by: '…', seen: '2026-10-03' },
    rent: { v: 800, cur: 'EUR', year: 2026, area: 'city', tag: 'anecdotal', src: 'https://www.numbeo.com/…', by: 'Numbeo (crowd-sourced), one-bedroom flat in the centre', seen: '2026-10-03' }
  },
  ```
  - `gdp` is in **billions** of the currency, `wage` is **monthly gross**, `rent` is **monthly**, both in
    the currency's units. Use the source's own currency (ISO code). Convert annual pay to monthly by
    dividing by 12 and say so in `by` ("annual ÷ 12").
  - `area` is `city`, `metro` or `region` (say exactly which in the brief). **Within one country use the
    same source and the same kind of area for every hub of a metric**, so the chart compares like with
    like. If one hub only has a different area, leave that metric out for it rather than mix.
  - Good sources: national statistics offices; Eurostat metropolitan regions (`met_10r_3gdp`,
    `met_pjanaggr3`) or NUTS tables; the OECD metropolitan database; US BEA GDP by metro and BLS OEWS
    wages; ONS (UK); Statistics Canada; ABS (Australia); city statistical yearbooks or bulletins (China,
    Japan, Korea). Rent: an official rent statistic where one exists (tag `data`), otherwise Numbeo
    (tag `anecdotal`, and say "crowd-sourced").
  - No metric without a number you read on the page. A missing metric is fine; an invented one is not.
- **Country level**: update `summary` (keep it 2–3 sentences) if the picture changed; add `work` items
  where you found something (for example "Entry pay", "Recruiting calendar", "Language"); update `gaps`
  (remove what you closed, add what you could not); add the brief to `briefs`:
  `briefs: [['countries/ee-estonia.md', 'Country brief: hubs, employers, pay and standing']]`.
  Update `checked: '2026-10-03'` and the comment at the top of the file.
- **New hubs**: only where the record's own gaps name a missing city (for example Galway, Zug, Leuven),
  at most two per country, each with the full set (coordinates rounded to 0.01°, why, employers, demand,
  standing, metrics).
- **Italian.** Every English sentence the page shows (summary, sectors, knownFor, employer notes and
  labels, route/work/arrival labels, gaps, brief descriptions, claim texts) must have an Italian entry
  in the same file's `I18N.add('it', {…})` block, with **exactly the same numbers** (Italian separators
  are fine: 36.000 for 36,000). If you edit an English sentence, edit its key too, or the test flags a
  stale entry. Natural Italian, proper nouns unchanged.

### 3. A verification log: `research/verification/<your log file>`

One section per country under its existing P number (in the record's `log` field): every claim and
metric you added or changed, with the source, what the page says (a short quote or the figure), and
any rating you changed (old → new, and why). Same style as `research/verification/round-4a.md`.

## Checks you must run (after every country)

```
node tests/atlas-test.js | grep -E "FAIL|passed"
ATLAS_ONLY=ee node tests/i18n-test.js | grep -E "FAIL|passed"
```

(`ATLAS_ONLY` takes your country ids, comma-separated, and prints every missing or mismatched
translation for them.) The atlas test prints the problems of each failing record next to it. Other
researchers are editing other records at the same time: **fix only failures in your own countries**,
and ignore the others.

## Boundaries

- Edit **only**: your countries' `data/atlas/<id>.js`, your new `research/countries/<id>-*.md` files,
  and your own verification log. Do not touch `index.js`, `geo.js`, `js/`, `css/`, `tests/`, other
  records, or any other research file (the lead integrates the shared files: README, claims register,
  freshness register).
- Keep existing claim ids. Remove a claim only if a newer primary source contradicts it (log it).
- Do not change hub ids or coordinates of existing hubs (they are in links people share).
- Use your own scratchpad subfolder for helper scripts and downloads.
- WebSearch may be rate-limited: prefer fetching primary pages you know (statistics offices, employer
  career pages, rankings). If WebFetch is blocked, `curl -sL -A "Mozilla/5.0" <url>`; PDFs with `pypdf`.

## When you finish

Reply with, per country: hubs, claims before → after, families re-rated, new hubs, metrics coverage
(how many hubs have pop / gdp / wage / rent); then the 5 claims you are least sure of across all your
countries, and anything the lead must fix in shared files.
