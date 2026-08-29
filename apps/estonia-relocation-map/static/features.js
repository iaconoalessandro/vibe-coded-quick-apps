// ============================================================================
// ESTONIA RELOCATION MAP — decision layer
// ============================================================================
// Everything here answers a question the base map could not:
//
//   groceries   how far is my weekly shop, and is it a cheap one?
//   search      where is Bolt / Kalamaja / the nearest Lidl?
//   filters     show me only districts I could actually afford and live in
//   url state   let me send this exact view to someone
//   i18n        Estonian and Russian, not just English
//
// Loaded after app.js, so it shares its globals (map, CITIES, LAYERS, lk, ...).
// ============================================================================

/* global map, CITIES, CITY_KEYS, CITY_META, LAYERS, PERMANENT_LAYERS,
          currentCityKey, lk, ck, toggleLayer, fetchJSON, DATA_BASE */

// ----------------------------------------------------------------------------
// GROCERY LAYER
// ----------------------------------------------------------------------------
// Three buckets, because "can I do a full weekly shop within walking distance"
// and "is there a corner shop for milk" are different questions.
const GROCERY_TIERS = [
    {
        key: 'discount_big',
        label: 'Big & cheap',
        blurb: 'Lidl · Prisma · Maxima XX — a full weekly shop at the lowest basket price.',
        radius: 11,
        minZoom: 11
    },
    {
        key: 'large',
        label: 'Large supermarket',
        blurb: 'Rimi · Selver — full range, mid price.',
        radius: 9,
        minZoom: 12
    },
    {
        key: 'standard',
        label: 'Neighbourhood store',
        blurb: 'Grossi · Konsum · independents — top-up shopping, some very cheap.',
        radius: 7,
        minZoom: 13
    }
];

const GROCERY_LAYERS = {};       // cityKey -> {tierKey: L.layerGroup}
let walkRadiusCircle = null;     // the "10 minutes on foot" ring

function euroPriceDots(band) {
    // 1 = cheapest. Render as filled/empty euro marks rather than a raw number.
    const filled = Math.max(1, Math.min(3, band || 3));
    return '€'.repeat(filled) + '<span style="opacity:.3">' + '€'.repeat(3 - filled) + '</span>';
}

function formatHours(raw) {
    if (!raw) return 'Opening hours not recorded in OSM';
    // OSM syntax is terse but readable enough once the separators are spaced out.
    return raw.replace(/;\s*/g, ' · ').replace(/,\s*/g, ', ');
}

function groceryPopupHtml(s, cityKey) {
    const addr = [s.street, s.housenumber].filter(Boolean).join(' ');
    return `<div class="gro-pop">
        <div class="gro-pop__head" style="background:${s.colour}">
            <div class="gro-pop__name">🛒 ${escapeHtml(s.name)}</div>
            <div class="gro-pop__sub">${escapeHtml(s.tierLabel)} · ${euroPriceDots(s.priceBand)}</div>
        </div>
        <div class="gro-pop__body">
            ${addr ? `<div class="gro-pop__row"><b>Address</b><div>${escapeHtml(addr)}</div></div>` : ''}
            <div class="gro-pop__row"><b>Opening hours</b><div>${escapeHtml(formatHours(s.hours))}</div></div>
            <div class="gro-pop__note">${escapeHtml(s.note)}</div>
            <button type="button" class="gro-pop__walk" data-lat="${s.lat}" data-lon="${s.lon}">
                Show 10-minute walk from here
            </button>
            <div class="gro-pop__links">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}"
                   target="_blank" rel="noopener" class="gro-pop__link gro-pop__link--g">Directions</a>
                <a href="https://maps.apple.com/?daddr=${s.lat},${s.lon}"
                   target="_blank" rel="noopener" class="gro-pop__link gro-pop__link--a">Apple Maps</a>
            </div>
        </div>
    </div>`;
}

