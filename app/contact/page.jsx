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
      <Section className="pt-4">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([I, t, v, h]) => (
            <div key={t} className={card}>
              <I className="mb-4 h-6 w-6 text-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{t}</p>
              {h ? <a href={h} className="mt-1 block font-semibold hover:text-blue-600">{v}</a> : <p className="mt-1 font-semibold">{v}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
