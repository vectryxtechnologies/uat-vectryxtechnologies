import Hero from "@/components/hero";
import { Section, CTA } from "@/components/section";
import { ServiceGrid, ProjectGrid, Steps } from "@/components/cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="services" eyebrow="What we do" title="Everything you need to go digital" intro="From first idea to launch and beyond, one team across software, web, mobile, AI, data and cloud.">
        <ServiceGrid />
      </Section>
      <Section eyebrow="How we work" title="A simple, transparent process"><Steps /></Section>
      <Section eyebrow="Selected work" title="Recent projects"><ProjectGrid limit={3} /></Section>
      <CTA />
    </>
  );
}
