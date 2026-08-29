"""
==============================================================================
TRANSIT NETWORK AUDIT & MERGE (all 5 cities)
==============================================================================
Reconciles the map's existing hand-curated line registry against the operators'
OSM route relations and emits one unified per-city transit file.

For every line:
  * present in both      -> OSM street geometry wins, the map's curated label /
                            colour is kept
  * OSM only             -> ADDED (the audit found a line the map was missing)
  * map only             -> KEPT, flagged `in_osm: false` (usually a network OSM
                            has not mapped, e.g. the Kohtla-Järve city buses)

Also corrects two things the audit turned up:
  * Tallinn's trolleybus network was closed on 1 Nov 2024 and restored on
    1 Jul / Aug 2026 with battery trolleys running as lines 72, 81, 83, 84, 85 —
    the map still described it as "Trolley 1/3/4/5" and carried 72 as a bus.
  * regional lines reaching far beyond the map's stated "within 30 km" scope are
    dropped from the Outside-City group.

Offsets are re-allocated across the merged set so the corridor colouring
accounts for every line that is actually drawn.

Output: data/<city>_transit_final.json
Run:    python3 scripts/merge_transit_networks.py
==============================================================================
"""
import os
import sys
import json
from collections import Counter, defaultdict

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from osm_pipeline_common import DATA_DIR, load_cache, CITY_LABEL, douglas_peucker
from build_osm_transit import (
    allocate_offsets, CITY_CENTER, dist_m, path_length_m, PALETTE, LINE_WEIGHT,
)

# Tallinn battery-trolley lines as of Aug 2026 (TLT / Tallinna trollibussiliiklus).
TALLINN_TROLLEY_REFS = {"72", "81", "83", "84", "85"}
OUTSIDE_MAX_KM = 32.0     # the map's "Outside City (within 30 km)" scope

EMOJI = {"bus_key": "🔴", "bus_suburb": "🌲", "bus_outside": "🏡",
         "tram": "🚋", "train": "🚆", "trolley": "🚎"}
KIND = {"bus_key": "Bus", "bus_suburb": "Bus", "bus_outside": "Bus",
        "tram": "Tram", "train": "Train", "trolley": "Trolley"}


def load_legacy(city):
    """The map's existing curated registry, keyed by line number."""
    out = {}
    if city == "tallinn":
        d = json.load(open(os.path.join(DATA_DIR, "tallinn_exact_transit_routes.json"),
                           encoding="utf-8"))
        for label, r in d.items():
            out[str(r.get("num"))] = dict(r, label=label)
        from generate_tallinn_tech_map import TRAM_LINES, TRAIN_LINES
        for k, v in TRAM_LINES.items():
            out["T" + k.split("_")[-1]] = dict(v, num="T" + k.split("_")[-1], group="tram")
        for k, v in TRAIN_LINES.items():
            out[k] = dict(v, num=k, group="train")
    else:
        mod = __import__(f"{city}_transit_routes")
        prefix = {"tartu": "TARTU", "parnu": "PARNU", "narva": "NARVA",
                  "kohtla_jarve": "KOHTLA_JARVE"}[city]
        for label, r in getattr(mod, f"{prefix}_BUS_ROUTES").items():
            out[str(r.get("num"))] = dict(r, label=label)
        for k, v in getattr(mod, f"{prefix}_TRAIN_LINES").items():
            out[k] = dict(v, num=k, group="train")
    return out


def load_stations(city, osm_routes, geom):
    """Stop nodes carried by the OSM relation, for rail/tram station dots."""
    nodes, names = geom["nodes"], geom["node_names"]
    raw = {str(r["id"]): r for r in geom["routes"]}
    out = {}
    for key, r in osm_routes.items():
        if r["group"] not in ("train", "tram"):
            continue
        rel = raw.get(str(r.get("osm_relation")))
        if not rel:
            continue
        sts, seen = [], set()
        for ty, ref, role in rel["members"]:
            if ty != "n" or "stop" not in role and "platform" not in role:
                continue
            pos = nodes.get(str(ref))
            nm = names.get(str(ref), "")
            if not pos or not nm or nm in seen:
                continue
            seen.add(nm)
            sts.append({"name": nm, "lat": pos[0], "lon": pos[1],
                        "type": "station", "desc": f"{r['label'].split(':')[0]} stop"})
        if sts:
            out[key] = sts
    return out


