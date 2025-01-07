import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram,} from 'lucide-react';


const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/Shekhsultan',
      label: 'GitHub',
      target: '_blank'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/in/sultan-alam436/',
      label: 'LinkedIn',
      target: '_blank'
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/sultan.codes/',
      label: 'Instagram',
      target: '_blank'
    },
  ];

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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-lg opacity-20"></div>
              <img
                src="src\images\myphoto.jpg" // Update to correct image path
                alt="Sultan Alam"
                className="w-[420px] h-[420px] object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Hi👋, I'm Sultan Alam 👨‍💻
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A passionate software developer 💻 dedicated to building innovative and user-friendly web applications 🌐 that solve real-world problems 🚀.
              </p>
            </motion.div>
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <a
                href="/resume" // Change this to your actual resume URL or download link
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Resume
              </a>
            </motion.div>

            <motion.div 
              className="flex space-x-4 justify-center md:justify-start mb-8 py-8"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.3, backgroundColor: " green" }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}  // Added for accessibility
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