function escapeHtml(v) {
    return String(v == null ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function buildGroceryLayers(cityKey) {
    const city = CITIES[cityKey];
    if (!city || !city.groceries || GROCERY_LAYERS[cityKey]) return;

    const groups = {};
    GROCERY_TIERS.forEach(t => { groups[t.key] = L.layerGroup(); });

    (city.groceries.stores || []).forEach(s => {
        const tier = GROCERY_TIERS.find(t => t.key === s.tier) || GROCERY_TIERS[2];
        // Canvas circle markers: 327 stores nationally, and they must stay cheap
        // to draw alongside everything else already on the map.
        const marker = L.circleMarker([s.lat, s.lon], {
            radius: tier.radius,
            color: '#ffffff',
            weight: 2,
            fillColor: s.colour,
            fillOpacity: 0.95,
            className: 'grocery-dot'
        });
        marker.bindPopup(groceryPopupHtml(s, cityKey), {maxWidth: 300, className: 'grocery-popup'});
        marker.bindTooltip(
            `<b>${escapeHtml(s.name)}</b><br><span style="opacity:.75">${escapeHtml(s.tierLabel)} · ${euroPriceDots(s.priceBand)}</span>`,
            {sticky: true}
        );
        marker.addTo(groups[s.tier] || groups.standard);
    });

    GROCERY_LAYERS[cityKey] = groups;
    GROCERY_TIERS.forEach(t => {
        LAYERS[lk(cityKey, 'grocery_' + t.key)] = groups[t.key];
    });
}

// The walk ring is a straight-line radius corrected by the same 1.3 detour
// factor the district distances use, so the circle does not over-promise.
function showWalkRadius(lat, lon, minutes) {
    if (walkRadiusCircle) { map.removeLayer(walkRadiusCircle); walkRadiusCircle = null; }
    const metres = (minutes * 80) / 1.3;
    walkRadiusCircle = L.circle([lat, lon], {
        radius: metres,
        color: '#0ea5e9', weight: 2, dashArray: '5 5',
        fillColor: '#0ea5e9', fillOpacity: 0.08,
        interactive: false
    }).addTo(map);
    walkRadiusCircle.bindTooltip(
        `Roughly ${minutes} minutes on foot (${Math.round(metres)} m as the crow flies)`,
        {permanent: false, sticky: true}
    );
}

function clearWalkRadius() {
    if (walkRadiusCircle) { map.removeLayer(walkRadiusCircle); walkRadiusCircle = null; }
}

// Popup buttons are created after the fact, so delegate.
document.addEventListener('click', function (ev) {
    const btn = ev.target.closest('.gro-pop__walk');
    if (!btn) return;
    showWalkRadius(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lon), 10);
});

function toggleGroceryTier(cityKey, tierKey, on) {
    const key = lk(cityKey, 'grocery_' + tierKey);
    toggleLayer(key, on);
}

function toggleGroceryTierGlobal(tierKey, on) {
    CITY_KEYS.forEach(k => toggleGroceryTier(k, tierKey, on));
    const parent = document.getElementById('parent_grocery');
    if (parent) {
        const boxes = GROCERY_TIERS.map(t => document.getElementById('chk_grocery_' + t.key))
            .filter(Boolean);
        const checked = boxes.filter(b => b.checked).length;
        parent.checked = checked === boxes.length;
        parent.indeterminate = checked > 0 && checked < boxes.length;
    }
    if (!on) clearWalkRadius();
}

function toggleGroceryGlobal(on) {
    GROCERY_TIERS.forEach(t => {
        const box = document.getElementById('chk_grocery_' + t.key);
        if (box) box.checked = on;
        CITY_KEYS.forEach(k => toggleGroceryTier(k, t.key, on));
    });
    const parent = document.getElementById('parent_grocery');
    if (parent) parent.indeterminate = false;
    if (!on) clearWalkRadius();
}

// ----------------------------------------------------------------------------
// GROCERY ACCESS SUMMARY — folded into the district rent popup
// ----------------------------------------------------------------------------
function groceryAccessHtml(cityKey, districtName) {
    const city = CITIES[cityKey];
    const access = city && city.groceries && city.groceries.districtAccess;
    const entry = access && access[districtName];
    if (!entry) return '';

    const big = entry.nearestBig;
    const any = entry.nearestAny;
    const rows = [];
    if (big) {
        rows.push(`🛒 <b>Nearest big &amp; cheap:</b> ${escapeHtml(big.chain)} — ${big.metres} m, about ${big.walkMinutes} min on foot`);
    }
    if (any && (!big || any.metres < big.metres - 50)) {
        rows.push(`🥛 <b>Nearest any grocery:</b> ${escapeHtml(any.chain)} — ${any.metres} m, about ${any.walkMinutes} min`);
    }
    if (!rows.length) return '';

    const walkClass = big && big.walkMinutes <= 10 ? 'good' : (big && big.walkMinutes <= 20 ? 'ok' : 'far');
    return `<div class="pop-grocery pop-grocery--${walkClass}">${rows.join('<br>')}
        <div class="pop-grocery__note">Walking estimate from the district centre, straight-line distance × 1.3.</div>
    </div>`;
}

// ----------------------------------------------------------------------------
// SEARCH
// ----------------------------------------------------------------------------
let SEARCH_INDEX = [];

function buildSearchIndex() {
    SEARCH_INDEX = [];
    CITY_KEYS.forEach(cityKey => {
        const city = CITIES[cityKey];
        if (!city) return;
        const cityName = city.cityName || cityKey;

        Object.keys(city.categories || {}).forEach(catName => {
            (city.categories[catName].companies || []).forEach(c => {
                SEARCH_INDEX.push({
                    kind: 'company', icon: c.icon || '🏢', label: c.name,
                    sub: `${c.category} · ${c.district}, ${cityName}`,
                    lat: c.lat, lon: c.lon, zoom: 16, city: cityKey
                });
            });
        });

        (city.rentals || []).forEach(r => {
            SEARCH_INDEX.push({
                kind: 'district', icon: '🏘️', label: r.district,
                sub: `${cityName} · €${r.mean_sqm}/m² · ${r.tier}`,
                lat: r.lat, lon: r.lon, zoom: 14, city: cityKey
            });
        });

        const stores = (city.groceries && city.groceries.stores) || [];
        stores.forEach(s => {
            const where = [s.street, s.housenumber].filter(Boolean).join(' ');
            SEARCH_INDEX.push({
                kind: 'grocery', icon: '🛒', label: s.name,
                // Six branches called "Lidl" are indistinguishable without the street.
                sub: `${s.tierLabel} · ${where ? where + ', ' : ''}${cityName}`,
                lat: s.lat, lon: s.lon, zoom: 17, city: cityKey
            });
        });
    });
}

function normalise(v) {
    // Estonian and Russian users type without diacritics as often as with.
    return String(v).toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function runSearch(query) {
    const q = normalise(query.trim());
    if (q.length < 2) return [];
    const starts = [], contains = [];
    for (const item of SEARCH_INDEX) {
        const hay = normalise(item.label);
        if (hay.startsWith(q)) starts.push(item);
        else if (hay.includes(q) || normalise(item.sub).includes(q)) contains.push(item);
        if (starts.length >= 8) break;
    }
    return starts.concat(contains).slice(0, 8);
}

function renderSearchResults(results) {
    const box = document.getElementById('search-results');
    if (!box) return;
    if (!results.length) {
        box.innerHTML = '';
        box.hidden = true;
        return;
    }
    box.hidden = false;
    box.innerHTML = results.map((r, i) => `
        <li role="option" id="search-opt-${i}" aria-selected="false" tabindex="-1"
            data-lat="${r.lat}" data-lon="${r.lon}" data-zoom="${r.zoom}" data-city="${r.city}">
            <span class="search-res__icon" aria-hidden="true">${r.icon}</span>
            <span class="search-res__text">
                <span class="search-res__label">${escapeHtml(r.label)}</span>
                <span class="search-res__sub">${escapeHtml(r.sub)}</span>
            </span>
        </li>`).join('');
}

function gotoSearchResult(el) {
    const lat = parseFloat(el.dataset.lat), lon = parseFloat(el.dataset.lon);
    const zoom = parseInt(el.dataset.zoom, 10) || 15;
    const city = el.dataset.city;
    if (city && city !== currentCityKey && typeof switchCity === 'function') {
        currentCityKey = city;
        const btns = document.querySelectorAll('.city-toggle-btn');
        btns.forEach(b => b.classList.toggle('active', b.dataset.city === city));
        if (typeof renderPanelFor === 'function') renderPanelFor(city);
    }
    map.flyTo([lat, lon], zoom, {animate: true, duration: 1.1});
    const box = document.getElementById('search-results');
    if (box) { box.hidden = true; box.innerHTML = ''; }
    const input = document.getElementById('search-input');
    if (input) input.setAttribute('aria-expanded', 'false');
}

function wireSearch() {
    const input = document.getElementById('search-input');
    const box = document.getElementById('search-results');
    if (!input || !box) return;
    let active = -1;

    const update = () => {
        const results = runSearch(input.value);
        renderSearchResults(results);
        active = -1;
        input.setAttribute('aria-expanded', results.length ? 'true' : 'false');
        input.removeAttribute('aria-activedescendant');
    };

    let debounce;
    input.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(update, 90);
    });

    input.addEventListener('keydown', ev => {
        const opts = Array.from(box.querySelectorAll('li'));
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
            if (!opts.length) return;
            ev.preventDefault();
            active += (ev.key === 'ArrowDown' ? 1 : -1);
            if (active < 0) active = opts.length - 1;
            if (active >= opts.length) active = 0;
            opts.forEach((o, i) => o.setAttribute('aria-selected', String(i === active)));
            input.setAttribute('aria-activedescendant', opts[active].id);
            opts[active].scrollIntoView({block: 'nearest'});
        } else if (ev.key === 'Enter') {
            if (active >= 0 && opts[active]) { ev.preventDefault(); gotoSearchResult(opts[active]); }
            else if (opts.length) { ev.preventDefault(); gotoSearchResult(opts[0]); }
        } else if (ev.key === 'Escape') {
            box.hidden = true; box.innerHTML = '';
            input.setAttribute('aria-expanded', 'false');
        }
    });

    box.addEventListener('click', ev => {
        const li = ev.target.closest('li');
        if (li) gotoSearchResult(li);
    });

    document.addEventListener('click', ev => {
        if (!ev.target.closest('.search-wrap')) {
            box.hidden = true;
            input.setAttribute('aria-expanded', 'false');
        }
    });
}

