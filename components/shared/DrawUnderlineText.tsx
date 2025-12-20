"use client";

import { motion } from "framer-motion";

export const DrawUnderlineText = ({ text }: { text: string }) => {
  return (
    <motion.div className="w-max mx-auto flex flex-col items-center">
      <motion.h1
        className="text-3xl font-[600] text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {text}
      </motion.h1>
      <div className="flex flex-col items-end w-full">
        {/* First line - shorter and thinner */}
        <div className="w-[50%] h-[0.125rem] overflow-hidden">
          <motion.div
            className="w-full h-full bg-[#0fabca]" // Scrollbar thumb color
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Second line - longer and thicker */}
        <div className="w-[70%] h-[0.1875rem] mt-1 overflow-hidden">
          <motion.div
            className="w-full h-full bg-[#0fabca]" // Scrollbar thumb color
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};
