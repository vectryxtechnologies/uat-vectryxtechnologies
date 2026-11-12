"use client";

import { useEffect, useRef } from "react";
import { CYCLE_MS, SCATTER_START_MS, SHAPE_COUNT, clamp, sampleCycle, scatterPoint, seed, shapePoint } from "@/lib/particle-motion.mjs";

const PALETTE = ["#f5c518", "#d3a408", "#a67c00", "#ffe78c", "#29251b", "#c48e3c"];

export default function ParticleSphere({ className, onStageChange, burstKey = 0, paused = false }) {
  const canvasRef = useRef(null);
  const controls = useRef(null);
  const settings = useRef({ onStageChange, burstKey, paused });
  settings.current = { onStageChange, burstKey, paused };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const count = finePointer.matches ? 1250 : 780;
    const particles = Array.from({ length: count }, (_, i) => ({
      shapes: Array.from({ length: SHAPE_COUNT }, (_, shape) => shapePoint(i, count, shape)),
      scatter: scatterPoint(i),
      color: PALETTE[i % 19 === 0 ? 4 : i % 29 === 0 ? 5 : i % 4],
      size: .85 + seed(i, 8) * 1.15,
      angle: seed(i, 9) * Math.PI * 2,
      x: 0, y: 0, z: 0, scale: 1, pushX: 0, pushY: 0,
    }));
    const depthOrder = particles.slice();
    let width = 0, height = 0, frame = 0, last = 0, elapsed = 0, rotation = 0;
    let inView = false, lastShape = -1, seenBurst = settings.current.burstKey;
    let pointerX = 0, pointerY = 0, tiltX = 0, tiltY = 0;
    let cursorX = -9999, cursorY = -9999;

    function draw(dt = 0) {
      if (!width || !height) return;
      const moving = !reduced.matches && !settings.current.paused;
      if (moving) {
        elapsed += dt;
        rotation += dt * .00014;
      }
      const motion = reduced.matches ? { shape: 0, scatter: 0 } : sampleCycle(elapsed);
      if (motion.shape !== lastShape) {
        lastShape = motion.shape;
        settings.current.onStageChange?.(lastShape);
      }
      const follow = 1 - Math.exp(-dt * .006);
      tiltX += ((moving ? pointerX : 0) - tiltX) * follow;
      tiltY += ((moving ? pointerY : 0) - tiltY) * follow;
      const radius = Math.min(width * .345, (height - 95) * .42, 225);
      const cx = width * .5 + tiltX * 17;
      const cy = (height - 80) * .49 + tiltY * 12;
      const yaw = rotation + tiltX * .52;
      const pitch = -.2 - tiltY * .32;
      const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
      const cosX = Math.cos(pitch), sinX = Math.sin(pitch);
      const scatter = motion.scatter;
      const curve = Math.sin(scatter * Math.PI) * .2;
      ctx.clearRect(0, 0, width, height);

      // Diffuse shadow and halo give the particles a volume to inhabit.
      const groundY = Math.min(height - 82, cy + radius * 1.14);
      const shadow = ctx.createRadialGradient(cx, groundY, 0, cx, groundY, radius);
      shadow.addColorStop(0, `rgba(83,62,15,${.14 * (1 - scatter * .6)})`);
      shadow.addColorStop(1, "rgba(83,62,15,0)");
      ctx.save();
      ctx.translate(cx, groundY);
      ctx.scale(1, .14);
      ctx.translate(-cx, -groundY);
      ctx.fillStyle = shadow;
      ctx.fillRect(cx - radius, groundY - radius, radius * 2, radius * 2);
      ctx.restore();
      const halo = ctx.createRadialGradient(cx - radius * .2, cy - radius * .2, 0, cx, cy, radius * 1.45);
      halo.addColorStop(0, `rgba(245,197,24,${.06 * (1 - scatter)})`);
      halo.addColorStop(1, "rgba(245,197,24,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        const target = p.shapes[motion.shape];
        const x = target[0] + (p.scatter[0] - target[0]) * scatter + Math.sin(p.angle) * curve;
        const y = target[1] + (p.scatter[1] - target[1]) * scatter + Math.cos(p.angle) * curve;
        const z = target[2] + (p.scatter[2] - target[2]) * scatter;
        const rx = x * cosY + z * sinY;
        const rz = -x * sinY + z * cosY;
        p.y = y * cosX - rz * sinX;
        p.z = y * sinX + rz * cosX;
        p.scale = 4.8 / (4.8 - p.z);
        p.x = cx + rx * radius * p.scale;
        p.y = cy + p.y * radius * p.scale;
        // Keep the original close-range cursor repulsion on top of the 3D tilt.
        // A short spring return lets individual beads settle back into their form.
        if (reduced.matches) { p.pushX = 0; p.pushY = 0; }
        else if (moving) {
          const dx = p.x - cursorX, dy = p.y - cursorY;
          const distance = Math.hypot(dx, dy);
          const force = distance > 0 && distance < 100 ? (1 - distance / 100) * 22 : 0;
          const response = 1 - Math.exp(-dt * .018);
          p.pushX += ((force ? dx / distance * force : 0) - p.pushX) * response;
          p.pushY += ((force ? dy / distance * force : 0) - p.pushY) * response;
        }
        p.x += p.pushX;
        p.y += p.pushY;
      }
      depthOrder.sort((a, b) => a.z - b.z);
      for (const p of depthOrder) {
        const depth = clamp((p.z + 1.5) / 3);
        const size = p.size * (.75 + depth * 1.05) * p.scale;
        ctx.globalAlpha = (.16 + depth * .8) * (1 - scatter * .25);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, size, size * .84, -.4 + yaw * .25, 0, Math.PI * 2);
        ctx.fill();
        // Sparse highlights read as beads without expensive per-dot blur.
        if (depth > .69 && size > 1.8) {
          ctx.globalAlpha = (depth - .45) * .66;
          ctx.fillStyle = "#fff8df";
          ctx.beginPath();
          ctx.arc(p.x - size * .26, p.y - size * .3, size * .32, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    const canAnimate = () => inView && !document.hidden && !reduced.matches && !settings.current.paused;
    function tick(time) {
      frame = 0;
      if (!canAnimate()) return;
      const dt = last ? Math.min(time - last, 48) : 16;
      last = time;
      draw(dt);
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      if (seenBurst !== settings.current.burstKey) {
        seenBurst = settings.current.burstKey;
        if (!reduced.matches) {
          // Start at the current dispersion to prevent jumps when tapped mid-formation.
          const current = sampleCycle(elapsed);
          let lo = 0, hi = 1;
          for (let i = 0; i < 18; i++) {
            const mid = (lo + hi) / 2;
            const value = sampleCycle(SCATTER_START_MS + mid * 2300).scatter;
            if (value < current.scatter) lo = mid; else hi = mid;
          }
          elapsed = Math.floor(elapsed / CYCLE_MS) * CYCLE_MS + SCATTER_START_MS + (lo + hi) * 1150;
        }
      }
      if (!canAnimate()) {
        cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
        if (reduced.matches) { tiltX = 0; tiltY = 0; rotation = .35; }
        draw();
      } else if (!frame) {
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    }
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const resetPointer = () => { pointerX = 0; pointerY = 0; cursorX = -9999; cursorY = -9999; };
    const onPointer = event => {
      if (event.pointerType === "touch" || !finePointer.matches || reduced.matches) return;
      const hero = canvas.closest("section").getBoundingClientRect();
      if (event.clientY < hero.top || event.clientY > hero.bottom) { resetPointer(); return; }
      pointerX = clamp((event.clientX - hero.left) / hero.width * 2 - 1, -1, 1);
      pointerY = clamp((event.clientY - hero.top) / hero.height * 2 - 1, -1, 1);
      const rect = canvas.getBoundingClientRect();
      cursorX = event.clientX - rect.left;
      cursorY = event.clientY - rect.top;
    };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); }, { threshold: .01 });
    const resizeObserver = new ResizeObserver(resize);
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    finePointer.addEventListener("change", resetPointer);
    controls.current = { sync };
    resize();
    return () => {
      controls.current = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
      finePointer.removeEventListener("change", resetPointer);
    };
  }, []);

  useEffect(() => { controls.current?.sync(); }, [paused, burstKey]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
