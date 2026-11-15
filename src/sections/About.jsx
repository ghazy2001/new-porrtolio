import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 overflow-hidden">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.3] sm:scale-[1.75] right-0 sm:-right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] pointer-events-none"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Mahmoud Ghazy</p>
            <p className="subtext">
              I am a product-minded Senior Frontend &amp; Full-Stack Engineer specializing in enterprise ERP web clients, 
              scalable B2B SaaS, and high-performance React &amp; TypeScript architectures.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative overflow-hidden"
          >
            <p className="flex items-end text-3xl font-bold text-gray-500 tracking-wider">
              ENTERPRISE &amp; ERP
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "10%" }}
              text="React 19"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "30%" }}
              text="TypeScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "45%" }}
              text="Odoo ERP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Next.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "8%", left: "20%" }}
              text="Zustand"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "18%", left: "40%" }}
              text="TanStack Query"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "50%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "15%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "5%", left: "5%" }}
              image="assets/logos/nodejs.png"
              className="w-20 sm:w-25"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 overflow-hidden">
          <div className="z-10 w-[60%] sm:w-[50%]">
            <p className="headtext">Time Zone &amp; Remote</p>
            <p className="subtext">
              Based in Egypt (UTC+2) • Available for Full-Time Remote Worldwide (Gulf, Europe, US)
            </p>
          </div>
          <figure className="absolute -right-12 -top-8 sm:-right-8 sm:-top-6 md:left-[30%] md:top-[10%] pointer-events-none md:pointer-events-auto overflow-hidden">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 overflow-hidden">
          <div className="z-10 w-full md:w-[50%] flex flex-col justify-center h-full">
            <p className="headText">Enterprise &amp; Financial Acumen</p>
            <p className="subtext">
              Combining 4 years of operational cash flow and accounting logic 
              with modern Frontend architectures to engineer mission-critical dashboards, 
              virtualized data tables, and bulletproof API integrations.
            </p>
          </div>
          <div className="hidden md:block absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 overflow-hidden pointer-events-none">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
