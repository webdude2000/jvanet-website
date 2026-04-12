# JVANET Website — Editorial Studio Redesign

## Task
Transform jvanet.com from a single-page AI-template site into a multi-page editorial studio portfolio. The current site uses every AI-generated trope (glassmorphism, gradient text, pulse animations, geometric accents). Replace it with a typography-driven, intentionally designed professional site.

## Design Spec
Read the full spec at: `docs/superpowers/specs/2026-04-12-jvanet-editorial-redesign.md`

## Key Requirements

### Pages (5 total)
1. `/` — Home: hero + featured products + brief about + CTA
2. `/products` — Filterable product showcase with asymmetric grid
3. `/about` — Company story, methodology (timeline, not cards), tech stack
4. `/services` — Enterprise consulting offerings
5. `/contact` — Contact form + business details

### Design Principles
- **Typography-first**: Large Syne display headings (4-6rem) contrasted with DM Sans body text
- **Asymmetric layouts**: NOT uniform card grids. Featured items are larger. Mix widths.
- **Generous whitespace**: 120-160px section padding. Content breathes.
- **Left-aligned**: Max-width 1200px container. No center-everything.
- **Remove ALL AI template tropes**: No glassmorphism, no gradient text, no pulse animations, no corner accents, no grain texture

### Color Palette
- Background: `#04070d`
- Surface: `#0a1018`
- Accent primary: `#5eead4` (cyan)
- Accent secondary: `#f0abfc` (purple)
- Text primary: `#e8edf4`
- Text secondary: `#6b7d99`

### Product Data (MUST be accurate)

**Live:**
- ProposalForge (proposalforge.com) — AI-powered proposal writing for government & enterprise RFPs
- AIBreakingWire (aibreakingwire.com) — AI news & intelligence platform
- ManilaWellness (manilawellness.com) — On-demand wellness booking platform

**Launching Soon:**
- ClientOS — Freelancer & agency work management platform
- CloudDeck — Cloud infrastructure management
- QuickInvoice — Smart invoicing & billing

**In Development:**
- MomentumAI — AI-powered day trading intelligence
- Da Nang Property — Property investment AI for Vietnam
- QantasPointsPro — Qantas points optimization

**Ecosystem:**
- ForgeOS — AI development infrastructure (contains ForgeWatch, ForgeStack, ForgeWork)
- ForgeLabs — Mobile apps & games division (Dig & Discover)

### Technical Constraints
- Keep Next.js 16 + Tailwind CSS 4 + static export
- Zero new dependencies
- Keep existing Vercel security headers
- Keep DM Sans + Syne fonts
- Update sitemap.xml for new pages
- Unique metadata per page

### Acceptance Criteria
1. 5 working pages with navigation between them
2. No glassmorphism, gradient text, pulse animations, or geometric decorations
3. Typography-driven design with clear visual hierarchy
4. Asymmetric product grids (not uniform cards)
5. Product data accurate and up-to-date per the list above
6. Responsive down to 375px
7. Static export builds successfully (`npm run build`)
8. Existing Vercel security headers preserved
9. Lighthouse performance > 90
