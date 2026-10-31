import type { Metadata } from "next";
import Link from "next/link";
import { companyDetails } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Vectryx Technologies — how we collect, handle, protect, and process user inquiries and data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-silver-muted block mb-2">
            Legal &amp; Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-silver-chrome mb-3">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-silver-muted">
            Last Updated: November 2026 | Vectryx Technologies
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm text-silver-muted leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              1. Overview &amp; Commitment
            </h2>
            <p>
              Vectryx Technologies (&quot;Vectryx&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website{" "}
              <Link href="/" className="text-silver-platinum underline">
                vectryx.com
              </Link>
              . We are committed to safeguarding the privacy and confidentiality of our website
              visitors, prospective clients, students, and enterprise partners.
            </p>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing
              or advertising purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our website or submit an inquiry through our project portal,
              we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-silver-platinum">
              <li>Contact details: Full name, email address, phone number, and WhatsApp number.</li>
              <li>Entity information: Company name or academic institution.</li>
              <li>Project parameters: Project category, estimated budget, timeline, and requirements.</li>
              <li>Technical reference data: Submitted repository URLs or specification links.</li>
              <li>Automated telemetry: IP address (strictly for rate-limiting and DDoS prevention).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              3. Purpose of Processing
            </h2>
            <p>We process collected information solely for the following legitimate purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-silver-platinum">
              <li>Reviewing project inquiries and conducting preliminary feasibility analyses.</li>
              <li>Preparing tailored technical proposals, statements of work, and custom quotations.</li>
              <li>Communicating with you regarding engineering consultations and mentorship sessions.</li>
              <li>Preventing malicious automated form spam and securing our API route endpoints.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              4. Data Retention &amp; Security
            </h2>
            <p>
              We enforce strict defensive security measures. Transmission of sensitive data is
              encrypted using TLS/HTTPS. Project materials and inquiries are forwarded securely to
              our verified corporate email system via Resend and are not retained in public databases.
            </p>
            <p>
              Uploaded project materials and resumes (for AI prototype testing) are processed in
              memory and deleted immediately following analysis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-silver-chrome">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request
              corrections, or request the deletion of your inquiry records at any time.
            </p>
            <p>
              To exercise any of these rights, please contact our data compliance point of contact at:{" "}
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
