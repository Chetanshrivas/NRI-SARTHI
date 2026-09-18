"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function HomeWhy() {
  const points = [
    "Your requirements are organised before action is taken.",
    "Relevant documents, people and processes are identified early.",
    "India-side coordination stays visible through clear updates.",
    "Specialist legal, tax or financial advice can be coordinated where required.",
  ];

  return (
    <section
      id="why-nri-sarthi"
      className="relative overflow-hidden bg-ink text-ivory"
    >
      {/* TOP WAVE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-12 w-full sm:h-14 lg:h-16"
          fill="var(--color-ivory)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1440V28C1320 58 1200 70 1080 58C930 43 860 17 720 28C570 40 470 72 320 61C190 51 95 26 0 35V0Z" />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="site-container relative z-20 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
              <span className="h-px w-10 bg-champagne" />
              Why NRI Sarthi
            </div>

            <h2 className="font-display mt-6 max-w-4xl text-5xl font-medium leading-none tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              A calmer way to manage what cannot be handled from abroad.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-dark-muted sm:text-base sm:leading-8">
              The value is in creating a dependable India-side layer around
              the tasks, people, documents and follow-ups that need local
              attention.
            </p>

            <Link
              href="/why-nri-sarthi"
              className="button-gold mt-8"
            >
              Why NRI Sarthi

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
            className="lg:col-span-5"
          >
            <ul className="border-t border-dark-line">
              {points.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-12 gap-4 border-b border-dark-line py-5 sm:py-6"
                >
                  <span className="col-span-2 text-xs font-semibold tracking-widest text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-10 flex items-start gap-4">
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-champagne"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-7 text-dark-muted sm:text-base">
                      {point}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-12 w-full sm:h-14 lg:h-16"
          fill="var(--color-paper)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 90V55C115 26 220 17 350 29C490 42 570 72 720 62C865 52 950 20 1090 29C1230 38 1325 63 1440 48V90H0Z" />
        </svg>
      </div>
    </section>
  );
}