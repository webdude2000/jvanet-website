"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-center">
          <p className="scroll-hidden text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="scroll-hidden font-display text-4xl md:text-5xl font-bold text-text mb-6">
            Let&apos;s Talk
          </h2>
          <p className="scroll-hidden text-text-secondary max-w-md mx-auto mb-12">
            Whether you have a project in mind or want to explore how AI can
            transform your business — we&apos;d like to hear from you.
          </p>

          <div className="scroll-hidden">
            <a
              href="mailto:hello@jvanet.com"
              className="btn-primary inline-block rounded-xl px-10 py-4 text-lg font-display font-semibold text-accent tracking-wide mb-8"
            >
              hello@jvanet.com
            </a>
            <p className="text-text-secondary text-sm">
              Brisbane, Australia
            </p>
            <p className="text-text-muted text-xs mt-2 tracking-wide">
              ABN: 26 696 484 107
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="scroll-hidden border-t border-border mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-text-muted tracking-wide">
            &copy; {new Date().getFullYear()} JVANET PTY LTD. All rights reserved.
          </p>
          <p className="text-[11px] text-text-muted/60 tracking-[0.15em] uppercase">
            Joint Venture Autonomous Neural Engine Technology
          </p>
        </div>
      </div>
    </section>
  );
}
