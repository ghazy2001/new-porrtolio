import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Environment } from "@react-three/drei";
import { Astronaut } from "./Astronaut";
import { chatWithGemini } from "../services/gemini";

const InteractiveAstronautScene = () => {
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [volume, setVolume] = useState(1); // 0 to 1 (0% to 100%)
  const [isListening, setIsListening] = useState(false);
  const [voices, setVoices] = useState([]);

  // Store current utterance reference
  const currentUtteranceRef = useRef(null);
  const lastTextRef = useRef("");

  // Voice Synthesis Reference
  const synth = window.speechSynthesis;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      setVoices(synth.getVoices());
    };
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }, [synth]);

  // Restart speech when volume changes (debounced slightly to prevent stutter on drag)
  useEffect(() => {
    if (synth.speaking && lastTextRef.current) {
      // Clear existing timeout to debounce
      const timer = setTimeout(() => {
        if (synth.speaking) {
          speak(lastTextRef.current);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  // Detect if text contains Arabic characters
  const isArabic = (text) => {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text);
  };

  const speak = (text) => {
    if (synth.speaking) {
      synth.cancel(); // Cancel current speech
    }

    if (volume === 0) return; // Silent if volume is 0

    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.volume = volume;
    utterThis.rate = 1;
    utterThis.pitch = 1;

    // Set language and voice
    if (isArabic(text)) {
      utterThis.lang = "ar-SA";

      // Debug: Log voices to see what is available
      console.log(
        "Available Arabic Voices:",
        voices.filter((v) => v.lang.includes("ar")).map((v) => v.name),
      );

      const arabicVoices = voices.filter((v) => v.lang.includes("ar"));

      const maleArabicVoice =
        arabicVoices.find((v) => v.name.includes("Male")) ||
        arabicVoices.find((v) => v.name.includes("Maged")) ||
        arabicVoices.find((v) => v.name.includes("Naayf"));

      if (maleArabicVoice) {
        utterThis.voice = maleArabicVoice;
      } else if (arabicVoices.length > 0) {
        // Fallback: Use whatever Arabic voice we have
        utterThis.voice = arabicVoices[0];

        // HACK: If we didn't find a male voice, significantly lower the pitch
        // to make a female voice sound deeper/more masculine.
        if (
          utterThis.voice.name.includes("Hoda") ||
          utterThis.voice.name.includes("Female")
        ) {
          utterThis.pitch = 0.5; // Deep voice
          utterThis.rate = 0.9; // Slightly slower
        } else {
          utterThis.pitch = 0.6; // General deep pitch for fallback
        }
      }
    } else {
      utterThis.lang = "en-US";
    }

    // Store reference
    currentUtteranceRef.current = utterThis;
    lastTextRef.current = text;

    utterThis.onstart = () => setIsAiSpeaking(true);
    utterThis.onend = () => {
      setIsAiSpeaking(false);
      currentUtteranceRef.current = null;
    };

    synth.speak(utterThis);
  };

  const handleMicClick = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice input. Try Chrome!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      // Optional: Auto-submit on voice end? Let's verify first.
    };

    recognition.start();
  };

  const handleAstronautClick = () => {
    setIsInputVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setLoading(true);
    // 1. Send to Gemini
    const response = await chatWithGemini(inputText);

    setLoading(false);
    setInputText("");
    // setIsInputVisible(false); // Keep open for conversation flow

    // 2. Speak Response
    speak(response);
  };

  if (isMobile) return null;

  return (
    <section className="relative w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} shadows dpr={[1, 2]}>
        <Suspense
          fallback={
            <Html>
              <div className="text-white">Loading Space...</div>
            </Html>
          }
        >
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* AntigravitySkillsScene removed by user request */}

          {/* The Astronaut Agent */}
          <Astronaut
            scale={isMobile ? 0.25 : 0.4}
            position={isMobile ? [0, -1.5, 0] : [2, -1, 0]}
            rotation={[0, -0.5, 0]}
            onClick={handleAstronautClick}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "auto")}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>

      {/* HTML Overlay for Input */}
      {isInputVisible && (
        <div className="absolute inset-x-0 flex items-center justify-center gap-3 bottom-20">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-2 rounded-full shadow-2xl bg-black/80 backdrop-blur-md border border-white/20 animate-fade-in-up"
          >
            <input
              type="text"
              autoFocus
              value={inputText}
              placeholder={
                isListening ? "Listening..." : "Ask the Astronaut..."
              }
              onChange={(e) => setInputText(e.target.value)}
              className="px-4 py-2 text-white bg-transparent border-none outline-none w-60 placeholder-white/50"
              disabled={loading}
            />

            {/* Volume Control Slider */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setVolume(volume === 0 ? 1 : 0)}
                className="flex items-center justify-center w-7 h-7 text-xs transition-colors rounded-full bg-white/10 hover:bg-white/20"
                title={volume === 0 ? "Unmute" : "Mute"}
              >
                {volume === 0 ? "🔇" : "🔊"}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={(e) => setVolume(e.target.value / 100)}
                className="w-16 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                title="Volume"
              />
            </div>

            {/* Mic Button - Inside */}
            <button
              type="button"
              onClick={handleMicClick}
              className={`flex items-center justify-center w-9 h-9 transition-all rounded-full ${isListening ? "bg-red-500 text-white animate-pulse" : "bg-white/10 text-white hover:bg-white/20"}`}
              title="Speak"
            >
              {isListening ? "🎤" : "🎙️"}
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-full hover:bg-gray-200 disabled:opacity-50 text-black font-bold"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-black rounded-full border-t-transparent animate-spin" />
              ) : (
                <span className="text-xl leading-none pt-1">➤</span>
              )}
            </button>
          </form>

          {/* Close Overlay Button */}
          <button
            onClick={() => setIsInputVisible(false)}
            className="absolute text-white/50 hover:text-white bottom-[-30px] text-xs"
          >
            Close Chat
          </button>
        </div>
      )}

      {/* Hint to Click */}
      {!isInputVisible && !isAiSpeaking && (
        <div className="absolute text-sm text-center text-white/30 bottom-10 inset-x-0 pointer-events-none">
          Click the Astronaut to chat
        </div>
      )}
    </section>
  );
};

export default InteractiveAstronautScene;
