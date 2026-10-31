import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SolutionsTabs } from "@/components/sections/solutions-tabs";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CapabilitiesShowcase } from "@/components/sections/capabilities-showcase";
import { EngagementModels } from "@/components/sections/engagement-models";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { BlurReveal } from "@/components/animations/blur-reveal";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with letter-by-letter blur and role typewriter */}
      <Hero />

      {/* 2. Brand Introduction */}
      <BlurReveal>
        <BrandIntro />
      </BlurReveal>

      {/* 3. Who We Serve */}
      <BlurReveal>
        <WhoWeServe />
      </BlurReveal>

      {/* 4. Our Services */}
      <BlurReveal>
        <ServicesGrid />
      </BlurReveal>

      {/* 5. Our Solutions */}
      <BlurReveal>
        <SolutionsTabs />
      </BlurReveal>

      {/* 6. Featured Projects */}
      <BlurReveal>
        <FeaturedProjects />
      </BlurReveal>

      {/* 7. Technology Stack Marquee */}
      <BlurReveal>
        <TechMarquee />
      </BlurReveal>

      {/* 8. Development Process */}
      <BlurReveal>
        <DevelopmentProcess />
      </BlurReveal>

      {/* 9. Why Choose Vectryx? */}
      <BlurReveal>
        <WhyChooseUs />
      </BlurReveal>

      {/* 10. Capabilities Showcase */}
      <BlurReveal>
        <CapabilitiesShowcase />
      </BlurReveal>

      {/* 11. Project Engagement Models */}
      <BlurReveal>
        <EngagementModels />
      </BlurReveal>

      {/* 12. FAQ Section */}
      <BlurReveal>
        <FAQSection />
      </BlurReveal>

      {/* 13. Final CTA */}
      <BlurReveal>
        <FinalCTA />
      </BlurReveal>
    </>
  );
}
