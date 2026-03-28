"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const methodologyItems = [
  {
    number: "01",
    title: "AI-Augmented Development",
    description:
      "Built predominantly with Claude Code and Gemini Pro, combining the strengths of multiple frontier AI models for every task.",
  },
  {
    number: "02",
    title: "Multi-Agent Workflows",
    description:
      "Complex features are decomposed across specialised AI agents — planners, implementers, testers, and reviewers working in parallel.",
  },
  {
    number: "03",
    title: "Automated Code Review",
    description:
      "Every pull request passes through 6 parallel review agents checking code quality, error handling, type safety, security, test coverage, and simplification.",
  },
  {
    number: "04",
    title: "Security-First",
    description:
      "Trail of Bits security tooling integrated directly into our pipeline for differential security review, auth auditing, and static analysis.",
  },
  {
    number: "05",
    title: "Test-Driven Development",
    description:
      "Red-green TDD enforced at the workflow level — tests are written before implementation, not after.",
  },
  {
    number: "06",
    title: "Documentation-First",
    description:
      "Live, version-specific library documentation injected into every coding session to eliminate hallucinated APIs and outdated patterns.",
  },
];

export default function DevelopmentApproach() {
  const ref = useScrollAnimation();

  return (
    <section id="approach" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            Our Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            How We Build
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Our development methodology is our competitive advantage — precision
            engineering through AI-augmented workflows.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {methodologyItems.map((item, index) => (
            <div
              key={item.title}
              className="scroll-hidden card-premium rounded-xl p-7 group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent/[0.06] border border-accent/10 text-[11px] text-accent/60 font-display font-bold tracking-wider">
                  {item.number}
                </span>
              </div>
              <h3 className="text-base font-display font-semibold text-text mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
