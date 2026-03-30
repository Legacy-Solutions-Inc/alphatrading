# Next.js Rules

## App Router
- Single route: app/page.tsx — this is a one-page marketing site
- Layout in app/layout.tsx handles: Inter font, Navbar, Footer, GTM, Analytics
- Do NOT create new routes without explicit instruction

## Server vs Client Components
- Default to server components (no directive needed)
- Add "use client" only when using: useState, useEffect, event handlers, browser APIs
- Current client components: Navbar (scroll detection), CTA (form state)
- Current server components: Hero, WhyChoose, Services, Trust, Footer

## Images
- Local images go in public/images/
- Remote images: only images.unsplash.com is allowed in next.config.ts
- Current pattern uses HTML img tags — next/image is NOT used

## Analytics and Tracking
- Vercel Analytics and Speed Insights are in layout.tsx — do NOT add duplicates
- GTM ID: GTM-PWZ784N3 hardcoded in layout, loaded via next/script afterInteractive

## Environment Variables
- NEXT_PUBLIC_ prefix is required for client-side access
- Only NEXT_PUBLIC_FORMSPREE_ENDPOINT is used client-side
- RESEND_* vars are server-only (currently unused)
