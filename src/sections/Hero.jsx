import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 c-space"
      id="home"
    >
      <ParallaxBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
