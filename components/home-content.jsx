"use client";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Pause, Play, Layers, Globe, Smartphone, Brain, BarChart3, Cloud, Plus, Minus, CheckCircle2, Code2 } from "lucide-react";
import { SOLUTIONS, SERVICES, SHARED_CONTENT, STEPS } from "@/lib/site";
import Button from "@/components/ui/button";
import "./home.css";

const solutionIcons = [Layers, Globe, Smartphone, Brain, BarChart3, Cloud];

export function Introduction() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const update = () => { const rect=el.getBoundingClientRect(); const progress=Math.max(0,Math.min(1,(innerHeight*.85-rect.top)/(innerHeight*.55))); el.querySelectorAll(".statement-word").forEach((word,i,words)=>word.classList.toggle("read", i/words.length < progress)); };
    const onScroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(update);};
    el.classList.add("word-reveal");update();window.addEventListener("scroll",onScroll,{passive:true});
    return()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",onScroll);};
  },[]);
  const statement="Vectryx Technologies is a software and AI engineering team helping businesses replace manual processes with reliable digital systems.";
  return <section id="introduction" className="home-introduction"><div className="intro-orbit" aria-hidden="true"/><div className="site-wrap"><p className="eyebrow" data-reveal>About us</p><p className="home-statement" ref={ref}>{statement.split(" ").map((word,i)=><span className={`statement-word ${i>15?"highlight":""}`} key={i}>{word}{" "}</span>)}</p><Link href="/about" className="text-link" data-reveal>About Vectryx Technologies <ArrowUpRight/></Link></div></section>;
}

function Dashboard({ kind=0 }) {
  const labels=["ERP & Internal Tools","Online Platforms","Mobile Apps","AI Automation","Data & Dashboards","Cloud Modernisation"];
  return <div className={`solution-visual visual-kind-${kind}`} aria-hidden="true">
    <div className="visual-floating visual-floating-a"><CheckCircle2 size={17}/><span>{["Real-time branch reports","Customer portals","Works without signal","AI Automation","Reports always current","Cloud Modernisation"][kind]}</span></div>
    <div className="demo-window">
      <div className="demo-top"><span className="demo-lights"><i/><i/><i/></span><span>Vectryx</span><span className="demo-live"><i/>Live</span></div>
      <div className="demo-body"><aside className="demo-sidebar"><span className="demo-monogram">v.</span>{[Layers,BarChart3,Globe,Code2].map((I,i)=><I key={i} size={15}/>)}</aside><div className="demo-main"><div className="demo-heading">{labels[kind]}</div>
      {kind===2 ? <div className="demo-tasks">{STEPS.slice(0,3).map((s,i)=><div key={s.title}><span className="task-check"><Check size={14}/></span><div><b>{s.title}</b><i className="task-line"/></div><span>0{i+1}</span></div>)}</div> : <><div className="demo-metrics"><div><span>{kind===4?"Data":"Orders"}</span><b>{kind===4?"12.8k":"128"}</b></div><div><span>{kind===5?"Uptime":"Progress"}</span><b>{kind===5?"99.9%":"96%"}</b></div><div><span>Systems</span><b>06</b></div></div><div className="demo-chart">{[28,46,38,62,51,78,67,92,83,100].map((h,i)=><i key={i} style={{"--bar-height":`${h}%`,"--bar-delay":`${i*.08}s`}}/>)}</div><div className="demo-table">{["Discover","Design","Build"].map((t,i)=><div key={t}><span>0{i+1}</span><b>{t}</b><i/></div>)}</div></>}
      </div></div>
    </div><div className="visual-floating visual-floating-b"><span className="floating-dot"/>Software · AI · Cloud · Data</div>
  </div>;
}

