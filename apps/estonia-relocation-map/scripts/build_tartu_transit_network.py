"""
==============================================================================
TARTU EXACT TRANSIT NETWORK BUILDER
==============================================================================
Applies the exact Tallinn methodology to generate precise street-following
geometries for all Tartu bus routes, suburban lines, regional Tartumaa lines,
and commuter rail corridors.

Pipeline:
1. Official GTFS shapes & stop sequences (from https://eu-gtfs.remix.com/tartu.zip
   and https://eu-gtfs.remix.com/estonia_unified_gtfs.zip)
2. OSRM road network routing for regional routes with turn-by-turn precision
3. clean_and_dedup (spacing deduplication)
4. clean_reversals (removal of sharp U-turn & GPS backtracking artifacts)
5. douglas_peucker (polyline smoothing preserving road curvature)
6. apply_clean_parallel_offset (perpendicular road offsets to prevent line overlap)
==============================================================================
"""

import os
import sys
import json
import math
import time
import urllib.request
import zipfile
import io
import csv
from collections import defaultdict

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR) if os.path.basename(SCRIPT_DIR) == "scripts" else SCRIPT_DIR
DATA_DIR = os.path.join(ROOT_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)

# ============================================================================
# TALLINN PIPELINE ALGORITHMS (IDENTICAL IMPLEMENTATION)
# ============================================================================

def clean_and_dedup(coords):
    """Deduplicates consecutive identical or micro-spaced coordinates (<15m)."""
    if not coords:
        return []
    res = [coords[0]]
    for c in coords[1:]:
        d = math.hypot(c[0] - res[-1][0], c[1] - res[-1][1])
        if d > 0.00015:  # ~15 meters minimum spacing
            res.append(c)
    return res

def clean_reversals(points):
    """Removes sharp U-turns and backtracking spikes from coordinate sequences."""
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

def route_via_osrm(waypoints):
    """Routes sequential waypoints via OSRM driving API in chunks."""
    if len(waypoints) < 2:
        return waypoints
    full_path = []
    chunk_size = 12
    for i in range(0, len(waypoints) - 1, chunk_size - 1):
        chunk = waypoints[i:i + chunk_size]
        if len(chunk) < 2:
            continue
        coords_str = ";".join([f"{lon:.5f},{lat:.5f}" for lat, lon in chunk])
        url = f"https://router.project-osrm.org/route/v1/driving/{coords_str}?overview=full&geometries=geojson&continue_straight=true"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Tartu Transit Builder)'})
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode())
                geo_coords = data['routes'][0]['geometry']['coordinates']
                lat_lon_chunk = [[pt[1], pt[0]] for pt in geo_coords]
                if full_path:
                    full_path.extend(lat_lon_chunk[1:])
                else:
                    full_path.extend(lat_lon_chunk)
        except Exception as e:
            print(f"    OSRM chunk fallback {i}: {e}")
            if full_path:
                full_path.extend(chunk[1:])
            else:
                full_path.extend(chunk)
        time.sleep(0.2)
    return full_path

# ============================================================================
# TARTU TRANSIT CATALOG CONFIGURATION
# (key, num, label, color, offset_units, group, name_override, fallback_waypoints)
# ============================================================================

