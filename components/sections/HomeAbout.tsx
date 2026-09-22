"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeAbout() {
  return (
    <section className="section-ivory relative overflow-hidden">
      {/* Premium background atmosphere — one wash on each corner, kept faint */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-112 w-md rounded-full bg-champagne/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sage/8 blur-3xl" />
      </div>

      <div className="site-container relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* ══ LEFT — portrait ═══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* soft glow behind the whole frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-4xl bg-champagne/10 blur-3xl"
              />

              {/* frame */}
              <div className="relative overflow-hidden border border-ink/10 bg-paper-2 p-2 shadow-[0_45px_90px_-45px_rgba(20,20,20,0.45)] sm:p-3">
                {/* inner hairline, offset from the outer border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 z-20 border border-champagne/25 sm:inset-4"
                />

                <div className="relative aspect-4/5 overflow-hidden bg-paper">
                  {/* portrait settles in with a slow, subtle zoom */}
                  <motion.div
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.3, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/images/tarun-gupta.webp"
                      alt="Adv. Tarun Gupta"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain object-center"
                    />
                  </motion.div>

                  {/* curtain — slides up once, revealing the portrait */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                    style={{ originY: 0 }}
                    className="pointer-events-none absolute inset-0 z-10 bg-paper-2"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-ink/12 via-transparent to-white/5"
                  />

                  {/* gold framing corners */}
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-5 z-20 h-10 w-10 border-l border-t border-champagne/70"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-5 bottom-5 z-20 h-10 w-10 border-r border-b border-champagne/70"
                  />

                  {/* identity chip */}
                  <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 border border-white/20 bg-ink/75 px-3 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/85">
                      India-side representative
                    </span>
                  </div>
                </div>
              </div>

              {/* floating card — a hair of tilt, like a card set down on the frame */}
              <motion.div
                initial={{ opacity: 0, y: 18, rotate: -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
                className="relative z-10 mx-5 -mt-9 flex items-center gap-5 border border-ink/10 bg-ivory p-5 shadow-[0_35px_70px_-40px_rgba(20,20,20,0.5)] sm:mx-10 sm:p-6"
              >
                {/* seal */}
                <span
                  aria-hidden="true"
                  className="grid h-14 w-14 shrink-0 rotate-[8deg] place-items-center rounded-full border border-champagne/70 text-champagne"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/40">
                    <span className="font-display text-sm leading-none">
                      TG
                    </span>
                  </span>
                </span>

                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                    India-side representative
                  </span>

                  <strong className="mt-1.5 block truncate font-display text-xl font-medium leading-tight text-ink sm:text-2xl">
                    Adv. Tarun Gupta &amp; Team
                  </strong>

                  <span className="mt-1.5 block text-xs leading-5 text-ink-soft">
                    Property &amp; Asset Advisory · India-side coordination
                  </span>
                </div>
              </motion.div>

              {/* bottom metadata */}
              <div className="mt-6 flex items-center justify-between border-t border-champagne/20 pt-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink/35">
                  NRI Sarthi
                </span>

                <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                  04 — About
                </span>
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT — content ═══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
              <span className="h-px w-8 bg-champagne" />
              Meet your India-side representative
            </div>

            <h2 className="font-display mt-6 max-w-4xl text-ink">
              <span className="block text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Adv. Tarun Gupta
              </span>

              <span className="mt-1 block text-4xl font-normal italic leading-none tracking-tight text-sage-deep sm:text-5xl lg:text-6xl">
                &amp; Team
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
              Adv. Tarun Gupta leads the client-facing professional
              coordination at NRI Sarthi, helping NRIs navigate
              property-related legal, transactional and administrative
              requirements in India.
            </p>

            {/* Experience highlight */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
              className="mt-8 flex items-center gap-5 border-y border-champagne/20 py-5"
            >
              <span className="font-display text-4xl font-medium leading-none text-champagne sm:text-5xl">
                15+
              </span>

              <span className="h-10 w-px bg-champagne/25" />

              <div>
                <strong className="block text-sm font-semibold uppercase tracking-wide text-ink">
                  Years of Experience
                </strong>

                <span className="mt-1 block text-sm leading-6 text-ink-soft">
                  Professional experience in property and asset-related
                  matters.
                </span>
              </div>
            </motion.div>

            {/* Two focus areas */}
            <div className="mt-10 grid border-b border-ink/10 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="border-b border-ink/10 py-7 sm:border-b-0 sm:border-r sm:border-champagne/20 sm:pr-8"
              >
                <span className="font-display text-2xl italic leading-none text-champagne">
                  01
                </span>

                <strong className="mt-4 block text-sm font-semibold text-ink">
                  Property &amp; asset focus
                </strong>

                <span className="mt-3 block text-sm leading-6 text-ink-soft">
                  Structured support around the India-side matters an owner
                  needs to coordinate.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="py-7 sm:pl-8"
              >
                <span className="font-display text-2xl italic leading-none text-champagne">
                  02
                </span>

                <strong className="mt-4 block text-sm font-semibold text-ink">
                  Professional coordination
                </strong>

                <span className="mt-3 block text-sm leading-6 text-ink-soft">
                  Clear communication and follow-up across relevant people and
                  processes.
                </span>
              </motion.div>
            </div>

            <Link href="/about" className="button-primary group mt-9">
              About NRI Sarthi

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}