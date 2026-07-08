"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="container">

        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo */}

          <Image
            src="/logo.png"
            alt="Zensory"
            width={180}
            height={60}
            priority
            className="h-10 md:h-14 w-auto"
          />

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-5">

            <button className="flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-lg font-semibold text-[#061A33] transition hover:border-[#F6AB1A]">

              <Phone size={18} />

              84840 94864

            </button>

            <Button>
              Book an Assessment
            </Button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border p-2 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: .25 }}
            className="border-t bg-white lg:hidden"
          >
            <div className="container py-6">

              <div className="flex flex-col gap-4">

                <button className="flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 font-semibold">

                  <Phone size={18} />

                  Call · 84840 94864

                </button>

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