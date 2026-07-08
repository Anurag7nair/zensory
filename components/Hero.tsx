import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-[#FDF0E2]">
      <div className="container pt-14 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-10">

        {/* Subtitle */}

        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[3px] md:tracking-[5px] text-[#006A80]">
          Sensory, Physical & Technology-led Therapy · NIBM, Pune
        </p>

        {/* Heading */}

        <h1 className="mt-6 md:mt-8 max-w-6xl text-[#071B35] font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[82px]">
          Nurturing neurodiverse potential
          <br className="hidden sm:block" />
          <span className="block sm:inline">
            {" "}from womb to bloom
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 md:mt-10 max-w-3xl text-base sm:text-lg md:text-xl lg:text-[34px] leading-8 md:leading-9 lg:leading-[58px] text-[#14556A]">
          Zensory nurtures neurodiverse potential through hands-on
          physical and sensory therapy, thoughtfully applied
          technology, and parents as true partners in every
          session—not just observers.
        </p>

        {/* Buttons */}

        <div className="mt-10 md:mt-14 lg:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6">

          <Button className="w-full sm:w-auto">
            Book an Assessment
          </Button>

          <Button
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Explore the Ecosystem
          </Button>

        </div>

      </div>
    </section>
  );
}