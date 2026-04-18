# UI Rules (Tailwind + Shadcn)

## Tailwind CSS v4
- Config lives in app/globals.css via @theme inline — there is NO tailwind.config.ts
- PostCSS plugin: @tailwindcss/postcss (see postcss.config.mjs)
- Animation library: tw-animate-css
- Dark mode: class-based via @custom-variant dark (&:is(.dark *))

## Design Tokens (CSS Variables in globals.css :root)
- Primary: --primary (#0c3b6a navy / dark: #3b9cff)
- Accent: --accent (#1a73e8 blue)
- Foreground: --foreground (#0a1628)
- Use semantic token names (bg-primary, text-muted-foreground) where possible
- Exception: styles.ts files currently use raw hex values — match existing pattern per section

## Custom CSS Classes (defined in globals.css)
- None. Custom animations, gradient text, and glassmorphism utilities were removed in the aesthetic cleanup pass. Use Tailwind's built-in utilities and tw-animate-css classes (e.g. `animate-in fade-in`) where motion is needed.

## Shadcn Components
- Style: new-york | Base color: neutral | CSS variables: enabled
- Icons: import from lucide-react
- Install: npx shadcn@latest add <component>
- Existing: button (CVA variants), input, label, textarea
- Button uses class-variance-authority with variants in styles.ts

## Color Palette (raw hex values in styles.ts files)
- Navy: #0c3b6a (primary buttons, headings)
- Blue: #1a73e8 (accent, links, highlights)
- Dark bg: #0a1628 | Card dark: #111d32
- Muted text: #5a6f87 / dark: #8fa3bf
- Border: #e2e8f0 / dark: #1e3351
