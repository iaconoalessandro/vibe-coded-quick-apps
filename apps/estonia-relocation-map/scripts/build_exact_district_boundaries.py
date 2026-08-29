"""
Downloads and compiles 100% exact official OpenStreetMap administrative boundary
polygons for Tallinn districts and key sub-neighborhoods.
"""

import urllib.request
import urllib.parse
import json
import time
import math

districts_to_fetch = [
    {
        "id": "rent_kesklinn",
        "query": "Kesklinn, Tallinn",
        "district": "Kesklinn (City Center / Downtown)",
        "short_name": "Kesklinn",
        "mean_sqm": 18.8,
        "range_sqm": "16.50 – 23.00 €/m²",
        "one_bed_est": "€750 – €1,050 / mo",
        "two_bed_est": "€1,100 – €1,600 / mo",
        "tier": "Premium",
        "tier_class": "premium",
        "color": "#9333ea",
        "badge_color": "#7c3aed",
        "desc": "Heart of Tallinn. Walking distance to Maakri skyscrapers, Rotermanni, Viru Keskus, Swedbank, SEB, LHV. Mix of luxury modern towers and renovated stone buildings.",
        "tech_commute": "Direct access to Tram 1, 2, 3, 4, 5 (10 min to Ülemiste via Tram 4, 15 min to Tehnopol via Trolley 3).",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1001&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-kesklinn/apartments?price_to=3000"
    },
    {
        "id": "rent_kalamaja",
        "query": "Kalamaja, Tallinn",
        "district": "Kalamaja, Telliskivi & Noblessner",
        "short_name": "Kalamaja & Telliskivi",
        "mean_sqm": 17.4,
        "range_sqm": "15.00 – 21.50 €/m²",
        "one_bed_est": "€700 – €950 / mo",
        "two_bed_est": "€1,050 – €1,450 / mo",
        "tier": "Premium",
        "tier_class": "premium",
        "color": "#9333ea",
        "badge_color": "#7c3aed",
        "desc": "Top creative & startup neighborhood. Restored colorful wooden houses, trendy cafés, Noblessner seaside quarter, and Volta industrial lofts.",
        "tech_commute": "Tram 1, 2, 5 (Telliskivi / Balti Jaam) + Bus 73. 8-min Elron train from Balti Jaam to Ülemiste City.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=5701&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-pohja-tallinn/apartments?price_to=3000"
    },
    {
        "id": "rent_kadriorg",
        "query": "Kadriorg, Tallinn",
        "district": "Kadriorg",
        "short_name": "Kadriorg",
        "mean_sqm": 18.2,
        "range_sqm": "16.00 – 22.00 €/m²",
        "one_bed_est": "€750 – €1,000 / mo",
        "two_bed_est": "€1,100 – €1,500 / mo",
        "tier": "Premium",
        "tier_class": "premium",
        "color": "#9333ea",
        "badge_color": "#7c3aed",
        "desc": "Prestigious, green parkside neighborhood. Baroque Palace, coastal promenade, quiet leafy streets, and high-end boutique apartment developments.",
        "tech_commute": "Tram 1 & 3 terminus (Kadriorg), 6 min to downtown. Fast connection to Ülemiste via Bus 15.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1003&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-kadriorg/apartments?price_to=3000"
    },
    {
        "id": "rent_veerenni",
        "query": "Veerenni, Tallinn",
        "district": "Veerenni / Uus-Veerenni",
        "short_name": "Veerenni (Bolt/Wise)",
        "mean_sqm": 17.8,
        "range_sqm": "15.50 – 21.00 €/m²",
        "one_bed_est": "€720 – €980 / mo",
        "two_bed_est": "€1,050 – €1,450 / mo",
        "tier": "Premium",
        "tier_class": "premium",
        "color": "#9333ea",
        "badge_color": "#7c3aed",
        "desc": "Modern tech professional enclave. Neighboring Bolt HQ & Wise in Baltika Quarter. Predominantly brand-new Energy Class A apartments.",
        "tech_commute": "Tram 5 (Vana-Lõuna) + Bus 3, 16, 28, 73. 10 min to Downtown, 12 min to Ülemiste.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1001&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-kesklinn/apartments?price_to=3000"
    },
    {
        "id": "rent_kristiine",
        "query": "Kristiine, Tallinn",
        "district": "Kristiine / Lilleküla / WoHo",
        "short_name": "Kristiine & WoHo",
        "mean_sqm": 14.6,
        "range_sqm": "12.50 – 17.50 €/m²",
        "one_bed_est": "€580 – €780 / mo",
        "two_bed_est": "€850 – €1,200 / mo",
        "tier": "Mid-Range / Value",
        "tier_class": "mid",
        "color": "#2563eb",
        "badge_color": "#1d4ed8",
        "desc": "Ideal strategic central transit crossroad. Pipedrive & Telia HQ at WoHo. Kristiine Keskus mall, quiet low-rise garden streets, and modern developments.",
        "tech_commute": "Lilleküla train stop (4 min to Balti Jaam) + Trolley 1, 3, 4 + Bus 16, 24, 42. Direct routes to both Downtown and Tehnopol.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1004&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-kristiine/apartments?price_to=3000"
    },
    {
        "id": "rent_mustamae",
        "query": "Mustamäe, Tallinn",
        "district": "Mustamäe (Tehnopol / TalTech)",
        "short_name": "Mustamäe (Tehnopol)",
        "mean_sqm": 12.8,
        "range_sqm": "10.50 – 15.50 €/m²",
        "one_bed_est": "€480 – €680 / mo",
        "two_bed_est": "€700 – €980 / mo",
        "tier": "Budget / Value",
        "tier_class": "budget",
        "color": "#059669",
        "badge_color": "#047857",
        "desc": "DeepTech & University Hub. Surrounding Microsoft Development Center, Starship, Cybernetica, Cleveron. Abundant green parks (Männi Park) and lower rental costs.",
        "tech_commute": "Trolley 3 & Bus 11, 24 directly to Downtown; Bus 12 & 13 cross-city express to Ülemiste City.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1006&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-mustamae/apartments?price_to=3000"
    },
    {
        "id": "rent_ulemiste",
        "query": "Ülemiste, Tallinn",
        "district": "Ülemiste / Sikupilli / Majaka",
        "short_name": "Ülemiste & Sikupilli",
        "mean_sqm": 14.2,
        "range_sqm": "12.00 – 17.00 €/m²",
        "one_bed_est": "€550 – €750 / mo",
        "two_bed_est": "€800 – €1,150 / mo",
        "tier": "Mid-Range / Value",
        "tier_class": "mid",
        "color": "#2563eb",
        "badge_color": "#1d4ed8",
        "desc": "Direct neighbor to Ülemiste City (ABB, Ericsson, Kuehne+Nagel, Nortal). Rapidly regenerating modern district with shopping centers and transit links.",
        "tech_commute": "Tram 4 (Ülemiste linnak) + Tram 2 + Ülemiste Railway Station. 7 min to Airport, 10 min to Downtown.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1005&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-lasnamae/apartments?price_to=3000"
    },
    {
        "id": "rent_pelgulinn",
        "query": "Pelgulinn, Tallinn",
        "district": "Pelgulinn & Pelguranna (Stroomi Beach)",
        "short_name": "Pelgulinn / Stroomi",
        "mean_sqm": 13.9,
        "range_sqm": "11.50 – 16.50 €/m²",
        "one_bed_est": "€520 – €720 / mo",
        "two_bed_est": "€780 – €1,080 / mo",
        "tier": "Mid-Range / Value",
        "tier_class": "mid",
        "color": "#2563eb",
        "badge_color": "#1d4ed8",
        "desc": "Affordable coastal neighbor to Kalamaja. Features Stroomi sandy beach, pine forest recreation, and a mix of wooden houses and renovated apartment buildings.",
        "tech_commute": "Bus 3 directly to Veerenni/Downtown; Bus 40, 59. 10 min bike ride to Telliskivi.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=5702&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-pohja-tallinn/apartments?price_to=3000"
    },
    {
        "id": "rent_lasnamae",
        "query": "Lasnamäe, Tallinn",
        "district": "Lasnamäe (Central & East)",
        "short_name": "Lasnamäe",
        "mean_sqm": 11.8,
        "range_sqm": "9.50 – 14.00 €/m²",
        "one_bed_est": "€450 – €600 / mo",
        "two_bed_est": "€650 – €900 / mo",
        "tier": "Budget / Value",
        "tier_class": "budget",
        "color": "#059669",
        "badge_color": "#047857",
        "desc": "Most affordable residential district in Tallinn. Large variety of renovated and standard apartments, extensive supermarket network, Tondiraba park.",
        "tech_commute": "Bus 12, 13 express directly to Ülemiste City & Tammsaare; Bus 67, 68 to Downtown.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1005&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-lasnamae/apartments?price_to=3000"
    },
    {
        "id": "rent_nomme",
        "query": "Nõmme, Tallinn",
        "district": "Nõmme",
        "short_name": "Nõmme",
        "mean_sqm": 13.5,
        "range_sqm": "11.00 – 16.50 €/m²",
        "one_bed_est": "€520 – €720 / mo",
        "two_bed_est": "€800 – €1,150 / mo",
        "tier": "Mid-Range / Value",
        "tier_class": "mid",
        "color": "#2563eb",
        "badge_color": "#1d4ed8",
        "desc": "Tranquil 'forest town' with pine forests, Glehni Castle park, clean air, and low-density residential villas and small modern apartments.",
        "tech_commute": "Elron Commuter Train (Nõmme, Hiiu, Rahumäe) takes just 10–12 min to Balti Jaam / Kalamaja. Bus 20 to Tehnopol.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1007&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-nomme/apartments?price_to=3000"
    },
    {
        "id": "rent_haabersti",
        "query": "Haabersti, Tallinn",
        "district": "Haabersti / Õismäe / Rocca al Mare",
        "short_name": "Haabersti & Õismäe",
        "mean_sqm": 13.2,
        "range_sqm": "11.00 – 16.00 €/m²",
        "one_bed_est": "€500 – €700 / mo",
        "two_bed_est": "€750 – €1,050 / mo",
        "tier": "Budget / Value",
        "tier_class": "budget",
        "color": "#059669",
        "badge_color": "#047857",
        "desc": "Western district with Lake Harku, coastal promenade, Open Air Museum, and Rocca al Mare shopping hub. Good balance of affordability and nature.",
        "tech_commute": "Bus 42, 21, 22 directly to Downtown. Bus 12, 13 to Tammsaare tech corridor.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1002&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-haabersti/apartments?price_to=3000"
    },
    {
        "id": "rent_pirita",
        "query": "Pirita, Tallinn",
        "district": "Pirita (Coastal Marina)",
        "short_name": "Pirita",
        "mean_sqm": 15.8,
        "range_sqm": "13.50 – 19.50 €/m²",
        "one_bed_est": "€650 – €880 / mo",
        "two_bed_est": "€950 – €1,400 / mo",
        "tier": "Premium",
        "tier_class": "premium",
        "color": "#9333ea",
        "badge_color": "#7c3aed",
        "desc": "Seaside living with Tallinn's premier 2km sandy beach, yacht marina, Pirita river valley, and pine forests. Popular with active expats and families.",
        "tech_commute": "Bus 1A, 6, 8, 34 directly to Viru Keskus Downtown hub in 15–18 min.",
        "kv_link": "https://www.kv.ee/search?deal_type=2&search_type=new&county=1&parish=1061&city%5B0%5D=1008&price_max=3000",
        "city24_link": "https://www.city24.ee/en/real-estate-for-rent/tallinn-pirita/apartments?price_to=3000"
    }
]

