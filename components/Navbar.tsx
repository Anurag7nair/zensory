"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9F0EF] bg-[#FFFDF9]/90 backdrop-blur-xl">
      <div className="container">

        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src="/logo.png"
              alt="Zensory"
              width={190}
              height={60}
              priority
              className="h-10 md:h-14 w-auto"
            />
          </motion.div>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-4">

            <motion.a
              href="tel:+918484094864"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              className="flex items-center gap-3 rounded-full border-2 border-[#D8E8E6] bg-white px-7 py-3 text-lg font-semibold text-[#083A52] shadow-sm transition hover:border-[#0EA5B7] hover:bg-[#F7FEFF]"
            >
              <Phone
                size={18}
                className="text-[#0EA5B7]"
              />

              +91 84840 94864
            </motion.a>

            <Button>
              Book an Assessment
            </Button>

          </div>

          {/* Mobile Button */}

          <motion.button
            whileTap={{ scale: .92 }}
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-[#D7E7E5] bg-white p-2 shadow-sm lg:hidden"
          >
            {open ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </motion.button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: .25,
            }}
            className="border-t border-[#E6F1F0] bg-[#FFFDF9] lg:hidden"
          >
            <div className="container py-6">

              <div className="flex flex-col gap-4">

                <motion.a
                  href="tel:+918484094864"
                  whileTap={{ scale: .98 }}
                  className="flex items-center justify-center gap-3 rounded-full border border-[#D7E7E5] bg-white py-4 text-lg font-semibold text-[#083A52]"
                >
                  <Phone
                    size={18}
                    className="text-[#0EA5B7]"
                  />

                  +91 84840 94864

                </motion.a>

                <Button className="w-full">
                  Book an Assessment
                </Button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}