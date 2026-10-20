/* ============ WEEK PAGE ============ */
const BACK = ARROW.replace("<svg ", '<svg style="transform:scaleX(-1)" ');
function wkNeighbours(w) {
  const i = weekNo(w), prev = WEEKS[i - 1], next = WEEKS[i + 1];
  const link = (x, dir) => x
    ? `<a class="wk-step wk-${dir}" href="#${x.id}">${dir === "prev" ? BACK : ""}<span>${weekName(x)}<span class="wk-stepname"> · ${SHORT[x.id]}</span></span>${dir === "next" ? ARROW : ""}</a>`
    : "";
  return link(prev, "prev") + link(next, "next");
}
function wkGroups(w) {
  const groups = [];
  w.tasks.forEach((x) => {
    // weeks without file sections group their exercises under one plain heading
    const name = SECTIONS[w.id] || !isExercise(x) ? sectionOf(w, x) : "Exercises", last = groups[groups.length - 1];
    if (last && last.name === name) last.items.push(x); else groups.push({ name, items: [x] });
  });
  return groups;
}
function wkTask(x) {
  const on = !!state.done[x.id];
  return `<li class="wk-task${on ? " wk-done" : ""}" data-row="${x.id}"><label>
    <input type="checkbox" data-task="${x.id}" ${on ? "checked" : ""}><span class="wk-tasktext">${x.html}</span></label></li>`;
}
function wkQuestion(w, q, i) {
  const key = `${w.id}-q${i}`, picked = state.quiz[key], answered = picked !== undefined;
  const opts = q.o.map((o, j) => {
    const cls = !answered ? "" : j === q.a ? " wk-right" : j === picked ? " wk-wrong" : "";
    const note = !answered ? "" : j === q.a ? '<span class="visually-hidden"> (correct answer)</span>' : j === picked ? '<span class="visually-hidden"> (your answer)</span>' : "";
    return `<li><button type="button" class="wk-opt${cls}" data-week="${w.id}" data-qi="${i}" data-oi="${j}" ${answered ? 'aria-disabled="true"' : ""}>${o}${note}</button></li>`;
  }).join("");
  const verdict = !answered ? "" : `<p class="wk-verdict"><b class="${picked === q.a ? "wk-ok" : "wk-no"}">${picked === q.a ? "Right." : "Not quite."}</b> ${q.w}</p>`;
  return `<div class="wk-q" id="${key}"><p class="wk-qt"><span class="wk-qn">${i + 1}.</span> ${q.q}</p>
    ${q.c ? `<pre><code>${esc(q.c)}</code></pre>` : ""}
    <ol class="wk-opts" aria-label="Answers to question ${i + 1}">${opts}</ol>
    <div class="wk-live" aria-live="polite">${verdict}</div></div>`;
}
function wkCount(w) { return `${doneCount(w.tasks)} of ${w.tasks.length} done`; }

