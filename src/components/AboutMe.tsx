import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about-me" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-3xl font-bold text-gray-800" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="mt-4 text-lg text-gray-600" variants={itemVariants}>
            Hi! I'm Sultan Alam, a passionate full-stack developer with a love for coding and problem-solving.
            Currently pursuing my B.Tech in Computer Science and Engineering at SISTec Ratibad. With over 6 months
            of experience in frontend development, I specialize in building dynamic and user-friendly web applications
            using the MERN stack. I'm always eager to learn new technologies and build impactful projects that solve
            real-world problems.
          </motion.p>
          <motion.p className="mt-4 text-lg text-gray-600" variants={itemVariants}>
            When I'm not coding, you can find me exploring new tech trends, participating in hackathons, or working
            on personal projects to improve my skills. My goal is to use my expertise to create innovative solutions
            and contribute to the tech community.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="#contact"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
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
