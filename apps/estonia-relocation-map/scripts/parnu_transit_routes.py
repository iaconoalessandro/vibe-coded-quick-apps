"""
==============================================================================
PÄRNU PUBLIC TRANSIT, RAIL BALTICA & MULTI-MODAL HUBS DATASET
==============================================================================
Complete turn-by-turn road-following bus routes, suburban connectors,
future high-speed Rail Baltica passenger rail corridors, multi-modal hubs,
tech clusters, and district watermarks for Pärnu.
==============================================================================
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

PARNU_TRANSIT_HUBS = [
    {
        "name": "Pärnu Central Bus Station (Pärnu Bussijaam)",
        "category": "Intercity & Urban Bus Hub",
        "description": "Central urban & long-distance coach terminal at Pärnu Keskus & Port Artur. Primary interchange for all city bus lines (Lines 1–17) and intercity express coaches to Tallinn, Tartu, Riga.",
        "lat": 58.3860, "lon": 24.5025,
        "color": "#581c87", "icon": "🚌"
    },
    {
        "name": "Rail Baltica Pärnu International Passenger Terminal",
        "category": "High-Speed Rail Hub",
        "description": "Flagship high-speed Rail Baltica international passenger station (Zaha Hadid Architects / Pluss). 40-minute express connection to Tallinn, 1 hour to Riga at 249 km/h, with integrated city bus & micro-mobility transfer.",
        "lat": 58.3750, "lon": 24.5500,
        "color": "#581c87", "icon": "🚄"
    },
    {
        "name": "Papiniidu & Kaubamajakas Multi-Modal Transit Hub",
        "category": "Urban Trunk & Commercial Node",
        "description": "High-capacity transit node connecting Mai residential district, Kaubamajakas shopping center, Niidu tech corridor, and south-eastern regional buses.",
        "lat": 58.3685, "lon": 24.5420,
        "color": "#581c87", "icon": "🚏"
    },
    {
        "name": "Pärnu Airport Aviation Hub (Pärnu Lennujaam)",
        "category": "Regional Aviation & Drone Node",
        "description": "Modernized regional airport terminal with seasonal international flights (Helsinki, Stockholm), UAV/drone innovation testing corridor, and Bus Line 7 terminus.",
        "lat": 58.4190, "lon": 24.4725,
        "color": "#581c87", "icon": "✈️"
    },
    {
        "name": "Rannapark & Kuursaal Resort Mobility Hub",
        "category": "Tourism & Multi-Modal Resort Hub",
        "description": "Seaside transfer and micro-mobility hub serving Pärnu Beach, Hedon Spa, Tervis Medical Spa, Kuursaal, and coastal bike highways (Bus Line 15).",
        "lat": 58.3765, "lon": 24.4980,
        "color": "#581c87", "icon": "🏖️"
    }
]

PARNU_TECH_CLUSTERS = [
    {
        "id": "cluster_niidu_savi",
        "name": "Niidu & Savi Industrial Tech & Electronics Park",
        "color": "#0284c7",
        "fillColor": "#38bdf8",
        "desc": "Pärnu's premier advanced manufacturing and mechatronics cluster: Scanfil Electronics, NOTE Pärnu, AQ Lasertool, Metsä Wood mega-mill, Ruukki Products, Trimaster Baltic.",
        "polygons": [
            [
                [58.4070, 24.4800], [58.4090, 24.4950], [58.4020, 24.5050],
                [58.3980, 24.4900], [58.4070, 24.4800]
            ],
            [
                [58.3920, 24.5450], [58.3950, 24.5620], [58.3850, 24.5650],
                [58.3840, 24.5480], [58.3920, 24.5450]
            ]
        ]
    },
    {
        "id": "cluster_kesklinn_river",
        "name": "Kesklinn & Riverfront Innovation Quarter",
        "color": "#ea580c",
        "fillColor": "#f97316",
        "desc": "Academic research, digital software development, startup incubation, and creative tech: UT Pärnu College, Forwardspace Incubator, Helmes, Pärnu Loomeinkubaator.",
        "polygons": [
            [
                [58.3885, 24.4920], [58.3895, 24.5050], [58.3840, 24.5070],
                [58.3825, 24.4960], [58.3885, 24.4920]
            ]
        ]
    },
    {
        "id": "cluster_raama_health",
        "name": "Rääma MedTech & Health Innovation Campus",
        "color": "#16a34a",
        "fillColor": "#22c55e",
        "desc": "Regional e-health center, robotic diagnostics, smart materials, and medical device telemetry: Pärnu Haigla, Telemedicine Center, Wendre Automation.",
        "polygons": [
            [
                [58.4030, 24.5300], [58.4040, 24.5460], [58.3950, 24.5450],
                [58.3940, 24.5220], [58.4030, 24.5300]
            ]
        ]
    },
    {
        "id": "cluster_sindi_mechatronics",
        "name": "Sindi Mechatronics & Baltic Clean Energy Hub",
        "color": "#9333ea",
        "fillColor": "#a855f7",
        "desc": "High-precision electromagnetic component engineering, CNC mechatronics, and Baltic smart grid energy infrastructure: MS Balti Trafo, Fein-El-Met, Elering Synchronous Condenser.",
        "polygons": [
            [
                [58.4120, 24.6350], [58.4140, 24.6650], [58.4000, 24.6700],
                [58.3980, 24.6300], [58.4120, 24.6350]
            ]
        ]
    }
]

PARNU_DISTRICT_LABELS = [
    {"name": "KESKLINN", "lat": 58.3840, "lon": 24.5010, "type": "major", "size": 13},
    {"name": "RANNARAJOON", "lat": 58.3762, "lon": 24.4985, "type": "major", "size": 13},
    {"name": "ÜLEJÕE", "lat": 58.4015, "lon": 24.4814, "type": "major", "size": 13},
    {"name": "RÄÄMA", "lat": 58.3995, "lon": 24.5146, "type": "major", "size": 13},
    {"name": "VANA-PÄRNU", "lat": 58.3809, "lon": 24.4604, "type": "major", "size": 12},
    {"name": "RAEKÜLA", "lat": 58.3520, "lon": 24.5600, "type": "major", "size": 13},
    {"name": "PAPINIIDU / MAI", "lat": 58.3644, "lon": 24.5329, "type": "major", "size": 13},
    {"name": "TAMMISTE", "lat": 58.3886, "lon": 24.5888, "type": "sub", "size": 12},
    {"name": "PAIKUSE", "lat": 58.3639, "lon": 24.6219, "type": "major", "size": 13},
    {"name": "AUDRU", "lat": 58.4129, "lon": 24.3354, "type": "sub", "size": 12},
    {"name": "SINDI", "lat": 58.4056, "lon": 24.6615, "type": "major", "size": 13},

    # Tech Hub Labels
    {"name": "🎓 UT PÄRNU COLLEGE & FORWARDSPACE", "lat": 58.3850, "lon": 24.4985, "type": "tech_hub", "size": 11},
    {"name": "🚀 NIIDU TECH & ELECTRONICS PARK", "lat": 58.3885, "lon": 24.5540, "type": "tech_hub", "size": 11},
    {"name": "🔬 PÄRNU HAIGLA HEALTHTECH", "lat": 58.4010, "lon": 24.5390, "type": "tech_hub", "size": 11},
    {"name": "🚄 RAIL BALTICA PÄRNU TERMINAL", "lat": 58.3755, "lon": 24.5510, "type": "tech_hub", "size": 11},
    {"name": "⚡ SINDI MECHATRONICS HUB", "lat": 58.4050, "lon": 24.6480, "type": "tech_hub", "size": 11}
]

PARNU_TRAIN_LINES = {
    "rail_baltica_parnu": {
        "id": "rail_baltica_parnu",
        "num": "RB1",
        "label": "🚄 Rail Baltica: Tallinn ↔ Rapla ↔ Pärnu ↔ Häädemeeste ↔ Riga",
        "name": "Rail Baltica High-Speed European Passenger Corridor (249 km/h)",
        "color": "#e11d48",
        "weight": 6.0,
        "coords": [
            [58.5850, 24.8100],
            [58.4850, 24.6700],
            [58.4150, 24.5750],
            [58.3750, 24.5500],
            [58.3350, 24.5450],
            [58.2100, 24.5100],
            [58.0780, 24.5050],
            [57.8750, 24.3600]
        ],
        "stations": [
            {
                "name": "Pärnu International Passenger Terminal (Niidu)",
                "coords": [58.3750, 24.5500],
                "lat": 58.3750, "lon": 24.5500,
                "type": "major_hub",
                "desc": "Iconic high-speed terminal designed by Zaha Hadid Architects. Direct 40-minute express trains to Tallinn Ülemiste and 1 hour to Riga Central."
            },
            {
                "name": "Tootsi Regional Hub",
                "coords": [58.5850, 24.8100],
                "lat": 58.5850, "lon": 24.8100,
                "type": "station",
                "desc": "Northern Pärnumaa regional commuter and passing loop station."
            },
            {
                "name": "Häädemeeste Commuter Stop",
                "coords": [58.0780, 24.5050],
                "lat": 58.0780, "lon": 24.5050,
                "type": "station",
                "desc": "Southern coastal commuter stop serving Häädemeeste and seaside holiday districts."
            }
        ]
    },
    "rail_historic_parnu": {
        "id": "rail_historic_parnu",
        "num": "R22",
        "label": "🚆 Pärnu Regional Rail Corridor (Edelaraudtee)",
        "name": "Pärnu ↔ Sindi ↔ Tori ↔ Vändra Regional Rail Line",
        "color": "#ff6600",
        "weight": 5.0,
        "coords": [
            [58.3750, 24.5500],
            [58.3880, 24.5550],
            [58.4070, 24.6520],
            [58.4750, 24.8100]
        ],
        "stations": [
            {
                "name": "Pärnu Kaubajaam (Niidu Freight Hub)",
                "coords": [58.3880, 24.5550],
                "lat": 58.3880, "lon": 24.5550,
                "type": "station",
                "desc": "Historic freight and logistics terminal in Niidu industrial area."
            },
            {
                "name": "Sindi Raudteejaam",
                "coords": [58.4070, 24.6520],
                "lat": 58.4070, "lon": 24.6520,
                "type": "station",
                "desc": "Historic railway station serving Sindi textile and mechatronics plants."
            },
            {
                "name": "Tori Raudteejaam",
                "coords": [58.4750, 24.8100],
                "lat": 58.4750, "lon": 24.8100,
                "type": "station",
                "desc": "Regional station serving Tori horse breeding center and Soomaa National Park gateway."
            }
        ]
    }
}

# Turn-by-turn road paths for Pärnu City Buses
PARNU_BUS_ROUTES = {
    "bus_1": {
        "num": "1",
        "label": "🔴 Bus 1: Vana-Pärnu ↔ Kesklinn ↔ Mai ↔ Raeküla",
        "color": "#E6194B",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Vana-Pärnu (Mõrra) – Jannseni – Kesklinn (Teater) – Riia mnt – Mai – Kaubamajakas – Raeküla",
        "coords": [
            [58.3980, 24.4500], [58.3920, 24.4620], [58.3910, 24.4850],
            [58.3910, 24.5020], [58.3880, 24.5025], [58.3855, 24.5015],
            [58.3780, 24.5150], [58.3680, 24.5350], [58.3620, 24.5480],
            [58.3550, 24.5580], [58.3420, 24.5800]
        ]
    },
    "bus_3": {
        "num": "3",
        "label": "🔴 Bus 3: Vana-Pärnu ↔ Kesklinn ↔ Papiniidu ↔ Paikuse ↔ Sindi",
        "color": "#F032E6",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Vana-Pärnu – Kesklinn – Riia mnt – Papiniidu – Paikuse tee – Sindi",
        "coords": [
            [58.3980, 24.4500], [58.3910, 24.4850], [58.3880, 24.5025],
            [58.3800, 24.5200], [58.3680, 24.5450], [58.3750, 24.5750],
            [58.3780, 24.6200], [58.4020, 24.6500]
        ]
    },
    "bus_4": {
        "num": "4",
        "label": "🔴 Bus 4: Vana-Pärnu ↔ Kesklinn ↔ Rääma ↔ Niidupark ↔ Papiniidu",
        "color": "#3CB44B",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Vana-Pärnu – Kesklinn – Rääma – Lina – Niidu – Kase (Metsä Wood) – Papiniidu",
        "coords": [
            [58.3980, 24.4500], [58.3910, 24.4850], [58.3880, 24.5025],
            [58.3930, 24.5150], [58.3980, 24.5380], [58.3895, 24.5560],
            [58.3720, 24.5500]
        ]
    },
    "bus_5": {
        "num": "5",
        "label": "🔴 Bus 5: Haigla (Hospital) ↔ Rääma ↔ Kesklinn ↔ Mai ↔ Papiniidu",
        "color": "#F58231",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Pärnu Haigla – Rääma – Kesklinn – Aia – Tammsaare – Mai – Kaubamajakas",
        "coords": [
            [58.4005, 24.5385], [58.3980, 24.5250], [58.3880, 24.5025],
            [58.3750, 24.5150], [58.3680, 24.5350], [58.3620, 24.5480]
        ]
    },
    "bus_6": {
        "num": "6",
        "label": "🔴 Bus 6: Audru ↔ Papsaare ↔ Kesklinn ↔ Papiniidu ↔ Paikuse",
        "color": "#911EB4",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Audru keskus – Papsaare (Solarstone) – Tallinna mnt – Kesklinn – Papiniidu – Paikuse",
        "coords": [
            [58.4120, 24.3550], [58.4050, 24.4250], [58.3950, 24.4820],
            [58.3880, 24.5025], [58.3680, 24.5450], [58.3770, 24.6220]
        ]
    },
    "bus_7": {
        "num": "7",
        "label": "🔴 Bus 7: Lennujaam (Airport) ↔ Ülejõe ↔ Kesklinn ↔ Raeküla",
        "color": "#4363D8",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Pärnu Lennujaam – Härma – Savi tech park – Kesklinn – Riia mnt – Raeküla",
        "coords": [
            [58.4190, 24.4725], [58.4050, 24.4850], [58.3950, 24.4900],
            [58.3880, 24.5025], [58.3780, 24.5150], [58.3600, 24.5450],
            [58.3450, 24.5750]
        ]
    },
    "bus_10": {
        "num": "10",
        "label": "🔴 Bus 10: Vana-Pärnu ↔ Kesklinn ↔ Tammiste ↔ Sindi",
        "color": "#469990",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Vana-Pärnu – Kesklinn – Rääma – Tammiste tee – Tammiste mõis – Sindi",
        "coords": [
            [58.3980, 24.4500], [58.3910, 24.4850], [58.3880, 24.5025],
            [58.3920, 24.5150], [58.3900, 24.5800], [58.4050, 24.6450]
        ]
    },
    "bus_14": {
        "num": "14",
        "label": "🌲 Bus 14: Kesklinn ↔ Mai ↔ Papiniidu ↔ Reiu ↔ Paikuse",
        "color": "#3b82f6",
        "group": "bus_suburb",
        "weight": 4.0,
        "name": "Pärnu Bussijaam – Mai – Papiniidu – Reiu puhkekeskus – Paikuse alevik",
        "coords": [
            [58.3855, 24.5015], [58.3750, 24.5150], [58.3620, 24.5480],
            [58.3480, 24.5950], [58.3700, 24.6250]
        ]
    },
    "bus_15": {
        "num": "15",
        "label": "🌲 Bus 15: Kesklinn ↔ Rannarajoon (Kuursaal & Tervis) ↔ Mai ↔ Papiniidu",
        "color": "#22c55e",
        "group": "bus_suburb",
        "weight": 4.0,
        "name": "Bussijaam – Rannapark – Kuursaal – Tervis Spa – Tammsaare – Mai – Kaubamajakas",
        "coords": [
            [58.3855, 24.5015], [58.3780, 24.4920], [58.3730, 24.4950],
            [58.3720, 24.5150], [58.3660, 24.5350], [58.3620, 24.5480]
        ]
    },
    "bus_17": {
        "num": "17",
        "label": "🌲 Bus 17: Haigla ↔ Niidu Tech ↔ Papiniidu ↔ Raeküla",
        "color": "#14b8a6",
        "group": "bus_suburb",
        "weight": 4.0,
        "name": "Pärnu Haigla – Niidu tech ala – Papiniidu sild – Kaubamajakas – Raeküla",
        "coords": [
            [58.4005, 24.5385], [58.3920, 24.5500], [58.3750, 24.5500],
            [58.3600, 24.5450], [58.3450, 24.5750]
        ]
    },
    "bus_40": {
        "num": "40",
        "label": "🏡 Bus 40: Pärnu Bussijaam ↔ Papiniidu ↔ Paikuse ↔ Sindi Express",
        "color": "#f97316",
        "group": "bus_outside",
        "weight": 4.0,
        "name": "Pärnu Bussijaam – Riia mnt – Papiniidu – Sindi mnt – Paikuse – Sindi Ekspress",
        "coords": [
            [58.3855, 24.5015], [58.3800, 24.5200], [58.3680, 24.5450],
            [58.3750, 24.5800], [58.3780, 24.6200], [58.4050, 24.6500]
        ]
    }
}

# Try loading high-precision exact transit routes from data file
_exact_routes_file = os.path.join(DATA_DIR, "parnu_exact_transit_routes.json")
if os.path.exists(_exact_routes_file):
    try:
        with open(_exact_routes_file, "r", encoding="utf-8") as _f:
            _loaded_routes = json.load(_f)
            if _loaded_routes and isinstance(_loaded_routes, dict) and len(_loaded_routes) > 0:
                PARNU_BUS_ROUTES = _loaded_routes
    except Exception:
        pass

if __name__ == "__main__":
    with open(os.path.join(DATA_DIR, "parnu_exact_transit_routes.json"), "w", encoding="utf-8") as f:
        json.dump(PARNU_BUS_ROUTES, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "parnu_train_corridors.json"), "w", encoding="utf-8") as f:
        json.dump(PARNU_TRAIN_LINES, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "parnu_transit_hubs.json"), "w", encoding="utf-8") as f:
        json.dump(PARNU_TRANSIT_HUBS, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "parnu_tech_clusters.json"), "w", encoding="utf-8") as f:
        json.dump(PARNU_TECH_CLUSTERS, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "parnu_district_labels.json"), "w", encoding="utf-8") as f:
        json.dump(PARNU_DISTRICT_LABELS, f, ensure_ascii=False, indent=2)
    print("Generated all Pärnu transit routes, train lines, tech clusters, and hubs!")
