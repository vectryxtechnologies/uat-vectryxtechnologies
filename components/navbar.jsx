"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, SERVICES } from "@/lib/site";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  const links = NAV.filter((l) => l.href !== "/contact");

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <Logo />
        <ul className="hidden items-center gap-1 text-sm text-muted lg:flex">
          {links.map((l) => (
            <li key={l.href} className="group relative">
              <Link href={l.href} className={"flex items-center gap-1 px-3 py-1.5 hover:text-foreground " + (active(l.href) ? "text-foreground" : "")}>
                {l.label}
                {l.dropdown && <ChevronDown className="h-3 w-3" strokeWidth={2} />}
              </Link>
              {l.dropdown && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-64 rounded-xl border border-border bg-surface p-1.5">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted hover:bg-subtle hover:text-foreground">
                        <s.icon className="h-4 w-4 text-foreground" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden text-sm text-muted hover:text-foreground sm:inline">Contact</Link>
          <Button href="https://calendly.com/d/d4mx-qv8-8kc" variant="primary" size="sm">Book a Meeting</Button>
          <button type="button" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-8 w-8 place-items-center text-foreground lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-b border-border bg-background p-3 lg:hidden">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={"block rounded-md px-4 py-3 text-sm " + (active(l.href) ? "bg-subtle text-foreground" : "text-muted")}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
