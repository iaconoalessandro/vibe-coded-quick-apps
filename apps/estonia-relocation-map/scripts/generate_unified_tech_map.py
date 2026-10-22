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

import json
import os
import re
import sys
import xml.etree.ElementTree as ET
import zipfile

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
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    return default if default is not None else []

# ============================================================================
# 1. LOAD TALLINN DATASETS
# ============================================================================
from generate_tallinn_tech_map import COMPANIES_DATA as TALLINN_COMPANIES
from generate_tallinn_tech_map import TALLINN_DISTRICT_LABELS
from generate_tallinn_tech_map import TRANSIT_HUBS as TALLINN_TRANSIT_HUBS

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
    TARTU_DISTRICT_LABELS,
    TARTU_TECH_CLUSTERS,
    TARTU_TRANSIT_HUBS,
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
    NARVA_DISTRICT_LABELS,
    NARVA_TECH_CLUSTERS,
    NARVA_TRANSIT_HUBS,
)

NARVA_SAFETY = load_json_file("narva_district_safety_official.json")
NARVA_RENTALS = load_json_file("narva_exact_district_boundaries.json")
NARVA_PARKS = load_json_file("narva_parks_clean.json")

# ============================================================================
# 3.5 LOAD KOHTLA-JÄRVE DATASETS
# ============================================================================
from kohtla_jarve_companies_data import KOHTLA_JARVE_COMPANIES
from kohtla_jarve_transit_routes import (
    KOHTLA_JARVE_DISTRICT_LABELS,
    KOHTLA_JARVE_TECH_CLUSTERS,
    KOHTLA_JARVE_TRANSIT_HUBS,
)

KOHTLA_JARVE_SAFETY = load_json_file("kohtla_jarve_district_safety_official.json")
KOHTLA_JARVE_RENTALS = load_json_file("kohtla_jarve_exact_district_boundaries.json")
KOHTLA_JARVE_PARKS = load_json_file("kohtla_jarve_parks_clean.json")

# ============================================================================
# 3.8 LOAD PÄRNU DATASETS
# ============================================================================
from parnu_companies_data import PARNU_COMPANIES
from parnu_transit_routes import (
    PARNU_DISTRICT_LABELS,
    PARNU_TECH_CLUSTERS,
    PARNU_TRANSIT_HUBS,
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
# ----------------------------------------------------------------------------
# The HTML template used to live here, as a 2 033-line Python f-string with
# ~555 escaped brace pairs serving four substitutions. It now lives in real
# files that an editor, a linter and a diff can all read:
#
#     templates/_head.html   templates/_body.html
#     static/app.css         static/features.css
#     static/app.js          static/features.js
#
# `build.py` assembles them. This module is a data layer now: it loads and
# shapes CITY_DATA_BUNDLE, and exports KML/KMZ. It renders no markup.
# ----------------------------------------------------------------------------


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
    print(
        "This module is a data layer, not an entry point.\n"
        "Run `python3 build.py` (or `make build`) to assemble the map."
    )
