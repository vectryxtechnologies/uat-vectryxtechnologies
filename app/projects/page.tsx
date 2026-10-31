import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Engineering Portfolio & Featured Case Studies",
  description:
    "Explore authentic software architectures and systems engineered by Vectryx Technologies, including CollabFlow, MyBazar, AI Resume Analyzer, and AI Personal Assistant.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-platinum" />
            <span className="font-mono text-xs uppercase tracking-widest text-silver-platinum font-medium">
              Verified Case Studies
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-chrome leading-tight mb-5">
            Architected for Resilience.
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
            A transparent showcase of our production systems, applied prototypes, and full-stack
            architectures. We only feature projects approved for public review.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group overflow-hidden border-border/80 p-0 sm:p-0 hover:border-silver-metallic/50 transition-all duration-300"
            >
              {/* Cover Graphic */}
              <div className="relative w-full h-64 bg-surface-charcoal overflow-hidden border-b border-border/60">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} Architecture Preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="silver">{project.projectType}</Badge>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-silver-muted">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-emerald-400/90 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl font-bold text-silver-chrome mb-1 group-hover:text-white transition-colors">
                    {project.title}
                  </h2>

                  <p className="font-mono text-xs text-silver-platinum mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-silver-muted leading-relaxed mb-6 font-sans">
                    {project.overview}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="subtle" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Link Strip */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-silver-chrome hover:text-white transition-colors"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-silver-muted hover:text-silver-chrome transition-colors p-1"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-silver-muted hover:text-silver-chrome transition-colors p-1"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
