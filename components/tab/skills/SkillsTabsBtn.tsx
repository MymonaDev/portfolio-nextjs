"use client";

import { TabsContentProps } from "@/types/navbar";
import { motion } from "framer-motion";
import { useSkillsTabs } from "./SkillsTabsProvider";

export const SkillsTabsBtn = ({ value, children }: TabsContentProps) => {
  const { activeSkillsTab, setActiveSkillsTab } = useSkillsTabs();

  const isActive = activeSkillsTab === value;

  return (
    <div
      onMouseEnter={() => {
        setActiveSkillsTab(value);
        // setMenu(value);
      }} // Hover functionality
      className="relative inline-block"
    >
      {isActive && (
        <motion.div
          layoutId="activeSkillsTab"
          className="absolute inset-0 rounded-md bg-[#0fabca]"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        />
      )}
      <button
        onClick={() => setActiveSkillsTab(value)} // Click functionality
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
