"use client";
import { projectsData, projectsNav } from "@/assets/projects";
import RequestAccess from "@/components/RequestAccess";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TabsBtn } from "./TabsBtn";
import { TabsContent } from "./TabsContent";
import { TabsProvider } from "./TabsProvider";

// Helper function to bold specific terms in text
const boldTerms = (text: string): React.ReactNode => {
  // Terms to bold - sorted by length (longest first) to avoid partial matches
  const termsToBold = [
    "LLM (DeepSeek AI)",
    "Google Tag Manager",
    "Google Analytics",
    "Next.js/TypeScript",
    "Node.js/Express",
    "Tailwind CSS",
    "Cloudflare R2",
    "Meta Pixel",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth",
    "Next.js",
    "Playwright",
    "Bootstrap",
    "Supabase",
    "Google Cloud",
    "Prisma",
    "Swiper",
    "React",
    "Jest",
    "AWS S3",
  ].sort((a, b) => b.length - a.length);

  // Create a regex pattern that matches any of the terms
  const escapedTerms = termsToBold.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  let keyCounter = 0;

  // Reset regex lastIndex
  pattern.lastIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add bold term
    parts.push(<strong key={`bold-${keyCounter++}`}>{match[0]}</strong>);

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

function Tab() {
  const INITIAL_COUNT = 3;
  const [visibleCounts, setVisibleCounts] = useState(
    Object.fromEntries(projectsNav.map(({ name }) => [name, INITIAL_COUNT])),
  );

  const showMore = (category: string) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [category]: prev[category] + INITIAL_COUNT,
    }));
  };

  return (
    <div className="overflow-x-auto my-8 bg-white/10 dark:bg-gray-900 backdrop-blur-sm rounded-md px-4 relative">
      <TabsProvider defaultValue="all">
        <div className="lg:flex justify-center mt-2">
          <div className="lg:flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            {projectsNav?.map(({ name }) => (
              <TabsBtn key={name} value={name}>
                <span className="relative z-[2] uppercase">{name}</span>
              </TabsBtn>
            ))}
          </div>
        </div>

        {projectsNav.map(({ name }) => (
          <TabsContent key={name} value={name}>
            <div className=" grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
              {projectsData
                .filter(
                  (project) =>
                    name === "all" || project.category.includes(name),
                )
                .slice(0, visibleCounts[name])
                .map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-10 group overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden cursor-pointer group/image flex-shrink-0">
                      {project.live ? (
                        <Link href={project.live} target="_blank">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-fit transition-transform duration-300 group-hover/image:scale-110"
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </Link>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-fit transition-transform duration-300 group-hover/image:scale-110"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-[#0fabca] dark:hover:text-[#0fabca] transition-colors">
                        {project.live ? (
                          <Link href={project.live} target="_blank">
                            {project.title}
                          </Link>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h3>
                      {project.projectType && (
                        <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                          {project.projectType}
                        </p>
                      )}
                      {project.keyImplementations ? (
                        <div className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                          <p className="text-sm font-semibold mb-2">
                            Key Implementations:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {project.keyImplementations.map((impl, index) => (
                              <li key={index}>{boldTerms(impl)}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                          {project.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Array.isArray(project.category) ? (
                          project.category.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: index * 0.3,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                              }}
                              className="px-3 py-1 bg-[#0fabca]/10 dark:bg-[#0fabca]/20 text-[#0fabca] dark:text-[#0fabca] rounded-full text-sm"
                            >
                              {tech}
                            </motion.span>
                          ))
                        ) : (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="px-3 py-1 bg-[#0fabca]/10 dark:bg-[#0fabca]/20 text-[#0fabca] dark:text-[#0fabca] rounded-full text-sm"
                          >
                            {project.category}
                          </motion.span>
                        )}
                      </div>
                      <RequestAccess project={project} />
                    </div>
                  </motion.div>
                ))}
            </div>
            {visibleCounts[name] <
              projectsData.filter(
                (project) => name === "all" || project.category.includes(name),
              ).length && (
              <div className="text-center mt-6">
                <button
                  onClick={() => showMore(name)}
                  className="px-4 py-2 bg-[#0fabca] text-white rounded-md hover:bg-[#0d9bb8]"
                >
                  Show More
                </button>
              </div>
            )}
          </TabsContent>
        ))}
      </TabsProvider>
    </div>
  );
}

export default Tab;
