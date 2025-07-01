import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-8 px-4 flex justify-center bg-[#121212]">
      <div
        className="flex flex-col sm:flex-row gap-12 sm:gap-8 w-full max-w-5xl justify-around text-center p-8"
        style={{
          background: "radial-gradient(circle, rgba(34,25,34,0.58) 0%, #342B34 100%)",
          borderRadius: "1.5rem",
        }}
      >
        {/* Address */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          className="flex flex-col items-center text-[#f3aff3]"
        >
          <motion.div whileHover="hover" variants={iconVariants}>
            <FaMapMarkerAlt className="text-4xl mb-2" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white">Address</h3>
          <p className="text-sm">Addis Ababa, Ethiopia</p>
        </motion.div>

        {/* Divider */}
        <div className="hidden sm:block border-r-2 border-gray-600 h-20"></div>

        {/* Phone */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          className="flex flex-col items-center text-[#f3aff3]"
        >
          <motion.div whileHover="hover" variants={iconVariants}>
            <FaPhoneAlt className="text-4xl mb-2" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white">Give Me a Call</h3>
          <p className="text-sm">+251-940-851-866</p>
        </motion.div>

        {/* Divider */}
        <div className="hidden sm:block border-r-2 border-gray-600 h-20"></div>

        {/* Email */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          className="flex flex-col items-center text-[#f3aff3]"
        >
          <motion.div whileHover="hover" variants={iconVariants}>
            <FaEnvelope className="text-4xl mb-2" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white">Send Me a Message</h3>
          <p className="text-sm">bettynuriye@gmail.com</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;