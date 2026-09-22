import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Why NRI Sarthi",
  description:
    "Understand NRI Sarthi's India-side approach to property management, transactions, title and succession matters, taxation, banking, asset claims and inspection coordination.",
};

const principles = [
  {
    number: "01",
    title: "Clarity before action",
    icon: FileCheck2,
    text: "The relevant facts, documents, ownership records and practical requirements are organised before the next step is identified.",
  },
  {
    number: "02",
    title: "Structured communication",
    icon: ClipboardCheck,
    text: "NRIs remain informed about documents, pending requirements, India-side follow-ups and the status of the matter.",
  },
  {
    number: "03",
    title: "India-side coordination",
    icon: Landmark,
    text: "Where a matter involves tenants, buyers, sellers, banks, companies, RTAs, tax professionals, legal professionals or authorities, the relevant coordination can be organised around a clear communication trail.",
  },
  {
    number: "04",
    title: "Professional boundaries",
    icon: Scale,
    text: "Where specialist legal, taxation, valuation or financial advice is required, the matter is coordinated with the appropriately qualified professional rather than treating coordination as a substitute for specialist advice.",
  },
];

const matterAreas = [
  {
    number: "01",
    title: "Property Management",
    text: "India-side coordination concerning tenant management, rent follow-up, maintenance and repairs, vacant property oversight, physical inspection and periodic reporting.",
  },
  {
    number: "02",
    title: "Transactions & Advisory",
    text: "Coordination relating to property purchase and sale, due diligence, title and document verification, transaction documentation, Power of Attorney and registration-related requirements.",
  },
  {
    number: "03",
    title: "Legal & Title Support",
    text: "Property title disputes, inheritance and succession matters, partition, possession and eviction matters, encroachment and boundary issues, documentation and coordination with relevant authorities.",
  },
  {
    number: "04",
    title: "NRI Taxation Support",
    text: "Coordination concerning property-sale taxation, capital gains documentation, TDS, Lower or Nil Deduction Certificate requirements, tax records, filing coordination and repatriation documentation.",
  },
  {
    number: "05",
    title: "Banking & Fund Management Assistance",
    text: "NRE / NRO documentation, bank follow-up, deceased-holder claims, unclaimed dividends, IEPF claims, share-certificate matters, transmission and related financial-asset documentation.",
  },
  {
    number: "06",
    title: "Inspection, Valuation & Investment Assistance",
    text: "Physical property inspection, ownership and title-history review, certified-record checks, possession verification, document-gap review, valuation and market-assessment coordination.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "The property, asset, dispute, transaction or documentation requirement is first understood in its relevant context.",
  },
  {
    number: "02",
    title: "Assess",
    text: "Relevant documents, ownership records, parties, institutions and practical requirements are identified.",
  },
  {
    number: "03",
    title: "Coordinate",
    text: "India-side communication and follow-up are organised with the relevant people, professionals and institutions.",
  },
  {
    number: "04",
    title: "Document",
    text: "Required legal, tax, banking, KYC and supporting documentation is organised according to the matter.",
  },
  {
    number: "05",
    title: "Update",
    text: "The NRI remains informed about actions completed, pending requirements and the next stage of the matter.",
  },
];

