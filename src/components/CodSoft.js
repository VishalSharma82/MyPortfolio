import React from "react";
import "./Internship_detail.css"; // Aap apni CSS file yahan import kar sakte hain (dark theme ya custom)

const CodSoftInternship = () => {
  return (
    <section className="codsoft-section">
      <h2 className="section-heading">CodSoft Internship Experience</h2>

      <div className="timeline">
        {/* Internship Overview */}
        <div className="timeline-item">
          <p className="timeline-withname">January 2025</p>
          <h3 className="timeline-role">Web Development Intern</h3>
          <p>
            Successfully completed a <strong>1-month internship</strong> at{" "}
            <strong>CodSoft</strong>, working remotely on real-world web
            development tasks organized in progressive levels. This experience
            enhanced my front-end skills, UI/UX understanding, and deadline
            management.
          </p>
        </div>

        {/* Level 1 Tasks */}
        <div className="timeline-item">
          <p className="timeline-withname">Level 1 Tasks</p>
          <ul className="task-list">
            <li>
              <strong>Calculator:</strong> Built a simple, responsive calculator
              using HTML, CSS, and JavaScript with basic validation.
            </li>
            <li>
              <strong>Landing Page:</strong> Designed a modern landing page for
              a fictional food brand using HTML, Tailwind CSS, and responsive
              layout techniques.
            </li>
            <li>
              <strong>Portfolio Website:</strong> Developed my personal
              portfolio showcasing skills, projects, and certifications with
              smooth animations and responsive layout.
            </li>
          </ul>
        </div>

        {/* Level 2 Tasks */}
        <div className="timeline-item">
          <p className="timeline-withname">Level 2 Tasks</p>
          <ul className="task-list">
            <li>
              <strong>Job Board:</strong> Created a job board interface with job
              listings, filters, and responsive job detail modals.
            </li>
            <li>
              <strong>Online Quiz:</strong> Developed a quiz application with
              timer, score calculation, and API-based question loading logic.
            </li>
          </ul>
        </div>

        {/* Level 3 Tasks */}
        <div className="timeline-item">
          <p className="timeline-withname">Level 3 Tasks</p>
          <ul className="task-list">
            <li>
              <strong>E-commerce Website:</strong> Built a functional e-commerce
              website with product pages, cart features, responsive UI, and
              attractive layout using Tailwind and Bootstrap.
            </li>
            <li>
              <strong>Project Management Tool:</strong> Created a task tracker
              dashboard with project cards, user assignments, and dynamic status
              updates to simulate real-time management.
            </li>
          </ul>
        </div>

        {/* Technologies & Tools */}
        <div className="timeline-item">
          <p className="timeline-withname">Technologies & Tools Used</p>
          <p>HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</p>
        </div>

        {/* Certificate */}
        <div className="timeline-item">
          <p className="timeline-withname ">Internship Certificate </p>
          <a href="/certificate/codsoft" className="certificate-button" target="_blank">
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodSoftInternship;
