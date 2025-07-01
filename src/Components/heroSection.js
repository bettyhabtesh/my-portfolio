import React, { useState } from "react"; 
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegramPlane, faSlack, faBehance } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.9,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="hero" className="bg-black text-white h-screen flex flex-col justify-between">
      <Helmet>
        <title>Bethelhem Habtamu | Frontend Developer</title>
        <meta name="description" content="Bethelhem Habtamu is a frontend developer who creates visually stunning, user-friendly digital experiences. Explore her portfolio and projects." />
        <meta property="og:title" content="Bethelhem Habtamu | Frontend Developer" />
        <meta property="og:description" content="Creating smooth, engaging user interfaces with a passion for design and usability." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
      </Helmet>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:p-10">
        <div className="text-4xl font-palette-mosaic text-[#F3AFF3] ml-4 md:ml-20">BH</div>
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-[#F3AFF3] cursor-pointer">About</a></li>
          <li><a href="#services" className="hover:text-[#F3AFF3] cursor-pointer">Services</a></li>
          <li><a href="#projects" className="hover:text-[#F3AFF3] cursor-pointer">Project</a></li>
          <li><a href="#contact" className="hover:text-[#F3AFF3] cursor-pointer">Contact</a></li>
        </ul>
        <div className="lg:hidden text-[#F3AFF3] text-2xl cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

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
        <motion.p
          className="text-sm md:text-base text-[#F3AFF3] mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Bethelhem Habtamu
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          I am a frontend Developer.
        </motion.h2>

        <motion.p
          className="text-xs sm:text-sm md:text-base lg:text-lg text-[#E0E0E0] max-w-lg mx-auto lg:mx-0"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          I love combining aesthetics with functionality to build smooth, engaging digital experiences that connect with users. Welcome to my portfolio!
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center lg:justify-start space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeInOut" }}
        >
          {[{
            href: "https://bethelhemhabtamu.slack.com/",
            icon: faSlack
          }, {
            href: "https://www.linkedin.com/in/bethelhem-habtamu-b9b637261/",
            icon: faLinkedin
          }, {
            href: "https://github.com/bettyhabtesh",
            icon: faGithub
          }, {
            href: "https://t.me/betty_habtesh",
            icon: faTelegramPlane
          }, {
            href: "https://www.behance.net/bethelhemhabtamu",
            icon: faBehance
          }].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#AA99AA]/[0.17] text-[#F3AFF3] text-2xl hover:bg-[#F3AFF3] hover:text-black transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
