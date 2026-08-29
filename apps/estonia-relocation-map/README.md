# 🗺️ Estonia Tech Hubs & Public Transit Map

**Tallinn · Tartu · Pärnu · Narva · Kohtla-Järve & Jõhvi** — one continuous interactive map for apartment hunting, zero-car transit planning, and exploring Estonia's verified tech, robotics, chemistry and R&D ecosystems.

👉 **Double-click [`index.html`](./index.html)** — it opens in any browser, no server, no install, on any OS.

---

## 📊 What's in it

| | Tallinn | Tartu | Pärnu | Narva | Kohtla-Järve & Jõhvi | **Total** |
|---|---|---|---|---|---|---|
| Verified tech hubs | 59 | 32 | 25 | 22 | 21 | **159** |
| Districts (official OSM boundaries) | 12 | 18 | 13 | 15 | 10 | **68** |
| Green-area polygons (real OSM) | 539 | 288 | 363 | 216 | 272 | **1 678** |
| Transit lines | 148 | 33 | 27 | 22 | 12 | **242** |
| Rent figures verified against live listings | 12/12 | 18/18 | 9/13 | 10/15 | 5/10 | **54/68** |

---

## 🧭 Using the map

**Left rail — city selector.** Click a city to fly the camera there and repoint the control panel. Every layer lives on **one** Leaflet instance, so you can zoom out from Tallinn and pan straight into Tartu; a layer you switched on stays on as you travel. Each city's parks, labels and layers load lazily by viewport, so all 159 hubs / 242 routes / 68 scorecards stay available without stalling the browser.

**Right panel — layers.**

```
🛡️ District Safety & Quality   5-tier smiley badges, absolute Estonia-wide 1–5 scale
💶 District Rent & Boundaries  €/m² badges + 1BR/2BR estimates + KV.ee / City24.ee links
🏢 Tech Hubs by Sector         1-click Google / Apple Maps navigation
🚆 Transport & Lines           🚌 Bus (key centre / suburbs / outside city) · 🚎 Trolley · 🚋 Tram · 🚆 Rail
🌐 Tech Districts & Hubs       cluster polygons + multi-modal interchanges
```

Parks and district watermark labels are always on. `✨ All Transit ON` / `🧹 All Transit OFF` toggle everything at once.

**Overlapping transit lines** are separated by a corridor-aware, zoom-scaled pixel offset. Lines that share a street are graph-coloured into distinct lanes; the offsets collapse to the true centreline as you zoom out and fan apart as you zoom in, so 5–6 colours on one Tallinn corridor stay individually readable.

---

## 🔬 Data provenance

Everything is derived, not hand-drawn. Every district popup cites its own sources.

**District boundaries** — OpenStreetMap administrative geometry (ODbL): Tallinn's 83 `admin_level=10` asumid grouped into 12 districts; Tartu / Pärnu / Narva `place=quarter` relations (the cities' own official asumid); Kohtla-Järve `admin_level=9` linnaosad, sub-divided by nearest-centre partition where the map carries finer districts than the state does. Validated seamless: **zero pairwise overlap, zero interior gaps, 68/68 ray-casting centroid checks pass.**

**Green areas** — one identical OSM pipeline for all five cities (`leisure=park|garden|nature_reserve|recreation_ground`, `landuse=forest|recreation_ground|village_green|allotments|cemetery`, `natural=wood|…`), size- and name-filtered, Douglas–Peucker simplified. The synthetic 5-point "diamond" placeholders Pärnu / Narva / Kohtla-Järve used to carry are gone.

**Transit** — operators' own route geometry from OSM `type=route` relations (Tallinna Transport, Tartu linn, Narva LV, Pärnu linnaliinid, Ida-Viru MV, Harjumaa ÜTK, Elron), stitched by nearest-endpoint walk, with residual breaks bridged through OSRM so every line follows real streets end to end. Audited against the map's existing registry in both directions: **100 lines added that were missing, 39 kept that OSM has not mapped** (flagged `·reg` in the panel).

**Rents** — cross-checked against **1 700 live kv.ee listings and 1 684 live City24.ee listings** captured 28 Aug 2026. The two portals were aggregated independently and agree closely (Tallinn Kesklinn 16.00 vs 15.96 €/m²; Lasnamäe 12.30 vs 12.21). Each district carries `verified_source`, `verified_date` and `verified_sample`; districts with no live stock are marked as estimates in the popup and in the panel (`est.`).

**Rent colours** — one national €/m² scale (`≥15 Premium · 12.50–15 High · 10–12.50 Mid · 7.50–10 Affordable · 5–7.50 Budget · <5 Lowest`), derived from the verified median rather than hand-assigned, so a colour means the same thing in every city and always matches the number printed on the pill.

