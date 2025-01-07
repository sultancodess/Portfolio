import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Container ke liye animation variants define kar rahe hain
  const containerVariants = {
    hidden: { opacity: 0 }, // Jab initially hide ho, opacity 0
    visible: {
      opacity: 1, // Jab visible ho, opacity 1
      transition: {
        staggerChildren: 0.3, // Child elements ke beech 0.3 second ka gap hoga
        delayChildren: 0.3, // 0.3 second ka delay
      },
    },
  };

  // Item ke liye animation variants define kar rahe hain
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Jab item hide ho, y-axis pe 20 pixels niche hoga
    visible: {
      opacity: 1, // Jab item visible ho, opacity 1 ho jayegi
      y: 0, // Y-axis pe original position pe aa jayega
      transition: {
        duration: 0.6, // Animation ka duration 0.6 second
        ease: 'easeOut', // Smooth animation
      },
    },
  };

  return (
    <section id="about-me" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Motion.div ka use kiya gaya hai for animation */}
        <motion.div
          className="flex flex-col-reverse md:flex-row-reverse items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Yeh div text ke liye hai, mobile pe center align hoga, aur desktop pe left align */}
          <motion.div className="text-center md:text-left md:w-1/2" variants={itemVariants}>
            <motion.h2 className="text-4xl font-semibold text-gray-800 tracking-tight px-2">
              About Me
            </motion.h2>
            {/* Text paragraphs ko justify kiya gaya hai */}
            <motion.p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 text-justify">
              Hi! I'm Sultan Alam, a passionate full-stack developer 👨‍💻 with a deep love for coding 💻 and problem-solving 🔍. 
              Currently pursuing my B.Tech in Computer Science and Engineering at SISTec Ratibad. With over 6 months of experience 
              in frontend development, I specialize in building dynamic and user-friendly web applications 🌐 using the MERN stack. 
              I'm driven by the desire to solve real-world problems with technology 🚀.
            </motion.p>
            <motion.p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 text-justify">
              When I'm not coding, I enjoy exploring emerging tech trends 📱, participating in hackathons 🏆, and working on personal projects 💡. 
              My goal is to leverage my skills to build innovative solutions that make a positive impact on the world 🌍.
            </motion.p>
          </motion.div>

          {/* Image ko center mein show kiya gaya hai, aur hover effect bhi diya gaya hai */}
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1 }} // Hover par image ko thoda bada karna
              transition={{ duration: 0.5 }} // 0.5 second ka transition time
            >
              {/* Background blur effect aur image ka style */}
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-lg opacity-20"></div>
              <img
                src="src/images/about-pic.jpg" // Image ka path update karein
                alt="Sultan Alam"
                className="w-[320px] h-[320px] object-cover rounded-md border-4 border-white shadow-xl relative z-10 mx-5"          />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact section ke liye button */}
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
