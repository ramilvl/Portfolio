# Ramil Valiyev — Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and SCSS to showcase my projects, technical skills, and professional experience.

## Stack

* **React 19 + TypeScript** — component-based architecture with type safety
* **Vite** — fast development server and optimized production builds
* **SCSS Modules** — scoped component styling with shared design tokens
* **Framer Motion** — animations, transitions, and scroll-based interactions
* **lucide-react** — modern icon library
* **@fontsource** — self-hosted Inter and JetBrains Mono fonts
* **ESLint** — code quality and consistency

## Getting started

```bash
npm install
npm run dev       # start the development server
npm run build     # create a production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```text
src/
  assets/                 Images, icons, and static assets
  components/
    layout/               Layout components (Navbar, Footer, Background)
    sections/             Portfolio sections (Hero, About, Skills, Projects...)
    ui/                   Shared UI components
  data/
    content.ts            Portfolio content (projects, experience, skills, etc.)
  hooks/                  Custom React hooks
  styles/
    _tokens.scss          Design tokens
    _mixins.scss          Shared SCSS mixins
    global.scss           Global styles and CSS variables
  types/                  Shared TypeScript types
  App.tsx
  main.tsx
```

Every component keeps its own `.module.scss` stylesheet, ensuring styles remain isolated and preventing class name conflicts.

## Editing content

Most portfolio content is centralized in:

```text
src/data/content.ts
```

From this file you can update:

* Personal information
* About section
* Skills
* Experience
* Projects
* Education
* Timeline
* Contact information

without modifying any UI components.

## Design system

The project uses SCSS Modules together with global design tokens.

Colors, typography, spacing, shadows, and reusable variables are defined in:

```text
src/styles/global.scss
```

Shared mixins and reusable styling utilities are available inside:

```text
src/styles/_mixins.scss
```

Design tokens are maintained in:

```text
src/styles/_tokens.scss
```

## Features

* Responsive design
* Modern UI/UX
* Smooth animations
* Component-based architecture
* Type-safe development
* Fast build performance
* SEO-friendly structure
* Easily maintainable content

## Future improvements

* Add a custom domain
* Add downloadable résumé
* Improve SEO metadata
* Add blog section
* Add multi-language support
* Integrate a contact form backend

## Author

**Ramil Valiyev**

* GitHub: https://github.com/ramilvl
* LinkedIn: https://www.linkedin.com/in/ramil-valiyev/
