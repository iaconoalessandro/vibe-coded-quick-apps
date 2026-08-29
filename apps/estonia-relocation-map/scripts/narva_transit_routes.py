"""
==============================================================================
NARVA PUBLIC TRANSIT & COMMUTER RAIL DATASET
==============================================================================
Complete turn-by-turn road-following bus routes, suburban connectors,
regional Ida-Virumaa lines (within 30km), and Elron commuter rail corridors
with circular station nodes.
==============================================================================
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

TRANSIT_JSON_PATH = os.path.join(DATA_DIR, "narva_exact_transit_routes.json")

# ============================================================================
# TRANSIT HUBS
# ============================================================================
NARVA_TRANSIT_HUBS = [
    {
        "name": "Narva Central Railway Station (Raudteejaam)",
        "description": "Historic Vaksali railway hub. Direct Elron commuter & express trains to Tallinn, Jõhvi, Rakvere, and Tapa + Buses 1, 2, 3, 4, 6, 8, 31, 35, 81.",
        "lat": 59.3690, "lon": 28.2005, "color": "#581c87", "icon": "🚆"
    },
    {
        "name": "Kesklinn / Astri Keskus Central Bus Node",
        "description": "Central commercial & retail transfer node on Paul Keres street / Tallinna mnt serving Lines 1, 2, 4, 8.",
        "lat": 59.3765, "lon": 28.1840, "color": "#581c87", "icon": "🚌"
    },
    {
        "name": "Fama Keskus & Hariduse Node",
        "description": "Major urban nexus connecting central shopping malls, colleges, and high schools.",
        "lat": 59.3820, "lon": 28.1850, "color": "#581c87", "icon": "🚏"
    },
    {
        "name": "Kreenholm Heritage & Tech Node",
        "description": "Southern multi-modal stop serving Kreenholm innovation campus, Joala quarter, and cultural venues.",
        "lat": 59.3600, "lon": 28.1880, "color": "#581c87", "icon": "🏰"
    },
    {
        "name": "Äkkeküla (Pähklimäe) Sports Hub",
        "description": "Green sports & nature terminal connecting northern residential quarters and illuminated health tracks.",
        "lat": 59.3940, "lon": 28.1750, "color": "#581c87", "icon": "🌲"
    },
    {
        "name": "Narva Castle & Joaoru Promenade Node",
        "description": "Scenic riverfront access point for Hermann Castle, Victoria Bastion, and sandy beach recreation.",
        "lat": 59.3740, "lon": 28.2010, "color": "#581c87", "icon": "🏰"
    }
]

# ============================================================================
# TECH CLUSTERS
# ============================================================================
NARVA_TECH_CLUSTERS = [
    {
        "id": "cluster_vanalinn",
        "name": "Vanalinn Innovation & University Quarter",
        "color": "#ea580c",
        "fillColor": "#f97316",
        "desc": "University of Tartu Narva College, Tehnopol Startup Incubator, //kood talent hub, and OBJEKT creative lab.",
        "polygons": [
            [
                [59.3770, 28.1930], [59.3820, 28.1920], [59.3850, 28.1960], 
                [59.3840, 28.2070], [59.3780, 28.2040], [59.3750, 28.2010], [59.3770, 28.1930]
            ]
        ]
    },
    {
        "id": "cluster_kadastiku",
        "name": "Kadastiku Industrial & CleanTech Park",
        "color": "#0284c7",
        "fillColor": "#38bdf8",
        "desc": "Aquaphor R&D mega-plant, NPM rare earth magnetics factory, Stera mechatronics, and IVIA incubator.",
        "polygons": [
            [
                [59.3780, 28.1400], [59.3785, 28.1560], [59.3720, 28.1650], 
                [59.3620, 28.1630], [59.3560, 28.1500], [59.3580, 28.1350], [59.3780, 28.1400]
            ]
        ]
    },
    {
        "id": "cluster_kreenholm",
        "name": "Kreenholm Textile & Creative Campus",
        "color": "#9333ea",
        "fillColor": "#a855f7",
        "desc": "Monumental 19th-century industrial revitalization: creative offices, startup residencies, and cultural spaces.",
        "polygons": [
            [
                [59.3670, 28.1750], [59.3680, 28.2040], [59.3520, 28.2030], 
                [59.3530, 28.1750], [59.3670, 28.1750]
            ]
        ]
    },
    {
        "id": "cluster_balti_energy",
        "name": "Balti Green Energy & Hydrogen Complex",
        "color": "#16a34a",
        "fillColor": "#22c55e",
        "desc": "Enefit Power green hydrogen pilot, carbon capture research, and Elering Baltic synchronous grid terminal.",
        "polygons": [
            [
                [59.3400, 28.1150], [59.3450, 28.1400], [59.3300, 28.1450], 
                [59.3250, 28.1200], [59.3400, 28.1150]
            ]
        ]
    }
]

# ============================================================================
# DISTRICT WATERMARK LABELS
# ============================================================================
NARVA_DISTRICT_LABELS = [
    {"name": "VANALINN", "lat": 59.3800, "lon": 28.1970, "type": "major"},
    {"name": "JOAORG", "lat": 59.3715, "lon": 28.2000, "type": "major"},
    {"name": "KERESE", "lat": 59.3750, "lon": 28.1830, "type": "major"},
    {"name": "KALEVI", "lat": 59.3815, "lon": 28.1860, "type": "major"},
    {"name": "PÄHKLIMÄE", "lat": 59.3900, "lon": 28.1680, "type": "major"},
    {"name": "SOLDINO", "lat": 59.3780, "lon": 28.1560, "type": "major"},
    {"name": "PAEMURRU", "lat": 59.3665, "lon": 28.1645, "type": "major"},
    {"name": "KREENHOLM", "lat": 59.3630, "lon": 28.1880, "type": "major"},
    {"name": "SUTTHOFFI", "lat": 59.3990, "lon": 28.1890, "type": "major"},
    {"name": "SIIVERTSI", "lat": 59.4080, "lon": 28.1580, "type": "sub"},
    {"name": "KUDRUKÜLA", "lat": 59.4380, "lon": 28.0950, "type": "sub"},
    {"name": "OLGINA", "lat": 59.3930, "lon": 28.1275, "type": "sub"},
    {"name": "KADASTIKU", "lat": 59.3675, "lon": 28.1480, "type": "sub"},
    {"name": "KULGU", "lat": 59.3560, "lon": 28.1640, "type": "sub"},
    {"name": "ELEKTRIJAAMA", "lat": 59.3360, "lon": 28.1150, "type": "sub"},
    
    # Tech Hub Labels
    {"name": "🎓 TÜ NARVA KOLLEDŽ", "lat": 59.3794, "lon": 28.1965, "type": "tech_hub"},
    {"name": "🚀 TEHNOPOL NARVA", "lat": 59.3785, "lon": 28.1970, "type": "tech_hub"},
    {"name": "💧 AQUAPHOR MEGA-PLANT", "lat": 59.3705, "lon": 28.1480, "type": "tech_hub"},
    {"name": "⚡ NPM MAGNETICS PLANT", "lat": 59.3565, "lon": 28.1560, "type": "tech_hub"},
    {"name": "🤖 FORTACO ROBOTICS", "lat": 59.3735, "lon": 28.1880, "type": "tech_hub"},
    {"name": "🏰 KREENHOLM CAMPUS", "lat": 59.3610, "lon": 28.1920, "type": "tech_hub"}
]

# ============================================================================
# RAIL CORRIDORS
# ============================================================================
NARVA_TRAIN_LINES = {
    "narva_rail_west": {
        "id": "narva_rail_west",
        "label": "🚆 Elron Rail: Narva ↔ Jõhvi ↔ Rakvere ↔ Tapa ↔ Tallinn",
        "color": "#ff6600",
        "weight": 5.5,
        "coords": [
            [59.3690, 28.2005],
            [59.3665, 28.1850],
            [59.3670, 28.1550],
            [59.3700, 28.1200],
            [59.3750, 28.0500],
            [59.3720, 27.9500],
            [59.3650, 27.8000],
            [59.3580, 27.4200],
            [59.3450, 26.3600],
            [59.2600, 25.9600],
            [59.4410, 24.7370]
        ],
        "stations": [
            {
                "name": "Narva Reisiterminal",
                "lat": 59.3690,
                "lon": 28.2005,
                "type": "major_hub",
                "desc": "Main terminal station in Narva with direct express Elron trains to Jõhvi, Rakvere, Tapa, and Tallinn (Balti Jaam)."
            },
            {
                "name": "Vaivara Raudteejaam",
                "lat": 59.3720,
                "lon": 27.9500,
                "type": "station",
                "desc": "Commuter rail stop for Vaivara, Sinimäe, and regional connections."
            },
            {
                "name": "Auvere Jaam",
                "lat": 59.3650,
                "lon": 27.8000,
                "type": "station",
                "desc": "Industrial rail station connecting Auvere energy complex."
            },
            {
                "name": "Jõhvi Reisiterminal",
                "lat": 59.3580,
                "lon": 27.4200,
                "type": "major_hub",
                "desc": "Regional county capital station connecting Kohtla-Järve and Tallinn."
            }
        ]
    }
}

# ============================================================================
# BUS ROUTES
# ============================================================================
NARVA_BUS_ROUTES = {}
if os.path.exists(TRANSIT_JSON_PATH):
    try:
        with open(TRANSIT_JSON_PATH, "r", encoding="utf-8") as f:
            NARVA_BUS_ROUTES = json.load(f)
    except Exception as e:
        print(f"Error loading {TRANSIT_JSON_PATH}: {e}")

if not NARVA_BUS_ROUTES:
    from build_narva_transit_network import NARVA_TRANSIT_CONFIG, route_via_osrm, clean_and_dedup, clean_reversals, douglas_peucker, apply_clean_parallel_offset
    for key, num, label, color, offset_m, group, name_override, fallback_wp in NARVA_TRANSIT_CONFIG:
        NARVA_BUS_ROUTES[key] = {
            "id": key,
            "num": num,
            "label": label,
            "color": color,
            "name": name_override,
            "coords": fallback_wp,
            "weight": 4.5,
            "group": group,
            "show": False
        }
