"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";
import "./navigation.css";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const serviceToggleRef = useRef(null);
  const active = (href) => href === "/" ? path === "/" : path.startsWith(href);

  useEffect(() => { setOpen(false); setDropdown(false); setMobileServices(false); }, [path]);
  useEffect(() => {
    let previous = window.scrollY;
    const scroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - previous) > 6) { setHidden(y > 180 && y > previous); previous = y; }
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        if (open) { setOpen(false); toggleRef.current?.focus(); }
        if (dropdown) { setDropdown(false); serviceToggleRef.current?.focus(); }
      }
      if (open && event.key === "Tab") {
        const targets = [toggleRef.current, ...menuRef.current.querySelectorAll('a[href], button:not([disabled])')];
        const first = targets[0], last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      menuRef.current?.querySelector("a")?.focus();
      return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, dropdown]);

  return (
    <>
      <header className={`vx-header ${hidden && !open && !dropdown ? "is-hidden" : ""}`}>
        <nav aria-label="Main" className="vx-nav">
          <Logo />
          <ul className="vx-nav-links">
            {NAV.map((link) => (
              <li key={link.href} className={link.dropdown ? "vx-service-nav" : ""}
                {...(link.dropdown && {
                  onMouseEnter: () => setDropdown(true),
                  onMouseLeave: () => setDropdown(false),
                  onBlur: (event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(false); },
                })}>
                <div className={`vx-nav-item ${active(link.href) ? "is-active" : ""}`}>
                  <Link href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setDropdown(false)}>{link.label}</Link>
                  {link.dropdown && <button ref={serviceToggleRef} type="button" className="vx-service-toggle" aria-label="Show services" aria-expanded={dropdown} aria-controls="services-dropdown" onClick={(event) => setDropdown(event.detail === 0 ? !dropdown : true)}><ChevronDown size={13} /></button>}
                </div>
                {link.dropdown && (
                  <div id="services-dropdown" className={`vx-dropdown ${dropdown ? "is-open" : ""}`} inert={dropdown ? undefined : ""}>
                    <div className="vx-dropdown-grid">
                      {SERVICES.map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={service.slug} className="vx-dropdown-item" onClick={() => setDropdown(false)}>
                          <span className="vx-dropdown-icon"><service.icon size={20} strokeWidth={1.6} /></span>
                          <span><small>0{index + 1} / 0{SERVICES.length}</small><strong>{service.title}</strong></span>
                          <ArrowUpRight size={16} />
                        </Link>
                      ))}
                    </div>
                    <div className="vx-dropdown-footer"><Link href="/services" onClick={() => setDropdown(false)}>All services <ArrowUpRight size={14} /></Link><Link href="/start-project" onClick={() => setDropdown(false)}>Let&apos;s talk <span /></Link></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="vx-nav-actions">
            <Button href="https://calendly.com/team-vectryxtechnologies/30min" variant="accent" size="sm" className="vx-meeting">Book a Meeting</Button>
            <button ref={toggleRef} type="button" className="vx-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </nav>
      </header>
      {open && <div id="mobile-menu" ref={menuRef} className="vx-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" data-lenis-prevent>
        <ul>
          {NAV.map((link, index) => <li key={link.href} style={{ "--link-index": index }}>
            <div className="vx-mobile-item"><Link href={link.href} onClick={() => setOpen(false)} aria-current={active(link.href) ? "page" : undefined}><small>0{index + 1}</small>{link.label}</Link>{link.dropdown && <button type="button" aria-label="Show mobile services" aria-expanded={mobileServices} aria-controls="mobile-services" onClick={() => setMobileServices(!mobileServices)}><ChevronDown size={23} /></button>}</div>
            {link.dropdown && mobileServices && <div id="mobile-services" className="vx-mobile-services">{SERVICES.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>{service.title}<ArrowUpRight size={14} /></Link>)}</div>}
          </li>)}
        </ul>
        <div className="vx-mobile-foot"><p>Software, AI and cloud engineering for ambitious businesses.</p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><Button href="https://calendly.com/team-vectryxtechnologies/30min" variant="accent" size="sm">Book a Meeting</Button></div>
      </div>}
    </>
  );
}
