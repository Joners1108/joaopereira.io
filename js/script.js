/* =========================================================
   João Pereira — Portfolio · interactions
   Vanilla JS, no dependencies
   ========================================================= */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme toggle (persisted) ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  try {
    var saved = localStorage.getItem('jp-theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('jp-theme', next); } catch (e) {}
    });
  }

  /* ---------- Navbar scrolled state ---------- */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  function closeMenu() {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
  }
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { revObserver.observe(el); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll('.stat-num');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced) { el.textContent = target + suffix; return; }
    var duration = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); countObs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { countObs.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var linkMap = {};
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    linkMap[a.getAttribute('href').slice(1)] = a;
  });
  if ('IntersectionObserver' in window) {
    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkMap[entry.target.id];
        if (link && entry.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spyObs.observe(s); });
  }

  /* ---------- Year in footer (future-proof) ---------- */
  // Kept static "© 2026" per design; no dynamic override.
})();
