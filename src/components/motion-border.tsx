import { motion } from "framer-motion";

const MotionBorder = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-1 w-10 bg-gradient-to-r from-yellow-400 to-pink-500"
      animate={{
        x: ["0%", "100%", "100%", "0%"],
        y: ["0%", "0%", "100%", "100%"],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{ zIndex: 10 }}
    />
  );
};

export default MotionBorder;
