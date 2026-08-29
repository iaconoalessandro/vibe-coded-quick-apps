"""
==============================================================================
RENT HISTORY — append, never overwrite
==============================================================================
The map used to carry one rent reading per district, replaced on every run.
That answers "what is rent here today" and destroys the answer to "which way
is it moving", which is the more useful question and costs nothing to keep.

Each run appends the current verified figures to data/rent_history.json as a
dated row per district. Nothing is ever rewritten, so a bad scrape shows up as
an outlier in the series rather than silently replacing good data.

Run after verify_rental_prices.py.
==============================================================================
"""
import json
import os
from datetime import date

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SCRIPT_DIR)
DATA = os.path.join(ROOT, "data")
HISTORY = os.path.join(DATA, "rent_history.json")

CITIES = ["tallinn", "tartu", "parnu", "narva", "kohtla_jarve"]


def load(path, default):
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def main():
    history = load(HISTORY, {"readings": [], "note": (
        "Appended weekly. One row per district per run. mean_sqm is the "
        "verified median €/m²; sample is the number of live listings behind "
        "it, 0 where the figure is a model estimate rather than an observation."
    )})

    today = date.today().isoformat()
    already = {(r["date"], r["city"], r["district"]) for r in history["readings"]}

    added = 0
    for city in CITIES:
        districts = load(os.path.join(DATA, f"{city}_exact_district_boundaries.json"), [])
        for d in districts:
            key = (today, city, d["id"])
            if key in already:
                continue
            history["readings"].append({
                "date": today,
                "city": city,
                "district": d["id"],
                "name": d["district"],
                "mean_sqm": d.get("mean_sqm"),
                "sample": d.get("verified_sample") or 0,
                "observed": bool(d.get("verified_observed", True)),
                "source": d.get("verified_source", ""),
            })
            added += 1

    history["readings"].sort(key=lambda r: (r["date"], r["city"], r["district"]))
    with open(HISTORY, "w", encoding="utf-8") as f:
        json.dump(history, f, ensure_ascii=False, indent=1)

    dates = sorted({r["date"] for r in history["readings"]})
    print(f"  appended {added} readings for {today}")
    print(f"  history now spans {len(dates)} date(s): {dates[0]} → {dates[-1]}")
    print(f"  {len(history['readings'])} rows total")

    if len(dates) > 1:
        _report_movers(history["readings"], dates)


def _report_movers(readings, dates):
    """Largest month-over-month movements, as a sanity check on the scrape."""
    latest, previous = dates[-1], dates[-2]
    by_key = {}
    for r in readings:
        if r["date"] in (latest, previous) and r["mean_sqm"] is not None:
            by_key.setdefault((r["city"], r["district"]), {})[r["date"]] = r

    moves = []
    for (city, _district), pair in by_key.items():
        if latest in pair and previous in pair:
            old, new = pair[previous]["mean_sqm"], pair[latest]["mean_sqm"]
            if old:
                moves.append((abs(new - old) / old, city, pair[latest]["name"], old, new))

    moves.sort(reverse=True)
    if moves:
        print(f"\n  largest moves {previous} → {latest}:")
        for pct, city, name, old, new in moves[:5]:
            arrow = "↑" if new > old else "↓"
            print(f"    {arrow} {pct * 100:5.1f}%  {city}/{name[:34]:34s} €{old} → €{new}")


if __name__ == "__main__":
    main()
