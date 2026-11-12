"use client";

import { useEffect, useRef } from "react";
import "./cursor-trail.css";

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const tokens = getComputedStyle(document.documentElement);
    const gold = tokens.getPropertyValue("--accent").trim();
    const highlight = tokens.getPropertyValue("--accent-soft").trim();
    const ink = tokens.getPropertyValue("--accent-ink").trim();
    let width = 0, height = 0, frame = 0, samples = [], lastSample = 0;
    let enabled = false, overControl = false;

    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      samples = [];
      context.clearRect(0, 0, width, height);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      clear();
    };

    const draw = time => {
      frame = 0;
      context.clearRect(0, 0, width, height);
      samples = samples.filter(point => time - point.time < 420);
      if (!samples.length || !enabled || document.hidden) return;

      context.lineCap = "round";
      context.lineJoin = "round";
      for (let i = 1; i < samples.length; i++) {
        const previous = samples[i - 1], point = samples[i];
        const life = Math.max(0, 1 - (time - point.time) / 420);
        const taper = i / samples.length;
        context.globalAlpha = life * taper * 0.6;
        context.strokeStyle = gold;
        context.lineWidth = 1 + taper * 3;
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.stroke();

        context.globalAlpha = life * taper * 0.75;
        context.strokeStyle = highlight;
        context.lineWidth = taper * 1.2;
        context.stroke();

        // A few drifting gold flecks add a soft sparkle without hiding the pointer.
        if (i % 4 === 0) {
          const drift = (1 - life) * 14;
          context.fillStyle = i % 8 === 0 ? ink : gold;
          context.globalAlpha = life * 0.5;
          context.beginPath();
          context.arc(point.x + Math.sin(point.time * 0.03) * drift,
            point.y - drift, 0.6 + life * 1.1, 0, Math.PI * 2);
          context.fill();
        }
      }

      const head = samples[samples.length - 1];
      const headLife = Math.max(0, 1 - (time - head.time) / 420);
      context.globalAlpha = headLife * 0.45;
      context.strokeStyle = gold;
      context.lineWidth = 1;
      context.beginPath();
      context.arc(head.x, head.y, overControl ? 13 : 5, 0, Math.PI * 2);
      context.stroke();
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    const onMove = event => {
      if (!enabled || event.pointerType !== "mouse" || document.hidden) return;
      if (event.target instanceof Element && event.target.closest("input,textarea,select,[contenteditable=true]")) {
        clear();
        return;
      }
      const now = performance.now();
      if (now - lastSample < 8) return;
      lastSample = now;
      overControl = event.target instanceof Element && Boolean(event.target.closest("a,button,[role=tab]"));
      samples.push({ x: event.clientX, y: event.clientY, time: now });
      if (samples.length > 32) samples.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const onPreference = () => {
      enabled = finePointer.matches && !reducedMotion.matches;
      clear();
    };
    const onVisibility = () => { if (document.hidden) clear(); };

    resize();
    onPreference();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("blur", clear);
    window.addEventListener("scroll", clear, { passive: true });
    document.documentElement.addEventListener("pointerleave", clear);
    document.addEventListener("visibilitychange", onVisibility);
    finePointer.addEventListener("change", onPreference);
    reducedMotion.addEventListener("change", onPreference);
    return () => {
      clear();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", clear);
      window.removeEventListener("scroll", clear);
      document.documentElement.removeEventListener("pointerleave", clear);
      document.removeEventListener("visibilitychange", onVisibility);
      finePointer.removeEventListener("change", onPreference);
      reducedMotion.removeEventListener("change", onPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
