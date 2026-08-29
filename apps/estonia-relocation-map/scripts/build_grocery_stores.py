"""
==============================================================================
GROCERY STORES — BIG-FORMAT & DISCOUNT CHAINS (Estonia)
==============================================================================
Builds the "how far is my weekly shop?" layer.

Estonia's grocery market is five chains plus one regional discounter, and they
differ enough in price and format that a relocating person genuinely picks a
flat by which one is walkable:

    Lidl      hard discounter, cheapest basket, large format, few locations
    Maxima    XX / XXX are hypermarkets, X is a neighbourhood store
    Prisma    S-Group hypermarket, cheapest big weekly shop after Lidl
    Rimi      Hyper / Super / Mini — Hyper is a full weekly shop
    Selver    mid-price full-range; ABC is a small forecourt format
    Coop      Konsum / Maksimarket / Tervisepood — dominant outside the cities
    Grossi    Ida-Viru discounter, very cheap, Kohtla-Järve / Narva heartland

Output per city: data/<city>_grocery_stores.json
Also writes walking distance from every district centre to its nearest
big-format discount store, which is what the district popup reports.

Source: OpenStreetMap via Overpass (ODbL).
==============================================================================
"""
import json
import math
import os
import sys
import time
import urllib.error
import urllib.request

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from osm_pipeline_common import CITY_BBOX, DATA_DIR, load_cache, save_cache

OVERPASS = "https://overpass-api.de/api/interpreter"
USER_AGENT = "estonia-relocation-map/1.0 (OSM grocery layer; ODbL)"

# ----------------------------------------------------------------------------
# Chain registry
#
# tier drives both the marker size and the "can I do a full weekly shop here?"
# question. price_band is the basket-cost reputation, 1 = cheapest.
# ----------------------------------------------------------------------------
CHAINS = {
    "lidl": {
        "label": "Lidl", "tier": "discount_big", "price_band": 1, "colour": "#0050AA",
        "note": "Hard discounter — cheapest basket in Estonia. Large format, own-brand heavy.",
    },
    "prisma": {
        "label": "Prisma", "tier": "discount_big", "price_band": 2, "colour": "#00A94F",
        "note": "Hypermarket. Full weekly shop, low prices, big non-food range.",
    },
    "maxima": {
        "label": "Maxima", "tier": "discount_big", "price_band": 2, "colour": "#004B93",
        "note": "Low prices across the range. XX and XXX are hypermarkets; "
                "plain X is a full supermarket, still a workable weekly shop.",
    },
    "grossi": {
        "label": "Grossi Toidukaubad", "tier": "standard", "price_band": 1, "colour": "#E4032E",
        "note": "Cheapest basket alongside Lidl, but small-format — a top-up shop, "
                "not a weekly one. Strongest in Kohtla-Järve and Narva.",
    },
    "rimi": {
        "label": "Rimi", "tier": "large", "price_band": 3, "colour": "#D2001C",
        "note": "Hyper is a full weekly shop; Super is mid-size; Mini is a corner store.",
    },
    "selver": {
        "label": "Selver", "tier": "large", "price_band": 3, "colour": "#E52C24",
        "note": "Mid-price, good fresh range. ABC is the small forecourt format.",
    },
    "coop": {
        "label": "Coop / Konsum", "tier": "standard", "price_band": 3, "colour": "#F07E13",
        "note": "Konsum / Maksimarket. Dominant in smaller towns and suburbs.",
    },
}

TIER_LABEL = {
    "discount_big": "Big & cheap",
    "large": "Large supermarket",
    "standard": "Neighbourhood store",
}

# Brand strings as they actually appear in OSM name/brand/operator tags.
BRAND_MATCH = [
    ("lidl", ("lidl",)),
    ("prisma", ("prisma",)),
    ("maxima", ("maxima",)),
    ("grossi", ("grossi", "grossi toidukaubad")),
    ("rimi", ("rimi",)),
    ("selver", ("selver",)),
    ("coop", ("coop", "konsum", "maksimarket", "a&o", "ao kauplus")),
]

# Sub-format detection: a "Maxima XX" is a weekly shop, a "Maxima X" is not.
BIG_FORMAT_HINTS = ("hyper", "xxx", "xx", "maksimarket", "prisma", "lidl")
SMALL_FORMAT_HINTS = ("mini", "abc", "express", "väike")


