# Step 2: Effects layer

Recreate the reference's visual language in `src/index.css` `@layer components`, using
**my tokens only**. Read the effects rows of `docs/redesign/reference-inventory.md` first.

- `.panel`: frosted glass using my existing `--glass-bg` / `--glass-border`, backdrop-blur,
  `rounded-3xl` for big panels / `rounded-2xl` for cards, a layered soft shadow, and a faint gold
  inner glow `hsl(var(--gold) / 0.08)`.
- `.panel-hover`: `translateY(-2px)` + a stronger shadow + gold glow on hover, 250ms ease.
- `.bg-grid-mesh`: 1px grid lines in `hsl(var(--silver) / 0.10)`, ~52px cells, masked with a
  radial-gradient fade so they disappear toward the edges.
- `.ambient-orb`: large, absolutely positioned, heavily blurred circles: one gold
  `hsl(var(--gold) / 0.18)`, one silver/slate `hsl(var(--slate) / 0.18)`, `pointer-events-none`.
- **Page background:** replace the fixed `hero-bg.jpg` photo background (`Index.tsx` + `Hero.tsx`)
  with `bg-background` + grid mesh + 2 ambient orbs, like the reference. Keep the image file;
  just stop using it (unless I said otherwise in Step 1).
- `.chip`: pill-shaped, small, semibold, 1px border `hsl(var(--border))`, subtle background.
- `.eyebrow`: `text-xs uppercase tracking-[0.18em] text-muted-foreground`.
- Keep the existing `.text-gradient-gold` for the title and highlights.
- Remove the global h1–h6 `text-shadow` in `index.css` (it muddies text on glass panels).

## Done when
- The classes exist and the page background is replaced
- `git diff main -- src/index.css tailwind.config.ts` shows additions only
- Looks right in light and dark mode
