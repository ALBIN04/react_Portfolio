import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const navItem = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <nav>

        {/* Logo */}
        <motion.a
          href="#"
          className="nav-logo"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
        >
          ALBIN.
        </motion.a>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖ CLOSE" : "💥 MENU"}
        </div>

        {/* Navigation */}
        <motion.ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          variants={navContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={navItem}>
            <Link
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </motion.li>

          <motion.li variants={navItem}>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </motion.li>

          <motion.li variants={navItem}>
            <Link
              to="skills"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </motion.li>

          <motion.li variants={navItem}>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>

      </nav>
    </>
  );
}

export default Navbar;