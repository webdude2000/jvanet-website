"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "Node.js",
  "Python",
  "PostgreSQL",
];

export default function TechStack() {
  const ref = useScrollAnimation();

  return (
    <section id="stack" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-500 mb-8">Built With</h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <span
              key={tech}
              className="scroll-hidden px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-400 hover:border-accent-blue/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
