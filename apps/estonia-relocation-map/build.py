#!/usr/bin/env python3
"""
==============================================================================
BUILD — assembles the map from templates, static assets and derived data
==============================================================================
Two outputs, from one set of sources:

  dist/index.html                 loads data per city over HTTP.
                                  First paint costs the manifest plus one
                                  city (~400 KB) instead of all five (3.4 MB).

  dist/estonia-map-offline.html   everything inlined in a single file, for
                                  a USB stick or a laptop with no network.
                                  Tiles still need a connection; the data
                                  does not.

Both share the same templates/ and static/ sources — there is no second copy
of the markup or the JavaScript anywhere in this repository.
==============================================================================
"""
import base64
import json
import mimetypes
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SCRIPTS = os.path.join(ROOT, "scripts")
DATA = os.path.join(ROOT, "data")
STATIC = os.path.join(ROOT, "static")
TEMPLATES = os.path.join(ROOT, "templates")
VENDOR = os.path.join(ROOT, "vendor")
DIST = os.path.join(ROOT, "dist")

if SCRIPTS not in sys.path:
    sys.path.insert(0, SCRIPTS)


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def load_json(path, default=None):
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8") as f:
        return json.load(f)


# ----------------------------------------------------------------------------
# 1. City payloads
# ----------------------------------------------------------------------------
def build_city_payloads():
    """Pull the assembled bundle out of the data layer and attach groceries."""
    from generate_unified_tech_map import CITY_DATA_BUNDLE

    payloads = {}
    for city_key, bundle in CITY_DATA_BUNDLE.items():
        payload = dict(bundle)
        groceries = load_json(os.path.join(DATA, f"{city_key}_grocery_stores.json"))
        if groceries:
            payload["groceries"] = groceries
        payloads[city_key] = payload
    return payloads


META_FIELDS = ("cityName", "icon", "center", "zoom", "bounds", "title",
               "hasTrams", "hasTrolleys", "companiesCount")


def build_manifest(payloads, default_city="tallinn"):
    cities = {}
    for key, payload in payloads.items():
        cities[key] = {f: payload[f] for f in META_FIELDS if f in payload}
        stores = (payload.get("groceries") or {}).get("stores") or []
        cities[key]["groceryCount"] = len(stores)
    return {
        "defaultCity": default_city,
        "order": list(payloads.keys()),
        "cities": cities,
        "generated": _today(),
    }


def _today():
    import datetime
    return datetime.date.today().isoformat()


# ----------------------------------------------------------------------------
# 2. Page assembly
# ----------------------------------------------------------------------------
def assemble_page(head, body, tail_scripts):
    return f"{head}\n{body}\n{tail_scripts}\n</body>\n</html>\n"


def build_hosted(payloads, manifest):
    head = read(os.path.join(TEMPLATES, "_head.html"))
    body = read(os.path.join(TEMPLATES, "_body.html"))
    scripts = (
        '    <script src="static/app.js" data-data-base="data"></script>\n'
        '    <script src="static/features.js"></script>'
    )
    write(os.path.join(DIST, "index.html"), assemble_page(head, body, scripts))

    # Data, split so nothing loads a city the visitor never looks at.
    write(os.path.join(DIST, "data/manifest.json"),
          json.dumps(manifest, ensure_ascii=False, separators=(",", ":")))
    for key, payload in payloads.items():
        # Parks ride in their own file: heaviest slice of the payload, and
        # purely ambient, so the core view does not wait for them.
        core = {k: v for k, v in payload.items() if k != "parks"}
        write(os.path.join(DIST, f"data/city/{key}.json"),
              json.dumps(core, ensure_ascii=False, separators=(",", ":")))
        write(os.path.join(DIST, f"data/city/{key}.parks.json"),
              json.dumps(payload.get("parks", []), ensure_ascii=False, separators=(",", ":")))

    shutil.copyfile(os.path.join(STATIC, "i18n.json"),
                    os.path.join(DIST, "data/i18n.json"))
    memes = os.path.join(DATA, "meme_faces_base64.json")
    if os.path.exists(memes):
        shutil.copyfile(memes, os.path.join(DIST, "data/meme_faces_base64.json"))

    os.makedirs(os.path.join(DIST, "static"), exist_ok=True)
    for name in ("app.css", "features.css", "app.js", "features.js"):
        shutil.copyfile(os.path.join(STATIC, name), os.path.join(DIST, "static", name))

    dst_vendor = os.path.join(DIST, "vendor")
    if os.path.isdir(dst_vendor):
        shutil.rmtree(dst_vendor)
    shutil.copytree(VENDOR, dst_vendor)


