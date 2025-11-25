// Fix Hugo Blox "Cite" buttons that just point to "#"
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a, button').forEach(function (el) {
    const text = (el.textContent || '').trim();

    // Only touch elements that *look* like the Cite button and are effectively dead links
    const href = el.getAttribute('href');
    const isDeadLink = !href || href === '#' || href === '';

    if (text === 'Cite' && isDeadLink) {
      // Build URL to cite.bib in the same folder as the current page
      let path = window.location.pathname;
      if (!path.endsWith('/')) {
        path += '/';
      }
      const bibUrl = path + 'cite.bib';

      el.setAttribute('href', bibUrl);
      el.setAttribute('download', '');
      // In case it's a <button>, make it an actual link behaviour
      el.addEventListener('click', function (ev) {
        if (el.tagName.toLowerCase() === 'button') {
          ev.preventDefault();
          window.location.href = bibUrl;
        }
      });
    }
  });
});