"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Lenis from "lenis";

export default function PageEffects() {
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const [loaded, setLoaded] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis, frame, timer, finish;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false, anchors: { offset: -110 } });
      scrollRef.current = lenis;
      const raf = time => { lenis.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
      try {
        if (!sessionStorage.getItem("vectryx-visited")) {
          sessionStorage.setItem("vectryx-visited", "true");
          setLoaded(false);
          const start = performance.now();
          timer = setInterval(() => setProgress(Math.min(100, Math.round((performance.now() - start) / 8))), 40);
          finish = setTimeout(() => { setLoaded(true); clearInterval(timer); }, 1000);
        } else { setLoaded(true); }
      } catch { /* Storage may be disabled; the page remains fully usable. */ }
    }
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { lenis?.destroy(); scrollRef.current = null; cancelAnimationFrame(frame); clearInterval(timer); clearTimeout(finish); window.removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, behavior: "instant" });
    setScrolled(false);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .08, rootMargin: "0px 0px -25px 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, [pathname]);
  return <>
    <div className={`page-loader ${loaded ? "is-loaded" : ""}`} aria-hidden="true"><div className="loader-mark">V.</div><div className="loader-count">{String(progress).padStart(3,"0")}%</div><div className="loader-brand">Vectryx Technologies</div></div>
    <button type="button" className={`back-to-top ${scrolled ? "visible" : ""}`} tabIndex={scrolled ? 0 : -1} aria-hidden={!scrolled} aria-label="Back to top" onClick={() => scrollRef.current ? scrollRef.current.scrollTo(0) : window.scrollTo({ top: 0, behavior: "instant" })}><ArrowUp /></button>
  </>;
}
