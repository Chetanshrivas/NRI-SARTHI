import { guideItems } from "../../../data/guide";

export const metadata = { title: "NRI Property Guide" };

export default function NriPropertyGuidePage() {
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
            NRI Property Guide
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            Practical answers before you take the next step.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            General information for NRIs dealing with property and assets in
            India. Specific matters should always be assessed on their facts
            and applicable law.
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

      {/* GUIDE */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          <div className="mb-10 flex items-center justify-between border-b border-ink/10 pb-5 sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne" />

              <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                Practical guidance
              </span>
            </div>

            <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink/30 sm:block">
              NRI Sarthi / Guide
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {guideItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-ink/10 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-xl sm:p-8"
              >
                {/* Gold hover line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full"
                />

                {/* Soft hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-champagne/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-champagne/70 transition-colors duration-300 group-hover:text-champagne">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-champagne/40 transition-all duration-300 group-hover:bg-champagne group-hover:shadow-lg" />
                  </div>

                  <h2 className="font-display mt-9 max-w-xl text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
                    {item.answer}
                  </p>

                  <div className="mt-7 h-px w-8 bg-champagne/40 transition-all duration-500 group-hover:w-14" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <p className="max-w-3xl text-xs leading-6 text-ink/45">
              This guide is intended as general information and is not a
              substitute for advice on the facts and circumstances of a
              specific matter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}