"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-24 md:mb-28" />

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
              className="btn-primary inline-block rounded-xl px-10 py-4 text-lg font-display font-semibold text-accent tracking-wide"
            >
              hello@jvanet.com
            </a>
            <p className="text-text-secondary text-sm mt-8">
              Brisbane, Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
