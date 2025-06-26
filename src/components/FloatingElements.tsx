import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const vegetables = [
    { emoji: '🥬', delay: 0, duration: 4 },
    { emoji: '🥕', delay: 1, duration: 5 },
    { emoji: '🍅', delay: 2, duration: 4.5 },
    { emoji: '🥒', delay: 0.5, duration: 6 },
    { emoji: '🫐', delay: 1.5, duration: 3.5 },
    { emoji: '🥑', delay: 2.5, duration: 5.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {vegetables.map((veg, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: veg.duration,
            delay: veg.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${veg.delay}s`,
          }}
        >
          {veg.emoji}
        </motion.div>
      ))}
      
      {/* Floating mist effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 animate-pulse"></div>
    </div>
  );
};

export default FloatingElements;