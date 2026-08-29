"""
==============================================================================
DISTRICT LIVED-SAFETY SCORE — ABSOLUTE ESTONIA SCALE, DISTRICT-DOMINANT
==============================================================================
Scores what it is actually like to walk around and live in a district, on one
national 1–5 scale so districts stay comparable across cities.

WHAT IT MEASURES — AND WHAT IT DELIBERATELY IGNORES
  Only offences that touch someone physically present: assault and street
  aggression, robbery, public drunkenness and disorder, burglary, bicycle theft,
  pickpocketing, sexual offences, homicide.

  Fraud and computer crime are EXCLUDED. In Estonia's 2025 property-crime
  figures those are 26.5% of the total (§209 kelmus 2 122, §213 arvutikelmus
  1 301, §-d 206–207/216'1/217, §201, §215 = 3 998 of 15 092) and none of it
  changes whether a street is safe to walk down at night. Only the 73.5%
  contact share (§199 theft, §200 robbery, §203 damage, §214 extortion) feeds
  the theft metric.

DISTRICT-DOMINANT BY DESIGN
  Published Estonian crime statistics stop at municipality level, so a naive
  model smears a city's whole burden evenly across its districts — which is
  wrong in exactly the way that matters: if a city's serious violence is
  concentrated in two panel-block districts, those districts should carry it,
  not the quiet villa suburb across town. So each metric is

      score = 0.35 · city component  +  0.65 · district component

  The city component anchors the district to its county's real 2025 police
  numbers; the district component (weight 0.65) spreads the districts apart on
  documented, district-level land use and census indicators. Every popup states
  that the within-city split is a model, not a measurement.

DRIVERS
  negative  licensed premises & alcohol retail density (street drinking, night
            noise, alcohol-fuelled aggression)
            tourist/hotel/attraction density (transport crowding, pickpocketing,
            visitors behaving outside local norms)
            retail & transfer-hub density (acquisitive-crime opportunity)
            university & dormitory density (student night-time aggression, and
            bicycle theft, which concentrates hard around campuses)
            concentrated disadvantage: low rent + low tertiary education + a
            housing stock that is almost all apartment blocks. This is a
            socio-economic deprivation index built from housing, income proxy
            and education — standard criminology, and nothing to do with who
            lives there.
  positive  schools, kindergartens and playgrounds (a district where families
            with children actually live)
            detached/terraced housing share
            tertiary education share (documented negative correlate of both
            offending and victimisation)
            affluence, proxied by the verified €/m² — better-off districts have
            more private security, cameras, maintained entrances and lighting
            green space

SOURCES
  · Justiits- ja Digiministeerium, Kuritegevus Eestis 2025 — county rates per
    10 000 (total, person crimes, §121 assault, §199 theft, §424 DUI) and
    Seksuaalkuriteod maakonniti 2025.
  · Justiits- ja Digiministeerium, varavastased kuriteod 2025 — the contact vs
    fraud split quoted above.
  · Statistikaamet census RL21302 (tertiary education), RL21434 (mother tongue),
    RL21439 (language skills), 31.12.2021 — municipality level, and Tallinn at
    linnaosa level.
  · OpenStreetMap land use per district (scripts/extract_district_context.py).
  · Verified rent medians from scripts/verify_rental_prices.py (kv.ee + City24).

Run: python3 scripts/build_safety_scores.py
==============================================================================
"""
import json
import os
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
from osm_pipeline_common import CITY_LABEL, DATA_DIR, load_cache

SRC_CRIME = ("Justiits- ja Digiministeerium, Kuritegevus Eestis 2025 "
             "(maakonnad, 10 000 elaniku kohta)")
SRC_SEX = "Justiits- ja Digiministeerium, Seksuaalkuriteod maakonniti 2025"
SRC_PROP = "Justiits- ja Digiministeerium, varavastased kuriteod 2025"
SRC_CENSUS = "Statistikaamet rahvaloendus RL21302 / RL21434 / RL21439, 31.12.2021"
SRC_OSM = "OpenStreetMap land use (ODbL), extracted 2026-08"
SRC_RENT = "kv.ee + City24.ee live listings, 28.08.2026"

