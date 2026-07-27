"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061B35] via-[#0A2847] to-[#0C3956] py-20 md:py-28 lg:py-36">

      {/* Background Glow */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl"
      />

      {/* Decorative Sparkles */}

      <Sparkles
        className="absolute left-16 top-20 hidden text-[#F7B733]/40 lg:block"
        size={32}
      />

      <Sparkles
        className="absolute right-20 top-40 hidden text-cyan-300/40 lg:block"
        size={26}
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
          className="text-center"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[4px] text-[#F7B733] md:text-base lg:text-lg">
            WHY FAMILIES CHOOSE ZENSORY
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Therapy, technology
            <br className="hidden sm:block" />

            <span className="bg-gradient-to-r from-[#57C45A] via-[#7DD3FC] to-[#F7B733] bg-clip-text text-transparent">
              & family working together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70 md:text-xl">
            Every child receives a personalized journey supported by
            experienced therapists, innovative technology and families who are
            empowered every step of the way.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">

          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
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
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:p-7 lg:p-8"
            >

              {/* Decorative Glow */}

              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-5">

                {/* Icon */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5B7] to-[#57C45A] shadow-lg">

                  <CheckCircle2
                    size={26}
                    className="text-white"
                    strokeWidth={2.5}
                  />

                </div>

                {/* Text */}

                <div>

                  <p className="text-xl font-semibold leading-8 text-white md:text-2xl">
                    {reason}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}