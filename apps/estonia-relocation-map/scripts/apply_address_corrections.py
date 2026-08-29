"""
Applies verified office-address corrections to COMPANIES_DATA in
generate_tallinn_tech_map.py.

Every entry below was checked against the company's own site, its Estonian
Business Register record, or OSM building data in August 2026. The goal is the
address of the office an ML engineer / data scientist would actually sit in,
not a registered, retail or manufacturing address.

Each correction carries an "address_note" that is rendered in the map popup so
the reason for the placement stays visible.
"""

import ast
import re

# name -> fields to overwrite
CORRECTIONS = {
    "Swedbank Estonia": {
        "address": "Liivalaia 36 (Arter Kvartal)",
        "district": "Kesklinn (Sibulaküla)",
        "lat": 59.429723, "lon": 24.757506,
        "address_note": "Corrected: Swedbank moved off Liivalaia 8 into the Arter Kvartal tower in H1 2025 — ~2,000 staff including the tech and data org.",
    },
    "Bolt": {
        "address": "Vana-Lõuna 15 (Bolt HQ)",
        "district": "Kesklinn (Veerenni)",
        "lat": 59.424133, "lon": 24.747648,
        "address_note": "Corrected: the purpose-built Bolt HQ is Vana-Lõuna 15 (OSM names the building 'Bolt'; it is also the registered address). Vana-Lõuna 39/1 is Zendesk's office.",
    },
    "Zendesk QA (Klaus)": {
        "address": "Vana-Lõuna 39/1",
        "district": "Kesklinn (Veerenni)",
        "lat": 59.420174, "lon": 24.743939,
        "address_note": "Corrected: Zendesk's Tallinn office is Vana-Lõuna 39/1, not Telliskivi. Klaus was acquired by Zendesk in 2024.",
    },
    "Twilio": {
        "address": "Veerenni 38",
        "district": "Kesklinn (Juhkentali)",
        "lat": 59.418012, "lon": 24.750652,
        "address_note": "Corrected: Twilio Estonia is at Veerenni 38. Veerenni 24 (Baltika Kvartal) is Wise's building.",
    },
    "Cleveron": {
        "address": "Valukoja 8, B lift, 9th floor",
        "district": "Ülemiste City (Lasnamäe)",
        "lat": 59.419580, "lon": 24.804783,
        "address_note": "Corrected: the Tallinn office is Valukoja 8, not Tehnopol. Note the core robotics R&D sits at the Viljandi head office (Reinu tee 48), ~2h from Tallinn.",
    },
    "Milrem Robotics": {
        "address": "Betooni 1",
        "district": "Lasnamäe (Sõjamäe)",
        "lat": 59.429784, "lon": 24.849913,
        "address_note": "Corrected: HQ, factory and prototyping are at Betooni 1 in industrial Sõjamäe, not Tehnopol.",
    },
    "Skeleton Technologies": {
        "address": "Sepise 7",
        "district": "Ülemiste City (Lasnamäe)",
        "lat": 59.419171, "lon": 24.804714,
        "address_note": "Corrected: Tallinn office is Sepise 7, not Kaabli 1. Supercapacitor hardware company — limited ML/DS scope.",
    },
    "CGI": {
        "address": "A. H. Tammsaare tee 56",
        "district": "Kristiine (Tondi)",
        "lat": 59.403009, "lon": 24.718396,
        "address_note": "Corrected: CGI Eesti is on Tammsaare tee, not Lõõtsa in Ülemiste City.",
    },
    "Katana Cloud Inventory": {
        "address": "Staapli 12 (Noblessner)",
        "district": "Põhja-Tallinn (Noblessner)",
        "lat": 59.451370, "lon": 24.727184,
        "address_note": "Corrected: Noblessner (Staapli 12), not Kalaranna 8.",
    },
    "Kuehne+Nagel": {
        "address": "A. H. Tammsaare tee 47, C, 8th floor",
        "district": "Kristiine (Tondi)",
        "lat": 59.401419, "lon": 24.717519,
        "address_note": "Corrected: the main office moved to Tammsaare Ärikeskus. Check which entity is hiring — the tech arm (Kühne+Nagel IT Service Centre) sat separately at Lõõtsa 2B in Ülemiste City.",
    },
    "Auve Tech": {
        "address": "Vabaõhumuuseumi tee 1",
        "district": "Haabersti (Rocca al Mare)",
        "lat": 59.445480, "lon": 24.609742,
        "address_note": "Corrected: moved west to Rocca al Mare, not Järvevana tee. Street-level coordinate — verify the exact entrance before commuting.",
    },
    "Xolo": {
        "address": "Kalasadama 4",
        "district": "Põhja-Tallinn (Kalamaja)",
        "lat": 59.444852, "lon": 24.749895,
        "address_note": "Corrected: the Tallinn office is Kalasadama 4; the company itself is registered in Tartu.",
    },
    "Mooncascade": {
        "address": "Tartu mnt 43",
        "district": "Kesklinn (Keldrimäe)",
        "lat": 59.432349, "lon": 24.766958,
        "address_note": "Corrected: the Tallinn office is Tartu mnt 43, not Telliskivi. Mooncascade is Tartu-rooted, so team location varies.",
    },
    "Icefire OÜ": {
        "address": "Veerenni 38",
        "district": "Kesklinn (Juhkentali)",
        "lat": 59.418012, "lon": 24.750652,
        "address_note": "Corrected: on Veerenni, not Valukoja 8. Icefire was acquired by Checkout.com.",
    },
    "Yolo Group": {
        "address": "Madara 33",
        "district": "Kristiine (Lilleküla)",
        "lat": 59.429684, "lon": 24.723021,
        "address_note": "Corrected: Yolo Group's own contact page lists Madara 33, not Erika 14.",
    },
    "Bondora": {
        "address": "A. H. Tammsaare tee 56",
        "district": "Kristiine (Tondi)",
        "lat": 59.403009, "lon": 24.718396,
        "address_note": "Corrected: Bondora outgrew its old space and moved to Tammsaare tee 56 in June 2023.",
    },
    "DefSecIntel Solutions": {
        "address": "Tähetorni 21h",
        "district": "Nõmme (Hiiu)",
        "lat": 59.385652, "lon": 24.642736,
        "address_note": "Corrected: the registered address moved from Akadeemia tee 21/4 (Tehnopol) to Tähetorni 21h in Nõmme.",
    },
    "Helmes": {
        "address": "Lõõtsa 6b",
        "district": "Ülemiste City (Lasnamäe)",
        "lat": 59.421730, "lon": 24.801707,
        "address_note": "Refined: the building at Lõõtsa 6b is tagged 'Helmes AS' in OSM.",
    },
    "Testlio": {
        "address": "Telliskivi 60-62 (S-hoone)",
        "district": "Põhja-Tallinn (Kalamaja)",
        "lat": 59.439342, "lon": 24.729514,
        "address_note": "Refined to the registered Telliskivi 60-62 building.",
    },
    "Ericsson": {
        "address": "Valukoja 8/1 (Öpiku Maja)",
        "district": "Ülemiste City (Lasnamäe)",
        "lat": 59.420115, "lon": 24.804787,
        "address_note": "Ericsson runs four Tallinn sites. This is the office/R&D one. Peterburi tee 67a is the supply site, Peterburi tee 66 is test hardware, Punane 72 is test labs — a software or ML role sits here.",
    },
    # Verified correct, but the site is not an ML/DS workplace — flag only.
    "Antegenes": {
        "address_note": "⚠ NOT IN TALLINN: Antegenes is registered and based at Raatuse 21, Tartu (~2h away). This Tehnopol pin is wrong — treat it as a Tartu employer.",
    },
    "EyeVi Technologies": {
        "address_note": "⚠ Primary office is in Tartu (Kreutzwald st); the Tallinn office opened in 2021 as the secondary site. Confirm which one a given role sits in.",
    },
    "Bally's Interactive": {
        "address_note": "⚠ Unconfirmed: the careers page places the Tallinn office in the Rotermanni Quarter downtown, not Sepapaja 1 in Ülemiste City. Exact street number not confirmed.",
    },
    "Coolbet": {
        "address_note": "⚠ Unconfirmed: registered at Kai 4, and Coolbet is part of Yolo Group (Madara 33). The Telliskivi 60/1 pin could not be verified.",
    },
    "Lingvist": {
        "address_note": "⚠ Unconfirmed: the company is registered at J. Poska 10 (Kadriorg) and publishes no office address. Pärnu mnt 67a could not be confirmed.",
    },
    "SYNLAB Eesti": {
        "address_note": "Address verified, but note this is a clinical laboratory group — data roles here are health-informatics, not product ML.",
    },
    "ABB": {
        "address_note": "Address verified. ABB Tallinn is industrial automation and global business services; ML/DS openings are rare compared with the software companies nearby.",
    },
}


