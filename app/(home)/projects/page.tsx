"use client";

import { useState } from "react";
import { CategoryFilter } from "@/components/projects/CategoryFilter";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  projects,
  ProjectCategory,
  getProjectsByCategory,
} from "@/lib/projects";

const categories: ProjectCategory[] = [
  "All",
  "Web",
  "AI",
  "Mobile",
  "SaaS",
  "Design",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-secondary/30 to-background z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Our <span className="text-primary">Projects</span> Showcase
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of digital experiences, where design meets
            technology to solve real-world problems.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              layoutId={`project-${project.id}`}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
