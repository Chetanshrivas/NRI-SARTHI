import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

export const metadata = { title: "Why NRI Sarthi" };

export default function WhyNriSarthiPage() {
  const principles = [
    ["Clarity", "We organise the matter and make the next step visible."],
    [
      "Communication",
      "You should know what has been done, what is pending and what is needed from you.",
    ],
    [
      "Coordination",
      "India-side actions often involve several people; the work is easier when the communication is organised.",
    ],
    [
      "Professional boundaries",
      "Where specialist legal, tax or financial advice is required, the matter should be handled with the appropriately qualified professional.",
    ],
  ];

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-24 text-ivory sm:pt-40 sm:pb-28 lg:pb-32">
        {/* Soft premium atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-sage-deep/15 blur-3xl"
        />

        <div className="site-container relative">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-light">
            <span className="h-px w-10 bg-champagne" />
            Why NRI Sarthi
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            A calmer way to manage what cannot be handled from abroad.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            The value is not in adding complexity. It is in creating a
            dependable India-side layer around the tasks, people, documents
            and follow-ups that need local attention.
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

      {/* PRINCIPLES */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map(([title, text], index) => (
              <article
                key={title}
                className="group relative overflow-hidden border border-ink/10 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-xl sm:p-8"
              >
                {/* Gold hover sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-champagne transition-transform duration-500 group-hover:scale-y-100"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-champagne">
                      0{index + 1}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 bg-champagne/8 text-sage-deep transition-colors duration-300 group-hover:border-champagne/40 group-hover:bg-champagne/15">
                      <ShieldCheck size={17} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h2 className="font-display mt-8 text-3xl font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-sage-deep">
                    {title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">
                    {text}
                  </p>

                  <div className="mt-7 h-px w-10 bg-champagne/50 transition-all duration-500 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>

          {/* Visibility panel */}
          <div className="relative mt-8 overflow-hidden border border-ink/10 bg-paper-2 p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-champagne/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
                <span className="h-px w-8 bg-champagne" />
                Our approach
              </div>

              <h2 className="font-display mt-5 max-w-3xl text-4xl font-medium leading-tight text-ink sm:text-5xl">
                A relationship designed around visibility.
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
                  <Check
                    className="mt-0.5 shrink-0 text-champagne"
                    size={17}
                    strokeWidth={1.7}
                  />

                  <span className="text-sm leading-6 text-ink-soft">
                    Clear scope before work begins.
                  </span>
                </div>

                <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
                  <Check
                    className="mt-0.5 shrink-0 text-champagne"
                    size={17}
                    strokeWidth={1.7}
                  />

                  <span className="text-sm leading-6 text-ink-soft">
                    Updates that explain the status.
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-champagne hover:text-ink"
              >
                Start a conversation

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