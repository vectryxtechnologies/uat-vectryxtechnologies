"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER || "";

  // Gracefully hide if no verified number is configured
  if (!whatsappNumber || whatsappNumber.trim() === "") {
    return null;
  }

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hello Vectryx Technologies team, I am interested in discussing a software project."
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct Messaging"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Vectryx Technologies via WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-surface-charcoal/90 border border-silver-metallic/40 px-4 py-2.5 text-xs font-mono text-silver-chrome shadow-chrome-subtle backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-silver-chrome hover:bg-surface-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-silver-platinum group-hover:text-white" />
        <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
