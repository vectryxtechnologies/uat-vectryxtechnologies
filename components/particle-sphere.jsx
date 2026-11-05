"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#1D4ED8", "#2563EB", "#3B82F6", "#60A5FA", "#0F172A", "#93C5FD", "#1E3A8A"];
const N = 520;

export default function ParticleSphere({ className }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext("2d");
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = Array.from({ length: N }, (_, i) => {
      const y = 1 - (2 * (i + 0.5)) / N, r = Math.sqrt(1 - y * y), t = i * 2.399963;
      return { x: Math.cos(t) * r, y, z: Math.sin(t) * r, c: COLORS[Math.floor(Math.random() * COLORS.length)], a: Math.random() * 6.28 };
    });
    let W = 0, H = 0, raf = 0, rot = 0, mx = 0, my = 0, tx = 0, ty = 0;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e) => { const b = cv.getBoundingClientRect(); tx = ((e.clientX - b.left) / b.width - 0.5) * 2; ty = ((e.clientY - b.top) / b.height - 0.5) * 2; };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05; if (!still) rot += 0.003;
      const R = Math.min(W, H) * 0.4, cy = Math.cos(rot + mx * 0.9), sy = Math.sin(rot + mx * 0.9), cx = Math.cos(my * 0.5), sx = Math.sin(my * 0.5);
      const out = pts.map((p) => { const x = p.x * cy + p.z * sy, z = -p.x * sy + p.z * cy; return { p, x, y: p.y * cx - z * sx, z: p.y * sx + z * cx }; }).sort((a, b) => a.z - b.z);
      ctx.lineCap = "round";
      for (const o of out) {
        const d = (o.z + 1) / 2, len = 5 + d * 7, ang = Math.atan2(o.y, o.x) + Math.PI / 2 + o.p.a * 0.15;
        const px = W / 2 + o.x * R, py = H / 2 + o.y * R, dx = (Math.cos(ang) * len) / 2, dy = (Math.sin(ang) * len) / 2;
        ctx.globalAlpha = 0.25 + d * 0.75;
        ctx.strokeStyle = o.p.c === "#0F172A" ? "#93C5FD" : o.p.c;
        ctx.lineWidth = 2.2 * (0.55 + d * 0.7);
        ctx.beginPath(); ctx.moveTo(px - dx, py - dy); ctx.lineTo(px + dx, py + dy); ctx.stroke();
      }
      ctx.globalAlpha = 1; raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    addEventListener("resize", resize); addEventListener("pointermove", onMove);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", onMove); };
  }, []);
  return <canvas ref={ref} role="img" aria-label="Interactive particle sphere" className={className} />;
}
