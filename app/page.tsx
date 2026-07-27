import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Ecosystem from "@/components/Ecosystem";
import WhyChoose from "@/components/WhyChoose";
import Academy from "@/components/Academy";
import WeekendPlay from "@/components/WeekendPlay";
import Founder from "@/components/Founder";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import BrandStory from "@/components/Brandstory";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <BrandStory/>
      <Journey />
      <Ecosystem />
      <WhyChoose />
      <Academy />
      <WeekendPlay />
      <Founder />
      <CTAFooter />
      <Footer />
    </>
  );
}