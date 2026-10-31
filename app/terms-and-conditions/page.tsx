import type { Metadata } from "next";
import Link from "next/link";
import { companyDetails } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of Vectryx Technologies software development services, project engagements, and digital platforms.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-silver-muted block mb-2">
            Legal &amp; Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-silver-chrome mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="font-mono text-xs text-silver-muted">
            Last Updated: November 2026 | Vectryx Technologies
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm text-silver-muted leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or submitting project inquiries through the Vectryx Technologies
              website (&quot;Website&quot;), you agree to be bound by these Terms and Conditions. If you do
              not agree with these terms, please discontinue using our digital platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              2. Engagement Models &amp; Custom Quotations
            </h2>
            <p>
              Submissions through our Start Your Project portal or contact forms constitute preliminary
              requests for consultation. Custom quotations, development roadmaps, and delivery schedules
              become legally binding only upon the execution of a mutually agreed Statement of Work
              (SOW) or formal written agreement between Vectryx Technologies and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              3. Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              For custom software engineering engagements, full ownership of custom application source
              code, proprietary schemas, and deliverables transfers to the client upon complete
              satisfaction of contractually agreed milestone payments.
            </p>
            <p>
              Pre-existing tools, open-source libraries, and reusable framework primitives developed
              by Vectryx Technologies remain subject to their respective open-source or commercial licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              4. Technical Mentorship &amp; Academic Integrity
            </h2>
            <p>
              Vectryx Technologies provides technical consultation, debugging mentorship, architecture
              reviews, and documentation guidance for students and solo innovators.
            </p>
            <p>
              Our mentorship is strictly educational and advisory. We advocate for academic integrity
              and learning mastery. Students and researchers are solely responsible for ensuring that
              their submissions comply with their academic institution&apos;s ethical policies, honor codes,
              and examination rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Vectryx Technologies shall not be
              held liable for indirect, incidental, or consequential damages resulting from the use
              or inability to use our website, prototype demonstrations, or third-party service
              interruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              6. Inquiries &amp; Contact
            </h2>
            <p>
              For legal questions regarding these terms, please reach out directly to:{" "}
              <a
                href={`mailto:${companyDetails.email}`}
                className="font-mono text-silver-chrome underline"
              >
                {companyDetails.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
