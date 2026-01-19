import { OrbitingCircles } from "./OrbitingCircles";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiThreedotjs,
  SiBlender,
  SiCss3,
  SiHtml5,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa"; // Added FaReact import

// Assuming GeminiIcon is imported or defined elsewhere, as it's used in the skills array
// For example: import { GeminiIcon } from "./GeminiIcon";

import PropTypes from "prop-types";

const ViteIcon = ({ style, className }) => (
  <img src="/vite.svg" alt="Vite" className={className} style={style} />
);

ViteIcon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

const GsapIcon = ({ style, className }) => (
  <img
    src="/assets/logos/gsap.png"
    alt="GSAP"
    className={className}
    style={style}
  />
);

GsapIcon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export function Frameworks() {
  const skills = [
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiExpress, name: "Express", color: "#ffffff" },
    { icon: FaReact, name: "React", color: "#61DAFB" }, // Changed SiReact to FaReact
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, name: "R3F", color: "#61DAFB" }, // Added R3F with SiReact
    { icon: SiThreedotjs, name: "Three.js", color: "#ffffff" },
    { icon: GsapIcon, name: "GSAP", color: "" },
    // Assuming GeminiIcon is defined or imported
    { icon: SiBlender, name: "Blender", color: "#F5792A" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: ViteIcon, name: "Vite", color: "" }, // Changed Vite to use ViteIcon
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <skill.icon
            key={index}
            className="w-10 h-10"
            style={{ color: skill.color }}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <skill.icon
            key={index}
            className="w-6 h-6"
            style={{ color: skill.color }}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
