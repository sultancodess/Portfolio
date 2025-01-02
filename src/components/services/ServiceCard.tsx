import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="p-3 bg-indigo-100 rounded-full mb-4"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgb(165 180 252)",
            transition: { duration: 0.2 }
          }}
        >
          <Icon className="h-8 w-8 text-indigo-600" />
        </motion.div>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;