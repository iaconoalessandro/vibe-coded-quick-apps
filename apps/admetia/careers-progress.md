# Career Explorer: progress checklist

Branch `career-explorer` (not pushed). Generator: `npm run careers` (tools/build-careers.js). Checks: `node tests/careers-test.js` (also part of `npm test`). Assumptions: careers/BUILD_NOTES.md.

## 1. Explore
- [x] Repo structure, pages, nav (identical hardcoded block on all 8 pages), shared CSS tokens, footer, edition picker
- [x] EN/IT: dictionary walk keyed by English (js/i18n.js, js/i18n-it.js); `translate="no"` skips a subtree
- [x] Deploy: GitHub Actions → `npm test` → `npm run build` (tools/build.js copies the repo to _site/, bundles the 8 root pages)
- [x] Counter: js/stats.js (GoatCounter, COUNTER empty = off; never on localhost)
- [x] No sitemap.xml exists yet (will be created)
- [x] Research: 13 merged reports (124 role families), index.md, italy-pay-addendum.md; research/careers is an older, separate library
- [x] Report survey: 3 label formats, 10 template labels, summary tables 7 columns, matrices in index 3.2

## 2. Generator
- [x] Parser → careers/data/careers.json (fails loudly on any missing section/role)
- [x] Italy add-on row → role mapping (tools/careers/italy-map.json), unmapped rows logged
- [x] Markdown renderer (subset used by the reports)
- [x] Templates: home, 11 backgrounds, 13 fields, roles index, 124 roles, compare, sources
- [x] Cross-links: branch, prev/next, related, exits (exact match), reached-from, backgrounds, calculators (tracks verified)
- [x] Search index JSON + vanilla JS search/filter/compare

## 3. Site integration
- [x] "Careers" in global nav of every existing page
- [x] sitemap.xml
- [x] One-line cross-link from Hiring and Atlas
- [x] Italian chrome strings + "this section is in English" notice

## 4. Checks (tests/careers-test.js)
- [x] Page counts = parsed counts
- [x] Internal links and anchors resolve
- [x] All template sections non-empty on every role page
- [x] Word count per role page within tolerance of source
- [x] No external requests; page weights; sitemap lists new pages
- [x] Existing test suites still pass

## 5. Visual review
- [x] Careers home, one field page, one long role page at desktop and 375px; fixes applied

## 6. Career Compass (docs/CAREER-COMPASS.md)
- [x] Plan, competitor review, plan v2
- [x] Tags for 124 roles, quoted research passages, generator, page, scoring, questionnaire and results
- [x] Italian interface, 17 checks in tests/careers-test.js, visual review (desktop, 375px, two editions, both languages)

## Status (9 October 2026)
All stages done; see careers/BUILD_NOTES.md for judgements and the unresolved-exit log. Not pushed, main untouched, not deployed.

Fixes made after looking at the first build: nav row overflow (Careers was invisible), scores table too wide (stacked pips; labelled rows on phones), search result links missing a slash, tables capped at the text measure, score labels overflowing at 375px, i18n keys that varied per page (restructured into constant fragments).
