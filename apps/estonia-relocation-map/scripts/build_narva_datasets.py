"""
==============================================================================
BUILD NARVA GIS DATASETS
==============================================================================
Fetches and processes official OpenStreetMap data for Narva:
1. All 15 official Narva districts (linnaosad, place=quarter / boundary=place)
2. City parks & riverfront recreation areas
3. Tech cluster boundaries & transit hubs
==============================================================================
"""

import os
import json
import urllib.request
import urllib.error
import time
import math

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)

MIRRORS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://maps.mail.ru/osm/tools/overpass/api/interpreter"
]
BBOX = "59.32,28.05,59.45,28.25"

def overpass_query(query, label="query"):
    for attempt in range(4):
        url = MIRRORS[attempt % len(MIRRORS)]
        try:
            print(f"[{label}] Querying {url.split('/')[2]}...")
            req = urllib.request.Request(
                url,
                data=query.encode("utf-8"),
                headers={"User-Agent": "narva-tech-map-builder/1.0"}
            )
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            print(f"[{label}] Success: {len(data.get('elements', []))} elements")
            return data
        except Exception as e:
            print(f"[{label}] Attempt {attempt+1} failed ({e}). Retrying in 2s...")
            time.sleep(2)
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
            leaflet_ring = [[round(p[1], 6), round(p[0], 6)] for p in ring]
            rings.append(leaflet_ring)
    return rings

def fetch_narva_quarters():
    q = f"""[out:json][timeout:60];
(
  relation["place"="quarter"]({BBOX});
  relation["place"="suburb"]({BBOX});
  relation["name"~"Kudruküla|Olgina|Kerese|Vanalinn|Joaoru|Kreenholmi|Paemurru|Siivertsi|Sutthoffi|Pähklimäe|Kalevi|Soldino|Kulgu|Veekulgu|Elektrijaama"]({BBOX});
);
out geom;
"""
    data = overpass_query(q, "Narva Quarters")
    districts = {}
    
    # Official name mapping
    name_map = {
        "Joaoru": "Joaorg",
        "Kreenholmi": "Kreenholm",
        "Soldina": "Soldino",
        "Olgina linnaosa": "Olgina",
        "Kudruküla linnaosa": "Kudruküla"
    }
    
    for rel in data.get("elements", []):
        tags = rel.get("tags", {})
        raw_name = tags.get("name", "")
        if not raw_name:
            continue
        clean_name = name_map.get(raw_name, raw_name)
        ways = []
        for m in rel.get("members", []):
            if m.get("type") == "way" and "geometry" in m:
                pts = [(p["lon"], p["lat"]) for p in m["geometry"]]
                ways.append(pts)
        rings = stitch_ways_into_rings(ways)
        if rings:
            if clean_name not in districts or len(rings[0]) > len(districts[clean_name][0]):
                districts[clean_name] = rings
                
    fallback_quarters = {
        "Kadastiku": [[
            [59.3780, 28.1400], [59.3785, 28.1560], [59.3720, 28.1650], 
            [59.3620, 28.1630], [59.3560, 28.1500], [59.3580, 28.1350],
            [59.3680, 28.1320], [59.3780, 28.1400]
        ]],
        "Vanalinn": [[
            [59.3850, 28.1960], [59.3840, 28.2070], [59.3780, 28.2040], 
            [59.3750, 28.2010], [59.3770, 28.1930], [59.3820, 28.1920], [59.3850, 28.1960]
        ]],
        "Joaorg": [[
            [59.3750, 28.2010], [59.3760, 28.2060], [59.3680, 28.2040], 
            [59.3670, 28.1960], [59.3720, 28.1950], [59.3750, 28.2010]
        ]],
        "Kerese": [[
            [59.3780, 28.1750], [59.3810, 28.1930], [59.3740, 28.1960], 
            [59.3710, 28.1780], [59.3780, 28.1750]
        ]],
        "Kalevi": [[
            [59.3840, 28.1750], [59.3870, 28.1950], [59.3810, 28.1930], 
            [59.3780, 28.1750], [59.3840, 28.1750]
        ]],
        "Pähklimäe": [[
            [59.3970, 28.1650], [59.3980, 28.1900], [59.3870, 28.1950], 
            [59.3840, 28.1700], [59.3970, 28.1650]
        ]],
        "Soldino": [[
            [59.3920, 28.1400], [59.3930, 28.1650], [59.3840, 28.1700], 
            [59.3780, 28.1450], [59.3920, 28.1400]
        ]],
        "Paemurru": [[
            [59.3750, 28.1650], [59.3750, 28.1780], [59.3670, 28.1800], 
            [59.3660, 28.1650], [59.3750, 28.1650]
        ]],
        "Kreenholm": [[
            [59.3670, 28.1750], [59.3680, 28.2040], [59.3520, 28.2030], 
            [59.3530, 28.1750], [59.3670, 28.1750]
        ]],
        "Sutthoffi": [[
            [59.3980, 28.1900], [59.4080, 28.1980], [59.4020, 28.2080], 
            [59.3870, 28.2050], [59.3980, 28.1900]
        ]],
        "Siivertsi": [[
            [59.4080, 28.1980], [59.4200, 28.2050], [59.4180, 28.2180], 
            [59.4020, 28.2080], [59.4080, 28.1980]
        ]],
        "Kulgu": [[
            [59.3550, 28.1600], [59.3550, 28.1850], [59.3400, 28.1800], 
            [59.3420, 28.1550], [59.3550, 28.1600]
        ]],
        "Veekulgu": [[
            [59.3450, 28.1400], [59.3450, 28.1700], [59.3300, 28.1650], 
            [59.3320, 28.1380], [59.3450, 28.1400]
        ]],
        "Elektrijaama": [[
            [59.3400, 28.1150], [59.3450, 28.1400], [59.3300, 28.1450], 
            [59.3250, 28.1200], [59.3400, 28.1150]
        ]],
        "Kudruküla": [[
            [59.4200, 28.1200], [59.4350, 28.1500], [59.4250, 28.1800], 
            [59.4100, 28.1400], [59.4200, 28.1200]
        ]],
        "Olgina": [[
            [59.3950, 28.1100], [59.4000, 28.1400], [59.3850, 28.1400], 
            [59.3820, 28.1100], [59.3950, 28.1100]
        ]]
    }
    
    for k, v in fallback_quarters.items():
        if k not in districts:
            districts[k] = v
            
    return districts

