import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAct2() {
  gsap.set('#a1', { opacity: 1 });
  gsap.set(['#a2', '#a3', '#a4'], { opacity: 0 });
  gsap.set('#topctaH',   { opacity: 0, y: 60, scale: .96 });
  gsap.set('#topctaP',   { opacity: 0, y: 30 });
  gsap.set('#hA',        { opacity: 0, x: -200 });
  gsap.set('#hB',        { opacity: 0, x:  200 });
  gsap.set('#hDot',      { opacity: 0 });
  gsap.set('#hH',        { opacity: 0, y: 30 });
  gsap.set('#hP',        { opacity: 0, y: 30 });
  gsap.set('#hChips',    { opacity: 0, y: 30 });
  gsap.set('#fE',        { opacity: 0, y: 20 });
  gsap.set('#fH',        { opacity: 0, y: 40 });
  gsap.set('#fB',        { opacity: 0, y: 30, scale: .95 });
  gsap.set('#faqH',      { opacity: 0, y: 30 });
  gsap.set('#faqS',      { opacity: 0, y: 20 });
  gsap.set('#a4 .item',  { opacity: 0, y: 20 });
  gsap.set('#a4 .faq-foot', { opacity: 0, y: 20 });

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Panel A — Top CTA (0 → 1)
  tl.to('#topctaH', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 0.1)
    .to('#topctaP',  { opacity: 1, y: 0, duration: 0.4 }, 0.4)
    .to('#a1',       { opacity: 0, duration: 0.3 }, 0.8);

  // Panel B — Hours (1 → 2)
  tl.to('#a2',   { opacity: 1, duration: 0.3 }, 0.85)
    .to('#hA',   { opacity: 1, x: 0, duration: 0.5 }, 1.0)
    .to('#hB',   { opacity: 1, x: 0, duration: 0.5 }, 1.0)
    .to('#hDot', { opacity: 1, duration: 0.2 }, 1.4)
    .to('#hH',   { opacity: 1, y: 0, duration: 0.3 }, 1.4)
    .to('#hP',   { opacity: 1, y: 0, duration: 0.3 }, 1.55)
    .to('#hChips',{ opacity: 1, y: 0, duration: 0.3 }, 1.7)
    .to('#a2',   { opacity: 0, duration: 0.3 }, 1.95);

  // Panel C — Final CTA (2 → 3)
  tl.to('#a3', { opacity: 1, duration: 0.3 }, 2.0)
    .to('#fE', { opacity: 1, y: 0, duration: 0.3 }, 2.1)
    .to('#fH', { opacity: 1, y: 0, duration: 0.5 }, 2.3)
    .to('#fB', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, 2.7)
    .to('#a3', { opacity: 0, duration: 0.3 }, 2.95);

  // Panel D — FAQ (3 → 4)
  tl.to('#a4',       { opacity: 1, duration: 0.3 }, 3.0)
    .to('#faqH',     { opacity: 1, y: 0, duration: 0.4 }, 3.15)
    .to('#faqS',     { opacity: 1, y: 0, duration: 0.3 }, 3.3)
    .to('#a4 .item', { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 }, 3.4)
    .to('#a4 .faq-foot', { opacity: 1, y: 0, duration: 0.3 }, 3.8);

  ScrollTrigger.create({
    trigger: '#act2',
    start: 'top top',
    end: () => `+=${window.innerHeight * 4}`,
    pin: true,
    scrub: 0.6,
    animation: tl,
    invalidateOnRefresh: true,
  });
}
