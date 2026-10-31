import React from "react";
import Link from "next/link";
import { technologiesData } from "@/lib/data/technologies";
import { SectionHeading } from "@/components/animations/section-heading";
import { ArrowUpRight } from "lucide-react";

export function TechMarquee() {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...technologiesData, ...technologiesData];

  return (
    <section id="technologies" className="py-20 sm:py-28 relative bg-background overflow-hidden border-t border-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          kicker="Engineering Stack"
          title="Battle-Tested Technologies"
          subtitle="Our engineering standards are grounded in modern, type-safe, and scalable tools vetted for mission-critical software delivery."
        />
      </div>

      {/* Marquee Container with side gradient masks */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - pauses smoothly on hover */}
        <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused] transition-all">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-surface-charcoal/70 backdrop-blur-sm transition-all duration-200 hover:border-silver-metallic/60 hover:bg-surface-graphite group select-none"
            >
              <div className="h-2 w-2 rounded-full bg-silver-muted group-hover:bg-silver-chrome transition-colors" />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-semibold text-silver-chrome group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] text-silver-muted uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 font-mono text-xs text-silver-platinum hover:text-white border-b border-silver-metallic/40 pb-0.5 transition-colors"
        >
          <span>View Full Architectural Stack & Standards</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
