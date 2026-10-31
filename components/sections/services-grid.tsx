import React from "react";
import Link from "next/link";
import {
  Globe,
  Code2,
  Cpu,
  Smartphone,
  BarChart3,
  GraduationCap,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Cpu,
  Smartphone,
  BarChart3,
  GraduationCap,
  Cloud,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-surface-deep/40 border-t border-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Capabilities"
          title="Comprehensive Technology Services"
          subtitle="From high-impact digital experiences and custom software architectures to intelligent AI agents and technical project mentorship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            const isFeatured = index === 0;

            return (
              <Card
                key={service.id}
                className={`flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-silver-metallic/30" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-surface-charcoal border border-border text-silver-chrome group-hover:border-silver-metallic/60 group-hover:bg-surface-graphite group-hover:shadow-chrome-subtle transition-all duration-300">
                      <Icon className="w-5 h-5 text-silver-platinum" />
                    </div>
                    <span className="font-mono text-xs text-silver-muted/70">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-silver-chrome mb-2.5 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-silver-muted leading-relaxed mb-6 font-sans">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {service.subCategories.slice(0, 3).map((sub) => (
                      <div
                        key={sub}
                        className="text-xs font-mono text-silver-platinum/80 flex items-center gap-2"
                      >
                        <span className="h-1 w-1 rounded-full bg-silver-metallic" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-silver-chrome group-hover:text-white transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
