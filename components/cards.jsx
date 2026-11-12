import Link from "next/link";
import { ArrowUpRight, Building2, ArrowRight } from "lucide-react";
import { SERVICES, PROJECTS, STEPS, COMPANIES } from "@/lib/site";
import { Visual } from "@/components/section";

export function ServiceGrid() {
  return (
    <div className="vx-service-grid">
      {SERVICES.map((s, i) => (
        <div key={s.slug} className="vx-card vx-service-card">
          <div className="vx-card-top"><span className="vx-card-icon"><s.icon size={25} strokeWidth={1.5} /></span><span className="vx-card-number">{String(i + 1).padStart(2, "0")}</span></div>
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <Link href={"/services/" + s.slug} className="vx-text-link">Read More <span><ArrowUpRight size={17} /></span></Link>
        </div>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }) {
  return (
    <div className="vx-project-grid">
      {PROJECTS.slice(0, limit).map((p) => (
        <Link key={p.slug} href={"/projects/" + p.slug} className="vx-project-card">
          <div className="vx-project-frame"><Visual image={p.image} alt={p.title} /><span className="vx-project-tag">{p.tag}</span><span className="vx-project-arrow"><ArrowUpRight size={22} /></span></div>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function CompanyGrid() {
  return (
    <div className="vx-company-grid">
      {COMPANIES.map((c, i) => (
        <div key={c.name} className="vx-card vx-company-card">
          <div className="vx-card-top"><span className="vx-card-icon"><Building2 size={25} strokeWidth={1.5} /></span><span className="vx-card-number">{String(i + 1).padStart(2, "0")}</span></div>
          <p className="vx-company-industry">{c.industry}</p>
          <h3>{c.name}</h3>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps() {
  return (
    <div className="vx-steps">
      {STEPS.map((s, i) => (
        <div key={s.title} className="vx-step">
          <div className="vx-step-top"><span>{String(i + 1).padStart(2, "0")}</span>{i < STEPS.length - 1 && <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />}</div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
