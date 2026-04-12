import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services — JVANET PTY LTD",
  description:
    "Enterprise IT consulting services from JVANET — cloud strategy, virtualisation, disaster recovery, AI integration, and DevOps.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <Services />
    </main>
  );
}
