import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [hasShownJoke, setHasShownJoke] = useState(false);

  const sectionRef = useRef(null);

  // Easter Egg: Show joke when user first scrolls to Contact
  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownJoke) {
            setHasShownJoke(true); // Mark as shown
            // Wait 3 seconds before showing
            setTimeout(() => {
              setShowJoke(true);
              // Hide after 3 seconds
              setTimeout(() => {
                setShowJoke(false);
              }, 3000);
            }, 3000);
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of section is visible
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasShownJoke]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID.trim(),
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID.trim(),
        {
          from_name: formData.name,
          to_name: "Mahmoud GhaZy",
          from_email: formData.email,
          to_email: "mahmod.ghazy@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY.trim(),
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={60}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Easter Egg Joke - Left Side */}
      {showJoke && (
        <div
          className="absolute left-10 top-1/2 -translate-y-1/2 z-50 animate-in fade-in slide-in-from-left-5 duration-500"
          style={{
            animation: showJoke
              ? "slideInFade 0.5s ease-out forwards"
              : "slideOutFade 0.5s ease-in forwards",
          }}
        >
          <div className="relative group">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main card */}
            <div className="relative px-6 py-4 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-sm text-black rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-white/60 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <span className="text-2xl filter drop-shadow-sm">🤫</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                    Secret
                  </span>
                  <span className="text-sm font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
                    real project, fake clients
                  </span>
                </div>
              </div>

              {/* Speech bubble arrow with enhanced styling */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="rotate-45 w-4 h-4 bg-gradient-to-br from-white/95 to-gray-50/90 border-r border-b border-white/60 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateX(-30px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }
        
        @keyframes slideOutFade {
          from {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
          to {
            opacity: 0;
            transform: translateX(-30px) translateY(-50%);
          }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="ex., Mahmoud GhaZy"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="ex., mahmod.ghazy@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
