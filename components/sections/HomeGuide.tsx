"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { guideItems } from "../../data/guide";

export function HomeGuide() {
  const featuredItem = guideItems[0];
  const remainingItems = guideItems.slice(1, 5);

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink">
              <span className="h-px w-10 bg-champagne" />
              NRI Property Guide
            </div>

            <h2 className="font-display mt-6 max-w-4xl text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Practical answers.
              <br />
              Plain language.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
              A considered starting point for NRIs dealing with property and
              assets in India.
            </p>
          </div>
        </motion.div>

        {featuredItem && (
          <div className="grid gap-10 border-b border-ink/10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-11">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                Featured question
              </span>

              <h3 className="font-display mt-7 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {featuredItem.title}
              </h3>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                {featuredItem.answer}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lg:col-span-5"
            >
              <div className="border-t border-ink/10">
                {remainingItems.map((item, index) => (
                  <Link
                    key={item.title}
                    href="/nri-property-guide"
                    className="group grid grid-cols-12 items-center gap-4 border-b border-ink/10 py-5 transition-colors duration-300 hover:bg-paper-2 sm:py-6"
                  >
                    <span className="col-span-1 text-xs font-semibold tracking-widest text-champagne">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <span className="col-span-10 font-display text-xl font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-sage-deep sm:text-2xl">
                      {item.title}
                    </span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="col-span-1 justify-self-end text-ink/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>

              <Link
                href="/nri-property-guide"
                className="button-outline mt-8"
              >
                Read the guide
                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}