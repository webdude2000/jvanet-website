"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { products } from "@/data/products";
import { ProductIcon } from "@/components/ProductIcon";

const featuredProducts = products.filter(
  (p) => p.status === "Live" || p.status === "In Development"
).slice(0, 7);

export default function Products() {
  const gridRef = useScrollAnimation();

  return (
    <section id="products" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[11px] text-accent tracking-[0.4em] uppercase font-medium mb-4">
            What We Build
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Products & Platforms
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Building intelligent software across multiple domains — each product
            informed by real-world problems and enterprise experience.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="scroll-hidden card-premium rounded-xl p-7 flex flex-col group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center text-accent">
                  <ProductIcon productId={product.id} />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    product.status === "Live"
                      ? "text-emerald-400 bg-emerald-400/[0.07] border border-emerald-400/20"
                      : "text-text-muted bg-white/[0.03] border border-border"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      product.status === "Live" ? "bg-emerald-400" : "bg-text-muted"
                    }`}
                  />
                  {product.status}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-text mb-1 tracking-tight group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xs text-text-muted tracking-wide mb-4">
                {product.tagline}
              </p>

              <p className="text-text-secondary text-sm leading-relaxed mt-auto mb-4">
                {product.description}
              </p>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:text-accent-dim transition-colors duration-200"
                >
                  {product.url.replace("https://", "")}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* View all products link */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-dim transition-colors duration-200 group"
          >
            View all products & ecosystem
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
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
      </div>
    </section>
  );
}
