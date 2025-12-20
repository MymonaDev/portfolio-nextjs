"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SkillsTabsBtn } from "./SkillsTabsBtn";
import { SkillsTabsContent } from "./SkillsTabsContent";

import { SkillsTabsProvider } from "./SkillsTabsProvider";

import Tools from "./Tools";
function SkillsTab() {
  // const [menu, setMenu] = useState("All");

  const SkillsTabNav = [{ name: "Skills" }, { name: "Tools" }];

  const technologies = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Prisma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  const cloudServices = [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "GCP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  const coreSkills = [
    {
      name: "OOP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Using Java icon as placeholder
    },
    {
      name: "DSA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Using Python icon as placeholder
    },
    {
      name: "Problem Solving",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // Using JS icon as placeholder
    },
  ];

  return (
    <div className="py-5 mt-8 backdrop-blur-sm rounded-md p-6 relative max-w-5xl mx-auto">
      <SkillsTabsProvider defaultValue="Skills">
        <div className="flex justify-center mt-2">
          <div className="lg:flex items-center w-fit dark:bg-[#1D2736] bg-gray-200 p-1.5 dark:text-white text-black rounded-md border dark:border-gray-700">
            {SkillsTabNav?.map(({ name }) => (
              <SkillsTabsBtn
                key={name}
                value={name}
                // setMenu={setMenu}
              >
                <span className="relative z-[2] uppercase px-6 py-2 rounded-md transition-colors duration-300">
                  {name}
                </span>
              </SkillsTabsBtn>
            ))}
          </div>
        </div>
        <SkillsTabsContent value="Skills">
          <motion.section
            key="skills-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-10 text-center">
              <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Technologies & Skills
              </motion.h2>
              <div className="py-5 bg-white/10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 px-6 mb-8">
                {technologies.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={skill.icon}
                        height={100}
                        width={100}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <motion.span
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 relative z-10"
                      whileHover={{ color: "#0fabca" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Cloud Services Section */}
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Cloud Services & DevOps
              </motion.h3>
              <div className="py-5 bg-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 mb-8">
                {cloudServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={service.icon}
                        height={100}
                        width={100}
                        alt={service.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <motion.span
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 relative z-10"
                      whileHover={{ color: "#0fabca" }}
                    >
                      {service.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Core Skills Section */}
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Core Skills
              </motion.h3>
              <div className="py-5 bg-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={skill.icon}
                        height={100}
                        width={100}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <motion.span
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 relative z-10"
                      whileHover={{ color: "#0fabca" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </SkillsTabsContent>

        <SkillsTabsContent value="Tools">
          <motion.section
            key="tools-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Tools />
          </motion.section>
        </SkillsTabsContent>
      </SkillsTabsProvider>
    </div>
  );
}

export default SkillsTab;
