import urllib.request
import json
import math
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

print("Downloading official routes from transport.tallinn.ee...")
req = urllib.request.Request('https://transport.tallinn.ee/data/routes.txt', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lines = resp.read().decode('utf-8', errors='ignore').splitlines()

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

target_lines = [
    ("2", "🔴 Bus 2: Reisisadam ↔ Mõigu / Ülemiste", "#E6194B", -6.0),
    ("3", "🌸 Bus 3: Vana-Lõuna / Veerenni ↔ Kalamaja / Pelguranna", "#F032E6", -4.0),
    ("11", "🟡 Bus 11: Tehnopol / Mustamäe Express ↔ Kaubamaja", "#FFE119", -2.0),
    ("12", "🟢 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle", "#3CB44B", 0.0),
    ("13", "🟠 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli", "#F58231", 2.5),
    ("15", "🟣 Bus 15: Viru Keskus ↔ Tartu mnt ↔ Ülemiste City", "#911EB4", 5.0),
    ("16", "🔵 Bus 16: Väike-Õismäe ↔ Kristiine/WoHo ↔ Tallinn-Väike", "#4363D8", -5.0),
    ("20", "🩵 Bus 20: Reisisadam ↔ Tammsaare ↔ Tehnopol ↔ Pääsküla", "#42D4F4", 7.0),
    ("24", "🌿 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia", "#A9F522", 3.5),
    ("28", "🌹 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise/Bolt)", "#FF6B6B", -3.0),
    ("42", "🟫 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle", "#9A6324", 4.0),
    ("73", "🌊 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta)", "#008080", 6.0),
    ("81", "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja", "#00d2ff", -2.0),
    ("83", "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja", "#00ff87", 2.0),
    ("84", "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam", "#ff9900", -3.0),
    ("85", "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam", "#ff007f", 3.0)
]

def clean_and_dedup(coords):
    """Deduplicates consecutive identical or micro-spaced coordinates."""
    if not coords:
        return []
    res = [coords[0]]
    for c in coords[1:]:
        d = math.hypot(c[0] - res[-1][0], c[1] - res[-1][1])
        if d > 0.00015: # ~15 meters minimum spacing
            res.append(c)
    return res

def clean_reversals(points):
    """Removes U-turns and backtracking spikes from coordinate sequences."""
    if len(points) < 3:
        return points
    cleaned = [points[0]]
    for i in range(1, len(points) - 1):
        p_prev = cleaned[-1]
        p_curr = points[i]
        p_next = points[i+1]
        
        v1 = (p_curr[0] - p_prev[0], p_curr[1] - p_prev[1])
        v2 = (p_next[0] - p_curr[0], p_next[1] - p_curr[1])
        l1 = math.hypot(*v1)
        l2 = math.hypot(*v2)
        
        if l1 < 0.00005 or l2 < 0.00005:
            continue
            
        dot = (v1[0]*v2[0] + v1[1]*v2[1]) / (l1 * l2)
        if dot < -0.6:  # Sharp >125 degree backtracking spike
            continue
        cleaned.append(p_curr)
    cleaned.append(points[-1])
    return cleaned

def douglas_peucker(points, tol=0.00006):
    """Simplifies polyline to remove micro-jitter while preserving road curves."""
    if len(points) <= 2:
        return points
        
    def point_line_dist(pt, start, end):
        if start == end:
            return math.hypot(pt[0]-start[0], pt[1]-start[1])
        dx = end[0] - start[0]
        dy = end[1] - start[1]
        num = abs(dy*pt[0] - dx*pt[1] + end[0]*start[1] - end[1]*start[0])
        den = math.hypot(dx, dy)
        return num / den if den > 0 else 0

    dmax = 0
    index = 0
    for i in range(1, len(points) - 1):
        d = point_line_dist(points[i], points[0], points[-1])
        if d > dmax:
            index = i
            dmax = d
            
    if dmax > tol:
        rec1 = douglas_peucker(points[:index+1], tol)
        rec2 = douglas_peucker(points[index:], tol)
        return rec1[:-1] + rec2
    else:
        return [points[0], points[-1]]

def apply_clean_parallel_offset(coords, offset_meters):
    """
    Computes a clean, smooth parallel offset path in meters directly in coordinates.
    """
    if offset_meters == 0 or len(coords) < 2:
        return coords
    
    m_per_lat = 111139.0
    m_per_lon = 56500.0
    
    offset_coords = []
    n = len(coords)
    
    for i in range(n):
        if i == 0:
            dx = (coords[1][1] - coords[0][1]) * m_per_lon
            dy = (coords[1][0] - coords[0][0]) * m_per_lat
        elif i == n - 1:
            dx = (coords[n-1][1] - coords[n-2][1]) * m_per_lon
            dy = (coords[n-1][0] - coords[n-2][0]) * m_per_lat
        else:
            dx = (coords[i+1][1] - coords[i-1][1]) * m_per_lon
            dy = (coords[i+1][0] - coords[i-1][0]) * m_per_lat
            
        l = math.hypot(dx, dy)
        if l == 0:
            offset_coords.append(coords[i])
            continue
            
        # Normal vector perpendicular to direction
        nx = -dy / l
        ny = dx / l
        
        off_lat = coords[i][0] + (ny * offset_meters) / m_per_lat
        off_lon = coords[i][1] + (nx * offset_meters) / m_per_lon
        offset_coords.append([round(off_lat, 6), round(off_lon, 6)])
        
    return offset_coords

results = {}

for num, label, color, offset_val in target_lines:
    if num not in parsed_routes:
        continue
    
    direction = max(parsed_routes[num], key=lambda x: len(x["stops"]))
    stop_ids = direction["stops"]
    raw_stop_coords = [stops_dict[sid][:2] for sid in stop_ids if sid in stops_dict]
    stop_coords = clean_and_dedup(raw_stop_coords)
    
    print(f"\nProcessing {label} with {len(stop_coords)} deduplicated stops...")
    
    full_road_path = []
    chunk_size = 10
    for i in range(0, len(stop_coords) - 1, chunk_size - 1):
        chunk = stop_coords[i:i + chunk_size]
        if len(chunk) < 2:
            continue
        coords_str = ";".join([f"{lon:.5f},{lat:.5f}" for lat, lon in chunk])
        url = f"https://router.project-osrm.org/route/v1/driving/{coords_str}?overview=full&geometries=geojson&continue_straight=true"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode())
                geo_coords = data['routes'][0]['geometry']['coordinates']
                lat_lon_chunk = [[pt[1], pt[0]] for pt in geo_coords]
                if full_road_path:
                    full_road_path.extend(lat_lon_chunk[1:])
                else:
                    full_road_path.extend(lat_lon_chunk)
        except Exception as e:
            print(f"  OSRM fallback for chunk {i}: {e}")
            if full_road_path:
                full_road_path.extend(chunk[1:])
            else:
                full_road_path.extend(chunk)
        time.sleep(0.3)
    
    # 1. Clean U-turns and reversals
    clean_path = clean_reversals(full_road_path)
    clean_path = clean_reversals(clean_path)
    
    # 2. Smooth polyline
    smoothed_path = douglas_peucker(clean_path, tol=0.00006)
    
    # 3. Apply clean parallel offset in meters (1.6m per offset unit)
    offset_meters = offset_val * 1.6
    parallel_path = apply_clean_parallel_offset(smoothed_path, offset_meters)
    
    print(f"  -> Generated {len(parallel_path)} clean, beautiful road coordinates for {label}")
    
    results[label] = {
        "num": num,
        "label": label,
        "color": color,
        "name": direction["name"],
        "coords": parallel_path,
        "weight": 4.5
    }

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nSaved {len(results)} clean, loop-free transit lines!")
