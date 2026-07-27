"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-[#F9FFFD] to-[#FFFDF8] py-14 md:py-20 lg:py-24">

      {/* Cyan Blob */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"
      />

      {/* Yellow Blob */}

      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-28 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl"
      />

      {/* Green Blob */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl"
      />

      {/* Central Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          rounded-full
          bg-cyan-300/30
          blur-[120px]

          h-[220px]
          w-[220px]

          sm:h-[320px]
          sm:w-[320px]

          md:h-[450px]
          md:w-[450px]

          lg:h-[600px]
          lg:w-[600px]
        "
      />

      {/* Sparkles */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[18%] top-[22%] hidden lg:block"
      >
        <Sparkles
          size={34}
          className="text-[#F7C63D]/70"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-[18%] top-[35%] hidden lg:block"
      >
        <Sparkles
          size={26}
          className="text-[#0EA5B7]/60"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[25%] bottom-[20%] hidden lg:block"
      >
        <Sparkles
          size={20}
          className="text-[#57C45A]/60"
        />
      </motion.div>

      {/* Butterfly */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
          },
          scale: {
            duration: 1,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative z-10"
      >
        <Image
          src="/butterfly1.png"
          alt="Zensory Butterfly"
          width={1600}
          height={1600}
          priority
          className="
            h-auto
            select-none

            w-[290px]

            sm:w-[420px]

            md:w-[600px]

            lg:w-[760px]

            xl:w-[900px]

            2xl:w-[1020px]
          "
        />
      </motion.div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white/80 to-transparent" />

    </section>
  );
}