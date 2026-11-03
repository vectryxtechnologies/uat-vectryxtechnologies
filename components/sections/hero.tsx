"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronRight, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EarlyAccess01 from "@/components/ui/waitlist-01";

const rolesList = [
  "Custom Software Development",
  "AI-Powered Solutions",
  "Web & Mobile Applications",
  "Technical Project Development",
  "Digital Transformation",
];

function AnimatedLetterBlur({
  text,
  className,
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const characters = Array.from(text);

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.35,
            delay: delayOffset + index * 0.03,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(rolesList[currentRoleIndex]);
      return;
    }

    const currentRole = rolesList[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, shouldReduceMotion]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background radial glow — brand blue */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-radial opacity-60 rounded-full blur-3xl" />

      {/* Subtle brand orbs */}
      <div className="pointer-events-none absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-brand-royal/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">

            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase">
                Engineering Digital Excellence
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              <AnimatedLetterBlur
                text="Engineering Digital"
                delayOffset={0.1}
              />{" "}
              <br className="hidden sm:inline" />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #00C8F4, #0875F9, #303BFA, #7025F5, #A020F0)",
                }}
              >
                <AnimatedLetterBlur text="Excellence." delayOffset={0.75} />
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-xs sm:text-sm text-silver-muted uppercase tracking-wider shrink-0">
                Specializing In:
              </span>
              <div className="ml-2.5 inline-flex items-center min-h-[1.75rem]">
                <span className="font-mono text-sm sm:text-base font-semibold text-silver-chrome">
                  {displayedText}
                </span>
                <span
                  className="inline-block w-[2px] h-4 sm:h-5 ml-1 bg-brand-cyan animate-pulse"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-silver-muted font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We transform ideas into powerful digital products through innovative
              software development, modern technologies, and reliable project delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/start-project"
                size="lg"
                variant="brand"
                className="w-full sm:w-auto"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start Your Project
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Explore Our Services
              </Button>
            </div>

            {/* Micro stats */}
            <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-silver-muted">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Next.js App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #00C8F4, #0875F9)" }}
                />
                <span>Type-Safe Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #303BFA, #A020F0)" }}
                />
                <span>Zero Layout Shift</span>
              </div>
            </div>
          </div>

          {/* Right Column: Waitlist / Early Access widget */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <EarlyAccess01 />
          </div>

        </div>
      </div>
    </section>
  );
}
