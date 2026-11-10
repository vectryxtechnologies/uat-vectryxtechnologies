"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import ParticleSphere from "@/components/particle-sphere";

function Clock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    tick(); const id = setInterval(tick, 15000); return () => clearInterval(id);
  }, []);
  return (
    <div className="pointer-events-none absolute grid h-[92px] w-[92px] place-items-center rounded-full border border-border-strong bg-background text-center text-foreground">
      <div>
        <small className="mb-0.5 block font-mono text-[9px] tracking-[0.2em] text-muted">LOCAL</small>
        <b className="font-mono text-[17px] font-medium tabular-nums">{t}</b>
      </div>
    </div>
  );
}

function Progress() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((n) => (n + 1) % 4), 1600); return () => clearInterval(id); }, []);
  return (
    <div className="absolute bottom-2 right-[4%] flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs backdrop-blur-md">
      <span className="h-3 w-3 animate-spin rounded-full border border-border-strong border-t-accent" />
      Vectryx
      <span className="flex items-center gap-1">
        {[0, 1, 2, 3].map((n) => (
          <motion.i key={n} animate={{ width: n === i ? 18 : 6, opacity: n === i ? 1 : 0.5 }} className={"h-1.5 rounded-full " + (n === i ? "bg-accent" : "bg-border-strong")} />
        ))}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20">
      {/* Full-width background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--glow-a), var(--glow-b), transparent)" }}
        />
      </div>

      {/* Centered content — same max-w-7xl as the rest of the site */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 sm:px-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative z-10 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            <i className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software · AI · Cloud · Data
          </div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl">
            <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">Your digital<br />transformation<br /></span>
            <span className="text-accent">partner.</span>
          </h1>
          <p className="max-w-[34em] text-base leading-relaxed text-muted sm:text-lg">
            We turn spreadsheets, paper forms and manual follow-ups into custom software, web platforms, mobile apps and AI tools, built around how your business really works.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button href="/start-project" variant="primary">Let&rsquo;s talk</Button>
            <Button href="/projects" variant="secondary">See our work</Button>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1.5 font-mono text-xs">
            {["100% custom-built", "Web, mobile, AI & cloud under one roof"].map((t) => (
              <span key={t} className="flex items-center gap-2 rounded-full border border-border bg-subtle px-4 py-2"><i className="h-1.5 w-1.5 rounded-full bg-accent" />{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="relative z-10 grid min-h-[380px] place-items-center">
          <ParticleSphere className="aspect-square w-full max-w-[560px] touch-pan-y" />
          <Clock />
          <Progress />
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-faint sm:flex">
        <span className="flex h-[26px] w-4 justify-center rounded-full border border-border-strong p-1"><i className="h-1.5 w-[3px] animate-wheel rounded-sm bg-faint" /></span>
        SCROLL
      </div>
    </section>
  );
}
