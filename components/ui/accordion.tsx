"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  defaultOpenIndex?: number;
}

export function Accordion({ items, className, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-surface-graphite/40 transition-colors duration-200 hover:border-silver-metallic/30 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-heading text-base font-medium text-silver-chrome hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum focus-visible:ring-inset"
              >
                <span>{item.question}</span>
                <span className="ml-4 shrink-0 transition-transform duration-300">
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-silver-muted transition-transform duration-200",
                      isOpen && "rotate-180 text-silver-chrome"
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "px-5 pb-5 pt-0 text-sm leading-relaxed text-silver-muted transition-all duration-300",
                !isOpen && "hidden"
              )}
            >
              <div className="border-t border-border/40 pt-3 text-silver-muted leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
