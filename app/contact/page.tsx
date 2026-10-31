import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { companyDetails } from "@/lib/data/navigation";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team",
  description:
    "Get in touch with Vectryx Technologies for software development inquiries, technical architecture consultation, or project mentorship.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Direct Contact
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            Connect with Our Engineers.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            Have a project question, architectural inquiry, or partnership proposal? Reach out
            directly to our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Channels & SLA */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 space-y-6 border-border/80">
              <h2 className="font-heading text-lg font-bold text-silver-chrome">
                Official Channels
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border text-silver-platinum shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-silver-muted uppercase block">
                      General &amp; Project Inquiries
                    </span>
                    <a
                      href={`mailto:${companyDetails.email}`}
                      className="text-sm font-mono text-silver-chrome hover:text-white hover:underline font-semibold"
                    >
                      {companyDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border text-silver-platinum shrink-0 mt-0.5">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-silver-muted uppercase block">
                      Source Code &amp; Repositories
                    </span>
                    <a
                      href={companyDetails.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-silver-chrome hover:text-white hover:underline"
                    >
                      github.com/subhamoy05/Vectryx
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-charcoal border border-border text-silver-platinum shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-silver-muted uppercase block">
                      Professional Network
                    </span>
                    <a
                      href={companyDetails.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-silver-chrome hover:text-white hover:underline"
                    >
                      Vectryx Technologies on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-silver-muted">
                  <Clock className="w-3.5 h-3.5 text-silver-platinum" />
                  <span>SLA Response: &lt;24 Business Hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-silver-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-silver-platinum" />
                  <span>Confidentiality &amp; NDA Honored</span>
                </div>
              </div>
            </Card>

            {/* Dedicated Start Project Promo */}
            <div className="p-6 rounded-xl border border-silver-metallic/30 bg-surface-charcoal/70 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-silver-platinum px-2 py-0.5 rounded bg-white/5 border border-white/10">
                Detailed Proposal
              </span>
              <h3 className="font-heading text-base font-bold text-silver-chrome">
                Have a defined software scope?
              </h3>
              <p className="text-xs text-silver-muted leading-relaxed font-sans">
                Use our multi-section project inquiry portal to submit budget, timeline, and architectural specifications directly.
              </p>
              <Link
                href="/start-project"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-silver-chrome hover:text-white font-medium border-b border-silver-metallic/50 pb-0.5 transition-colors"
              >
                <span>Launch Start Project Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
