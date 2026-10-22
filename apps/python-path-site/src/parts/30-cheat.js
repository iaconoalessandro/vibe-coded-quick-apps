/* ---- Cheat sheet view: one DOM build per visit; filtering only toggles hidden and <mark>s ---- */
let csQuery = "";
function renderCheat() {
  setWeekColour("cheat");
  const src = document.createElement("div");
  src.innerHTML = md("md-cheatsheet");
  // drop the markdown's own h1, intro line and rule: everything before the first h2
  while (src.firstChild && src.firstChild.nodeName !== "H2") src.firstChild.remove();
  const body = document.createElement("div");
  body.className = "cs-body prose";
  let sec = null;
  [...src.childNodes].forEach((n) => {
    if (n.nodeName === "H2") {
      sec = document.createElement("section");
      sec.className = "cs-sec";
      sec.id = "cs-" + body.children.length;
      n.textContent = n.textContent.replace(/^\d+\.\s*/, "");
      n.tabIndex = -1;
      sec.appendChild(n);
      body.appendChild(sec);
    } else if (sec) sec.appendChild(n);
  });
  const secs = [...body.children];
  const wide = matchMedia("(min-width: 601px)").matches;
  $("#view").innerHTML = `
    <div class="weekfield"><h1>Cheat sheet</h1>
    <p class="cs-lede">The same text as <code>CHEATSHEET.md</code> in your repo.</p></div>
    <div class="cs-search">
      <label for="cs-q">Search the cheat sheet</label>
      <div class="cs-field"><input id="cs-q" name="q" type="search" autocomplete="off" spellcheck="false" placeholder="DictReader, commit…" aria-describedby="cs-count">
        <span class="cs-count" id="cs-count" aria-live="polite"></span></div>
    </div>
    <details class="cs-index"${wide ? " open" : ""}><summary>Sections</summary>
      <ul>${secs.map((s, i) => `<li><a href="#cheat" data-cs="${i}">${esc(s.querySelector("h2").textContent)}</a></li>`).join("")}</ul>
    </details>
    <p class="cs-empty" hidden></p>`;
  $("#view").appendChild(body);
  enhance(body);
  // search text per section, without the copy buttons' labels
  secs.forEach((s) => { const c = s.cloneNode(true); c.querySelectorAll(".copy").forEach((b) => b.remove()); s.csText = c.textContent.toLowerCase(); });
  const q = $("#cs-q");
  q.value = csQuery;
  q.addEventListener("input", () => { csQuery = q.value; csFilter(secs); });
  q.addEventListener("keydown", (e) => { if (e.key === "Escape" && q.value) { e.preventDefault(); q.value = csQuery = ""; csFilter(secs); } });
  $(".cs-index").addEventListener("click", (e) => {
    const a = e.target.closest("[data-cs]"); if (!a) return;
    e.preventDefault(); // the router owns the hash
    const s = secs[a.dataset.cs];
    if (s.hidden) { q.value = csQuery = ""; csFilter(secs); }
    s.scrollIntoView();
    s.querySelector("h2").focus({ preventScroll: true });
  });
  csFilter(secs);
}

function csFilter(secs) {
  const words = csQuery.toLowerCase().split(/\s+/).filter(Boolean);
  let shown = 0;
  secs.forEach((s) => {
    s.querySelectorAll("mark.cs-hit").forEach((m) => m.replaceWith(m.textContent));
    s.normalize();
    s.hidden = words.some((w) => !s.csText.includes(w));
    if (!s.hidden) { shown++; if (words.length) csMark(s, words); }
  });
  $("#cs-count").textContent = words.length ? `${shown} of ${secs.length} sections` : `${secs.length} sections`;
  const empty = $(".cs-empty");
  empty.hidden = shown > 0;
  if (!shown) empty.innerHTML = `Nothing matches <b>“${esc(csQuery.trim())}”</b>. Try one word, like <code>DictReader</code> or <code>commit</code>.`;
}

function csMark(root, words) {
  const re = new RegExp(words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "gi");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement.closest(".copy") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    if (!re.test(n.nodeValue)) return;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0;
    n.nodeValue.replace(re, (m, at) => {
      frag.append(n.nodeValue.slice(last, at));
      const mk = document.createElement("mark"); mk.className = "cs-hit"; mk.textContent = m; frag.append(mk);
      last = at + m.length;
    });
    frag.append(n.nodeValue.slice(last));
    n.replaceWith(frag);
  });
}

// "/" jumps to the search from anywhere on the cheat sheet
document.addEventListener("keydown", (e) => {
  if (view !== "cheat" || e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
  const a = document.activeElement;
  if (a && (a.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))) return;
  const q = $("#cs-q"); if (!q) return;
  e.preventDefault(); q.focus(); q.select();
});
