import Hero from "@/components/hero";
import { Section, CTA } from "@/components/section";
import { Steps, CompanyGrid } from "@/components/cards";
import ClientWorkGrid from "@/components/client-work-grid";
import { Introduction, SolutionsShowcase, ServicesShowcase, WhyUs, Marquee, HomeFAQ } from "@/components/home-content";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SolutionsShowcase />
      <ServicesShowcase />
      <Section eyebrow="How we work" title="A simple, transparent process"><Steps /></Section>
      <Section eyebrow="Selected work" title="Recent client projects"><ClientWorkGrid /></Section>
      <Section eyebrow="Our clients" title="Recent companies" intro="A selection of businesses we have partnered with to deliver technology solutions."><CompanyGrid /></Section>
      <WhyUs />
      <Marquee />
      <HomeFAQ />
      <CTA />
    </>
  );
}
