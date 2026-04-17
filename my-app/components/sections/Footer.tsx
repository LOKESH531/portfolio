"use client";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-yellow-100 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 flex items-center justify-center gap-2">
            Built with <FiHeart className="text-yellow-400" /> by{" "}
            <span className="gradient-text font-semibold">{personalInfo.name}</span>
          </p>
          <p className="text-slate-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