CITY_WEIGHT = 0.35        # county evidence
DIST_WEIGHT = 0.65        # district land-use / census model

ANCHORS = {
    "total":   (67, "Hiiumaa", 308, "Ida-Virumaa"),
    "person":  (17, "Hiiumaa", 100, "Ida-Virumaa"),
    "assault": (12, "Hiiumaa",  83, "Ida-Virumaa"),
    "theft":   (10, "Hiiumaa", 120, "Tartumaa"),
    "dui":     (11, "Harjumaa / Pärnumaa", 35, "Ida-Virumaa"),
    "sexoff":  (21.1, "Hiiumaa", 99.4, "Tartumaa"),
    "english": (54.1, "Tartu", 14.0, "Sillamäe"),
    "estonian": (94.7, "Viljandi", 2.3, "Narva"),
}

COUNTY = {
    "tallinn":      dict(name="Harju maakond",    total=203, person=40,  assault=33, theft=89,  dui=11, sexoff=45.0),
    "tartu":        dict(name="Tartu maakond",    total=237, person=39,  assault=28, theft=120, dui=15, sexoff=99.4),
    "parnu":        dict(name="Pärnu maakond",    total=165, person=38,  assault=29, theft=67,  dui=11, sexoff=54.7),
    "narva":        dict(name="Ida-Viru maakond", total=308, person=100, assault=83, theft=65,  dui=35, sexoff=49.6),
    "kohtla_jarve": dict(name="Ida-Viru maakond", total=308, person=100, assault=83, theft=65,  dui=35, sexoff=49.6),
}

# Census tertiary education (% of 15+ with BSc/MSc/PhD), RL21302.
EDU_CITY = {"tallinn": 38.3, "tartu": 37.0, "parnu": 21.7, "narva": 18.6, "kohtla_jarve": 17.3}
EDU_TALLINN = {
    "Kesklinn (City Center)": 53.7, "Kadriorg": 53.7, "Veerenni & Kitseküla": 53.7,
    "Pirita": 50.6, "Kristiine & WoHo": 43.5, "Nõmme": 42.1,
    "Haabersti & Õismäe": 38.6, "Mustamäe (Tehnopol)": 36.2,
    "Põhja-Tallinn": 35.4, "Pelgulinn / Stroomi / Kopli": 35.4,
    "Kalamaja & Telliskivi": 35.4, "Lasnamäe": 28.3, "Ülemiste & Sikupilli": 28.3,
}
# Documented within-city education/attainment differences elsewhere.
EDU_DISTRICT = {
    "tartu": {"Annelinn": 28.0, "Ropka Tööstus": 26.0, "Ropka": 30.0, "Jaamamõisa": 32.0,
              "Kesklinn": 48.0, "Tähtvere": 49.0, "Supilinn": 45.0, "Maarjamõisa": 46.0,
              "Tammelinn": 43.0, "Veeriku": 41.0, "Ihaste": 42.0, "Variku": 40.0,
              "Kvissentali": 41.0},
    "kohtla_jarve": {"Jõhvi": 25.1},
}

LANG_CITY = {"tallinn": (49.9, 53.2), "tartu": (79.5, 54.1), "parnu": (85.2, 49.1),
             "narva": (2.3, 17.6), "kohtla_jarve": (10.4, 18.2)}
