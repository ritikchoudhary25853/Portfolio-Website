import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Work Track App",
    desc: "A task and work management app with authentication and state management using React Context API.",
    link: "https://worktrack-007.netlify.app/",
    tech: ["React", "Tailwind", "Context API"],
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website with smooth animations using Framer Motion and Tailwind CSS.",
    link: "https://portfolio-007.netlify.app/",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Tic Tac Toe Game",
    desc: "A classic Tic Tac Toe game built with React, featuring a clean UI and local storage to save game state.",
    link: "https://tictactoe-007.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10 hover:border-indigo-400/50 transition"
            >
              <h4 className="font-semibold text-lg mb-2">
                {project.title}
              </h4>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-indigo-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-indigo-400 text-sm font-medium hover:underline"
              >
                View Details →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
