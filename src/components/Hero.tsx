export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 35%, transparent 70%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          JVANET PTY LTD
        </h1>

        <p className="text-sm md:text-base text-gray-500 tracking-widest uppercase mb-6">
          Joint Venture Autonomous Neural Engine Technology
        </p>

        <p className="text-xl md:text-2xl bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-6">
          Engineering AI-Powered Products from Concept to Revenue
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Australian technology company building intelligent software products
          and delivering enterprise IT consulting
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-blue-500 text-white rounded-lg px-8 py-3 hover:brightness-110 transition-all duration-200 font-medium"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-accent-blue text-accent-blue rounded-lg px-8 py-3 hover:bg-accent-blue/10 transition-all duration-200 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
