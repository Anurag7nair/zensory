"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import JourneyCard from "./JourneyCard";

import {
  ScanSearch,
  Activity,
  Monitor,
  Heart,
  Smile,
} from "lucide-react";

const stages = [
  {
    stage: "STAGE 1",
    title: "Assess & Map",
    description:
      "A play-based sensory and developmental assessment that charts your child's own constellation — how they sense, move, and connect.",
    icon: ScanSearch,
    color: "#0EA5B7",
  },
  {
    stage: "STAGE 2",
    title: "Physical & Sensory Therapy",
    description:
      "Hands-on occupational, physical, speech and sensory integration therapy — the core of every child's plan.",
    icon: Activity,
    color: "#F7B733",
  },
  {
    stage: "STAGE 3",
    title: "Technology-Assisted Care",
    description:
      "Purposeful tech — interactive tools, progress tracking apps, and assistive communication aids — layered onto hands-on therapy.",
    icon: Monitor,
    color: "#8B5CF6",
  },
  {
    stage: "STAGE 4",
    title: "Parent Partnership",
    description:
      "Parents sit inside the session, not outside it — coached in real time so progress carries home.",
    icon: Heart,
    color: "#57C45A",
  },
  {
    stage: "STAGE 5",
    title: "Inclusive Play",
    description:
      "Weekend play sessions and parent circles where every child belongs, exactly as they are.",
    icon: Smile,
    color: "#0EA5B7",
  },
  {
    stage: "STAGE 6",
    title: "Bloom",
    description:
      "Not a finish line — a child who keeps growing, with progress reviewed and the plan reshaped every step of the way.",
    icon: Sparkles,
    color: "#F7B733",
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#F8FFFD] py-20 md:py-28 lg:py-36">

      {/* Background Decorations */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-52 h-80 w-80 rounded-full bg-yellow-100 blur-3xl opacity-40"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-30"
      />

      {/* Decorative Sparkles */}

      <Sparkles
        size={28}
        className="absolute left-20 top-32 hidden text-[#F7C63D]/60 lg:block"
      />

      <Sparkles
        size={22}
        className="absolute right-24 top-60 hidden text-[#0EA5B7]/60 lg:block"
      />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16 text-center lg:mb-20"
        >

          <p className="mb-5 text-sm font-bold uppercase tracking-[4px] text-[#0EA5B7] md:text-base lg:text-lg">
            THE ZENSORY JOURNEY
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-[#061B35] sm:text-5xl lg:text-6xl">
            Six stages,
            <br className="hidden sm:block" />
            one continuous path.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#506D79] md:text-xl lg:text-2xl lg:leading-[44px]">
            Growth doesn't happen through isolated appointments.
            It unfolds through meaningful stages, where therapists,
            technology and families move forward together—one step at a time.
          </p>

        </motion.div>

        {/* Journey Cards */}

        <div className="space-y-5">

          {stages.map((stage, index) => (
            <JourneyCard
              key={stage.title}
              stage={stage.stage}
              title={stage.title}
              description={stage.description}
              Icon={stage.icon}
              color={stage.color}
              isLast={index === stages.length - 1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}