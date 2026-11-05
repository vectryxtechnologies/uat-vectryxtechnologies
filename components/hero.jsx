"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import ParticleSphere from "@/components/particle-sphere";

const DOTS = [
  { l: "6%", t: "24%", s: 14, d: 0 }, { l: "44%", t: "14%", s: 9, d: -3 }, { l: "92%", t: "30%", s: 18, d: -5 },
  { l: "12%", t: "78%", s: 11, d: -2 }, { l: "58%", t: "88%", s: 16, d: -6, p: 1 }, { l: "80%", t: "70%", s: 8, d: -4, p: 1 },
];

function Clock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    tick(); const id = setInterval(tick, 15000); return () => clearInterval(id);
  }, []);
  return (
    <div className="pointer-events-none absolute grid h-[92px] w-[92px] place-items-center rounded-full border border-white/10 bg-[#070B16] text-center text-white shadow-2xl shadow-blue-950/50">
      <div><small className="mb-0.5 block text-[9px] tracking-[0.2em] text-blue-300">LOCAL</small><b className="text-[17px] font-semibold tabular-nums">{t}</b></div>
    </div>
  );
}

function Progress() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((n) => (n + 1) % 4), 1600); return () => clearInterval(id); }, []);
  return (
    <div className="absolute bottom-2 right-[4%] flex items-center gap-3 rounded-full border border-white/10 bg-[#0A1020]/80 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-black/30 backdrop-blur-md">
      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      Vectryx
      <span className="flex items-center gap-1">
        {[0, 1, 2, 3].map((n) => <motion.i key={n} animate={{ width: n === i ? 18 : 6, opacity: n === i ? 1 : 0.5 }} className={"h-1.5 rounded-full " + (n === i ? "bg-blue-500" : "bg-slate-600")} />)}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen max-w-[1200px] items-center gap-8 px-6 pb-24 pt-[110px] sm:pt-[130px] lg:grid-cols-2">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {DOTS.map((d, k) => <i key={k} style={{ left: d.l, top: d.t, width: d.s, height: d.s, animationDelay: `${d.d}s` }} className={"absolute animate-float rounded-full opacity-30 blur-[2px] " + (d.p ? "bg-sky-400" : "bg-blue-500")} />)}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 flex flex-col items-start gap-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-400">
          <span className="flex gap-1"><i className="h-2 w-2 rounded-full bg-blue-500" /><i className="h-2 w-2 rounded-full bg-sky-300" /></span>
          Software · AI · Cloud · Data
        </div>
        <h1 className="text-[clamp(44px,8vw,80px)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
          Your digital<br />transformation<br /><span className="text-blue-400">partner.</span>
        </h1>
        <p className="max-w-[34em] text-[17px] leading-relaxed text-slate-400">
          We turn spreadsheets, paper forms and manual follow-ups into custom software, web platforms, mobile apps and AI tools, built around how your business really works.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-1">
          <Button href="/start-project" variant="green">Let&rsquo;s talk</Button>
          <Button href="/projects" variant="soft">See our work</Button>
        </div>
        <div className="flex flex-wrap gap-2.5 pt-1.5 text-xs font-semibold text-slate-200">
          {["100% custom-built", "Web, mobile, AI & cloud under one roof"].map((t) => (
            <span key={t} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><i className="h-2 w-2 rounded-full bg-blue-500" />{t}</span>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative z-10 grid min-h-[380px] place-items-center">
        <ParticleSphere className="aspect-square w-full max-w-[560px] touch-pan-y" />
        <Clock />
        <Progress />
      </motion.div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-slate-500 sm:flex">
        <span className="flex h-[26px] w-4 justify-center rounded-full border-2 border-slate-500/70 p-1"><i className="h-1.5 w-[3px] animate-wheel rounded-sm bg-slate-400" /></span>
        SCROLL
      </div>
    </section>
  );
}