// ----------------------------------------------------------------------------
// DISTRICT FILTERS
// ----------------------------------------------------------------------------
// Rather than hiding districts outright, non-matching ones are dimmed. The
// map keeps its shape, and you can still see what you ruled out and why.
// The two datasets carry the same districts under slightly different display
// names ("Karlova (Artisan Wooden Heritage)" vs "... Heritage Quarter"), but
// their ids agree: rent_karlova ↔ safety_karlova. Join on the id and fall back
// to the name, so a renamed label can never silently drop a district's score.
function districtSlug(id) {
    return String(id || '').replace(/^(rent|safety)_/, '');
}

function safetyScoreFor(cityKey, rental) {
    const city = CITIES[cityKey];
    if (!city || !city.safety) return null;
    const slug = districtSlug(rental.id);
    const hit = city.safety.find(x => districtSlug(x.id) === slug)
             || city.safety.find(x => x.district === rental.district);
    if (!hit) return null;
    const raw = hit.mean_score != null ? hit.mean_score : hit.overall_score;
    const n = Number(raw);
    return Number.isNaN(n) ? null : n;
}

const FILTER_STATE = {maxRent: null, minSafety: null, maxGroceryWalk: null};

function districtMatchesFilter(cityKey, rental) {
    const f = FILTER_STATE;
    if (f.maxRent != null && Number(rental.mean_sqm) > f.maxRent) return false;

    if (f.minSafety != null) {
        const score = safetyScoreFor(cityKey, rental);
        if (score == null || score < f.minSafety) return false;
    }

    if (f.maxGroceryWalk != null) {
        const access = CITIES[cityKey].groceries && CITIES[cityKey].groceries.districtAccess;
        const entry = access && access[rental.district];
        const mins = entry && entry.nearestBig ? entry.nearestBig.walkMinutes : null;
        if (mins == null || mins > f.maxGroceryWalk) return false;
    }
    return true;
}

