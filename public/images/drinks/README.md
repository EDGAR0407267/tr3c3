# Drink assets — TR3C3 cold bar

Optional real photos / 3D renders for each cold drink. The site works fully
without these files: when an image is missing, the CSS glass render in
`src/components/DrinkVisual.astro` is used as an elegant placeholder.

## How to add a real image

1. Export a transparent **WebP** (preferred) or PNG of the drink, ideally a
   tall studio/hero shot on a transparent background.
   - Card size target: ~340×480px (display ~8.4rem wide)
   - Featured/hero target: ~520×720px (display ~13rem wide)
   - Keep each file lean (aim < 80 KB for cards, < 140 KB for the hero).
2. Name it after the drink `id` from `src/data/drinks.ts`, e.g.
   `matcha-orange.webp`, `iced-mocha.webp`, `cold-brew.webp`.
3. Drop it in this folder (`public/images/drinks/`).
4. In `src/data/drinks.ts`, add the `image` field to that drink:

   ```ts
   {
     id: "matcha-orange",
     // ...
     image: "/images/drinks/matcha-orange.webp",
   }
   ```

That's it. `DrinkVisual.astro` automatically swaps the CSS glass for the photo,
keeps the ambient glow + shadow + reflection + 3D tilt around it, and lazy-loads
the image with explicit `width`/`height` to avoid layout shift.

## Notes

- Use descriptive, optimized assets only — no external/unlicensed images.
- Mixed mode is fine: some drinks can use photos while others stay on the CSS
  render. They share the same card layout.
- The `id` is the single source of truth linking data ↔ asset file.
