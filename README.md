# Ramil Valiyev — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and SCSS.

## Stack

- **React 19 + TypeScript** — component layer
- **Vite** — dev server and build
- **SCSS Modules** — scoped styling per component, shared tokens in `src/styles`
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icon set (GitHub/LinkedIn marks are hand-drawn in `src/components/ui/BrandIcon`, since lucide no longer ships brand glyphs)
- **@fontsource** — Inter and JetBrains Mono are self-hosted, no external font requests at runtime

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/content.ts        ← all resume/profile content lives here — edit this file only
                            to update copy, skills, projects, or timeline entries
  types/                 ← shared TypeScript interfaces for the content above
  styles/
    _tokens.scss          design tokens (breakpoints, motion, layout — static SCSS)
    _mixins.scss          shared mixins (container, focus ring, responsive helper)
    global.scss           CSS custom properties (color, type, shadow) + resets
  hooks/
    useActiveSection.ts   IntersectionObserver hook powering the nav's active state
  components/
    layout/                Navbar, Footer, Background, Section (page chrome)
    ui/                     Button, Tag, Reveal, BrandIcon (shared primitives)
    sections/               One folder per page section (Hero, About, Experience,
                             Skills, Projects, Technologies, Timeline, Contact)
```

Each component's SCSS lives next to it as a `.module.scss` file, scoped
automatically by Vite — class name collisions between components aren't
possible.

## Editing content

Everything text-based — name, bio, skills, projects, timeline — is centralized
in `src/data/content.ts`. You shouldn't need to touch component files to
update copy.

**One thing to note:** exact start/end years for the education entries in
`timeline` weren't provided in the original brief, so they currently render
as "Completed" placeholders. Update the `period` field for the `bachelor`
and `master` entries with real dates before publishing.

## Design system

Colors, spacing, and type are defined once as CSS custom properties in
`src/styles/global.scss` (`--color-*`, `--font-*`, `--gradient-*`) and
referenced the same way from every component — so a palette or type change
only has to happen in one place.

## Deploying

`npm run build` outputs a static site to `dist/` — deploy it to Vercel,
Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Before publishing

- Replace `https://ramilvaliyev.dev/` with the real domain in `index.html`
  (canonical link, Open Graph, Twitter, JSON-LD) and in
  `public/robots.txt` / `public/sitemap.xml`.
- Fill in real dates for the two education entries in
  `src/data/content.ts` (`timeline.bachelor` / `timeline.master`) —
  they currently render as "Completed" placeholders.
- Consider adding a proper Open Graph image (`og:image`) once you have
  a screenshot or brand asset to point it at.
