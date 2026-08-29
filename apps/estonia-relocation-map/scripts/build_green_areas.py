"""
==============================================================================
GREEN AREA BUILDER — parks / gardens / forests / recreation ground (5 cities)
==============================================================================
Applies one identical OSM pipeline to Tallinn, Tartu, Pärnu, Narva and
Kohtla-Järve & Jõhvi, replacing the synthetic 5-point "diamond" placeholders
that Pärnu / Narva / Kohtla-Järve were carrying and refreshing Tallinn's and
Tartu's layers against current OSM geometry.

Tag set (as extracted by scripts/osm_extract_raw.py):
    leisure = park | garden | nature_reserve | recreation_ground | common
              | dog_park | golf_course
    landuse = forest | recreation_ground | village_green | grass | meadow
              | allotments | cemetery
    natural = wood | scrub | grassland | heath | wetland

Selection is size- and name-aware so the layer stays legible: every real park
and garden is kept, roadside grass slivers are dropped, and big forests are kept
only when they are actually forests rather than a 3-metre verge.

Output: data/<city>_parks_clean.json  ->  [{name, kind, category, coords}, ...]
Run:    python3 scripts/build_green_areas.py
==============================================================================
"""
import os
import sys
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from osm_pipeline_common import DATA_DIR, load_cache, douglas_peucker, CITY_LABEL

OUT_FILE = {
    "tallinn": "tallinn_parks_clean.json",
    "tartu": "tartu_parks_clean.json",
    "parnu": "parnu_parks_clean.json",
    "narva": "narva_parks_clean.json",
    "kohtla_jarve": "kohtla_jarve_parks_clean.json",
}

# kind -> (display category, min area m² when named, min area m² when unnamed)
RULES = {
    "leisure=park":               ("Park", 400, 1_000),
    "leisure=garden":             ("Garden", 400, 4_000),
    "leisure=nature_reserve":     ("Nature reserve", 400, 20_000),
    "leisure=recreation_ground":  ("Recreation ground", 1_000, 8_000),
    "leisure=common":             ("Common", 1_000, 8_000),
    "leisure=dog_park":           ("Dog park", 200, 1_500),
    "leisure=golf_course":        ("Golf course", 10_000, 40_000),
    "landuse=village_green":      ("Village green", 400, 3_000),
    "landuse=recreation_ground":  ("Recreation ground", 1_000, 8_000),
    "landuse=forest":             ("Forest", 12_000, 30_000),
    "natural=wood":               ("Woodland", 12_000, 30_000),
    "landuse=cemetery":           ("Cemetery park", 3_000, 12_000),
    "landuse=allotments":         ("Allotment gardens", 8_000, 25_000),
    "landuse=grass":              ("Green space", 5_000, None),      # unnamed grass dropped
    "landuse=meadow":             ("Meadow", 40_000, 120_000),
    "natural=grassland":          ("Grassland", 40_000, 120_000),
    "natural=scrub":              ("Scrub", 60_000, 200_000),
    "natural=heath":              ("Heath", 60_000, 200_000),
    "natural=wetland":            ("Wetland", 60_000, 200_000),
}

MAX_AREA_M2 = 18_000_000    # skip regional forests that spill far past the city
MAX_FEATURES = 500          # per-city render budget
SIMPLIFY_TOL_M = 5.0

# Selection priority: every real park/garden survives the render budget before a
# single forest polygon is considered, so dense city centres keep their parks.
PRIORITY = {
    "Park": 0, "Garden": 0, "Nature reserve": 0, "Recreation ground": 0,
    "Village green": 0, "Dog park": 0, "Common": 0,
    "Cemetery park": 1, "Golf course": 1, "Allotment gardens": 1,
    "Forest": 2, "Woodland": 2, "Green space": 2,
    "Meadow": 3, "Grassland": 3, "Scrub": 3, "Heath": 3, "Wetland": 3,
}


def keep(feat):
    rule = RULES.get(feat["kind"])
    if rule is None:
        return None
    category, min_named, min_unnamed = rule
    area = feat["area_m2"]
    if area > MAX_AREA_M2:
        return None
    if feat["name"]:
        return category if area >= min_named else None
    if min_unnamed is None:
        return None
    return category if area >= min_unnamed else None


def build_city(city, greens):
    feats = []
    for f in greens.get(city, []):
        category = keep(f)
        if not category:
            continue
        feats.append((f, category))

    # Parks first, then bigger-is-better inside each priority band.
    feats.sort(key=lambda t: (PRIORITY.get(t[1], 4), -t[0]["area_m2"]))
    feats = feats[:MAX_FEATURES]

    out = []
    for f, category in feats:
        for ring in f["rings"]:
            simple = douglas_peucker(ring, SIMPLIFY_TOL_M)
            if len(simple) < 4:
                continue
            out.append({
                "name": f["name"] or category,
                "kind": f["kind"],
                "category": category,
                "area_m2": f["area_m2"],
                "osm_id": f["id"],
                "coords": simple,
            })

    path = os.path.join(DATA_DIR, OUT_FILE[city])
    json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    named = sum(1 for o in out if o["name"] != o["category"])
    pts = sum(len(o["coords"]) for o in out)
    from collections import Counter
    top = Counter(o["category"] for o in out).most_common(6)
    print(f"{CITY_LABEL[city]:24s} {len(out):4d} polygons ({named} named), "
          f"{pts:,} vertices, {os.path.getsize(path)/1024:.0f} KB")
    print(f"{'':24s} {', '.join(f'{k} x{v}' for k, v in top)}")
    return len(out)


if __name__ == "__main__":
    greens = load_cache("greens_raw.json", {}) or {}
    print("=" * 78)
    print("GREEN AREAS FROM OPENSTREETMAP (ODbL) — identical pipeline for all 5 cities")
    print("=" * 78)
    total = 0
    for city in ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]:
        total += build_city(city, greens)
    print("=" * 78)
    print(f"{total} real green-area polygons written — zero synthetic geometry.")
