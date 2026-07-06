import "./Projects.css";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import projects from "../Data/projects";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

function Projects() {
  return (
    <section id="projects">
      <motion.div
        className="section-label"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Case Files
      </motion.div>

      <motion.div
        className="panel-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;