TARTU_TRANSIT_CONFIG = [
    # --- 1. KEY CITY TRUNK BUSES (High Frequency 10–15 min) ---
    (
        "bus_1", "1", "🔴 Bus 1: Lõunakeskus ↔ Kesklinn ↔ Raadi (ERM) ↔ Nõlvaku",
        "#E6194B", -2.5, "bus_key",
        "Lõunakeskus – Riia – Kesklinn – Narva mnt – ERM – Nõlvaku", None
    ),
    (
        "bus_2", "2", "🔴 Bus 2: Lõunakeskus ↔ Kesklinn ↔ Annelinn (Nõlvaku)",
        "#F032E6", 2.0, "bus_key",
        "Lõunakeskus – Riia – Kesklinn – Soola – Kalda tee – Nõlvaku", None
    ),
    (
        "bus_3", "3", "🔴 Bus 3: Nõlvaku ↔ Annelinn ↔ Kesklinn ↔ Vaksali ↔ Maarjamõisa (Zoomeedikum)",
        "#3CB44B", -3.0, "bus_key",
        "Nõlvaku – Kaunase pst – Kesklinn – Vaksali – Puusepa – Maarjamõisa (Zoomeedikum)", None
    ),
    (
        "bus_4", "4", "🔴 Bus 4: Ringtee ↔ Karlova ↔ Kesklinn ↔ Põllu / Kummeli",
        "#F58231", 1.5, "bus_key",
        "Ringtee – Tähe (Karlova) – Kesklinn – Vabaduse pst – Põllu / Kummeli", None
    ),
    (
        "bus_6", "6", "🔴 Bus 6: Lõunakeskus ↔ Maarjamõisa ↔ Vaksali ↔ Kesklinn ↔ Kvissentali (Roheline park)",
        "#911EB4", -4.0, "bus_key",
        "Lõunakeskus – Ravila – Vaksali – Kesklinn – Ujula – Kvissentali / Roheline park", None
    ),
    (
        "bus_7", "7", "🔴 Bus 7: Ringtee (Tõrvandi) ↔ Kesklinn ↔ Raatuse ↔ Kõrveküla",
        "#4363D8", 3.0, "bus_key",
        "Tõrvandi – Ringtee – Turu – Kesklinn – Raatuse – Kõrveküla", None
    ),
    (
        "bus_8", "8", "🔴 Bus 8: Lõunakeskus (Roopa) ↔ Tammelinn ↔ Kesklinn ↔ Supilinn / Kvissentali",
        "#469990", -1.5, "bus_key",
        "Roopa / Lõunakeskus – Suur kaar – Kesklinn – Kroonuaia – Supilinn – Kvissentali", None
    ),

    # --- 2. SUBURBAN & SECONDARY CONNECTORS ---
    (
        "bus_5", "5", "🌲 Bus 5: Ihaste ↔ Annelinn ↔ Kesklinn (Turu) ↔ Annelinn ↔ Ihaste",
        "#3b82f6", 2.0, "bus_suburb",
        "Turu – Annelinn – Ihaste – Annelinn – Turu Loop", None
    ),
    (
        "bus_9", "9", "🌲 Bus 9: Annelinn ↔ Karlova ↔ Maarjamõisa ↔ Veeriku ↔ Raadi",
        "#22c55e", -2.0, "bus_suburb",
        "Karlova – Annelinn – Maarjamõisa – Veeriku – Raadi Vahi tööstuspark", None
    ),
    (
        "bus_10", "10", "🌲 Bus 10: Kvissentali ↔ Annelinn ↔ Ringtee ↔ Raudteejaam ↔ Maarjamõisa",
        "#14b8a6", 2.5, "bus_suburb",
        "Kvissentali – Annelinn – Ringtee – Ropka – Raudteejaam – Maarjamõisa", None
    ),
    (
        "bus_11", "11", "🌲 Bus 11: Märja ↔ Lõunakeskus ↔ Kesklinn ↔ Vaksali ↔ Kasteheina (Ihaste)",
        "#a855f7", -2.5, "bus_suburb",
        "Märja – Lõunakeskus – Kesklinn – Vaksali – Ihaste (Kasteheina)", None
    ),
    (
        "bus_12", "12", "🌲 Bus 12: Lõunakeskus ↔ Tammelinn ↔ Variku ↔ Ropka ↔ Kasteheina",
        "#e11d48", 1.0, "bus_suburb",
        "Lõunakeskus – Tammelinn – Variku – Ropka – Annelinn – Kasteheina", None
    ),
    (
        "bus_13", "13", "🌲 Bus 13: Kasteheina ↔ Anne kanal ↔ Kesklinn ↔ Tähtvere ↔ Puidu",
        "#f43f5e", -1.0, "bus_suburb",
        "Kasteheina – Anne kanal – Kesklinn – Tähtvere – Puidu tööstusala", None
    ),
    (
        "bus_21", "21", "🌲 Bus 21: Night Circle East (Kesklinn / Soola ↔ Annelinn ↔ Ihaste ↔ Nõlvaku)",
        "#8b5cf6", 3.0, "bus_suburb",
        "Soola (Kesklinn) – Annelinn – Ihaste – Nõlvaku – Soola Ööliin", None
    ),
    (
        "bus_22", "22", "🌲 Bus 22: Night Circle West (Kesklinn ↔ Vaksali ↔ Tammelinn ↔ Lõunakeskus ↔ Turu)",
        "#10b981", -3.0, "bus_suburb",
        "Kesklinn – Vaksali – Maarjamõisa – Lõunakeskus – Turu Ööliin", None
    ),
    (
        "bus_25", "25", "🌲 Bus 25: Raudteejaam ↔ Kesklinn ↔ Bussijaam Express",
        "#FFE119", 0.0, "bus_suburb",
        "Tartu Raudteejaam – Vaksali – Riia mnt – Kesklinn – Bussijaam Express",
        [
            [58.3741, 26.7078], [58.3745, 26.7115], [58.3735, 26.7165],
            [58.3768, 26.7240], [58.3780, 26.7310]
        ]
    ),
    (
        "bus_31", "31", "🌲 Bus 31: Soola (Kesklinn) ↔ Tähtvere ↔ Vorbuse ↔ Külasüda",
        "#0284c7", 0.0, "bus_suburb",
        "Soola – Vabaduse pst – Tähtvere – Tiksoja – Vorbuse – Külasüda", None
    ),
    (
        "bus_69", "69", "🌲 Bus 69: Lõunakeskuse Ekspress (Kesklinn ↔ Lõunakeskus Direct)",
        "#bd4819", 2.0, "bus_suburb",
        "Kesklinn (Kaubamaja / Turu) – Riia mnt – Ringtee – Lõunakeskus Ekspress", None
    ),

    # --- 3. REGIONAL TARTUMAA LINES (Within 30km) ---
    (
        "bus_35", "35", "🏡 Bus 35: Tartu ↔ Lohkva ↔ Luunja ↔ Kavastu",
        "#f97316", 0.0, "bus_outside",
        "Tartu Bussijaam – Räpina mnt – Lohkva – Luunja alevik – Kavastu",
        [
            [58.3780, 26.7310], [58.3765, 26.7550], [58.3695, 26.7880],
            [58.3610, 26.8320], [58.3540, 26.8850], [58.3750, 27.0500]
        ]
    ),
    (
        "bus_40", "40", "🏡 Bus 40: Tartu ↔ Tõrvandi ↔ Ülenurme (Tartu Airport)",
        "#06b6d4", 1.5, "bus_outside",
        "Tartu Bussijaam – Turu tn – Rehepapi – Tõrvandi – Ülenurme – Tartu Lennujaam",
        [
            [58.3780, 26.7310], [58.3650, 26.7350], [58.3490, 26.7330],
            [58.3280, 26.7200], [58.3180, 26.7280], [58.3075, 26.6885]
        ]
    ),
    (
        "bus_50", "50", "🏡 Bus 50: Tartu ↔ Märja ↔ Haage ↔ Ilmatsalu",
        "#84cc16", 0.0, "bus_outside",
        "Tartu Bussijaam – Riia mnt – Märja – Haage järv – Ilmatsalu alevik",
        [
            [58.3780, 26.7310], [58.3712, 26.7135], [58.3645, 26.6780],
            [58.3600, 26.6450], [58.3650, 26.6200], [58.3850, 26.5450]
        ]
    ),
    (
        "bus_71", "71", "🏡 Bus 71: Tartu ↔ Vorbuse ↔ Kärevere ↔ Laeva",
        "#0ea5e9", 0.0, "bus_outside",
        "Tartu Bussijaam – Narva mnt / Kreutzwaldi – Vorbuse – Kärevere – Laeva",
        [
            [58.3780, 26.7310], [58.3880, 26.7000], [58.4120, 26.6200],
            [58.4280, 26.5450], [58.4600, 26.4300], [58.4900, 26.3700]
        ]
    ),
    (
        "bus_80", "80", "🏡 Bus 80: Tartu ↔ Reola ↔ Vana-Kuuste ↔ Kambja",
        "#64748b", 0.0, "bus_outside",
        "Tartu Bussijaam – Võru mnt – Reola – Vana-Kuuste – Kambja alevik",
        [
            [58.3780, 26.7310], [58.3580, 26.7320], [58.3150, 26.7450],
            [58.2560, 26.7820], [58.2350, 26.7400]
        ]
    ),
    (
        "bus_85", "85", "🏡 Bus 85: Tartu ↔ Lõunakeskus ↔ Nõo ↔ Tõravere ↔ Elva Express",
        "#d97706", 0.0, "bus_outside",
        "Tartu Bussijaam – Riia mnt – Lõunakeskus – Nõo – Tõravere Observatoorium – Elva",
        [
            [58.3780, 26.7310], [58.3712, 26.7135], [58.3570, 26.6800],
            [58.3200, 26.6200], [58.2780, 26.5350], [58.2650, 26.4680],
            [58.2250, 26.4150]
        ]
    )
]

