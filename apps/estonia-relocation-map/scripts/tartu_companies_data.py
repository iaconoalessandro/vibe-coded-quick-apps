"""
==============================================================================
TARTU VERIFIED TECH HUBS & R&D COMPANIES DATASET
==============================================================================
Comprehensive database of 32+ verified tech companies, software engineering
offices, deep tech spin-offs, and research institutes in Tartu, Estonia.
"""

TARTU_COMPANIES = [
    # 1. Flagship / Unicorn / Big Tech
    {
        "name": "Playtech Tartu HQ",
        "category": "Gaming Tech & Media",
        "color": "#7e22ce",
        "icon": "🎮",
        "address": "Vanemuise 7",
        "district": "Kesklinn (Vanemuise Quarter)",
        "tech_focus": "Global Core Engineering HQ: Ultra-high throughput transaction engines, real-time streaming, iGaming platforms & IMS distributed backend (600+ engineers).",
        "transit": "Bus 1, 2, 3, 4, 6, 7, 8 (Raeplats / Kesklinn ~3 min walk)",
        "lat": 58.37628,
        "lon": 26.71985,
        "address_note": "Playtech was founded in Tartu in 1999; Vanemuise 7 is their flagship building."
    },
    {
        "name": "Bolt Tartu Office",
        "category": "Autonomous Vehicles & Robotics",
        "color": "#166534",
        "icon": "⚡",
        "address": "Ülikooli 2a (Kaarsild riverside)",
        "district": "Kesklinn (Riverfront)",
        "tech_focus": "Core Mobility Engineering: Dynamic routing algorithms, dispatch optimization ML, micro-mobility IoT hardware & payment pipelines.",
        "transit": "Bus 1, 2, 3, 4, 6, 8 (Raeplats / Vabaduse pst ~2 min walk)",
        "lat": 58.38045,
        "lon": 26.72480,
        "address_note": "Bolt engineering teams occupy modern office suites along the Emajõgi riverfront."
    },
    {
        "name": "UT Delta Centre & Sandbox",
        "category": "AI & Machine Learning",
        "color": "#ea580c",
        "icon": "🧠",
        "address": "Narva mnt 18",
        "district": "Ülejõe (Delta Innovation Hub)",
        "tech_focus": "Estonia's Flagship AI & Data Science Hub: NLP, Computer Vision, Autonomous Driving Lab, Sandbox startup incubator & UT Institute of Computer Science.",
        "transit": "Bus 1, 2, 4, 7, 8 (Vene / Narva mnt ~1 min walk)",
        "lat": 58.38465,
        "lon": 26.72665,
        "address_note": "€30M+ architectural flagship hosting academia, international tech research, and corporate R&D teams."
    },
    {
        "name": "Nortal Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#1d4ed8",
        "icon": "🏛️",
        "address": "Puiestee 73a / Raatuse 20",
        "district": "Ülejõe",
        "tech_focus": "e-Governance architectures, large-scale healthcare data ecosystems, digital transformation & cloud modernization.",
        "transit": "Bus 1, 2, 7 (Puiestee / Kasarmu ~2 min walk)",
        "lat": 58.38880,
        "lon": 26.73550,
        "address_note": "Nortal has deep roots in Tartu with key public sector data engineering teams."
    },
    {
        "name": "Mooncascade HQ",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#2563eb",
        "icon": "📱",
        "address": "Soola 8 (Tasku Centre)",
        "district": "Kesklinn",
        "tech_focus": "Fintech and mobile product engineering powerhouse, microservices, iOS/Android systems architecture.",
        "transit": "Tartu Central Bus Station (Bussijaam ~1 min walk)",
        "lat": 58.37790,
        "lon": 26.73080,
        "address_note": "Founded in Tartu by ex-Skypers; leading engineering consultancy."
    },

    # 2. AI & Deep Tech
    {
        "name": "EyeVi Technologies HQ",
        "category": "AI & Machine Learning",
        "color": "#ea580c",
        "icon": "📷",
        "address": "Fr. R. Kreutzwaldi 64",
        "district": "Tähtvere",
        "tech_focus": "AI Mobile Mapping, 3D LiDAR point cloud processing, computer vision for road infrastructure & asset digital twin modeling.",
        "transit": "Bus 6, 8, 13 (Kreutzwaldi / EMÜ ~2 min walk)",
        "lat": 58.39120,
        "lon": 26.69750,
        "address_note": "Tartu-born AI mapping startup; primary R&D headquarters."
    },
    {
        "name": "Antegenes HQ",
        "category": "HealthTech & Diagnostics",
        "color": "#9333ea",
        "icon": "🧬",
        "address": "Raatuse 21",
        "district": "Ülejõe",
        "tech_focus": "Genomics AI: Polygenic Risk Scoring (PRS) algorithms, personalized oncology prediction & clinical decision support software.",
        "transit": "Bus 1, 2, 7 (Raatuse ~2 min walk)",
        "lat": 58.38260,
        "lon": 26.73280,
        "address_note": "Registered & main R&D office is at Raatuse 21 in Tartu."
    },
    {
        "name": "Positium",
        "category": "AI & Machine Learning",
        "color": "#ea580c",
        "icon": "📡",
        "address": "Raatuse 20",
        "district": "Ülejõe",
        "tech_focus": "Mobile Big Data Analytics, telecom positioning algorithms, demographic mobility modeling for UN/Eurostat.",
        "transit": "Bus 1, 2, 7 (Raatuse ~2 min walk)",
        "lat": 58.38290,
        "lon": 26.73230
    },
    {
        "name": "Cybernetica Tartu R&D",
        "category": "Cybersecurity & Cryptography",
        "color": "#0f172a",
        "icon": "🔒",
        "address": "Ülikooli 2 / Narva mnt 18 (Delta)",
        "district": "Kesklinn / Delta",
        "tech_focus": "Applied cryptography, Sharemind secure multi-party computation, e-voting security & privacy-preserving data science.",
        "transit": "Bus 1, 2, 3, 4, 6, 8 (Raeplats)",
        "lat": 58.38030,
        "lon": 26.72490
    },

    # 3. SaaS / Cloud / Developer Tools
    {
        "name": "Codemagic (Nevercode) HQ",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#2563eb",
        "icon": "⚡",
        "address": "Soola 8 (Tasku)",
        "district": "Kesklinn",
        "tech_focus": "Global CI/CD pipeline automation for mobile applications (Flutter, React Native, iOS, Android), automated cloud build systems.",
        "transit": "Bus 1, 2, 3, 4, 6, 7, 8 (Kesklinn / Bussijaam)",
        "lat": 58.37800,
        "lon": 26.73100
    },
    {
        "name": "Fractory HQ",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#0891b2",
        "icon": "⚙️",
        "address": "Riia 24 (Aparaaditehas)",
        "district": "Vaksali (Aparaaditehas Quarter)",
        "tech_focus": "Automated on-demand sheet metal fabrication platform, automated CAD parsing, CNC quoting algorithms & supply chain cloud.",
        "transit": "Bus 1, 2, 3, 4, 8, 11 (Pauluse / Kastani ~2 min walk)",
        "lat": 58.37120,
        "lon": 26.71350,
        "address_note": "Located in Tartu's creative & tech hub Aparaaditehas."
    },
    {
        "name": "Glia Tartu",
        "category": "AI & Machine Learning",
        "color": "#2563eb",
        "icon": "💬",
        "address": "Ülikooli 6a",
        "district": "Kesklinn",
        "tech_focus": "Digital Customer Service (DCS) Unicorn: Real-time CoBrowsing, AI conversational agents, video/voice banking integration.",
        "transit": "Bus 1, 2, 3, 4, 6, 8 (Raeplats ~1 min walk)",
        "lat": 58.37920,
        "lon": 26.72310
    },
    {
        "name": "Axinom",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#1d4ed8",
        "icon": "✈️",
        "address": "Fortuuna 1b",
        "district": "Ülejõe",
        "tech_focus": "In-flight entertainment & aerospace connectivity, digital rights management (DRM), smart rail passenger infotainment.",
        "transit": "Bus 1, 2, 3, 4 (Võidu sild / Raeplats ~3 min walk)",
        "lat": 58.37850,
        "lon": 26.73290
    },
    {
        "name": "Voog (Edicy)",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#0891b2",
        "icon": "🌐",
        "address": "Kastani 42 (Aparaaditehas)",
        "district": "Vaksali",
        "tech_focus": "Multilingual content management system (CMS), cloud publishing platform & modern web architecture.",
        "transit": "Bus 1, 2, 3, 4, 8, 11 (Pauluse ~2 min walk)",
        "lat": 58.37140,
        "lon": 26.71420
    },
    {
        "name": "Reach-U",
        "category": "AI & Machine Learning",
        "color": "#ea580c",
        "icon": "🗺️",
        "address": "Riia 24 (Aparaaditehas)",
        "district": "Vaksali",
        "tech_focus": "GIS spatial intelligence, telecom cartography, location-based analytics & precision mapping.",
        "transit": "Bus 1, 2, 3, 4, 8, 11 (Pauluse)",
        "lat": 58.37110,
        "lon": 26.71360
    },

    # 4. DeepTech, Hardware, IoT & Robotics
    {
        "name": "Tartu Science Park (Tartu Teaduspark)",
        "category": "Industrial Tech & Engineering",
        "color": "#0891b2",
        "icon": "🚀",
        "address": "Riia 181a",
        "district": "Maarjamõisa / Ränilinn",
        "tech_focus": "Estonia's oldest science park, hosting ESA BIC space incubator, hardware prototyping labs & 50+ deep tech companies.",
        "transit": "Bus 1, 2, 6, 8, 10, 12 (Teaduspark / Riia mnt)",
        "lat": 58.35820,
        "lon": 26.68530
    },
    {
        "name": "Bercman Technologies",
        "category": "Autonomous Vehicles & Robotics",
        "color": "#166534",
        "icon": "🚦",
        "address": "Riia 26",
        "district": "Vaksali",
        "tech_focus": "Smart pedestrian crosswalks, V2X (Vehicle-to-Everything) IoT hardware, traffic computer vision & micromobility safety.",
        "transit": "Bus 1, 2, 3, 4, 8, 11 (Pauluse)",
        "lat": 58.37080,
        "lon": 26.71290
    },
    {
        "name": "Click & Grow",
        "category": "IoT & Autonomous Systems",
        "color": "#d97706",
        "icon": "🌱",
        "address": "Riia 142",
        "district": "Maarjamõisa",
        "tech_focus": "Smart indoor garden automation, IoT soil moisture & nutrient monitoring, autonomous plant cultivation hardware.",
        "transit": "Bus 1, 2, 6, 8, 10 (Lõunakeskus / Riia mnt)",
        "lat": 58.36150,
        "lon": 26.69380
    },
    {
        "name": "Milrem Robotics Tartu",
        "category": "Autonomous Vehicles & Robotics",
        "color": "#166534",
        "icon": "🤖",
        "address": "Ringtee 25",
        "district": "Ropka tööstusrajoon",
        "tech_focus": "Unmanned Ground Vehicle (UGV) autonomous navigation algorithms, sensor fusion & defense robotics software.",
        "transit": "Bus 4, 7, 10 (Ringtee / Sepa ~3 min walk)",
        "lat": 58.35120,
        "lon": 26.73210
    },
    {
        "name": "Skeleton Technologies Tartu R&D",
        "category": "CleanTech & EnergyTech",
        "color": "#166534",
        "icon": "🔋",
        "address": "Riia 181 / Kaunase pst",
        "district": "Maarjamõisa (Teaduspark)",
        "tech_focus": "Curved graphene materials synthesis, supercapacitor chemistry simulation & high-power energy storage research.",
        "transit": "Bus 1, 2, 6, 8, 10 (Teaduspark)",
        "lat": 58.35840,
        "lon": 26.68590,
        "address_note": "Tartu site focuses on advanced nanomaterials and UT chemistry collaboration."
    },

    # 5. HealthTech & Biotech
    {
        "name": "Icosagen",
        "category": "HealthTech & Diagnostics",
        "color": "#9333ea",
        "icon": "🔬",
        "address": "Eerika tee 1 (Õssu)",
        "district": "Maarjamõisa / Tartu Suburb",
        "tech_focus": "Biopharma CRDMO: Recombinant antibody discovery, mammalian cell protein expression platforms & diagnostic tech.",
        "transit": "Bus 1, 2, 6, 8 (Lõunakeskus ~8 min walk)",
        "lat": 58.36180,
        "lon": 26.66250
    },
    {
        "name": "Tartu Biotechnology Park",
        "category": "HealthTech & Diagnostics",
        "color": "#9333ea",
        "icon": "🧪",
        "address": "Tiigi 61b",
        "district": "Vaksali",
        "tech_focus": "Biomedical incubator, molecular biology diagnostic startups, medical device prototyping & lab infrastructure.",
        "transit": "Bus 1, 2, 3, 8 (Vaksali / Pauluse ~4 min walk)",
        "lat": 58.37340,
        "lon": 26.71180
    },
    {
        "name": "Quretec",
        "category": "HealthTech & Diagnostics",
        "color": "#9333ea",
        "icon": "📊",
        "address": "Ülikooli 6a",
        "district": "Kesklinn",
        "tech_focus": "Clinical data management systems, medical biobank registries & statistical software for clinical trials.",
        "transit": "Bus 1, 2, 3, 4, 6, 8 (Raeplats)",
        "lat": 58.37910,
        "lon": 26.72330
    },
    {
        "name": "Fitlap",
        "category": "HealthTech & Diagnostics",
        "color": "#9333ea",
        "icon": "🥗",
        "address": "Raatuse 20",
        "district": "Ülejõe",
        "tech_focus": "Personalized nutrition AI, dietary calculation algorithms & health SaaS platform.",
        "transit": "Bus 1, 2, 7 (Raatuse)",
        "lat": 58.38300,
        "lon": 26.73220
    },

    # 6. FinTech / Enterprise Consulting
    {
        "name": "Single.Earth",
        "category": "Fintech & Banking",
        "color": "#059669",
        "icon": "🌍",
        "address": "Narva mnt 18 (Delta)",
        "district": "Ülejõe",
        "tech_focus": "NatureTech FinTech: Tokenizing ecological assets, carbon capture satellite ML & biodiversity index modeling.",
        "transit": "Bus 1, 2, 4, 7, 8 (Delta)",
        "lat": 58.38470,
        "lon": 26.72680
    },
    {
        "name": "CGI Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#1d4ed8",
        "icon": "💻",
        "address": "Soola 8 (Tasku)",
        "district": "Kesklinn",
        "tech_focus": "Public sector digital services, space software development (Galileo ground segment) & cloud engineering.",
        "transit": "Tartu Bussijaam (~1 min walk)",
        "lat": 58.37780,
        "lon": 26.73090
    },
    {
        "name": "Helmes Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#2563eb",
        "icon": "💻",
        "address": "Fortuuna 1b",
        "district": "Ülejõe",
        "tech_focus": "Custom software integration, fintech platforms & digital healthcare architectures.",
        "transit": "Bus 1, 2, 3, 4 (Võidu sild)",
        "lat": 58.37860,
        "lon": 26.73270
    },
    {
        "name": "Solita Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#2563eb",
        "icon": "📊",
        "address": "Ülikooli 2a",
        "district": "Kesklinn",
        "tech_focus": "Data platforms, cloud architecture, AI strategy & agile software development.",
        "transit": "Bus 1, 2, 3, 4, 6, 8 (Raeplats)",
        "lat": 58.38050,
        "lon": 26.72470
    },
    {
        "name": "Tietoevry Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#1d4ed8",
        "icon": "🏦",
        "address": "Narva mnt 3",
        "district": "Ülejõe",
        "tech_focus": "Nordic banking infrastructure, digital payments, card acquiring systems & enterprise cloud.",
        "transit": "Bus 1, 2, 4, 7, 8 (Atlantis / Vene)",
        "lat": 58.38120,
        "lon": 26.72890
    },
    {
        "name": "Twilio Tartu",
        "category": "Enterprise Software & Logistics Tech",
        "color": "#dc2626",
        "icon": "💬",
        "address": "Riia 2 (Kvartal)",
        "district": "Kesklinn",
        "tech_focus": "Global telephony infrastructure, carrier interconnect APIs & distributed messaging platforms.",
        "transit": "Bus 1, 2, 3, 4, 6, 7, 8 (Kesklinn)",
        "lat": 58.37680,
        "lon": 26.72750
    },
    {
        "name": "Salvest Tech / R&D",
        "category": "CleanTech & EnergyTech",
        "color": "#ea580c",
        "icon": "🥫",
        "address": "Aruküla tee 3",
        "district": "Raadi-Kruusamäe",
        "tech_focus": "Automated food tech processing lines, laboratory quality analytics & sustainable packaging automation.",
        "transit": "Bus 4, 8, 10 (Põllu / Kruusamäe ~3 min walk)",
        "lat": 58.40120,
        "lon": 26.73450
    },
    {
        "name": "Swedbank IT Tartu",
        "category": "Fintech & Banking",
        "color": "#059669",
        "icon": "🏦",
        "address": "Narva mnt 18 (Delta)",
        "district": "Ülejõe",
        "tech_focus": "Banking modernization, financial APIs & credit modeling engineering team.",
        "transit": "Bus 1, 2, 4, 7, 8 (Delta)",
        "lat": 58.38480,
        "lon": 26.72650
    }
]

if __name__ == "__main__":
    import json
    import os
    ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DATA = os.path.join(ROOT, "data")
    os.makedirs(DATA, exist_ok=True)
    with open(os.path.join(DATA, "tartu_companies_verified.json"), "w", encoding="utf-8") as f:
        json.dump(TARTU_COMPANIES, f, ensure_ascii=False, indent=2)
    print(f"Exported {len(TARTU_COMPANIES)} verified Tartu tech offices to data/tartu_companies_verified.json")
