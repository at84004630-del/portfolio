"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"education" | "honors">("education");

  return (
    <section id="timeline" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <span>BACKGROUND &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Honors &amp; Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A chronological timeline of academic qualifications, national hackathon recognition, and continuous professional certifications.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === "education"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Timeline</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("honors")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === "honors"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Honors &amp; Certifications</span>
          </button>
        </div>

        {/* Timeline Content */}
        {activeTab === "education" ? (
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
            {PORTFOLIO_DATA.education.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 group-hover:scale-125 transition-transform duration-200 shadow-xs" />

                {/* Left side year indicator (on desktop) */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.period}
                  </span>
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-500/30 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                      {item.statusOrGpa}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {item.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                    <span className="sm:hidden">•</span>
                    <span className="sm:hidden flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  {item.details && item.details.length > 0 && (
                    <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.coursework && item.coursework.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8">
            {PORTFOLIO_DATA.honorsAndCertifications.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 group-hover:scale-125 transition-transform duration-200 shadow-xs" />

                {/* Left side date indicator */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.dateOrBatch}
                  </span>
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-500/30 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                    <span>{item.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{item.event}</span>
                    <span className="sm:hidden mx-2">•</span>
                    <span className="sm:hidden text-indigo-600 dark:text-indigo-400 font-mono">
                      {item.dateOrBatch}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.certId && (
                    <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                      <span className="text-slate-400">Certificate ID:</span>
                      <strong className="text-indigo-600 dark:text-indigo-400">{item.certId}</strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
