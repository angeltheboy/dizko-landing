"use client";

import { testimonials } from "@/lib/content";
import { GlowCard } from "./ui/GlowCard";
import { Section } from "./ui/Section";

export function Testimonials() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {testimonials.headline}
        </h2>
        <p className="mt-6 text-lg text-white/60">{testimonials.subheadline}</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <GlowCard key={item.name} delay={i * 0.1}>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-sm font-bold text-white">
                {item.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-violet-400/80">{item.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">&ldquo;{item.quote}&rdquo;</p>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
