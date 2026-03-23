"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Cloud Strategy & Migration",
    description:
      "Azure, AWS, GCP architecture, migration planning, and hybrid cloud design",
  },
  {
    title: "Virtualisation & Infrastructure",
    description:
      "VMware, Hyper-V, Proxmox deployments, consolidation, and optimisation",
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description:
      "Zerto, backup strategies, DR testing, and failover architecture",
  },
  {
    title: "AI Integration Consulting",
    description:
      "Helping businesses identify practical AI opportunities and implement them using modern tooling",
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, monitoring, and deployment automation",
  },
];

export default function Services() {
  useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Enterprise IT Consulting
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          JVANET also offers hands-on consulting for organisations navigating
          complex infrastructure decisions. With direct experience across
          enterprise environments, we provide:
        </p>

        {services.map((service) => (
          <div
            key={service.title}
            className="scroll-hidden border-l-2 border-accent-blue/50 pl-6 py-4 mb-6"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}

        <p className="text-gray-500 text-sm mt-8 italic">
          Engagements are project-based or advisory. Based in Brisbane,
          available remotely across APAC.
        </p>
      </div>
    </section>
  );
}
