import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Mock Interview Platform',
    description: 'Built an AI-powered platform for practicing technical and behavioral interviews with real-time voice interaction and feedback.',
    image: './images/m1.jpg',
    technologies: ['MERN Stack', 'Vapi AI', 'JWT', 'Razorpay', 'Tailwind CSS'],
    features: [
      'Real-time voice interaction and feedback for mock interviews',
      'Practice for both technical and behavioral interviews',
      'Integrated Razorpay for subscription-based payments',
      'JWT authentication for secure access',
      'Responsive UI designed with React.js and Tailwind CSS'
    ],
    github: 'https://github.com/sultancodess/Interviewmate.pro',
    demo: 'https://interviewmate-mu.vercel.app/'
  }
  
,  
{
  id: 2,
  title: 'Medicare-HMS - Hospital Management System',
  description: 'Developed an AI-powered hospital management system for enhancing healthcare efficiency, with features like disease detection, appointment scheduling, and real-time hospital bed tracking.',
  image: './images/m5.png',
  technologies: ['MERN Stack', 'Gemini API', 'Google Translate API', 'Tailwind CSS', 'JWT'],
  features: [
    'AI-powered disease detection using Gemini API',
    'Real-time hospital bed tracking for optimized resource allocation',
    'Multilingual support for diverse user accessibility',
    'Telemedicine integration for patient-doctor video consultations',
    'Secure role-based authentication for Admins, Doctors, and Patients',
    'Responsive and interactive UI with React.js and Tailwind CSS'
  ],
  github: 'https://github.com/sultancodess/Smart-Hospital',
  demo: 'https://medicare-hms.vercel.app/'
}



];