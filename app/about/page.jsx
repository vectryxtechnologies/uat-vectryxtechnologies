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
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>Our team combines product thinking, engineering and cloud expertise, so ideas move from sketch to production without hand-offs getting lost.</p>
          <p>Replace this paragraph with your company story, founding year, team size and the industries you serve.</p>
        </div>
        <Visual image={null} alt="Our team" icon={Handshake} />
      </Section>
      <Section eyebrow="Our values" title="What guides us">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map(([I, t, d]) => (
            <div key={t} className={card}><I className="mb-4 h-6 w-6 text-blue-400" /><h3 className="mb-2 font-bold text-white">{t}</h3><p className="text-sm text-slate-400">{d}</p></div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
