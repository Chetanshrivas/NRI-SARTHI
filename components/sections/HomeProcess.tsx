"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HomeProcess() {
  const steps = [
    [
      "01",
      "Understand",
      "We first understand your property, requirement and concerns."
    ],
    [
      "02",
      "Assess",
      "We identify the relevant documentation, people and processes involved."
    ],
    [
      "03",
      "Plan",
      "We set out practical actions and professional coordination where required."
    ],
    [
      "04",
      "Execute",
      "We manage India-side follow-ups and coordination within the agreed scope."
    ],
    [
      "05",
      "Update",
      "You remain informed through clear communication and periodic updates."
    ]
  ];

  return (
    <section
      className="bg-paper py-16 sm:py-20 lg:py-24"
      id="how-we-work"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink">
              <span className="h-px w-10 bg-champagne" />
              How we work
            </div>

            <h2 className="font-display mt-6 max-w-4xl text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              A visible path from enquiry to follow-up.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
              The process makes the next step clear instead of leaving you to
              guess what happens after an enquiry.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([number, title, text], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04
              }}
              className="group border-b border-ink/10 px-5 py-7 sm:px-6 sm:py-8 lg:border-b-0 lg:border-r lg:px-5 lg:py-9 lg:last:border-r-0"
            >
              <span className="text-xs font-semibold tracking-widest text-champagne">
                {number}
              </span>

              <h3 className="font-display mt-9 text-3xl font-medium leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-sage-deep">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink-soft">
                {text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8"
        >
          <Link
            href="/how-we-work"
            className="button-primary"
          >
            See how we work
            <ArrowRight
              size={16}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}