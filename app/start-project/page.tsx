import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Shield, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Your Project | Technical Inquiry Portal",
  description:
    "Submit your software development, MVP engineering, AI integration, or technical project mentorship inquiry to Vectryx Technologies.",
};

function InquiryFormWrapper({
  searchParams,
}: {
  searchParams: { category?: string; type?: string };
}) {
  return (
    <InquiryForm
      initialCategory={searchParams.category}
      initialCustomerType={searchParams.type}
    />
  );
}

export default function StartProjectPage({
  searchParams,
}: {
  searchParams: { category?: string; type?: string };
}) {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Lead Generation Portal
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-4">
            Start Your Project.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Provide details about your project scope, timeline, and goals. Our engineering
            leads will review your requirements and respond with a structured feasibility analysis
            and custom proposal.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-silver-muted">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-silver-platinum" />
              <span>Review Time: &lt;24 Business Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-silver-platinum" />
              <span>Strict Privacy &amp; Data Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-silver-platinum" />
              <span>Direct Senior Engineer Review</span>
            </div>
          </div>
        </div>

        {/* Lead Generation Form */}
        <Suspense fallback={<div className="text-center text-silver-muted py-12">Loading portal...</div>}>
          <InquiryFormWrapper searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
