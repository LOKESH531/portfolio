"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown, FiMapPin } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import Button from "@/components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-yellow-500 font-semibold text-lg mb-3 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-slate-600 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {personalInfo.role}
            </motion.h2>

            <motion.div
              className="flex items-center gap-2 text-slate-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <FiMapPin className="text-yellow-500" />
              <span>{personalInfo.location}</span>
            </motion.div>

            <motion.p
              className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button href="#contact" variant="primary">
                Get In Touch <FiMail />
              </Button>
              <Button href="#projects" variant="outline">
                View Projects
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { href: personalInfo.github, icon: FiGithub },
                { href: personalInfo.linkedin, icon: FiLinkedin },
                { href: personalInfo.twitter, icon: FiTwitter },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-slate-500 hover:text-yellow-500 hover:border-yellow-400 transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "conic-gradient(from 0deg, #f59e0b, #fbbf24, #f59e0b)", padding: "4px" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </motion.div>

              <div className="absolute inset-1 rounded-full border-2 border-yellow-100" />

              <div className="absolute inset-3 rounded-full overflow-hidden">
                <Image src="/profile.jpeg" alt={personalInfo.name} fill className="object-cover rounded-full" />
              </div>

              <motion.div
                className="absolute -bottom-2 -left-4 bg-white border border-yellow-200 rounded-xl px-4 py-2 shadow-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-400">Experience</div>
                <div className="text-lg font-bold gradient-text">5+ Years</div>
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-4 bg-white border border-yellow-200 rounded-xl px-4 py-2 shadow-md"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-400">Projects</div>
                <div className="text-lg font-bold gradient-text">15+</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-white border border-green-200 rounded-xl px-3 py-2 shadow-md"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiArrowDown className="text-3xl text-slate-300" />
      </motion.div>
    </section>
  );
}
