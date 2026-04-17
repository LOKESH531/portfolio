"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Information</h3>
            <p className="text-slate-500 mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
            </p>

            <div className="space-y-6">
              {[
                { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <motion.div key={i} className="flex items-center gap-4" whileHover={{ x: 10 }}>
                  <div className="w-12 h-12 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-yellow-500">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">{label}</div>
                    {href ? (
                      <a href={href} className="text-slate-700 hover:text-yellow-500 transition-colors">{value}</a>
                    ) : (
                      <div className="text-slate-700">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { href: personalInfo.github, icon: FiGithub },
                { href: personalInfo.linkedin, icon: FiLinkedin },
                { href: personalInfo.twitter, icon: FiTwitter },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-yellow-200 flex items-center justify-center text-slate-500 hover:text-yellow-500 hover:border-yellow-400 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}>
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name", key: "name" },
                { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com", key: "email" },
              ].map(({ id, label, type, placeholder, key }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-slate-600 mb-2 font-medium">{label}</label>
                  <input
                    type={type} id={id}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-yellow-200 rounded-lg focus:outline-none focus:border-yellow-400 text-slate-700 placeholder-slate-300 transition-colors"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-slate-600 mb-2 font-medium">Message</label>
                <textarea
                  id="message" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required rows={5}
                  className="w-full px-4 py-3 bg-white border border-yellow-200 rounded-lg focus:outline-none focus:border-yellow-400 text-slate-700 placeholder-slate-300 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-200 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
