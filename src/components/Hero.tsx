import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
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
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/your-profile-image.jpg"
                alt="Sultan Alam"
                className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-white shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new projects
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi👋, I'm Sultan Alam
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Software Developer
                </span>
              </h1>
              
              <p className="text-xl text-gray-600">
                A passionate software developer 💻 dedicated to building innovative and user-friendly web applications 🌐 that solve real-world problems 🚀.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 space-y-6"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300"
                >
                  View Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg border border-gray-200 transform hover:-translate-y-0.5 transition duration-300"
                >
                  Contact Me
                </a>
              </div>

              <motion.div 
                className="flex space-x-4 justify-center md:justify-start"
                variants={itemVariants}
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100"
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "#F3F4F6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
