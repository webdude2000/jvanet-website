"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(0, 200, 255, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Pre-heading */}
        <p
          className="hero-animate text-[11px] text-text-muted tracking-[0.25em] uppercase font-medium mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          Australian Technology Company
        </p>

        {/* Company name */}
        <h1
          className="hero-animate font-display text-6xl md:text-8xl lg:text-[7rem] font-bold text-text tracking-tight mb-3"
          style={{ animationDelay: "0.25s" }}
        >
          JVANET
        </h1>

        {/* Accent line */}
        <div
          className="hero-line mx-auto h-[2px] w-16 md:w-24 bg-gradient-to-r from-accent to-accent-dim mb-6"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Backronym */}
        <p
          className="hero-animate text-[11px] md:text-xs text-text-muted tracking-[0.3em] uppercase mb-14"
          style={{ animationDelay: "0.6s" }}
        >
          Joint Venture Autonomous Neural Engine Technology
        </p>

        {/* Tagline */}
        <h2
          className="hero-animate font-display text-2xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6"
          style={{ animationDelay: "0.75s" }}
        >
          Engineering AI-Powered Products
          <br />
          <span className="text-accent-gradient">from Concept to Revenue</span>
        </h2>

        {/* Subtitle */}
        <p
          className="hero-animate text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ animationDelay: "0.9s" }}
        >
          We build intelligent software products and deliver enterprise IT
          consulting with the precision of engineers and the speed of AI.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-animate flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "1.05s" }}
        >
          <a
            href="#products"
            className="btn-primary rounded-lg px-8 py-3.5 text-sm font-semibold text-accent tracking-wide"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="text-text-secondary border border-border rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide hover:text-text hover:border-text-muted/30 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #060a13, transparent)" }}
      />
    </section>
  );
}
