import React from 'react';

const services = [
  {
    icon: 'bx bx-code-alt',
    title: 'MERN Stack Development',
    description:
      'Building scalable full-stack applications using MongoDB, Express.js, React, and Node.js with optimized performance.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    icon: 'bx bx-server',
    title: 'Backend & API Design',
    description:
      'Designing robust MVC architectures and secure RESTful APIs with JWT authentication for production-ready solutions.',
    tags: ['Rest API', 'JWT', 'MVC', 'Postman'],
  },
  {
    icon: 'bx bx-cloud-upload',
    title: 'Deployment & Hosting',
    description:
      'Ensuring seamless application deployment on platforms like Render and Vercel with version control via Git/GitHub.',
    tags: ['Render', 'Vercel', 'Git', 'CI/CD'],
  },
  {
    icon: 'bx bx-mobile-alt',
    title: 'Responsive Frontend',
    description:
      'Pixel-perfect, mobile-first responsive web design using modern CSS, Tailwind, and React techniques.',
    tags: ['Tailwind', 'Responsive', 'UX'],
  },
  {
    icon: 'bx bx-bulb',
    title: 'Core Computing',
    description:
      'Applying strong foundations in Data Structures, Algorithms (C++), and OOP principles to build efficient software.',
    tags: ['DSA', 'OOP', 'C++', 'Logic'],
  },
  {
    icon: 'bx bx-check-shield',
    title: 'Security & Auth',
    description:
      'Implementing secure authentication and authorization systems to protect user data and ensure application integrity.',
    tags: ['Auth', 'JWT', 'Bcrypt', 'Privacy'],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-box">
        <h2 className="heading">My <span>Services</span></h2>
        <p className="services-subtitle">
          Here's what I bring to the table — skills and services crafted to make your vision a reality.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrap">
                <i className={`${service.icon} service-icon`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span className="service-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
