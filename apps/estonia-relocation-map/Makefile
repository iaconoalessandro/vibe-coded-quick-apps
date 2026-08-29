.PHONY: help build data groceries rents test lint serve clean

help:
	@echo "make build      — assemble dist/ (hosted + offline builds, exports)"
	@echo "make data       — run the full OSM pipeline, then build"
	@echo "make groceries  — refresh supermarket data only"
	@echo "make rents      — re-verify rents against live listings"
	@echo "make test       — run the data and build test suite"
	@echo "make lint       — ruff + node syntax check"
	@echo "make serve      — serve dist/ at http://localhost:8777"

build:
	python3 build.py

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
	ruff check scripts build.py tests || true
	node --check static/app.js
	node --check static/features.js

serve: build
	python3 -m http.server 8777 --directory dist

clean:
	rm -rf dist __pycache__ scripts/__pycache__ .pytest_cache
