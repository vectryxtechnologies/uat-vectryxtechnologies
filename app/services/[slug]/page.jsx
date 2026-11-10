import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { SERVICES, SHARED_CONTENT } from "@/lib/site";
import { PageHeader, Section, CTA, Visual, card, wrap } from "@/components/section";
import Button from "@/components/ui/button";

export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export const generateMetadata = ({ params }) => ({ title: SERVICES.find((s) => s.slug === params.slug)?.title });

export default function ServicePage({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const { whyChooseIntro, whyChoosePoints, howWeWorkSteps, engagementModels, generalFAQs } = SHARED_CONTENT;

  return (
    <>
      {/* Hero */}
      <PageHeader eyebrow="Service" title={s.title} intro={s.tagline} />

      {/* Section intro + what we deliver */}
      <Section title={s.sectionTitle} intro={s.sectionIntro}>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className={card}>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.03em]">Our Services</h2>
            <ul className="space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <Visual image={s.image} alt={s.title} icon={s.icon} />
        </div>
      </Section>

      {/* Technical Capabilities */}
      {s.tech?.length > 0 && (
        <Section eyebrow="Stack" title="Technical capabilities">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.tech.map((t) => {
              const colonIdx = t.indexOf(": ");
              const label = colonIdx > -1 ? t.slice(0, colonIdx) : t;
              const value = colonIdx > -1 ? t.slice(colonIdx + 2).replace(/\.$/, "") : "";
              return (
                <div key={t} className={card}>
                  <p className="mb-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">{label}</p>
                  {value && <p className="text-sm leading-relaxed text-foreground">{value}</p>}
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* Our Process */}
      {s.process?.length > 0 && (
        <Section eyebrow="Approach" title="Our process">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {s.process.map((step, i) => (
              <li key={i} className={card + " flex flex-col gap-2"}>
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">0{i + 1}</span>
                <p className="text-sm leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Who We Work With */}
      {s.whoWeWorkWith && (
        <Section eyebrow="Clients" title="Who we work with">
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{s.whoWeWorkWith}</p>
        </Section>
      )}

      {/* Service-specific FAQ */}
      {s.faqs?.length > 0 && (
        <Section eyebrow="FAQ" title="Frequently asked questions">
          <div className="grid gap-4 sm:grid-cols-2">
            {s.faqs.map(({ q, a }) => (
              <div key={q} className={card}>
                <p className="mb-2 font-semibold tracking-[-0.02em]">{q}</p>
                <p className="text-sm leading-relaxed text-muted">{a}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Service-specific CTA */}
      {s.finalCTA && (
        <section className="border-b border-border py-20">
          <div className={wrap}>
            <div className="rounded-xl border border-border bg-subtle p-12 text-center">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{s.finalCTA.heading}</h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{s.finalCTA.body}</p>
              <div className="mt-8 flex justify-center">
                <Button href="/start-project" variant="primary">{s.finalCTA.buttonText}</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Shared Conversion Content ── */}

      {/* Why Choose Vectryx */}
      <Section eyebrow="Why us" title="Why choose Vectryx Technologies?" intro={whyChooseIntro}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoosePoints.map(({ title, text }) => (
            <div key={title} className={card}>
              <p className="mb-2 font-semibold tracking-[-0.02em]">{title}</p>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work + Engagement Models */}
      <Section eyebrow="Process" title="How we work with clients">
        <div className="grid gap-10 lg:grid-cols-2">
          <ol className="space-y-4">
            {howWeWorkSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-subtle font-mono text-xs text-muted">{i + 1}</span>
                <p className="pt-0.5 text-sm leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em]">Engagement models</h3>
            {engagementModels.map(({ title, text }) => (
              <div key={title} className={card + " flex gap-3"}>
                <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="mb-1 font-semibold tracking-[-0.02em]">{title}</p>
                  <p className="text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* General FAQs */}
      <Section eyebrow="General" title="Working with us">
        <div className="grid gap-4 sm:grid-cols-2">
          {generalFAQs.map(({ q, a }) => (
            <div key={q} className={card}>
              <p className="mb-2 font-semibold tracking-[-0.02em]">{q}</p>
              <p className="text-sm leading-relaxed text-muted">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Other Services */}
      <Section eyebrow="Explore" title="Other services">
        <div className="flex flex-wrap gap-3">
          {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
            <Link key={x.slug} href={`/services/${x.slug}`} className="rounded-full border border-border bg-subtle px-4 py-2 text-sm font-medium hover:border-border-strong">{x.title}</Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