export function SolutionsShowcase() {
  const [active,setActive]=useState(0),[playing,setPlaying]=useState(true);
  const panelRef=useRef(null);
  useEffect(()=>{if(!playing||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const timer=setInterval(()=>{if(panelRef.current){const r=panelRef.current.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)setActive(n=>(n+1)%SOLUTIONS.length)}},7000);return()=>clearInterval(timer)},[playing]);
  function select(index){setActive(index);setPlaying(false);}
  function moveTab(event,index){let next;if(event.key==="ArrowDown"||event.key==="ArrowRight")next=(index+1)%SOLUTIONS.length;if(event.key==="ArrowUp"||event.key==="ArrowLeft")next=(index-1+SOLUTIONS.length)%SOLUTIONS.length;if(event.key==="Home")next=0;if(event.key==="End")next=SOLUTIONS.length-1;if(next!==undefined){event.preventDefault();select(next);document.getElementById(`solution-tab-${next}`)?.focus();}}
  return <section className="home-solutions" ref={panelRef} onFocusCapture={() => setPlaying(false)}><div className="site-wrap solutions-layout"><div className="solutions-side"><p className="eyebrow" data-reveal>Solutions</p><h2 data-reveal>Solutions for real business problems.</h2><p className="section-intro" data-reveal>Common problems we solve, and the systems we build to fix them.</p><div role="tablist" aria-label="Solutions" aria-orientation="vertical" className="solution-tabs">{SOLUTIONS.map((s,i)=>{const Icon=solutionIcons[i];return <button key={s.title} id={`solution-tab-${i}`} type="button" role="tab" aria-selected={active===i} aria-controls={`solution-panel-${i}`} tabIndex={active===i?0:-1} onKeyDown={e=>moveTab(e,i)} onClick={()=>select(i)} className={`solution-tab ${active===i?"selected":""}`}><span className="solution-icon"><Icon size={22}/></span><span><b>{s.title}</b><small>{s.text}</small></span><ArrowRight className="solution-arrow" size={15}/>{playing&&active===i&&<i className="solution-timer" key={active}/>}</button>})}</div><div className="solutions-controls"><Link href="/solutions" className="text-link">Solutions <ArrowUpRight/></Link><button type="button" className="autoplay-control" onClick={()=>setPlaying(p=>!p)} aria-label={playing?"Pause solution preview":"Play solution preview"}>{playing?<Pause size={13}/>:<Play size={13}/>}</button></div></div><div className="solution-stage" role="tabpanel" id={`solution-panel-${active}`} aria-labelledby={`solution-tab-${active}`} tabIndex={0}><div className="scene-heading" key={`title-${active}`}><h3>{SOLUTIONS[active].title}</h3><p>{SOLUTIONS[active].text}</p><span className="scene-label">Software · AI · Cloud · Data</span></div><div className="scene-animation" key={active}><Dashboard kind={active}/></div><div className="scene-footer"><span><i/>100% custom-built</span><span>0{active+1} / 06</span></div></div></div></section>;
}

export function ServicesShowcase() {
  const [active,setActive]=useState(0);
  return <section id="services" className="home-services"><div className="site-wrap"><div className="home-section-head" data-reveal><p className="eyebrow">What we do</p><h2>Everything you need to go digital</h2><p>From first idea to launch and beyond, one team across software, web, mobile, AI, data and cloud.</p></div><div className="service-accordion">{SERVICES.map((s,i)=><article key={s.slug} className={`service-panel ${active===i?"expanded":""} ${i%2?"service-dark":""}`}><button type="button" id={`service-tab-${i}`} className="service-rail" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`service-content-${i}`}><span>0{i+1}</span><b>{s.title}</b><Plus size={18}/></button><div className="service-panel-content" id={`service-content-${i}`} role="region" aria-labelledby={`service-tab-${i}`} hidden={active!==i}><div className="service-panel-copy"><span className="service-count">0{i+1} / 0{SERVICES.length}</span><h3>{s.title}</h3><strong>{s.tagline}</strong><p>{s.short}</p><Button href={`/services/${s.slug}`} variant="accent">Read More</Button></div><Dashboard kind={i===0?0:i===1?1:i===2?2:i===3?3:i===4?5:4}/></div></article>)}</div></div></section>;
}

export function WhyUs() {
  return <section className="home-why"><div className="site-wrap"><div className="home-section-head" data-reveal><p className="eyebrow">Why us</p><h2>Why choose Vectryx Technologies?</h2><p>{SHARED_CONTENT.whyChooseIntro}</p></div><div className="why-grid">{SHARED_CONTENT.whyChoosePoints.map((item,i)=><article data-reveal key={item.title}><span className="why-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight aria-hidden="true"/></article>)}</div></div></section>;
}

export function Marquee() {
  return <div className="home-marquee" aria-label="Software, AI, Cloud, Data"><div className="home-marquee-track" aria-hidden="true">{[0,1].map(n=><div key={n}><span>Software</span><i/><span className="outline-word">AI & Cloud</span><i className="peach"/><span>Data</span><i/></div>)}</div></div>;
}

export function FAQ({items=SHARED_CONTENT.generalFAQs}) {
  const [open,setOpen]=useState(0); const faqId=useId();
  return <div className="faq-list">{items.map(({q,a},i)=><div className={`faq-entry ${open===i?"is-open":""}`} key={q}><h3><button type="button" aria-expanded={open===i} aria-controls={`${faqId}-${i}`} onClick={()=>setOpen(open===i?null:i)}><span>{q}</span>{open===i?<Minus size={19}/>:<Plus size={19}/>}</button></h3><div className="faq-answer" id={`${faqId}-${i}`} inert={open!==i?"":undefined}><div><p>{a}</p></div></div></div>)}</div>;
}

export function HomeFAQ() {
  return <section className="home-faq"><div className="site-wrap faq-layout"><div data-reveal><p className="eyebrow">General</p><h2>Working with us</h2><p>{SHARED_CONTENT.generalFAQs[5].a}</p><Button href="/contact" variant="secondary">Contact <span className="sr-only">Vectryx Technologies</span></Button></div><FAQ/></div></section>;
}
