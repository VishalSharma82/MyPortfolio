import React from 'react';

const Experience = () => {
  return (
     <section className="experience" id="experience">
        <h2 className="heading">My <span>Experience</span></h2>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Teachmaven 2025</div>
                <div className="timeline-content">
                    <h3>TeachMaven - Campus Executive Intern</h3>
                    <p>Worked on outreach programs and technology awareness campaigns.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">CodSoft 2025</div>
                <div className="timeline-content">
                    <h3>CodSoft - Web Developer Intern</h3>
                    <p>Focused on designing and developing visually appealing and functional projects including ("
                        Project Management Tool, Job Board, E-commerce Website, Digital Calculator, Responsive Landing
                        Page, Online Quiz App.")</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">ReachCure 2024</div>
                <div className="timeline-content">
                    <h3>Website Development ReachCure, Gurgaon</h3>
                    <p>Designed and optimized responsive layouts to ensure compatibility across devices (desktop,
                        tablet, and mobile).Focused on creating intuitive user interfaces for seamless navigation and
                        accessibility.Worked with cross-functional teams to gather requirements, deliver on client
                        expectations, and refine solutions.Received real-time feedback from clients and stakeholders to
                        iterate on designs quickly.Developed a website tailored to a surgeon's needs, enhancing the user
                        experience and professional presentation of medical services.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;
