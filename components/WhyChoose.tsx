"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Evidence-based, individualized care",
  "Physical & sensory therapy under one roof",
  "Technology-assisted progress tracking",
  "Parents as active session partners",
  "Inclusive community",
  "Educational resources",
  "Developmental tracking",
  "Compassionate care",
];

export default function WhyChoose() {
  return (
    <section className="bg-[#071C2A] py-16 md:py-24 lg:py-32">
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 md:mb-6 text-sm md:text-base lg:text-lg font-bold uppercase tracking-[3px] md:tracking-[5px] text-[#F7B32B]">
            WHY FAMILIES CHOOSE ZENSORY
          </p>

          <h2 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Therapy, technology,
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {" "}and family working as one plan
            </span>
          </h2>
        </motion.div>

        {/* Grid */}

        <div className="mt-10 md:mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-24 gap-y-6 md:gap-y-8 lg:gap-y-10">

          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                x: 8,
              }}
              className="group flex items-center gap-4 md:gap-5"
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  md:h-11
                  md:w-11
                  lg:h-12
                  lg:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0D3444]
                  transition-all
                  duration-300
                  group-hover:bg-[#124B60]
                "
              >
                <CheckCircle2
                  className="text-[#30D5C8]"
                  size={20}
                />
              </div>

              {/* Text */}

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed text-white">
                {reason}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}