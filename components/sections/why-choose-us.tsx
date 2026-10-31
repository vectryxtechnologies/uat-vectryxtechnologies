import React from "react";
import {
  Users2,
  Cpu,
  TrendingUp,
  ShieldCheck,
  MessageSquareCode,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";

const engineeringPillars = [
  {
    icon: Users2,
    title: "Client-Focused Approach",
    description:
      "We design systems around your actual operational workflow and commercial constraints, not arbitrary template patterns.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    description:
      "Every architecture utilizes modern, actively supported stacks (Next.js, TypeScript, React, Python) with zero legacy baggage.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Modular system boundaries, stateless serverless routes, and optimized database indexing built to scale cleanly without rework.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Driven Development",
    description:
      "Strict type safety, automated linting gates, WCAG 2.1 AA accessibility standards, and OWASP-aligned security boundaries.",
  },
  {
    icon: MessageSquareCode,
    title: "Transparent Communication",
    description:
      "Direct engineer-to-client collaboration with granular milestone demos, clean git repositories, and zero technical obfuscation.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Technical Support",
    description:
      "Post-deployment defect remediation, runtime telemetry, dependency security updates, and institutional defense prep support.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 relative bg-background border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Principles"
          title="Why Choose Vectryx Technologies?"
          subtitle="We focus on dependable execution, sound architectural principles, and measurable engineering outcomes rather than inflated marketing claims."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-lg bg-surface-charcoal border border-border text-silver-chrome w-fit mb-5 group-hover:border-silver-metallic/60 group-hover:bg-surface-graphite transition-colors">
                    <Icon className="w-5 h-5 text-silver-platinum" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-silver-chrome mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-silver-muted leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
