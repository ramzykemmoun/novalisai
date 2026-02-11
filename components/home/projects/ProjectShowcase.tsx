"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { bestProjects, getAllProjects } from "@/lib/projects";

const projects = bestProjects();

const ProjectShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projects[activeProject];
  const currentImage = project.gallery[activeImageIndex];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <section className="py-20 bg-background overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center justify-center h-8 px-4 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Our Work
              </div>
              <h2 className="heading-2 font-bold text-foreground">
                {projects[activeProject].title}
              </h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-border mx-8 mb-4 opacity-50" />
            <div className="flex gap-2 mb-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setActiveProject(
                    (prev) => (prev - 1 + projects.length) % projects.length,
                  )
                }
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setActiveProject((prev) => (prev + 1) % projects.length)
                }
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-1/3 flex-none space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {projects.map((proj, index) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setActiveProject(index);
                    setActiveImageIndex(0);
                  }}
                  className={`group relative text-left p-6 rounded-xl transition-all duration-300 border ${
                    activeProject === index
                      ? "bg-card border-primary/20 scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-secondary/50 hover:border-border"
                  }`}
                >
                  {/* Active Indicator Line */}
                  {activeProject === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-6 bottom-6 w-1 bg-primary rounded-r-full"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span
                        className={`text-xs font-bold tracking-wider ${
                          activeProject === index
                            ? "text-primary"
                            : "text-muted-foreground/60 group-hover:text-muted-foreground"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          activeProject === index
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {proj.title}
                      </h3>
                      <p
                        className={`text-sm line-clamp-2 transition-colors duration-300 ${
                          activeProject === index
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60"
                        }`}
                      >
                        {proj.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border hidden lg:block">
              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group flex items-center gap-2"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary border border-border/50 group">
                  <Image
                    src={currentImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      size="icon"
                      variant="secondary"
                      className="rounded-full pointer-events-auto h-10 w-10 bg-background/80 hover:bg-background backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      size="icon"
                      variant="secondary"
                      className="rounded-full pointer-events-auto h-10 w-10 bg-background/80 hover:bg-background backdrop-blur-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                    {activeImageIndex + 1} / {project.gallery.length}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="heading-4 font-bold">
                      {project.description}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6 justify-end items-start md:items-end">
                    {/* Thumbnails */}
                    <div className="flex gap-3">
                      {project.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            activeImageIndex === idx
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt="thumbnail"
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
