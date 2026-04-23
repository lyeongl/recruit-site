import { ScrollTrigger } from 'gsap/ScrollTrigger';

function getScrollTarget(selector, frame) {
  const el = document.querySelector(selector);
  if (!el) return null;

  // ScrollTrigger가 알고 있는 정확한 pin 시작 위치 사용
  const st = ScrollTrigger.getAll().find(t => t.trigger === el);
  if (st) return st.start + frame * window.innerHeight;

  // fallback: bounding rect
  return el.getBoundingClientRect().top + window.scrollY + frame * window.innerHeight;
}

export function initNav() {
  document.getElementById('navLogo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('[data-to]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const selector = a.getAttribute('data-to');
      const frame    = parseFloat(a.getAttribute('data-frame') || '0');
      const target   = getScrollTarget(selector, frame);
      if (target != null) window.scrollTo({ top: target, behavior: 'smooth' });
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
