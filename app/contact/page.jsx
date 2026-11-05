import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHeader, Section, card } from "@/components/section";
export const metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    [Mail, "Email", SITE.email, `mailto:${SITE.email}`],
    [Phone, "Phone", SITE.phone, `tel:${SITE.phone.replace(/\s/g, "")}`],
    [MapPin, "Location", SITE.location, null],
  ];
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk about your project." intro="Email or message us and we'll reply within one business day." />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(([I, t, v, h]) => (
            <div key={t} className={card}>
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-subtle text-foreground"><I className="h-4 w-4" /></span>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">{t}</p>
              {h ? <a href={h} className="mt-1 block font-medium hover:text-accent">{v}</a> : <p className="mt-1 font-medium">{v}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
