export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-text-secondary tracking-wide">
              &copy; {new Date().getFullYear()} JVANET PTY LTD
            </p>
            <p className="text-xs text-text-muted">
              ABN 26 696 484 107 &middot; Brisbane, Australia
            </p>
          </div>
          <a
            href="mailto:hello@jvanet.com"
            className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
          >
            hello@jvanet.com
          </a>
        </div>
      </div>
    </footer>
  );
}
