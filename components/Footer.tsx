"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Globe,
  AtSign,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061B2B] text-white">
      <div className="container py-14 md:py-20">

        {/* Top Section */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png"
              alt="Zensory"
              width={180}
              height={60}
              className="h-12 w-auto md:h-14"
            />

            <p className="mt-6 max-w-sm text-base leading-8 text-white/70 md:text-lg">
              Nurturing neurodiverse potential through therapy,
              technology, and parent partnership in NIBM,
              Pune.
            </p>
          </motion.div>

          {/* Explore */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[4px] text-cyan-300">
              Explore
            </h3>

            <ul className="space-y-4">

              {[
                "Journey",
                "Ecosystem",
                "Academy",
                "Zensory Nest",
                "Founder",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-base text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-white md:text-lg"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Connect */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[4px] text-cyan-300">
              Connect
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-white/75">
                <Phone size={18} />
                <span className="text-base md:text-lg">
                  +91 84840 94864
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/75">
                <Globe size={18} />
                <span className="text-base md:text-lg">
                  www.zensory.co.in
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/75">
                <AtSign size={18} />
                <span className="text-base md:text-lg">
                  @zensoryecosystem
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/75">
                <MapPin size={18} />
                <span className="text-base md:text-lg">
                  NIBM Road, Pune
                </span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">

          <p className="text-sm text-white/50 md:text-base">
            © 2026 Zensory. All Rights Reserved.
          </p>

          <p className="text-sm text-white/50 md:text-base">
            Designed with ❤️ for every child's journey.
          </p>

        </div>

      </div>
    </footer>
  );
}