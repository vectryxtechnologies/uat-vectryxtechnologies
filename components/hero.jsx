"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import Button from "@/components/ui/button";
import ParticleSphere from "@/components/particle-sphere";
import "./home.css";
import "./hero-motion.css";

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionReduced(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  const scatter = () => { if (!motionReduced) { setPaused(false); setBurstKey(key => key + 1); } };

  return <section className="home-hero" aria-labelledby="hero-title">
    <div className="site-wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">Software · AI · Cloud · Data</p>
        <h1 id="hero-title" className="hero-enter"><span>Your digital</span><span>transformation</span><span className="hero-accent">partner.</span></h1>
        <p className="hero-description hero-enter">We turn spreadsheets, paper forms and manual follow-ups into custom software, web platforms, mobile apps and AI tools, built around how your business really works.</p>
        <div className="btn-row hero-enter"><Button href="/start-project" variant="primary">Let&rsquo;s talk</Button><Button href="/projects" variant="secondary">See our work</Button></div>
        <div className="hero-tags hero-enter">{["100% custom-built", "Web, mobile, AI & cloud under one roof"].map(t => <span key={t}><i />{t}</span>)}</div>
      </div>
      <div className="hero-art-slot" onClick={event => { if (!event.target.closest("button")) scatter(); }}>
        <ParticleSphere className="hero-particles" onStageChange={setStage} burstKey={burstKey} paused={paused} />
        <p className="particle-hint"><span className="particle-hint-pointer">Move to explore · click to scatter</span><span className="particle-hint-touch">Tap to scatter & reform</span></p>
        <div className="particle-status">
          <i className={`status-orbit ${paused || motionReduced ? "is-paused" : ""}`} aria-hidden="true" />
          <b>Vectryx</b>
          <div className="status-dots" aria-hidden="true">{[0, 1, 2, 3, 4].map(i => <i key={i} className={i === stage ? "active" : ""} />)}</div>
          <div className="particle-controls">
            <button type="button" className="particle-control" onClick={scatter} disabled={motionReduced} aria-label="Scatter and reform the particles" title="Scatter & reform"><RotateCcw size={14} /></button>
            <button type="button" className="particle-control" onClick={() => setPaused(value => !value)} disabled={motionReduced} aria-label={paused ? "Play particle animation" : "Pause particle animation"} aria-pressed={paused} title={paused ? "Play animation" : "Pause animation"}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>
          </div>
        </div>
      </div>
    </div>
    <a href="#introduction" className="hero-scroll"><i /><span>Scroll</span></a>
  </section>;
}
