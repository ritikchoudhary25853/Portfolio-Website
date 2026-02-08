import React from "react";
import { motion } from "framer-motion";
import SplitText from "./Animation/SplitText";

const handleAnimationComplete = () => {
  console.log("SplitText animation completed!");
};

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-20 min-h-screen flex items-center
                 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Heading */}
        <motion.h3
          className="text-3xl sm:text-4xl lg:text-5xl 
                     font-bold mb-8 text-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h3>

        {/* Paragraph 1 */}
        <SplitText
          text="I am Ritik, a frontend developer passionate about building clean, responsive, and user-focused web applications. I enjoy transforming ideas into interactive digital experiences using modern frontend technologies."
          className="text-base sm:text-lg md:text-xl 
                     text-white font-medium leading-relaxed"
          delay={8}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* Paragraph 2 */}
        <div className="mt-6">
          <SplitText
            text="I have hands-on experience with React, JavaScript, and Tailwind CSS, and I enjoy working with reusable components, hooks, and APIs. I’m always eager to learn new tools and improve my problem-solving skills."
            className="text-base sm:text-lg md:text-xl 
                       text-white font-medium leading-relaxed"
            delay={8}
            duration={1.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
        </div>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Context API",
            "Redux Toolkit",
            "Git & GitHub",
            "REST APIs",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs sm:text-sm 
                         bg-white/10 text-white 
                         rounded-full backdrop-blur
                         hover:bg-indigo-500/30 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
