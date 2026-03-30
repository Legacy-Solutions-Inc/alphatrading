Review the current codebase for issues. Check:

1. All section components follow the 3-file pattern (SectionName.tsx + styles.ts + index.ts)
2. No inline Tailwind strings in JSX — all extracted to styles.ts
3. All imports use the @/ path alias
4. Client components have "use client" directive; server components do not
5. No TypeScript errors: run `npm run lint`
6. Form submission: verify NEXT_PUBLIC_FORMSPREE_ENDPOINT is referenced correctly
7. No unused imports or dead code
8. Styles objects use `as const`
9. All barrel exports in index.ts are present and correct

Report findings grouped by severity: errors, warnings, suggestions.
