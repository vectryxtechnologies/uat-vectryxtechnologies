import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { projectsData } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: `${project.title}: ${project.tagline}. ${project.overview}`,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-silver-muted hover:text-silver-chrome transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-10 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="silver">{project.projectType}</Badge>
            <span className="font-mono text-xs uppercase tracking-widest text-silver-muted">
              {project.category}
            </span>
            <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 ml-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight">
            {project.title}
          </h1>

          <p className="font-mono text-base text-silver-platinum font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Large Architecture Preview Graphic */}
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-xl overflow-hidden border border-border bg-surface-charcoal mb-12 shadow-chrome-subtle">
          <Image
            src={project.coverImage}
            alt={`${project.title} Full Architecture Schematic`}
            fill
            priority
            className="object-contain p-4 sm:p-6"
          />
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {project.metricsOrHighlights.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-lg bg-surface-graphite/60 border border-border/80 text-center"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-silver-muted block mb-1">
                {m.label}
              </span>
              <span className="font-mono text-lg font-bold text-silver-chrome">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <Card className="p-6 sm:p-8 space-y-3 border-border/80">
            <div className="flex items-center gap-2 text-silver-platinum pb-2 border-b border-border/60">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <h2 className="font-heading text-sm uppercase tracking-widest font-semibold text-silver-chrome">
                The Engineering Challenge
              </h2>
            </div>
            <p className="text-sm text-silver-muted leading-relaxed font-sans">
              {project.challenge}
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-3 border-border/80">
            <div className="flex items-center gap-2 text-silver-platinum pb-2 border-b border-border/60">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <h2 className="font-heading text-sm uppercase tracking-widest font-semibold text-silver-chrome">
                The Engineered Solution
              </h2>
            </div>
            <p className="text-sm text-silver-muted leading-relaxed font-sans">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* Key Features List */}
        <div className="mb-14">
          <h2 className="font-heading text-xs uppercase tracking-widest text-silver-muted font-semibold mb-4">
            System Features &amp; Implementation Details
          </h2>
          <div className="rounded-xl border border-border bg-surface-graphite/40 p-6 sm:p-8">
            <ul className="space-y-3">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-silver-platinum">
                  <CheckCircle2 className="w-4 h-4 text-silver-muted shrink-0 mt-0.5" />
                  <span className="font-sans leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack & Architecture Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="font-heading text-xs uppercase tracking-widest font-semibold text-silver-chrome">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="silver" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {project.architectureNotes && (
            <Card className="p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-xs uppercase tracking-widest font-semibold text-silver-chrome">
                Architectural Notes
              </h3>
              <ul className="space-y-2 text-xs text-silver-muted font-mono">
                {project.architectureNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="text-silver-platinum">&gt;</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        {/* Call to action */}
        <div className="rounded-xl border border-silver-metallic/40 bg-surface-charcoal/80 p-8 sm:p-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-silver-chrome mb-2">
            Interested in building a platform like {project.title}?
          </h2>
          <p className="text-xs sm:text-sm text-silver-muted max-w-lg mx-auto mb-6 font-sans">
            Schedule a technical consultation to explore architecture options, timeline requirements, and project costs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`/start-project?category=${encodeURIComponent(project.category)}`}
              variant="chrome"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Similar Project
            </Button>
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="secondary"
                size="md"
                icon={<Github className="w-4 h-4" />}
              >
                Inspect on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
