import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.1, 1] }}
        transition={{ duration: 1 }}
      >
        ALBIN.
      </motion.h1>

      <p>Preparing Your Next Adventure...</p>

      <div className="loading-bar">
        <motion.div
          className="loading-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </div>

      <motion.div
        className="loader-text"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        Loading Comic Files...
      </motion.div>
    </motion.div>
  );
}

export default Loader;