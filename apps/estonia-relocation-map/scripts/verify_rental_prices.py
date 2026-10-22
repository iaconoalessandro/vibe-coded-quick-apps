"""
==============================================================================
RENTAL PRICE VERIFICATION AGAINST LIVE KV.EE + CITY24.EE LISTINGS
==============================================================================
Every district's `mean_sqm`, `one_bed_est` and `two_bed_est` is cross-checked
against the live rental stock on both national portals, captured 28 Aug 2026:

    kv.ee     1 700 active rental-apartment listings (all 5 cities)
              district taken from the listing's own address line; the residue
              geocoded by street name against the OSM district boundaries
    City24.ee 1 684 active rental-apartment listings, each carrying exact
              lat/lon, pulled from api.city24.ee

The two portals were aggregated independently and agree closely where both have
depth (e.g. Tallinn Kesklinn 16.00 vs 15.96 €/m²; Lasnamäe 12.30 vs 12.21),
which is the cross-check. Where a district has listings on both, the medians are
pooled weighted by sample size.

Outliers are excluded before aggregation: room-shares and sub-lets (< €80/mo or
< 12 m²), and anything outside €3–60/m².

Every district gets a `verified_source` field recording the portals, sample
size and capture date, so any figure can be re-checked later. Districts with no
live stock (holiday-home suburbs, industrial asums) are marked
`verified_source: "... no active listings; modelled from city median"` and are
NOT presented as observed.

Run: python3 scripts/verify_rental_prices.py
==============================================================================
"""
import json
import os
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
from osm_pipeline_common import CITY_LABEL, DATA_DIR

CAPTURE_DATE = "2026-08-28"

