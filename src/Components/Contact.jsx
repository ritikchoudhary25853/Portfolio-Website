import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white "
    >
      <div className="max-w-6xl mx-auto px-6 mt-4 h-full w-full">
        {/* Heading */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h3>

        {/* Form */}
        <motion.form
          className="max-w-md space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Name */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 focus:bg-gray-800/80 focus:outline-none transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          {/* Email */}
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 focus:bg-gray-800/80 focus:outline-none transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          {/* Message */}
          <motion.textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 focus:bg-gray-800/80 focus:outline-none transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          {/* Button */}
          <motion.button
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
