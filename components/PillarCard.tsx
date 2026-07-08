"use client";

import { motion } from "framer-motion";

interface PillarCardProps {
  badge: string;
  title: string;
  items: string[];
  badgeColor: string;
  bgColor: string;
  textColor: string;
}

export default function PillarCard({
  badge,
  title,
  items,
  badgeColor,
  bgColor,
  textColor,
}: PillarCardProps) {
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
        ${bgColor}
        rounded-2xl
        lg:rounded-[28px]
        border
        border-gray-200
        p-5
        md:p-6
        lg:p-8
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      `}
    >
      {/* Badge */}

      <span
        className={`
          inline-flex
          items-center
          rounded-full
          px-3
          py-1

          md:px-4

          text-[10px]
          md:text-xs

          font-bold
          uppercase
          tracking-[2px]
          text-white

          ${badgeColor}
        `}
      >
        {badge}
      </span>

      {/* Title */}

      <h3 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#071B35]">
        {title}
      </h3>

      {/* List */}

      <ul
        className={`mt-5 space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl ${textColor}`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span className="mt-[2px] text-lg">•</span>

            <span className="leading-7 md:leading-8">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}