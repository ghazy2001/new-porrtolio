import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onStarted }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            if (onStarted) onStarted();
          }, 350);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onStarted]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-4xl font-bold text-white mb-4 animate-pulse">
        Mahmoud GhaZy
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden relative">
        {/* Progress Bar Fill */}
        <div
          className="h-full bg-blue-500 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-400 mt-2 text-sm font-mono">
        {Math.round(progress)}% loaded
      </p>
    </div>
  );
};

export default LoadingScreen;
