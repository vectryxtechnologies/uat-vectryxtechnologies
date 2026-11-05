import Link from "next/link";
import { cn } from "@/lib/utils";

export const wrap = "mx-auto max-w-[1200px] px-6";
export const card = "rounded-3xl border border-white/10 bg-[#0A1020]/80 p-6 shadow-lg shadow-black/20 backdrop-blur-sm";

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className={wrap + " pb-10 pt-36"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-400">{eyebrow}</p>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{intro}</p>}
    </section>
  );
}

export function Section({ id, eyebrow, title, intro, children, className }) {
  return (
    <section id={id} className={cn(wrap, "py-16", className)}>
      {(title || eyebrow) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-400">{eyebrow}</p>}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-slate-400">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function Visual({ image, alt = "", icon: Icon, className }) {
  if (image) return <img src={image} alt={alt} loading="lazy" className={cn("aspect-[4/3] w-full rounded-3xl object-cover", className)} />;
  return (
    <div className={cn("grid aspect-[4/3] place-items-center rounded-3xl bg-gradient-to-br from-blue-600/30 via-blue-950/40 to-black", className)} role="img" aria-label={alt}>
      {Icon && <Icon className="h-14 w-14 text-blue-400" strokeWidth={1.5} />}
    </div>
  );
}

export function CTA() {
  return (
    <section className={wrap + " py-16"}>
      <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-[#0B1224] via-[#070B16] to-black px-8 py-14 text-center text-white shadow-2xl shadow-blue-950/40">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Have a project in mind? Let&rsquo;s talk.</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">Tell us what you&rsquo;re trying to solve and we&rsquo;ll reply with honest next steps.</p>
        <div className="mt-8 flex justify-center"><Link href="/start-project" className="inline-flex rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500">Start a project</Link></div>
      </div>
    </section>
  );
}

export function InfoPage({ eyebrow, title, blocks }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />
      <div className={wrap + " max-w-3xl pb-20"}>
        {blocks.map(([h, p]) => (
          <div key={h} className="mb-8"><h2 className="mb-2 text-xl font-bold text-white">{h}</h2><p className="leading-relaxed text-slate-400">{p}</p></div>
        ))}
      </div>
    </>
  );
}
