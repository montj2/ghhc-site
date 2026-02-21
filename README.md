# God's Hygiene Help Center (GHHC) - Modern Web Platform

A high-performance, modern replacement for the GHHC WordPress site, built with **Next.js**, **TypeScript**, and **Shadcn UI**.

## 🚀 Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Backend/CMS:** [Supabase](https://supabase.com/)
- **Deployment:** Optimized for [Vercel](https://vercel.com/)
- **Integrations:** GiveButter (Donations), Mailchimp (Newsletter)

## 📁 Project Structure
- `src/app`: Page routes (Home, About, Blog, Calendar, Donate, Programs)
- `src/components/ui`: Base accessible components from Shadcn
- `src/components/layout`: Shared layout elements (Header, Footer)
- `src/components/integrations`: Custom connectors for GiveButter and Mailchimp
- `src/lib`: Utilities including Supabase client configuration

## 🛠 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Design Principles
- **Clarity over Clutter:** High whitespace, bold typography, and a focused user journey.
- **Performance:** Static generation where possible for instant page loads.
- **Mobile First:** Fully responsive design using Tailwind's grid and flex utilities.
