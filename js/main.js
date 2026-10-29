/* main.js - shared behaviour and game effects for all pages */
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body, page = body.dataset.page;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
    };

    // Boot screen, once per browser session
    let seen = false;
    try { seen = sessionStorage.getItem('booted'); sessionStorage.setItem('booted', '1'); } catch (e) { }
    if (!seen && !still) {
        const l = document.createElement('div');
        l.className = 'loader';
        l.innerHTML = '<p>Loading<span class="dots"></span></p><div class="load-track"><div class="load-bar"></div></div>';
        body.appendChild(l);
        setTimeout(() => l.classList.add('done'), 1300);
        setTimeout(() => l.remove(), 1800);
    }

    // Page fade-in
    requestAnimationFrame(() => body.classList.add('loaded'));

    // Active nav link from body data-page
    document.querySelectorAll('[data-nav]').forEach(a => {
        if (a.dataset.nav === page) { a.classList.add('active'); a.setAttribute('aria-current', 'page'); }
    });

    // Hamburger menu
    const toggle = document.querySelector('.nav-toggle'), links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', links.classList.toggle('open'));
    });

    // Hero title: letters drop in one by one
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        // One block per word so the title always sits on two lines
        text.split(' ').forEach(word => {
            const w = document.createElement('span');
            w.className = 'word';
            [...word].forEach(ch => {
                const s = document.createElement('span');
                s.className = 'letter';
                s.setAttribute('aria-hidden', 'true');
                s.textContent = ch;
                s.style.setProperty('--i', i++);
                w.appendChild(s);
            });
            title.appendChild(w);
        });
    }

    // Home: score counters
    document.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.target, start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / 1400, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });

    // About: fall back to initials when the portrait is missing
    const img = document.querySelector('.photo-frame img');
    if (img) {
        const hide = () => img.classList.add('hidden');
        img.addEventListener('error', hide);
        if (img.complete && img.naturalWidth === 0) hide();
    }

    // Skills: items drop into inventory slots one by one
    document.querySelectorAll('.slot').forEach((s, i) => setTimeout(() => s.classList.add('in'), 200 + i * 70));

    // Quest list and cards: reveal when scrolled into view
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .2 });
    document.querySelectorAll('.checklist li, .project-card, .contact-card').forEach((el, i) => {
        el.style.setProperty('--d', (i % 4) * 90 + 'ms');
        el.classList.add('reveal');
        io.observe(el);
    });

    // Projects: category filter with pop-in
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.addEventListener('click', () => {
        btns.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        document.querySelectorAll('.project-card').forEach(c => {
            const show = b.dataset.filter === 'all' || c.dataset.category === b.dataset.filter;
            c.classList.toggle('hidden', !show);
            if (show) { c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); }
        });
    }));

    // Collectible coins (total is kept between visits)
    const counter = document.getElementById('coin-count');
    let total = parseInt(store.get('coins'), 10) || 0;
    counter.textContent = total;
    for (let n = 1; n <= 5; n++) {
        const c = document.createElement('button');
        c.className = 'coin c' + n;
        c.setAttribute('aria-label', 'Collect coin');
        c.addEventListener('click', e => {
            e.stopPropagation();
            c.classList.add('got');
            total++; counter.textContent = total; store.set('coins', total);
            counter.classList.remove('bump'); void counter.offsetWidth; counter.classList.add('bump');
            burst(e.clientX, e.clientY);
            setTimeout(() => c.remove(), 500);
        });
        body.appendChild(c);
    }

    // Click sparkles
    function burst(x, y) {
        if (still) return;
        for (let i = 0; i < 8; i++) {
            const s = document.createElement('i');
            s.className = 'spark';
            s.style.left = x + 'px'; s.style.top = y + 'px';
            s.style.setProperty('--dx', Math.cos(i * .785) * 40 + 'px');
            s.style.setProperty('--dy', Math.sin(i * .785) * 40 + 'px');
            body.appendChild(s);
            setTimeout(() => s.remove(), 600);
        }
    }
    document.addEventListener('click', e => burst(e.clientX, e.clientY));
});