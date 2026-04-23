# LYEONG — Careers

포트폴리오용 채용 페이지입니다.

## Preview

<video src="assets/preview.mp4" controls width="100%"></video>

## Reference

- Design inspiration: [BEYOND Careers](https://beyond.imweb.me/)

## Stack

- [Vite](https://vitejs.dev/) — build tool
- Vanilla JS + CSS (no framework)
- [GSAP](https://greensock.com/gsap/) + ScrollTrigger — scroll animations

## Project Structure

```
recruit-site/
├── index.html
├── src/
│   ├── styles/
│   │   ├── _variables.css   # CSS custom properties
│   │   ├── _base.css        # reset, typography, shared utils
│   │   ├── _nav.css         # fixed bottom pill nav + progress bar
│   │   ├── _act1.css        # ACT1: hero, philosophy, bridge, values
│   │   ├── _sections.css    # benefits, leadership, stories, positions
│   │   ├── _act2.css        # ACT2: topcta, hours, final, faq + footer
│   │   └── main.css         # imports all partials
│   └── js/
│       ├── autofit.js       # autoFit, refreshST, pinScene utilities
│       ├── nav.js           # smooth scroll + progress bar
│       ├── act1.js          # GSAP: hero→philosophy→bridge→values
│       ├── benefits.js      # GSAP: 3-card pinned section
│       ├── scenes.js        # GSAP: leadership, stories, positions
│       ├── act2.js          # GSAP: topcta→hours→final→faq
│       └── main.js          # entry point
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
