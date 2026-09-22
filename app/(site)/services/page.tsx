import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Landmark,
  ReceiptText,
  Scale,
} from "lucide-react";
import { services } from "../../../data/services";

export const metadata = { title: "Services" };

const icons = {
  Building2,
  ArrowLeftRight,
  Scale,
  ReceiptText,
  Landmark,
  ClipboardCheck,
};

export default function ServicesPage() {
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
            Services
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            India-side support across property and asset matters.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Explore the primary service areas and the practical matters that
            may sit within each one.
          </p>
        </div>

        {/* Premium bottom wave */}
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

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          <div className="mb-10 flex items-end justify-between border-b border-ink/10 pb-5 sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                What we handle
              </span>
            </div>

            <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink/30 sm:block">
              NRI Sarthi / Services
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons];

              return (
                <article
                  key={service.slug}
                  className="group relative overflow-hidden border border-ink/10 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-2xl sm:p-8"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-champagne/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Gold hover line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10 text-champagne transition-all duration-500 group-hover:border-champagne/40 group-hover:bg-champagne group-hover:text-ink">
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="font-display text-2xl text-champagne/60 transition-colors duration-500 group-hover:text-champagne">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="font-display mt-9 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-ink-soft">
                      {service.description}
                    </p>

                    <div className="mt-7 border-t border-ink/10 pt-5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sage-deep transition-colors duration-300 hover:text-champagne"
                      >
                        Explore service

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.6}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom statement */}
          <div className="mt-10 border-t border-ink/10 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/35">
                India-side point of coordination
              </span>

              <span className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Clear scope. Organised follow-up.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}