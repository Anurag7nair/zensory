"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/60
        ${bgColor}
        p-6
        shadow-[0_20px_45px_rgba(6,27,53,0.08)]
        backdrop-blur-lg
        transition-all
        duration-300
        hover:shadow-[0_28px_65px_rgba(6,27,53,0.14)]

        md:p-8
        lg:p-10
      `}
    >
      {/* Decorative Glow */}

      <div
        className={`
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          ${badgeColor}
          opacity-10
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-20
        `}
      />

      {/* Decorative Circle */}

      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full border border-white/40 opacity-40" />

      {/* Badge */}

      <span
        className={`
          inline-flex
          items-center
          rounded-full
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[3px]
          text-white
          shadow-md
          ${badgeColor}
        `}
      >
        {badge}
      </span>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold leading-tight text-[#061B35] md:text-3xl lg:text-4xl">
        {title}
      </h3>

      {/* Divider */}

      <div className="mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-[#0EA5B7] to-[#57C45A]" />

      {/* Items */}

      <ul className={`mt-8 space-y-5 ${textColor}`}>
        {items.map((item) => (
          <motion.li
            key={item}
            whileHover={{
              x: 4,
            }}
            className="flex items-start gap-4"
          >
            {/* Icon */}

            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
              <Check
                size={16}
                className="text-[#57C45A]"
                strokeWidth={3}
              />
            </div>

            {/* Text */}

            <span className="text-base leading-8 md:text-lg lg:text-xl lg:leading-9">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}