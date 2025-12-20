"use client";
import { assets } from "@/assets/assets";
import { useDebouncedNavigation } from "@/hooks/useDebouncedNavigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useThemeStore } from "@/store/themeStore";
import type { CursorProps } from "@/types/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

const Cursor = ({ position }: { position: CursorProps }) => {
  return (
    <motion.li
      layout
      initial={false}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="absolute opacity-0  rounded-full -z-40 w-32 h-12 pointer-events-none"
    />
  );
};

export default function Navbar() {
  const { handleMouseEnter, handleMouseLeave } = useDebouncedNavigation(300);
  const [position, setPosition] = useState<CursorProps>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useThemeStore();

  const scrollPosition = useScrollPosition();
  const [hasScrolled, setHasScrolled] = useState(scrollPosition > 0);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    sections.forEach((section) => {
      const item = document.getElementById(section.id);
      if (item) {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      }
      setHasScrolled(scrollPosition > 0);
    });
  }, [scrollPosition]);

  const handleNavHover = (sectionId: string) => {
    if (navRef.current) {
      const navItem = navRef.current.querySelector(`a[href="#${sectionId}"]`);
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setPosition({
          left: rect.left - navRect.left,
          width: rect.width,
          opacity: 1,
        });
      }
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-11/12 -z-30 opacity-15 translate-y-[-62%] ${theme === "dark" ? "hidden" : ""}`}
      >
        <Image
          src={assets.header_bg_color || "/placeholder.svg"}
          alt="header_bg_color"
          className="w-full"
        />
      </div>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg backdrop-saturate-150 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`sm:px-6 lg:px-8 container m-auto max-w-[60.5rem] lg:max-w-full lg:mx-auto after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-[f3f4f6]-200 lg:after:hidden z-50`}
        >
          <div className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <div
              aria-label="main navigation"
              className="flex h-[3.5rem] lg:h-[4.5rem] items-center justify-between px-2 sm:px-3 gap-4 sm:gap-6 text-slate-700 dark:text-white"
              role="navigation"
            >
              <Link
                id="logo"
                aria-label="site logo"
                aria-current="page"
                className="font-Aclonica font-bold text-lg md:text-2xl flex items-center gap-2 whitespace-nowrap py-3 focus:outline-none lg:flex-1 dark:text-white"
                href="/"
              >
                Kazi Mahbubur Rahman
              </Link>

              <ul
                ref={navRef}
                role="menubar"
                aria-label="Select page"
                className="hidden lg:flex lg:h-[3.125rem] lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100"
                onMouseLeave={() =>
                  setPosition((pv) => ({ ...pv, opacity: 0 }))
                }
              >
                {sections.map((section) => (
                  <li
                    key={section.id}
                    role="none"
                    className="relative flex items-stretch"
                  >
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      onMouseEnter={() => {
                        handleMouseEnter(section.id);
                        handleNavHover(section.id);
                      }}
                      onMouseLeave={() => handleMouseLeave()}
                      className={`flex added transition-timing items-center gap-2 py-2.5 transition-colors 
                px-4 xl:px-6 2xl:px-8 dark:text-white hover:rounded-3xl dark:hover:text-white ${
                  section.id === activeSection
                    ? "rounded-full bg-[#0fabca] backdrop-blur-sm text-white"
                    : ""
                }`}
                      href={`#${section.id}`}
                    >
                      <span className="font-Roboto uppercase text-sm xl:text-base">
                        {section.title}
                      </span>
                    </Link>
                  </li>
                ))}

                <Cursor position={position} />
              </ul>

              <div
                onClick={toggleTheme}
                className="text-[1.5rem] dark:border-darkBorderColor dark:text-slate-400 text-gray-500 overflow-hidden h-[2.5rem] rounded-normal px-[0.5rem] p-1 cursor-pointer"
                // border border-border 
                ria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                <LuSun
                  className={` w-5 h-5 sm:w-6 sm:h-6 ${
                    theme === "dark"
                      ? "translate-y-[4px] rotate-0"
                      : "translate-y-[-80px] rotate-[160deg]"
                  } transition-all duration-700 ease-in-out`}
                />
                <RiMoonClearLine
                  className={`w-5 h-5 sm:w-5 sm:h-5 ${
                    theme === "light"
                      ? "translate-y-[-19px] rotate-0"
                      : "translate-y-[80px] rotate-[-260deg]"
                  } transition-all duration-700 ease-in-out`}
                />
              </div>

              {/* Mobile menu button - commented out
        <button
          className={`z-50 relative order-10 block h-10 w-10 self-center lg:hidden ${
            isToggleOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
              : ""
          }`}
          onClick={() => setIsToggleOpen(!isToggleOpen)}
          aria-expanded={isToggleOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full dark:bg-white bg-slate-900 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-6 transform rounded-full dark:bg-white bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full dark:bg-white bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button>





        */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
