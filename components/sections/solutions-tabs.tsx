"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";
import { SectionHeading } from "@/components/animations/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);
  const activeSolution = solutionsData.find((s) => s.id === activeTab) || solutionsData[0];

  return (
    <section id="solutions" className="py-24 sm:py-32 relative bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Tailored Solutions"
          title="Engineered for Your Specific Outcomes"
          subtitle="Explore how Vectryx Technologies aligns technical execution with the distinct priorities of each stakeholder group."
        />

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {solutionsData.map((item) => {
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-medium tracking-wide transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum",
                  isSelected
                    ? "bg-surface-charcoal text-silver-chrome border-silver-metallic/60 shadow-chrome-subtle font-semibold"
                    : "bg-surface-graphite/40 text-silver-muted border-border hover:border-silver-metallic/30 hover:text-silver-platinum"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active Solution Content Card */}
        <div className="rounded-xl border border-border bg-surface-graphite/50 backdrop-blur-md p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-metallic/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum px-3 py-1 rounded bg-white/5 border border-white/10">
                {activeSolution.badge}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-silver-chrome">
                {activeSolution.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-silver-muted leading-relaxed font-sans">
                {activeSolution.description}
              </p>

              <div className="pt-2">
                <Button
                  href={activeSolution.ctaLink}
                  variant="chrome"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {activeSolution.ctaText}
                </Button>
              </div>
            </div>

            {/* Right Deliverables List */}
            <div className="lg:col-span-5 rounded-lg bg-surface-deep/80 border border-border/80 p-6 space-y-4">
              <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-silver-chrome">
                Key Technical Deliverables
              </h4>
              <ul className="space-y-3">
                {activeSolution.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver-platinum">
                    <CheckCircle2 className="w-4 h-4 text-silver-muted shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
