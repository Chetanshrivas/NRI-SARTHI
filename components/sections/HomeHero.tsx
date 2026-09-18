"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
} from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-ink text-ivory">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/hero/nri-sarthi-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overall Image Treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/45"
      />

      {/* Left-side Readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-ink/90 via-ink/60 to-ink/10"
      />

      {/* Bottom Cinematic Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-linear-to-t from-ink/80 to-transparent"
      />

      {/* Subtle Champagne Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-champagne/10 blur-3xl"
      />

      {/* Hero Content */}
      <div className="site-container relative flex min-h-screen items-center pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-28">
        <div className="w-full max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              x: -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-light"
          >
            <span className="h-px w-10 bg-champagne" />
            India-side support for NRIs
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <h1 className="font-display mt-5 max-w-5xl text-6xl font-medium leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
              Your property in India.

              <span
                className="mt-2 block bg-linear-to-r from-champagne-light via-champagne to-champagne-light bg-clip-text text-transparent"
                style={{
                  textShadow:
                    "0 8px 28px rgba(183, 149, 90, 0.32)",
                }}
              >
                Our responsibility.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: "easeOut",
            }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
          >
            A dependable India-side point of coordination for property,
            documentation, legal, taxation, banking and asset-related
            matters when you live overseas.
          </motion.p>

          {/* CTA Buttons */}
{/* CTA Buttons */}
<motion.div
  initial={{
    opacity: 0,
    y: 18,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0.26,
    ease: "easeOut",
  }}
  className="mt-8 flex flex-col gap-3 sm:flex-row"
>
  {/* Primary CTA */}
  <Link
    href="/contact"
    className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-champagne-light hover:shadow-2xl"
  >
    {/* Premium Shine */}
    <span
      aria-hidden="true"
      className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
    />

    <span className="relative">
      Request a consultation
    </span>

    <ArrowUpRight
      size={16}
      strokeWidth={1.7}
      aria-hidden="true"
      className="relative transition-transform duration-500 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
    />
  </Link>

  {/* Secondary CTA */}
  <Link
    href="/services"
    className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-champagne hover:bg-white/15 hover:shadow-xl"
  >
    {/* Premium Shine */}
    <span
      aria-hidden="true"
      className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
    />

    <span className="relative">
      Explore services
    </span>

    <ArrowUpRight
      size={16}
      strokeWidth={1.7}
      aria-hidden="true"
      className="relative transition-transform duration-500 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
    />
  </Link>
</motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-5"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <ShieldCheck
                size={16}
                strokeWidth={1.5}
                className="text-champagne-light"
                aria-hidden="true"
              />
              India-side coordination
            </div>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <Globe2
                size={16}
                strokeWidth={1.5}
                className="text-champagne-light"
                aria-hidden="true"
              />
              For overseas Indians
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}