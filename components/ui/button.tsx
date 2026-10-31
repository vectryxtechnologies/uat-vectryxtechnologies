"use client";

import React, { forwardRef, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "chrome" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  enableMagnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "chrome",
      size = "md",
      href,
      target,
      rel,
      icon,
      iconPosition = "right",
      isLoading = false,
      enableMagnetic = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
    const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (!enableMagnetic || !btnRef.current) return;
        // Check for coarse pointer (touch device)
        if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
          return;
        }

        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.22;
        const deltaY = (e.clientY - centerY) * 0.22;

        setOffset({ x: deltaX, y: deltaY });
      },
      [enableMagnetic]
    );

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setOffset({ x: 0, y: 0 });
    };

    const sizeClasses = {
      sm: "h-9 px-3.5 text-xs tracking-wide",
      md: "h-11 px-5 text-sm tracking-wide",
      lg: "h-13 px-7 text-base font-medium tracking-wide min-h-[48px]",
    }[size];

    const variantClasses = {
      chrome:
        "bg-gradient-to-r from-silver-chrome via-silver-platinum to-silver-metallic text-background font-semibold hover:shadow-chrome-glow hover:brightness-105 active:scale-[0.98] border border-white/30",
      secondary:
        "bg-surface-charcoal/90 text-silver-chrome border border-white/10 hover:border-silver-metallic/60 hover:bg-surface-graphite hover:text-white active:scale-[0.98] shadow-sm backdrop-blur-md",
      outline:
        "bg-transparent text-silver-platinum border border-border hover:border-silver-metallic hover:bg-white/5 active:scale-[0.98]",
      ghost:
        "bg-transparent text-silver-muted hover:text-silver-chrome hover:bg-white/5 active:scale-[0.98]",
    }[variant];

    const baseClasses = cn(
      "relative inline-flex items-center justify-center font-heading rounded-md cursor-pointer select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      sizeClasses,
      variantClasses,
      className
    );

    const magneticStyle: React.CSSProperties = {
      transform: isHovered && enableMagnetic ? `translate3d(${offset.x}px, ${offset.y}px, 0)` : "translate3d(0, 0, 0)",
      transition: isHovered ? "transform 0.12s ease-out" : "transform 0.4s ease-out",
    };

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="mr-2 inline-flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="ml-2 inline-flex items-center">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
          ref={(node) => {
            btnRef.current = node;
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={magneticStyle}
          className={baseClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={(node) => {
          btnRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={magneticStyle}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
