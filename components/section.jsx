import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

// Full-width section borders, centered content up to 7xl
export const wrap = "mx-auto w-full max-w-7xl px-6 sm:px-10";
export const card = "rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-subtle";

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-border py-20">
      <div className={wrap}>
        {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">{eyebrow}</p>}
        <h1 className="max-w-3xl bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-transparent sm:text-7xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ id, eyebrow, title, intro, children, className }) {
  return (
    <section id={id} className="border-b border-border py-20">
      <div className={cn(wrap, className)}>
        {(title || eyebrow) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>}
            {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Visual({ image, alt = "", icon: Icon, className }) {
  if (image) return <img src={image} alt={alt} loading="lazy" className={cn("aspect-[4/3] w-full rounded-xl border border-border object-cover", className)} />;
  return (
    <div
      className={cn("relative grid aspect-[4/3] place-items-center overflow-hidden rounded-xl border border-border bg-subtle", className)}
      role="img"
      aria-label={alt}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {Icon && <Icon className="relative h-10 w-10 text-faint" strokeWidth={1.5} />}
    </div>
  );
}

export function CTA() {
  return (
    <section className="border-b border-border py-20">
      <div className={wrap}>
        <div className="rounded-xl border border-border bg-subtle p-12 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Have a project in mind? Let&rsquo;s talk.</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">Tell us what you&rsquo;re trying to solve and we&rsquo;ll reply with honest next steps.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/start-project" variant="primary">Start a project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfoPage({ eyebrow, title, blocks }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />
      <section className="border-b border-border py-20">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
          {blocks.map(([h, p]) => (
            <div key={h} className="mb-8">
              <h2 className="mb-2 text-xl font-semibold tracking-[-0.03em]">{h}</h2>
              <p className="leading-relaxed text-muted">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
