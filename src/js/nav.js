import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initNav() {
  document.querySelectorAll('[data-to]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('data-to');
      const frame = parseFloat(a.getAttribute('data-frame') || '0');
      const el = document.querySelector(id);
      if (!el) return;
      const base = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: base + frame * window.innerHeight, behavior: 'smooth' });
    });
  });

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      document.getElementById('progBar').style.width = `${(self.progress * 100).toFixed(2)}%`;
    },
  });
}
