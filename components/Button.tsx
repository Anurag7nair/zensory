"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-semibold
        transition-all
        duration-300

        px-6 py-3
        text-sm

        sm:px-7 sm:py-3.5 sm:text-base
        md:px-9 md:py-4 md:text-lg
        lg:px-11 lg:py-5 lg:text-xl

        ${
          variant === "primary"
            ? `
              bg-gradient-to-r
              from-[#F7C63D]
              via-[#F6B73C]
              to-[#F39C12]
              text-[#071B35]
              shadow-[0_12px_30px_rgba(246,171,26,0.28)]
              hover:shadow-[0_18px_40px_rgba(246,171,26,0.38)]
            `
            : `
              border-2
              border-[#DCEAE8]
              bg-white/90
              backdrop-blur
              text-[#083A52]
              shadow-sm
              hover:bg-[#F9FFFF]
              hover:border-[#0EA5B7]
              hover:text-[#0A7E93]
            `
        }

        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}