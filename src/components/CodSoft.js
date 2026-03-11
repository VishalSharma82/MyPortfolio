import React from "react";
import "./Internship_detail.css"; // Aap apni CSS file yahan import kar sakte hain (dark theme ya custom)

const CodSoftInternship = () => {
  return (
    <section className="codsoft-section">
      <h2 className="section-heading"><span>CodSoft</span> Internship</h2>

      <div className="timeline">
        {/* Internship Overview */}
        <div className="timeline-item animate-reveal">
          <span className="timeline-withname">January 2025</span>
          <h3 className="timeline-role">Web Development Intern</h3>
          <p>
            Successfully completed an intensive 1-month remote internship at 
            <strong>CodSoft</strong>. I tackled progressive web development 
            challenges, refining my frontend architecture skills and mastering 
            modern responsive design workflows.
          </p>
        </div>

        {/* Level 1 Tasks */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.2s' }}>
          <span className="timeline-withname">Level 1: Fundamentals</span>
          <ul className="task-list-modern">
            <li><strong>Calculator:</strong> Designed a pixel-perfect, logic-driven calculator with vanilla JS.</li>
            <li><strong>Landing Page:</strong> Built a high-conversion food brand site using Tailwind CSS.</li>
            <li><strong>Portfolio:</strong> Developed the initial version of my professional portfolio.</li>
          </ul>
        </div>

        {/* Level 2 Tasks */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.4s' }}>
          <span className="timeline-withname">Level 2: Dynamic UI</span>
          <ul className="task-list-modern">
            <li><strong>Job Board:</strong> Created a complex UI with dynamic filtering and response modals.</li>
            <li><strong>Online Quiz:</strong> Built an interactive quiz engine with real-time scoring.</li>
          </ul>
        </div>

        {/* Level 3 Tasks */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.6s' }}>
          <span className="timeline-withname">Level 3: Full Stack & UX</span>
          <ul className="task-list-modern">
            <li><strong>E-commerce:</strong> Engineered a robust product browsing and cart system.</li>
            <li><strong>Project Tool:</strong> Developed a task management dashboard with status tracking.</li>
          </ul>
        </div>

        {/* Technologies & Tools */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '0.8s' }}>
          <span className="timeline-withname">Technical Stack</span>
          <div className="tech-container">
            <span className="tech-pill">HTML5</span>
            <span className="tech-pill">CSS3 / Tailwind</span>
            <span className="tech-pill">JavaScript (ES6)</span>
            <span className="tech-pill">Bootstrap</span>
            <span className="tech-pill">Responsive Design</span>
          </div>
        </div>

        {/* Certificate */}
        <div className="timeline-item animate-reveal" style={{ animationDelay: '1s' }}>
          <span className="timeline-withname">Official Completion</span>
          <p>Verified internship completion for all project levels.</p>
          <a href="../certificate/codsoft" className="certificate-button" target="_blank">
            <i className='bx bxs-award'></i> View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodSoftInternship;
