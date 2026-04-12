"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="scroll-hidden mb-12">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-2">
            About JVANET
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main copy — concise */}
          <div className="lg:col-span-7 space-y-6">
            <p className="scroll-hidden text-text-secondary text-lg leading-relaxed">
              <span className="text-text font-medium">JVANET PTY LTD</span> is
              an Australian technology company specialising in AI-powered
              software products and enterprise IT consulting. We combine 20+
              years of infrastructure experience with modern AI development
              workflows to ship production-grade products at startup speed.
            </p>

            <p className="scroll-hidden text-text-secondary text-lg leading-relaxed">
              Our development process is AI-augmented end-to-end — multi-agent
              workflows, automated code review pipelines, and security auditing
              built into every commit.
            </p>
          </div>

          {/* Side stats */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
            <div className="scroll-hidden space-y-8">
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">
                  20+
                </p>
                <p className="text-text-muted text-sm tracking-wide uppercase">
                  Years in enterprise IT
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">
                  7
                </p>
                <p className="text-text-muted text-sm tracking-wide uppercase">
                  Products in portfolio
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Cloud platforms, virtualisation, disaster recovery, and
                  full-stack web development — bridging enterprise
                  infrastructure with AI product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
