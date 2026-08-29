import urllib.request
import json
import time

# 1. Download official Tallinn stops
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
            # also map all comma-separated sub-stop IDs
            sub_ids = [s.strip() for s in parts[4].split(',') if s.strip()]
            for s in sub_ids + [stop_id]:
                stops_dict[s] = (lat, lng, name)
        except Exception:
            continue

print(f"Loaded {len(stops_dict)} stop entries.")

# 2. Download official routes
print("Downloading official routes from transport.tallinn.ee...")
req = urllib.request.Request('https://transport.tallinn.ee/data/routes.txt', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lines = resp.read().decode('utf-8', errors='ignore').splitlines()

routes_data = {}
for line in lines:
    parts = line.split(';')
    if len(parts) >= 14:
        r_num = parts[0].strip()
        transport = parts[3].strip().lower()
        r_name = parts[10].strip()
        r_stops = [s.strip() for s in parts[13].split(',') if s.strip()]
        if r_num and r_stops:
            key = f"{transport}_{r_num}"
            if key not in routes_data:
                routes_data[key] = {
                    "num": r_num,
                    "transport": transport,
                    "name": r_name,
                    "stops": r_stops
                }

print(f"Extracted {len(routes_data)} route definitions.")

# Target bus and trolley lines
target_routes = [
    ("bus", "2", "Bus 2 (Reisisadam - Mõigu / Ülemiste)"),
    ("bus", "3", "Bus 3 (Vana-Lõuna / Veerenni - Pelguranna)"),
    ("bus", "11", "Bus 11 (Tehnopol / Mustamäe - Kaubamaja Express)"),
    ("bus", "12", "Bus 12 (Väike-Õismäe - Tammsaare - Priisle)"),
    ("bus", "13", "Bus 13 (Väike-Õismäe - Tammsaare - Ülemiste City - Seli)"),
    ("bus", "15", "Bus 15 (Viru Keskus - Ülemiste City - Sõjamäe)"),
    ("bus", "16", "Bus 16 (Väike-Õismäe - Kristiine/WoHo - Tallinn-Väike)"),
    ("bus", "20", "Bus 20 (Reisisadam - Tammsaare - Tehnopol - Pääsküla)"),
    ("bus", "24", "Bus 24 (Kadaka / Tehnopol - Kristiine - Estonia)"),
    ("bus", "28", "Bus 28 (Väike-Õismäe - Kristiine - Veerenni)"),
    ("bus", "42", "Bus 42 (Väike-Õismäe - WoHo - Kaubamaja - Priisle)"),
    ("bus", "73", "Bus 73 (Vana-Lõuna - Veerenni - Kalaranna - Tööstuse)"),
    ("trol", "1", "Trolley 1 (Mustamäe - Kristiine/WoHo - Kaubamaja)"),
    ("trol", "3", "Trolley 3 (Mustamäe / Tehnopol - Sõpruse - Kaubamaja)"),
    ("trol", "4", "Trolley 4 (Keskuse / Mustamäe - Balti Jaam)"),
    ("trol", "5", "Trolley 5 (Mustamäe - Mustamäe tee - Balti Jaam)"),
]

detailed_geometries = {}

for t_type, num, label in target_routes:
    # Find matching route
    matching = [r for k, r in routes_data.items() if r["num"] == num and (t_type in r["transport"] or t_type in k)]
    if not matching:
        print(f"Could not find route {t_type} {num}")
        continue
    
    r_info = matching[0]
    stop_ids = r_info["stops"]
    stop_coords = [stops_dict[sid][:2] for sid in stop_ids if sid in stops_dict]
    
    print(f"Route {label}: {len(stop_coords)} stops found.")
    
    # Let's route via OSRM to get street geometry
    # OSRM limits ~100 coords per request, so sample every 2-3 stops or chunk
    if len(stop_coords) > 25:
        sampled_coords = stop_coords[::2]
        if stop_coords[-1] not in sampled_coords:
            sampled_coords.append(stop_coords[-1])
    else:
        sampled_coords = stop_coords
        
    coords_str = ";".join([f"{lon:.5f},{lat:.5f}" for lat, lon in sampled_coords])
    url = f"https://router.project-osrm.org/route/v1/driving/{coords_str}?overview=full&geometries=geojson"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
            geo_coords = data['routes'][0]['geometry']['coordinates']
            # convert from [lon, lat] to [lat, lon]
            lat_lon_path = [[pt[1], pt[0]] for pt in geo_coords]
            detailed_geometries[label] = {
                "type": t_type,
                "num": num,
                "label": label,
                "coords": lat_lon_path
            }
            print(f"-> Generated {len(lat_lon_path)} road-following coordinates for {label}")
    except Exception as e:
        print(f"OSRM routing failed for {label}: {e}")
        # fallback to stop_coords
        detailed_geometries[label] = {
            "type": t_type,
            "num": num,
            "label": label,
            "coords": stop_coords
        }
    time.sleep(0.5)

with open("tallinn_detailed_transit_shapes.json", "w") as f:
    json.dump(detailed_geometries, f, indent=2)

print(f"Saved {len(detailed_geometries)} high-resolution street-following transit lines!")
