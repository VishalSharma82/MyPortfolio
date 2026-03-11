import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "ReachCure",
      role: "Web Development Intern",
      date: "Nov 2024 – Jan 2025",
      description: "Improved website performance and responsiveness by 30%. Developed scalable features, optimized API integrations, and collaborated in a professional Git-based environment.",
      linkText: "View Details",
      link: "/ReachCure"
    },
    {
      company: "CodSoft",
      role: "Web Development Intern",
      date: "Jan 2025",
      description: "Successfully completed intensive web development tasks across multiple levels. Focused on building responsive UIs, dynamic quiz applications, and interactive dashboards.",
      linkText: "View Details",
      link: "/CodSoft"
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My <span>Experience</span></h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-date">{exp.date}</span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              {exp.link && (
                <a href={exp.link} className="experience-link">
                  {exp.linkText} <i className='bx bx-right-arrow-alt'></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
