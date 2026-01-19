import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onStarted }) => {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // If loading is active, keep showing
    // If loading finishes (active = false) AND progress is 100, wait a bit then hide
    if (!active && progress === 100) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 800); // Small buffer to ensure smoothness
      return () => clearTimeout(timer);
    } else if (active) {
      setShow(true); // Re-show if new assets start loading (optional)
      if (onStarted) onStarted();
    }
  }, [active, progress, onStarted]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        !active && progress === 100
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div className="text-4xl font-bold text-white mb-4 animate-pulse">
        Mahmoud GhaZy
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden relative">
        {/* Progress Bar Fill */}
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-400 mt-2 text-sm">
        {Math.round(progress)}% loaded
      </p>
    </div>
  );
};

export default LoadingScreen;
