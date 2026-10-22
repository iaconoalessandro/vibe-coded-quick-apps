.PHONY: help build data groceries rents test lint open clean

help:
	@echo "make build      — rebuild index.html (the whole deliverable)"
	@echo "make open       — rebuild and open it in your browser"
	@echo "make data       — re-run the full OSM pipeline, then build"
	@echo "make groceries  — refresh supermarket data only"
	@echo "make rents      — re-verify rents against live listings"
	@echo "make test       — run the data and build test suite"
	@echo "make lint       — ruff + node syntax check"
	@echo ""
	@echo "index.html needs no server and no install. Double-click it,"
	@echo "or upload it to any static host. Python is only for rebuilding."

build:
	python3 build.py

open: build
	open index.html || xdg-open index.html

data:
	python3 scripts/osm_extract_raw.py
	python3 scripts/build_official_districts.py
	python3 scripts/build_green_areas.py
	python3 scripts/build_osm_transit.py
	python3 scripts/merge_transit_networks.py
	python3 scripts/extract_district_context.py
	python3 scripts/build_safety_scores.py
	python3 scripts/build_grocery_stores.py
	python3 scripts/verify_rental_prices.py
	python3 build.py

groceries:
	python3 scripts/build_grocery_stores.py --refresh
	python3 build.py

rents:
	python3 scripts/verify_rental_prices.py
	python3 build.py

test:
	python3 -m pytest

lint:
	ruff check scripts build.py tests
	node --check static/app.js
	node --check static/features.js

clean:
	rm -rf dist __pycache__ scripts/__pycache__ .pytest_cache
