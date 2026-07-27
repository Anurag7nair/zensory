"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Globe,
  AtSign,
  MapPin,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const exploreLinks = [
  "Journey",
  "Ecosystem",
  "Academy",
  "Zensory Nest",
  "Founder",
];

const contactInfo = [
  {
    icon: Phone,
    text: "+91 84840 94864",
    bg: "bg-[#EAFBFD]",
  },
  {
    icon: Globe,
    text: "www.zensory.co.in",
    bg: "bg-[#FFF8EB]",
  },
  {
    icon: AtSign,
    text: "@zensoryecosystem",
    bg: "bg-[#FFF1F7]",
  },
  {
    icon: MapPin,
    text: "NIBM Road, Pune",
    bg: "bg-[#EEF9F1]",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061B35] text-white">

      {/* Background Decoration */}

      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />

      <div className="container relative z-10 py-16 md:py-20 lg:py-24">

        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-3">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png"
              alt="Zensory"
              width={190}
              height={60}
              className="h-14 w-auto"
            />

            <p className="mt-7 max-w-md text-lg leading-8 text-white/70">
              Helping every child discover their strengths through therapy,
              technology and compassionate family partnerships. Together, we
              nurture brighter futures one milestone at a time.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <Heart
                  size={22}
                  className="text-[#F7C63D]"
                  fill="#F7C63D"
                />
              </div>

              <div>

                <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                  Every Child Matters
                </p>

                <p className="text-white/70">
                  Growing with care, confidence & joy.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Explore */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[4px] text-cyan-300">
              Explore
            </h3>

            <div className="space-y-5">

              {exploreLinks.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="group flex items-center gap-3 text-left text-lg text-white/70 transition-colors hover:text-white"
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />

                  {item}

                </motion.button>
              ))}

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[4px] text-cyan-300">
              Connect
            </h3>

            <div className="space-y-4">

              {contactInfo.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <item.icon
                      size={20}
                      className="text-[#0EA5B7]"
                    />
                  </div>

                  <span className="text-base text-white/80">
                    {item.text}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

          <p className="text-sm text-white/50 md:text-base">
            © 2026 Zensory. All Rights Reserved.
          </p>

          <p className="flex items-center justify-center gap-2 text-sm text-white/50 md:text-base lg:justify-end">
            Designed with

            <Heart
              size={16}
              className="text-[#F7C63D]"
              fill="#F7C63D"
            />

            for every child's journey.
          </p>

        </div>

      </div>

    </footer>
  );
}