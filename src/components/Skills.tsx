import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal, Smartphone, Braces, Palette, Globe, Cloud, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Monitor className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5 & CSS3', level: 95, icon: <Code2 className="h-4 w-4" /> },
        { name: 'Tailwind CSS', level: 90, icon: <Palette className="h-4 w-4" /> },
        { name: 'JavaScript (ES6+)', level: 90, icon: <Braces className="h-4 w-4" /> },
        { name: 'React', level: 90, icon: <Globe className="h-4 w-4" /> },
        { name: 'Redux', level: 80, icon: <Layout className="h-4 w-4" /> },
      ],
    },
    {
      title: 'Backend Development(Ongoing)',
      icon: <Server className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 80, icon: <Server className="h-4 w-4" /> },
        { name: 'Express', level: 75, icon: <Globe className="h-4 w-4" /> },
        { name: 'MongoDB', level: 80, icon: <Database className="h-4 w-4" /> },
        { name: 'MySQL', level: 70, icon: <Database className="h-4 w-4" /> },
        { name: 'REST APIs', level: 85, icon: <Cloud className="h-4 w-4" /> },
      ],
    },
    {
      title: 'Tools',
      icon: <Terminal className="h-6 w-6" />,
      color: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: <GitBranch className="h-4 w-4" /> },
        { name: 'Postman', level: 80, icon: <Smartphone className="h-4 w-4" /> },
        { name: 'Figma', level: 60, icon: <Palette className="h-4 w-4" /> },
        { name: 'Docker', level: 70, icon: <Server className="h-4 w-4" /> },
        { name: 'Kubernetes', level: 60, icon: <Cloud className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-white rounded-2xl shadow-lg mb-4"
          >
            <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-gray-600 font-medium">Tech Stack</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels in various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    {React.cloneElement(category.icon, {
                      className: "h-6 w-6 text-white"
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 group-hover:text-gray-600 transition-colors">
                            {skill.icon}
                          </span>
                          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;