"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import PillarCard from "./PillarCard";

const pillars = [
  {
    badge: "ASSESS",
    title: "Map the child",
    items: [
      "Sensory profiling",
      "Developmental screening",
      "Diagnostic assessment",
      "Progress benchmarking",
    ],
    badgeColor: "bg-cyan-600",
    bgColor: "bg-[#ECFBFD]",
    textColor: "text-cyan-900",
  },
  {
    badge: "THERAPY",
    title: "Hands-on care",
    items: [
      "Physical therapy",
      "Occupational therapy",
      "Speech therapy",
      "Sensory integration",
    ],
    badgeColor: "bg-[#F7B733]",
    bgColor: "bg-[#FFF8EB]",
    textColor: "text-[#8A4A00]",
  },
  {
    badge: "TECHNOLOGY",
    title: "Tech-assisted care",
    items: [
      "Interactive therapy tools",
      "Progress-tracking apps",
      "Assistive communication tech",
      "Tele-therapy sessions",
    ],
    badgeColor: "bg-violet-600",
    bgColor: "bg-[#F6F1FF]",
    textColor: "text-violet-900",
  },
  {
    badge: "FAMILY",
    title: "Parents as partners",
    items: [
      "In-session parent coaching",
      "Home carryover plans",
      "Parent circles",
      "Inclusive play & workshops",
    ],
    badgeColor: "bg-green-600",
    bgColor: "bg-[#EEF9F1]",
    textColor: "text-green-900",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFCF7] via-white to-[#F8FFFD] py-20 md:py-28 lg:py-36">

      {/* Background */}

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40" />
      <div className="absolute right-0 top-48 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-30" />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="font-bold uppercase tracking-[4px] text-[#0A8FA3]">
            OUR ECOSYSTEM
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#061B35] sm:text-5xl lg:text-6xl">
            Four pillars,
            <br />
            one child.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-[#4A6A79] lg:mx-0 lg:text-xl">
            Every service sits inside one of four pillars so therapy,
            technology and family continue working together toward one
            meaningful plan—not as separate providers.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
          }}
          className="group mt-12 rounded-[34px] border border-[#FFE4BF] bg-gradient-to-r from-[#FFF9F1] to-[#FFF5E7] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex flex-col gap-6 sm:flex-row">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                <Heart
                  fill="#F7B733"
                  className="text-[#F7B733]"
                  size={30}
                />
              </div>

              <div>

                <span className="rounded-full bg-[#FFE8B5] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#8A4A00]">
                  Also from Zensory
                </span>

                <h3 className="mt-5 text-3xl font-bold text-[#061B35]">
                  Zensory Nest — A space for mothers
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#506D79]">
                  Sound healing, breathwork, and supportive antenatal &
                  postnatal circles. A peaceful space created especially for
                  mothers, separate from our therapy programs and held on most
                  weekends.
                </p>

              </div>

            </div>

            {/* Button */}

            <motion.button
              whileHover={{
                scale: 1.08,
                rotate: -8,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all group-hover:bg-[#F7B733]"
            >
              <ArrowRight
                size={28}
                className="text-[#F7B733] transition-colors group-hover:text-white"
              />
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}