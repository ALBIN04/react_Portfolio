import "./Hero.css";
import profile from "../assets/profile_react.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="hero halftone">
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="caption-box"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          ★ ISSUE #001 — ORIGIN STORY ★
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          FULL
          <span>STACK</span>
          DEV.
        </motion.h1>

        <motion.div
          className="speech-bubble"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Building fast, beautiful, and functional web experiences —
          one commit at a time!
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-avatar-wrap">
          <motion.div
            className="action-word"
            animate={{
              rotate: [12, 8, 12],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            POW!
          </motion.div>

          <motion.div
            className="avatar-placeholder"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              rotate: -2,
            }}
          >
            <img
              src={profile}
              alt="Albin Varghese"
              className="profile-image"
            />
          </motion.div>

          <motion.div
            className="action-word-2"
            animate={{
              rotate: [-8, -12, -8],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            BOOM!
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;