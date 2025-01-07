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
    <section id="about-me" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center" // Changed `flex-row` to `flex-row-reverse` to move the image to the left
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center md:text-left md:w-1/2" variants={itemVariants}>
            <motion.h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
              About Me
            </motion.h2>
            <motion.p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
              Hi! I'm Sultan Alam, a passionate full-stack developer 👨‍💻 with a deep love for coding 💻 and problem-solving 🔍. 
              Currently pursuing my B.Tech in Computer Science and Engineering at SISTec Ratibad. With over 6 months of experience 
              in frontend development, I specialize in building dynamic and user-friendly web applications 🌐 using the MERN stack. 
              I'm driven by the desire to solve real-world problems with technology 🚀.
            </motion.p>
            <motion.p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
              When I'm not coding, I enjoy exploring emerging tech trends 📱, participating in hackathons 🏆, and working on personal projects 💡. 
              My goal is to leverage my skills to build innovative solutions that make a positive impact on the world 🌍.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-lg opacity-20"></div>
              <img
                src="src\images\about-pic.jpg" // Update to correct image path
                alt="Sultan Alam"
                className="w-[320px] h-[320px] object-cover rounded-md border-4 border-white shadow-xl relative z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center py-37"
          variants={containerVariants}
        >
          <motion.a
            href="#contact"
            className="inline-block px-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
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
