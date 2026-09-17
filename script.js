const nav = document.querySelector('.nav');
const toggle = document.querySelector('.mobile-toggle');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});


/* =========================================================
   GA4 CTA CLICK TRACKING
========================================================= */

document.querySelectorAll('[data-cta]').forEach((cta) => {

  cta.addEventListener('click', () => {

    if (typeof gtag !== 'function') {
      return;
    }

    gtag('event', 'cta_click', {
      cta_name: cta.dataset.cta,
      cta_location: window.location.pathname,
      destination: cta.href
    });

  });

});
