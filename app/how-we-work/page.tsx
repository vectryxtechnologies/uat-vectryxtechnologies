import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, GitBranch, Shield, LifeBuoy } from "lucide-react";
import { developmentProcessData } from "@/lib/data/process";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Development Workflow & Engineering Process",
  description:
    "Learn how Vectryx Technologies takes ideas from consultation and architecture planning to development, testing, deployment, and ongoing support.",
};

export default function HowWeWorkPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Engineering Lifecycle
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            How We Build Software.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            A transparent, phased methodology engineered to guarantee predictable delivery,
            prevent scope drift, and ensure high software craftsmanship at every milestone.
          </p>
        </div>

        {/* 7 Phased Steps Expanded */}
        <div className="space-y-10 mb-20">
          {developmentProcessData.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-border bg-surface-graphite/40 backdrop-blur-md p-6 sm:p-10 hover:border-silver-metallic/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-silver-platinum">
                    {step.step}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-silver-chrome">
                    {step.title}
                  </h2>
                  <p className="font-mono text-xs text-silver-muted leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>

                {/* Narrative Details */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-heading text-xs uppercase tracking-widest text-silver-chrome">
                    Phase Breakdown
                  </h3>
                  <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans">
                    {step.details}
                  </p>
                </div>

                {/* Tangible Deliverables */}
                <div className="lg:col-span-3 rounded-lg bg-surface-deep/80 border border-border/70 p-4 space-y-2.5">
                  <h3 className="font-heading text-[11px] uppercase tracking-widest text-silver-chrome">
                    Verified Deliverables
                  </h3>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-silver-platinum font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-silver-muted shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card className="space-y-3">
            <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit text-silver-platinum">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-silver-chrome">
              Git Feature Branches
            </h3>
            <p className="text-xs text-silver-muted leading-relaxed">
              Every feature is implemented in isolated branches with atomic commits, clean PR reviews, and automated linting.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit text-silver-platinum">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-silver-chrome">
              Security Verification
            </h3>
            <p className="text-xs text-silver-muted leading-relaxed">
              Automated dependency vulnerability audits, security headers, sanitized inputs, and rate-limiting guardrails.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border w-fit text-silver-platinum">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-silver-chrome">
              Warranty &amp; Support
            </h3>
            <p className="text-xs text-silver-muted leading-relaxed">
              Included post-launch defect remediation, environment runtime updates, and responsive technical assistance.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-silver-metallic/30 bg-surface-charcoal/80 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-silver-chrome mb-3">
            Let&apos;s map out your project milestones.
          </h2>
          <p className="text-sm text-silver-muted max-w-lg mx-auto mb-6">
            Tell us about your technical requirements and timeline. We will prepare an architectural roadmap for your review.
          </p>
          <Button
            href="/start-project"
            variant="chrome"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