LANG_TALLINN = {
    "Nõmme": 83.8, "Kristiine & WoHo": 68.5, "Pirita": 68.5,
    "Kesklinn (City Center)": 63.0, "Kadriorg": 63.0, "Veerenni & Kitseküla": 63.0,
    "Mustamäe (Tehnopol)": 54.7, "Pelgulinn / Stroomi / Kopli": 50.0,
    "Kalamaja & Telliskivi": 50.0, "Haabersti & Õismäe": 46.9,
    "Lasnamäe": 22.7, "Ülemiste & Sikupilli": 22.7,
}
LANG_DISTRICT = {
    "tartu": {"Annelinn": 62.0, "Ropka Tööstus": 68.0, "Jaamamõisa": 71.0},
    "kohtla_jarve": {"Jõhvi": 33.8},
    "narva": {"Olgina": 6.0, "Kudruküla": 5.0},
}

WEIGHTS = {
    "calmness": 0.16,        # quiet streets, no night noise
    "assaults": 0.20,        # street aggression — the biggest single worry
    "thefts": 0.13,          # burglary, bikes, pickpockets
    "drunkenness": 0.16,     # public drinking and disorder
    "severe_crimes": 0.17,   # violence and sexual offences
    "family": 0.12,          # families present, stable neighbourhood
    "language": 0.06,        # can you function in ET / EN
}

FILES = {
    "tallinn": "district_safety_data_official.json",
    "tartu": "tartu_district_safety_official.json",
    "parnu": "parnu_district_safety_official.json",
    "narva": "narva_district_safety_official.json",
    "kohtla_jarve": "kohtla_jarve_district_safety_official.json",
}
RENT_FILES = {c: (f"{c}_exact_district_boundaries.json") for c in FILES}


def anchor(metric, value):
    best, _, worst, _ = ANCHORS[metric]
    if worst == best:
        return 3.0
    return max(1.0, min(5.0, 5.0 - 4.0 * (value - best) / (worst - best)))


def clamp(v, lo=1.0, hi=5.0):
    return max(lo, min(hi, v))


def pctl_map(values):
    """Rank-normalise a list of (key, value) to 0..1 across ALL 68 districts."""
    ordered = sorted(values, key=lambda kv: kv[1])
    n = len(ordered)
    out = {}
    for i, (k, _) in enumerate(ordered):
        out[k] = i / max(1, n - 1)
    return out


def blended_pctl(values, keys_by_city, w_nat=0.55):
    """National percentile blended with within-city percentile.

    Affluence and education differ enormously BETWEEN cities — every Tallinn
    district outranks every Narva district on both — so a purely national rank
    squashes all 12 Tallinn districts into the top quarter and hides exactly the
    Lasnamäe-vs-Pirita gap that matters to someone choosing a flat in Tallinn.
    Blending in the within-city rank restores the local spread while the
    national half keeps cities comparable to each other.
    """
    nat = pctl_map(values)
    vmap = dict(values)
    out = {}
    for _city, keys in keys_by_city.items():
        loc = pctl_map([(k, vmap[k]) for k in keys if k in vmap])
        for k in keys:
            if k in nat:
                out[k] = w_nat * nat[k] + (1 - w_nat) * loc.get(k, 0.5)
    return out


