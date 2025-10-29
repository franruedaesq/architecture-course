# Architecture Course

## Overview
**Architecture Course** ("Understanding the Weird Parts") is an interactive curriculum that breaks down modern web architecture from both the frontend and backend perspectives. The home page introduces the dark-themed learning environment, outlines the five-module program, and invites learners to explore hands-on diagrams, timelines, and concept deep dives focused on the motivations behind architectural decisions.

## Key features
- **Five in-depth learning modules with 25+ concepts.** Shared metadata powers navigation across modules that cover microservices, micro-frontends, performance, implementation strategies, and team processes.【F:shared/courseContent.ts†L20-L109】
- **Consistent module layout with progress tracking.** Each module page inherits a layout that surfaces module context, renders a progress bar, and offers previous/next navigation to keep learners oriented throughout the course.
- **Interactive visualizations for complex topics.** Learners explore an interactive microservices/BFF flow diagram, hydration timeline, code-splitting bundle comparison, and Core Web Vitals dashboard to connect theory with real-world trade-offs.
- **Rich concept navigation.** Dedicated concept pages reuse a common template with module back-links and sequential navigation for deep dives on topics like DDD, CAP theorem, and progressive hydration.
- **Shared content with automated tests.** Module and concept metadata lives in a shared package with Vitest coverage to guard navigation integrity and labeling consistency.

## Tech stack
- **React + TypeScript** front-end bundled by Vite with Tailwind CSS utilities and a rich Radix UI component suite.
- **Express server** that serves the statically built Vite assets and supports client-side routing in production.
- **pnpm workspace tooling** with scripts for development, builds, formatting, linting, and automated tests.

## Getting started
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

The build pipeline outputs static assets to `dist/public`, and the Express server bundles to `dist/index.js` for production startups.【F:vite.config.ts†L20-L52】【F:package.json†L8-L10】【F:server/index.ts†L13-L33】

## Project structure
```
architecture-course/
├── client/        # React application (pages, components, hooks)
├── server/        # Express server entry point for production deploys
├── shared/        # Course metadata shared between client and tests
├── dist/          # Build output (created after `pnpm build`)
└── vite.config.ts # Root Vite configuration
```
The Vite configuration treats `client/` as the project root, exposes shared aliases, and emits assets for the server to serve after builds.【F:vite.config.ts†L14-L24】

## Helpful scripts
- `pnpm format` – format the codebase with Prettier.【F:package.json†L6-L13】
- `pnpm check` – type-check the project with TypeScript.【F:package.json†L6-L12】
- `pnpm preview` – preview the production build using Vite’s preview server.【F:package.json†L6-L11】

## Testing
Vitest is configured with global APIs and shared setup, enabling tests across both `client/` and `shared/` packages. Run the suite with `pnpm test` or `pnpm test:watch` for an interactive experience.【F:vite.config.ts†L43-L51】【F:package.json†L14-L15】
