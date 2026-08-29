"""
Replaces the five hand-typed tech-cluster rectangles with real OpenStreetMap shapes.

Each cluster gets the tightest official polygon that genuinely represents it:
  - campuses and creative quarters use their own OSM landuse / quarter areas
  - the two broad corridors are unions of whole street-delimited sub-districts

Writes tallinn_tech_cluster_boundaries.json, read by generate_tallinn_tech_map.py.
"""

import json

from shapely.geometry import MultiPolygon, Polygon
from shapely.ops import unary_union

from build_official_district_boundaries import (
    MIN_PART_SQ_M,
    SIMPLIFY_TOLERANCE,
    SQ_DEG_PER_SQ_M,
    asum_geometry,
    rings_latlon,
)

CLUSTERS = [
    {
        "name": "Ülemiste City Tech Campus",
        "desc": "The 'Silicon Valley of Estonia' (ABB, Ericsson, Kuehne+Nagel, Nortal, Helmes, Playtech, CGI, Icefire, Zone.eu)",
        "color": "#3b82f6", "fillColor": "#3b82f6",
        "source": "Official OSM campus footprint (Ülemiste City + Ülemiste City park)",
        "sites": ["96204268", "50510643"],
        "asumid": [],
    },
    {
        "name": "Tehnopol Science & Business Park",
        "desc": "DeepTech, Robotics, Defense & AI Hub (Microsoft/Skype, Starship, Cybernetica, Cleveron, EyeVi, DefSecIntel)",
        "color": "#10b981", "fillColor": "#10b981",
        "source": "Official OSM park footprint (Teaduspark Tehnopol)",
        "sites": ["415914044"],
        "asumid": [],
    },
    {
        "name": "Telliskivi & Kalamaja Creative Cluster",
        "desc": "Scaleup & Startup Hub (Monese, Riverty, Veriff, Inbank, Zendesk QA, Testlio, MindTitan, Modash, Coolbet)",
        "color": "#f59e0b", "fillColor": "#f59e0b",
        "source": "Official OSM quarter footprints (Telliskivi Loomelinnak, Volta kvartal, Noblessner)",
        "sites": ["419976748", "1454797119", "1235577362"],
        "asumid": [],
    },
    {
        "name": "Kesklinn / Downtown / Maakri / Veerenni",
        "desc": "Fintech, Global HQ & Banking Hub (Wise, Bolt, LHV, Swedbank, SEB, Luminor, Twilio, Coop Pank, Adcash)",
        "color": "#8b5cf6", "fillColor": "#8b5cf6",
        "source": "Street-delimited sub-districts Südalinn, Maakri, Veerenni + Rotermanni kvartal",
        "sites": ["48965549"],
        "asumid": ["Südalinn", "Maakri", "Veerenni"],
    },
    {
        "name": "WoHo & Kristiine Tech Corridor",
        "desc": "Modern SaaS & Telecom Hub (Pipedrive HQ, Telia HQ, Proekspert, Elisa, Eesti Energia, Relax Gaming)",
        "color": "#ef4444", "fillColor": "#ef4444",
        "source": "Street-delimited sub-districts Lilleküla, Tondi",
        "sites": [],
        "asumid": ["Lilleküla", "Tondi"],
    },
]


def site_geometry(entry):
    outer = unary_union([Polygon(r).buffer(0) for r in entry["outer"] if len(r) >= 4])
    if entry["inner"]:
        holes = unary_union([Polygon(r).buffer(0) for r in entry["inner"] if len(r) >= 4])
        outer = outer.difference(holes)
    return outer


def main():
    sites = json.load(open("tallinn_tech_cluster_shapes.json", encoding="utf-8"))
    asum_src = json.load(open("tallinn_osm_asumid.json", encoding="utf-8"))
    asumid = {e["name"]: asum_geometry(e) for e in asum_src["subdistricts"]}

    records = []
    for c in CLUSTERS:
        pieces = [site_geometry(sites[s]) for s in c["sites"]]
        pieces += [asumid[n] for n in c["asumid"]]
        geom = unary_union(pieces)
        geom = geom.simplify(SIMPLIFY_TOLERANCE, preserve_topology=True).buffer(0)

        parts = list(geom.geoms) if isinstance(geom, MultiPolygon) else [geom]
        parts = [p for p in parts if p.area > MIN_PART_SQ_M * SQ_DEG_PER_SQ_M]
        geom = unary_union(parts)

        rec = {k: c[k] for k in ("name", "desc", "color", "fillColor", "source")}
        rec["polygons"] = rings_latlon(geom)
        records.append(rec)

        area_km2 = geom.area / SQ_DEG_PER_SQ_M / 1e6
        pts = sum(len(r) for poly in rec["polygons"] for r in poly)
        print(f"  {c['name']:<40} {len(rec['polygons'])} part(s)  "
              f"{pts:>4} pts  {area_km2:6.2f} km²")

    with open("tallinn_tech_cluster_boundaries.json", "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
    print("\nWrote tallinn_tech_cluster_boundaries.json")


if __name__ == "__main__":
    main()
