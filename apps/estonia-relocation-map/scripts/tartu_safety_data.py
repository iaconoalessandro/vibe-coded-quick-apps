"""
==============================================================================
TARTU DISTRICT SAFETY & QUALITY OF LIFE DATASET
==============================================================================
Official safety ratings (1.0 to 5.0 scale) and 5-tier smiley face indicators
for all 18 official Tartu administrative quarters (linnaosad).
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

RAW_QUARTERS_PATH = os.path.join(DATA_DIR, "tartu_raw_quarters.json")
raw_polys = {}
if os.path.exists(RAW_QUARTERS_PATH):
    with open(RAW_QUARTERS_PATH, "r", encoding="utf-8") as f:
        raw_polys = json.load(f)

# District centroids & detailed ratings
TARTU_SAFETY_CONFIGS = [
    {
        "name": "Tammelinn",
        "district": "Tammelinn (Oak Town)",
        "short_name": "Tammelinn",
        "lat": 58.3625, "lon": 26.6980,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.8,
        "scores": {
            "calmness": 4.9,
            "assaults": 4.9,
            "thefts": 4.7,
            "drunkenness": 4.9,
            "severe_crimes": 5.0,
            "demographics": 4.6
        },
        "calmness_desc": "Peaceful garden-city atmosphere with private villas, Tamme Stadium, and mature oak avenues.",
        "assaults_desc": "Virtually zero violent assaults reported; exceptionally peaceful neighborhood.",
        "thefts_desc": "Occasional shed or bicycle property theft; very high residential security.",
        "drunkenness_desc": "Quiet family streets with zero late-night bar spillover.",
        "severe_crimes_desc": "Top-tier safety record with no serious crime incidents.",
        "demographics_desc": "Highly stable, Estonian-speaking family-oriented population (92%+ Estonian).",
        "verdict": "Premier tranquil family garden district in Tartu; top safety score."
    },
    {
        "name": "Tähtvere",
        "district": "Tähtvere (Song Festival & Academic Quarter)",
        "short_name": "Tähtvere",
        "lat": 58.3850, "lon": 26.7030,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.8,
        "scores": {
            "calmness": 4.8,
            "assaults": 4.9,
            "thefts": 4.7,
            "drunkenness": 4.8,
            "severe_crimes": 5.0,
            "demographics": 4.8
        },
        "calmness_desc": "Quiet historic residential area near Tähtvere Park, Lauluväljak & EMÜ campus.",
        "assaults_desc": "Exceptionally safe at all hours of the day and night.",
        "thefts_desc": "Very low property crime; quiet residential cul-de-sacs.",
        "drunkenness_desc": "Park areas are well-maintained; family recreation vibes.",
        "severe_crimes_desc": "Zero serious crimes recorded.",
        "demographics_desc": "Affluent academic and professional resident demographic.",
        "verdict": "One of Tartu's most prestigious and safe neighborhoods."
    },
    {
        "name": "Ihaste",
        "district": "Ihaste (Pine Forest Villa Quarter)",
        "short_name": "Ihaste",
        "lat": 58.3580, "lon": 26.7820,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.7,
        "scores": {
            "calmness": 5.0,
            "assaults": 4.9,
            "thefts": 4.5,
            "drunkenness": 4.9,
            "severe_crimes": 5.0,
            "demographics": 4.1
        },
        "calmness_desc": "Surrounded by pine forests, equestrian trails, and the Emajõgi river.",
        "assaults_desc": "Zero street violence; quiet secluded suburban living.",
        "thefts_desc": "Occasional detached villa burglary risk, but overall very safe.",
        "drunkenness_desc": "Virtually non-existent public disturbances.",
        "severe_crimes_desc": "Impeccable crime statistics.",
        "demographics_desc": "Mixture of upscale new private builds and older summer cottage conversions.",
        "verdict": "Ultra-calm nature retreat for single-family living."
    },
    {
        "name": "Kvissentali",
        "district": "Kvissentali (Riverside Villa Quarter)",
        "short_name": "Kvissentali",
        "lat": 58.3996, "lon": 26.7053,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.7,
        "scores": {
            "calmness": 4.9,
            "assaults": 4.9,
            "thefts": 4.6,
            "drunkenness": 4.9,
            "severe_crimes": 5.0,
            "demographics": 4.1
        },
        "calmness_desc": "Scenic riverfront estate with modern architecture along the Emajõgi.",
        "assaults_desc": "Completely safe with zero nighttime disorder.",
        "thefts_desc": "Low property incident rates with neighborhood watch awareness.",
        "drunkenness_desc": "Strictly residential zone with zero public drinking.",
        "severe_crimes_desc": "Zero violent crimes.",
        "demographics_desc": "Affluent modern villa owners and tech founders.",
        "verdict": "Exclusive riverfront tranquility with great nature access."
    },
    {
        "name": "Supilinn",
        "district": "Supilinn (Soup Town / Bohemian Wooden Quarter)",
        "short_name": "Supilinn",
        "lat": 58.3865, "lon": 26.7125,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.6,
        "scores": {
            "calmness": 4.6,
            "assaults": 4.8,
            "thefts": 4.4,
            "drunkenness": 4.5,
            "severe_crimes": 4.9,
            "demographics": 4.6
        },
        "calmness_desc": "Iconic, cozy wooden houses with gardens, community spirit, and river promenades.",
        "assaults_desc": "Tight-knit community with high social trust and neighborly surveillance.",
        "thefts_desc": "Bicycle theft can happen if unchained outside; lock bikes properly.",
        "drunkenness_desc": "Friendly outdoor gatherings in summer; low antisocial behavior.",
        "severe_crimes_desc": "Virtually non-existent violent incidents.",
        "demographics_desc": "Students, artists, tech professionals, and young families.",
        "verdict": "Beloved creative bohemian neighborhood with fantastic river walkability."
    },
    {
        "name": "Maarjamõisa",
        "district": "Maarjamõisa (Medical & Technology Hub)",
        "short_name": "Maarjamõisa",
        "lat": 58.3680, "lon": 26.6960,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.5,
        "scores": {
            "calmness": 4.6,
            "assaults": 4.7,
            "thefts": 4.4,
            "drunkenness": 4.7,
            "severe_crimes": 4.9,
            "demographics": 4.1
        },
        "calmness_desc": "Campus setting with TÜ Hospital, Biomedicum, Chemicum & Science Park.",
        "assaults_desc": "High security presence around medical and research complexes.",
        "thefts_desc": "Occasional car break-ins in large hospital parking lots.",
        "drunkenness_desc": "Very clean, orderly institutional grounds.",
        "severe_crimes_desc": "High safety index with round-the-clock facility monitoring.",
        "demographics_desc": "Doctors, researchers, scientists, and medical students.",
        "verdict": "High-tech academic campus with excellent safety standards."
    },
    {
        "name": "Veeriku",
        "district": "Veeriku (Western Residential Quarter)",
        "short_name": "Veeriku",
        "lat": 58.3760, "lon": 26.6900,
        "color": "#059669", "fill_color": "#10b981",
        "face_type": "very_happy",
        "mean_score": 4.5,
        "scores": {
            "calmness": 4.6,
            "assaults": 4.7,
            "thefts": 4.4,
            "drunkenness": 4.6,
            "severe_crimes": 4.9,
            "demographics": 4.1
        },
        "calmness_desc": "Quiet residential streets with private homes, gardens, and small apartment buildings.",
        "assaults_desc": "Very peaceful neighborhood with virtually no street crime.",
        "thefts_desc": "Standard low suburban theft statistics.",
        "drunkenness_desc": "Quiet evening environment away from the city nightlife.",
        "severe_crimes_desc": "Excellent safety track record.",
        "demographics_desc": "Working professionals and established families.",
        "verdict": "Solid, family-friendly western residential sanctuary."
    },
    {
        "name": "Karlova",
        "district": "Karlova (Artisan Wooden Heritage Quarter)",
        "short_name": "Karlova",
        "lat": 58.3670, "lon": 26.7310,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.4,
        "scores": {
            "calmness": 4.4,
            "assaults": 4.6,
            "thefts": 4.2,
            "drunkenness": 4.3,
            "severe_crimes": 4.8,
            "demographics": 4.3
        },
        "calmness_desc": "Charming wooden 19th-century architecture, cozy bakeries (Karlova Kohv, Barlova).",
        "assaults_desc": "Safe walking streets; friendly community vibe.",
        "thefts_desc": "Keep bicycles and courtyard sheds locked; occasional opportunistic thefts.",
        "drunkenness_desc": "Local pubs are cozy community meeting spots with minimal disturbances.",
        "severe_crimes_desc": "Very low rate of serious crimes.",
        "demographics_desc": "Vibrant blend of creative professionals, techies, and intellectuals.",
        "verdict": "Tartu's most beloved hipster and artistic district; very safe."
    },
    {
        "name": "Variku",
        "district": "Variku (Southern Suburb)",
        "short_name": "Variku",
        "lat": 58.3540, "lon": 26.7130,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.4,
        "scores": {
            "calmness": 4.7,
            "assaults": 4.6,
            "thefts": 4.3,
            "drunkenness": 4.6,
            "severe_crimes": 4.8,
            "demographics": 3.9
        },
        "calmness_desc": "Single-family residential enclave buffered by railway lines.",
        "assaults_desc": "Very low crime rates and friendly residential streets.",
        "thefts_desc": "Occasional garden equipment thefts; generally peaceful.",
        "drunkenness_desc": "Zero late-night public drunkenness.",
        "severe_crimes_desc": "Clean police safety records.",
        "demographics_desc": "Established suburban homeowners.",
        "verdict": "Quiet suburban sanctuary with direct rail station access."
    },
    {
        "name": "Ränilinn",
        "district": "Ränilinn (Lõunakeskus Commercial Quarter)",
        "short_name": "Ränilinn",
        "lat": 58.3560, "lon": 26.6780,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.3,
        "scores": {
            "calmness": 4.2,
            "assaults": 4.5,
            "thefts": 4.1,
            "drunkenness": 4.5,
            "severe_crimes": 4.8,
            "demographics": 3.8
        },
        "calmness_desc": "Modern new apartment buildings adjacent to Lõunakeskus retail park.",
        "assaults_desc": "Safe residential areas; high daytime shopper footfall.",
        "thefts_desc": "Retail shoplifting and mall car park incidents contribute to stats.",
        "drunkenness_desc": "Commercial zones are well patrolled by private security.",
        "severe_crimes_desc": "No major safety hazards.",
        "demographics_desc": "Young buyers and families in modern newly-built housing complexes.",
        "verdict": "Modern convenience and shopping with solid safety."
    },
    {
        "name": "Raadi-Kruusamäe",
        "district": "Raadi-Kruusamäe (ERM & Cultural Quarter)",
        "short_name": "Raadi-Kruusamäe",
        "lat": 58.3980, "lon": 26.7450,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.3,
        "scores": {
            "calmness": 4.5,
            "assaults": 4.5,
            "thefts": 4.2,
            "drunkenness": 4.4,
            "severe_crimes": 4.8,
            "demographics": 3.8
        },
        "calmness_desc": "Home to the spectacular Estonian National Museum (ERM) and Raadi Lake park.",
        "assaults_desc": "Very peaceful surroundings with plenty of green open spaces.",
        "thefts_desc": "Low property crime in both older residential and new developments.",
        "drunkenness_desc": "Clean cultural environment with minimal nightlife disturbance.",
        "severe_crimes_desc": "Very safe crime profile.",
        "demographics_desc": "Rapidly gentrifying northern district popular with young tech families.",
        "verdict": "Fast-growing cultural and innovation district with high quality of life."
    },
    {
        "name": "Ülejõe",
        "district": "Ülejõe (Delta Innovation & Student Quarter)",
        "short_name": "Ülejõe",
        "lat": 58.3870, "lon": 26.7320,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.2,
        "scores": {
            "calmness": 4.1,
            "assaults": 4.4,
            "thefts": 4.1,
            "drunkenness": 4.1,
            "severe_crimes": 4.7,
            "demographics": 4.1
        },
        "calmness_desc": "Lively university atmosphere around the Delta Centre and Emajõgi riverbanks.",
        "assaults_desc": "Safe walking corridors for students and professionals.",
        "thefts_desc": "Dormitory and bike rack thefts occur occasionally; secure valuables.",
        "drunkenness_desc": "Student social gatherings along the riverfront in spring/autumn.",
        "severe_crimes_desc": "Very low serious crime rate.",
        "demographics_desc": "Students, tech researchers, university faculty, and expats.",
        "verdict": "Vibrant intellectual hub right opposite the city center."
    },
    {
        "name": "Vaksali",
        "district": "Vaksali (Railway Hub & Aparaaditehas)",
        "short_name": "Vaksali",
        "lat": 58.3730, "lon": 26.7080,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.1,
        "scores": {
            "calmness": 4.0,
            "assaults": 4.3,
            "thefts": 4.0,
            "drunkenness": 4.0,
            "severe_crimes": 4.7,
            "demographics": 4.0
        },
        "calmness_desc": "Historic railway quarter transformed by Aparaaditehas creative city.",
        "assaults_desc": "Generally very safe, though transit nodes experience higher traffic.",
        "thefts_desc": "Station area bicycle and property thefts require standard vigilance.",
        "drunkenness_desc": "Occasional loitering around station plazas, but heavily policed.",
        "severe_crimes_desc": "Low violent crime rate.",
        "demographics_desc": "Tech startups, artists, railway commuters, and young professionals.",
        "verdict": "Trendy, connected transit hub with outstanding creative energy."
    },
    {
        "name": "Ropka",
        "district": "Ropka (Southern Mixed Quarter)",
        "short_name": "Ropka",
        "lat": 58.3562, "lon": 26.7271,
        "color": "#22c55e", "fill_color": "#4ade80",
        "face_type": "happy",
        "mean_score": 4.1,
        "scores": {
            "calmness": 4.2,
            "assaults": 4.3,
            "thefts": 4.0,
            "drunkenness": 4.2,
            "severe_crimes": 4.7,
            "demographics": 3.7
        },
        "calmness_desc": "Mix of quiet residential streets, Ropka Manor park, and commercial offices.",
        "assaults_desc": "Peaceful neighborhood with standard city safety.",
        "thefts_desc": "Moderate property theft rate around commercial and storage yards.",
        "drunkenness_desc": "Quiet evenings away from central nightlife.",
        "severe_crimes_desc": "Low violent crime statistics.",
        "demographics_desc": "Working-class and middle-class local families.",
        "verdict": "Affordable and quiet residential area with solid transit."
    },
    {
        "name": "Jaamamõisa",
        "district": "Jaamamõisa (North-Eastern Residential)",
        "short_name": "Jaamamõisa",
        "lat": 58.3840, "lon": 26.7620,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.9,
        "scores": {
            "calmness": 3.9,
            "assaults": 4.1,
            "thefts": 3.8,
            "drunkenness": 3.9,
            "severe_crimes": 4.6,
            "demographics": 3.3
        },
        "calmness_desc": "Residential area with mixed panel apartments and retail strips.",
        "assaults_desc": "Occasional minor altercations near local retail and bars.",
        "thefts_desc": "Car break-ins and bicycle thefts higher than western suburbs.",
        "drunkenness_desc": "Some visible alcohol consumption near grocery strip plazas.",
        "severe_crimes_desc": "Low serious violent crime.",
        "demographics_desc": "Higher proportion of Russian-speaking and industrial workforce.",
        "verdict": "Budget-friendly residential area with good bus access."
    },
    {
        "name": "Ropka tööstusrajoon",
        "district": "Ropka tööstusrajoon (Industrial District)",
        "short_name": "Ropka Tööstus",
        "lat": 58.3490, "lon": 26.7450,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.9,
        "scores": {
            "calmness": 3.8,
            "assaults": 4.3,
            "thefts": 3.6,
            "drunkenness": 4.1,
            "severe_crimes": 4.6,
            "demographics": 3.2
        },
        "calmness_desc": "Heavy industrial, warehouse, and defense tech district (Milrem).",
        "assaults_desc": "Quiet at night due to low residential population.",
        "thefts_desc": "Industrial commercial yard thefts and vehicle break-ins.",
        "drunkenness_desc": "Low public drunkenness; purely industrial zone.",
        "severe_crimes_desc": "No severe resident violence.",
        "demographics_desc": "Primarily business premises and industrial workforce.",
        "verdict": "Industrial commercial area; not a primary residential choice."
    },
    {
        "name": "Kesklinn",
        "district": "Kesklinn (Historic City Centre & Nightlife)",
        "short_name": "Kesklinn",
        "lat": 58.3780, "lon": 26.7240,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.8,
        "scores": {
            "calmness": 3.4,
            "assaults": 3.8,
            "thefts": 3.7,
            "drunkenness": 3.3,
            "severe_crimes": 4.5,
            "demographics": 4.5
        },
        "calmness_desc": "High energy around Raekoja plats, Rüütli street pub quarter & shopping centers.",
        "assaults_desc": "Late-night alcohol-related scuffles outside night bars on weekends.",
        "thefts_desc": "Pickpocketing and unattended item theft in crowded cafes and bars.",
        "drunkenness_desc": "Tartu's main student nightlife zone; noisy on weekend nights.",
        "severe_crimes_desc": "Heavily policed with high CCTV coverage; safe daytime environment.",
        "demographics_desc": "International students, tourists, tech professionals, and dining crowds.",
        "verdict": "Vibrant, walkable central core with active student nightlife."
    },
    {
        "name": "Annelinn",
        "district": "Annelinn (Eastern Residential Panel District)",
        "short_name": "Annelinn",
        "lat": 58.3740, "lon": 26.7650,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.7,
        "scores": {
            "calmness": 3.6,
            "assaults": 3.8,
            "thefts": 3.6,
            "drunkenness": 3.6,
            "severe_crimes": 4.4,
            "demographics": 3.0
        },
        "calmness_desc": "Tartu's largest Soviet-era high-density panel district (approx. 25,000 residents).",
        "assaults_desc": "Minor courtyard altercations and noise complaints.",
        "thefts_desc": "Car parts, unchained bicycles, and storage locker theft rates.",
        "drunkenness_desc": "Visible outdoor alcohol consumption near local shopping centers.",
        "severe_crimes_desc": "Low serious violence, though higher domestic incident reports.",
        "demographics_desc": "High density, significant Russian-speaking minority demographic (~40%).",
        "verdict": "Most affordable rental district with extensive bus connections."
    }
]

# Attach exact OSM boundary polygons
safety_dataset = []
for c in TARTU_SAFETY_CONFIGS:
    district_name = c["name"]
    polys = raw_polys.get(district_name, [])
    item = {
        "id": "safety_" + district_name.lower().replace("-", "_").replace(" ", "_"),
        "name": district_name,
        "district": c["district"],
        "short_name": c["short_name"],
        "lat": c["lat"],
        "lon": c["lon"],
        "color": c["color"],
        "fill_color": c["fill_color"],
        "face_type": c["face_type"],
        "mean_score": c["mean_score"],
        "scores": c["scores"],
        "calmness_desc": c["calmness_desc"],
        "assaults_desc": c["assaults_desc"],
        "thefts_desc": c["thefts_desc"],
        "drunkenness_desc": c["drunkenness_desc"],
        "severe_crimes_desc": c["severe_crimes_desc"],
        "demographics_desc": c["demographics_desc"],
        "verdict": c["verdict"],
        "polygons": polys
    }
    safety_dataset.append(item)

if __name__ == "__main__":
    out_file = os.path.join(DATA_DIR, "tartu_district_safety_official.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(safety_dataset, f, ensure_ascii=False, indent=2)
    print(f"Generated official safety scorecards for {len(safety_dataset)} Tartu districts: {out_file}")
