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
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          className="md:text-4xl lg:text-5xl font-bold mb-10 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h3>
        
        <SplitText
          text="I am Ritik, a frontend developer
          passionate about building clean, responsive, and user-focused web
          applications. I enjoy transforming ideas into interactive digital
          experiences using modern frontend technologies."
          className="text-2xl text-white font-semibold text-center"
          delay={10}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          showCallback
        />

          <SplitText
          text=" I have hands-on experience with React, JavaScript, and Tailwind CSS,
          and I love working with reusable components, hooks, and APIs. I’m
          always eager to learn new tools and improve my problem-solving skills."
          className="text-xl text-white font-semibold text-center"
          delay={10}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          showCallback
        />
       
        {/* Skills */}
        <motion.div
          className="flex flex-wrap mt-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git & GitHub",
            "REST APIs",
            "Responsive Design",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 text-white rounded-full text-sm backdrop-blur hover:bg-indigo-500/30 transition"
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
