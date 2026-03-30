# Alpha Trade — Iloilo Logistics Landing Page

Single-page marketing site for Alpha Trade, a logistics company specializing in China-to-Iloilo (Philippines) imports, sea freight, customs brokerage, and warehousing.

## Quick Start

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint (flat config, core-web-vitals + typescript)
npm run start        # Start production server
```

Deployed on **Vercel** — push to main triggers production deploy.

## Environment Variables

Required in `.env.local`:

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Client | Formspree form submission URL |
| `RESEND_API_KEY` | Server | Resend email API key (unused currently) |
| `CONTACT_EMAIL` | Server | Recipient email address |
| `RESEND_FROM_EMAIL` | Server | Sender address for Resend |

## Architecture

Single route: `app/page.tsx` renders sections in order:
**Hero → WhyChoose → Services → Trust → CTA**

Layout (`app/layout.tsx`): Inter font + Navbar + main content + Footer + Vercel Analytics + Speed Insights + GTM

### Directory Map

```
app/
  layout.tsx          Root layout (Inter font, GTM, analytics)
  page.tsx            Home — composes section components
  globals.css         Tailwind v4 imports, CSS vars, custom animations
  actions/            Server actions (empty, reserved)
components/
  sections/           hero/ services/ trust/ why-choose/ cta/ testimonials/
  ui/                 button/ navbar/ footer/ input.tsx label.tsx textarea.tsx
lib/
  utils.ts            cn() helper (clsx + tailwind-merge)
public/images/        Static images (hero-shipping.png, alpha-icon.jpg, etc.)
```

### Component Patterns

- **Sections**: 3-file pattern — `SectionName.tsx` + `styles.ts` + `index.ts`
- **UI with variants**: 3-file pattern (e.g., button/)
- **Simple UI**: single file (input.tsx, label.tsx, textarea.tsx)
- Styles extracted to `styles.ts` as `const` objects — NOT inline in JSX
- All components use `cn()` from `@/lib/utils`

### Key Conventions

- Path alias: `@/*` maps to project root
- Shadcn: new-york style, neutral base, CSS variables, Lucide icons
- Install Shadcn components: `npx shadcn@latest add <component>`
- Remote images: only `images.unsplash.com` in next.config.ts
- CTA form: Formspree + client-side localStorage rate limiting (2/hour)
- Navbar: client component (scroll detection). Footer: server component
- Testimonials section exists but is NOT rendered in page.tsx

## Stack

Next.js 16.1.6 | React 19.2.3 | TypeScript strict | Tailwind CSS v4
Shadcn (new-york) | Radix UI | Lucide | CVA | Zod v4
Zustand | React Query | React Hook Form
Vercel Analytics + Speed Insights | GTM (GTM-PWZ784N3)

## .claude/ Directory

- `/rules` — Auto-loaded rules: code-quality, nextjs, ui
- `/commands` — Slash commands: review, scaffold-component, debug
- `/agents` — Subagents: researcher (read-only), qa (build + lint verification)

See individual files in `.claude/` for details.

## When Compacting

Always preserve:
- Files modified in this session
- Current task objective and progress
- Test/build command results
- Active branch context
