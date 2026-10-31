"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { faqData } from "@/lib/data/faq";
import { SectionHeading } from "@/components/animations/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Services", "Process & Pricing", "Support"] as const;

  const filteredFaqs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const accordionItems = filteredFaqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: f.category,
  }));

  return (
    <section className="py-24 sm:py-32 relative bg-surface-deep/40 border-t border-border/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Frequently Asked Questions"
          title="Clarity Before Collaboration"
          subtitle="Direct, transparent answers regarding our software capabilities, pricing approach, mentorship ethics, and delivery standards."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum ${
                selectedCategory === cat
                  ? "bg-surface-charcoal text-silver-chrome border-silver-metallic/60 font-semibold"
                  : "bg-surface-graphite/40 text-silver-muted border-border hover:border-silver-metallic/30 hover:text-silver-platinum"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Accordion List */}
        <Accordion items={accordionItems} defaultOpenIndex={0} />

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-xl border border-border bg-surface-graphite/40 max-w-xl mx-auto">
          <p className="font-heading text-sm font-semibold text-silver-chrome mb-1">
            Have a custom inquiry not addressed here?
          </p>
          <p className="text-xs text-silver-muted mb-4 font-sans">
            Our engineering team is available to review your project specifics and answer any questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-silver-platinum hover:text-white border-b border-silver-metallic/40 pb-0.5 transition-colors"
          >
            <span>Speak Directly with Our Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
