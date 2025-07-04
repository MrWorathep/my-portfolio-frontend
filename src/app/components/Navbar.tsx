import React, { useState } from "react";
import classNames from "classnames";
import Container from "./Container";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-screen z-50 shadow-md bg-neutral-900 text-gray-300 p-6 border-b border-neutral-800">
      <Container>
        <div className="flex justify-between w-full">
          <div className="monsieur-la-doulaise-regular text-5xl font-bold w-1/3">
            <a
              className="block w-full cursor-pointer hover:text-blue-500 transition"
              href="#home"
            >
              Worathep
            </a>
          </div>
          <div className="text-xl justify-around items-center w-2/3 font-normal gap-2 hidden lg:flex">
            {/* Desktop */}
            <a href="#project" className="hover:text-blue-500 transition">
              Project
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
            <a href="#about" className="hover:text-blue-500 transition">
              About me
            </a>
            <a href="#experience" className="hover:text-blue-500 transition">
              Experience
            </a>
            <a href="#education" className="hover:text-blue-500 transition">
              Education
            </a>
            <a href="#contract" className="hover:text-blue-500 transition">
              Contract
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {!menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <nav
          className={classNames(
            "lg:hidden flex flex-col gap-4 px-4 overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-screen opacity-100 mt-4": menuOpen,
              "max-h-0 opacity-0": !menuOpen,
            }
          )}
        >
          <a
            href="#project"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Project
          </a>
          <a
            href="#skills"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#about"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#experience"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#education"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contract"
            className="block hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contract
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