def overpass(query, cache_name, force=False):
    """POST to Overpass with an on-disk cache; the layer rebuilds offline."""
    if not force:
        cached = load_cache(cache_name)
        if cached is not None:
            print(f"    cache hit: {cache_name}")
            return cached

    req = urllib.request.Request(
        OVERPASS, data=query.encode("utf-8"), headers={"User-Agent": USER_AGENT}
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=180) as resp:
                payload = json.load(resp)
            save_cache(cache_name, payload)
            return payload
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as exc:
            wait = 5 * (attempt + 1)
            print(f"    overpass attempt {attempt + 1} failed ({exc}); retrying in {wait}s")
            time.sleep(wait)
    raise RuntimeError(f"Overpass failed for {cache_name} after 4 attempts")


def classify(tags):
    """Map an OSM element's tags onto (chain_key, tier, display name)."""
    blob = " ".join(
        str(tags.get(k, "")) for k in ("name", "brand", "operator", "name:et")
    ).lower()

    chain_key = None
    for key, needles in BRAND_MATCH:
        if any(n in blob for n in needles):
            chain_key = key
            break

    shop = tags.get("shop", "")
    if chain_key is None:
        # Unbranded but still a real supermarket — keep it as a neighbourhood store.
        if shop in ("supermarket", "hypermarket", "wholesale"):
            return None, "standard", tags.get("name") or "Supermarket"
        return None, None, None

    tier = CHAINS[chain_key]["tier"]

    # Format overrides: a Rimi Hyper is a big weekly shop, a Maxima X is not.
    if any(h in blob for h in SMALL_FORMAT_HINTS) and "maksimarket" not in blob:
        tier = "standard"
    elif any(h in blob for h in BIG_FORMAT_HINTS):
        tier = "discount_big" if CHAINS[chain_key]["price_band"] <= 2 else "large"

    if shop == "convenience" and tier == "discount_big":
        tier = "standard"

    return chain_key, tier, tags.get("name") or CHAINS[chain_key]["label"]


def fetch_city(city, bbox, force=False):
    south, west, north, east = bbox
    box = f"{south},{west},{north},{east}"
    query = f"""[out:json][timeout:180];
(
  node[shop~"^(supermarket|hypermarket|wholesale)$"]({box});
  way[shop~"^(supermarket|hypermarket|wholesale)$"]({box});
  node[shop=convenience][brand]({box});
  way[shop=convenience][brand]({box});
);
out tags center;"""
    payload = overpass(query, f"grocery_{city}_raw.json", force=force)

    stores = []
    seen = set()
    for el in payload.get("elements", []):
        tags = el.get("tags") or {}
        lat = el.get("lat") or (el.get("center") or {}).get("lat")
        lon = el.get("lon") or (el.get("center") or {}).get("lon")
        if lat is None or lon is None:
            continue

        chain_key, tier, name = classify(tags)
        if tier is None:
            continue

        # De-duplicate a chain's node and its building way at the same address.
        fingerprint = (chain_key or name, round(lat, 4), round(lon, 4))
        if fingerprint in seen:
            continue
        seen.add(fingerprint)

        meta = CHAINS.get(chain_key, {})
        stores.append({
            "name": name,
            "chain": chain_key,
            "chainLabel": meta.get("label", "Independent"),
            "tier": tier,
            "tierLabel": TIER_LABEL[tier],
            "priceBand": meta.get("price_band", 4),
            "format": "big" if tier == "discount_big" else ("medium" if tier == "large" else "small"),
            "colour": meta.get("colour", "#6B7A76"),
            "note": meta.get("note", "Independent supermarket."),
            "lat": round(lat, 6),
            "lon": round(lon, 6),
            "street": tags.get("addr:street", ""),
            "housenumber": tags.get("addr:housenumber", ""),
            "hours": tags.get("opening_hours", ""),
            "osmId": f"{el.get('type', 'node')}/{el.get('id')}",
        })

    # Cheapest and biggest first, so the panel list reads in useful order.
    stores.sort(key=lambda s: (s["priceBand"], s["tier"] != "discount_big", s["name"]))
    return stores


# Straight-line distance under-reports a real walk. 1.3 is the standard
# detour ratio for a dense European street grid; 80 m/min is an unhurried
# pace carrying shopping.
WALK_DETOUR = 1.3
WALK_M_PER_MIN = 80.0


