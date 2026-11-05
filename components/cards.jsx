import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, PROJECTS, STEPS } from "@/lib/site";
import { card, Visual } from "@/components/section";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className={card + " group transition hover:-translate-y-1 hover:border-blue-500/50"}>
          <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-400"><s.icon className="h-5 w-5" /></span>
          <h3 className="mb-2 flex items-center justify-between text-lg font-bold text-white">{s.title}<ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" /></h3>
          <p className="text-sm leading-relaxed text-slate-400">{s.short}</p>
        </Link>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.slice(0, limit).map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
          <Visual image={p.image} alt={p.title} icon={ArrowUpRight} className="transition group-hover:scale-[1.02]" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-400">{p.tag}</p>
          <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function Steps() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s, i) => (
        <div key={s.title} className={card}>
          <span className="text-sm font-bold text-blue-400">0{i + 1}</span>
          <h3 className="mb-2 mt-2 text-lg font-bold text-white">{s.title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
        </div>
      ))}
    </div>
  );
}
