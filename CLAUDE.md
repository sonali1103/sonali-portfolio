# CLAUDE.md

Personal portfolio for Sonali Vedaraju, an AI Application Engineer focused on agentic AI.
Live at https://sonali-vedaraju.vercel.app and deployed on Vercel from `main`.
The audience is recruiters hiring AI engineers: who I am, what I build, and how to reach me,
all within about 10 seconds.

## Commands
- `npm run dev`: http://localhost:8080
- `npm run build` / `npm run lint` / `npm test` (Vitest, jsdom)
- Use npm only (never bun).

## Where things live
- **All content** is in `src/data/portfolio.ts`. Never hard-code text in components.
- Page composition: `src/pages/Index.tsx`. Routes: `src/App.tsx` (above the `*` catch-all).
- Theme: HSL variables in `src/index.css` (`:root` / `.dark`), mapped in `tailwind.config.ts`.
  Dark mode = `dark` class on `<html>`, localStorage key `theme`.
- `src/components/ui/` contains generated shadcn files. Don't hand-edit them.
- Assets are in `public/`, referenced as `/file.png`.

## Hard rules (always apply)
1. **Stack is fixed:** Vite + React 18 + TypeScript + Tailwind v3 + shadcn/ui + framer-motion +
   lucide-react. No Next.js, no Tailwind v4, no new UI or animation libraries. Ask before adding
   any dependency (Playwright as a devDependency is approved).
2. **Colors and fonts are fixed.** Never change an existing value in `:root` / `.dark` in
   `src/index.css` or `colors` / `fontFamily` in `tailwind.config.ts`. Fonts: Playfair Display
   (headings) + Inter (body). Palette: charcoal / slate / silver + gold (`--gold`, `--gold-light`).
   New tokens derived from mine are OK (e.g. `hsl(var(--gold) / 0.15)`).
   No hard-coded hex colors or inline `textShadow` in components; use theme classes.
3. **Content is fixed.** Never invent metrics, dates, or achievements. Ask me if something is missing.
4. **Motion** must respect `prefers-reduced-motion` (no tilt, no counting, instant reveals).
5. **Accessibility:** visible focus rings, `alt` on images, labelled icon buttons, no horizontal
   scroll at 390px, readable contrast in light AND dark mode.
6. TypeScript: no `any`, no `@ts-ignore`.

## Redesign in progress
The site is being restructured to match the layout of a reference portfolio.
Full brief and steps: `docs/redesign/00-overview.md`.
- The reference is at `/tmp/ref-portfolio` (unlicensed). Study it for layout, spacing, effects,
  and motion only. **Never copy its files, text, images, colors, or fonts**, and never open its
  `.env` files.
- Branch `ui-redesign`, one commit per step, don't push.
