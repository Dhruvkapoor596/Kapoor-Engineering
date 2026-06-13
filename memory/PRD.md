# Kapoor Engineering Works — PRD

## Original Problem Statement
> https://github.com/Dhruvkapoor596/Kapoor-Engineering
>
> Here is the link to my half completed website work — kindly refine it as much as you can without changing the looks of the website. Just add important features, remove unnecessary files and codes, and give me a fully functional website code right now **without any database integration and backend**. That will be done afterwards along with the deployment.

## Business Context
- **Client**: Kapoor Engineering Works (KEW)
- **Industry**: Heavy industrial supply + machining / fabrication
- **Location**: G-491, Matsya Industrial Area (MIA), Alwar, Rajasthan, India
- **Founded**: 2007
- **Audience**: B2B — factory owners, plant managers, procurement teams across North India

## Architecture
- **Framework**: Next.js 16.1.6 (App Router) + React 19.2.3
- **Styling**: Tailwind CSS 3.4 (with custom industrial colour palette)
- **Fonts**: Oswald + Roboto + Roboto Slab (via `next/font/google`)
- **Icons**: lucide-react
- **Animations**: framer-motion (installed, ready for future use)
- **Storage**: None (frontend-only as requested)
- **Deploy target**: Vercel / static export-friendly

## File Structure
```
/app/frontend
├── app/
│   ├── layout.js           # Root layout, fonts, SEO, navbar, footer, floating actions
│   ├── page.js             # Home (Hero + About teaser + Products + Services + Projects)
│   ├── globals.css         # Tailwind base + smooth scroll
│   ├── not-found.js        # Custom 404 — "Off The Blueprint"
│   ├── about/page.js       # Full About page
│   ├── products/page.js    # Products listing
│   ├── services/page.js    # Services listing
│   ├── projects/page.js    # Projects listing
│   └── contact/page.js     # Contact page (uses ContactForm)
├── components/
│   ├── Navbar.js           # Sticky glass nav with mobile drawer, active link highlight, mobile call icon
│   ├── Footer.js           # Branded footer with clickable phone/email + categories
│   ├── Hero.js             # Home hero with backdrop image & gradient
│   ├── About.js            # About teaser block (homepage)
│   ├── Products.js         # 4-card product grid
│   ├── Services.js         # 3-card service grid
│   ├── Projects.js         # 3-card project grid + client logos
│   ├── ContactForm.js      # Validated form with mailto: handoff + success state
│   └── FloatingActions.js  # Persistent WhatsApp + back-to-top buttons
├── data/
│   ├── products.js         # Product catalogue (4 SKUs)
│   └── projects.js         # Projects + clients list
├── lib/
│   └── site.js             # Single source of truth: phone, email, address, WhatsApp helpers
└── public/logos/           # All brand image assets
```

## Implemented (Jan 2026)

### Bug Fixes (the site was actually broken on Linux/Vercel before)
- ✅ Fixed `data/products.js` image paths — were `/public/Logos/...` (wrong), now `/logos/...`
- ✅ Renamed `public/Logos/` → `public/logos/` to match all code references (Linux case-sensitivity)
- ✅ Deleted orphaned `components/Contact.js` (conflicted with `app/contact/page.js`)
- ✅ Removed broken footer links to non-existent pages (`/our-history`, `/sustainability`, `/sales-network`, `/privacy-policy`, `/terms-of-service`)

### Cleanup
- ✅ Removed `Help/` folder, unused boilerplate SVGs, leftover `README.md`, `.vscode/`, stale `package-lock.json`
- ✅ Consolidated all business info into `lib/site.js` (single source of truth)

### New Features (frontend-only)
- ✅ **Working contact form** with live validation (name, email format, message ≥10 chars, consent) and `mailto:` handoff to `kapooreng149@gmail.com` plus success state with fallback CTAs
- ✅ **Floating WhatsApp button** (`+91 9414846109` pre-filled message) — persistent across all pages
- ✅ **Back-to-top button** appears after 400px scroll
- ✅ **Mobile-first navbar improvements**: phone call quick-action on mobile, auto-close on route change, active-link yellow highlight
- ✅ **Custom 404 page** "Off The Blueprint" matching brand
- ✅ **Google Maps link** on contact page (auto-opens directions to MIA Alwar workshop)
- ✅ **SEO**: Open Graph metadata, title templates, per-page descriptions, theme-color, viewport
- ✅ **Auto-calculated experience badge** (`years = currentYear - 2007`) so "15+ years" never goes stale
- ✅ **Clickable footer phone/email** (tel: and mailto:) for one-tap contact

### Polish
- ✅ Added `sizes` props to all `<Image fill>` for proper responsive loading
- ✅ Added `data-scroll-behavior="smooth"` on `<html>` (Next.js 16 recommendation)
- ✅ All interactive elements have unique `data-testid` attributes

## Testing
- **Testing agent iteration 1**: 16/16 frontend flows passed (100% — see `/app/test_reports/iteration_1.json`)
- No outstanding bugs

## Backlog (P1 — when user is ready)
- [ ] Convert contact form mailto: → real backend (FastAPI + email service like Resend/SendGrid)
- [ ] Add admin dashboard for enquiries (when backend is built)
- [ ] Replace static Unsplash images with real workshop photography
- [ ] Add scroll-reveal animations using framer-motion (library already installed)
- [ ] Individual product detail pages (`/products/[slug]`) with specs sheets

## Backlog (P2 — nice-to-have)
- [ ] Blog/news section for SEO ("Industrial Steel Buying Guide", etc.)
- [ ] Multi-language (Hindi + English) toggle for local SEO
- [ ] Image gallery / lightbox for project case studies
- [ ] Client testimonials carousel
- [ ] GST invoice download for B2B repeat customers
- [ ] Inventory status indicator (in-stock counts on Products page)

## Deployment Notes
- Site is frontend-only, deploys cleanly to Vercel (preferred), Netlify, or any static host (after `next build && next export` if needed).
- No environment variables required.
- For backend phase: introduce `NEXT_PUBLIC_API_URL` env var and replace mailto: with `fetch(POST /api/contact)`.
