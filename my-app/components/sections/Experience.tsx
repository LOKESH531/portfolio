"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { experience } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-yellow-400 to-yellow-600" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex gap-8"
              >
                <div className="relative flex-shrink-0 flex items-start justify-center w-12">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-white flex items-center justify-center z-10">
                    <FiBriefcase className="text-white" />
                  </div>
                </div>

                <motion.div
                  className="flex-1 bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.position}</h3>
                  <div className="text-yellow-500 font-semibold mb-3">{exp.company}</div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-yellow-500" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-yellow-500" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-500">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
