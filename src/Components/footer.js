import React from "react"; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 px-4 flex justify-center bg-[#121212]">
      <div
        className="flex gap-12 w-full max-w-5xl justify-around text-center p-8"
        style={{
          background: "radial-gradient(circle, rgba(34,25,34,0.58) 0%, #342B34 100%)",
          borderRadius: "6rem",
        }}
      >
        {/* Address */}
        <div className="flex flex-col items-center text-[#f3aff3]">
          <FaMapMarkerAlt className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold text-white">Address</h3>
          <p className="text-sm">Addis Ababa, Ethiopia</p>
        </div>

        {/* Divider */}
        <div className="border-r-2 border-gray-600 h-20 hidden sm:block"></div>

        {/* Phone */}
        <div className="flex flex-col items-center text-[#f3aff3]">
          <FaPhoneAlt className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold text-white">Give Me a Call</h3>
          <p className="text-sm">+251-940-851-866</p>
        </div>

        {/* Divider */}
        <div className="border-r-2 border-gray-600 h-20 hidden sm:block"></div>

        {/* Email */}
        <div className="flex flex-col items-center text-[#f3aff3]">
          <FaEnvelope className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold text-white">Send Me a Message</h3>
          <p className="text-sm">bettynuriye@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