def merge_city(city, geom):
    print(f"\n{'=' * 78}\n{CITY_LABEL[city]}\n{'=' * 78}")
    osm = json.load(open(os.path.join(DATA_DIR, f"{city}_osm_transit_routes.json"),
                         encoding="utf-8"))
    legacy = load_legacy(city)
    clat, clon = CITY_CENTER[city]

    # --- corrections -------------------------------------------------------
    if city == "tallinn":
        for r in osm.values():
            if r["num"] in TALLINN_TROLLEY_REFS:
                r["group"] = "trolley"

    dropped_far = []
    for key in list(osm):
        r = osm[key]
        if r["group"] == "bus_outside":
            far = max(dist_m(p, (clat, clon)) for p in r["coords"][::5]) / 1000
            if far > OUTSIDE_MAX_KM:
                dropped_far.append(r["num"])
                del osm[key]

    # --- merge -------------------------------------------------------------
    merged, added, matched, kept = {}, [], [], []
    osm_by_num = {r["num"]: (k, r) for k, r in osm.items()}

    for key, r in osm.items():
        num = r["num"]
        lg = legacy.get(num)
        rec = dict(r)
        if lg:
            matched.append(num)
            rec["label"] = lg.get("label", r["label"])
            rec["color"] = lg.get("color", r["color"])
            rec["name"] = lg.get("name") or r["name"]
            if lg.get("group") in ("tram", "train", "trolley"):
                rec["group"] = lg["group"]
            if city == "tallinn" and num in TALLINN_TROLLEY_REFS:
                rec["group"] = "trolley"
        else:
            added.append(num)
        rec["in_osm"] = True
        rec["geometry_source"] = rec.pop("source", "OSM route relation")
        merged[key] = rec

    for num, lg in legacy.items():
        if num in osm_by_num or not lg.get("coords"):
            continue
        grp = lg.get("group") or "bus_suburb"
        key = f"{'tram' if grp == 'tram' else 'train' if grp == 'train' else 'bus'}_{num}"
        if key in merged:
            key += "_legacy"
        kept.append(num)
        merged[key] = {
            "id": key, "num": num, "label": lg.get("label", str(num)),
            "name": lg.get("name", ""), "color": lg.get("color", "#64748b"),
            "coords": lg["coords"], "weight": LINE_WEIGHT, "group": grp,
            "length_km": round(path_length_m(lg["coords"]) / 1000, 1),
            "in_osm": False,
            "geometry_source": "Map registry (operator timetable + OSRM street routing); "
                               "no OSM route relation published for this line",
            "stations": lg.get("stations", []),
        }

    # --- stations ----------------------------------------------------------
    for key, sts in load_stations(city, merged, geom).items():
        if key in merged and not merged[key].get("stations"):
            merged[key]["stations"] = sts

    # --- offsets across the merged set -------------------------------------
    offsets, slots, max_clique = allocate_offsets(merged, clat)
    for k, v in merged.items():
        v["offset_px"] = offsets[k]
        v["offset_slot"] = slots[k]
        v["weight"] = LINE_WEIGHT

    # --- relabel groups consistently ---------------------------------------
    for v in merged.values():
        g = v["group"]
        if not v["label"].startswith(EMOJI[g]):
            base = v["label"].split(":", 1)[-1].strip() if ":" in v["label"] else v["label"]
            v["label"] = f"{EMOJI[g]} {KIND[g]} {v['num']}: {base}"

    gc = Counter(v["group"] for v in merged.values())
    print(f"  merged lines        : {len(merged)}  ({', '.join(f'{k}:{v}' for k, v in sorted(gc.items()))})")
    print(f"  matched map <-> OSM : {len(matched)}")
    print(f"  ADDED from OSM      : {len(added)}" + (f"  -> {' '.join(sorted(added, key=lambda x:(len(x),x)))}" if added else ""))
    print(f"  KEPT (not in OSM)   : {len(kept)}" + (f"  -> {' '.join(sorted(kept, key=lambda x:(len(x),x)))}" if kept else ""))
    if dropped_far:
        print(f"  dropped >{OUTSIDE_MAX_KM:.0f} km      : {len(dropped_far)}  -> {' '.join(sorted(dropped_far, key=lambda x:(len(x),x)))}")
    print(f"  offset slots        : {max(slots.values())+1} "
          f"(densest corridor {max_clique+1} lines), ±{max(abs(o) for o in offsets.values()):.0f} px")
    nst = sum(len(v.get('stations') or []) for v in merged.values())
    print(f"  rail/tram stations  : {nst}")

    out = os.path.join(DATA_DIR, f"{city}_transit_final.json")
    json.dump(merged, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"  -> {os.path.basename(out)} ({os.path.getsize(out)/1024:.0f} KB)")
    return merged


if __name__ == "__main__":
    geom = load_cache("pt_geom_raw.json")
    print("=" * 78)
    print("TRANSIT AUDIT & MERGE — map registry vs OpenStreetMap route relations")
    print("=" * 78)
    tot = 0
    for city in ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]:
        tot += len(merge_city(city, geom))
    print(f"\n{'=' * 78}\n{tot} transit lines across 5 cities.\n{'=' * 78}")
