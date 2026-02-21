# GHHC Site Roadmap - 2026

This roadmap outlines the path from our modern Next.js prototype to a full production launch.

## ✅ Completed (Milestone 1: Prototype Foundation)
- [x] **Next.js 15 Scaffold:** Core architecture and routing.
- [x] **Shadcn UI Setup:** Installed button, card, calendar, navigation, and badge components.
- [x] **Page Implementation:** Home, About, Blog Feed, Calendar, and Donate layouts.
- [x] **Program Templates:** Dynamic routing for specific GHHC initiatives (e.g., School Hygiene Boxes).
- [x] **Integration Connectors:** Prepared `GiveButterButton` and `MailchimpSignup` components.
- [x] **Supabase Client:** Established `src/lib/supabase.ts` and data types.

## 🏗 In Progress (Milestone 2: Data & Connectivity)
- [ ] **Supabase Backend Implementation:**
  - Create `posts` table for the blog.
  - Create `events` table for the calendar.
  - Create `programs` table for initiative details.
- [ ] **Mailchimp API Connection:** Finalize the form handler in `MailchimpSignup`.
- [ ] **GiveButter Overlay:** Integrate the GiveButter JS snippet in `layout.tsx` for seamless overlay donations.

## 📅 Upcoming (Milestone 3: Polish & Launch)
- [ ] **Content Migration:**
  - Audit and migrate Tammy's story and "Meet the Team" bios from the old site.
  - Transfer existing blog posts to Supabase.
- [ ] **Visual Identity Enhancements:**
  - Finalize color palette (primary/secondary) to match GHHC brand.
  - Add high-quality images for program pages and hero sections.
- [ ] **SEO & Metadata:**
  - Implement dynamic metadata for blog posts and programs.
  - Configure OpenGraph images for social sharing.
- [ ] **Analytics & Tracking:** Set up Vercel Analytics or Google Analytics.
- [ ] **Vercel Deployment:** Connect the GitHub repository to Vercel for CI/CD.

## 🌟 Long-Term Goals
- [ ] **Volunteer Portal:** A simple dashboard for volunteers to sign up for events.
- [ ] **Merchandise Store:** A small store using Supabase and Stripe for GHHC shirts/gear.
- [ ] **Automated Newsletter:** Triggered email updates via Mailchimp when new blog posts are published.
