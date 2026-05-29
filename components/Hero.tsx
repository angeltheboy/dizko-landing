"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/motion";
import { HeroVisual } from "./hero/HeroVisual";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="hero-wave-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="diagonal-stripe pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-violet-500/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-signal/5 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Logo size={44} priority className="rounded-2xl" />
              <span className="pill-tag border-accent/20 text-accent">
                Creative Power Unlocked
              </span>
            </div>

            <Label index={1}>For musicians &amp; producers</Label>

            <h1 className="mt-6 font-display text-[2.75rem] font-bold uppercase leading-[0.92] tracking-tight text-primary sm:text-6xl lg:text-[4.25rem]">
              Your music,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">organized.</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-accent/25"
                  aria-hidden
                />
              </span>
              <br />
              Your team,{" "}
              <span className="font-serif text-[0.92em] normal-case italic text-accent">
                in sync.
              </span>
            </h1>

            <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-secondary sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#early-access">{hero.primaryCta}</Button>
              <Button href="#how-it-works" variant="ghost">
                {hero.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Smart tagging", "DAW sync", "Real-time collab"].map((tag) => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
