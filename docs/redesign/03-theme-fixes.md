# Step 3: Theme and contrast fixes

- Replace every hard-coded inline color in components (`#FFFFFF`, `#D4AF37`, `#E8E8E8`, and their
  `textShadow` styles in Hero, Projects, Contact, Experience, Skills, etc.) with theme-aware
  classes: `text-foreground`, `text-muted-foreground`, `text-gold`. White headings on the light
  background are currently almost invisible; fix it. Use the bug list (d) in
  `docs/redesign/reference-inventory.md`.
- **No theme flash:** add an inline script in `index.html` `<head>` that applies the saved or system
  theme to `<html>` BEFORE first paint.
- Move the theme toggle from the floating bottom-left button into the navbar (reference style).
  Keep the same localStorage key `theme`.
- Delete `src/App.css` (unused Vite boilerplate). Check nothing imports it first.

## Done when
- `grep -rnE "#[0-9a-fA-F]{3,6}|textShadow" src/components src/pages --include=*.tsx`
  (excluding `ui/`) returns nothing
- Headings are readable in light mode, and there's no flash on reload in dark mode
