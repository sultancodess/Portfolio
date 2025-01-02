import { Code, Globe, Smartphone, Server, Layout, Database } from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud services.',
  },
  {
    icon: Layout,
    title: 'UI/UX Development',
    description: 'Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and implementing efficient database structures using MongoDB, PostgreSQL, and other modern databases.',
  },
  {
    icon: Server,
    title: 'API Development',
    description: 'Building robust and scalable RESTful APIs and GraphQL services for web and mobile applications.',
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing web applications for speed, SEO, and best practices using modern tools and techniques.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native and modern mobile frameworks.',
  },
];