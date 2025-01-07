import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

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
        { name: 'Mysql', level: 70 },
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
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
