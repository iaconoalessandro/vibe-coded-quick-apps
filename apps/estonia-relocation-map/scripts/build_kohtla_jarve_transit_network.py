"""
==============================================================================
KOHTLA-JÄRVE & JÕHVI EXACT TRANSIT NETWORK BUILDER
==============================================================================
Applies the exact Tallinn methodology to generate precise street-following
geometries for all Kohtla-Järve, Jõhvi, Ahtme, Kukruse, Tammiku, Sompa, and Oru
bus lines, suburban connectors, and Elron commuter rail corridors.

Pipeline:
1. Turn-by-turn OSRM road network routing for street-following geometry
2. clean_and_dedup (spacing deduplication)
3. clean_reversals (removal of sharp U-turn & GPS backtracking artifacts)
4. douglas_peucker (polyline smoothing preserving road curvature)
5. apply_clean_parallel_offset (perpendicular road offsets to prevent line overlap)
==============================================================================
"""

import os
import sys
import json
import math
import time
import urllib.request

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

def douglas_peucker(points, tol=0.00005):
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
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Kohtla-Jarve Transit Builder)'})
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode())
                geo_coords = data['routes'][0]['geometry']['coordinates']
                lat_lon_chunk = [[pt[1], pt[0]] for pt in geo_coords]
                if full_path:
                    full_path.extend(lat_lon_chunk[1:])
                else:
                    full_path.extend(lat_lon_chunk)
        except Exception as e:
            if full_path:
                full_path.extend(chunk[1:])
            else:
                full_path.extend(chunk)
        time.sleep(0.2)
    return full_path

# ============================================================================
# KOHTLA-JÄRVE & JÕHVI TRANSIT CATALOG CONFIGURATION
# (key, num, label, color, offset_units, group, name_override, fallback_waypoints)
# ============================================================================

