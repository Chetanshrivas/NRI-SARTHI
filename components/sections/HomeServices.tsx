"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeServices() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-28" id="services">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink">
              <span className="h-px w-10 bg-champagne" />
              What we handle
            </div>

            <h2 className="font-display mt-6 max-w-5xl text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              A considered practice,
              <br />
              not a generic package.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-2xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
              Each matter is understood through its documents, location,
              people and practical requirements.
            </p>
          </div>
        </motion.div>

        {/* ══ Mobile / tablet — real stacked cards ══════════════ */}
        <div className="grid gap-4 pt-10 sm:gap-5 lg:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative isolate block overflow-hidden rounded-[10px] border border-ink/10 bg-white shadow-[0_20px_45px_-30px_rgba(20,20,20,0.35)] transition-transform duration-300 active:scale-[0.985]"
              >
                {/* thin gold cap on every card, always visible */}
                <span
                  aria-hidden="true"
                  className="block h-0.75 w-full bg-champagne/70"
                />

                {/* gold fill — sweeps in left to right on tap */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-champagne transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-active:scale-x-100"
                />
                {/* soft bloom underneath the fill */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 bg-champagne-light/40 opacity-0 blur-2xl transition-opacity duration-500 group-active:opacity-100"
                />
                {/* bright streak that glides across once the gold lands */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.6)_50%,transparent_62%)] transition-transform delay-150 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-active:translate-x-full"
                />

                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-champagne transition-colors duration-500 group-active:text-black">
                      {service.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-500 group-active:rotate-45 group-active:border-ink group-active:bg-ink group-active:text-ivory"
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-[1.6rem] font-medium leading-[1.1] tracking-tight text-ink transition-colors duration-500 group-active:text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft transition-colors duration-500 group-active:text-black/75">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ══ Desktop — ledger rows ══════════════════════════════ */}
        <div className="hidden border-b border-ink/10 pt-4 lg:block">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.035, ease: EASE }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative grid grid-cols-12 items-center gap-8 overflow-hidden border-t border-ink/10 px-6 py-8"
              >
                {/* spine — grows from centre on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-0.75 scale-y-0 bg-champagne transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />

                {/* gold fill */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-champagne transition-transform duration-650 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                {/* soft bloom */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/3 bg-champagne-light/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* shine streak */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.6)_50%,transparent_62%)] transition-transform delay-150 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full"
                />

                <span className="relative z-10 col-span-1 text-xs font-semibold tracking-widest text-champagne transition-colors delay-100 duration-300 group-hover:text-black">
                  {service.number}
                </span>

                <h3 className="relative z-10 col-span-4 font-display text-2xl font-medium leading-tight tracking-tight text-ink transition-colors delay-100 duration-300 group-hover:text-black xl:text-3xl">
                  {service.title}
                </h3>

                <p className="relative z-10 col-span-5 pr-4 text-sm leading-7 text-ink-soft transition-colors delay-100 duration-300 group-hover:text-black/75">
                  {service.description}
                </p>

                <span className="relative z-10 col-span-2 flex items-center justify-end gap-3">
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.8125rem] font-medium text-black opacity-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-36 group-hover:opacity-100">
                    View service
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/10 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory"
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}