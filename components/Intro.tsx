"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#FCF4E8] py-8 md:py-12 lg:py-4">

      {/* Glow */}

      <motion.div
        className="
          absolute
          h-[220px]
          w-[220px]

          sm:h-[300px]
          sm:w-[300px]

          md:h-[400px]
          md:w-[400px]

          lg:h-[500px]
          lg:w-[500px]

          rounded-full
          bg-cyan-200/20
          blur-[100px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Butterfly */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
          },
          scale: {
            duration: 1,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/butterfly1.png"
          alt="Butterfly"
          width={1600}
          height={1600}
          priority
          className="
            select-none
            h-auto

            w-[280px]

            sm:w-[380px]

            md:w-[550px]

            lg:w-[750px]

            xl:w-[900px]

            2xl:w-[1000px]
          "
        />
      </motion.div>

    </section>
  );
}