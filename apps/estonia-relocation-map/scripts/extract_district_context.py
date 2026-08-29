"""
==============================================================================
DISTRICT CONTEXT EXTRACTOR (OpenStreetMap)
==============================================================================
Counts the land-use features that documented criminology links to the
district-level variation in the six scorecard metrics, so the within-city part
of the safety score is derived from data rather than asserted:

  nightlife   bar / pub / nightclub / casino        -> noise + public-disorder load
  retail      mall / supermarket / dept. store      -> acquisitive-crime opportunity
  transport   station / bus_station / large stops   -> footfall
  greenery    park + forest area share              -> calmness
  housing     apartment blocks vs detached houses   -> panel-estate vs villa character

Everything is aggregated per district by point-in-polygon against the official
OSM boundaries built by scripts/build_official_districts.py.

Output: data/osm_cache/district_context.json
Run:    python3 scripts/extract_district_context.py
==============================================================================
"""
import os
import sys
import json
from collections import defaultdict

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

import osmium
from osm_pipeline_common import (
    DATA_DIR, ensure_pbf, save_cache, load_cache, CITY_BBOX, ring_area_m2, point_in_ring,
)

RENT_FILE = {
    "tallinn": "tallinn_exact_district_boundaries.json",
    "tartu": "tartu_exact_district_boundaries.json",
    "parnu": "parnu_exact_district_boundaries.json",
    "narva": "narva_exact_district_boundaries.json",
    "kohtla_jarve": "kohtla_jarve_exact_district_boundaries.json",
}

NIGHTLIFE = {"bar", "pub", "nightclub", "casino", "stripclub", "biergarten"}
FOOD = {"restaurant", "cafe", "fast_food"}
RETAIL_SHOP = {"mall", "department_store", "supermarket", "wholesale"}
TRANSPORT = {"bus_station", "ferry_terminal"}
# Street-level signals for the lived-experience safety model
TOURISM = {"hotel", "hostel", "guest_house", "motel", "apartment", "attraction",
           "museum", "viewpoint", "gallery", "theme_park"}
ALCOHOL_SHOP = {"alcohol", "beverages"}
HIGHER_ED = {"university", "college"}


def load_districts():
    out = {}
    for city, f in RENT_FILE.items():
        recs = json.load(open(os.path.join(DATA_DIR, f), encoding="utf-8"))
        rings = []
        for d in recs:
            polys = d.get("polygons") or []
            # Tallinn nests one level deeper (multipolygon-of-rings)
            flat = []
            for p in polys:
                if p and isinstance(p[0][0], list):
                    flat.extend(p)
                else:
                    flat.append(p)
            area = sum(ring_area_m2(r) for r in flat if len(r) >= 3)
            rings.append((d["short_name"], flat, area))
        out[city] = rings
    return out


def which(city_rings, lat, lon):
    for name, flat, _ in city_rings:
        for r in flat:
            if len(r) >= 3 and point_in_ring(lat, lon, r):
                return name
    return None


def _tag_area(a, gj, districts, ctx, city_of, which, key):
    """Count an area feature into the district containing its centroid."""
    try:
        g = json.loads(gj.create_multipolygon(a))
    except Exception:
        return
    polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
    if not polys or not polys[0]:
        return
    ring = [[y, x] for x, y in polys[0][0]]
    if len(ring) < 4:
        return
    clat = sum(p[0] for p in ring) / len(ring)
    clon = sum(p[1] for p in ring) / len(ring)
    c = city_of(clat, clon)
    if not c:
        return
    d = which(districts[c], clat, clon)
    if d:
        ctx[c][d][key] += 1


