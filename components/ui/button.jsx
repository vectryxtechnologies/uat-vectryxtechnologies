"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({ href, variant = "primary", size = "default", className, children, onPointerMove, onPointerLeave, onBlur, ...props }) {
  const external = href?.startsWith("http");
  const linkRef = useRef(null);
  const frameRef = useRef(0);
  const motionRef = useRef(false);

  function resetMotion() {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    const link = linkRef.current;
    if (!link) return;
    link.style.removeProperty("--button-move-x");
    link.style.removeProperty("--button-move-y");
    link.style.removeProperty("--button-light-x");
    link.style.removeProperty("--button-light-y");
  }

  useEffect(() => {
    const motion = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => {
      motionRef.current = motion.matches;
      if (!motion.matches) resetMotion();
    };
    update();
    motion.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function handlePointerMove(event) {
    onPointerMove?.(event);
    if (!motionRef.current || event.pointerType === "touch" || event.defaultPrevented) return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const link = linkRef.current;
      if (!link) return;
      const rect = link.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      link.style.setProperty("--button-light-x", `${x * 100}%`);
      link.style.setProperty("--button-light-y", `${y * 100}%`);
      link.style.setProperty("--button-move-x", `${(x - .5) * 8}px`);
      link.style.setProperty("--button-move-y", `${(y - .5) * 6}px`);
    });
  }

  return (
    <Link ref={linkRef} href={href} className={cn("vx-button", `vx-button--${variant}`, `vx-button--${size}`, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })} {...props}
      onPointerMove={handlePointerMove}
      onPointerLeave={event => { resetMotion(); onPointerLeave?.(event); }}
      onBlur={event => { resetMotion(); onBlur?.(event); }}>
      <span className="vx-button-label">{children}</span>
      <span className="vx-button-arrow" aria-hidden="true"><ArrowUpRight size={16} strokeWidth={2} /></span>
    </Link>
  );
}
