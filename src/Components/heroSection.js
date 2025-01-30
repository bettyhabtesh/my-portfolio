import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegramPlane, faSlack, faBehance } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="hero" className="bg-black text-white h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:p-10">
        {/* Logo */}
        <div className="text-4xl font-palette-mosaic text-[#F3AFF3] ml-4 md:ml-20">BH</div>

        {/* Menu Items for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <a href="#about" className="hover:text-[#F3AFF3] cursor-pointer">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#F3AFF3] cursor-pointer">Services</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#F3AFF3] cursor-pointer">Project</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#F3AFF3] cursor-pointer">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile & Tablet */}
        <div className="lg:hidden text-[#F3AFF3] text-2xl cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-4">
          <a href="#about" className="hover:text-[#F3AFF3] cursor-pointer" onClick={toggleMenu}>About</a>
          <a href="#services" className="hover:text-[#F3AFF3] cursor-pointer" onClick={toggleMenu}>Services</a>
          <a href="#projects" className="hover:text-[#F3AFF3] cursor-pointer" onClick={toggleMenu}>Project</a>
          <a href="#contact" className="hover:text-[#F3AFF3] cursor-pointer" onClick={toggleMenu}>Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col justify-center flex-grow p-6 md:p-10 lg:ml-96 lg:p-20 text-center lg:text-left">
        <p className="text-sm md:text-base text-[#F3AFF3] mb-2">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2">
          Bethelhem Habtamu
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-4">
          I am a frontend Developer.
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#E0E0E0] max-w-lg mx-auto lg:mx-0">
          I love combining aesthetics with functionality to build smooth, engaging digital experiences that connect with users. Welcome to my portfolio!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
          <a href="https://awura.slack.com/team/U063R5N60US" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors">
            <FontAwesomeIcon icon={faSlack} />
          </a>
          <a href="https://www.linkedin.com/in/bethelhem-habtamu-b9b637261/" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/bettyhabtesh" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://t.me/betty_habtesh" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="https://www.behance.net/bethelhhabtamu" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors">
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
