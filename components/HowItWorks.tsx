"use client";

import { Sparkles, Upload, Users } from "lucide-react";
import { howItWorks } from "@/lib/content";
import { Section } from "./ui/Section";

const iconMap = {
  upload: Upload,
  sparkles: Sparkles,
  users: Users,
};

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {howItWorks.headline}
        </h2>
      </div>

      <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
        {howItWorks.steps.map((step, i) => {
          const Icon = iconMap[step.icon];
          const isLast = i === howItWorks.steps.length - 1;

          return (
            <div key={step.title} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {!isLast && (
                <div
                  className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-violet-500/50 to-blue-500/50 lg:block lg:left-[calc(50%+2rem)] lg:w-[calc(100%-4rem)]"
                  aria-hidden
                />
              )}

              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                <Icon className="h-8 w-8" />
              </div>

              {i < howItWorks.steps.length - 1 && (
                <div className="my-4 h-8 w-0.5 bg-gradient-to-b from-violet-500/50 to-transparent lg:hidden" aria-hidden />
              )}

              <span className="mb-2 text-sm font-medium text-violet-400">
                Step {i + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-sm text-white/50">{step.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