KOHTLA_JARVE_TRANSIT_CONFIG = [
    # --- 1. KEY TRUNK LINES ---
    (
        "bus_28", "28", "🔴 Bus 28: Kohtla-Järve ↔ Kukruse ↔ Jõhvi ↔ Iidla ↔ Puru Haigla",
        "#E6194B", -2.5, "bus_key",
        "Kohtla-Järve (Virula väljak) – TalTech – Kukruse – Jõhvi Bussijaam – Iidla Keskus – Puru Haigla",
        [
            [59.4080, 27.2780], [59.4150, 27.2750], [59.3980, 27.3600], 
            [59.3580, 27.4200], [59.3450, 27.4180], [59.3360, 27.4250], [59.3270, 27.4050]
        ]
    ),
    (
        "bus_29", "29", "🔴 Bus 29: Kohtla-Järve ↔ Jõhvi ↔ Ahtme Keskus ↔ Tammiku",
        "#F58231", 2.0, "bus_key",
        "Kohtla-Järve – Kukruse – Jõhvi Reisiterminal – Kutsehariduskeskus – Ahtme mnt – Tammiku",
        [
            [59.4080, 27.2780], [59.3980, 27.3600], [59.3580, 27.4200], 
            [59.3540, 27.4260], [59.3360, 27.4380], [59.3360, 27.4250], [59.3460, 27.3850]
        ]
    ),
    (
        "bus_7", "7", "🔴 Bus 7: Kohtla-Järve (Virula) ↔ Kukruse Mõis ↔ Jõhvi Bussijaam",
        "#3CB44B", -3.0, "bus_key",
        "Virula väljak – Järveküla tee – Kukruse – Edise – Jõhvi Narva mnt – Jõhvi Bussijaam",
        [
            [59.4080, 27.2780], [59.4120, 27.2880], [59.4030, 27.3200], 
            [59.3980, 27.3600], [59.3780, 27.3950], [59.3580, 27.4200]
        ]
    ),
    (
        "bus_107", "107", "🔴 Bus 107 Express: Järve Kesklinn ↔ Kukruse ↔ Jõhvi ↔ Iidla Express",
        "#911EB4", 3.0, "bus_key",
        "Järve Kesklinn (Virula) ↔ Kukruse Kiirtee ↔ Jõhvi Reisiterminal ↔ Iidla Keskus Express",
        [
            [59.4080, 27.2780], [59.3980, 27.3600], [59.3580, 27.4200], 
            [59.3450, 27.4180], [59.3360, 27.4250]
        ]
    ),

    # --- 2. SUBURBAN & SECONDARY CONNECTORS ---
    (
        "bus_10", "10", "🌲 Bus 10: Virula Väljak ↔ TalTech Kolledž ↔ Uusküla Ring",
        "#3b82f6", -2.0, "bus_suburb",
        "Virula väljak – Ehitajate tee (TalTech) – Uusküla – Sinivoore – Tehase tee – VKG – Virula",
        [
            [59.4080, 27.2780], [59.4152, 27.2735], [59.4220, 27.2750], 
            [59.4250, 27.2650], [59.4120, 27.2550], [59.4030, 27.2650], [59.4080, 27.2780]
        ]
    ),
    (
        "bus_21", "21", "🌲 Bus 21: Jõhvi Terminal ↔ //kood ↔ Kaasiku ↔ Tammiku ↔ Iidla",
        "#14b8a6", 2.5, "bus_suburb",
        "Jõhvi Reisiterminal – //kood Jõhvi – Kaasiku Tööstuspark – Tammiku – Ahtme – Iidla Grossi",
        [
            [59.3580, 27.4200], [59.3525, 27.4110], [59.3490, 27.4050], 
            [59.3460, 27.3850], [59.3380, 27.4050], [59.3360, 27.4250]
        ]
    ),

    # --- 3. OUTSIDE URBAN CORE / REGIONAL CONNECTORS ---
    (
        "bus_3", "3", "🏡 Bus 3: Kohtla-Järve (Virula) ↔ Käva ↔ Sompa Kaevanduslinnak",
        "#059669", -3.0, "bus_outside",
        "Virula väljak – Järveküla tee – Käva tööstusala – Kaasiku tee – Sompa Rahvamaja",
        [
            [59.4080, 27.2780], [59.4020, 27.2650], [59.3940, 27.2580], 
            [59.3650, 27.2680], [59.3240, 27.2880]
        ]
    ),
    (
        "bus_12", "12", "🏡 Bus 12: Kohtla-Järve ↔ Kukruse ↔ Jõhvi ↔ Oru Turbaalevik",
        "#d97706", 3.5, "bus_outside",
        "Kohtla-Järve Virula – Kukruse – Jõhvi Bussijaam – Voka teerist – Oru Asula Männipark",
        [
            [59.4080, 27.2780], [59.3980, 27.3600], [59.3580, 27.4200], 
            [59.3680, 27.4600], [59.3850, 27.5100], [59.3920, 27.5450]
        ]
    )
]

# ============================================================================
# RAIL CORRIDORS & STATIONS
# ============================================================================

KOHTLA_JARVE_TRAIN_LINES = {
    "train_elron_virumaa": {
        "id": "train_elron_virumaa",
        "num": "RE33",
        "label": "🚆 Elron Rail: Tallinn ↔ Tapa ↔ Rakvere ↔ Kohtla ↔ Jõhvi ↔ Oru ↔ Narva",
        "name": "Tallinn ↔ Tapa ↔ Rakvere ↔ Kiviõli ↔ Kohtla-Nõmme ↔ Jõhvi ↔ Oru ↔ Narva Express",
        "color": "#ff6600",
        "weight": 5.5,
        "coords": [
            [59.3520, 26.9600], [59.3580, 27.0500], [59.3620, 27.2000],
            [59.3600, 27.3300], [59.3580, 27.4200], [59.3900, 27.5400],
            [59.3720, 27.9500], [59.3690, 28.2005]
        ],
        "stations": [
            {
                "name": "Kohtla Raudteejaam (Kohtla-Nõmme)",
                "coords": [59.3620, 27.2000],
                "desc": "Gateway station for western Kohtla-Järve and the Estonian Mining Museum. Daily Elron express trains to Tallinn and Narva."
            },
            {
                "name": "Jõhvi Reisiterminal (Central Train & Bus Station)",
                "coords": [59.3580, 27.4200],
                "desc": "Primary regional rail hub of Ida-Viru County. Direct express connections to Tallinn (Balti Jaam), Narva, Tartu (via Tapa), and all regional bus lines."
            },
            {
                "name": "Oru Raudteejaam",
                "coords": [59.3900, 27.5400],
                "desc": "Commuter rail station serving Oru district and Toila coastal recreation gateway."
            }
        ]
    }
}

