import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
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

function ProjectCard({
  title,
  description,
  tech,
  badge,
  bg,
  demo,
  github,
  primaryText,
  secondaryText,
  featured,
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        rotate: -1,
        transition: {
          duration: 0.25,
        },
      }}
      className={`panel ${
        featured
          ? "panel-wide"
          : title === "Creative Project"
          ? "panel-creative"
          : ""
      }`}
    >
      <div
        className={`panel-img ${bg} ${
          featured ? "featured-img" : ""
        }`}
      >
        <motion.span
          whileHover={{
            scale: 1.15,
            rotate: 5,
          }}
        >
          {badge}
        </motion.span>
      </div>

      <div className="panel-body">
        <motion.div
          className="panel-title"
          whileHover={{
            x: 5,
          }}
        >
          {title}
        </motion.div>

        <div className="panel-desc">
          {description}
        </div>

        <div className="panel-tech">
          {tech.map((item) => (
            <motion.span
              key={item}
              className="tech-badge"
              whileHover={{
                scale: 1.12,
                rotate: -4,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="panel-links">
          <motion.a
            href={demo}
            className="panel-link primary"
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {primaryText}
          </motion.a>

          <motion.a
            href={github}
            className="panel-link"
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {secondaryText}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;