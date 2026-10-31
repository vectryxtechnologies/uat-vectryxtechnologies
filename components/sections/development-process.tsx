import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { developmentProcessData } from "@/lib/data/process";
import { SectionHeading } from "@/components/animations/section-heading";

export function DevelopmentProcess() {
  return (
    <section className="py-24 sm:py-32 relative bg-surface-deep/40 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Delivery Lifecycle"
          title="From Idea to Reality."
          subtitle="A disciplined, milestone-driven development process engineered to eliminate ambiguities, avoid rework, and ensure flawless deployment."
        />

        {/* Timeline Grid */}
        <div className="relative">
          {/* Subtle center line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {developmentProcessData.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between p-5 rounded-xl border border-border bg-surface-graphite/60 backdrop-blur-sm transition-all duration-300 hover:border-silver-metallic/50 hover:bg-surface-charcoal/90 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-silver-metallic group-hover:text-silver-chrome transition-colors">
                      {step.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-silver-platinum/40 group-hover:bg-silver-chrome transition-colors" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-silver-chrome mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-silver-muted leading-relaxed font-sans mb-4">
                    {step.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40">
                  <span className="font-mono text-[10px] uppercase text-silver-muted/80 block">
                    Core Output:
                  </span>
                  <span className="text-[11px] font-mono text-silver-platinum font-medium">
                    {step.deliverables[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 font-mono text-xs text-silver-platinum hover:text-white border-b border-silver-metallic/40 pb-0.5 transition-colors"
          >
            <span>Learn More About Our Quality Protocols</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
