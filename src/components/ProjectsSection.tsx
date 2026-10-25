"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { ProjectModal } from "./ProjectModal";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Multi-Agent AI",
    "Edge AI",
    "Backend Systems",
    "Web3 / Security",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Impact Engineering Deliverables
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Real platforms engineered with strict compliance, deterministic multi-agent state machines, and hardware NPU acceleration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-xs scale-102"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div
                  className="relative w-full h-52 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white border border-white/10 shadow-sm">
                      {project.category}
                    </span>

                    {project.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect prompt overlay */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold backdrop-blur-md shadow-xs">
                      <span>Inspect Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div>
                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem - Solution - Result 2-3 Line Summary */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                        Problem &amp; Context:
                      </span>
                      <p className="line-clamp-2">{project.summary.problem}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/60 dark:border-indigo-900/30">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300 block mb-0.5">
                        Engineered Result:
                      </span>
                      <p className="line-clamp-2">{project.summary.result}</p>
                    </div>
                  </div>

                  {/* Key Stats Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m) => (
                      <span
                        key={m.label}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/80 dark:border-slate-700/80"
                      >
                        <strong className="text-indigo-600 dark:text-indigo-400">{m.value}</strong>{" "}
                        <span className="text-slate-500 dark:text-slate-400">({m.label})</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo + GitHub Repo */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 underline underline-offset-2 transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
