import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import {
  footerServicesLinks,
  footerCompanyLinks,
  footerLegalLinks,
  companyDetails,
} from "@/lib/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-deep border-t border-border/80 pt-16 pb-12 overflow-hidden text-silver-muted">
      {/* Top subtle highlight gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-metallic/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum rounded-md"
            >
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Vectryx Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-silver-chrome">
                  {companyDetails.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver-muted -mt-1">
                  {companyDetails.positioning}
                </span>
              </div>
            </Link>

            <p className="text-sm text-silver-muted leading-relaxed max-w-sm">
              We transform ideas into powerful digital products through innovative software
              development, modern technologies, and reliable project delivery.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={companyDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border bg-surface-charcoal/80 text-silver-muted hover:text-silver-chrome hover:border-silver-metallic/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum"
                aria-label="Vectryx GitHub Organization"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border bg-surface-charcoal/80 text-silver-muted hover:text-silver-chrome hover:border-silver-metallic/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum"
                aria-label="Vectryx LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyDetails.email}`}
                className="p-2 rounded-md border border-border bg-surface-charcoal/80 text-silver-muted hover:text-silver-chrome hover:border-silver-metallic/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum"
                aria-label="Email Vectryx Inquiries"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-silver-chrome mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-silver-chrome transition-colors flex items-center group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-silver-chrome mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-silver-chrome transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Inquiry CTA Column */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-silver-chrome mb-4">
              Start Project
            </h3>
            <p className="text-xs text-silver-muted leading-relaxed">
              Have an idea or need technical consultation? Reach out to our engineering leads directly.
            </p>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-silver-chrome hover:text-white transition-colors border-b border-silver-metallic/40 pb-0.5"
            >
              <span>Submit Project Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="pt-3">
              <span className="block text-[11px] text-silver-muted/80 uppercase font-mono">
                Official Inquiries:
              </span>
              <a
                href={`mailto:${companyDetails.email}`}
                className="text-xs font-mono text-silver-platinum hover:underline"
              >
                {companyDetails.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-silver-muted">
            &copy; {currentYear} {companyDetails.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-silver-chrome transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
