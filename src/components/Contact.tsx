"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="scroll-hidden text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Let&apos;s Talk
        </h2>
        <div className="scroll-hidden text-center">
          <a
            href="mailto:hello@jvanet.com"
            className="text-accent-blue text-lg hover:underline"
          >
            hello@jvanet.com
          </a>
          <p className="text-gray-400 mt-2">Brisbane, Australia</p>
          <p className="text-gray-500 text-sm mt-2">ABN: 26 696 484 107</p>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 JVANET PTY LTD — Joint Venture Autonomous Neural Engine Technology. All rights reserved. Australian Company.
          </p>
        </div>
      </div>
    </section>
  );
}
