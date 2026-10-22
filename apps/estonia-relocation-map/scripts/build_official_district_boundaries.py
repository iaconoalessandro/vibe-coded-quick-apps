"""
Builds street-delimited boundary polygons for the 12 map zones.

Each zone is the union of whole official OpenStreetMap sub-districts (asumid),
whose edges follow real streets, railways, rivers and the coastline. Because the
83 asumid partition Tallinn, unions of disjoint sets of them are guaranteed to be
mutually non-overlapping and to leave no uncovered gap between zones.

Rewrites the "polygons" and label "lat"/"lon" of:
  - tallinn_exact_district_boundaries.json  (rental price zones)
  - district_safety_data_official.json      (safety zones)
"""

import json

from shapely.geometry import MultiPolygon, Point, Polygon
from shapely.ops import unary_union

SOURCE = "tallinn_osm_asumid.json"

# Simplification tolerance in degrees. 0.00001 deg latitude is ~1.1 m, well below
# street width, so every real bend along a street or coastline survives while
# redundant near-collinear nodes are dropped.
SIMPLIFY_TOLERANCE = 0.00001

# Square degrees per square metre at Tallinn's latitude, for readable thresholds.
SQ_DEG_PER_SQ_M = 1.0 / 6.26e9

# Detached fragments smaller than this (harbour moles, unnamed rocks) are dropped
# so the map does not render specks that read as artefacts.
MIN_PART_SQ_M = 5000

# Zone -> official asumid it is composed of. Every one of the 83 Tallinn asumid
# appears exactly once, so the 12 zones tile the whole city.
ZONE_ASUMID = {
    "kesklinn": [
        "Vanalinn", "Südalinn", "Maakri", "Sibulaküla", "Tatari", "Tõnismäe",
        "Kassisaba", "Uus Maailm", "Kompassi", "Sadama", "Keldrimäe",
        "Juhkentali", "Raua", "Torupilli",
    ],
    "kadriorg": ["Kadriorg"],
    "veerenni": ["Veerenni", "Kitseküla", "Luite"],
    "kalamaja": ["Kalamaja", "Kelmiküla"],
    "pelgulinn": [
        "Pelgulinn", "Pelguranna", "Merimetsa", "Sitsi", "Karjamaa", "Kopli",
        "Paljassaare",
    ],
    "kristiine": ["Lilleküla", "Järve", "Tondi"],
    "mustamae": ["Mustamäe", "Siili", "Sääse", "Kadaka"],
    "ulemiste": ["Sikupilli", "Ülemiste", "Ülemistejärve", "Mõigu", "Sõjamäe"],
    "lasnamae": [
        "Pae", "Uuslinn", "Kurepõllu", "Laagna", "Paevälja", "Loopealse",
        "Katleri", "Tondiraba", "Mustakivi", "Seli", "Kuristiku", "Priisle",
        "Väo",
    ],
    "nomme": [
        "Nõmme", "Hiiu", "Kivimäe", "Rahumäe", "Pääsküla", "Männiku",
        "Raudalu", "Liiva", "Vana-Mustamäe", "Laagri",
    ],
    "haabersti": [
        "Haabersti", "Kakumäe", "Astangu", "Mäeküla", "Pikaliiva",
        "Rocca al Mare", "Tiskre", "Veskimetsa", "Vismeistri", "Väike-Õismäe",
        "Õismäe", "Mustjõe",
    ],
    "pirita": [
        "Pirita", "Maarjamäe", "Kose", "Iru", "Laiaküla", "Kloostrimetsa",
        "Lepiku", "Mähe", "Merivälja",
    ],
}

# Zone key -> record ids in the two datasets.
ZONE_RECORDS = {key: (f"rent_{key}", f"safety_{key}") for key in ZONE_ASUMID}


def asum_geometry(entry):
    """Builds a valid polygon for one asum, subtracting any inner rings."""
    outer = unary_union([Polygon(r).buffer(0) for r in entry["outer"] if len(r) >= 4])
    if entry["inner"]:
        holes = unary_union([Polygon(r).buffer(0) for r in entry["inner"] if len(r) >= 4])
        outer = outer.difference(holes)
    return outer


def pole_of_inaccessibility(geom, iterations=6):
    """Finds the interior point furthest from the edge, for stable label placing."""
    target = max(geom.geoms, key=lambda g: g.area) if isinstance(geom, MultiPolygon) else geom
    minx, miny, maxx, maxy = target.bounds
    best, best_dist = target.representative_point(), -1.0
    for _ in range(iterations):
        step_x, step_y = (maxx - minx) / 12, (maxy - miny) / 12
        for i in range(13):
            for j in range(13):
                p = Point(minx + i * step_x, miny + j * step_y)
                if not target.contains(p):
                    continue
                dist = p.distance(target.exterior)
                if dist > best_dist:
                    best, best_dist = p, dist
        minx, maxx = best.x - step_x, best.x + step_x
        miny, maxy = best.y - step_y, best.y + step_y
    return best


