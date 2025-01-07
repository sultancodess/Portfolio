import { Code, Layout, Globe, Server, Database, Cloud, ShieldCheck } from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Building tailored web solutions with modern technologies like HTML, CSS, JavaScript, and frameworks such as React.',
  },
  {
    icon: Layout,
    title: 'Responsive Design',
    description: 'Creating mobile-first, pixel-perfect, and user-friendly designs to ensure compatibility across devices.',
  },
  {
    icon: Globe,
    title: 'SEO Optimization',
    description: 'Optimizing websites for search engines to improve rankings, visibility, and organic traffic.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing robust server-side logic with Node.js, Express, and integrating RESTful or GraphQL APIs.',
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'Designing and managing databases using MongoDB, MySQL, and PostgreSQL for efficient data handling.',
  },
  {
    icon: Cloud,
    title: 'Web Hosting & Deployment',
    description: 'Deploying web applications using cloud platforms Google Cloud and Netlify.',
  },
];
