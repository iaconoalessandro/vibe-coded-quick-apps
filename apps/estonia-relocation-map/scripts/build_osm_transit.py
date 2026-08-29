"""
==============================================================================
TRANSIT NETWORK BUILDER FROM OSM ROUTE RELATIONS (all 5 cities)
==============================================================================
Replaces the OSRM-waypoint reconstruction with the operators' own published
route geometry as mapped in OpenStreetMap, so every line follows real streets
end to end with no straight-line jumps.

Pipeline
  1. Group `type=route` relations by (network, ref); keep the direction variant
     with the longest stitched geometry, as the previous pipeline did.
  2. Stitch member ways with a nearest-endpoint greedy walk (OSM relations are
     frequently unsorted, so sequential concatenation leaves false gaps).
  3. Bridge any residual gap over BRIDGE_MIN_M through OSRM so the drawn line
     still follows the street network rather than cutting across blocks.
  4. Report per-route continuity so breaks are visible instead of silent.
  5. Allocate a *corridor-aware* render offset: routes that share street
     segments are graph-coloured into distinct offset slots, and the slot is
     emitted in screen pixels for leaflet-polylineoffset. Pixel offsets keep the
     separation constant at every zoom level, which the old baked-in ±1.6 m
     coordinate shift could not do — that shift was sub-pixel above zoom 14,
     which is why 5–6 lines in a dense Tallinn corridor rendered as one stripe.

Output: data/<city>_exact_transit_routes.json (+ trams / trains / hubs)
Run:    python3 scripts/build_osm_transit.py
==============================================================================
"""
import json
import math
import os
import sys
import time
import urllib.request
from collections import defaultdict

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from osm_pipeline_common import (
    CITY_LABEL,
    DATA_DIR,
    M_PER_DEG_LAT,
    douglas_peucker,
    load_cache,
    m_per_deg_lon,
)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
STITCH_SNAP_M = 25.0        # endpoints closer than this are the same node
BRIDGE_MIN_M = 25.0         # gaps above this get an OSRM street bridge
BRIDGE_MAX_M = 6_000.0      # above this the relation is broken beyond repair
SIMPLIFY_TOL_M = 4.0

# Corridor detection
GRID_M = 30.0               # spatial bucket edge
BEARING_BUCKETS = 6         # 30° buckets over 180°
SHARED_CELLS_MIN = 12       # ≈360 m of genuinely shared street before two lines conflict

# Render offsets (screen pixels, applied by leaflet-polylineoffset)
OFFSET_STEP_PX = 3.6        # one lane per slot, ≈ the line weight, so colours never merge
OFFSET_MAX_SLOTS = 9        # ±18 px at full zoom; the map scales this down as you zoom out
LINE_WEIGHT = 3.4           # was 4.5 — thinner lines fit more colours in a corridor

CITY_NETWORKS = {
    "tallinn":      {"Tallinna Transport"},
    "tartu":        {"Tartu linn"},
    "narva":        {"Narva LV", "Narva"},
    "parnu":        {"Pärnu linnaliinid"},
    "kohtla_jarve": {"Ida-Viru MV"},
}
REGIONAL_NETWORKS = {
    "tallinn": {"Harjumaa ÜTK"},
    "parnu": {"Pärnu maakonnaliinid"},
    "tartu": set(), "narva": set(), "kohtla_jarve": set(),
}

CITY_CENTER = {
    "tallinn": (59.4370, 24.7536), "tartu": (58.3780, 26.7290),
    "parnu": (58.3850, 24.5050), "narva": (59.3773, 28.1903),
    "kohtla_jarve": (59.3986, 27.2730),
}
# Distinct, high-contrast palette reused per city.
PALETTE = [
    "#E6194B", "#3CB44B", "#4363D8", "#F58231", "#911EB4", "#42D4F4", "#F032E6",
    "#BFEF45", "#FABED4", "#469990", "#DCBEFF", "#9A6324", "#FFFAC8", "#800000",
    "#AAFFC3", "#808000", "#FFD8B1", "#000075", "#FF6B6B", "#00D2FF", "#00FF87",
    "#FF9900", "#FF007F", "#84CC16", "#14B8A6", "#A855F7", "#EAB308", "#0EA5E9",
    "#EC4899", "#22C55E", "#F97316", "#6366F1", "#06B6D4", "#D97706", "#10B981",
]


