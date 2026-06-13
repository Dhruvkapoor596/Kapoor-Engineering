# Kapoor Engineering Works — V4: Content Merge (V3 → V1 design)

## Brief
> User wanted V3 "Forge House" *content/structure* layered into their **original V1 design**'s visual identity. Keep V1 dark theme + amber accent + Oswald/Roboto fonts + rounded-3xl cards. Add V3's deeper sections: product catalog with spec tables, services deep-dives with deliverables, projects case studies, about with principles + timeline, contact with 4-channel + map + working form.

## Branch Status (GitHub)
- 🟢 `main` — user's original "half-completed" code (untouched)
- 🟢 `V2-Refined` — dark + amber refined version (Jan 13)
- 🟢 `V3-forge-house` — brutalist editorial design (Jan 13, pushed by user)
- 🔄 Workspace `/app/` — **V4 content merge** (this iteration, ready to push as new branch)

## Architecture
- Next.js 16 App Router + React 19 + Tailwind 3
- framer-motion + lucide-react
- FastAPI + Resend (live key configured) + MongoDB archival

## Pages Delivered
1. **Home** (`/`) — V1 dark hero "Innovating Precision For Your Industry" with amber CTA, About teaser (auto-calc 19+ years), 4-card product grid, 3-card services with sticky-aside, 3-card projects + 8-client trust strip
2. **Catalog** (`/products`) — **NEW**: 4 detailed product rows with image + 4-row spec table + "Request Quote" CTA each
3. **Capabilities** (`/services`) — **NEW**: 3 deep-dive sections (Precision Machining / Heavy Fabrication / Machinery Overhaul) each with image + icon + 4-item deliverables checklist + "Brief Us" CTA
4. **Works** (`/projects`) — **NEW**: 5 case studies (Bhiwadi Warehouse / Roller Mill / MIA Gate / Mezzanine / Railing Run) with year badge + sector tag + hover arrow, plus 8-client trust grid
5. **Studio** (`/about`) — Bento stats (years amber card + heavy-duty image + quality circle), mission, **NEW** 3 principles (Tolerance over Speed / Honest Materials / Same Hands), **NEW** 5-row amber timeline (2007/2012/2017/2021/2024), final visit-workshop CTA
6. **Contact** (`/contact`) — **NEW** 4-channel left sidebar (Workshop card with address + Google Maps link + embedded map + phone tel: + email mailto: + hours) + green WhatsApp CTA card + working enquiry form on right
7. **404** — "We don't make this part." in V1 amber + gradient style

## V1 Design Preserved
- ✅ Dark `#050505` background, white text, amber `#EAB308` accent
- ✅ Fonts: Oswald (display) + Roboto (body) + Roboto Slab (logo)
- ✅ Rounded `2xl/3xl/full` corners everywhere
- ✅ Glass-morphism navbar with backdrop-blur on scroll
- ✅ Soft yellow glow `hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]`
- ✅ Big blurred `bg-[#EAB308]/5 blur-[150px]` page glows
- ✅ Tiny `[10px] font-bold tracking-[0.2em] uppercase` overlines

## V3 Content Added
- ✅ Product spec tables (Material / Thickness / Grade / Length)
- ✅ Service deliverable checklists
- ✅ 5 project case studies (sectors + years)
- ✅ Mission principles (3 cards)
- ✅ Company timeline (5 milestones)
- ✅ 4-channel contact pattern + Google Maps embed
- ✅ Working contact form wired to FastAPI + Resend (live, configured)
- ✅ Floating WhatsApp + back-to-top
- ✅ Custom 404 page
- ✅ SEO metadata per page

## Bug Fixes Carried Forward
- ✅ Image paths: `/public/Logos/...` → `/logos/...`
- ✅ Folder case: `Logos/` → `logos/`
- ✅ Orphan `Contact.js` removed
- ✅ Broken footer links replaced with real contact channels
- ✅ Clickable phone (`tel:`) and email (`mailto:`) everywhere

## Testing
- ✅ Backend: **7/7 pytest** pass (validation + honeypot + health + live Resend send)
- ✅ Frontend: **37/37 flows** pass (all pages, mobile menu, forms, WhatsApp, 404, image loads)
- ✅ Lint clean (Python + JS)
- ✅ Real test email delivered to `kapooreng149@gmail.com` (subject contains "AUTOMATED PYTEST" — safe to delete)
- ✅ One test enquiry archived in MongoDB

## Pending User Cleanup (from GitHub repo)
The V3-forge-house push included some junk files that should be cleaned up:
- `frontend_old_react_backup/` (Emergent React boilerplate)
- `=2.0.0` (stray file from shell redirect)
- `memory/`, `test_reports/`, `tests/` (Emergent-internal)
- `.gitconfig` (may contain credentials)

These are listed in `.gitignore` but were already tracked before being ignored.

## Push to GitHub
- Recommend pushing as branch `v4-merged` via "Save to GitHub" button.
- Don't push to `main` yet — let the user review V4 first.
