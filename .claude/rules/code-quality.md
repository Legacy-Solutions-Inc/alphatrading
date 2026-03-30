# Code Quality Rules

## Style Objects
- Extract ALL Tailwind classes to a styles.ts file as a const object with `as const`
- NEVER inline Tailwind class strings directly in JSX — always reference stylesObject.propertyName
- Exception: one-off utility overrides composed with cn() are acceptable

## Component Exports
- Every component directory MUST have an index.ts barrel export
- Use named exports, not default exports: `export { Hero } from "./Hero"`

## cn() Usage
- Import from `@/lib/utils`, never from clsx or tailwind-merge directly
- Use cn() when merging className props or conditional classes

## TypeScript
- Strict mode is enabled — no `any`, no `@ts-ignore`
- Use `React.ComponentProps<"element">` pattern for HTML element props (see input.tsx)
- Use `as const` on all style objects

## Form Handling
- The CTA contact form uses Formspree — NOT server actions
- Client-side rate limiting via localStorage (2 submissions/hour)
- NEXT_PUBLIC_FORMSPREE_ENDPOINT must be set or form throws at runtime

## Unused Code Awareness
- Testimonials section exists at components/sections/testimonials/ but is NOT active in page.tsx
- app/actions/ directory is empty and reserved for future server actions
