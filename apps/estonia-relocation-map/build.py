#!/usr/bin/env python3
"""
==============================================================================
BUILD — produces index.html
==============================================================================
The deliverable is ONE file: index.html at the project root.

    Double-click it and it runs. Drop it on any static host and it runs.
    No server, no install, no Python, nothing to configure. Everything —
    map library, styles, code, and all five cities of data — is inside it.

Python is needed only to REBUILD that file after the data changes. Nobody
opening or hosting the map needs Python, or anything else.

    python3 build.py              → index.html          (the deliverable)
    python3 build.py --split      → also writes dist/   (see below)

`--split` additionally emits a multi-file version that fetches data per city
over HTTP. It loads faster on a real web server but does NOT work by
double-click, because browsers block fetch() on file:// URLs. It exists for
if this is ever hosted properly and the first paint matters. Until then,
index.html is the whole product.
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


# 6 decimal places is 11 cm. On a map whose smallest feature is a park, that
# is precision nobody can see, paid for in bytes on every coordinate. 5 places
# is ~1.1 m — still far finer than the source geometry is actually accurate —
# and it takes a meaningful bite out of the file people have to download.
COORD_DECIMALS = 5


def quantise(node):
    """Round every float in a nested structure, in place where possible."""
    if isinstance(node, float):
        return round(node, COORD_DECIMALS)
    if isinstance(node, list):
        return [quantise(v) for v in node]
    if isinstance(node, dict):
        return {k: quantise(v) for k, v in node.items()}
    return node


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
        payloads[city_key] = quantise(payload)
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


def build_single_file(payloads, manifest, out_path):
    """
    The deliverable: one HTML file with everything inside it.

    Works from file:// (double-click) and from any static host, because it
    never asks the network for anything but map tiles.
    """
    head = read(os.path.join(TEMPLATES, "_head.html"))
    body = read(os.path.join(TEMPLATES, "_body.html"))

    # Inline the vendor assets that the hosted build links.
    def inline_css(name):
        return f"<style>\n{read(os.path.join(VENDOR, name))}\n</style>"

    def inline_js(name):
        return f"<script>\n{read(os.path.join(VENDOR, name))}\n</script>"

    head = head.replace('<link rel="stylesheet" href="vendor/leaflet.css">', inline_css("leaflet.css"))
    head = head.replace('<link rel="stylesheet" href="static/app.css">',
                        f"<style>\n{read(os.path.join(STATIC, 'app.css'))}\n</style>")
    head = head.replace('<link rel="stylesheet" href="static/features.css">',
                        f"<style>\n{read(os.path.join(STATIC, 'features.css'))}\n</style>")
    head = head.replace('<script src="vendor/leaflet.js"></script>', inline_js("leaflet.js"))
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
    write(out_path, assemble_page(head, body, scripts))


# ----------------------------------------------------------------------------
# 3. Exports
# ----------------------------------------------------------------------------
def build_exports(payloads):
    from generate_unified_tech_map import CITY_SOURCES, export_kml_kmz

    out = os.path.join(ROOT, "exports")
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
    split = "--split" in sys.argv

    print("Building city payloads…")
    payloads = build_city_payloads()
    manifest = build_manifest(payloads)

    print("Writing index.html…")
    index = os.path.join(ROOT, "index.html")
    build_single_file(payloads, manifest, index)

    if split:
        print("Writing dist/ (multi-file, needs a web server)…")
        if os.path.isdir(DIST):
            shutil.rmtree(DIST)
        build_hosted(payloads, manifest)
        build_single_file(payloads, manifest,
                          os.path.join(DIST, "estonia-map-offline.html"))

    if "--no-exports" not in sys.argv:
        print("Writing KML / KMZ exports…")
        build_exports(payloads)

    size_mb = os.path.getsize(index) / 1024 / 1024
    gz = _gzipped_size(index) / 1024 / 1024

    print()
    print(f"  index.html   {size_mb:5.1f} MB on disk")
    print(f"               {gz:5.1f} MB over the wire (any host gzips it)")
    print()
    print("  Double-click index.html, or upload it anywhere. Nothing to install.")
    if split:
        total = sum(os.path.getsize(os.path.join(dp, f))
                    for dp, _, fs in os.walk(DIST) for f in fs) / 1024 / 1024
        print(f"  dist/        {total:5.1f} MB  (optional, for hosting on a server)")


def _gzipped_size(path):
    import gzip
    with open(path, "rb") as f:
        return len(gzip.compress(f.read(), 6))


if __name__ == "__main__":
    main()
