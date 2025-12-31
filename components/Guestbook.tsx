"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useThemeStore } from "@/store/themeStore";
import { DrawUnderlineText } from "./shared/DrawUnderlineText";

const GISCUS_CONFIG = {
  repo: "MymonaDev/guestbook" as const,
  repoId: "R_kgDOQxp2Ig",
  category: "General",
  categoryId: "DIC_kwDOQxp2Is4C0bU4",
  mapping: "pathname" as const,
  strict: "0" as const,
  reactionsEnabled: "1" as const,
  emitMetadata: "0" as const,
  inputPosition: "bottom" as const,
  lang: "en" as const,
};

const Guestbook = () => {
  const { theme } = useThemeStore();
  const giscusRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!giscusRef.current) return;

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://giscus.app/client.js"]'
    );
    if (existingScript || scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      return;
    }

    // Load Giscus script
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", GISCUS_CONFIG.mapping);
    script.setAttribute("data-strict", GISCUS_CONFIG.strict);
    script.setAttribute("data-reactions-enabled", GISCUS_CONFIG.reactionsEnabled);
    script.setAttribute("data-emit-metadata", GISCUS_CONFIG.emitMetadata);
    script.setAttribute("data-input-position", GISCUS_CONFIG.inputPosition);
    script.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    script.setAttribute("data-lang", GISCUS_CONFIG.lang);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    giscusRef.current.appendChild(script);
    scriptLoadedRef.current = true;
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (!scriptLoadedRef.current) return;

    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe[title="Comments"]'
    );
    if (iframe) {
      // Send message to update theme
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: theme === "dark" ? "dark" : "light",
            },
          },
        },
        "https://giscus.app"
      );
    }
  }, [theme]);

  return (
    <section id="guestbook" className="scroll-mt-28 mb-28 sm:mb-40 py-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="text-3xl font-medium capitalize mb-8 text-center"
      >
        <DrawUnderlineText text="Guestbook" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
          Powered by GitHub Discussions API. No data is stored on this site.
        </p>
        <div
          ref={giscusRef}
          className="giscus-container min-h-[400px] rounded-lg overflow-hidden"
        />
      </motion.div>
    </section>
  );
};

export default Guestbook;

