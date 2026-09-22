import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { site } from "../../../data/site";

export const metadata = {
  title: "About",
  description:
    "Learn about Adv. Tarun Gupta and NRI Sarthi's India-side coordination for property, legal, title, succession, taxation, banking and asset-related matters.",
};

const points = [
  "Property title, ownership and documentation matters",
  "Inheritance, succession, partition and possession-related matters",
  "Property transactions, due diligence and registration coordination",
  "NRI taxation, TDS and repatriation documentation coordination",
  "Banking, financial-asset and claim-related coordination",
  "Coordination with appropriately qualified legal, tax and financial professionals where required",
];

const officeDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=No-5%2C%20Sector%2016A%2C%20Part-1%2C%20Faridabad%2C%20Haryana%20121002%2C%20India";

export default function AboutPage() {
  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-24 text-ivory sm:pt-40 sm:pb-28 lg:pb-32">
        {/* Premium atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sage-deep/15 blur-3xl"
        />

        <div className="site-container relative">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-light">
            <span className="h-px w-10 bg-champagne" />
            About NRI Sarthi
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            India-side legal and asset coordination for NRIs.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            NRI Sarthi provides structured India-side coordination and
            assistance in relation to property, title, documentation,
            succession, transactions, taxation, banking and asset-related
            matters for NRIs who manage their affairs from outside India.
          </p>
        </div>

        {/* Bottom wave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-px"
        >
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="block h-14 w-full sm:h-16"
          >
            <path
              d="M0 48C180 8 360 8 540 40C720 72 900 82 1080 46C1260 12 1350 12 1440 30V90H0Z"
              fill="var(--color-paper)"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          {/* REPRESENTATIVE INTRO */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="group relative overflow-hidden border border-ink/10 bg-ivory p-8 transition-all duration-500 hover:border-champagne/30 hover:shadow-xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-champagne/8 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                    India-side representative
                  </span>

                  <span className="font-display text-2xl text-champagne/60">
                    01
                  </span>
                </div>

                <h2 className="font-display mt-8 text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl">
                  Adv. Tarun Gupta
                </h2>

                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-sage-deep">
                  Property &amp; Asset Advisors
                </p>

                <div className="mt-7 h-px w-12 bg-champagne transition-all duration-500 group-hover:w-20" />

                <p className="mt-7 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                  Adv. Tarun Gupta leads the client-facing professional
                  coordination at NRI Sarthi, with a focus on India-side
                  property and asset matters involving ownership,
                  documentation, transactions, succession, title-related
                  issues and related administrative requirements.
                </p>

                <p className="mt-5 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                  The work is structured around organising the relevant facts
                  and documents, coordinating the required India-side
                  processes and maintaining clear communication with NRIs
                  throughout the matter.
                </p>

                <Link
                  href="/contact"
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-champagne hover:text-ink"
                >
                  Discuss your requirement

                  <ArrowRight
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="relative overflow-hidden border border-ink/10 bg-paper-2 p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sage/15 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                    Professional experience
                  </span>

                  <span className="font-display text-2xl text-champagne/60">
                    02
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-5">
                  <span className="font-display text-7xl font-medium leading-none text-champagne sm:text-8xl">
                    15+
                  </span>

                  <div className="pb-2">
                    <span className="block text-sm font-semibold uppercase tracking-widest text-ink">
                      Years
                    </span>

                    <span className="mt-1 block text-sm text-ink-soft">
                      of professional experience
                    </span>
                  </div>
                </div>

                <div className="mt-8 h-px w-16 bg-champagne" />

                <p className="mt-7 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                  Experience is applied through a structured approach to
                  property and asset-related matters, with attention to
                  documentation, ownership records, transaction requirements,
                  succession-related formalities and India-side coordination.
                </p>

                <div className="mt-8 grid gap-4 border-t border-ink/10 pt-7 sm:grid-cols-2">
                  <div>
                    <span className="font-display text-2xl text-champagne">
                      01
                    </span>

                    <strong className="mt-2 block text-sm font-semibold text-ink">
                      Matter assessment
                    </strong>

                    <span className="mt-2 block text-sm leading-6 text-ink-soft">
                      Relevant facts, documents and requirements are organised
                      before further action.
                    </span>
                  </div>

                  <div>
                    <span className="font-display text-2xl text-champagne">
                      02
                    </span>

                    <strong className="mt-2 block text-sm font-semibold text-ink">
                      India-side coordination
                    </strong>

                    <span className="mt-2 block text-sm leading-6 text-ink-soft">
                      Follow-up is coordinated with the relevant persons,
                      institutions and authorities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AREA OF WORK */}
          <div className="mt-8 border border-ink/10 bg-ivory p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
                  <span className="h-px w-8 bg-champagne" />
                  Areas of coordination
                </div>

                <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-ink sm:text-5xl">
                  Structured support across property &amp; asset matters.
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                  The scope of assistance depends on the facts of the matter,
                  the documents available and the professional or institutional
                  processes applicable to it.
                </p>
              </div>

              <div className="lg:col-span-8">
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="group/item flex items-start gap-4 border-b border-ink/10 py-5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne transition-all duration-300 group-hover/item:border-champagne/50 group-hover/item:bg-champagne group-hover/item:text-ink">
                        <Check
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="pt-0.5 text-sm leading-6 text-ink-soft transition-colors duration-300 group-hover/item:text-ink">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL APPROACH */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="border border-ink/10 bg-paper-2 p-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                  Professional approach
                </span>

                <span className="font-display text-2xl text-champagne/60">
                  03
                </span>
              </div>

              <h2 className="font-display mt-7 text-4xl font-medium leading-tight text-ink sm:text-5xl">
                Clear scope. Organised documentation. Coordinated action.
              </h2>

              <p className="mt-6 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                Property and asset matters involving NRIs may require
                coordination among multiple parties, including legal
                professionals, chartered accountants, banks, companies,
                registrars, RTAs and government or local authorities.
              </p>

              <p className="mt-5 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                NRI Sarthi helps organise and coordinate the India-side
                requirements while maintaining appropriate professional
                boundaries. Where specialist legal, tax, valuation or
                financial advice is required, the matter can be coordinated
                with the appropriately qualified professional.
              </p>
            </div>

            <div className="border border-ink/10 bg-ivory p-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                  For NRIs
                </span>

                <span className="font-display text-2xl text-champagne/60">
                  04
                </span>
              </div>

              <h2 className="font-display mt-7 text-4xl font-medium leading-tight text-ink sm:text-5xl">
                An India-side point of coordination when you are abroad.
              </h2>

              <p className="mt-6 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                From property inspections and transaction documentation to
                succession, title-related issues, banking requirements and
                asset claims, the objective is to keep the India-side process
                organised and visible.
              </p>

              <Link
                href="/how-we-work"
                className="button-primary group mt-8"
              >
                See how we work

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* MY OFFICE */}
          <div
  id="my-office"
  className="mt-8 scroll-mt-28 overflow-hidden border border-ink/10 bg-ink text-ivory"
