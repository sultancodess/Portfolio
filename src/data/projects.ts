import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'Secure payment processing',
      'Order management system'
    ],
    github: 'https://github.com/Shekhsultan',
    demo: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    features: [
      'Real-time task updates',
      'Team collaboration tools',
      'Project timeline visualization',
      'Task priority management',
      'File attachment support'
    ],
    github: 'https://github.com/Shekhsultan',
    demo: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A comprehensive weather dashboard with current conditions and forecasting capabilities.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'TypeScript'],
    features: [
      'Current weather conditions',
      '5-day weather forecast',
      'Interactive weather maps',
      'Location-based weather data',
      'Weather alerts system'
    ],
    github: 'https://github.com/Shekhsultan',
    demo: '#'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management dashboard for tracking and analyzing social media performance.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
    features: [
      'Multi-platform social media integration',
      'Analytics and reporting',
      'Content scheduling',
      'Engagement tracking',
      'Automated posting'
    ],
    github: 'https://github.com/Shekhsultan',
    demo: '#'
  }
];