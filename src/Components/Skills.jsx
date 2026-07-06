import "./Skills.css";
import { motion } from "framer-motion";

import SkillCategory from "./SkillCategory";
import skills from "../Data/Skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const titleVariant = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="halftone"
    >
      <motion.div
        className="section-label"
        variants={titleVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Abilities
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariant}
            whileHover={{
              y: -8,
              rotate: -1,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <SkillCategory
              title={category.title}
              items={category.items}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;