# Step 7: Final verification

Use the **ui-verifier** subagent for a full final check, fix everything it reports, and re-run
it until it's clean. In addition:

- `npm run build`, `npm run lint`, `npm test` pass; TypeScript issues fixed properly (no `any`, no `@ts-ignore`)
- `git diff main -- src/index.css tailwind.config.ts`: no existing color or font values changed (additions only)
- `node scripts/screenshots.mjs after` against `npm run dev` at 390 / 768 / 1024 / 1440px in light
  AND dark mode → `/tmp/screens/after/`. Look at every screenshot and fix overflow, overlap,
  clipped text, and low contrast.
- Compare with the `/tmp/screens/before/` reference shots and list the remaining layout or feel differences
- Keyboard test: tab through the nav, drawer, and buttons; focus rings are visible everywhere
- No horizontal scroll at 390px
- Don't push.

## Final message to me
1. A summary of changes for each step (1–7)
2. Files added and removed
3. Screenshot paths
4. Anything you need from me
