import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'other'>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-white rounded-2xl shadow-lg mb-4"
          >
            <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-gray-600 font-medium">Featured Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing my expertise in web development and problem-solving
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-5 w-5 text-gray-900" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="h-5 w-5 text-gray-900" />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-72 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={handleCloseModal}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-indigo-600" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;