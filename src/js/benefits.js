import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initBenefits() {
  const cards  = gsap.utils.toArray('.benefits .card');
  const labels = gsap.utils.toArray('.benefits .label');

  gsap.set(cards,    { x: 140, opacity: 0, scale: 0.96 });
  gsap.set(labels,   { x: -40, opacity: 0 });
  gsap.set(cards[0], { x: 0, opacity: 1, scale: 1 });
  gsap.set(labels[0],{ x: 0, opacity: 1 });

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  for (let i = 1; i < cards.length; i++) {
    const t = i;
    tl.to(cards[i - 1],  { x: -140, opacity: 0, duration: 0.5 }, t - 0.5);
    tl.to(labels[i - 1], { x:  -40, opacity: 0, duration: 0.5 }, t - 0.5);
    tl.to(cards[i],      { x:    0, opacity: 1, scale: 1, duration: 0.5 }, t - 0.5);
    tl.to(labels[i],     { x:    0, opacity: 1, duration: 0.5 }, t - 0.5);
  }

  ScrollTrigger.create({
    trigger: '#benefits',
    start: 'top top',
    end: () => `+=${window.innerHeight * 3}`,
    pin: true,
    scrub: 0.6,
    animation: tl,
    invalidateOnRefresh: true,
    onUpdate: self => {
      const idx = Math.min(cards.length, Math.floor(self.progress * cards.length) + 1);
      document.getElementById('benIdx').textContent = String(idx).padStart(2, '0');
    },
  });
}
