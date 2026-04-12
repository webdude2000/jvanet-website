export type ProductStatus = "Live" | "Launching Soon" | "In Development" | "Ecosystem";

export type ProductIcon = "forge" | "document" | "signal" | "rocket" | "briefcase" | "building" | "lotus" | "cloud" | "invoice" | "chart" | "property" | "gamepad" | "lab";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  icon: ProductIcon;
  featured: boolean;
  url?: string;
  highlights?: string[];
}

export const products: Product[] = [
  {
    id: "forgeos",
    name: "ForgeOS",
    tagline: "Autonomous AI Development Ecosystem",
    description:
      "Multi-agent orchestration platform that manages the full software lifecycle — from planning through deployment. Coordinates specialist AI agents with human oversight.",
    status: "Ecosystem",
    icon: "forge",
    featured: true,
    highlights: [
      "Multi-agent worker orchestration",
      "Automated code review pipelines",
      "Security auditing on every commit",
    ],
  },
  {
    id: "proposalforge",
    name: "ProposalForge",
    tagline: "AI-Powered Proposal Writing",
    description:
      "SaaS platform that generates tailored business proposals using AI. Analyses RFPs, matches capabilities, and produces submission-ready documents.",
    status: "Live",
    icon: "document",
    featured: true,
    url: "https://proposalforge.com",
    highlights: [
      "RFP analysis and response generation",
      "Template library with customisation",
      "Stripe-integrated subscription billing",
    ],
  },
  {
    id: "aibreakingwire",
    name: "AIBreakingWire",
    tagline: "AI News & Intelligence Platform",
    description:
      "Automated AI news platform that curates, summarises, and publishes breaking developments in artificial intelligence and machine learning.",
    status: "Live",
    icon: "signal",
    featured: true,
    url: "https://aibreakingwire.com",
    highlights: [
      "Automated news curation and publishing",
      "AI-powered article summarisation",
      "Real-time intelligence feed",
    ],
  },
  {
    id: "manilawellness",
    name: "ManilaWellness",
    tagline: "On-Demand Wellness Booking",
    description:
      "On-demand massage and wellness booking platform for Metro Manila with WhatsApp integration and practitioner management.",
    status: "Live",
    icon: "lotus",
    featured: false,
    url: "https://manilawellness.com",
  },
  {
    id: "clientos",
    name: "ClientOS",
    tagline: "Freelancer Work Management",
    description:
      "Work management platform for freelancers and agencies — client tracking, project pipelines, and automated workflows.",
    status: "Launching Soon",
    icon: "briefcase",
    featured: false,
  },
  {
    id: "clouddeck",
    name: "CloudDeck",
    tagline: "Cloud Infrastructure Management",
    description:
      "Unified dashboard for managing cloud infrastructure across providers with cost analysis and security monitoring.",
    status: "Launching Soon",
    icon: "cloud",
    featured: false,
  },
  {
    id: "quickinvoice",
    name: "QuickInvoice",
    tagline: "Smart Invoicing & Billing",
    description:
      "Invoicing platform with recurring billing, credit notes, and automated payment reminders for small businesses.",
    status: "Launching Soon",
    icon: "invoice",
    featured: false,
  },
  {
    id: "momentumai",
    name: "MomentumAI",
    tagline: "AI-Powered Day Trading",
    description:
      "AI trading intelligence system using multi-model consensus for pre-market scanning, news analysis, and trade signal generation.",
    status: "In Development",
    icon: "chart",
    featured: false,
  },
  {
    id: "danangproperty",
    name: "Da Nang Property",
    tagline: "Property Investment AI",
    description:
      "AI-powered property investment platform for Vietnam with price prediction, market analysis, and portfolio management.",
    status: "In Development",
    icon: "property",
    featured: false,
  },
  {
    id: "qantaspointspro",
    name: "QantasPointsPro",
    tagline: "Points Optimisation Engine",
    description:
      "Intelligent tools for maximising Qantas frequent flyer point value through deal tracking, earning strategies, and redemption analysis.",
    status: "In Development",
    icon: "rocket",
    featured: false,
  },
  {
    id: "forgelabs",
    name: "ForgeLabs",
    tagline: "Mobile Apps & Games",
    description:
      "JVANET's mobile division building apps and games. Current project: Dig & Discover — a Roblox mining game ready for publishing.",
    status: "Ecosystem",
    icon: "lab",
    featured: false,
  },
];

export function getActiveStatuses(): ProductStatus[] {
  const statusSet = new Set(products.map((p) => p.status));
  const order: ProductStatus[] = ["Live", "Launching Soon", "In Development", "Ecosystem"];
  return order.filter((s) => statusSet.has(s));
}
