"use client";

import { TabsContentProps } from "@/types/navbar";
import { motion } from "framer-motion";
import { useAboutTabs } from "./AboutTabsProvider";

export const AboutTabsBtn = ({ value, children }: TabsContentProps) => {
  const { activeAboutTab, setActiveAboutTab } = useAboutTabs();

  const isActive = activeAboutTab === value;

  return (
    <div
      onMouseEnter={() => {
        setActiveAboutTab(value);
        // setMenu(value);
      }} // Hover functionality
      className="relative inline-block"
    >
      {isActive && (
        <motion.div
          layoutId="activeAboutTab"
          className="absolute inset-0 rounded-md bg-[#0fabca]"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        />
      )}
      <button
        onClick={() => setActiveAboutTab(value)} // Click functionality
        className={`px-4 py-2 relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-white"
            : "text-black dark:text-white hover:text-[#0fabca]"
        }`}
      >
        {children}
      </button>
    </div>
  );
};
