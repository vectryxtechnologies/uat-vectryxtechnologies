import type { Metadata } from "next";
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
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Explore the complete suite of technology services provided by Vectryx Technologies — custom software, web platforms, AI/ML engineering, mobile apps, data analytics, and technical guidance.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Cpu,
  Smartphone,
  BarChart3,
  GraduationCap,
  Cloud,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Core Capabilities
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            Full-Spectrum Software Engineering.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            Every digital solution is engineered with strict attention to performance, security,
            maintainability, and real-world business objectives.
          </p>
        </div>

        {/* Services List with Detailed Cards */}
        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <Card
                key={service.id}
                className="p-6 sm:p-10 lg:p-12 hover:border-silver-metallic/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Titles */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-surface-charcoal border border-border text-silver-chrome">
                        <Icon className="w-6 h-6 text-silver-platinum" />
                      </div>
                      <span className="font-mono text-xs text-silver-muted uppercase tracking-widest">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-silver-chrome">
                      {service.title}
                    </h2>

                    <p className="font-mono text-xs text-silver-platinum font-medium">
                      {service.heroTagline}
                    </p>

                    <p className="text-sm text-silver-muted leading-relaxed font-sans">
                      {service.overview}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-silver-chrome hover:text-white border-b border-silver-metallic/50 pb-0.5 transition-colors"
                      >
                        <span>View Detailed Specification &amp; Deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Features & Stack */}
                  <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-border/60 lg:pl-8">
                    <div>
                      <h3 className="font-heading text-xs uppercase tracking-widest text-silver-chrome mb-3">
                        Architectural Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feat) => (
                          <div
                            key={feat.title}
                            className="p-3.5 rounded-lg bg-surface-deep/80 border border-border/60 space-y-1"
                          >
                            <span className="text-xs font-heading font-semibold text-silver-chrome block">
                              {feat.title}
                            </span>
                            <span className="text-[11px] text-silver-muted leading-relaxed block font-sans">
                              {feat.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-xs uppercase tracking-widest text-silver-chrome mb-2.5">
                        Core Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <Badge key={tech} variant="silver" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