# ---------------------------------------------------------------------------
# Geometry helpers
# ---------------------------------------------------------------------------
def dist_m(a, b):
    return math.hypot((a[0] - b[0]) * M_PER_DEG_LAT,
                      (a[1] - b[1]) * m_per_deg_lon(a[0]))


def path_length_m(pts):
    return sum(dist_m(pts[i], pts[i + 1]) for i in range(len(pts) - 1))


def stitch_ways(members, ways):
    """Greedy nearest-endpoint walk over the relation's member ways."""
    segs = []
    for ty, ref, role in members:
        if ty != "w":
            continue
        if role not in ("", "forward", "backward"):
            continue          # platform / stop_position ways are not the track
        w = ways.get(str(ref))
        if w and len(w) >= 2:
            segs.append(list(w))
    if not segs:
        return [], []

    used = [False] * len(segs)
    # Seed with the longest segment so the walk starts on the trunk.
    seed = max(range(len(segs)), key=lambda i: path_length_m(segs[i]))
    path = segs[seed][:]
    used[seed] = True
    gaps = []

    def extend(forward):
        nonlocal path
        while True:
            anchor = path[-1] if forward else path[0]
            best = None
            for i, s in enumerate(segs):
                if used[i]:
                    continue
                for cand in (s, s[::-1]):
                    d = dist_m(anchor, cand[0])
                    if best is None or d < best[0]:
                        best = (d, i, cand)
            if best is None:
                return
            d, i, cand = best
            if d > BRIDGE_MAX_M:
                return
            used[i] = True
            if d > STITCH_SNAP_M:
                gaps.append((d, anchor, cand[0]))
            if forward:
                path = path + (cand[1:] if d <= STITCH_SNAP_M else cand)
            else:
                rev = cand[::-1]
                path = (rev[:-1] if d <= STITCH_SNAP_M else rev) + path

    extend(True)
    extend(False)
    return path, gaps


_osrm_cache = {}


def osrm_bridge(a, b):
    """Route a gap along the real street network (cached, best-effort)."""
    key = (round(a[0], 5), round(a[1], 5), round(b[0], 5), round(b[1], 5))
    if key in _osrm_cache:
        return _osrm_cache[key]
    url = (f"https://router.project-osrm.org/route/v1/driving/"
           f"{a[1]:.5f},{a[0]:.5f};{b[1]:.5f},{b[0]:.5f}"
           f"?overview=full&geometries=geojson")
    out = None
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "EstoniaTechMap/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            d = json.loads(resp.read().decode())
        out = [[round(p[1], 6), round(p[0], 6)] for p in d["routes"][0]["geometry"]["coordinates"]]
        time.sleep(0.12)
    except Exception:
        out = None
    _osrm_cache[key] = out
    return out


def repair_gaps(path, gaps):
    """Replace the *stitch* jumps recorded by stitch_ways with OSRM street
    geometry. Only the recorded gap endpoints are bridged — a long segment
    between two consecutive OSM way nodes on a highway is legitimate geometry,
    not a break, and must not be re-routed."""
    if not gaps:
        return path, 0, 0.0
    targets = {}
    for d, a, b in gaps:
        targets[(round(a[0], 6), round(a[1], 6), round(b[0], 6), round(b[1], 6))] = d
    if not targets:
        return path, 0, 0.0

    repaired, worst = 0, 0.0
    out = [path[0]]
    for i in range(1, len(path)):
        a, b = path[i - 1], path[i]
        key = (round(a[0], 6), round(a[1], 6), round(b[0], 6), round(b[1], 6))
        if key in targets:
            d = targets[key]
            bridge = osrm_bridge(a, b) if d <= BRIDGE_MAX_M else None
            if bridge and len(bridge) > 2:
                out.extend(bridge[1:-1])
                repaired += 1
            else:
                worst = max(worst, d)
        out.append(b)
    return out, repaired, worst


