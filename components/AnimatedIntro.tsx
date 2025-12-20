"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Array of developer titles (without the article "a")
const titles = [
  "Mymona Khatun",
  "Front-End Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Next.js Developer",
];

export default function AnimatedIntro() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Find the longest title to set the minimum width
  // Adding extra space multiplier to account for Aclonica font
  const longestTitle =
    titles.reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      "",
    ) + "   "; // Adding extra space for the Aclonica font

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const currentTitle = titles[titleIndex];

    // Handle waiting state after completing a word
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1500); // Wait time after completing a word
      return () => clearTimeout(waitTimer);
    }

    // Handle typing and deleting
    if (!isWaiting) {
      const typingTimer = setTimeout(() => {
        // Typing
        if (!isDeleting && charIndex < currentTitle.length) {
          setDisplayedTitle(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          // If we've completed typing the current title
          if (charIndex + 1 === currentTitle.length) {
            setIsWaiting(true);
          }
        }
        // Deleting
        else if (isDeleting && charIndex > 0) {
          setDisplayedTitle(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }
        // Move to next title
        else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    }
  }, [charIndex, isDeleting, isWaiting, titleIndex]);

  // Determine whether to show "a" before the title
  // Don't show "a" before a name (first title)
  const showArticle = titleIndex !== 0;

  return (
    <motion.h3
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="px-2 sm:p-0 md:text-2xl text-slate-900 dark:text-white font-bold text-center"
      style={{
        fontFamily: "Aclonica, sans-serif",
        // fontSize: "26px",
        lineHeight: "34px",
        // color: "rgb(15, 23, 42)",
      }}
    >
      Hi, I&apos;m{showArticle ? " a " : " "}
      <span
        className="relative inline-block"
        style={{ minWidth: `calc(${longestTitle.length}ch * 1)` }}
      >
        <span
          className="invisible whitespace-nowrap"
          aria-hidden="true"
          style={{ fontFamily: "Aclonica, sans-serif" }}
        >
          {longestTitle}
        </span>
        <span className="font-Aclonica absolute left-0 top-0 whitespace-nowrap text-center">
          {displayedTitle}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
            className="inline-block w-0.5 bg-slate-900 ml-1 align-middle"
            style={{ height: "26px" }}
          />
        </span>
      </span>
    </motion.h3>
  );
}
