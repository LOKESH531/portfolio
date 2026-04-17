"use client";

import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCode } from "react-icons/fi";
import { about } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  const stats = [
    { icon: FiBriefcase, label: "Years Experience", value: about.yearsOfExperience },
    { icon: FiCode, label: "Projects Completed", value: `${about.projectsCompleted}+` },
    { icon: FiAward, label: "Awards Received", value: about.awardsReceived },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 text-lg leading-relaxed mb-6">{about.description}</p>
            <p className="text-slate-500 text-lg leading-relaxed">
              I'm passionate about creating seamless user experiences and writing clean, maintainable code.
              I thrive in collaborative environments and enjoy solving complex problems with elegant solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl text-yellow-500"><stat.icon /></div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-slate-500">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