function applyFilters() {
    let shown = 0, total = 0;
    CITY_KEYS.forEach(cityKey => {
        const city = CITIES[cityKey];
        if (!city) return;
        (city.rentals || []).forEach(r => {
            total++;
            const ok = districtMatchesFilter(cityKey, r);
            if (ok) shown++;
            const lg = LAYERS[lk(cityKey, r.id)];
            if (!lg) return;
            lg.eachLayer(layer => {
                const el = layer.getElement && layer.getElement();
                if (el) el.classList.toggle('filtered-out', !ok);
                if (layer.setStyle) layer.setStyle({opacity: ok ? 1 : 0.15, fillOpacity: ok ? undefined : 0.03});
            });
        });
    });

    const out = document.getElementById('filter-summary');
    if (out) {
        const active = FILTER_STATE.maxRent != null || FILTER_STATE.minSafety != null
            || FILTER_STATE.maxGroceryWalk != null;
        out.textContent = active
            ? `${shown} of ${total} districts match`
            : `${total} districts, no filter applied`;
    }
    syncUrl();
}

function wireFilters() {
    const bind = (id, key, fmt) => {
        const el = document.getElementById(id);
        const out = document.getElementById(id + '-value');
        if (!el) return;
        const update = () => {
            const raw = Number(el.value);
            const off = el.dataset.offValue !== undefined && String(raw) === el.dataset.offValue;
            FILTER_STATE[key] = off ? null : raw;
            if (out) out.textContent = off ? 'any' : fmt(raw);
            applyFilters();
        };
        el.addEventListener('input', update);
        update();
    };

    bind('filter-rent', 'maxRent', v => `≤ €${v}/m²`);
    bind('filter-safety', 'minSafety', v => `≥ ${v.toFixed(1)}`);
    bind('filter-grocery', 'maxGroceryWalk', v => `≤ ${v} min walk`);

    const reset = document.getElementById('filter-reset');
    if (reset) {
        reset.addEventListener('click', () => {
            ['filter-rent', 'filter-safety', 'filter-grocery'].forEach(id => {
                const el = document.getElementById(id);
                if (el && el.dataset.offValue !== undefined) {
                    el.value = el.dataset.offValue;
                    el.dispatchEvent(new Event('input'));
                }
            });
        });
    }
}

