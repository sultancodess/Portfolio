import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Smartphone, Server, Rocket, ArrowRight, Zap, X, Clock, DollarSign, CheckCircle2, Calendar } from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const packages = [
    {
      name: 'Basic',
      price: '$999',
      duration: '2 weeks',
      features: ['Basic Features', 'Essential Support', 'Single Revision', 'Basic Documentation']
    },
    {
      name: 'Professional',
      price: '$2,499',
      duration: '4 weeks',
      features: ['Advanced Features', 'Priority Support', 'Multiple Revisions', 'Detailed Documentation', 'Performance Optimization']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Custom',
      features: ['Custom Features', '24/7 Support', 'Unlimited Revisions', 'Complete Documentation', 'Advanced Security', 'Dedicated Manager']
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${service.color} text-white relative`}>
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/90 mt-1">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Timeline */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                    Project Timeline
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Planning & Design</div>
                      <div className="text-sm text-gray-600">1-2 weeks</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Development</div>
                      <div className="text-sm text-gray-600">2-4 weeks</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Testing & Launch</div>
                      <div className="text-sm text-gray-600">1-2 weeks</div>
                    </div>
                  </div>
                </div>

                {/* Packages */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-indigo-600" />
                    Pricing Packages
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className="border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow"
                      >
                        <div className="text-xl font-bold">{pkg.name}</div>
                        <div className="text-3xl font-bold text-indigo-600">{pkg.price}</div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {pkg.duration}
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm">
                              <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Creating responsive and modern web applications using React, Next.js, and other cutting-edge technologies.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Custom Web Applications', 'Responsive Design', 'Performance Optimization', 'SEO Integration'],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Building beautiful user interfaces with modern frameworks and ensuring great user experience.',
      color: 'from-purple-500 to-pink-500',
      features: ['Modern UI/UX', 'Interactive Interfaces', 'Cross-browser Compatibility', 'Animation Integration'],
    },
   
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-4 h-4 mr-2" />
              What I Do Best
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900">Services I Offer</h2>
            <p className="text-gray-600">
              Transforming ideas into reality with cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className={`p-6 bg-gradient-to-r ${service.color}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Zap className="w-4 h-4 mr-2 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    whileHover={{ x: 5 }}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-500"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default Services;
