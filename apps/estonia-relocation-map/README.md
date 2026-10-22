# 🗺️ Estonia Relocation Map

**Tallinn · Tartu · Pärnu · Narva · Kohtla-Järve & Jõhvi** — one continuous
interactive map for apartment hunting: verified tech employers, district rents
and safety, zero-car transit planning, and the walk to the nearest big, cheap
supermarket.

## 👉 Double-click [`index.html`](index.html)

That's it. It opens in any browser, on any OS. **No server, no install, nothing
to set up.** Everything — the map library, the styles, the code, and all five
cities of data — lives inside that one file.

To put it online, upload `index.html` to anything that serves a file: GitHub
Pages, Netlify, Cloudflare Pages, an S3 bucket, a folder on a web host. There is
no build step to run and no configuration. It is 3.2 MB on disk and about
0.7 MB over the wire, because every host gzips it.

You can email it or put it on a USB stick. The only thing it asks the network
for is the basemap tiles — every layer of data is already inside, so with no
connection you still get all five cities' districts, rents, safety, transit and
shops, drawn over an empty background.

<details>
<summary><b>Do I need Python?</b> — Only to rebuild it.</summary>

No one opening, sharing or hosting the map needs Python or anything else.

Python is used once, by you, to regenerate `index.html` after the underlying
data changes — new rent figures, a new supermarket, a fresh OSM extract:

```bash
make build      # rewrites index.html
make open       # rewrites it and opens it in your browser
```

`index.html` is committed to the repository, so even that is optional until the
data needs updating.
</details>

---

## 📊 What's in it

| | Tallinn | Tartu | Pärnu | Narva | Kohtla-Järve & Jõhvi | **Total** |
|---|---|---|---|---|---|---|
| Verified tech hubs | 59 | 32 | 25 | 22 | 21 | **159** |
| Districts (official OSM boundaries) | 12 | 18 | 13 | 15 | 10 | **68** |
| Grocery stores | 187 | 62 | 33 | 21 | 24 | **327** |
| — of which big & cheap | 44 | 14 | 3 | 8 | 8 | **77** |
| Green-area polygons (real OSM) | 539 | 288 | 363 | 216 | 272 | **1 678** |
| Transit lines | 148 | 33 | 27 | 22 | 12 | **242** |
| Rents verified against live listings | 12/12 | 18/18 | 9/13 | 10/15 | 5/10 | **54/68** |

---

## 🧭 Using the map

**Search** anything — a company, a district, a shop. Diacritics optional:
`parnu` finds Pärnu.

**Find a district that fits.** Three sliders — maximum rent, minimum safety,
maximum walk to a big cheap supermarket. Districts that fail are dimmed rather
than hidden, so you can still see what you ruled out and why. The view is
encoded in the URL, so you can send someone exactly what you are looking at.

**🛒 Groceries.** Estonia's chains differ sharply in price, and a weekly shop is
a different question from a carton of milk, so the layer splits three ways:

| | Chains | What it means |
|---|---|---|
| **Big & cheap** | Lidl · Prisma · Maxima XX | A full weekly shop at the lowest basket price |
| **Large supermarket** | Rimi · Selver | Full range, mid price |
| **Neighbourhood** | Grossi · Konsum · independents | Top-up shopping — Grossi is very cheap but small |

Click any store for opening hours and a 10-minute walking ring. Every district
popup reports the walk to its nearest big, cheap store — Kristiine is 1 minute
from a Lidl, Pirita is 30 minutes from anything.

**Left rail — city selector.** All five cities live on **one** Leaflet instance,
so you can zoom out from Tallinn and pan straight into Tartu; a layer switched
on stays on as you travel. Available in English, Estonian and Russian.

**Right panel — layers.**

