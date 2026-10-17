/* Mohammed Shehriyaar F — Motion & Interactive Physics Engine */
(() => {
  if (typeof window === 'undefined') return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  const ease = n => n * n * (3 - 2 * n);
  const easeOutQuart = x => 1 - Math.pow(1 - x, 4);

  let frame = 0;
  let previousTime = 0;
  let currentY = window.scrollY;
  let stage, hero, progress;
  let cards = [];
  let visuals = [];

  // Memory tracking sets to prevent mutating DOM attributes (100% immune to React hydration mismatch)
  const watched = new WeakSet();
  const tiltSet = new WeakSet();
  const magneticSet = new WeakSet();
  const counterSet = new WeakSet();

  function animateCounter(el) {
    const rawTarget = el.dataset.counter || '';
    const isPercent = rawTarget.includes('%');
    const isPlus = rawTarget.includes('+');
    const isLess = rawTarget.includes('<');
    const targetVal = parseFloat(rawTarget.replace(/[^0-9.]/g, '')) || 0;
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const prog = clamp(elapsed / duration, 0, 1);
      const cur = Math.floor(easeOutQuart(prog) * targetVal);

      let text = '';
      if (isLess) text += '< ';
      text += cur;
      if (isPercent) text += '%';
      if (isPlus) text += '+';
      if (rawTarget.includes('s')) text += 's';

      el.textContent = text;
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = rawTarget;
    }
    requestAnimationFrame(step);
  }

  // IntersectionObserver for smooth modern scroll reveals
  // Tuned rootMargin and threshold so elements reveal right as they enter the viewer's reading focus
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('is-visible');

          const counterEl = target.matches('[data-counter]') ? target : target.querySelector?.('[data-counter]');
          if (counterEl && !counterSet.has(counterEl)) {
            counterSet.add(counterEl);
            animateCounter(counterEl);
          }

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -65px 0px' }
  );

  function setupTilts() {
    if (reduced.matches) return;
    const tiltElements = document.querySelectorAll('.project-card, .service-item, .stat-card, .metric-pill');
    tiltElements.forEach(card => {
      if (tiltSet.has(card)) return;
      tiltSet.add(card);

      let bounds;
      let rafId = 0;

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        card.classList.add('is-interacting');
      }, { passive: true });

      card.addEventListener('mousemove', e => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const xPct = (x / bounds.width - 0.5) * 2;
          const yPct = (y / bounds.height - 0.5) * 2;
          const maxTilt = card.classList.contains('project-card') ? 4.5 : 3.5;
          const tiltX = -yPct * maxTilt;
          const tiltY = xPct * maxTilt;

          card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
          card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
          card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
          card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
        });
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        card.classList.remove('is-interacting');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      }, { passive: true });
    });
  }

  function setupMagnetics() {
    if (reduced.matches) return;
    const magnetics = document.querySelectorAll('.button, .round-link, .header-cta');
    magnetics.forEach(btn => {
      if (magneticSet.has(btn)) return;
      magneticSet.add(btn);

      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'transform 0.08s ease-out, background 0.25s, color 0.25s, border-color 0.25s';
      }, { passive: true });

      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const mx = e.clientX - (rect.left + rect.width / 2);
        const my = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate3d(${mx * 0.18}px, ${my * 0.18}px, 0)`;
      }, { passive: true });

      btn.addEventListener('mouseleave', () => {
        btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s, color 0.25s, border-color 0.25s';
        btn.style.transform = '';
      }, { passive: true });
    });
  }

  function initMotion() {
    stage = document.querySelector('.hero-scroll-stage');
    hero = document.querySelector('.hero');
    progress = document.querySelector('.page-entry-line');
    cards = [...document.querySelectorAll('.project-card')];
    visuals = [...document.querySelectorAll('.about-image, .precision-visual')];

    // Stagger items by section container so each section reveals as a rhythmic unit
    const sectionContainers = document.querySelectorAll(
      '.hero-scroll-stage, .stats-banner, #work, #services, #about, #process, .trust-section, #contact, .case-stage, .site-footer'
    );

    sectionContainers.forEach(sec => {
      const items = sec.querySelectorAll(
        '.section-heading, .stat-card, .project-card, .work-end, .service-item, .about-layout > *, .stack-section, .stack-grid > div, .process-intro, .process-list > li, .trust-section > div, .contact-intro, .contact-form, .case-stage > *'
      );

      items.forEach((el, index) => {
        if (watched.has(el)) return;
        watched.add(el);
        el.classList.add('reveal-item');

        // Apply clean, crisp sequential stagger within the section
        const delay = (index % 4) * 85;
        el.style.setProperty('--reveal-delay', `${delay}ms`);

        if (reduced.matches) {
          el.classList.add('is-visible');
        } else {
          const r = el.getBoundingClientRect();
          // Elements already visible in viewport remain visible immediately
          if (r.top <= window.innerHeight * 0.92 && r.bottom > 0) {
            el.classList.add('is-visible');
            const counterEl = el.matches('[data-counter]') ? el : el.querySelector?.('[data-counter]');
            if (counterEl && !counterSet.has(counterEl)) {
              counterSet.add(counterEl);
              animateCounter(counterEl);
            }
          } else {
            observer.observe(el);
          }
        }
      });
    });

    // Also observe any standalone reveal elements not caught in section containers
    document.querySelectorAll('.stat-card, .project-card, .service-item, .reveal-item').forEach(el => {
      if (!watched.has(el)) {
        watched.add(el);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      }
    });

    document.querySelectorAll('[data-counter]').forEach(el => {
      if (!watched.has(el)) {
        watched.add(el);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
          if (!counterSet.has(el)) {
            counterSet.add(el);
            animateCounter(el);
          }
        } else {
          observer.observe(el);
        }
      }
    });

    setupTilts();
    setupMagnetics();
    document.documentElement.classList.add('motion-ready');
    schedule();
  }

  function draw(time) {
    frame = 0;
    if (reduced.matches) return;

    const dt = Math.min(50, time - (previousTime || time - 16));
    previousTime = time;
    currentY += (window.scrollY - currentY) * (1 - Math.exp(-dt / 32));
    if (Math.abs(window.scrollY - currentY) < 0.2) currentY = window.scrollY;

    const lag = window.scrollY - currentY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) {
      progress.style.transform = `scaleX(${max > 0 ? clamp(currentY / max) : 0})`;
    }

    if (stage && hero) {
      const r = stage.getBoundingClientRect();
      const length = stage.offsetHeight - hero.offsetHeight;
      const desktop = window.innerWidth > 900 && window.innerHeight > 620;
      const rawP = desktop ? clamp((-r.top - lag) / Math.max(1, length), 0, 1) : 0;
      const p = desktop ? ease(rawP) : 0;
      stage.style.setProperty('--hero-progress', p.toFixed(4));
      stage.style.setProperty('--hero-copy-opacity', String(1 - clamp(p * 2.6, 0, 1)));

      const intro = hero.querySelector('.hero-intro');
      if (intro) {
        if (p > 0.35 && !intro.contains(document.activeElement)) {
          intro.style.visibility = 'hidden';
          intro.style.pointerEvents = 'none';
        } else {
          intro.style.visibility = '';
          intro.style.pointerEvents = (p > 0.25) ? 'none' : '';
        }
      }

      const h1 = hero.querySelector('h1');
      if (h1) {
        if (p > 0.58) {
          h1.style.visibility = 'hidden';
          h1.style.pointerEvents = 'none';
        } else {
          h1.style.visibility = '';
          h1.style.pointerEvents = 'none';
        }
      }
    }

    visuals.forEach(node => {
      const r = node.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      const offset = clamp(center / (window.innerHeight / 2), -1, 1);
      node.style.setProperty('--visual-y', `${(-offset * 16).toFixed(2)}px`);
      node.style.setProperty('--visual-rotate', `${(-offset * 0.8).toFixed(2)}deg`);
    });

    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      if (r.bottom < -100 || r.top > window.innerHeight + 100) return;
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      const offset = clamp(center / (window.innerHeight / 2), -1, 1);
      const inner = card.querySelector('.project-image');
      if (inner) {
        inner.style.setProperty('--image-lag-y', `${(-offset * 18).toFixed(2)}px`);
      }
    });

    if (currentY !== window.scrollY) frame = requestAnimationFrame(draw);
  }

  function schedule() {
    if (!frame && !reduced.matches) frame = requestAnimationFrame(draw);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });

  // Expose clean runner that is triggered ONLY post-hydration
  window.__initPortfolioMotion = initMotion;
})();
