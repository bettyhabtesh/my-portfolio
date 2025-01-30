import React from "react";
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
    <section id="about" className="bg-[#221922] text-white py-10 px-10 flex flex-col md:flex-row items-center justify-center">
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
        <p className="text-[#F3AFF3] text-lg mb-4">UI/UX Designer and Frontend Developer</p>
        
        <p className="text-[#E0E0E0] mb-8">
        I’m a UI/UX designer and frontend React developer with a focus on creating seamless, user-centered experiences.I’m passionate about blending design and functionality to craft digital solutions that are both beautiful and intuitive. My work is influenced by Ethiopia’s vibrant culture, and I’m always eager to learn, grow, and take on new challenges. Let’s connect and bring ideas to life!
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-10">
          <button
            onClick={handleScrollToContact} // Trigger the scroll function
            className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            Contact Me
          </button>
          <a
            href={cvFile} // Link to CV file
            download="BethelhemHabtamuCV.pdf" // The file will be downloaded with this name
            className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}; 

export default AboutMe;