import React from "react"; 
import illustration from "../Assets/illustration.svg";

const AboutMe = () => {
  return (
    <section className="bg-[#221922] text-white py-10 px-10 flex flex-col md:flex-row items-center justify-center">
      {/* Image/Illustration */}
      <div className="flex justify-center md:justify-start mb-5 md:mb-0 md:mr-16">
        <img
          src={illustration} 
          alt="Illustration"
          className="w-80 h-80 md:w-[450px] md:h-[450px] -ml-5" // Increased width and height for desktop, shifted slightly left
        />
      </div>

      {/* About Me Content */}
      <div className="text-center md:text-left md:w-1/3">
        <h2 className="text-3xl font-bold mb-2">About me .</h2>
        <p className="text-[#F3AFF3] text-lg mb-4">UI/UX Designer and Frontend Developer</p>
        
        <p className="text-[#E0E0E0] mb-8">
          Random saying could be harmful to anyone for any place at anytime.
          Random saying could be harmful to anyone for any place at anytime.
          Random saying could be harmful to anyone for any place at anytime.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-10"> {/* Increased spacing between buttons */}
          <button className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors">
            Contact Me
          </button>
          <button className="border border-[#F3AFF3] text-[#F3AFF3] py-2 px-6 rounded-md hover:bg-[#F3AFF3] hover:text-black transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
