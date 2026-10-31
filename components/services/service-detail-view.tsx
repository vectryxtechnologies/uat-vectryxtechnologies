import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Code, Layers } from "lucide-react";
import { ServiceItem } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ServiceDetailView({ service }: { service: ServiceItem }) {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back breadcrumb */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-silver-muted hover:text-silver-chrome transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Service Specification
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight">
            {service.title}
          </h1>

          <p className="font-mono text-base text-silver-platinum font-medium max-w-3xl">
            {service.heroTagline}
          </p>

          <p className="text-base text-silver-muted leading-relaxed font-sans max-w-3xl">
            {service.overview}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              href={`/start-project?category=${encodeURIComponent(service.title)}`}
              size="md"
              variant="chrome"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start Project with this Service
            </Button>
            <Button
              href="/contact"
              size="md"
              variant="secondary"
            >
              Consult with Lead Architect
            </Button>
          </div>
        </div>

        {/* Sub-Disciplines Grid */}
        <div className="mb-16">
          <h2 className="font-heading text-xs uppercase tracking-widest text-silver-muted font-semibold mb-4">
            Scope &amp; Specializations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.subCategories.map((sub) => (
              <div
                key={sub}
                className="p-4 rounded-lg bg-surface-graphite/60 border border-border/80 flex items-center gap-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-medium text-silver-chrome">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Features */}
        <div className="mb-16">
          <h2 className="font-heading text-xs uppercase tracking-widest text-silver-muted font-semibold mb-6">
            Engineering Capabilities &amp; Design Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat) => (
              <Card key={feat.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-silver-platinum shrink-0" />
                  <h3 className="font-heading text-base font-bold text-silver-chrome">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans">
                  {feat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Deliverables & Stack Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Deliverables */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border/60">
              <Code className="w-4 h-4 text-silver-platinum" />
              <h3 className="font-heading text-sm uppercase tracking-widest font-semibold text-silver-chrome">
                Guaranteed Deliverables
              </h3>
            </div>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver-platinum">
                  <CheckCircle2 className="w-4 h-4 text-silver-muted shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tech Stack & Audience */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 pb-2 border-b border-border/60 mb-4">
                <Shield className="w-4 h-4 text-silver-platinum" />
                <h3 className="font-heading text-sm uppercase tracking-widest font-semibold text-silver-chrome">
                  Core Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <Badge key={tech} variant="silver" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/60">
              <span className="font-mono text-xs uppercase text-silver-muted block mb-1">
                Ideal Profile:
              </span>
              <p className="text-xs sm:text-sm text-silver-chrome font-sans leading-relaxed">
                {service.idealFor}
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Strip */}
        <div className="rounded-xl border border-silver-metallic/30 bg-surface-charcoal/80 p-8 sm:p-10 text-center">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-silver-chrome mb-2">
            Ready to deploy {service.title}?
          </h2>
          <p className="text-xs sm:text-sm text-silver-muted max-w-lg mx-auto mb-6 font-sans">
            Submit your requirements to receive a detailed technical breakdown, timeline estimate, and milestone quotation.
          </p>
          <Button
            href={`/start-project?category=${encodeURIComponent(service.title)}`}
            variant="chrome"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Request a Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
