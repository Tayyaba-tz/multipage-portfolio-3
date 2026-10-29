/* main.js - shared behaviour and game effects for all pages */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const body = document.body;
  const page = body.dataset.page;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Safe wrapper around localStorage (it can be blocked in private mode)
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  // Create an element with a class and optional text
  const make = (tag, cls, text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text) el.textContent = text;
    return el;
  };

  /* ---------- Boot screen, once per browser session ---------- */
  let seen = false;
  try { seen = sessionStorage.getItem('booted'); sessionStorage.setItem('booted', '1'); } catch (e) { /* ignore */ }
  if (!seen && !still) {
    const loader = make('div', 'loader');
    loader.setAttribute('aria-hidden', 'true');
    const label = make('p', '', 'Loading');
    label.appendChild(make('span', 'dots'));
    const track = make('div', 'load-track');
    track.appendChild(make('div', 'load-bar'));
    loader.append(label, track);
    body.appendChild(loader);
    setTimeout(() => loader.classList.add('done'), 1300);
    setTimeout(() => loader.remove(), 1800);
  }

  /* ---------- Active nav link ---------- */
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === page) { a.classList.add('active'); a.setAttribute('aria-current', 'page'); }
  });

  /* ---------- Hamburger menu ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const setMenu = open => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', e => { e.stopPropagation(); setMenu(!links.classList.contains('open')); });
  links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('click', e => { if (!e.target.closest('.navbar')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); toggle.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 1000) setMenu(false); });

  /* ---------- Hero title: letters drop in, one block per word ---------- */
  const title = document.querySelector('.hero-title');
  if (title) {
    const text = title.textContent.trim();
    title.textContent = '';
    title.appendChild(make('span', 'sr-only', text)); // real text for screen readers and search engines
    let i = 0;
    text.split(' ').forEach(word => {
      const w = make('span', 'word');
      w.setAttribute('aria-hidden', 'true');
      [...word].forEach(ch => {
        const s = make('span', 'letter', ch);
        s.style.setProperty('--i', i++);
        w.appendChild(s);
      });
      title.appendChild(w);
    });
  }

  /* ---------- Home: stat counters ---------- */
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = Number(el.dataset.target) || 0;
    if (still) { el.textContent = target; return; }
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  /* ---------- About: show initials if the photo fails to load ---------- */
  const img = document.querySelector('.photo-frame img');
  if (img) {
    const hide = () => img.closest('picture').classList.add('hidden');
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
  }

  /* ---------- Skills: items drop into inventory slots ---------- */
  document.querySelectorAll('.slot').forEach((s, i) => {
    s.classList.add('pending');
    setTimeout(() => s.classList.add('in'), 200 + i * 70);
  });

  /* ---------- Scroll reveal (only hides elements when JS can reveal them) ---------- */
  const revealEls = document.querySelectorAll('.checklist li, .project-card, .contact-card');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .15 });
    revealEls.forEach((el, i) => {
      el.style.setProperty('--d', (i % 4) * 90 + 'ms');
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---------- Projects: category filter ---------- */
  const btns = document.querySelectorAll('.filter-btn');
  const status = document.getElementById('filter-status');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
    b.classList.add('active');
    b.setAttribute('aria-pressed', 'true');
    let shown = 0;
    document.querySelectorAll('.project-card').forEach(c => {
      const show = b.dataset.filter === 'all' || c.dataset.category === b.dataset.filter;
      c.classList.toggle('hidden', !show);
      if (show) { shown++; c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); }
    });
    if (status) status.textContent = 'Showing ' + shown + (shown === 1 ? ' project' : ' projects');
  }));

  /* ---------- Collectible coins (total is kept between visits) ---------- */
  const counter = document.getElementById('coin-count');
  const saved = parseInt(store.get('coins'), 10);
  let total = Number.isFinite(saved) && saved > 0 ? Math.min(saved, 99999) : 0;
  counter.textContent = total;

  const burst = (x, y) => {
    if (still) return;
    for (let i = 0; i < 8; i++) {
      const s = make('i', 'spark');
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      s.style.setProperty('--dx', Math.cos(i * .785) * 40 + 'px');
      s.style.setProperty('--dy', Math.sin(i * .785) * 40 + 'px');
      body.appendChild(s);
      setTimeout(() => s.remove(), 600);
    }
  };

  for (let n = 1; n <= 5; n++) {
    const c = make('button', 'coin c' + n);
    c.type = 'button';
    c.setAttribute('aria-label', 'Collect bonus coin');
    c.addEventListener('click', e => {
      e.stopPropagation();
      c.classList.add('got');
      total = Math.min(total + 1, 99999);
      counter.textContent = total;
      store.set('coins', String(total));
      counter.classList.remove('bump'); void counter.offsetWidth; counter.classList.add('bump');
      burst(e.clientX || c.offsetLeft, e.clientY || c.offsetTop);
      setTimeout(() => c.remove(), 500);
    });
    body.appendChild(c);
  }

  // Click sparkles
  document.addEventListener('click', e => burst(e.clientX, e.clientY));
});
