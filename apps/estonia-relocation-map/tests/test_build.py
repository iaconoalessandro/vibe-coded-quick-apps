"""
Checks the build produces what it promises.

The promise is specific and worth guarding: index.html is ONE file that runs
by double-click and by upload, with no server, no install and no companion
directory. Every test here defends some part of that.
"""
import json
import os
import re
import subprocess
import sys

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, "index.html")

CITIES = ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]

# The old build was 3.4 MB. Anything much past that means something got
# inlined twice or a dependency crept back in.
SIZE_BUDGET_MB = 3.6


@pytest.fixture(scope="module", autouse=True)
def built():
    if not os.path.exists(INDEX):
        subprocess.run([sys.executable, "build.py", "--no-exports"],
                       cwd=ROOT, check=True, capture_output=True)


@pytest.fixture(scope="module")
def html(built):
    with open(INDEX, encoding="utf-8") as f:
        return f.read()


def test_index_exists_at_the_project_root():
    """Not in dist/, not renamed. The thing you double-click."""
    assert os.path.exists(INDEX), "index.html is missing from the project root"


def test_index_stays_inside_its_size_budget():
    mb = os.path.getsize(INDEX) / 1024 / 1024
    assert mb < SIZE_BUDGET_MB, f"index.html is {mb:.1f} MB, over the {SIZE_BUDGET_MB} MB budget"


def test_index_loads_nothing_from_disk():
    """
    The single most important property: opened from file://, the page cannot
    fetch anything. So it must not reference any local file at all — no
    stylesheet, no script, no data. Everything has to be inline.
    """
    with open(INDEX, encoding="utf-8") as f:
        html = f.read()

    for tag in re.findall(r"<(?:script|link|img)[^>]*>", html):
        ref = re.search(r'(?:src|href)="([^"]+)"', tag)
        if not ref:
            continue                      # inline <script> / <style>
        url = ref.group(1)
        if url.startswith(("http://", "https://", "data:", "#")):
            continue                      # absolute, embedded, or an anchor
        if url.startswith("${") or "${" in url:
            continue                      # a JS template slot, resolved at runtime
        pytest.fail(f"index.html references a local file, so it will not run from file://: {url}")


def test_index_loads_nothing_from_the_network_either():
    """
    Third-party assets would break both the offline case and the privacy
    story. External links to Google/Apple Maps are fine — those are things
    the user clicks, not things the page loads.
    """
    with open(INDEX, encoding="utf-8") as f:
        html = f.read()
    for tag in re.findall(r"<(?:script|link)[^>]*>", html):
        ref = re.search(r'(?:src|href)="(https?://[^"]+)"', tag)
        if ref:
            pytest.fail(f"index.html loads a third-party asset: {ref.group(1)}")


def test_index_uses_classic_scripts_not_modules():
    """ES modules are blocked on file:// by the same-origin policy."""
    with open(INDEX, encoding="utf-8") as f:
        html = f.read()
    assert 'type="module"' not in html, "module scripts do not run from file://"


def test_every_city_is_embedded(html):
    for city in CITIES:
        assert f"city/{city}.json" in html, f"{city} core data is not embedded"
        assert f"city/{city}.parks.json" in html, f"{city} parks are not embedded"
    assert "manifest.json" in html
    assert "i18n.json" in html


def test_the_fetch_shim_is_installed_before_the_app_runs():
    with open(INDEX, encoding="utf-8") as f:
        html = f.read()
    shim = html.index("window.fetch = function")
    app = html.index("ESTONIA RELOCATION MAP — application shell")
    assert shim < app, "the app would call the real fetch before the shim replaces it"


def test_grocery_layer_is_present(html):
    assert "Groceries &amp; Supermarkets" in html or "Groceries & Supermarkets" in html
    for chain in ("Lidl", "Prisma", "Maxima", "Rimi", "Selver"):
        assert chain in html, f"{chain} is missing from the built page"


def test_markup_is_keyboard_operable(html):
    """
    The panel used to be div+onclick throughout — unreachable by keyboard and
    silent to a screen reader. Every control must now be a real element.
    """
    assert "onclick=" not in html, "inline onclick handlers are back in the markup"
    assert html.count("aria-") > 30, "aria attributes have been stripped"
    assert 'role="listbox"' in html and 'role="combobox"' in html, "search is missing its roles"
    for toggle in re.findall(r'<button[^>]*class="accordion-toggle"[^>]*>', html):
        assert "aria-expanded" in toggle, f"accordion toggle without aria-expanded: {toggle[:80]}"


def test_page_is_responsive(html):
    assert "@media (max-width: 780px)" in html, "the mobile breakpoint is gone"
    assert "prefers-reduced-motion" in html, "reduced-motion handling is gone"


def test_coordinates_are_quantised(html):
    """
    Six decimal places is 11 cm — precision nobody can see, paid for in bytes
    by everyone who loads the page.
    """
    long_coords = re.findall(r"\[5[89]\.\d{7,},", html)
    assert not long_coords, f"un-quantised coordinates found: {long_coords[:3]}"


# ---------------------------------------------------------------------------
# The optional hosted build
# ---------------------------------------------------------------------------
DIST = os.path.join(ROOT, "dist")


@pytest.mark.skipif(not os.path.isdir(DIST), reason="dist/ not built (run: python3 build.py --split)")
def test_hosted_build_splits_the_payload():
    index = os.path.getsize(os.path.join(DIST, "index.html")) / 1024
    manifest = os.path.getsize(os.path.join(DIST, "data/manifest.json")) / 1024
    worst = max(os.path.getsize(os.path.join(DIST, f"data/city/{c}.json")) / 1024 for c in CITIES)
    assert index + manifest + worst < 1024, "the hosted build's first paint has grown past 1 MB"


@pytest.mark.skipif(not os.path.isdir(DIST), reason="dist/ not built")
def test_hosted_manifest_describes_every_city():
    with open(os.path.join(DIST, "data/manifest.json"), encoding="utf-8") as f:
        manifest = json.load(f)
    assert set(manifest["order"]) == set(CITIES)
    for city in CITIES:
        meta = manifest["cities"][city]
        for field in ("cityName", "center", "zoom", "bounds", "companiesCount", "groceryCount"):
            assert field in meta, f"{city}: manifest is missing {field}"
        assert meta["groceryCount"] > 0, f"{city}: no grocery stores in the manifest"
