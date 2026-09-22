import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { site } from "../../data/site";

const exploreLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Why NRI Sarthi", "/why-nri-sarthi"],
  ["How We Work", "/how-we-work"],
  ["NRI Property Guide", "/nri-property-guide"],
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      {/* Premium Top Wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block h-14 w-full sm:h-16 lg:h-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1440V42C1310 68 1200 82 1060 65C910 47 840 17 700 30C555 43 455 78 315 66C185 55 92 28 0 38V0Z"
            fill="var(--color-paper)"
          />
        </svg>
      </div>

      {/* Champagne Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-champagne/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 h-72 w-72 rounded-full bg-sage-deep/10 blur-3xl"
      />

      {/* Main Footer */}
      <div className="site-container relative z-20 pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="NRI Sarthi home"
              className="group inline-flex items-center gap-4"
            >
              <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-champagne/30 bg-ivory/5 transition-all duration-300 group-hover:border-champagne/60 group-hover:bg-ivory/10">
                <Image
                  src="/images/nri-sarthi-logo.png"
                  alt="NRI Sarthi"
                  width={100}
                  height={76}
                  className="h-14 w-auto object-contain"
                />
              </span>

              <span>
                <span className="block font-display text-2xl leading-none text-ivory sm:text-3xl">
                  NRI SARTHI
                </span>

                <span className="mt-2 block text-[0.65rem] font-semibold uppercase tracking-widest text-white/45">
                  Property &amp; Asset Advisors
                </span>
              </span>
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-champagne" />
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            </div>

            <h2 className="font-display mt-7 max-w-xl text-4xl font-medium leading-tight text-ivory sm:text-5xl">
              {site.tagline}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              One trusted India-side point of coordination for property,
              legal, documentation, taxation, banking and asset-related
              requirements.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne-light hover:shadow-xl"
            >
              Start a conversation

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/10">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>

          {/* EXPLORE */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                Explore
              </span>
            </div>

            <nav
              className="grid border-t border-white/10"
              aria-label="Footer navigation"
            >
              {exploreLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/55 transition-colors duration-300 hover:text-ivory"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {label}
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-champagne opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                Contact
              </span>
            </div>

            <div className="grid border-t border-white/10">
              {/* EMAIL */}
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 border-b border-white/10 py-4 text-sm text-white/55 transition-colors duration-300 hover:text-ivory"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 transition-all duration-300 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-champagne"
                  />
                </span>

                <span className="pt-1.5">{site.email}</span>
              </a>

              {/* PRIMARY PHONE */}
              <a
                href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                className="group flex items-start gap-4 border-b border-white/10 py-4 text-sm text-white/55 transition-colors duration-300 hover:text-ivory"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 transition-all duration-300 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-champagne"
                  />
                </span>

                <span className="pt-1.5">{site.phonePrimary}</span>
              </a>

              {/* SECONDARY PHONE */}
              <a
                href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}
                className="group flex items-start gap-4 border-b border-white/10 py-4 text-sm text-white/55 transition-colors duration-300 hover:text-ivory"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 transition-all duration-300 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-champagne"
                  />
                </span>

                <span className="pt-1.5">{site.phoneSecondary}</span>
              </a>

              {/* OFFICE LOCATION */}
              <Link
                href="/about#my-office"
                className="group flex items-start gap-4 border-b border-white/10 py-4 text-sm leading-6 text-white/55 transition-colors duration-300 hover:text-ivory"
                aria-label="View NRI Sarthi office location"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 transition-all duration-300 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-champagne"
                  />
                </span>

                <span className="flex items-start justify-between gap-3 pt-1.5">
                  <span>{site.office}</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-champagne opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER DIVIDER */}
        <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
          <div className="flex flex-col gap-4 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
            <span>
              © 2026 NRI SARTHI — Property &amp; Asset Advisors.
            </span>

            <span className="max-w-xl leading-5 md:text-right">
              General information only. Specific matters should be assessed
              on their facts and applicable law.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}