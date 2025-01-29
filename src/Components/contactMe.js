import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send the form data to EmailJS
      const response = await emailjs.send(
        "service_i0f9d2p", // Your EmailJS Service ID
        "template_6pu78yt", // Your EmailJS Template ID
        templateParams,
        "0Nsg8u8ZmYvpGMycH" // Your EmailJS User ID
      );

      if (response.status === 200) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("There was an error sending your message.");
      }
    } catch (error) {
      setResponseMessage("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-[#121212] p-6 md:p-8 text-white font-montserrat"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact me .</h1>
      <form
        className="flex flex-col w-full max-w-md md:max-w-2xl space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full md:w-1/2 h-12 md:h-16 bg-[#342b34] text-[#f3aff3] border-none rounded-lg p-4 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full md:w-1/2 h-12 md:h-16 bg-[#342b34] text-[#f3aff3] border-none rounded-lg p-4 focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="h-32 md:h-48 bg-[#342b34] text-[#f3aff3] border-none rounded-lg p-4 focus:outline-none resize-none w-full"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-24 bg-transparent text-[#f3aff3] border border-[#f3aff3] p-2 rounded-lg hover:bg-[#f3aff3] hover:text-[#121212] transition-colors"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-center text-[#F3AFF3]">{responseMessage}</p>
      )}
    </section>
  );
};

export default ContactMe;