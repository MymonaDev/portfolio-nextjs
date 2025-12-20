"use client";

// import { infoList } from "@/assets/assets";
import { projectsData } from "@/assets/projects";
// import { WorkExperience } from "@/components/WorkExperience";
// import { InfoItem } from "@/types/assets";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AboutTabsBtn } from "./AboutTabsBtn";
import { AboutTabsContent } from "./AboutTabsContent";
import { AboutTabsProvider } from "./AboutTabsProvider";
import AchievementCard from "./AchievementCard";
import AchievementCard2 from "./AchievementCard2";
import LinkedInPostCard from "./LinkedInPostCard";
function AboutTab() {
  // const [menu, setMenu] = useState("All");

  const aboutTabNav = [
    { name: "About me" },
    // { name: "Education" }, // Hidden but data kept in Data.js
    // { name: "Experience" },
    { name: "Achievements" },
  ];

  // const experiences = [
  //   {
  //     company: "Tech Help BD",
  //     logo: "https://techhelpbd.com/wp-content/uploads/2021/07/cropped-TechHelpBD-1-192x192.webp", // Replace with actual Agree logo
  //     role: "Fullstack Developer",
  //     period: "May 2020 - Present",
  //     description:
  //       "Designed and developed dynamic and responsive websites for the Tech Help BD community using MERN stack.",
  //   },
  //   {
  //     company: "AIT",
  //     logo: "https://www.aitit.info/project-images/logo/logo_1705754893.png",
  //     role: "Front-End Web Developer (Intern)",
  //     period: "September 2023 - December 2023",
  //     description:
  //       "Worked as a Front-End Web Developer, converted website designs into HTML, CSS, Bootstrap and Javscript for development.",
  //   },
  // ];

  return (
    <div className="py-0  bg-white/10 dark:bg-gray-900 backdrop-blur-sm rounded-md p-4 relative">
      <AboutTabsProvider defaultValue="About me">
        <div className="flex justify-center mt-2">
          <div className="lg:flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            {aboutTabNav?.map(({ name }) => (
              <AboutTabsBtn
                key={name}
                value={name}
                // setMenu={setMenu}
              >
                <span className="relative z-[2] uppercase">{name}</span>
              </AboutTabsBtn>
            ))}
          </div>
        </div>
        <AboutTabsContent value="About me">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-6">
              <div className="mt-8 flex flex-col md:flex-row sm:items-center  sm:justify-center gap-8">
                <div className="lg:w-full flex flex-col justify-center">
                  <motion.p
                    className="mt-4 text-lg text-gray-600 dark:text-white max-w-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Extensive experience in software engineering, specialized in
                    designing, developing, testing and maintaining cloud-native
                    monolithic services. Proficient in technologies such as
                    React, Node, Next.js and adept at utilizing AWS and GCP for
                    cloud services, excel in containerization with Docker.
                    Contributed to diverse domains, leading teams and delivering
                    production-ready projects.
                    <br />
                    <br />I have experience in multiple programming languages
                    and frameworks, and I thrive in collaborative environments
                    where I can work with teams to solve complex problems. With
                    my skills and experience, I am committed to creating
                    high-quality software that drives innovation and delivers
                    value to end-users.
                  </motion.p>
                  {/* <ul className="mt-5 text-gray-700 dark:text-white grid md:grid-cols-3 gap-6 max-w-2xl">
                    {infoList.map(
                      ({ icon, iconDark, title, description }: InfoItem) => (
                        <motion.li
                          className="p-5 border rounded-3xl hover:bg-lightHover dark:bg-[#1D2736] dark:hover:bg-gray-900 hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer"
                          initial={{ y: -20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          key={title}
                        >
                          <Image
                            src={iconDark}
                            alt="icon"
                            className="w-8 h-8 mb-4 dark:block hidden"
                          />
                          <Image
                            src={icon}
                            alt="icon"
                            className="w-8 h-8 mb-4 block dark:hidden"
                          />
                          <div className="text-left">
                            <h3 className="font-semibold mb-2">{title}</h3>
                            <p className="text-sm">{description}</p>
                          </div>
                        </motion.li>
                      ),
                    )}
                  </ul> */}
                  <div className="text-left">
                    <motion.h4
                      className="my-6 text-gray-900 dark:text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Connect with me:
                    </motion.h4>
                    <ul className="flex gap-4">
                      <motion.li
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <Link
                          href="https://www.facebook.com/MahbubDev"
                          target="_blank"
                          className="inline-block p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1 transition-transform duration-300 focus:outline-none"
                        >
                          <Facebook className="w-6 h-6" />
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link
                          href="https://linkedin.com/in/mahbubdev"
                          target="_blank"
                          className="inline-block p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1 transition-transform duration-300 focus:outline-none"
                        >
                          <Linkedin className="w-6 h-6" />
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <Link
                          href="https://twitter.com/mahbubdev"
                          target="_blank"
                          className="inline-block p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1 transition-transform duration-300 focus:outline-none"
                        >
                          <X className="w-6 h-6" />
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <Link
                          href="https://github.com/KaziMahbuburRahman"
                          target="_blank"
                          className="inline-block p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1 transition-transform duration-300 focus:outline-none"
                        >
                          <Github className="w-6 h-6" />
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        <Link
                          href="https://youtube.com/@TechHelpbd"
                          target="_blank"
                          className="inline-block p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1 transition-transform duration-300 focus:outline-none"
                        >
                          <Youtube className="w-6 h-6" />
                        </Link>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </AboutTabsContent>

        {/* Education tab hidden but data kept in Data.js */}
        {/* <AboutTabsContent value="Education">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-6">
              <div className="mt-8 flex flex-col md:flex-row sm:items-center  sm:justify-center gap-8">
                <div className="lg:w-full flex flex-col justify-center">
                  <motion.p
                    className="mt-4 text-lg text-gray-600 dark:text-white max-w-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    I completed my Secondary School Certificate (SSC) on May 6,
                    2019, with a GPA of 4.61. I also earned a Diploma in
                    Computer Science & Technology (CST) on May 23, 2024,
                    achieving a CGPA of 3.70.
                    <br />
                    <br />
                    Currently, I am pursuing a B.Sc in Computer Science &
                    Engineering (CSE), expected to be completed by June 2028.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.section>
          <EducationTimeline />
        </AboutTabsContent> */}
        {/*<AboutTabsContent value="Experience">
          <WorkExperience experiences={experiences} />

        </AboutTabsContent>*/}
        <AboutTabsContent value="Achievements">
          <div className="grid grid-cols-1 gap-6 sm:space-x-16 mt-8 sm:grid-cols-2">
            <LinkedInPostCard />
            <AchievementCard />
            <AchievementCard2 />
          </div>
        </AboutTabsContent>
        <AboutTabsContent value="Laravel">
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData
              .filter((project) => project.category === "Laravel")
              .map((project) => (
                <div
                  key={project.id}
                  className="px-6 pt-2 pb-4 shadow rounded mx-auto"
                >
                  <Image
                    alt={project.title}
                    className="rounded-lg"
                    src={project.image}
                    height={300}
                    width={300}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <h3 className="text-lg font-bold py-3">{project.title}</h3>
                  {/* <p className="mt-2 text-sm text-gray-600">{project.description}</p> */}
                  <div className="mt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-[#0fabca] hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.client && (
                      <a
                        href={project.client}
                        className="ml-4 text-blue-600 hover:underline"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </AboutTabsContent>
      </AboutTabsProvider>
    </div>
  );
}

export default AboutTab;
