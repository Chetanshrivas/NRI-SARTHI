"use client";

import { motion, useAnimation } from "framer-motion";
import {
  Building2,
  Globe2,
  Phone,
  Scale,
} from "lucide-react";
import { useEffect } from "react";

const trustItems = [
  {
    label: "Led by",
    value: "Adv. Tarun Gupta & Team",
    icon: Scale,
  },
  {
    label: "India-side presence",
    value: "Based in India",
    icon: Building2,
  },
  {
    label: "Direct contact",
    value: "9899220695",
    sublabel: "WhatsApp · Messages only",
    icon: Phone,
  },
  {
    label: "For overseas Indians",
    value: "NRI Property & Asset Support",
    icon: Globe2,
  },
];

const keywords = [
  "Property Support",
  "Legal & Documentation Support",
  "NRI Asset Support",
  "India-side Assistance",
];

function TrustSet() {
  return (
    <div className="flex shrink-0 items-center">
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.value}
            className="flex shrink-0 items-center gap-3 px-6 sm:gap-4 sm:px-8"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne-light">
              <Icon
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>

            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {item.label}
              </span>

              <span className="mt-1 font-display text-lg font-medium leading-none text-ivory sm:text-xl">
                {item.value}
              </span>

              {item.sublabel ? (
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/35">
                  {item.sublabel}
                </span>
              ) : null}
            </span>

            <span
              aria-hidden="true"
              className="ml-2 h-7 w-px bg-white/10 sm:ml-3"
            />
          </div>
        );
      })}

      {keywords.map((keyword) => (
        <div
          key={keyword}
          className="flex shrink-0 items-center gap-3 px-6 sm:px-8"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
          />

          <span className="text-xs font-semibold uppercase tracking-widest text-white/55">
            {keyword}
          </span>

          <span
            aria-hidden="true"
            className="ml-2 h-7 w-px bg-white/10 sm:ml-3"
          />
        </div>
      ))}
    </div>
  );
}

export function HomeTrustMain() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 34,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <section
      aria-label="NRI Sarthi trust and contact information"
      className="relative overflow-hidden bg-ink pb-10 text-ivory sm:pb-12"
    >
      {/* Top label */}
      <div className="site-container">
        <div className="flex items-center justify-between border-b border-white/10 py-3.5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-champagne" />

            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              India-side presence
            </span>
          </div>

          <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/30 sm:block">
            NRI Sarthi
          </span>
        </div>
      </div>

      {/* Continuous moving trust line */}
      <div className="overflow-hidden py-5 sm:py-6">
        <motion.div
          animate={controls}
          className="flex w-max will-change-transform"
        >
          <TrustSet />
          <TrustSet />
        </motion.div>
      </div>

      {/* Bottom information */}
      <div className="site-container">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 py-3.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/35">
            Your India-side support
          </span>

          <span
            aria-hidden="true"
            className="hidden h-3 w-px bg-white/15 sm:block"
          />

          <span className="text-xs text-white/45">
            Property • Documentation • Legal • Taxation • Banking
          </span>
        </div>
      </div>

      {/* Lower wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-px"
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="block h-8 w-full sm:h-10"
        >
          <path
            d="M0 30C180 6 360 6 540 28C720 50 900 50 1080 28C1260 6 1350 8 1440 22V64H0Z"
            fill="var(--color-paper)"
          />
        </svg>
      </div>
    </section>
  );
}