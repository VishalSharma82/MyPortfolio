import React from 'react';

const projectsData = [
  {
    image: "./assest/images/p2.png",
    title: "Random Chatter",
    description: "Real-time chat app using Socket.IO (speed +35%). Features JWT auth and MVC architecture. Deployed on Render.",
    link: "https://random-chatterbot.onrender.com/",
    tags: ["Socket.IO", "React", "Node.js", "JWT"]
  },
  {
    image: "./assest/images/p7.png",
    title: "Book Store Management",
    description: "MERN stack app with role-based access. Optimized MongoDB schemas for 30% efficiency gain.",
    link: "https://book-store-project-ci8v.onrender.com/",
    tags: ["MERN", "MVC", "REST API", "Postman"]
  },
  {
    image: "./assest/images/p2p.png",
    title: "Secure Data Sharing",
    description: "Privacy-focused p2p file sharing (+40% efficiency) without login. Built with Node.js and React.",
    link: "https://freewebshareme.onrender.com/",
    tags: ["Node.js", "Express", "P2P", "Security"]
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">My Latest <span>Projects</span></h2>
      <p className="section-subtitle">A showcase of my recent work in web development and design.</p>
      
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-btn">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-small">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
