# JVANET Website — Editorial Studio Redesign

## Overview

Multi-page redesign of jvanet.com, transforming it from a generic single-page AI template into an editorial, typography-driven studio portfolio. The goal is a site that looks intentionally designed — not generated.

## Problem Statement

The current site uses every "AI website" trope: glassmorphism cards, gradient text, pulse animations, geometric corner accents, grain textures, uniform 3-column card grids. It's indistinguishable from thousands of AI-generated sites. JVANET builds serious AI products and needs a site that reflects that.

## Technical Architecture

### Stack (unchanged)
- **Framework**: Next.js 16 App Router, TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: DM Sans (body) + Syne (display headings) via `next/font/google`
- **Animations**: CSS transitions + Intersection Observer (`useScrollAnimation` hook, used sparingly)
- **Build**: Static export (`output: 'export'`)
- **Deployment**: Vercel (existing config with security headers)
- **Dependencies**: Zero new dependencies

### File Structure
```
src/
  app/
    layout.tsx              — root layout, nav, footer
    page.tsx                — home page
    products/
      page.tsx              — full product showcase
    about/
      page.tsx              — company story, methodology, tech
    services/
      page.tsx              — enterprise consulting offerings
    contact/
      page.tsx              — contact form + business details
    globals.css             — design tokens, base styles
  components/
    layout/
      Navbar.tsx            — sticky minimal nav
      Footer.tsx            — site-wide footer
    home/
      Hero.tsx              — typography-driven hero
      FeaturedProducts.tsx  — asymmetric 3-4 product grid
      BriefAbout.tsx        — two-column company snapshot
      HomeCTA.tsx           — call to action section
    products/
      ProductGrid.tsx       — filterable mixed-size grid
      ProductCard.tsx       — individual product card
      EcosystemCard.tsx     — expandable ForgeOS card
      FilterTabs.tsx        — All / Live / In Dev / Ecosystem
    about/
      CompanyStory.tsx      — narrative section
      Methodology.tsx       — 6-step flow (timeline, not cards)
      TechStackList.tsx     — clean list format
    services/
      ServicesList.tsx      — consulting offerings
    contact/
      ContactForm.tsx       — static form (mailto or Formspree)
      BusinessDetails.tsx   — ABN, email, location
  hooks/
    useScrollAnimation.ts   — existing, reused sparingly
  data/
    products.ts             — product data (names, descriptions, status, URLs)
    services.ts             — service offerings data
```

## Design Language

### Typography-First Approach
The design is driven by typographic contrast, not decorative elements.

- **Display headings (Syne)**: 4-6rem on desktop, 2.5-3.5rem on mobile. Used for page titles and hero text only.
- **Section headings (Syne)**: 2-3rem. Left-aligned.
- **Body text (DM Sans)**: 1rem-1.125rem. Comfortable line height (1.6-1.7).
- **Small/meta text (DM Sans)**: 0.875rem for labels, badges, captions.

### Layout Principles
- **Asymmetric grids**: Products don't get uniform cards. Featured items are larger. Mix 2/3 + 1/3 widths.
- **Generous whitespace**: 120-160px vertical section padding. Content breathes.
- **Left-aligned content**: Max-width 1200px container. No center-everything.
- **Content hierarchy**: Not every section looks the same. Each has its own rhythm.

### Color Palette
```css
--bg-primary: #04070d;        /* deep dark background */
--bg-surface: #0a1018;        /* card/section backgrounds */
--accent-primary: #5eead4;    /* cyan — kept from current */
--accent-secondary: #f0abfc;  /* soft purple for contrast */
--text-primary: #e8edf4;      /* main text */
--text-secondary: #6b7d99;    /* muted text */
--border-subtle: rgba(255, 255, 255, 0.06);
```

### What's Removed (AI Template Tropes)
- Glassmorphism / backdrop-blur cards
- Corner accent decorations
- Pulse animations on status dots
- Gradient text effects
- Grain texture overlay
- Geometric line decorations
- Uniform card grids

### What's Added
- Hover micro-interactions on product cards (subtle scale + border brightness)
- Smooth page transitions between routes
- Real typographic hierarchy as the primary design element
- Intentional asymmetry in layouts
- Simple status badges (text-based, not animated)