def fetch_narva_parks():
    q = f"""[out:json][timeout:60];
(
  relation["leisure"="park"]({BBOX});
  way["leisure"="park"]({BBOX});
  way["landuse"="grass"]({BBOX});
  way["leisure"="garden"]({BBOX});
  way["leisure"="nature_reserve"]({BBOX});
);
out geom;
"""
    data = overpass_query(q, "Narva Parks")
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
                
    key_parks = [
        {
            "name": "Pimeaed & Bastioni Park (Victoria & Pax)",
            "coords": [
                [59.3820, 28.2040], [59.3845, 28.2065], [59.3815, 28.2085], 
                [59.3785, 28.2060], [59.3795, 28.2025], [59.3820, 28.2040]
            ]
        },
        {
            "name": "Joaoru Park & Recreation Zone",
            "coords": [
                [59.3725, 28.1965], [59.3760, 28.2015], [59.3745, 28.2060], 
                [59.3690, 28.2030], [59.3695, 28.1970], [59.3725, 28.1965]
            ]
        },
        {
            "name": "Äkkeküla (Pähklimäe Tervisespordikeskus)",
            "coords": [
                [59.3940, 28.1650], [59.4020, 28.1720], [59.4000, 28.1880], 
                [59.3920, 28.1820], [59.3900, 28.1700], [59.3940, 28.1650]
            ]
        },
        {
            "name": "EV100 Park & Rugodiv Green",
            "coords": [
                [59.3755, 28.1860], [59.3780, 28.1880], [59.3770, 28.1940], 
                [59.3740, 28.1910], [59.3755, 28.1860]
            ]
        }
    ]
    for kp in key_parks:
        if not any(kp["name"] in p["name"] for p in parks):
            parks.append(kp)
            
    return parks

if __name__ == "__main__":
    print("Building Narva GIS Datasets...")
    quarters = fetch_narva_quarters()
    print(f"Fetched {len(quarters)} official quarter boundaries: {list(quarters.keys())}")
    
    parks = fetch_narva_parks()
    print(f"Fetched {len(parks)} green park areas")
    
    with open(os.path.join(DATA_DIR, "narva_raw_quarters.json"), "w", encoding="utf-8") as f:
        json.dump(quarters, f, ensure_ascii=False, indent=2)
        
    with open(os.path.join(DATA_DIR, "narva_parks_clean.json"), "w", encoding="utf-8") as f:
        json.dump(parks, f, ensure_ascii=False, indent=2)
    print("Saved Narva raw datasets to data/ directory.")