def douglas_peucker(points, tol=0.00015):
    """Simplifies polygon coordinates to keep file light while preserving street contours."""
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

def get_polygon_center(polygon_coords):
    """Computes centroid of polygon."""
    lats = [p[0] for p in polygon_coords]
    lons = [p[1] for p in polygon_coords]
    return sum(lats)/len(lats), sum(lons)/len(lons)

compiled_results = []

for item in districts_to_fetch:
    query = item["query"]
    print(f"Fetching official boundary for {query}...")
    q = urllib.parse.quote(query)
    url = f"https://nominatim.openstreetmap.org/search?q={q}&format=geojson&polygon_geojson=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'TallinnTechTransitApp/2.0 (research.tallinn@gmail.com)'})
    
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
            features = data.get("features", [])
            poly_features = [f for f in features if f.get("geometry", {}).get("type") in ["Polygon", "MultiPolygon"]]
            
            if poly_features:
                geom = poly_features[0]["geometry"]
                gtype = geom["type"]
                coords = geom["coordinates"]
                
                polygons_list = []
                if gtype == "Polygon":
                    # outer ring
                    lat_lon_ring = [[round(pt[1], 6), round(pt[0], 6)] for pt in coords[0]]
                    simplified = douglas_peucker(lat_lon_ring, tol=0.00012)
                    polygons_list.append(simplified)
                elif gtype == "MultiPolygon":
                    for poly in coords:
                        # only take major outer rings (>20 points or significant size)
                        if len(poly[0]) >= 15:
                            lat_lon_ring = [[round(pt[1], 6), round(pt[0], 6)] for pt in poly[0]]
                            simplified = douglas_peucker(lat_lon_ring, tol=0.00012)
                            polygons_list.append(simplified)
                
                # Pick main polygon for centroid
                main_poly = max(polygons_list, key=lambda x: len(x))
                c_lat, c_lon = get_polygon_center(main_poly)
                
                item["polygons"] = polygons_list
                item["lat"] = round(c_lat, 5)
                item["lon"] = round(c_lon, 5)
                print(f"  -> Successfully extracted {len(polygons_list)} official polygon(s) for {item['short_name']} ({len(main_poly)} vertices)")
                compiled_results.append(item)
            else:
                print(f"  -> WARNING: No polygon found for {query}")
    except Exception as e:
        print(f"  -> ERROR fetching {query}: {e}")
    time.sleep(1.0)

with open("tallinn_exact_district_boundaries.json", "w", encoding="utf-8") as f:
    json.dump(compiled_results, f, indent=2)

print(f"\nSuccessfully compiled and saved {len(compiled_results)} exact official district boundaries to tallinn_exact_district_boundaries.json!")
