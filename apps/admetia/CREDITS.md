# Photograph credits

Every photograph in `img/photo/` is **stored in this folder**. Nothing is hot-linked, so
the site still makes no network requests of any kind.

Eleven are from [Pexels](https://www.pexels.com) under the
[Pexels licence](https://www.pexels.com/license/): free to use, commercially and
non-commercially, with no attribution required. They are credited here anyway. One is from
Wikimedia Commons under CC0. The only change made to any of them is a resize and a JPEG
re-encode for the web.

| File | Used for | Subject | Source |
|---|---|---|---|
| `hero.jpg` | Landing page hero | Students writing an exam | [Pexels 37758542](https://www.pexels.com/photo/university-students-studying-at-desks-37758542/) |
| `scoring.jpg` | Landing "how the scoring works" band | Assessors going through a printed application file | [Pexels 8730981](https://www.pexels.com/photo/a-close-up-shot-of-people-reviewing-documents-8730981/) |
| `picker.jpg` | Business track picker header | Students working through notes together | [Pexels 7683734](https://www.pexels.com/photo/college-students-studying-together-7683734/) |
| `business.jpg` | Business card on the landing page | Graduation, caps in the air | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korea_University_Business_School_graduation_-_036A0151_-_52721871687.jpg) — KUBS, [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| `mba.jpg` | MBA card and MBA wizard header | A senior executive in front of a boardroom in session | [Pexels 7433929](https://www.pexels.com/photo/man-in-black-suit-standing-with-his-arms-crossed-7433929/) |
| `finance.jpg` | Finance card and wizard header | A trading desk of live candlestick charts | [Pexels 38412413](https://www.pexels.com/photo/digital-stock-market-charts-on-multiple-screens-38412413/) |
| `management.jpg` | Management card and wizard header | Consultants working through figures together | [Pexels 36765732](https://www.pexels.com/photo/professional-business-meeting-in-modern-office-36765732/) |
| `marketing.jpg` | Marketing card and wizard header | A wall of brand billboards | [Pexels 12602144](https://www.pexels.com/photo/billboards-outside-a-building-12602144/) |
| `it.jpg` | IT & Computing card on the landing page, and the track-picker header | Dense source code filling a monitor | [Pexels 6424583](https://www.pexels.com/photo/monitor-displaying-lines-of-code-6424583/) |
| `cs.jpg` | Computer Science card and wizard header | Two people reading code on a wall display | [Pexels 7988747](https://www.pexels.com/photo/men-looking-at-the-code-on-the-board-7988747/) |
| `datascience.jpg` | Data Science & AI card and wizard header | A laptop of dashboards beside printed charts | [Pexels 6248959](https://www.pexels.com/photo/photograph-of-a-paper-and-laptop-with-graphs-6248959/) |
| `conversion.jpg` | Conversion MSc card and wizard header | Hands typing first lines of HTML and JavaScript, notebook alongside | [Pexels 12899188](https://www.pexels.com/photo/close-up-of-a-man-pointing-code-on-a-laptop-screen-12899188/) |

The line drawings in `img/*.svg` are original to this project and carry no third-party
rights. They are inlined into the markup as `<svg>` rather than referenced as CSS masks —
see the "Icons" note in the README for why that distinction matters when the site is
opened as a local file.

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
here trains a model on it; `tools/gradcafe-aggregate.js` is rate-limited and committed so
the numbers can be re-derived rather than taken on trust.

Where a programme publishes a real acceptance rate — or one exists as a UK Freedom-of-
Information disclosure — that figure is used instead, and tagged accordingly. Applicant
reports are the weakest source in the vocabulary and are badged as such in the interface.

The MBA calculator's point values and school thresholds follow a points-based scoring
model published by a third-party MBA admissions consultancy, so its results match that
model's. The code, data structure and interface are this project's own, and the project
is not affiliated with or endorsed by that firm.

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
```

Then update this table. The credit line under each photograph on the site links here, so
an unlisted image is a broken promise rather than a cosmetic gap.
