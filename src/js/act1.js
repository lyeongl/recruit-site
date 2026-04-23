import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAct1() {
  const panels = ['#p1', '#p2', '#p3', '#p4'].map(s => document.querySelector(s));
  const paras  = gsap.utils.toArray('#p2 .pp');
  const items  = gsap.utils.toArray('#p4 .vitem');

  gsap.set(panels[0], { opacity: 1 });
  gsap.set(panels.slice(1), { opacity: 0 });
  gsap.set('#p2 #p2tag', { opacity: 0 });
  gsap.set(paras, { opacity: 0, y: 24 });
  gsap.set('#p3 .p1line', { opacity: 0, y: 30 });
  gsap.set('#p3 .p2line', { opacity: 0, y: 30 });
  gsap.set(items, { opacity: 0, y: 40 });
  gsap.set(items[0], { opacity: 1, y: 0 });

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Hero (frame 0 → ~0.8)
  tl.to('#heroTitle', { scale: 1.3, opacity: 0, duration: 0.7 }, 0)
    .to('#heroSub',   { y: -20, opacity: 0, duration: 0.7 }, 0)
    .to('#heroMeta',  { y: -20, opacity: 0, duration: 0.7 }, 0)
    .to('#p1',        { opacity: 0, duration: 0.3 }, 0.55);

  // Philosophy (frame 0.7 → 2.9)
  tl.to('#p2', { opacity: 1, duration: 0.3 }, 0.7)
    .to('#p2 #p2tag', { opacity: 1, duration: 0.3 }, 0.85);
  paras.forEach((p, i) => {
    tl.to(p, { opacity: 1, y: 0, duration: 0.35 }, 1.0 + i * 0.2);
  });
  tl.to('#p2', { opacity: 0, duration: 0.35 }, 2.25);

  // Iris transition pink → white
  tl.fromTo('#act1WhiteBg',
    { clipPath: 'circle(0% at 50% 50%)' },
    { clipPath: 'circle(150% at 50% 50%)', duration: 0.6, ease: 'power3.inOut' },
    2.25);

  // Bridge (frame 2.55 → 4.3)
  tl.to('#p3', { opacity: 1, duration: 0.3 }, 2.55)
    .to('#p3 .p1line', { opacity: 1, y: 0, duration: 0.5 }, 2.7)
    .to('#p3 .p2line', { opacity: 1, y: 0, duration: 0.5 }, 3.05)
    .to('#p3 .p1line', { x: -30, duration: 0.4 }, 3.4)
    .to('#p3 .p2line', { x:  30, duration: 0.4 }, 3.4)
    .to('#p3', { opacity: 0, duration: 0.35 }, 4.3);

  // Values (frame 4.6 → 6.5)
  tl.to('#p4', { opacity: 1, duration: 0.3 }, 4.6);
  items.forEach((it, i) => {
    if (i === 0) return;
    const at = 4.85 + (i - 1) * 0.28;
    tl.to(items[i - 1], { opacity: 0, y: -40, duration: 0.3 }, at);
    tl.to(it,           { opacity: 1, y:   0, duration: 0.3 }, at);
  });

  const TOTAL = 6.5;
  const VAL_START = 4.6;

  ScrollTrigger.create({
    trigger: '#act1',
    start: 'top top',
    end: () => `+=${window.innerHeight * TOTAL}`,
    pin: true,
    scrub: 0.6,
    animation: tl,
    invalidateOnRefresh: true,
    onUpdate: self => {
      const p = self.progress * TOTAL;
      if (p >= VAL_START) {
        const vp  = Math.min(1, (p - VAL_START) / (TOTAL - VAL_START));
        const idx = Math.min(items.length, Math.max(1, Math.floor(vp * items.length) + 1));
        document.getElementById('valFill').style.width = `${(vp * 100).toFixed(1)}%`;
        document.getElementById('valIdx').textContent  = String(idx).padStart(2, '0');
      } else {
        document.getElementById('valFill').style.width = '0%';
        document.getElementById('valIdx').textContent  = '01';
      }
    },
  });
}
