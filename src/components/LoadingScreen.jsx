import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onStarted }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onStarted) onStarted();
    }, 300);
    return () => clearTimeout(timer);
  }, [onStarted]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 opacity-100 pointer-events-none">
      <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
        Mahmoud Ghazy
      </div>
      <p className="text-xs font-mono text-emerald-400">
        Enterprise Frontend Systems
      </p>
    </div>
  );
};

export default LoadingScreen;