# ---------------------------------------------------------------------------
# Corridor-aware offset allocation
# ---------------------------------------------------------------------------
def corridor_keys(path, lat0):
    """Grid-cell + bearing buckets a line occupies, at ~GRID_M resolution."""
    kx = m_per_deg_lon(lat0)
    keys = set()
    for i in range(len(path) - 1):
        y1, x1 = path[i][0] * M_PER_DEG_LAT, path[i][1] * kx
        y2, x2 = path[i + 1][0] * M_PER_DEG_LAT, path[i + 1][1] * kx
        seg = math.hypot(x2 - x1, y2 - y1)
        if seg == 0:
            continue
        bearing = math.degrees(math.atan2(x2 - x1, y2 - y1)) % 180.0
        bb = int(bearing / (180.0 / BEARING_BUCKETS)) % BEARING_BUCKETS
        steps = max(1, int(seg / GRID_M))
        for s in range(steps + 1):
            t = s / steps
            gx = int((x1 + (x2 - x1) * t) / GRID_M)
            gy = int((y1 + (y2 - y1) * t) / GRID_M)
            # Also claim the neighbouring bearing bucket so a gentle curve
            # still counts as the same corridor.
            keys.add((gx, gy, bb))
            keys.add((gx, gy, (bb + 1) % BEARING_BUCKETS))
    return keys


def allocate_offsets(routes, lat0):
    """Graph-colour lines that share corridors into distinct pixel offsets."""
    keysets = {k: corridor_keys(r["coords"], lat0) for k, r in routes.items()}
    occupancy = defaultdict(list)
    for k, ks in keysets.items():
        for cell in ks:
            occupancy[cell].append(k)

    conflicts = defaultdict(set)
    pair_counts = defaultdict(int)
    for members in occupancy.values():
        if len(members) < 2:
            continue
        for i in range(len(members)):
            for j in range(i + 1, len(members)):
                pair_counts[tuple(sorted((members[i], members[j])))] += 1
    for (a, b), n in pair_counts.items():
        if n >= SHARED_CELLS_MIN:
            conflicts[a].add(b)
            conflicts[b].add(a)

    # Colour the busiest lines first so trunk corridors get the tight slots.
    order = sorted(routes, key=lambda k: (-len(conflicts[k]), -len(keysets[k])))
    slot = {}
    for k in order:
        taken = {slot[n] for n in conflicts[k] if n in slot}
        s = 0
        while s in taken and s < OFFSET_MAX_SLOTS:
            s += 1
        slot[k] = s

    def slot_to_px(s):
        # 0, +1, -1, +2, -2, ... so the busiest line stays on the street centre.
        if s == 0:
            return 0.0
        step = (s + 1) // 2
        sign = 1 if s % 2 == 1 else -1
        return round(sign * step * OFFSET_STEP_PX, 2)

    max_clique = max((len(v) for v in conflicts.values()), default=0)
    return {k: slot_to_px(s) for k, s in slot.items()}, slot, max_clique


# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------
def classify(city, route, path):
    """bus_key / bus_suburb / bus_outside / tram / train."""
    if route["route"] == "tram":
        return "tram"
    if route["route"] == "train":
        return "train"
    if route["route"] == "trolleybus":
        return "trolley"
    if route["network"] in REGIONAL_NETWORKS.get(city, set()):
        return "bus_outside"
    clat, clon = CITY_CENTER[city]
    near = sum(1 for p in path[::10] if dist_m(p, (clat, clon)) < 3_500)
    frac = near / max(1, len(path[::10]))
    far = max((dist_m(p, (clat, clon)) for p in path[::10]), default=0)
    if far > 14_000:
        return "bus_outside"
    if frac > 0.22:
        return "bus_key"
    return "bus_suburb"


EMOJI = {"bus_key": "🔴", "bus_suburb": "🌲", "bus_outside": "🏡",
         "tram": "🚋", "train": "🚆", "trolley": "🚎"}


