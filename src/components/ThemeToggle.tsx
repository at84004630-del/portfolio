"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | "system" | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme("system");
      applyTheme("system");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = localStorage.getItem("portfolio-theme");
      if (!current || current === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const applyTheme = (target: "dark" | "light" | "system") => {
    const root = document.documentElement;
    if (target === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else if (target === "light") {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    } else {
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isSystemDark) {
        root.classList.add("dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.style.colorScheme = "light";
      }
    }
  };

  const handleToggle = (next: "dark" | "light" | "system") => {
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm" />
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-xs">
      <button
        type="button"
        onClick={() => handleToggle("light")}
        aria-label="Light mode"
        title="Light mode"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 shadow-xs scale-105"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => handleToggle("dark")}
        aria-label="Dark mode"
        title="Dark mode"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-indigo-600 text-white shadow-xs scale-105"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => handleToggle("system")}
        aria-label="Follow system theme"
        title="Follow system theme"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 shadow-xs scale-105"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <Laptop className="w-4 h-4" />
      </button>
    </div>
  );
}
