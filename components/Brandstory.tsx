"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#F8FFFD] py-20 md:py-28 lg:py-32">

      {/* Background Glow */}

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
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40"
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
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-yellow-100 blur-3xl opacity-40"
      />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#0EA5B7] md:text-base">
            OUR PHILOSOPHY
          </p>

          <h2 className="text-4xl font-bold text-[#061B35] md:text-5xl lg:text-6xl">
            From Womb to Bloom
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#506D79] md:text-xl">
            Every stage of a child's journey deserves compassionate care,
            thoughtful innovation and unwavering family support. This is the
            heart of the Zensory ecosystem.
          </p>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(6,27,53,0.12)] md:p-5"
        >
          <Image
            src="/zens.jpeg"
            alt="Zensory - Womb to Bloom"
            width={1800}
            height={700}
            priority
            className="w-full rounded-[28px] object-cover"
          />

          {/* Soft Glow */}

          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-t from-white/5 via-transparent to-white/20" />
        </motion.div>

      </div>
    </section>
  );
}