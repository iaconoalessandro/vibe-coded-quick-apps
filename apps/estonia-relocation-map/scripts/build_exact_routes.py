import urllib.request
import json
import time

print("Downloading official stops from transport.tallinn.ee...")
req = urllib.request.Request('https://transport.tallinn.ee/data/stops.txt', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lines = resp.read().decode('utf-8', errors='ignore').splitlines()

stops_dict = {}
for line in lines[1:]:
    parts = line.split(';')
    if len(parts) >= 6:
        stop_id = parts[0].strip()
        try:
            lat = float(parts[2]) / 100000.0
            lng = float(parts[3]) / 100000.0
            name = parts[5]
            sub_ids = [s.strip() for s in parts[4].split(',') if s.strip()]
            for s in sub_ids + [stop_id]:
                stops_dict[s] = (lat, lng, name)
        except Exception:
            continue

print(f"Loaded {len(stops_dict)} stop entries.")

print("Downloading official routes from transport.tallinn.ee...")
req = urllib.request.Request('https://transport.tallinn.ee/data/routes.txt', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lines = resp.read().decode('utf-8', errors='ignore').splitlines()

# Parse routes
parsed_routes = {}
current_num = None

for line in lines[1:]:
    parts = line.split(';')
    if len(parts) > 13:
        if parts[0].strip():
            current_num = parts[0].strip()
        r_name = parts[10].strip()
        stops_str = parts[13].strip()
        if stops_str and current_num:
            stop_ids = [s.strip() for s in stops_str.split(',') if s.strip()]
            if current_num not in parsed_routes:
                parsed_routes[current_num] = []
            parsed_routes[current_num].append({
                "name": r_name,
                "stops": stop_ids
            })

print(f"Parsed {len(parsed_routes)} distinct line numbers.")

target_lines = [
    ("2", "🚌 Bus 2: Reisisadam ↔ Mõigu / Ülemiste", "#f97316"),
    ("3", "🚌 Bus 3: Vana-Lõuna / Veerenni ↔ Kalamaja / Pelguranna", "#ea580c"),
    ("11", "🚌 Bus 11: Tehnopol / Mustamäe Express ↔ Kaubamaja", "#fb923c"),
    ("12", "🚌 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle", "#eab308"),
    ("13", "🚌 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli", "#ca8a04"),
    ("15", "🚌 Bus 15: Viru Keskus ↔ Tartu mnt ↔ Ülemiste City", "#f59e0b"),
    ("16", "🚌 Bus 16: Väike-Õismäe ↔ Kristiine/WoHo ↔ Tallinn-Väike", "#fdba74"),
    ("20", "🚌 Bus 20: Reisisadam ↔ Tammsaare ↔ Tehnopol ↔ Pääsküla", "#f97316"),
    ("24", "🚌 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia", "#ea580c"),
    ("28", "🚌 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise/Bolt)", "#c2410c"),
    ("42", "🚌 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle", "#d97706"),
    ("73", "🚌 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta)", "#b45309"),
    ("81", "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja", "#06b6d4"),
    ("83", "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja", "#14b8a6"),
    ("84", "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam", "#0ea5e9"),
    ("85", "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam", "#38bdf8")
]

results = {}

for num, label, color in target_lines:
    if num not in parsed_routes:
        print(f"Line {num} ({label}) not found in routes!")
        continue
    
    # Pick the primary direction with the most stops
    direction = max(parsed_routes[num], key=lambda x: len(x["stops"]))
    stop_ids = direction["stops"]
    
    stop_coords = [stops_dict[sid][:2] for sid in stop_ids if sid in stops_dict]
    print(f"\nProcessing {label} with {len(stop_coords)} official stops ({direction['name']})...")
    
    # Break into chunks of 20 stops for OSRM to get exact road geometry
    full_road_path = []
    chunk_size = 15
    for i in range(0, len(stop_coords) - 1, chunk_size - 1):
        chunk = stop_coords[i:i + chunk_size]
        if len(chunk) < 2:
            continue
        coords_str = ";".join([f"{lon:.5f},{lat:.5f}" for lat, lon in chunk])
        url = f"https://router.project-osrm.org/route/v1/driving/{coords_str}?overview=full&geometries=geojson"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode())
                geo_coords = data['routes'][0]['geometry']['coordinates']
                lat_lon_chunk = [[pt[1], pt[0]] for pt in geo_coords]
                if full_road_path:
                    full_road_path.extend(lat_lon_chunk[1:])
                else:
                    full_road_path.extend(lat_lon_chunk)
        except Exception as e:
            print(f"  OSRM chunk failed: {e}")
            if full_road_path:
                full_road_path.extend(chunk[1:])
            else:
                full_road_path.extend(chunk)
        time.sleep(0.3)
    
    print(f"  -> Generated {len(full_road_path)} road-following coordinates for {label}")
    results[label] = {
        "num": num,
        "label": label,
        "color": color,
        "name": direction["name"],
        "coords": full_road_path
    }

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nSuccessfully generated {len(results)} exact road-following transit lines!")
