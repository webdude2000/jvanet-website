"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="scroll-hidden mb-16">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-2">
            About JVANET
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="scroll-hidden text-text-secondary text-lg leading-relaxed">
              JVANET — <span className="text-text font-medium">Joint Venture Autonomous Neural Engine Technology</span> — is an Australian technology company specialising in building, launching, and monetising AI-powered software products. We combine deep enterprise IT infrastructure experience with modern AI development workflows to ship production-grade products at startup speed.
            </p>

            <p className="scroll-hidden text-text-secondary text-lg leading-relaxed">
              Our development philosophy centres on AI-augmented engineering — we build predominantly with{" "}
              <span className="text-accent font-medium">Claude Code</span>{" "}
              and{" "}
              <span className="text-accent font-medium">Gemini Pro</span>
              , leveraging multi-agent development workflows with automated code review pipelines, security auditing via Trail of Bits tooling, and test-driven development enforced at the process level.
            </p>

            <p className="scroll-hidden text-text-secondary text-lg leading-relaxed">
              Every commit passes through parallel review agents covering code quality, error handling, type safety, security, and simplification before merge.
            </p>
          </div>

          {/* Side stats */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
            <div className="scroll-hidden space-y-8">
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">100+</p>
                <p className="text-text-muted text-sm tracking-wide uppercase">
                  Combined years of technology experience
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">20+</p>
                <p className="text-text-muted text-sm tracking-wide uppercase">
                  Years founder experience in IT
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Enterprise data centres, cloud platforms (Azure, AWS, GCP), virtualisation (VMware, Hyper-V, Proxmox), disaster recovery, and full-stack web development — bridging legacy enterprise infrastructure with cutting-edge AI product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
