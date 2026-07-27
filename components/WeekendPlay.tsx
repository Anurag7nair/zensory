"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Stars } from "lucide-react";
import Button from "./Button";

export default function WeekendPlay() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FFFD] to-[#FFFDF8] py-20 md:py-28 lg:py-36">

      {/* Background Glow */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40"
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
        className="absolute right-0 top-32 h-80 w-80 rounded-full bg-yellow-100 blur-3xl opacity-40"
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

      <div className="container relative z-10">

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
          className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/75 px-8 py-16 text-center shadow-[0_25px_70px_rgba(6,27,53,0.08)] backdrop-blur-xl md:px-14 md:py-20 lg:px-20 lg:py-24"
        >

          {/* Decorative Blobs */}

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl opacity-60" />

          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-yellow-100 blur-3xl opacity-60" />

          {/* Floating Icons */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-8 top-8 hidden lg:block"
          >
            <Sparkles
              size={34}
              className="text-[#F7B733]"
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
            className="absolute right-10 top-10 hidden lg:block"
          >
            <Stars
              size={30}
              className="text-[#0EA5B7]"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5B7] to-[#57C45A] shadow-xl"
          >
            <Heart
              size={34}
              className="text-white"
              fill="white"
            />
          </motion.div>

          {/* Heading */}

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#0EA5B7] md:text-base lg:text-lg">
            WEEKEND INCLUSIVE PLAY
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-[#061B35] md:text-5xl lg:text-6xl">
            Where every child
            <span className="block bg-gradient-to-r from-[#0EA5B7] via-[#39B8D5] to-[#57C45A] bg-clip-text text-transparent">
              belongs, plays,
            </span>
            learns & grows together.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#506D79] md:text-xl">
            Inclusive play sessions designed to encourage confidence,
            friendships, creativity and joyful learning—bringing children
            and families together in a safe, welcoming environment.
          </p>

          {/* CTA */}

          <div className="mt-12 flex justify-center">
            <Button>
              Join This Weekend
            </Button>
          </div>

          {/* Bottom Decorative Waves */}

          <svg
            className="absolute bottom-0 left-0 w-full opacity-50"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
          >
            <path
              fill="#DDF8F4"
              d="M0,120 C220,40 420,200 720,130 C980,70 1180,180 1440,100 L1440,240 L0,240 Z"
            />

            <path
              fill="#C6F0E6"
              d="M0,180 C250,110 480,220 760,180 C1040,140 1210,210 1440,150 L1440,240 L0,240 Z"
            />
          </svg>

        </motion.div>

      </div>

    </section>
  );
}