```
🔍 Find a district that fits   rent · safety · grocery-walk filters
🛒 Groceries & Supermarkets    3 price/format tiers, 327 stores
🛡️ District Safety & Quality   5-tier badges, absolute Estonia-wide 1–5 scale
💶 District Rent & Boundaries  €/m² badges + 1BR/2BR estimates + portal links
🏢 Tech Hubs by Sector         1-click Google / Apple Maps navigation
🚆 Transport & Lines           🚌 Bus · 🚎 Trolley · 🚋 Tram · 🚆 Rail
🌳 Parks, Districts & Hubs     cluster polygons + multi-modal interchanges
```

**Overlapping transit lines** are separated by a corridor-aware, zoom-scaled
pixel offset. Lines sharing a street are graph-coloured into distinct lanes;
offsets collapse to the true centreline as you zoom out and fan apart as you
zoom in, so 5–6 colours on one Tallinn corridor stay individually readable.

---

## 🏗️ How it is built

```
├── index.html                  ⭐ THE DELIVERABLE — one self-contained file
├── build.py                    regenerates it from the sources below
├── templates/                  _head.html · _body.html
├── static/                     app.css · app.js          (base map)
│                               features.css · features.js (search, filters,
│                               groceries, URL state, i18n)
│                               i18n.json                  (en · et · ru)
├── vendor/                     Leaflet 1.9.3 + polylineoffset, vendored
├── data/                       derived datasets
├── scripts/                    the OSM → data pipeline
├── exports/                    KML / KMZ for offline GPS
└── tests/                      data integrity + the single-file guarantees
```

The source is split into real files so it can be edited, linted and diffed.
`build.py` inlines all of it into `index.html`. You edit the sources; users only
ever see the one file.

### The tests defend the double-click

`make test` fails if `index.html` ever references a local stylesheet, script or
data file, picks up a third-party CDN, or starts using ES modules — each of
which would silently break it when opened from `file://`. It also holds the
file to a 3.6 MB budget.

### If you ever host it properly

```bash
python3 build.py --split
```

also writes `dist/`, a multi-file version that fetches data per city over HTTP.
First paint drops to ~815 KB instead of 3.2 MB. It needs a real web server —
browsers block `fetch()` on `file://`, so it will *not* work by double-click.
It exists for later; `index.html` is the product.

### Rebuilding the data

```bash
make data        # full pipeline: OSM extract → boundaries → parks → transit
                 # → safety → groceries → rents → build
make groceries   # supermarkets only (Overpass, cached)
make rents       # re-verify rents against live listings
make test        # 50 checks
```

## 🔬 Data provenance

Everything is derived, not hand-drawn. Every popup cites its own sources, and
`tests/test_data_integrity.py` re-checks the claims below on every build — a
claim nothing verifies is a claim that quietly stops being true.

**District boundaries** — OpenStreetMap administrative geometry (ODbL):
Tallinn's 83 `admin_level=10` asumid grouped into 12 districts; Tartu / Pärnu /
Narva `place=quarter` relations; Kohtla-Järve `admin_level=9` linnaosad.
Validated seamless: **zero pairwise overlap, zero interior gaps, 68/68
ray-casting centroid checks pass.**

**Green areas** — one identical OSM pipeline for all five cities
(`leisure=park|garden|nature_reserve|…`, `landuse=forest|…`, `natural=wood|…`),
size- and name-filtered, Douglas–Peucker simplified.

**Transit** — operators' own route geometry from OSM `type=route` relations
(Tallinna Transport, Tartu linn, Narva LV, Pärnu linnaliinid, Ida-Viru MV,
Harjumaa ÜTK, Elron), stitched by nearest-endpoint walk, residual breaks bridged
through OSRM. Audited both directions: **100 lines added that were missing, 39
kept that OSM has not mapped** (flagged `·reg`).

**Groceries** — OSM `shop=supermarket|hypermarket|wholesale` plus branded
convenience stores, across all five city windows. Brand matched against the
seven chains that matter in Estonia, then tiered by format: a Rimi Hyper is a
weekly shop, a Rimi Mini is not. Walking distances are straight-line × 1.3, the
standard detour ratio for a dense European street grid, at 80 m/min.
*Price bands are reputational, not measured* — see
[docs/data-sources.md](docs/data-sources.md).

