"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "references",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    activeSection === section
      ? "text-cyan-700 font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-800 transition-all"
      : "text-stone-800 hover:text-cyan-800 transition-colors";

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-100 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-2 sm:px-0">
        <div className="text-lg sm:text-xl font-bold tracking-wide text-cyan-700">
          Afrah<span className="text-stone-600"> Portfolio</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <a
                href="#home"
                className={linkClass("home")}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={linkClass("about")}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={linkClass("skills")}
                onClick={() => handleLinkClick("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={linkClass("experience")}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#references"
                className={linkClass("references")}
                onClick={() => handleLinkClick("references")}
              >
                References
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={linkClass("contact")}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md
             border border-slate-200 p-2 text-slate-700 hover:bg-slate-50"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <ul className="flex flex-col gap-2 px-5 py-3 text-sm font-medium">
            <li>
              <a
                href="#home"
                className={linkClass("home")}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={linkClass("about")}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={linkClass("experience")}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={linkClass("skills")}
                onClick={() => handleLinkClick("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#references"
                className={linkClass("references")}
                onClick={() => handleLinkClick("references")}
              >
                References
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={linkClass("contact")}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
