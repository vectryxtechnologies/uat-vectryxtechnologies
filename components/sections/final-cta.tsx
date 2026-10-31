import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-surface-deep border-t border-border/80 scroll-mt-20">
      {/* Premium Metallic Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-metallic/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-metallic/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
          <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
          <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
            Initiate Collaboration
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-silver-chrome leading-tight mb-6">
          Have an Idea? Let&apos;s Build It.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-silver-muted max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          Tell us about your vision. Our team can help turn it into a practical, high-performance
          digital solution built to scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/start-project"
            size="lg"
            variant="chrome"
            className="w-full sm:w-auto"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start Your Project
          </Button>

          <Button
            href="/contact"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            icon={<Mail className="w-4 h-4" />}
          >
            Contact Our Team
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-silver-muted/80">
          <div>Response Time: &lt;24 Business Hours</div>
          <div>NDA &amp; IP Protection Available</div>
          <div>Milestone-Driven Delivery</div>
        </div>
      </div>
    </section>
  );
}