def build_offline(payloads, manifest):
    """Single self-contained file: no fetch, no vendor directory, no server."""
    head = read(os.path.join(TEMPLATES, "_head.html"))
    body = read(os.path.join(TEMPLATES, "_body.html"))

    # Inline the vendor assets that the hosted build links.
    def inline_css(name):
        return f"<style>\n{read(os.path.join(VENDOR, name))}\n</style>"

    def inline_js(name):
        return f"<script>\n{read(os.path.join(VENDOR, name))}\n</script>"

    head = head.replace('<link rel="stylesheet" href="vendor/leaflet.css">', inline_css("leaflet.css"))
    head = head.replace('<link rel="stylesheet" href="vendor/MarkerCluster.css">', inline_css("MarkerCluster.css"))
    head = head.replace('<link rel="stylesheet" href="vendor/MarkerCluster.Default.css">', inline_css("MarkerCluster.Default.css"))
    head = head.replace('<link rel="stylesheet" href="static/app.css">',
                        f"<style>\n{read(os.path.join(STATIC, 'app.css'))}\n</style>")
    head = head.replace('<link rel="stylesheet" href="static/features.css">',
                        f"<style>\n{read(os.path.join(STATIC, 'features.css'))}\n</style>")
    head = head.replace('<script src="vendor/leaflet.js"></script>', inline_js("leaflet.js"))
    head = head.replace('<script src="vendor/leaflet.markercluster.js"></script>', inline_js("leaflet.markercluster.js"))
    head = head.replace('<script src="vendor/leaflet.polylineoffset.js"></script>', inline_js("leaflet.polylineoffset.js"))

    # Leaflet's CSS refers to marker images by relative path; embed them.
    for img in os.listdir(os.path.join(VENDOR, "images")):
        path = os.path.join(VENDOR, "images", img)
        mime = mimetypes.guess_type(path)[0] or "image/png"
        with open(path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("ascii")
        head = head.replace(f"images/{img}", f"data:{mime};base64,{b64}")

    embedded = {
        "manifest.json": manifest,
        "i18n.json": load_json(os.path.join(STATIC, "i18n.json"), {}),
        "meme_faces_base64.json": load_json(os.path.join(DATA, "meme_faces_base64.json"), {}),
    }
    for key, payload in payloads.items():
        # Mirror the hosted split exactly, parks included — otherwise the
        # offline build reaches for the network for its green areas.
        embedded[f"city/{key}.json"] = {k: v for k, v in payload.items() if k != "parks"}
        embedded[f"city/{key}.parks.json"] = payload.get("parks", [])

    # A fetch shim: app.js and features.js are byte-identical to the hosted
    # build, and simply see every request answered from memory.
    shim = (
        "<script>\n"
        "// Offline build — the data is already here, so intercept the fetches\n"
        "// the shared application code makes and answer them locally.\n"
        "(function () {\n"
        "    const EMBEDDED = " + json.dumps(embedded, ensure_ascii=False, separators=(",", ":")) + ";\n"
        "    const realFetch = window.fetch ? window.fetch.bind(window) : null;\n"
        "    window.fetch = function (input, init) {\n"
        "        const url = String(input);\n"
        "        // Longest match first: city/x.parks.json must not be shadowed\n"
        "        // by a shorter key that happens to be a suffix of it.\n"
        "        const hit = Object.keys(EMBEDDED)\n"
        "            .filter(k => url.endsWith(k))\n"
        "            .sort((a, b) => b.length - a.length)[0];\n"
        "        if (hit) {\n"
        "            return Promise.resolve(new Response(JSON.stringify(EMBEDDED[hit]), {\n"
        "                status: 200, headers: {'Content-Type': 'application/json'}\n"
        "            }));\n"
        "        }\n"
        "        if (realFetch) return realFetch(input, init);\n"
        "        return Promise.reject(new Error('offline: ' + url));\n"
        "    };\n"
        "})();\n"
        "</script>"
    )

    scripts = (
        shim + "\n"
        "    <script>\n" + read(os.path.join(STATIC, "app.js")) + "\n</script>\n"
        "    <script>\n" + read(os.path.join(STATIC, "features.js")) + "\n</script>"
    )
    write(os.path.join(DIST, "estonia-map-offline.html"), assemble_page(head, body, scripts))


# ----------------------------------------------------------------------------
# 3. Exports
# ----------------------------------------------------------------------------
def build_exports(payloads):
    from generate_unified_tech_map import CITY_SOURCES, export_kml_kmz

    out = os.path.join(DIST, "exports")
    os.makedirs(out, exist_ok=True)
    labels = {"tallinn": "Tallinn", "tartu": "Tartu", "parnu": "Parnu",
              "narva": "Narva", "kohtla_jarve": "Kohtla-Jarve"}
    for key, companies in CITY_SOURCES["companies"].items():
        export_kml_kmz(
            companies, labels.get(key, key),
            os.path.join(out, f"{key}_tech_hubs.kml"),
            os.path.join(out, f"{key}_tech_hubs.kmz"),
        )


# ----------------------------------------------------------------------------
def main():
    if os.path.isdir(DIST):
        shutil.rmtree(DIST)

    print("Building city payloads…")
    payloads = build_city_payloads()
    manifest = build_manifest(payloads)

    print("Writing hosted build…")
    build_hosted(payloads, manifest)

    print("Writing offline build…")
    build_offline(payloads, manifest)

    if "--no-exports" not in sys.argv:
        print("Writing KML / KMZ exports…")
        build_exports(payloads)

    # Report what actually matters: what a first visit costs.
    manifest_kb = os.path.getsize(os.path.join(DIST, "data/manifest.json")) / 1024
    index_kb = os.path.getsize(os.path.join(DIST, "index.html")) / 1024
    biggest = max(payloads, key=lambda k: os.path.getsize(os.path.join(DIST, f"data/city/{k}.json")))
    biggest_kb = os.path.getsize(os.path.join(DIST, f"data/city/{biggest}.json")) / 1024
    offline_mb = os.path.getsize(os.path.join(DIST, "estonia-map-offline.html")) / 1024 / 1024

    print()
    print(f"  index.html            {index_kb:8.0f} KB")
    print(f"  manifest.json         {manifest_kb:8.0f} KB")
    print(f"  largest city payload  {biggest_kb:8.0f} KB  ({biggest})")
    print(f"  → first paint         {index_kb + manifest_kb + biggest_kb:8.0f} KB worst case")
    print(f"  offline build         {offline_mb:8.1f} MB  (single file)")
    total = sum(os.path.getsize(os.path.join(dp, f))
                for dp, _, fs in os.walk(DIST) for f in fs) / 1024 / 1024
    print(f"  dist/ total           {total:8.1f} MB")


if __name__ == "__main__":
    main()
