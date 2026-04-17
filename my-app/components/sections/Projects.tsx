"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl border border-yellow-200 overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all group"
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-6xl opacity-60">💻</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm border border-yellow-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors"
                    whileHover={{ scale: 1.1 }}>
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors"
                    whileHover={{ scale: 1.1 }}>
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
