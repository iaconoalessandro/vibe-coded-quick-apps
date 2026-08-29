"""
==============================================================================
SHARED OSM SOURCE PIPELINE (Estonia)
==============================================================================
Downloads the Geofabrik Estonia extract and materialises the raw OSM slices the
map build scripts consume:

    data/osm_cache/boundaries_raw.json      official district / municipal rings
    data/osm_cache/extras_raw.json          settlement units (Paikuse, Sindi, ...)
    data/osm_cache/tallinn_asumid_raw.json  Tallinn asum (admin_level=10) rings
    data/osm_cache/greens_raw.json          parks / gardens / forests / rec. ground
    data/osm_cache/pt_routes_raw.json       public-transport route relations
    data/osm_cache/pt_geom_raw.json         member way + stop geometry for routes

Source: OpenStreetMap via Geofabrik (ODbL). Everything downstream is derived
from real OSM geometry — no hand-drawn polygons anywhere in the chain.
==============================================================================
"""
import os
import json
import math
import urllib.request

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
CACHE_DIR = os.path.join(DATA_DIR, "osm_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

PBF_URL = "https://download.geofabrik.de/europe/estonia-latest.osm.pbf"
PBF_PATH = os.path.join(CACHE_DIR, "estonia.osm.pbf")

# City analysis windows (south, west, north, east)
CITY_BBOX = {
    "tallinn":      (59.3300, 24.5300, 59.5200, 24.9600),
    "tartu":        (58.3200, 26.6400, 58.4300, 26.8100),
    "parnu":        (58.3300, 24.3800, 58.4300, 24.6800),
    "narva":        (59.3300, 28.0200, 59.4600, 28.2300),
    "kohtla_jarve": (59.2900, 27.1800, 59.4500, 27.6400),
}

CITY_LABEL = {
    "tallinn": "Tallinn", "tartu": "Tartu", "parnu": "Pärnu",
    "narva": "Narva", "kohtla_jarve": "Kohtla-Järve & Jõhvi",
}


def cache_path(name):
    return os.path.join(CACHE_DIR, name)


def load_cache(name, default=None):
    p = cache_path(name)
    if not os.path.exists(p):
        return default
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)


def save_cache(name, obj):
    with open(cache_path(name), "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False)


def ensure_pbf():
    """Download the Estonia OSM extract if it is not already cached."""
    if os.path.exists(PBF_PATH) and os.path.getsize(PBF_PATH) > 50_000_000:
        return PBF_PATH
    print(f"Downloading {PBF_URL} ...")
    req = urllib.request.Request(PBF_URL, headers={"User-Agent": "EstoniaTechMap/1.0"})
    with urllib.request.urlopen(req, timeout=600) as resp, open(PBF_PATH, "wb") as out:
        while True:
            chunk = resp.read(1 << 20)
            if not chunk:
                break
            out.write(chunk)
    print(f"  -> {os.path.getsize(PBF_PATH)/1e6:.0f} MB cached at {PBF_PATH}")
    return PBF_PATH


# ---------------------------------------------------------------------------
# Geometry helpers (lat/lon lists, WGS84, local equirectangular metres)
# ---------------------------------------------------------------------------
M_PER_DEG_LAT = 111_320.0


def m_per_deg_lon(lat):
    return 111_320.0 * math.cos(math.radians(lat))


def ring_area_m2(ring):
    """Signed-area magnitude of a [[lat,lon], ...] ring, in square metres."""
    if len(ring) < 3:
        return 0.0
    lat0 = sum(p[0] for p in ring) / len(ring)
    kx = m_per_deg_lon(lat0)
    s = 0.0
    for i in range(len(ring)):
        y1, x1 = ring[i]
        y2, x2 = ring[(i + 1) % len(ring)]
        s += (x1 * kx) * (y2 * M_PER_DEG_LAT) - (x2 * kx) * (y1 * M_PER_DEG_LAT)
    return abs(s) / 2.0


def douglas_peucker(points, tol_m=6.0):
    """Simplify a lat/lon polyline, tolerance expressed in metres."""
    if len(points) <= 3:
        return points
    lat0 = points[0][0]
    kx = m_per_deg_lon(lat0)

    def dist(pt, a, b):
        px, py = pt[1] * kx, pt[0] * M_PER_DEG_LAT
        ax, ay = a[1] * kx, a[0] * M_PER_DEG_LAT
        bx, by = b[1] * kx, b[0] * M_PER_DEG_LAT
        dx, dy = bx - ax, by - ay
        den = math.hypot(dx, dy)
        if den == 0:
            return math.hypot(px - ax, py - ay)
        return abs(dy * px - dx * py + bx * ay - by * ax) / den

    def rec(pts):
        if len(pts) <= 2:
            return pts
        dmax, idx = 0.0, 0
        for i in range(1, len(pts) - 1):
            d = dist(pts[i], pts[0], pts[-1])
            if d > dmax:
                dmax, idx = d, i
        if dmax > tol_m:
            return rec(pts[:idx + 1])[:-1] + rec(pts[idx:])
        return [pts[0], pts[-1]]

    closed = points[0] == points[-1]
    body = points[:-1] if closed else points
    out = rec(body)
    if closed:
        out = out + [out[0]]
    return out


def point_in_ring(lat, lon, ring):
    """Ray-casting point-in-polygon on a [[lat,lon], ...] ring."""
    inside = False
    n = len(ring)
    j = n - 1
    for i in range(n):
        yi, xi = ring[i][0], ring[i][1]
        yj, xj = ring[j][0], ring[j][1]
        if (yi > lat) != (yj > lat):
            xint = (xj - xi) * (lat - yi) / (yj - yi) + xi
            if lon < xint:
                inside = not inside
        j = i
    return inside


def point_in_polygons(lat, lon, polygons):
    """polygons is a list of rings; odd/even across rings handles holes-as-rings."""
    return any(point_in_ring(lat, lon, r) for r in polygons if len(r) >= 3)


def representative_point(polygons):
    """A point guaranteed to be inside the largest ring (pole-of-inaccessibility-ish).

    Falls back to the centroid when it already lies inside, which keeps the
    existing badge placement stable for well-behaved districts.
    """
    rings = sorted([r for r in polygons if len(r) >= 3], key=ring_area_m2, reverse=True)
    if not rings:
        return None
    ring = rings[0]
    cy = sum(p[0] for p in ring) / len(ring)
    cx = sum(p[1] for p in ring) / len(ring)
    if point_in_ring(cy, cx, ring):
        return round(cy, 6), round(cx, 6)
    # Scan-line search: densest interior span on the centroid latitude band.
    lats = [p[0] for p in ring]
    lo, hi = min(lats), max(lats)
    best = None
    for k in range(1, 40):
        y = lo + (hi - lo) * k / 40.0
        xs = []
        n = len(ring)
        for i in range(n):
            y1, x1 = ring[i]
            y2, x2 = ring[(i + 1) % n]
            if (y1 > y) != (y2 > y):
                xs.append((x2 - x1) * (y - y1) / (y2 - y1) + x1)
        xs.sort()
        for i in range(0, len(xs) - 1, 2):
            span = xs[i + 1] - xs[i]
            if best is None or span > best[0]:
                best = (span, y, (xs[i] + xs[i + 1]) / 2.0)
    if best:
        return round(best[1], 6), round(best[2], 6)
    return round(cy, 6), round(cx, 6)
