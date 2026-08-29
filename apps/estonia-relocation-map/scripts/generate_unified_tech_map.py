"""
==============================================================================
ESTONIA TECH HUBS & PUBLIC TRANSIT MAP GENERATOR (TALLINN & TARTU)
==============================================================================
Author: Data Science & ML Transit Intelligence
Targets: 
  - Tallinn: 59 Verified Tech/R&D Hubs, 8 Districts, 67 Bus lines, 4 Trolley, 5 Tram, 3 Train Corridors
  - Tartu: 32 Verified Tech/R&D Hubs, 18 Districts, 23 Bus lines, 3 Train Corridors
Features:
  1. Top-Left Glassmorphic City Selector (Tallinn ↔ Tartu instant transition)
  2. Default Clean Map State (Initial load is clean, only green parks & district watermarks visible)
  3. 5-Tier Custom SVG Smiley Face Safety Scorecards with Floating-Point Means (1.0–5.0)
  4. Exact Street-Delimited District Boundaries with €/m² Badges & KV.ee/City24.ee links
  5. 1-Click Google Maps & Apple Maps Navigation in company popups
  6. 100% Cross-Platform Standalone execution (.html) + KML/KMZ exports
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

def load_json_file(filename, default=None):
    p = get_data_path(filename)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return default if default is not None else []

# ============================================================================
# 1. LOAD TALLINN DATASETS
# ============================================================================
from generate_tallinn_tech_map import (
    COMPANIES_DATA as TALLINN_COMPANIES,
    TRAM_LINES as TALLINN_TRAM_LINES,
    TRAIN_LINES as TALLINN_TRAIN_LINES,
    TRANSIT_HUBS as TALLINN_TRANSIT_HUBS,
    TALLINN_DISTRICT_LABELS
)

TALLINN_SAFETY = load_json_file("district_safety_data_official.json")
TALLINN_RENTALS = load_json_file("tallinn_exact_district_boundaries.json")
TALLINN_PARKS = load_json_file("tallinn_parks_clean.json")
TALLINN_CLUSTERS = load_json_file("tallinn_tech_cluster_boundaries.json")
TALLINN_EXACT_TRANSIT = load_json_file("tallinn_exact_transit_routes.json", default={})

# ============================================================================
# 2. LOAD TARTU DATASETS
# ============================================================================
from tartu_companies_data import TARTU_COMPANIES
from tartu_transit_routes import (
    TARTU_BUS_ROUTES,
    TARTU_TRAIN_LINES,
    TARTU_TRANSIT_HUBS,
    TARTU_TECH_CLUSTERS,
    TARTU_DISTRICT_LABELS
)

TARTU_SAFETY = load_json_file("tartu_district_safety_official.json")
TARTU_RENTALS = load_json_file("tartu_exact_district_boundaries.json")
TARTU_PARKS = load_json_file("tartu_parks_clean.json")
MEME_FACES_DATA = load_json_file("meme_faces_base64.json", default={})

# ============================================================================
# 3. LOAD NARVA DATASETS
# ============================================================================
from narva_companies_data import NARVA_COMPANIES
from narva_transit_routes import (
    NARVA_BUS_ROUTES,
    NARVA_TRAIN_LINES,
    NARVA_TRANSIT_HUBS,
    NARVA_TECH_CLUSTERS,
    NARVA_DISTRICT_LABELS
)

NARVA_SAFETY = load_json_file("narva_district_safety_official.json")
NARVA_RENTALS = load_json_file("narva_exact_district_boundaries.json")
NARVA_PARKS = load_json_file("narva_parks_clean.json")

# ============================================================================
# 3.5 LOAD KOHTLA-JÄRVE DATASETS
# ============================================================================
from kohtla_jarve_companies_data import KOHTLA_JARVE_COMPANIES
from kohtla_jarve_transit_routes import (
    KOHTLA_JARVE_BUS_ROUTES,
    KOHTLA_JARVE_TRAIN_LINES,
    KOHTLA_JARVE_TRANSIT_HUBS,
    KOHTLA_JARVE_TECH_CLUSTERS,
    KOHTLA_JARVE_DISTRICT_LABELS
)

KOHTLA_JARVE_SAFETY = load_json_file("kohtla_jarve_district_safety_official.json")
KOHTLA_JARVE_RENTALS = load_json_file("kohtla_jarve_exact_district_boundaries.json")
KOHTLA_JARVE_PARKS = load_json_file("kohtla_jarve_parks_clean.json")

# ============================================================================
# 3.8 LOAD PÄRNU DATASETS
# ============================================================================
from parnu_companies_data import PARNU_COMPANIES
from parnu_transit_routes import (
    PARNU_BUS_ROUTES,
    PARNU_TRAIN_LINES,
    PARNU_TRANSIT_HUBS,
    PARNU_TECH_CLUSTERS,
    PARNU_DISTRICT_LABELS
)

PARNU_SAFETY = load_json_file("parnu_district_safety_official.json")
PARNU_RENTALS = load_json_file("parnu_exact_district_boundaries.json")
PARNU_PARKS = load_json_file("parnu_parks_clean.json")

# ============================================================================
# 4. HELPER TO BUILD CATEGORY REGISTRY
# ============================================================================
def build_category_registry(companies_list):
    categories = sorted(list(set(c["category"] for c in companies_list)))
    cat_registry = {}
    for cat in categories:
        safe_id = "cat_" + re.sub(r'[^a-zA-Z0-9]', '_', cat).lower()
        cat_registry[cat] = {
            "id": safe_id,
            "name": cat,
            "companies": [c for c in companies_list if c["category"] == cat]
        }
    return cat_registry

def partition_transit_routes(routes_dict):
    """Split the unified per-city transit file by its `group` field.

    Geometry, colours and the corridor-aware `offset_px` are produced by
    scripts/build_osm_transit.py + scripts/merge_transit_networks.py from the
    operators' OSM route relations, so this only has to bucket them.
    """
    buckets = {"tram": {}, "trolley": {}, "bus_key": {}, "bus_suburb": {},
               "bus_outside": {}, "train": {}}
    for key, r in (routes_dict or {}).items():
        group = r.get("group") or "bus_suburb"
        if group not in buckets:
            group = "bus_suburb"
        buckets[group][key] = {
            "id": key,
            "num": r.get("num"),
            "label": r.get("label", key),
            "color": r.get("color", "#64748b"),
            "name": r.get("name", ""),
            "coords": r.get("coords", []),
            "weight": r.get("weight", 3.4),
            "offset": r.get("offset_px", 0),
            "group": group,
            "length_km": r.get("length_km"),
            "in_osm": r.get("in_osm", True),
            "source": r.get("geometry_source", ""),
            "stations": r.get("stations") or [],
            "show": False,
        }
    return buckets


def load_city_transit(city):
    """Unified transit file written by scripts/merge_transit_networks.py."""
    return partition_transit_routes(load_json_file(f"{city}_transit_final.json", default={}))


# ============================================================================
# 5. PREPARE STRUCTURED MULTI-CITY BUNDLE
# ============================================================================
TRANSIT = {c: load_city_transit(c) for c in
           ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]}

CITY_META = {
    "tallinn":      {"cityName": "Tallinn",      "icon": "🏙️", "center": [59.4370, 24.7536], "zoom": 12,
                     "bounds": [[59.3300, 24.5300], [59.5200, 24.9600]],
                     "title": "Tallinn Tech & Rent Map",      "hasTrams": True,  "hasTrolleys": True},
    "tartu":        {"cityName": "Tartu",        "icon": "🎓", "center": [58.3780, 26.7290], "zoom": 13,
                     "bounds": [[58.3200, 26.6400], [58.4300, 26.8100]],
                     "title": "Tartu Tech & Rent Map",        "hasTrams": False, "hasTrolleys": False},
    "parnu":        {"cityName": "Pärnu",        "icon": "🏖️", "center": [58.3850, 24.5050], "zoom": 13,
                     "bounds": [[58.3300, 24.3800], [58.4300, 24.6800]],
                     "title": "Pärnu Tech & Rent Map",        "hasTrams": False, "hasTrolleys": False},
    "narva":        {"cityName": "Narva",        "icon": "🏰", "center": [59.3773, 28.1903], "zoom": 13,
                     "bounds": [[59.3300, 28.0200], [59.4600, 28.2300]],
                     "title": "Narva Tech & Rent Map",        "hasTrams": False, "hasTrolleys": False},
    "kohtla_jarve": {"cityName": "Kohtla-Järve & Jõhvi", "icon": "🧪", "center": [59.3850, 27.3500], "zoom": 12,
                     "bounds": [[59.2900, 27.1800], [59.4500, 27.6400]],
                     "title": "Kohtla-Järve & Jõhvi Tech & Rent Map", "hasTrams": False, "hasTrolleys": False},
}

CITY_SOURCES = {
    "companies": {
        "tallinn": TALLINN_COMPANIES, "tartu": TARTU_COMPANIES, "parnu": PARNU_COMPANIES,
        "narva": NARVA_COMPANIES, "kohtla_jarve": KOHTLA_JARVE_COMPANIES,
    },
    "districts": {
        "tallinn": TALLINN_DISTRICT_LABELS, "tartu": TARTU_DISTRICT_LABELS,
        "parnu": PARNU_DISTRICT_LABELS, "narva": NARVA_DISTRICT_LABELS,
        "kohtla_jarve": KOHTLA_JARVE_DISTRICT_LABELS,
    },
    "safety": {
        "tallinn": TALLINN_SAFETY, "tartu": TARTU_SAFETY, "parnu": PARNU_SAFETY,
        "narva": NARVA_SAFETY, "kohtla_jarve": KOHTLA_JARVE_SAFETY,
    },
    "rentals": {
        "tallinn": TALLINN_RENTALS, "tartu": TARTU_RENTALS, "parnu": PARNU_RENTALS,
        "narva": NARVA_RENTALS, "kohtla_jarve": KOHTLA_JARVE_RENTALS,
    },
    "parks": {
        "tallinn": TALLINN_PARKS, "tartu": TARTU_PARKS, "parnu": PARNU_PARKS,
        "narva": NARVA_PARKS, "kohtla_jarve": KOHTLA_JARVE_PARKS,
    },
    "clusters": {
        "tallinn": TALLINN_CLUSTERS, "tartu": TARTU_TECH_CLUSTERS, "parnu": PARNU_TECH_CLUSTERS,
        "narva": NARVA_TECH_CLUSTERS, "kohtla_jarve": KOHTLA_JARVE_TECH_CLUSTERS,
    },
    "hubs": {
        "tallinn": TALLINN_TRANSIT_HUBS, "tartu": TARTU_TRANSIT_HUBS, "parnu": PARNU_TRANSIT_HUBS,
        "narva": NARVA_TRANSIT_HUBS, "kohtla_jarve": KOHTLA_JARVE_TRANSIT_HUBS,
    },
}

CITY_DATA_BUNDLE = {}
for _c, _meta in CITY_META.items():
    _comp = CITY_SOURCES["companies"][_c]
    _t = TRANSIT[_c]
    CITY_DATA_BUNDLE[_c] = dict(
        _meta,
        categories=build_category_registry(_comp),
        companiesCount=len(_comp),
        districts=CITY_SOURCES["districts"][_c],
        safety=CITY_SOURCES["safety"][_c],
        rentals=CITY_SOURCES["rentals"][_c],
        parks=CITY_SOURCES["parks"][_c],
        clusters=CITY_SOURCES["clusters"][_c],
        hubs=CITY_SOURCES["hubs"][_c],
        trams=_t["tram"],
        trolleys=_t["trolley"],
        busKey=_t["bus_key"],
        busSuburb=_t["bus_suburb"],
        busOutside=_t["bus_outside"],
        trains=_t["train"],
    )
    CITY_DATA_BUNDLE[_c]["hasTrams"] = bool(_t["tram"])
    CITY_DATA_BUNDLE[_c]["hasTrolleys"] = bool(_t["trolley"])

# ============================================================================
# 5. HTML MAP BUILDER
# ============================================================================
def generate_unified_html(default_city="tallinn"):
    """
    Builds the interactive Leaflet HTML map.
    """

    city_buttons_html = "".join(
        f'''        <button id="btn_city_{key}" class="city-toggle-btn {"active" if default_city == key else ""}" onclick="switchCity('{key}')">
            <span class="city-btn-name">{meta["icon"]} {meta["cityName"]}</span>
            <span class="city-count-badge" id="badge_{key}_count">{CITY_DATA_BUNDLE[key]["companiesCount"]} tech hubs</span>
        </button>
''' for key, meta in CITY_META.items())

    json_bundle = json.dumps(CITY_DATA_BUNDLE, ensure_ascii=False)
    meme_faces_json = json.dumps(MEME_FACES_DATA, ensure_ascii=False)
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estonia Tech Hubs &amp; Transit Map — Tallinn · Tartu · Pärnu · Narva · Kohtla-Järve</title>
    
    <!-- Leaflet CSS & JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>
    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>
    <!-- leaflet-polylineoffset 1.1.1 (BSD-2) embedded so the file stays standalone.
         Gives L.Polyline an `offset` option measured in SCREEN PIXELS, which is what
         keeps 5-6 lines sharing one street individually visible at every zoom level. -->
    <script>
/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/leaflet-polylineoffset@1.1.1/leaflet.polylineoffset.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,n){{"function"==typeof define&&define.amd?define(["leaflet"],t):"object"==typeof exports&&(module.exports=t(require("leaflet"))),void 0!==n&&n.L&&(n.L.PolylineOffset=t(L))}}((function(t){{function n(t,n){{if(t&&!(t.length<1))for(var e=1,f=t.length;e<f;e++)n(t[e-1],t[e])}}function e(t,n){{if(t.x===n.x)return t.y===n.y?null:{{x:t.x}};var e=(n.y-t.y)/(n.x-t.x);return{{a:e,b:t.y-e*t.x}}}}function f(t,n,f,i){{var o=e(t,n),r=e(f,i);if(null===o||null===r)return null;if(o.hasOwnProperty("x"))return r.hasOwnProperty("x")?null:{{x:o.x,y:r.a*o.x+r.b}};if(r.hasOwnProperty("x"))return{{x:r.x,y:o.a*r.x+o.b}};if(o.a===r.a)return null;var s=(r.b-o.b)/(o.a-r.a);return{{x:s,y:o.a*s+o.b}}}}function i(t,n,e){{return{{x:t.x+n*Math.cos(e),y:t.y+n*Math.sin(e)}}}}var o={{offsetPointLine:function(e,f){{var o=[];return n(e,t.bind((function(t,n){{if(t.x!==n.x||t.y!==n.y){{var e=Math.atan2(t.y-n.y,t.x-n.x)-Math.PI/2;o.push({{offsetAngle:e,original:[t,n],offset:[i(t,f,e),i(n,f,e)]}})}}}}),this)),o}},offsetPoints:function(t,n){{var e=this.offsetPointLine(t,n);return this.joinLineSegments(e,n)}},joinSegments:function(t,n,e){{return this.circularArc(t,n,e).filter((function(t){{return t}}))}},joinLineSegments:function(e,f){{var i=[],o=e[0],r=e[e.length-1];return o&&r&&(i.push(o.offset[0]),n(e,t.bind((function(t,n){{i=i.concat(this.joinSegments(t,n,f))}}),this)),i.push(r.offset[1])),i}},segmentAsVector:function(t){{return{{x:t[1].x-t[0].x,y:t[1].y-t[0].y}}}},getSignedAngle:function(t,n){{const e=this.segmentAsVector(t),f=this.segmentAsVector(n);return Math.atan2(e.x*f.y-e.y*f.x,e.x*f.x+e.y*f.y)}},circularArc:function(t,n,e){{if(t.offsetAngle===n.offsetAngle)return[t.offset[1]];const o=this.getSignedAngle(t.offset,n.offset);if(o*e>0&&o*this.getSignedAngle(t.offset,[t.offset[0],n.offset[1]])>0)return[f(t.offset[0],t.offset[1],n.offset[0],n.offset[1])];var r=[],s=t.original[1],u=e>0,a=u?n.offsetAngle:t.offsetAngle,l=u?t.offsetAngle:n.offsetAngle;l<a&&(l+=2*Math.PI);for(var c=Math.PI/8,h=a;h<l;h+=c)r.push(i(s,e,h));return r.push(i(s,e,l)),u?r.reverse():r}}}};return t.Polyline.include({{_projectLatlngs:function(n,e,f){{if(n.length>0&&n[0]instanceof t.LatLng){{var i=n.map(t.bind((function(t){{var n=this._map.latLngToLayerPoint(t);return f&&f.extend(n),n}}),this));this.options.offset&&(i=t.PolylineOffset.offsetPoints(i,this.options.offset)),e.push(i.map((function(n){{return t.point(n.x,n.y)}})))}}else n.forEach(t.bind((function(t){{this._projectLatlngs(t,e,f)}}),this))}}}}),t.Polyline.include({{setOffset:function(t){{return this.options.offset=t,this.redraw(),this}}}}),o}}),window);
//# sourceMappingURL=/sm/995b821da5990cc9639cf31977c178e9b42cf0629231e7532c3be5d4a71e4a82.map
    </script>

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
        
        /* FIXED LEFT VERTICAL CITY RAIL (same glassmorphic treatment) */
        #city-selector-bar {{
            position: fixed;
            top: 50%;
            left: 16px;
            transform: translateY(-50%);
            z-index: 1000;
            background: rgba(15, 23, 42, 0.92);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 14px;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
            padding: 10px 10px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
            color: #f8fafc;
            width: 186px;
            max-height: calc(100vh - 40px);
            overflow-y: auto;
        }}
        #city-selector-bar::-webkit-scrollbar {{ width: 5px; }}
        #city-selector-bar::-webkit-scrollbar-thumb {{ background: rgba(255,255,255,0.18); border-radius: 3px; }}
        .city-label-tag {{
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            color: #94a3b8;
            padding: 2px 4px 6px 4px;
            border-bottom: 1px solid rgba(255,255,255,0.10);
            margin-bottom: 2px;
        }}
        .city-toggle-btn {{
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-left: 3px solid transparent;
            color: #cbd5e1;
            padding: 8px 10px;
            border-radius: 9px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 3px;
            transition: all 0.18s ease;
            user-select: none;
            text-align: left;
            width: 100%;
        }}
        .city-toggle-btn:hover {{
            background: rgba(51, 65, 85, 0.9);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.25);
        }}
        .city-toggle-btn.active {{
            background: #2563eb;
            color: #ffffff;
            border-color: #60a5fa;
            border-left-color: #bfdbfe;
            box-shadow: 0 0 14px rgba(37, 99, 235, 0.55);
        }}
        .city-btn-name {{ display: flex; align-items: center; gap: 6px; font-size: 12.5px; line-height: 1.15; }}
        .city-count-badge {{
            font-size: 9.5px;
            background: rgba(0, 0, 0, 0.28);
            padding: 2px 6px;
            border-radius: 6px;
            font-weight: 600;
            opacity: 0.92;
            letter-spacing: 0.2px;
        }}
        .city-rail-note {{
            font-size: 9.5px;
            color: #94a3b8;
            line-height: 1.35;
            padding: 6px 4px 2px 4px;
            border-top: 1px solid rgba(255,255,255,0.10);
            margin-top: 2px;
        }}
        @media (max-height: 620px) {{
            #city-selector-bar {{ top: 12px; transform: none; }}
        }}
        .meme-toggle-btn {{
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.18);
            color: #cbd5e1;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
            user-select: none;
        }}
        .meme-toggle-btn:hover {{
            background: rgba(51, 65, 85, 0.9);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.35);
            transform: translateY(-1px);
        }}
        .meme-toggle-btn.active {{
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.6);
            box-shadow: 0 0 14px rgba(236, 72, 153, 0.6), 0 0 4px rgba(139, 92, 246, 0.6);
            animation: meme-pulse 2s infinite ease-in-out;
        }}
        @keyframes meme-pulse {{
            0%, 100% {{ box-shadow: 0 0 12px rgba(236, 72, 153, 0.5), 0 0 4px rgba(139, 92, 246, 0.6); }}
            50% {{ box-shadow: 0 0 20px rgba(236, 72, 153, 0.85), 0 0 8px rgba(59, 130, 246, 0.85); }}
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

        /* COMPACT PRICE-ONLY BADGE */
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
        /* Rent bands — one national €/m² scale, identical in every city.
           Derived from the verified median by scripts/verify_rental_prices.py,
           so the pill colour always matches the number printed on it. */
        .pill-premium    {{ background: rgba(107, 33, 168, 0.95); border-color: #c084fc; color: #f3e8ff; }}
        .pill-high       {{ background: rgba(55, 48, 163, 0.95);  border-color: #818cf8; color: #eef2ff; }}
        .pill-mid        {{ background: rgba(30, 64, 175, 0.95);  border-color: #60a5fa; color: #eff6ff; }}
        .pill-affordable {{ background: rgba(17, 94, 89, 0.95);   border-color: #2dd4bf; color: #ecfeff; }}
        .pill-budget     {{ background: rgba(6, 95, 70, 0.95);    border-color: #34d399; color: #ecfdf5; }}
        .pill-value      {{ background: rgba(63, 98, 18, 0.95);   border-color: #a3e635; color: #f7fee7; }}
        #rent_legend_bar {{
            display: flex;
            flex-wrap: wrap;
            gap: 4px 8px;
            padding: 6px 10px 8px 10px;
            font-size: 9.5px;
            color: #cbd5e1;
            line-height: 1.5;
            border-bottom: 1px solid rgba(255,255,255,0.07);
        }}
        #rent_legend_bar .swatch {{
            display: inline-block;
            width: 9px; height: 9px;
            border-radius: 2px;
            margin-right: 3px;
            vertical-align: -1px;
            border: 1px solid rgba(255,255,255,0.35);
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

        /* DISTRICT SAFETY 5-TIER FACE BADGE */
        .safety-face-badge {{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.85));
            transition: transform 0.15s ease, filter 0.15s ease;
            user-select: none;
        }}
        .safety-face-badge:hover {{
            transform: scale(1.20);
            filter: drop-shadow(0 7px 20px rgba(0,0,0,0.98));
        }}
        .safety-score-pill {{
            margin-top: -6px;
            background: rgba(15, 23, 42, 0.95);
            border: 1.5px solid rgba(255, 255, 255, 0.45);
            color: #ffffff;
            font-size: 10.5px;
            font-weight: 800;
            padding: 1.5px 6px;
            border-radius: 8px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.7);
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

    <!-- FIXED LEFT CITY RAIL & MEME TOGGLE -->
    <div id="city-selector-bar">
        <span class="city-label-tag">📍 Estonia · 5 cities</span>
{city_buttons_html}        <button id="btn_meme_toggle" class="meme-toggle-btn" onclick="toggleMemeMode()" title="Toggle Mr. Incredible Meme Faces for Safety Scorecards">
            <span style="font-size: 13px;">🎭</span>
            <span>Meme Mode</span>
        </button>
        <div class="city-rail-note">One continuous map — zoom out and pan straight from one city into the next. Layers load by viewport.</div>
    </div>

    <!-- HIERARCHICAL NESTED ACCORDION PANEL -->
    <div id="nested-layer-panel">
        <div class="panel-header" onclick="toggleMainPanel()">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">🎛️</span>
                <span id="panel-title-text" style="font-weight: 700; font-size: 13px; letter-spacing: -0.2px;">Tallinn Tech & Rent Map</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
                <span class="permanent-badge" id="badge_parks_status" style="cursor:pointer;" onclick="event.stopPropagation(); toggleParks(!showParks);" title="Click to toggle Green Parks on/off">🌳 Parks ON</span>
                <span id="panel-toggle-icon">▼</span>
            </div>
        </div>

        <div id="panel-body">
            <!-- 0. DISTRICT SAFETY & QUALITY ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_safety', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_safety" onclick="event.stopPropagation(); toggleSafetyGlobal(this.checked)">
                        <span>🛡️ District Safety & Quality</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_safety" class="accordion-content">
                    <div id="safety_legend_bar" style="margin-bottom: 6px; padding: 5px 8px; background: rgba(30,41,59,0.7); border-radius: 4px; font-size: 10px; color: #cbd5e1; display: flex; align-items:center; justify-content: space-between;">
                        <span id="legend_face_5" style="display:inline-flex; align-items:center; gap:3px;" title="Ascended (Blue / 4.1–5.0)">🔵 4.1–5.0</span>
                        <span id="legend_face_4" style="display:inline-flex; align-items:center; gap:3px;" title="Canny (Green / 3.6–4.0)">🟢 3.6–4.0</span>
                        <span id="legend_face_3" style="display:inline-flex; align-items:center; gap:3px;" title="Realistic Stare (Yellow / 3.0–3.5)">🟡 3.0–3.5</span>
                        <span id="legend_face_2" style="display:inline-flex; align-items:center; gap:3px;" title="B&W Uncanny (Orange / 2.1–2.9)">🟠 2.1–2.9</span>
                        <span id="legend_face_1" style="display:inline-flex; align-items:center; gap:3px;" title="Dying B&W Skull (Red / 0–2.0)">🔴 0–2.0</span>
                    </div>
                    <div id="safety_items_container"></div>
                </div>
            </div>

            <!-- 0.5 DISTRICT RENTAL PRICES & BOUNDARY ZONES ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_rental', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_rental" onclick="event.stopPropagation(); toggleRentalGlobal(this.checked)">
                        <span>💶 District Rent & Boundaries</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_rental" class="accordion-content">
                    <div id="rent_legend_bar" title="One national €/m² scale — a colour means the same thing in every city">
                        <span><span class="swatch" style="background:#6b21a8;"></span>≥€15 Premium</span>
                        <span><span class="swatch" style="background:#3730a3;"></span>€12.50–15 High</span>
                        <span><span class="swatch" style="background:#1e40af;"></span>€10–12.50 Mid</span>
                        <span><span class="swatch" style="background:#115e59;"></span>€7.50–10 Affordable</span>
                        <span><span class="swatch" style="background:#065f46;"></span>€5–7.50 Budget</span>
                        <span><span class="swatch" style="background:#3f6212;"></span>&lt;€5 Lowest</span>
                    </div>
                    <div id="rental_items_container"></div>
                </div>
            </div>

            <!-- 1. TECH COMPANIES ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_companies', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_companies" onclick="event.stopPropagation(); toggleCompaniesGlobal(this.checked)">
                        <span id="label_companies_header">🏢 Tech Hubs by Sector</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_companies" class="accordion-content">
                    <div id="companies_items_container"></div>
                </div>
            </div>

            <!-- 3. PUBLIC TRANSPORT ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_transport', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_transport" onclick="event.stopPropagation(); toggleTransportGlobal(this.checked)">
                        <span>🚆 Transport & Lines</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_transport" class="accordion-content">
                    
                    <!-- A. BUS SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('sub_bus', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_bus_all" onclick="event.stopPropagation(); toggleBusAllGlobal(this.checked)">
                                <span id="label_bus_all_header">🚌 Bus Lines</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="sub_bus" class="subgroup-content">
                            
                            <!-- A1. Key Center -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_key', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_key" onclick="event.stopPropagation(); toggleTransitBucketGlobal('busKey', this.checked)">
                                        <span id="label_bus_key">🔴 Key Center (10–20 min)</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_key" class="subsubgroup-content"></div>
                            </div>

                            <!-- A2. Suburbs -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_suburb', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_suburb" onclick="event.stopPropagation(); toggleTransitBucketGlobal('busSuburb', this.checked)">
                                        <span id="label_bus_suburb">🌲 Suburbs</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_suburb" class="subsubgroup-content"></div>
                            </div>

                            <!-- A3. Outside City -->
                            <div class="subsubgroup">
                                <div class="subsubgroup-header" onclick="toggleAccordion('body_bus_outside', this)">
                                    <div class="header-left">
                                        <input type="checkbox" id="parent_bus_outside" onclick="event.stopPropagation(); toggleTransitBucketGlobal('busOutside', this.checked)">
                                        <span id="label_bus_outside">🏡 Outside City (Within 30km)</span>
                                    </div>
                                    <span class="accordion-arrow">▶</span>
                                </div>
                                <div id="body_bus_outside" class="subsubgroup-content"></div>
                            </div>

                        </div>
                    </div>

                    <!-- B. TROLLEYBUS SUB-ACCORDION (TALLINN ONLY) -->
                    <div id="group_trolleys" class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_trolleys', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_trolleys" onclick="event.stopPropagation(); toggleTransitBucketGlobal('trolleys', this.checked)">
                                <span>🚎 Trolley (4 Lines)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_trolleys" class="subgroup-content"></div>
                    </div>

                    <!-- C. TRAIN SUB-ACCORDION -->
                    <div class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_rail', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_rail" onclick="event.stopPropagation(); toggleTransitBucketGlobal('trains', this.checked)">
                                <span id="label_train_header">🚆 Train (3 Corridors)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_rail" class="subgroup-content"></div>
                    </div>

                    <!-- D. TRAM SUB-ACCORDION (TALLINN ONLY) -->
                    <div id="group_trams" class="accordion-subgroup">
                        <div class="subgroup-header" onclick="toggleAccordion('body_trams', this)">
                            <div class="header-left">
                                <input type="checkbox" id="parent_trams" onclick="event.stopPropagation(); toggleTransitBucketGlobal('trams', this.checked)">
                                <span>🚋 Tram (5 Lines)</span>
                            </div>
                            <span class="accordion-arrow">▶</span>
                        </div>
                        <div id="body_trams" class="subgroup-content"></div>
                    </div>

                </div>
            </div>

            <!-- 8. DISTRICTS, PARKS & HUBS ACCORDION -->
            <div class="accordion-group">
                <div class="accordion-header" onclick="toggleAccordion('body_districts', this)">
                    <div class="header-left">
                        <input type="checkbox" id="parent_districts" onclick="event.stopPropagation(); toggleDistrictsGlobal(this.checked)">
                        <span>🌳 Parks, Districts & Hubs</span>
                    </div>
                    <span class="accordion-arrow">▶</span>
                </div>
                <div id="body_districts" class="accordion-content">
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_parks" checked onchange="toggleParks(this.checked)">
                            <span class="checkmark"></span>
                            <span class="item-label">🌳 Green Parks & Nature Reserves</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_district_labels" checked onchange="toggleDistrictLabels(this.checked)">
                            <span class="checkmark"></span>
                            <span class="item-label">🏷️ District Watermark Labels</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_clusters" onchange="toggleClustersGlobal(this.checked)">
                            <span class="checkmark"></span>
                            <span class="item-label">🏢 Major Tech Clusters (District Polygons)</span>
                        </label>
                    </div>
                    <div class="nested-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="chk_hubs" onchange="toggleHubsGlobal(this.checked)">
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

    <!-- LEAFLET INITIALIZATION & MULTI-CITY ENGINE -->
    <script>
    // 1. DATA BUNDLE
    const CITIES = {json_bundle};
    let currentCityKey = "{default_city}";

    // 2. INITIALIZE MAP
    const map = L.map('map', {{
        center: CITIES[currentCityKey].center,
        zoom: CITIES[currentCityKey].zoom,
        zoomControl: true
    }});

    // 3. BASEMAPS
    const BASEMAPS = {{}};
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

    // Layer Storage & Permanent Elements
    let LAYERS = {{}};
    let PERMANENT_LAYERS = [];
    const MEME_FACES = {meme_faces_json};
    let isMemeMode = false;

    // 5-TIER SMILEY FACE SVG GENERATOR (Matches Blue/Green/Yellow/Orange/Red Tiers)
    function getFaceSvg(faceType, size = 32) {{
        if (faceType === 'very_happy') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#2563eb" stroke="#1d4ed8" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 26 58 Q 50 92 74 58 Z" fill="#ffffff"/>
                <path d="M 36 74 Q 50 64 64 74 Q 50 90 36 74 Z" fill="#f43f5e"/>
            </svg>`;
        }} else if (faceType === 'happy') {{
            return `<svg width="${{size}}" height="${{size}}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#16a34a" stroke="#15803d" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 28 64 Q 50 82 72 64" fill="none" stroke="#ffffff" stroke-width="6.5" stroke-linecap="round"/>
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
        }} else if (faceType === 'frown' || faceType === 'concerned') {{
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
                <path d="M 24 76 Q 50 48 76 76 Z" fill="#ffffff"/>
            </svg>`;
        }}
    }}

    function getFaceTypeForScore(val) {{
        if (val >= 4.1) return 'very_happy';
        if (val >= 3.6) return 'happy';
        if (val >= 3.0) return 'neutral';
        if (val >= 2.1) return 'concerned';
        return 'unhappy';
    }}

    function getFaceVisual(faceTypeOrScore, size = 32, borderColor = null) {{
        let key = faceTypeOrScore;
        let scoreVal = null;
        if (typeof faceTypeOrScore === 'number') {{
            scoreVal = faceTypeOrScore;
            key = getFaceTypeForScore(scoreVal);
        }} else if (key === 'frown') {{
            key = 'concerned';
        }} else if (key === 'angry') {{
            key = 'unhappy';
        }}
        
        const effectiveBorder = borderColor || (scoreVal !== null ? getScoreColor(scoreVal) : 'rgba(255,255,255,0.8)');
        
        if (isMemeMode) {{
            const memeImg = MEME_FACES[key] || (key === 'angry' || key === 'unhappy' ? MEME_FACES['unhappy'] : MEME_FACES['concerned']);
            if (memeImg) {{
                return `<img src="${{memeImg}}" alt="${{key}}" style="width:${{size}}px; height:${{size}}px; border-radius:50%; object-fit:cover; display:inline-block; vertical-align:middle; border: 2px solid ${{effectiveBorder}}; box-shadow:0 3px 10px rgba(0,0,0,0.65);" />`;
            }}
        }}
        return getFaceSvg(typeof faceTypeOrScore === 'number' ? key : faceTypeOrScore, size);
    }}

    function updateSafetyLegend() {{
        const bar = document.getElementById('safety_legend_bar');
        if (!bar) return;
        if (isMemeMode) {{
            bar.innerHTML = `
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Ascended (Blue / 4.1–5.0)">${{getFaceVisual('very_happy', 16, '#2563eb')}} 🔵 4.1–5.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Canny (Green / 3.6–4.0)">${{getFaceVisual('happy', 16, '#16a34a')}} 🟢 3.6–4.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Realistic Stare (Yellow / 3.0–3.5)">${{getFaceVisual('neutral', 16, '#eab308')}} 🟡 3.0–3.5</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="B&W Uncanny (Orange / 2.1–2.9)">${{getFaceVisual('concerned', 16, '#f97316')}} 🟠 2.1–2.9</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Dying B&W Skull (Red / 0–2.0)">${{getFaceVisual('unhappy', 16, '#ef4444')}} 🔴 0–2.0</span>
            `;
        }} else {{
            bar.innerHTML = `
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Very Safe (Blue / 4.1–5.0)">${{getFaceSvg('very_happy', 16)}} 🔵 4.1–5.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Safe (Green / 3.6–4.0)">${{getFaceSvg('happy', 16)}} 🟢 3.6–4.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Moderate (Yellow / 3.0–3.5)">${{getFaceSvg('neutral', 16)}} 🟡 3.0–3.5</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Concerned (Orange / 2.1–2.9)">${{getFaceSvg('concerned', 16)}} 🟠 2.1–2.9</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Low Safety (Red / 0–2.0)">${{getFaceSvg('unhappy', 16)}} 🔴 0–2.0</span>
            `;
        }}
    }}

    function toggleMemeMode() {{
        isMemeMode = !isMemeMode;
        const btn = document.getElementById('btn_meme_toggle');
        if (btn) btn.classList.toggle('active', isMemeMode);

        updateSafetyLegend();

        // Remember which layers are currently active across ALL cities
        const activeLayerKeys = Object.keys(LAYERS).filter(k => map.hasLayer(LAYERS[k]));

        // Re-render and rebuild all city layers with new face graphics
        Object.keys(LAYERS).forEach(k => {{
            if (map.hasLayer(LAYERS[k])) map.removeLayer(LAYERS[k]);
            delete LAYERS[k];
        }});
        CITY_KEYS.forEach(k => {{
            if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
            if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
            BUILT[k] = false; AMBIENT_ON[k] = false;
        }});
        TRANSIT_LINES.length = 0;

        CITY_KEYS.forEach(k => buildCityLayers(k));
        renderPanelFor(currentCityKey);

        // Re-apply active layers
        activeLayerKeys.forEach(k => {{
            if (LAYERS[k]) map.addLayer(LAYERS[k]);
        }});

        updateAmbientLayers();
        renderPanelFor(currentCityKey);
    }}

    function getScoreColor(val) {{
        if (val >= 4.1) return '#2563eb'; // Blue: 4.1 to 5.0
        if (val >= 3.6) return '#16a34a'; // Green: 3.6 to 4.0
        if (val >= 3.0) return '#eab308'; // Yellow: 3.0 to 3.5
        if (val >= 2.1) return '#f97316'; // Orange: 2.1 to 2.9
        return '#ef4444';                 // Red: 0 to 2.0
    }}

    // ========================================================================
    // UNIFIED MAP ENGINE
    // ------------------------------------------------------------------------
    // All five cities live on ONE Leaflet instance. Layers are keyed
    // `layer_<city>_<id>` and are pre-built so a layer switched on in
    // one city stays on and is synchronized across all 5 cities.
    // `switchCity` moves the camera and repoints the control panel.
    // ========================================================================
    const CITY_KEYS = Object.keys(CITIES);
    const BUILT = {{}};              // cityKey -> true once its layers exist
    const PARKS_LAYERS = {{}};       // cityKey -> [L.polygon...]
    const LABELS_LAYERS = {{}};      // cityKey -> [L.marker...]
    const AMBIENT_ON = {{}};         // cityKey -> currently mounted in viewport?
    const TRANSIT_LINES = [];      // {{line, baseOffset}} for zoom-scaled offsets
    let showParks = true;
    let showDistrictLabels = true;
    let showTechClusters = false;
    let showTransitHubs = false;

    function lk(city, id) {{ return 'layer_' + city + '_' + id; }}
    function ck(city, id) {{ return 'chk_' + city + '_' + id; }}

    // Screen-pixel offsets are scaled with zoom: at city-overview zoom the
    // lines collapse onto the true street centreline, and they fan out into
    // separate lanes as you zoom in, where there is room to tell them apart.
    function offsetScale() {{
        const z = map.getZoom();
        if (z <= 11) return 0;
        if (z >= 15) return 1;
        return (z - 11) / 4;
    }}

    function applyOffsetScale() {{
        const k = offsetScale();
        TRANSIT_LINES.forEach(t => {{
            const want = t.base * k;
            if (t.line.options.offset !== want && t.line.setOffset) t.line.setOffset(want);
        }});
    }}

    function buildCityLayers(cityKey) {{
        if (BUILT[cityKey]) return;
        BUILT[cityKey] = true;
        const city = CITIES[cityKey];

        // --- 1. GREEN PARKS & NATURE RESERVES -------------------------------
        const parkLayers = [];
        (city.parks || []).forEach(p => {{
            if (p.coords && p.coords.length >= 3) {{
                const isWood = /forest|wood/i.test(p.kind || '');
                const parkLayer = L.polygon(p.coords, {{
                    color: isWood ? '#166534' : '#15803d',
                    weight: 1.2,
                    fill: true,
                    fillColor: isWood ? '#16a34a' : '#22c55e',
                    fillOpacity: isWood ? 0.22 : 0.32
                }}).bindTooltip(`🌲 <b>${{p.name}}</b><br><span style="font-size:11px; color:#166534;">${{p.category || 'Green space'}}${{p.area_m2 ? ' · ' + (p.area_m2/10000).toFixed(1) + ' ha' : ''}}</span><br><span style="font-size:9px; color:#64748b;">OpenStreetMap ${{p.osm_id || ''}}</span>`, {{sticky: true}});
                parkLayers.push(parkLayer);
            }}
        }});
        PARKS_LAYERS[cityKey] = parkLayers;

        // --- 2. DISTRICT WATERMARK LABELS -----------------------------------
        const labelLayers = [];
        (city.districts || []).forEach(d => {{
            let className = 'district-label-sub';
            if (d.type === 'major') className = 'district-label-major';
            if (d.type === 'tech_hub') className = 'district-label-tech';
            const labelIcon = L.divIcon({{
                className: className, html: d.name,
                iconSize: [140, 20], iconAnchor: [70, 10]
            }});
            labelLayers.push(L.marker([d.lat, d.lon], {{icon: labelIcon, interactive: false}}));
        }});
        LABELS_LAYERS[cityKey] = labelLayers;
        AMBIENT_ON[cityKey] = false;

        // --- 3. DISTRICT SAFETY & QUALITY SCORECARDS ------------------------
        (city.safety || []).forEach(s => {{
            const lg = L.layerGroup();
            const zoneColor = getScoreColor(s.mean_score);
            if (s.polygons && s.polygons.length > 0) {{
                s.polygons.forEach(pCoords => {{
                    L.polygon(pCoords, {{
                        color: zoneColor, weight: 2, fill: true,
                        fillColor: zoneColor, fillOpacity: 0.18
                    }}).bindTooltip(`<b>${{s.district}}</b><br>National quality score: <b>${{s.mean_score.toFixed(1)}} / 5.0</b>`, {{sticky: true}}).addTo(lg);
                }});
            }}
            const faceHtml = `<div class="safety-face-badge">
                ${{getFaceVisual(s.mean_score, 44, zoneColor)}}
                <div class="safety-score-pill">${{s.mean_score.toFixed(1)}}</div>
            </div>`;
            const faceIcon = L.divIcon({{html: faceHtml, className: '', iconSize: [48, 58], iconAnchor: [24, 29]}});

            // Human-friendly Pros & Cons analysis
            function getDistrictProsCons(item) {{
                const sc = item.scores || {{}};
                const idx = item.district_indices || {{}};
                const mean = item.mean_score !== undefined ? item.mean_score : 3.5;
                const c = sc.calmness !== undefined ? sc.calmness : mean;
                const a = sc.assaults !== undefined ? sc.assaults : mean;
                const t = sc.thefts !== undefined ? sc.thefts : mean;
                const d = sc.drunkenness !== undefined ? sc.drunkenness : mean;
                const sv = sc.severe_crimes !== undefined ? sc.severe_crimes : 4.0;
                const l = sc.language !== undefined ? sc.language : (sc.demographics !== undefined ? sc.demographics : mean);
                const f = sc.family !== undefined ? sc.family : c;

                const nightlife = idx.nightlife_alcohol_pctile !== undefined ? idx.nightlife_alcohol_pctile : (d <= 2.5 ? 0.8 : 0.4);
                const tourist = idx.tourist_pctile !== undefined ? idx.tourist_pctile : (mean <= 2.0 ? 0.2 : 0.4);
                const student = idx.student_pctile !== undefined ? idx.student_pctile : 0.3;
                const house_share = idx.house_share_pctile !== undefined ? idx.house_share_pctile : (mean >= 4.0 ? 0.6 : 0.2);
                const green = idx.green_pctile !== undefined ? idx.green_pctile : (c >= 4.0 ? 0.8 : 0.4);
                const deprivation = idx.deprivation_index !== undefined ? idx.deprivation_index : (mean <= 2.5 ? 0.6 : 0.3);

                const pList = [];
                const cList = [];

                // --- PROS ---
                if (c >= 4.0 || (idx.green_pctile !== undefined && green >= 0.75)) {{
                    pList.push('Quiet, leafy residential setting with abundant nature and fresh air.');
                }} else if (c >= 3.6) {{
                    pList.push('Pleasant residential environment with manageable day-to-day traffic.');
                }}

                if (a >= 4.0 || sv >= 4.3) {{
                    pList.push('Extremely safe streets day and night; very low risk of street violence.');
                }} else if (a >= 3.6) {{
                    pList.push('Generally safe and well-patrolled streets with active municipal oversight.');
                }}

                if (house_share >= 0.5 || mean >= 4.0) {{
                    pList.push('Low street-theft area with secure private parking and fenced properties.');
                }} else if (t >= 3.8) {{
                    pList.push('Low property crime and secure residential buildings.');
                }}

                if (d >= 4.0 || (idx.nightlife_alcohol_pctile !== undefined && nightlife <= 0.1)) {{
                    pList.push('Peaceful public spaces with virtually zero late-night alcohol disturbances.');
                }}

                if (l >= 4.0) {{
                    pList.push('High English & Estonian fluency; very welcoming and easy for international expats.');
                }} else if (l >= 3.0) {{
                    pList.push('Bilingual community with basic English spoken in local shops and services.');
                }}

                if (f >= 4.0 || (f >= 3.5 && mean >= 3.8)) {{
                    pList.push('Excellent family amenities with nearby kindergartens, schools, and playgrounds.');
                }}

                if (tourist >= 0.85 || nightlife >= 0.85) {{
                    pList.push('Vibrant urban lifestyle with cafes, restaurants, and cultural venues in walking distance.');
                }}

                // --- CONS ---
                // Nightlife / Noise
                if (nightlife >= 0.85 || c <= 2.3) {{
                    cList.push('Nighttime street noise and weekend crowds near bars, clubs, and event venues.');
                }} else if (c <= 3.0) {{
                    cList.push('Moderate street and transit noise during peak morning and evening traffic.');
                }}

                // Specific Theft Risks (Bicycles / Campus vs Storage vs Pickpocketing)
                if (tourist >= 0.95) {{
                    cList.push('Higher risk of pickpocketing and opportunistic theft in crowded tourist spots.');
                }} else if (student >= 0.85 && house_share < 0.35) {{
                    cList.push('Elevated risk of unattended bicycle and e-scooter theft around campus/transit hubs.');
                }} else if (deprivation >= 0.55 && house_share <= 0.2) {{
                    cList.push('Occasional basement storage locker (keldriboks) or courtyard car break-in reports.');
                }} else if (t <= 2.6 && house_share < 0.4) {{
                    cList.push('Standard city vigilance advised for outdoor bicycles and locked storage areas.');
                }}

                // Drunkenness / Rowdiness
                if (d <= 2.6 || (nightlife >= 0.8 && d <= 3.2)) {{
                    cList.push('Visible outdoor drinking and loitering around certain alcohol shops and squares.');
                }} else if (d <= 3.2) {{
                    cList.push('Occasional evening noise from groups lingering near public transit stops.');
                }}

                // Assaults / Scuffles
                if (a <= 2.8) {{
                    cList.push('Higher rate of late-night police calls for interpersonal disputes and scuffles.');
                }}

                // Language barrier
                if (l <= 2.2) {{
                    cList.push('Significant language barrier (predominantly Russian-speaking; very limited English/Estonian).');
                }} else if (l <= 2.8) {{
                    cList.push('Noticeable language barrier in local neighbourhood shops (mainly Russian-speaking).');
                }}

                // Suburban distance / Car dependency
                if (house_share >= 0.55 && mean >= 3.8) {{
                    cList.push('Further from downtown; requires longer bus ride or car for daily city errands.');
                    cList.push('Premium rental and purchase prices with limited small apartment availability.');
                }}

                if (pList.length === 0) {{
                    pList.push('Affordable housing options with convenient urban transit connections.');
                    pList.push('Well-connected to shopping centers and major workplace zones.');
                }}
                if (cList.length === 0) {{
                    cList.push('Higher rental or purchase prices due to strong popularity.');
                    cList.push('Standard urban vigilance recommended for personal belongings.');
                }}

                return {{ pros: pList.slice(0, 4), cons: cList.slice(0, 4) }};
            }}

            function renderSimpleMetricBar(label, val) {{
                if (val === undefined || val === null) return '';
                const pct = Math.min(100, Math.max(0, (val / 5.0) * 100));
                const col = getScoreColor(val);
                let textGrade = 'High';
                if (val <= 2.0) textGrade = 'Poor / High Risk';
                else if (val <= 2.9) textGrade = 'Low / Concern';
                else if (val <= 3.5) textGrade = 'Moderate';
                else if (val <= 4.0) textGrade = 'Good';
                else textGrade = 'Excellent';

                return `<div style="margin-bottom: 5px; padding: 4px 7px; background: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-bottom: 2px;">
                        <span style="font-weight: 600; color: #1e293b;">${{label}}</span>
                        <span style="font-weight: 700; color: ${{col}};">${{val.toFixed(1)}} <span style="font-size:9px; color:#64748b; font-weight:normal;">(${{textGrade}})</span></span>
                    </div>
                    <div style="background: #e2e8f0; border-radius: 3px; height: 5px; overflow: hidden;">
                        <div style="background: ${{col}}; width: ${{pct}}%; height: 100%;"></div>
                    </div>
                </div>`;
            }}

            const analysis = getDistrictProsCons(s);
            const prosItemsHtml = analysis.pros.map(p => '<li style="margin-bottom: 3px;">' + p + '</li>').join('');
            const consItemsHtml = analysis.cons.map(c => '<li style="margin-bottom: 3px;">' + c + '</li>').join('');

            const popupHtml = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; width: 335px; line-height: 1.4; color: #1e293b;">
                <!-- Header -->
                <div style="background-color: ${{zoneColor}}; color: white; padding: 10px 14px; border-radius: 7px 7px 0 0; display:flex; align-items:center; justify-content:space-between;">
                    <div>
                        <div style="font-size: 15px; font-weight: 700; letter-spacing: -0.2px;">🛡️ ${{s.district}}</div>
                        <div style="font-size: 11.5px; opacity: 0.95; font-weight: 600; margin-top: 2px;">
                            Overall Safety Grade: <b>${{s.mean_score.toFixed(1)}} / 5.0</b>
                        </div>
                    </div>
                    <div>${{getFaceVisual(s.mean_score, 40, '#ffffff')}}</div>
                </div>

                <div style="padding: 10px 12px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 7px 7px; max-height: 400px; overflow-y: auto;">
                    
                    <!-- Verdict Summary -->
                    <div style="margin-bottom: 8px; padding: 6px 9px; background: #f8fafc; border-radius: 5px; border-left: 3.5px solid ${{zoneColor}}; font-size: 11.5px; color: #1e293b; line-height: 1.35;">
                        💡 <b>Verdict:</b> ${{s.verdict}}
                    </div>

                    <!-- PROS -->
                    <div style="margin-bottom: 7px; padding: 7px 9px; background: #f0fdf4; border-radius: 5px; border: 1px solid #bbf7d0;">
                        <div style="font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; margin-bottom: 3px; display: flex; align-items: center; gap: 4px;">
                            <span>👍</span> <span>Key Strengths (PROS):</span>
                        </div>
                        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #15803d; line-height: 1.35;">
                            ${{prosItemsHtml}}
                        </ul>
                    </div>

                    <!-- CONS -->
                    <div style="margin-bottom: 9px; padding: 7px 9px; background: #fef2f2; border-radius: 5px; border: 1px solid #fecaca;">
                        <div style="font-size: 11px; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 3px; display: flex; align-items: center; gap: 4px;">
                            <span>⚠️</span> <span>Downsides & Risks (CONS):</span>
                        </div>
                        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #b91c1c; line-height: 1.35;">
                            ${{consItemsHtml}}
                        </ul>
                    </div>

                    <!-- Simple Breakdown Bars -->
                    <div style="margin-bottom: 8px;">
                        <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 0.5px;">
                            Rating Breakdown:
                        </div>
                        ${{renderSimpleMetricBar('🧘 Calm Streets & Low Noise', s.scores.calmness)}}
                        ${{renderSimpleMetricBar('🥊 Street Safety & Low Violence', s.scores.assaults)}}
                        ${{renderSimpleMetricBar('🔒 Property & Theft Protection', s.scores.thefts)}}
                        ${{renderSimpleMetricBar('🍺 Public Sobriety & Order', s.scores.drunkenness)}}
                        ${{renderSimpleMetricBar('⚖️ Violence & Severe Crimes', s.scores.severe_crimes)}}
                        ${{renderSimpleMetricBar('🗣️ Language (Estonian / English)', s.scores.language !== undefined ? s.scores.language : s.scores.demographics)}}
                        ${{s.scores.family !== undefined ? renderSimpleMetricBar('👨‍👩‍👧 Family & Neighbourhood Stability', s.scores.family) : ''}}
                    </div>

                    <!-- COLLAPSIBLE RAW DATA (+) -->
                    <details style="border: 1px solid #cbd5e1; border-radius: 5px; background: #f8fafc; font-size: 10px; overflow: hidden; margin-top: 6px;">
                        <summary style="padding: 6px 8px; font-weight: 700; color: #334155; cursor: pointer; background: #f1f5f9; user-select: none; display: flex; align-items: center; justify-content: space-between;">
                            <span>➕ View Detailed Statistical Formulae & Baselines</span>
                            <span style="font-size: 9px; color: #64748b; font-weight: normal;">(Click to expand)</span>
                        </summary>
                        <div style="padding: 7px 9px; color: #475569; line-height: 1.4; border-top: 1px solid #e2e8f0; font-size: 9.5px;">
                            ${{s.calmness_desc ? `<div style="margin-bottom: 4px;"><b>Calmness Drivers:</b> ${{s.calmness_desc}}</div>` : ''}}
                            ${{s.assaults_desc ? `<div style="margin-bottom: 4px;"><b>Assault Drivers:</b> ${{s.assaults_desc}}</div>` : ''}}
                            ${{s.thefts_desc ? `<div style="margin-bottom: 4px;"><b>Theft Drivers:</b> ${{s.thefts_desc}}</div>` : ''}}
                            ${{s.drunkenness_desc ? `<div style="margin-bottom: 4px;"><b>Alcohol Drivers:</b> ${{s.drunkenness_desc}}</div>` : ''}}
                            ${{s.severe_crimes_desc ? `<div style="margin-bottom: 4px;"><b>Severe Crime Baseline:</b> ${{s.severe_crimes_desc}}</div>` : ''}}
                            ${{(s.language_desc || s.demographics_desc) ? `<div style="margin-bottom: 4px;"><b>Language & Demographics:</b> ${{s.language_desc || s.demographics_desc}}</div>` : ''}}
                            ${{s.family_desc ? `<div style="margin-bottom: 4px;"><b>Family Environment:</b> ${{s.family_desc}}</div>` : ''}}
                            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 5px 0;">
                            <div style="font-size: 9px; color: #64748b;">
                                <b>Sources:</b> Justiits- ja Digiministeerium (Kuritegevus Eestis 2025), Statistikaamet rahvaloendus (RL21302 / RL21434 / RL21439), OpenStreetMap GIS.
                            </div>
                        </div>
                    </details>

                </div>
            </div>`;
            L.marker([s.lat, s.lon], {{icon: faceIcon, zIndexOffset: 3500}})
                .bindPopup(popupHtml, {{maxWidth: 380}})
                .bindTooltip(`<b>${{s.district}}</b> · ${{CITIES[cityKey].cityName}}<br>National quality score: <b>${{s.mean_score.toFixed(1)}} / 5.0</b> (click for the full scorecard & sources)`, {{sticky: true}})
                .addTo(lg);
            LAYERS[lk(cityKey, s.id)] = lg;
        }});

        // --- 4. DISTRICT RENTAL PRICES & BOUNDARIES -------------------------
        (city.rentals || []).forEach(r => {{
            const lg = L.layerGroup();
            if (r.polygons && r.polygons.length > 0) {{
                r.polygons.forEach(polyCoords => {{
                    L.polygon(polyCoords, {{
                        color: r.color, weight: 2, fill: true,
                        fillColor: r.color, fillOpacity: 0.18
                    }}).bindTooltip(`<b>${{r.district}}</b><br>Verified median rent: €${{r.mean_sqm}}/m²`, {{sticky: true}}).addTo(lg);
                }});
            }}
            const badgeHtml = `<div class="rent-price-pill pill-${{r.tier_class}}">
                <span style="font-size: 11px;">💶</span>
                <span class="rent-val">€${{r.mean_sqm}}</span>
                <span class="rent-unit">/ m²</span>
            </div>`;
            const badgeIcon = L.divIcon({{html: badgeHtml, className: '', iconSize: [92, 28], iconAnchor: [46, 14]}});

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
                    <div style="margin-bottom: 8px; font-size: 11px; color: #166534; background: #f0fdf4; padding: 5px 8px; border-radius: 4px;">
                        🚍 <b>Tech Commute:</b> ${{r.tech_commute}}
                    </div>
                    <div style="margin-bottom: 10px; font-size: 9.5px; color: #475569; background: #f1f5f9; padding: 5px 8px; border-radius: 4px; line-height: 1.4;">
                        ${{r.verified_observed === false ? '⚠️ ' : '✅ '}}<b>Price check:</b> ${{r.verified_source || 'not yet verified'}}
                        ${{r.observed_1room_median ? `<br><span style="color:#64748b;">Observed medians in this district: 1-room €${{r.observed_1room_median}}/mo${{r.observed_2room_median ? `, 2-room €${{r.observed_2room_median}}/mo` : ''}}.</span>` : ''}}
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
            L.marker([r.lat, r.lon], {{icon: badgeIcon, zIndexOffset: 3000}})
                .bindPopup(popupContent, {{maxWidth: 340}})
                .bindTooltip(`<b>${{r.district}}</b> · ${{CITIES[cityKey].cityName}}<br>€${{r.mean_sqm}}/m² — ${{r.verified_observed === false ? 'estimated' : 'verified against ' + (r.verified_sample||0) + ' live listings'}}`, {{sticky: true}})
                .addTo(lg);
            LAYERS[lk(cityKey, r.id)] = lg;
        }});

        // --- 5. TECH HUBS BY SECTOR -----------------------------------------
        Object.keys(city.categories || {{}}).forEach(catName => {{
            const catInfo = city.categories[catName];
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
            LAYERS[lk(cityKey, catInfo.id)] = lg;
        }});

        // --- 6. TECH CLUSTERS & TRANSIT HUBS --------------------------------
        const clusterGroup = L.layerGroup();
        (city.clusters || []).forEach(c => {{
            (c.polygons || []).forEach(part => {{
                L.polygon(part, {{
                    color: c.color, weight: 2, fill: true,
                    fillColor: c.fillColor, fillOpacity: 0.18
                }}).bindTooltip(`<b>${{c.name}}</b><br>${{c.desc}}`, {{sticky: true}}).addTo(clusterGroup);
            }});
        }});
        LAYERS[lk(cityKey, 'clusters')] = clusterGroup;

        const hubGroup = L.layerGroup();
        (city.hubs || []).forEach(hub => {{
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
        LAYERS[lk(cityKey, 'hubs')] = hubGroup;

        // --- 7. TRANSIT LINES -----------------------------------------------
        const scale = offsetScale();
        function buildTransit(dataDict, withStations) {{
            Object.keys(dataDict || {{}}).forEach(key => {{
                const t = dataDict[key];
                const lg = L.layerGroup();
                const base = t.offset || 0;
                const line = L.polyline(t.coords, {{
                    color: t.color,
                    weight: t.weight || 3.4,
                    opacity: 0.96,
                    offset: base * scale,
                    lineCap: 'round',
                    lineJoin: 'round'
                }}).bindTooltip(`<b style="color:${{t.color}};">${{t.label}}</b><br>${{t.name || 'Transit line'}}${{t.length_km ? '<br>' + t.length_km + ' km' : ''}}<br><span style="font-size:9px; color:#94a3b8;">${{t.source || ''}}</span>`, {{sticky: true}});
                line.addTo(lg);
                TRANSIT_LINES.push({{line: line, base: base}});

                if (withStations && t.stations && t.stations.length) {{
                    t.stations.forEach(st => {{
                        const isMajor = st.type === 'major_hub';
                        const size = isMajor ? 11 : 8;
                        const dotHtml = `<div style="
                            width: ${{size}}px; height: ${{size}}px; border-radius: 50%;
                            background: #ffffff; border: ${{isMajor ? 2.5 : 2}}px solid ${{t.color}};
                            box-shadow: 0 0 6px rgba(0,0,0,0.8), 0 0 3px ${{t.color}};
                            cursor: pointer;"></div>`;
                        const dotIcon = L.divIcon({{html: dotHtml, className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]}});
                        const stPopup = `<div style="font-family: sans-serif; min-width: 210px; line-height: 1.4;">
                            <div style="background-color: ${{t.color}}; color: white; padding: 6px 10px; font-weight: bold; font-size: 12px; border-radius: 4px 4px 0 0;">🚆 ${{st.name}}</div>
                            <div style="padding: 8px 10px; background: #fff; font-size: 11.5px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 4px 4px;">
                                <div style="color: #1e293b; font-weight: 600; margin-bottom: 3px;">${{t.label.split(':')[0]}}</div>
                                <div style="color: #475569; font-size: 11px;">${{st.desc || 'Stop'}}</div>
                            </div></div>`;
                        L.marker([st.lat, st.lon], {{icon: dotIcon, zIndexOffset: 2000}})
                            .bindPopup(stPopup, {{maxWidth: 280}})
                            .bindTooltip(`🚆 <b>${{st.name}}</b>`, {{sticky: true}})
                            .addTo(lg);
                    }});
                }}
                LAYERS[lk(cityKey, key)] = lg;
            }});
        }}
        buildTransit(city.trams, true);
        buildTransit(city.trolleys, false);
        buildTransit(city.busKey, false);
        buildTransit(city.busSuburb, false);
        buildTransit(city.busOutside, false);
        buildTransit(city.trains, true);
    }}

    // ------------------------------------------------------------------------
    // CONTROL PANEL — repointed to whichever city is selected
    // ------------------------------------------------------------------------
    function renderPanelFor(cityKey) {{
        const city = CITIES[cityKey];
        document.getElementById('panel-title-text').innerText = city.title;
        document.getElementById('label_companies_header').innerText = `🏢 Tech Hubs by Sector (${{city.companiesCount}})`;

        const tramGroup = document.getElementById('group_trams');
        const trolleyGroup = document.getElementById('group_trolleys');
        if (tramGroup) tramGroup.style.display = city.hasTrams ? 'block' : 'none';
        if (trolleyGroup) trolleyGroup.style.display = city.hasTrolleys ? 'block' : 'none';

        const totalBusCount = Object.keys(city.busKey || {{}}).length + Object.keys(city.busSuburb || {{}}).length + Object.keys(city.busOutside || {{}}).length;
        document.getElementById('label_bus_all_header').innerText = `🚌 Bus (${{totalBusCount}} Lines)`;
        document.getElementById('label_bus_key').innerText = `🔴 Key Center (10–20 min) (${{Object.keys(city.busKey || {{}}).length}})`;
        document.getElementById('label_bus_suburb').innerText = `🌲 Suburbs (${{Object.keys(city.busSuburb || {{}}).length}})`;
        document.getElementById('label_bus_outside').innerText = `🏡 Outside ${{city.cityName}} (Within 30km) (${{Object.keys(city.busOutside || {{}}).length}})`;
        updateSafetyLegend();

        const isOn = id => {{ const lg = LAYERS[id]; return lg && map.hasLayer(lg); }};

        // Safety scorecards
        const safetyContainer = document.getElementById('safety_items_container');
        safetyContainer.innerHTML = '';
        (city.safety || []).forEach(s => {{
            const id = lk(cityKey, s.id);
            safetyContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${{ck(cityKey, s.id)}}" ${{isOn(id) ? 'checked' : ''}} onchange="toggleLayer('${{id}}', this.checked); updateParentCheck('parent_safety', 'body_safety')">
                    <span class="checkmark"></span>
                    <span style="display:inline-flex; align-items:center; margin-right:4px;">${{getFaceVisual(s.mean_score, 18)}}</span>
                    <div class="rent-item-text">
                        <span class="rent-item-name">${{s.short_name}}</span>
                        <span class="rent-item-sub">National score: <b>${{s.mean_score.toFixed(1)}} / 5.0</b></span>
                    </div>
                </label></div>`);
        }});

        // Rent badges
        const rentalContainer = document.getElementById('rental_items_container');
        rentalContainer.innerHTML = '';
        (city.rentals || []).forEach(r => {{
            const id = lk(cityKey, r.id);
            rentalContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${{ck(cityKey, r.id)}}" ${{isOn(id) ? 'checked' : ''}} onchange="toggleLayer('${{id}}', this.checked); updateParentCheck('parent_rental', 'body_rental')">
                    <span class="checkmark"></span>
                    <span class="color-dot" style="background:${{r.badge_color}};"></span>
                    <div class="rent-item-text">
                        <span class="rent-item-name">${{r.short_name}}${{r.verified_observed === false ? ' <span style="opacity:.6;font-size:9px;">(est.)</span>' : ''}}</span>
                        <span class="rent-item-sub">€${{r.mean_sqm}}/m² • 1BR: ${{r.one_bed_est}}</span>
                    </div>
                </label></div>`);
        }});

        // Company categories
        const compContainer = document.getElementById('companies_items_container');
        compContainer.innerHTML = '';
        Object.keys(city.categories || {{}}).forEach(catName => {{
            const catInfo = city.categories[catName];
            const id = lk(cityKey, catInfo.id);
            compContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${{ck(cityKey, catInfo.id)}}" ${{isOn(id) ? 'checked' : ''}} onchange="toggleCompanyCategoryGlobal('${{catInfo.id}}', this.checked)">
                    <span class="checkmark"></span>
                    <span class="item-label">${{catName}} <span class="item-count">(${{catInfo.companies.length}})</span></span>
                </label></div>`);
        }});

        // Clusters, hubs, parks, and district labels
        const cl = document.getElementById('chk_clusters');
        const hb = document.getElementById('chk_hubs');
        const cp = document.getElementById('chk_parks');
        const cdl = document.getElementById('chk_district_labels');
        if (cl) {{
            cl.checked = showTechClusters;
            cl.onchange = function() {{ toggleClustersGlobal(this.checked); }};
        }}
        if (hb) {{
            hb.checked = showTransitHubs;
            hb.onchange = function() {{ toggleHubsGlobal(this.checked); }};
        }}
        if (cp) {{
            cp.checked = showParks;
            cp.onchange = function() {{ toggleParks(this.checked); }};
        }}
        if (cdl) {{
            cdl.checked = showDistrictLabels;
            cdl.onchange = function() {{ toggleDistrictLabels(this.checked); }};
        }}

        // Transit groups
        function renderTransitGroup(containerId, dataDict, parentId, callbackName) {{
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            Object.keys(dataDict || {{}}).forEach(key => {{
                const t = dataDict[key];
                const id = lk(cityKey, key);
                const cbCall = callbackName ? `${{callbackName}}();` : '';
                container.insertAdjacentHTML('beforeend', `<div class="nested-item">
                    <label class="custom-checkbox">
                        <input type="checkbox" id="${{ck(cityKey, key)}}" ${{isOn(id) ? 'checked' : ''}} onchange="toggleLayer('${{id}}', this.checked); updateParentCheck('${{parentId}}', '${{containerId}}'); ${{cbCall}}">
                        <span class="checkmark"></span>
                        <span class="color-dot" style="background:${{t.color}};"></span>
                        <span class="item-label">${{t.label}}${{t.in_osm === false ? ' <span style="opacity:.55;font-size:9px;" title="No OSM route relation published — geometry from the map registry">·reg</span>' : ''}}</span>
                    </label></div>`);
            }});
        }}
        renderTransitGroup('body_trams', city.trams, 'parent_trams', 'updateTransportParent');
        renderTransitGroup('body_trolleys', city.trolleys, 'parent_trolleys', 'updateTransportParent');
        renderTransitGroup('body_bus_key', city.busKey, 'parent_bus_key', 'updateBusHierarchy');
        renderTransitGroup('body_bus_suburb', city.busSuburb, 'parent_bus_suburb', 'updateBusHierarchy');
        renderTransitGroup('body_bus_outside', city.busOutside, 'parent_bus_outside', 'updateBusHierarchy');
        renderTransitGroup('body_rail', city.trains, 'parent_rail', 'updateTransportParent');

        updateParentCheck('parent_safety', 'body_safety');
        updateParentCheck('parent_rental', 'body_rental');
        updateParentCheck('parent_companies', 'body_companies');
        updateParentCheck('parent_districts', 'body_districts');
        updateBusHierarchy();
        updateTransportParent();
    }}

    // ------------------------------------------------------------------------
    // VIEWPORT-DRIVEN AMBIENT LAYERS (parks + district labels)
    // ------------------------------------------------------------------------
    function cityBounds(cityKey) {{
        const b = CITIES[cityKey].bounds;
        return L.latLngBounds(b[0], b[1]);
    }}

    function updateAmbientLayers() {{
        const view = map.getBounds();
        const z = map.getZoom();
        CITY_KEYS.forEach(k => {{
            // Parks and watermark labels are only legible from zoom 11 up, and
            // there is no point paying for them when the city is off-screen.
            const want = z >= 11 && view.intersects(cityBounds(k));
            if (want && !AMBIENT_ON[k]) {{
                buildCityLayers(k);
                if (showParks && PARKS_LAYERS[k]) {{
                    PARKS_LAYERS[k].forEach(l => {{ if (!map.hasLayer(l)) map.addLayer(l); }});
                }}
                if (showDistrictLabels && LABELS_LAYERS[k]) {{
                    LABELS_LAYERS[k].forEach(l => {{ if (!map.hasLayer(l)) map.addLayer(l); }});
                }}
                AMBIENT_ON[k] = true;
            }} else if (!want && AMBIENT_ON[k]) {{
                if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
                if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
                AMBIENT_ON[k] = false;
            }} else if (want && AMBIENT_ON[k]) {{
                if (PARKS_LAYERS[k]) {{
                    PARKS_LAYERS[k].forEach(l => {{
                        if (showParks && !map.hasLayer(l)) map.addLayer(l);
                        else if (!showParks && map.hasLayer(l)) map.removeLayer(l);
                    }});
                }}
                if (LABELS_LAYERS[k]) {{
                    LABELS_LAYERS[k].forEach(l => {{
                        if (showDistrictLabels && !map.hasLayer(l)) map.addLayer(l);
                        else if (!showDistrictLabels && map.hasLayer(l)) map.removeLayer(l);
                    }});
                }}
            }}
        }});
    }}

    function toggleParks(show) {{
        showParks = show;
        const chk = document.getElementById('chk_parks');
        if (chk && chk.checked !== show) chk.checked = show;
        const badge = document.getElementById('badge_parks_status');
        if (badge) {{
            badge.textContent = show ? '🌳 Parks ON' : '🌳 Parks OFF';
            badge.style.opacity = show ? '1' : '0.55';
            badge.style.borderColor = show ? 'rgba(34, 197, 94, 0.35)' : 'rgba(148, 163, 184, 0.35)';
            badge.style.color = show ? '#4ade80' : '#94a3b8';
            badge.style.background = show ? 'rgba(34, 197, 94, 0.2)' : 'rgba(148, 163, 184, 0.15)';
        }}
        CITY_KEYS.forEach(k => {{
            if (PARKS_LAYERS[k]) {{
                PARKS_LAYERS[k].forEach(l => {{
                    if (show && AMBIENT_ON[k]) {{
                        if (!map.hasLayer(l)) map.addLayer(l);
                    }} else {{
                        if (map.hasLayer(l)) map.removeLayer(l);
                    }}
                }});
            }}
        }});
        updateParentCheck('parent_districts', 'body_districts');
    }}

    function toggleDistrictLabels(show) {{
        showDistrictLabels = show;
        const chk = document.getElementById('chk_district_labels');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {{
            if (LABELS_LAYERS[k]) {{
                LABELS_LAYERS[k].forEach(l => {{
                    if (show && AMBIENT_ON[k]) {{
                        if (!map.hasLayer(l)) map.addLayer(l);
                    }} else {{
                        if (map.hasLayer(l)) map.removeLayer(l);
                    }}
                }});
            }}
        }});
        updateParentCheck('parent_districts', 'body_districts');
    }}

    map.on('moveend', updateAmbientLayers);
    map.on('zoomend', function() {{ updateAmbientLayers(); applyOffsetScale(); }});

    // ------------------------------------------------------------------------
    // SWITCH CITY — camera + panel only; every layer stays where it is
    // ------------------------------------------------------------------------
    function switchCity(cityKey) {{
        if (!CITIES[cityKey]) return;
        currentCityKey = cityKey;
        CITY_KEYS.forEach(k => {{
            const btn = document.getElementById('btn_city_' + k);
            if (btn) btn.classList.toggle('active', k === cityKey);
        }});
        renderPanelFor(cityKey);
        map.flyTo(CITIES[cityKey].center, CITIES[cityKey].zoom, {{animate: true, duration: 1.3}});
    }}

    // Kept for backwards compatibility with the meme-mode re-render.
    function renderCurrentCity() {{
        Object.keys(LAYERS).forEach(k => {{
            if (map.hasLayer(LAYERS[k])) map.removeLayer(LAYERS[k]);
            delete LAYERS[k];
        }});
        CITY_KEYS.forEach(k => {{
            if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
            if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => {{ if (map.hasLayer(l)) map.removeLayer(l); }});
            BUILT[k] = false; AMBIENT_ON[k] = false;
        }});
        TRANSIT_LINES.length = 0;
        CITY_KEYS.forEach(k => buildCityLayers(k));
        renderPanelFor(currentCityKey);
        updateAmbientLayers();
    }}

    // ------------------------------------------------------------------------
    // INTERACTIVE CONTROL FUNCTIONS & GLOBAL MULTI-CITY PROPAGATION
    // ------------------------------------------------------------------------
    function toggleLayer(layerName, show) {{
        const lg = LAYERS[layerName];
        if (!lg) return;
        if (show) {{
            if (!map.hasLayer(lg)) map.addLayer(lg);
        }} else {{
            if (map.hasLayer(lg)) map.removeLayer(lg);
        }}
    }}

    function toggleSafetyGlobal(state) {{
        CITY_KEYS.forEach(k => {{
            (CITIES[k].safety || []).forEach(s => {{
                toggleLayer(lk(k, s.id), state);
                const chk = document.getElementById(ck(k, s.id));
                if (chk) chk.checked = state;
            }});
        }});
        const parent = document.getElementById('parent_safety');
        if (parent) {{ parent.checked = state; parent.indeterminate = false; }}
    }}

    function toggleRentalGlobal(state) {{
        CITY_KEYS.forEach(k => {{
            (CITIES[k].rentals || []).forEach(r => {{
                toggleLayer(lk(k, r.id), state);
                const chk = document.getElementById(ck(k, r.id));
                if (chk) chk.checked = state;
            }});
        }});
        const parent = document.getElementById('parent_rental');
        if (parent) {{ parent.checked = state; parent.indeterminate = false; }}
    }}

    function toggleCompaniesGlobal(state) {{
        CITY_KEYS.forEach(k => {{
            Object.keys(CITIES[k].categories || {{}}).forEach(catName => {{
                const catInfo = CITIES[k].categories[catName];
                toggleLayer(lk(k, catInfo.id), state);
                const chk = document.getElementById(ck(k, catInfo.id));
                if (chk) chk.checked = state;
            }});
        }});
        const parent = document.getElementById('parent_companies');
        if (parent) {{ parent.checked = state; parent.indeterminate = false; }}
    }}

    function toggleCompanyCategoryGlobal(catId, state) {{
        CITY_KEYS.forEach(k => {{
            Object.keys(CITIES[k].categories || {{}}).forEach(catName => {{
                const catInfo = CITIES[k].categories[catName];
                if (catInfo.id === catId) {{
                    toggleLayer(lk(k, catInfo.id), state);
                    const chk = document.getElementById(ck(k, catInfo.id));
                    if (chk) chk.checked = state;
                }}
            }});
        }});
        updateParentCheck('parent_companies', 'body_companies');
    }}

    function toggleTransportGlobal(state) {{
        CITY_KEYS.forEach(k => {{
            const city = CITIES[k];
            ['busKey', 'busSuburb', 'busOutside', 'trolleys', 'trains', 'trams'].forEach(bucket => {{
                Object.keys(city[bucket] || {{}}).forEach(rk => {{
                    toggleLayer(lk(k, rk), state);
                    const chk = document.getElementById(ck(k, rk));
                    if (chk) chk.checked = state;
                }});
            }});
        }});
        ['parent_bus_key', 'parent_bus_suburb', 'parent_bus_outside', 'parent_bus_all', 'parent_trolleys', 'parent_rail', 'parent_trams', 'parent_transport'].forEach(pid => {{
            const p = document.getElementById(pid);
            if (p) {{ p.checked = state; p.indeterminate = false; }}
        }});
    }}

    function toggleBusAllGlobal(state) {{
        CITY_KEYS.forEach(k => {{
            const city = CITIES[k];
            ['busKey', 'busSuburb', 'busOutside'].forEach(bucket => {{
                Object.keys(city[bucket] || {{}}).forEach(rk => {{
                    toggleLayer(lk(k, rk), state);
                    const chk = document.getElementById(ck(k, rk));
                    if (chk) chk.checked = state;
                }});
            }});
        }});
        ['parent_bus_key', 'parent_bus_suburb', 'parent_bus_outside', 'parent_bus_all'].forEach(pid => {{
            const p = document.getElementById(pid);
            if (p) {{ p.checked = state; p.indeterminate = false; }}
        }});
        updateTransportParent();
    }}

    function toggleTransitBucketGlobal(bucketName, state) {{
        const parentMap = {{
            'busKey': 'parent_bus_key',
            'busSuburb': 'parent_bus_suburb',
            'busOutside': 'parent_bus_outside',
            'trolleys': 'parent_trolleys',
            'trains': 'parent_rail',
            'trams': 'parent_trams'
        }};
        CITY_KEYS.forEach(k => {{
            const city = CITIES[k];
            Object.keys(city[bucketName] || {{}}).forEach(rk => {{
                toggleLayer(lk(k, rk), state);
                const chk = document.getElementById(ck(k, rk));
                if (chk) chk.checked = state;
            }});
        }});
        const parentEl = document.getElementById(parentMap[bucketName]);
        if (parentEl) {{ parentEl.checked = state; parentEl.indeterminate = false; }}
        if (bucketName.startsWith('bus')) {{
            updateBusHierarchy();
        }} else {{
            updateTransportParent();
        }}
    }}

    function toggleClustersGlobal(show) {{
        showTechClusters = show;
        const chk = document.getElementById('chk_clusters');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {{
            toggleLayer(lk(k, 'clusters'), show);
        }});
        updateParentCheck('parent_districts', 'body_districts');
    }}

    function toggleHubsGlobal(show) {{
        showTransitHubs = show;
        const chk = document.getElementById('chk_hubs');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {{
            toggleLayer(lk(k, 'hubs'), show);
        }});
        updateParentCheck('parent_districts', 'body_districts');
    }}

    function toggleDistrictsGlobal(state) {{
        toggleParks(state);
        toggleDistrictLabels(state);
        toggleClustersGlobal(state);
        toggleHubsGlobal(state);
        const parent = document.getElementById('parent_districts');
        if (parent) {{ parent.checked = state; parent.indeterminate = false; }}
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
        if (checkboxes.length === 0) return;
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
        toggleTransportGlobal(state);
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

    // Initial mount — pre-build layers for all cities so they are immediately available
    CITY_KEYS.forEach(k => buildCityLayers(k));
    renderPanelFor(currentCityKey);
    updateAmbientLayers();
    applyOffsetScale();
    </script>
</body>
</html>"""
    return html

