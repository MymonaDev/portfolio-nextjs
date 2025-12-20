import redux_devtools from "@/assets/redux_devtools.png";
import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Cloudflare",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  },
  {
    name: "DigitalOcean",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Redux DevTools",
    icon: redux_devtools,
  },
];

const Tools = () => {
  return (
    <div className="py-10 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Development Tools
      </motion.h2>
      <div className="py-5 bg-white/10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 px-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-16 h-16 mb-2">
              <Image
                src={tool.icon}
                height={100}
                width={100}
                alt={tool.name}
                className="w-full h-full object-contain"
              />
            </div>
            <motion.span
              className="text-lg font-medium text-gray-700 dark:text-gray-300 relative z-10"
              whileHover={{ color: "#0fabca" }}
            >
              {tool.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
