import "./Contact.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
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

function Contact() {
  return (
    <section id="contact" className="halftone">
      <motion.div
        className="section-label"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Send a Signal
      </motion.div>

      <motion.div
        className="contact-bubble"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={item}>
          Got a project in mind? Want to collaborate? Or just want to
          say hi? Drop a message—I read everything.
        </motion.p>

        <motion.input
          variants={item}
          className="contact-input"
          type="text"
          placeholder="Your name..."
          whileFocus={{
            scale: 1.02,
          }}
        />

        <motion.input
          variants={item}
          className="contact-input"
          type="email"
          placeholder="Your email..."
          whileFocus={{
            scale: 1.02,
          }}
        />

        <motion.textarea
          variants={item}
          className="contact-input"
          rows="4"
          placeholder="What's on your mind?"
          whileFocus={{
            scale: 1.02,
          }}
        />

        <motion.a
          variants={item}
          href="mailto:albin369varghese@email.com"
          className="btn btn-primary send-btn"
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          SEND IT! →
        </motion.a>
      </motion.div>

      <motion.div
        className="contact-links"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.a
          variants={item}
          href="https://github.com/ALBIN04"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            y: -5,
            scale: 1.08,
          }}
        >
          📁 GitHub
        </motion.a>

        <motion.a
          variants={item}
          href="https://www.linkedin.com/in/albin-varghese-012790245"
          className="contact-link yt"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            y: -5,
            scale: 1.08,
          }}
        >
          💼 LinkedIn
        </motion.a>

        <motion.a
          variants={item}
          href="mailto:albin369varghese@email.com"
          className="contact-link"
          whileHover={{
            y: -5,
            scale: 1.08,
          }}
        >
          ✉️ Email
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;