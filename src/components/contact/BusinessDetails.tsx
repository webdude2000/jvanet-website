export default function BusinessDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-lg font-semibold text-text mb-4">
          Business Details
        </h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-text-muted mb-1">Company</dt>
            <dd className="text-text">JVANET PTY LTD</dd>
          </div>
          <div>
            <dt className="text-text-muted mb-1">ABN</dt>
            <dd className="text-text">26 696 484 107</dd>
          </div>
          <div>
            <dt className="text-text-muted mb-1">Location</dt>
            <dd className="text-text">Brisbane, Australia</dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="font-display text-lg font-semibold text-text mb-4">
          Get in Touch
        </h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-text-muted mb-1">Email</dt>
            <dd>
              <a
                href="mailto:hello@jvanet.com"
                className="text-accent hover:text-accent-dim transition-colors duration-200"
              >
                hello@jvanet.com
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-border pt-8">
        <p className="text-sm text-text-secondary leading-relaxed">
          We typically respond within one business day. For product-specific
          enquiries, please mention the product name in your message.
        </p>
      </div>
    </div>
  );
}