def load_gtfs_tartu_shapes():
    """Downloads official Tartu GTFS and extracts route shapes and stop coordinates."""
    url = 'https://eu-gtfs.remix.com/tartu.zip'
    print(f"Downloading official Tartu GTFS from {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Tartu Transit Builder)'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        content = resp.read()
    
    with zipfile.ZipFile(io.BytesIO(content)) as z:
        routes_reader = csv.DictReader(io.StringIO(z.read('routes.txt').decode('utf-8')))
        routes = {r['route_id']: r for r in routes_reader}
        
        trips = list(csv.DictReader(io.StringIO(z.read('trips.txt').decode('utf-8'))))
        
        shapes_reader = csv.DictReader(io.StringIO(z.read('shapes.txt').decode('utf-8')))
        shape_pts = defaultdict(list)
        for s in shapes_reader:
            shape_pts[s['shape_id']].append((int(s['shape_pt_sequence']), float(s['shape_pt_lat']), float(s['shape_pt_lon'])))
        for sid in shape_pts:
            shape_pts[sid].sort()
            
        route_trips = defaultdict(list)
        for t in trips:
            route_trips[t['route_id']].append(t)
            
    # Group shapes by short line number
    line_shapes = {}
    for r_id, r in routes.items():
        short_num = r['route_short_name'].strip()
        r_trips = route_trips[r_id]
        # Choose longest shape for the route
        best_shape = []
        for t in r_trips:
            sid = t.get('shape_id')
            pts = [[lat, lon] for seq, lat, lon in shape_pts.get(sid, [])]
            if len(pts) > len(best_shape):
                best_shape = pts
        if best_shape:
            line_shapes[short_num] = {
                "route_name": r['route_long_name'],
                "coords": best_shape
            }
            
    print(f"Successfully extracted GTFS shapes for {len(line_shapes)} Tartu city bus lines!")
    return line_shapes

def generate_exact_tartu_routes():
    """Generates the full exact transit dictionary for Tartu."""
    gtfs_shapes = load_gtfs_tartu_shapes()
    
    results = {}
    
    for key, num, label, color, offset_val, group, name_override, fallback_waypoints in TARTU_TRANSIT_CONFIG:
        print(f"\nProcessing {label}...")
        
        raw_coords = []
        route_name = name_override or label
        
        if num in gtfs_shapes and not fallback_waypoints:
            gtfs_info = gtfs_shapes[num]
            raw_coords = gtfs_info["coords"]
            if not name_override:
                route_name = gtfs_info["route_name"]
            print(f"  -> Using official GTFS shape ({len(raw_coords)} points)")
        elif fallback_waypoints:
            print(f"  -> Routing {len(fallback_waypoints)} waypoints through OSRM road engine...")
            raw_coords = route_via_osrm(fallback_waypoints)
            print(f"  -> OSRM produced {len(raw_coords)} turn-by-turn road points")
        else:
            print(f"  -> WARNING: No GTFS or waypoints for {num}")
            continue
            
        # 1. Clean and deduplicate micro-spacing
        dedup_path = clean_and_dedup(raw_coords)
        
        # 2. Clean U-turns and backtracking spikes
        clean_path = clean_reversals(clean_reversals(dedup_path))
        
        # 3. Smooth polyline preserving road curvature
        smoothed_path = douglas_peucker(clean_path, tol=0.00006)
        
        # 4. Apply clean parallel lane offset in meters (1.6m per offset unit)
        offset_meters = offset_val * 1.6
        parallel_path = apply_clean_parallel_offset(smoothed_path, offset_meters)
        
        print(f"  -> Final clean street polyline: {len(parallel_path)} coordinates")
        
        results[key] = {
            "num": num,
            "label": label,
            "color": color,
            "name": route_name,
            "coords": parallel_path,
            "weight": 4.5,
            "group": group
        }
        
    return results

def main():
    exact_routes = generate_exact_tartu_routes()
    
    # Save to data/tartu_exact_transit_routes.json
    out_json = os.path.join(DATA_DIR, "tartu_exact_transit_routes.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(exact_routes, f, ensure_ascii=False, indent=2)
    print(f"\n[OK] Saved {len(exact_routes)} exact Tartu transit routes to {out_json}")

if __name__ == "__main__":
    main()