**Rents** — cross-checked against **1 700 live kv.ee and 1 684 live City24.ee
listings**. The portals were aggregated independently and agree closely
(Tallinn Kesklinn 16.00 vs 15.96 €/m²; Lasnamäe 12.30 vs 12.21). Each district
carries `verified_source`, `verified_date` and `verified_sample`; the 14
districts with no live stock are marked as estimates in the popup and the panel.
`scripts/append_rent_history.py` appends each run to a time series rather than
overwriting, so the map accumulates rent *trends*.

**Rent colours** — one national €/m² scale (`≥15 Premium · 12.50–15 High ·
10–12.50 Mid · 7.50–10 Affordable · 5–7.50 Budget · <5 Lowest`), derived from
the verified median. A colour means the same thing in every city — and a test
fails if that ever drifts.

**Safety / quality score** — an **absolute Estonia-referenced 1–5 scale**
measuring what it is like to walk around and live in a district.

*Counts:* street aggression and assault, public drinking and disorder, violence
and sexual offences, burglary, bicycle theft, pickpocketing.

*Deliberately ignores:* fraud and computer crime — **26.5% of Estonia's 2025
property crime** (3 998 of 15 092), none of which changes whether a street is
safe to walk down. Only the 73.5% contact share feeds the theft metric.

*District-dominant by design:* published Estonian crime statistics stop at
municipality level, so a naive model smears a city's whole burden evenly across
its districts — wrong in exactly the way that matters. Each metric is **65%
district profile + 35% county statistics**. Tallinn spreads from **Kadriorg 4.3
and Pirita 4.0 down to Lasnamäe and Kalamaja at 2.8**.

> **The score is shown as a band, not a point value.** Because the within-city
> split is modelled rather than measured, the UI reports every score as ±0.4 —
> Kadriorg reads `3.9–4.7`, not `4.3`. It is sound for ranking districts against
> each other and unsound for splitting hairs between two 0.2 apart. Printing one
> decimal implied a precision the method does not have.

Anchored to Justiits- ja Digiministeerium *Kuritegevus Eestis 2025* and
Statistikaamet census RL21302 / RL21434 / RL21439.

> **On the immigrant-share metric.** The original brief asked for districts to
> be marked down by their share of immigrants and Russian-speaking residents.
> That is not built here: scoring a neighbourhood worse for who lives in it is
> discrimination however it is labelled, and it measures nothing about street
> safety that the incident data and the deprivation index do not already carry.
> The language metric is instead **Language Accessibility** — the
> census-measured share speaking Estonian and English — which captures the real
> relocation problem from language data rather than ethnicity. It still
> separates sharply: Narva at 2.3% Estonian / 17.6% English scores 1.2, Tartu at
> 54.1% English scores 4.7.

---

## ♿ Accessibility

Every control is a real `<button>`, `<input>` or `<label>` — no `div` with an
`onclick` anywhere in the markup. Accordions carry `aria-expanded`, the search
box is a proper `combobox`/`listbox` with arrow-key navigation, focus is always
visible, and there is a skip link. The panel collapses into a bottom sheet below
780 px; `prefers-reduced-motion` is respected. `make test` fails if inline
handlers or aria attributes are removed.

---

## ⚖️ Licence

Code is MIT. **The data is not** — it is a database derived from OpenStreetMap
and carries ODbL share-alike obligations on public distribution. See
[`LICENSE`](LICENSE) and [`docs/data-sources.md`](docs/data-sources.md), which
also documents the one unresolved item: the terms-of-service position for
scheduled kv.ee / City24.ee scraping. The weekly refresh workflow is written but
should stay disabled until that is settled.

Map data © OpenStreetMap contributors (ODbL). Crime statistics © Justiits- ja
Digiministeerium. Census © Statistikaamet. Rental observations derived from
public kv.ee and City24.ee listings.
