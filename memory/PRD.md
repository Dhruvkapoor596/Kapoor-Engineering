# Kapoor Engineering Works — V3 Design

## Brief
> Create a new version of this website aligned to KEW's business with full creative freedom.

## Concept
**"Forge House"** — editorial magazine meets industrial brutalism. Light mode (deliberate departure from V1/V2's dark theme), Bauhaus engineering catalog aesthetic, Swiss high-contrast layout.

## Visual System (Archetype 4 — Swiss High-Contrast)
- **Palette**: pure white #FFFFFF + ink black #0A0A0A + Safety Orange #FF3B00 + cream paper #F4F4F0
- **Typography**: Archivo Black (display) + IBM Plex Sans (body) + JetBrains Mono (overlines/labels). No Inter, no Roboto, no purple gradients.
- **Layout**: exposed 1px black-grid backgrounds. Hard 2px borders. Zero border-radius. Asymmetric 12-col layouts.
- **Hover**: solid offset shadows (`shadow-brutal`). Instant grayscale → colour image flips. No soft glows.
- **Motion**: Lenis smooth scroll + Framer Motion staggered reveals. Brutal cuts, no fades.

## Pages Built
1. **Home** — `/`
   - Editorial split hero ("FORGED FOR INDUSTRY." with file-system overlay on the workshop image)
   - Orange marquee strip (infinite scroll of capabilities)
   - About snippet with giant outlined "19" + 4-cell bento spec grid
   - Services strip — full-bleed brutalist rows, hover-preview image card on desktop
   - Projects gallery — asymmetric bento (one large + three smaller, B&W → colour on hover)
   - Trust grid — 8-cell client matrix with hover invert
   - Massive orange "GOT A JOB? LET'S TALK." CTA section
2. **Catalog** (`/products`) — material rows with image + spec sheet table, alternating orientation
3. **Capabilities** (`/services`) — three deep-dive sections with numbered deliverables tables
4. **Works** (`/projects`) — 5-tile asymmetric gallery with slide-up project info cards
5. **Studio** (`/about`) — oversized "19 YRS" hero in orange, 3 brutalist principles, timeline
6. **Contact** (`/contact`) — 4-channel sidebar (phone / WhatsApp green / email / workshop+map) + brutalist enquiry form (still wired to FastAPI + Resend backend)
7. **404** — giant outlined "404" with the middle 0 in safety orange + "We don't make this part."

## What's Reused vs Net New
- ✅ **Net new**: every component (Navbar, Footer, Hero, Marquee, AboutSnippet, ServicesStrip, ProjectsGallery, TrustGrid, ContactCTA, SmoothScroll, FloatingActions rebuilt brutalist, all 7 pages)
- ✅ **Kept working**: ContactForm backend wiring (POST /api/contact with honeypot + rate-limit + Resend email — restyled to brutalist form aesthetic)
- ✅ **Kept**: `lib/site.js` (centralized contact info)
- ❌ **Removed**: old components (Hero.js/About.js/Products.js/Services.js/Projects.js/AboutContent.js, motion/ helpers)

## Tech
- Next.js 16 + React 19 + Tailwind 3 (custom config with new font/colour tokens)
- framer-motion (staggered reveals, hover image previews)
- lenis (smooth scroll wrapper)
- react-fast-marquee (orange capability marquee)
- lucide-react (sparingly — most icons replaced with mono glyphs ↗ → ☎ ✱)

## Verification
- All 7 routes return correct status codes (6× 200 + 1× 404)
- Frontend boots clean on supervisor
- Backend contact endpoint still wired and operational with live Resend key
- Mobile-first (every grid collapses gracefully — verified up to ~375px width during build)