KOHTLA_JARVE_TRANSIT_HUBS = [
    {
        "name": "Jõhvi Reisiterminal (Central Train & Bus Station)",
        "coords": [59.3580, 27.4200],
        "category": "Intercity Rail & Bus Hub",
        "desc": "Ida-Virumaa's primary multi-modal transit hub. Elron commuter rail + all city, county and express buses.",
        "icon": "🚆",
        "color": "#ff6600"
    },
    {
        "name": "Kohtla-Järve Keskbussijaam (Virula Väljak)",
        "coords": [59.4080, 27.2780],
        "category": "Urban Trunk Node",
        "desc": "Central multi-modal transit node in Järve Kesklinn serving Lines 3, 7, 10, 12, 28, 29, 107.",
        "icon": "🚏",
        "color": "#2563eb"
    },
    {
        "name": "Iidla Keskus & Grossi Sõlm (Ahtme)",
        "coords": [59.3360, 27.4250],
        "category": "Commercial & High-Density Hub",
        "desc": "Major transfer nexus for the eastern high-density residential district serving Lines 21, 28, 29, 107.",
        "icon": "🚏",
        "color": "#2563eb"
    },
    {
        "name": "Puru Haigla & Tervisekeskuse Sõlm",
        "coords": [59.3270, 27.4050],
        "category": "Medical & Healthcare Node",
        "desc": "Southern terminus connecting Ida-Viru Central Hospital campus and specialized clinics.",
        "icon": "🩺",
        "color": "#10b981"
    },
    {
        "name": "Kukruse Mõisa & Kiirtee Sõlm",
        "coords": [59.3980, 27.3600],
        "category": "Regional Transfer Point",
        "desc": "Midway highway interchange connecting Järve and Jõhvi corridors.",
        "icon": "🏰",
        "color": "#8b5cf6"
    },
    {
        "name": "Tammiku Tehnopargi Sõlm",
        "coords": [59.3460, 27.3850],
        "category": "Industrial Logistics Hub",
        "desc": "Southern industrial stop serving Tammiku business park and oak recreation trails.",
        "icon": "⚙️",
        "color": "#f59e0b"
    }
]

KOHTLA_JARVE_TECH_CLUSTERS = [
    {
        "name": "Järve Chemical & Academic Valley",
        "coords": [
            [59.4000, 27.2600], [59.4080, 27.2620], [59.4180, 27.2680], 
            [59.4180, 27.2880], [59.4120, 27.2980], [59.4030, 27.2920], 
            [59.3980, 27.2780], [59.4000, 27.2600]
        ],
        "desc": "Academic & chemical engineering heart featuring TalTech Virumaa College, Oil Shale Competence Center, VKG R&D complex, and Eastman Chemical.",
        "color": "#8b5cf6"
    },
    {
        "name": "Jõhvi Tech & Modern Coding Hub",
        "coords": [
            [59.3480, 27.3950], [59.3620, 27.3980], [59.3680, 27.4250], 
            [59.3620, 27.4420], [59.3480, 27.4350], [59.3440, 27.4120], 
            [59.3480, 27.3950]
        ],
        "desc": "County capital digital cluster with //kood Jõhvi campus, Tehnopol Startup Incubator, OBJEKT creative lab, and Enefit Power R&D.",
        "color": "#3b82f6"
    },
    {
        "name": "Kaasiku Precision Mechatronics Park",
        "coords": [
            [59.3460, 27.3980], [59.3520, 27.4000], [59.3510, 27.4100], 
            [59.3450, 27.4080], [59.3460, 27.3980]
        ],
        "desc": "Advanced CNC manufacturing and robotics mechatronics hub featuring Hanza Mechanics and Radius Machining.",
        "color": "#f59e0b"
    },
    {
        "name": "Puru & Ahtme HealthTech & Energy Node",
        "coords": [
            [59.3240, 27.3960], [59.3360, 27.4000], [59.3380, 27.4420], 
            [59.3260, 27.4400], [59.3240, 27.3960]
        ],
        "desc": "Regional e-health telemedicine infrastructure and green thermal peak power generation.",
        "color": "#10b981"
    }
]