def main():
    path = "generate_tallinn_tech_map.py"
    src = open(path, encoding="utf-8").read()

    start = src.index("COMPANIES_DATA = [")
    end = src.index("\n]\n", start) + 3
    block = src[start:end]

    lines = block.split("\n")
    applied, out = [], []
    for line in lines:
        stripped = line.strip().rstrip(",")
        if not stripped.startswith("{") or '"name"' not in stripped:
            out.append(line)
            continue
        rec = ast.literal_eval(stripped)
        fix = CORRECTIONS.get(rec["name"])
        if fix:
            rec.update(fix)
            applied.append(rec["name"])
            indent = line[: len(line) - len(line.lstrip())]
            trailing = "," if line.rstrip().endswith(",") else ""
            out.append(indent + repr(rec).replace("'", '"') + trailing)
        else:
            out.append(line)

    new_block = "\n".join(out)
    src = src[:start] + new_block + src[end:]

    # render the note in the popup, only when a company has one
    anchor = '''                        <div style="color: #6b7280; font-size: 11px;">${{c.district}}</div>
                    </div>'''
    assert anchor in src
    src = src.replace(anchor, '''                        <div style="color: #6b7280; font-size: 11px;">${{c.district}}</div>
                        ${{c.address_note ? `<div style="margin-top: 5px; padding: 5px 7px; background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 3px; color: #78350f; font-size: 10.5px; line-height: 1.35;">${{c.address_note}}</div>` : ''}}
                    </div>''')

    open(path, "w", encoding="utf-8").write(src)
    print(f"Applied {len(applied)} corrections/flags:")
    for n in applied:
        print("  -", n)
    missing = set(CORRECTIONS) - set(applied)
    if missing:
        raise SystemExit(f"NOT FOUND in COMPANIES_DATA: {sorted(missing)}")


if __name__ == "__main__":
    main()
