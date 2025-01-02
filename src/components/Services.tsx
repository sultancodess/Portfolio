import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Server } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Creating responsive and modern web applications using React, Next.js, and other cutting-edge technologies.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Frontend Development',
    description: 'Building beautiful user interfaces with modern frameworks and ensuring great user experience.',
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Backend Development',
    description: 'Developing robust server-side applications using Node.js, Express, and MongoDB.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications using React Native and Flutter.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Services I Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;