# ============================================================================
# 6. KML & KMZ EXPORT GENERATOR
# ============================================================================
def export_kml_kmz(companies_list, city_name, kml_out, kmz_out):
    print(f"Exporting KML & KMZ for {city_name}...")
    kml = ET.Element('kml', xmlns='http://www.opengis.net/kml/2.2')
    doc = ET.SubElement(kml, 'Document')
    
    doc_name = ET.SubElement(doc, 'name')
    doc_name.text = f'{city_name} Tech & R&D Hubs ({len(companies_list)} Companies)'
    doc_desc = ET.SubElement(doc, 'description')
    doc_desc.text = f'Verified Tech, Software Engineering, and R&D Offices in {city_name}, Estonia.'

    categories = sorted(list(set(c["category"] for c in companies_list)))
    folder_map = {}
    for cat in categories:
        folder = ET.SubElement(doc, 'Folder')
        f_name = ET.SubElement(folder, 'name')
        f_name.text = cat
        folder_map[cat] = folder

    for c in companies_list:
        pm = ET.SubElement(folder_map[c["category"]], 'Placemark')
        name_elem = ET.SubElement(pm, 'name')
        name_elem.text = c["name"]
        
        desc_elem = ET.SubElement(pm, 'description')
        desc_text = f"""<b>Company:</b> {c['name']}<br/>
<b>Category:</b> {c['category']}<br/>
<b>Address:</b> {c['address']}<br/>
<b>District:</b> {c['district']}<br/>
<b>Engineering Focus:</b> {c.get('tech_focus', c.get('desc', ''))}<br/>
<b>Transit Access:</b> {c['transit']}"""
        desc_elem.text = desc_text
        
        pt = ET.SubElement(pm, 'Point')
        coords = ET.SubElement(pt, 'coordinates')
        coords.text = f"{c['lon']},{c['lat']},0"

    tree = ET.ElementTree(kml)
    tree.write(kml_out, encoding='utf-8', xml_declaration=True)

    with zipfile.ZipFile(kmz_out, 'w', zipfile.ZIP_DEFLATED) as z:
        z.write(kml_out, arcname='doc.kml')
    print(f"  Exported {kml_out} and {kmz_out}")


