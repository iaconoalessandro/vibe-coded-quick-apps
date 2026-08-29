import urllib.request
import urllib.parse
import json
import time
import sys

from companies_data import companies_raw

results = []
print(f"Starting geocoding of {len(companies_raw)} companies...", flush=True)

for i, (name, addr, dist, desc) in enumerate(companies_raw, 1):
    query = f"{addr}, Tallinn, Estonia"
    url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&addressdetails=1&limit=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'TallinnTechTransitResearch/1.0 (contact@research.ee)'})
    
    lat, lon, disp = None, None, None
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            if data:
                lat = float(data[0]['lat'])
                lon = float(data[0]['lon'])
                disp = data[0]['display_name']
    except Exception as e:
        disp = f"Error: {e}"
        
    results.append({
        "id": i,
        "name": name,
        "address": addr,
        "district": dist,
        "description": desc,
        "lat": lat,
        "lon": lon,
        "osm_display": disp
    })
    print(f"[{i}/{len(companies_raw)}] {name} ({addr}) -> {lat}, {lon}", flush=True)
    time.sleep(1.0)

with open("companies_verified.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Finished successfully!", flush=True)
