# -*- coding: utf-8 -*-
"""
==============================================================================
TALLINN DISTRICT SHORTLIST — supermarket walkability × safety × commute × rent
==============================================================================
Answers a concrete relocation question rather than a generic ranking:

  * within ~1 km (10 min walk) of a full grocery store — Lidl, Prisma, Maxima,
    Rimi, Selver, Coop, Konsum
  * quiet and safe to live in (the lived-safety scorecard, weighting calmness)
  * close to the verified tech-hub locations
  * a 40–50 m² flat at the verified market rent

Grocery walkability is measured, not asserted: each district is sampled on a
150 m grid, every sample point inside the district is tested against the real
store coordinates, and the district's score is the share of its residential
footprint within 1 000 m of a store.

Run: python3 scripts/analyse_tallinn_shortlist.py
==============================================================================
"""
import os
import sys
import json
import math

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

import osmium
from osm_pipeline_common import (
    DATA_DIR, ensure_pbf, save_cache, load_cache,
    point_in_ring, ring_area_m2, M_PER_DEG_LAT, m_per_deg_lon,
)

TLN_BBOX = (59.3300, 24.5300, 59.5200, 24.9600)
CHAINS = ("lidl", "prisma", "maxima", "rimi", "selver", "coop", "konsum",
          "grossi", "comarket", "a1000", "delice")
WALK_M = 1000.0            # ~10–12 min on foot
GRID_M = 150.0
FLAT_M2 = (40, 50)


def collect_stores(pbf):
    """Full grocery stores in the Tallinn window, from nodes and building areas."""
    cached = load_cache("tallinn_supermarkets.json")
    if cached:
        return cached
    s, w, n, e = TLN_BBOX
    stores = []

    def take(tags, lat, lon):
        shop = tags.get("shop")
        if shop not in ("supermarket", "convenience", "department_store", "wholesale"):
            return
        name = (tags.get("name") or "").strip()
        low = name.lower()
        chain = next((c for c in CHAINS if c in low), None)
        # Keep named chain stores; keep unnamed supermarkets too (still a shop).
        if shop == "convenience" and not chain:
            return
        if not (s <= lat <= n and w <= lon <= e):
            return
        stores.append({"name": name or "Supermarket", "chain": chain or "other",
                       "shop": shop, "lat": round(lat, 6), "lon": round(lon, 6)})

    for o in osmium.FileProcessor(pbf, osmium.osm.NODE):
        t = dict(o.tags)
        if t.get("shop"):
            take(t, o.location.lat, o.location.lon)

    gj = osmium.geom.GeoJSONFactory()
    for a in osmium.FileProcessor(pbf).with_areas():
        if not a.is_area():
            continue
        t = dict(a.tags)
        if not t.get("shop"):
            continue
        try:
            g = json.loads(gj.create_multipolygon(a))
        except Exception:
            continue
        polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
        if not polys or not polys[0]:
            continue
        ring = polys[0][0]
        lat = sum(p[1] for p in ring) / len(ring)
        lon = sum(p[0] for p in ring) / len(ring)
        take(t, lat, lon)

    # de-duplicate stores mapped as both a node and a building
    out, seen = [], set()
    for st in sorted(stores, key=lambda x: (x["chain"] == "other", x["name"])):
        k = (round(st["lat"], 4), round(st["lon"], 4))
        if k in seen:
            continue
        seen.add(k)
        out.append(st)
    save_cache("tallinn_supermarkets.json", out)
    return out


def flat_rings(d):
    out = []
    for p in d.get("polygons") or []:
        if p and isinstance(p[0][0], list):
            out.extend(p)
        else:
            out.append(p)
    return [r for r in out if len(r) >= 4]


