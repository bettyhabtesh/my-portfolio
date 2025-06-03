import React from "react";
import { Helmet } from "react-helmet";
import output from "../Assets/output.png";
import cvFile from "../Assets/BethelhemHabtamuOfficial.pdf";

const AboutMe = () => {
  const handleScrollToContact = () => {
    // Scroll to the ContactMe section with smooth behavior
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* Image/Illustration */}
        <div className="flex justify-center md:justify-start mb-5 md:mb-0 md:mr-16">
          <img
            src={output}
            alt="Illustration"
            className="w-80 h-80 md:w-[450px] md:h-[450px] -ml-5"
          />
        </div>

        {/* About Me Content */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-3xl font-bold mb-2">About me .</h2>
          <p className="text-[#F3AFF3] text-lg mb-4">
            UI/UX Designer and Frontend Developer
          </p>

          <p className="text-[#E0E0E0] mb-8">
            I’m a UI/UX designer and frontend React developer with a focus on
            creating seamless, user-centered experiences. I’m passionate about
            blending design and functionality to craft digital solutions that
            are both beautiful and intuitive. My work is influenced by
            Ethiopia’s vibrant culture, and I’m always eager to learn, grow,
            and take on new challenges. Let’s connect and bring ideas to life!
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-10">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