export default function WhyNriSarthiPage() {
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
          className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-sage-deep/15 blur-3xl"
        />

        <div className="site-container relative">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-light">
            <span className="h-px w-10 bg-champagne" />
            Why NRI Sarthi
          </div>

          <h1 className="font-display mt-6 max-w-5xl text-6xl font-medium leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl">
            A structured India-side layer for property and asset matters.
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Managing property, legal documentation, succession, taxation,
            banking and asset-related requirements from overseas often
            requires coordination across multiple people and institutions.
            NRI Sarthi is structured around that India-side requirement.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="border-l border-champagne/40 pl-5">
              <span className="block font-display text-3xl text-champagne">
                Property
              </span>
              <span className="mt-1 block text-sm leading-6 text-white/50">
                Management, transactions and inspection
              </span>
            </div>

            <div className="border-l border-champagne/40 pl-5">
              <span className="block font-display text-3xl text-champagne">
                Legal
              </span>
              <span className="mt-1 block text-sm leading-6 text-white/50">
                Title, succession and documentation coordination
              </span>
            </div>

            <div className="border-l border-champagne/40 pl-5">
              <span className="block font-display text-3xl text-champagne">
                Assets
              </span>
              <span className="mt-1 block text-sm leading-6 text-white/50">
                Banking, claims, taxation and related matters
              </span>
            </div>
          </div>
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

      {/* WHY IT MATTERS */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-champagne/7 blur-3xl"
        />

        <div className="site-container relative">
          {/* FULL-WIDTH INTRO */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* LEFT — HEADING */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
                <span className="h-px w-8 bg-champagne" />
                Why this approach
              </div>

              <h2 className="font-display mt-5 text-5xl font-medium leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
                India-side matters become easier to manage when responsibility,
                documentation and communication are properly organised.
              </h2>
            </div>

            {/* RIGHT — LEGAL / PROFESSIONAL DESCRIPTION */}
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="max-w-2xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                For NRIs residing outside India, matters concerning immovable
                property and financial assets may involve title and ownership
                records, succession and transmission requirements, possession,
                tenancy, transaction documentation, taxation, banking
                formalities and institutional follow-up. Such matters may also
                require coordination with legal professionals, chartered
                accountants, banks, companies, RTAs and relevant government or
                local authorities. NRI Sarthi is structured to organise the
                India-side documentation, communication and follow-up required
                for the particular matter.
              </p>
            </div>
          </div>

          {/* PRINCIPLES */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="group relative overflow-hidden border border-ink/10 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/35 hover:shadow-xl sm:p-9"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-champagne transition-transform duration-500 group-hover:scale-y-100"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-champagne">
                        {principle.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/20 bg-champagne/8 text-sage-deep transition-colors duration-300 group-hover:border-champagne/40 group-hover:bg-champagne/15">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                    </div>

                    <h3 className="font-display mt-8 text-3xl font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-sage-deep">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">
                      {principle.text}
                    </p>

                    <div className="mt-7 h-px w-10 bg-champagne/50 transition-all duration-500 group-hover:w-16" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MATTERS WE COORDINATE */}
      <section className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sage/10 blur-3xl"
        />

        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
                <span className="h-px w-8 bg-champagne" />
                Scope of support
              </div>

              <h2 className="font-display mt-5 text-5xl font-medium leading-tight text-ink sm:text-6xl">
                Matters that may require an India-side presence.
              </h2>

              <p className="mt-6 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                The service framework covers the principal property and asset
                requirements identified for NRIs, with the exact scope
                determined by the facts, documents, applicable requirements
                and professional engagement involved.
              </p>

              <div className="mt-8 border-l border-champagne pl-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-champagne">
                  Six principal areas
                </span>

                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  Property management, transactions, legal and title support,
                  NRI taxation, banking and funds, and inspection, valuation
                  and investment assistance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-ink/10">
                {matterAreas.map((matter) => (
                  <article
                    key={matter.number}
                    className="group grid gap-5 border-b border-ink/10 py-7 md:grid-cols-12 md:gap-8"
                  >
                    <span className="font-display text-2xl italic text-champagne md:col-span-1">
                      {matter.number}
                    </span>

                    <div className="md:col-span-4">
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-sage-deep">
                        {matter.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-ink-soft md:col-span-7">
                      {matter.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THE COORDINATION USEFUL */}
      <section className="relative overflow-hidden bg-paper-2 py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
                <span className="h-px w-8 bg-champagne" />
                India-side coordination
              </div>

              <h2 className="font-display mt-5 text-5xl font-medium leading-tight text-ink sm:text-6xl">
                One organised communication trail across the matter.
              </h2>

              <p className="mt-6 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                A matter may involve documents held by different people,
                physical property, institutional requirements and professional
                advice. Organised coordination helps establish what has been
                received, what remains pending and which party needs to act.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-ink/10 bg-ivory p-7">
                  <span className="font-display text-3xl text-champagne">
                    Documents
                  </span>

                  <p className="mt-4 text-sm leading-7 text-ink-soft">
                    Collection, organisation and follow-up of relevant
                    property, legal, KYC, tax, banking and supporting
                    documentation.
                  </p>
                </div>

                <div className="border border-ink/10 bg-ivory p-7">
                  <span className="font-display text-3xl text-champagne">
                    People
                  </span>

                  <p className="mt-4 text-sm leading-7 text-ink-soft">
                    Coordination among owners, family members, tenants,
                    purchasers, sellers and relevant professionals.
                  </p>
                </div>

                <div className="border border-ink/10 bg-ivory p-7">
                  <span className="font-display text-3xl text-champagne">
                    Institutions
                  </span>

                  <p className="mt-4 text-sm leading-7 text-ink-soft">
                    India-side follow-up with banks, companies, RTAs, insurers,
                    government and local authorities where relevant to the
                    matter.
                  </p>
                </div>

                <div className="border border-ink/10 bg-ivory p-7">
                  <span className="font-display text-3xl text-champagne">
                    Reporting
                  </span>

                  <p className="mt-4 text-sm leading-7 text-ink-soft">
                    Clear updates regarding completed actions, pending
                    requirements and the next practical step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative overflow-hidden bg-ink py-16 text-ivory sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne/8 blur-3xl"
        />

        <div className="site-container relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
              <span className="h-px w-8 bg-champagne" />
              Our approach
            </div>

            <h2 className="font-display mt-5 text-5xl font-medium leading-tight text-ivory sm:text-6xl">
              A defined process from the first discussion to India-side
              follow-up.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              The purpose of the process is to make the requirements visible,
              establish the relevant documentation and coordinate the actions
              required for the particular matter.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
            {workflow.map((step) => (
              <article key={step.number} className="bg-ink p-6 sm:p-7">
                <span className="font-display text-3xl italic text-champagne">
                  {step.number}
                </span>

                <h3 className="mt-10 font-display text-2xl font-medium text-ivory">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BOUNDARIES */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-sage-deep">
                <span className="h-px w-8 bg-champagne" />
                Professional boundaries
              </div>

              <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-ink sm:text-5xl">
                Coordination with the right professional when specialist
                advice is required.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-ink/10">
                <div className="flex gap-4 border-b border-ink/10 py-6">
                  <Check
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-champagne"
                  />

                  <p className="text-sm leading-7 text-ink-soft sm:text-base">
                    Legal strategy, legal advice and representation depend on
                    the specific facts, jurisdiction and professional
                    engagement required for the matter.
                  </p>
                </div>

                <div className="flex gap-4 border-b border-ink/10 py-6">
                  <Check
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-champagne"
                  />

                  <p className="text-sm leading-7 text-ink-soft sm:text-base">
                    Tax liability, applicable rates, deductions, TDS
                    requirements and filing obligations depend on the facts of
                    the transaction and the law applicable at the relevant
                    time.
                  </p>
                </div>

                <div className="flex gap-4 border-b border-ink/10 py-6">
                  <Check
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-champagne"
                  />

                  <p className="text-sm leading-7 text-ink-soft sm:text-base">
                    Banking transactions, claims, securities transfers and
                    repatriation remain subject to the requirements of the
                    relevant institution and applicable regulatory framework.
                  </p>
                </div>

                <div className="flex gap-4 py-6">
                  <Check
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-champagne"
                  />

                  <p className="text-sm leading-7 text-ink-soft sm:text-base">
                    Inspection, information and coordination services do not
                    substitute for independent legal, tax, valuation or
                    investment advice where such professional advice is
                    required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper pb-20 sm:pb-24 lg:pb-28">
        <div className="site-container">
          <div className="border border-ink/10 bg-ivory p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne">
                <span className="h-px w-8 bg-champagne" />
                India-side assistance
              </div>

              <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-ink sm:text-5xl">
                Discuss the property or asset matter that requires attention
                in India.
              </h2>

              <p className="mt-5 text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                Share the basic facts and available documentation so the
                relevant requirement and next step can be understood.
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne hover:text-ink lg:mt-0"
            >
              Start a conversation

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}