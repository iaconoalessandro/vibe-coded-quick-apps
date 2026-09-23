# Fonts

Stored here and served by `css/fonts.css` like every other local asset — no font CDN, no
network request. All are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org),
which permits use, bundling and redistribution; the licence text and copyright notice for
each family sits alongside it below.

| File | Family | Used by | Licence |
|---|---|---|---|
| `source-serif-4-roman.woff2` | Source Serif 4 (upright) | The City — headlines | `OFL-source-serif-4.txt` |
| `source-serif-4-italic.woff2` | Source Serif 4 (italic) | The City — headlines, quotes | `OFL-source-serif-4.txt` |
| `hanken-grotesk.woff2` | Hanken Grotesk | The City and FBI Watchlist — interface and body text | `OFL-hanken-grotesk.txt` |
| `noto-serif-display.woff2` | Noto Serif Display | Wall Street (condensed) and FBI Watchlist — headlines | `OFL-noto-serif-display.txt` |

Wall Street's body text and FBI Watchlist's decks use Times New Roman and Georgia, both
system fonts, so neither needs a file here.

Each file is the Latin `woff2` served by Google Fonts for that family, downloaded once and
committed — the browser fetches it from this folder, not from `fonts.googleapis.com`.
