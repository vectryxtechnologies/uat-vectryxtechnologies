"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Lenis from "lenis";

// Animate complete pieces of content, so their internal controls stay stable.
const REVEAL_TARGETS = [
  "[data-reveal]", ".home-statement", ".solution-tab", ".solution-stage",
  ".service-panel", ".vx-card", ".vx-project-card", ".vx-step", ".faq-entry",
  ".vx-info-block", ".vx-visual", ".vx-wrap > .text-muted",
  ".vx-cta-content > *", ".vx-footer-grid > *", ".vx-footer-eyebrow",
  ".vx-footer-tagline", ".vx-footer-bottom",
].join(",");

export default function PageEffects() {
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let lenis, frame;
    const stopSmoothScroll = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
      scrollRef.current = null;
    };
    const syncSmoothScroll = () => {
      stopSmoothScroll();
      if (motion.matches) return;
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false, anchors: { offset: -110 } });
      scrollRef.current = lenis;
      const raf = time => { lenis.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
    };
    syncSmoothScroll();
    motion.addEventListener("change", syncSmoothScroll);
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { stopSmoothScroll(); motion.removeEventListener("change", syncSmoothScroll); window.removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, behavior: "instant" });
    setScrolled(false);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const registered = new Set();
    const seen = new WeakSet();
    const animations = new Map();
    const additions = new Set();
    let scanFrame;

    const finish = element => {
      seen.add(element);
      observer.unobserve(element);
      animations.get(element)?.cancel();
      animations.delete(element);
      element.classList.add("is-visible");
      element.removeAttribute("data-entering");
    };
    const reveal = (element, delay = 0) => {
      if (seen.has(element)) return;
      seen.add(element);
      observer.unobserve(element);
      element.classList.add("is-visible");
      if (motion.matches || element.contains(document.activeElement) || !element.animate) return;

      const isVisual = element.matches(".vx-visual,.solution-stage,.vx-project-card");
      element.setAttribute("data-entering", "");
      // Individual transforms leave the component's hover/3D transform intact.
      // Content is never hidden by CSS: interrupted or unsupported animations
      // fall back to the normal, fully visible page.
      const animation = element.animate([
        { opacity: 0, translate: `0 ${isVisual ? 42 : 26}px`, scale: isVisual ? .965 : .988 },
        { opacity: 1, translate: "0 0", scale: 1 },
      ], { duration: isVisual ? 1000 : 780, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
      animations.set(element, animation);
      animation.onfinish = () => {
        animations.delete(element);
        element.removeAttribute("data-entering");
      };
    };
    const observer = new IntersectionObserver(entries => {
      const groups = new Map();
      entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach(entry => {
          const parent = entry.target.parentElement;
          const index = groups.get(parent) || 0;
          groups.set(parent, index + 1);
          reveal(entry.target, Math.min(index * 75, 300));
        });
    }, { threshold: .01, rootMargin: "0px 0px 24px 0px" });

    const register = element => {
      if (registered.has(element) || element.closest(".home-hero,[aria-hidden=true]")) return;
      // Do not stack entrance effects inside an already animated component.
      if (element.parentElement?.closest(REVEAL_TARGETS)) return;
      registered.add(element);
      element.setAttribute("data-motion-item", "");
      if (motion.matches) finish(element);
      else observer.observe(element);
    };
    const scan = root => {
      if (root instanceof Element && root.matches(REVEAL_TARGETS)) register(root);
      root.querySelectorAll(REVEAL_TARGETS).forEach(register);
    };
    const roots = [document.querySelector("main"), document.querySelector(".vx-footer")].filter(Boolean);
    roots.forEach(scan);

    // Route streaming and newly inserted cards are handled without watching
    // style/class changes from the animation, cursor, or particle renderer.
    const mutations = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node instanceof Element) additions.add(node);
      }));
      if (!additions.size || scanFrame) return;
      scanFrame = requestAnimationFrame(() => {
        scanFrame = null;
        additions.forEach(node => { if (node.isConnected) scan(node); });
        additions.clear();
        registered.forEach(element => {
          if (!element.isConnected) { finish(element); registered.delete(element); }
        });
      });
    });
    roots.forEach(root => mutations.observe(root, { childList: true, subtree: true }));
    const onFocus = event => {
      let element = event.target;
      while (element instanceof Element) {
        if (registered.has(element)) finish(element);
        element = element.parentElement;
      }
    };
    const onMotion = () => { if (motion.matches) registered.forEach(finish); };
    document.addEventListener("focusin", onFocus);
    motion.addEventListener("change", onMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(scanFrame);
      document.removeEventListener("focusin", onFocus);
      motion.removeEventListener("change", onMotion);
      registered.forEach(element => {
        animations.get(element)?.cancel();
        element.removeAttribute("data-entering");
        element.removeAttribute("data-motion-item");
      });
      animations.clear();
    };
  }, [pathname]);
  return (
    <button type="button" className={`back-to-top ${scrolled ? "visible" : ""}`} tabIndex={scrolled ? 0 : -1} aria-hidden={!scrolled} aria-label="Back to top" onClick={() => scrollRef.current ? scrollRef.current.scrollTo(0) : window.scrollTo({ top: 0, behavior: "instant" })}><ArrowUp /></button>
  );
}
