import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="vx-footer">
      <div className="vx-footer-wrap">
        <div className="vx-footer-grid">
          <div className="vx-footer-brand"><Logo /><p>Software, AI and cloud engineering for ambitious businesses.</p></div>
          <div><h3>Services</h3><ul>{SERVICES.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul></div>
          <div><h3>Company</h3><ul>{[["About", "/about"], ["How we work", "/how-we-work"], ["Projects", "/projects"], ["Technologies", "/technologies"], ["Contact", "/contact"]].map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
          <div className="vx-footer-contact"><h3>Get in touch</h3><a href={`mailto:${SITE.email}`}>{SITE.email}</a><Button href="https://calendly.com/team-vectryxtechnologies/30min" variant="green" size="sm">Book a Meeting</Button></div>
        </div>
        <div className="vx-footer-sign">
          <p className="vx-footer-eyebrow"><i />{SITE.name} · {SITE.location}</p>
          <p className="vx-footer-tagline">Your digital<br />transformation<br /><span>partner.</span></p>
          <svg className="vx-footer-art" viewBox="0 0 400 400" fill="none" aria-hidden="true"><path d="M20 80 188 345 373 50M88 50 188 213 300 35M20 120 188 385 395 78" /><circle cx="373" cy="50" r="18" /><circle cx="300" cy="35" r="12" /><circle cx="395" cy="78" r="9" /></svg>
        </div>
        <div className="vx-footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div></div>
      </div>
    </footer>
  );
}
