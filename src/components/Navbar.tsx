"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Products", href: "#products", sectionId: "products" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "How We Build", href: "#approach", sectionId: "approach" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll-aware background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    const observerCallback =
      (id: string) => (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(observerCallback(id), {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const navBg = scrolled
    ? "bg-primary/90 border-b border-white/10"
    : "bg-primary/60 border-b border-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="text-white font-bold text-xl tracking-widest uppercase select-none hover:text-accent-blue transition-colors duration-200"
          aria-label="JVANET — scroll to top"
        >
          JVANET
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-accent-blue"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent-blue rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Top line → top arm of X */}
            <line
              x1="3"
              y1="6"
              x2="19"
              y2="6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="transition-all duration-300 origin-center"
              style={{
                transformOrigin: "11px 6px",
                transform: menuOpen
                  ? "translateY(5px) rotate(45deg)"
                  : "none",
              }}
            />
            {/* Middle line — fades out when open */}
            <line
              x1="3"
              y1="11"
              x2="19"
              y2="11"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            {/* Bottom line → bottom arm of X */}
            <line
              x1="3"
              y1="16"
              x2="19"
              y2="16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="transition-all duration-300 origin-center"
              style={{
                transformOrigin: "11px 16px",
                transform: menuOpen
                  ? "translateY(-5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul
          className="flex flex-col px-6 pb-4 pt-1 gap-1 border-t border-white/10"
          role="list"
        >
          {NAV_LINKS.map(({ label, href, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent-blue bg-accent-blue/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
