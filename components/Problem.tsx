"use client";

import { Clock, FolderOpen, RefreshCw } from "lucide-react";
import { problem } from "@/lib/content";
import { GlowCard } from "./ui/GlowCard";
import { Section } from "./ui/Section";

const iconMap = {
  folder: FolderOpen,
  refresh: RefreshCw,
  clock: Clock,
};

export function Problem() {
  return (
    <Section className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {problem.headline}
        </h2>
        <p className="mt-6 text-lg text-white/60">{problem.paragraph}</p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problem.painPoints.map((point, i) => {
          const Icon = iconMap[point.icon];
          return (
            <GlowCard key={point.title} delay={i * 0.1}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-lg font-medium text-white">{point.title}</p>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