def main():
    pbf = ensure_pbf()
    districts = load_districts()
    ctx = {c: defaultdict(lambda: defaultdict(float)) for c in districts}
    for city, rings in districts.items():
        for name, _, area in rings:
            ctx[city][name]["area_km2"] = round(area / 1e6, 3)

    def city_of(lat, lon):
        for c, (s, w, n, e) in CITY_BBOX.items():
            if s <= lat <= n and w <= lon <= e:
                return c
        return None

    print("Scanning POIs (nodes)...", flush=True)
    seen = 0
    for o in osmium.FileProcessor(pbf, osmium.osm.NODE):
        seen += 1
        if seen % 5_000_000 == 0:
            print(f"   ...{seen:,} nodes", flush=True)
        t = dict(o.tags)
        if not t:
            continue
        am, sh, pt, bl = t.get("amenity"), t.get("shop"), t.get("public_transport"), t.get("building")
        key = None
        if am in NIGHTLIFE:
            key = "nightlife"
        elif am in FOOD:
            key = "food"
        elif sh in RETAIL_SHOP:
            key = "retail_big"
        elif sh:
            key = "shop"
        elif am in TRANSPORT or t.get("railway") == "station":
            key = "transport_hub"
        elif am == "police":
            key = "police"
        elif am in HIGHER_ED:
            key = "higher_ed"
        elif am in ("school", "kindergarten"):
            key = "education"
        elif am == "childcare":
            key = "education"
        elif t.get("leisure") == "playground":
            key = "playground"
        elif t.get("leisure") in ("fitness_centre", "sports_centre", "swimming_pool"):
            key = "sport"
        elif sh in ALCOHOL_SHOP:
            key = "alcohol_shop"
        elif t.get("tourism") in TOURISM:
            key = "tourism"
        elif am == "bicycle_parking":
            key = "bike_parking"
        elif t.get("man_made") == "surveillance" or am == "surveillance":
            key = "surveillance"
        if not key:
            continue
        lat, lon = o.location.lat, o.location.lon
        c = city_of(lat, lon)
        if not c:
            continue
        d = which(districts[c], lat, lon)
        if d:
            ctx[c][d][key] += 1

    print("Scanning buildings + green (areas)...", flush=True)
    gj = osmium.geom.GeoJSONFactory()
    seen = 0
    for a in osmium.FileProcessor(pbf).with_areas():
        if not a.is_area():
            continue
        seen += 1
        if seen % 500_000 == 0:
            print(f"   ...{seen:,} areas", flush=True)
        t = dict(a.tags)
        b = t.get("building")
        lu = t.get("landuse")
        if t.get("leisure") == "playground":
            _tag_area(a, gj, districts, ctx, city_of, which, "playground")
        elif t.get("tourism") in TOURISM:
            _tag_area(a, gj, districts, ctx, city_of, which, "tourism")
        elif t.get("amenity") in HIGHER_ED:
            _tag_area(a, gj, districts, ctx, city_of, which, "higher_ed")
        elif b == "dormitory":
            _tag_area(a, gj, districts, ctx, city_of, which, "dormitory")
        le = t.get("leisure")
        na = t.get("natural")
        is_green = (le in ("park", "garden", "nature_reserve", "recreation_ground")
                    or lu in ("forest", "recreation_ground", "village_green")
                    or na in ("wood",))
        if not (b or is_green):
            continue
        try:
            g = json.loads(gj.create_multipolygon(a))
        except Exception:
            continue
        polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
        if not polys or not polys[0]:
            continue
        ring = [[y, x] for x, y in polys[0][0]]
        if len(ring) < 4:
            continue
        clat = sum(p[0] for p in ring) / len(ring)
        clon = sum(p[1] for p in ring) / len(ring)
        c = city_of(clat, clon)
        if not c:
            continue
        d = which(districts[c], clat, clon)
        if not d:
            continue
        if is_green:
            ctx[c][d]["green_m2"] += ring_area_m2(ring)
        elif b in ("apartments", "residential", "dormitory"):
            ctx[c][d]["apartments"] += 1
            ctx[c][d]["apartment_m2"] += ring_area_m2(ring)
        elif b in ("house", "detached", "semidetached_house", "terrace", "bungalow"):
            ctx[c][d]["houses"] += 1

    out = {}
    for c, dd in ctx.items():
        out[c] = {}
        for d, v in dd.items():
            area = max(v.get("area_km2", 0.01), 0.01)
            out[c][d] = {
                "area_km2": round(area, 3),
                "nightlife": int(v.get("nightlife", 0)),
                "food": int(v.get("food", 0)),
                "retail_big": int(v.get("retail_big", 0)),
                "shop": int(v.get("shop", 0)),
                "transport_hub": int(v.get("transport_hub", 0)),
                "education": int(v.get("education", 0)),
                "playground": int(v.get("playground", 0)),
                "sport": int(v.get("sport", 0)),
                "higher_ed": int(v.get("higher_ed", 0)),
                "dormitory": int(v.get("dormitory", 0)),
                "tourism": int(v.get("tourism", 0)),
                "alcohol_shop": int(v.get("alcohol_shop", 0)),
                "bike_parking": int(v.get("bike_parking", 0)),
                "police": int(v.get("police", 0)),
                "apartments": int(v.get("apartments", 0)),
                "houses": int(v.get("houses", 0)),
                "green_share": round(min(1.0, v.get("green_m2", 0) / (area * 1e6)), 3),
                "nightlife_per_km2": round(v.get("nightlife", 0) / area, 2),
                "retail_per_km2": round((v.get("retail_big", 0) * 4 + v.get("shop", 0)) / area, 2),
                "apartment_ratio": round(v.get("apartments", 0) /
                                         max(1.0, v.get("apartments", 0) + v.get("houses", 0)), 3),
                "family_per_km2": round((v.get("education", 0) + v.get("playground", 0)) / area, 2),
                "tourism_per_km2": round(v.get("tourism", 0) / area, 2),
                "alcohol_per_km2": round((v.get("nightlife", 0) + v.get("alcohol_shop", 0)) / area, 2),
                "student_per_km2": round((v.get("higher_ed", 0) * 3 + v.get("dormitory", 0)) / area, 2),
            }
    save_cache("district_context.json", out)
    for c in out:
        print(f"\n{c}:")
        for d, v in sorted(out[c].items(), key=lambda kv: -kv[1]["nightlife_per_km2"]):
            print(f"   {d[:28]:30s} area={v['area_km2']:6.2f} night/km²={v['nightlife_per_km2']:6.2f} "
                  f"retail/km²={v['retail_per_km2']:7.2f} green={v['green_share']:.2f} "
                  f"apt_ratio={v['apartment_ratio']:.2f}")


if __name__ == "__main__":
    main()
