import React from "react";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};


const Services = () => {
  return (
    <section id="services" className="bg-[#111] text-white py-20 px-10">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Services .</h2>
      </motion.div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {[{
          icon: <FaPaintBrush className="text-[#F3AFF3] text-3xl" />,
          title: "UI/UX Design",
          desc: "I design engaging and user-friendly interfaces with a strong focus on user experience, ensuring intuitive navigation and seamless interaction across all platforms."
        }, {
          icon: <FaLaptopCode className="text-[#F3AFF3] text-3xl" />,
          title: "Frontend Development",
          desc: "I build responsive and high-performance websites using modern frontend technologies, with expertise in React.js, HTML, CSS, and JavaScript."
        }, {
          icon: <FaMobileAlt className="text-[#F3AFF3] text-3xl" />,
          title: "Responsive Web Design",
          desc: "I create websites that adapt to any screen size, ensuring an optimal experience whether on desktop, tablet, or mobile."
        }].map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#221922] p-8 rounded-md text-center flex flex-col items-center md:w-1/3"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="bg-[#342B34] p-4 rounded-full mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-[#E0E0E0]">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
