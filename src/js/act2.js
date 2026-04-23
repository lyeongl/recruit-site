import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 모든 타임라인 위치 × 1.5 → 스크롤 구간 1.5배 확장
const S = 1.5;

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

  // Panel A — Top CTA (0 → 1.5)
  tl.to('#topctaH', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 0.1 * S)
    .to('#topctaP',  { opacity: 1, y: 0, duration: 0.4 }, 0.4 * S)
    .to('#a1',       { opacity: 0, duration: 0.3 }, 0.8 * S);

  // Panel B — Hours (1.5 → 3)
  tl.to('#a2',    { opacity: 1, duration: 0.3 }, 0.85 * S)
    .to('#hA',    { opacity: 1, x: 0, duration: 0.5 }, 1.0 * S)
    .to('#hB',    { opacity: 1, x: 0, duration: 0.5 }, 1.0 * S)
    .to('#hDot',  { opacity: 1, duration: 0.2 }, 1.4 * S)
    .to('#hH',    { opacity: 1, y: 0, duration: 0.3 }, 1.4 * S)
    .to('#hP',    { opacity: 1, y: 0, duration: 0.3 }, 1.55 * S)
    .to('#hChips',{ opacity: 1, y: 0, duration: 0.3 }, 1.7 * S)
    .to('#a2',    { opacity: 0, duration: 0.3 }, 1.95 * S);

  // Panel C — Final CTA (3 → 4.5)
  tl.to('#a3', { opacity: 1, duration: 0.3 }, 2.0 * S)
    .to('#fE', { opacity: 1, y: 0, duration: 0.3 }, 2.1 * S)
    .to('#fH', { opacity: 1, y: 0, duration: 0.5 }, 2.3 * S)
    .to('#fB', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, 2.7 * S)
    .to('#a3', { opacity: 0, duration: 0.3 }, 2.95 * S);

  // Panel D — FAQ (4.5 → 6)
  tl.to('#a4',       { opacity: 1, duration: 0.3 }, 3.0 * S)
    .to('#faqH',     { opacity: 1, y: 0, duration: 0.4 }, 3.15 * S)
    .to('#faqS',     { opacity: 1, y: 0, duration: 0.3 }, 3.3 * S)
    .to('#a4 .item', { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 }, 3.4 * S)
    .to('#a4 .faq-foot', { opacity: 1, y: 0, duration: 0.3 }, 3.8 * S);

  ScrollTrigger.create({
    trigger: '#act2',
    start: 'top top',
    end: () => `+=${window.innerHeight * 4 * S}`,  // 4 → 6 frames
    pin: true,
    scrub: 0.6,
    animation: tl,
    invalidateOnRefresh: true,
  });
}
