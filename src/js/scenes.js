import { gsap } from 'gsap';
import { pinScene } from './autofit.js';

export function initScenes() {
  // 6 Leadership (1.3 → 2 frames)
  pinScene('#leadership', 2, tl => {
    gsap.set('#leadership .eyebrow', { opacity: 0, y: 20 });
    gsap.set('#leadership h2',       { opacity: 0, y: 40 });
    gsap.set('#ldVid',               { opacity: 0, scale: 1.08, y: 40 });
    tl.to('#leadership .eyebrow', { opacity: 1, y: 0, duration: 0.4 }, 0.0)
      .to('#leadership h2',       { opacity: 1, y: 0, duration: 0.5 }, 0.2)
      .to('#ldVid',               { opacity: 1, scale: 1, y: 0, duration: 0.7 }, 0.5);
  });

  // 7 Stories (1.5 → 2.2 frames)
  pinScene('#stories', 2.2, tl => {
    gsap.set('.stories h2', { opacity: 0, y: 30 });
    gsap.set('.story',      { opacity: 0, y: 40 });
    tl.to('.stories h2', { opacity: 1, y: 0, duration: 0.4 }, 0)
      .to('.story',      { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 }, 0.3);
  });

  // 8 Positions (1.5 → 2.2 frames)
  pinScene('#positions', 2.2, tl => {
    gsap.set('.positions h2',    { opacity: 0, y: 30 });
    gsap.set('.positions .badge',{ opacity: 0, y: 20 });
    gsap.set('.positions .row',  { opacity: 0, y: 24 });
    tl.to('.positions h2',     { opacity: 1, y: 0, duration: 0.4 }, 0)
      .to('.positions .badge', { opacity: 1, y: 0, duration: 0.4 }, 0.1)
      .to('.positions .row',   { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.3);
  });
}