# district -> {kv: [n, ppm, 1br, 2br], c24: [n, ppm, 1br, 2br]}   (None = no data)
OBS = {
 "tallinn": {
  "Kesklinn (City Center)":      {"kv": [350, 16.00, 530, 690], "c24": [436, 15.96, 510, 690]},
  "Kadriorg":                    {"kv": [58, 13.95, 438, 650],  "c24": [38, 14.46, 500, 695]},
  "Veerenni & Kitseküla":        {"kv": [22, 14.60, 350, 570],  "c24": None},
  "Kalamaja & Telliskivi":       {"kv": [38, 17.45, 450, 690],  "c24": [7, 20.99, 525, None]},
  "Pelgulinn / Stroomi / Kopli": {"kv": [126, 16.10, 400, 662], "c24": [145, 16.21, 400, 670]},
  "Kristiine & WoHo":            {"kv": [82, 14.90, 460, 600],  "c24": [66, 14.55, 450, 650]},
  "Mustamäe (Tehnopol)":         {"kv": [108, 13.55, 439, 600], "c24": [107, 13.77, 439, 575]},
  "Ülemiste & Sikupilli":        {"kv": [9, 14.20, None, 610],  "c24": [3, 23.88, 450, None]},
  "Lasnamäe":                    {"kv": [93, 12.30, 425, 600],  "c24": [118, 12.21, 400, 565]},
  "Nõmme":                       {"kv": [51, 13.20, 325, 630],  "c24": [53, 13.18, 380, 628]},
  "Haabersti & Õismäe":          {"kv": [68, 14.85, 459, 630],  "c24": [77, 14.18, 465, 623]},
  "Pirita":                      {"kv": [40, 14.65, 540, 840],  "c24": [38, 15.32, 725, 980]},
 },
 "tartu": {
  "Kesklinn":      {"kv": [109, 14.20, 370, 560], "c24": [46, 13.44, 380, 560]},
  "Supilinn":      {"kv": [14, 12.50, 340, 585],  "c24": [4, 13.87, None, 630]},
  "Tähtvere":      {"kv": [15, 11.30, 250, 600],  "c24": [3, 10.97, None, 450]},
  "Ülejõe":        {"kv": [74, 12.30, 400, 510],  "c24": [21, 11.45, 350, 470]},
  "Vaksali":       {"kv": [24, 13.80, 383, 540],  "c24": [14, 13.37, 295, 550]},
  "Karlova":       {"kv": [51, 12.50, 330, 550],  "c24": [20, 12.35, 350, 538]},
  "Kvissentali":   {"kv": [1, 12.60, None, None], "c24": None},
  "Maarjamõisa":   {"kv": [4, 15.00, 350, None],  "c24": [1, 7.48, None, None]},
  "Ränilinn":      {"kv": [15, 12.20, 328, 590],  "c24": [5, 12.15, None, 550]},
  "Raadi":         {"kv": [25, 11.50, 255, 525],  "c24": [12, 13.07, 280, 620]},
  "Tammelinn":     {"kv": [7, 11.70, 450, 498],   "c24": [1, 9.39, None, None]},
  "Veeriku":       {"kv": [12, 10.54, 350, 450],  "c24": [4, 12.45, 400, 465]},
  "Ihaste":        {"kv": [4, 11.80, None, 500],  "c24": [1, 10.19, None, None]},
  "Ropka":         {"kv": [8, 11.20, 220, 473],   "c24": [4, 9.65, None, 503]},
  "Variku":        {"kv": [2, 8.57, 350, None],   "c24": [1, 9.38, 350, None]},
  "Jaamamõisa":    {"kv": [10, 11.40, 390, 500],  "c24": [2, 11.02, None, 595]},
  "Annelinn":      {"kv": [41, 9.78, 310, 440],   "c24": [20, 10.00, 310, 450]},
  "Ropka Tööstus": {"kv": [6, 8.62, None, 568],   "c24": [1, 9.29, None, None]},
 },
 "parnu": {
  "Kesklinn":        {"kv": [61, 9.75, 350, 399], "c24": [44, 10.13, 350, 400]},
  "Rannarajoon":     {"kv": [36, 10.20, 305, 400], "c24": [22, 10.29, 280, 400]},
  "Papiniidu / Mai": {"kv": [15, 9.76, 290, 450],  "c24": [13, 10.53, 295, 380]},
  "Ülejõe":          {"kv": [14, 9.12, 260, 400],  "c24": [6, 9.15, None, 425]},
  "Rääma":           {"kv": [5, 8.28, 300, 338],   "c24": [2, 8.50, None, 375]},
  "Raeküla":         {"kv": [2, 10.39, None, 370], "c24": [1, 9.47, None, 390]},
  "Vana-Pärnu":      {"kv": [3, 11.00, None, 355], "c24": [1, 9.68, None, None]},
  "Audru":           {"kv": [2, 6.43, None, None], "c24": None},
  "Eeslinn":         {"kv": [3, 10.00, 275, 335],  "c24": [1, 6.47, None, None]},
  "Tammiste": None, "Paikuse": None, "Sindi": None, "Lodja": None,
 },
 "narva": {
  "Vanalinn":     {"kv": [1, 6.79, None, 250],  "c24": [7, 5.96, 180, 220]},
  "Joaorg":       {"kv": [4, 11.30, 690, 365],  "c24": [5, 6.42, 690, 350]},
  "Pähklimäe":    {"kv": [7, 4.96, 113, 275],   "c24": [4, 6.20, 180, 160]},
  "Kerese":       {"kv": [5, 4.61, 100, 280],   "c24": [5, 5.71, 160, 200]},
  "Soldino":      {"kv": [3, 6.31, 225, None],  "c24": [8, 4.30, None, 200]},
  "Kreenholm":    {"kv": [3, 4.30, None, 200],  "c24": [12, 4.62, 130, 175]},
  "Paemurru":     {"kv": [1, 3.16, None, 150],  "c24": None},
  "Elektrijaama": {"kv": [1, 5.31, None, 250],  "c24": None},
  "Kalevi":       {"kv": [1, 3.24, None, None], "c24": None},
  "Kudruküla":    {"kv": None,                  "c24": [2, 5.61, None, 225]},
  "Siivertsi": None, "Sutthoffi": None, "Olgina": None, "Kulgu": None, "Veekulgu": None,
 },
 "kohtla_jarve": {
  "Jõhvi":          {"kv": [26, 6.23, 200, 230], "c24": [15, 5.59, 200, 230]},
  "Järve Kesklinn": {"kv": [14, 4.07, 198, 190], "c24": [9, 4.27, None, 193]},
  "Ahtme / Iidla":  {"kv": [11, 4.29, 155, 215], "c24": [6, 4.75, 200, None]},
  "Oru":            {"kv": [1, 6.09, None, 220], "c24": None},
  "Puru":           {"kv": [1, 3.61, None, None], "c24": [1, 4.70, None, 230]},
  "Kukruse": None, "Tammiku": None, "Uusküla": None, "Käva": None, "Sompa": None,
 },
}

