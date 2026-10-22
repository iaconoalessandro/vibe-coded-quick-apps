/* ============ PROJECT ============ */
// "W3–W4" -> {text: "Week 3–4", id: "w3"}; "W7b" -> Week 8 (the last week's id stays w7b)
function pjWeek(code) {
  const m = code.match(/^W(\d+)(b?)(?:–W(\d+))?(.*)$/);
  if (!m) return { text: code, id: null };
  const id = "w" + m[1] + m[2];
  const w = WEEKS.find((x) => x.id === id);
  const n = w ? weekName(w).replace("Week ", "") : m[1];
  return { text: `Week ${n}${m[3] ? "–" + m[3] : ""}${m[4]}`, id: w ? id : null };
}
function pjDays(deadline) {
  const n = daysUntil(deadline);
  return n > 1 ? `${n} days left` : n === 1 ? "1 day left" : n === 0 ? "today" : "passed";
}
const pjCount = () => `<b>${ASSIGN.filter(([id]) => state.done["dss-" + id]).length} of ${ASSIGN.length}</b> done`;

function renderProject() {
  const rows = ASSIGN.map(([id, what, tool, wk]) => {
    const w = pjWeek(wk), py = tool.startsWith("Python");
    const prep = w.id ? `<a href="#${w.id}">${esc(w.text)}</a>` : esc(w.text);
    const row = `<tr class="pj-row${py ? " pj-py" : ""}">
      <td class="pj-done"><input type="checkbox" data-task="dss-${esc(id)}" id="dss-${esc(id)}" ${state.done["dss-" + id] ? "checked" : ""}></td>
      <th scope="row" class="pj-id"><label for="dss-${esc(id)}">${esc(id)}</label></th>
      <td class="pj-what"><label for="dss-${esc(id)}">${esc(what)}</label></td>
      <td class="pj-tool">${py ? '<svg class="pj-pymark" viewBox="0 0 8 8" aria-hidden="true"><rect width="8" height="8"/></svg>' : ""}${esc(tool)}</td>
      <td class="pj-prep">${prep}</td></tr>`;
    const divider = id === "A14" ? `<tr class="pj-deadline"><td colspan="5">Part 1 deadline · Fri 11 Dec</td></tr>` : "";
    return row + divider;
  }).join("");
  $("#view").innerHTML = `
    <div class="weekfield"><h1 class="pj-h1">DSS project</h1>
    <p class="pj-lede">LDS 2026–27 · Truth Social data warehouse. Every assignment, the tool it requires, and the week that prepares you for it.</p></div>
    <dl class="pj-deadlines">
      <div><dt>Part 1 · Fri 11 Dec</dt><dd>A1–A14 code, the group database freezes</dd><dd class="pj-left">${pjDays(DEADLINE)}</dd></div>
      <div><dt>Part 2 · Fri 18 Dec</dt><dd>MDX queries, dashboards, report of at most 10 pages</dd><dd class="pj-left">${pjDays(PART2)}</dd></div>
    </dl>
    <h2 class="pj-h2">Assignments</h2>
    <p class="pj-count" id="pj-count">${pjCount()}</p>
    <table class="pj-table">
      <thead><tr><th scope="col" class="pj-done"><span class="visually-hidden">Done</span></th><th scope="col">#</th><th scope="col">What</th><th scope="col">Tool</th><th scope="col">Prepared in</th></tr></thead>
      <tbody>${rows}<tr class="pj-deadline"><td colspan="5">Part 2 deadline · Fri 18 Dec</td></tr></tbody>
    </table>
    <h2 class="pj-h2">How we work on graded code</h2>
    <p class="pj-p">The path teaches every technique on parallel data (census, sales, loans). You write the Truth Social code. Claude explains, reviews your code and points at problems, but doesn't write assignment solutions. What you hand in has to be something you can defend at the oral.</p>
    <h2 class="pj-h2">Rules that shape the code</h2>
    <ul class="pj-rules">
      <li><b>No pandas-like packages</b> in A4–A6 (A1–A2 may use pandas): <code>csv</code>, <code>json</code>, <code>xml.etree</code>, <code>datetime</code>, <code>statistics</code>, <code>pyodbc</code>.</li>
      <li>A5 is graded on <b>efficiency and scalability</b>: batching, <code>fast_executemany</code>, streaming, measured timings.</li>
      <li>A11 demands <b>documented edge cases</b>. Keep a running <code>DECISIONS.md</code> from week 3 on.</li>
      <li>Use the small fact table to verify results by hand, as the brief suggests.</li>
    </ul>`;
  setWeekColour("project");
}
document.addEventListener("progress", () => { const c = document.getElementById("pj-count"); if (c && view === "project") c.innerHTML = pjCount(); });
