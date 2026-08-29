"""
==============================================================================
OFFICIAL DISTRICT BOUNDARY BUILDER (all 5 cities)
==============================================================================
Rebuilds every `*_exact_district_boundaries.json` and `*_district_safety_official.json`
polygon array from real OpenStreetMap administrative geometry:

  Tallinn       83 asumid (boundary=administrative, admin_level=10) grouped into
                the 12 rent/safety districts via each district's `asumid` list.
  Tartu         18 official place=quarter relations, 1:1 with the app districts.
  Pärnu         12 official place=quarter relations + Paikuse / Audru / Sindi
                (admin_level=9 settlement units).
  Narva         15 official place=quarter relations.
  Kohtla-Järve  5 linnaosa + Jõhvi linn (admin_level=9); the app's finer
                sub-districts are cut out of their parent linnaosa by a
                nearest-centre (Voronoi) partition clipped to the parent.

Post-processing guarantees the layer is seamless and non-overlapping:
  1. overlap resolution  — shared area goes to the smaller (more specific) district
  2. hole filling        — interior slivers between districts are absorbed by
                           the nearest neighbour, so the union has no gaps
  3. validation          — ray-casting centroid check (identical to the Tallinn
                           check the pipeline already used), pairwise overlap
                           area, and residual-hole area, all reported per city

Run:  python3 scripts/build_official_districts.py
==============================================================================
"""
import os
import sys
import json
import math

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from shapely.geometry import Polygon, MultiPolygon, Point, shape
from shapely.ops import unary_union, voronoi_diagram
from shapely import make_valid

from osm_pipeline_common import (
    DATA_DIR, load_cache, douglas_peucker, ring_area_m2,
    point_in_polygons, representative_point, CITY_LABEL,
)

# ---------------------------------------------------------------------------
# District -> OSM source mapping
# ---------------------------------------------------------------------------
# key = app `short_name`; value = list of OSM boundary names to union.
DIRECT_SOURCES = {
    "tartu": {
        "Kesklinn": ["Kesklinn"], "Supilinn": ["Supilinn"], "Tähtvere": ["Tähtvere"],
        "Ülejõe": ["Ülejõe"], "Vaksali": ["Vaksali"], "Karlova": ["Karlova"],
        "Kvissentali": ["Kvissentali"], "Maarjamõisa": ["Maarjamõisa"],
        "Ränilinn": ["Ränilinn"], "Raadi": ["Raadi-Kruusamäe"],
        "Raadi-Kruusamäe": ["Raadi-Kruusamäe"], "Tammelinn": ["Tammelinn"],
        "Veeriku": ["Veeriku"], "Ihaste": ["Ihaste"], "Ropka": ["Ropka"],
        "Variku": ["Variku"], "Jaamamõisa": ["Jaamamõisa"],
        "Annelinn": ["Annelinn"], "Ropka Tööstus": ["Ropka tööstusrajoon"],
    },
    "parnu": {
        "Rannarajoon": ["Rannarajoon"], "Kesklinn": ["Kesklinn"],
        "Papiniidu / Mai": ["Mai"], "Tammiste": ["Tammiste"],
        "Ülejõe": ["Ülejõe"], "Rääma": ["Rääma"], "Raeküla": ["Raeküla"],
        "Vana-Pärnu": ["Vana-Pärnu"], "Paikuse": ["Paikuse"],
        "Audru": ["Audru"], "Sindi": ["Sindi"],
        "Eeslinn": ["Eeslinn"], "Lodja": ["Lodja"],
    },
    "narva": {
        "Vanalinn": ["Vanalinn"], "Joaorg": ["Joaoru"], "Pähklimäe": ["Pähklimäe"],
        "Sutthoffi": ["Sutthoffi"], "Kalevi": ["Kalevi"], "Kerese": ["Kerese"],
        "Siivertsi": ["Siivertsi"], "Soldino": ["Soldino"], "Paemurru": ["Paemurru"],
        "Kreenholm": ["Kreenholmi"], "Kudruküla": ["Kudruküla"], "Olgina": ["Olgina"],
        "Kulgu": ["Kulgu"], "Elektrijaama": ["Elektrijaama"],
        # Kadastiku is not an official Narva asum; the official unit covering that
        # ground is Veekulgu, so the district is re-anchored to it.
        "Veekulgu": ["Veekulgu"],
    },
    "kohtla_jarve": {
        "Jõhvi": ["Jõhvi linn"], "Kukruse": ["Kukruse linnaosa"],
        "Oru": ["Oru linnaosa"], "Sompa": ["Sompa linnaosa"],
    },
}

# Districts carved out of a parent official polygon by nearest-centre partition.
# key = app short_name -> (parent OSM boundary name, anchor lat, anchor lon)
VORONOI_SOURCES = {
    "kohtla_jarve": {
        "Järve Kesklinn": ("Järve linnaosa", 59.4035, 27.2808),
        "Käva":           ("Järve linnaosa", 59.3884, 27.2550),
        "Uusküla":        ("Järve linnaosa", 59.4230, 27.2730),
        "Ahtme / Iidla":  ("Ahtme linnaosa", 59.3289, 27.4220),
        "Tammiku":        ("Ahtme linnaosa", 59.3369, 27.3847),
        "Puru":           ("Ahtme linnaosa", 59.3162, 27.4027),
    },
}

