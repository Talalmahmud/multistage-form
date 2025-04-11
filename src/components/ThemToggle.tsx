"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedPreference = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialMode = savedPreference
      ? savedPreference === "dark"
      : systemPrefersDark;

    setIsDarkMode(initialMode);
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // While detecting theme, render empty button to prevent layout shift
  if (isDarkMode === null) {
    return <button className="w-10 h-10" aria-hidden="true"></button>;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
    </button>
  );
}
