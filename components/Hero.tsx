"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#DDF5FF_0%,transparent_35%),radial-gradient(circle_at_top_right,#FFE9DC_0%,transparent_35%),radial-gradient(circle_at_bottom,#E8FFF3_0%,transparent_35%),linear-gradient(to_bottom,#FFFDF8,#FFF8F3)]">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[140px]" />

      <Sparkles className="absolute left-20 top-24 text-yellow-400/40" />
      <Sparkles className="absolute right-24 top-48 text-cyan-500/30" />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Sensory • Physical • Technology-led Therapy • Pune
            </p>

            <h1 className="text-5xl font-black leading-tight text-[#071A3D] md:text-6xl lg:text-7xl">

              Nurturing

              <br />

              Neurodiverse

              <span className="block bg-gradient-to-r from-cyan-500 via-sky-400 to-green-500 bg-clip-text text-transparent">
                Potential
              </span>

              <span className="mt-4 block text-3xl font-semibold text-[#071A3D] md:text-4xl">
                From Womb to Bloom
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Helping children thrive through sensory integration,
              occupational therapy, physical therapy and technology-led
              interventions while empowering parents throughout the journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-[#071A3D] shadow-lg transition hover:scale-105">
                Book Assessment
              </button>

              <button className="rounded-full border border-cyan-500 bg-white/80 px-8 py-4 font-semibold text-cyan-700 backdrop-blur transition hover:bg-white">
                Explore Programs
              </button>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              <div className="rounded-full bg-white px-5 py-3 shadow">
                🧠 Sensory Therapy
              </div>

              <div className="rounded-full bg-white px-5 py-3 shadow">
                ❤️ Parent Partnership
              </div>

              <div className="rounded-full bg-white px-5 py-3 shadow">
                💻 Technology-led
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[120px]" />

            {/* Replace with your own illustration */}
           
{/* RIGHT */}

{/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden lg:flex items-center justify-center"
>

  {/* Background Glow */}
  <div className="absolute h-[650px] w-[650px] rounded-full bg-gradient-to-br from-cyan-100/50 via-white to-orange-100/50 blur-[140px]" />

  {/* Mother Image */}
  <motion.img
    src="/mother.png"
    alt="Mother and Child"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10 w-[650px] xl:w-[720px] object-contain"
  />

</motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}