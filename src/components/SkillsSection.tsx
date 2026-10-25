"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Code2,
  Server,
  Brain,
  Database,
  Wrench,
  Binary,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-4 h-4 text-indigo-500" />,
    "Web & Backend Architecture": <Server className="w-4 h-4 text-cyan-500" />,
    "AI & Multi-Agent Systems": <Brain className="w-4 h-4 text-purple-500" />,
    "Databases & Systems": <Database className="w-4 h-4 text-emerald-500" />,
    "Developer Tools": <Wrench className="w-4 h-4 text-amber-500" />,
    "Core CS & Algorithms (Ongoing Learning)": <Binary className="w-4 h-4 text-blue-500" />,
  };

  const categories = ["All", ...PORTFOLIO_DATA.skills.categories.map((c) => c.name)];

  const displayedCategories =
    activeCategory === "All"
      ? PORTFOLIO_DATA.skills.categories
      : PORTFOLIO_DATA.skills.categories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of languages, frameworks, AI runtimes, and engineering practices extracted directly from verified project deliverables.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
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

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-200"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {categoryIcons[category.name] || <Code2 className="w-4 h-4 text-indigo-500" />}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list inside category */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200/50 dark:border-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Notice for DSA Practice */}
              {category.name.includes("Algorithms") && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Actively solving problems daily in Java &amp; Python</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
