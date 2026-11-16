import { useState, useEffect } from "react";

const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Work", href: "#work" },
  { id: 4, name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      let currentSection = "#home";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          if (scrollPos >= section.offsetTop) {
            currentSection = link.href;
          }
        }
      }

      // Update active link state
      setActiveLink(currentSection);

      // Update browser URL hash without scrolling
      if (window.location.hash !== currentSection) {
        window.history.replaceState(null, "", currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const NavItems = () => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a
            href={item.href}
            className={`nav-link ${activeLink === item.href ? "text-white" : "text-neutral-400"}`}
            onClick={() => handleNavClick(item.href)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`fixed inset-x-0 z-50 w-full transition-all duration-500 ${hasScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            MG
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex items-center gap-5">
            <NavItems />
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`block overflow-hidden sm:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="p-5 bg-black/90 backdrop-blur-md flex flex-col gap-3">
          <NavItems />
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white border border-white/20 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
            >
              <span>View Resume (Interactive)</span>
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/Mahmoud_Ghazy_Resume.pdf"
              download="Mahmoud_Ghazy_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-black bg-white rounded-lg hover:bg-neutral-200 transition-all"
            >
              <span>Download CV (PDF)</span>
              <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
