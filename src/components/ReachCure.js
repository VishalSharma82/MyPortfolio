import React from "react";
import "./Internship_detail.css"; // Use the dark theme CSS

const ReachCureInternship = () => {
  return (
    <section className="reachcure-section">
      <h2 className="section-heading"><span>ReachCure</span> Internship</h2>

      <div className="timeline">
        {/* Overview */}
        <div className="timeline-item animate-reveal">
          <span className="timeline-withname">Nov 2024 - Jan 2025</span>
          <h3 className="timeline-role">Web Development Intern</h3>
          <p>
            During my professional tenure at <strong>ReachCure</strong>, I spearheaded the 
            development and optimization of multiple live client projects. I focused on 
            delivering high-performance frontends and robust API integrations within a 
            fast-paced agile environment.
          </p>
        </div>

        {/* Project 1 */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.2s' }}>
          <span className="timeline-withname">Commercial Project</span>
          <h3 className="timeline-role">Avenue Corporation</h3>
          <p>
            Developed a comprehensive, SEO-optimized platform for an industrial building firm. 
            Focused on pixel-perfect layouts, responsive architecture, and seamless content delivery 
            to showcase large-scale infrastructure projects.
          </p>
          <a href="https://avenue-corporation.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-link-external'></i> Live Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.4s' }}>
          <span className="timeline-withname">Styling & UI</span>
          <h3 className="timeline-role">Tint & Twist</h3>
          <p>
            Architected a glamorous digital presence for a premium makeup school. 
            Implemented dynamic routing systems, custom animations, and an intuitive 
            salon booking interface that significantly improved user retention.
          </p>
          <a href="https://tint-twist.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-link-external'></i> Live Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.6s' }}>
          <span className="timeline-withname">Optimization</span>
          <h3 className="timeline-role">Plastic Surgeon Portal</h3>
          <p>
            Engineered a clean, professional medical portal as part of preliminary 
            technical evaluation. Achieved 90+ Lighthouse scores for accessibility 
            and performance, focusing on intuitive healthcare UX.
          </p>
          <a href="https://plastic-surgeon-pi.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-link-external'></i> Live Project
          </a>
        </div>

        {/* Technologies */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.8s' }}>
          <span className="timeline-withname">Technical Stack</span>
          <div className="tech-container">
            <span className="tech-pill">React.js</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">JavaScript (ES6+)</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">Bootstrap</span>
            <span className="tech-pill">Git / GitHub</span>
          </div>
        </div>

        {/* Certificate */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '1s' }}>
          <span className="timeline-withname">Official Completion</span>
          <p>Verified internship completion with performance commendation.</p>
          <a href="../certificate/reachcure" className="certificate-button" target="_blank">
            <i className='bx bxs-award'></i> View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReachCureInternship;
