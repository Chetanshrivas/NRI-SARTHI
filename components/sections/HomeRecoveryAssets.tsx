"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const recoveryPoints = [
  "Recovery of bank deposits, insurance proceeds and mutual fund investments",
  "Resolution of ownership, transmission and succession issues",
  "Assistance in cases involving deceased holders and missing nominees",
  "Preparation and submission of KYC, legal and supporting documents",
  "Liaison with companies, RTAs, banks, insurers and government authorities",
  "End-to-end asset recovery and claim management",
];

export function HomeRecoveryAssets() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-champagne/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sage-deep/10 blur-3xl"
      />

      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
              <span className="h-px w-10 bg-champagne" />
              Asset Recovery
            </div>

            <h2 className="font-display mt-6 max-w-5xl text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Recovery of Unclaimed &amp; Disputed Assets
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-2xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
              India-side assistance and coordination for unclaimed assets,
              ownership issues, succession matters and related recovery
              requirements.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">
          {recoveryPoints.map((point, index) => (
            <motion.article
              key={point}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: EASE,
              }}
              className="group relative overflow-hidden border border-ink/10 bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-xl sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full"
              />

              <div className="relative flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10 text-champagne transition-all duration-300 group-hover:border-champagne/40 group-hover:bg-champagne group-hover:text-ink">
                  <Check size={15} strokeWidth={1.6} aria-hidden="true" />
                </span>

                <div>
                  <span className="text-xs font-semibold tracking-widest text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-sm leading-7 text-ink sm:text-base sm:leading-8">
                    {point}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="mt-8 flex flex-col gap-4 border-t border-ink/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-ink-soft">
            Structured coordination across documentation, institutions and
            relevant authorities.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sage-deep transition-colors duration-300 hover:text-champagne"
          >
            Discuss an asset recovery matter
            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}