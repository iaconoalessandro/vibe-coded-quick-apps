"""
Fetches the official OpenStreetMap administrative boundaries for Tallinn:
  - the 8 city districts (linnaosad, admin_level=9)
  - the 84 official sub-districts (asumid, admin_level=10)

Sub-district boundaries follow real streets, railways, coastlines and rivers,
so they are what the map's district zones are assembled from.
Writes tallinn_osm_asumid.json.
"""

import json
import time
import urllib.error
import urllib.request

MIRRORS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass.osm.jp/api/interpreter",
]
BBOX = "59.33,24.55,59.52,24.95"


def query_for(level):
    return f"""
[out:json][timeout:600];
relation["boundary"="administrative"]["admin_level"="{level}"]({BBOX});
out geom;
"""


def overpass(query, label):
    """POSTs to Overpass, rotating mirrors and retrying on timeout/rate limit."""
    last = None
    for attempt in range(6):
        url = MIRRORS[attempt % len(MIRRORS)]
        try:
            req = urllib.request.Request(
                url,
                data=query.encode("utf-8"),
                headers={"User-Agent": "tallinn-tech-map/1.0 (district boundary build)"},
            )
            with urllib.request.urlopen(req, timeout=600) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            print(f"  {label}: {len(data['elements'])} relations from {url.split('/')[2]}")
            return data
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as exc:
            last = exc
            wait = 10 * (attempt + 1)
            print(f"  {label}: {url.split('/')[2]} failed ({exc}); retrying in {wait}s")
            time.sleep(wait)
    raise RuntimeError(f"Overpass unreachable for {label}: {last}")


def stitch_rings(segments):
    """Joins unordered way geometries into closed rings (endpoint matching)."""
    segs = [list(s) for s in segments if len(s) > 1]
    rings = []
    while segs:
        ring = segs.pop(0)
        changed = True
        while changed and ring[0] != ring[-1]:
            changed = False
            for i, seg in enumerate(segs):
                if seg[0] == ring[-1]:
                    ring.extend(seg[1:]); segs.pop(i); changed = True; break
                if seg[-1] == ring[-1]:
                    ring.extend(list(reversed(seg))[1:]); segs.pop(i); changed = True; break
                if seg[-1] == ring[0]:
                    ring = seg[:-1] + ring; segs.pop(i); changed = True; break
                if seg[0] == ring[0]:
                    ring = list(reversed(seg))[:-1] + ring; segs.pop(i); changed = True; break
        if len(ring) >= 4 and ring[0] == ring[-1]:
            rings.append(ring)
    return rings


def relation_rings(rel):
    """Returns (outer_rings, inner_rings) as lists of [lon, lat] point lists."""
    out_segs, in_segs = [], []
    for m in rel.get("members", []):
        if m.get("type") != "way" or "geometry" not in m:
            continue
        pts = [(round(p["lon"], 7), round(p["lat"], 7)) for p in m["geometry"]]
        (in_segs if m.get("role") == "inner" else out_segs).append(pts)
    return stitch_rings(out_segs), stitch_rings(in_segs)


def main():
    print("Querying Overpass for official Tallinn admin_level 9 + 10 boundaries...")
    elements = []
    for level in ("9", "10"):
        elements.extend(overpass(query_for(level), f"admin_level={level}")["elements"])

    result = {"districts": [], "subdistricts": []}
    for rel in elements:
        tags = rel.get("tags", {})
        name = tags.get("name") or ""
        if tags.get("admin_level") == "9" and "linnaosa" not in name:
            continue  # rural villages / towns around Tallinn
        outer, inner = relation_rings(rel)
        if not outer:
            print(f"  ! no closed ring for {name} ({rel['id']})")
            continue
        entry = {
            "osm_id": rel["id"],
            "name": name,
            "admin_level": tags.get("admin_level"),
            "outer": [[list(p) for p in r] for r in outer],
            "inner": [[list(p) for p in r] for r in inner],
        }
        key = "districts" if tags.get("admin_level") == "9" else "subdistricts"
        result[key].append(entry)

    result["districts"].sort(key=lambda e: e["name"])
    result["subdistricts"].sort(key=lambda e: e["name"])

    with open("tallinn_osm_asumid.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False)

    print(f"\nCity districts (linnaosad): {len(result['districts'])}")
    for d in result["districts"]:
        print("  ", d["name"], f"({sum(len(r) for r in d['outer'])} pts)")
    print(f"\nSub-districts (asumid): {len(result['subdistricts'])}")
    print("   " + ", ".join(e["name"] for e in result["subdistricts"]))
    print("\nWrote tallinn_osm_asumid.json")


if __name__ == "__main__":
    main()
