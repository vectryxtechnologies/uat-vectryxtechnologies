import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { PageHeader, Section, CTA, Visual, card, wrap } from "@/components/section";

export const generateStaticParams = () => PROJECTS.map((p) => ({ slug: p.slug }));
export const generateMetadata = ({ params }) => ({ title: PROJECTS.find((p) => p.slug === params.slug)?.title });

export default function Project({ params }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <>
      <PageHeader eyebrow={p.tag} title={p.title} intro={p.summary} />
      <div className={wrap}><Visual image={p.image} alt={p.title} className="aspect-[16/7]" /></div>
      <Section className="grid gap-5 md:grid-cols-2">
        <div className={card}><h2 className="mb-2 font-bold">The challenge</h2><p className="text-zinc-600 dark:text-zinc-400">{p.challenge}</p></div>
        <div className={card}><h2 className="mb-2 font-bold">Our solution</h2><p className="text-zinc-600 dark:text-zinc-400">{p.solution}</p></div>
        <div className={card}>
          <h2 className="mb-3 font-bold">Results</h2>
          <ul className="space-y-2">{p.results.map((r) => <li key={r} className="flex gap-2 text-zinc-700 dark:text-zinc-300"><Check className="mt-0.5 h-5 w-5 text-blue-500" />{r}</li>)}</ul>
        </div>
        <div className={card}>
          <h2 className="mb-3 font-bold">Tech stack</h2>
          <div className="flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">{t}</span>)}</div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
