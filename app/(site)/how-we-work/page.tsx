import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = { title: "How We Work" };

const steps = [
  [
    "01",
    "Understand",
    "Listen to the matter, property, location, documents and the outcome you need.",
  ],
  [
    "02",
    "Assess",
    "Identify the relevant records, people, processes and practical constraints.",
  ],
  [
    "03",
    "Plan",
    "Set out the next actions and coordinate with relevant professional specialists where required.",
  ],
  [
    "04",
    "Execute",
    "Handle India-side follow-ups, communication and coordination within the agreed scope.",
  ],
  [
    "05",
    "Update",
    "Keep the client informed about progress, pending actions and the next step.",
  ],
];

export default function HowWeWorkPage() {
  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-24 text-ivory sm:pt-40 sm:pb-28 lg:pb-32">
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
            How we work
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            A process that makes the next step visible.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Every matter starts with understanding the requirement. The scope,
            documentation and professional involvement are then mapped before
            India-side action is taken.
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

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          <div className="mb-10 flex items-center justify-between border-b border-ink/10 pb-5 sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                The process
              </span>
            </div>

            <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink/30 sm:block">
              NRI Sarthi / 02
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map(([number, title, text]) => (
              <article
                key={number}
                className="group relative overflow-hidden border border-ink/10 bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-xl sm:p-7"
              >
                {/* Gold top reveal */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full"
                />

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-champagne/70 transition-colors duration-300 group-hover:text-champagne">
                    {number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-champagne/40 transition-all duration-300 group-hover:bg-champagne group-hover:shadow-lg" />
                </div>

                <h2 className="font-display mt-10 text-3xl font-medium leading-tight text-ink">
                  {title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-ink-soft">
                  {text}
                </p>

                <div className="mt-7 h-px w-8 bg-champagne/40 transition-all duration-500 group-hover:w-14" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="relative overflow-hidden bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-champagne/10 blur-3xl"
        />

        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-light">
                <span className="h-px w-10 bg-champagne" />
                What you can expect
              </div>

              <h2 className="font-display mt-6 max-w-4xl text-5xl font-medium leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Clear scope.
                <span className="block text-white/55">
                  Organised follow-up.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3 text-sm leading-6 text-white/65">
                  <Check
                    className="mt-0.5 shrink-0 text-champagne"
                    size={17}
                    strokeWidth={1.7}
                  />
                  Clear scope and practical next steps.
                </div>

                <div className="flex items-start gap-3 text-sm leading-6 text-white/65">
                  <Check
                    className="mt-0.5 shrink-0 text-champagne"
                    size={17}
                    strokeWidth={1.7}
                  />
                  Organised communication and follow-up.
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-champagne-light"
              >
                Discuss your matter

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}