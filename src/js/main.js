import '../styles/main.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { autoFit, refreshST } from './autofit.js';
import { initNav }             from './nav.js';
import { initAct1 }            from './act1.js';
import { initBenefits }        from './benefits.js';
import { initScenes }          from './scenes.js';
import { initAct2 }            from './act2.js';

gsap.registerPlugin(ScrollTrigger);

initNav();
initAct1();
initBenefits();
initScenes();
initAct2();

let resizeTimer;
const runFit = () => { autoFit(); refreshST(); };

window.addEventListener('load',   runFit);
window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(runFit, 150); });
setTimeout(runFit, 300);
setTimeout(runFit, 800);
if (document.fonts?.ready) document.fonts.ready.then(runFit);
