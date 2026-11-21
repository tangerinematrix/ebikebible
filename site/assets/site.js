// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

// Article filter on the home page
const filter = document.getElementById('filter');
if (filter) {
  const rows = [...document.querySelectorAll('#rows .row')];
  const empty = document.getElementById('no-results');
  filter.addEventListener('input', () => {
    const q = filter.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach((r) => {
      const hit = !q || r.dataset.search.includes(q);
      r.hidden = !hit;
      if (hit) shown++;
    });
    empty.hidden = shown > 0;
  });
}

// Contact form: compose an email in the visitor's mail app
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = d.get('subject') || `Message from ${d.get('name')}`;
    const body = `${d.get('message')}\n\n${d.get('name')} <${d.get('email')}>`;
    window.location.href = `mailto:info@ebikebible.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