def walk_minutes(straight_m):
    return max(1, round(straight_m * WALK_DETOUR / WALK_M_PER_MIN))


def haversine_m(lat1, lon1, lat2, lon2):
    r = 6371000.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def polygon_centroid(rings):
    """Area-weighted centroid of the largest ring — good enough for a district."""
    best, best_area = None, -1.0
    for ring in rings or []:
        if not ring or len(ring) < 3:
            continue
        pts = [(p[0], p[1]) for p in ring if isinstance(p, (list, tuple)) and len(p) >= 2]
        if len(pts) < 3:
            continue
        area = cx = cy = 0.0
        for i in range(len(pts)):
            x1, y1 = pts[i]
            x2, y2 = pts[(i + 1) % len(pts)]
            cross = x1 * y2 - x2 * y1
            area += cross
            cx += (x1 + x2) * cross
            cy += (y1 + y2) * cross
        if abs(area) < 1e-12:
            continue
        area *= 0.5
        if abs(area) > best_area:
            best_area = abs(area)
            best = (cx / (6 * area), cy / (6 * area))
    return best


def nearest_store(pool, centre):
    """Closest store in `pool` to `centre`, as (store, straight-line metres)."""
    if not pool:
        return None
    best = min(pool, key=lambda s: haversine_m(centre[0], centre[1], s["lat"], s["lon"]))
    return best, haversine_m(centre[0], centre[1], best["lat"], best["lon"])


def district_access(districts, stores):
    """Walking distance from each district centre to its nearest big-cheap store."""
    big = [s for s in stores if s["tier"] == "discount_big"]
    any_store = stores
    out = {}

    for d in districts or []:
        # The boundary files carry an explicit label anchor; fall back to the
        # polygon centroid only when it is missing.
        if d.get("lat") is not None and d.get("lon") is not None:
            centre = (d["lat"], d["lon"])
        else:
            centre = polygon_centroid(d.get("polygons") or d.get("polygon"))
        if centre is None:
            continue
        name = d.get("district") or d.get("name")
        if not name:
            continue

        entry = {}
        nb = nearest_store(big, centre)
        if nb:
            store, dist = nb
            entry["nearestBig"] = {
                "name": store["name"], "chain": store["chainLabel"],
                "metres": round(dist), "walkMinutes": walk_minutes(dist),
            }
        na = nearest_store(any_store, centre)
        if na:
            store, dist = na
            entry["nearestAny"] = {
                "name": store["name"], "chain": store["chainLabel"],
                "metres": round(dist), "walkMinutes": walk_minutes(dist),
            }
        if entry:
            out[name] = entry
    return out


def main():
    force = "--refresh" in sys.argv
    totals = {}

    for city, bbox in CITY_BBOX.items():
        print(f"\n  {city}")
        stores = fetch_city(city, bbox, force=force)

        boundaries = load_json(f"{city}_exact_district_boundaries.json", [])
        access = district_access(boundaries, stores)

        by_tier = {}
        for s in stores:
            by_tier[s["tier"]] = by_tier.get(s["tier"], 0) + 1
        by_chain = {}
        for s in stores:
            key = s["chainLabel"]
            by_chain[key] = by_chain.get(key, 0) + 1

        out_path = os.path.join(DATA_DIR, f"{city}_grocery_stores.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump({
                "stores": stores,
                "districtAccess": access,
                "chains": CHAINS,
                "tierLabels": TIER_LABEL,
                "source": "OpenStreetMap via Overpass (ODbL)",
            }, f, ensure_ascii=False, indent=1)

        totals[city] = len(stores)
        tiers = ", ".join(f"{TIER_LABEL[k]}: {v}" for k, v in sorted(by_tier.items()))
        print(f"    {len(stores)} stores  ({tiers})")
        print(f"    chains: {', '.join(f'{k} {v}' for k, v in sorted(by_chain.items(), key=lambda x: -x[1]))}")
        print(f"    district access computed for {len(access)} districts")

    print(f"\n  TOTAL: {sum(totals.values())} grocery stores across {len(totals)} cities")


def load_json(filename, default):
    p = os.path.join(DATA_DIR, filename)
    if not os.path.exists(p):
        return default
    with open(p, encoding="utf-8") as f:
        return json.load(f)


if __name__ == "__main__":
    main()