**Safety / quality score** — an **absolute Estonia-referenced 1–5 scale** that measures what it is like to *walk around and live in* a district.

*What it counts:* street aggression and assault, public drinking and disorder, violence and sexual offences, burglary, bicycle theft, pickpocketing.

*What it deliberately ignores:* fraud and computer crime. Those are **26.5% of Estonia's 2025 property crime** (§209 kelmus 2 122, §213 arvutikelmus 1 301, and related — 3 998 of 15 092) and none of it changes whether a street is safe to walk down. Only the 73.5% contact share feeds the theft metric.

*District-dominant by design:* published Estonian crime statistics stop at municipality level, so a naive model smears a city's whole burden evenly across its districts — wrong in exactly the way that matters. If a city's serious violence concentrates in two panel-block districts, those districts should carry it, not the villa suburb across town. So each metric is **65% district profile + 35% county statistics**. Tallinn now spreads from **Kadriorg 4.3 and Pirita 4.0 down to Lasnamäe and Kalamaja at 2.8** — a 1.5-point gap inside one city.

*Seven metrics:* calm streets & noise · street aggression · public drinking & disorder · violence & sexual offences · burglary/bikes/pickpockets · families & neighbourhood stability · language accessibility.

*Drivers.* **Negative:** licensed-premises and alcohol-shop density (street drinking, night noise, alcohol-fuelled aggression); tourist/hotel/attraction density (transport crowding, pickpocketing, visitors behaving outside local norms); retail and transfer-hub density; university and dormitory density (student night-time aggression, and bicycle theft, which concentrates hard around campuses); and a **concentrated-disadvantage index** built from cheap rent + low tertiary education + a housing stock that is almost all apartment blocks. **Positive:** schools, kindergartens and playgrounds (families actually live here); detached/terraced housing share; tertiary education share; affluence proxied by the verified €/m² (private security, cameras, maintained and lit entrances); green space.

Anchored to Justiits- ja Digiministeerium *Kuritegevus Eestis 2025* county statistics and Statistikaamet census RL21302 / RL21434 / RL21439. Every scorecard cites its own sources and states that the within-city split is a documented land-use + census model, not a per-district measurement.

> **On the immigrant-share metric.** The original brief asked for districts to be marked down by their share of immigrants and Russian-speaking residents. That is not built here: scoring a neighbourhood worse for who lives in it is discrimination however it is labelled, and it measures nothing about street safety that the incident data and the deprivation index do not already carry. The language metric is instead **Language Accessibility** — the census-measured share speaking Estonian and English — which captures the real relocation problem (can you handle a landlord, a pharmacy, a school?) from language data rather than ethnicity. It still separates sharply: Narva at 2.3% Estonian / 17.6% English scores 1.2, Tartu at 54.1% English scores 4.7.

---

## 📁 Structure

```
├── 🌐 index.html                          ⭐ the map (5-city unified)
├── 🌐 <city>_tech_transit_map.html        per-city copies
├── 📂 data/
│   ├── <city>_exact_district_boundaries.json    districts + verified rents
│   ├── <city>_district_safety_official.json     scorecards + sources
│   ├── <city>_parks_clean.json                  green areas
│   ├── <city>_transit_final.json                merged/audited transit
│   └── osm_cache/                               raw OSM + census + crime slices
├── 📂 exports/                            KML / KMZ for offline GPS
└── 📂 scripts/
    ├── osm_pipeline_common.py             shared geometry + cache helpers
    ├── osm_extract_raw.py                 Geofabrik Estonia extract → raw slices
    ├── build_official_districts.py        official boundaries + seamlessness validation
    ├── build_green_areas.py               parks / gardens / forests
    ├── build_osm_transit.py               route geometry + corridor offset allocation
    ├── merge_transit_networks.py          audit & merge vs the existing registry
    ├── extract_district_context.py        per-district land-use context
    ├── build_safety_scores.py             absolute Estonia-referenced 1–5 scale
    ├── verify_rental_prices.py            kv.ee + City24.ee cross-check
    └── generate_unified_tech_map.py       HTML compiler
```

## 🔄 Rebuilding

```bash
python3 scripts/osm_extract_raw.py            # ~120 MB Estonia extract, cached
python3 scripts/build_official_districts.py
python3 scripts/build_green_areas.py
python3 scripts/build_osm_transit.py
python3 scripts/merge_transit_networks.py
python3 scripts/extract_district_context.py
python3 scripts/build_safety_scores.py
python3 scripts/verify_rental_prices.py
python3 scripts/generate_unified_tech_map.py  # writes index.html + exports
```

Map data © OpenStreetMap contributors (ODbL). Crime statistics © Justiits- ja Digiministeerium. Census © Statistikaamet. Rental observations from kv.ee and City24.ee public listings.
