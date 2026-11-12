import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <div className="vx-floating-actions">
      <a href={SITE.whatsapp} aria-label="Chat on WhatsApp" className="vx-whatsapp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true"><path d="m6.5 25.6 1.2-4.4a11 11 0 1 1 4.1 4l-5.3 1.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12 10.4c.3-.2.6-.1.7.2l1.1 2.4c.1.3.1.5-.1.7l-.8 1c.7 1.7 2.1 3 3.7 3.8l1.1-.9c.2-.2.4-.2.7-.1l2.3 1.1c.4.2.4.5.3.8-.3 1.4-1.4 2-2.6 1.8-4.5-.7-8.6-4.7-8.8-8.1 0-1.2 1-2.4 2.4-2.7Z" fill="currentColor" /></svg>
      </a>
    </div>
  );
}
