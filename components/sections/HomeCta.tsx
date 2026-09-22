"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HomeCta() {
  return (
    <section className="bg-ivory pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[2.5rem] border border-stone-800/60 bg-stone-900 p-10 text-stone-50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] sm:p-14 lg:p-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-linear-to-l from-stone-800/80 via-stone-900 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-champagne/8 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-champagne/6 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/6"
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne">
                <span className="h-px w-10 bg-linear-to-r from-champagne to-transparent" />
                Need India-side assistance?
              </div>

              <h2 className="font-display mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
                Let us understand
                <br />
                <span className="text-stone-400">the matter first.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-stone-400 sm:text-base">
                Share the basic details. A clearer next step starts with a
                better understanding of the issue.
              </p>
            </div>

            <Link
              href="/contact"
              className="group/btn relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-champagne px-8 py-4 text-sm font-semibold tracking-wide text-stone-900 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(212,175,120,0.5)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
              />

              <span className="relative">Request a consultation</span>

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="relative transition-transform duration-500 ease-out group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}