"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
}

export default function Button({ children, onClick, variant = "primary", href, className = "" }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";

  const variants = {
    primary: "bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-300",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    outline: "border-2 border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-slate-900",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
