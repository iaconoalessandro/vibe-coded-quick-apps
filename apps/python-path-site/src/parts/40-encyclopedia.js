/* ---- Encyclopedia: an index page, then one entry per page with every topic in a side list ---- */
let ENC = null;
// must match slug() in build.py, which checks every #encyclopedia/ link
const encSlug = (s) => s.toLowerCase().replace(/[^a-z0-9_]+/g, "-").replace(/^-+|-+$/g, "");
function encParse() {
  if (ENC) return ENC;
  const src = document.createElement("div");
  src.innerHTML = md("md-encyclopedia");
  const intro = [], topics = [];
  let topic = null, entry = null;
  [...src.children].forEach((n) => {
    if (n.tagName === "H2") { topic = { title: n.innerHTML, intro: [], entries: [] }; entry = null; topics.push(topic); }
    else if (n.tagName === "H3") { entry = { title: n.innerHTML, slug: encSlug(n.textContent), topic, body: [] }; topic.entries.push(entry); }
    else (entry ? entry.body : topic ? topic.intro : intro).push(n.outerHTML);
  });
  return (ENC = { intro: intro.join(""), topics, entries: topics.flatMap((t) => t.entries) });
}
const encLink = (x, cur) => `<a href="#encyclopedia/${x.slug}"${x === cur ? ' aria-current="page"' : ""}>${x.title}</a>`;

function renderEncyclopedia(slug) {
  setWeekColour("encyclopedia");
  const { intro, topics, entries } = encParse();
  const i = entries.findIndex((x) => x.slug === slug), e = entries[i];
  if (!e) {
    $("#view").innerHTML = `
      <div class="weekfield"><h1>Encyclopedia</h1>
      <p class="cs-lede">Every idea on the path, one short page each: what it is, what it's for, how to use it.</p></div>
      <div class="prose enc-intro">${intro}</div>
      <div class="enc-index">${topics.map((t) => `<section><h2>${t.title}</h2>${t.intro.join("")}
        <ul>${t.entries.map((x) => `<li>${encLink(x)}</li>`).join("")}</ul></section>`).join("")}</div>`;
    enhance($("#view"));
    return;
  }
  const prev = entries[i - 1], next = entries[i + 1];
  const wide = matchMedia("(min-width: 761px)").matches;
  $("#view").innerHTML = `
    <div class="weekfield"><p class="enc-crumb"><a href="#encyclopedia">Encyclopedia</a> · ${e.topic.title}</p><h1>${e.title}</h1></div>
    <div class="enc">
      <details class="enc-toc"${wide ? " open" : ""}><summary>All topics</summary>
        <nav aria-label="Encyclopedia contents"><ul>${topics.map((t) => `<li><span class="enc-topic">${t.title}</span>
          <ul>${t.entries.map((x) => `<li>${encLink(x, e)}</li>`).join("")}</ul></li>`).join("")}</ul></nav></details>
      <article class="prose enc-body">${e.body.join("")}
        <nav class="enc-steps" aria-label="Previous and next entry">
          ${prev ? `<a class="wk-step" href="#encyclopedia/${prev.slug}">${BACK}<span>${prev.title}</span></a>` : "<span></span>"}
          ${next ? `<a class="wk-step" href="#encyclopedia/${next.slug}"><span>${next.title}</span>${ARROW}</a>` : ""}
        </nav></article>
    </div>`;
  enhance($(".enc-body"));
  // keep the open entry in view inside the side list
  const toc = $(".enc-toc nav"), cur = toc.querySelector('[aria-current="page"]');
  if (wide && cur) toc.scrollTop = cur.offsetTop - toc.clientHeight / 3;
}
