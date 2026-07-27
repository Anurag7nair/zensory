"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Button from "./Button";

export default function CTAFooter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E9FBF7] via-[#F8FFFC] to-[#FFF8EF] py-20 md:py-24 lg:py-32">

      {/* Background Blobs */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-50" />

      <div className="container relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="grid items-center gap-14 lg:grid-cols-2"
        >

          {/* Left */}

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#0A8FA3]">
              BOOK AN ASSESSMENT
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#061B35] sm:text-5xl lg:text-6xl">
              Every little step
              <br />
              deserves the right support.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#45697B] md:text-xl">
              Book your child's assessment today and begin a personalised
              journey with therapists who believe every child learns,
              grows and shines differently.
            </p>

            <div className="mt-10">
              <Button>
                Book Assessment
              </Button>
            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 84840 94864",
                color: "bg-[#EAFBFD]",
              },
              {
                icon: Globe,
                title: "Website",
                value: "www.zensory.co.in",
                color: "bg-[#FFF8EB]",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "NIBM Road, Pune",
                color: "bg-[#EEF9F1]",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="flex items-center gap-5 rounded-[28px] border border-white bg-white/80 p-6 shadow-lg backdrop-blur"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <item.icon
                    size={28}
                    className="text-[#0A8FA3]"
                  />
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[3px] text-[#8AA5B0]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xl font-semibold text-[#061B35]">
                    {item.value}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}