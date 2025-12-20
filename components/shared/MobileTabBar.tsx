"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Code, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Projects", href: "/#projects", icon: Briefcase },
  { name: "Skills", href: "/#skills", icon: Code },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export default function MobileTabBar() {
  const [activeSection, setActiveSection] = React.useState("/");

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("/#", ""));
      const currentSection = sections.find((section) => {
        if (section === "/" || section === "Home") {
          return window.scrollY < 100;
        }
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight / 3;
          return rect.top <= threshold && rect.bottom >= threshold;
        }
        return false;
      });

      const sectionName = navItems.find(
        (item) => item.href.replace("/#", "") === currentSection,
      )?.name;
      if (sectionName) {
        setActiveSection(sectionName);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fabca]/10 to-[#0fabca]/10 dark:from-[#0fabca]/5 dark:to-[#0fabca]/5 blur-xl" />

        {/* Tab bar */}
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex justify-between items-center h-16 px-4 overflow-x-visible">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center justify-center w-16 h-full relative"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-200 ${
                          isActive
                            ? "text-[#0fabca] dark:text-[#0fabca]"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      />
                    </motion.div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0fabca] dark:bg-[#0fabca] rounded-full origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.span
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xs mt-1 transition-colors duration-200 ${
                      isActive
                        ? "text-[#0fabca] dark:text-[#0fabca]"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
