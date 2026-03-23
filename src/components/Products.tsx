"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Product {
  emoji: string;
  name: string;
  tagline: string;
  status: "Live" | "In Development";
  url?: string;
  description: string;
}

const products: Product[] = [
  {
    emoji: "🔨",
    name: "ForgeOS",
    tagline: "AI Product Development Ecosystem",
    status: "In Development",
    description:
      "A unified ecosystem of interconnected AI-powered tools designed to streamline the entire product lifecycle — from client acquisition to project delivery.",
  },
  {
    emoji: "📝",
    name: "ProposalForge",
    tagline: "AI Proposal Generator SaaS",
    status: "Live",
    url: "https://proposalforge.com",
    description:
      "Generate winning business proposals in minutes. AI-powered document generation tailored to your services, clients, and industry.",
  },
  {
    emoji: "⚡",
    name: "AIBreakingWire",
    tagline: "AI News & Intelligence Platform",
    status: "Live",
    url: "https://aibreakingwire.com",
    description:
      "Curated AI news, analysis, and breaking developments for professionals tracking the AI landscape.",
  },
  {
    emoji: "🚀",
    name: "MomentumAI",
    tagline: "AI Productivity Suite",
    status: "In Development",
    description:
      "Intelligent workflow automation tools designed to give professionals and small teams an unfair advantage.",
  },
  {
    emoji: "💼",
    name: "ClientOS",
    tagline: "Freelancer & Agency Work Management",
    status: "In Development",
    description:
      "Purpose-built work management platform for web developers, IT consultants, and small agencies — built by someone who lives the workflow daily.",
  },
  {
    emoji: "🏠",
    name: "Da Nang Property",
    tagline: "Property Investment Intelligence",
    status: "In Development",
    description:
      "AI-driven property analysis and investment intelligence for the emerging Da Nang, Vietnam real estate market.",
  },
  {
    emoji: "🧘",
    name: "ManilaWellness",
    tagline: "Wellness Booking Platform",
    status: "Live",
    url: "https://manilawellness.com",
    description:
      "On-demand outcall massage and wellness booking platform serving Metro Manila.",
  },
];

export default function Products() {
  const gridRef = useScrollAnimation();

  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Products &amp; Platforms
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Building intelligent software across multiple domains
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <div
              key={product.name}
              className="scroll-hidden bg-[rgba(17,24,39,0.7)] backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-accent-blue/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{product.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-1">
                {product.name}
              </h3>
              <p className="text-sm italic text-gray-400 mb-3">
                {product.tagline}
              </p>

              <span
                className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-white/5 mb-3 ${
                  product.status === "Live"
                    ? "text-green-400"
                    : "text-amber-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    product.status === "Live" ? "bg-green-400" : "bg-amber-400"
                  }`}
                />
                {product.status}
              </span>

              {product.url && (
                <div className="mb-3">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue text-sm hover:underline"
                  >
                    {product.url.replace("https://", "")}
                  </a>
                </div>
              )}

              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
