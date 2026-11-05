import { PageHeader, Section, CTA } from "@/components/section";
import { Steps } from "@/components/cards";
export const metadata = { title: "How we work" };
export default function HowWeWork() {
  return (
    <>
      <PageHeader eyebrow="How we work" title="Clear steps. No surprises." intro="A process built around communication, short feedback loops and shipping early." />
      <Section><Steps /></Section>
      <CTA />
    </>
  );
}
