Scaffold a new section component at components/sections/$ARGUMENTS/.

Create three files following the existing pattern:

1. `styles.ts` — export a {name}Styles const object with `as const`, containing Tailwind class strings for each element
2. `{PascalName}.tsx` — the component file that imports styles from ./styles and uses cn() from @/lib/utils if merging classes. Use server component by default (no "use client") unless interactivity is needed.
3. `index.ts` — barrel export: `export { PascalName } from "./PascalName"`

Naming conventions:
- Directory: kebab-case (e.g., why-choose)
- Component: PascalCase (e.g., WhyChoose)
- Styles export: camelCase + "Styles" suffix (e.g., whyChooseStyles)

After scaffolding, remind the user to add the import and component tag to app/page.tsx if it should be rendered.
