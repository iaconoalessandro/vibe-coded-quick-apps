"""
==============================================================================
TARTU PUBLIC TRANSIT & COMMUTER RAIL DATASET
==============================================================================
Complete turn-by-turn road-following bus routes, suburban connectors,
regional Tartumaa lines (within 30km), and Elron commuter rail corridors
with circular station nodes.
"""

import json
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

TARTU_TRANSIT_HUBS = [
    {
        "name": "Tartu Central Railway Station (Raudteejaam)",
        "description": "Historic Vaksali railway hub. Direct Elron commuter trains to Tallinn, Valga, and Koidula/Põlva + Buses 3, 6, 11, 25.",
        "lat": 58.3741, "lon": 26.7078, "color": "#581c87", "icon": "🚆"
    },
    {
        "name": "Tartu Central Bus Station (Bussijaam)",
        "description": "Central long-distance and regional transit terminal at Tasku & Kvartal. Key nexus for all city buses (Lines 1–8).",
        "lat": 58.3780, "lon": 26.7310, "color": "#581c87", "icon": "🚌"
    },
    {
        "name": "Delta Centre & Riverfront Node",
        "description": "Multi-modal river transfer node serving UT Delta Computer Science campus, Atlantis promenade & northern lines.",
        "lat": 58.3845, "lon": 26.7265, "color": "#581c87", "icon": "🎓"
    },
    {
        "name": "Lõunakeskus Regional Transit Terminal",
        "description": "South-western transit terminal connecting Tartu Science Park, Ringtee tech corridor, and western regional coaches.",
        "lat": 58.3570, "lon": 26.6800, "color": "#581c87", "icon": "🏬"
    },
    {
        "name": "Maarjamõisa MedTech & Science Node",
        "description": "Puusepa / Ravila medical and tech transfer point serving TÜ Hospital, Biomedicum, Chemicum & Physicum.",
        "lat": 58.3695, "lon": 26.6970, "color": "#581c87", "icon": "🔬"
    }
]

TARTU_TECH_CLUSTERS = [
    {
        "id": "cluster_delta",
        "name": "UT Delta Centre & River Tech Quarter",
        "color": "#ea580c",
        "fillColor": "#f97316",
        "desc": "€30M+ IT & AI Hub: UT Computer Science, Cybernetica, Sandbox Incubator, Swedbank IT & river tech strip.",
        "polygons": [
            [
                [58.3860, 26.7230], [58.3865, 26.7275], [58.3835, 26.7310],
                [58.3820, 26.7260], [58.3835, 26.7225], [58.3860, 26.7230]
            ]
        ]
    },
    {
        "id": "cluster_teaduspark",
        "name": "Tartu Science Park (Tartu Teaduspark)",
        "color": "#0284c7",
        "fillColor": "#38bdf8",
        "desc": "Estonia's oldest science park: ESA BIC space incubator, Click & Grow, Skeleton R&D, hardware labs & 50+ deep tech firms.",
        "polygons": [
            [
                [58.3610, 26.6810], [58.3615, 26.6900], [58.3560, 26.6910],
                [58.3550, 26.6820], [58.3610, 26.6810]
            ]
        ]
    },
    {
        "id": "cluster_aparaaditehas",
        "name": "Aparaaditehas Creative & Hardware Campus",
        "color": "#9333ea",
        "fillColor": "#a855f7",
        "desc": "Transformed widget factory hosting Fractory HQ, Voog, Reach-U, Bercman Tech, maker studios & artisanal dining.",
        "polygons": [
            [
                [58.3725, 26.7115], [58.3728, 26.7160], [58.3695, 26.7170],
                [58.3692, 26.7125], [58.3725, 26.7115]
            ]
        ]
    },
    {
        "id": "cluster_biomedicum",
        "name": "Maarjamõisa Biomed & Life Sciences Campus",
        "color": "#16a34a",
        "fillColor": "#22c55e",
        "desc": "Biomedicum, Chemicum, Physicum, Icosagen, Quretec & Tartu University Hospital medical genomics center.",
        "polygons": [
            [
                [58.3720, 26.6910], [58.3725, 26.7020], [58.3650, 26.7030],
                [58.3645, 26.6920], [58.3720, 26.6910]
            ]
        ]
    },
    {
        "id": "cluster_raadi",
        "name": "Raadi Innovation & Cultural Hub",
        "color": "#0d9488",
        "fillColor": "#14b8a6",
        "desc": "Estonian National Museum (ERM), Salvest R&D, green energy testing grounds & modern northern tech residential quarter.",
        "polygons": [
            [
                [58.4030, 26.7380], [58.4040, 26.7550], [58.3940, 26.7580],
                [58.3930, 26.7410], [58.4030, 26.7380]
            ]
        ]
    }
]

