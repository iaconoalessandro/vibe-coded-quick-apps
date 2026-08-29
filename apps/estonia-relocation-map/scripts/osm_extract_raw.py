"""
==============================================================================
OSM RAW EXTRACTOR — Estonia (Geofabrik extract -> data/osm_cache/*.json)
==============================================================================
Replaces the old Overpass-API calls (rate-limited, frequently unavailable) with
a local pass over the full Estonia extract. Run:

    python3 scripts/osm_extract_raw.py

Produces every raw slice the district / park / transit builders consume.
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
    ensure_pbf, save_cache, cache_path, CITY_BBOX, ring_area_m2,
)

# ---------------------------------------------------------------------------
# Official district relations, keyed by OSM relation id.
# Pärnu / Narva / Tartu use place=quarter relations (the city's own official
# asumid); Tallinn and Kohtla-Järve use boundary=administrative admin_level=9.
# ---------------------------------------------------------------------------
WANTED_REL = {}


def _want(city, name, rid, kind):
    WANTED_REL[rid] = (city, name, kind)


for _n, _r in [("Eeslinn", 4574694), ("Kesklinn", 4574695), ("Lodja", 4574696), ("Mai", 4574697),
               ("Raeküla", 4574698), ("Rannarajoon", 4574699), ("Rääma", 4574700),
               ("Tammiste", 4574701), ("Vana-Pärnu", 4574702), ("Ülejõe", 4574703)]:
    _want("parnu", _n, _r, "quarter")

for _n, _r in [("Kerese", 14256965), ("Vanalinn", 14258000), ("Joaoru", 14258001),
               ("Kreenholmi", 14260143), ("Paemurru", 14260360), ("Siivertsi", 14261593),
               ("Sutthoffi", 14261594), ("Pähklimäe", 14261639), ("Kalevi", 14261640),
               ("Soldino", 14261689), ("Kulgu", 14261749), ("Veekulgu", 14261750),
               ("Elektrijaama", 14261831), ("Kudruküla", 3004164), ("Olgina", 3004213)]:
    _want("narva", _n, _r, "quarter")

for _n, _r in [("Jaamamõisa", 4570269), ("Raadi-Kruusamäe", 4570300), ("Ränilinn", 4570419),
               ("Supilinn", 4570553), ("Ülejõe", 4571250), ("Maarjamõisa", 4571269),
               ("Variku", 4571316), ("Tammelinn", 4571354), ("Veeriku", 4571540),
               ("Tähtvere", 4571562), ("Vaksali", 4572066), ("Ropka", 4572171),
               ("Kesklinn", 4572218), ("Karlova", 4572236), ("Annelinn", 4572258),
               ("Ihaste", 4572273), ("Ropka tööstusrajoon", 4572274), ("Kvissentali", 14428687)]:
    _want("tartu", _n, _r, "quarter")

for _n, _r in [("Haabersti", 352068), ("Kesklinn", 351870), ("Kristiine", 353790),
               ("Lasnamäe", 355154), ("Mustamäe", 350487), ("Nõmme", 351671),
               ("Pirita", 351624), ("Põhja-Tallinn", 350769)]:
    _want("tallinn", _n, _r, "linnaosa")

for _c, _n, _r in [("parnu", "Pärnu linn", 351785), ("narva", "Narva linn", 2832959),
                   ("tallinn", "Tallinn", 350902), ("tartu", "Tartu linn", 351439),
                   ("kohtla_jarve", "Kohtla-Järve linn", 351623),
                   ("kohtla_jarve", "Jõhvi vald", 19894259),
                   ("kohtla_jarve", "Jõhvi linn", 2133227),
                   ("parnu", "Pärnu linn (omavalitsus)", 7883468)]:
    _want(_c, _n, _r, "municipal")

# admin_level=9 settlement units pulled in by name (Pärnu's outer boroughs).
EXTRA_NAMES = {
    "Paikuse alev": ("parnu", "Paikuse"),
    "Audru alevik": ("parnu", "Audru"),
    "Sindi linn": ("parnu", "Sindi"),
}

GREEN_TAGS = [
    ("leisure", {"park", "garden", "nature_reserve", "recreation_ground",
                 "common", "dog_park", "golf_course"}),
    ("landuse", {"forest", "recreation_ground", "village_green", "grass",
                 "meadow", "allotments", "cemetery"}),
    ("natural", {"wood", "scrub", "grassland", "heath", "wetland"}),
]

TARGET_NETWORKS = {"Tallinna Transport", "Tartu linn", "Narva LV", "Narva",
                   "Pärnu linnaliinid", "Ida-Viru MV", "Elron", "Harjumaa ÜTK",
                   "Pärnu maakonnaliinid", "Tartu maakond", "Tartumaa ÜTK"}


def green_kind(tags):
    for k, vals in GREEN_TAGS:
        if tags.get(k) in vals:
            return f"{k}={tags[k]}"
    return None


def bbox_city(rings, pad=0.02):
    ring = rings[0]
    lat = sum(p[0] for p in ring) / len(ring)
    lon = sum(p[1] for p in ring) / len(ring)
    for city, (s, w, n, e) in CITY_BBOX.items():
        if s - pad <= lat <= n + pad and w - pad <= lon <= e + pad:
            return city
    return None


def rings_from_area(factory, area):
    g = json.loads(factory.create_multipolygon(area))
    polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
    out = []
    for p in polys:
        r = [[round(y, 6), round(x, 6)] for x, y in p[0]]
        if len(r) >= 4:
            out.append(r)
    return out


def pass_areas(pbf):
    """Boundaries (relations), Tallinn asumid, extra settlements, green areas."""
    print("Pass 1/2 — areas (boundaries + green space)...", flush=True)
    gj = osmium.geom.GeoJSONFactory()
    boundaries, asumid, extras = {}, {}, {}
    greens = defaultdict(list)
    seen = 0

    for a in osmium.FileProcessor(pbf).with_areas():
        if not a.is_area():
            continue
        seen += 1
        if seen % 500_000 == 0:
            print(f"   ...{seen:,} areas scanned", flush=True)

        t = dict(a.tags)
        rid = a.orig_id()
        is_rel = not a.from_way()
        lvl = t.get("admin_level")
        nm = t.get("name", "")
        is_admin = t.get("boundary") == "administrative"

        target = is_rel and rid in WANTED_REL
        kj_lo = is_rel and is_admin and lvl == "9" and nm.endswith("linnaosa")
        extra = is_rel and is_admin and lvl == "9" and nm in EXTRA_NAMES
        asum = is_rel and is_admin and lvl == "10"
        gk = green_kind(t)

        if not (target or kj_lo or extra or asum or gk):
            continue
        try:
            rings = rings_from_area(gj, a)
        except Exception:
            continue
        if not rings:
            continue

        if target:
            city, name, kind = WANTED_REL[rid]
            boundaries[str(rid)] = {"city": city, "name": name, "kind": kind, "rings": rings}
        elif kj_lo and bbox_city(rings) == "kohtla_jarve":
            boundaries[str(rid)] = {"city": "kohtla_jarve", "name": nm,
                                    "kind": "linnaosa", "rings": rings}
        elif extra:
            city, label = EXTRA_NAMES[nm]
            extras[str(rid)] = {"city": city, "name": label, "kind": "settlement", "rings": rings}
        elif asum and bbox_city(rings) == "tallinn":
            asumid[nm] = {"name": nm, "rings": rings}
        elif gk:
            city = bbox_city(rings)
            if city:
                greens[city].append({
                    "name": t.get("name") or t.get("name:et") or "",
                    "kind": gk,
                    "rings": rings,
                    "id": ("w" if a.from_way() else "r") + str(rid),
                    "area_m2": round(sum(ring_area_m2(r) for r in rings)),
                })

    print(f"   boundaries={len(boundaries)} extras={len(extras)} "
          f"tallinn_asumid={len(asumid)} greens={{"
          + ", ".join(f"{k}:{len(v)}" for k, v in greens.items()) + "}", flush=True)
    save_cache("boundaries_raw.json", boundaries)
    save_cache("extras_raw.json", extras)
    save_cache("tallinn_asumid_raw.json", asumid)
    save_cache("greens_raw.json", greens)


def pass_transit(pbf):
    """Public-transport route relations plus their member way / stop geometry."""
    print("Pass 2/2 — public transport relations...", flush=True)
    routes = []
    for r in osmium.FileProcessor(pbf).with_filter(
            osmium.filter.EntityFilter(osmium.osm.RELATION)):
        t = dict(r.tags)
        if t.get("type") not in ("route", "route_master"):
            continue
        rt = t.get("route") or t.get("route_master")
        if rt not in ("bus", "tram", "trolleybus", "train", "light_rail"):
            continue
        routes.append({
            "id": r.id, "type": t.get("type"), "route": rt,
            "ref": t.get("ref", ""), "name": t.get("name", ""),
            "from": t.get("from", ""), "to": t.get("to", ""),
            "operator": t.get("operator", ""), "network": t.get("network", ""),
            "colour": t.get("colour", ""),
            "members": [(m.type, m.ref, m.role) for m in r.members],
        })
    save_cache("pt_routes_raw.json", routes)
    print(f"   route relations: {len(routes)}", flush=True)

    targets = [r for r in routes if r["type"] == "route"
               and (r["network"] in TARGET_NETWORKS or r["route"] in ("tram", "train", "trolleybus"))]
    want_w = {ref for r in targets for ty, ref, _ in r["members"] if ty == "w"}
    want_n = {ref for r in targets for ty, ref, _ in r["members"] if ty == "n"}
    print(f"   resolving {len(want_w):,} ways / {len(want_n):,} stop nodes...", flush=True)

    ways, nodes, names = {}, {}, {}
    for o in osmium.FileProcessor(pbf, osmium.osm.NODE | osmium.osm.WAY).with_locations():
        if o.is_node() and o.id in want_n:
            nodes[str(o.id)] = [round(o.location.lat, 6), round(o.location.lon, 6)]
            names[str(o.id)] = dict(o.tags).get("name", "")
        elif o.is_way() and o.id in want_w:
            try:
                ways[str(o.id)] = [[round(n.lat, 6), round(n.lon, 6)] for n in o.nodes]
            except Exception:
                pass
    save_cache("pt_geom_raw.json", {"routes": targets, "ways": ways,
                                    "nodes": nodes, "node_names": names})
    print(f"   resolved ways={len(ways):,} nodes={len(nodes):,}", flush=True)


if __name__ == "__main__":
    pbf = ensure_pbf()
    pass_areas(pbf)
    pass_transit(pbf)
    print("\nOSM raw cache written to data/osm_cache/")
