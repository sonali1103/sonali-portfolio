# UI redesign: overview

**Goal:** redesign my portfolio (https://sonali-vedaraju.vercel.app) so its LAYOUT, STRUCTURE,
EFFECTS, and MOTION closely match https://github.com/akshay9396/AkshayPortfolio
(live: https://akshay-kanade.vercel.app), keeping my stack, colors, fonts, and content
(see the Hard rules in `CLAUDE.md`).

**Out of scope:** the reference's AI Chat Twin (`components/twin.tsx`,
`components/widgets/TwinFloatingButton.tsx`, `app/api/chat`), JD Analyzer
(`components/sections/JDAnalyzer.tsx`, `app/api/analyze`), `backend/`, `terraform/`, `scripts/`.
Only mount an empty `<ChatWidgetSlot />` (see Step 5).

## Steps
| Step | File | Mode | Subagent | Commit |
|------|------|------|----------|--------|
| 1 | `01-plan.md` | **Plan mode**, no code | `reference-analyst` | `docs: redesign inventory` |
| 2 | `02-effects.md` | normal | `ui-verifier` | `feat(ui): effects layer` |
| 3 | `03-theme-fixes.md` | normal | `ui-verifier` | `fix(theme): contrast + no-flash theme` |
| 4 | `04-building-blocks.md` | normal | `ui-verifier` | `feat(ui): shared building blocks` |
| 5 | `05-sections.md` | normal, **one section per prompt** | `ui-verifier` | `feat(<section>): redesign` |
| 6 | `06-cleanup.md` | normal | `ui-verifier` | `chore: cleanup + metadata` |
| 7 | `07-verify.md` | normal | `ui-verifier` | `fix: final polish` |

## How to run it
One-time setup in the terminal:
```bash
git clone --depth 1 https://github.com/akshay9396/AkshayPortfolio /tmp/ref-portfolio
mkdir -p /tmp/screens
git checkout -b ui-redesign
claude
```

**Step 1** (press Shift+Tab until you're in plan mode):
```
Do @docs/redesign/01-plan.md
```

**Steps 2–4, 6, 7**, one at a time:
```
Do @docs/redesign/02-effects.md. Follow its "Done when" list, then use the ui-verifier subagent,
fix what it reports, commit, and stop.
```

**Step 5**, one section per prompt:
```
Do section 1 (Hero) of @docs/redesign/05-sections.md. Then use the ui-verifier subagent, fix
what it reports, commit, and stop.
```

Between steps: check `npm run dev` yourself, then `/clear` to start the next step with a fresh
context. The step files and git history keep track of progress.
If something looks wrong, drag a screenshot into the terminal and describe the problem.

## Progress
- [ ] 1 Plan  - [ ] 2 Effects  - [ ] 3 Theme fixes  - [ ] 4 Building blocks
- [ ] 5 Sections: Navbar · Hero · Impact · Experience · Projects · Skills · Edu/Certs · Contact · Footer
- [ ] 6 Cleanup  - [ ] 7 Verify
