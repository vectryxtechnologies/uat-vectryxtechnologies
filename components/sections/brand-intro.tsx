import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, Layers } from "lucide-react";

export function BrandIntro() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-surface-deep/60 border-y border-border/70 overflow-hidden scroll-mt-20">
      {/* Subtle background ambient line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Editorial Headline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
              <span className="font-mono text-xs uppercase tracking-widest text-silver-muted font-medium">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-silver-chrome leading-tight">
              Technology Built Around Your Vision.
            </h2>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-silver-platinum hover:text-white border-b border-silver-metallic/40 pb-0.5 transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Editorial Content & Feature Points */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-silver-chrome font-sans leading-relaxed">
              At Vectryx Technologies, we combine engineering expertise, modern technologies,
              and creative thinking to turn complex ideas into practical digital solutions.
            </p>

            <p className="text-base text-silver-muted leading-relaxed font-sans">
              Whether building an enterprise web platform, prototyping an AI-augmented utility, or
              guiding an ambitious engineer through advanced system architecture, we reject hollow
              hyping and template clones. We focus on clean code, measurable performance, and
              rock-solid software delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
              <div className="space-y-1.5 p-3 rounded-lg bg-surface-graphite/40 border border-border/40">
                <div className="flex items-center gap-2 text-silver-chrome font-heading text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-silver-platinum" />
                  <span>Defensive Security</span>
                </div>
                <p className="text-xs text-silver-muted">
                  Strict OWASP validation and sanitized API boundaries by default.
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg bg-surface-graphite/40 border border-border/40">
                <div className="flex items-center gap-2 text-silver-chrome font-heading text-sm font-semibold">
                  <Zap className="w-4 h-4 text-silver-platinum" />
                  <span>Sub-Second Speed</span>
                </div>
                <p className="text-xs text-silver-muted">
                  Targeting sub-100ms API responses and 95+ Lighthouse profiles.
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg bg-surface-graphite/40 border border-border/40">
                <div className="flex items-center gap-2 text-silver-chrome font-heading text-sm font-semibold">
                  <Layers className="w-4 h-4 text-silver-platinum" />
                  <span>Modular Systems</span>
                </div>
                <p className="text-xs text-silver-muted">
                  Type-safe scalable components ready for painless future iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
