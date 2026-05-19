"use client";

import { motion } from "framer-motion";
import { quote } from "@/lib/content";

export function Quote() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-violet-600/20 via-transparent to-transparent"
        aria-hidden
      />
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="text-2xl font-medium italic leading-relaxed text-white/90 md:text-3xl lg:text-4xl">
          &ldquo;{quote.text}&rdquo;
        </p>
        <footer className="mt-8 text-lg text-violet-400/80">{quote.attribution}</footer>
      </motion.blockquote>
    </section>
  );
}