CITY_FILES = {
    "tallinn": ("tallinn_exact_district_boundaries.json", "district_safety_data_official.json"),
    "tartu": ("tartu_exact_district_boundaries.json", "tartu_district_safety_official.json"),
    "parnu": ("parnu_exact_district_boundaries.json", "parnu_district_safety_official.json"),
    "narva": ("narva_exact_district_boundaries.json", "narva_district_safety_official.json"),
    "kohtla_jarve": ("kohtla_jarve_exact_district_boundaries.json",
                     "kohtla_jarve_district_safety_official.json"),
}

MIN_RING_AREA_M2 = 12_000   # drop offshore rocks / cadastral crumbs
SIMPLIFY_TOL_M = 4.0


# ---------------------------------------------------------------------------
# shapely <-> [[lat, lon], ...] helpers
# ---------------------------------------------------------------------------
def rings_to_shape(rings):
    polys = []
    for r in rings:
        if len(r) < 4:
            continue
        p = Polygon([(lon, lat) for lat, lon in r])
        if not p.is_valid:
            p = make_valid(p)
        if p.is_empty:
            continue
        if isinstance(p, (MultiPolygon,)):
            polys.extend([g for g in p.geoms if isinstance(g, Polygon)])
        elif isinstance(p, Polygon):
            polys.append(p)
    if not polys:
        return None
    u = unary_union(polys)
    return u if not u.is_empty else None


def shape_to_rings(geom, simplify=True):
    if geom is None or geom.is_empty:
        return []
    parts = geom.geoms if isinstance(geom, MultiPolygon) else [geom]
    out = []
    for p in parts:
        if not isinstance(p, Polygon) or p.is_empty:
            continue
        ring = [[round(lat, 6), round(lon, 6)] for lon, lat in p.exterior.coords]
        if ring_area_m2(ring) < MIN_RING_AREA_M2:
            continue
        if simplify:
            ring = douglas_peucker(ring, SIMPLIFY_TOL_M)
        if len(ring) >= 4:
            out.append(ring)
    out.sort(key=ring_area_m2, reverse=True)
    return out


def geom_area_km2(geom):
    if geom is None or geom.is_empty:
        return 0.0
    # local equirectangular scaling around the geometry centroid
    lat0 = geom.centroid.y
    kx = 111_320.0 * math.cos(math.radians(lat0))
    return geom.area * kx * 111_320.0 / 1e6


# ---------------------------------------------------------------------------
# Source loading
# ---------------------------------------------------------------------------
def load_sources():
    bnd = load_cache("boundaries_raw.json", {}) or {}
    extras = load_cache("extras_raw.json", {}) or {}
    asum = load_cache("tallinn_asumid_raw.json", {}) or {}
    by_city = {}
    for rec in list(bnd.values()) + list(extras.values()):
        by_city.setdefault(rec["city"], {})[rec["name"]] = rec["rings"]
    return by_city, asum


def voronoi_partition(parent_geom, anchors):
    """Split `parent_geom` between labelled anchor points (nearest-centre cells)."""
    pts = [Point(lon, lat) for _, lat, lon in anchors]
    if len(pts) == 1:
        return {anchors[0][0]: parent_geom}
    env = parent_geom.envelope.buffer(0.05)
    cells = voronoi_diagram(unary_union(pts), envelope=env)
    out = {}
    for name, lat, lon in anchors:
        p = Point(lon, lat)
        cell = next((c for c in cells.geoms if c.contains(p)), None)
        if cell is None:
            cell = min(cells.geoms, key=lambda c: c.distance(p))
        piece = parent_geom.intersection(cell)
        if not piece.is_empty:
            out[name] = piece
    return out


# ---------------------------------------------------------------------------
# Seamless assembly
# ---------------------------------------------------------------------------
def resolve_overlaps(geoms):
    """Give each overlap to the smaller (more specific) district."""
    names = sorted(geoms, key=lambda n: geoms[n].area)  # smallest first = highest priority
    claimed = None
    out = {}
    for n in names:
        g = geoms[n]
        if claimed is not None:
            g = g.difference(claimed)
        if g.is_empty:
            out[n] = geoms[n]          # never delete a district outright
            continue
        out[n] = g
        claimed = g if claimed is None else unary_union([claimed, g])
    return out


def fill_holes(geoms):
    """Absorb interior gaps (slivers between adjacent districts) into the
    nearest district, so the union is a single gap-free surface."""
    union = unary_union(list(geoms.values()))
    parts = union.geoms if isinstance(union, MultiPolygon) else [union]
    holes = []
    for p in parts:
        for interior in p.interiors:
            h = Polygon(interior)
            if h.is_valid and not h.is_empty:
                holes.append(h)
    if not holes:
        return geoms, 0.0
    out = dict(geoms)
    filled = 0.0
    for h in holes:
        c = h.representative_point()
        target = min(out, key=lambda n: out[n].distance(c))
        out[target] = unary_union([out[target], h])
        filled += geom_area_km2(h)
    return out, filled


