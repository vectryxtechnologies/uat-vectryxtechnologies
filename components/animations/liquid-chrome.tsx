"use client";

import React, { useEffect, useRef } from "react";

export function LiquidChrome() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = (e.clientX - rect.left) / rect.width;
        mouse.targetY = (e.clientY - rect.top) / rect.height;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const render = () => {
      time += 0.008;
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5 + (mouse.x - 0.5) * 30;
      const centerY = height * 0.5 + (mouse.y - 0.5) * 30;
      const baseRadius = Math.min(width, height) * 0.28;

      // Outer liquid chrome aura
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.2,
        centerX,
        centerY,
        baseRadius * 1.6
      );
      auraGradient.addColorStop(0, "rgba(217, 217, 217, 0.09)");
      auraGradient.addColorStop(0.5, "rgba(167, 167, 167, 0.03)");
      auraGradient.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Fluid Chrome Ring Layers
      const ringCount = 3;
      for (let r = 0; r < ringCount; r++) {
        const layerPhase = time + r * 1.2;
        const radius = baseRadius * (1 - r * 0.22);
        const points = 32;

        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          // Harmonic wave distortion
          const wave1 = Math.sin(angle * 3 + layerPhase) * 12;
          const wave2 = Math.cos(angle * 4 - layerPhase * 0.8) * 8;
          const wave3 = Math.sin(angle * 2 + time * 1.5) * 6;
          const currentRadius = radius + wave1 + wave2 + wave3;

          const x = centerX + Math.cos(angle) * currentRadius;
          const y = centerY + Math.sin(angle) * currentRadius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();

        // Metallic liquid gradient
        const grad = ctx.createLinearGradient(
          centerX - radius,
          centerY - radius,
          centerX + radius,
          centerY + radius
        );
        if (r === 0) {
          grad.addColorStop(0, "#FFFFFF");
          grad.addColorStop(0.25, "#A7A7A7");
          grad.addColorStop(0.5, "#181818");
          grad.addColorStop(0.75, "#D9D9D9");
          grad.addColorStop(1, "#303030");
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 1.5;
        } else if (r === 1) {
          grad.addColorStop(0, "#E5E5E5");
          grad.addColorStop(0.3, "#404040");
          grad.addColorStop(0.7, "#888888");
          grad.addColorStop(1, "#0A0A0A");
          ctx.strokeStyle = "rgba(217, 217, 217, 0.25)";
          ctx.lineWidth = 1;
        } else {
          grad.addColorStop(0, "#FFFFFF");
          grad.addColorStop(0.5, "#222222");
          grad.addColorStop(1, "#A7A7A7");
          ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
          ctx.lineWidth = 1;
        }

        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.85 - r * 0.15;
        ctx.fill();
        ctx.stroke();
      }

      // Specular Chrome Core Reflection
      ctx.globalAlpha = 1;
      const coreX = centerX - baseRadius * 0.25 + Math.sin(time) * 10;
      const coreY = centerY - baseRadius * 0.25 + Math.cos(time) * 10;
      const specular = ctx.createRadialGradient(coreX, coreY, 2, coreX, coreY, 45);
      specular.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      specular.addColorStop(0.4, "rgba(217, 217, 217, 0.3)");
      specular.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = specular;
      ctx.beginPath();
      ctx.arc(coreX, coreY, 45, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[580px] max-h-[540px]"
        aria-hidden="true"
      />
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-chrome-radial opacity-60 pointer-events-none" />
    </div>
  );
}