function renderWeek(id) {
  const w = WEEKS.find((x) => x.id === id);
  const jumps = [["lesson", "Lesson"], ["exercises", "Exercises"]];
  if (w.quiz.length) jumps.push(["quiz", "Quiz"]);
  if (w.checkpoint.length) jumps.push(["sunday", "Sunday questions"]);
  $("#view").innerHTML = `
    <div class="weekfield">
    <nav class="wk-steps" aria-label="Weeks"><a class="wk-step wk-today" href="#today">${BACK}<span>Today</span></a><span class="wk-around">${wkNeighbours(w)}</span></nav>
    <div class="weekhead"><span class="weeknum" aria-hidden="true">${weekNo(w)}</span>
      <h1><span class="wkprefix">${weekName(w)} · </span>${SHORT[w.id]}</h1></div>
    </div>
    <dl class="wk-facts">
      <div><dt>When</dt><dd>${range(w)} · ${w.hours}</dd></div>
      <div><dt>Book</dt><dd>${w.book}</dd></div>
      <div><dt>Prepares you for</dt><dd>${w.unlocks}</dd></div>
      ${w.file ? `<div><dt>Code</dt><dd><code>${w.file}</code></dd></div><div><dt>Run</dt><dd><code>pytest ${w.test} -v</code></dd></div>` : ""}
    </dl>
    <p class="wk-why">${w.why}</p>
    <nav class="wk-jumps" aria-label="On this page">${jumps.map(([k, t]) => `<a href="#${w.id}-${k}">${t}</a>`).join("")}
      <span class="wk-count" id="wk-count" aria-live="polite">${wkCount(w)}</span></nav>
    <section id="lesson" class="prose wk-lesson" aria-label="Lesson">${md("md-" + w.id)}</section>
    <section id="exercises" class="wk-section"><h2>Exercises</h2>
      ${wkGroups(w).map((g) => `<h3 class="wk-group">${g.name}</h3><ul class="wk-tasks">${g.items.map(wkTask).join("")}</ul>`).join("")}</section>
    ${w.quiz.length ? `<section id="quiz" class="wk-section"><h2>Quiz</h2><p class="wk-intro">Predict the answer first, then pick it. Answers lock once chosen.</p>
      <div class="wk-quiz">${w.quiz.map((q, i) => wkQuestion(w, q, i)).join("")}</div>
      <p><button type="button" class="linkbtn" data-reset-quiz="${w.id}">Reset this quiz</button></p></section>` : ""}
    ${w.checkpoint.length ? `<section id="sunday" class="wk-section"><h2>Sunday questions</h2>
      <p class="wk-intro">Explain these out loud, or to Claude, without notes.</p>
      <ul class="wk-sunday">${w.checkpoint.map((c) => `<li>${c}</li>`).join("")}</ul></section>` : ""}
    <nav class="wk-steps wk-bottom" aria-label="Other weeks">${wkNeighbours(w)}</nav>`;
  enhance($("#view"));
  setWeekColour(w);
}

function wkRefreshTask(id) {
  const w = WEEKS.find((x) => x.id === view); if (!w) return;
  const row = document.querySelector(`[data-row="${id}"]`);
  if (row) { row.classList.toggle("wk-done", !!state.done[id]); const box = row.querySelector("input"); if (box) box.checked = !!state.done[id]; }
  const c = $("#wk-count"); if (c) c.textContent = wkCount(w);
}
document.addEventListener("progress", (e) => wkRefreshTask(e.detail.id));

document.addEventListener("click", (e) => {
  const o = e.target.closest(".wk-opt");
  if (o) {
    const w = WEEKS.find((x) => x.id === o.dataset.week), i = Number(o.dataset.qi), key = `${w.id}-q${i}`;
    if (state.quiz[key] !== undefined) return;
    state.quiz[key] = Number(o.dataset.oi);
    const quizId = `${w.id}-quiz`, allRight = w.quiz.every((q, k) => state.quiz[`${w.id}-q${k}`] === q.a);
    if (allRight) state.done[quizId] = true;
    save();
    const box = document.getElementById(key);
    box.outerHTML = wkQuestion(w, w.quiz[i], i);
    const fresh = document.getElementById(key);
    enhance(fresh);
    fresh.querySelector(`[data-oi="${o.dataset.oi}"]`).focus();
    if (allRight) wkRefreshTask(quizId);
    return;
  }
  const r = e.target.closest("[data-reset-quiz]");
  if (r) {
    const w = WEEKS.find((x) => x.id === r.dataset.resetQuiz);
    w.quiz.forEach((q, i) => { delete state.quiz[`${w.id}-q${i}`]; });
    save();
    $(".wk-quiz").innerHTML = w.quiz.map((q, i) => wkQuestion(w, q, i)).join("");
    enhance($(".wk-quiz"));
    const first = $(".wk-quiz .wk-opt"); if (first) first.focus();
  }
});
