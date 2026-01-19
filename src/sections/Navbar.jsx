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

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`block overflow-hidden sm:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="p-5 bg-black/90 backdrop-blur-md">
          <NavItems />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
