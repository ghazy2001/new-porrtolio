import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import InteractiveAstronautScene from "../components/InteractiveAstronautScene";

const Hero = () => {
  return (
    <section
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
      id="home"
    >
      <HeroText />
      <ParallaxBackground />
      <div className="absolute inset-0 w-full h-full">
        <InteractiveAstronautScene />
      </div>
    </section>
  );
};

export default Hero;
