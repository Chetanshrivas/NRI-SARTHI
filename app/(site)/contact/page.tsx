import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../../../components/sections/ContactForm";
import { site } from "../../../data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
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
            Contact NRI Sarthi
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            Let us understand the
            <br className="hidden sm:block" />
            matter first.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Share the basic details of your requirement. We can then
            understand the relevant service path and next step.
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

      {/* CONTACT CONTENT */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* DIRECT CONTACT */}
            <div className="lg:col-span-2">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
                <span className="h-px w-10 bg-champagne" />
                Direct contact
              </p>

              <h2 className="font-display mt-6 max-w-lg text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
                Adv. Tarun Gupta &amp; Team
              </h2>

              <div className="mt-8 border-t border-ink/10">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 border-b border-ink/10 py-5 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne">
                    <Mail
                      size={17}
                      strokeWidth={1.5}
                      className="text-champagne group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{site.email}</span>
                </a>

                <a
                  href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 border-b border-ink/10 py-5 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne">
                    <Phone
                      size={17}
                      strokeWidth={1.5}
                      className="text-champagne group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{site.phonePrimary}</span>
                </a>

                <a
                  href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 border-b border-ink/10 py-5 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne">
                    <Phone
                      size={17}
                      strokeWidth={1.5}
                      className="text-champagne group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{site.phoneSecondary}</span>
                </a>

                <div className="flex items-start gap-4 border-b border-ink/10 py-5 text-sm leading-6 text-ink-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/10">
                    <MapPin
                      size={17}
                      strokeWidth={1.5}
                      className="text-champagne"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{site.office}</span>
                </div>
              </div>

              <div className="mt-7 border-l-2 border-champagne pl-5">
                <p className="font-display text-2xl font-medium leading-tight text-ink">
                  Your India-side point of coordination.
                </p>

                <p className="mt-2 text-xs leading-6 text-ink-soft">
                  Share the requirement and the relevant next step can be
                  understood from there.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}