import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { PageHeader, Section, CTA, Visual, card } from "@/components/section";

export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export const generateMetadata = ({ params }) => ({ title: SERVICES.find((s) => s.slug === params.slug)?.title });

export default function ServicePage({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <>
      <PageHeader eyebrow="Service" title={s.title} intro={s.short} />
      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <div className={card}>
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.03em]">What we deliver</h2>
          <ul className="space-y-3">
            {s.points.map((p) => <li key={p} className="flex gap-3 text-muted"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{p}</li>)}
          </ul>
        </div>
        <Visual image={s.image} alt={s.title} icon={s.icon} />
      </Section>
      <Section eyebrow="Explore" title="Other services">
        <div className="flex flex-wrap gap-3">
          {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
            <Link key={x.slug} href={`/services/${x.slug}`} className="rounded-full border border-border bg-subtle px-4 py-2 text-sm font-medium hover:border-border-strong">{x.title}</Link>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