TARTU_DISTRICT_LABELS = [
    {"name": "KESKLINN", "lat": 58.3780, "lon": 26.7240, "type": "major"},
    {"name": "SUPILINN", "lat": 58.3865, "lon": 26.7125, "type": "major"},
    {"name": "KARLOVA", "lat": 58.3670, "lon": 26.7310, "type": "major"},
    {"name": "TAMMELINN", "lat": 58.3625, "lon": 26.6980, "type": "major"},
    {"name": "TÄHTVERE", "lat": 58.3850, "lon": 26.7030, "type": "major"},
    {"name": "VAKSALI", "lat": 58.3730, "lon": 26.7080, "type": "major"},
    {"name": "ÜLEJÕE", "lat": 58.3870, "lon": 26.7320, "type": "major"},
    {"name": "ANNELINN", "lat": 58.3740, "lon": 26.7650, "type": "major"},
    {"name": "MAARJAMÕISA", "lat": 58.3680, "lon": 26.6960, "type": "major"},
    {"name": "VEERIKU", "lat": 58.3760, "lon": 26.6900, "type": "major"},
    {"name": "ROPKA", "lat": 58.3580, "lon": 26.7320, "type": "major"},
    {"name": "VARIKU", "lat": 58.3540, "lon": 26.7130, "type": "sub"},
    {"name": "RÄNILINN", "lat": 58.3560, "lon": 26.6780, "type": "sub"},
    {"name": "IHASTE", "lat": 58.3580, "lon": 26.7820, "type": "sub"},
    {"name": "KVISSENTALI", "lat": 58.4010, "lon": 26.7150, "type": "sub"},
    {"name": "RAADI-KRUUSAMÄE", "lat": 58.3980, "lon": 26.7450, "type": "major"},
    {"name": "JAAMAMÕISA", "lat": 58.3840, "lon": 26.7620, "type": "sub"},

    # Tech Hub Labels
    {"name": "🏢 DELTA CENTRE", "lat": 58.3852, "lon": 26.7265, "type": "tech_hub"},
    {"name": "🚀 TARTU SCIENCE PARK", "lat": 58.3590, "lon": 26.6850, "type": "tech_hub"},
    {"name": "⚙️ APARAADITEHAS", "lat": 58.3715, "lon": 26.7135, "type": "tech_hub"},
    {"name": "🔬 BIOMEDICUM", "lat": 58.3705, "lon": 26.6975, "type": "tech_hub"},
    {"name": "🏛️ ERM & RAADI", "lat": 58.3965, "lon": 26.7445, "type": "tech_hub"}
]

