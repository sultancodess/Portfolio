import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Rocket, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: 'Frontend Development',
      features: [
        'React.js',
        'Tailwind CSS',
        'Responsive Web Design',
        'State Management (Redux)',
        'API Integration',
      ],
      color: 'from-blue-100 to-blue-50',
    },
    {
      icon: <Server className="h-6 w-6 text-indigo-600" />,
      title: 'Backend Development',
      features: [
        'Node.js',
        'Express.js',
        'MongoDB/Mongoose',
        'Authentication (JWT/OAuth)',
        'RESTful APIs'
      ],
      color: 'from-indigo-100 to-indigo-50',
    },
    {
      icon: <Layout className="h-6 w-6 text-teal-600" />,
      title: 'Full Stack Solutions',
      features: [
        'MERN Stack Development',
        'Responsive Web Design',
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'Database Design',
      ],
      color: 'from-teal-100 to-teal-50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Development Expertise
          </h2>
          <p className="text-gray-600">End-to-end digital solutions with modern technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="w-full group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.2, type: 'spring' }}
            >
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-200 transition-all group-hover:shadow-lg">
                <div className={`mb-4 w-fit p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring' }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center text-gray-600 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <motion.button 
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Details</span>
                    <Rocket className="h-3 w-3 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;