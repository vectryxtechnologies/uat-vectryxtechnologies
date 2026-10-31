import React from "react";
import Link from "next/link";
import { GraduationCap, Rocket, Building2, Landmark, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";

const audienceCards = [
  {
    icon: GraduationCap,
    badge: "Mentorship & Guidance",
    title: "Students & Individuals",
    description:
      "Bridging the divide between classroom theory and real-world software engineering with rigorous code guidance.",
    points: [
      "Technical mentorship & system architecture",
      "Hands-on project guidance & code walkthroughs",
      "Concurrency & environment debugging support",
      "Learning-focused development assistance",
    ],
    link: "/solutions#students",
  },
  {
    icon: Rocket,
    badge: "Fast Execution",
    title: "Startups & Entrepreneurs",
    description:
      "Transforming early-stage concepts into high-converting MVPs and scalable digital products that impress investors.",
    points: [
      "Rapid MVP development & iteration",
      "Robust full-stack product engineering",
      "High-converting startup web platforms",
      "Scalable cloud architecture foundation",
    ],
    link: "/solutions#startups",
  },
  {
    icon: Building2,
    badge: "Operational Scale",
    title: "Businesses & SMBs",
    description:
      "Modernizing corporate web presences and automating tedious operational workflows to drive measurable growth.",
    points: [
      "Modern business web platforms",
      "Bespoke internal software solutions",
      "Operational workflow automation",
      "Seamless system digital transformation",
    ],
    link: "/solutions#businesses",
  },
  {
    icon: Landmark,
    badge: "Mission Critical",
    title: "Enterprises & Organizations",
    description:
      "Deploying secure, high-throughput applications, data intelligence pipelines, and reliable system integrations.",
    points: [
      "Enterprise application development",
      "Data processing & analytics solutions",
      "Microservice & system integration",
      "Senior technical architecture consulting",
    ],
    link: "/solutions#enterprises",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24 sm:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Target Audience"
          title="Engineered for Every Stage of Growth"
          subtitle="Whether you are an ambitious student building your capstone project, a startup launching an MVP, or an enterprise scaling operations, we have tailored solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className="flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border text-silver-chrome group-hover:border-silver-metallic/50 group-hover:bg-surface-graphite transition-colors">
                      <Icon className="w-5 h-5 text-silver-platinum" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-silver-muted px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-silver-chrome mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-silver-muted leading-relaxed mb-6 font-sans">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {card.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-silver-platinum">
                        <CheckCircle2 className="w-3.5 h-3.5 text-silver-muted shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-silver-muted group-hover:text-silver-chrome transition-colors"
                  >
                    <span>Explore Solutions</span>
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
