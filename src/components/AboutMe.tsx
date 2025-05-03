export default function AboutPage() {
  const contactInfo = [
    { label: "Phone", value: "+91-9507374902" },
    { label: "Email", value: "shekhsultan436@gmail.com" },
    { label: "LinkedIn", value: "LinkedIn", link: "#" },
    { label: "GitHub", value: "GitHub", link: "#" },
    { label: "Portfolio", value: "Portfolio", link: "#" },
  ];

  const education = [
    {
      period: "2022 - 2026",
      institution: "Sagar Institute of Science Technology and Research, Bhopal",
      degree: "B.Tech in Computer Science and Engineering - CGPA: 6.4/10",
      location: "Bhopal, Madhya Pradesh",
    },
    // Add other education entries similarly
  ];

  const projects = [
    {
      title: "Smart Hospital Management System",
      tech: "MERN Stack, Tailwind CSS, WebRTC",
      points: [
        "Implemented AI-powered disease detection using Gemini API",
        "Integrated Google Translate API for multilingual support",
        "Developed real-time hospital bed tracking system",
      ],
    },
    // Add other projects similarly
  ];

  const skills = [
    { category: "Frontend", items: "HTML5, CSS3, JavaScript, ReactJS, Tailwind CSS, Redux" },
    { category: "Programming Languages", items: "C, C++, Python" },
    { category: "Version Control", items: "Git, GitHub" },
  ];

  const achievements = [
    "1st Place Winner – National Science Day Project Expo 2025",
    "Finalist – VITB-JHU Health Hackathon 2025",
    "Certified in Python Essentials 1 & 2 – Cisco Networking Academy",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Sultan Alam</h1>
      
      {/* Contact Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex gap-1">
            <span className="font-medium">{item.label}:</span>
            {item.link ? (
              <a href={item.link} className="text-blue-600 hover:underline">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Profile Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
          Profile Summary
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Passionate Computer Science undergraduate with strong enthusiasm for software development. 
          Seeking entry-level position in a dynamic organization that values technical skills and 
          provides opportunities for professional growth.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 font-medium text-gray-600">{edu.period}</div>
            <div className="col-span-3">
              <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.location}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {project.tech}
                </span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-600">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">{skill.category}</h3>
              <p className="text-gray-600">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
          Achievements & Certifications
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {achievements.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}