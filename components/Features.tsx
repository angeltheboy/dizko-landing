"use client";

import {
  AudioLines,
  Bell,
  Cloud,
  Headphones,
  Music,
  Smartphone,
} from "lucide-react";
import { features } from "@/lib/content";
import { GlowCard } from "./ui/GlowCard";
import { Section } from "./ui/Section";

const iconMap = {
  music: Music,
  cloud: Cloud,
  headphones: Headphones,
  bell: Bell,
  audio: AudioLines,
  smartphone: Smartphone,
};

export function Features() {
  return (
  <>
      <div id="pricing" className="scroll-mt-24" aria-hidden />
      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {features.headline}
          </h2>
          <p className="mt-6 text-lg text-white/60">{features.subheadline}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <GlowCard key={item.title} delay={i * 0.08}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </Section>
    </>
  );
}