TARTU_TRAIN_LINES = {
    "tartu_rail_north": {
        "id": "tartu_rail_north",
        "label": "🚆 Elron North: Tartu ↔ Kärkna ↔ Tabivere ↔ Jõgeva (Tallinn)",
        "color": "#ff6d00",
        "weight": 5.5,
        "coords": [
            [58.3741, 26.7078],
            [58.3950, 26.6900],
            [58.4250, 26.6700],
            [58.4650, 26.6500],
            [58.5520, 26.5980],
            [58.6550, 26.5150],
            [58.7450, 26.3950]
        ],
        "stations": [
            {"name": "Tartu Raudteejaam", "lat": 58.3741, "lon": 26.7078, "type": "major_hub", "desc": "Central Railway Station (Intercity Express to Tallinn, Valga, Koidula)"},
            {"name": "Kärkna", "lat": 58.4650, "lon": 26.6500, "type": "station", "desc": "Kärkna Commuter Station (Tartu vald)"},
            {"name": "Tabivere", "lat": 58.5520, "lon": 26.5980, "type": "station", "desc": "Tabivere Saadjärv Commuter Station"},
            {"name": "Kaarepere", "lat": 58.6550, "lon": 26.5150, "type": "station", "desc": "Kaarepere Vooremaa Stop"},
            {"name": "Jõgeva", "lat": 58.7450, "lon": 26.3950, "type": "major_hub", "desc": "Jõgeva Regional Hub & Tallinn Express Connection"}
        ]
    },
    "tartu_rail_south": {
        "id": "tartu_rail_south",
        "label": "🚆 Elron South: Tartu ↔ Aardla ↔ Ropka ↔ Nõo ↔ Tõravere ↔ Elva ↔ Valga",
        "color": "#ff9100",
        "weight": 5.5,
        "coords": [
            [58.3741, 26.7078],
            [58.3540, 26.7110],
            [58.3420, 26.7120],
            [58.3200, 26.6750],
            [58.2780, 26.5350],
            [58.2650, 26.4680],
            [58.2400, 26.4350],
            [58.2250, 26.4150],
            [58.1200, 26.3200],
            [57.7800, 26.0500]
        ],
        "stations": [
            {"name": "Tartu Raudteejaam", "lat": 58.3741, "lon": 26.7078, "type": "major_hub", "desc": "Central Railway Station"},
            {"name": "Aardla", "lat": 58.3540, "lon": 26.7110, "type": "station", "desc": "Variku / Ropka southern city rail stop"},
            {"name": "Variku", "lat": 58.3420, "lon": 26.7120, "type": "station", "desc": "Variku rail depot connection"},
            {"name": "Ropka", "lat": 58.3200, "lon": 26.6750, "type": "station", "desc": "Külitse / Ropka suburban stop"},
            {"name": "Nõo", "lat": 58.2780, "lon": 26.5350, "type": "station", "desc": "Nõo Town Station & Gymnasium"},
            {"name": "Tõravere", "lat": 58.2650, "lon": 26.4680, "type": "station", "desc": "Tartu Observatory & Space Research Center"},
            {"name": "Peedu", "lat": 58.2400, "lon": 26.4350, "type": "station", "desc": "Peedu Pine Forest Residential Stop"},
            {"name": "Elva", "lat": 58.2250, "lon": 26.4150, "type": "major_hub", "desc": "Elva City Resort Station & Commuter Terminus"}
        ]
    },
    "tartu_rail_east": {
        "id": "tartu_rail_east",
        "label": "🚆 Elron East: Tartu ↔ Kirsi ↔ Ülenurme ↔ Reola ↔ Vana-Kuuste ↔ Põlva",
        "color": "#ffab00",
        "weight": 5.5,
        "coords": [
            [58.3741, 26.7078],
            [58.3610, 26.7450],
            [58.3180, 26.7280],
            [58.2950, 26.7420],
            [58.2780, 26.7550],
            [58.2560, 26.7820],
            [58.2250, 26.8450],
            [58.1650, 26.9350],
            [58.0580, 27.0650]
        ],
        "stations": [
            {"name": "Tartu Raudteejaam", "lat": 58.3741, "lon": 26.7078, "type": "major_hub", "desc": "Central Railway Station"},
            {"name": "Kirsi", "lat": 58.3610, "lon": 26.7450, "type": "station", "desc": "Ropka / Teguri tech quarter rail stop"},
            {"name": "Ülenurme", "lat": 58.3180, "lon": 26.7280, "type": "station", "desc": "Ülenurme Suburb & Tartu Airport gateway"},
            {"name": "Uhti", "lat": 58.2950, "lon": 26.7420, "type": "station", "desc": "Uhti Suburb Commuter Stop"},
            {"name": "Reola", "lat": 58.2780, "lon": 26.7550, "type": "station", "desc": "Reola Logistics & Industrial Stop"},
            {"name": "Vana-Kuuste", "lat": 58.2560, "lon": 26.7820, "type": "station", "desc": "Vana-Kuuste Regional Station"},
            {"name": "Põlva", "lat": 58.0580, "lon": 27.0650, "type": "major_hub", "desc": "Põlva Regional Rail Hub (to Koidula/Piusa)"}
        ]
    }
}

