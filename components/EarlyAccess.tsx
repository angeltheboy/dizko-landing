"use client";

import { FormEvent, useState } from "react";
import { earlyAccess } from "@/lib/content";
import { Section } from "./ui/Section";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <Section id="early-access" className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {earlyAccess.headline}
        </h2>
        <p className="mt-6 text-lg text-white/60">{earlyAccess.subheadline}</p>

        {submitted ? (
          <p className="mt-10 rounded-2xl border border-violet-500/30 bg-violet-500/10 px-6 py-4 text-violet-300">
            Thanks! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@studio.com"
              className="flex-1 rounded-full border border-white/10 bg-[#141414] px-6 py-3 text-white placeholder:text-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
            />
            <button
              type="submit"
              className="shimmer-btn accent-gradient rounded-full px-8 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              {earlyAccess.button}
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-white/40">{earlyAccess.note}</p>
      </div>
    </Section>
  );
}