def rings_latlon(geom):
    """Converts a (Multi)Polygon to Leaflet rings: [[outer, hole, ...], ...] as [lat, lon]."""
    parts = list(geom.geoms) if isinstance(geom, MultiPolygon) else [geom]
    parts = [p for p in parts if p.area > MIN_PART_SQ_M * SQ_DEG_PER_SQ_M]
    out = []
    for part in sorted(parts, key=lambda p: p.area, reverse=True):
        rings = [[[round(y, 6), round(x, 6)] for x, y in part.exterior.coords]]
        for hole in part.interiors:
            if Polygon(hole).area > MIN_PART_SQ_M * SQ_DEG_PER_SQ_M:
                rings.append([[round(y, 6), round(x, 6)] for x, y in hole.coords])
        out.append(rings)
    return out


def build_zone_geometries():
    data = json.load(open(SOURCE, encoding="utf-8"))
    asumid = {e["name"]: asum_geometry(e) for e in data["subdistricts"]}

    named = set(asumid)
    used = {n for names in ZONE_ASUMID.values() for n in names}
    missing, unknown = named - used, used - named
    if unknown:
        raise SystemExit(f"Unknown asum names in mapping: {sorted(unknown)}")
    if missing:
        raise SystemExit(f"Asumid left unassigned (would leave a gap): {sorted(missing)}")

    zones = {}
    for key, names in ZONE_ASUMID.items():
        merged = unary_union([asumid[n] for n in names])
        merged = merged.simplify(SIMPLIFY_TOLERANCE, preserve_topology=True).buffer(0)
        zones[key] = merged

    # Simplification can shift a shared border by up to a metre in each zone
    # independently, leaving sub-metre slivers where two zones cross. Subtract
    # what is already claimed so the zones are strictly disjoint by construction.
    claimed = None
    for key in ZONE_ASUMID:
        if claimed is not None:
            zones[key] = zones[key].difference(claimed).buffer(0)
        claimed = zones[key] if claimed is None else unary_union([claimed, zones[key]])
    return zones


def verify(zones):
    """Checks the zones do not overlap and that together they cover the city."""
    print("\nVerification")
    keys = list(zones)
    worst = 0.0
    for i, a in enumerate(keys):
        for b in keys[i + 1:]:
            inter = zones[a].intersection(zones[b])
            # shared borders are lines (zero area); only real overlap has area
            frac = inter.area / min(zones[a].area, zones[b].area)
            if frac > worst:
                worst = frac
            if frac > 0.001:
                print(f"  ! overlap {a} / {b}: {frac:.4%}")
    print(f"  max pairwise overlap: {worst:.6%}")

    city = unary_union(list(zones.values()))
    covered = sum(z.area for z in zones.values())
    print(f"  sum of zone areas / union area: {covered / city.area:.6f}  (1.0 = no double cover)")
    print(f"  union pieces: {len(city.geoms) if isinstance(city, MultiPolygon) else 1}")


def patch_dataset(path, zones, id_index):
    records = json.load(open(path, encoding="utf-8"))
    by_id = {r["id"]: r for r in records}
    for key, geom in zones.items():
        rec_id = ZONE_RECORDS[key][id_index]
        rec = by_id.get(rec_id)
        if rec is None:
            raise SystemExit(f"{path}: no record with id {rec_id}")
        rec["polygons"] = rings_latlon(geom)
        label = pole_of_inaccessibility(geom)
        rec["lat"], rec["lon"] = round(label.y, 5), round(label.x, 5)
        rec["asumid"] = ZONE_ASUMID[key]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
    return records


def main():
    zones = build_zone_geometries()

    print("Street-delimited zones built from official OSM asumid:\n")
    for key, geom in zones.items():
        rings = rings_latlon(geom)
        pts = sum(len(r) for poly in rings for r in poly)
        print(f"  {key:<11} {len(ZONE_ASUMID[key]):>2} asumid  "
              f"{len(rings)} part(s)  {pts:>5} pts")

    verify(zones)

    for path, idx in (("tallinn_exact_district_boundaries.json", 0),
                      ("district_safety_data_official.json", 1)):
        patch_dataset(path, zones, idx)
        print(f"\nUpdated {path}")


if __name__ == "__main__":
    main()
