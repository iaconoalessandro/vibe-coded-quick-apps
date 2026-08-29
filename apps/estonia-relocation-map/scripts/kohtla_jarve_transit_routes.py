"""
==============================================================================
KOHTLA-JÄRVE & JÕHVI PUBLIC TRANSIT & COMMUTER RAIL DATASET
==============================================================================
Complete turn-by-turn road-following bus routes, suburban connectors,
regional Ida-Virumaa lines (Lines 3, 7, 10, 12, 21, 28, 29, 107 express),
and Elron commuter rail corridors with circular station nodes.
==============================================================================
"""

import json
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

TRANSIT_JSON_PATH = os.path.join(DATA_DIR, "kohtla_jarve_exact_transit_routes.json")

# ============================================================================
# TRANSIT HUBS
# ============================================================================
KOHTLA_JARVE_TRANSIT_HUBS = [
    {
        "name": "Jõhvi Reisiterminal (Central Train & Bus Station)",
        "description": "Primary regional rail hub of Ida-Viru County. Direct Elron commuter & express trains to Tallinn, Narva, and Rakvere + Buses 7, 12, 21, 28, 29, 107.",
        "lat": 59.3580, "lon": 27.4200, "color": "#581c87", "icon": "🚆"
    },
    {
        "name": "Kohtla-Järve Keskbussijaam (Virula Väljak)",
        "description": "Central multi-modal transit node in Järve Kesklinn serving Lines 3, 7, 10, 12, 28, 29, 107.",
        "lat": 59.4080, "lon": 27.2780, "color": "#581c87", "icon": "🚌"
    },
    {
        "name": "Iidla Keskus & Grossi Sõlm (Ahtme)",
        "description": "Major transfer nexus for the eastern high-density residential district serving Lines 21, 28, 29, 107.",
        "lat": 59.3360, "lon": 27.4250, "color": "#581c87", "icon": "🚏"
    },
    {
        "name": "Puru Haigla & Tervisekeskuse Sõlm",
        "description": "Southern medical terminus connecting Ida-Viru Central Hospital campus and specialized clinics.",
        "lat": 59.3270, "lon": 27.4050, "color": "#581c87", "icon": "🩺"
    },
    {
        "name": "Kukruse Mõisa & Kiirtee Sõlm",
        "description": "Midway highway interchange connecting Järve and Jõhvi corridors.",
        "lat": 59.3980, "lon": 27.3600, "color": "#581c87", "icon": "🏰"
    },
    {
        "name": "Tammiku Tehnopargi Sõlm",
        "description": "Southern industrial stop serving Tammiku business park and oak recreation trails.",
        "lat": 59.3460, "lon": 27.3850, "color": "#581c87", "icon": "⚙️"
    }
]

# ============================================================================
# TECH CLUSTERS
# ============================================================================
KOHTLA_JARVE_TECH_CLUSTERS = [
    {
        "id": "cluster_jarve_chem",
        "name": "Järve Chemical & Academic Valley",
        "color": "#ea580c",
        "fillColor": "#f97316",
        "desc": "TalTech Virumaa College, Oil Shale Competence Center, VKG R&D complex, and Eastman Chemical.",
        "polygons": [
            [
                [59.4000, 27.2600], [59.4080, 27.2620], [59.4180, 27.2680],
                [59.4180, 27.2880], [59.4120, 27.2980], [59.4030, 27.2920],
                [59.3980, 27.2780], [59.4000, 27.2600]
            ]
        ]
    },
    {
        "id": "cluster_johvi_tech",
        "name": "Jõhvi Tech & Modern Coding Hub",
        "color": "#0284c7",
        "fillColor": "#38bdf8",
        "desc": "//kood Jõhvi modern coding campus, Tehnopol Startup Incubator, OBJEKT creative lab, and Enefit Power R&D.",
        "polygons": [
            [
                [59.3480, 27.3950], [59.3620, 27.3980], [59.3680, 27.4250],
                [59.3620, 27.4420], [59.3480, 27.4350], [59.3440, 27.4120],
                [59.3480, 27.3950]
            ]
        ]
    },
    {
        "id": "cluster_kaasiku_mech",
        "name": "Kaasiku Precision Mechatronics Park",
        "color": "#9333ea",
        "fillColor": "#a855f7",
        "desc": "Hanza Mechanics precision mechatronics and Radius Machining multi-axis CNC manufacturing.",
        "polygons": [
            [
                [59.3460, 27.3980], [59.3520, 27.4000], [59.3510, 27.4100],
                [59.3450, 27.4080], [59.3460, 27.3980]
            ]
        ]
    },
    {
        "id": "cluster_puru_health",
        "name": "Puru & Ahtme HealthTech & Energy Node",
        "color": "#16a34a",
        "fillColor": "#22c55e",
        "desc": "Ida-Viru Central Hospital digital telemedicine telemetry and Ahtme clean thermal peak power generation.",
        "polygons": [
            [
                [59.3240, 27.3960], [59.3360, 27.4000], [59.3380, 27.4420],
                [59.3260, 27.4400], [59.3240, 27.3960]
            ]
        ]
    }
]

# ============================================================================
# DISTRICT WATERMARK LABELS
# ============================================================================
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

# ============================================================================
# RAIL CORRIDORS
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
            [59.3520, 26.9600],
            [59.3580, 27.0500],
            [59.3620, 27.2000],
            [59.3600, 27.3300],
            [59.3580, 27.4200],
            [59.3900, 27.5400],
            [59.3720, 27.9500],
            [59.3690, 28.2005]
        ],
        "stations": [
            {
                "name": "Kohtla Raudteejaam (Kohtla-Nõmme)",
                "lat": 59.3620,
                "lon": 27.2000,
                "type": "station",
                "desc": "Gateway station for western Kohtla-Järve and the Estonian Mining Museum. Daily Elron express trains to Tallinn and Narva."
            },
            {
                "name": "Jõhvi Reisiterminal (Central Railway Station)",
                "lat": 59.3580,
                "lon": 27.4200,
                "type": "major_hub",
                "desc": "Primary regional rail hub of Ida-Viru County. Direct express connections to Tallinn (Balti Jaam), Narva, and all regional bus lines."
            },
            {
                "name": "Oru Raudteejaam",
                "lat": 59.3900,
                "lon": 27.5400,
                "type": "station",
                "desc": "Commuter rail station serving Oru district and Toila coastal recreation gateway."
            }
        ]
    }
}

# ============================================================================
# BUS ROUTES
# ============================================================================
KOHTLA_JARVE_BUS_ROUTES = {}
if os.path.exists(TRANSIT_JSON_PATH):
    try:
        with open(TRANSIT_JSON_PATH, encoding="utf-8") as f:
            KOHTLA_JARVE_BUS_ROUTES = json.load(f)
    except Exception as e:
        print(f"Error loading {TRANSIT_JSON_PATH}: {e}")

if not KOHTLA_JARVE_BUS_ROUTES:
    from build_kohtla_jarve_transit_network import (
        KOHTLA_JARVE_TRANSIT_CONFIG,
    )
    for key, num, label, color, _offset_m, group, name_override, fallback_wp in KOHTLA_JARVE_TRANSIT_CONFIG:
        KOHTLA_JARVE_BUS_ROUTES[key] = {
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