>
            <div className="grid lg:grid-cols-12">
              <div className="p-8 sm:p-10 lg:col-span-5 lg:p-12">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
                  <span className="h-px w-8 bg-champagne" />
                  My Office
                </div>

                <h2 className="font-display mt-6 text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                  Meet us in Faridabad.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  NRI Sarthi's India-side office is based in Faridabad,
                  Haryana, providing a local point of coordination for matters
                  requiring India-side attention.
                </p>

                <div className="mt-8 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-champagne/10">
                    <MapPin
                      size={19}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-champagne"
                    />
                  </span>

                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-champagne">
                      Office address
                    </span>

                    <address className="mt-2 not-italic text-sm leading-7 text-white/70">
                      {site.office}
                    </address>
                  </div>
                </div>

                <a
                  href={officeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne-light"
                >
                  Get directions

                  <ExternalLink
                    size={15}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* MAP */}
              <div className="relative min-h-80 bg-paper-2 lg:col-span-7">
                <iframe
                  title="NRI Sarthi office location"
                  src="https://www.google.com/maps?q=No-5%2C%20Sector%2016A%2C%20Part-1%2C%20Faridabad%2C%20Haryana%20121002%2C%20India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />
              </div>
            </div>
          </div>

          {/* LOWER STATEMENT */}
          <div className="mt-8 border-t border-ink/10 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-champagne" />

                <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                  NRI Sarthi
                </span>
              </div>

              <span className="font-display text-2xl font-medium text-ink sm:text-3xl">
                India-side coordination. Clear communication.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}