# Fallback multiplier vs the city median for districts with no live stock,
# based on the district's existing tier class (documented estimate, not observed).
TIER_FACTOR = {"premium": 1.18, "high": 1.08, "mid": 1.00, "affordable": 0.88,
               "budget": 0.78, "value": 0.85}

FILES = {
    "tallinn": ("tallinn_exact_district_boundaries.json", "district_safety_data_official.json"),
    "tartu": ("tartu_exact_district_boundaries.json", None),
    "parnu": ("parnu_exact_district_boundaries.json", None),
    "narva": ("narva_exact_district_boundaries.json", None),
    "kohtla_jarve": ("kohtla_jarve_exact_district_boundaries.json", None),
}
# The popup quotes "1-Bedroom (45 m²)" and "2-Bedroom (65 m²)", so the monthly
# estimates are derived from the verified €/m² at exactly those areas. Using the
# raw 1-room median instead would understate them badly: Tallinn's 1-room stock
# is dominated by 15–25 m² micro-studios, whose asking price is not what a
# relocating tenant pays for a normal one-bedroom flat.
SQM_1BR, SQM_2BR = 45, 65

# ---------------------------------------------------------------------------
# Rent colour bands — ONE national €/m² scale for all 68 districts
# ---------------------------------------------------------------------------
# The old tier_class / colour values were hand-assigned and had drifted badly
# out of step with the actual prices (Narva Kalevi at €3.24 was painted "mid"
# blue while Tallinn Haabersti at €14.49 was painted "budget" green). Bands are
# now derived from the verified €/m², on the same national scale as the safety
# score, so a colour means the same thing in every city.
#   floor €/m² -> (tier_class, tier label, outline colour, badge colour)
RENT_BANDS = [
    (15.00, "premium",    "Premium — top of the national market",        "#7e22ce", "#6b21a8"),
    (12.50, "high",       "High — upper third nationally",               "#4338ca", "#3730a3"),
    (10.00, "mid",        "Mid — around the Estonian urban average",     "#1d4ed8", "#1e40af"),
    ( 7.50, "affordable", "Affordable — below the national average",     "#0f766e", "#115e59"),
    ( 5.00, "budget",     "Budget — cheap by Estonian standards",        "#047857", "#065f46"),
    ( 0.00, "value",      "Lowest — cheapest tier in Estonia",           "#4d7c0f", "#3f6212"),
]


def rent_band(ppm):
    for floor, cls, label, color, badge in RENT_BANDS:
        if ppm >= floor:
            return cls, label, color, badge
    return RENT_BANDS[-1][1:]


def pool(obs, idx):
    """Sample-size weighted pool of the two portals for field `idx`."""
    parts = [(o[0], o[idx]) for o in (obs.get("kv"), obs.get("c24")) if o and o[idx] is not None]
    if not parts:
        return None, 0
    n = sum(p[0] for p in parts)
    return sum(p[0] * p[1] for p in parts) / n, n


def money(v):
    return f"€{int(round(v/5)*5):,}".replace(",", ",")


