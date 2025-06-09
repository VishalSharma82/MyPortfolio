import React from 'react';
import './Internship_detail.css'; // Use the dark theme CSS

const ReachCureInternship = () => {
  return (
    <section className="reachcure-section">
      <h2 className="section-heading">ReachCure Internship Experience</h2>

      <div className="timeline">

        {/* Internship Details */}
        <div className="timeline-item">
          <p className="timeline-withname">January 2025 - February 2025</p>
          <h3 className="timeline-role">Web Development Intern</h3>
          <p>
            I completed a <strong>2-month internship</strong> at <strong>ReachCure</strong> where I worked on live client-based projects in a collaborative environment. Although I contributed for two months, the certificate was issued for the first month only, as per company policy.
          </p>
        </div>

        {/* Project 1 */}
        <div className="timeline-item">
          <p className="timeline-withname">Project: Avenue Corporation</p>
          <h3 className="timeline-role">Construction Company Website</h3>
          <p>
            A responsive and SEO-optimized website for a firm specializing in industrial building contracts and infrastructure projects.
            I contributed to the layout design, responsiveness, and content integration.
          </p>
          <a href="https://avenue-corp.example.com" className="project-link" target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="timeline-item">
          <p className="timeline-withname">Project: Tint & Twist</p>
          <h3 className="timeline-role">Salon & Makeup School Website</h3>
          <p>
            A glamorous and dynamic website for a makeup school, featuring training program info, salon services, and booking features. I worked on the UI design, routing system, and animation.
          </p>
          <a href="https://tinttwist.example.com" className="project-link" target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="timeline-item">
          <p className="timeline-withname">Project: Plastic Surgeon</p>
          <h3 className="timeline-role">Test Project (Entry Level)</h3>
          <p>
            This was the first evaluation project to test my frontend capabilities. I developed a clean and functional UI for a plastic surgeon's website using HTML, CSS, and responsive design principles.
          </p>
          <a href="https://plasticsurgeon.example.com" className="project-link" target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>

        {/* Technologies */}
        <div className="timeline-item">
          <p className="timeline-withname">Technologies Used</p>
          <p>
            HTML, CSS, JavaScript, TailwindCSS, Bootstrap, React.js, WordPress.
          </p>
        </div>

        {/* Certificate */}
        <div className="timeline-item">
          <p className="timeline-withname">Internship Certificate (1 Month)</p>
          <a
            href="/certificates/reachcure-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReachCureInternship;
