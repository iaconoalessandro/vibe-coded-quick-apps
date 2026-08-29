"""
Fetches the real OpenStreetMap footprints for the five tech clusters that the
map previously drew as hand-typed rectangles.

Each cluster is given the tightest official polygon that actually represents it:
campuses and creative quarters have their own OSM landuse/quarter areas, while
the two broad corridors are assembled from whole street-delimited sub-districts.
Writes tallinn_tech_cluster_shapes.json.
"""

import json

from fetch_osm_asum_boundaries import overpass, relation_rings

# OSM ways/relations that carry a real footprint for a named site.
SITE_QUERY = """
[out:json][timeout:180];
(
  way(96204268);    // Ülemiste City (landuse=commercial)
  way(50510643);    // Ülemiste City park
  way(415914044);   // Teaduspark Tehnopol (landuse=commercial)
  way(419976748);   // Telliskivi Loomelinnak (landuse=retail)
  way(1454797119);  // Volta kvartal (place=quarter)
  way(1235577362);  // Noblessner (place=neighbourhood)
  way(48965549);    // Rotermanni kvartal (landuse=commercial)
);
out geom;
"""


def way_ring(el):
    return [[round(p["lon"], 7), round(p["lat"], 7)] for p in el["geometry"]]


def main():
    data = overpass(SITE_QUERY, "tech-cluster sites")
    sites = {}
    for el in data["elements"]:
        name = el.get("tags", {}).get("name")
        if el["type"] == "way" and "geometry" in el:
            ring = way_ring(el)
            if ring[0] != ring[-1]:
                ring.append(ring[0])
            sites[str(el["id"])] = {"name": name, "outer": [ring], "inner": []}
        elif el["type"] == "relation":
            outer, inner = relation_rings(el)
            sites[str(el["id"])] = {
                "name": name,
                "outer": [[list(p) for p in r] for r in outer],
                "inner": [[list(p) for p in r] for r in inner],
            }

    with open("tallinn_tech_cluster_shapes.json", "w", encoding="utf-8") as f:
        json.dump(sites, f, ensure_ascii=False)

    for osm_id, s in sites.items():
        pts = sum(len(r) for r in s["outer"])
        print(f"  {osm_id:>12}  {s['name']:<26} {pts:>4} pts")
    print("\nWrote tallinn_tech_cluster_shapes.json")


if __name__ == "__main__":
    main()
