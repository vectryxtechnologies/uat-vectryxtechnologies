import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";
import Logo from "@/components/logo";
import { wrap } from "@/components/section";

export default function Footer() {
  const col = "flex flex-col gap-2 text-sm text-slate-400";
  const h = "mb-3 text-xs font-semibold uppercase tracking-widest text-white";
  return (
    <footer className="border-t border-white/10 bg-black/40 py-14">
      <div className={wrap + " grid gap-10 sm:grid-cols-2 lg:grid-cols-4"}>
        <div className="flex flex-col gap-3 text-sm text-slate-400">
          <Logo />
          <p>Software, AI and cloud engineering for ambitious businesses.</p>
        </div>
        <div><p className={h}>Services</p><div className={col}>{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-blue-400">{s.title}</Link>)}</div></div>
        <div><p className={h}>Company</p><div className={col}>
          {[["About", "/about"], ["How we work", "/how-we-work"], ["Projects", "/projects"], ["Technologies", "/technologies"], ["Contact", "/contact"]].map(([t, u]) => <Link key={u} href={u} className="hover:text-blue-400">{t}</Link>)}
        </div></div>
        <div><p className={h}>Get in touch</p><div className={col}>
          <a href={`mailto:${SITE.email}`} className="hover:text-blue-400">{SITE.email}</a><span>{SITE.phone}</span><span>{SITE.location}</span>
        </div></div>
      </div>
      <div className={wrap + " mt-10 flex flex-wrap justify-between gap-3 text-xs text-slate-500"}>
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span className="flex gap-4"><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-blue-400">Terms &amp; Conditions</Link></span>
      </div>
    </footer>
  );
}
