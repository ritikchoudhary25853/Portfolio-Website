import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { Link } from "react-router-dom";
import TextType from "./Animation/TextType";
import TrueFocus from "./Animation/TrueFocus";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center 
                 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 
                 text-white"
    >
      <motion.div
        className="text-center px-4 sm:px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Profile Image */}
        <motion.div
          className="flex justify-center mb-5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.img
            src={profileImg}
            alt="Ritik Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 
                       rounded-full object-cover border-4 
                       border-indigo-500 shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Greeting */}
        <p className="text-indigo-400 text-base sm:text-lg mb-2">
          Hi, I’m Ritik 👋
        </p>

        {/* Title */}
        <TrueFocus
        className="text-3xl sm:text-xl md:text-5xl font-bold text-white"
          sentence="Frontend Developer"
          blurAmount={3}
          borderColor="#5227FF"
          animationDuration={0.5}
          pauseBetweenAnimations={2}
        />

        {/* Description */}
        <div className="mt-6">
          <TextType
            className="text-gray-300 font-medium text-sm sm:text-base md:text-lg"
            text={[
              "I’m a passionate frontend developer focused on building",
              "responsive and user-friendly web applications."
            ]}
            typingSpeed={40}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 mb-8">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs sm:text-sm 
                           bg-white/10 rounded-full backdrop-blur
                           hover:bg-indigo-500/30 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-indigo-500 hover:bg-indigo-600 
                       px-6 py-3 rounded-xl font-medium"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-white/30 hover:bg-white/10 
                       px-6 py-3 rounded-xl font-medium"
          >
            Contact Me
          </Link>

          <a
            href="/Resumemorelatest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:bg-white/10 
                       px-6 py-3 rounded-xl font-medium"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
