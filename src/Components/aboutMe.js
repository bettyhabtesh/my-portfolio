import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import output from "../Assets/output.png";
import cvFile from "../Assets/BethelhemHabtamuOfficial.pdf";

const AboutMe = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.9,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>About Me | Bethelhem Habtamu</title>
        <meta
          name="description"
          content="I’m Bethelhem Habtamu, a UI/UX designer and frontend React developer passionate about crafting intuitive, user-focused experiences inspired by Ethiopian culture."
        />
        <meta
          name="keywords"
          content="Bethelhem Habtamu, UI/UX Designer, Frontend Developer, React Developer, Ethiopia, Portfolio"
        />
        <meta name="author" content="Bethelhem Habtamu" />
        <meta property="og:title" content="About Me | Bethelhem Habtamu" />
        <meta
          property="og:description"
          content="UI/UX designer and frontend developer passionate about crafting intuitive digital experiences."
        />
        <meta property="og:image" content={output} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="about"
        className="bg-[#221922] text-white py-10 px-10 flex flex-col md:flex-row items-center justify-center"
      >
        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-start mb-5 md:mb-0 md:mr-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <img
            src={output}
            alt="Illustration"
           className="w-68 sm:w-88 md:w-[460px] md:h-[460px] object-contain"  />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h2
            className="text-3xl font-bold mb-2"
            variants={fadeUp}
            custom={0}
          >
            About me .
          </motion.h2>

          <motion.p
            className="text-[#F3AFF3] text-lg mb-4"
            variants={fadeUp}
            custom={1}
          >
            UI/UX Designer and Frontend Developer
          </motion.p>

          <motion.p
            className="text-[#E0E0E0] mb-8"
            variants={fadeUp}
            custom={2}
          >
            I’m a UI/UX designer and frontend React developer with a focus on
            creating seamless, user-centered experiences. I’m passionate about
            blending design and functionality to craft digital solutions that
            are both beautiful and intuitive. My work is influenced by
            Ethiopia’s vibrant culture, and I’m always eager to learn, grow,
            and take on new challenges. Let’s connect and bring ideas to life!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center md:justify-start space-x-10"
            variants={fadeUp}
            custom={3}
          >
            <button
              onClick={handleScrollToContact}
              className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors"
            >
              Contact Me
            </button>
            <a
              href={cvFile}
              download="BethelhemHabtamuCV.pdf"
              className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
