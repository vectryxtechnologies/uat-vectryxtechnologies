"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import ParticleSphere from "@/components/particle-sphere";
import "./home.css";
export default function Hero() {
 const [stage,setStage]=useState(0);
 useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const timer=setInterval(()=>setStage(n=>(n+1)%5),6000);return()=>clearInterval(timer)},[]);
 return <section className="home-hero" aria-labelledby="hero-title">
  <ParticleSphere className="hero-particles" stage={stage}/>
  <div className="site-wrap hero-grid"><div className="hero-copy">
   <p className="eyebrow hero-enter">Software · AI · Cloud · Data</p>
   <h1 id="hero-title" className="hero-enter"><span>Your digital</span><span>transformation</span><span className="hero-accent">partner.</span></h1>
   <p className="hero-description hero-enter">We turn spreadsheets, paper forms and manual follow-ups into custom software, web platforms, mobile apps and AI tools, built around how your business really works.</p>
   <div className="btn-row hero-enter"><Button href="/start-project" variant="primary">Let&rsquo;s talk</Button><Button href="/projects" variant="secondary">See our work</Button></div>
   <div className="hero-tags hero-enter">{["100% custom-built","Web, mobile, AI & cloud under one roof"].map(t=><span key={t}><i/>{t}</span>)}</div>
  </div><div className="hero-art-slot" aria-hidden="true"><div className="particle-status"><i className="status-orbit"/><b>Vectryx</b><div className="status-dots">{[0,1,2,3,4].map(i=><i key={i} className={i===stage?"active":""}/>)}</div></div></div></div>
  <a href="#introduction" className="hero-scroll"><i/><span>Scroll</span></a>
 </section>
}
