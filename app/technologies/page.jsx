import { PageHeader, Section, CTA, card } from "@/components/section";
import { TECH } from "@/lib/site";
export const metadata = { title: "Technologies" };
export default function Technologies() {
  return (
    <>
      <PageHeader eyebrow="Technologies" title="Modern tools, chosen for the job." intro="We pick proven technology that your team can maintain, not whatever is trending." />
      <Section className="pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          {TECH.map((g) => (
            <div key={g.group} className={card}>
              <h3 className="mb-4 text-lg font-bold">{g.group}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="rounded-full border border-zinc-200/80 bg-slate-100 px-3.5 py-1.5 text-sm font-medium dark:border-white/10 dark:bg-white/5">{i}</span>)}</div>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
