import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? myProjects : myProjects.slice(0, 5);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {visibleProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {!showAll && (
        <div className="flex justify-center w-full mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            View All Projects
            <img
              src="/assets/arrow-right.svg"
              alt="arrow"
              className="w-4 h-4"
            />
          </button>
        </div>
      )}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
