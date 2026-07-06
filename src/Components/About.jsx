import "./About.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function About() {
  return (
    <section id="about">
      <motion.div
        className="about-text"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Origin Story
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A full-stack developer with an eye for design and a passion
          for shipping projects that actually look good.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Currently studying CS while building real products—from
          portfolio sites to side experiments. I care as much about
          the pixels as I do about the logic behind them.
        </motion.p>

        <motion.div
          className="stat-row"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="stat-box"
            variants={fadeUp}
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
          >
            <div className="num">5+</div>
            <div className="label">Projects</div>
          </motion.div>

          <motion.div
            className="stat-box"
            variants={fadeUp}
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
          >
            <div className="num">2+</div>
            <div className="label">Years Coding</div>
          </motion.div>

          <motion.div
            className="stat-box"
            variants={fadeUp}
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
          >
            <div className="num">∞</div>
            <div className="label">Coffee ☕</div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="section-label"
          style={{
            display: "block",
            marginBottom: "20px",
          }}
        >
          Powers
        </div>

        <motion.div
          className="skill-tags"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            ["React", "red"],
            ["Node.js", "blue"],
            ["CSS / Tailwind", "yellow"],
            ["JavaScript", ""],
            ["Python", "red"],
            ["SQL", "blue"],
            ["Git", "yellow"],
            ["Figma", ""],
            ["HTML", "red"],
            ["Express", "blue"],
          ].map(([skill, color]) => (
            <motion.span
              key={skill}
              className={`skill-tag ${color}`}
              variants={fadeUp}
              whileHover={{
                scale: 1.15,
                rotate: Math.random() > 0.5 ? 4 : -4,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;