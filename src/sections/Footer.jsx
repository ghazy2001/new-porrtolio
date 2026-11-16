import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
        <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline-offset-4 hover:underline">
          Resume (HTML)
        </a>
        <span>•</span>
        <a href="/Mahmoud_Ghazy_Resume.pdf" download="Mahmoud_Ghazy_Resume.pdf" className="hover:text-white transition-colors underline-offset-4 hover:underline">
          CV (PDF)
        </a>
        <span>•</span>
        <p>© 2026 Mahmoud GhaZy. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