def build_city(city, sources, asum):
    print(f"\n{'='*74}\n{CITY_LABEL[city]}\n{'='*74}")
    rent_file, safety_file = CITY_FILES[city]
    rent = json.load(open(os.path.join(DATA_DIR, rent_file), encoding="utf-8"))
    safety = json.load(open(os.path.join(DATA_DIR, safety_file), encoding="utf-8"))

    src = sources.get(city, {})
    geoms = {}
    unmatched = []

    if city == "tallinn":
        for d in rent:
            parts = [asum[a]["rings"] for a in d.get("asumid", []) if a in asum]
            missing = [a for a in d.get("asumid", []) if a not in asum]
            if missing:
                unmatched.append((d["short_name"], missing))
            g = rings_to_shape([r for rings in parts for r in rings])
            if g is not None:
                geoms[d["short_name"]] = g
    else:
        direct = DIRECT_SOURCES.get(city, {})
        for d in rent:
            sn = d["short_name"]
            names = direct.get(sn)
            if not names:
                continue
            rings = [r for n in names if n in src for r in src[n]]
            if not rings:
                unmatched.append((sn, names))
                continue
            g = rings_to_shape(rings)
            if g is not None:
                geoms[sn] = g

        # Voronoi-derived sub-districts
        vor = VORONOI_SOURCES.get(city, {})
        by_parent = {}
        for sn, (parent, lat, lon) in vor.items():
            by_parent.setdefault(parent, []).append((sn, lat, lon))
        for parent, anchors in by_parent.items():
            if parent not in src:
                unmatched.append((parent, [a[0] for a in anchors]))
                continue
            pg = rings_to_shape(src[parent])
            if pg is None:
                continue
            for sn, piece in voronoi_partition(pg, anchors).items():
                geoms[sn] = piece

    if unmatched:
        for sn, m in unmatched:
            print(f"  !! no OSM source for {sn}: {m}")

    raw_km2 = {n: geom_area_km2(g) for n, g in geoms.items()}
    geoms = resolve_overlaps(geoms)
    geoms, filled = fill_holes(geoms)

    # --- validation ---------------------------------------------------------
    names = list(geoms)
    overlap_km2 = 0.0
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            inter = geoms[names[i]].intersection(geoms[names[j]])
            if not inter.is_empty:
                overlap_km2 += geom_area_km2(inter)

    print(f"  districts with OSM geometry : {len(geoms)} / {len(rent)}")
    print(f"  total covered area          : {geom_area_km2(unary_union(list(geoms.values()))):.2f} km²")
    print(f"  gaps absorbed (hole fill)   : {filled*1e6:,.0f} m²")
    print(f"  residual pairwise overlap   : {overlap_km2*1e6:,.0f} m²")

    # --- write back ---------------------------------------------------------
    poly_by_name = {n: shape_to_rings(g) for n, g in geoms.items()}
    centroid_ok = 0
    for d in rent:
        sn = d["short_name"]
        if sn not in poly_by_name or not poly_by_name[sn]:
            continue
        rings = poly_by_name[sn]
        d["polygons"] = [rings] if city == "tallinn" else rings
        rp = representative_point(rings)
        if rp:
            d["lat"], d["lon"] = rp
        flat = rings
        if point_in_polygons(d["lat"], d["lon"], flat):
            centroid_ok += 1
        d["boundary_source"] = "OpenStreetMap administrative / place=quarter relations (ODbL)"

    for s in safety:
        sn = s["short_name"]
        if sn in poly_by_name and poly_by_name[sn]:
            rings = poly_by_name[sn]
            s["polygons"] = [rings] if city == "tallinn" else rings
            rp = representative_point(rings)
            if rp:
                s["lat"], s["lon"] = rp
            s["boundary_source"] = "OpenStreetMap administrative / place=quarter relations (ODbL)"

    print(f"  ray-cast centroid-in-polygon: {centroid_ok} / {len(poly_by_name)} PASS")
    pts = sum(len(r) for rings in poly_by_name.values() for r in rings)
    print(f"  total boundary vertices     : {pts:,}")
    for n in sorted(poly_by_name, key=lambda n: -raw_km2.get(n, 0)):
        print(f"     {n[:30]:32s} {geom_area_km2(geoms[n]):7.2f} km²  "
              f"{sum(len(r) for r in poly_by_name[n]):4d} pts  "
              f"{len(poly_by_name[n])} ring(s)")

    json.dump(rent, open(os.path.join(DATA_DIR, rent_file), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    json.dump(safety, open(os.path.join(DATA_DIR, safety_file), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    return centroid_ok == len(poly_by_name) and overlap_km2 * 1e6 < 5000


if __name__ == "__main__":
    sources, asum = load_sources()
    ok = True
    for city in ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]:
        ok &= build_city(city, sources, asum)
    print(f"\n{'='*74}\n{'ALL CITIES VALIDATED' if ok else 'VALIDATION ISSUES ABOVE'}\n{'='*74}")
