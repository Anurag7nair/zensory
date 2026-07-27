"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFD] via-white to-[#FFFDF8] py-20 md:py-28 lg:py-36">

      {/* Background Decoration */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40"
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
        className="absolute right-0 top-32 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-30"
      />

      <div className="container relative z-10">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#0EA5B7]">
              MEET OUR FOUNDER
            </p>

            <p className="mb-3 text-lg font-semibold text-[#F7B733]">
              Lt Col (Retd)
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#061B35] sm:text-5xl lg:text-6xl">
              Rejitha Pillai
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#4B6A79] lg:text-xl">
              Two decades of military discipline meet a deeply personal
              commitment to neurodiverse children. Rejitha founded Zensory in
              Pune to bring together physical therapy, sensory integration,
              thoughtful technology and one simple belief —
              <strong className="text-[#061B35]">
                {" "}parents should always be partners.
              </strong>
            </p>

            {/* Quote */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="relative mt-10 overflow-hidden rounded-[30px] border border-white bg-white/90 p-8 shadow-xl backdrop-blur"
            >

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-100 blur-3xl opacity-40" />

              <Quote
                size={40}
                className="mb-5 text-[#F7B733]"
              />

              <p className="relative text-xl italic leading-9 text-[#061B35]">
                “Discipline gave me structure.
                <br />
                Motherhood gave me purpose.
                <br />
                Zensory is where both come together.”
              </p>

            </motion.div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[430px] w-[430px] items-center justify-center overflow-hidden rounded-[42px] bg-gradient-to-br from-[#0EA5B7] via-[#13879A] to-[#0A6175] shadow-[0_30px_80px_rgba(14,165,183,0.25)]"
            >

              {/* Decorative Circles */}

              <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full border border-white/10" />
              <div className="absolute right-6 top-10 h-36 w-36 rounded-full border border-white/10" />
              <div className="absolute bottom-8 left-10 h-44 w-44 rounded-full border border-white/10" />
              <div className="absolute -right-12 bottom-0 h-60 w-60 rounded-full border border-white/10" />

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [.25, .45, .25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute h-72 w-72 rounded-full bg-cyan-300 blur-[110px]"
              />

              {/* Decorative Icons */}

              <Sparkles
                className="absolute left-10 top-12 text-white/30"
                size={28}
              />

              <Heart
                className="absolute bottom-12 right-12 text-white/20"
                size={26}
                fill="currentColor"
              />

              {/* Placeholder */}

              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 backdrop-blur">

                <div className="text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl font-black text-white">
                    RP
                  </div>

                  <p className="mt-6 text-xl font-semibold text-white">
                    Founder
                  </p>

                  <p className="mt-2 text-white/70">
                    Replace with portrait
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}