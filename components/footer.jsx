import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";

export default function Footer() {
  const col = "flex flex-col gap-2 text-sm text-muted";
  const h = "mb-3 font-mono text-xs uppercase tracking-wider text-faint";
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Left — big logo + tagline */}
          <div className="flex flex-shrink-0 flex-col gap-4 lg:w-72">
            <Logo className="h-32 w-auto" />
            <p className="text-sm leading-relaxed text-muted">
              Software, AI and cloud engineering for ambitious businesses.
            </p>
          </div>

          {/* Right — link columns */}
          <div className="grid flex-1 gap-10 sm:grid-cols-3">
            <div>
              <p className={h}>Services</p>
              <div className={col}>
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className={h}>Company</p>
              <div className={col}>
                {[["About", "/about"], ["How we work", "/how-we-work"], ["Projects", "/projects"], ["Technologies", "/technologies"], ["Contact", "/contact"]].map(([t, u]) => (
                  <Link key={u} href={u} className="hover:text-foreground">{t}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className={h}>Get in touch</p>
              <div className={col}>
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a>
              </div>
              <div className="mt-4">
                <Button href="https://calendly.com/team-vectryxtechnologies/30min" variant="primary" size="sm">Book a Meeting</Button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 font-mono text-xs text-faint">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
