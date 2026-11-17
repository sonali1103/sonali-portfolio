# Step 6: Cleanup and metadata

## index.html
- Title: `Sonali Vedaraju — AI Application Engineer`
- A real meta description (1–2 sentences from my summary); `og:title`, `og:description`
- `og:image` = `https://sonali-vedaraju.vercel.app/og-image.png`. Create a 1200×630
  `public/og-image.png` in MY palette with name + title (render an HTML template with Playwright).
- `twitter:card` = `summary_large_image`
- Remove all TODO comments, the broken `https://Sonali Vedaraju/...` URLs, and the
  `@Sonali Vedaraju` `twitter:site` tag.

## Files
- Rename the resume to `public/Sonali_Vedaraju_Resume.pdf` and update every link (with a
  `download` attribute using that filename).
- Root `.gitignore` (node_modules, dist, .env*, /tmp, Playwright artifacts) and `git rm -r --cached dist`.
- `package.json` `"name": "sonali-portfolio"`. Delete `bun.lockb`.
- Move `COLOR_IMPROVEMENTS.md`, `DARK_THEME_COMPATIBILITY.md`, and `VISIBILITY_IMPROVEMENTS.md`
  into `docs/archive/`.
- Rewrite `README.md` for this portfolio (stack, run commands, where content lives, deploy).

## Unused code
Remove unused shadcn components in `src/components/ui/` and unused deps (e.g.
`@tanstack/react-query`, `next-themes`, `recharts`, `react-day-picker`) **ONLY if nothing imports
them**. Check with grep, and list everything you removed.

## Done when
- Build passes after the removals; the resume downloads under the new name; the meta tags are valid
