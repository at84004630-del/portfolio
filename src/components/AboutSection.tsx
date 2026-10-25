"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Server,
  Bot,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Languages,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  const pillarIcons = [
    <Server key="backend" className="w-5 h-5 text-indigo-500" />,
    <Bot key="agents" className="w-5 h-5 text-cyan-500" />,
    <Cpu key="edge" className="w-5 h-5 text-purple-500" />,
    <ShieldCheck key="privacy" className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building Resilient Backends &amp; Deterministic AI Workflows
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A software engineer grounded in core computer science, systems concurrency, and practical AI implementations with uncompromising data integrity.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Confident Summary Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Engineering Philosophy &amp; Experience</span>
              </h3>

              {PORTFOLIO_DATA.about.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  MCA Scholar @ Amity Online
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  BCA Graduate (GPA 7.50 / 10.0)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  National Hackathon Shortlisted
                </span>
              </div>
            </div>

            {/* Spoken Languages & Communication */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Languages Spoken
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Clear technical communication &amp; collaboration
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.about.spokenLanguages.map((lang) => (
                  <span
                    key={lang.language}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    <span className="font-semibold">{lang.language}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      ({lang.level})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Technical Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-500/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
