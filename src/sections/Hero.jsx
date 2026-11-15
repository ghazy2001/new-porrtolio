import HeroText from "../components/HeroText";
import HeroArchitectureCard from "../components/HeroArchitectureCard";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:py-0 c-space"
      id="home"
    >
      <ParallaxBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Positioning & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Right Column: Live Enterprise Telemetry & Architecture Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroArchitectureCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
