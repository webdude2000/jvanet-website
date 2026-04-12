import type { Metadata } from "next";
import About from "@/components/About";
import DevelopmentApproach from "@/components/DevelopmentApproach";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "About — JVANET PTY LTD",
  description:
    "JVANET PTY LTD — an Australian technology company building AI-powered products with autonomous development workflows. Based in Brisbane.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <DevelopmentApproach />
      <TechStack />
    </main>
  );
}
