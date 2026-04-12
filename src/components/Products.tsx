"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  products,
  getActiveStatuses,
  type Product,
  type ProductStatus,
} from "@/data/products";

const ICON_MAP: Record<Product["icon"], React.ReactNode> = {
  forge: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M14 13L25 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M14 13L3 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M14 13V25" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M9 9H19M9 13H19M9 17H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  signal: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 22V16M12 22V10M17 22V14M22 22V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4C14 4 8 10 8 18L14 22L20 18C20 10 14 4 14 4Z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
    </svg>
  ),
  briefcase: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 9V7C10 5.895 10.895 5 12 5H16C17.105 5 18 5.895 18 7V9" stroke="currentColor" strokeWidth="1.25" />
      <path d="M3 15H25" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
    </svg>
  ),
  building: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="12" height="19" stroke="currentColor" strokeWidth="1.25" />
      <rect x="16" y="12" width="8" height="13" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 10V12M12 10V12M8 15V17M12 15V17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  lotus: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6C14 6 8 12 8 18C10 20 12 21 14 22C16 21 18 20 20 18C20 12 14 6 14 6Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M14 14V22" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M4 16C4 16 8 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
      <path d="M24 16C24 16 20 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
    </svg>
  ),
};

const STATUS_STYLES: Record<ProductStatus, { text: string; bg: string; border: string; dot: string }> = {
  Live: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/[0.07]",
    border: "border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  "Launching Soon": {
    text: "text-amber-400",
    bg: "bg-amber-400/[0.07]",
    border: "border-amber-400/20",
    dot: "bg-amber-400",
  },
  "In Development": {
    text: "text-text-muted",
    bg: "bg-white/[0.03]",
    border: "border-border",
    dot: "bg-text-muted",
  },
  Ecosystem: {
    text: "text-accent",
    bg: "bg-accent/[0.07]",
    border: "border-accent/20",
    dot: "bg-accent",
  },
};

function StatusBadge({ status }: { status: ProductStatus }) {
  const style = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full ${style.text} ${style.bg} border ${style.border}`}
    >
      <span className={`w-1 h-1 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}

function ProductCard({ product, size }: { product: Product; size: "large" | "compact" }) {
  const isLarge = size === "large";

  return (
    <div
      className={`scroll-hidden card-premium rounded-xl ${isLarge ? "p-8 md:p-10" : "p-7"} flex flex-col group`}
      data-testid={isLarge ? "featured-product" : "standard-product"}
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className={`${isLarge ? "w-12 h-12" : "w-10 h-10"} rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center text-accent`}
        >
          {ICON_MAP[product.icon]}
        </div>
        <StatusBadge status={product.status} />
      </div>

      <h3
        className={`${isLarge ? "text-xl md:text-2xl font-bold" : "text-lg font-semibold"} font-display text-text mb-1 tracking-tight group-hover:text-accent transition-colors duration-300`}
      >
        {product.name}
      </h3>
      <p className="text-xs text-text-muted tracking-wide mb-4">
        {product.tagline}
      </p>

      <p className={`text-text-secondary ${isLarge ? "text-[15px]" : "text-sm"} leading-relaxed mb-4`}>
        {product.description}
      </p>

      {product.highlights && (
        <ul className="space-y-2 mb-6" data-testid="product-highlights">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-text-secondary">
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {product.url && (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium hover:text-accent-dim transition-colors duration-200 mt-auto"
        >
          {product.url.replace("https://", "")}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
            <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </div>
  );
}

type FilterValue = "All" | ProductStatus;

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const gridRef = useScrollAnimation();

  const activeStatuses = getActiveStatuses();
  const filters: FilterValue[] = ["All", ...activeStatuses];

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.status === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const standard = filtered.filter((p) => !p.featured);

  return (
    <section id="products" className="py-28 px-6">
      <div className="section-line max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
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

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14" role="tablist" aria-label="Filter products by status">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === "All"
                ? products.length
                : products.filter((p) => p.status === filter).length;

            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[13px] font-medium tracking-wide rounded-full border transition-all duration-300 ${
                  isActive
                    ? "text-accent bg-accent/[0.08] border-accent/25"
                    : "text-text-muted bg-white/[0.02] border-border hover:text-text hover:border-white/10"
                }`}
                data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter}
                <span className="ml-1.5 text-[11px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div ref={gridRef}>
          {/* Featured products — asymmetric two-column layout */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} size="large" />
              ))}
            </div>
          )}

          {/* Standard products — three-column grid */}
          {standard.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {standard.map((product) => (
                <ProductCard key={product.id} product={product} size="compact" />
              ))}
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16" data-testid="empty-state">
              No products in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
