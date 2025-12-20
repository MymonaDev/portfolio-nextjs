import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface WorkExperienceProps {
  experiences: {
    company: string;
    logo: string;
    role: string;
    period: string;
    description?: string;
  }[];
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  const [expandedItems, setExpandedItems] = React.useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (company: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="container mx-auto px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="lg:w-full flex flex-col justify-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="my-4 text-lg text-gray-600 dark:text-white max-w-2xl"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A software engineer specializing in cloud-native monolithic
                services. Proficient in React, Node, Next.js, and cloud
                technologies like AWS and GCP, I excel in containerization with
                Docker. I lead teams and deliver production-ready projects that
                drive innovation.
                <br />
                <br />
                With a keen eye for design and a love for creating efficient,
                scalable web applications, I strive to deliver exceptional
                digital solutions.
              </motion.p>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <motion.div
                    key={experience.company}
                    className="group relative rounded-lg border p-4 transition-all hover:shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="h-12 w-12 overflow-hidden rounded-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          height={100}
                          width={100}
                          alt={`${experience.company} logo`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div
                          className="flex items-center cursor-pointer"
                          onClick={() => toggleExpand(experience.company)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 group">
                              <motion.h3
                                className="font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                {experience.company}
                              </motion.h3>
                              {expandedItems[experience.company] ? (
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-transform ease-in-out duration-500 invisible group-hover:visible",
                                  )}
                                />
                              ) : (
                                <ChevronRight
                                  className={cn(
                                    "h-4 w-4 transition-transform ease-in-out duration-500 invisible group-hover:visible",
                                  )}
                                />
                              )}
                            </div>
                            <motion.p
                              className="text-sm text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              {experience.role}
                            </motion.p>
                          </div>
                          <motion.span
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {experience.period}
                          </motion.span>
                        </motion.div>
                        {/* Animated container for description */}
                        <motion.div
                          initial={{ maxHeight: 0, opacity: 0 }}
                          animate={{
                            maxHeight: expandedItems[experience.company]
                              ? "1000px"
                              : 0,
                            opacity: expandedItems[experience.company] ? 1 : 0,
                          }}
                          transition={{
                            maxHeight: { duration: 0.4, ease: "easeInOut" },
                            opacity: { duration: 0.2 },
                          }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          {expandedItems[experience.company] &&
                            experience.description && (
                              <motion.p
                                className="mt-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                {experience.description}
                              </motion.p>
                            )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
