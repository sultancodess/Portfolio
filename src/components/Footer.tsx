import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="text-xl font-bold">Sultan Alam</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sultan Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;