import json
import math
import time
import urllib.request

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
            name = parts[5].strip()
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

# Comprehensive catalog of transit lines
# (num, label, color, offset_meters, group_category)
all_target_lines = [
    # --- 1. TROLLEYBUS LINES (4 Lines) ---
    ("81", "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja", "#00d2ff", -2.0, "trolley"),
    ("83", "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja", "#00ff87", 2.0, "trolley"),
    ("84", "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam", "#ff9900", -3.0, "trolley"),
    ("85", "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam", "#ff007f", 3.0, "trolley"),

    # --- 2. NÕMME & SOUTHERN CORRIDOR BUS LINES (11 Lines) ---
    ("10", "🌲 Bus 10: Väike-Õismäe ↔ Mustamäe ↔ Nõmme ↔ Vana-Pääsküla", "#10b981", 2.0, "bus_nomme"),
    ("18", "🌲 Bus 18: Viru Keskus ↔ Järve ↔ Nõmme ↔ Pääsküla ↔ Laagri ↔ Urda Suburb", "#ef4444", -3.0, "bus_nomme"),
    ("19", "🌲 Bus 19: Reisisadam ↔ Viru ↔ Nõmme ↔ Pääsküla ↔ Laagri Alevik Suburb", "#f97316", 3.0, "bus_nomme"),
    ("20", "🌲 Bus 20: Viru Keskus ↔ Mustamäe / Tehnopol ↔ Nõmme ↔ Pääsküla (Teelise)", "#06b6d4", 5.0, "bus_nomme"),
    ("27", "🌲 Bus 27: Harkujärve Suburb ↔ Õismäe ↔ Tehnopol ↔ Vana-Pääsküla ↔ Laagri Alevik", "#84cc16", -4.0, "bus_nomme"),
    ("32", "🌲 Bus 32: Männiku ↔ Liiva (Nõmme) ↔ Marja ↔ Kopli", "#6366f1", -2.5, "bus_nomme"),
    ("33", "🌲 Bus 33: Kopli ↔ Pelgulinn ↔ Kristiine ↔ Nõmme Keskus ↔ Valdeku ↔ Männiku", "#ec4899", 4.0, "bus_nomme"),
    ("36", "🌲 Bus 36: Väike-Õismäe ↔ Tehnopol ↔ Nõmme Keskus ↔ Järve ↔ Viru", "#eab308", -2.0, "bus_nomme"),
    ("45", "🌲 Bus 45: Väike-Õismäe ↔ Tehnopol ↔ Nõmme Keskus ↔ Valdeku ↔ Ülemiste City", "#8b5cf6", 3.5, "bus_nomme"),
    ("5", "🌲 Bus 5: Männiku ↔ Liiva (Nõmme) ↔ Järve ↔ Viru ↔ Metsakooli (Pirita)", "#14b8a6", 1.5, "bus_nomme"),
    ("57", "🌲 Bus 57: Kalev ↔ Viljandi mnt ↔ Raudalu Suburb", "#d97706", 0.0, "bus_nomme"),

    # --- 3. SUBURBAN & REGIONAL CONNECTOR BUS LINES (10 Lines) ---
    ("1", "🏡 Bus 1: Vana-Pääsküla (Nõmme) ↔ Viru ↔ Pirita ↔ Viimsi Keskus Suburb", "#3b82f6", -5.0, "bus_suburb"),
    ("4", "🏡 Bus 4: Väike-Õismäe ↔ Tiskre Suburb", "#22c55e", 2.0, "bus_suburb"),
    ("6", "🏡 Bus 6: Merivälja Pansion ↔ Pirita ↔ Metsakooli tee", "#a855f7", 0.0, "bus_suburb"),
    ("8", "🏡 Bus 8: Väike-Õismäe ↔ Balti Jaam ↔ Pirita ↔ Äigrumäe Suburb", "#f43f5e", 4.0, "bus_suburb"),
    ("21", "🏡 Bus 21: Viru Keskus ↔ Kakumäe / Landi Suburb", "#38bdf8", -3.5, "bus_suburb"),
    ("30", "🏡 Bus 30: Seli ↔ Iru ↔ Kärmu / Jõelähtme Suburb", "#fb923c", 0.0, "bus_suburb"),
    ("34", "🏡 Bus 34: Viru Keskus ↔ Pirita ↔ Muuga Aedlinn Suburb", "#a3e635", 3.0, "bus_suburb"),
    ("38", "🏡 Bus 38: Viru Keskus ↔ Pirita ↔ Mähe ↔ Muuga Suburb", "#4ade80", -3.0, "bus_suburb"),
    ("47", "🏡 Bus 47: Lennujaam / Ülemiste ↔ Peetri Kool / Rae Suburb", "#f472b6", 2.0, "bus_suburb"),
    ("49", "🏡 Bus 49: Viimsi Keskus Suburb ↔ Pirita ↔ Lasnamäe ↔ Lennujaam / Ülemiste", "#c084fc", 5.0, "bus_suburb"),

    # --- 4. KEY CITY & TECH HUB ARTERIAL BUS LINES (16 Lines) ---
    ("2", "🔴 Bus 2: Reisisadam / Balti Jaam ↔ Mõigu / Ülemiste", "#E6194B", -6.0, "bus_city"),
    ("3", "🌸 Bus 3: Vana-Lõuna (Bolt HQ) ↔ Kalamaja ↔ Pelguranna", "#F032E6", -4.0, "bus_city"),
    ("11", "🟡 Bus 11: Tehnopol / Kadaka Express ↔ Kaubamaja", "#FFE119", -2.0, "bus_city"),
    ("12", "🟢 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle", "#3CB44B", 0.0, "bus_city"),
    ("13", "🟠 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli", "#F58231", 2.5, "bus_city"),
    ("15", "🟣 Bus 15: Viru / Estonia ↔ Bussijaam ↔ Ülemiste City / Sõjamäe", "#911EB4", 5.0, "bus_city"),
    ("16", "🔵 Bus 16: Väike-Õismäe ↔ Kristiine / WoHo ↔ Tallinn-Väike", "#4363D8", -5.0, "bus_city"),
    ("23", "🏬 Bus 23: Kadaka / Tehnopol ↔ Kristiine ↔ Autobussijaam", "#469990", 1.5, "bus_city"),
    ("24", "🌿 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia", "#A9F522", 3.5, "bus_city"),
    ("28", "🌹 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise / Bolt)", "#FF6B6B", -3.0, "bus_city"),
    ("35", "🩵 Bus 35: Seli ↔ Lasnamäe ↔ Pelguranna", "#42D4F4", 2.0, "bus_city"),
    ("40", "🤎 Bus 40: Priisle ↔ Estonia ↔ Pelguranna", "#9A6324", -1.5, "bus_city"),
    ("42", "🟫 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle", "#AA6C39", 4.0, "bus_city"),
    ("67", "🟧 Bus 67: Seli ↔ Bussijaam ↔ Sütiste (Mustamäe)", "#fabed4", -2.0, "bus_city"),
    ("72", "🔷 Bus 72: Mustamäe ↔ Marja ↔ Kopli", "#000075", -4.0, "bus_city"),
    ("73", "🌊 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta / Noblessner)", "#008080", 6.0, "bus_city"),
]

