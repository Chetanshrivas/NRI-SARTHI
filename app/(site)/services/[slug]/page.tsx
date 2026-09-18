import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { serviceMap, services } from "../../../../data/services";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = serviceMap[slug]; return service ? { title: service.title } : {}; }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) notFound();

  return (
    <div className="bg-paper">
      <section className="bg-stone-900 pt-36 pb-20 text-stone-50 sm:pt-40 sm:pb-24">
        <div className="site-container">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-400 transition hover:text-champagne"><ArrowLeft size={14} /> All services</Link>
          <div className="mt-8 flex items-start gap-4"><span className="text-xs font-bold tracking-widest text-champagne">{service.number}</span><span className="text-xs font-semibold uppercase tracking-widest text-stone-400">{service.shortTitle}</span></div>
          <h1 className="font-display mt-5 max-w-5xl text-6xl font-medium leading-none sm:text-7xl lg:text-8xl">{service.title}</h1>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-stone-300 sm:text-base sm:leading-8">{service.intro}</p>
        </div>
      </section>
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2"><span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">Typical scope</span><h2 className="font-display mt-5 text-5xl font-medium leading-none">What may be included</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">{service.subservices.map((item) => <div key={item} className="rounded-2xl border border-ink/10 bg-white p-5"><div className="flex gap-3 text-sm leading-6 text-ink"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage-deep"><Check size={13} /></span>{item}</div></div>)}</div></div>
          <aside className="h-fit rounded-3xl border border-ink/10 bg-paper-2 p-7"><span className="text-xs font-semibold uppercase tracking-widest text-champagne">Important</span><p className="mt-5 text-sm leading-7 text-ink-soft">{service.note}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory">Discuss this service <ArrowRight size={16} /></Link></aside>
        </div>
      </section>
    </div>
  );
}
