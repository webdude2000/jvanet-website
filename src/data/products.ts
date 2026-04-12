export type ProductStatus = "Live" | "In Development";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  url?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "forgeos",
    name: "ForgeOS",
    tagline: "AI Product Development Ecosystem",
    status: "In Development",
    description:
      "A unified ecosystem of interconnected AI-powered tools designed to streamline the entire product lifecycle — from client acquisition to project delivery.",
  },
  {
    id: "proposalforge",
    name: "ProposalForge",
    tagline: "AI Proposal Generator SaaS",
    status: "Live",
    url: "https://proposalforge.com",
    description:
      "Generate winning business proposals in minutes. AI-powered document generation tailored to your services, clients, and industry.",
  },
  {
    id: "aibreakingwire",
    name: "AIBreakingWire",
    tagline: "AI News & Intelligence Platform",
    status: "Live",
    url: "https://aibreakingwire.com",
    description:
      "Curated AI news, analysis, and breaking developments for professionals tracking the AI landscape.",
  },
  {
    id: "momentumai",
    name: "MomentumAI",
    tagline: "AI Productivity Suite",
    status: "In Development",
    description:
      "Intelligent workflow automation tools designed to give professionals and small teams an unfair advantage.",
  },
  {
    id: "clientos",
    name: "ClientOS",
    tagline: "Freelancer & Agency Work Management",
    status: "In Development",
    description:
      "Purpose-built work management platform for web developers, IT consultants, and small agencies — built by someone who lives the workflow daily.",
  },
  {
    id: "danang-property",
    name: "Da Nang Property",
    tagline: "Property Investment Intelligence",
    status: "In Development",
    description:
      "AI-driven property analysis and investment intelligence for the emerging Da Nang, Vietnam real estate market.",
  },
  {
    id: "manilawellness",
    name: "ManilaWellness",
    tagline: "Wellness Booking Platform",
    status: "Live",
    url: "https://manilawellness.com",
    description:
      "On-demand outcall massage and wellness booking platform serving Metro Manila.",
  },
];
