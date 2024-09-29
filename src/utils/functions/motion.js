import { motion } from "framer-motion";

export const MOTION_FADE_UP = ({ className, children }) => {
  return (
    <motion.div
      className={`${className ? className : ""}`}
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const MOTION_FADE_LEFT = ({ className, children }) => {
  return (
    <motion.div
      className={`${className ? className : ""}`}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const MOTION_FADE_RIGHT = ({ className, children }) => {
  return (
    <motion.div
      className={`${className ? className : ""}`}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
