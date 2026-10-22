# Vibe Coded Quick Apps

A monorepo collection of standalone, vibe-coded web applications and interactive tools, maintained together for easy exploration, updates, and cross-project enhancements.

---

## 🚀 Included Applications

### 1. [Admetia](apps/admetia/)
* **Description:** Offline, privacy-first admissions calculators for MBA, business master's, and IT & computing master's programmes.
* **Features:**
  - Multi-programme GPA / test score / work experience evaluation.
  - Multi-language support (English, French, Spanish).
  - Works 100% client-side with zero tracking or telemetry.
* **How to run:**
  ```bash
  cd apps/admetia
  python3 -m http.server 8000
  # Open http://localhost:8000 in your browser
  ```

---

### 2. [Python Path Site](apps/python-path-site/)
* **Description:** A curated Python learning companion featuring daily exercises, weekly lessons, data science (DSS) project roadmaps, and quick cheat sheets.
* **Features:**
  - Built-in exercise runner and folded solution hints.
  - Encyclopedia with 124+ short reference entries across 14 topics.
  - Dual design system: *Orario* and *Olivetti* vintage aesthetics with Auto/Light/Dark modes.
* **How to run & build:**
  ```bash
  cd apps/python-path-site
  # Optional: Rebuild static pages
  python3 build.py
  # Serve locally
  python3 -m http.server 8001
  # Open http://localhost:8001 in your browser
  ```

---

### 3. [Estonia Relocation Map](apps/estonia-relocation-map/)
* **Description:** An interactive geospatial relocation map of Estonia designed for tech professionals and expats.
* **Features:**
  - Covers Tallinn, Tartu, Pärnu, Narva, and Kohtla-Järve.
  - Verified tech employers & tech clusters.
  - Real-time/historical district rents and safety metrics.
  - Full public transit routes and walking distances to big discount supermarkets.
* **How to run:**
  ```bash
  cd apps/estonia-relocation-map
  python3 -m http.server 8002
  # Open http://localhost:8002 in your browser
  ```

---

## 📂 Repository Structure

```text
vibe-coded-quick-apps/
├── apps/
│   ├── admetia/                # Admissions calculators (MBA / Master's)
│   ├── estonia-relocation-map/ # Geospatial relocation map for Estonia
│   └── python-path-site/       # Python study path, encyclopedia & cheat sheets
├── .gitignore
└── README.md
```

## 📜 History Preservation

Each application within `apps/` maintains its original Git commit history from its standalone repository, imported seamlessly into this monorepo.
