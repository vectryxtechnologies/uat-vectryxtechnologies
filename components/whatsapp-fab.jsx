import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a href={SITE.whatsapp} aria-label="Chat on WhatsApp" className="fixed bottom-[calc(20px+env(safe-area-inset-bottom,0px))] right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-foreground text-background transition-transform hover:-translate-y-px">
      <MessageCircle className="h-5 w-5" fill="currentColor" />
    </a>
  );
}