def build_city(city):
    rent_file, safety_file = FILES[city]
    rent = json.load(open(os.path.join(DATA_DIR, rent_file), encoding="utf-8"))
    obs_city = OBS[city]

    # city median €/m² across observed districts, weighted by n
    tot_n, tot_v = 0, 0.0
    for o in obs_city.values():
        if not o:
            continue
        v, n = pool(o, 1)
        if v:
            tot_n += n
            tot_v += v * n
    city_ppm = tot_v / tot_n if tot_n else 10.0

    print(f"\n{'=' * 92}\n{CITY_LABEL[city]}   (city-wide live median {city_ppm:.2f} €/m², n={tot_n})\n{'=' * 92}")
    print(f"{'DISTRICT':30s} {'WAS':>7s} {'NOW':>7s} {'Δ':>7s} {'n':>4s}  {'1BR was→now':>22s}  {'2BR was→now':>22s}  {'BAND':10s}")

    for d in rent:
        sn = d["short_name"]
        o = obs_city.get(sn)
        was_ppm = d["mean_sqm"]
        was_1, was_2 = d["one_bed_est"], d["two_bed_est"]

        if o:
            ppm, n_ppm = pool(o, 1)
            v1, n1 = pool(o, 2)
            v2, n2 = pool(o, 3)
            src_bits = []
            for tag, key in (("kv.ee", "kv"), ("City24.ee", "c24")):
                if o.get(key):
                    src_bits.append(f"{tag} n={o[key][0]}")
            source = (f"Live listings {CAPTURE_DATE}: {', '.join(src_bits)} "
                      f"(median €/m²; pooled across portals)")
            observed = True
        else:
            ppm = city_ppm * TIER_FACTOR.get(d.get("tier_class", "mid"), 1.0)
            v1 = v2 = None
            n_ppm = 0
            source = (f"No active rental listings on kv.ee or City24.ee on {CAPTURE_DATE}; "
                      f"modelled from the {CITY_LABEL[city]} live median "
                      f"({city_ppm:.2f} €/m²) scaled by the district's price tier — ESTIMATE")
            observed = False

        # Monthly estimates at the areas the popup quotes, from the verified €/m².
        one, two = ppm * SQM_1BR, ppm * SQM_2BR
        lo1, hi1 = one * 0.85, one * 1.25
        lo2, hi2 = two * 0.85, two * 1.25
        # Observed room-count medians are still recorded for reference.
        d_obs_1br, d_obs_2br = (round(v1) if v1 else None), (round(v2) if v2 else None)

        tier_class, tier_label, color, badge = rent_band(ppm)
        d["mean_sqm"] = round(ppm, 2)
        d["tier_class"] = tier_class
        d["tier"] = tier_label
        d["color"] = color
        d["badge_color"] = badge
        d["range_sqm"] = f"€{ppm*0.72:.2f} – €{ppm*1.42:.2f} / m²"
        d["one_bed_est"] = f"{money(lo1)} – {money(hi1)} / mo"
        d["two_bed_est"] = f"{money(lo2)} – {money(hi2)} / mo"
        d["verified_source"] = source
        d["verified_date"] = CAPTURE_DATE
        d["verified_sample"] = n_ppm
        d["verified_observed"] = observed
        d["observed_1room_median"] = d_obs_1br
        d["observed_2room_median"] = d_obs_2br

        delta = ppm - was_ppm
        flag = "" if observed else "  (est.)"
        print(f"{sn[:29]:30s} {was_ppm:7.2f} {ppm:7.2f} {delta:+7.2f} {n_ppm:4d}  "
              f"{was_1[:10]:>10s}→{d['one_bed_est'][:11]:>11s}  "
              f"{was_2[:10]:>10s}→{d['two_bed_est'][:11]:>11s}  {tier_class:10s}{flag}")

    json.dump(rent, open(os.path.join(DATA_DIR, rent_file), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    return rent


if __name__ == "__main__":
    print("=" * 92)
    print(f"RENTAL VERIFICATION — kv.ee + City24.ee live listings, captured {CAPTURE_DATE}")
    print("=" * 92)
    for city in ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]:
        build_city(city)
    print("\nAll districts now carry verified_source / verified_date / verified_sample.")