// ----------------------------------------------------------------------------
// URL STATE
// ----------------------------------------------------------------------------
function readUrlState() {
    const p = new URLSearchParams(location.search);
    const num = k => (p.has(k) && !Number.isNaN(Number(p.get(k))) ? Number(p.get(k)) : null);
    const lat = num('lat'), lon = num('lon'), z = num('z');
    return {
        city: p.get('city'),
        center: (lat != null && lon != null) ? [lat, lon] : null,
        zoom: z,
        layers: p.get('layers') ? p.get('layers').split(',').filter(Boolean) : null,
        maxRent: num('rent'),
        minSafety: num('safety'),
        maxGroceryWalk: num('shop')
    };
}

let _urlTimer = null;
function syncUrl() {
    clearTimeout(_urlTimer);
    _urlTimer = setTimeout(() => {
        if (!map) return;
        const c = map.getCenter();
        const p = new URLSearchParams();
        p.set('city', currentCityKey);
        p.set('lat', c.lat.toFixed(4));
        p.set('lon', c.lng.toFixed(4));
        p.set('z', String(map.getZoom()));

        const on = Object.keys(LAYERS).filter(k => map.hasLayer(LAYERS[k]));
        if (on.length && on.length < 60) p.set('layers', on.join(','));
        if (FILTER_STATE.maxRent != null) p.set('rent', String(FILTER_STATE.maxRent));
        if (FILTER_STATE.minSafety != null) p.set('safety', String(FILTER_STATE.minSafety));
        if (FILTER_STATE.maxGroceryWalk != null) p.set('shop', String(FILTER_STATE.maxGroceryWalk));

        history.replaceState(null, '', location.pathname + '?' + p.toString());
    }, 400);
}

