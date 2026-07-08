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
    bgColor: "bg-[#EAF7FB]",
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
    badgeColor: "bg-amber-500",
    bgColor: "bg-[#FDF3E8]",
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
    bgColor: "bg-[#F3F0FF]",
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
    bgColor: "bg-[#EEF8F1]",
    textColor: "text-green-900",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <p className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-[3px] md:tracking-[4px] text-[#0A6077]">
            OUR ECOSYSTEM
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#071B35]">
            Four pillars, one child
          </h2>

          <p className="mt-5 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-9 lg:leading-10 text-[#2C5A70] mx-auto lg:mx-0">
            Every service sits inside one of four pillars—so therapy,
            technology, and family stay working toward the same plan,
            not scattered across separate providers.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mt-8 md:mt-10 rounded-3xl border border-[#F2D5B2] bg-[#FFF3E8] p-6 md:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left */}

            <div className="flex flex-col sm:flex-row gap-5 md:gap-6">

              <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-white shadow">
                <Heart
                  className="text-amber-500"
                  fill="#F5A623"
                  size={28}
                />
              </div>

              <div>

                <span className="inline-block rounded-full bg-amber-300 px-3 py-1 text-xs md:text-sm font-semibold">
                  Also from Zensory
                </span>

                <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#071B35] leading-tight">
                  Zensory Nest — a space for mothers
                </h3>

                <p className="mt-4 text-base md:text-lg lg:text-xl leading-7 md:leading-9 text-[#2C5A70]">
                  Sound healing, breathwork, and a small circle of antenatal &
                  postnatal mothers. Separate from our core therapy programs,
                  held most weekends.
                </p>

              </div>

            </div>

            {/* Arrow */}

            <button className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 self-start lg:self-center">
              <ArrowRight
                size={28}
                className="text-amber-500"
              />
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}