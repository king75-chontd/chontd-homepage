# C.H. Oriented – Company Website

Next.js corporate site for C.H. Oriented.  
**Tagline:** Connecting Health Beyond Borders.

## Tech

- Next.js (App Router), Tailwind CSS
- Supabase (contact form DB; CMS-ready for blog)
- Dark theme (deep green / charcoal), minimal, institutional
- Mobile-first, scalable for investor page, partner portal, dashboard

## Setup

1. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

2. **Environment**

   Copy `.env.local.example` to `.env.local` and set:

   - **Supabase (contact form):** `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
   - **Optional chat:** `AI_API_KEY`

   In Supabase SQL Editor, run `supabase-contact-table.sql` to create the `contact_inquiries` table.

3. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Structure

- **Hero** – Headline, subheadline, Partnership Inquiry / Explore Our Network
- **About** – Philosophy, Mission & Vision, Core Values, Founder Message
- **Business Divisions** – 4 cards (Medical Practice, Global Patient Network, Medical Device & OEM, Digital Healthcare) with “Learn More” → subpages
- **Projects & Pipeline** – Patent, R&D, Partnerships, Expansion Roadmap
- **Insights / Media** – Placeholder for CMS blog (Industry Insights, Press Releases, Global Healthcare Trends)
- **Contact** – Form (Supabase), email, office, social placeholder

## Multi-language (EN / KO) & responsive

- **i18n:** Two locales: **English (en)** and **Korean (ko)**. Implemented with `next-intl`. URLs: `/en`, `/ko`, `/en/divisions/...`, `/ko/insights`, etc. Locale switcher in header (desktop and mobile).
- **Responsive:** Mobile-first; breakpoints `sm` (640px), `md` (768px), `lg` (1024px) cover mobile, tablet, and desktop. Viewport meta and touch-friendly tap targets included.
- **GA4:** Uncomment and set the measurement ID in `src/app/layout.tsx`.
