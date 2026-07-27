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
      className="relative flex gap-5 md:gap-8 lg:gap-10"
    >
      {/* Timeline */}

      <div className="relative flex flex-col items-center">

        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
          }}
          className="relative z-10"
        >

          {/* Glow */}

          <div
            className="absolute inset-0 rounded-full blur-xl opacity-30"
            style={{
              backgroundColor: color,
            }}
          />

          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl md:h-16 md:w-16 lg:h-[74px] lg:w-[74px]"
          >
            <Icon
              size={30}
              style={{
                color,
              }}
            />
          </div>

        </motion.div>

        {/* Timeline */}

        {!isLast && (
          <div className="mt-3 flex flex-1 justify-center">

            <div
              className="w-[4px] rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${color}, #D7EDEB)`,
              }}
            />

          </div>
        )}

      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.3,
        }}
        className="group relative flex-1 overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_rgba(6,27,53,0.08)] backdrop-blur-lg transition-all duration-300 hover:shadow-[0_24px_60px_rgba(6,27,53,0.12)] md:p-8 lg:p-10"
      >

        {/* Decorative Blob */}

        <div
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            backgroundColor: color,
          }}
        />

        {/* Stage */}

        <span
          className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[3px] md:text-sm"
          style={{
            backgroundColor: `${color}15`,
            color,
          }}
        >
          {stage}
        </span>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold leading-tight text-[#061B35] md:text-3xl lg:text-4xl">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-5 max-w-3xl text-base leading-8 text-[#506D79] md:text-lg lg:text-[21px] lg:leading-10">
          {description}
        </p>

      </motion.div>
    </motion.div>
  );
}