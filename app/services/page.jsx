import { PageHeader, Section, CTA } from "@/components/section";
import { ServiceGrid } from "@/components/cards";
export const metadata = { title: "Services" };
export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="End-to-end digital engineering." intro="Pick one service or combine several. We scale the team to what your project needs." />
      <Section className="pt-4"><ServiceGrid /></Section>
      <CTA />
    </>
  );
}
