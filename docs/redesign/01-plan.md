# Step 1: Investigate and plan (NO code changes to src/)

1. Make sure `/tmp/ref-portfolio` exists. If not:
   `git clone --depth 1 https://github.com/akshay9396/AkshayPortfolio /tmp/ref-portfolio`
2. Install Playwright as a dev dependency (`npm i -D playwright` + `npx playwright install chromium`).
3. Write `scripts/screenshots.mjs` (NOT in `src/`):
   - Usage: `node scripts/screenshots.mjs <before|after> [url...]`
   - `before`: full-page shots of https://sonali-vedaraju.vercel.app and
     https://akshay-kanade.vercel.app at 1440 and 390px wide
   - `after`: http://localhost:8080 at 390 / 768 / 1024 / 1440px
   - For my site: both light and dark (set localStorage `theme` before load)
   - Scroll to the bottom slowly first so scroll animations trigger, then capture
   - Save to `/tmp/screens/<before|after>/<site>-<width>-<theme>.png`
4. Run it with `before`, and view the screenshots.
5. Use the **reference-analyst** subagent to write `docs/redesign/reference-inventory.md`
   with sections (a)–(e): my tokens, the reference inventory, the mapping table, bugs and
   leftovers, and questions for me.
6. Show me a short version of the plan plus the questions. **STOP and wait for my approval.**

## Done when
- `scripts/screenshots.mjs` works and the before screenshots exist
- `docs/redesign/reference-inventory.md` is complete
- No files in `src/` changed
