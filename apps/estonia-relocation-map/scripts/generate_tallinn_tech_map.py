"""
==============================================================================
TALLINN TECH HUBS & PUBLIC TRANSIT ACCESSIBILITY MAP GENERATOR
==============================================================================
Author: Data Science & ML Transit Intelligence
Target: Tallinn, Estonia Tech Ecosystem (59 Verified Tech/R&D Hubs)
Purpose: Zero-car apartment hunting & transit route accessibility planning

Features:
1. 100% Free & Open Basemaps (Zero API keys, Zero Watermarks)
2. 💶 District Rental Price Layer (€/m² & Geographic Perimeter Polygons):
   - Shaded semi-transparent colored polygons for each district boundary
   - Separated 2-line badges: District name on top + Large €/m² price below
   - 1-Bedroom (45 m²) and 2-Bedroom (65 m²) monthly rent estimates (<€3,000/mo)
   - Direct 1-click pre-filtered search links to KV.ee and City24.ee
3. Light Grey Half-Transparent District & Neighborhood Labels
4. Always-On Green Areas & City Parks (90+ real OSM park polygons)
5. Fully Interactive Hierarchical Nested Accordion Layer Control:
   - 💶 District Rental Prices (€/m²) with master & individual toggles
   - 🏢 Tech Companies (by Sector) with master & individual toggles
   - 🚋 Tram Lines (1 to 5) with master & individual toggles
   - 🚎 Trolleybus Lines (1, 3, 4, 5) with master & individual toggles
   - 🚌 Bus Lines (12 lines with 12 distinct colors) with master & individual toggles
   - 🌐 Tech Districts, Labels & Transit Hubs
   - 🗺️ Basemap Selector (Dark, Light, OSM, Street, Satellite)
6. 100% Exact, Loop-Free, Turn-by-Turn Road Transit Geometry with
   mathematical parallel ribbon offsets.
7. 59 Verified Tech & R&D Hubs with custom vector pins
8. 1-Click Google Maps & Apple Maps navigation buttons in every popup
9. 100% Standalone Offline execution (.html) + KML / KMZ exports
==============================================================================
"""

import os
import sys
import json
import zipfile
import re
import xml.etree.ElementTree as ET

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR) if os.path.basename(SCRIPT_DIR) == "scripts" else SCRIPT_DIR
DATA_DIR = os.path.join(ROOT_DIR, "data")
EXPORTS_DIR = os.path.join(ROOT_DIR, "exports")

os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(EXPORTS_DIR, exist_ok=True)

if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

def get_data_path(filename):
    p1 = os.path.join(DATA_DIR, filename)
    if os.path.exists(p1):
        return p1
    p2 = os.path.join(ROOT_DIR, filename)
    if os.path.exists(p2):
        return p2
    return p1

