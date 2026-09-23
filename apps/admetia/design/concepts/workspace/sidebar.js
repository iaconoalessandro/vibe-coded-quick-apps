/* Shared sidebar for concept 2. data-on on <aside> picks the active item. */
document.addEventListener('DOMContentLoaded', function () {
  var a = document.querySelector('aside.side'); if (!a) return;
  var on = a.getAttribute('data-on');
  function si(id, icon, label, c, sub) {
    return '<div class="si' + (sub ? ' sub' : '') + (on === id ? ' on' : '') + '">' + (icon ? ICON[icon] : '') + label + (c ? '<span class="c">' + c + '</span>' : '') + '</div>';
  }
  a.innerHTML =
    '<div class="brand"><i>' + ICON.cap + '</i>Admission Chances</div>' +
    '<div class="search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>Search programmes<kbd>⌘K</kbd></div>' +
    si('home', 'chart', 'Overview') +
    '<div class="sh">Business</div>' +
    si('mba', 'cap', 'MBA', '38') + si('mif', 'chart', 'Finance', '16') + si('mim', 'people', 'Management', '20') + si('mkt', 'mega', 'Marketing', '8') +
    '<div class="sh">IT &amp; Computing</div>' +
    si('cs', 'code', 'Computer Science', '10') + si('ds', 'chart', 'Data Science &amp; AI', '10') + si('conv', 'doc', 'Conversion MSc', '5') +
    '<div class="sh">Your data</div>' +
    si('saved', 'doc', 'Saved answers', '1') + si('src', 'scale', 'Sources &amp; method') +
    '<div class="bottom"><b><span class="gd"></span>Offline</b>No network requests. Answers stay in this browser.</div>';
});
