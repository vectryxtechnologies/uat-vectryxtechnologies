"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, SERVICES } from "@/lib/site";
import Logo from "@/components/logo";
import Button from "@/components/ui/button";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="fixed inset-x-0 top-[calc(16px+env(safe-area-inset-top,0px))] z-50 px-4">
      <motion.nav initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} aria-label="Main"
        className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border border-white/10 bg-[#070B16]/80 py-2.5 pl-[22px] pr-3 shadow-lg shadow-black/30 backdrop-blur-md">
        <Logo />
        <ul className="hidden gap-1 text-sm font-medium text-slate-400 lg:flex">
          {NAV.map((l) => (
            <li key={l.href} className="group relative">
              <Link href={l.href} className={"flex items-center gap-1.5 rounded-full px-3.5 py-[7px] hover:text-white " + (active(l.href) ? "bg-white/10 text-white" : "")}>
                {l.label}
                {active(l.href) && !l.dropdown && <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />}
                {l.dropdown && <ChevronDown className="h-3 w-3" strokeWidth={2.5} />}
              </Link>
              {l.dropdown && (
                <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-white/10 bg-[#0A1020] p-2 shadow-xl shadow-black/40">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
                        <s.icon className="h-4 w-4 text-blue-400" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button href="/start-project" variant="green" size="sm">Start a project</Button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-white/10 bg-[#0A1020] p-3 shadow-xl lg:hidden">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={"block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 " + (active(l.href) ? "bg-white/10 text-white" : "")}>{l.label}</Link>
            ))}
          </div>
        )}
      </motion.nav>
    </header>
  );
}
