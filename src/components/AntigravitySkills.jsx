import { useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSphere, Physics } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

const skills = [
  { name: "React 19", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Three.js", color: "#FFFFFF" },
  { name: "R3F", color: "#ff60fa" },
  { name: "GSAP", color: "#88CE02" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#000000" },
  { name: "Gemini", color: "#8E75B2" },
];

import PropTypes from "prop-types";

// ... (imports remain the same)

// Modified SkillBall to handle the Jump Joke
const AdvancedSkillBall = ({
  position,
  color,
  name,
  isAiSpeaking,
  isJokeActive,
}) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.6],
    linearDamping: 0.5,
    angularDamping: 0.5,
  }));

  const [hovered, setHovered] = useState(false);
  const { viewport, mouse } = useThree();
  const vec = new THREE.Vector3();

  // Trigger Jump when isJokeActive becomes true
  useEffect(() => {
    if (isJokeActive) {
      // APPLY IMPULSE UP
      api.applyImpulse([0, 5, 0], [0, 0, 0]);
    }
  }, [isJokeActive, api]);

  useFrame((state) => {
    if (!ref.current) return;
    vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0);
    const distance = ref.current.position.distanceTo(vec);
    const direction = new THREE.Vector3()
      .subVectors(ref.current.position, vec)
      .normalize();

    if (distance < 3.5) {
      const forceMag = (3.5 - distance) * 3;
      api.applyForce(
        [direction.x * forceMag, direction.y * forceMag, 0],
        [0, 0, 0],
      );
    }

    if (isAiSpeaking) {
      const time = state.clock.getElapsedTime();
      const bobForce = Math.sin(time * 15 + position[0]) * 3;
      api.applyForce([0, bobForce * 0.5, 0], [0, 0, 0]);
    }

    // Attractor
    const distToCenter = ref.current.position.distanceTo(
      new THREE.Vector3(0, 0, 0),
    );
    if (distToCenter > 5) {
      const dirToCenter = new THREE.Vector3(0, 0, 0)
        .sub(ref.current.position)
        .normalize();
      api.applyForce(
        [dirToCenter.x * 2, dirToCenter.y * 2, dirToCenter.z * 2],
        [0, 0, 0],
      );
    }
  });

  useEffect(() => {
    if (!ref.current) return; // Guard clause
    if (hovered) {
      document.body.style.cursor = "pointer";
      gsap.to(ref.current.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.3 });
      api.mass.set(2);
    } else {
      document.body.style.cursor = "auto";
      gsap.to(ref.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      api.mass.set(1);
    }
  }, [hovered, api, ref]); // Added ref here

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
      <Html position={[0, 0, 0.7]} center pointerEvents="none" transform>
        <div className="px-2 py-1 text-xs font-bold text-white bg-black/60 rounded-full backdrop-blur-md select-none whitespace-nowrap border border-white/10">
          {name}
        </div>

        {isJokeActive && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 text-center">
            <div className="relative px-3 py-2 bg-white text-black text-xs font-bold rounded-lg shadow-xl animate-bounce">
              &quot;psst... real project, fake clients 🤫&quot;
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
            </div>
          </div>
        )}
      </Html>
    </mesh>
  );
};

AdvancedSkillBall.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isAiSpeaking: PropTypes.bool,
  isJokeActive: PropTypes.bool,
};

// Main Export
const AntigravitySkillsScene = ({ isAiSpeaking }) => {
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [jokeIndex, setJokeIndex] = useState(null);

  useEffect(() => {
    const reset = () => {
      setLastInteractionTime(Date.now());
      setJokeIndex(null);
    };
    window.addEventListener("mousemove", reset);
    window.addEventListener("click", reset);
    window.addEventListener("keydown", reset);
    return () => {
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("click", reset);
      window.removeEventListener("keydown", reset);
    };
  }, []);

  // Check Idle
  useFrame(() => {
    if (!isAiSpeaking && jokeIndex === null) {
      if (Date.now() - lastInteractionTime > 10000) {
        // 10s idle
        const rnd = Math.floor(Math.random() * skills.length);
        setJokeIndex(rnd);
      }
    }
  });

  return (
    <Physics gravity={[0, 0, 0]} damping={0.1} angularDamping={0.1}>
      {skills.map((skill, i) => (
        <AdvancedSkillBall
          key={skill.name}
          {...skill}
          position={[(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, 0]}
          isAiSpeaking={isAiSpeaking}
          isJokeActive={i === jokeIndex}
        />
      ))}
    </Physics>
  );
};

AntigravitySkillsScene.propTypes = {
  isAiSpeaking: PropTypes.bool,
};

export default AntigravitySkillsScene;
