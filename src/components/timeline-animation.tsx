import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface TimelineAnimationProps {
  children: ReactNode;
  delay: number;
}

export const TimelineAnimation: React.FC<TimelineAnimationProps> = ({ children, delay }) => {
    console.log(delay)
  return (
    <div className="relative flex flex-col sm:flex-row items-start">
      {/* Animated line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 sm:left-1"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.5, delay: delay }}
      ></motion.div>

      {/* Animated dot */}
      <motion.div
        className="absolute -left-1 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-black rounded-full border border-white sm:-left-0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      ></motion.div>

      {/* Children (Education Card or other content) */}
      <motion.div
        className="mx-8 text-left bg-white border border-gray-200 rounded-xl shadow-lg w-80 sm:w-80 lg:w-[70vh] px-10 py-5 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 1, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
