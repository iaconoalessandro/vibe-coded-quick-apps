// ============================================================================
// ESTONIA RELOCATION MAP — application shell
// ============================================================================
// City data is fetched per city rather than inlined, so first paint costs the
// manifest plus one city instead of the whole country. `CITIES` fills in as
// payloads land; every layer builder is guarded on its city being present.
// ============================================================================

const CITIES = {};              // cityKey -> full payload, once fetched
let CITY_KEYS = [];             // manifest order
let CITY_META = {};             // cityKey -> {cityName, icon, center, zoom, ...}
let currentCityKey = null;
let map = null;
const BASEMAPS = {};
let MEME_FACES = {};            // fetched on first use of meme mode

const DATA_BASE = (document.currentScript && document.currentScript.dataset.dataBase) || 'data';

async function fetchJSON(path) {
    const res = await fetch(path, {cache: 'default'});
    if (!res.ok) throw new Error(`${path} → HTTP ${res.status}`);
    return res.json();
}

const _cityPromises = {};
function loadCity(cityKey) {
    if (CITIES[cityKey]) return Promise.resolve(CITIES[cityKey]);
    if (!_cityPromises[cityKey]) {
        _cityPromises[cityKey] = fetchJSON(`${DATA_BASE}/city/${cityKey}.json`)
            .then(payload => {
                CITIES[cityKey] = Object.assign({}, CITY_META[cityKey], payload);
                // Parks are ambient and heavy — never block the first frame on them.
                fetchJSON(`${DATA_BASE}/city/${cityKey}.parks.json`)
                    .then(parks => {
                        CITIES[cityKey].parks = parks;
                        buildParkLayers(cityKey);
                    })
                    .catch(err => console.warn('Parks unavailable for', cityKey, err));
                return CITIES[cityKey];
            })
            .catch(err => {
                delete _cityPromises[cityKey];
                showDataError(cityKey, err);
                throw err;
            });
    }
    return _cityPromises[cityKey];
}

function showDataError(cityKey, err) {
    console.error('City data failed to load:', cityKey, err);
    const el = document.getElementById('boot-status');
    if (!el) return;
    el.hidden = false;
    el.className = 'boot-status boot-status--error';
    el.textContent = `Could not load ${CITY_META[cityKey] ? CITY_META[cityKey].cityName : cityKey}. `
        + 'Check that the data folder sits next to this page, then reload.';
}

// --- MAP ---------------------------------------------------------------
// preferCanvas keeps 1 678 park polygons and 242 routes off the DOM; the
// SVG renderer is reserved for districts, which need per-feature hit areas.
function initMap(centre, zoom) {
    map = L.map('map', {
        center: centre,
        zoom: zoom,
        zoomControl: true,
        preferCanvas: true
    });

    BASEMAPS['basemap_dark'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, HERE, Garmin, © OpenStreetMap'
    }).addTo(map);

    BASEMAPS['basemap_light'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, HERE, Garmin, © OpenStreetMap'
    });

    BASEMAPS['basemap_osm'] = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    });

    BASEMAPS['basemap_street'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, HERE, Garmin'
    });

    BASEMAPS['basemap_sat'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, Maxar'
    });

    // Leaflet caches the container size at construction. A map that mounts
    // while its container has no box — a hidden tab, a collapsed pane, an
    // iframe that opens later — caches 0x0 and then never draws a tile.
    // Re-measure until the container actually reports a size, and keep
    // watching it afterwards.
    const container = document.getElementById('map');
    const remeasure = () => map.invalidateSize({animate: false});

    // Re-measure on every tick rather than waiting for a non-zero read: the
    // container may only gain a box after the pane, tab or accordion holding
    // it is opened, and Leaflet caches whatever it saw last.
    let attempts = 0;
    (function settle() {
        remeasure();
        if (map.getSize().x > 0 && map.getSize().y > 0) return;
        if (attempts++ > 40) return;          // ~20 s, then give up quietly
        setTimeout(settle, 500);
    })();

    window.addEventListener('resize', remeasure);
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) remeasure();
    });
    if (window.ResizeObserver) {
        new ResizeObserver(remeasure).observe(container);
    }
}

