"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface JourneyCardProps {
  stage: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  isLast?: boolean;
}

export default function JourneyCard({
  stage,
  title,
  description,
  Icon,
  color,
  isLast = false,
}: JourneyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-4 md:gap-6 lg:gap-10"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            z-10
            flex
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-[#2C9A38]
            bg-white
            shadow-lg

            h-12
            w-12

            md:h-14
            md:w-14

            lg:h-16
            lg:w-16
          "
        >
          <Icon
            size={22}
            color={color}
          />
        </motion.div>

        {!isLast && (
          <div className="mt-2 w-[3px] flex-1 bg-[#2C9A38]" />
        )}
      </div>

      {/* Content */}

      <div className="pb-10 md:pb-14 lg:pb-20">

        <p className="mb-2 text-xs md:text-sm font-bold uppercase tracking-[3px] text-[#2C9A38]">
          {stage}
        </p>

        <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#061B35]">
          {title}
        </h3>

        <p className="max-w-2xl text-base md:text-lg lg:text-[22px] leading-7 md:leading-8 lg:leading-10 text-[#2B5B71]">
          {description}
        </p>

      </div>

    </motion.div>
  );
}   