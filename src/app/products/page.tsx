import type { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products — JVANET PTY LTD",
  description:
    "AI-powered software products by JVANET — ProposalForge, AIBreakingWire, ManilaWellness, and more.",
};

export default function ProductsPage() {
  return (
    <main className="pt-16">
      <Products />
    </main>
  );
}
