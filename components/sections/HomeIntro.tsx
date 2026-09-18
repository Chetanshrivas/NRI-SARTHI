"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Globe2 } from "lucide-react";

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden bg-paper py-14 sm:py-16 lg:py-20">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-champagne/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sage/8 blur-3xl"
      />

      <div className="site-container relative">
        {/* TOP META */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-between border-b border-ink/10 pb-4"
        >
          <p className="eyebrow text-sage-deep">
            <span className="h-px w-8 bg-champagne" />
            A local point of coordination
          </p>

          <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink/30 sm:block">
            01 / Introduction
          </span>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-10 pt-9 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
          {/* LEFT — MAIN STATEMENT */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Small editorial number */}
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-7 hidden font-display text-7xl font-medium leading-none text-champagne/10 sm:block"
              >
                01
              </span>

              <h2 className="relative max-w-5xl font-display text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Distance should not create
                <span className="block text-sage-deep">
                  uncertainty.
                </span>
              </h2>
            </div>

            {/* Small statement beneath heading */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                India-side support
              </span>
            </div>
          </motion.div>

          {/* RIGHT — ADVISORY CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="lg:col-span-5"
          >
            <div className="border-l border-ink/10 pl-6 sm:pl-7">
              <p className="text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                Owning property and assets in India from overseas can mean
                tenants, maintenance, paperwork, legal matters, taxation,
                banking and countless follow-ups.
              </p>

              <p className="mt-4 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                NRI Sarthi brings these India-side requirements into a clear,
                organised experience so you can stay informed without being
                physically present for every step.
              </p>

              {/* Presence statement */}
              <div className="mt-7 border-t border-ink/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne/25 bg-champagne/8 text-champagne">
                    <Globe2
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                      Your India-side presence
                    </p>

                    <p className="mt-2 max-w-md font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
                      Local coordination.
                      <span className="text-ink/45">
                        {" "}
                        Clear communication.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM EDITORIAL LINE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            delay: 0.12,
          }}
          className="mt-10 flex items-center justify-between border-t border-ink/10 pt-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/30">
            Property & asset coordination
          </span>

          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-sage-deep"
          >
            <ArrowDownRight
              size={15}
              strokeWidth={1.5}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}