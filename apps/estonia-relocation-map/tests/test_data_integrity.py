"""
Turns the README's data claims into checks that run on every build.

The claims were previously asserted only in prose — "zero pairwise overlap",
"68/68 centroid checks pass", "the two portals agree closely". A claim nothing
re-verifies is a claim that quietly stops being true. These tests are the
enforcement.
"""
import json
import math
import os

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")

CITIES = ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]

# The rough national envelope. Anything outside is a geocoding accident.
ESTONIA_BOUNDS = (57.5, 21.5, 59.8, 28.3)   # south, west, north, east


def load(name):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        pytest.skip(f"{name} not built")
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def boundaries(city):
    return load(f"{city}_exact_district_boundaries.json")


def safety(city):
    name = ("district_safety_data_official.json" if city == "tallinn"
            else f"{city}_district_safety_official.json")
    return load(name)


def groceries(city):
    return load(f"{city}_grocery_stores.json")


def slug(identifier):
    return str(identifier or "").split("_", 1)[-1]


def iter_rings(polygons):
    """
    Yield every coordinate ring, whatever the nesting depth.

    The boundary files are not uniform: a single-part district stores
    polygons as [ring], a multi-part one as [[ring, hole], [ring]]. Walk down
    to the level where the members are [lat, lon] pairs instead of assuming.
    """
    def is_point(v):
        return (isinstance(v, (list, tuple)) and len(v) >= 2
                and all(isinstance(c, (int, float)) for c in v[:2]))

    def walk(node):
        if not isinstance(node, (list, tuple)) or not node:
            return
        if is_point(node[0]):
            yield node
            return
        for child in node:
            yield from walk(child)

    yield from walk(polygons or [])


# ---------------------------------------------------------------------------
# Geometry
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("city", CITIES)
def test_district_rings_are_closed_and_substantial(city):
    for d in boundaries(city):
        rings = list(iter_rings(d.get("polygons")))
        assert rings, f"{city}/{d['district']}: no geometry at all"
        for ring in rings:
            assert len(ring) >= 4, f"{city}/{d['district']}: ring with {len(ring)} points"
            for pt in ring:
                lat, lon = float(pt[0]), float(pt[1])
                assert not math.isnan(lat) and not math.isnan(lon), \
                    f"{city}/{d['district']}: NaN coordinate"
                s, w, n, e = ESTONIA_BOUNDS
                assert s <= lat <= n and w <= lon <= e, \
                    f"{city}/{d['district']}: point outside Estonia ({lat}, {lon})"


@pytest.mark.parametrize("city", CITIES)
def test_district_label_anchor_sits_inside_its_own_polygon(city):
    """The README's ray-casting centroid check, run for real."""
    def inside(lat, lon, ring):
        hit = False
        n = len(ring)
        for i in range(n):
            y1, x1 = ring[i][0], ring[i][1]
            y2, x2 = ring[(i + 1) % n][0], ring[(i + 1) % n][1]
            if (y1 > lat) != (y2 > lat):
                x_at = (x2 - x1) * (lat - y1) / (y2 - y1) + x1
                if lon < x_at:
                    hit = not hit
        return hit

    for d in boundaries(city):
        rings = list(iter_rings(d.get("polygons")))
        if not rings:
            continue
        assert any(inside(d["lat"], d["lon"], r) for r in rings), \
            f"{city}/{d['district']}: label anchor falls outside every ring"


# ---------------------------------------------------------------------------
# Scores
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("city", CITIES)
def test_safety_scores_are_on_the_stated_1_to_5_scale(city):
    for s in safety(city):
        score = s.get("mean_score")
        assert score is not None, f"{city}/{s.get('district')}: no mean_score"
        assert 1.0 <= float(score) <= 5.0, \
            f"{city}/{s['district']}: score {score} is off the 1–5 scale"


@pytest.mark.parametrize("city", CITIES)
def test_every_district_joins_across_rent_and_safety(city):
    """
    The two files carry the same districts under drifting display names
    ("Karlova (Artisan Wooden Heritage)" vs "... Heritage Quarter"), so the
    join runs on the id. If an id is renamed on one side only, the safety
    filter silently loses that district — this is the test that catches it.
    """
    rent_slugs = {slug(d["id"]) for d in boundaries(city)}
    safety_slugs = {slug(s["id"]) for s in safety(city)}
    missing = rent_slugs - safety_slugs
    assert not missing, f"{city}: districts with rent but no safety score: {sorted(missing)}"


# ---------------------------------------------------------------------------
# Provenance
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("city", CITIES)
def test_every_district_declares_its_rent_provenance(city):
    for d in boundaries(city):
        assert d.get("verified_source"), f"{city}/{d['district']}: no verified_source"
        assert d.get("verified_date"), f"{city}/{d['district']}: no verified_date"
        # An unverified district must say so rather than pass an estimate off
        # as an observation.
        if not d.get("verified_sample"):
            assert d.get("verified_observed") is False, \
                f"{city}/{d['district']}: zero sample but not flagged as an estimate"


def test_rent_colour_matches_the_national_scale():
    """One €/m² scale nationally — a colour must mean the same thing everywhere."""
    bands = [(15.0, math.inf), (12.5, 15.0), (10.0, 12.5), (7.5, 10.0), (5.0, 7.5), (0.0, 5.0)]
    seen = {}
    for city in CITIES:
        for d in boundaries(city):
            rent = float(d["mean_sqm"])
            band = next(i for i, (lo, hi) in enumerate(bands) if lo <= rent < hi)
            colour = d["color"]
            if colour in seen:
                assert seen[colour] == band, (
                    f"{city}/{d['district']}: colour {colour} used for band {band}, "
                    f"but for band {seen[colour]} elsewhere — the national scale has drifted"
                )
            else:
                seen[colour] = band


# ---------------------------------------------------------------------------
# Groceries
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("city", CITIES)
def test_grocery_stores_are_well_formed(city):
    payload = groceries(city)
    stores = payload["stores"]
    assert stores, f"{city}: no grocery stores"
    for s in stores:
        assert s["tier"] in ("discount_big", "large", "standard")
        assert 1 <= s["priceBand"] <= 4
        s_, w, n, e = ESTONIA_BOUNDS
        assert s_ <= s["lat"] <= n and w <= s["lon"] <= e, \
            f"{city}/{s['name']}: store outside Estonia"
        assert s["colour"].startswith("#")


@pytest.mark.parametrize("city", CITIES)
def test_every_district_has_a_nearest_store_reading(city):
    payload = groceries(city)
    access = payload["districtAccess"]
    for d in boundaries(city):
        entry = access.get(d["district"])
        assert entry, f"{city}/{d['district']}: no grocery access computed"
        assert entry.get("nearestAny"), f"{city}/{d['district']}: no nearest store"
        for key in ("nearestBig", "nearestAny"):
            if key in entry:
                assert entry[key]["walkMinutes"] >= 1
                assert entry[key]["metres"] >= 0


def test_the_big_four_chains_are_actually_present():
    """A brand-matching regression would silently empty the discount tier."""
    found = set()
    for city in CITIES:
        for s in groceries(city)["stores"]:
            if s.get("chain"):
                found.add(s["chain"])
    for chain in ("lidl", "prisma", "maxima", "rimi", "selver"):
        assert chain in found, f"no {chain} stores matched anywhere — brand matching broke"
