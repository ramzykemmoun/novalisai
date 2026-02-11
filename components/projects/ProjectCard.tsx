"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  layoutId?: string;
}

export function ProjectCard({ project, layoutId }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className="group relative flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-20 focus:outline-none"
      >
        <span className="sr-only">View {project.title}</span>
      </Link>

      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <div className="p-2 bg-background/90 backdrop-blur-sm rounded-full shadow-sm text-foreground">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge
            variant="secondary"
            className="font-medium bg-secondary/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
          >
            {project.category}
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground/70 bg-secondary/30 px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-muted-foreground/70 px-2 py-1">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
