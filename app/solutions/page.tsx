import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tailored Solutions by Industry & Customer Segment",
  description:
    "Explore how Vectryx Technologies addresses the unique technical requirements of students, startups, small businesses, and enterprise organizations.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Client Segments
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            Solutions Aligned to Your Scale.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            We adapt our engineering velocity and architectural rigor to match the precise
            commercial constraints and delivery milestones of your organization.
          </p>
        </div>

        {/* Audience Deep-Dives */}
        <div className="space-y-16">
          {solutionsData.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className="scroll-mt-32 rounded-xl border border-border bg-surface-graphite/40 backdrop-blur-md p-6 sm:p-10 lg:p-12 hover:border-silver-metallic/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-metallic/30 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
                <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum px-3 py-1 rounded bg-white/5 border border-white/10">
                  {sol.badge}
                </span>
                <span className="font-mono text-xs text-silver-muted">
                  Segment 0{index + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                {/* Left Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-silver-chrome">
                    {sol.title}
                  </h2>
                  <p className="font-mono text-sm text-silver-platinum font-medium">
                    {sol.subtitle}
                  </p>
                  <p className="text-sm text-silver-muted leading-relaxed font-sans">
                    {sol.description}
                  </p>
                </div>

                {/* Right CTA Box */}
                <div className="lg:col-span-5 p-6 rounded-lg bg-surface-charcoal/80 border border-border flex flex-col justify-between h-full space-y-4">
                  <div>
                    <h3 className="font-heading text-xs uppercase tracking-widest text-silver-chrome mb-1">
                      Ready to Proceed?
                    </h3>
                    <p className="text-xs text-silver-muted font-sans leading-relaxed">
                      Connect with our engineering leads to outline your scope and get a custom milestone plan.
                    </p>
                  </div>
                  <Button
                    href={sol.ctaLink}
                    variant="chrome"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {sol.ctaText}
                  </Button>
                </div>
              </div>

              {/* Pain Points vs Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border/60">
                {/* Pain Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-silver-muted">
                    <AlertTriangle className="w-4 h-4 text-amber-400/80" />
                    <span>Challenges We Solve</span>
                  </div>
                  <ul className="space-y-2.5">
                    {sol.painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs text-silver-muted font-sans leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-silver-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Engineered Deliverables</span>
                  </div>
                  <ul className="space-y-2.5">
                    {sol.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-silver-platinum font-sans leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
