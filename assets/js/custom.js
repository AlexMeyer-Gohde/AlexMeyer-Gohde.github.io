// Fix Hugo Blox "Cite" buttons so they point to the correct cite.bib
document.addEventListener('DOMContentLoaded', function () {
  const locPath = window.location.pathname.replace(/\/$/, '');
  const wrongBibHere = locPath + '/cite.bib';

  function findPublicationHref(el) {
    // Walk up the DOM, looking for a link to the publication page
    let node = el;
    while (node && node !== document.body) {
      const link = node.querySelector(
        'a[href^="/publications/"]:not([href$="cite.bib"])'
      );
      if (link) {
        return link.getAttribute('href');
      }
      node = node.parentElement;
    }
    return null;
  }

  document.querySelectorAll('a, button').forEach(function (el) {
    const text = (el.textContent || '').trim();
    if (text !== 'Cite') return;

    const href = el.getAttribute('href') || '';
    // Treat as broken if it's empty, "#", or the *listing-page* cite.bib
    const isBroken =
      href === '' ||
      href === '#' ||
      href === wrongBibHere;

    if (!isBroken) {
      // Already a specific cite.bib (e.g. /publications/2010-.../cite.bib) → leave it alone
      return;
    }

    // Try to infer the publication URL from the surrounding card
    let pubHref = findPublicationHref(el);

    // Fallback: on the individual publication page, use the current path
    if (!pubHref) {
      let path = window.location.pathname;
      if (!path.endsWith('/')) path += '/';
      pubHref = path;
    }

    // Build the correct cite.bib URL
    try {
      const url = new URL(pubHref, window.location.origin);
      let path = url.pathname;
      if (!path.endsWith('/')) path += '/';
      const bibUrl = path + 'cite.bib';

      el.setAttribute('href', bibUrl);
      el.setAttribute('download', '');

      // If it's a <button>, emulate link behaviour
      if (el.tagName.toLowerCase() === 'button') {
        el.addEventListener('click', function (ev) {
          ev.preventDefault();
          window.location.href = bibUrl;
        });
      }
    } catch (e) {
      // If URL construction fails, do nothing
      console.error('Failed to build cite.bib URL for element', el, e);
    }
  });
});