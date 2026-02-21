# GitHub Copilot Instructions

## Key Commands
- `npm run dev` (starts Next.js App Router dev server on `localhost:3000`).
- `npm run build` (creates production `.next` output and validates TypeScript).
- `npm run start` (serve the production build locally after running `npm run build`).
- `npm run lint` (runs ESLint across the `src/` tree; use this for smaller localized checks as well).
- **Test note:** There is currently no automated test suite configured—`npm run lint` is the closest check. Add a dedicated `test` script when unit or integration suites exist.

## Architecture Overview
- The project is a **Next.js 16 App Router** site. All routes live under `src/app`; each page exports a default component, and `src/app/layout.tsx` wraps the app with Geist fonts, the sticky `Header`, and a simple footer.
- Shared presentation primitives live under `src/components/ui` (Shadcn-derived `Button`, `Card`, `Input`, `NavigationMenu`, etc.) and rely on `cn()` from `src/lib/utils` plus `class-variance-authority` variant definitions.
- Layout pieces stack in `src/components/layout`, with `Header` pulling a sticky navigation menu that enumerates the `programs` array and uses `NavigationMenu` from the UI primitives.
- Integrations that touch external services live under `src/components/integrations`: `MailchimpSignup` is a client-side form stub (logs to console and shows an alert) and `GiveButterButton` simply opens the GiveButter campaign URL—replace these placeholders with real SDK/API wiring and load any required scripts globally (e.g., in `layout.tsx`).
- Supabase connectivity is centralized in `src/lib/supabase.ts`; the client expects `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.
- Program detail pages live at `src/app/programs/[slug]/page.tsx`. They read a static `programsData` record, call `notFound()` for absent slugs, and present CTA panels that reuse the shared UI components.

## Key Conventions
- Keep UI component usage consistent: wrap `className` merges through the `cn()` helper and prefer the variant helpers exported from each `components/ui` module (e.g., `buttonVariants`) when changing styles.
- All integration components are `"use client"` and keep styling/presentation declarative; wire in actual scripts or API calls only after confirming the global layout can load them safely.
- When adding new programs, update both the `programs` array in `src/components/layout/header.tsx` (navigation menu) and the `programsData` record in `src/app/programs/[slug]/page.tsx` so navigation items and detail pages stay in sync.
- Environment-specific values (Supabase endpoints and keys) live in `.env.local`; the repo purposely does not check these in.
- Use Shadcn UI cards and buttons (e.g., `Card`, `Button`, `CardContent`) for consistent typography, spacing, and responsive behavior—these components already include Tailwind + CVA concerns.

## AI Assistant Configuration Notes
- No CLAUDE.md, AGENTS.md, CONVENTIONS.md, AIDER_CONVENTIONS.md, .cursorrules, .windsurfrules, or .clinerules files were present, so this file is the canonical Copilot guidance.
