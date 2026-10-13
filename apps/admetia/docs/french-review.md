# French translation review — 12 October 2026

Multiple Luna agents reviewed the saved French text without editing site files. Their coverage lists were checked against the complete inventory: 14,115 translation locations, with none missing. This includes the interface, calculator questions and programme descriptions, shared atlas vocabulary and all 46 country guides, hiring pages and visa descriptions. The intro and 404 page received a separate review.

The parent compared every unique reported issue with the English source before making changes: 5,004 findings, of which 2,013 proposals were accepted, 2,488 were rewritten and 503 were rejected. Approved changes were propagated only to exact matching English/French pairs. This changed 4,687 dictionary locations, including repetitions; the count includes readability improvements. Further checks corrected grammar and a context-specific use of “Strong”: “Fort” for country-sector demand, “Très bon profil” for admissions.

## Examples of independent checks

- Corrected bachelor’s degrees translated as the French school-leaving baccalauréat, and recruitment programmes translated as postgraduate courses.
- Kept monthly and annual pay distinct, base pay distinct from total pay, and averages distinct from the value in the middle of a distribution.
- Preserved deadlines, hours, ages, visa identifiers, exceptions, optional requirements and statements about missing evidence.
- Rejected proposed sentences attached to neighbouring English entries; translated the actual entry instead.
- A second reviewer questioned the combined degree requirement in the New Zealand entry. The parent checked the [official Immigration New Zealand announcement](https://www.immigration.govt.nz/about-us/news-centre/post-study-work-visa-eligibility-extended-from-16-november-2026/) and kept the cumulative condition. Other secondary grammar findings and the Malaysia application subject were corrected.

## Language and scope

Use simple French, “vous”, short sentences and explanations for specialist terms. Official school, test and visa names remain recognizable. The original draft used Google Translate; this review is a subsequent editorial and meaning review, not a claim that every initial sentence was written without assistance.

Original Career Explorer research quotations remain in English, explicitly marked with `translate="no"` and `lang="en"`, and identified by a French notice. French navigation, guidance and plain names for all 154 career roles surround that source material; original role titles remain on hover. Therefore the site is not entirely French word for word.

## Validation

- `npm test`: all 15 suites passed.
- `npm run build`: production build passed.
- `node tools/i18n-report.js --lang=fr`: no mismatched placeholders or HTML tags. The report separately lists proper names and obsolete unused keys.
- Browser audit: 253 built-page and state checks, including 46 country pages and seven calculator tracks. All checked pages reported French document language; career page titles were translated.
- Long visa status badges wrap within the available width, avoiding overflow from the longer French text.
- Mobile browser checks: French role labels and search, country loading, saved language switching and production pages passed. The check waits for background country requests before navigating away.
- `graphify update .`: project graph refreshed.

The agents’ detailed reports and the parent’s decisions are retained locally under `.verify/french-review/` (ignored verification files).

## Second assurance pass

A separate pass reviewed the revised snapshot of all 14,115 saved dictionary locations: 6,422 interface/model locations and two country groups of 3,941 and 3,752. Coverage lists match the assigned inventory. Luna agents reported findings without editing the website. The parent checked all 502 findings against their exact English keys: 151 proposals were accepted, 326 were rewritten, 21 were rejected and four had already been corrected independently. These counts include wording improvements, not only errors.

Further parent checks covered numbers, dates and repeated terminology. Follow-up reviews of the resulting changes found and corrected agreement, contractions and wording that could imply an experience requirement or change a programme duration. An Austrian programme initially described as a double diploma was corrected to study combined with work: [voestalpine’s own description](https://www.voestalpine.com/group/en/jobs/students-pupils/) describes company work experience as part of the dual system. A Japanese ranking condition now clearly says two of the three named rankings.

The page audit showed that dictionary coverage alone was insufficient. It found text outside the original inventory and text whose rendering bypassed the translator:

- Reviewed 128 culture, outcome-definition and fee-note strings; added French for 123 that were missing and retained five existing translations.
- Translated 70 distinct labels across nine career diagrams, with explanations instead of unexplained technical abbreviations. Wrapped longer labels and checked that they fit their boxes; kept the highlighted role in the correct position.
- Three additional Luna reviewers examined all 267 employer programme labels. The parent checked every proposal and rewrote misleading or unclear ones, including financial assurance mistaken for insurance and banking services mistaken for retail sales.
- Expanded all 51 combinations of employer programme language codes into language names, for example “anglais, français”.
- Routed country office-culture text, programme labels, selected city descriptions and programme names on the front pages through the translator.
- Added a test for missing culture, outcomes, fee notes, employer programmes, language labels and diagram labels. Country dictionary loading now retries temporary request failures and allows another attempt after a persistent failure.
- Fixed a wrapping problem in the free-movement heading and used abbreviated French months in the narrow recruiting-calendar columns.

The detailed inventories, read-only reports, parent decisions and browser evidence for this pass are saved under `.verify/french-second-pass/` (ignored local verification files).

This is a stronger review, not proof of flawless French. Original research quotations, bibliographic source titles and some official names remain in their original language. Browser checks cover the listed pages and states, not every possible combination of calculator answers, passport choices, filters or interaction sequences. Translation review also does not independently establish that every underlying factual claim is current.

### Final checks and remaining scope

The final terminology check corrected 35 entries that had used geographic “non-European” for English “non-EU”; they now identify Union citizenship explicitly. A regression check protects that distinction. A follow-up reviewer checked these rewrites and the programme and language labels; the parent corrected confirmed grammar and meaning issues and rejected the proposed double-diploma wording after checking the employer’s description.

One underlying English source conflict also surfaced: Greece’s summary denied any post-study job-search permit while its detailed visa guidance described one. The [Greek ministry’s published implementing rules, article 36](https://migration.gov.gr/wp-content/uploads/2024/10/1_%CE%9A%CE%A5%CE%91-%CE%94%CE%99%CE%9A%CE%91%CE%99%CE%9F%CE%9B%CE%9F%CE%93%CE%97%CE%A4%CE%99%CE%9A%CE%A9%CE%9D.pdf) describe residence after studies to seek work. The contradictory denial was removed from the English, Italian and French summaries; detailed eligibility remains in the visa guide. This specific correction does not amount to a fresh legal audit of all countries.

- All 15 test suites pass, including the additional translation-coverage, nationality-scope, country-loading and diagram checks.
- Production build and JavaScript syntax checks pass; no placeholder or HTML-tag mismatches were found.
- The built-site mobile audit covered 292 page/state combinations: 200 page URLs, all 46 country guides and all 46 hiring planner states for a graduated applicant seeking a first job. No runtime errors or page-width overflow remained in that audit.
- Rechecked 96 affected states after the remaining rendering and wording fixes, with no runtime errors or page-width overflow. A further 25 final country checks passed after the last grammar and Greek-summary edits, with no runtime errors, overflow or malformed rewrites.
- The English-match scan was manually reviewed. Remaining matches identify official names, source titles, URLs or English names explained within French guidance. Original quotations are deliberately excluded from that scan and remain visibly identified as original English material.
- French job search, country loading and persisted language switching pass the interactive browser checks. All nine translated diagrams fit their boxes and SVG bounds at the tested mobile width.
- The project graph was refreshed after the code changes.

These browser checks used a 390-pixel viewport and automated text heuristics, supplemented by targeted visual inspection. They do not replace a native human proofreader or establish correctness for every screen size and every possible input combination. No claim of “perfect” or “spotless” French is made.
