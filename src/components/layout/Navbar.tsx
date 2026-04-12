"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 select-none group"
          aria-label="JVANET — home"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-md bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300" />
            <span className="relative text-accent font-display font-bold text-sm">J</span>
          </div>
          <span className="text-text font-display font-bold text-base tracking-wide group-hover:text-accent transition-colors duration-300">
            JVANET
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-md ${
                    isActive
                      ? "text-accent bg-accent/[0.06]"
                      : "text-text-muted hover:text-text hover:bg-white/[0.03]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-text-muted hover:text-accent transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
              className="transition-all duration-300 origin-center"
              style={{ transformOrigin: "10px 6px", transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none" }}
            />
            <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
              className="transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
              className="transition-all duration-300 origin-center"
              style={{ transformOrigin: "10px 14px", transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none" }}
            />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 pb-5 pt-2 gap-1 border-t border-border bg-primary/95" role="list"
          style={{ backdropFilter: "blur(16px)" }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-accent bg-accent/[0.06]"
                      : "text-text-muted hover:text-text hover:bg-white/[0.02]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
