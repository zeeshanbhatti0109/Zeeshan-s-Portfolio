# Zeeshan — Web Developer Portfolio

A premium, multi-page portfolio built with React, Vite and React Router.

## Stack
- React + Vite
- React Router (multi-page routing)
- Framer Motion (page transitions, hero animation)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output is generated in `dist/`.

## Project structure

```
src/
  components/   Shared UI (Navbar, Footer, Button, ProjectShowcase, etc.)
  sections/     Homepage section blocks
  pages/        Routed pages (Home, Work, ProjectDetail, Services, About, Process, Contact)
  data/         Project, service, process and tech content (kept separate from UI)
  hooks/        useScrollReveal (scroll-triggered reveal animations)
```

## Editing content

Project case studies, services, process steps and tech stack all live in `src/data/` —
edit those files to update copy without touching components.
