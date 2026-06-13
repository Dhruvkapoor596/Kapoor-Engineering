# Kapoor Engineering Works — PRD

## Original Problem Statement
> https://github.com/Dhruvkapoor596/Kapoor-Engineering
>
> Here is the link to my half completed website work — kindly refine it as much as you can without changing the looks of the website. Just add important features, remove unnecessary files and codes, and give me a fully functional website code right now without any database integration and backend. That will be done afterwards along with the deployment.

## Architecture (current)
- **Frontend**: Next.js 16.1.6 (App Router) + React 19 + Tailwind 3 + framer-motion + lucide-react. Runs on port 3000 via supervisor (`yarn start` → `next dev`).
- **Backend**: FastAPI on port 8001 (under `/api/*` ingress route). Endpoints: `/api/health`, `/api/contact`, plus the original `/api/status` echo.
- **Email**: Resend Python SDK 2.30.1 (`RESEND_API_KEY` env var; sender `onboarding@resend.dev`, recipient `kapooreng149@gmail.com`).
- **DB**: MongoDB (used only for enquiry archival — no auth/data otherwise).

## File Structure
```
/app
├── backend/
│   ├── server.py            # /api/health, /api/contact, /api/status, Resend wiring, honeypot, rate-limit, MongoDB archival
│   ├── .env                 # MONGO_URL, DB_NAME, RESEND_API_KEY (blank — user adds), SENDER_EMAIL, RECIPIENT_EMAIL
│   ├── requirements.txt     # FastAPI + resend SDK
│   └── tests/test_contact_api.py   # 8/8 pytest cases
└── frontend/
    ├── app/                 # layout.js, page.js, about/, products/, services/, projects/, contact/, not-found.js
    ├── components/
    │   ├── Navbar.js, Footer.js, Hero.js, About.js, Products.js, Services.js, Projects.js
    │   ├── ContactForm.js   # POST to /api/contact w/ honeypot + error UI
    │   ├── FloatingActions.js  # Persistent WhatsApp + back-to-top
    │   ├── AboutContent.js  # Client component for /about (animated)
    │   └── motion/
    │       ├── Reveal.js    # Reveal, Stagger, StaggerItem
    │       ├── CountUp.js   # Animated number counter
    │       └── MagneticLink.js  # Magnetic-hover CTAs
    ├── data/products.js, projects.js
    ├── lib/site.js          # Centralised phone/email/address + WhatsApp/tel/mailto helpers
    ├── public/logos/        # Brand image assets
    └── .env                 # REACT_APP_BACKEND_URL + NEXT_PUBLIC_BACKEND_URL
```

## Implemented

### Iteration 1 (Jan 13, 2026)
- Migrated GitHub repo into workspace, fixed 3 production-breaking bugs (image paths, case-sensitive folder, orphaned Contact.js)
- Cleaned junk (`Help/`, unused SVGs, `.vscode/`, stale lockfile, dead footer links)
- Added: validated contact form (mailto: handoff at the time), floating WhatsApp + back-to-top, custom 404 page, Google Maps link, full SEO metadata, auto-calculated years-of-experience, clickable footer phone/email, centralized site config (`lib/site.js`)
- 16/16 frontend flows passed

### Iteration 2 (Jan 13, 2026)
- **Backend + Resend integration**:
  - `POST /api/contact` with: Pydantic validation, honeypot anti-spam (`website` field), in-memory rate limit (5/hour per IP), HTML+plain-text email template, MongoDB archival, async non-blocking Resend send (`asyncio.to_thread`), `reply_to` set to enquirer
  - `GET /api/health` returns email config status
  - Pytest suite (8/8 passing): /app/backend/tests/test_contact_api.py
- **Frontend contact form rewired**: now POSTs to `/api/contact`, shows server error in `data-testid='contact-server-error'` with backend's `detail` text, hidden honeypot input, success state UI unchanged
- **Framer-motion scroll-reveal animations**:
  - Hero: parallax background image, staggered text entrance, magnetic CTA buttons that follow cursor
  - About/Products/Services/Projects: Reveal + Stagger card cascades
  - CountUp animated number on "Years Experience" stat (both homepage and About page)
  - Respects `prefers-reduced-motion` user setting
- 100% pass — 8/8 backend + 16/16 frontend

## Pending User Action
- ⏳ **Add Resend API key**: Sign up at https://resend.com → API Keys → Create. Paste into `RESEND_API_KEY` in `/app/backend/.env`. Until done, valid form submissions return a friendly 503 directing users to call/WhatsApp.

## Backlog (P1)
- Replace stock Unsplash photos with real workshop photography (user has not provided yet — kept Unsplash for now)
- Verify own domain in Resend (e.g., `kapoorengineering.in`) so emails come from `enquiries@kapoorengineering.in` instead of `onboarding@resend.dev`
- Move rate-limiter to Redis (in-memory bucket resets on restart and doesn't see real IPs through Kubernetes ingress)
- Tighten CORS to actual production origin after deployment
- Trust `X-Forwarded-For` header for rate-limit key

## Backlog (P2)
- Individual product detail pages (`/products/[slug]`)
- Hindi/English language toggle
- Blog/news section for local SEO
- Project lightbox gallery
- Testimonials carousel
- Schema.org LocalBusiness JSON-LD for Google local-pack visibility
- Admin dashboard to view archived enquiries

## Deployment Notes
- Frontend: Next.js, ready for Vercel
- Backend: FastAPI, deploys anywhere (Railway, Render, Fly, etc.). Needs `MONGO_URL`, `DB_NAME`, `RESEND_API_KEY`, `RECIPIENT_EMAIL`, `SENDER_EMAIL`.
- After deployment update `NEXT_PUBLIC_BACKEND_URL` in frontend env to the public backend URL.
