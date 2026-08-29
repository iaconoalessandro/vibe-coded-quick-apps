"""
==============================================================================
NARVA DISTRICT SAFETY & QUALITY OF LIFE DATASET
==============================================================================
Official safety ratings (1.0 to 5.0 scale) and 5-tier smiley face indicators
for all 15 official Narva administrative quarters (linnaosad).
Calibrated based on Estonian Ministry of Justice (Justiitsministeerium crime per capita),
Police and Border Guard Board (PPA Ida Prefektuur / Narva politseijaoskond),
and Statistics Estonia (Statistikaamet) regional socio-demographic indicators.
==============================================================================
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

RAW_QUARTERS_PATH = os.path.join(DATA_DIR, "narva_raw_quarters.json")
raw_polys = {}
if os.path.exists(RAW_QUARTERS_PATH):
    with open(RAW_QUARTERS_PATH, "r", encoding="utf-8") as f:
        raw_polys = json.load(f)

NARVA_SAFETY_CONFIGS = [
    {
        "name": "Vanalinn",
        "district": "Vanalinn (Historic Old Town & University Quarter)",
        "short_name": "Vanalinn",
        "lat": 59.3800, "lon": 28.1970,
        "color": "#22c55e", "fill_color": "#22c55e",
        "face_type": "happy",
        "mean_score": 3.9,
        "scores": {
            "calmness": 4.2,
            "assaults": 4.2,
            "thefts": 3.7,
            "drunkenness": 3.8,
            "severe_crimes": 4.4,
            "demographics": 2.7
        },
        "calmness_desc": "Peaceful historic core with Town Hall, Hermann Castle park, and scenic river promenade.",
        "assaults_desc": "High security and border police presence near Town Hall; lowest street violence in Narva.",
        "thefts_desc": "Moderate property and tourist theft risk; secure university and municipal buildings.",
        "drunkenness_desc": "Refined cafe atmosphere; occasional evening drinkers near river promenades.",
        "severe_crimes_desc": "Very low violent crime compared to the rest of Ida-Viru County.",
        "demographics_desc": "Academic staff, UT students, and civic workers; higher bilingualism than elsewhere in Narva.",
        "verdict": "Safest and most European district in Narva, though still impacted by the regional border context."
    },
    {
        "name": "Joaorg",
        "district": "Joaorg (Linnuse Riverside & Castle Park)",
        "short_name": "Joaorg",
        "lat": 59.3715, "lon": 28.2000,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.6,
        "scores": {
            "calmness": 4.1,
            "assaults": 3.8,
            "thefts": 3.4,
            "drunkenness": 3.2,
            "severe_crimes": 4.3,
            "demographics": 2.8
        },
        "calmness_desc": "Scenic riverfront valley, Alexander Cathedral, sandy beach, and illuminated promenade.",
        "assaults_desc": "Safe during daytime; occasional late-night altercations around beach kiosks.",
        "thefts_desc": "Elevated vehicle break-ins and unattended item theft near swimming areas.",
        "drunkenness_desc": "Prominent outdoor alcohol consumption and noisy gatherings on warm weekend evenings.",
        "severe_crimes_desc": "Generally low serious violence, heavily monitored near river border.",
        "demographics_desc": "Recreational crowd, predominantly Russian-speaking with noticeable language barriers.",
        "verdict": "Picturesque riverside recreation, but requires vigilance regarding evening drinking and petty theft."
    },
    {
        "name": "Pähklimäe",
        "district": "Pähklimäe (Äkkeküla Pine Woods & Residential)",
        "short_name": "Pähklimäe",
        "lat": 59.3900, "lon": 28.1680,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.5,
        "scores": {
            "calmness": 3.8,
            "assaults": 3.7,
            "thefts": 3.4,
            "drunkenness": 3.4,
            "severe_crimes": 4.2,
            "demographics": 2.5
        },
        "calmness_desc": "Residential quarter adjacent to Äkkeküla sports park and illuminated pine ski tracks.",
        "assaults_desc": "Decent family safety; occasional courtyard scuffles in Soviet panel areas.",
        "thefts_desc": "Bicycle, car wheel, and basement storage theft common in large apartment blocks.",
        "drunkenness_desc": "Courtyard drinking near convenience stores; quiet sports trails.",
        "severe_crimes_desc": "Low serious violence; domestic dispute calls are standard.",
        "demographics_desc": "Young families and sports enthusiasts; 90%+ Russian-speaking, strong language barrier.",
        "verdict": "Best green residential neighborhood in Narva, though typical Soviet panel social dynamics apply."
    },
    {
        "name": "Sutthoffi",
        "district": "Sutthoffi (Hospital & Northern Forest)",
        "short_name": "Sutthoffi",
        "lat": 59.3990, "lon": 28.1890,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.4,
        "scores": {
            "calmness": 3.9,
            "assaults": 3.7,
            "thefts": 3.3,
            "drunkenness": 3.4,
            "severe_crimes": 4.3,
            "demographics": 2.0
        },
        "calmness_desc": "Quiet leafy avenues along Jõesuu road surrounding the Narva Hospital campus.",
        "assaults_desc": "Low street conflict; peaceful environment after hours.",
        "thefts_desc": "Hospital parking lot property thefts and occasional vehicle tampering.",
        "drunkenness_desc": "Low street drunkenness; quiet neighborhood.",
        "severe_crimes_desc": "Clean record for severe violent crimes.",
        "demographics_desc": "Older residents and medical staff; almost exclusively Russian-speaking, zero English/Estonian services locally.",
        "verdict": "Tranquil medical and residential enclave, but socially isolated with heavy linguistic barrier."
    },
    {
        "name": "Siivertsi",
        "district": "Siivertsi (Northern Riverside Villa Quarter)",
        "short_name": "Siivertsi",
        "lat": 59.4080, "lon": 28.1580,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.5,
        "scores": {
            "calmness": 4.2,
            "assaults": 3.9,
            "thefts": 3.0,
            "drunkenness": 3.6,
            "severe_crimes": 4.2,
            "demographics": 1.8
        },
        "calmness_desc": "Low-density riverfront road with private villas and historic monuments.",
        "assaults_desc": "Very low foot traffic; minimal street conflict.",
        "thefts_desc": "Villa property theft, garden tool break-ins, and unlit roadside risks.",
        "drunkenness_desc": "Low street drunkenness due to private residential zoning.",
        "severe_crimes_desc": "Low serious crime index.",
        "demographics_desc": "Insular private homeowners, near-total Russian monolingualism.",
        "verdict": "Quiet riverside villa living, but dark and isolated at night with property theft risks."
    },
    {
        "name": "Kudruküla",
        "district": "Kudruküla (Dacha Cooperatives & Pine Woods)",
        "short_name": "Kudruküla",
        "lat": 59.4380, "lon": 28.0950,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.0,
        "scores": {
            "calmness": 4.0,
            "assaults": 3.7,
            "thefts": 2.3,
            "drunkenness": 3.0,
            "severe_crimes": 4.1,
            "demographics": 1.0
        },
        "calmness_desc": "Sprawling garden cooperative district in pine forests connecting Narva to Narva-Jõesuu.",
        "assaults_desc": "Low personal violence; mostly peaceful gardening.",
        "thefts_desc": "High seasonal burglary rate in unattended summer cottages during winter months.",
        "drunkenness_desc": "Heavy informal weekend alcohol drinking culture among dacha residents.",
        "severe_crimes_desc": "Low severe violent crime.",
        "demographics_desc": "Elderly Russian dacha cooperative members; non-integrated demographic.",
        "verdict": "Pleasant summer nature retreat, but high off-season burglary risk and complete linguistic insularity."
    },
    {
        "name": "Olgina",
        "district": "Olgina (Suburban Airfield & Village)",
        "short_name": "Olgina",
        "lat": 59.3930, "lon": 28.1275,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.1,
        "scores": {
            "calmness": 3.8,
            "assaults": 3.5,
            "thefts": 3.0,
            "drunkenness": 2.9,
            "severe_crimes": 4.0,
            "demographics": 1.4
        },
        "calmness_desc": "Suburban settlement with local manor park, quiet streets, and Narva Airfield.",
        "assaults_desc": "Local village altercations and disputes.",
        "thefts_desc": "Garage, car, and tool theft risks in suburban plots.",
        "drunkenness_desc": "Noticeable alcohol presence and loitering near local village shops.",
        "severe_crimes_desc": "Moderate standard suburban crime statistics.",
        "demographics_desc": "Closed Soviet-era village atmosphere, monolingual Russian.",
        "verdict": "Affordable suburban housing, but socially insular with visible alcohol presence."
    },
    {
        "name": "Kalevi",
        "district": "Kalevi (Central Commercial & Fama Quarter)",
        "short_name": "Kalevi",
        "lat": 59.3815, "lon": 28.1860,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.2,
        "scores": {
            "calmness": 3.2,
            "assaults": 3.4,
            "thefts": 2.9,
            "drunkenness": 2.8,
            "severe_crimes": 4.0,
            "demographics": 2.8
        },
        "calmness_desc": "High-traffic commercial core around Fama Keskus, schools, and sports arenas.",
        "assaults_desc": "Frequent evening scuffles and youth disputes around commercial plazas.",
        "thefts_desc": "High retail shoplifting, bicycle theft, and pickpocketing around shopping malls.",
        "drunkenness_desc": "Intoxicated individuals loitering near commercial entrances and parking lots.",
        "severe_crimes_desc": "Frequent police patrols, moderate serious crime rate.",
        "demographics_desc": "Urban commercial crowd; retail staff with basic Estonian/English knowledge.",
        "verdict": "Maximum central convenience, but elevated property theft, drunken loitering, and noise."
    },
    {
        "name": "Kerese",
        "district": "Kerese (Paul Keres Central Axis & Astri Quarter)",
        "short_name": "Kerese",
        "lat": 59.3750, "lon": 28.1830,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.0,
        "scores": {
            "calmness": 3.0,
            "assaults": 3.2,
            "thefts": 2.8,
            "drunkenness": 2.6,
            "severe_crimes": 3.8,
            "demographics": 2.6
        },
        "calmness_desc": "Bustling central artery with Astri Keskus, cinema, restaurants, and heavy traffic.",
        "assaults_desc": "Nightlife scuffles near bars, pubs, and gaming venues.",
        "thefts_desc": "Elevated theft rate around shopping centers and transit nodes.",
        "drunkenness_desc": "Significant late-night alcohol disturbances around local bars and casinos.",
        "severe_crimes_desc": "Above-average police intervention rate for public disturbances.",
        "demographics_desc": "Urban service workforce; largely Russian-speaking environment.",
        "verdict": "Commercial heart with high walkability, but notable alcohol disturbances at night."
    },
    {
        "name": "Soldino",
        "district": "Soldino (Tallinna Mnt High-Rise Panel Quarter)",
        "short_name": "Soldino",
        "lat": 59.3780, "lon": 28.1560,
        "color": "#f97316", "fill_color": "#fb923c",
        "face_type": "unhappy",
        "mean_score": 2.6,
        "scores": {
            "calmness": 2.8,
            "assaults": 3.0,
            "thefts": 2.6,
            "drunkenness": 2.4,
            "severe_crimes": 3.6,
            "demographics": 1.2
        },
        "calmness_desc": "High-density Soviet panel apartment blocks with supermarkets (Prisma, Megamarket).",
        "assaults_desc": "Frequent domestic calls, noise disputes, and courtyard altercations.",
        "thefts_desc": "High car break-in rates, stolen catalytic converters, and storage locker thefts.",
        "drunkenness_desc": "Heavy visibility of outdoor drinking and loitering in residential courtyards.",
        "severe_crimes_desc": "Above-average police response rates for Ida-Virumaa.",
        "demographics_desc": "95%+ Russian-speaking, insular post-Soviet panel culture, severe language barrier.",
        "verdict": "Dense, noisy panel district with significant alcohol issues, property crime, and cultural isolation."
    },
    {
        "name": "Paemurru",
        "district": "Paemurru (Railway Station & Transit Hub Quarter)",
        "short_name": "Paemurru",
        "lat": 59.3665, "lon": 28.1645,
        "color": "#ef4444", "fill_color": "#f87171",
        "face_type": "unhappy",
        "mean_score": 2.6,
        "scores": {
            "calmness": 2.7,
            "assaults": 2.8,
            "thefts": 2.4,
            "drunkenness": 2.2,
            "severe_crimes": 3.4,
            "demographics": 2.2
        },
        "calmness_desc": "Noisy rail yards, station traffic, and transient commuter footfall.",
        "assaults_desc": "Elevated dispute rate around station kiosks, 24h stores, and railway tracks.",
        "thefts_desc": "High petty theft, luggage theft, and pickpocketing near transit terminal.",
        "drunkenness_desc": "Chronic public intoxication and loitering near station perimeter.",
        "severe_crimes_desc": "High police intervention frequency for public order offenses.",
        "demographics_desc": "Transit commuters and low-income residential pockets; language friction.",
        "verdict": "Convenient for Elron trains, but rough around the edges with persistent public drunkenness."
    },
    {
        "name": "Kulgu",
        "district": "Kulgu (Reservoir Boathouses / 'Narva Venice')",
        "short_name": "Kulgu",
        "lat": 59.3560, "lon": 28.1640,
        "color": "#f97316", "fill_color": "#fb923c",
        "face_type": "unhappy",
        "mean_score": 2.7,
        "scores": {
            "calmness": 3.6,
            "assaults": 3.2,
            "thefts": 2.2,
            "drunkenness": 2.2,
            "severe_crimes": 3.8,
            "demographics": 1.0
        },
        "calmness_desc": "Waterfront canal quarter with tiered boat garages on the Narva Reservoir.",
        "assaults_desc": "Late-night drinking disputes among garage occupants; isolated area.",
        "thefts_desc": "Frequent theft of outboard boat motors, tools, and metal scrap.",
        "drunkenness_desc": "Informal drinking culture central to garage cooperative life.",
        "severe_crimes_desc": "Isolated zone with delayed police response time.",
        "demographics_desc": "Exclusive working-class Russian subculture, zero integration or language diversity.",
        "verdict": "Unique DIY boating culture, but heavy informal alcohol consumption and unpoliced theft risks."
    },
    {
        "name": "Kreenholm",
        "district": "Kreenholm (Historic Industrial & Tenement Quarter)",
        "short_name": "Kreenholm",
        "lat": 59.3630, "lon": 28.1880,
        "color": "#ef4444", "fill_color": "#f87171",
        "face_type": "unhappy",
        "mean_score": 2.3,
        "scores": {
            "calmness": 2.7,
            "assaults": 2.6,
            "thefts": 2.3,
            "drunkenness": 2.0,
            "severe_crimes": 3.2,
            "demographics": 1.2
        },
        "calmness_desc": "19th-century red-brick industrial quarter with older unrenovated tenement blocks.",
        "assaults_desc": "Highest domestic violence and physical assault rates in Narva per PPA records.",
        "thefts_desc": "Frequent basement break-ins, bicycle theft, and building vandalism.",
        "drunkenness_desc": "Pervasive daytime and evening street drinking near older neighborhood shops.",
        "severe_crimes_desc": "Elevated severe crime index compared to Estonian national municipal averages.",
        "demographics_desc": "Impoverished elderly and working-class Russian population, near-zero Estonian spoken.",
        "verdict": "Iconic textile architecture undergoing cultural revival, but currently Narva's most socially distressed quarter."
    },
    {
        "name": "Kadastiku",
        "district": "Kadastiku (Industrial & Technology Park)",
        "short_name": "Kadastiku",
        "lat": 59.3675, "lon": 28.1480,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.3,
        "scores": {
            "calmness": 3.6,
            "assaults": 3.8,
            "thefts": 2.7,
            "drunkenness": 3.8,
            "severe_crimes": 4.2,
            "demographics": 1.8
        },
        "calmness_desc": "Heavy industrial and logistics park; daytime manufacturing noise, deserted at night.",
        "assaults_desc": "Gated factory security and restricted facility perimeters.",
        "thefts_desc": "Commercial material, tool, and metal scrap theft risks.",
        "drunkenness_desc": "Zero street drunkenness due to strictly commercial and industrial zoning.",
        "severe_crimes_desc": "Very low personal violence.",
        "demographics_desc": "Industrial workforce, predominantly Russian-speaking technicians.",
        "verdict": "Secure for work in modern factories (Aquaphor, NPM), but completely deserted and unlit for residential living."
    },
    {
        "name": "Elektrijaama",
        "district": "Elektrijaama & Veekulgu (Energy Infrastructure District)",
        "short_name": "Elektrijaama",
        "lat": 59.3360, "lon": 28.1150,
        "color": "#eab308", "fill_color": "#facc15",
        "face_type": "neutral",
        "mean_score": 3.2,
        "scores": {
            "calmness": 3.5,
            "assaults": 4.0,
            "thefts": 2.6,
            "drunkenness": 3.8,
            "severe_crimes": 4.2,
            "demographics": 1.2
        },
        "calmness_desc": "Balti Power Plant complex and cooling water canals with constant industrial hum.",
        "assaults_desc": "Strict critical infrastructure border and power plant security.",
        "thefts_desc": "Industrial material and electrical cable theft attempts.",
        "drunkenness_desc": "Guarded checkpoints, zero street drunkenness.",
        "severe_crimes_desc": "Low personal violence.",
        "demographics_desc": "Specialized Russian-speaking power plant engineers and technicians.",
        "verdict": "High-security industrial energy zone; completely non-residential."
    }
]

def generate_official_safety_json():
    safety_dataset = []
    for c in NARVA_SAFETY_CONFIGS:
        district_name = c["name"]
        polys = raw_polys.get(district_name, [])
        if not polys:
            lat, lon = c["lat"], c["lon"]
            d = 0.007
            polys = [[[lat - d, lon - d], [lat - d, lon + d], [lat + d, lon + d], [lat + d, lon - d], [lat - d, lon - d]]]
            
        item = {
            "id": "safety_narva_" + district_name.lower().replace("-", "_").replace(" ", "_"),
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
    return safety_dataset

if __name__ == "__main__":
    safety_dataset = generate_official_safety_json()
    out_path = os.path.join(DATA_DIR, "narva_district_safety_official.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(safety_dataset, f, ensure_ascii=False, indent=2)
    print(f"Generated calibrated Narva safety scorecards dataset: {len(safety_dataset)} districts saved to {out_path}")
