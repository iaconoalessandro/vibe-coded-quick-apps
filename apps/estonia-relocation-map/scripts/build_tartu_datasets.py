"""
Fetches and processes official OpenStreetMap data for Tartu:
1. All 17 official Tartu districts (linnaosad, place=quarter)
2. City parks & riverfront recreation areas
3. Tech cluster boundaries & transit hubs
"""

import os
import json
import urllib.request
import urllib.error
import time

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)

MIRRORS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]
BBOX = "58.33,26.63,58.43,26.82"

def overpass_query(query, label="query"):
    for attempt in range(4):
        url = MIRRORS[attempt % len(MIRRORS)]
        try:
            print(f"[{label}] Querying {url.split('/')[2]}...")
            req = urllib.request.Request(
                url,
                data=query.encode("utf-8"),
                headers={"User-Agent": "tartu-tech-map-builder/1.0"}
            )
            with urllib.request.urlopen(req, timeout=45) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            print(f"[{label}] Success: {len(data.get('elements', []))} elements")
            return data
        except Exception as e:
            print(f"[{label}] Attempt {attempt+1} failed ({e}). Retrying in 3s...")
            time.sleep(3)
    return {"elements": []}

def stitch_ways_into_rings(ways):
    """Joins way segments into closed polygons."""
    segs = [list(w) for w in ways if len(w) > 1]
    rings = []
    while segs:
        ring = segs.pop(0)
        changed = True
        while changed and ring[0] != ring[-1]:
            changed = False
            for i, seg in enumerate(segs):
                if seg[0] == ring[-1]:
                    ring.extend(seg[1:])
                    segs.pop(i)
                    changed = True
                    break
                if seg[-1] == ring[-1]:
                    ring.extend(list(reversed(seg))[1:])
                    segs.pop(i)
                    changed = True
                    break
                if seg[-1] == ring[0]:
                    ring = seg[:-1] + ring
                    segs.pop(i)
                    changed = True
                    break
                if seg[0] == ring[0]:
                    ring = list(reversed(seg))[:-1] + ring
                    segs.pop(i)
                    changed = True
                    break
        if len(ring) >= 4 and ring[0] == ring[-1]:
            # Convert [lon, lat] to Leaflet [lat, lon]
            leaflet_ring = [[p[1], p[0]] for p in ring]
            rings.append(leaflet_ring)
    return rings

def fetch_tartu_quarters():
    q = f"""[out:json][timeout:60];
relation["place"="quarter"]({BBOX});
out geom;
"""
    data = overpass_query(q, "Tartu Quarters")
    districts = {}
    for rel in data.get("elements", []):
        tags = rel.get("tags", {})
        name = tags.get("name")
        if not name:
            continue
        ways = []
        for m in rel.get("members", []):
            if m.get("type") == "way" and "geometry" in m:
                pts = [(round(p["lon"], 6), round(p["lat"], 6)) for p in m["geometry"]]
                ways.append(pts)
        rings = stitch_ways_into_rings(ways)
        districts[name] = rings
    return districts

def fetch_tartu_parks():
    q = f"""[out:json][timeout:60];
(
  relation["leisure"="park"]({BBOX});
  way["leisure"="park"]({BBOX});
  way["landuse"="grass"]({BBOX});
  way["leisure"="garden"]({BBOX});
);
out geom;
"""
    data = overpass_query(q, "Tartu Parks")
    parks = []
    for elem in data.get("elements", []):
        tags = elem.get("tags", {})
        name = tags.get("name")
        if not name and elem.get("type") == "way" and tags.get("leisure") != "park":
            continue
        park_name = name or "Green Space / Park"
        
        if elem.get("type") == "way" and "geometry" in elem:
            coords = [[round(p["lat"], 6), round(p["lon"], 6)] for p in elem["geometry"]]
            if len(coords) >= 4:
                parks.append({"name": park_name, "coords": coords})
        elif elem.get("type") == "relation":
            ways = []
            for m in elem.get("members", []):
                if m.get("type") == "way" and "geometry" in m:
                    pts = [(round(p["lon"], 6), round(p["lat"], 6)) for p in m["geometry"]]
                    ways.append(pts)
            rings = stitch_ways_into_rings(ways)
            for r in rings:
                parks.append({"name": park_name, "coords": r})
    return parks

if __name__ == "__main__":
    print("Building Tartu GIS Datasets...")
    quarters = fetch_tartu_quarters()
    print(f"Fetched {len(quarters)} official quarter boundaries")
    
    parks = fetch_tartu_parks()
    print(f"Fetched {len(parks)} green park areas")
    
    with open(os.path.join(DATA_DIR, "tartu_raw_quarters.json"), "w", encoding="utf-8") as f:
        json.dump(quarters, f, ensure_ascii=False, indent=2)
        
    with open(os.path.join(DATA_DIR, "tartu_parks_clean.json"), "w", encoding="utf-8") as f:
        json.dump(parks, f, ensure_ascii=False, indent=2)
    print("Saved raw datasets to data/ directory.")
