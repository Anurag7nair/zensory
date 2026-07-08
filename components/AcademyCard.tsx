"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AcademyCardProps {
  title: string;
  Icon: LucideIcon;
  iconColor: string;
}

export default function AcademyCard({
  title,
  Icon,
  iconColor,
}: AcademyCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="cursor-pointer rounded-2xl lg:rounded-[28px] border border-gray-200 bg-white p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Icon */}

      <div
        className="flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl lg:rounded-2xl"
        style={{ background: "#EEF7F7" }}
      >
        <Icon
          className={iconColor}
          size={24}
        />
      </div>

      {/* Title */}

      <h3 className="mt-5 text-xl md:text-2xl lg:text-3xl font-bold text-[#061B35] leading-tight">
        {title}
      </h3>
    </motion.div>
  );
}