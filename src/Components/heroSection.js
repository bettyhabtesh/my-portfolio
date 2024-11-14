import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegramPlane, faSlack } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-black text-white h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-10">
        {/* Logo */}
        <div className="text-4xl font-palette-mosaic text-[#F3AFF3] ml-20">BH</div>

        {/* Menu Items */}
        <ul className="flex space-x-8 text-lg">
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
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col justify-center flex-grow p-6 md:p-20 ml-96">
        <p className="text-lg text-[#F3AFF3] mb-2">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Bethelhem Habtamu</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">I am a frontend Developer.</h2>
        <p className="text-[#E0E0E0] max-w-lg">
    I love combining aesthetics with functionality to build smooth, engaging digital experiences that connect with users. Welcome to my portfolio!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-8">
          <a
            href="https://awura.slack.com/team/U063R5N60US"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faSlack} />
          </a>
          <a
            href="https://www.linkedin.com/in/bethelhem-habtamu-b9b637261/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/bettyhabtesh"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://t.me/betty_habtesh"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;