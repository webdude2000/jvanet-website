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

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Pre-heading */}
        <p
          className="hero-animate text-[11px] text-text-muted tracking-[0.25em] uppercase font-medium mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          Australian Technology Company
        </p>

        {/* Company name — large, editorial */}
        <h1
          className="hero-animate font-display text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-text tracking-tighter leading-[0.85] mb-4"
          style={{ animationDelay: "0.25s" }}
        >
          JVANET
        </h1>

        {/* Accent line */}
        <div
          className="hero-line h-[2px] w-16 md:w-24 bg-gradient-to-r from-accent to-accent-dim mb-8"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Tagline — left-aligned, editorial weight */}
        <h2
          className="hero-animate font-display text-2xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6 max-w-3xl"
          style={{ animationDelay: "0.65s" }}
        >
          Engineering AI-Powered Products
          <br />
          <span className="text-accent-gradient">from Concept to Revenue</span>
        </h2>

        {/* Subtitle */}
        <p
          className="hero-animate text-text-secondary text-base md:text-lg max-w-xl mb-12 leading-relaxed"
          style={{ animationDelay: "0.8s" }}
        >
          We build intelligent software products and deliver enterprise IT
          consulting with the precision of engineers and the speed of AI.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-animate flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.95s" }}
        >
          <a
            href="#products"
            className="btn-primary rounded-lg px-8 py-3.5 text-sm font-semibold text-accent tracking-wide"
          >
            Explore Our Products
          </a>
          <a
            href="#services"
            className="text-text-secondary border border-border rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide hover:text-text hover:border-text-muted/30 transition-all duration-300"
          >
            Enterprise Consulting
          </a>
        </div>

        {/* Quick stats bar */}
        <div
          className="hero-animate flex items-center gap-8 md:gap-12 mt-16 pt-10 border-t border-border"
          style={{ animationDelay: "1.1s" }}
          data-testid="hero-stats"
        >
          <div>
            <p className="text-2xl md:text-3xl font-display font-bold text-text">7</p>
            <p className="text-[10px] text-text-muted tracking-widest uppercase mt-1">Products</p>
          </div>
          <div className="w-px h-8 bg-border" aria-hidden="true" />
          <div>
            <p className="text-2xl md:text-3xl font-display font-bold text-text">3</p>
            <p className="text-[10px] text-text-muted tracking-widest uppercase mt-1">Live</p>
          </div>
          <div className="w-px h-8 bg-border" aria-hidden="true" />
          <div>
            <p className="text-2xl md:text-3xl font-display font-bold text-text">20+</p>
            <p className="text-[10px] text-text-muted tracking-widest uppercase mt-1">Years IT</p>
          </div>
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
