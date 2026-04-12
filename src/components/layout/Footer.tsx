import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-display font-bold text-text text-sm tracking-wide">
              JVANET PTY LTD
            </p>
            <p className="text-xs text-text-muted">
              ABN 26 696 484 107
            </p>
            <p className="text-xs text-text-muted">
              Brisbane, Australia
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-1 md:items-end">
            <a
              href="mailto:hello@jvanet.com"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              hello@jvanet.com
            </a>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} JVANET PTY LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
