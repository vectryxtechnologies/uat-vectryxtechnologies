import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/animations/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const engagementModels = [
  {
    id: "guidance",
    badge: "1-on-1 Mentorship",
    title: "Guidance & Consultation",
    tagline: "Architecture reviews, debugging, and academic project mentorship.",
    suitableFor: "Students, engineering researchers, and solo developers.",
    features: [
      "One-on-one architecture and design pattern consultation",
      "Live code review, debugging, and environment configuration",
      "Institution-compliant capstone guidance & documentation advice",
      "Technical viva and presentation preparation assistance",
      "Direct technical feedback on git commit practices",
    ],
    ctaText: "Request Consultation Quote",
    ctaLink: "/start-project?category=Technical+Project+Guidance&type=Student+%2F+Individual",
    highlight: false,
  },
  {
    id: "custom-dev",
    badge: "Full-Lifecycle Build",
    title: "Custom Project Development",
    tagline: "End-to-end MVP engineering and tailored software solutions.",
    suitableFor: "Early-stage startups, entrepreneurs, and product innovators.",
    features: [
      "Complete product architecture and database schema design",
      "Full-stack web application development (Next.js, TypeScript)",
      "RESTful API endpoints with input validation and rate limiting",
      "Responsive UI built to WCAG 2.1 AA accessibility guidelines",
      "Production deployment with automated CI/CD and repository handoff",
    ],
    ctaText: "Request a Custom Quote",
    ctaLink: "/start-project?type=Startup",
    highlight: true,
  },
  {
    id: "business-software",
    badge: "Enterprise Grade",
    title: "Business Software Solutions",
    tagline: "Corporate digital portals, workflow automation, and data systems.",
    suitableFor: "Growing businesses, SMBs, and enterprise organizations.",
    features: [
      "Custom enterprise web platforms and internal workflow portals",
      "Automated customer lead capture and messaging integrations",
      "Data processing pipelines and executive analytics dashboards",
      "Comprehensive security audits and OWASP compliance",
      "Ongoing maintenance, uptime monitoring, and SLA support",
    ],
    ctaText: "Request Enterprise Quote",
    ctaLink: "/start-project?type=Small+Business",
    highlight: false,
  },
];

export function EngagementModels() {
  return (
    <section className="py-24 sm:py-32 relative bg-background border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Flexible Collaboration"
          title="Project Engagement Models"
          subtitle="Transparent, milestone-based software partnerships. Every project receives a tailored scope and detailed quotation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {engagementModels.map((model) => (
            <Card
              key={model.id}
              className={`flex flex-col justify-between relative ${
                model.highlight
                  ? "border-silver-metallic/60 bg-surface-charcoal/90 shadow-chrome-glow lg:-translate-y-2"
                  : "border-border bg-surface-graphite/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-silver-platinum px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {model.badge}
                  </span>
                  {model.highlight && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-surface-deep px-2 py-0.5 rounded border border-silver-platinum/30">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-silver-chrome mb-1.5">
                  {model.title}
                </h3>

                <p className="text-xs text-silver-muted leading-relaxed mb-4 font-sans">
                  {model.tagline}
                </p>

                <div className="p-3 rounded-lg bg-surface-deep/80 border border-border/60 mb-6">
                  <span className="font-mono text-[11px] text-silver-muted uppercase block mb-1">
                    Ideal Candidate:
                  </span>
                  <span className="text-xs font-sans text-silver-chrome font-medium">
                    {model.suitableFor}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-silver-muted block">
                    What&apos;s Included:
                  </span>
                  {model.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-silver-platinum">
                      <Check className="w-3.5 h-3.5 text-silver-chrome shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <Button
                  href={model.ctaLink}
                  variant={model.highlight ? "chrome" : "secondary"}
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {model.ctaText}
                </Button>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-silver-muted font-mono">
                  <HelpCircle className="w-3 h-3" />
                  <span>Custom quotation based on system scope</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
