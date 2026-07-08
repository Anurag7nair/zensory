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
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={`
        inline-flex items-center justify-center
        rounded-full
        font-semibold
        transition-all
        duration-300

        px-5 py-3
        text-sm

        sm:px-6 sm:py-3 sm:text-base
        md:px-8 md:py-4 md:text-lg
        lg:px-10 lg:py-5 lg:text-xl

        ${
          variant === "primary"
            ? "bg-[#F6AB1A] text-[#051B35] shadow-lg hover:shadow-xl"
            : "border-2 border-gray-300 bg-white text-[#051B35] hover:bg-gray-50 hover:border-[#F6AB1A]"
        }

        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}