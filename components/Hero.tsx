"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { FloatingCards } from "./hero/FloatingCards";
import { WaveformBg } from "./hero/WaveformBg";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden grain-overlay bg-hero-glow pt-24">
      <WaveformBg />
      <FloatingCards />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-white/60 md:text-xl">
            {hero.subheadline}
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="#early-access" variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href="#how-it-works" variant="ghost">
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl shadow-violet-500/10">
            <div className="flex border-b border-white/10 bg-[#0d0d0d] px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="mx-auto text-xs text-white/30">
                dizko — Project Dashboard
              </span>
            </div>
            <div className="flex aspect-[16/10]">
              <div className="hidden w-48 shrink-0 border-r border-white/10 bg-[#0d0d0d] p-4 sm:block">
                <div className="mb-4 h-3 w-20 rounded bg-white/10" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`mb-2 h-8 rounded-lg ${
                      i === 1
                        ? "border border-violet-500/30 bg-violet-500/20"
                        : "bg-white/5"
                    }`}
                  />
                ))}
              </div>
              <div className="flex-1 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-5 w-32 rounded bg-white/10" />
                  <div className="h-8 w-24 rounded-full bg-violet-500/30" />
                </div>
                <div className="space-y-3">
                  {[
                    "Track 01 — Intro",
                    "Track 02 — Verse",
                    "Track 03 — Chorus",
                    "Track 04 — Bridge",
                  ].map((track, i) => (
                    <div
                      key={track}
                      className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                    >
                      <div className="h-10 w-10 shrink-0 rounded bg-gradient-to-br from-violet-500/40 to-blue-500/40" />
                      <div className="flex-1">
                        <p className="text-sm text-white/80">{track}</p>
                        <div className="mt-2 flex gap-1">
                          {Array.from({ length: 24 }).map((_, j) => (
                            <div
                              key={j}
                              className="w-0.5 rounded-full bg-violet-500/50"
                              style={{
                                height: `${8 + Math.sin(j + i) * 12}px`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-white/30">3:42</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
