import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-stone-900 text-stone-100">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-champagne/10" />
      <div aria-hidden="true" className="pointer-events-none absolute right-8 top-8 h-48 w-48 rounded-full border border-champagne/10" />
      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link href="/" aria-label="NRI Sarthi home" className="inline-flex items-center gap-3">
              <Image src="/images/nri-sarthi-logo.png" alt="NRI Sarthi" width={100} height={76} className="h-16 w-auto object-contain" />
              <span className="hidden sm:block">
                <span className="block font-display text-2xl leading-none text-stone-50">NRI SARTHI</span>
                <span className="mt-1.5 block text-xs font-semibold uppercase tracking-widest text-stone-400">Property & Asset Advisors</span>
              </span>
            </Link>
            <div className="mt-8 h-px w-16 bg-champagne/60" />
            <h2 className="font-display mt-7 max-w-xl text-4xl font-medium leading-tight text-stone-50 sm:text-5xl">{site.tagline}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400">One trusted India-side point of coordination for property, legal, documentation, taxation, banking and asset-related requirements.</p>
          </div>
          <div>
            <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-champagne">Explore</div>
            <nav className="grid gap-3.5" aria-label="Footer navigation">
              {exploreLinks.map(([label, href]) => (
                <Link key={href} href={href} className="group flex items-center justify-between border-b border-stone-700/70 pb-3 text-sm text-stone-400 transition-colors hover:text-stone-50">
                  <span>{label}</span>
                  <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-champagne">Contact</div>
            <div className="grid gap-5">
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-sm text-stone-400 transition-colors hover:text-stone-50"><Mail size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-champagne" /><span>{site.email}</span></a>
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="flex items-start gap-3 text-sm text-stone-400 transition-colors hover:text-stone-50"><Phone size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-champagne" /><span>{site.phonePrimary}</span></a>
              <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="flex items-start gap-3 text-sm text-stone-400 transition-colors hover:text-stone-50"><Phone size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-champagne" /><span>{site.phoneSecondary}</span></a>
              <div className="flex items-start gap-3 text-sm leading-6 text-stone-400"><MapPin size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-champagne" /><span>{site.office}</span></div>
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-champagne/40 px-5 py-3 text-xs font-semibold text-stone-100 transition-all hover:border-champagne hover:bg-champagne hover:text-white">Start a conversation <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="mt-16 border-t border-stone-700/70 pt-6">
          <div className="flex flex-col gap-4 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
            <span>© 2026 NRI SARTHI — Property & Asset Advisors.</span>
            <span className="max-w-xl leading-5 md:text-right">General information only. Specific matters should be assessed on their facts and applicable law.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
