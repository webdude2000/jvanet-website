"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial gradient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0, 200, 255, 0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00c8ff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Vertical accent lines */}
        <div
          className="absolute top-0 h-full w-px opacity-[0.06]"
          style={{
            background: "linear-gradient(180deg, transparent, #00c8ff 30%, #00c8ff 70%, transparent)",
            left: "25%",
          }}
        />
        <div
          className="absolute top-0 h-full w-px opacity-[0.04]"
          style={{
            background: "linear-gradient(180deg, transparent, #00c8ff 40%, #00c8ff 60%, transparent)",
            left: "75%",
          }}
        />
        {/* Horizontal accent */}
        <div
          className="absolute left-0 w-full h-px opacity-[0.05]"
          style={{
            background: "linear-gradient(90deg, transparent, #00c8ff 30%, #00c8ff 70%, transparent)",
            top: "35%",
          }}
        />
        {/* Corner accents */}
        <div className="absolute top-[20%] left-[25%] w-2 h-2 border border-accent/20 rounded-sm" />
        <div className="absolute top-[35%] left-[75%] w-2 h-2 border border-accent/10 rounded-sm" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Pre-heading badge */}
        <div
          className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.04] mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] text-accent/80 tracking-[0.2em] uppercase font-medium">
            Australian Technology Company
          </span>
        </div>

        {/* Company name */}
        <h1
          className="hero-animate font-display text-6xl md:text-8xl lg:text-[7rem] font-bold text-text tracking-tight mb-3"
          style={{ animationDelay: "0.25s" }}
        >
          JVANET
        </h1>

        {/* Accent line */}
        <div
          className="hero-line mx-auto h-[2px] w-20 md:w-28 bg-gradient-to-r from-accent to-accent-dim mb-6"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Backronym */}
        <p
          className="hero-animate text-[11px] md:text-xs text-text-muted tracking-[0.3em] uppercase mb-12"
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
            className="text-text-secondary border border-border rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide hover:text-text hover:border-text-muted/30 hover:bg-white/[0.02] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #060a13, transparent)" }}
      />
    </section>
  );
}
