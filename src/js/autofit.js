import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function refreshST() {
  try { ScrollTrigger.refresh(); } catch (_) {}
}

export function autoFit() {
  const candidates = [
    ...document.querySelectorAll('.scene .stage'),
    ...document.querySelectorAll('.act .panel'),
  ];
  candidates.forEach(stage => {
    const inner = stage.querySelector(':scope > .inner, :scope > .grid, :scope > .rail, :scope > .copy, :scope > .split, :scope > .wrap');
    if (!inner) return;
    inner.style.transform = '';
    inner.style.width = '';
    inner.style.height = '';
    const sy = stage.clientHeight / inner.scrollHeight;
    const sx = stage.clientWidth / inner.scrollWidth;
    const s = Math.min(1, sy, sx) * 0.94;
    if (s < 1) {
      inner.style.transformOrigin = 'center center';
      inner.style.transform = `scale(${s.toFixed(4)})`;
      inner.style.height = `${inner.scrollHeight * s}px`;
      inner.style.width = `${inner.scrollWidth * s}px`;
    }
  });
}

export function pinScene(selector, frames, buildTimeline) {
  const el = document.querySelector(selector);
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  buildTimeline(tl);
  ScrollTrigger.create({
    trigger: el,
    start: 'top top',
    end: () => `+=${window.innerHeight * frames}`,
    pin: true,
    pinSpacing: true,
    scrub: 0.6,
    animation: tl,
    invalidateOnRefresh: true,
  });
}
