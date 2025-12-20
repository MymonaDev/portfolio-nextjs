"use client";
import ProfilePic from "@/components/tab/about/ProfilePic";
import { motion } from "framer-motion";
import { DrawUnderlineText } from "./shared/DrawUnderlineText";
import AboutTab from "./tab/about/AboutTab";

const About = () => {
  return (
    <motion.div className="mt-5 scroll-mt-28" id="about">
      {/*keeping the backup  */}
      {/* <motion.h2
            id="about"
        className="mb-5 scroll-mt-28 text-center text-3xl font-bold text-gray-800 dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        About Me
      </motion.h2> */}
      <DrawUnderlineText text="About Me" />
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:items-start align-middle">
        <motion.div
          className="w-[90%] lg:w-1/4 min-h-[18.75rem] flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ProfilePic />
          {/* <Image
                           src={assets.mahbub}
                           alt="Kazi Mahbubur Rahman"
                           className="mx-auto shadow-md rounded-lg"
                         /> */}
        </motion.div>
        <div className="max-w-[50rem] w-full">
          <AboutTab />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
