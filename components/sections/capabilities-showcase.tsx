import React from "react";
import { Terminal, Shield, Code, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/animations/section-heading";
import { Card } from "@/components/ui/card";

const capabilitiesList = [
  {
    category: "Architecture & Code Standards",
    icon: Code,
    items: [
      "Strict TypeScript enforcement with zero implicit 'any'",
      "Next.js App Router with React Server Components",
      "Domain-driven folder isolation and modular separation",
      "Reusable component design systems backed by Tailwind CSS",
    ],
  },
  {
    category: "Security & Defensive Engineering",
    icon: Shield,
    items: [
      "OWASP top-10 mitigation protocols across all endpoints",
      "Server-side Zod validation and input sanitization",
      "In-memory and header-based rate limiting on sensitive routes",
      "Strict CSP, HSTS, X-Frame-Options, and referrer headers",
    ],
  },
  {
    category: "Deployment & Infrastructure",
    icon: Terminal,
    items: [
      "Zero-downtime deployments via global edge CDN networks",
      "Automated GitHub Actions linting and build validation",
      "Containerized multi-stage Docker packaging",
      "Reproducible environment configuration via .env standards",
    ],
  },
];

export function CapabilitiesShowcase() {
  return (
    <section className="py-24 sm:py-32 relative bg-surface-deep/40 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Rigor"
          title="Verified Capabilities & Code Quality"
          subtitle="We operate with total transparency. Here are the concrete engineering standards and defensive protocols implemented across every Vectryx build."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilitiesList.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card key={cap.category} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                  <div className="p-2 rounded-md bg-surface-charcoal border border-border text-silver-platinum">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-silver-chrome">
                    {cap.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-silver-platinum shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
