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
          <h2 className="scroll-hidden font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            Ready to Build?
          </h2>
          <p className="scroll-hidden text-text-secondary text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Whether you have a product idea, need enterprise IT consulting, or
            want to explore what AI can do for your business.
          </p>

          <div className="scroll-hidden flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@jvanet.com"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-10 py-4 text-lg font-display font-semibold text-accent tracking-wide"
            >
              hello@jvanet.com
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-60"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <p className="scroll-hidden text-text-muted text-sm mt-8">
            Brisbane, Australia &middot; Available remotely across APAC
          </p>
        </div>
      </div>
    </section>
  );
}