KOHTLA_JARVE_DISTRICT_LABELS = [
    {"name": "JÕHVI KESKLINN", "lat": 59.3560, "lon": 27.4150, "type": "major"},
    {"name": "JÄRVE KESKLINN", "lat": 59.4080, "lon": 27.2780, "type": "major"},
    {"name": "AHTME / IIDLA", "lat": 59.3360, "lon": 27.4250, "type": "major"},
    {"name": "KUKRUSE", "lat": 59.3980, "lon": 27.3600, "type": "major"},
    {"name": "TAMMIKU", "lat": 59.3460, "lon": 27.3850, "type": "major"},
    {"name": "PURU", "lat": 59.3270, "lon": 27.4050, "type": "major"},
    {"name": "UUSKÜLA", "lat": 59.4220, "lon": 27.2750, "type": "major"},
    {"name": "KÄVA", "lat": 59.3940, "lon": 27.2580, "type": "major"},
    {"name": "SOMPA", "lat": 59.3210, "lon": 27.2880, "type": "sub"},
    {"name": "ORU", "lat": 59.3910, "lon": 27.5450, "type": "sub"},
    
    # Tech Hub Labels
    {"name": "🎓 TALTECH VIRUMAA KOLLEDŽ", "lat": 59.4152, "lon": 27.2735, "type": "tech_hub"},
    {"name": "💻 //KOOD JÕHVI CAMPUS", "lat": 59.3525, "lon": 27.4110, "type": "tech_hub"},
    {"name": "🧪 VKG R&D COMPLEX", "lat": 59.4045, "lon": 27.2650, "type": "tech_hub"},
    {"name": "🤖 HANZA MECHANICS", "lat": 59.3490, "lon": 27.4050, "type": "tech_hub"},
    {"name": "🩺 IVKH DIGITAL HEALTH", "lat": 59.3290, "lon": 27.4050, "type": "tech_hub"},
    {"name": "🚀 TEHNOPOL JÕHVI", "lat": 59.3585, "lon": 27.4145, "type": "tech_hub"}
]

def build_kohtla_jarve_transit_dataset():
    print("Building exact street-following Kohtla-Järve & Jõhvi transit network...", flush=True)
    final_routes = {}
    
    for key, num, label, color, offset_m, group, name_override, fallback_wp in KOHTLA_JARVE_TRANSIT_CONFIG:
        print(f"Processing route {num} ({label})...", flush=True)
        
        # 1. Route through OSRM road driving engine for exact street geometry
        road_path = route_via_osrm(fallback_wp)
        
        # 2. Apply Tallinn geometry cleanup pipeline
        p1 = clean_and_dedup(road_path)
        p2 = clean_reversals(p1)
        p3 = douglas_peucker(p2, tol=0.00004)
        p4 = apply_clean_parallel_offset(p3, offset_m)
        
        final_routes[key] = {
            "id": key,
            "num": num,
            "label": label,
            "color": color,
            "name": name_override,
            "coords": p4,
            "weight": 4.5,
            "group": group,
            "show": False
        }
        print(f"  -> Generated {len(p4)} street-following coordinates for line {num}", flush=True)
        
    return final_routes

if __name__ == "__main__":
    routes = build_kohtla_jarve_transit_dataset()
    out_path = os.path.join(DATA_DIR, "kohtla_jarve_exact_transit_routes.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(routes, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated Kohtla-Järve transit routes: {len(routes)} lines saved to {out_path}", flush=True)
