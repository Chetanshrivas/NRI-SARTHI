import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = { title: "About" };

export default function AboutPage() {
  const points = [
    "Property and documentation matters",
    "NRI-focused India-side coordination",
    "Clear, process-led communication",
    "Coordination with relevant professional specialists where required",
  ];

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
            A dependable India-side presence when you live overseas.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            NRI Sarthi is structured around the practical reality of managing
            property and assets in India from another country: someone needs
            to understand the matter, coordinate locally, follow up and keep
            the owner informed.
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
              fill="#f3efe6"
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* REPRESENTATIVE */}
            <div className="group relative overflow-hidden border border-ink/10 bg-ivory p-8 transition-all duration-500 hover:border-champagne/30 hover:shadow-xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-champagne/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                    Your India-side representative
                  </span>

                  <span className="font-display text-2xl text-champagne/60">
                    01
                  </span>
                </div>

                <h2 className="font-display mt-8 text-5xl font-medium leading-none tracking-tight text-ink sm:text-6xl">
                  Adv. Tarun Gupta
                </h2>

                <div className="mt-7 h-px w-12 bg-champagne transition-all duration-500 group-hover:w-20" />

                <p className="mt-7 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                  Adv. Tarun Gupta leads the client-facing professional
                  coordination at NRI Sarthi, helping NRIs navigate
                  property-related legal, transactional and administrative
                  requirements in India.
                </p>

                <Link
                  href="/contact"
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-champagne hover:text-ink"
                >
                  Discuss your requirement

                  <ArrowRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* RELATIONSHIP */}
            <div className="relative overflow-hidden border border-ink/10 bg-paper-2 p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sage/15 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                    What the relationship is built around
                  </span>

                  <span className="font-display text-2xl text-champagne/60">
                    02
                  </span>
                </div>

                <ul className="mt-7 grid gap-1">
                  {points.map((point, index) => (
                    <li
                      key={point}
                      className="group/item flex items-start gap-4 border-b border-ink/10 py-5 last:border-b-0"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne transition-all duration-300 group-hover/item:border-champagne/50 group-hover/item:bg-champagne group-hover/item:text-ink">
                        <Check size={13} strokeWidth={1.8} />
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
                Local coordination. Clear communication.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}