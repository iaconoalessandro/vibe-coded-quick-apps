import urllib.request
import json
import math
import time
import os

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

# Complete categorized transit line registry
# Format: (num, label, color, offset_meters, group, custom_coords_or_none)
all_transit_registry = [
    # -------------------------------------------------------------------------
    # 1. TROLLEYBUS NETWORK (4 Lines)
    # -------------------------------------------------------------------------
    ("81", "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja", "#00d2ff", -2.0, "trolley", None),
    ("83", "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja", "#00ff87", 2.0, "trolley", None),
    ("84", "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam", "#ff9900", -3.0, "trolley", None),
    ("85", "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam", "#ff007f", 3.0, "trolley", None),

    # -------------------------------------------------------------------------
    # 2. KEY CITY TRUNK BUSES (High Frequency 10–20 min)
    # -------------------------------------------------------------------------
    ("2", "🔴 Bus 2: Reisisadam / Balti Jaam ↔ Mõigu / Ülemiste", "#E6194B", -6.0, "bus_key", None),
    ("3", "🌸 Bus 3: Vana-Lõuna (Bolt HQ) ↔ Kalamaja ↔ Pelguranna", "#F032E6", -4.0, "bus_key", None),
    ("12", "🟢 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle", "#3CB44B", 0.0, "bus_key", None),
    ("13", "🟠 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli", "#F58231", 2.5, "bus_key", None),
    ("15", "🟣 Bus 15: Viru / Estonia ↔ Bussijaam ↔ Ülemiste City / Sõjamäe", "#911EB4", 5.0, "bus_key", None),
    ("16", "🔵 Bus 16: Väike-Õismäe ↔ Kristiine / WoHo ↔ Tallinn-Väike", "#4363D8", -5.0, "bus_key", None),
    ("23", "🏬 Bus 23: Kadaka / Tehnopol ↔ Kristiine ↔ Autobussijaam", "#469990", 1.5, "bus_key", None),
    ("24", "🌿 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia", "#A9F522", 3.5, "bus_key", None),
    ("35", "🩵 Bus 35: Seli ↔ Lasnamäe ↔ Pelguranna", "#42D4F4", 2.0, "bus_key", None),
    ("40", "🤎 Bus 40: Priisle ↔ Estonia ↔ Pelguranna", "#9A6324", -1.5, "bus_key", None),
    ("42", "🟫 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle", "#AA6C39", 4.0, "bus_key", None),
    ("46", "🔶 Bus 46: Väike-Õismäe ↔ Kristiine ↔ Estonia ↔ Seli", "#f97316", 1.0, "bus_key", None),
    ("67", "🟧 Bus 67: Seli ↔ Bussijaam ↔ Sütiste (Mustamäe)", "#fabed4", -2.0, "bus_key", None),
    ("72", "🔷 Bus 72: Mustamäe ↔ Marja ↔ Kopli", "#000075", -4.0, "bus_key", None),
    ("73", "🌊 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta)", "#008080", 6.0, "bus_key", None),

    # -------------------------------------------------------------------------
    # 3. SUBURBAN BUSES (Nõmme, Kopli, Kakumäe, Pirita, Paljassaare, etc.)
    # -------------------------------------------------------------------------
    ("1", "🌲 Bus 1: Vana-Pääsküla (Nõmme) ↔ Viru ↔ Pirita", "#3b82f6", -5.0, "bus_suburb", None),
    ("4", "🌲 Bus 4: Väike-Õismäe ↔ Tiskre", "#22c55e", 2.0, "bus_suburb", None),
    ("5", "🌲 Bus 5: Männiku ↔ Liiva (Nõmme) ↔ Järve ↔ Viru ↔ Metsakooli", "#14b8a6", 1.5, "bus_suburb", None),
    ("6", "🌲 Bus 6: Merivälja Pansion ↔ Pirita ↔ Metsakooli tee", "#a855f7", 0.0, "bus_suburb", None),
    ("7", "🌲 Bus 7: Seli ↔ Suur-Sõjamäe ↔ Sõjamäe", "#e11d48", -2.0, "bus_suburb", None),
    ("8", "🌲 Bus 8: Väike-Õismäe ↔ Balti Jaam ↔ Pirita ↔ Äigrumäe", "#f43f5e", 4.0, "bus_suburb", None),
    ("9", "🌲 Bus 9: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia ↔ Priisle", "#8b5cf6", -1.0, "bus_suburb", None),
    ("10", "🌲 Bus 10: Väike-Õismäe ↔ Mustamäe ↔ Nõmme ↔ Vana-Pääsküla", "#10b981", 2.0, "bus_suburb", None),
    ("11", "🌲 Bus 11: Kadaka / Tehnopol Express ↔ Kaubamaja", "#FFE119", -2.0, "bus_suburb", None),
    ("18", "🌲 Bus 18: Viru Keskus ↔ Järve ↔ Nõmme ↔ Pääsküla ↔ Laagri", "#ef4444", -3.0, "bus_suburb", None),
    ("19", "🌲 Bus 19: Reisisadam ↔ Viru ↔ Nõmme ↔ Pääsküla ↔ Laagri Alevik", "#f97316", 3.0, "bus_suburb", None),
    ("20", "🌲 Bus 20: Viru Keskus ↔ Mustamäe ↔ Nõmme ↔ Pääsküla (Teelise)", "#06b6d4", 5.0, "bus_suburb", None),
    ("21", "🌲 Bus 21: Viru Keskus ↔ Landi / Kakumäe", "#38bdf8", -3.5, "bus_suburb", None),
    ("22", "🌲 Bus 22: Väike-Õismäe ↔ Kakumäe", "#0284c7", 1.0, "bus_suburb", None),
    ("25", "🌲 Bus 25: Tiskre ↔ Reisisadama D-terminal", "#0ea5e9", -2.0, "bus_suburb", None),
    ("26", "🌲 Bus 26: Väike-Õismäe ↔ Sõle ↔ Paljassaare", "#64748b", -1.5, "bus_suburb", None),
    ("27", "🌲 Bus 27: Harkujärve ↔ Õismäe ↔ Tehnopol ↔ Vana-Pääsküla ↔ Laagri", "#84cc16", -4.0, "bus_suburb", None),
    ("28", "🌲 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise / Bolt)", "#FF6B6B", -3.0, "bus_suburb", None),
    ("31", "🌲 Bus 31: Priisle ↔ Kose ↔ Estonia", "#ec4899", 2.0, "bus_suburb", None),
    ("32", "🌲 Bus 32: Männiku ↔ Liiva (Nõmme) ↔ Marja ↔ Kopli", "#6366f1", -2.5, "bus_suburb", None),
    ("33", "🌲 Bus 33: Kopli ↔ Pelgulinn ↔ Kristiine ↔ Nõmme ↔ Männiku", "#ec4899", 4.0, "bus_suburb", None),
    ("36", "🌲 Bus 36: Väike-Õismäe ↔ Tehnopol ↔ Nõmme ↔ Järve ↔ Viru", "#eab308", -2.0, "bus_suburb", None),
    ("37", "🌲 Bus 37: Mustamäe ↔ Tehnopol ↔ Õismäe ↔ Kakumäe Sadam", "#14b8a6", 3.0, "bus_suburb", None),
    ("39", "🌲 Bus 39: Vana-Lõuna ↔ Veerenni ↔ Autobussijaam ↔ Liikuri", "#a855f7", -1.0, "bus_suburb", None),
    ("41", "🌲 Bus 41: Balti Jaam ↔ Haabersti ↔ Kakumäe", "#06b6d4", -3.0, "bus_suburb", None),
    ("44", "🌲 Bus 44: Viru Keskus ↔ Laagna ↔ P. Pinna", "#d97706", 1.5, "bus_suburb", None),
    ("45", "🌲 Bus 45: Väike-Õismäe ↔ Tehnopol ↔ Nõmme ↔ Valdeku ↔ Ülemiste", "#8b5cf6", 3.5, "bus_suburb", None),
    ("48", "🌲 Bus 48: Pirita Keskus ↔ Iru ↔ Vesse", "#eab308", 0.0, "bus_suburb", None),
    ("50", "🌲 Bus 50: Seli ↔ Pae ↔ Majaka põik", "#059669", -2.0, "bus_suburb", None),
    ("54", "🌲 Bus 54: Väike-Õismäe ↔ Bussijaam ↔ Priisle", "#9333ea", 2.0, "bus_suburb", None),
    ("55", "🌲 Bus 55: Hobujaama ↔ Paneeli ↔ P. Pinna", "#0284c7", 0.0, "bus_suburb", None),
    ("57", "🌲 Bus 57: Kalev ↔ Viljandi mnt ↔ Raudalu", "#d97706", 0.0, "bus_suburb", None),
    ("58", "🌲 Bus 58: Priisle ↔ Paasiku ↔ Majaka põik", "#10b981", 1.0, "bus_suburb", None),
    ("59", "🌲 Bus 59: Balti Jaam ↔ Paljassaare / Pikakari rand", "#3b82f6", 2.5, "bus_suburb", None),
    ("60", "🌲 Bus 60: Seli ↔ Kose ↔ Maneeži", "#ea580c", -1.0, "bus_suburb", None),
    ("61", "🌲 Bus 61: Kotermaa ↔ Kadaka ↔ Järve Haigla", "#64748b", 3.0, "bus_suburb", None),
    ("62", "🌲 Bus 62: Väike-Õismäe ↔ Astangu ↔ Mäeküla", "#84cc16", -1.0, "bus_suburb", None),
    ("63", "🌲 Bus 63: Priisle ↔ Narva mnt ↔ Maneeži", "#06b6d4", 1.5, "bus_suburb", None),
    ("65", "🌲 Bus 65: Priisle ↔ Betooni ↔ Lennujaam", "#f43f5e", -2.0, "bus_suburb", None),
    ("66", "🌲 Bus 66: Priisle ↔ Balti Jaam ↔ Pelguranna", "#3b82f6", 3.0, "bus_suburb", None),

    # -------------------------------------------------------------------------
    # 4. OUTSIDE TALLINN (Within 30km Regional Towns & Commuter Hubs)
    # -------------------------------------------------------------------------
    ("30", "🏡 Bus 30: Seli ↔ Iru ↔ Kärmu / Loo (Jõelähtme)", "#fb923c", 0.0, "bus_outside", None),
    ("34", "🏡 Bus 34: Viru Keskus ↔ Pirita ↔ Muuga Aedlinn (Maardu)", "#a3e635", 3.0, "bus_outside", None),
    ("38", "🏡 Bus 38: Viru Keskus ↔ Pirita ↔ Mähe ↔ Muuga (Maardu)", "#4ade80", -3.0, "bus_outside", None),
    ("47", "🏡 Bus 47: Lennujaam / Ülemiste ↔ Peetri Kool (Rae vald)", "#f472b6", 2.0, "bus_outside", None),
    ("49", "🏡 Bus 49: Lennujaam ↔ Lasnamäe ↔ Pirita ↔ Viimsi Keskus", "#c084fc", 5.0, "bus_outside", None),
    ("108", "🏡 Bus 108: Balti Jaam ↔ Tabasalu ↔ Muraste ↔ Vääna-Jõesuu", "#0284c7", 0.0, "bus_outside", [
        [59.44109, 24.73788], [59.4260, 24.6520], [59.4310, 24.5450], [59.4420, 24.5120], [59.4560, 24.4680], [59.4620, 24.4250], [59.4420, 24.3720]
    ]),
    ("114", "🏡 Bus 114: Balti Jaam ↔ Viru ↔ Viimsi ↔ Haabneeme ↔ Rohuneeme", "#059669", 0.0, "bus_outside", [
        [59.44109, 24.73788], [59.4367, 24.7567], [59.4670, 24.8320], [59.4920, 24.8250], [59.5091, 24.8498], [59.5250, 24.8210], [59.5530, 24.8050], [59.5780, 24.7950]
    ]),
    ("116", "🏡 Bus 116: Balti Jaam ↔ Kalev ↔ Männiku ↔ Saku ↔ Kiisa ↔ Kohila", "#d97706", 0.0, "bus_outside", [
        [59.44109, 24.73788], [59.4120, 24.7450], [59.3900, 24.7200], [59.3381, 24.7000], [59.3011, 24.6760], [59.2830, 24.6550], [59.2550, 24.6300], [59.2250, 24.6900], [59.1680, 24.7550]
    ]),
    ("120", "🏡 Bus 120: Estonia ↔ Tartu mnt ↔ Peetri ↔ Assaku ↔ Jüri", "#e11d48", 0.0, "bus_outside", [
        [59.4340, 24.7530], [59.4230, 24.7850], [59.4000, 24.8150], [59.3830, 24.8210], [59.3750, 24.8520], [59.3550, 24.8950]
    ]),
    ("121", "🏡 Bus 121: Balti Jaam ↔ Estonia ↔ Peetri ↔ Uuesalu ↔ Jüri", "#7c3aed", 0.0, "bus_outside", [
        [59.44109, 24.73788], [59.4340, 24.7530], [59.4000, 24.8150], [59.3620, 24.8150], [59.3550, 24.8950]
    ]),
    ("124", "🏡 Bus 124: Mustamäe Tehnopol ↔ Õismäe ↔ Tabasalu ↔ Vääna-Jõesuu", "#059669", 0.0, "bus_outside", [
        [59.3950, 24.6650], [59.4180, 24.6450], [59.4280, 24.5800], [59.4310, 24.5450], [59.4560, 24.4680], [59.4420, 24.3720]
    ]),
    ("191", "🏡 Bus 191: Balti Jaam ↔ Nõmme ↔ Laagri ↔ Saue ↔ Keila", "#ea580c", 0.0, "bus_outside", [
        [59.44109, 24.73788], [59.4250, 24.7250], [59.3888, 24.6833], [59.3695, 24.6383], [59.3516, 24.6113], [59.3246, 24.5486], [59.3065, 24.4174]
    ])
]

