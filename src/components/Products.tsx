"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Product {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  status: "Live" | "In Development";
  url?: string;
  description: string;
}

function IconForge() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M14 13L25 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M14 13L3 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M14 13V25" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M9 9H19M9 13H19M9 17H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function IconSignal() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 22V16M12 22V10M17 22V14M22 22V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4C14 4 8 10 8 18L14 22L20 18C20 10 14 4 14 4Z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 9V7C10 5.895 10.895 5 12 5H16C17.105 5 18 5.895 18 7V9" stroke="currentColor" strokeWidth="1.25" />
      <path d="M3 15H25" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="12" height="19" stroke="currentColor" strokeWidth="1.25" />
      <rect x="16" y="12" width="8" height="13" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 10V12M12 10V12M8 15V17M12 15V17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function IconLotus() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6C14 6 8 12 8 18C10 20 12 21 14 22C16 21 18 20 20 18C20 12 14 6 14 6Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M14 14V22" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M4 16C4 16 8 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
      <path d="M24 16C24 16 20 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
    </svg>
  );
}

interface FeaturedProduct extends Product {
  featured: boolean;
  highlights?: string[];
}

const products: FeaturedProduct[] = [
  {
    icon: <IconForge />,
    name: "ForgeOS",
    tagline: "AI Product Development Ecosystem",
    status: "In Development",
    featured: true,
    description:
      "A unified ecosystem of interconnected AI-powered tools designed to streamline the entire product lifecycle — from client acquisition to project delivery.",
    highlights: [
      "Multi-agent orchestration",
      "Automated code review pipelines",
      "Security-first development",
    ],
  },
  {
    icon: <IconDocument />,
    name: "ProposalForge",
    tagline: "AI Proposal Generator SaaS",
    status: "Live",
    url: "https://proposalforge.com",
    featured: true,
    description:
      "Generate winning business proposals in minutes. AI-powered document generation tailored to your services, clients, and industry.",
    highlights: [
      "AI-generated proposals",
      "Custom templates & branding",
      "Client-ready PDF export",
    ],
  },
  {
    icon: <IconSignal />,
    name: "AIBreakingWire",
    tagline: "AI News & Intelligence Platform",
    status: "Live",
    url: "https://aibreakingwire.com",
    featured: false,
    description:
      "Curated AI news, analysis, and breaking developments for professionals tracking the AI landscape.",
  },
  {
    icon: <IconRocket />,
    name: "MomentumAI",
    tagline: "AI Productivity Suite",
    status: "In Development",
    featured: false,
    description:
      "Intelligent workflow automation tools designed to give professionals and small teams an unfair advantage.",
  },
  {
    icon: <IconBriefcase />,
    name: "ClientOS",
    tagline: "Freelancer & Agency Work Management",
    status: "In Development",
    featured: false,
    description:
      "Purpose-built work management platform for web developers, IT consultants, and small agencies — built by someone who lives the workflow daily.",
  },
  {
    icon: <IconBuilding />,
    name: "Da Nang Property",
    tagline: "Property Investment Intelligence",
    status: "In Development",
    featured: false,
    description:
      "AI-driven property analysis and investment intelligence for the emerging Da Nang, Vietnam real estate market.",
  },
  {
    icon: <IconLotus />,
    name: "ManilaWellness",
    tagline: "Wellness Booking Platform",
    status: "Live",
    url: "https://manilawellness.com",
    featured: false,
    description:
      "On-demand outcall massage and wellness booking platform serving Metro Manila.",
  },
];

export default function Products() {
  const gridRef = useScrollAnimation();

  return (
    <section id="products" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            What We Build
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Products & Platforms
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Building intelligent software across multiple domains — each product
            informed by real-world problems and enterprise experience.
          </p>
        </div>

        {/* Featured products — asymmetric two-column layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5"
        >
          {products.filter((p) => p.featured).map((product, index) => (
            <div
              key={product.name}
              className="scroll-hidden card-premium rounded-xl p-8 md:p-10 flex flex-col group"
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid="featured-product"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center text-accent">
                  {product.icon}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    product.status === "Live"
                      ? "text-emerald-400 bg-emerald-400/[0.07] border border-emerald-400/20"
                      : "text-text-muted bg-white/[0.03] border border-border"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      product.status === "Live" ? "bg-emerald-400" : "bg-text-muted"
                    }`}
                  />
                  {product.status}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-1 tracking-tight group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xs text-text-muted tracking-wide mb-5">
                {product.tagline}
              </p>

              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                {product.description}
              </p>

              {product.highlights && (
                <ul className="space-y-2 mb-6" data-testid="product-highlights">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:text-accent-dim transition-colors duration-200 mt-auto"
                >
                  {product.url.replace("https://", "")}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Remaining products — compact three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.filter((p) => !p.featured).map((product, index) => (
            <div
              key={product.name}
              className="scroll-hidden card-premium rounded-xl p-7 flex flex-col group"
              style={{ transitionDelay: `${(index + 2) * 80}ms` }}
              data-testid="standard-product"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center text-accent">
                  {product.icon}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    product.status === "Live"
                      ? "text-emerald-400 bg-emerald-400/[0.07] border border-emerald-400/20"
                      : "text-text-muted bg-white/[0.03] border border-border"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      product.status === "Live" ? "bg-emerald-400" : "bg-text-muted"
                    }`}
                  />
                  {product.status}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-text mb-1 tracking-tight group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xs text-text-muted tracking-wide mb-4">
                {product.tagline}
              </p>

              <p className="text-text-secondary text-sm leading-relaxed mt-auto mb-4">
                {product.description}
              </p>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:text-accent-dim transition-colors duration-200"
                >
                  {product.url.replace("https://", "")}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
