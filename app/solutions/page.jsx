import { PageHeader, Section, CTA, card } from "@/components/section";
import { SOLUTIONS } from "@/lib/site";
export const metadata = { title: "Solutions" };
export default function Solutions() {
  return (
    <>
      <PageHeader eyebrow="Solutions" title="Solutions for real business problems." intro="Common problems we solve, and the systems we build to fix them." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => <div key={s.title} className={card}><h3 className="mb-2 text-lg font-semibold tracking-[-0.03em]">{s.title}</h3><p className="text-sm leading-relaxed text-muted">{s.text}</p></div>)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
