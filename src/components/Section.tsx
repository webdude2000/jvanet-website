interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  divider = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-28 px-6 ${className}`}>
      {divider && <div className="section-line max-w-5xl mx-auto mb-24 md:mb-28" />}
      {children}
    </section>
  );
}