def clean_and_dedup(coords):
    if not coords:
        return []
    res = [coords[0]]
    for c in coords[1:]:
        d = math.hypot(c[0] - res[-1][0], c[1] - res[-1][1])
        if d > 0.00015:
            res.append(c)
    return res

def clean_reversals(points):
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
        if dot < -0.6:
            continue
        cleaned.append(p_curr)
    cleaned.append(points[-1])
    return cleaned

def douglas_peucker(points, tol=0.00006):
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

# Load existing cache
existing_routes = {}
if os.path.exists("tallinn_exact_transit_routes.json"):
    try:
        with open("tallinn_exact_transit_routes.json", "r", encoding="utf-8") as f:
            existing_routes = json.load(f)
    except Exception:
        pass

results = {}

for num, label, color, offset_val, group, custom_coords in all_transit_registry:
    # Check cache
    if label in existing_routes and len(existing_routes[label].get("coords", [])) > 15:
        cached = existing_routes[label]
        cached["color"] = color
        cached["group"] = group
        results[label] = cached
        print(f"Loaded cached {label} ({len(cached['coords'])} pts)")
        continue

    if custom_coords:
        stop_coords = custom_coords
        route_name = label.split(":", 1)[1].strip() if ":" in label else label
    else:
        if num not in parsed_routes:
            print(f"Skipping {num}: Not found")
            continue
        direction = max(parsed_routes[num], key=lambda x: len(x["stops"]))
        stop_ids = direction["stops"]
        raw_stop_coords = [stops_dict[sid][:2] for sid in stop_ids if sid in stops_dict]
        stop_coords = clean_and_dedup(raw_stop_coords)
        route_name = direction["name"]

    print(f"Routing {label} with {len(stop_coords)} waypoints...")
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
            print(f"  Fallback for chunk {i}: {e}")
            if full_road_path:
                full_road_path.extend(chunk[1:])
            else:
                full_road_path.extend(chunk)
        time.sleep(0.3)

    clean_path = clean_reversals(clean_reversals(full_road_path))
    smoothed_path = douglas_peucker(clean_path, tol=0.00006)
    parallel_path = apply_clean_parallel_offset(smoothed_path, offset_val * 1.6)

    results[label] = {
        "num": num,
        "label": label,
        "color": color,
        "name": route_name,
        "coords": parallel_path,
        "weight": 4.5,
        "group": group
    }
    print(f"  -> Finished {label} with {len(parallel_path)} pts")

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"\nSuccessfully saved {len(results)} total transit lines!")
