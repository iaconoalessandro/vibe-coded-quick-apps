import json

with open("tallinn_exact_transit_routes.json", "r", encoding="utf-8") as f:
    routes = json.load(f)

# High-contrast distinctive color palette
color_palette = {
    "2": ("#ff3d00", "🔴 Bus 2: Reisisadam ↔ Mõigu / Ülemiste"),
    "3": ("#e040fb", "🟣 Bus 3: Vana-Lõuna / Veerenni ↔ Kalamaja / Pelguranna"),
    "11": ("#00e5ff", "🔵 Bus 11: Tehnopol / Mustamäe Express ↔ Kaubamaja"),
    "12": ("#76ff03", "🟢 Bus 12: Väike-Õismäe ↔ Tammsaare ↔ Priisle"),
    "13": ("#ffd600", "🟡 Bus 13: Mustamäe ↔ Tammsaare ↔ Ülemiste City ↔ Seli"),
    "15": ("#ff1744", "🔴 Bus 15: Viru Keskus ↔ Tartu mnt ↔ Ülemiste City"),
    "16": ("#2979ff", "🔵 Bus 16: Väike-Õismäe ↔ Kristiine/WoHo ↔ Tallinn-Väike"),
    "20": ("#a78bfa", "🟣 Bus 20: Reisisadam ↔ Tammsaare ↔ Tehnopol ↔ Pääsküla"),
    "24": ("#10b981", "🟢 Bus 24: Kadaka / Tehnopol ↔ Kristiine ↔ Estonia"),
    "28": ("#f43f5e", "🔴 Bus 28: Väike-Õismäe ↔ Kristiine ↔ Veerenni (Wise/Bolt)"),
    "42": ("#f59e0b", "🟡 Bus 42: Väike-Õismäe ↔ WoHo ↔ Kaubamaja ↔ Priisle"),
    "73": ("#06b6d4", "🔵 Bus 73: Vana-Lõuna (Bolt) ↔ Kalaranna ↔ Tööstuse (Volta)"),
    "81": ("#00b0ff", "🚎 Trolley 1: Mustamäe ↔ Kristiine/WoHo ↔ Kaubamaja"),
    "83": ("#00e676", "🚎 Trolley 3: Mustamäe (Tehnopol) ↔ Sõpruse ↔ Kaubamaja"),
    "84": ("#ff9100", "🚎 Trolley 4: Keskuse (Mustamäe) ↔ Balti Jaam"),
    "85": ("#f50057", "🚎 Trolley 5: Mustamäe ↔ Mustamäe tee ↔ Balti Jaam")
}

updated_routes = {}
for old_label, rdata in routes.items():
    num = rdata.get("num")
    if num in color_palette:
        new_color, new_label = color_palette[num]
        rdata["color"] = new_color
        rdata["label"] = new_label
        updated_routes[new_label] = rdata
    else:
        updated_routes[old_label] = rdata

with open("tallinn_exact_transit_routes.json", "w", encoding="utf-8") as f:
    json.dump(updated_routes, f, indent=2)

print(f"Updated colors for {len(updated_routes)} routes successfully!")
