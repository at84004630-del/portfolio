"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Check,
  Copy,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background subtle glowing radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-500/5 blur-2xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-xs transition-all hover:border-emerald-500/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_DATA.personal.availability}</span>
          </div>

          {/* Candidate Name & Role */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </h1>

          {/* Sub-headline / Primary Role */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-5">
            <span>{PORTFOLIO_DATA.personal.role}</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Multi-Agent AI & Backend Systems
            </span>
          </div>

          {/* Strong One-Line Intro */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
            MCA scholar specializing in robust backend architectures, deterministic multi-agent orchestration, and on-device machine learning with full data privacy compliance. Shortlisted at SBI Hackathon @ GFF &apos;26 and IBM Bob 2.0.
          </p>

          {/* Location & Quick Contact Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              {PORTFOLIO_DATA.personal.location}
            </span>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 transition-colors"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Step 3 required CTA Buttons: "View Projects", "Download Resume" and "Contact Me" */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-md hover:shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumePdf}
              download="Abhinav_Tripathi_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white transition-all text-xs font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/{PORTFOLIO_DATA.personal.githubHandle}</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-medium"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>linkedin.com/in/{PORTFOLIO_DATA.personal.linkedinHandle}</span>
            </a>
          </div>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-200/70 dark:border-slate-800/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PORTFOLIO_DATA.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs text-center transition-all hover:border-indigo-500/30 hover:shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