# Turn-by-turn road paths for Tartu Smart City Buses
TARTU_BUS_ROUTES = {
    # -------------------------------------------------------------------------
    # 1. KEY TRUNK BUSES (High Frequency 10–15 min)
    # -------------------------------------------------------------------------
    "bus_1": {
        "num": "1",
        "label": "🔴 Bus 1: Lõunakeskus ↔ Kesklinn ↔ Raadi (ERM) ↔ Nõlvaku",
        "color": "#E6194B",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Lõunakeskus – Riia – Kesklinn – Narva mnt – ERM – Nõlvaku",
        "coords": [
            [58.3570, 26.6800], [58.3582, 26.6853], [58.3630, 26.6980], [58.3712, 26.7135],
            [58.3750, 26.7220], [58.3780, 26.7310], [58.3815, 26.7285], [58.3846, 26.7266],
            [58.3890, 26.7350], [58.3950, 26.7430], [58.3965, 26.7445], [58.3880, 26.7620],
            [58.3780, 26.7800]
        ]
    },
    "bus_2": {
        "num": "2",
        "label": "🔴 Bus 2: Lõunakeskus ↔ Kesklinn ↔ Annelinn (Nõlvaku)",
        "color": "#F032E6",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Lõunakeskus – Riia – Kesklinn – Soola – Kalda tee – Nõlvaku",
        "coords": [
            [58.3570, 26.6800], [58.3610, 26.6930], [58.3710, 26.7130], [58.3768, 26.7275],
            [58.3780, 26.7310], [58.3750, 26.7420], [58.3730, 26.7550], [58.3710, 26.7720],
            [58.3740, 26.7820]
        ]
    },
    "bus_3": {
        "num": "3",
        "label": "🔴 Bus 3: Nõlvaku ↔ Annelinn ↔ Kesklinn ↔ Vaksali ↔ Maarjamõisa (Kliinikum)",
        "color": "#3CB44B",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Nõlvaku – Kaunase pst – Kesklinn – Vaksali – Puusepa – Maarjamõisa",
        "coords": [
            [58.3740, 26.7820], [58.3720, 26.7650], [58.3760, 26.7450], [58.3780, 26.7310],
            [58.3770, 26.7210], [58.3741, 26.7078], [58.3710, 26.7010], [58.3695, 26.6970],
            [58.3660, 26.6930]
        ]
    },
    "bus_4": {
        "num": "4",
        "label": "🔴 Bus 4: Ringtee ↔ Karlova ↔ Kesklinn ↔ Põllu (Kruusamäe)",
        "color": "#F58231",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Ringtee – Tähe (Karlova) – Kesklinn – Vabaduse pst – Põllu",
        "coords": [
            [58.3510, 26.7320], [58.3580, 26.7310], [58.3670, 26.7300], [58.3740, 26.7260],
            [58.3780, 26.7250], [58.3820, 26.7240], [58.3870, 26.7250], [58.3960, 26.7310],
            [58.4012, 26.7345]
        ]
    },
    "bus_6": {
        "num": "6",
        "label": "🔴 Bus 6: Lõunakeskus ↔ Maarjamõisa ↔ Vaksali ↔ Kesklinn ↔ Kvissentali",
        "color": "#911EB4",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Lõunakeskus – Ravila – Vaksali – Kesklinn – Ujula – Kvissentali",
        "coords": [
            [58.3570, 26.6800], [58.3650, 26.6880], [58.3695, 26.6970], [58.3741, 26.7078],
            [58.3780, 26.7240], [58.3845, 26.7265], [58.3900, 26.7180], [58.3980, 26.7140],
            [58.4030, 26.7160]
        ]
    },
    "bus_7": {
        "num": "7",
        "label": "🔴 Bus 7: Ringtee ↔ Kesklinn ↔ Raatuse ↔ Mõisavahe",
        "color": "#4363D8",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Ringtee – Turu – Kesklinn – Raatuse – Jaama – Mõisavahe",
        "coords": [
            [58.3510, 26.7320], [58.3600, 26.7380], [58.3700, 26.7350], [58.3780, 26.7310],
            [58.3820, 26.7330], [58.3850, 26.7500], [58.3790, 26.7680], [58.3720, 26.7810]
        ]
    },
    "bus_8": {
        "num": "8",
        "label": "🔴 Bus 8: Lõunakeskus ↔ Tammelinn ↔ Kesklinn ↔ Supilinn / Tähtvere",
        "color": "#469990",
        "group": "bus_key",
        "weight": 4.5,
        "name": "Lõunakeskus – Suur kaar – Kesklinn – Kroonuaia – Supilinn – Tähtvere",
        "coords": [
            [58.3570, 26.6800], [58.3625, 26.6980], [58.3710, 26.7130], [58.3780, 26.7240],
            [58.3830, 26.7180], [58.3865, 26.7125], [58.3900, 26.7020], [58.3920, 26.6960]
        ]
    },

    # -------------------------------------------------------------------------
    # 2. SUBURBAN CONNECTORS
    # -------------------------------------------------------------------------
    "bus_5": {
        "num": "5",
        "label": "🌲 Bus 5: Ihaste ↔ Annelinn ↔ Kesklinn ↔ Supilinn ↔ Tähtvere",
        "color": "#3b82f6",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3580, 26.7820], [58.3650, 26.7650], [58.3730, 26.7450], [58.3780, 26.7240],
            [58.3865, 26.7125], [58.3910, 26.7000]
        ]
    },
    "bus_9": {
        "num": "9",
        "label": "🌲 Bus 9: Annelinn ↔ Ropka ↔ Maarjamõisa ↔ Veeriku ↔ Ravila",
        "color": "#22c55e",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3720, 26.7800], [58.3620, 26.7550], [58.3560, 26.7320], [58.3630, 26.7050],
            [58.3695, 26.6970], [58.3760, 26.6900], [58.3820, 26.6850]
        ]
    },
    "bus_10": {
        "num": "10",
        "label": "🌲 Bus 10: Nõlvaku ↔ Ropka tööstus ↔ Lõunakeskus ↔ Maarjamõisa",
        "color": "#14b8a6",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3740, 26.7820], [58.3610, 26.7600], [58.3490, 26.7450], [58.3520, 26.7050],
            [58.3570, 26.6800], [58.3680, 26.6960]
        ]
    },
    "bus_11": {
        "num": "11",
        "label": "🌲 Bus 11: Ihaste ↔ Kaunase pst ↔ Kesklinn ↔ Vaksali ↔ Ravila",
        "color": "#a855f7",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3580, 26.7820], [58.3680, 26.7600], [58.3750, 26.7350], [58.3780, 26.7240],
            [58.3741, 26.7078], [58.3780, 26.6950], [58.3830, 26.6850]
        ]
    },
    "bus_12": {
        "num": "12",
        "label": "🌲 Bus 12: Kesklinn ↔ Ropka ↔ Variku ↔ Tammelinn ↔ Lõunakeskus",
        "color": "#e11d48",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3680, 26.7320], [58.3580, 26.7280], [58.3540, 26.7130],
            [58.3600, 26.6980], [58.3570, 26.6800]
        ]
    },
    "bus_13": {
        "num": "13",
        "label": "🌲 Bus 13: Mõisavahe ↔ Anne kanal ↔ Kesklinn ↔ Tähtvere ↔ Ilmatsalu tee",
        "color": "#f43f5e",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3720, 26.7810], [58.3760, 26.7550], [58.3780, 26.7310], [58.3830, 26.7150],
            [58.3880, 26.7000], [58.3860, 26.6750]
        ]
    },
    "bus_21": {
        "num": "21",
        "label": "🌲 Bus 21: Night Circle East (Kesklinn ↔ Annelinn ↔ Ihaste)",
        "color": "#8b5cf6",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3750, 26.7550], [58.3720, 26.7800], [58.3580, 26.7820],
            [58.3620, 26.7450], [58.3780, 26.7310]
        ]
    },
    "bus_22": {
        "num": "22",
        "label": "🌲 Bus 22: Night Circle West (Kesklinn ↔ Vaksali ↔ Tammelinn ↔ Lõunakeskus)",
        "color": "#10b981",
        "group": "bus_suburb",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3741, 26.7078], [58.3680, 26.6960], [58.3570, 26.6800],
            [58.3650, 26.7150], [58.3780, 26.7310]
        ]
    },
    "bus_25": {
        "num": "25",
        "label": "🌲 Bus 25: Raudteejaam ↔ Kesklinn ↔ Bussijaam Express",
        "color": "#FFE119",
        "group": "bus_suburb",
        "weight": 4.5,
        "coords": [
            [58.3741, 26.7078], [58.3748, 26.7150], [58.3768, 26.7240], [58.3780, 26.7310]
        ]
    },

    # -------------------------------------------------------------------------
    # 3. REGIONAL TARTUMAA LINES (Within 30km)
    # -------------------------------------------------------------------------
    "bus_31": {
        "num": "31",
        "label": "🏡 Bus 31: Tartu ↔ Kõrveküla ↔ Vasula",
        "color": "#ef4444",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3846, 26.7266], [58.3980, 26.7450], [58.4200, 26.7650],
            [58.4450, 26.7400]
        ]
    },
    "bus_35": {
        "num": "35",
        "label": "🏡 Bus 35: Tartu ↔ Luunja ↔ Kavastu",
        "color": "#f97316",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3730, 26.7650], [58.3650, 26.8200], [58.3550, 26.8850],
            [58.3750, 27.0500]
        ]
    },
    "bus_40": {
        "num": "40",
        "label": "🏡 Bus 40: Tartu ↔ Tõrvandi ↔ Ülenurme (Tartu Airport)",
        "color": "#06b6d4",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3650, 26.7300], [58.3450, 26.7250], [58.3250, 26.7150],
            [58.3180, 26.7280], [58.3075, 26.6885]
        ]
    },
    "bus_50": {
        "num": "50",
        "label": "🏡 Bus 50: Tartu ↔ Märja ↔ Ilmatsalu",
        "color": "#84cc16",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3720, 26.7050], [58.3650, 26.6600], [58.3680, 26.6250],
            [58.3850, 26.5450]
        ]
    },
    "bus_71": {
        "num": "71",
        "label": "🏡 Bus 71: Tartu ↔ Kärevere ↔ Laeva",
        "color": "#0ea5e9",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3880, 26.7000], [58.4200, 26.5800], [58.4600, 26.4300],
            [58.4900, 26.3700]
        ]
    },
    "bus_80": {
        "num": "80",
        "label": "🏡 Bus 80: Tartu ↔ Vana-Kuuste ↔ Kambja",
        "color": "#64748b",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3580, 26.7320], [58.3150, 26.7450], [58.2560, 26.7820],
            [58.2350, 26.7400]
        ]
    },
    "bus_85": {
        "num": "85",
        "label": "🏡 Bus 85: Tartu ↔ Nõo ↔ Elva Express",
        "color": "#d97706",
        "group": "bus_outside",
        "weight": 4.0,
        "coords": [
            [58.3780, 26.7310], [58.3570, 26.6800], [58.3200, 26.6200], [58.2780, 26.5350],
            [58.2250, 26.4150]
        ]
    }
}

# Try loading high-precision exact transit routes from data file
_exact_routes_file = os.path.join(DATA_DIR, "tartu_exact_transit_routes.json")
if os.path.exists(_exact_routes_file):
    try:
        with open(_exact_routes_file, encoding="utf-8") as _f:
            _loaded_routes = json.load(_f)
            if _loaded_routes and isinstance(_loaded_routes, dict) and len(_loaded_routes) > 0:
                TARTU_BUS_ROUTES = _loaded_routes
    except Exception:
        pass

if __name__ == "__main__":
    with open(os.path.join(DATA_DIR, "tartu_exact_transit_routes.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_BUS_ROUTES, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "tartu_train_corridors.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_TRAIN_LINES, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "tartu_transit_hubs.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_TRANSIT_HUBS, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "tartu_tech_clusters.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_TECH_CLUSTERS, f, ensure_ascii=False, indent=2)
    with open(os.path.join(DATA_DIR, "tartu_district_labels.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_DISTRICT_LABELS, f, ensure_ascii=False, indent=2)
    print("Generated all Tartu transit routes, train lines, tech clusters, and hubs!")

