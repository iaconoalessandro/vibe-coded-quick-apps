# Credits

## School logos

The Programme Directory (including its side-by-side comparison) and the business
calculator results use 81 school and university marks stored in `img/schools/`.
They identify the institution named beside each image. The marks belong to their
respective institutions; their inclusion does not imply affiliation or endorsement.

`img/schools/sources.json` records the institution, official website, exact asset
source, retrieval date, and local file for every mark. Assets were retrieved from
the institutions' websites and brand resources, with Wikipedia/Wikimedia-hosted
marks used where the official site could not be downloaded. The Manchester,
Berkeley Haas, emlyon, INSEAD, RSM and Stanford replacements were supplied by
the user; their attachment names are recorded separately in the source registry.
Those files are stored unchanged, with display crops applied by the shared component.
Other logos were rasterised
or resized for display, retaining their colours and proportions; Darden and Ross
retain their original SVGs. Display viewports isolate symbols from accompanying wordmarks
where a separable symbol exists, without changing the source files. Coloured
tiles use matching backgrounds, and transparent white logos use dark backgrounds.
Pages load these files locally and do
not contact the source websites or a third-party logo service.

## Illustrations

The drawings in `img/plates/` were made for Admetia on 11 October 2026 with an AI image
generator, from the briefs in `docs/image-audit/image-prompts.md`, and are stored with
the site like everything else. There are 57: a plate on each of the 13 career-field
pages (`field-*`), a scene on 11 role pages (`role-*`) and a street scene on all 46 country
overviews in the Atlas (`photo-*`, named for the brief they came from).

**They are illustrations, not photographs, and every caption says so.** A country's
drawing is an impression of its lead hub's working district, not a record of a real
street: buildings, signs and people are invented, and nothing in a drawing is evidence
for anything a guide says. No drawing depicts or implies a real employer, product or
person. Guides that carry official travel advice have a drawing too; it says nothing about whether to go, and the advice is the first thing in the guide's text.

The eight diagrams on role pages are not images: they are drawn in the page from the
role's own paragraph (`tools/careers/figures.js`), and a test checks that their labels
use only that paragraph's words.

`tools/build-plates.sh` makes the two WebP sizes each page serves from the PNG masters,
which are about 3 MB each and are not kept in the repository.

## Archived photographs

These photographs were removed from the site on 10 October 2026. The source files remain archived for their attribution history and are excluded from the published build.

Every photograph in `img/photo/` is **stored in this folder**. Nothing is hot-linked: the
pages fetch no images, fonts or scripts from anywhere else. (The only request that leaves
the site is the anonymous visit count described in the README.)

