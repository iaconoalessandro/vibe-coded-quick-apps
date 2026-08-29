import json

# Load existing exact road shapes
with open("tallinn_exact_transit_routes.json", "r", encoding="utf-8") as f:
    routes = json.load(f)

# 12 Maximally Distinct Bus Colors & Offsets (Kelly & Glasbey inspired high-contrast palette)
bus_palette = {
    "2": {
        "color": "#E6194B", 
        "name_tag": "🔴 Crimson Red", 
        "label": "🔴 Bus 2: Reisisadam ↔ Mõigu / Ülemiste", 
        "offset": -6.0,
        "weight": 4.5
    },
    "3": {
        "color": "#F032E6", 
        "name_tag": "🌸 Neon Magenta", 
        "label": "🌸 Bus 3: Vana-Lõuna / Veerenni ↔ Kalamaja / Pelguranna", 
        "offset": -4.0,
        "weight": 4.5
    },
    "11": {
        "color": "#FFE119", 
        "name_tag": "🟡 Sun Yellow", 
        "label": "🟡 Bus 11: Tehnopol / Mustamäe Express ↔ Kaubamaja", 
        "offset": -2.0,
        "weight": 4.5
    },
    "12": {
        "color": "#3CB44B", 
        "name_tag": "🟢 Vivid Green", 
        "label": "🟢 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle", 
        "offset": 0.0,
        "weight": 4.5
    },
    "13": {
        "color": "#F58231", 
        "name_tag": "🟠 Tangerine Orange", 
        "label": "🟠 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli", 
        "offset": 2.5,
        "weight": 4.5
    },
    "15": {
        "color": "#911EB4", 
        "name_tag": "🟣 Royal Purple", 
        "label": "🟣 Bus 15: Viru Keskus ↔ Tartu mnt ↔ Ülemiste City", 
        "offset": 5.0,
        "weight": 4.5
    },
    "16": {
        "color": "#4363D8", 
        "name_tag": "🔵 Cobalt Blue", 
        "label": "🔵 Bus 16: Väike-Õismäe ↔ Kristiine/WoHo ↔ Tallinn-Väike", 
        "offset": -5.0,
        "weight": 4.5
    },
    "20": {
        "color": "#42D4F4", 
        "name_tag": "🩵 Cyan Aqua", 
        "label": "🩵 Bus 20: Reisisadam ↔ Tammsaare ↔ Tehnopol ↔ Pääsküla", 
        "offset": 7.0,
        "weight": 4.5
    },
    "24": {
        "color": "#A9F522", 
        "name_tag": "🌿 Chartreuse Lime", 
        "label": "🌿 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia", 
        "offset": 3.5,
        "weight": 4.5
    },
    "28": {
        "color": "#FF6B6B", 
        "name_tag": "🌹 Coral Rose", 
        "label": "🌹 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise/Bolt)", 
        "offset": -3.0,
        "weight": 4.5
    },
    "42": {
        "color": "#9A6324", 
        "name_tag": "🟫 Amber Bronze", 
        "label": "🟫 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle", 
        "offset": 4.0,
        "weight": 4.5
    },
    "73": {
        "color": "#008080", 
        "name_tag": "🌊 Deep Teal", 
        "label": "🌊 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta)", 
        "offset": 6.0,
        "weight": 4.5
    },
    # Trolleys
    "81": {
        "color": "#00d2ff", 
        "name_tag": "🚎 Electric Blue", 
        "label": "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja", 
        "offset": -2.0,
        "weight": 5.0
    },
    "83": {
        "color": "#00ff87", 
        "name_tag": "🚎 Spring Mint", 
        "label": "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja", 
        "offset": 2.0,
        "weight": 5.0
    },
    "84": {
        "color": "#ff9900", 
        "name_tag": "🚎 Bright Amber", 
        "label": "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam", 
        "offset": -3.0,
        "weight": 5.0
    },
    "85": {
        "color": "#ff007f", 
        "name_tag": "🚎 Hot Pink", 
        "label": "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam", 
        "offset": 3.0,
        "weight": 5.0
    }
}

updated_routes = {}
for old_key, rdata in routes.items():
    num = rdata.get("num")
    if num in bus_palette:
        info = bus_palette[num]
        rdata["color"] = info["color"]
        rdata["label"] = info["label"]
        rdata["name_tag"] = info["name_tag"]
        rdata["offset"] = info["offset"]
        rdata["weight"] = info["weight"]
        updated_routes[info["label"]] = rdata
    else:
        updated_routes[old_key] = rdata

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(updated_routes, f, indent=2)

print(f"Successfully configured 12 distinct colors + parallel offsets for {len(updated_routes)} routes!")
