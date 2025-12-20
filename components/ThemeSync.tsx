"use client";

import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

const ThemeSync = () => {
  const { theme, initializeTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme on mount
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    // Sync theme with document class
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
};

export default ThemeSync;
