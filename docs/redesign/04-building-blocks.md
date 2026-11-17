# Step 4: Shared building blocks

Write my own versions (no copying) in `src/components/ui-custom/`, with hooks in `src/hooks/`:

| Component / hook | Behavior |
|---|---|
| `Panel` | GlassCard equivalent using `.panel` / `.panel-hover`; `as` prop, `size="lg" or "card"` |
| `SectionReveal` | fade + slide-up on scroll, staggered children, runs once |
| `TiltCard` | subtle 3D tilt, pointer (`(hover: hover)`) devices only |
| `AnimatedCounter` | counts up when visible; supports a suffix like `+` / `%` |
| `SectionHeading` | eyebrow label + Playfair heading + short gold underline bar |
| `ScrollProgress` | reuse/refactor the existing one in `ScrollEnhancements.tsx` |
| `useScrollSpy(ids)` | returns the active section id (IntersectionObserver) |
| `useReducedMotion()` | `prefers-reduced-motion` (framer-motion's hook is fine) |

ALL motion respects reduced motion: no tilt, counters show the final number, reveals are instant.

## Done when
- Every component is typed (no `any`) and used at least once, or ready for Step 5
- Reduced motion verified (DevTools → Rendering → emulate prefers-reduced-motion)