def build_city(city, geom):
    ways = geom["ways"]
    nets = CITY_NETWORKS[city] | REGIONAL_NETWORKS.get(city, set())
    clat, clon = CITY_CENTER[city]

    cands = defaultdict(list)
    for r in geom["routes"]:
        if r["network"] not in nets and not (
                r["route"] in ("tram", "train") and r["network"] in ("Tallinna Transport", "Elron")):
            continue
        cands[(r["network"], r["ref"], r["route"])].append(r)

    print(f"\n{'='*78}\n{CITY_LABEL[city]}\n{'='*78}")
    built = {}
    stats = {"clean": 0, "bridged": 0, "broken": 0}

    for (net, ref, _kind), variants in sorted(cands.items(), key=lambda t: (t[0][2], len(t[0][1]), t[0][1])):
        best, best_path, best_gaps = None, [], []
        for r in variants:
            p, g = stitch_ways(r["members"], ways)
            if len(p) > len(best_path):
                best, best_path, best_gaps = r, p, g
        if not best_path or len(best_path) < 8:
            continue
        # Keep only geometry that actually serves this city.
        if min((dist_m(p, (clat, clon)) for p in best_path[::5]), default=1e9) > 18_000:
            continue

        path, repaired, worst = repair_gaps(best_path, best_gaps)
        path = douglas_peucker(path, SIMPLIFY_TOL_M)
        if repaired:
            stats["bridged"] += 1
        if worst > BRIDGE_MIN_M:
            stats["broken"] += 1
        else:
            stats["clean"] += 1

        group = classify(city, best, path)
        label_kind = {"tram": "Tram", "train": "Train", "trolley": "Trolley"}.get(group, "Bus")
        frm = best.get("from") or ""
        to = best.get("to") or ""
        term = f"{frm} ↔ {to}" if frm and to else (best.get("name") or "")
        label = f"{EMOJI[group]} {label_kind} {ref}: {term}".strip()
        key = f"{'tram' if group=='tram' else 'train' if group=='train' else 'bus'}_{ref}"

        built[key] = {
            "id": key, "num": ref, "label": label, "name": term,
            "color": PALETTE[len(built) % len(PALETTE)],
            "coords": path, "weight": LINE_WEIGHT, "group": group,
            "length_km": round(path_length_m(path) / 1000, 1),
            "osm_relation": best["id"],
            "worst_gap_m": round(worst),
            "source": f"OSM route relation {best['id']} ({net})",
        }

    if not built:
        print("  no routes found")
        return {}

    offsets, slots, max_clique = allocate_offsets(built, clat)
    for k, v in built.items():
        v["offset_px"] = offsets[k]
        v["offset_slot"] = slots[k]

    from collections import Counter
    gc = Counter(v["group"] for v in built.values())
    print(f"  lines built            : {len(built)}  ({', '.join(f'{k}:{v}' for k,v in sorted(gc.items()))})")
    print(f"  geometry continuity    : {stats['clean']} clean, {stats['bridged']} OSRM-bridged, "
          f"{stats['broken']} with a residual break")
    print(f"  densest shared corridor: {max_clique+1} lines -> "
          f"{max(slots.values())+1} offset slots, ±{max(abs(o) for o in offsets.values()):.0f} px")
    print(f"  total vertices         : {sum(len(v['coords']) for v in built.values()):,}")
    return built


def main():
    geom = load_cache("pt_geom_raw.json")
    if not geom:
        sys.exit("Run scripts/osm_extract_raw.py first.")
    print("=" * 78)
    print("TRANSIT FROM OSM ROUTE RELATIONS — real street geometry, pixel offsets")
    print("=" * 78)
    for city in ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]:
        built = build_city(city, geom)
        out = os.path.join(DATA_DIR, f"{city}_osm_transit_routes.json")
        json.dump(built, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print(f"  -> {os.path.basename(out)} ({os.path.getsize(out)/1024:.0f} KB)")


if __name__ == "__main__":
    main()
