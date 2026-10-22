# Data sources, licences and the one open legal question

Every layer on the map is derived from a named source. This is the register of
what those sources are, what they permit, and what still needs settling before
the map is used commercially.

---

## OpenStreetMap — ODbL 1.0

**Used for:** district boundaries, green areas, transit route geometry, grocery
stores.

Retrieved from the Geofabrik Estonia extract (`osm_extract_raw.py`) and, for
the grocery layer, the Overpass API (`build_grocery_stores.py`).

The JSON under `data/`, the payloads under `dist/data/`, the KML/KMZ exports and
the geometry embedded in the offline build together form a **derived database**
under the Open Database License. Public distribution therefore requires:

- attribution — `© OpenStreetMap contributors`, which appears in the Leaflet
  attribution control and in every district and store popup;
- share-alike — the derived database is offered under ODbL, not under the
  repository's MIT licence. `LICENSE` states this split explicitly.

The MIT grant covers the Python, JavaScript, CSS and HTML. It does not cover
the data.

**Overpass etiquette.** `build_grocery_stores.py` sends one query per city,
caches every response to `data/osm_cache/`, and only re-queries with
`--refresh`. It identifies itself with a real User-Agent. Do not remove the
cache layer — an uncached rebuild loop is what gets a client rate-limited, and
the weekly refresh workflow depends on this behaving.

---

## Justiits- ja Digiministeerium — *Kuritegevus Eestis 2025*

**Used for:** the county-level component of the safety score (35% of it).

Official Estonian crime statistics, published at municipality and county level.
Reproduced as aggregate figures only. Each scorecard cites the specific tables
it draws on.

**Important limitation, stated in the UI as well as here:** these statistics
stop at municipality level. The within-city split across districts is a
documented land-use and census **model**, not a measurement. The map presents
each score as a ±0.4 band for that reason. It is sound for ranking districts
against one another and unsound for separating two districts 0.2 apart.

---

## Statistikaamet — census RL21302 / RL21434 / RL21439

**Used for:** the district profile component of the safety score (65%) —
education, housing stock, household composition, language.

Public census aggregates. Reproduced as derived indices, never as microdata.

**On the language metric.** The original brief asked for districts to be scored
down by their share of immigrants and Russian-speaking residents. That is not
built here, and should not be added. Scoring a neighbourhood worse for who
lives in it is discrimination whatever it is labelled, and it measures nothing
about street safety that the incident data and the deprivation index do not
already carry. The metric in its place is **Language Accessibility** — the
census-measured share speaking Estonian and English — which captures the real
relocation problem (can you deal with a landlord, a pharmacy, a school?) from
language data rather than ethnicity. It still separates sharply: Narva at 2.3%
Estonian / 17.6% English scores 1.2; Tartu at 54.1% English scores 4.7.

---

## kv.ee and City24.ee — ⚠️ unresolved

**Used for:** verifying district rents against live listings.

`verify_rental_prices.py` aggregates roughly 3 400 public listings across the
two portals and stores **derived statistics only** — a median €/m², a sample
count, and a date. No listing text, image, address, price or contact detail is
retained or redistributed.

### This is the one item carrying real legal exposure

A one-off research snapshot and a scheduled job feeding a commercial product
are not the same thing, and the difference matters here.

`.github/workflows/refresh-data.yml` is written and correct but should stay
**disabled** until this is settled. Before enabling it:

1. Read the current terms of service for both portals, and check
   `robots.txt` for each path the verifier touches.
2. Confirm the request rate is defensible — the verifier is not aggressive, but
   "not aggressive" is not the same as "permitted".
3. Consider asking. The map drives traffic *to* their listings via the KV.ee
   and City24.ee buttons in every district popup, so a data arrangement may be
   easier to obtain than it first appears. That conversation is worth having
   before launch rather than after a complaint.

Until then, treat the rent figures as a dated snapshot — which is exactly how
the UI labels them.

### Coverage gap

54 of 68 districts carry live-listing verification. The other 14 have no
current rental stock on either portal and are model estimates:

| City | Districts without live listings |
|---|---|
| Kohtla-Järve | Kukruse, Tammiku, Uusküla, Käva, Sompa |
| Narva | Sutthoffi, Siivertsi, Olgina, Kulgu, Veekulgu |
| Pärnu | Tammiste, Paikuse, Sindi, Lodja |

These are flagged `est.` in the panel and marked as estimates in the popup, and
`tests/test_data_integrity.py` fails if an unverified district ever stops
declaring itself as one.

---

## Rent history

`scripts/append_rent_history.py` appends each verification run to
`data/rent_history.json` rather than overwriting. Nothing is ever rewritten, so
a bad scrape appears as an outlier in the series instead of silently replacing
good data — and the series itself becomes more valuable than any single
reading.

---

## Grocery chain classification

The price bands in `build_grocery_stores.py` (`price_band`, 1 = cheapest) are
**reputational, not measured**. They reflect the well-established ordering of
the Estonian grocery market — Lidl and Grossi cheapest, Prisma and Maxima
next, Rimi and Selver above them — but no basket survey backs them.

The store locations, names, brands, addresses and opening hours are OSM facts.
The price band is editorial judgement, and the popup says as much. If this
matters commercially, replace it with an actual basket comparison; the field is
already in the schema and nothing else needs to change.

Store format (`tier`) is derived from OSM tags and brand sub-format naming —
a Rimi Hyper is a weekly shop, a Rimi Mini is not. Grossi is deliberately
classified small-format despite its low prices, because it is a top-up shop.
