"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarItem {
  image: string;
  fallback: string;
}

interface EarlyAccessProps {
  avatarList: AvatarItem[];
  heading?: string;
  subheading?: string;
  joinCount?: string;
  placeholder?: string;
  ctaLabel?: string;
}

export default function EarlyAccess({
  avatarList,
  heading = "Get Early Access",
  subheading = "Be among the first to experience our platform. Join thousands of innovators already on the waitlist.",
  joinCount = "2,400+",
  placeholder = "Enter your email address",
  ctaLabel = "Join Waitlist",
}: EarlyAccessProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#080F25]/90 p-8 md:p-10 shadow-2xl backdrop-blur-md">
      {/* Animated gradient blob — top left */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #00C8F4 0%, #0875F9 100%)",
          animation: "gradient-blob-1 8s ease-in-out infinite",
        }}
      />
      {/* Animated gradient blob — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7025F5 0%, #A020F0 100%)",
          animation: "gradient-blob-2 10s ease-in-out infinite",
        }}
      />
      {/* Animated gradient blob — center */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #303BFA 0%, #0875F9 100%)",
          animation: "gradient-blob-3 12s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 space-y-7">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-cyan">
          <Sparkles className="h-3 w-3" />
          Early Access
        </span>

        {/* Heading */}
        <div className="space-y-2.5">
          <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #00C8F4, #0875F9, #303BFA, #7025F5, #A020F0)",
              }}
            >
              {heading.split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-white/55 max-w-sm">{subheading}</p>
        </div>

        {/* Social proof avatar stack */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {avatarList.map((avatar, i) => (
              <Avatar
                key={i}
                className="h-8 w-8 border-2 border-[#080F25] ring-0"
              >
                <AvatarImage src={avatar.image} alt={avatar.fallback} />
                <AvatarFallback className="text-[10px]">
                  {avatar.fallback}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-white/55">
            <span className="font-semibold text-white">{joinCount}</span>{" "}
            already joined
          </p>
        </div>

        {/* Form / Success state */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-brand-cyan/50 focus:bg-white/8 focus:ring-1 focus:ring-brand-cyan/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #00C8F4, #0875F9, #303BFA)",
              }}
            >
              {loading ? (
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <>
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3 rounded-xl border border-brand-cyan/20 bg-brand-cyan/8 p-4">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-cyan" />
            <p className="text-sm text-white">
              You&apos;re on the list!{" "}
              <span className="text-white/55">We&apos;ll be in touch soon.</span>
            </p>
          </div>
        )}

        <p className="text-[11px] text-white/25">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
