"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function WeekendPlay() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-gradient-to-b from-[#E6FBF5] to-[#C9F0DF] px-6 py-16 text-center md:px-10 md:py-20 lg:px-16 lg:py-24"
        >

          {/* Floating Dots */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#F6AB1A] md:left-16 md:top-12 md:h-3 md:w-3 lg:left-24 lg:top-14"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute left-6 top-20 h-2 w-2 rounded-full bg-[#007B8F] md:left-12 md:top-24 lg:left-16 lg:top-28"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-8 top-10 h-2 w-2 rounded-full bg-[#007B8F] md:right-14 md:top-16 md:h-3 md:w-3 lg:right-20 lg:top-20"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute right-12 top-24 h-2 w-2 rounded-full bg-[#F6AB1A] md:right-24 md:top-28 lg:right-32 lg:top-36"
          />

          {/* Heading */}

          <p className="mb-4 text-xs md:text-sm lg:text-lg font-bold uppercase tracking-[3px] md:tracking-[5px] text-[#2C8B34]">
            WEEKEND INCLUSIVE PLAY
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#071B35]">
            "Where every child belongs,
            <br className="hidden sm:block" />
            plays, learns, and grows together."
          </h2>

          <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
            <Button>
              Join This Weekend
            </Button>
          </div>

          {/* Decorative Waves */}

          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
          >
            <path
              fill="#B8E8D0"
              d="M0,120 C250,40 420,180 720,130 C990,80 1160,170 1440,100 L1440,220 L0,220 Z"
            />
            <path
              fill="#97D7BA"
              d="M0,170 C280,110 520,210 760,170 C1040,130 1220,200 1440,150 L1440,220 L0,220 Z"
            />
          </svg>

        </motion.div>

      </div>
    </section>
  );
}