def grocery_coverage(rings, stores):
    """Share of the district's area within WALK_M of a grocery store."""
    lats = [p[0] for r in rings for p in r]
    lons = [p[1] for r in rings for p in r]
    lat0 = sum(lats) / len(lats)
    kx, ky = m_per_deg_lon(lat0), M_PER_DEG_LAT
    dlat, dlon = GRID_M / ky, GRID_M / kx

    # Pre-filter stores to the district's neighbourhood.
    near = [st for st in stores
            if min(lats) - 0.02 <= st["lat"] <= max(lats) + 0.02
            and min(lons) - 0.03 <= st["lon"] <= max(lons) + 0.03]
    sxy = [((st["lat"] - lat0) * ky, (st["lon"] - lat0 * 0) * 0 + st["lon"] * kx) for st in near]

    inside = covered = 0
    best_walk = []
    lat = min(lats)
    while lat <= max(lats):
        lon = min(lons)
        while lon <= max(lons):
            if any(point_in_ring(lat, lon, r) for r in rings):
                inside += 1
                py, px = (lat - lat0) * ky, lon * kx
                dmin = min((math.hypot(py - a, px - b) for a, b in sxy), default=1e9)
                best_walk.append(dmin)
                if dmin <= WALK_M:
                    covered += 1
            lon += dlon
        lat += dlat
    if not inside:
        return 0.0, None, 0
    best_walk.sort()
    median_walk = best_walk[len(best_walk) // 2]
    return covered / inside, median_walk, len(near)


def main():
    pbf = ensure_pbf()
    print("Collecting Tallinn grocery stores from OSM...", flush=True)
    stores = collect_stores(pbf)
    from collections import Counter
    print(f"  {len(stores)} stores  " + ", ".join(
        f"{k}:{v}" for k, v in Counter(s["chain"] for s in stores).most_common()))

    rents = {r["short_name"]: r for r in json.load(
        open(os.path.join(DATA_DIR, "tallinn_exact_district_boundaries.json"), encoding="utf-8"))}
    safety = {s["short_name"]: s for s in json.load(
        open(os.path.join(DATA_DIR, "district_safety_data_official.json"), encoding="utf-8"))}
    from generate_tallinn_tech_map import COMPANIES_DATA as COMPANIES

    rows = []
    for sn, r in rents.items():
        rings = flat_rings(r)
        cov, walk, nstores = grocery_coverage(rings, stores)
        s = safety[sn]
        # tech hubs inside the district, and hubs within 4 km of its centre
        inside_hubs = sum(1 for c in COMPANIES
                          if any(point_in_ring(c["lat"], c["lon"], ring) for ring in rings))
        near_hubs = sum(1 for c in COMPANIES
                        if math.hypot((c["lat"] - r["lat"]) * M_PER_DEG_LAT,
                                      (c["lon"] - r["lon"]) * m_per_deg_lon(r["lat"])) <= 4000)
        ppm = r["mean_sqm"]
        rows.append({
            "district": sn,
            "cov": cov, "walk": walk, "stores": nstores,
            "mean": s["mean_score"], "calm": s["scores"]["calmness"],
            "aggr": s["scores"]["assaults"], "drnk": s["scores"]["drunkenness"],
            "fam": s["scores"]["family"], "lang": s["scores"]["language"],
            "ppm": ppm, "r40": ppm * 40, "r50": ppm * 50,
            "inside_hubs": inside_hubs, "near_hubs": near_hubs,
            "green": s["district_indices"]["green_pctile"],
            "depriv": s["district_indices"]["deprivation_index"],
        })

    print(f"\n{'='*126}")
    print(f"{'DISTRICT':30s} {'GROC≤1km':>9s} {'med walk':>9s} {'QUIET':>6s} {'SAFE':>5s} "
          f"{'AGGR':>5s} {'DRINK':>6s} {'FAM':>5s} {'€/m²':>6s} {'40m²':>7s} {'50m²':>7s} "
          f"{'HUBS in':>8s} {'≤4km':>5s}")
    print("=" * 126)
    for row in sorted(rows, key=lambda x: -x["mean"]):
        print(f"{row['district'][:29]:30s} {row['cov']*100:8.0f}% {row['walk']:8.0f}m "
              f"{row['calm']:6.1f} {row['mean']:5.1f} {row['aggr']:5.1f} {row['drnk']:6.1f} "
              f"{row['fam']:5.1f} {row['ppm']:6.2f} €{row['r40']:6.0f} €{row['r50']:6.0f} "
              f"{row['inside_hubs']:8d} {row['near_hubs']:5d}")

    # ---- composite fit for the brief ------------------------------------
    def norm(vals):
        lo, hi = min(vals), max(vals)
        return lambda v: 0.5 if hi == lo else (v - lo) / (hi - lo)
    nc = norm([r["cov"] for r in rows])
    nh = norm([r["near_hubs"] for r in rows])
    npr = norm([r["r50"] for r in rows])

    print(f"\n{'='*126}")
    print("FIT FOR THE BRIEF — quiet & safe (40%) · grocery ≤1 km (25%) · tech access (20%) · rent for 40–50 m² (15%)")
    print("=" * 126)
    scored = []
    for r in rows:
        fit = (0.40 * ((r["calm"] * 0.45 + r["mean"] * 0.55) / 5.0)
               + 0.25 * nc(r["cov"])
               + 0.20 * nh(r["near_hubs"])
               + 0.15 * (1 - npr(r["r50"])))
        scored.append((fit, r))
    for i, (fit, r) in enumerate(sorted(scored, key=lambda x: -x[0]), 1):
        bar = "█" * int(round(fit * 40))
        print(f"{i:2d}. {fit*100:5.1f}  {bar:40s} {r['district'][:28]:30s} "
              f"€{r['r40']:.0f}–{r['r50']:.0f}/mo · {r['cov']*100:.0f}% ≤1 km · "
              f"quiet {r['calm']:.1f} · safe {r['mean']:.1f} · {r['near_hubs']} hubs ≤4 km")


if __name__ == "__main__":
    main()
