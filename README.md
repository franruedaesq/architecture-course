# Understanding the Weird Parts of Web Architecture

**Live Demo:** [architecture-course-z1zl.vercel.app](https://architecture-course-z1zl.vercel.app/)

---

## Overview

**Architecture Course** — *“Understanding the Weird Parts”* — is an interactive learning platform that dissects modern web architecture from both the frontend and backend perspectives.
It’s designed for developers who want to understand **why** architectural decisions exist — not just how to implement them.

The homepage introduces a minimalist, dark-themed interface and guides learners through a five-module program exploring design trade-offs, scaling challenges, and performance considerations that shape today’s web systems.

---

## Why this course?

Most tutorials stop at *“here’s how to build it.”*
This course asks: **why was it built this way in the first place?**

Through hands-on diagrams, timelines, and interactive modules, you’ll discover:

* Why microservices replaced monoliths
* Why micro-frontends exist
* Why hydration and code splitting matter
* How architectural choices ripple through teams and user experience

Each topic connects theoretical motivation with implementation consequences.

---

## Key Features

* **Five detailed learning modules with 25+ interconnected concepts.**
  Topics span microservices, micro-frontends, performance, implementation strategies, and team collaboration. Shared metadata powers dynamic navigation across modules.
  *(See: `shared/courseContent.ts`)*

* **Consistent layout and progress tracking.**
  Every module inherits a unified structure with a progress bar, context hints, and sequential navigation.

* **Interactive visualizations.**
  Explore microservices flow diagrams, hydration timelines, bundle comparisons, and Core Web Vitals dashboards that make abstract ideas concrete.

* **Reusable content with automated testing.**
  Shared metadata lives in a single package with Vitest coverage to ensure integrity and labeling consistency.

---

## Tech Stack

* **Frontend:** React + TypeScript + Vite + Tailwind CSS + Radix UI
* **Backend:** Express server serving static Vite builds and handling client-side routing
* **Tooling:** pnpm workspace with scripts for builds, formatting, linting, and testing
* **Testing:** Vitest with global setup and coverage for both `client/` and `shared/`

---

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run the Vite development server**

   ```bash
   pnpm dev
   ```

3. **Run automated tests**

   ```bash
   pnpm test
   ```

4. **Create a production build**

   ```bash
   pnpm build
   ```

5. **Serve the built app locally**

   ```bash
   pnpm start
   ```

The build pipeline outputs static assets to `dist/public`, and the Express server compiles to `dist/index.js` for production.

---

## Project Structure

```
architecture-course/
├── client/        # React app (pages, components, hooks)
├── server/        # Express server entry point
├── shared/        # Shared course metadata
├── dist/          # Production build output
└── vite.config.ts # Root configuration
```

`vite.config.ts` defines the `client/` directory as the root and manages aliases for shared imports.

---

## Helpful Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm format`  | Format the codebase with Prettier    |
| `pnpm check`   | Type-check using TypeScript          |
| `pnpm preview` | Preview the production build locally |

---

## Testing

Run the full Vitest suite:

```bash
pnpm test
```

For live re-runs:

```bash
pnpm test:watch
```

Tests validate shared content integrity and navigation consistency.

---

## Explore the Live Demo

👉 **Try it now:** [architecture-course-z1zl.vercel.app](https://architecture-course-z1zl.vercel.app/)
Experience how theory, visuals, and structure combine to explain the “weird parts” that make modern web architecture work.

