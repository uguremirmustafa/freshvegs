import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const heroTextVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const secondaryTextVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.6, 1],
    transition: {
      delay: 1.6,
      duration: 1,
      repeat: 'Infinity',
      repeatType: 'loop',
      ease: [0.44, 0, 1, 1],
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroText">
        <motion.h2 animate="animate" initial="initial" variants={heroTextVariants}>
          Your health matters!
        </motion.h2>
        <motion.p animate="animate" initial="initial" variants={secondaryTextVariants}>
          We supply the best vegetables from the local farmers with care!
        </motion.p>
        <motion.button
          animate="animate"
          initial="initial"
          variants={buttonVariants}
          className="heroCallToAction btn"
        >
          Get Fresh Veggies Online
        </motion.button>
      </div>
    </div>
  );
}
