"""
Checks the build produces what it promises — including the payload budget,
which is the whole point of splitting the data out of the HTML. If a future
change quietly re-inlines a city, the first-paint test fails.
"""
import json
import os
import re
import subprocess
import sys

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")

CITIES = ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]

# The page ships one city at a time. 1 MB is generous for the largest
# (Tallinn, with 148 transit lines); the old build inlined 3.4 MB for every
# visitor regardless of which city they opened.
FIRST_PAINT_BUDGET_KB = 1024


@pytest.fixture(scope="module", autouse=True)
def built():
    if not os.path.exists(os.path.join(DIST, "index.html")):
        subprocess.run([sys.executable, "build.py", "--no-exports"],
                       cwd=ROOT, check=True, capture_output=True)


def kb(path):
    return os.path.getsize(path) / 1024


def test_hosted_build_exists():
    assert os.path.exists(os.path.join(DIST, "index.html"))
    assert os.path.exists(os.path.join(DIST, "data/manifest.json"))
    for city in CITIES:
        assert os.path.exists(os.path.join(DIST, f"data/city/{city}.json"))
        assert os.path.exists(os.path.join(DIST, f"data/city/{city}.parks.json"))


def test_first_paint_stays_inside_its_budget():
    index = kb(os.path.join(DIST, "index.html"))
    manifest = kb(os.path.join(DIST, "data/manifest.json"))
    worst = max(kb(os.path.join(DIST, f"data/city/{c}.json")) for c in CITIES)
    total = index + manifest + worst
    assert total < FIRST_PAINT_BUDGET_KB, (
        f"first paint is {total:.0f} KB, over the {FIRST_PAINT_BUDGET_KB} KB budget — "
        "has data been inlined back into the page?"
    )


def test_page_does_not_inline_the_city_data():
    html = open(os.path.join(DIST, "index.html"), encoding="utf-8").read()
    assert kb(os.path.join(DIST, "index.html")) < 100, "index.html has grown a data payload"
    assert "polygons" not in html, "geometry has leaked into the HTML"


def test_no_external_asset_hosts():
    """
    Leaflet is vendored. A CDN reference would break the offline build and
    put a third party in the critical path of every page load.
    """
    html = open(os.path.join(DIST, "index.html"), encoding="utf-8").read()
    for tag in re.findall(r'<(?:script|link)[^>]*>', html):
        src = re.search(r'(?:src|href)="([^"]+)"', tag)
        if src and src.group(1).startswith("http"):
            pytest.fail(f"external asset in the page shell: {src.group(1)}")


def test_offline_build_is_self_contained():
    path = os.path.join(DIST, "estonia-map-offline.html")
    assert os.path.exists(path)
    html = open(path, encoding="utf-8").read()
    for needle in ('src="vendor/', 'href="vendor/', 'src="static/', 'href="static/'):
        assert needle not in html, f"offline build still links {needle} — it is not self-contained"
    # Everything the hosted build fetches has to be embedded instead.
    for city in CITIES:
        assert f"city/{city}.json" in html, f"offline build is missing {city}"


def test_manifest_describes_every_city():
    manifest = json.load(open(os.path.join(DIST, "data/manifest.json"), encoding="utf-8"))
    assert set(manifest["order"]) == set(CITIES)
    assert manifest["defaultCity"] in CITIES
    for city in CITIES:
        meta = manifest["cities"][city]
        for field in ("cityName", "center", "zoom", "bounds", "companiesCount", "groceryCount"):
            assert field in meta, f"{city}: manifest is missing {field}"
        assert meta["groceryCount"] > 0, f"{city}: no grocery stores in the manifest"


def test_city_payloads_carry_groceries():
    for city in CITIES:
        payload = json.load(open(os.path.join(DIST, f"data/city/{city}.json"), encoding="utf-8"))
        assert "groceries" in payload, f"{city}: grocery layer missing from the payload"
        assert payload["groceries"]["stores"], f"{city}: grocery store list is empty"
        assert "parks" not in payload, f"{city}: parks should ride in their own file"


def test_markup_is_keyboard_operable():
    """
    The panel used to be div+onclick throughout — unreachable by keyboard and
    silent to a screen reader. Every control must now be a real element.
    """
    html = open(os.path.join(DIST, "index.html"), encoding="utf-8").read()
    assert "onclick=" not in html, "inline onclick handlers are back in the markup"
    assert html.count("aria-") > 30, "aria attributes have been stripped"
    assert 'role="listbox"' in html and 'role="combobox"' in html, "search is missing its roles"
    # Every accordion toggle needs a state a screen reader can announce.
    toggles = re.findall(r'<button[^>]*class="accordion-toggle"[^>]*>', html)
    assert toggles, "no accordion toggles found"
    for t in toggles:
        assert "aria-expanded" in t, f"accordion toggle without aria-expanded: {t[:80]}"


def test_page_is_responsive():
    css = open(os.path.join(DIST, "static/features.css"), encoding="utf-8").read()
    assert "@media (max-width: 780px)" in css, "the mobile breakpoint is gone"
    assert "prefers-reduced-motion" in css, "reduced-motion handling is gone"
