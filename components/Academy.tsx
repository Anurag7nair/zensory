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
    bg: "bg-[#ECFBFD]",
  },
  {
    title: "ADHD",
    icon: Crosshair,
    color: "text-violet-600",
    bg: "bg-[#F5F0FF]",
  },
  {
    title: "Sensory Play",
    icon: BookOpen,
    color: "text-amber-500",
    bg: "bg-[#FFF8EA]",
  },
  {
    title: "Physical Therapy",
    icon: Heart,
    color: "text-green-600",
    bg: "bg-[#EFFAF2]",
  },
  {
    title: "Assistive Tech",
    icon: Monitor,
    color: "text-cyan-600",
    bg: "bg-[#EDF9FF]",
  },
  {
    title: "Parent Courses",
    icon: Brain,
    color: "text-pink-500",
    bg: "bg-[#FFF1F6]",
  },
  {
    title: "Videos",
    icon: Play,
    color: "text-orange-500",
    bg: "bg-[#FFF6EB]",
  },
  {
    title: "Downloads",
    icon: Download,
    color: "text-green-600",
    bg: "bg-[#EEFDF3]",
  },
];

export default function Academy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFD] via-[#FDFEFF] to-[#F7FBFF] py-20 md:py-28 lg:py-36">

      {/* Decorative Blobs */}

      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-100 blur-3xl opacity-40" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-40" />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-bold uppercase tracking-[4px] text-[#0A7E93]">
            ZENSORY ACADEMY
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#061B35] sm:text-5xl lg:text-6xl">
            Learning that travels
            <br />
            home with you
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#446778] md:text-xl">
            Short courses, articles and downloads for every stage of the
            journey — thoughtfully created for parents, not textbooks.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <AcademyCard
              key={card.title}
              title={card.title}
              Icon={card.icon}
              iconColor={card.color}
              bgColor={card.bg}
            />
          ))}

        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F7B733] to-[#F6A51B] px-10 py-5 text-lg font-bold text-[#061B35] shadow-xl transition-all"
          >
            Explore Articles

            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />

          </motion.button>

        </div>

      </div>
    </section>
  );
}