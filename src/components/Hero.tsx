import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/Shekhsultan',
      label: 'GitHub',import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/Shekhsultan',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/in/sultan-alam436/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      url: 'https://x.com/Sultan_Alam_21',
      label: 'X (Twitter)',
      color: 'hover:text-sky-500'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Fixed Social Links */}
      <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-white rounded-full shadow-md transition-all border border-gray-100 ${link.color} group`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                x: 5,
                backgroundColor: "#F3F4F6",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
              <span className="absolute left-14 bg-white px-2 py-1 rounded-md text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=80"
                alt="Sultan Alam"
                className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-white shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new projects
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi <motion.span
                  animate={{ rotate: [0, 14, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block"
                >
                  👋
                </motion.span>,
                <br />
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sultan Alam</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Software Developer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate software developer 💻 dedicated to building innovative and user-friendly web applications 🌐 that solve real-world problems 🚀.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/resume"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md border border-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>

              {/* Mobile Social Links */}
              <div className="flex space-x-4 justify-center md:hidden">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-full shadow-md transition-all border border-gray-100 ${link.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      backgroundColor: "#F3F4F6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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