// Layer Storage & Permanent Elements
let LAYERS = {};
let PERMANENT_LAYERS = [];
let isMemeMode = false;

    // 5-TIER SMILEY FACE SVG GENERATOR (Matches Blue/Green/Yellow/Orange/Red Tiers)
    function getFaceSvg(faceType, size = 32) {
        if (faceType === 'very_happy') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#2563eb" stroke="#1d4ed8" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 26 58 Q 50 92 74 58 Z" fill="#ffffff"/>
                <path d="M 36 74 Q 50 64 64 74 Q 50 90 36 74 Z" fill="#f43f5e"/>
            </svg>`;
        } else if (faceType === 'happy') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#16a34a" stroke="#15803d" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 28 64 Q 50 82 72 64" fill="none" stroke="#ffffff" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        } else if (faceType === 'neutral') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#eab308" stroke="#ca8a04" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <line x1="28" y1="66" x2="72" y2="66" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        } else if (faceType === 'frown' || faceType === 'concerned') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#f97316" stroke="#ea580c" stroke-width="3.5"/>
                <ellipse cx="32" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="40" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="40" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="38" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="38" r="2.2" fill="#ffffff"/>
                <path d="M 28 72 Q 50 54 72 72" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
            </svg>`;
        } else {
            return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#ef4444" stroke="#dc2626" stroke-width="3.5"/>
                <path d="M 20 28 L 44 38" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
                <path d="M 80 28 L 56 38" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
                <ellipse cx="32" cy="44" rx="9" ry="11" fill="#ffffff"/>
                <ellipse cx="68" cy="44" rx="9" ry="11" fill="#ffffff"/>
                <circle cx="32" cy="44" r="5.5" fill="#0f172a"/>
                <circle cx="68" cy="44" r="5.5" fill="#0f172a"/>
                <circle cx="30" cy="42" r="2.2" fill="#ffffff"/>
                <circle cx="66" cy="42" r="2.2" fill="#ffffff"/>
                <path d="M 24 76 Q 50 48 76 76 Z" fill="#ffffff"/>
            </svg>`;
        }
    }

    function getFaceTypeForScore(val) {
        if (val >= 4.1) return 'very_happy';
        if (val >= 3.6) return 'happy';
        if (val >= 3.0) return 'neutral';
        if (val >= 2.1) return 'concerned';
        return 'unhappy';
    }

    function getFaceVisual(faceTypeOrScore, size = 32, borderColor = null) {
        let key = faceTypeOrScore;
        let scoreVal = null;
        if (typeof faceTypeOrScore === 'number') {
            scoreVal = faceTypeOrScore;
            key = getFaceTypeForScore(scoreVal);
        } else if (key === 'frown') {
            key = 'concerned';
        } else if (key === 'angry') {
            key = 'unhappy';
        }
        
        const effectiveBorder = borderColor || (scoreVal !== null ? getScoreColor(scoreVal) : 'rgba(255,255,255,0.8)');
        
        if (isMemeMode) {
            const memeImg = MEME_FACES[key] || (key === 'angry' || key === 'unhappy' ? MEME_FACES['unhappy'] : MEME_FACES['concerned']);
            if (memeImg) {
                return `<img src="${memeImg}" alt="${key}" style="width:${size}px; height:${size}px; border-radius:50%; object-fit:cover; display:inline-block; vertical-align:middle; border: 2px solid ${effectiveBorder}; box-shadow:0 3px 10px rgba(0,0,0,0.65);" />`;
            }
        }
        return getFaceSvg(typeof faceTypeOrScore === 'number' ? key : faceTypeOrScore, size);
    }

    function updateSafetyLegend() {
        const bar = document.getElementById('safety_legend_bar');
        if (!bar) return;
        if (isMemeMode) {
            bar.innerHTML = `
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Ascended (Blue / 4.1–5.0)">${getFaceVisual('very_happy', 16, '#2563eb')} 🔵 4.1–5.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Canny (Green / 3.6–4.0)">${getFaceVisual('happy', 16, '#16a34a')} 🟢 3.6–4.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Realistic Stare (Yellow / 3.0–3.5)">${getFaceVisual('neutral', 16, '#eab308')} 🟡 3.0–3.5</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="B&W Uncanny (Orange / 2.1–2.9)">${getFaceVisual('concerned', 16, '#f97316')} 🟠 2.1–2.9</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Dying B&W Skull (Red / 0–2.0)">${getFaceVisual('unhappy', 16, '#ef4444')} 🔴 0–2.0</span>
            `;
        } else {
            bar.innerHTML = `
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Very Safe (Blue / 4.1–5.0)">${getFaceSvg('very_happy', 16)} 🔵 4.1–5.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Safe (Green / 3.6–4.0)">${getFaceSvg('happy', 16)} 🟢 3.6–4.0</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Moderate (Yellow / 3.0–3.5)">${getFaceSvg('neutral', 16)} 🟡 3.0–3.5</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Concerned (Orange / 2.1–2.9)">${getFaceSvg('concerned', 16)} 🟠 2.1–2.9</span>
                <span style="display:inline-flex; align-items:center; gap:3px;" title="Low Safety (Red / 0–2.0)">${getFaceSvg('unhappy', 16)} 🔴 0–2.0</span>
            `;
        }
    }

    async function toggleMemeMode() {
        // Off by default and opt-in: the 37 KB sprite sheet is only fetched
        // if someone actually asks for it.
        if (!isMemeMode && !Object.keys(MEME_FACES).length) {
            try {
                MEME_FACES = await fetchJSON(`${DATA_BASE}/meme_faces_base64.json`);
            } catch (err) {
                console.warn('Meme faces unavailable', err);
                return;
            }
        }
        isMemeMode = !isMemeMode;
        const btn = document.getElementById('btn_meme_toggle');
        if (btn) btn.classList.toggle('active', isMemeMode);

        updateSafetyLegend();

        // Remember which layers are currently active across ALL cities
        const activeLayerKeys = Object.keys(LAYERS).filter(k => map.hasLayer(LAYERS[k]));

        // Re-render and rebuild all city layers with new face graphics
        Object.keys(LAYERS).forEach(k => {
            if (map.hasLayer(LAYERS[k])) map.removeLayer(LAYERS[k]);
            delete LAYERS[k];
        });
        CITY_KEYS.forEach(k => {
            if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
            if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
            BUILT[k] = false; AMBIENT_ON[k] = false;
        });
        TRANSIT_LINES.length = 0;

        CITY_KEYS.forEach(k => buildCityLayers(k));
        renderPanelFor(currentCityKey);

        // Re-apply active layers
        activeLayerKeys.forEach(k => {
            if (LAYERS[k]) map.addLayer(LAYERS[k]);
        });

        updateAmbientLayers();
        renderPanelFor(currentCityKey);
    }

    // ------------------------------------------------------------------------
    // HOW CERTAIN IS THE SCORE?
    // ------------------------------------------------------------------------
    // The score is 65% district land-use profile + 35% county crime statistics.
    // Published Estonian crime data stops at municipality level, so the
    // within-city split is modelled, not measured. Printing "4.3" implies a
    // precision the method does not have; a ±0.4 band is honest about it and
    // still separates Kadriorg from Lasnamäe, which is the useful signal.
    const SCORE_BAND = 0.4;

    function scoreBand(score) {
        const lo = Math.max(1, score - SCORE_BAND);
        const hi = Math.min(5, score + SCORE_BAND);
        return `${lo.toFixed(1)}–${hi.toFixed(1)}`;
    }

    function confidenceNoteHtml() {
        return `<div style="margin-bottom: 8px; padding: 6px 9px; background: #eff6ff;
                    border-radius: 5px; border-left: 3.5px solid #3b82f6;
                    font-size: 10.5px; color: #1e3a8a; line-height: 1.4;">
            📐 <b>Read this as a band, not a number.</b> Estonian crime statistics are
            published per municipality, not per district. The within-city split is a
            documented land-use and census model — 65% district profile, 35% county
            statistics — so treat each score as ±${SCORE_BAND.toFixed(1)}. It is reliable
            for ranking districts against each other, not for splitting hairs between
            two that are 0.2 apart.
        </div>`;
    }

    function getScoreColor(val) {
        if (val >= 4.1) return '#2563eb'; // Blue: 4.1 to 5.0
        if (val >= 3.6) return '#16a34a'; // Green: 3.6 to 4.0
        if (val >= 3.0) return '#eab308'; // Yellow: 3.0 to 3.5
        if (val >= 2.1) return '#f97316'; // Orange: 2.1 to 2.9
        return '#ef4444';                 // Red: 0 to 2.0
    }

    // ========================================================================
    // UNIFIED MAP ENGINE
    // ------------------------------------------------------------------------
    // All five cities live on ONE Leaflet instance. Layers are keyed
    // `layer_<city>_<id>` and are pre-built so a layer switched on in
    // one city stays on and is synchronized across all 5 cities.
    // `switchCity` moves the camera and repoints the control panel.
    // ========================================================================
    const BUILT = {};
    const PARKS_BUILT = {};              // cityKey -> true once its layers exist
    const PARKS_LAYERS = {};       // cityKey -> [L.polygon...]
    const LABELS_LAYERS = {};      // cityKey -> [L.marker...]
    const AMBIENT_ON = {};         // cityKey -> currently mounted in viewport?
    const TRANSIT_LINES = [];      // {line, baseOffset} for zoom-scaled offsets
    let showParks = true;
    let showDistrictLabels = true;
    let showTechClusters = false;
    let showTransitHubs = false;

    function lk(city, id) { return 'layer_' + city + '_' + id; }
    function ck(city, id) { return 'chk_' + city + '_' + id; }

    // Screen-pixel offsets are scaled with zoom: at city-overview zoom the
    // lines collapse onto the true street centreline, and they fan out into
    // separate lanes as you zoom in, where there is room to tell them apart.
    function offsetScale() {
        const z = map.getZoom();
        if (z <= 11) return 0;
        if (z >= 15) return 1;
        return (z - 11) / 4;
    }

    function applyOffsetScale() {
        const k = offsetScale();
        TRANSIT_LINES.forEach(t => {
            const want = t.base * k;
            if (t.line.options.offset !== want && t.line.setOffset) t.line.setOffset(want);
        });
    }

    // Parks arrive in their own payload; this is called once they land.
    function buildParkLayers(cityKey) {
        const city = CITIES[cityKey];
        if (!city || !city.parks || PARKS_BUILT[cityKey]) return;
        PARKS_BUILT[cityKey] = true;

        const parkLayers = [];
        city.parks.forEach(p => {
            if (!p.coords || p.coords.length < 3) return;
            const isWood = /forest|wood/i.test(p.kind || '');
            parkLayers.push(L.polygon(p.coords, {
                color: isWood ? '#166534' : '#15803d',
                weight: 1.2,
                fill: true,
                fillColor: isWood ? '#16a34a' : '#22c55e',
                fillOpacity: isWood ? 0.22 : 0.32
            }).bindTooltip(`🌲 <b>${p.name}</b><br><span style="font-size:11px; color:#166534;">${p.category || 'Green space'}${p.area_m2 ? ' · ' + (p.area_m2/10000).toFixed(1) + ' ha' : ''}</span><br><span style="font-size:9px; color:#64748b;">OpenStreetMap ${p.osm_id || ''}</span>`, {sticky: true}));
        });
        PARKS_LAYERS[cityKey] = parkLayers;
        AMBIENT_ON[cityKey] = false;
        updateAmbientLayers();
    }

    function buildCityLayers(cityKey) {
        if (BUILT[cityKey]) return;
        const city = CITIES[cityKey];
        if (!city || !city.safety) return;   // payload still in flight
        BUILT[cityKey] = true;

        // --- 1. GREEN PARKS -------------------------------------------------
        // Built separately: 1 678 polygons nationally is the single heaviest
        // slice of the payload, and it is ambient decoration, so it arrives
        // after the district and rent layers people came for.
        PARKS_LAYERS[cityKey] = PARKS_LAYERS[cityKey] || [];

        // --- 2. DISTRICT WATERMARK LABELS -----------------------------------
        const labelLayers = [];
        (city.districts || []).forEach(d => {
            let className = 'district-label-sub';
            if (d.type === 'major') className = 'district-label-major';
            if (d.type === 'tech_hub') className = 'district-label-tech';
            const labelIcon = L.divIcon({
                className: className, html: d.name,
                iconSize: [140, 20], iconAnchor: [70, 10]
            });
            labelLayers.push(L.marker([d.lat, d.lon], {icon: labelIcon, interactive: false}));
        });
        LABELS_LAYERS[cityKey] = labelLayers;
        AMBIENT_ON[cityKey] = false;

        // --- 3. DISTRICT SAFETY & QUALITY SCORECARDS ------------------------
        (city.safety || []).forEach(s => {
            const lg = L.layerGroup();
            const zoneColor = getScoreColor(s.mean_score);
            if (s.polygons && s.polygons.length > 0) {
                s.polygons.forEach(pCoords => {
                    L.polygon(pCoords, {
                        color: zoneColor, weight: 2, fill: true,
                        fillColor: zoneColor, fillOpacity: 0.18
                    }).bindTooltip(`<b>${s.district}</b><br>National quality score: <b>${s.mean_score.toFixed(1)} / 5.0</b>`, {sticky: true}).addTo(lg);
                });
            }
            const faceHtml = `<div class="safety-face-badge">
                ${getFaceVisual(s.mean_score, 44, zoneColor)}
                <div class="safety-score-pill">${s.mean_score.toFixed(1)}</div>
            </div>`;
            const faceIcon = L.divIcon({html: faceHtml, className: '', iconSize: [48, 58], iconAnchor: [24, 29]});

            // Human-friendly Pros & Cons analysis
            function getDistrictProsCons(item) {
                const sc = item.scores || {};
                const idx = item.district_indices || {};
                const mean = item.mean_score !== undefined ? item.mean_score : 3.5;
                const c = sc.calmness !== undefined ? sc.calmness : mean;
                const a = sc.assaults !== undefined ? sc.assaults : mean;
                const t = sc.thefts !== undefined ? sc.thefts : mean;
                const d = sc.drunkenness !== undefined ? sc.drunkenness : mean;
                const sv = sc.severe_crimes !== undefined ? sc.severe_crimes : 4.0;
                const l = sc.language !== undefined ? sc.language : (sc.demographics !== undefined ? sc.demographics : mean);
                const f = sc.family !== undefined ? sc.family : c;

                const nightlife = idx.nightlife_alcohol_pctile !== undefined ? idx.nightlife_alcohol_pctile : (d <= 2.5 ? 0.8 : 0.4);
                const tourist = idx.tourist_pctile !== undefined ? idx.tourist_pctile : (mean <= 2.0 ? 0.2 : 0.4);
                const student = idx.student_pctile !== undefined ? idx.student_pctile : 0.3;
                const house_share = idx.house_share_pctile !== undefined ? idx.house_share_pctile : (mean >= 4.0 ? 0.6 : 0.2);
                const green = idx.green_pctile !== undefined ? idx.green_pctile : (c >= 4.0 ? 0.8 : 0.4);
                const deprivation = idx.deprivation_index !== undefined ? idx.deprivation_index : (mean <= 2.5 ? 0.6 : 0.3);

                const pList = [];
                const cList = [];

                // --- PROS ---
                if (c >= 4.0 || (idx.green_pctile !== undefined && green >= 0.75)) {
                    pList.push('Quiet, leafy residential setting with abundant nature and fresh air.');
                } else if (c >= 3.6) {
                    pList.push('Pleasant residential environment with manageable day-to-day traffic.');
                }

                if (a >= 4.0 || sv >= 4.3) {
                    pList.push('Extremely safe streets day and night; very low risk of street violence.');
                } else if (a >= 3.6) {
                    pList.push('Generally safe and well-patrolled streets with active municipal oversight.');
                }

                if (house_share >= 0.5 || mean >= 4.0) {
                    pList.push('Low street-theft area with secure private parking and fenced properties.');
                } else if (t >= 3.8) {
                    pList.push('Low property crime and secure residential buildings.');
                }

                if (d >= 4.0 || (idx.nightlife_alcohol_pctile !== undefined && nightlife <= 0.1)) {
                    pList.push('Peaceful public spaces with virtually zero late-night alcohol disturbances.');
                }

                if (l >= 4.0) {
                    pList.push('High English & Estonian fluency; very welcoming and easy for international expats.');
                } else if (l >= 3.0) {
                    pList.push('Bilingual community with basic English spoken in local shops and services.');
                }

                if (f >= 4.0 || (f >= 3.5 && mean >= 3.8)) {
                    pList.push('Excellent family amenities with nearby kindergartens, schools, and playgrounds.');
                }

                if (tourist >= 0.85 || nightlife >= 0.85) {
                    pList.push('Vibrant urban lifestyle with cafes, restaurants, and cultural venues in walking distance.');
                }

                // --- CONS ---
                // Nightlife / Noise
                if (nightlife >= 0.85 || c <= 2.3) {
                    cList.push('Nighttime street noise and weekend crowds near bars, clubs, and event venues.');
                } else if (c <= 3.0) {
                    cList.push('Moderate street and transit noise during peak morning and evening traffic.');
                }

                // Specific Theft Risks (Bicycles / Campus vs Storage vs Pickpocketing)
                if (tourist >= 0.95) {
                    cList.push('Higher risk of pickpocketing and opportunistic theft in crowded tourist spots.');
                } else if (student >= 0.85 && house_share < 0.35) {
                    cList.push('Elevated risk of unattended bicycle and e-scooter theft around campus/transit hubs.');
                } else if (deprivation >= 0.55 && house_share <= 0.2) {
                    cList.push('Occasional basement storage locker (keldriboks) or courtyard car break-in reports.');
                } else if (t <= 2.6 && house_share < 0.4) {
                    cList.push('Standard city vigilance advised for outdoor bicycles and locked storage areas.');
                }

                // Drunkenness / Rowdiness
                if (d <= 2.6 || (nightlife >= 0.8 && d <= 3.2)) {
                    cList.push('Visible outdoor drinking and loitering around certain alcohol shops and squares.');
                } else if (d <= 3.2) {
                    cList.push('Occasional evening noise from groups lingering near public transit stops.');
                }

                // Assaults / Scuffles
                if (a <= 2.8) {
                    cList.push('Higher rate of late-night police calls for interpersonal disputes and scuffles.');
                }

                // Language barrier
                if (l <= 2.2) {
                    cList.push('Significant language barrier (predominantly Russian-speaking; very limited English/Estonian).');
                } else if (l <= 2.8) {
                    cList.push('Noticeable language barrier in local neighbourhood shops (mainly Russian-speaking).');
                }

                // Suburban distance / Car dependency
                if (house_share >= 0.55 && mean >= 3.8) {
                    cList.push('Further from downtown; requires longer bus ride or car for daily city errands.');
                    cList.push('Premium rental and purchase prices with limited small apartment availability.');
                }

                if (pList.length === 0) {
                    pList.push('Affordable housing options with convenient urban transit connections.');
                    pList.push('Well-connected to shopping centers and major workplace zones.');
                }
                if (cList.length === 0) {
                    cList.push('Higher rental or purchase prices due to strong popularity.');
                    cList.push('Standard urban vigilance recommended for personal belongings.');
                }

                return { pros: pList.slice(0, 4), cons: cList.slice(0, 4) };
            }

            function renderSimpleMetricBar(label, val) {
                if (val === undefined || val === null) return '';
                const pct = Math.min(100, Math.max(0, (val / 5.0) * 100));
                const col = getScoreColor(val);
                let textGrade = 'High';
                if (val <= 2.0) textGrade = 'Poor / High Risk';
                else if (val <= 2.9) textGrade = 'Low / Concern';
                else if (val <= 3.5) textGrade = 'Moderate';
                else if (val <= 4.0) textGrade = 'Good';
                else textGrade = 'Excellent';

                return `<div style="margin-bottom: 5px; padding: 4px 7px; background: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-bottom: 2px;">
                        <span style="font-weight: 600; color: #1e293b;">${label}</span>
                        <span style="font-weight: 700; color: ${col};">${val.toFixed(1)} <span style="font-size:9px; color:#64748b; font-weight:normal;">(${textGrade})</span></span>
                    </div>
                    <div style="background: #e2e8f0; border-radius: 3px; height: 5px; overflow: hidden;">
                        <div style="background: ${col}; width: ${pct}%; height: 100%;"></div>
                    </div>
                </div>`;
            }

            const analysis = getDistrictProsCons(s);
            const prosItemsHtml = analysis.pros.map(p => '<li style="margin-bottom: 3px;">' + p + '</li>').join('');
            const consItemsHtml = analysis.cons.map(c => '<li style="margin-bottom: 3px;">' + c + '</li>').join('');

            const popupHtml = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; width: 335px; line-height: 1.4; color: #1e293b;">
                <!-- Header -->
                <div style="background-color: ${zoneColor}; color: white; padding: 10px 14px; border-radius: 7px 7px 0 0; display:flex; align-items:center; justify-content:space-between;">
                    <div>
                        <div style="font-size: 15px; font-weight: 700; letter-spacing: -0.2px;">🛡️ ${s.district}</div>
                        <div style="font-size: 11.5px; opacity: 0.95; font-weight: 600; margin-top: 2px;">
                            Overall Safety Grade: <b>${scoreBand(s.mean_score)}</b> / 5.0
                        </div>
                    </div>
                    <div>${getFaceVisual(s.mean_score, 40, '#ffffff')}</div>
                </div>

                <div style="padding: 10px 12px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 7px 7px; max-height: 400px; overflow-y: auto;">
                    
                    <!-- How much to trust the number -->
                    ${confidenceNoteHtml()}

                    <!-- Verdict Summary -->
                    <div style="margin-bottom: 8px; padding: 6px 9px; background: #f8fafc; border-radius: 5px; border-left: 3.5px solid ${zoneColor}; font-size: 11.5px; color: #1e293b; line-height: 1.35;">
                        💡 <b>Verdict:</b> ${s.verdict}
                    </div>

                    <!-- PROS -->
                    <div style="margin-bottom: 7px; padding: 7px 9px; background: #f0fdf4; border-radius: 5px; border: 1px solid #bbf7d0;">
                        <div style="font-size: 11px; font-weight: 700; color: #166534; text-transform: uppercase; margin-bottom: 3px; display: flex; align-items: center; gap: 4px;">
                            <span>👍</span> <span>Key Strengths (PROS):</span>
                        </div>
                        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #15803d; line-height: 1.35;">
                            ${prosItemsHtml}
                        </ul>
                    </div>

                    <!-- CONS -->
                    <div style="margin-bottom: 9px; padding: 7px 9px; background: #fef2f2; border-radius: 5px; border: 1px solid #fecaca;">
                        <div style="font-size: 11px; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 3px; display: flex; align-items: center; gap: 4px;">
                            <span>⚠️</span> <span>Downsides & Risks (CONS):</span>
                        </div>
                        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #b91c1c; line-height: 1.35;">
                            ${consItemsHtml}
                        </ul>
                    </div>

                    <!-- Simple Breakdown Bars -->
                    <div style="margin-bottom: 8px;">
                        <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 0.5px;">
                            Rating Breakdown:
                        </div>
                        ${renderSimpleMetricBar('🧘 Calm Streets & Low Noise', s.scores.calmness)}
                        ${renderSimpleMetricBar('🥊 Street Safety & Low Violence', s.scores.assaults)}
                        ${renderSimpleMetricBar('🔒 Property & Theft Protection', s.scores.thefts)}
                        ${renderSimpleMetricBar('🍺 Public Sobriety & Order', s.scores.drunkenness)}
                        ${renderSimpleMetricBar('⚖️ Violence & Severe Crimes', s.scores.severe_crimes)}
                        ${renderSimpleMetricBar('🗣️ Language (Estonian / English)', s.scores.language !== undefined ? s.scores.language : s.scores.demographics)}
                        ${s.scores.family !== undefined ? renderSimpleMetricBar('👨‍👩‍👧 Family & Neighbourhood Stability', s.scores.family) : ''}
                    </div>

                    <!-- COLLAPSIBLE RAW DATA (+) -->
                    <details style="border: 1px solid #cbd5e1; border-radius: 5px; background: #f8fafc; font-size: 10px; overflow: hidden; margin-top: 6px;">
                        <summary style="padding: 6px 8px; font-weight: 700; color: #334155; cursor: pointer; background: #f1f5f9; user-select: none; display: flex; align-items: center; justify-content: space-between;">
                            <span>➕ View Detailed Statistical Formulae & Baselines</span>
                            <span style="font-size: 9px; color: #64748b; font-weight: normal;">(Click to expand)</span>
                        </summary>
                        <div style="padding: 7px 9px; color: #475569; line-height: 1.4; border-top: 1px solid #e2e8f0; font-size: 9.5px;">
                            ${s.calmness_desc ? `<div style="margin-bottom: 4px;"><b>Calmness Drivers:</b> ${s.calmness_desc}</div>` : ''}
                            ${s.assaults_desc ? `<div style="margin-bottom: 4px;"><b>Assault Drivers:</b> ${s.assaults_desc}</div>` : ''}
                            ${s.thefts_desc ? `<div style="margin-bottom: 4px;"><b>Theft Drivers:</b> ${s.thefts_desc}</div>` : ''}
                            ${s.drunkenness_desc ? `<div style="margin-bottom: 4px;"><b>Alcohol Drivers:</b> ${s.drunkenness_desc}</div>` : ''}
                            ${s.severe_crimes_desc ? `<div style="margin-bottom: 4px;"><b>Severe Crime Baseline:</b> ${s.severe_crimes_desc}</div>` : ''}
                            ${(s.language_desc || s.demographics_desc) ? `<div style="margin-bottom: 4px;"><b>Language & Demographics:</b> ${s.language_desc || s.demographics_desc}</div>` : ''}
                            ${s.family_desc ? `<div style="margin-bottom: 4px;"><b>Family Environment:</b> ${s.family_desc}</div>` : ''}
                            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 5px 0;">
                            <div style="font-size: 9px; color: #64748b;">
                                <b>Sources:</b> Justiits- ja Digiministeerium (Kuritegevus Eestis 2025), Statistikaamet rahvaloendus (RL21302 / RL21434 / RL21439), OpenStreetMap GIS.
                            </div>
                        </div>
                    </details>

                </div>
            </div>`;
            L.marker([s.lat, s.lon], {icon: faceIcon, zIndexOffset: 3500})
                .bindPopup(popupHtml, {maxWidth: 380})
                .bindTooltip(`<b>${s.district}</b> · ${CITIES[cityKey].cityName}<br>National quality score: <b>${s.mean_score.toFixed(1)} / 5.0</b> (click for the full scorecard & sources)`, {sticky: true})
                .addTo(lg);
            LAYERS[lk(cityKey, s.id)] = lg;
        });

        // --- 4. DISTRICT RENTAL PRICES & BOUNDARIES -------------------------
        (city.rentals || []).forEach(r => {
            const lg = L.layerGroup();
            if (r.polygons && r.polygons.length > 0) {
                r.polygons.forEach(polyCoords => {
                    L.polygon(polyCoords, {
                        color: r.color, weight: 2, fill: true,
                        fillColor: r.color, fillOpacity: 0.18
                    }).bindTooltip(`<b>${r.district}</b><br>Verified median rent: €${r.mean_sqm}/m²`, {sticky: true}).addTo(lg);
                });
            }
            const badgeHtml = `<div class="rent-price-pill pill-${r.tier_class}">
                <span style="font-size: 11px;">💶</span>
                <span class="rent-val">€${r.mean_sqm}</span>
                <span class="rent-unit">/ m²</span>
            </div>`;
            const badgeIcon = L.divIcon({html: badgeHtml, className: '', iconSize: [92, 28], iconAnchor: [46, 14]});

            const popupContent = `<div style="font-family: sans-serif; width: 300px; line-height: 1.4;">
                <div style="background-color: ${r.badge_color}; color: white; padding: 10px 14px; border-radius: 6px 6px 0 0;">
                    <div style="font-size: 16px; font-weight: 700;">💶 ${r.district}</div>
                    <div style="font-size: 11px; opacity: 0.9; text-transform: uppercase; font-weight: 600; margin-top: 2px;">
                        Tier: ${r.tier} • Mean Rent: €${r.mean_sqm} / m² / mo
                    </div>
                </div>
                <div style="padding: 12px 14px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
                    <div style="margin-bottom: 8px; padding: 6px 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid ${r.badge_color};">
                        <div style="font-size: 11px; font-weight: 700; color: #475569; text-transform: uppercase;">Estimated Monthly Rents (&lt;€3,000):</div>
                        <div style="font-size: 12px; color: #1e293b; margin-top: 3px;">
                            🛏️ <b>1-Bedroom (45 m²):</b> ${r.one_bed_est}<br>
                            🛋️ <b>2-Bedroom (65 m²):</b> ${r.two_bed_est}<br>
                            📊 <b>Typical Range:</b> ${r.range_sqm}
                        </div>
                    </div>
                    <div style="margin-bottom: 8px; font-size: 11.5px; color: #334155; line-height: 1.35;">
                        ${r.desc}
                    </div>
                    <div style="margin-bottom: 8px; font-size: 11px; color: #166534; background: #f0fdf4; padding: 5px 8px; border-radius: 4px;">
                        🚍 <b>Tech Commute:</b> ${r.tech_commute}
                    </div>
                    ${typeof groceryAccessHtml === 'function' ? groceryAccessHtml(cityKey, r.district) : ''}
                    <div style="margin-bottom: 10px; font-size: 9.5px; color: #475569; background: #f1f5f9; padding: 5px 8px; border-radius: 4px; line-height: 1.4;">
                        ${r.verified_observed === false ? '⚠️ ' : '✅ '}<b>Price check:</b> ${r.verified_source || 'not yet verified'}
                        ${r.observed_1room_median ? `<br><span style="color:#64748b;">Observed medians in this district: 1-room €${r.observed_1room_median}/mo${r.observed_2room_median ? `, 2-room €${r.observed_2room_median}/mo` : ''}.</span>` : ''}
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <a href="${r.kv_link}" target="_blank" 
                           style="flex: 1; text-align: center; background: #ea580c; color: white; text-decoration: none; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: 700;">
                            🔎 KV.ee Listings
                        </a>
                        <a href="${r.city24_link}" target="_blank" 
                           style="flex: 1; text-align: center; background: #0284c7; color: white; text-decoration: none; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: 700;">
                            🏢 City24 Listings
                        </a>
                    </div>
                </div>
            </div>`;
            L.marker([r.lat, r.lon], {icon: badgeIcon, zIndexOffset: 3000})
                .bindPopup(popupContent, {maxWidth: 340})
                .bindTooltip(`<b>${r.district}</b> · ${CITIES[cityKey].cityName}<br>€${r.mean_sqm}/m² — ${r.verified_observed === false ? 'estimated' : 'verified against ' + (r.verified_sample||0) + ' live listings'}`, {sticky: true})
                .addTo(lg);
            LAYERS[lk(cityKey, r.id)] = lg;
        });

        // --- 5. TECH HUBS BY SECTOR -----------------------------------------
        Object.keys(city.categories || {}).forEach(catName => {
            const catInfo = city.categories[catName];
            const lg = L.layerGroup();
            catInfo.companies.forEach(c => {
                const markerHtml = `<div style="
                    background-color: ${c.color}; color: white; width: 26px; height: 26px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; font-size: 13px;
                    border: 2px solid #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.4); cursor: pointer;
                ">${c.icon}</div>`;
                const customIcon = L.divIcon({html: markerHtml, className: '', iconSize: [26, 26], iconAnchor: [13, 13]});

                const popupHtml = `<div style="font-family: sans-serif; width: 280px; line-height: 1.4;">
                    <div style="background-color: ${c.color}; color: white; padding: 8px 12px; border-radius: 6px 6px 0 0;">
                        <span style="font-size: 15px; font-weight: 700;">${c.icon} ${c.name}</span>
                        <span style="display: block; font-size: 10px; opacity: 0.9; text-transform: uppercase; font-weight: 600; margin-top: 2px;">${c.category}</span>
                    </div>
                    <div style="padding: 10px 12px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
                        <div style="margin-bottom: 6px;">
                            <strong style="color: #4b5563; font-size: 11px; text-transform: uppercase;">📍 Tech Office Address:</strong>
                            <div style="color: #111827; font-size: 12px; font-weight: 600;">${c.address}</div>
                            <div style="color: #6b7280; font-size: 11px;">${c.district}</div>
                            ${c.address_note ? `<div style="margin-top: 5px; padding: 5px 7px; background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 3px; color: #78350f; font-size: 10.5px; line-height: 1.35;">${c.address_note}</div>` : ''}
                        </div>
                        <div style="margin-bottom: 6px; padding: 5px 8px; background: #f8fafc; border-radius: 4px; border-left: 3px solid ${c.color};">
                            <strong style="color: #475569; font-size: 11px; text-transform: uppercase;">💻 Engineering / Tech Focus:</strong>
                            <div style="color: #334155; font-size: 11px; margin-top: 2px;">${c.tech_focus}</div>
                        </div>
                        <div style="margin-top: 6px; padding: 5px 8px; background: #f0fdf4; border-radius: 4px; border-left: 3px solid #22c55e;">
                            <strong style="color: #166534; font-size: 11px; text-transform: uppercase;">🚍 Transit Accessibility:</strong>
                            <div style="color: #14532d; font-size: 11px; font-weight: 600; margin-top: 2px;">${c.transit}</div>
                        </div>
                        <div style="margin-top: 8px; display: flex; gap: 6px;">
                            <a href="https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lon}" target="_blank" 
                               style="flex: 1; text-align: center; background: #2563eb; color: white; text-decoration: none; padding: 5px 0; border-radius: 4px; font-size: 11px; font-weight: 600;">
                                🗺️ Google Maps
                            </a>
                            <a href="https://maps.apple.com/?q=${c.name}&ll=${c.lat},${c.lon}" target="_blank"
                               style="flex: 1; text-align: center; background: #374151; color: white; text-decoration: none; padding: 5px 0; border-radius: 4px; font-size: 11px; font-weight: 600;">
                                🍎 Apple Maps
                            </a>
                        </div>
                    </div>
                </div>`;
                
                L.marker([c.lat, c.lon], {icon: customIcon})
                    .bindPopup(popupHtml, {maxWidth: 320})
                    .bindTooltip(`<b>${c.name}</b> (${c.district})<br><span style="color:gray;">${c.address}</span>`, {sticky: true})
                    .addTo(lg);
            });
            LAYERS[lk(cityKey, catInfo.id)] = lg;
        });

        // --- 5b. GROCERY STORES ---------------------------------------------
        // Lives in features.js; guarded so app.js still runs without it.
        if (typeof buildGroceryLayers === 'function') buildGroceryLayers(cityKey);

        // --- 6. TECH CLUSTERS & TRANSIT HUBS --------------------------------
        const clusterGroup = L.layerGroup();
        (city.clusters || []).forEach(c => {
            (c.polygons || []).forEach(part => {
                L.polygon(part, {
                    color: c.color, weight: 2, fill: true,
                    fillColor: c.fillColor, fillOpacity: 0.18
                }).bindTooltip(`<b>${c.name}</b><br>${c.desc}`, {sticky: true}).addTo(clusterGroup);
            });
        });
        LAYERS[lk(cityKey, 'clusters')] = clusterGroup;

        const hubGroup = L.layerGroup();
        (city.hubs || []).forEach(hub => {
            const iconHtml = `<div style="
                background: #581c87; color: white; width: 32px; height: 32px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center; font-size: 16px;
                border: 2px solid #ffffff; box-shadow: 0 0 10px rgba(147, 51, 234, 0.7);
            ">${hub.icon}</div>`;
            const divIcon = L.divIcon({html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16]});

            const popupHtml = `<div style="font-family: sans-serif; min-width: 220px;">
                <div style="background: #581c87; color: white; padding: 8px 12px; font-weight: bold; font-size: 13px; border-radius: 6px 6px 0 0;">
                    ${hub.icon} ${hub.name}
                </div>
                <div style="padding: 10px; font-size: 12px; background: #fff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
                    <p style="margin: 0 0 6px 0; color: #334155;">${hub.description}</p>
                    <div style="color: #7c3aed; font-weight: bold; font-size: 11px;">⭐ Multi-Modal Transfer Nexus</div>
                </div>
            </div>`;
            L.marker([hub.lat, hub.lon], {icon: divIcon}).bindPopup(popupHtml, {maxWidth: 320}).bindTooltip(`<b>${hub.name}</b>`, {sticky: true}).addTo(hubGroup);
        });
        LAYERS[lk(cityKey, 'hubs')] = hubGroup;

        // --- 7. TRANSIT LINES -----------------------------------------------
        const scale = offsetScale();
        function buildTransit(dataDict, withStations) {
            Object.keys(dataDict || {}).forEach(key => {
                const t = dataDict[key];
                const lg = L.layerGroup();
                const base = t.offset || 0;
                const line = L.polyline(t.coords, {
                    color: t.color,
                    weight: t.weight || 3.4,
                    opacity: 0.96,
                    offset: base * scale,
                    lineCap: 'round',
                    lineJoin: 'round'
                }).bindTooltip(`<b style="color:${t.color};">${t.label}</b><br>${t.name || 'Transit line'}${t.length_km ? '<br>' + t.length_km + ' km' : ''}<br><span style="font-size:9px; color:#94a3b8;">${t.source || ''}</span>`, {sticky: true});
                line.addTo(lg);
                TRANSIT_LINES.push({line: line, base: base});

                if (withStations && t.stations && t.stations.length) {
                    t.stations.forEach(st => {
                        const isMajor = st.type === 'major_hub';
                        const size = isMajor ? 11 : 8;
                        const dotHtml = `<div style="
                            width: ${size}px; height: ${size}px; border-radius: 50%;
                            background: #ffffff; border: ${isMajor ? 2.5 : 2}px solid ${t.color};
                            box-shadow: 0 0 6px rgba(0,0,0,0.8), 0 0 3px ${t.color};
                            cursor: pointer;"></div>`;
                        const dotIcon = L.divIcon({html: dotHtml, className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]});
                        const stPopup = `<div style="font-family: sans-serif; min-width: 210px; line-height: 1.4;">
                            <div style="background-color: ${t.color}; color: white; padding: 6px 10px; font-weight: bold; font-size: 12px; border-radius: 4px 4px 0 0;">🚆 ${st.name}</div>
                            <div style="padding: 8px 10px; background: #fff; font-size: 11.5px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 4px 4px;">
                                <div style="color: #1e293b; font-weight: 600; margin-bottom: 3px;">${t.label.split(':')[0]}</div>
                                <div style="color: #475569; font-size: 11px;">${st.desc || 'Stop'}</div>
                            </div></div>`;
                        L.marker([st.lat, st.lon], {icon: dotIcon, zIndexOffset: 2000})
                            .bindPopup(stPopup, {maxWidth: 280})
                            .bindTooltip(`🚆 <b>${st.name}</b>`, {sticky: true})
                            .addTo(lg);
                    });
                }
                LAYERS[lk(cityKey, key)] = lg;
            });
        }
        buildTransit(city.trams, true);
        buildTransit(city.trolleys, false);
        buildTransit(city.busKey, false);
        buildTransit(city.busSuburb, false);
        buildTransit(city.busOutside, false);
        buildTransit(city.trains, true);
    }

    // ------------------------------------------------------------------------
    // CONTROL PANEL — repointed to whichever city is selected
    // ------------------------------------------------------------------------
    function renderPanelFor(cityKey) {
        const city = CITIES[cityKey];
        document.getElementById('panel-title-text').innerText = city.title;
        document.getElementById('label_companies_header').innerText = `🏢 Tech Hubs by Sector (${city.companiesCount})`;

        const tramGroup = document.getElementById('group_trams');
        const trolleyGroup = document.getElementById('group_trolleys');
        if (tramGroup) tramGroup.style.display = city.hasTrams ? 'block' : 'none';
        if (trolleyGroup) trolleyGroup.style.display = city.hasTrolleys ? 'block' : 'none';

        const totalBusCount = Object.keys(city.busKey || {}).length + Object.keys(city.busSuburb || {}).length + Object.keys(city.busOutside || {}).length;
        document.getElementById('label_bus_all_header').innerText = `🚌 Bus (${totalBusCount} Lines)`;
        document.getElementById('label_bus_key').innerText = `🔴 Key Center (10–20 min) (${Object.keys(city.busKey || {}).length})`;
        document.getElementById('label_bus_suburb').innerText = `🌲 Suburbs (${Object.keys(city.busSuburb || {}).length})`;
        document.getElementById('label_bus_outside').innerText = `🏡 Outside ${city.cityName} (Within 30km) (${Object.keys(city.busOutside || {}).length})`;
        updateSafetyLegend();

        const isOn = id => { const lg = LAYERS[id]; return lg && map.hasLayer(lg); };

        // Safety scorecards
        const safetyContainer = document.getElementById('safety_items_container');
        safetyContainer.innerHTML = '';
        (city.safety || []).forEach(s => {
            const id = lk(cityKey, s.id);
            safetyContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${ck(cityKey, s.id)}" ${isOn(id) ? 'checked' : ''} onchange="toggleLayer('${id}', this.checked); updateParentCheck('parent_safety', 'body_safety')">
                    <span class="checkmark"></span>
                    <span style="display:inline-flex; align-items:center; margin-right:4px;">${getFaceVisual(s.mean_score, 18)}</span>
                    <div class="rent-item-text">
                        <span class="rent-item-name">${s.short_name}</span>
                        <span class="rent-item-sub">National score: <b>${s.mean_score.toFixed(1)} / 5.0</b></span>
                    </div>
                </label></div>`);
        });

        // Rent badges
        const rentalContainer = document.getElementById('rental_items_container');
        rentalContainer.innerHTML = '';
        (city.rentals || []).forEach(r => {
            const id = lk(cityKey, r.id);
            rentalContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${ck(cityKey, r.id)}" ${isOn(id) ? 'checked' : ''} onchange="toggleLayer('${id}', this.checked); updateParentCheck('parent_rental', 'body_rental')">
                    <span class="checkmark"></span>
                    <span class="color-dot" style="background:${r.badge_color};"></span>
                    <div class="rent-item-text">
                        <span class="rent-item-name">${r.short_name}${r.verified_observed === false ? ' <span style="opacity:.6;font-size:9px;">(est.)</span>' : ''}</span>
                        <span class="rent-item-sub">€${r.mean_sqm}/m² • 1BR: ${r.one_bed_est}</span>
                    </div>
                </label></div>`);
        });

        // Company categories
        const compContainer = document.getElementById('companies_items_container');
        compContainer.innerHTML = '';
        Object.keys(city.categories || {}).forEach(catName => {
            const catInfo = city.categories[catName];
            const id = lk(cityKey, catInfo.id);
            compContainer.insertAdjacentHTML('beforeend', `<div class="nested-item">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${ck(cityKey, catInfo.id)}" ${isOn(id) ? 'checked' : ''} onchange="toggleCompanyCategoryGlobal('${catInfo.id}', this.checked)">
                    <span class="checkmark"></span>
                    <span class="item-label">${catName} <span class="item-count">(${catInfo.companies.length})</span></span>
                </label></div>`);
        });

        // Clusters, hubs, parks, and district labels
        const cl = document.getElementById('chk_clusters');
        const hb = document.getElementById('chk_hubs');
        const cp = document.getElementById('chk_parks');
        const cdl = document.getElementById('chk_district_labels');
        if (cl) {
            cl.checked = showTechClusters;
            cl.onchange = function() { toggleClustersGlobal(this.checked); };
        }
        if (hb) {
            hb.checked = showTransitHubs;
            hb.onchange = function() { toggleHubsGlobal(this.checked); };
        }
        if (cp) {
            cp.checked = showParks;
            cp.onchange = function() { toggleParks(this.checked); };
        }
        if (cdl) {
            cdl.checked = showDistrictLabels;
            cdl.onchange = function() { toggleDistrictLabels(this.checked); };
        }

        // Transit groups
        function renderTransitGroup(containerId, dataDict, parentId, callbackName) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            Object.keys(dataDict || {}).forEach(key => {
                const t = dataDict[key];
                const id = lk(cityKey, key);
                const cbCall = callbackName ? `${callbackName}();` : '';
                container.insertAdjacentHTML('beforeend', `<div class="nested-item">
                    <label class="custom-checkbox">
                        <input type="checkbox" id="${ck(cityKey, key)}" ${isOn(id) ? 'checked' : ''} onchange="toggleLayer('${id}', this.checked); updateParentCheck('${parentId}', '${containerId}'); ${cbCall}">
                        <span class="checkmark"></span>
                        <span class="color-dot" style="background:${t.color};"></span>
                        <span class="item-label">${t.label}${t.in_osm === false ? ' <span style="opacity:.55;font-size:9px;" title="No OSM route relation published — geometry from the map registry">·reg</span>' : ''}</span>
                    </label></div>`);
            });
        }
        renderTransitGroup('body_trams', city.trams, 'parent_trams', 'updateTransportParent');
        renderTransitGroup('body_trolleys', city.trolleys, 'parent_trolleys', 'updateTransportParent');
        renderTransitGroup('body_bus_key', city.busKey, 'parent_bus_key', 'updateBusHierarchy');
        renderTransitGroup('body_bus_suburb', city.busSuburb, 'parent_bus_suburb', 'updateBusHierarchy');
        renderTransitGroup('body_bus_outside', city.busOutside, 'parent_bus_outside', 'updateBusHierarchy');
        renderTransitGroup('body_rail', city.trains, 'parent_rail', 'updateTransportParent');

        updateParentCheck('parent_safety', 'body_safety');
        updateParentCheck('parent_rental', 'body_rental');
        updateParentCheck('parent_companies', 'body_companies');
        updateParentCheck('parent_districts', 'body_districts');
        updateBusHierarchy();
        updateTransportParent();
    }

    // ------------------------------------------------------------------------
    // VIEWPORT-DRIVEN AMBIENT LAYERS (parks + district labels)
    // ------------------------------------------------------------------------
    // Read from the manifest, not the payload: ambient bookkeeping runs for
    // every city, including the ones whose data has not arrived yet.
    function cityBounds(cityKey) {
        const meta = CITIES[cityKey] || CITY_META[cityKey];
        if (!meta || !meta.bounds) return null;
        return L.latLngBounds(meta.bounds[0], meta.bounds[1]);
    }

    function updateAmbientLayers() {
        const view = map.getBounds();
        const z = map.getZoom();
        CITY_KEYS.forEach(k => {
            // Parks and watermark labels are only legible from zoom 11 up, and
            // there is no point paying for them when the city is off-screen.
            const b = cityBounds(k);
            const want = !!b && z >= 11 && view.intersects(b);
            if (want && !AMBIENT_ON[k]) {
                buildCityLayers(k);
                if (showParks && PARKS_LAYERS[k]) {
                    PARKS_LAYERS[k].forEach(l => { if (!map.hasLayer(l)) map.addLayer(l); });
                }
                if (showDistrictLabels && LABELS_LAYERS[k]) {
                    LABELS_LAYERS[k].forEach(l => { if (!map.hasLayer(l)) map.addLayer(l); });
                }
                AMBIENT_ON[k] = true;
            } else if (!want && AMBIENT_ON[k]) {
                if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
                if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
                AMBIENT_ON[k] = false;
            } else if (want && AMBIENT_ON[k]) {
                if (PARKS_LAYERS[k]) {
                    PARKS_LAYERS[k].forEach(l => {
                        if (showParks && !map.hasLayer(l)) map.addLayer(l);
                        else if (!showParks && map.hasLayer(l)) map.removeLayer(l);
                    });
                }
                if (LABELS_LAYERS[k]) {
                    LABELS_LAYERS[k].forEach(l => {
                        if (showDistrictLabels && !map.hasLayer(l)) map.addLayer(l);
                        else if (!showDistrictLabels && map.hasLayer(l)) map.removeLayer(l);
                    });
                }
            }
        });
    }

    function toggleParks(show) {
        showParks = show;
        const chk = document.getElementById('chk_parks');
        if (chk && chk.checked !== show) chk.checked = show;
        const badge = document.getElementById('badge_parks_status');
        if (badge) {
            badge.textContent = show ? '🌳 Parks ON' : '🌳 Parks OFF';
            badge.style.opacity = show ? '1' : '0.55';
            badge.style.borderColor = show ? 'rgba(34, 197, 94, 0.35)' : 'rgba(148, 163, 184, 0.35)';
            badge.style.color = show ? '#4ade80' : '#94a3b8';
            badge.style.background = show ? 'rgba(34, 197, 94, 0.2)' : 'rgba(148, 163, 184, 0.15)';
        }
        CITY_KEYS.forEach(k => {
            if (PARKS_LAYERS[k]) {
                PARKS_LAYERS[k].forEach(l => {
                    if (show && AMBIENT_ON[k]) {
                        if (!map.hasLayer(l)) map.addLayer(l);
                    } else {
                        if (map.hasLayer(l)) map.removeLayer(l);
                    }
                });
            }
        });
        updateParentCheck('parent_districts', 'body_districts');
    }

    function toggleDistrictLabels(show) {
        showDistrictLabels = show;
        const chk = document.getElementById('chk_district_labels');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {
            if (LABELS_LAYERS[k]) {
                LABELS_LAYERS[k].forEach(l => {
                    if (show && AMBIENT_ON[k]) {
                        if (!map.hasLayer(l)) map.addLayer(l);
                    } else {
                        if (map.hasLayer(l)) map.removeLayer(l);
                    }
                });
            }
        });
        updateParentCheck('parent_districts', 'body_districts');
    }

    // Registered once the map exists (see bootstrap), not at parse time.
    function wireMapEvents() {
        map.on('moveend', function() { updateAmbientLayers(); syncUrl(); });
        map.on('zoomend', function() { updateAmbientLayers(); applyOffsetScale(); syncUrl(); });
    }

    // ------------------------------------------------------------------------
    // SWITCH CITY — camera + panel only; every layer stays where it is
    // ------------------------------------------------------------------------
    async function switchCity(cityKey) {
        if (!CITY_META[cityKey]) return;
        currentCityKey = cityKey;
        syncUrl();
        CITY_KEYS.forEach(k => {
            const btn = document.getElementById('btn_city_' + k);
            if (btn) btn.classList.toggle('active', k === cityKey);
        });
        const meta = CITY_META[cityKey];
        map.flyTo(meta.center, meta.zoom, {animate: true, duration: 1.3});

        if (!CITIES[cityKey]) {
            setBusy(true, `Loading ${meta.cityName}…`);
            try { await loadCity(cityKey); } catch (err) { setBusy(false); return; }
            setBusy(false);
        }
        buildCityLayers(cityKey);
        renderPanelFor(cityKey);
        updateAmbientLayers();
        applyOffsetScale();
    }

    // Kept for backwards compatibility with the meme-mode re-render.
    function renderCurrentCity() {
        Object.keys(LAYERS).forEach(k => {
            if (map.hasLayer(LAYERS[k])) map.removeLayer(LAYERS[k]);
            delete LAYERS[k];
        });
        CITY_KEYS.forEach(k => {
            if (PARKS_LAYERS[k]) PARKS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
            if (LABELS_LAYERS[k]) LABELS_LAYERS[k].forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
            BUILT[k] = false; AMBIENT_ON[k] = false;
        });
        TRANSIT_LINES.length = 0;
        CITY_KEYS.forEach(k => buildCityLayers(k));
        renderPanelFor(currentCityKey);
        updateAmbientLayers();
    }

    // ------------------------------------------------------------------------
    // INTERACTIVE CONTROL FUNCTIONS & GLOBAL MULTI-CITY PROPAGATION
    // ------------------------------------------------------------------------
    function toggleLayer(layerName, show) {
        const lg = LAYERS[layerName];
        if (!lg) return;
        if (show) {
            if (!map.hasLayer(lg)) map.addLayer(lg);
        } else {
            if (map.hasLayer(lg)) map.removeLayer(lg);
        }
    }

    function toggleSafetyGlobal(state) {
        CITY_KEYS.forEach(k => {
            (CITIES[k].safety || []).forEach(s => {
                toggleLayer(lk(k, s.id), state);
                const chk = document.getElementById(ck(k, s.id));
                if (chk) chk.checked = state;
            });
        });
        const parent = document.getElementById('parent_safety');
        if (parent) { parent.checked = state; parent.indeterminate = false; }
    }

    function toggleRentalGlobal(state) {
        CITY_KEYS.forEach(k => {
            (CITIES[k].rentals || []).forEach(r => {
                toggleLayer(lk(k, r.id), state);
                const chk = document.getElementById(ck(k, r.id));
                if (chk) chk.checked = state;
            });
        });
        const parent = document.getElementById('parent_rental');
        if (parent) { parent.checked = state; parent.indeterminate = false; }
    }

    function toggleCompaniesGlobal(state) {
        CITY_KEYS.forEach(k => {
            Object.keys(CITIES[k].categories || {}).forEach(catName => {
                const catInfo = CITIES[k].categories[catName];
                toggleLayer(lk(k, catInfo.id), state);
                const chk = document.getElementById(ck(k, catInfo.id));
                if (chk) chk.checked = state;
            });
        });
        const parent = document.getElementById('parent_companies');
        if (parent) { parent.checked = state; parent.indeterminate = false; }
    }

    function toggleCompanyCategoryGlobal(catId, state) {
        CITY_KEYS.forEach(k => {
            Object.keys(CITIES[k].categories || {}).forEach(catName => {
                const catInfo = CITIES[k].categories[catName];
                if (catInfo.id === catId) {
                    toggleLayer(lk(k, catInfo.id), state);
                    const chk = document.getElementById(ck(k, catInfo.id));
                    if (chk) chk.checked = state;
                }
            });
        });
        updateParentCheck('parent_companies', 'body_companies');
    }

    function toggleTransportGlobal(state) {
        CITY_KEYS.forEach(k => {
            const city = CITIES[k];
            ['busKey', 'busSuburb', 'busOutside', 'trolleys', 'trains', 'trams'].forEach(bucket => {
                Object.keys(city[bucket] || {}).forEach(rk => {
                    toggleLayer(lk(k, rk), state);
                    const chk = document.getElementById(ck(k, rk));
                    if (chk) chk.checked = state;
                });
            });
        });
        ['parent_bus_key', 'parent_bus_suburb', 'parent_bus_outside', 'parent_bus_all', 'parent_trolleys', 'parent_rail', 'parent_trams', 'parent_transport'].forEach(pid => {
            const p = document.getElementById(pid);
            if (p) { p.checked = state; p.indeterminate = false; }
        });
    }

    function toggleBusAllGlobal(state) {
        CITY_KEYS.forEach(k => {
            const city = CITIES[k];
            ['busKey', 'busSuburb', 'busOutside'].forEach(bucket => {
                Object.keys(city[bucket] || {}).forEach(rk => {
                    toggleLayer(lk(k, rk), state);
                    const chk = document.getElementById(ck(k, rk));
                    if (chk) chk.checked = state;
                });
            });
        });
        ['parent_bus_key', 'parent_bus_suburb', 'parent_bus_outside', 'parent_bus_all'].forEach(pid => {
            const p = document.getElementById(pid);
            if (p) { p.checked = state; p.indeterminate = false; }
        });
        updateTransportParent();
    }

    function toggleTransitBucketGlobal(bucketName, state) {
        const parentMap = {
            'busKey': 'parent_bus_key',
            'busSuburb': 'parent_bus_suburb',
            'busOutside': 'parent_bus_outside',
            'trolleys': 'parent_trolleys',
            'trains': 'parent_rail',
            'trams': 'parent_trams'
        };
        CITY_KEYS.forEach(k => {
            const city = CITIES[k];
            Object.keys(city[bucketName] || {}).forEach(rk => {
                toggleLayer(lk(k, rk), state);
                const chk = document.getElementById(ck(k, rk));
                if (chk) chk.checked = state;
            });
        });
        const parentEl = document.getElementById(parentMap[bucketName]);
        if (parentEl) { parentEl.checked = state; parentEl.indeterminate = false; }
        if (bucketName.startsWith('bus')) {
            updateBusHierarchy();
        } else {
            updateTransportParent();
        }
    }

    function toggleClustersGlobal(show) {
        showTechClusters = show;
        const chk = document.getElementById('chk_clusters');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {
            toggleLayer(lk(k, 'clusters'), show);
        });
        updateParentCheck('parent_districts', 'body_districts');
    }

    function toggleHubsGlobal(show) {
        showTransitHubs = show;
        const chk = document.getElementById('chk_hubs');
        if (chk && chk.checked !== show) chk.checked = show;
        CITY_KEYS.forEach(k => {
            toggleLayer(lk(k, 'hubs'), show);
        });
        updateParentCheck('parent_districts', 'body_districts');
    }

    function toggleDistrictsGlobal(state) {
        toggleParks(state);
        toggleDistrictLabels(state);
        toggleClustersGlobal(state);
        toggleHubsGlobal(state);
        const parent = document.getElementById('parent_districts');
        if (parent) { parent.checked = state; parent.indeterminate = false; }
    }

    function toggleAllInGroup(containerId, state) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(chk => {
            if (chk.checked !== state) {
                chk.checked = state;
                chk.dispatchEvent(new Event('change'));
            }
        });
    }

    function updateParentCheck(parentId, containerId) {
        const parent = document.getElementById(parentId);
        const container = document.getElementById(containerId);
        if (!parent || !container) return;
        const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
        if (checkboxes.length === 0) return;
        const allChecked = checkboxes.every(c => c.checked);
        const anyChecked = checkboxes.some(c => c.checked);
        parent.checked = allChecked;
        parent.indeterminate = anyChecked && !allChecked;
    }

    function updateBusHierarchy() {
        updateParentCheck('parent_bus_key', 'body_bus_key');
        updateParentCheck('parent_bus_suburb', 'body_bus_suburb');
        updateParentCheck('parent_bus_outside', 'body_bus_outside');
        
        const parentBusAll = document.getElementById('parent_bus_all');
        const busContainers = ['body_bus_key', 'body_bus_suburb', 'body_bus_outside'];
        const allBusChecks = [];
        busContainers.forEach(cid => {
            const c = document.getElementById(cid);
            if (c) allBusChecks.push(...Array.from(c.querySelectorAll('input[type="checkbox"]')));
        });
        if (parentBusAll && allBusChecks.length > 0) {
            const allChecked = allBusChecks.every(chk => chk.checked);
            const anyChecked = allBusChecks.some(chk => chk.checked);
            parentBusAll.checked = allChecked;
            parentBusAll.indeterminate = anyChecked && !allChecked;
        }
        updateTransportParent();
    }

    function updateTransportParent() {
        const parentTransport = document.getElementById('parent_transport');
        const containers = ['body_bus_key', 'body_bus_suburb', 'body_bus_outside', 'body_trolleys', 'body_rail', 'body_trams'];
        const allChecks = [];
        containers.forEach(cid => {
            const c = document.getElementById(cid);
            if (c) allChecks.push(...Array.from(c.querySelectorAll('input[type="checkbox"]')));
        });
        if (parentTransport && allChecks.length > 0) {
            const allChecked = allChecks.every(chk => chk.checked);
            const anyChecked = allChecks.some(chk => chk.checked);
            parentTransport.checked = allChecked;
            parentTransport.indeterminate = anyChecked && !allChecked;
        }
    }

    function switchBasemap(selectedKey) {
        Object.keys(BASEMAPS).forEach(k => {
            if (map.hasLayer(BASEMAPS[k])) map.removeLayer(BASEMAPS[k]);
        });
        if (BASEMAPS[selectedKey]) {
            map.addLayer(BASEMAPS[selectedKey]);
            BASEMAPS[selectedKey].bringToBack();
        }
    }

    function setAllTransit(state) {
        toggleTransportGlobal(state);
    }

    function toggleAccordion(contentId, headerEl) {
        // headerEl is now the <button> itself rather than a wrapper div.
        const content = document.getElementById(contentId);
        const arrow = headerEl.querySelector('.accordion-arrow');
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            if (arrow) arrow.innerText = '▶';
        } else {
            content.classList.add('open');
            if (arrow) arrow.innerText = '▼';
        }
    }

    function toggleMainPanel() {
        const body = document.getElementById('panel-body');
        const footer = document.querySelector('.panel-footer');
        const icon = document.getElementById('panel-toggle-icon');
        if (body.style.display === 'none') {
            body.style.display = 'block';
            footer.style.display = 'flex';
            icon.innerText = '▼';
        } else {
            body.style.display = 'none';
            footer.style.display = 'none';
            icon.innerText = '▲';
        }
    }

    // ------------------------------------------------------------------------
    // BOOTSTRAP
    // ------------------------------------------------------------------------
    // The city named in the URL is loaded and painted first; the other four
    // stream in behind it so panning between cities stays instant, without
    // making anyone wait for all five before the first frame.
    // ------------------------------------------------------------------------
    function setBusy(on, label) {
        const el = document.getElementById('boot-status');
        if (!el) return;
        el.hidden = !on;
        el.className = 'boot-status';
        if (label) el.textContent = label;
    }

    async function bootstrap() {
        let manifest;
        try {
            manifest = await fetchJSON(`${DATA_BASE}/manifest.json`);
        } catch (err) {
            setBusy(true, 'Could not load map data. Serve this folder over HTTP, or open the offline build.');
            document.getElementById('boot-status').className = 'boot-status boot-status--error';
            console.error(err);
            return;
        }

        CITY_KEYS = manifest.order;
        CITY_META = manifest.cities;

        const wanted = readUrlState();
        currentCityKey = CITY_KEYS.includes(wanted.city) ? wanted.city : manifest.defaultCity;

        buildCityRail();
        initMap(wanted.center || CITY_META[currentCityKey].center,
                wanted.zoom || CITY_META[currentCityKey].zoom);
        wireMapEvents();

        setBusy(true, `Loading ${CITY_META[currentCityKey].cityName}…`);
        await loadCity(currentCityKey);
        buildCityLayers(currentCityKey);
        renderPanelFor(currentCityKey);
        updateAmbientLayers();
        applyOffsetScale();
        setBusy(false);
        document.body.classList.add('is-ready');

        applyUrlLayers(wanted);
        buildSearchIndex();

        // Remaining cities, one at a time so the main thread keeps breathing.
        for (const k of CITY_KEYS) {
            if (k === currentCityKey) continue;
            try {
                await loadCity(k);
                buildCityLayers(k);
                updateAmbientLayers();
                applyOffsetScale();
                buildSearchIndex();
            } catch (err) { /* showDataError already reported it */ }
        }
        renderPanelFor(currentCityKey);
    }

    bootstrap();
