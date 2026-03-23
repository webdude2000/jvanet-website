"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const methodologyItems = [
  {
    emoji: "🤖",
    title: "AI-Augmented Development",
    description:
      "Built predominantly with Claude Code (Anthropic) and Gemini Pro (Google), combining the strengths of multiple frontier AI models",
  },
  {
    emoji: "🔄",
    title: "Multi-Agent Workflows",
    description:
      "Complex features are decomposed across specialised AI agents — planners, implementers, testers, and reviewers working in parallel",
  },
  {
    emoji: "🔍",
    title: "Automated Code Review",
    description:
      "Every pull request passes through 6 parallel review agents checking code quality, error handling, type safety, security vulnerabilities, test coverage, and simplification opportunities",
  },
  {
    emoji: "🛡️",
    title: "Security-First",
    description:
      "Trail of Bits security tooling integrated directly into our development pipeline for differential security review, authentication flow auditing, and CodeQL/Semgrep analysis",
  },
  {
    emoji: "🧪",
    title: "Test-Driven Development",
    description:
      "Red-green TDD enforced at the workflow level — tests are written before implementation, not after",
  },
  {
    emoji: "📚",
    title: "Documentation-First",
    description:
      "Live, version-specific library documentation injected into every coding session to eliminate hallucinated APIs and outdated patterns",
  },
];

export default function DevelopmentApproach() {
  const ref = useScrollAnimation();

  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          How We Build
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Our development methodology is our competitive advantage
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologyItems.map((item, index) => (
            <div
              key={item.title}
              className="scroll-hidden bg-card/50 rounded-xl p-6 border-t-2"
              style={{
                borderImage: "linear-gradient(to right, #3b82f6, #06b6d4) 1",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