def clean_and_dedup(coords):
    """Deduplicates consecutive identical or micro-spaced coordinates."""
    if not coords:
        return []
    res = [coords[0]]
    for c in coords[1:]:
        d = math.hypot(c[0] - res[-1][0], c[1] - res[-1][1])
        if d > 0.00015:  # ~15 meters minimum spacing
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

        nx = -dy / l
        ny = dx / l

        off_lat = coords[i][0] + (ny * offset_meters) / m_per_lat
        off_lon = coords[i][1] + (nx * offset_meters) / m_per_lon
        offset_coords.append([round(off_lat, 6), round(off_lon, 6)])

    return offset_coords

results = {}

for num, label, color, offset_val, cat in all_target_lines:
    if num not in parsed_routes:
        print(f"Skipping {num}: Not found in parsed routes")
        continue

    direction = max(parsed_routes[num], key=lambda x: len(x["stops"]))
    stop_ids = direction["stops"]
    raw_stop_coords = [stops_dict[sid][:2] for sid in stop_ids if sid in stops_dict]
    stop_coords = clean_and_dedup(raw_stop_coords)

    print(f"Processing {label} with {len(stop_coords)} deduplicated stops...")

    full_road_path = []
    chunk_size = 12
    for i in range(0, len(stop_coords) - 1, chunk_size - 1):
        chunk = stop_coords[i:i + chunk_size]
        if len(chunk) < 2:
            continue
        coords_str = ";".join([f"{lon:.5f},{lat:.5f}" for lat, lon in chunk])
        url = f"https://router.project-osrm.org/route/v1/driving/{coords_str}?overview=full&geometries=geojson&continue_straight=true"
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

    print(f"  -> Generated {len(parallel_path)} clean road coordinates for {label}")

    results[label] = {
        "num": num,
        "label": label,
        "color": color,
        "name": direction["name"],
        "coords": parallel_path,
        "weight": 4.5,
        "group": cat
    }

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nSaved {len(results)} clean, loop-free transit lines to tallinn_exact_transit_routes.json!")
