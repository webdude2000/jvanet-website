"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Cloud Strategy & Migration",
    description:
      "Azure, AWS, GCP architecture, migration planning, and hybrid cloud design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 14C3.343 14 2 12.657 2 11C2 9.343 3.343 8 5 8C5.075 8 5.149 8.004 5.222 8.009C5.567 5.717 7.577 4 10 4C12.761 4 15 6.239 15 9C15 9.337 14.966 9.666 14.902 9.984C16.694 10.154 18 11.618 18 13.5C18 15.433 16.433 17 14.5 17H5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
    detail: "Multi-cloud",
  },
  {
    title: "Virtualisation & Infrastructure",
    description:
      "VMware, Hyper-V, Proxmox deployments, consolidation, and optimisation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.25"/>
        <rect x="2" y="12" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="5" cy="5.5" r="1" fill="currentColor" opacity="0.5"/>
        <circle cx="5" cy="14.5" r="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    detail: "On-premise",
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description:
      "Zerto, backup strategies, DR testing, and failover architecture",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M10 8V12M10 14V14.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
    detail: "Resilience",
  },
  {
    title: "AI Integration Consulting",
    description:
      "Helping businesses identify practical AI opportunities and implement them using modern tooling",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    detail: "AI/ML",
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, monitoring, and deployment automation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L8 18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    detail: "Automation",
  },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="scroll-hidden mb-16">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            Advisory Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Enterprise IT Consulting
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Hands-on consulting for organisations navigating complex
            infrastructure decisions. Direct experience across enterprise
            environments.
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="scroll-hidden group border-b border-border py-7 flex items-start gap-5 hover:bg-white/[0.01] transition-colors duration-300 -mx-4 px-4 rounded-lg"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/[0.06] border border-accent/10 flex items-center justify-center text-accent/70 group-hover:text-accent group-hover:border-accent/20 transition-all duration-300 mt-0.5">
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-[10px] text-text-muted/60 tracking-wider uppercase shrink-0 hidden md:block">
                    {service.detail}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-text-muted/20 group-hover:text-accent/40 transition-all duration-300 shrink-0 mt-2 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Unavailability notice */}
        <div className="scroll-hidden mt-12 border border-accent/15 bg-accent/[0.02] rounded-xl px-6 py-5">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                <path d="M8 5V8.5M8 11V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25"/>
              </svg>
            </div>
            <div>
              <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-2">
                Currently Unavailable
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Due to a high volume of existing engagements, we are not accepting
                new consulting clients at this time. Our current focus is on
                building AI-powered products. Please check back later or get in
                touch to join our waitlist.
              </p>
            </div>
          </div>
        </div>

        <p className="scroll-hidden text-text-muted text-sm mt-8">
          Engagements are project-based or advisory. Based in Brisbane,
          available remotely across APAC.
        </p>
      </div>
    </section>
  );
}
