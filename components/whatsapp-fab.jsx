import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
export default function WhatsAppFab() {
  return (
    <a href={SITE.whatsapp} aria-label="Chat on WhatsApp" className="fixed bottom-[calc(20px+env(safe-area-inset-bottom,0px))] right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-700/40 transition-transform hover:scale-110">
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
