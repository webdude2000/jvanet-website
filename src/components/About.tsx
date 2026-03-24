"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About JVANET
        </h2>

        <div className="scroll-hidden">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            JVANET — Joint Venture Autonomous Neural Engine Technology — is an Australian technology company specialising in building, launching, and monetising AI-powered software products. We combine deep enterprise IT infrastructure experience with modern AI development workflows to ship production-grade products at startup speed.
          </p>
        </div>

        <div className="scroll-hidden">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our development philosophy centres on AI-augmented engineering — we build predominantly with{" "}
            <span className="text-accent-blue font-semibold">Claude Code</span>{" "}
            and{" "}
            <span className="text-accent-cyan font-semibold">Gemini Pro</span>
            , leveraging multi-agent development workflows with automated code review pipelines, security auditing via Trail of Bits tooling, and test-driven development enforced at the process level. Every commit passes through parallel review agents covering code quality, error handling, type safety, security, and simplification before merge.
          </p>
        </div>

        <div className="scroll-hidden">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Founded by a technologist with over a decade of experience spanning enterprise data centres, cloud platforms (Azure, AWS, GCP), virtualisation (VMware, Hyper-V, Proxmox), disaster recovery, and full-stack web development — JVANET bridges the gap between legacy enterprise infrastructure and cutting-edge AI product development.
          </p>
        </div>
      </div>
    </section>
  );
}
