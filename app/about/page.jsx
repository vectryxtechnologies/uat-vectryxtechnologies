import { PageHeader, Section, CTA, Visual, card } from "@/components/section";
import { Target, Eye, Handshake } from "lucide-react";
export const metadata = { title: "About" };

const values = [
  [Target, "Outcome-first", "We start from your business goal, not a technology wish list."],
  [Eye, "Transparent", "Clear scope, honest estimates and regular demos."],
  [Handshake, "Long-term partners", "We stay after launch to support and improve."],
];
export default function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="We build software that fits how you actually work." intro="Vectryx Technologies is a software and AI engineering team helping businesses replace manual processes with reliable digital systems." />
      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-muted">
          <p>Our team combines product thinking, engineering and cloud expertise, so ideas move from sketch to production without hand-offs getting lost.</p>
          <p>We partner with ambitious startups, growing businesses, and established organizations to build resilient web platforms, mobile applications, and intelligent automation systems tailored to their operational goals.</p>
        </div>
        <Visual image={null} alt="Our team" icon={Handshake} />
      </Section>
      <Section eyebrow="Our values" title="What guides us">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map(([I, t, d]) => (
            <div key={t} className={card}>
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-subtle text-foreground"><I className="h-4 w-4" /></span>
              <h3 className="mb-2 font-semibold tracking-[-0.03em]">{t}</h3>
              <p className="text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
