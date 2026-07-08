"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="bg-[#F5FCFB] py-16 md:py-24 lg:py-28">
      <div className="container">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-3 text-sm md:text-base lg:text-lg font-bold uppercase tracking-[4px] text-[#0A6077]">
              MEET OUR FOUNDER
            </p>

            <p className="mb-3 text-base md:text-lg font-semibold text-[#F6AB1A]">
              Lt Col (Retd)
            </p>

            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#061B35]">
              Rejitha Pillai
            </h2>

            <p className="text-base md:text-lg lg:text-xl leading-8 md:leading-9 lg:leading-10 text-[#315B6F]">
              Two decades of military discipline meet a deeply personal
              commitment to neurodiverse children. Rejitha founded
              Zensory in NIBM, Pune to bring that same rigor to
              physical and sensory therapy paired with thoughtful
              technology and parents treated as partners, not
              bystanders, in every session.
            </p>

            {/* Quote */}

            <motion.div
              whileHover={{ x: 5 }}
              className="mt-8 md:mt-10 rounded-2xl border-l-4 border-[#39A94A] bg-white p-5 md:p-6 lg:p-8 shadow-sm"
            >
              <p className="text-lg md:text-xl lg:text-2xl italic leading-8 md:leading-9 lg:leading-10 text-[#061B35]">
                “Discipline gave me structure. Motherhood gave me
                purpose. Zensory is where both come together.”
              </p>
            </motion.div>

          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-[32px]
                md:rounded-[40px]
                bg-gradient-to-br
                from-[#063746]
                via-[#0A5A6C]
                to-[#084D5D]
                shadow-2xl

                w-[280px]
                h-[280px]

                sm:w-[340px]
                sm:h-[340px]

                md:w-[400px]
                md:h-[400px]

                lg:w-[430px]
                lg:h-[430px]
              "
            >
              {/* Decorative Circles */}

              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute right-8 top-10 h-28 w-28 rounded-full border border-white/10" />
              <div className="absolute bottom-10 left-8 h-36 w-36 rounded-full border border-white/10" />
              <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full border border-white/10" />

              {/* Decorative Lines */}

              <svg
                className="absolute inset-0 h-full w-full opacity-15"
                viewBox="0 0 500 500"
              >
                <path
                  d="M0 100 Q250 0 500 100"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M0 220 Q250 130 500 220"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M0 340 Q250 250 500 340"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute h-44 w-44 md:h-60 md:w-60 rounded-full bg-cyan-300 blur-[90px]"
              />

              {/* Initials */}

              <motion.h1
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  relative
                  z-10
                  text-[80px]
                  sm:text-[100px]
                  md:text-[120px]
                  lg:text-[140px]
                  font-black
                  tracking-tight
                  text-white
                "
              >
                RP
              </motion.h1>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}