if __name__ == "__main__":
    print("Compiling Unified Multi-City Tech & Transit Application...")
    
    # 1. Main interactive map with top-left switcher (defaults to Tallinn)
    unified_html = generate_unified_html(default_city="tallinn")
    main_index = os.path.join(ROOT_DIR, "index.html")
    with open(main_index, "w", encoding="utf-8") as f:
        f.write(unified_html)
    print(f"Generated MAIN MAP: {main_index}")

    # 2. Duplicate Tallinn file
    tallinn_html = generate_unified_html(default_city="tallinn")
    tallinn_file = os.path.join(ROOT_DIR, "tallinn_tech_transit_map.html")
    with open(tallinn_file, "w", encoding="utf-8") as f:
        f.write(tallinn_html)
    print(f"Generated TALLINN MAP: {tallinn_file}")

    # 3. Duplicate Tartu file (defaults to Tartu on load)
    tartu_html = generate_unified_html(default_city="tartu")
    tartu_file = os.path.join(ROOT_DIR, "tartu_tech_transit_map.html")
    with open(tartu_file, "w", encoding="utf-8") as f:
        f.write(tartu_html)
    print(f"Generated TARTU MAP: {tartu_file}")

    # 4. Duplicate Narva file (defaults to Narva on load)
    narva_html = generate_unified_html(default_city="narva")
    narva_file = os.path.join(ROOT_DIR, "narva_tech_transit_map.html")
    with open(narva_file, "w", encoding="utf-8") as f:
        f.write(narva_html)
    print(f"Generated NARVA MAP: {narva_file}")

    # 4.5 Duplicate Kohtla-Järve file (defaults to Kohtla-Järve on load)
    kj_html = generate_unified_html(default_city="kohtla_jarve")
    kj_file = os.path.join(ROOT_DIR, "kohtla_jarve_tech_transit_map.html")
    with open(kj_file, "w", encoding="utf-8") as f:
        f.write(kj_html)
    print(f"Generated KOHTLA-JÄRVE MAP: {kj_file}")

    # 4.8 Duplicate Pärnu file (defaults to Pärnu on load)
    parnu_html = generate_unified_html(default_city="parnu")
    parnu_file = os.path.join(ROOT_DIR, "parnu_tech_transit_map.html")
    with open(parnu_file, "w", encoding="utf-8") as f:
        f.write(parnu_html)
    print(f"Generated PÄRNU MAP: {parnu_file}")

    # 5. KML / KMZ exports
    export_kml_kmz(
        TALLINN_COMPANIES,
        "Tallinn",
        os.path.join(EXPORTS_DIR, "tallinn_tech_hubs.kml"),
        os.path.join(EXPORTS_DIR, "tallinn_tech_hubs.kmz")
    )
    export_kml_kmz(
        TARTU_COMPANIES,
        "Tartu",
        os.path.join(EXPORTS_DIR, "tartu_tech_hubs.kml"),
        os.path.join(EXPORTS_DIR, "tartu_tech_hubs.kmz")
    )
    export_kml_kmz(
        PARNU_COMPANIES,
        "Pärnu",
        os.path.join(EXPORTS_DIR, "parnu_tech_hubs.kml"),
        os.path.join(EXPORTS_DIR, "parnu_tech_hubs.kmz")
    )
    export_kml_kmz(
        NARVA_COMPANIES,
        "Narva",
        os.path.join(EXPORTS_DIR, "narva_tech_hubs.kml"),
        os.path.join(EXPORTS_DIR, "narva_tech_hubs.kmz")
    )
    export_kml_kmz(
        KOHTLA_JARVE_COMPANIES,
        "Kohtla-Järve",
        os.path.join(EXPORTS_DIR, "kohtla_jarve_tech_hubs.kml"),
        os.path.join(EXPORTS_DIR, "kohtla_jarve_tech_hubs.kmz")
    )

    print("\n" + "="*78)
    print("SUCCESS: ALL MULTI-CITY MAP ASSETS GENERATED!")
    print(f"1. Main Map (Tallinn, Tartu, Pärnu, Narva, Kohtla-Järve): {main_index}")
    print(f"2. Tallinn Standalone Map:                         {tallinn_file}")
    print(f"3. Tartu Standalone Map:                           {tartu_file}")
    print(f"4. Pärnu Standalone Map:                           {parnu_file}")
    print(f"5. Narva Standalone Map:                           {narva_file}")
    print(f"6. Kohtla-Järve Standalone Map:                    {kj_file}")
    print(f"7. Tallinn KML & KMZ:                              {os.path.join(EXPORTS_DIR, 'tallinn_tech_hubs.kmz')}")
    print(f"8. Tartu KML & KMZ:                                {os.path.join(EXPORTS_DIR, 'tartu_tech_hubs.kmz')}")
    print(f"9. Pärnu KML & KMZ:                                {os.path.join(EXPORTS_DIR, 'parnu_tech_hubs.kmz')}")
    print(f"10. Narva KML & KMZ:                               {os.path.join(EXPORTS_DIR, 'narva_tech_hubs.kmz')}")
    print(f"11. Kohtla-Järve KML & KMZ:                        {os.path.join(EXPORTS_DIR, 'kohtla_jarve_tech_hubs.kmz')}")
    print("="*78)
