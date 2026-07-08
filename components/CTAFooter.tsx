"use client";

import { motion } from "framer-motion";
import { Phone, Globe, MapPin, ArrowRight } from "lucide-react";

export default function CTAFooter() {
  return (
    <section className="bg-gradient-to-br from-[#0A7B85] to-[#12B4C4] py-16 md:py-20 lg:py-24">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
        >

          {/* Left Side */}

          <div className="max-w-2xl">

            <p className="mb-4 text-sm md:text-base font-semibold uppercase tracking-[4px] text-white/80">
              BOOK AN ASSESSMENT
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Ready to begin?
            </h2>

            <p className="mt-5 text-lg md:text-xl lg:text-2xl leading-8 text-white/90">
              Book your child's assessment today and take the first step
              towards a personalised therapy journey.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <Phone size={20} />
                </div>

                <span className="text-base md:text-lg lg:text-xl">
                  +91 84840 94864
                </span>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <Globe size={20} />
                </div>

                <span className="text-base md:text-lg lg:text-xl">
                  www.zensory.co.in
                </span>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <MapPin size={20} />
                </div>

                <span className="text-base md:text-lg lg:text-xl">
                  NIBM Road, Pune
                </span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-start lg:justify-end">

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-white bg-white/10 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg lg:text-xl font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0A7B85]"
            >
              Book Assessment

              <ArrowRight size={20} />

            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}