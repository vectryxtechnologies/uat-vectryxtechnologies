import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal } from "lucide-react";
import { technologiesData, techCategories } from "@/lib/data/technologies";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Engineering Stack & Architecture Capabilities",
  description:
    "Review the software development technologies, frameworks, and tools used by Vectryx Technologies across frontend, backend, databases, AI/ML, and cloud operations.",
};

export default function TechnologiesPage() {
  const categoriesOnly = techCategories.filter((c) => c !== "All");

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Architectural Stack
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            Engineered with Modern Precision.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            We avoid unverified libraries and legacy dead-ends. Our stack is curated strictly
            for performance, strict static type safety, developer velocity, and long-term
            ecosystem health.
          </p>
        </div>

        {/* Categories Breakdown */}
        <div className="space-y-14 mb-20">
          {categoriesOnly.map((cat) => {
            const items = technologiesData.filter((t) => t.category === cat);
            if (items.length === 0) return null;

            return (
              <div key={cat} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-border/80">
                  <span className="h-2 w-2 rounded-full bg-silver-platinum" />
                  <h2 className="font-heading text-xl font-bold text-silver-chrome">
                    {cat}
                  </h2>
                  <span className="font-mono text-xs text-silver-muted ml-auto">
                    {items.length} Supported Technologies
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((tech) => (
                    <Card
                      key={tech.name}
                      className="p-6 flex flex-col justify-between hover:border-silver-metallic/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-heading text-lg font-bold text-silver-chrome">
                            {tech.name}
                          </h3>
                          <Badge
                            variant={
                              tech.level === "Core Production" ? "silver" : "subtle"
                            }
                            size="sm"
                          >
                            {tech.level}
                          </Badge>
                        </div>

                        <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans mb-4">
                          {tech.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/40 font-mono text-[11px] text-silver-muted/80 flex items-center justify-between">
                        <span>Classification</span>
                        <span className="text-silver-platinum">{tech.category}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Strip */}
        <div className="rounded-xl border border-silver-metallic/30 bg-surface-charcoal/80 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-silver-chrome mb-3">
            Need a stack tailored to custom constraints?
          </h2>
          <p className="text-sm text-silver-muted max-w-xl mx-auto mb-6">
            We evaluate architectural tradeoffs based on your expected traffic volume, compute costs, and deployment targets.
          </p>
          <Button
            href="/start-project"
            variant="chrome"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Consult on System Architecture
          </Button>
        </div>
      </div>
    </div>
  );
}
