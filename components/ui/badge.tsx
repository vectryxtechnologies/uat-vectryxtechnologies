import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "silver" | "subtle" | "outline" | "status";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "silver",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  }[size];

  const variantClasses = {
    silver:
      "bg-surface-charcoal/80 text-silver-platinum border border-silver-metallic/30 font-mono tracking-wider",
    subtle:
      "bg-white/5 text-silver-muted border border-border/80 font-mono",
    outline:
      "bg-transparent text-silver-metallic border border-border font-mono",
    status:
      "bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 font-mono",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors select-none",
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
