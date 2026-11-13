"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Pause, Play, Check } from "lucide-react";
import { CLIENT_PROJECTS } from "@/components/client-work-grid";

const AUTO_PLAY_INTERVAL = 4000;

const card = "rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-subtle";

export default function ClientWorkPage({ params }) {
  const project = CLIENT_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const router = useRouter();
  const images = project.images;
  const hasMultiple = images.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(hasMultiple);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => setActiveIndex(i), []);
  const goNext = useCallback(() => setActiveIndex((prev) => (prev + 1) % images.length), [images.length]);
  const goPrev = useCallback(() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  // Auto-play
  useEffect(() => {
    if (isPlaying && hasMultiple) {
      timerRef.current = setInterval(goNext, AUTO_PLAY_INTERVAL);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, hasMultiple, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === " " && hasMultiple) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, hasMultiple]);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </button>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">{project.tag}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            {project.title}
          </h1>
          {project.summary && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>
          )}
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="border-b border-border py-10">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          {/* Main image with navigation */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8]">
              <img
                key={activeIndex}
                src={images[activeIndex]}
                alt={`${project.title} — Image ${activeIndex + 1}`}
                className="h-full w-full object-cover animate-fadeIn"
              />

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-black/70 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-black sm:h-12 sm:w-12"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-black/70 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-black sm:h-12 sm:w-12"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {hasMultiple && (
              <div className="flex items-center justify-between border-t border-border bg-white px-4 py-3 sm:px-6">
                <span className="font-mono text-xs tracking-wider text-muted">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-border-strong hover:bg-muted"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {hasMultiple && (
            <div className="mt-6">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      i === activeIndex
                        ? "border-accent shadow-md ring-1 ring-accent/30"
                        : "border-border opacity-60 hover:opacity-100 hover:border-border-strong"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} thumbnail ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Project Details: Challenge, Solution, Results, Tech Stack ── */}
      <section className="border-b border-border py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid gap-4 md:grid-cols-2">
            {/* The Challenge */}
            <div className={card}>
              <h2 className="mb-2 font-semibold tracking-[-0.03em]">The challenge</h2>
              <p className="text-muted">{project.challenge}</p>
            </div>

            {/* Our Solution */}
            <div className={card}>
              <h2 className="mb-2 font-semibold tracking-[-0.03em]">Our solution</h2>
              <p className="text-muted">{project.solution}</p>
            </div>

            {/* Results */}
            <div className={card}>
              <h2 className="mb-3 font-semibold tracking-[-0.03em]">Results</h2>
              <ul className="space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-2 text-muted">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className={card}>
              <h2 className="mb-3 font-semibold tracking-[-0.03em]">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-subtle px-3 py-1.5 font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="rounded-xl border border-border bg-subtle p-10 text-center sm:p-12">
            <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Interested in a similar project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
              Let&rsquo;s discuss how we can build something great for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://calendly.com/team-vectryxtechnologies/30min"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                Book a Meeting
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
