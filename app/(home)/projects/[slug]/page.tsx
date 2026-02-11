import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/lib/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Novalis AI Showcase`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-20">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-5xl mx-auto px-6 pb-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>

            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="mb-2 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20"
              >
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full inline-block" />
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-secondary/20 p-6 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  The Challenge
                </h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </section>

              <section className="bg-secondary/20 p-6 rounded-2xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  The Solution
                </h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid gap-6">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50 group"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} Screenshot ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm sticky top-32">
              <h3 className="font-semibold text-lg mb-4">Project Details</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.results && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Results
                    </h4>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {project.results}
                    </p>
                  </div>
                )}

                <div className="pt-4 flex flex-col gap-3">
                  {project.demoUrl && (
                    <Button className="w-full" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