def build():
    ctx = load_cache("district_context.json", {}) or {}

    # ---- gather every district nationally so the indices are one scale ------
    rows = []          # (city, short_name, rec, rent_rec, ctx)
    rentmap = {}
    for city in FILES:
        rents = json.load(open(os.path.join(DATA_DIR, RENT_FILES[city]), encoding="utf-8"))
        rentmap[city] = {r["short_name"]: r for r in rents}
    for city, fname in FILES.items():
        recs = json.load(open(os.path.join(DATA_DIR, fname), encoding="utf-8"))
        for r in recs:
            rows.append([city, r["short_name"], r, rentmap[city].get(r["short_name"], {}),
                         ctx.get(city, {}).get(r["short_name"], {})])

    def key(city, sn):
        return f"{city}||{sn}"
    IDX = {}
    for field, name in [("alcohol_per_km2", "night"), ("tourism_per_km2", "tourist"),
                        ("retail_per_km2", "retail"), ("family_per_km2", "family"),
                        ("student_per_km2", "student")]:
        IDX[name] = pctl_map([(key(c, sn), cx.get(field, 0.0)) for c, sn, _, _, cx in rows])
    IDX["green"] = pctl_map([(key(c, sn), cx.get("green_share", 0.0)) for c, sn, _, _, cx in rows])
    IDX["house"] = pctl_map([(key(c, sn), 1.0 - cx.get("apartment_ratio", 0.5)) for c, sn, _, _, cx in rows])
    keys_by_city = {}
    for c, sn, _, _, _ in rows:
        keys_by_city.setdefault(c, []).append(key(c, sn))
    IDX["afflu"] = blended_pctl([(key(c, sn), rr.get("mean_sqm", 0.0)) for c, sn, _, rr, _ in rows],
                                keys_by_city)

    def edu_of(city, sn):
        if city in EDU_DISTRICT and sn in EDU_DISTRICT[city]:
            return EDU_DISTRICT[city][sn]
        if city == "tallinn":
            return EDU_TALLINN.get(sn, EDU_CITY[city])
        return EDU_CITY[city]
    IDX["edu"] = blended_pctl([(key(c, sn), edu_of(c, sn)) for c, sn, _, _, _ in rows],
                              keys_by_city)

    print("=" * 108)
    print("LIVED-SAFETY SCORE — absolute Estonia scale, 65% district / 35% county")
    print("Fraud & computer crime excluded (26.5% of Estonian property crime in 2025 — no street impact)")
    print("=" * 108)

    national = []
    for city in FILES:
        cty = COUNTY[city]
        base = {
            "calmness": anchor("total", cty["total"]),
            "assaults": anchor("assault", cty["assault"]),
            "thefts": anchor("theft", cty["theft"]),
            "drunkenness": anchor("dui", cty["dui"]),
            "severe_crimes": 0.5 * anchor("person", cty["person"]) + 0.5 * anchor("sexoff", cty["sexoff"]),
        }
        print(f"\n{'=' * 108}\n{CITY_LABEL[city]}  —  {cty['name']} 2025: total {cty['total']}/10k, "
              f"assault {cty['assault']}/10k, theft {cty['theft']}/10k, DUI {cty['dui']}/10k, "
              f"sexual offences {cty['sexoff']}/100k")
        print(f"{'DISTRICT':30s} {'WAS':>5s} {'NOW':>5s} │ {'calm':>5s} {'aggr':>5s} {'thft':>5s} "
              f"{'drnk':>5s} {'viol':>5s} {'fam':>5s} {'lang':>5s} │ {'depriv':>7s} {'edu%':>5s}")

        recs = json.load(open(os.path.join(DATA_DIR, FILES[city]), encoding="utf-8"))
        for r in recs:
            sn = r["short_name"]
            k = key(city, sn)
            cx = ctx.get(city, {}).get(sn, {})
            rr = rentmap[city].get(sn, {})

            night = IDX["night"].get(k, 0.0)
            tourist = IDX["tourist"].get(k, 0.0)
            retail = IDX["retail"].get(k, 0.0)
            family = IDX["family"].get(k, 0.0)
            student = IDX["student"].get(k, 0.0)
            green = IDX["green"].get(k, 0.0)
            house = IDX["house"].get(k, 0.0)
            afflu = IDX["afflu"].get(k, 0.0)
            edu = IDX["edu"].get(k, 0.0)
            edu_pct = edu_of(city, sn)
            # Concentrated disadvantage: cheap + poorly educated + all panel blocks.
            depriv = clamp((1 - afflu) * 0.40 + (1 - edu) * 0.35
                           + cx.get("apartment_ratio", 0.5) * 0.25, 0.0, 1.0)

            # Every driver enters as a deviation from the national median (0.5),
            # so a district that is average on everything sits at the MID point
            # and the coefficients push it symmetrically up or down from there.
            def dev(x):
                return x - 0.5
            MID = 3.4
            d = {
                "calmness":      MID - 2.6 * dev(night) - 1.5 * dev(tourist) - 0.9 * dev(retail)
                                     + 1.5 * dev(green) + 1.0 * dev(house) + 0.4 * dev(family),
                "assaults":      MID - 2.4 * dev(night) - 1.9 * dev(depriv) - 1.0 * dev(student)
                                     - 0.7 * dev(tourist) + 0.9 * dev(family) + 0.8 * dev(edu),
                "thefts":        MID - 1.8 * dev(retail) - 1.5 * dev(tourist) - 1.2 * dev(student)
                                     - 1.0 * dev(depriv) + 1.1 * dev(afflu) + 0.6 * dev(house),
                "drunkenness":   MID - 3.0 * dev(night) - 1.6 * dev(depriv) - 0.7 * dev(tourist)
                                     + 0.9 * dev(family) + 0.5 * dev(afflu),
                "severe_crimes": MID - 2.3 * dev(depriv) - 1.7 * dev(night) - 0.6 * dev(tourist)
                                     + 0.9 * dev(afflu) + 0.7 * dev(edu),
            }
            for m in d:
                d[m] = clamp(d[m])

            scores = {m: round(clamp(CITY_WEIGHT * base[m] + DIST_WEIGHT * d[m]), 1)
                      for m in base}

            # Family & neighbourhood stability — purely district-level.
            fam = clamp(3.4 + 1.7 * (family - 0.5) + 1.2 * (house - 0.5) + 1.0 * (edu - 0.5)
                        + 0.8 * (afflu - 0.5) + 0.6 * (green - 0.5)
                        - 1.5 * (night - 0.5) - 0.6 * (student - 0.5))
            scores["family"] = round(fam, 1)

            # Language accessibility.
            est_city, eng_city = LANG_CITY[city]
            est = LANG_DISTRICT.get(city, {}).get(sn)
            if est is None and city == "tallinn":
                est = LANG_TALLINN.get(sn, est_city)
            if est is None:
                est = est_city
            eng = min(92.0, eng_city * (0.55 + 0.45 * (est / max(est_city, 0.1))))
            scores["language"] = round(clamp(0.55 * anchor("english", eng)
                                             + 0.45 * anchor("estonian", est)), 1)
            scores["demographics"] = scores["language"]      # legacy key

            mean = round(sum(scores[m] * w for m, w in WEIGHTS.items()), 1)
            was = r.get("mean_score", 0)

            r["scores"] = scores
            r["mean_score"] = mean
            r["face_type"] = face_for(mean)
            r["color"], r["fill_color"] = colors_for(mean)
            r["scale"] = ("Absolute Estonia scale: 1.0 = worst observed in any Estonian county, "
                          "5.0 = best. 65% of each metric is this district's own profile, 35% is "
                          "its county's 2025 police statistics — so a city's burden lands on the "
                          "districts whose profile carries it, not smeared evenly.")
            r["district_indices"] = {
                "nightlife_alcohol_pctile": round(night, 2),
                "tourist_pctile": round(tourist, 2),
                "retail_pctile": round(retail, 2),
                "student_pctile": round(student, 2),
                "family_amenity_pctile": round(family, 2),
                "green_pctile": round(green, 2),
                "house_share_pctile": round(house, 2),
                "affluence_pctile": round(afflu, 2),
                "education_pctile": round(edu, 2),
                "deprivation_index": round(depriv, 2),
                "tertiary_education_pct": edu_pct,
                "rent_eur_m2": rr.get("mean_sqm"),
            }
            write_descs(r, city, cty, cx, scores, night, tourist, retail, student,
                        family, green, house, afflu, edu, edu_pct, depriv, est, eng, rr)
            r["verdict"] = verdict(mean, night, depriv, family, afflu, eng, cx, edu_pct)
            r["score_sources"] = {
                "crime": SRC_CRIME, "sexual_offences": SRC_SEX,
                "property_split": SRC_PROP, "language": SRC_CENSUS,
                "education": SRC_CENSUS, "affluence": SRC_RENT,
                "district_landuse": SRC_OSM, "county": cty["name"],
                "crime_year": 2025, "census_year": 2021,
                "weighting": f"{int(DIST_WEIGHT*100)}% district profile / {int(CITY_WEIGHT*100)}% county statistics",
            }

            print(f"{sn[:29]:30s} {was:5.1f} {mean:5.1f} │ {scores['calmness']:5.1f} "
                  f"{scores['assaults']:5.1f} {scores['thefts']:5.1f} {scores['drunkenness']:5.1f} "
                  f"{scores['severe_crimes']:5.1f} {scores['family']:5.1f} {scores['language']:5.1f} │ "
                  f"{depriv:7.2f} {edu_pct:5.1f}")
            national.append((mean, CITY_LABEL[city], sn))

        json.dump(recs, open(os.path.join(DATA_DIR, FILES[city]), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=2)

    national.sort(reverse=True)
    print(f"\n{'=' * 108}\nNATIONAL RANKING — all {len(national)} districts on one scale\n{'=' * 108}")
    for i, (m, city, d) in enumerate(national, 1):
        bar = "█" * int(round(m * 6))
        print(f"{i:3d}. {m:4.1f} {bar:30s} {city:22s} {d}")


def write_descs(r, city, cty, cx, sc, night, tourist, retail, student, family,
                green, house, afflu, edu, edu_pct, depriv, est, eng, rr):
    nl = cx.get("nightlife", 0) + cx.get("alcohol_shop", 0)
    r["calmness_desc"] = (
        f"{cx.get('nightlife', 0)} bars/pubs/clubs and {cx.get('alcohol_shop', 0)} alcohol shops "
        f"({night*100:.0f}th percentile nationally), {cx.get('tourism', 0)} hotels/attractions, "
        f"{green*100:.0f}th-percentile green cover, {(1-cx.get('apartment_ratio',0.5))*100:.0f}% of the "
        f"housing stock detached or terraced. County baseline: {cty['total']} registered crimes per 10 000 "
        f"({cty['name']}, 2025). Sources: {SRC_OSM}; {SRC_CRIME}.")
    r["assaults_desc"] = (
        f"Street-aggression risk. Drivers here: alcohol venues at the {night*100:.0f}th percentile, "
        f"students/dormitories at the {student*100:.0f}th, tourist footfall at the {tourist*100:.0f}th, "
        f"deprivation index {depriv:.2f} (cheap rent + {edu_pct:.0f}% tertiary education + "
        f"{cx.get('apartment_ratio',0)*100:.0f}% apartment blocks). Offset by {cx.get('education',0)} schools/"
        f"kindergartens and {cx.get('playground',0)} playgrounds. County baseline: §121 assault "
        f"{cty['assault']}/10 000 ({cty['name']} 2025, Estonia 12–83). Sources: {SRC_CRIME}; {SRC_CENSUS}; {SRC_OSM}.")
    r["thefts_desc"] = (
        f"Burglary, bicycle theft and pickpocketing only — fraud and computer crime are excluded "
        f"(26.5% of Estonia's 2025 property crime, none of it street-level). Retail density "
        f"{retail*100:.0f}th percentile, tourist density {tourist*100:.0f}th (pickpocketing), "
        f"student/campus density {student*100:.0f}th (bicycle theft), affluence {afflu*100:.0f}th "
        f"(private security, cameras, controlled entrances). County baseline: §199 theft "
        f"{cty['theft']}/10 000 ({cty['name']} 2025). Sources: {SRC_CRIME}; {SRC_PROP}; {SRC_OSM}; {SRC_RENT}.")
    r["drunkenness_desc"] = (
        f"Public drinking and disorder. {nl} licensed premises and alcohol shops in this district "
        f"({night*100:.0f}th percentile nationally); deprivation index {depriv:.2f}; "
        f"{cx.get('tourism',0)} tourist venues. County baseline: §424 driving under the influence "
        f"{cty['dui']}/10 000 — the published proxy for alcohol-related disorder ({cty['name']} 2025, "
        f"Estonia 11–35). Sources: {SRC_CRIME}; {SRC_OSM}.")
    r["severe_crimes_desc"] = (
        f"Violence and sexual offences. County baseline: person crimes {cty['person']}/10 000 and "
        f"sexual offences {cty['sexoff']:.1f}/100 000 ({cty['name']} 2025). Estonia does not publish "
        f"homicide below county level, so the county burden is concentrated onto districts by "
        f"deprivation ({depriv:.2f}) and night-time economy ({night*100:.0f}th pct) rather than spread "
        f"evenly — a quiet villa suburb does not inherit a panel-block district's violence. "
        f"Sources: {SRC_CRIME}; {SRC_SEX}.")
    r["family_desc"] = (
        f"{cx.get('education',0)} schools/kindergartens and {cx.get('playground',0)} playgrounds "
        f"({family*100:.0f}th percentile nationally), {cx.get('sport',0)} sports facilities, "
        f"{(1-cx.get('apartment_ratio',0.5))*100:.0f}% detached/terraced housing, "
        f"{edu_pct:.0f}% of adults hold a bachelor's degree or higher, rent €{rr.get('mean_sqm','–')}/m² "
        f"({afflu*100:.0f}th percentile). Higher education and affluence both track lower offending and "
        f"better-maintained, better-lit, better-surveilled streets. Sources: {SRC_CENSUS}; {SRC_OSM}; {SRC_RENT}.")
    r["language_desc"] = (
        f"{est:.1f}% give Estonian as their mother tongue; an estimated {eng:.0f}% speak English "
        f"(Estonia: 2.3% Narva – 94.7% Viljandi; 14% Sillamäe – 54% Tartu). Whether you can handle a "
        f"landlord, a pharmacy or a school here without Russian. Source: {SRC_CENSUS}.")
    r["demographics_desc"] = r["language_desc"]


def verdict(mean, night, depriv, family, afflu, eng, cx, edu_pct):
    band = ("among the best in Estonia" if mean >= 4.2 else
            "well above the Estonian average" if mean >= 3.6 else
            "around the Estonian average" if mean >= 3.0 else
            "below the Estonian average" if mean >= 2.4 else
            "among the weakest in Estonia")
    night_txt = ("nights are quiet" if night < 0.35 else
                 "some night-time bar traffic" if night < 0.7 else
                 "a night-time drinking hotspot — expect noise and street drinkers")
    fam_txt = ("plenty of families with children around" if family > 0.6 else
               "a reasonable family presence" if family > 0.35 else
               "few families — this is not a school-run neighbourhood")
    dep_txt = ("well-off and well-kept" if depriv < 0.35 else
               "mixed" if depriv < 0.6 else
               "socially strained — cheap stock, low attainment, wall-to-wall blocks")
    lang_txt = ("English is enough day to day" if eng >= 45 else
                "English mostly works, some Estonian or Russian helps" if eng >= 30 else
                "Russian is the working language here — plan for it")
    return (f"{mean:.1f}/5.0 nationally — {band}. {night_txt.capitalize()}; {fam_txt}; "
            f"{dep_txt} ({edu_pct:.0f}% degree-holders). {lang_txt}.")


def face_for(v):
    if v >= 4.5: return "very_happy"
    if v >= 4.0: return "happy"
    if v >= 3.3: return "neutral"
    if v >= 2.5: return "concerned"
    return "unhappy"


def colors_for(v):
    if v >= 4.5: return "#2563eb", "#3b82f6"
    if v >= 4.0: return "#059669", "#10b981"
    if v >= 3.3: return "#ca8a04", "#eab308"
    if v >= 2.5: return "#ea580c", "#f97316"
    return "#dc2626", "#ef4444"


if __name__ == "__main__":
    build()
