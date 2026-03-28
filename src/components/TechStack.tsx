"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techCategories = [
  {
    label: "Frontend",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    label: "Platform",
    techs: ["Supabase", "Vercel", "Stripe"],
  },
];

export default function TechStack() {
  const ref = useScrollAnimation();

  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <p className="scroll-hidden text-[11px] text-text-muted tracking-[0.4em] uppercase text-center mb-10">
          Built With
        </p>
        <div className="scroll-hidden flex flex-wrap justify-center gap-x-8 gap-y-6">
          {techCategories.map((category) => (
            <div key={category.label} className="flex items-center gap-3">
              <span className="text-[10px] text-accent/40 tracking-wider uppercase font-medium">
                {category.label}
              </span>
              <span className="w-px h-4 bg-border" />
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-[13px] text-text-secondary border border-border bg-surface-raised/50 hover:border-accent/20 hover:text-text transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
