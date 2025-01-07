import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about-me" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-4xl font-semibold text-gray-800 tracking-tight" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto" variants={itemVariants}>
            Hi! I'm Sultan Alam, a passionate full-stack developer with a deep love for coding and problem-solving.
            Currently pursuing my B.Tech in Computer Science and Engineering at SISTec Ratibad. With over 6 months
            of experience in frontend development, I specialize in building dynamic and user-friendly web applications
            using the MERN stack. I'm driven by the desire to solve real-world problems with technology.
          </motion.p>
          <motion.p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto" variants={itemVariants}>
            When I'm not coding, I enjoy exploring emerging tech trends, participating in hackathons, and working on
            personal projects. My goal is to leverage my skills to build innovative solutions that make a positive
            impact on the world.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            variants={itemVariants}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
