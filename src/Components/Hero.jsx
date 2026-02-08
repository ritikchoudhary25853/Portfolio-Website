import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // adjust path if needed
import { Link } from "react-router-dom";
import TextType from "./Animation/TextType";
import TrueFocus from "./Animation/TrueFocus";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white"
    >
      <motion.div
        className="text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Floating Profile Image */}
        <motion.div
          className="flex justify-center mb-6"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={profileImg}
            alt="Ritik Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="text-indigo-400 text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Hi, I’m Ritik 👋
        </motion.p>
              
        <TrueFocus 
        sentence="Frontend Developer"
        manualMode={false}
        blurAmount={3.5}
        borderColor="#5227FF"
        animationDuration={0.5}
        pauseBetweenAnimations={2}
        />
      
        <TextType
           className="text-gray-300 font-bold text-lg md:text-xl mt-10 mb-8"
            text={["I’m a passionate frontend developer focused on building responsive", "user-friendly web applications using modern frontend technologies."]}
            typingSpeed={40}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={20}
            variablespeedenabled={"false"}
            variablespeedmin={60}
            variablespeedmax={120}
            cursorBlinkDuration={0.5}
          />


        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur hover:bg-indigo-500/30 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

       {/* Buttons */}
<motion.div
  className="flex justify-center gap-4 flex-wrap"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  <Link
    to="/projects"
    className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium"
  >
    View Projects
  </Link>

  <Link
    to="/contact"
    className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-medium"
  >
    Contact Me
  </Link>

  <a
    href="/Resumemorelatest.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-medium"
  >
    View Resume
  </a>
   </motion.div>
   </motion.div>

         
    </section>
  );
};

export default Hero;


