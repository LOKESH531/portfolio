"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import {
  SiAngular, SiReact, SiTypescript, SiJavascript,
  SiHtml5, SiCss as SiCssthree, SiTailwindcss, SiBootstrap, SiGit,
} from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { ComponentType } from "react";

const skillIcons: { [key: string]: ComponentType } = {
  "Angular": SiAngular,
  "React.js": SiReact,
  "TypeScript": SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  "HTML5": SiHtml5,
  "CSS3": SiCssthree,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "REST API Integration": FiServer,
  "Git & GitHub": SiGit,
};

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills & Technologies" subtitle="Tools I work with" />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></span>
                {category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.filter((s) => s.category === category).map((skill, index) => {
                  const Icon = skillIcons[skill.name] || SiReact;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                      className="group"
                    >
                      <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all h-full flex flex-col items-center justify-center gap-4 cursor-pointer">
                        <div className="text-5xl text-yellow-500 group-hover:text-yellow-600 transition-colors">
                          <Icon />
                        </div>
                        <div className="text-sm font-semibold text-slate-700 group-hover:text-yellow-600 transition-colors text-center">
                          {skill.name}
                        </div>
                        <div className="relative w-16 h-16">
                          <svg className="transform -rotate-90 w-16 h-16">
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-yellow-100" />
                            <motion.circle
                              cx="32" cy="32" r="28"
                              stroke="url(#gradient-yellow)"
                              strokeWidth="4" fill="none" strokeLinecap="round"
                              initial={{ strokeDasharray: "0 175.93" }}
                              whileInView={{ strokeDasharray: `${(skill.level / 100) * 175.93} 175.93` }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-yellow-600">
                            {skill.level}%
                          </div>
                        </div>
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id="gradient-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#d97706" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
