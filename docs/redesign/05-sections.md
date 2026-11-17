# Step 5: Page structure (match the reference's flow)

Do **ONE section per prompt**, then verify, commit, and stop.
Every section uses the same rhythm: `max-w-6xl mx-auto px-6 py-14`, `Panel`, `SectionHeading`,
and `SectionReveal`. All text comes from `src/data/portfolio.ts`.

In `src/pages/Index.tsx`: the order below, plus an empty `<ChatWidgetSlot />` with the comment
`{/* Floating AI chat button goes here later (bottom-right) */}`.

---

### 0. Navbar (refactor `Header.tsx` + `MobileNav.tsx`)
Sticky, glass background after scrolling, "SV" monogram (`logo1.png` if it fits), section links
with a scroll-spy active state (keep the gold underline animation), theme toggle, and a "Resume"
button. Mobile drawer: slides in, has a focus trap, closes on Esc and on link click.
Update `navItems` in `portfolio.ts` to match the new section order and ids.

### 1. Hero (`Hero.tsx`): 12-column grid
- **LEFT (`lg:col-span-7`) Panel:** badge "✦ Open to AI Engineer roles"; my name in Playfair,
  very large (`text-5xl` → `md:text-7xl`), heavy, tight leading; `personalInfo.title` in gold
  gradient; the summary trimmed to 2–3 lines (**ask me for the short version**); role chips
  (AI Application Engineer, Agentic AI, LLM Systems, Full-Stack); CTAs: [View Experience] (solid
  gold background, charcoal text), [View Projects] and [Download Resume] (outlined). Keep the
  typewriter line, smaller, below the summary.
- **RIGHT (`lg:col-span-5`) Panel "Recruiter Snapshot":** `sonali.jpeg` as a small rounded avatar
  with a thin gold ring; location, email, GitHub + LinkedIn rows with icons; a divider; a 2×2 grid
  of `stats` with `AnimatedCounter`; a divider; a "Core Stack" chip cloud (top ~10 skills).
- Remove the large rotating profile photo.

### 2. Impact strip
A thin row of 3–4 highlight metrics taken from my experience bullets (e.g. "60% less memory",
"~25% smaller bundle"). **Show me your picks before building it.**

### 3. Experience (`Experience.tsx`)
A vertical timeline with one Panel per role: role (Playfair), company · location, dates with a
calendar icon aligned right, the first 4 bullets visible with a "Show more" toggle for the rest,
and tech chips. Gold timeline dot and line in `hsl(var(--gold) / 0.4)`.

### 4. Projects (`Projects.tsx`)
Replace the tabs + carousel with a responsive grid (1 col → `md:2`) of TiltCard Panels:
thumbnail (my images, `aspect-video`, `object-cover`, subtle zoom on hover), eyebrow
(`shortTitle`), title, bullets, tech chips, and a GitHub link with an `ArrowUpRight` icon.
Staggered reveal.

### 5. Skills (`Skills.tsx`)
Grouped Panels in a 2–3 column grid, each with an eyebrow group title + chips. No progress bars.

### 6. Education + Certifications (`Education.tsx`, `Certifications.tsx`)
Compact Panels in a 2-column grid. Replace emoji icons with lucide icons.

### 7. Contact (`Contact.tsx`)
One wide Panel: heading, a one-line CTA, buttons for Email / LinkedIn / GitHub / Download Resume.
Keep my contact form ONLY if it actually submits somewhere; otherwise remove it and tell me.

### 8. Footer (`Footer.tsx`)
Minimal: © year, name, social icons, back-to-top link.
Keep ScrollToTop but move it to **bottom-left** (the bottom-right corner is for the future chat widget).

### After all sections
- Remove `About.tsx` and `Preloader.tsx` if they're unused (**ask first**).
- Optional (**ask first**): a short intro loader like the reference's, under 1.2s, skipped with
  reduced motion.
