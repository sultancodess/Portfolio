import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';
import { staggerContainer, fadeInUp, skillBarVariants } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React', level: 90 },
        { name: 'Redux', level: 80 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 70 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Google Cloud Storage (GCS)', level: 60 },
        { name: 'Figma', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.div 
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          A comprehensive overview of my technical expertise and proficiency levels
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              custom={categoryIndex}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mr-4">
                  {React.cloneElement(category.icon, {
                    className: "h-6 w-6 text-purple-600"
                  })}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  {category.title}
                </h3>
              </motion.div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        variants={skillBarVariants}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
