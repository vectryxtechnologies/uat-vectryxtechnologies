import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data/projects";
import { SectionHeading } from "@/components/animations/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-surface-deep/50 border-t border-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Portfolio"
          title="Featured Projects & Systems"
          subtitle="A selection of production systems, applied prototypes, and open-source architectures engineered with modern frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group overflow-hidden border-border/80 p-0 sm:p-0"
            >
              {/* Project Image Header */}
              <div className="relative w-full h-56 sm:h-64 bg-surface-charcoal overflow-hidden border-b border-border/60">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} Preview Architecture`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="silver">{project.projectType}</Badge>
                </div>
              </div>

              {/* Project Content */}
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

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-silver-chrome mb-1.5 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs text-silver-platinum mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-silver-muted leading-relaxed mb-6 font-sans">
                    {project.overview}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="subtle" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-silver-chrome hover:text-white transition-colors"
                  >
                    <span>View Case Details</span>
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

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-silver-platinum hover:text-white border-b border-silver-metallic/40 pb-0.5 transition-colors"
          >
            <span>Explore All Portfolio Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
