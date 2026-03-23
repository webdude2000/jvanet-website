# JVANET Corporate Website — Design Spec

## Overview

Single-page corporate website for JVANET PTY LTD, an Australian technology company building AI-powered software products and offering enterprise IT consulting. Static marketing site deployed to Vercel at jvanet.com.

## Technical Architecture

### Stack
- **Framework**: Next.js 14+ App Router, TypeScript
- **Styling**: Tailwind CSS v3
- **Font**: Geist via `next/font/google`
- **Animations**: CSS `@keyframes` + Intersection Observer (custom `useScrollAnimation` hook)
- **Build**: Static export (`output: 'export'` in next.config)
- **Deployment**: Vercel

### Key Decisions
- **No Framer Motion** — CSS animations are sufficient for fade-in-up effects and keep the bundle minimal
- **No component library** — marketing page doesn't need shadcn/ui or similar
- **No CMS** — all content hardcoded in components
- **No API routes** — purely static/presentational
- **Native smooth scroll** — `scroll-behavior: smooth` + anchor IDs, no scroll library
- **SVG favicon** — inline generated "J" lettermark in brand colors

### File Structure
```
jvanet-website/
  src/
    app/
      layout.tsx          — root layout, metadata, fonts, global styles
      page.tsx            — assembles all section components
      globals.css         — Tailwind directives + custom animation keyframes
    components/
      Navbar.tsx          — sticky nav, scroll-aware active states, mobile hamburger
      Hero.tsx            — company name, tagline, CTAs
      About.tsx           — company description, AI dev philosophy, founder background
      Products.tsx        — 7-card grid with glass-morphism cards
      Services.tsx        — IT consulting offerings list
      DevelopmentApproach.tsx — workflow/methodology visual layout
      TechStack.tsx       — logo cloud / text list near footer
      Contact.tsx         — contact info + footer combined
    hooks/
      useScrollAnimation.ts — Intersection Observer hook for entrance animations
  public/
    robots.txt
    sitemap.xml
    favicon.svg
  next.config.ts
  tailwind.config.ts
  tsconfig.json
  package.json
```

## Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#0a0f1c` | Page background |
| `bg-card` | `#111827` | Card backgrounds |
| `accent-blue` | `#3b82f6` | Primary accent, CTAs, links |
| `accent-cyan` | `#06b6d4` | Secondary accent, gradients |
| `text-primary` | `#f9fafb` | Headings, primary text |
| `text-secondary` | `#9ca3af` | Body text, descriptions |
| `border-glass` | `rgba(255,255,255,0.1)` | Glass-morphism card borders |

### Typography
- **Font**: Geist (via next/font)
- **Headings**: Geist, font-bold, tracking-tight
- **Body**: Geist, font-normal
- Scale: text-5xl/6xl hero, text-3xl/4xl section headings, text-lg body

### Components

**Glass-morphism Cards (Products)**:
- `background: rgba(17, 24, 39, 0.7)`
- `backdrop-filter: blur(12px)`
- `border: 1px solid rgba(255, 255, 255, 0.1)`
- Subtle gradient border on hover (blue to cyan)
- Status badge: colored dot + text (green for Live, amber for In Development)

**Navbar**:
- Sticky top, blurred background (`backdrop-filter: blur(8px)`)
- Section links with scroll-aware active highlighting
- Mobile: hamburger icon toggles slide-down menu
- Logo: "JVANET" wordmark in bold

**CTA Buttons**:
- Primary: solid blue-500 background, white text, rounded-lg, hover brightness
- Secondary: transparent with border, blue text, hover fill

**Scroll Animations**:
- Elements fade in and translate up 20px on entering viewport
- Triggered once per element via Intersection Observer
- `transition: opacity 0.6s ease, transform 0.6s ease`
- Staggered delays on card grids (0.1s increment per card)

## Sections Detail

### 1. Hero
- Full viewport height (`min-h-screen`)
- Centered content with subtle radial gradient background
- "JVANET PTY LTD" in large bold text
- Tagline in gradient text (blue to cyan): "Engineering AI-Powered Products from Concept to Revenue"
- Subtext in muted color
- Two CTA buttons side by side

### 2. About
- Three paragraphs as provided in spec
- Highlight key terms (Claude Code, Gemini Pro) with accent color
- Optional: subtle background gradient or section divider

### 3. Products & Platforms
- Section heading + subtext
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- 7 glass-morphism cards, each containing:
  - Emoji/icon top-left
  - Product name (bold)
  - One-liner tagline (italic, muted)
  - Status badge (green dot "Live" / amber dot "In Development")
  - URL for live products (as subtle link)
  - Description paragraph
- Cards animate in with stagger on scroll

### 4. Services — Enterprise IT Consulting
- Section heading
- Intro paragraph
- 5 service items, each with:
  - Bold service name
  - Description text
- Presented as a clean list or subtle cards
- Note about engagement model at bottom

### 5. Development Approach — "How We Build"
- 6 methodology items in a 2x3 or 3x2 grid
- Each item: icon/emoji, title, description
- Visual emphasis on this being a differentiator
- Subtle connecting lines or gradient accents optional

### 6. Tech Stack
- Near footer, subtle presentation
- Horizontal list of tech names with subtle styling
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel, Node.js, Python, PostgreSQL

### 7. Contact + Footer
- "Let's Talk" heading
- Email: hello@jvanet.com (mailto link)
- Location: Brisbane, Australia
- ABN placeholder
- Copyright line
- Minimal footer styling

## SEO & Performance

### Meta Tags
- Title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting"
- Description: "Australian technology company building AI-powered software products and providing enterprise IT consulting services."
- Open Graph tags mirroring title/description
- Canonical URL: https://jvanet.com

### Performance Targets
- Lighthouse Performance: 95+
- No external JS dependencies beyond Next.js runtime
- Static export for instant TTFB
- Font preloading via next/font
- No images in initial build (emoji/SVG only)

### SEO Files
- `robots.txt`: allow all, reference sitemap
- `sitemap.xml`: single URL (https://jvanet.com/)

## Testing Strategy

- Visual verification in browser
- Lighthouse audit (target 90+ all categories)
- Mobile responsive check at 375px, 768px, 1024px, 1440px breakpoints
- Smooth scroll navigation works between all sections
- All external links (product URLs) open in new tab

## Deployment

1. Initialize git repo
2. Create GitHub repo `jvanet-website`
3. Push to GitHub
4. Deploy via `vercel --prod`
5. User adds jvanet.com as custom domain manually
