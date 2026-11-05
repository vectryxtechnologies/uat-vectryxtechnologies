import { PageHeader, Section, CTA, card } from "@/components/section";
import { TECH } from "@/lib/site";
export const metadata = { title: "Technologies" };
export default function Technologies() {
  return (
    <>
      <PageHeader eyebrow="Technologies" title="Modern tools, chosen for the job." intro="We pick proven technology that your team can maintain, not whatever is trending." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {TECH.map((g) => (
            <div key={g.group} className={card}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">{g.group}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="rounded-md border border-border bg-subtle px-3 py-1.5 font-mono text-xs">{i}</span>)}</div>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
