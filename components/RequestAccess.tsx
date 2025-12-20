"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  live: string | null;
  client?: string | null;
  server?: string;
  id: number;
}

interface RequestAccessProps {
  project: Project;
}

const RequestAccess = ({ project }: RequestAccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-3 mt-4"
    >
      {project.live && (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={project.live}
            className="inline-block px-3 py-1.5 bg-[#0fabca] text-white rounded-md hover:bg-[#0d9bb8] transition-colors"
            target="_blank"
          >
            Live Demo
          </Link>
        </motion.div>
      )}
      {project.client ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={project.client}
            className="inline-block px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            target="_blank"
          >
            Client Code
          </Link>
        </motion.div>
      ) : (
        <span className="inline-block px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md">
          Private
        </span>
      )}

      {project.server && (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={project.server}
            className="inline-block px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            target="_blank"
          >
            Server Code
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RequestAccess;
