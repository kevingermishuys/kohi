(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Open / closed status, Africa/Johannesburg ---- */
  var statusEl = document.getElementById('statusLine');
  if (statusEl) {
    try {
      var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }));
      var day = now.getDay(); // 0 Sun .. 6 Sat
      var mins = now.getHours() * 60 + now.getMinutes();
      var open = 8 * 60;
      var close = day === 0 ? 16 * 60 : 17 * 60;
      var isOpen = mins >= open && mins < close;
      if (isOpen) {
        var closeH = day === 0 ? '16:00' : '17:00';
        statusEl.textContent = 'Open today until ' + closeH;
      } else {
        var openLabel = mins < open ? 'today' : 'tomorrow';
        statusEl.textContent = 'Closed — opens ' + openLabel + ' at 08:00';
      }
    } catch (e) { /* keep static fallback already in the DOM */ }
  }

  /* ---- Scroll rail: writes --scroll-progress, read by the rail fill/dot and the mobile bar ---- */
  var root = document.documentElement;
  var railFill = document.getElementById('scrollRailFill');

  if (railFill) {
    var ticking = false;
    function updateProgress() {
      ticking = false;
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      root.style.setProperty('--scroll-progress', progress.toFixed(4));
    }
    if (!reduceMotion) {
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(updateProgress);
          ticking = true;
        }
      }, { passive: true });
      updateProgress();
    }
    /* reduced motion: --scroll-progress stays at its CSS default (0) — the rail sits at rest. */
  }

  /* ---- Section reveal (fade + rise, once) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window && !reduceMotion) {
    var revealIo = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '-50px' });
    revealEls.forEach(function (el) { revealIo.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Header scroll state ---- */
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();
  }

  /* ---- Map click-to-load facade ---- */
  var mapBtn = document.getElementById('mapLoadBtn');
  if (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var frame = mapBtn.parentElement;
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps?q=44+Stanley+Avenue,+Braamfontein+Werf,+Johannesburg,+2092&output=embed';
      iframe.loading = 'lazy';
      iframe.title = 'Map to Kōhī by Ifuku, 44 Stanley Avenue';
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
  }

  /* ---- Magnetic buttons: subtle pointer-follow tilt on fine-pointer/hover devices ---- */
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !reduceMotion) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5) * 10;
        var y = ((e.clientY - r.top) / r.height - 0.5) * 10;
        btn.style.setProperty('--mx', x.toFixed(1) + 'px');
        btn.style.setProperty('--my', y.toFixed(1) + 'px');
      });
      btn.addEventListener('pointerleave', function () {
        btn.style.removeProperty('--mx');
        btn.style.removeProperty('--my');
      });
    });
  }
})();
