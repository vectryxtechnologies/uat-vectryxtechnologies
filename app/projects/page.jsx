import { PageHeader, Section, CTA } from "@/components/section";
import { ProjectGrid } from "@/components/cards";
export const metadata = { title: "Projects" };
export default function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Work we're proud of." intro="A selection of systems, apps and platforms we've designed and built." />
      <Section className="pt-4"><ProjectGrid /></Section>
      <CTA />
    </>
  );
}
