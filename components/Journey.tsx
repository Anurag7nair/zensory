"use client";

import JourneyCard from "./JourneyCard";

import {
  ScanSearch,
  Activity,
  Monitor,
  Heart,
  Smile,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    stage: "STAGE 1",
    title: "Assess & Map",
    description:
      "A play-based sensory and developmental assessment that charts your child's own constellation — how they sense, move, and connect.",
    icon: ScanSearch,
    color: "#00A6C7",
  },
  {
    stage: "STAGE 2",
    title: "Physical & Sensory Therapy",
    description:
      "Hands-on occupational, physical, speech and sensory integration therapy — the core of every child's plan.",
    icon: Activity,
    color: "#F4A621",
  },
  {
    stage: "STAGE 3",
    title: "Technology-Assisted Care",
    description:
      "Purposeful tech — interactive tools, progress tracking apps, and assistive communication aids — layered onto hands-on therapy.",
    icon: Monitor,
    color: "#7C4DFF",
  },
  {
    stage: "STAGE 4",
    title: "Parent Partnership",
    description:
      "Parents sit inside the session, not outside it — coached in real time so progress carries home.",
    icon: Heart,
    color: "#2C9A38",
  },
  {
    stage: "STAGE 5",
    title: "Inclusive Play",
    description:
      "Weekend play sessions and parent circles where every child belongs, exactly as they are.",
    icon: Smile,
    color: "#00A6C7",
  },
  {
    stage: "STAGE 6",
    title: "Bloom",
    description:
      "Not a finish line — a child who keeps growing, with progress reviewed and the plan reshaped every step of the way.",
    icon: Sparkles,
    color: "#F4A621",
  },
];

export default function Journey() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-24 text-center">

          <p className="mb-4 text-lg font-bold tracking-[5px] text-[#0A6077] uppercase">
            THE ZENSORY JOURNEY
          </p>

          <h2 className="mb-6 text-6xl font-bold text-[#061B35]">
            Six stages, one continuous path
          </h2>

          <p className="mx-auto max-w-4xl text-2xl leading-10 text-[#2B5B71]">
            Growth doesn't happen in a straight line of appointments — it
            unfolds in stages. Zensory walks beside your child and your family
            through each one.
          </p>

        </div>

        <div className="space-y-2">

          {stages.map((stage, index) => (
            <JourneyCard
              key={index}
              stage={stage.stage}
              title={stage.title}
              description={stage.description}
              Icon={stage.icon}
              color={stage.color}
              isLast={index === stages.length - 1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}