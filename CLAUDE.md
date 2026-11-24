# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
Personal portfolio for Sonali Vedaraju (AI Application Engineer). Deployed on Vercel at https://sonali-vedaraju.vercel.app.

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS 3 + shadcn/ui (`src/components/ui/*` — generated, don't hand-edit unless needed)
- framer-motion for animation, lucide-react for icons
- Path alias: `@/` → `src/`

## Commands
- `npm run dev` — local dev server (http://localhost:8080 or whatever Vite prints)
- `npm run build` — production build; MUST pass before any task is called done
- `npm run lint` — ESLint
- `npm run test` — Vitest (single run; jsdom + globals, setup in `src/test/setup.ts`, only `example.test.ts` exists today)
- `npx vitest run src/path/to/file.test.ts` — run a single test file (add `-t "name"` to filter by test name); `npm run test:watch` for watch mode
- `npm run preview` — serve the production build locally; `npm run build:dev` — development-mode build
- Vercel runs `npm run build` and serves `dist/` (`vercel.json`)

## Project layout
- `src/App.tsx` — providers (React Query, tooltip, toasters) and routes: single `/` route plus `NotFound` catch-all; add new routes above `*`
- `src/pages/Index.tsx` — page composition, in order: Header, Hero, Projects, Skills, Certifications, Experience, Education, Contact, Footer. Also mounts `ScrollEnhancements`, `ThemeToggle`, `Toaster`, and a fixed global background (`public/hero-bg.jpg` under a `--background` overlay) that Hero changes must work with
- `src/components/*.tsx` — one file per section, plus `Preloader`, `MobileNav`, `NavLink`. `About.tsx` is intentionally unused (commented out in `Index.tsx`); don't re-enable it without asking
- `src/data/portfolio.ts` — **single source of truth for ALL content** (personalInfo, professionalSummary, experience, projects, skills, certifications, education, stats, navItems, typewriterWords)
- `src/index.css` — CSS variables (light `:root` + `.dark`), custom utilities (`glass`, `text-gradient-gold`, `btn-elastic`, etc.)
- `tailwind.config.ts` — theme tokens and font families
- `public/` — static assets and the resume PDF (filename contains spaces; URL-encode links to it)
- Root `COLOR_IMPROVEMENTS.md`, `DARK_THEME_COMPATIBILITY.md`, `VISIBILITY_IMPROVEMENTS.md` are old notes, not current spec — don't follow them
- `docs/design/` — design specs and reference screenshots for UI work

## Hard rules
1. **Content is mine — never invent or change it.** Text, numbers, links, job titles, and contact info come only from `src/data/portfolio.ts`. Do not copy any name, text, or data from reference designs. If a UI element needs data that doesn't exist (e.g. a stat), derive it from existing data (e.g. `experience.length`) or ask me.
2. **UI changes only** unless I say otherwise. Don't rename data fields or restructure `portfolio.ts` without asking.
3. Use Tailwind classes and CSS variables (HSL tokens in `index.css`). No hard-coded hex colors in components and no inline `style={{ color: ... }}` — add a token instead.
4. Both light and dark themes must look correct (ThemeToggle toggles `.dark` on `<html>`).
5. Must be responsive: check 375px (mobile), 768px (tablet), 1280px+ (desktop).
6. Keep accessibility: semantic headings (one `h1`), visible focus states, `aria-label` on icon-only buttons, color contrast ≥ 4.5:1 for body text.
7. Respect `prefers-reduced-motion` for new animations.
8. Don't add new dependencies without asking.

## Workflow
- For anything bigger than a small fix: plan first (Plan Mode), show me the plan, then implement.
- Work in small steps and run `npm run build` after each step.
- Work on a feature branch, never commit straight to `main` (Vercel deploys `main`).
- Commit messages: short, imperative (e.g. `hero: two-column card layout with snapshot panel`).

## Current task context
UI redesign of the Projects section. Spec: `docs/design/projects-redesign-spec.md`.
Hero is done. Don't touch Hero.tsx or Header.tsx.