## Pages

### Home (`/`)

1. **Hero**: Full viewport height. Large left-aligned headline "Engineering AI-Powered Products" in Syne at ~5rem. Subtitle underneath in DM Sans at 1.25rem. Single CTA button ("Explore Our Products"). No particle effects, no animated backgrounds.

2. **Featured Products**: Asymmetric grid showing 3-4 live products. One product gets a large card (2/3 width), others are smaller (1/3). Each shows: name, one-line description, "Live" badge, external link. Clicking goes to `/products`.

3. **Brief About**: Two-column layout. Left: 2-3 sentence company narrative. Right: key stats (products shipped, autonomous AI development, Brisbane AU). Links to `/about`.

4. **CTA Section**: Clean section with "See all products" and "Get in touch" as distinct actions.

### Products (`/products`)

- **Filter tabs**: All | Live | In Development | Ecosystem
- **Mixed-size grid**: Live products get larger cards with external links. In-development products are compact with "In Development" badge.
- **ForgeOS ecosystem card**: Special card that shows ForgeWatch, ForgeStack, ForgeWork as sub-items when expanded or always visible as a nested list.
- **ForgeLabs card**: Mobile apps & games division. Mentions Dig & Discover (Roblox).

### About (`/about`)

- **Company story**: JVANET PTY LTD origin, AI-first philosophy, Brisbane-based.
- **Development methodology**: The 6-step AI-augmented approach presented as a vertical timeline/flow — NOT a card grid. Each step flows into the next.
- **Tech stack**: Clean categorized list (not icon grid). Languages, frameworks, infrastructure, AI tools.

### Services (`/services`)

- List of enterprise consulting offerings: Cloud Strategy, Virtualisation, Disaster Recovery, AI Integration, DevOps & Automation.
- Each gets a paragraph description.
- Honest "Currently at capacity — not accepting new consulting clients" messaging.

### Contact (`/contact`)

- Business details: hello@jvanet.com, ABN 26 696 484 107, Brisbane, Australia.
- Simple contact form. Since static export, use `mailto:` link or Formspree integration.
- No social media links unless they exist.

## Product Data

### Live Products
| Product | Domain | Description |
|---------|--------|-------------|
| ProposalForge | proposalforge.com | AI-powered proposal writing for government & enterprise RFPs |
| AIBreakingWire | aibreakingwire.com | AI news & intelligence platform |
| ManilaWellness | manilawellness.com | On-demand wellness booking platform |

### Launching Soon
| Product | Description |
|---------|-------------|
| ClientOS | Freelancer & agency work management platform |
| CloudDeck | Cloud infrastructure management |
| QuickInvoice | Smart invoicing & billing |

### In Development
| Product | Description |
|---------|-------------|
| MomentumAI | AI-powered day trading intelligence |
| Da Nang Property | Property investment AI for Vietnam |
| QantasPointsPro | Qantas points optimization |

### Ecosystem
| Product | Description |
|---------|-------------|
| ForgeOS | AI development infrastructure (ForgeWatch, ForgeStack, ForgeWork) |
| ForgeLabs | Mobile apps & games division (Dig & Discover) |

## Responsive Behavior

- **Desktop (1024px+)**: Full asymmetric grids, large typography, generous spacing.
- **Tablet (768-1023px)**: 2-column grids collapse where needed, typography scales down ~20%.
- **Mobile (<768px)**: Single column, hamburger nav, hero text at 2.5rem, reduced section padding (60-80px).

## SEO

- Unique `<title>` and `<meta description>` per page.
- OpenGraph images per page.
- Structured data (Organization schema on home page).
- Existing sitemap.xml and robots.txt updated for new pages.

## Acceptance Criteria

1. Site has 5 pages: Home, Products, About, Services, Contact
2. No glassmorphism, gradient text, pulse animations, or geometric decorations
3. Typography-driven design with clear hierarchy
4. Asymmetric product grids (not uniform cards)
5. Product data is accurate and up-to-date
6. All pages responsive down to 375px
7. Lighthouse performance score > 90
8. Static export builds successfully
9. Existing Vercel security headers preserved
10. Navigation works between all pages