Eleven are from [Pexels](https://www.pexels.com) under the
[Pexels licence](https://www.pexels.com/license/): free to use, commercially and
non-commercially, with no attribution required. They are credited here anyway. One is from
Wikimedia Commons under CC0. The only change made to any of them is a resize and a JPEG
re-encode for the web.

| File | Used for | Subject | Source |
|---|---|---|---|
| `hero.jpg` | Lead photograph of *Choose a master's* (`study.html`; the front page until 10 October 2026) | Students writing an exam | [Pexels 37758542](https://www.pexels.com/photo/university-students-studying-at-desks-37758542/) |
| `../og-admetia.jpg` | The link-preview card shown when the site is shared (made from `hero.jpg`, set in the site's own typefaces) | Students writing an exam | as `hero.jpg` |
| `scoring.jpg` | Header of *Find an internship or job* (`jobs.html`) | Assessors going through a printed application file | [Pexels 8730981](https://www.pexels.com/photo/a-close-up-shot-of-people-reviewing-documents-8730981/) |
| `picker.jpg` | Front-page photograph, and the Business section-front header | Students working through notes together | [Pexels 7683734](https://www.pexels.com/photo/college-students-studying-together-7683734/) |
| `business.jpg` | Business entry on the front page | Graduation, caps in the air | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korea_University_Business_School_graduation_-_036A0151_-_52721871687.jpg) — KUBS, [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| `mba.jpg` | MBA story on the Business front, and the MBA calculator header | A senior executive in front of a boardroom in session | [Pexels 7433929](https://www.pexels.com/photo/man-in-black-suit-standing-with-his-arms-crossed-7433929/) |
| `finance.jpg` | Finance story on the Business front, and its calculator header | A trading desk of live candlestick charts | [Pexels 38412413](https://www.pexels.com/photo/digital-stock-market-charts-on-multiple-screens-38412413/) |
| `management.jpg` | Management story on the Business front, and its calculator header | Consultants working through figures together | [Pexels 36765732](https://www.pexels.com/photo/professional-business-meeting-in-modern-office-36765732/) |
| `marketing.jpg` | Marketing story on the Business front, and its calculator header | A wall of brand billboards | [Pexels 12602144](https://www.pexels.com/photo/billboards-outside-a-building-12602144/) |
| `it.jpg` | IT & Computing section-front header | Dense source code filling a monitor | [Pexels 6424583](https://www.pexels.com/photo/monitor-displaying-lines-of-code-6424583/) |
| `cs.jpg` | Computer Science story on the IT front, and its calculator header | Two people reading code on a wall display | [Pexels 7988747](https://www.pexels.com/photo/men-looking-at-the-code-on-the-board-7988747/) |
| `datascience.jpg` | Data Science & AI story on the IT front, and its calculator header | A laptop of dashboards beside printed charts | [Pexels 6248959](https://www.pexels.com/photo/photograph-of-a-paper-and-laptop-with-graphs-6248959/) |
| `conversion.jpg` | Conversion story on the IT front, and its calculator header | Hands typing first lines of HTML and JavaScript, notebook alongside | [Pexels 12899188](https://www.pexels.com/photo/close-up-of-a-man-pointing-code-on-a-laptop-screen-12899188/) |

The line drawings in `img/*.svg` are original to this project and carry no third-party
rights. They are inlined into the markup as `<svg>` rather than referenced as CSS masks —
see the "Icons" note in the README for why that distinction matters when the site is
opened as a local file.

## Typefaces

Like the photographs, the fonts are **stored in `fonts/`** and served from there
(`css/fonts.css`); nothing is loaded from a font service. All are licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org), which allows use, bundling and
redistribution. The City uses the two families below.

| Edition | Typefaces |
|---|---|
| The City | Source Serif 4 (Adobe), Hanken Grotesk (Hanken Design Co.) |

The licence text and copyright notice for each family are in `fonts/`.

The City takes its proportions from real papers' sites, measured or
matched by eye, but use none of their names, logos or proprietary typefaces.

## A note on the brand billboards

`marketing.jpg` shows real brand signage on a public street. It illustrates what the
marketing track is *about* and implies no relationship with, or endorsement by, any brand
in the photograph — as with the schools, this tool is independent and unaffiliated.

## Data credited to others

The IT & Computing track shows five years of applicant-reported admissions outcomes,
collected once from **[TheGradCafe](https://www.thegradcafe.com/survey)**, whose users
posted every one of those results. Only aggregates ship in this repository — counts,
shares and decision-date distributions. No applicant's own text is stored or reproduced,
and the collector drops it at the point of download rather than filtering it later.

Their `robots.txt` permits crawling and signals `use=reference`, `ai-train=no`. Nothing
here trains a model on it; `tools/data-collection/gradcafe-aggregate.js` is rate-limited and committed so
the numbers can be re-derived rather than taken on trust.

Where a programme publishes a real acceptance rate — or one exists as a UK Freedom-of-
Information disclosure — that figure is used instead, and tagged accordingly. Applicant
reports are the weakest source in the vocabulary and are badged as such in the interface.

The MBA calculator uses a points-based evaluation model across 42 business schools.
The code, data structure, calibrations and interface are this project's own.

Four MBA schools — CEIBS, Peking Guanghua, Fudan and Nanyang — are calibrated on the
same scale: each school's published or reported test averages, experience minimum and
selectivity, cross-checked against school pages, class profiles and applicant reviews,
and set against the schools already on the scale with similar figures. The same mix of
sources informs the master's programmes, where every fact carries a tag saying where it
came from.

The Atlas's country shapes (`data/atlas/geo.js`) are derived from **[Natural Earth](https://www.naturalearthdata.com)** 1:10m Admin 0 countries, in its Italian point-of-view edition, which is in the public domain ([terms of use](https://www.naturalearthdata.com/about/terms-of-use/)). `tools/atlas-geo.js` simplifies and re-encodes them; no position on any boundary is implied beyond what that edition draws. Everything else in the Atlas — the claims, ratings and routes — cites its own source, page by page.

## Choosing a replacement

Each image has to be recognisable as its subject **at a glance and at card size**. That is
the whole job: a photograph of a grand hall could equally be a parliament, so it does not
illustrate a business school. Prefer the specific over the atmospheric — screens of live
tickers over a city skyline, a wall of logos over a street at night, code over a data
centre.

Keep the aspect ratios roughly as they are — cards are cropped to `16 / 9`, the lone MBA
banner to `3 / 1` — and re-run the same resize:

```bash
sips -s format jpeg -s formatOptions 70 --resampleWidth 1800 source.jpg --out img/photo/hero.jpg
tools/build-images.sh   # the sized WebP copies the pages actually serve (needs cwebp)
```

Then update this table. The credit line under each photograph on the site links here, so
an unlisted image is a broken promise rather than a cosmetic gap.
