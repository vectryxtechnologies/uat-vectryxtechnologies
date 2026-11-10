import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { SERVICES, PROJECTS, STEPS, COMPANIES } from "@/lib/site";
import { card, Visual } from "@/components/section";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <div key={s.slug} className={card + " flex flex-col"}>
          <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-subtle text-foreground">
            <s.icon className="h-4 w-4" />
          </span>
          <h3 className="mb-2 text-lg font-semibold tracking-[-0.03em]">{s.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
          <div className="mt-5">
            <Link
              href={`/services/${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              Read More <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.slice(0, limit).map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
          <Visual image={p.image} alt={p.title} icon={ArrowUpRight} />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">{p.tag}</p>
          <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">{p.title}</h3>
          <p className="mt-1 text-sm text-muted">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function CompanyGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {COMPANIES.map((c) => (
        <div key={c.name} className={card}>
          <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-subtle text-foreground">
            <Building2 className="h-4 w-4" />
          </div>
          <p className="mb-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">{c.industry}</p>
          <h3 className="mb-2 text-lg font-semibold tracking-[-0.03em]">{c.name}</h3>
          <p className="text-sm leading-relaxed text-muted">{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps() {
  return (
    <div className="grid border border-border sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s, i) => (
        <div key={s.title} className="border-border p-6 max-lg:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">0{i + 1}</span>
          <h3 className="mb-2 mt-2 text-lg font-semibold tracking-[-0.03em]">{s.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{s.text}</p>
        </div>
      ))}
    </div>
  );
}