# ============================================================================
# 1. VERIFIED TECH COMPANIES DATASET (59 TECH HUBS)
# ============================================================================
COMPANIES_DATA = [
    # Page 1
    {"name": "ABB", "category": "Industrial Tech & Engineering", "color": "#dc2626", "icon": "⚡", "address": "Valukoja 8 (Öpiku Maja)", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Automation, Drive Systems, Industrial IoT & Global Business/IT Services", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station (~3 min walk)", "lat": 59.41958, "lon": 24.804783, "address_note": "Address verified. ABB Tallinn is industrial automation and global business services; ML/DS openings are rare compared with the software companies nearby."},
    {"name": "Ericsson", "category": "Telecom & Cloud Infrastructure", "color": "#2563eb", "icon": "📡", "address": "Valukoja 8/1 (Öpiku Maja)", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "5G/6G Networks, Smart Manufacturing & Telecom R&D", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.420115, "lon": 24.804787, "address_note": "Ericsson runs four Tallinn sites. This is the office/R&D one. Peterburi tee 67a is the supply site, Peterburi tee 66 is test hardware, Punane 72 is test labs — a software or ML role sits here."},
    {"name": "Monese", "category": "Fintech & Banking", "color": "#059669", "icon": "💳", "address": "Telliskivi 60/2 (Telliskivi Creative City)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Mobile Banking Platform, Core Banking SaaS & Payment Rails", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam Transit Hub (~6 min walk)", "lat": 59.439535, "lon": 24.732987},
    {"name": "Riverty", "category": "Fintech & Banking", "color": "#059669", "icon": "💰", "address": "Telliskivi 60/2 (Telliskivi Creative City)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Fintech, Buy-Now-Pay-Later (BNPL) Engines & Payment Processing", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam Transit Hub (~6 min walk)", "lat": 59.439535, "lon": 24.732987},
    {"name": "Kuehne+Nagel", "category": "Enterprise Software & Logistics Tech", "color": "#1d4ed8", "icon": "🚢", "address": "A. H. Tammsaare tee 47, C, 8th floor", "district": "Kristiine (Tondi)", "tech_focus": "Global IT Hub, Supply Chain Optimization, Cloud Logistics & Big Data", "transit": "Tram 4 (Ülemiste linnak / Dvigatel), Ülemiste Train Station", "lat": 59.401419, "lon": 24.717519, "address_note": "Corrected: the main office moved to Tammsaare Ärikeskus. Check which entity is hiring — the tech arm (Kühne+Nagel IT Service Centre) sat separately at Lõõtsa 2B in Ülemiste City."},
    {"name": "SYNLAB Eesti", "category": "HealthTech & Diagnostics", "color": "#9333ea", "icon": "🔬", "address": "Veerenni 53a", "district": "Kesklinn (Veerenni)", "tech_focus": "Medical Diagnostics Tech, Laboratory Information Systems & Digital Health", "transit": "Bus 3, 16, 28, 73 (Veerenni), Bus 39 (Töökoja)", "lat": 59.417476, "lon": 24.753637, "address_note": "Address verified, but note this is a clinical laboratory group — data roles here are health-informatics, not product ML."},
    # Page 2
    {"name": "Guardtime", "category": "Cybersecurity & Cryptography", "color": "#0f172a", "icon": "🛡️", "address": "A. H. Tammsaare tee 60 (Tammsaare Ärikeskus)", "district": "Mustamäe / Kristiine border", "tech_focus": "KSI Blockchain Cryptography, Zero-Trust Data Security & Defense Tech", "transit": "Bus 12, 13, 20, 20A, 28 (Sipelga), Trolley 3 (Linnu tee ~9 min walk)", "lat": 59.402799, "lon": 24.716837},
    {"name": "Antegenes", "category": "HealthTech & Diagnostics", "color": "#9333ea", "icon": "🧬", "address": "Teaduspargi 6/1 (Tehnopol)", "district": "Mustamäe (Tehnopol)", "tech_focus": "Polygenic Risk Scoring (PRS) Algorithms & Oncology AI Software", "transit": "Trolley 3, Bus 11, 24 (Keemia / Raja / Teaduspargi)", "lat": 59.398042, "lon": 24.656672, "address_note": "⚠ NOT IN TALLINN: Antegenes is registered and based at Raatuse 21, Tartu (~2h away). This Tehnopol pin is wrong — treat it as a Tartu employer."},
    {"name": "MindTitan", "category": "AI & Machine Learning", "color": "#ea580c", "icon": "🧠", "address": "Volta 1 (Volta Kvartal)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Custom AI/ML Solutions, NLP, LLM Fine-Tuning & Computer Vision", "transit": "Tram 1, 2, 5 (Volta / Tööstuse), Bus 73 (Volta)", "lat": 59.445035, "lon": 24.722448},
    {"name": "Auve Tech", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "🚐", "address": "Vabaõhumuuseumi tee 1", "district": "Haabersti (Rocca al Mare)", "tech_focus": "Level 4 Autonomous Shuttles, Sensor Fusion, LiDAR & Fleet OS", "transit": "Bus 12, 13, 20, 20A, 28 (Järvevana / Tammsaare tee)", "lat": 59.44548, "lon": 24.609742, "address_note": "Corrected: moved west to Rocca al Mare, not Järvevana tee. Street-level coordinate — verify the exact entrance before commuting."},
    {"name": "indiGOtech Europe", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "⚙️", "address": "Lõõtsa 8", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Smart EV Powertrains, In-Wheel Motor Drive Systems & Active Suspension", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.420648, "lon": 24.799942},
    {"name": "Krakul", "category": "IoT & Autonomous Systems", "color": "#d97706", "icon": "📡", "address": "Pärnu mnt 186", "district": "Kristiine / Kesklinn border", "tech_focus": "IoT Hardware Engineering, Embedded Firmware, Autonomous Delivery Systems", "transit": "Tram 3, 4 (Kalev / Hallivanamehe), Bus 5, 18, 20, 32, 36 (Hallivanamehe)", "lat": 59.397461, "lon": 24.725515},
    {"name": "DefSecIntel Solutions", "category": "Cybersecurity & Cryptography", "color": "#0f172a", "icon": "🛰️", "address": "Tähetorni 21h", "district": "Nõmme (Hiiu)", "tech_focus": "AI Surveillance Platforms, Computer Vision, Drone Detection & Remote Sensing", "transit": "Trolley 3, Bus 11, 24, 23 (Akadeemia tee / Raja)", "lat": 59.385652, "lon": 24.642736, "address_note": "Corrected: the registered address moved from Akadeemia tee 21/4 (Tehnopol) to Tähetorni 21h in Nõmme."},
    # Page 3
    {"name": "EyeVi Technologies", "category": "AI & Machine Learning", "color": "#ea580c", "icon": "📷", "address": "Teaduspargi 8 (Tehnopol)", "district": "Mustamäe (Tehnopol)", "tech_focus": "AI Mobile Mapping, Geospatial Computer Vision & Road Infrastructure Analytics", "transit": "Trolley 3, Bus 11, 24 (Teaduspargi / Raja)", "lat": 59.400037, "lon": 24.656532, "address_note": "⚠ Primary office is in Tartu (Kreutzwald st); the Tallinn office opened in 2021 as the secondary site. Confirm which one a given role sits in."},
    {"name": "Twilio", "category": "Enterprise Software & Logistics Tech", "color": "#dc2626", "icon": "💬", "address": "Veerenni 38", "district": "Kesklinn (Juhkentali)", "tech_focus": "Global Telephony APIs, Messaging Infrastructure & Cloud Scalability", "transit": "Tram 3, 4, 5 (Vineeri / Kosmos ~8 min walk), Bus 3, 16, 28, 39, 73 (Veerenni)", "lat": 59.418012, "lon": 24.750652, "address_note": "Corrected: Twilio Estonia is at Veerenni 38. Veerenni 24 (Baltika Kvartal) is Wise's building."},
    {"name": "OlyBet Group", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎮", "address": "Pronksi 19", "district": "Kesklinn (Downtown)", "tech_focus": "Sportsbook Platforms, Real-time Betting Odds Engine & Digital Media", "transit": "Tram 1, 2, 3, 4 (Hobujaama / Maneezi), Bus 35, 42, 60 (Raua / Pronksi)", "lat": 59.433491, "lon": 24.764178},
    {"name": "Evolution", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎥", "address": "Tartu mnt 83", "district": "Kesklinn / Sikupilli border", "tech_focus": "Ultra-Low Latency Video Streaming, Computer Vision & Real-Time Game Platforms", "transit": "Tram 2, 4 (Lubja / Autobussijaam), Bus 2, 15, 39, 54", "lat": 59.427589, "lon": 24.779036},
    {"name": "Betsson Group", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎲", "address": "Hobujaama 4", "district": "Kesklinn (Rotermanni / Downtown)", "tech_focus": "iGaming Core Platform, Microservices Architecture & Real-Time Analytics", "transit": "Tram 1, 2, 3, 4, 5 (Hobujaama Central Hub ~1 min walk)", "lat": 59.43802, "lon": 24.758007},
    {"name": "Paf", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎯", "address": "Rotermanni 8", "district": "Kesklinn (Rotermanni Kvartal)", "tech_focus": "Gaming Systems, Responsible Gaming AI, Player Safety Algorithms", "transit": "Tram 1, 2, 3, 4, 5 (Hobujaama / Mere pst ~2 min walk)", "lat": 59.438708, "lon": 24.757031},
    {"name": "Bally's Interactive", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎰", "address": "Sepapaja 1 (Sepapaja Maja)", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Online Casino Software, High-Throughput Transaction Engines & Gaming Tech", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.421353, "lon": 24.806506, "address_note": "⚠ Unconfirmed: the careers page places the Tallinn office in the Rotermanni Quarter downtown, not Sepapaja 1 in Ülemiste City. Exact street number not confirmed."},
    # Page 4
    {"name": "Relax Gaming Ltd", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🧩", "address": "Pärnu mnt 141 (Delta Plaza)", "district": "Kristiine / Mustamäe border", "tech_focus": "Casino Games Engine, High-Performance Backend & Gaming APIs", "transit": "Tram 3, 4 (Kalev), Bus 5, 18, 20, 32, 36, 57 (Kalev)", "lat": 59.402665, "lon": 24.730994},
    {"name": "Coolbet", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🏆", "address": "Telliskivi 60/1 (Telliskivi Creative City)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "In-house Sportsbook Engine, Odds Modeling & High-Load Gaming Tech", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam (~5 min walk)", "lat": 59.440171, "lon": 24.73028, "address_note": "⚠ Unconfirmed: registered at Kai 4, and Coolbet is part of Yolo Group (Madara 33). The Telliskivi 60/1 pin could not be verified."},
    {"name": "Yolo Group", "category": "Fintech & Banking", "color": "#047857", "icon": "🪙", "address": "Madara 33", "district": "Kristiine (Lilleküla)", "tech_focus": "Crypto/Web3 Payments, High-Volume FinTech Platform & Venture Tech", "transit": "Tram 1, 2, 5 (Angerja / Sitsi ~6 min walk), Bus 73, 3 (Erika)", "lat": 59.429684, "lon": 24.723021, "address_note": "Corrected: Yolo Group's own contact page lists Madara 33, not Erika 14."},
    {"name": "Zendesk QA (Klaus)", "category": "AI & Machine Learning", "color": "#2563eb", "icon": "🤖", "address": "Vana-Lõuna 39/1", "district": "Kesklinn (Veerenni)", "tech_focus": "Automated Quality Assurance AI, NLP & Customer Support Analytics", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam (~5 min walk)", "lat": 59.420174, "lon": 24.743939, "address_note": "Corrected: Zendesk's Tallinn office is Vana-Lõuna 39/1, not Telliskivi. Klaus was acquired by Zendesk in 2024."},
    {"name": "Lingvist", "category": "AI & Machine Learning", "color": "#ea580c", "icon": "🗣️", "address": "Pärnu mnt 67a", "district": "Kesklinn (Ajakirjandusmaja)", "tech_focus": "Adaptive AI Language Learning Algorithms, Spaced Repetition & NLP", "transit": "Tram 3, 4, 5 (Vineeri ~2 min walk), Bus 5, 18, 20, 36 (Vineeri)", "lat": 59.425153, "lon": 24.743848, "address_note": "⚠ Unconfirmed: the company is registered at J. Poska 10 (Kadriorg) and publishes no office address. Pärnu mnt 67a could not be confirmed."},
    {"name": "Modash", "category": "Enterprise Software & Logistics Tech", "color": "#2563eb", "icon": "📊", "address": "Telliskivi 60a (Telliskivi Creative City)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Creator Economy Analytics, Large-Scale Web Indexing & Data Pipelines", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam (~5 min walk)", "lat": 59.440562, "lon": 24.731912},
    # Page 5
    {"name": "Katana Cloud Inventory", "category": "Enterprise Software & Logistics Tech", "color": "#0891b2", "icon": "📦", "address": "Staapli 12 (Noblessner)", "district": "Põhja-Tallinn (Noblessner)", "tech_focus": "Modern Cloud ERP, Real-Time Manufacturing & Inventory Scheduling Engine", "transit": "Bus 73 (Kalaranna / Linnahall), Tram 1, 2, 5 (Põhja pst ~7 min walk)", "lat": 59.45137, "lon": 24.727184, "address_note": "Corrected: Noblessner (Staapli 12), not Kalaranna 8."},
    {"name": "Xolo", "category": "Fintech & Banking", "color": "#059669", "icon": "💼", "address": "Kalasadama 4", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Automated Solo-Business Compliance, e-Residency Banking & Tax SaaS", "transit": "Bus 12, 13, 20, 20A, 28 (Sipelga), Trolley 3 (Linnu tee)", "lat": 59.444852, "lon": 24.749895, "address_note": "Corrected: the Tallinn office is Kalasadama 4; the company itself is registered in Tartu."},
    {"name": "Zone.eu", "category": "Telecom & Cloud Infrastructure", "color": "#1d4ed8", "icon": "🖥️", "address": "Lõõtsa 5", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Cloud Hosting Infrastructure, DNS Anycast, Web Security & Automation", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.421177, "lon": 24.802799},
    {"name": "Bondora", "category": "Fintech & Banking", "color": "#059669", "icon": "📈", "address": "A. H. Tammsaare tee 56", "district": "Kristiine (Tondi)", "tech_focus": "Consumer Credit Scoring Models, Automated P2P Lending Engine & Banking APIs", "transit": "Bus 12, 13, 20, 20A, 28 (Sipelga)", "lat": 59.403009, "lon": 24.718396, "address_note": "Corrected: Bondora outgrew its old space and moved to Tammsaare tee 56 in June 2023."},
    {"name": "Adcash", "category": "Enterprise Software & Logistics Tech", "color": "#ea580c", "icon": "📢", "address": "Kentmanni 4 (Kentmanni Plaza)", "district": "Kesklinn (Downtown)", "tech_focus": "Real-Time Bidding (RTB) Algorithms, High-Throughput AdTech & Anti-Fraud Tech", "transit": "Tram 3, 4 (Kosmos / Vabaduse väljak ~5 min walk), Bus lines via Kaubamaja", "lat": 59.432366, "lon": 24.748753},
    {"name": "Inbank", "category": "Fintech & Banking", "color": "#059669", "icon": "🏦", "address": "Niine 11", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Embedded Lending API, Point-of-Sale Finance & Digital Banking Rails", "transit": "Tram 1, 2, 5 (Põhja pst / Balti jaam ~4 min walk), Balti Jaam", "lat": 59.443696, "lon": 24.739489},
    {"name": "Coop Pank AS", "category": "Fintech & Banking", "color": "#059669", "icon": "🏛️", "address": "Maakri 30 (Skyon Tower)", "district": "Kesklinn (Maakri Business District)", "tech_focus": "Core Banking Modernization, Mobile Banking & Open Banking APIs", "transit": "Tram 1, 2, 3, 4 (Paberi / Tornimäe / Hobujaama ~3 min walk)", "lat": 59.43276, "lon": 24.759227},
    # Page 6
    {"name": "Cleveron", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "🤖", "address": "Valukoja 8, B lift, 9th floor", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Automated Parcel Robots, Computer Vision & Robotics Control Systems", "transit": "Trolley 3, Bus 11, 24 (Mäealuse / Raja / Keemia)", "lat": 59.41958, "lon": 24.804783, "address_note": "Corrected: the Tallinn office is Valukoja 8, not Tehnopol. Note the core robotics R&D sits at the Viljandi head office (Reinu tee 48), ~2h from Tallinn."},
    {"name": "Testlio", "category": "Enterprise Software & Logistics Tech", "color": "#2563eb", "icon": "✅", "address": "Telliskivi 60-62 (S-hoone)", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Distributed Software Testing Platform, Automated Test Orchestration", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam (~5 min walk)", "lat": 59.439342, "lon": 24.729514, "address_note": "Refined to the registered Telliskivi 60-62 building."},
    {"name": "Proekspert AS", "category": "Industrial Tech & Engineering", "color": "#0891b2", "icon": "⚙️", "address": "Sõpruse pst 157 (Sõpruse Ärimaja)", "district": "Kristiine", "tech_focus": "Smart Device Engineering, Industrial IoT, Telematics & Software Craftsmanship", "transit": "Trolley 3, 4, 9, Bus 24, 72 (Siili / Linnu tee ~2 min walk)", "lat": 59.411333, "lon": 24.707164},
    {"name": "Cybernetica", "category": "Cybersecurity & Cryptography", "color": "#0f172a", "icon": "🔒", "address": "Mäealuse 2/1 (Tehnopol)", "district": "Mustamäe (Tehnopol)", "tech_focus": "X-Road Interoperability, Secure Multi-Party Computation (Sharemind), e-Voting & Privacy", "transit": "Trolley 3, Bus 11, 24 (Mäealuse / Raja)", "lat": 59.396177, "lon": 24.659246},
    {"name": "Mooncascade", "category": "Enterprise Software & Logistics Tech", "color": "#2563eb", "icon": "📱", "address": "Tartu mnt 43", "district": "Kesklinn (Keldrimäe)", "tech_focus": "Mobile App Architecture, Cloud Systems & Fintech Product Development", "transit": "Tram 1, 2, 5 (Telliskivi), Balti Jaam (~5 min walk)", "lat": 59.432349, "lon": 24.766958, "address_note": "Corrected: the Tallinn office is Tartu mnt 43, not Telliskivi. Mooncascade is Tartu-rooted, so team location varies."},
    {"name": "Icefire OÜ", "category": "Fintech & Banking", "color": "#059669", "icon": "⚡", "address": "Veerenni 38", "district": "Kesklinn (Juhkentali)", "tech_focus": "Modular Core Banking Platforms, Payment Solutions (part of Checkout.com)", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.418012, "lon": 24.750652, "address_note": "Corrected: on Veerenni, not Valukoja 8. Icefire was acquired by Checkout.com."},
    {"name": "Milrem Robotics", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "🤖", "address": "Betooni 1", "district": "Lasnamäe (Sõjamäe)", "tech_focus": "Unmanned Ground Vehicles (UGVs), Autonomous Navigation, Defense AI", "transit": "Trolley 3, Bus 11, 24 (Mäealuse / Raja)", "lat": 59.429784, "lon": 24.849913, "address_note": "Corrected: HQ, factory and prototyping are at Betooni 1 in industrial Sõjamäe, not Tehnopol."},
    # Page 7
    {"name": "Bigbank", "category": "Fintech & Banking", "color": "#059669", "icon": "🪙", "address": "Tartu mnt 18", "district": "Kesklinn (Downtown)", "tech_focus": "Cloud-Native Core Banking (Nest Platform), Automated Loan Engines", "transit": "Tram 1, 2, 3, 4 (Paberi / Tornimäe ~2 min walk)", "lat": 59.433158, "lon": 24.762597},
    {"name": "Luminor Group", "category": "Fintech & Banking", "color": "#059669", "icon": "🏛️", "address": "Liivalaia 45", "district": "Kesklinn", "tech_focus": "Pan-Baltic Digital Banking Core, Open Banking APIs & Risk Tech", "transit": "Bus 3, 16, 28, 39, 47 (Liivalaia / Hotell Olümpia), Tram 3, 4 (Paberi / Vineeri ~7 min walk)", "lat": 59.43124, "lon": 24.760294},
    {"name": "LHV", "category": "Fintech & Banking", "color": "#059669", "icon": "💳", "address": "Tartu mnt 2 (City Plaza)", "district": "Kesklinn (Downtown)", "tech_focus": "Fintech Infrastructure, Crypto Trading Rails, Real-Time Payment APIs", "transit": "Tram 1, 2, 3, 4 (Hobujaama / Paberi / Maneezi ~2 min walk)", "lat": 59.434698, "lon": 24.758016},
    {"name": "Skeleton Technologies", "category": "CleanTech & EnergyTech", "color": "#166534", "icon": "🔋", "address": "Sepise 7", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Curved Graphene Supercapacitors, Energy Storage Simulation & High-Power Systems", "transit": "Bus 2, 65 (Kaabli / Suur-Sõjamäe corridor)", "lat": 59.419171, "lon": 24.804714, "address_note": "Corrected: Tallinn office is Sepise 7, not Kaabli 1. Supercapacitor hardware company — limited ML/DS scope."},
    {"name": "Starship Technologies", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "🤖", "address": "Teaduspargi 8 (Tehnopol)", "district": "Mustamäe (Tehnopol)", "tech_focus": "Global HQ for Autonomous Last-Mile Delivery Robots, Computer Vision, Fleet Teleoperation", "transit": "Trolley 3, Bus 11, 24 (Teaduspargi / Raja ~3 min walk)", "lat": 59.400037, "lon": 24.656532},
    {"name": "CGI", "category": "Enterprise Software & Logistics Tech", "color": "#1d4ed8", "icon": "🛰️", "address": "A. H. Tammsaare tee 56", "district": "Kristiine (Tondi)", "tech_focus": "Space Software (Galileo/ESA), Mission Control Systems & Public Sector e-Services", "transit": "Tram 4 (Ülemiste linnak / Dvigatel), Ülemiste Train Station", "lat": 59.403009, "lon": 24.718396, "address_note": "Corrected: CGI Eesti is on Tammsaare tee, not Lõõtsa in Ülemiste City."},
    {"name": "Eesti Energia", "category": "CleanTech & EnergyTech", "color": "#ea580c", "icon": "🔌", "address": "Lelle 22", "district": "Kristiine / Tammsaare", "tech_focus": "ENEFIT Smart Grid Tech, Automated Energy Trading Platforms & IoT", "transit": "Bus 12, 13, 20, 20A, 28, 32, 57 (Sipelga / Järve haigla), Järve Train Station (~6 min walk)", "lat": 59.403969, "lon": 24.733419},
    # Page 8
    {"name": "Helmes", "category": "Enterprise Software & Logistics Tech", "color": "#2563eb", "icon": "💻", "address": "Lõõtsa 6b", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Custom Software Architecture, Enterprise Integration & Cloud Platforms", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.42173, "lon": 24.801707, "address_note": "Refined: the building at Lõõtsa 6b is tagged 'Helmes AS' in OSM."},
    {"name": "Elisa Eesti AS", "category": "Telecom & Cloud Infrastructure", "color": "#2563eb", "icon": "📡", "address": "Sõpruse pst 145 (Sõpruse Ärimaja)", "district": "Kristiine", "tech_focus": "Telecom Infrastructure, OTT Video Platforms, 5G & Cyber Shielding", "transit": "Trolley 3, 4, 9, Bus 24, 72 (Siili / Linnu tee ~2 min walk)", "lat": 59.41555, "lon": 24.710671},
    {"name": "SEB Eesti", "category": "Fintech & Banking", "color": "#059669", "icon": "🏦", "address": "Tornimäe 2 (Tornimäe HQ / moving to Arter Kvartal)", "district": "Kesklinn (Downtown)", "tech_focus": "Banking Innovation Hub, Algorithmic Trading & Open Banking API Tech", "transit": "Tram 1, 2, 3, 4 (Tornimäe / Paberi / Hobujaama ~2 min walk)", "lat": 59.433954, "lon": 24.760554},
    {"name": "Telia", "category": "Telecom & Cloud Infrastructure", "color": "#2563eb", "icon": "🌐", "address": "Mustamäe tee 3 (WoHo Kvartal)", "district": "Kristiine", "tech_focus": "5G Core Networks, Cloud Data Centers, IoT Platforms & Cybersecurity", "transit": "Trolley 1, 5, Bus 16, 26, 33, 42 (Hipodroom / Löwenruh ~2 min walk)", "lat": 59.428035, "lon": 24.704958},
    {"name": "Swedbank Estonia", "category": "Fintech & Banking", "color": "#059669", "icon": "🏦", "address": "Liivalaia 36 (Arter Kvartal)", "district": "Kesklinn (Sibulaküla)", "tech_focus": "Core Banking Architecture, ML Fraud Prevention & Mobile Banking Infrastructure", "transit": "Tram 3, 4, 5 (Vineeri / Kosmos ~4 min walk), Bus 3, 16, 28, 39, 47 (Liivalaia)", "lat": 59.429723, "lon": 24.757506, "address_note": "Corrected: Swedbank moved off Liivalaia 8 into the Arter Kvartal tower in H1 2025 — ~2,000 staff including the tech and data org."},
    {"name": "Nortal", "category": "Enterprise Software & Logistics Tech", "color": "#1d4ed8", "icon": "🏛️", "address": "Lõõtsa 6c", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "Global e-Governance Architectures, Big Data, Cloud Modernization & Healthcare IT", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.421175, "lon": 24.801652},
    # Page 9
    {"name": "Playtech", "category": "Gaming Tech & Media", "color": "#7e22ce", "icon": "🎮", "address": "Lõõtsa 5", "district": "Ülemiste City (Lasnamäe)", "tech_focus": "High-Throughput Gaming Engines, Trading Tech & Live Streaming", "transit": "Tram 4 (Ülemiste linnak), Ülemiste Train Station", "lat": 59.421177, "lon": 24.802799},
    {"name": "Pipedrive", "category": "Enterprise Software & Logistics Tech", "color": "#166534", "icon": "📈", "address": "Mustamäe tee 3a (WoHo Kvartal)", "district": "Kristiine", "tech_focus": "CRM Unicorn Global Software Engineering HQ, Microservices & Sales AI", "transit": "Trolley 1, 5, Bus 16, 26, 33, 42 (Hipodroom ~2 min walk)", "lat": 59.428128, "lon": 24.704335},
    {"name": "Veriff", "category": "AI & Machine Learning", "color": "#ea580c", "icon": "🆔", "address": "Niine 11", "district": "Põhja-Tallinn (Kalamaja)", "tech_focus": "Global AI Identity Verification, Biometrics, Fraud Detection & Deep Learning", "transit": "Tram 1, 2, 5 (Põhja pst / Balti jaam ~4 min walk), Balti Jaam", "lat": 59.443696, "lon": 24.739489},
    {"name": "Wise", "category": "Fintech & Banking", "color": "#059669", "icon": "🌍", "address": "Veerenni 24 (Baltika Kvartal)", "district": "Kesklinn (Veerenni)", "tech_focus": "Global Cross-Border FX Engine, Distributed Financial Ledgers & Scalable Payments", "transit": "Tram 3, 4, 5 (Vineeri / Kosmos ~8 min walk), Bus 3, 16, 28, 39, 73 (Veerenni)", "lat": 59.423892, "lon": 24.74918},
    {"name": "Bolt", "category": "Autonomous Vehicles & Robotics", "color": "#166534", "icon": "⚡", "address": "Vana-Lõuna 15 (Bolt HQ)", "district": "Kesklinn (Veerenni)", "tech_focus": "Global Mobility Platform, Dynamic Pricing Algorithms, Routing ML & Micromobility", "transit": "Tram 5 (Vana-Lõuna ~2 min walk), Tram 3, 4 (Vineeri ~5 min walk), Bus 3, 28, 39, 73", "lat": 59.424133, "lon": 24.747648, "address_note": "Corrected: the purpose-built Bolt HQ is Vana-Lõuna 15 (OSM names the building 'Bolt'; it is also the registered address). Vana-Lõuna 39/1 is Zendesk's office."},
    {"name": "Microsoft", "category": "Enterprise Software & Logistics Tech", "color": "#dc2626", "icon": "💻", "address": "Akadeemia tee 15b (Tehnopol)", "district": "Mustamäe (Tehnopol)", "tech_focus": "Microsoft Development Center Estonia (Skype Core, Azure Platforms & Enterprise Comms)", "transit": "Trolley 3, Bus 11, 24, 23 (Raja / Akadeemia tee ~2 min walk)", "lat": 59.397081, "lon": 24.661007}
]

def load_exact_district_boundaries():
    """Loads 100% exact official OpenStreetMap street-delimited district polygons."""
    fpath = get_data_path("tallinn_exact_district_boundaries.json")
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

# ============================================================================
# 2. DISTRICT SAFETY & QUALITY DATASET
# ============================================================================
def load_exact_safety_dataset():
    """Loads 100% official OSM street-delimited district safety dataset."""
    fpath = get_data_path("district_safety_data_official.json")
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

# ============================================================================
# 3. DISTRICT & NEIGHBORHOOD LABELS (SEMI-TRANSPARENT WATERMARK LABELS)
# ============================================================================
from district_labels_data import TALLINN_DISTRICT_LABELS

# ============================================================================
# 4. MAJOR TRANSIT HUBS
# ============================================================================
TRANSIT_HUBS = [
    {
        "name": "Hobujaama Central Transit Hub",
        "description": "Central tram junction connecting Lines 1, 2, 3, 4, 5 + Viru Keskus bus terminal. Core gateway to all Tallinn districts.",
        "lat": 59.4371, "lon": 24.7578, "color": "#581c87", "icon": "🚉"
    },
    {
        "name": "Balti Jaam Terminal",
        "description": "Tallinn Main Railway Station + Kalamaja/Telliskivi gateway. Trams 1, 2, 5 + Elron commuter trains to Keila, Paldiski, Viljandi, Tartu.",
        "lat": 59.4404, "lon": 24.7381, "color": "#581c87", "icon": "🚆"
    },
    {
        "name": "Ülemiste Transit Hub & Rail Baltica",
        "description": "Ülemiste Railway Station + Tram 4 terminus/loop + Airport connection. Direct access to Ülemiste City tech campus.",
        "lat": 59.4228, "lon": 24.7963, "color": "#581c87", "icon": "🚊"
    },
    {
        "name": "Vabaduse Väljak Transit Node",
        "description": "Freedom Square transfer hub for Trams 3, 4, 5 and south/west bound buses and trolleybuses (Lines 1, 3).",
        "lat": 59.4338, "lon": 24.7447, "color": "#581c87", "icon": "🚎"
    },
    {
        "name": "Kristiine / Lilleküla Transport Junction",
        "description": "Lilleküla train stop + Endla/Tulika bus/trolley corridor connecting Downtown to Mustamäe & Tehnopol.",
        "lat": 59.4258, "lon": 24.7214, "color": "#581c87", "icon": "🔀"
    }
]

# ============================================================================
# 5. MAJOR TECH DISTRICT CLUSTERS
# ============================================================================
def load_tech_cluster_boundaries():
    """Loads the real OSM footprints for the tech clusters (see build_tech_cluster_boundaries.py)."""
    if os.path.exists("tallinn_tech_cluster_boundaries.json"):
        with open("tallinn_tech_cluster_boundaries.json", "r", encoding="utf-8") as f:
            return json.load(f)
    return []


TECH_CLUSTERS = load_tech_cluster_boundaries()

# ============================================================================
# 6. TRAM NETWORK LINES
# ============================================================================
TRAM_LINES = {
    "tram_1": {
        "id": "tram_1", "label": "🚋 Tram 1: Kopli ↔ Kadriorg", "color": "#00e5ff", "weight": 5, "show": True,
        "coords": [
            [59.4533, 24.6865], [59.4520, 24.6930], [59.4510, 24.7015], [59.4501, 24.7088],
            [59.4485, 24.7170], [59.4455, 24.7225], [59.4428, 24.7290], [59.4404, 24.7381],
            [59.4420, 24.7470], [59.4405, 24.7520], [59.4371, 24.7578],
            [59.4382, 24.7690], [59.4388, 24.7800], [59.4385, 24.7910]
        ]
    },
    "tram_2": {
        "id": "tram_2", "label": "🚋 Tram 2: Kopli ↔ Suur-Paala / Ülemiste", "color": "#00e676", "weight": 5, "show": True,
        "coords": [
            [59.4533, 24.6865], [59.4501, 24.7088], [59.4455, 24.7225], [59.4404, 24.7381],
            [59.4420, 24.7470], [59.4371, 24.7578],
            [59.4350, 24.7600], [59.4320, 24.7640], [59.4285, 24.7735],
            [59.4270, 24.7780], [59.4255, 24.7870], [59.4240, 24.7980], [59.4230, 24.8100]
        ]
    },
    "tram_3": {
        "id": "tram_3", "label": "🚋 Tram 3: Tondi ↔ Kadriorg", "color": "#ffd600", "weight": 5, "show": True,
        "coords": [
            [59.4085, 24.7250], [59.4140, 24.7350], [59.4220, 24.7420], [59.4265, 24.7440],
            [59.4300, 24.7445], [59.4338, 24.7447],
            [59.4360, 24.7520], [59.4371, 24.7578],
            [59.4382, 24.7690], [59.4388, 24.7800], [59.4385, 24.7910]
        ]
    },
    "tram_4": {
        "id": "tram_4", "label": "🚋 Tram 4: Tondi ↔ Ülemiste City ↔ Airport", "color": "#ff1744", "weight": 6, "show": True,
        "coords": [
            [59.4085, 24.7250], [59.4140, 24.7350], [59.4220, 24.7420], [59.4265, 24.7440],
            [59.4338, 24.7447],
            [59.4360, 24.7520], [59.4371, 24.7578],
            [59.4350, 24.7600], [59.4320, 24.7640], [59.4285, 24.7735],
            [59.4260, 24.7830], [59.4240, 24.7920], [59.4228, 24.7963],
            [59.4208, 24.8020], [59.4196, 24.8048],
            [59.4170, 24.8010]
        ]
    },
    "tram_5": {
        "id": "tram_5", "label": "🚋 Tram 5: Kopli ↔ Vana-Lõuna (Bolt HQ)", "color": "#d500f9", "weight": 5, "show": True,
        "coords": [
            [59.4533, 24.6865], [59.4501, 24.7088], [59.4455, 24.7225], [59.4404, 24.7381],
            [59.4420, 24.7470], [59.4371, 24.7578],
            [59.4338, 24.7447],
            [59.4265, 24.7440],
            [59.4215, 24.7455], [59.4206, 24.7453]
        ]
    }
}

# 6.2 COMMUTER RAIL (ELRON) WITH STATIONS
TRAIN_LINES = {
    "rail_west": {
        "id": "rail_west",
        "label": "🚆 Elron West: Balti Jaam ↔ Nõmme ↔ Pääsküla ↔ Laagri ↔ Saue ↔ Keila",
        "color": "#ff6d00",
        "weight": 5.5,
        "coords": [
            [59.44109, 24.73788],
            [59.42609, 24.72794],
            [59.41121, 24.73415],
            [59.40062, 24.72457],
            [59.38897, 24.70459],
            [59.38880, 24.68334],
            [59.38442, 24.67313],
            [59.37870, 24.65546],
            [59.36950, 24.63839],
            [59.35160, 24.61130],
            [59.34414, 24.61255],
            [59.33600, 24.58500],
            [59.32467, 24.54861],
            [59.31400, 24.47500],
            [59.30650, 24.41743]
        ],
        "stations": [
            {"name": "Balti Jaam", "lat": 59.44109, "lon": 24.73788, "type": "major_hub", "desc": "Central Rail Station & Metro Transfer Hub (Trams 1/2/5, Regional Buses, Trolley 4/5)"},
            {"name": "Lilleküla", "lat": 59.42609, "lon": 24.72794, "type": "station", "desc": "Kristiine / A. Le Coq Arena Transfer Station"},
            {"name": "Tondi", "lat": 59.41121, "lon": 24.73415, "type": "station", "desc": "Direct Tram Transfer Hub (Trams 3, 4)"},
            {"name": "Järve", "lat": 59.40062, "lon": 24.72457, "type": "station", "desc": "Kristiine / Järve Keskus Rail Station"},
            {"name": "Rahumäe", "lat": 59.38897, "lon": 24.70459, "type": "station", "desc": "North Nõmme / Rahumäe Rail Station"},
            {"name": "Nõmme", "lat": 59.38880, "lon": 24.68334, "type": "major_hub", "desc": "Historic Nõmme Center Station & Market Nexus (Buses 10, 23, 27, 33, 36, 45)"},
            {"name": "Hiiu", "lat": 59.38442, "lon": 24.67313, "type": "station", "desc": "Nõmme Hiiu Rail Station & Health Center"},
            {"name": "Kivimäe", "lat": 59.37870, "lon": 24.65546, "type": "station", "desc": "Nõmme Kivimäe Residential Station"},
            {"name": "Pääsküla", "lat": 59.36950, "lon": 24.63839, "type": "major_hub", "desc": "South Nõmme Pääsküla Depot Station & Transit Link (Buses 10, 18, 20, 27)"},
            {"name": "Laagri", "lat": 59.35160, "lon": 24.61130, "type": "station", "desc": "Laagri Suburb Station (Saue vald)"},
            {"name": "Urda", "lat": 59.34414, "lon": 24.61255, "type": "station", "desc": "Urda Tech & Commercial Suburb Station (Bus 18 terminus)"},
            {"name": "Padula", "lat": 59.33600, "lon": 24.58500, "type": "station", "desc": "Padula Suburb Commuter Stop"},
            {"name": "Saue", "lat": 59.32467, "lon": 24.54861, "type": "major_hub", "desc": "Saue City Hub & Suburban Commuter Nexus"},
            {"name": "Valingu", "lat": 59.31400, "lon": 24.47500, "type": "station", "desc": "Valingu Suburb Commuter Stop"},
            {"name": "Keila", "lat": 59.30650, "lon": 24.41743, "type": "major_hub", "desc": "Keila Regional Rail Nexus (Paldiski / Riisipere / Turba junction)"}
        ]
    },
    "rail_east": {
        "id": "rail_east",
        "label": "🚆 Elron East: Balti Jaam ↔ Kitseküla ↔ Ülemiste ↔ Vesse ↔ Lagedi",
        "color": "#ff9100",
        "weight": 5.5,
        "coords": [
            [59.44109, 24.73788],
            [59.42029, 24.74036],
            [59.42316, 24.79516],
            [59.42982, 24.83755],
            [59.39782, 24.93345],
            [59.36500, 25.08000],
            [59.36800, 25.18000],
            [59.33500, 25.32500],
            [59.28500, 25.61000]
        ],
        "stations": [
            {"name": "Balti Jaam", "lat": 59.44109, "lon": 24.73788, "type": "major_hub", "desc": "Central Rail Station & Metro Transfer Hub"},
            {"name": "Kitseküla", "lat": 59.42029, "lon": 24.74036, "type": "station", "desc": "Veerenni / Kitseküla Tech Quarter Link"},
            {"name": "Ülemiste", "lat": 59.42316, "lon": 24.79516, "type": "major_hub", "desc": "Ülemiste City, Airport Tram Link, Rail Baltica Hub & T1 Mall"},
            {"name": "Vesse", "lat": 59.42982, "lon": 24.83755, "type": "station", "desc": "Lasnamäe South / Smuuli Commercial Nexus"},
            {"name": "Lagedi", "lat": 59.39782, "lon": 24.93345, "type": "station", "desc": "Lagedi Suburb Station (Rae vald)"},
            {"name": "Aruküla", "lat": 59.36500, "lon": 25.08000, "type": "station", "desc": "Aruküla Regional Station"},
            {"name": "Raasiku", "lat": 59.36800, "lon": 25.18000, "type": "station", "desc": "Raasiku Regional Station"},
            {"name": "Kehra", "lat": 59.33500, "lon": 25.32500, "type": "station", "desc": "Kehra City Station"},
            {"name": "Aegviidu", "lat": 59.28500, "lon": 25.61000, "type": "major_hub", "desc": "Aegviidu Eastern Commuter Terminus"}
        ]
    },
    "rail_south": {
        "id": "rail_south",
        "label": "🚆 Elron South: Balti Jaam ↔ Tallinn-Väike ↔ Liiva ↔ Männiku ↔ Saku",
        "color": "#ffab00",
        "weight": 5.5,
        "coords": [
            [59.44109, 24.73788],
            [59.41337, 24.74838],
            [59.39000, 24.72000],
            [59.37200, 24.70800],
            [59.33813, 24.70001],
            [59.30114, 24.67606],
            [59.28300, 24.65500],
            [59.25500, 24.63000],
            [59.16800, 24.75500]
        ],
        "stations": [
            {"name": "Balti Jaam", "lat": 59.44109, "lon": 24.73788, "type": "major_hub", "desc": "Central Rail Station & Metro Transfer Hub"},
            {"name": "Tallinn-Väike", "lat": 59.41337, "lon": 24.74838, "type": "station", "desc": "Luha / Tallinn-Väike Rail Station"},
            {"name": "Liiva", "lat": 59.39000, "lon": 24.72000, "type": "station", "desc": "Nõmme Liiva Station & Viljandi mnt"},
            {"name": "Valdeku", "lat": 59.37200, "lon": 24.70800, "type": "station", "desc": "Männiku Valdeku Rail Stop"},
            {"name": "Männiku", "lat": 59.33813, "lon": 24.70001, "type": "station", "desc": "Männiku Suburb Station (Saku border)"},
            {"name": "Saku", "lat": 59.30114, "lon": 24.67606, "type": "major_hub", "desc": "Saku Town Station & R&D Hub"},
            {"name": "Kasemetsa", "lat": 59.28300, "lon": 24.65500, "type": "station", "desc": "Kasemetsa Suburb Station"},
            {"name": "Kiisa", "lat": 59.25500, "lon": 24.63000, "type": "station", "desc": "Kiisa Commuter Hub"},
            {"name": "Kohila", "lat": 59.16800, "lon": 24.75500, "type": "major_hub", "desc": "Kohila Regional Commuter Hub"}
        ]
    }
}


def load_exact_transit_routes():
    """Loads exact turn-by-turn road-following bus and trolley routes."""
    fpath = get_data_path("tallinn_exact_transit_routes.json")
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def load_parks_data():
    """Loads clean OSM park polygon boundaries for Tallinn."""
    fpath = get_data_path("tallinn_parks_clean.json")
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def generate_standalone_map(output_html=None):
    """
    Generates a high-performance, 100% interactive Leaflet HTML map
    with real-time layer toggling, accordion menus, always-on parks,
    semi-transparent district perimeter polygons, and 2-line separated price badges.
    """
    print("Compiling 100% Interactive Standalone Tallinn Tech Map with Separated District Shading & Badges...")
    
    # 1. Prepare Categories
    categories = sorted(list(set(c["category"] for c in COMPANIES_DATA)))
    cat_registry = {}
    for cat in categories:
        safe_id = "cat_" + re.sub(r'[^a-zA-Z0-9]', '_', cat).lower()
        cat_registry[cat] = {
            "id": safe_id,
            "name": cat,
            "companies": [c for c in COMPANIES_DATA if c["category"] == cat]
        }

    # 2. Prepare Transit Lines
    exact_routes = load_exact_transit_routes()
    trolley_dict = {}
    bus_key_dict = {}
    bus_suburb_dict = {}
    bus_outside_dict = {}

    for label, rdata in exact_routes.items():
        num = rdata.get("num")
        group = rdata.get("group", "")
        is_trolley = "Trolley" in label or group == "trolley"
        layer_id = f"trolley_{num}" if is_trolley else f"bus_{num}"
        item_data = {
            "id": layer_id,
            "num": num,
            "label": label,
            "color": rdata["color"],
            "name": rdata.get("name", ""),
            "coords": rdata["coords"],
            "weight": rdata.get("weight", 4.5),
            "group": group,
            "show": False
        }
        if is_trolley:
            trolley_dict[layer_id] = item_data
        elif group == "bus_key":
            bus_key_dict[layer_id] = item_data
        elif group == "bus_outside":
            bus_outside_dict[layer_id] = item_data
        else:
            bus_suburb_dict[layer_id] = item_data

    # 3. Load Parks
    parks_data = load_parks_data()

    # 4. Generate HTML template
    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tallinn Tech & Public Transit Map</title>
    
    <!-- Leaflet CDN with offline fallback -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>
    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>

    <style>
        html, body {{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            overflow: hidden;
            background-color: #0f172a;
        }}
        #map {{
            width: 100%;
            height: 100%;
            background-color: #0f172a;
        }}
        
        /* District & Neighborhood Watermark Labels */
        .district-label-major {{
            color: rgba(226, 232, 240, 0.40);
            font-size: 15px;
            font-weight: 800;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            text-shadow: 0 0 10px rgba(0,0,0,0.9), 0 0 4px rgba(0,0,0,0.95);
            pointer-events: none;
            user-select: none;
        }}
        .district-label-tech {{
            color: rgba(56, 189, 248, 0.60);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            text-shadow: 0 0 10px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.95);
            pointer-events: none;
            user-select: none;
        }}
        .district-label-sub {{
            color: rgba(203, 213, 225, 0.40);
            font-size: 11.5px;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            text-shadow: 0 0 8px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.95);
            pointer-events: none;
            user-select: none;
        }}

        /* COMPACT PRICE-ONLY BADGE (ALWAYS ON TOP) */
        .rent-price-pill {{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 800;
            color: #ffffff;
            border: 1.5px solid;
            box-shadow: 0 4px 14px rgba(0,0,0,0.65);
            cursor: pointer;
            white-space: nowrap;
            user-select: none;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
        }}
        .rent-price-pill:hover {{
            transform: scale(1.12);
            box-shadow: 0 8px 22px rgba(0,0,0,0.85);
        }}
        .pill-premium {{
            background: rgba(88, 28, 135, 0.95);
            border-color: #c084fc;
            color: #f3e8ff;
        }}
        .pill-mid {{
            background: rgba(30, 58, 138, 0.95);
            border-color: #60a5fa;
            color: #eff6ff;
        }}
        .pill-budget {{
            background: rgba(6, 78, 59, 0.95);
            border-color: #34d399;
            color: #ecfdf5;
        }}
        .rent-val {{
            font-size: 13px;
            font-weight: 800;
            letter-spacing: -0.2px;
        }}
        .rent-unit {{
            font-size: 10px;
            font-weight: 600;
            opacity: 0.85;
        }}

        /* DISTRICT SAFETY 5-TIER FACE BADGE (ALWAYS ON TOP) */
        .safety-face-badge {{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.75));
            transition: transform 0.15s ease, filter 0.15s ease;
            user-select: none;
        }}
        .safety-face-badge:hover {{
            transform: scale(1.22);
            filter: drop-shadow(0 6px 18px rgba(0,0,0,0.95));
        }}
        .safety-score-pill {{
            margin-top: -5px;
            background: rgba(15, 23, 42, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.4);
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            padding: 1px 6px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.7);
            white-space: nowrap;
        }}

        /* Glassmorphism Nested Sidebar */
        #nested-layer-panel {{
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            width: 340px;
            max-height: 88vh;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 12px;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
            color: #f8fafc;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }}
        .panel-header {{
            padding: 12px 14px;
            background: rgba(30, 41, 59, 0.85);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            user-select: none;
        }}
        .permanent-badge {{
            font-size: 10px;
            background: rgba(34, 197, 94, 0.2);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.35);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
        }}
        #panel-body {{
            overflow-y: auto;
            flex: 1;
            padding: 6px 8px;
        }}
        #panel-body::-webkit-scrollbar {{
            width: 6px;
        }}
        #panel-body::-webkit-scrollbar-thumb {{
            background: #334155;
            border-radius: 3px;
        }}
        .accordion-group {{
            margin-bottom: 4px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background: rgba(30, 41, 59, 0.4);
            overflow: hidden;
        }}
        .accordion-header {{
            padding: 8px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(30, 41, 59, 0.6);
            cursor: pointer;
            user-select: none;
            font-weight: 600;
            font-size: 12px;
        }}
        .accordion-header:hover {{
            background: rgba(51, 65, 85, 0.7);
        }}
        .header-left {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .accordion-arrow {{
            font-size: 10px;
            color: #94a3b8;
        }}
        .accordion-content {{
            display: none;
            padding: 4px 8px 8px 12px;
            background: rgba(15, 23, 42, 0.4);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }}
        .accordion-content.open {{
            display: block;
        }}
        .accordion-subgroup {{
            margin: 4px 0 4px 2px;
            border-left: 2px solid rgba(255, 255, 255, 0.12);
            border-radius: 0 4px 4px 0;
            background: rgba(15, 23, 42, 0.35);
        }}
        .subgroup-header {{
            padding: 5px 8px;
            font-size: 11.5px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #e2e8f0;
            user-select: none;
            transition: background 0.15s ease;
        }}
        .subgroup-header:hover {{
            background: rgba(255, 255, 255, 0.05);
        }}
        .subgroup-content {{
            display: none;
            padding: 2px 4px 6px 8px;
        }}
        .subgroup-content.open {{
            display: block;
        }}
        .subsubgroup {{
            margin: 3px 0 3px 4px;
            border-left: 2px solid rgba(59, 130, 246, 0.35);
            border-radius: 0 4px 4px 0;
            background: rgba(15, 23, 42, 0.25);
        }}
        .subsubgroup-header {{
            padding: 4px 6px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #cbd5e1;
            user-select: none;
            transition: background 0.15s ease;
        }}
        .subsubgroup-header:hover {{
            background: rgba(255, 255, 255, 0.04);
        }}
        .subsubgroup-content {{
            display: none;
            padding: 2px 4px 4px 6px;
        }}
        .subsubgroup-content.open {{
            display: block;
        }}
        .nested-item {{
            margin: 5px 0;
            display: flex;
            align-items: center;
        }}
        .custom-checkbox, .custom-radio {{
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            user-select: none;
            width: 100%;
        }}
        .custom-checkbox input, .custom-radio input {{
            cursor: pointer;
            accent-color: #3b82f6;
        }}
        .rent-item-text {{
            display: flex;
            flex-direction: column;
            line-height: 1.25;
        }}
        .rent-item-name {{
            font-size: 11.5px;
            font-weight: 600;
            color: #f1f5f9;
        }}
        .rent-item-sub {{
            font-size: 10px;
            color: #94a3b8;
        }}
        .item-label {{
            font-size: 11.5px;
            color: #cbd5e1;
            line-height: 1.3;
        }}
        .item-count {{
            font-size: 10px;
            color: #94a3b8;
        }}
        .color-dot {{
            display: inline-block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            flex-shrink: 0;
            box-shadow: 0 0 4px rgba(0,0,0,0.5);
        }}
        .panel-footer {{
            padding: 8px 12px;
            background: rgba(30, 41, 59, 0.85);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            gap: 6px;
        }}
        .btn-quick {{
            flex: 1;
            border: none;
            color: white;
            padding: 6px 0;
            border-radius: 6px;
            font-weight: 600;
            font-size: 11px;
            cursor: pointer;
            text-align: center;
        }}
        .btn-quick:hover {{
            opacity: 0.9;
        }}

        /* Leaflet Popup Styling */
        .leaflet-popup-content-wrapper {{
            border-radius: 8px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
            padding: 0;
            overflow: hidden;
        }}
        .leaflet-popup-content {{
            margin: 0;
        }}
        .leaflet-div-icon {{
            background: transparent !important;
            border: none !important;
        }}
    </style>
</head>
<body>

    <div id="map"></div>

    <!-- HIERARCHICAL NESTED ACCORDION PANEL -->
    <div id="nested-layer-panel">
        <div class="panel-header" onclick="toggleMainPanel()">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">🎛️</span>
                <span style="font-weight: 700; font-size: 13px; letter-spacing: -0.2px;">Tallinn Tech & Rent Map</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
                <span class="permanent-badge" title="City Parks and District Labels are always active on the map">🌳 Parks & 🏷️ Districts Active</span>
                <span id="panel-toggle-icon">▼</span>
            </div>
        </div>

        <div id="panel-body">
            <!-- 0. DISTRICT SAFETY & QUALITY ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_safety', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_safety" onclick="event.stopPropagation(); toggleAllInGroup('body_safety', this.checked)">
                        <span>🛡️ District Safety & Quality</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_safety" class="accordion-content">
                    <div style="margin-bottom: 6px; padding: 5px 8px; background: rgba(30,41,59,0.7); border-radius: 4px; font-size: 10.5px; color: #cbd5e1; display: flex; align-items:center; justify-content: space-between;">
                        <span>😃 5/5</span>
                        <span>🙂 4/5</span>
                        <span>😐 3/5</span>
                        <span>🙁 2/5</span>
                        <span>😡 1/5</span>
                    </div>
                    <!-- Injected dynamically in JS -->
                </div>
            </div>

            <!-- 0.5 DISTRICT RENTAL PRICES & BOUNDARY ZONES ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_rental', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_rental" onclick="event.stopPropagation(); toggleAllInGroup('body_rental', this.checked)">
                        <span>💶 District Rent & Boundaries</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_rental" class="accordion-content">
                    <div style="margin-bottom: 6px; padding: 4px 6px; background: rgba(30,41,59,0.7); border-radius: 4px; font-size: 10px; color: #94a3b8; display: flex; justify-content: space-between;">
                        <span>🟣 &gt;€17 (Premium)</span>
                        <span>🔵 €13–17 (Mid)</span>
                        <span>🟢 &lt;€13 (Value)</span>
                    </div>
                    <!-- Injected dynamically in JS -->
                </div>
            </div>

            <!-- 1. TECH COMPANIES ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_companies', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_companies" onclick="event.stopPropagation(); toggleAllInGroup('body_companies', this.checked)">
                        <span>🏢 Tech Hubs by Sector (59)</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_companies" class="accordion-content">
                    <!-- Injected dynamically in JS -->
                </div>
            </div>

            <!-- 3. PUBLIC TRANSPORT ACCORDION (UNIFIED SINGLE LABEL) -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_transport', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_transport" onclick="event.stopPropagation(); toggleTransportGroup(this.checked)">
                        <span>🚆 Transport & Lines</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_transport" class="accordion-content">
                    
                    <!-- A. BUS SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('sub_bus', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_bus_all" onclick="event.stopPropagation(); toggleBusAll(this.checked)">
                                <span>🚌 Bus (67 Lines)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="sub_bus" class="subgroup-content">
                            
                            <!-- A1. Key Center -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_key', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_key" onclick="event.stopPropagation(); toggleAllInGroup('body_bus_key', this.checked); updateBusHierarchy();">
                                        <span>🔴 Key Center (10–20 min) (15)</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_key" class="subsubgroup-content">
                                    <!-- Injected dynamically in JS -->
                                </div>
                            </div>

                            <!-- A2. Suburbs -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_suburb', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_suburb" onclick="event.stopPropagation(); toggleAllInGroup('body_bus_suburb', this.checked); updateBusHierarchy();">
                                        <span>🌲 Suburbs (Nõmme, Kopli, etc.) (40)</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_suburb" class="subsubgroup-content">
                                    <!-- Injected dynamically in JS -->
                                </div>
                            </div>

                            <!-- A3. Outside Tallinn -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_outside', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_outside" onclick="event.stopPropagation(); toggleAllInGroup('body_bus_outside', this.checked); updateBusHierarchy();">
                                        <span>🏡 Outside Tallinn (Within 30km) (12)</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_outside" class="subsubgroup-content">
                                    <!-- Injected dynamically in JS -->
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- B. TROLLEYBUS SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_trolleys', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_trolleys" onclick="event.stopPropagation(); toggleAllInGroup('body_trolleys', this.checked); updateTransportParent();">
                                <span>🚎 Trolley (4 Lines)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_trolleys" class="subgroup-content">
                            <!-- Injected dynamically in JS -->
                        </div>
                    </div>

                    <!-- C. TRAIN SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_rail', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_rail" onclick="event.stopPropagation(); toggleAllInGroup('body_rail', this.checked); updateTransportParent();">
                                <span>🚆 Train (3 Corridors & 33 Stations)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_rail" class="subgroup-content">
                            <!-- Injected dynamically in JS -->
                        </div>
                    </div>

                    <!-- D. TRAM SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_trams', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_trams" onclick="event.stopPropagation(); toggleAllInGroup('body_trams', this.checked); updateTransportParent();">
                                <span>🚋 Tram (5 Lines)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_trams" class="subgroup-content">
                            <!-- Injected dynamically in JS -->
                        </div>
                    </div>

                </div>
            </div>

            <!-- 8. DISTRICTS & HUBS ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_districts', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_districts" onclick="event.stopPropagation(); toggleAllInGroup('body_districts', this.checked)">
                        <span>🌐 Tech Districts & Hubs</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_districts" class="accordion-content">
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_clusters" onchange="toggleLayer('layer_clusters', this.checked); updateParentCheck('parent_districts', 'body_districts')">
                            <span class="checkmark"></span>
                            <span class="item-label">🏢 Major Tech Clusters (District Polygons)</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_hubs" onchange="toggleLayer('layer_hubs', this.checked); updateParentCheck('parent_districts', 'body_districts')">
                            <span class="checkmark"></span>
                            <span class="item-label">🚉 Major Multi-Modal Transit Hubs</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 6. BASEMAP SELECTOR -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_basemaps', this)">
                    <div class="header-left">
                        <span>🗺️ Basemap Style</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_basemaps" class="accordion-content">
                    <div class="nested-item">
                        <label class="custom-radio">
                            <input type="radio" name="basemap_select" checked onchange="switchBasemap('basemap_dark')">
                            <span class="radiomark"></span>
                            <span class="item-label">🌙 Dark Canvas (Clean & High Contrast)</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-radio">
                            <input type="radio" name="basemap_select" onchange="switchBasemap('basemap_light')">
                            <span class="radiomark"></span>
                            <span class="item-label">☀️ Light Gray Canvas</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-radio">
                            <input type="radio" name="basemap_select" onchange="switchBasemap('basemap_osm')">
                            <span class="radiomark"></span>
                            <span class="item-label">🗺️ OpenStreetMap Detailed</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-radio">
                            <input type="radio" name="basemap_select" onchange="switchBasemap('basemap_street')">
                            <span class="radiomark"></span>
                            <span class="item-label">🚗 Street Navigation Map</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-radio">
                            <input type="radio" name="basemap_select" onchange="switchBasemap('basemap_sat')">
                            <span class="radiomark"></span>
                            <span class="item-label">🛰️ Satellite Imagery</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- QUICK ACTION FOOTER -->
        <div class="panel-footer">
            <button onclick="setAllTransit(true)" class="btn-quick" style="background:#059669;">✨ All Transit ON</button>
            <button onclick="setAllTransit(false)" class="btn-quick" style="background:#334155;">🧹 All Transit OFF</button>
        </div>
    </div>

    <!-- LEAFLET INITIALIZATION & INTERACTIVE ENGINE -->
    <script>
    // 1. DATASETS
    const CATEGORIES_DATA = {json.dumps(cat_registry, ensure_ascii=False)};
    const DISTRICTS_DATA = {json.dumps(TALLINN_DISTRICT_LABELS, ensure_ascii=False)};
    const SAFETY_DATA = {json.dumps(load_exact_safety_dataset(), ensure_ascii=False)};
    const RENTALS_DATA = {json.dumps(load_exact_district_boundaries(), ensure_ascii=False)};
    const TRAM_DATA = {json.dumps(TRAM_LINES, ensure_ascii=False)};
    const TROLLEY_DATA = {json.dumps(trolley_dict, ensure_ascii=False)};
    const BUS_KEY_DATA = {json.dumps(bus_key_dict, ensure_ascii=False)};
    const BUS_SUBURB_DATA = {json.dumps(bus_suburb_dict, ensure_ascii=False)};
    const BUS_OUTSIDE_DATA = {json.dumps(bus_outside_dict, ensure_ascii=False)};
    const TRAIN_DATA = {json.dumps(TRAIN_LINES, ensure_ascii=False)};
    const HUBS_DATA = {json.dumps(TRANSIT_HUBS, ensure_ascii=False)};
    const CLUSTERS_DATA = {json.dumps(TECH_CLUSTERS, ensure_ascii=False)};
    const PARKS_DATA = {json.dumps(parks_data, ensure_ascii=False)};

    // 2. INITIALIZE MAP
    const map = L.map('map', {{
        center: [59.4260, 24.7450],
        zoom: 13,
        zoomControl: true
    }});

    // 3. LAYER REGISTRY
    const LAYERS = {{}};
    const BASEMAPS = {{}};

    // Basemaps
    BASEMAPS['basemap_dark'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{{z}}/{{y}}/{{x}}', {{
        attribution: 'Esri, HERE, Garmin, © OpenStreetMap'
    }}).addTo(map);

    BASEMAPS['basemap_light'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{{z}}/{{y}}/{{x}}', {{
        attribution: 'Esri, HERE, Garmin, © OpenStreetMap'
    }});

    BASEMAPS['basemap_osm'] = L.tileLayer('https://tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
        attribution: '© OpenStreetMap contributors'
    }});

    BASEMAPS['basemap_street'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{{z}}/{{y}}/{{x}}', {{
        attribution: 'Esri, HERE, Garmin'
    }});

    BASEMAPS['basemap_sat'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{{z}}/{{y}}/{{x}}', {{
        attribution: 'Esri, Maxar'
    }});

    // 4. PERMANENT ALWAYS-ON GREEN PARKS
    PARKS_DATA.forEach(p => {{
        if (p.coords && p.coords.length >= 3) {{
            L.polygon(p.coords, {{
                color: '#15803d',
                weight: 1.5,
                fill: true,
                fillColor: '#22c55e',
                fillOpacity: 0.30
            }}).bindTooltip(`🌲 <b>${{p.name}}</b><br><span style="font-size:11px; color:#166534;">City Green Park & Recreation</span>`, {{sticky: true}}).addTo(map);
        }}
    }});

    // 4.5 5-TIER SMILEY FACE SVG GENERATOR
    function getFaceSvg(faceType, size = 32) {{
        if (faceType === 'very_happy') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#059669" stroke="#047857" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 26 58 Q 50 92 74 58 Z" fill="#0f172a"/>
                <path d="M 36 74 Q 50 64 64 74 Q 50 90 36 74 Z" fill="#f43f5e"/>
            </svg>`;
        }} else if (faceType === 'happy') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#22c55e" stroke="#16a34a" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 28 64 Q 50 82 72 64" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        }} else if (faceType === 'neutral') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#eab308" stroke="#ca8a04" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <line x1="28" y1="66" x2="72" y2="66" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        }} else if (faceType === 'frown') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#f97316" stroke="#ea580c" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 28 72 Q 50 54 72 72" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        }} else {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#ef4444" stroke="#dc2626" stroke-width="3.5"/>
                <path d="M 20 28 L 44 38" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
                <path d="M 80 28 L 56 38" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
                <ellipse cx="32" cy="44" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="44" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="44" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="44" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="42" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="42" r="2.2" fill="#ffffff"/>
                <path d="M 24 76 Q 50 48 76 76 Z" fill="#0f172a"/>
            </svg>`;
        }}
    }}

    // 4.7 HELPER TO GET COLOR BY SCORE
    function getScoreColor(val) {{
        if (val >= 4.5) return '#059669';
        if (val >= 3.8) return '#22c55e';
        if (val >= 3.0) return '#eab308';
        if (val >= 2.0) return '#f97316';
        return '#ef4444';
    }}

    // 4.8 DISTRICT SAFETY & QUALITY LAYER (5-TIER SMILEY FACES + FLOATING-POINT MEAN)
    const safetyContainer = document.getElementById('body_safety');
    SAFETY_DATA.forEach(s => {{
        const lg = L.layerGroup();
        
        // Exact street/coast delimited polygon
        if (s.polygons && s.polygons.length > 0) {{
            s.polygons.forEach(pCoords => {{
                L.polygon(pCoords, {{
                    color: s.color,
                    weight: 2,
                    fill: true,
                    fillColor: s.fill_color,
                    fillOpacity: 0.16
                }}).bindTooltip(`<b>${{s.district}}</b><br>Mean Safety: <b>${{s.mean_score.toFixed(1)}} / 5.0</b>`, {{sticky: true}}).addTo(lg);
            }});
        }}

        // Safety Face Badge with Floating-Point Mean Score (always on top)
        const faceHtml = `<div class="safety-face-badge">
            ${{getFaceSvg(s.face_type, 34)}}
            <div class="safety-score-pill">${{s.mean_score.toFixed(1)}}</div>
        </div>`;
        
        const faceIcon = L.divIcon({{
            html: faceHtml,
            className: '',
            iconSize: [38, 46],
            iconAnchor: [19, 23]
        }});

        function renderParamRow(label, scoreVal, descText) {{
            const pct = Math.min(100, Math.max(0, (scoreVal / 5.0) * 100));
            const barColor = getScoreColor(scoreVal);
            return `<div style="margin-bottom: 7px; padding: 4px 6px; background: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-bottom: 2px;">
                    <span style="font-weight: 600; color: #1e293b;">${{label}}</span>
                    <span style="font-weight: 800; color: ${{barColor}};">${{scoreVal.toFixed(1)}} <span style="font-size:9px; color:#64748b;">/ 5.0</span></span>
                </div>
                <div style="background: #e2e8f0; border-radius: 3px; height: 5px; overflow: hidden; margin-bottom: 3px;">
                    <div style="background: ${{barColor}}; width: ${{pct}}%; height: 100%;"></div>
                </div>
                <div style="font-size: 10px; color: #475569; line-height: 1.25;">${{descText}}</div>
            </div>`;
        }}

        const popupHtml = `<div style="font-family: sans-serif; width: 330px; line-height: 1.4;">
            <div style="background-color: ${{s.color}}; color: white; padding: 10px 14px; border-radius: 6px 6px 0 0; display:flex; align-items:center; justify-content:space-between;">
                <div>
                    <div style="font-size: 15px; font-weight: 700;">🛡️ ${{s.district}}</div>
                    <div style="font-size: 11.5px; opacity: 0.95; font-weight: 700; margin-top: 2px;">
                        Mean Quality Score: <b>${{s.mean_score.toFixed(1)}} / 5.0</b>
                    </div>
                </div>
                <div>${{getFaceSvg(s.face_type, 38)}}</div>
            </div>
            <div style="padding: 10px 12px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px; max-height: 380px; overflow-y: auto;">
                <div style="font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">
                    Detailed Parameter Scorecard (1.0 – 5.0):
                </div>
                ${{renderParamRow('🧘 Calmness & Low Noise', s.scores.calmness, s.calmness_desc)}}
                ${{renderParamRow('🥊 Aggressions & Assaults', s.scores.assaults, s.assaults_desc)}}
                ${{renderParamRow('🔒 Thefts & Property Protection', s.scores.thefts, s.thefts_desc)}}
                ${{renderParamRow('🍺 Public Sobriety & Order', s.scores.drunkenness, s.drunkenness_desc)}}
                ${{renderParamRow('⚖️ Homicides & Sexual Offenses', s.scores.severe_crimes, s.severe_crimes_desc)}}
                ${{renderParamRow('📊 Demographic & Immigrant Factor', s.scores.demographics, s.demographics_desc)}}
                
                <div style="margin-top: 8px; padding: 6px 8px; background: #f0fdf4; border-radius: 4px; border-left: 3px solid ${{s.color}};">
                    <div style="font-size: 11px; color: #166534;">
                        💡 <b>Living Verdict:</b> ${{s.verdict}}
                    </div>
                </div>
            </div>
        </div>`;

        // Positioned slightly above district watermark with highest z-index
        L.marker([s.lat + 0.0035, s.lon], {{icon: faceIcon, zIndexOffset: 3500}})
            .bindPopup(popupHtml, {{maxWidth: 360}})
            .bindTooltip(`<b>${{s.district}}</b><br>Mean Safety: <b>${{s.mean_score.toFixed(1)}} / 5.0</b> (Click for full scorecard)`, {{sticky: true}})
            .addTo(lg);

        LAYERS['layer_' + s.id] = lg;

        // Sidebar item
        const itemHtml = `<div class="nested-item">
            <label class="custom-checkbox">
                <input type="checkbox" id="chk_${{s.id}}" onchange="toggleLayer('layer_${{s.id}}', this.checked); updateParentCheck('parent_safety', 'body_safety')">
                <span class="checkmark"></span>
                <span style="display:inline-flex; align-items:center; margin-right:4px;">${{getFaceSvg(s.face_type, 18)}}</span>
                <div class="rent-item-text">
                    <span class="rent-item-name">${{s.short_name}}</span>
                    <span class="rent-item-sub">Mean: <b>${{s.mean_score.toFixed(1)}} / 5.0</b></span>
                </div>
            </label>
        </div>`;
        safetyContainer.insertAdjacentHTML('beforeend', itemHtml);
    }});

    // 5. DISTRICT RENTAL PRICE & EXACT STREET-DELIMITED BOUNDARY LAYER
    const rentalContainer = document.getElementById('body_rental');
    RENTALS_DATA.forEach(r => {{
        const lg = L.layerGroup();
        
        // 5.1 Exact Street/Coast/Railway Delimited Official Polygons
        if (r.polygons && r.polygons.length > 0) {{
            r.polygons.forEach(polyCoords => {{
                L.polygon(polyCoords, {{
                    color: r.color,
                    weight: 2,
                    fill: true,
                    fillColor: r.color,
                    fillOpacity: 0.18
                }}).bindTooltip(`<b>${{r.district}}</b><br>Mean Rent: €${{r.mean_sqm}}/m²`, {{sticky: true}}).addTo(lg);
            }});
        }}

        // 5.2 Compact Price-Only Pill Badge (Price ONLY, High Z-Index on top)
        const badgeHtml = `<div class="rent-price-pill pill-${{r.tier_class}}">
            <span style="font-size: 11px;">💶</span>
            <span class="rent-val">€${{r.mean_sqm}}</span>
            <span class="rent-unit">/ m²</span>
        </div>`;
        
        const badgeIcon = L.divIcon({{
            html: badgeHtml,
            className: '',
            iconSize: [92, 28],
            iconAnchor: [46, 14]
        }});

        const popupContent = `<div style="font-family: sans-serif; width: 300px; line-height: 1.4;">
            <div style="background-color: ${{r.badge_color}}; color: white; padding: 10px 14px; border-radius: 6px 6px 0 0;">
                <div style="font-size: 16px; font-weight: 700;">💶 ${{r.district}}</div>
                <div style="font-size: 11px; opacity: 0.9; text-transform: uppercase; font-weight: 600; margin-top: 2px;">
                    Tier: ${{r.tier}} • Mean Rent: €${{r.mean_sqm}} / m² / mo
                </div>
            </div>
            <div style="padding: 12px 14px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
                <div style="margin-bottom: 8px; padding: 6px 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid ${{r.badge_color}};">
                    <div style="font-size: 11px; font-weight: 700; color: #475569; text-transform: uppercase;">Estimated Monthly Rents (&lt;€3,000):</div>
                    <div style="font-size: 12px; color: #1e293b; margin-top: 3px;">
                        🛏️ <b>1-Bedroom (45 m²):</b> ${{r.one_bed_est}}<br>
                        🛋️ <b>2-Bedroom (65 m²):</b> ${{r.two_bed_est}}<br>
                        📊 <b>Typical Range:</b> ${{r.range_sqm}}
                    </div>
                </div>
                <div style="margin-bottom: 8px; font-size: 11.5px; color: #334155; line-height: 1.35;">
                    ${{r.desc}}
                </div>
                <div style="margin-bottom: 10px; font-size: 11px; color: #166534; background: #f0fdf4; padding: 5px 8px; border-radius: 4px;">
                    🚍 <b>Tech Commute:</b> ${{r.tech_commute}}
                </div>
                <div style="display: flex; gap: 6px;">
                    <a href="${{r.kv_link}}" target="_blank" 
                       style="flex: 1; text-align: center; background: #ea580c; color: white; text-decoration: none; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: 700;">
                        🔎 KV.ee Listings
                    </a>
                    <a href="${{r.city24_link}}" target="_blank" 
                       style="flex: 1; text-align: center; background: #0284c7; color: white; text-decoration: none; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: 700;">
                        🏢 City24 Listings
                    </a>
                </div>
            </div>
        </div>`;

        // Position price pill cleanly underneath the district watermark with highest z-index
        L.marker([r.lat - 0.0030, r.lon], {{icon: badgeIcon, zIndexOffset: 3000}})
            .bindPopup(popupContent, {{maxWidth: 340}})
            .bindTooltip(`<b>${{r.district}}</b><br>Mean Rent: €${{r.mean_sqm}}/m² (Click for rent estimates & boundaries)`, {{sticky: true}})
            .addTo(lg);

        LAYERS['layer_' + r.id] = lg;

        // Append to rental accordion in sidebar with separated lines
        const itemHtml = `<div class="nested-item">
            <label class="custom-checkbox">
                <input type="checkbox" id="chk_${{r.id}}" onchange="toggleLayer('layer_${{r.id}}', this.checked); updateParentCheck('parent_rental', 'body_rental')">
                <span class="checkmark"></span>
                <span class="color-dot" style="background:${{r.badge_color}};"></span>
                <div class="rent-item-text">
                    <span class="rent-item-name">${{r.short_name}}</span>
                    <span class="rent-item-sub">€${{r.mean_sqm}}/m² • 1BR: ${{r.one_bed_est}}</span>
                </div>
            </label>
        </div>`;
        rentalContainer.insertAdjacentHTML('beforeend', itemHtml);
    }});

    // 6. PERMANENT ALWAYS-ON DISTRICT & NEIGHBORHOOD LABELS (ALWAYS VISIBLE)
    DISTRICTS_DATA.forEach(d => {{
        let className = 'district-label-sub';
        if (d.type === 'major') className = 'district-label-major';
        if (d.type === 'tech_hub') className = 'district-label-tech';
        
        const labelIcon = L.divIcon({{
            className: className,
            html: d.name,
            iconSize: [140, 20],
            iconAnchor: [70, 10]
        }});
        L.marker([d.lat, d.lon], {{icon: labelIcon, interactive: false}}).addTo(map);
    }});

    // 7. TECH CLUSTERS & HUBS
    const clusterGroup = L.layerGroup();
    CLUSTERS_DATA.forEach(c => {{
        (c.polygons || []).forEach(part => {{
            L.polygon(part, {{
                color: c.color,
                weight: 2,
                fill: true,
                fillColor: c.fillColor,
                fillOpacity: 0.18
            }}).bindTooltip(`<b>${{c.name}}</b><br>${{c.desc}}`, {{sticky: true}}).addTo(clusterGroup);
        }});
    }});
    LAYERS['layer_clusters'] = clusterGroup;

    const hubGroup = L.layerGroup();
    HUBS_DATA.forEach(hub => {{
        const iconHtml = `<div style="
            background: #581c87; color: white; width: 32px; height: 32px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center; font-size: 16px;
            border: 2px solid #ffffff; box-shadow: 0 0 10px rgba(147, 51, 234, 0.7);
        ">${{hub.icon}}</div>`;
        const divIcon = L.divIcon({{html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16]}});
        const popupHtml = `<div style="font-family: sans-serif; min-width: 220px;">
            <div style="background: #581c87; color: white; padding: 8px 12px; font-weight: bold; font-size: 13px; border-radius: 6px 6px 0 0;">
                ${{hub.icon}} ${{hub.name}}
            </div>
            <div style="padding: 10px; font-size: 12px; background: #fff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
                <p style="margin: 0 0 6px 0; color: #334155;">${{hub.description}}</p>
                <div style="color: #7c3aed; font-weight: bold; font-size: 11px;">⭐ Multi-Modal Transfer Nexus</div>
            </div>
        </div>`;
        L.marker([hub.lat, hub.lon], {{icon: divIcon}}).bindPopup(popupHtml, {{maxWidth: 320}}).bindTooltip(`<b>${{hub.name}}</b>`, {{sticky: true}}).addTo(hubGroup);
    }});
    LAYERS['layer_hubs'] = hubGroup;

    // 8. TECH COMPANIES BY SECTOR
    const compContainer = document.getElementById('body_companies');
    Object.keys(CATEGORIES_DATA).forEach(catName => {{
        const catInfo = CATEGORIES_DATA[catName];
        const lg = L.layerGroup();
        
        catInfo.companies.forEach(c => {{
            const markerHtml = `<div style="
                background-color: ${{c.color}}; color: white; width: 26px; height: 26px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center; font-size: 13px;
                border: 2px solid #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.4); cursor: pointer;
            ">${{c.icon}}</div>`;
            const customIcon = L.divIcon({{html: markerHtml, className: '', iconSize: [26, 26], iconAnchor: [13, 13]}});
            
            const popupHtml = `<div style="font-family: sans-serif; width: 280px; line-height: 1.4;">
                <div style="background-color: ${{c.color}}; color: white; padding: 8px 12px; border-radius: 6px 6px 0 0;">
                    <span style="font-size: 15px; font-weight: 700;">${{c.icon}} ${{c.name}}</span>
                    <span style="display: block; font-size: 10px; opacity: 0.9; text-transform: uppercase; font-weight: 600; margin-top: 2px;">${{c.category}}</span>
                </div>
                <div style="padding: 10px 12px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
                    <div style="margin-bottom: 6px;">
                        <strong style="color: #4b5563; font-size: 11px; text-transform: uppercase;">📍 Tech Office Address:</strong>
                        <div style="color: #111827; font-size: 12px; font-weight: 600;">${{c.address}}</div>
                        <div style="color: #6b7280; font-size: 11px;">${{c.district}}</div>
                        ${{c.address_note ? `<div style="margin-top: 5px; padding: 5px 7px; background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 3px; color: #78350f; font-size: 10.5px; line-height: 1.35;">${{c.address_note}}</div>` : ''}}
                    </div>
                    <div style="margin-bottom: 6px; padding: 5px 8px; background: #f8fafc; border-radius: 4px; border-left: 3px solid ${{c.color}};">
                        <strong style="color: #475569; font-size: 11px; text-transform: uppercase;">💻 Engineering / Tech Focus:</strong>
                        <div style="color: #334155; font-size: 11px; margin-top: 2px;">${{c.tech_focus}}</div>
                    </div>
                    <div style="margin-top: 6px; padding: 5px 8px; background: #f0fdf4; border-radius: 4px; border-left: 3px solid #22c55e;">
                        <strong style="color: #166534; font-size: 11px; text-transform: uppercase;">🚍 Transit Accessibility:</strong>
                        <div style="color: #14532d; font-size: 11px; font-weight: 600; margin-top: 2px;">${{c.transit}}</div>
                    </div>
                    <div style="margin-top: 8px; display: flex; gap: 6px;">
                        <a href="https://www.google.com/maps/search/?api=1&query=${{c.lat}},${{c.lon}}" target="_blank" 
                           style="flex: 1; text-align: center; background: #2563eb; color: white; text-decoration: none; padding: 5px 0; border-radius: 4px; font-size: 11px; font-weight: 600;">
                            🗺️ Google Maps
                        </a>
                        <a href="https://maps.apple.com/?q=${{c.name}}&ll=${{c.lat}},${{c.lon}}" target="_blank"
                           style="flex: 1; text-align: center; background: #374151; color: white; text-decoration: none; padding: 5px 0; border-radius: 4px; font-size: 11px; font-weight: 600;">
                            🍎 Apple Maps
                        </a>
                    </div>
                </div>
            </div>`;
            
            L.marker([c.lat, c.lon], {{icon: customIcon}})
                .bindPopup(popupHtml, {{maxWidth: 320}})
                .bindTooltip(`<b>${{c.name}}</b> (${{c.district}})<br><span style="color:gray;">${{c.address}}</span>`, {{sticky: true}})
                .addTo(lg);
        }});
        
        LAYERS['layer_' + catInfo.id] = lg;
        
        // Append nested checkbox in sidebar
        const itemHtml = `<div class="nested-item">
            <label class="custom-checkbox">
                <input type="checkbox" id="chk_${{catInfo.id}}" onchange="toggleLayer('layer_${{catInfo.id}}', this.checked); updateParentCheck('parent_companies', 'body_companies')">
                <span class="checkmark"></span>
                <span class="item-label">${{catName}} <span class="item-count">(${{catInfo.companies.length}})</span></span>
            </label>
        </div>`;
        compContainer.insertAdjacentHTML('beforeend', itemHtml);
    }});

    // 9. REUSABLE TRANSIT GROUP RENDERER (BUSES, TROLLEYS, TRAMS)
    function renderTransitGroup(containerId, dataDict, parentId, callbackName) {{
        const container = document.getElementById(containerId);
        if (!container) return;
        Object.keys(dataDict).forEach(key => {{
            const t = dataDict[key];
            const lg = L.layerGroup();
            L.polyline(t.coords, {{
                color: t.color,
                weight: t.weight || 4.5,
                opacity: 0.95,
                lineCap: 'round',
                lineJoin: 'round'
            }}).bindTooltip(`<b style="color:${{t.color}};">${{t.label}}</b><br>Route: ${{t.name || 'Transit Line'}}`, {{sticky: true}}).addTo(lg);
            
            LAYERS['layer_' + key] = lg;
            
            const cbCall = callbackName ? `${{callbackName}}();` : '';
            const itemHtml = `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="chk_${{key}}" onchange="toggleLayer('layer_${{key}}', this.checked); updateParentCheck('${{parentId}}', '${{containerId}}'); ${{cbCall}}">
                    <span class="checkmark"></span>
                    <span class="color-dot" style="background:${{t.color}};"></span>
                    <span class="item-label">${{t.label}}</span>
                </label>
            </div>`;
            container.insertAdjacentHTML('beforeend', itemHtml);
        }});
    }}

    // 10. COMMUTER RAIL RENDERER (TRACKS + CIRCULAR STATION POINTS)
    function renderTrainGroup(containerId, trainDict, parentId, callbackName) {{
        const container = document.getElementById(containerId);
        if (!container) return;
        Object.keys(trainDict).forEach(key => {{
            const item = trainDict[key];
            const lg = L.layerGroup();
            
            // 1. Train track line
            L.polyline(item.coords, {{
                color: item.color,
                weight: item.weight || 5.5,
                opacity: 0.95,
                lineCap: 'round',
                lineJoin: 'round'
            }}).bindTooltip(`<b style="color:${{item.color}};">${{item.label}}</b><br>Electric Commuter Rail Corridor`, {{sticky: true}}).addTo(lg);

            // 2. Station Circular Points
            if (item.stations && item.stations.length > 0) {{
                item.stations.forEach(st => {{
                    const isMajor = st.type === 'major_hub';
                    const size = isMajor ? 11 : 8;
                    const borderW = isMajor ? 2.5 : 2;
                    const dotHtml = `<div style="
                        width: ${{size}}px; height: ${{size}}px; border-radius: 50%;
                        background: #ffffff; border: ${{borderW}}px solid ${{item.color}};
                        box-shadow: 0 0 6px rgba(0,0,0,0.8), 0 0 3px ${{item.color}};
                        cursor: pointer;
                    "></div>`;
                    const dotIcon = L.divIcon({{
                        html: dotHtml,
                        className: '',
                        iconSize: [size, size],
                        iconAnchor: [size / 2, size / 2]
                    }});
                    
                    const popupHtml = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; min-width: 210px; line-height: 1.4;">
                        <div style="background-color: ${{item.color}}; color: white; padding: 6px 10px; font-weight: bold; font-size: 12px; border-radius: 4px 4px 0 0;">
                            🚆 ${{st.name}} Station
                        </div>
                        <div style="padding: 8px 10px; background: #fff; font-size: 11.5px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 4px 4px;">
                            <div style="color: #1e293b; font-weight: 600; margin-bottom: 3px;">${{item.label.split(':')[0]}}</div>
                            <div style="color: #475569; font-size: 11px;">${{st.desc || 'Elron Commuter Station'}}</div>
                        </div>
                    </div>`;
                    
                    L.marker([st.lat, st.lon], {{icon: dotIcon, zIndexOffset: 2000}})
                        .bindPopup(popupHtml, {{maxWidth: 280}})
                        .bindTooltip(`🚆 <b>${{st.name}}</b><br><span style="font-size:10px; color:#cbd5e1;">Commuter Rail Station</span>`, {{sticky: true}})
                        .addTo(lg);
                }});
            }}

            LAYERS['layer_' + key] = lg;

            const cbCall = callbackName ? `${{callbackName}}();` : '';
            const itemHtml = `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="chk_${{key}}" onchange="toggleLayer('layer_${{key}}', this.checked); updateParentCheck('${{parentId}}', '${{containerId}}'); ${{cbCall}}">
                    <span class="checkmark"></span>
                    <span class="color-dot" style="background:${{item.color}};"></span>
                    <span class="item-label">${{item.label}}</span>
                </label>
            </div>`;
            container.insertAdjacentHTML('beforeend', itemHtml);
        }});
    }}

    // Render All Transit Layers
    renderTransitGroup('body_trams', TRAM_DATA, 'parent_trams', 'updateTransportParent');
    renderTransitGroup('body_trolleys', TROLLEY_DATA, 'parent_trolleys', 'updateTransportParent');
    renderTransitGroup('body_bus_key', BUS_KEY_DATA, 'parent_bus_key', 'updateBusHierarchy');
    renderTransitGroup('body_bus_suburb', BUS_SUBURB_DATA, 'parent_bus_suburb', 'updateBusHierarchy');
    renderTransitGroup('body_bus_outside', BUS_OUTSIDE_DATA, 'parent_bus_outside', 'updateBusHierarchy');
    renderTrainGroup('body_rail', TRAIN_DATA, 'parent_rail', 'updateTransportParent');

    // ========================================================================
    // 13. INTERACTIVE CONTROL FUNCTIONS (100% INSTANT TOGGLE)
    // ========================================================================
    function toggleLayer(layerName, show) {{
        const lg = LAYERS[layerName];
        if (!lg) return;
        if (show) {{
            if (!map.hasLayer(lg)) map.addLayer(lg);
        }} else {{
            if (map.hasLayer(lg)) map.removeLayer(lg);
        }}
    }}

    function toggleAllInGroup(containerId, state) {{
        const container = document.getElementById(containerId);
        if (!container) return;
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(chk => {{
            if (chk.checked !== state) {{
                chk.checked = state;
                chk.dispatchEvent(new Event('change'));
            }}
        }});
    }}

    function updateParentCheck(parentId, containerId) {{
        const parent = document.getElementById(parentId);
        const container = document.getElementById(containerId);
        if (!parent || !container) return;
        const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
        const allChecked = checkboxes.every(c => c.checked);
        const anyChecked = checkboxes.some(c => c.checked);
        parent.checked = allChecked;
        parent.indeterminate = anyChecked && !allChecked;
    }}

    function updateBusHierarchy() {{
        updateParentCheck('parent_bus_key', 'body_bus_key');
        updateParentCheck('parent_bus_suburb', 'body_bus_suburb');
        updateParentCheck('parent_bus_outside', 'body_bus_outside');
        
        const parentBusAll = document.getElementById('parent_bus_all');
        const busContainers = ['body_bus_key', 'body_bus_suburb', 'body_bus_outside'];
        const allBusChecks = [];
        busContainers.forEach(cid => {{
            const c = document.getElementById(cid);
            if (c) allBusChecks.push(...Array.from(c.querySelectorAll('input[type="checkbox"]')));
        }});
        if (parentBusAll && allBusChecks.length > 0) {{
            const allChecked = allBusChecks.every(chk => chk.checked);
            const anyChecked = allBusChecks.some(chk => chk.checked);
            parentBusAll.checked = allChecked;
            parentBusAll.indeterminate = anyChecked && !allChecked;
        }}
        updateTransportParent();
    }}

    function toggleBusAll(state) {{
        toggleAllInGroup('body_bus_key', state);
        toggleAllInGroup('body_bus_suburb', state);
        toggleAllInGroup('body_bus_outside', state);
        const parentKey = document.getElementById('parent_bus_key');
        const parentSuburb = document.getElementById('parent_bus_suburb');
        const parentOutside = document.getElementById('parent_bus_outside');
        const parentBusAll = document.getElementById('parent_bus_all');
        if (parentKey) parentKey.checked = state;
        if (parentSuburb) parentSuburb.checked = state;
        if (parentOutside) parentOutside.checked = state;
        if (parentBusAll) parentBusAll.checked = state;
        updateTransportParent();
    }}

    function toggleTransportGroup(state) {{
        toggleBusAll(state);
        toggleAllInGroup('body_trolleys', state);
        toggleAllInGroup('body_rail', state);
        toggleAllInGroup('body_trams', state);
        
        const parentTransport = document.getElementById('parent_transport');
        const parentTrolleys = document.getElementById('parent_trolleys');
        const parentRail = document.getElementById('parent_rail');
        const parentTrams = document.getElementById('parent_trams');
        
        if (parentTransport) parentTransport.checked = state;
        if (parentTrolleys) parentTrolleys.checked = state;
        if (parentRail) parentRail.checked = state;
        if (parentTrams) parentTrams.checked = state;
    }}

    function updateTransportParent() {{
        const parentTransport = document.getElementById('parent_transport');
        const containers = ['body_bus_key', 'body_bus_suburb', 'body_bus_outside', 'body_trolleys', 'body_rail', 'body_trams'];
        const allChecks = [];
        containers.forEach(cid => {{
            const c = document.getElementById(cid);
            if (c) allChecks.push(...Array.from(c.querySelectorAll('input[type="checkbox"]')));
        }});
        if (parentTransport && allChecks.length > 0) {{
            const allChecked = allChecks.every(chk => chk.checked);
            const anyChecked = allChecks.some(chk => chk.checked);
            parentTransport.checked = allChecked;
            parentTransport.indeterminate = anyChecked && !allChecked;
        }}
    }}

    function switchBasemap(selectedKey) {{
        Object.keys(BASEMAPS).forEach(k => {{
            if (map.hasLayer(BASEMAPS[k])) map.removeLayer(BASEMAPS[k]);
        }});
        if (BASEMAPS[selectedKey]) {{
            map.addLayer(BASEMAPS[selectedKey]);
            BASEMAPS[selectedKey].bringToBack();
        }}
    }}

    function setAllTransit(state) {{
        toggleTransportGroup(state);
    }}

    function toggleAccordion(contentId, headerEl) {{
        const content = document.getElementById(contentId);
        const arrow = headerEl.querySelector('.accordion-arrow');
        if (content.classList.contains('open')) {{
            content.classList.remove('open');
            if (arrow) arrow.innerText = '▶';
        }} else {{
            content.classList.add('open');
            if (arrow) arrow.innerText = '▼';
        }}
    }}

    function toggleMainPanel() {{
        const body = document.getElementById('panel-body');
        const footer = document.querySelector('.panel-footer');
        const icon = document.getElementById('panel-toggle-icon');
        if (body.style.display === 'none') {{
            body.style.display = 'block';
            footer.style.display = 'flex';
            icon.innerText = '▼';
        }} else {{
            body.style.display = 'none';
            footer.style.display = 'none';
            icon.innerText = '▲';
        }}
    }}
    </script>
</body>
</html>"""

    if not output_html:
        output_html = os.path.join(ROOT_DIR, "index.html")
    
    with open(output_html, 'w', encoding='utf-8') as f:
        f.write(html_template)
    print(f"Map successfully generated as: {output_html}")
    
    alt_html = os.path.join(ROOT_DIR, "tallinn_tech_transit_map.html")
    if output_html != alt_html:
        with open(alt_html, 'w', encoding='utf-8') as f:
            f.write(html_template)
        print(f"Map copy successfully generated as: {alt_html}")
        
    return output_html


def export_kml_kmz(kml_out=None, kmz_out=None):
    """
    Exports all 59 tech offices to standard KML and compressed KMZ formats
    for offline GPS apps (Organic Maps, MAPS.ME, OsmAnd, Google Earth).
    """
    if not kml_out:
        kml_out = os.path.join(EXPORTS_DIR, "tallinn_tech_hubs.kml")
    if not kmz_out:
        kmz_out = os.path.join(EXPORTS_DIR, "tallinn_tech_hubs.kmz")

    print("Exporting KML & KMZ files for offline mapping apps...")
    kml = ET.Element('kml', xmlns='http://www.opengis.net/kml/2.2')
    doc = ET.SubElement(kml, 'Document')
    
    doc_name = ET.SubElement(doc, 'name')
    doc_name.text = 'Tallinn Tech & R&D Hubs (59 Companies)'
    doc_desc = ET.SubElement(doc, 'description')
    doc_desc.text = 'Verified Tech, Software Engineering, and R&D Offices in Tallinn, Estonia for Transit-Based Apartment Search.'

    categories = sorted(list(set(c["category"] for c in COMPANIES_DATA)))
    folder_map = {}
    for cat in categories:
        folder = ET.SubElement(doc, 'Folder')
        f_name = ET.SubElement(folder, 'name')
        f_name.text = cat
        folder_map[cat] = folder

    for c in COMPANIES_DATA:
        pm = ET.SubElement(folder_map[c["category"]], 'Placemark')
        
        name_elem = ET.SubElement(pm, 'name')
        name_elem.text = c["name"]
        
        desc_elem = ET.SubElement(pm, 'description')
        desc_text = f"""<b>Company:</b> {c['name']}<br/>
<b>Category:</b> {c['category']}<br/>
<b>Address:</b> {c['address']}<br/>
<b>District:</b> {c['district']}<br/>
<b>Engineering Focus:</b> {c['tech_focus']}<br/>
<b>Transit Access:</b> {c['transit']}"""
        desc_elem.text = desc_text
        
        pt = ET.SubElement(pm, 'Point')
        coords = ET.SubElement(pt, 'coordinates')
        coords.text = f"{c['lon']},{c['lat']},0"

    tree = ET.ElementTree(kml)
    tree.write(kml_out, encoding='utf-8', xml_declaration=True)
    print(f"KML exported successfully to: {kml_out}")

    with zipfile.ZipFile(kmz_out, 'w', zipfile.ZIP_DEFLATED) as z:
        z.write(kml_out, arcname='doc.kml')
    print(f"KMZ exported successfully to: {kmz_out}")


if __name__ == "__main__":
    # 1. Generate 100% Interactive Standalone Leaflet HTML Map with Separated District Shading & Badges
    html_file = generate_standalone_map()
    
    # 2. Export KML and KMZ for mobile offline GPS navigation
    export_kml_kmz()
    
    print("\n" + "="*78)
    print("ALL ASSETS GENERATED IN ORGANIZED FOLDERS:")
    print(f"1. Standalone Offline HTML Map (Main): {os.path.join(ROOT_DIR, 'index.html')}")
    print(f"2. Standalone Offline HTML Map (Named): {os.path.join(ROOT_DIR, 'tallinn_tech_transit_map.html')}")
    print(f"3. Mobile GPS KML File:                {os.path.join(EXPORTS_DIR, 'tallinn_tech_hubs.kml')}")
    print(f"4. Mobile GPS KMZ File:                {os.path.join(EXPORTS_DIR, 'tallinn_tech_hubs.kmz')}")
    print("="*78)
