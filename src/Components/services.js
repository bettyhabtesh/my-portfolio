import React from "react";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"; // Assuming you're using FontAwesome icons

const Services = () => {
  return (
    <section id="services" className="bg-[#111] text-white py-20 px-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Services .</h2>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* UI/UX Design */}
        <div className="bg-[#221922] p-8 rounded-md text-center flex flex-col items-center md:w-1/3">
          <div className="bg-[#342B34] p-4 rounded-full mb-6">
            <FaPaintBrush className="text-[#F3AFF3] text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
          <p className="text-[#E0E0E0]">
            I design engaging and user-friendly interfaces with a strong focus on user experience, ensuring intuitive navigation and seamless interaction across all platforms.
          </p>
        </div>

        {/* Frontend Development */}
        <div className="bg-[#221922] p-8 rounded-md text-center flex flex-col items-center md:w-1/3">
          <div className="bg-[#342B34] p-4 rounded-full mb-6">
            <FaLaptopCode className="text-[#F3AFF3] text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
          <p className="text-[#E0E0E0]">
            I build responsive and high-performance websites using modern frontend technologies, with expertise in React.js, HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Responsive Web Design */}
        <div className="bg-[#221922] p-8 rounded-md text-center flex flex-col items-center md:w-1/3">
          <div className="bg-[#342B34] p-4 rounded-full mb-6">
            <FaMobileAlt className="text-[#F3AFF3] text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Responsive Web Design</h3>
          <p className="text-[#E0E0E0]">
            I create websites that adapt to any screen size, ensuring an optimal experience whether on desktop, tablet, or mobile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
