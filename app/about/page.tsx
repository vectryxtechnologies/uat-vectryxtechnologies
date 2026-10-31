import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Compass, Award, ArrowUpRight, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/animations/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vectryx Technologies — our engineering mission, vision, values, and commitment to delivering reliable digital products and disciplined technical guidance.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              About Vectryx Technologies
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-silver-chrome leading-tight mb-6">
            Engineering Digital Excellence.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            We are an international-standard software development and technology solutions provider.
            We combine rigorous computer science principles, modern frameworks, and transparent
            project delivery to build systems that stand the test of time.
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 sm:p-10 space-y-4 border-silver-metallic/30">
            <div className="p-3 rounded-lg bg-surface-charcoal border border-border text-silver-chrome w-fit">
              <Target className="w-6 h-6 text-silver-platinum" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-silver-muted block">
              Our Mission
            </span>
            <h2 className="font-heading text-2xl font-bold text-silver-chrome">
              To Build Software That Performs Under Pressure.
            </h2>
            <p className="text-sm text-silver-muted leading-relaxed font-sans">
              Our mission is to engineer dependable, high-performance software systems that eliminate
              operational friction for businesses, empower founders with scalable MVPs, and provide
              honest, concept-first technical mentorship for aspiring engineers.
            </p>
          </Card>

          <Card className="p-8 sm:p-10 space-y-4 border-silver-metallic/30">
            <div className="p-3 rounded-lg bg-surface-charcoal border border-border text-silver-chrome w-fit">
              <Compass className="w-6 h-6 text-silver-platinum" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-silver-muted block">
              Our Vision
            </span>
            <h2 className="font-heading text-2xl font-bold text-silver-chrome">
              Setting the Benchmark for Pragmatic Engineering.
            </h2>
            <p className="text-sm text-silver-muted leading-relaxed font-sans">
              We envision a software ecosystem where digital products are built on verifiable
              foundations — clean architectures, defensive security, sub-second latency, and
              uncompromising code craftsmanship — without bloated hype or empty promises.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <SectionHeading
            kicker="Guiding Principles"
            title="Our Core Engineering Values"
            subtitle="The non-negotiable principles that shape every line of code, architectural decision, and customer partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="space-y-3">
              <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit">
                <Shield className="w-5 h-5 text-silver-platinum" />
              </div>
              <h3 className="font-heading text-lg font-bold text-silver-chrome">
                Defensive by Design
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans">
                Security and type safety are never afterthoughts. We incorporate OWASP mitigation,
                strict schema validation, and safe error states from day one.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit">
                <Cpu className="w-5 h-5 text-silver-platinum" />
              </div>
              <h3 className="font-heading text-lg font-bold text-silver-chrome">
                Performance Obsessed
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans">
                We design for sub-second page loads, minimal DOM footprint, optimized database
                queries, and zero cumulative layout shift across every viewport.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit">
                <Award className="w-5 h-5 text-silver-platinum" />
              </div>
              <h3 className="font-heading text-lg font-bold text-silver-chrome">
                Honesty &amp; Academic Integrity
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans">
                We never fabricate statistics, fabricate testimonials, or sell pre-packaged academic
                shortcuts. Mentorship emphasizes genuine comprehension and institutional compliance.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-xl border border-silver-metallic/30 bg-surface-charcoal/80 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-silver-chrome mb-3">
            Ready to collaborate with an engineering-first team?
          </h2>
          <p className="text-sm text-silver-muted max-w-xl mx-auto mb-6">
            Discuss your technical goals directly with our engineers. We provide transparent
            discovery calls and milestone-backed proposals.
          </p>
          <Button
            href="/start-project"
            variant="chrome"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
