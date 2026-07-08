"use client";

import { motion } from "framer-motion";
import {
  Circle,
  Crosshair,
  Monitor,
  Heart,
  Play,
  Download,
  Brain,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import AcademyCard from "./AcademyCard";

const cards = [
  {
    title: "Autism",
    icon: Circle,
    color: "text-cyan-600",
  },
  {
    title: "ADHD",
    icon: Crosshair,
    color: "text-violet-600",
  },
  {
    title: "Sensory Play",
    icon: BookOpen,
    color: "text-yellow-500",
  },
  {
    title: "Physical Therapy",
    icon: Heart,
    color: "text-green-600",
  },
  {
    title: "Assistive Tech",
    icon: Monitor,
    color: "text-cyan-600",
  },
  {
    title: "Parent Courses",
    icon: Brain,
    color: "text-cyan-600",
  },
  {
    title: "Videos",
    icon: Play,
    color: "text-yellow-500",
  },
  {
    title: "Downloads",
    icon: Download,
    color: "text-green-600",
  },
];

export default function Academy() {
  return (
    <section className="bg-[#F5FBFA] py-16 md:py-24 lg:py-32">
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-sm md:text-base lg:text-lg font-bold tracking-[3px] md:tracking-[4px] uppercase text-[#0A6077]">
            ZENSORY ACADEMY
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#071B35]">
            Learning that travels home with you
          </h2>

          <p className="mt-5 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-9 lg:leading-10 text-[#2C5A70]">
            Short courses, articles, and downloads for every stage of the
            journey — written for parents, not textbooks.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

          {cards.map((card) => (
            <AcademyCard
              key={card.title}
              title={card.title}
              Icon={card.icon}
              iconColor={card.color}
            />
          ))}

        </div>

        {/* Button */}

        <div className="mt-10 md:mt-16 flex justify-center">

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex items-center gap-3 rounded-full border-2 border-gray-300 bg-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-base md:text-lg lg:text-xl font-semibold text-[#061B35] shadow-sm hover:shadow-lg transition-all"
          >
            Explore Articles

            <ArrowRight
              size={20}
              className="md:w-6 md:h-6"
            />

          </motion.button>

        </div>

      </div>
    </section>
  );
}