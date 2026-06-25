/* Material's CSS-hack toggle inputs and their labels are purely presentational.
   Mark them as hidden from assistive technology on DOM-ready. */
document.addEventListener('DOMContentLoaded', function () {
  ['__drawer', '__search', '__toc'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('aria-hidden', 'true');
  });

  /* Empty and icon-only labels for the same toggles carry no useful text */
  document.querySelectorAll(
    'label[for="__drawer"], label[for="__search"], label[for="__toc"]'
  ).forEach(function (label) {
    if (!label.textContent.trim()) {
      label.setAttribute('aria-hidden', 'true');
    }
  });
});
