import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

function SkillCategory({ title, items }) {
  return (
    <motion.div
      className="skill-panel"
      whileHover={{
        y: -8,
        rotate: -1,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <motion.div
        className="skill-panel-title"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map((skill) => (
          <motion.div
            key={skill}
            className="skill-item"
            variants={item}
            whileHover={{
              x: 8,
              scale: 1.05,
              backgroundColor: "#FFD54A",
            }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SkillCategory;