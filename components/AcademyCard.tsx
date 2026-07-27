"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AcademyCardProps {
  title: string;
  Icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

export default function AcademyCard({
  title,
  Icon,
  iconColor,
  bgColor,
}: AcademyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        group
        relative
        overflow-hidden
        cursor-pointer
        rounded-[30px]
        border
        border-white/70
        ${bgColor}
        p-6
        md:p-8
        shadow-md
        transition-all
        duration-500
        hover:shadow-2xl
      `}
    >
      {/* Decorative Glow */}

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-3xl" />

      {/* Decorative Circle */}

      <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full border border-white/40 opacity-50" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md"
      >
        <Icon
          className={iconColor}
          size={28}
        />
      </motion.div>

      {/* Title */}

      <h3 className="mt-6 text-2xl md:text-3xl font-bold text-[#061B35]">
        {title}
      </h3>

      {/* Decorative Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-5 h-1 rounded-full bg-gradient-to-r from-[#0EA5B7] to-[#F7B733]"
      />
    </motion.div>
  );
}