function applyUrlLayers(state) {
    if (state.layers) {
        state.layers.forEach(key => {
            if (LAYERS[key] && !map.hasLayer(LAYERS[key])) map.addLayer(LAYERS[key]);
        });
    }
    const set = (id, value) => {
        if (value == null) return;
        const el = document.getElementById(id);
        if (!el) return;
        el.value = String(value);
        el.dispatchEvent(new Event('input'));
    };
    set('filter-rent', state.maxRent);
    set('filter-safety', state.minSafety);
    set('filter-grocery', state.maxGroceryWalk);
}

function wireShareButton() {
    const btn = document.getElementById('btn-share');
    if (!btn) return;
    btn.addEventListener('click', async () => {
        const url = location.href;
        try {
            await navigator.clipboard.writeText(url);
            btn.textContent = 'Link copied';
        } catch {
            btn.textContent = 'Press ⌘C to copy';
            const sel = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(btn);
            sel.removeAllRanges(); sel.addRange(range);
        }
        setTimeout(() => { btn.textContent = 'Copy link to this view'; }, 2200);
    });
}

// ----------------------------------------------------------------------------
// LANGUAGE
// ----------------------------------------------------------------------------
let STRINGS = {};
let currentLang = 'en';

async function loadLanguage(lang) {
    if (!STRINGS[lang]) {
        try {
            const all = await fetchJSON(`${DATA_BASE}/i18n.json`);
            STRINGS = all;
        } catch (err) {
            console.warn('Translations unavailable', err);
            return;
        }
    }
    currentLang = STRINGS[lang] ? lang : 'en';
    document.documentElement.lang = currentLang;
    applyLanguage();
    try { localStorage.setItem('estonia-map-lang', currentLang); } catch { /* private mode */ }
}

function applyLanguage() {
    const table = STRINGS[currentLang] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = table[el.dataset.i18n];
        if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const v = table[el.dataset.i18nLabel];
        if (v) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const v = table[el.dataset.i18nPlaceholder];
        if (v) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('.lang-btn').forEach(b => {
        const on = b.dataset.lang === currentLang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
    });
}

function wireLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => loadLanguage(btn.dataset.lang));
    });
    let saved = 'en';
    try { saved = localStorage.getItem('estonia-map-lang') || 'en'; } catch { /* private mode */ }
    if (saved !== 'en') loadLanguage(saved);
}

// ----------------------------------------------------------------------------
// CITY RAIL — built from the manifest instead of baked into the HTML
// ----------------------------------------------------------------------------
function buildCityRail() {
    const host = document.getElementById('city-buttons');
    if (!host) return;
    host.innerHTML = CITY_KEYS.map(key => {
        const m = CITY_META[key];
        return `<button type="button" class="city-toggle-btn${key === currentCityKey ? ' active' : ''}"
                    id="btn_city_${key}" data-city="${key}"
                    aria-pressed="${key === currentCityKey}">
                <span class="city-btn-name">${m.icon} ${escapeHtml(m.cityName)}</span>
                <span class="city-count-badge">${m.companiesCount} tech hubs</span>
            </button>`;
    }).join('');

    host.querySelectorAll('.city-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            host.querySelectorAll('.city-toggle-btn').forEach(b => {
                const on = b === btn;
                b.classList.toggle('active', on);
                b.setAttribute('aria-pressed', String(on));
            });
            switchCity(btn.dataset.city);
        });
    });
}

// ----------------------------------------------------------------------------
// MOBILE SHEET
// ----------------------------------------------------------------------------
function wireMobileSheet() {
    const panel = document.getElementById('nested-layer-panel');
    const handle = document.getElementById('sheet-handle');
    const scrim = document.getElementById('sheet-scrim');
    if (!panel || !handle) return;

    const setOpen = open => {
        panel.classList.toggle('sheet-open', open);
        handle.setAttribute('aria-expanded', String(open));
        if (scrim) scrim.hidden = !open;
    };
    handle.addEventListener('click', () => setOpen(!panel.classList.contains('sheet-open')));
    if (scrim) scrim.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', ev => {
        if (ev.key === 'Escape' && panel.classList.contains('sheet-open')) setOpen(false);
    });
}

// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    wireSearch();
    wireFilters();
    wireShareButton();
    wireLanguage();
    wireMobileSheet();
});

// ----------------------------------------------------------------------------
// EVENT WIRING
// ----------------------------------------------------------------------------
// The markup carries no inline handlers any more — every control is a real
// button, checkbox or radio, addressed here by data attribute. That is what
// makes the panel keyboard-operable and legible to a screen reader.
// ----------------------------------------------------------------------------
const GLOBAL_TOGGLES = {
    grocery:   on => toggleGroceryGlobal(on),
    safety:    on => toggleSafetyGlobal(on),
    rental:    on => toggleRentalGlobal(on),
    companies: on => toggleCompaniesGlobal(on),
    transport: on => toggleTransportGlobal(on),
    districts: on => toggleDistrictsGlobal(on),
    busAll:    on => toggleBusAllGlobal(on)
};

const SIMPLE_TOGGLES = {
    parks:    on => toggleParks(on),
    labels:   on => toggleDistrictLabels(on),
    clusters: on => toggleClustersGlobal(on),
    hubs:     on => toggleHubsGlobal(on)
};

function wireControls() {
    // Accordions
    document.querySelectorAll('.accordion-toggle[data-accordion]').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleAccordion(btn.dataset.accordion, btn);
            const region = document.getElementById(btn.dataset.accordion);
            btn.setAttribute('aria-expanded', String(!!region && region.classList.contains('open')));
        });
    });

    // Group checkboxes sitting beside an accordion toggle
    document.querySelectorAll('[data-global-toggle]').forEach(box => {
        box.addEventListener('change', () => {
            const fn = GLOBAL_TOGGLES[box.dataset.globalToggle];
            if (fn) fn(box.checked);
        });
    });

    document.querySelectorAll('[data-bucket-toggle]').forEach(box => {
        box.addEventListener('change', () => toggleTransitBucketGlobal(box.dataset.bucketToggle, box.checked));
    });

    document.querySelectorAll('[data-grocery-tier]').forEach(box => {
        box.addEventListener('change', () => toggleGroceryTierGlobal(box.dataset.groceryTier, box.checked));
    });

    document.querySelectorAll('[data-simple-toggle]').forEach(box => {
        box.addEventListener('change', () => {
            const fn = SIMPLE_TOGGLES[box.dataset.simpleToggle];
            if (fn) fn(box.checked);
        });
    });

    document.querySelectorAll('[data-basemap]').forEach(radio => {
        radio.addEventListener('change', () => { if (radio.checked) switchBasemap(radio.dataset.basemap); });
    });

    document.querySelectorAll('[data-all-transit]').forEach(btn => {
        btn.addEventListener('click', () => setAllTransit(btn.dataset.allTransit === 'on'));
    });

    const mainToggle = document.getElementById('panel-main-toggle');
    if (mainToggle) {
        mainToggle.addEventListener('click', () => {
            toggleMainPanel();
            const body = document.getElementById('panel-body');
            mainToggle.setAttribute('aria-expanded', String(body.style.display !== 'none'));
        });
    }

    const parksBadge = document.getElementById('badge_parks_status');
    if (parksBadge) {
        parksBadge.addEventListener('click', () => {
            toggleParks(!showParks);
            parksBadge.setAttribute('aria-pressed', String(showParks));
            const box = document.getElementById('chk_parks');
            if (box) box.checked = showParks;
        });
    }

    const meme = document.getElementById('btn_meme_toggle');
    if (meme) {
        meme.addEventListener('click', async () => {
            await toggleMemeMode();
            meme.setAttribute('aria-pressed', String(isMemeMode));
        });
    }
}

document.addEventListener('DOMContentLoaded', wireControls);
