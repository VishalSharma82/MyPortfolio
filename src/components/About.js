import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className={`about-img animate-reveal ${isVisible ? 'visible-scroll' : 'hidden-scroll'}`}>
          <img src="./assest/images/profile.png" alt="Vishal Sharma" />
          <div className="about-img-bg"></div>
        </div>

        <div className="about-content">
          <h2 className="heading text-left">
            About <span>Me</span>
          </h2>
          <h3>I'm Vishal Sharma</h3>
          <p>
            Full Stack MERN Developer with hands-on experience building scalable and secure web applications using
            React.js, Node.js, Express.js, and MongoDB. Skilled in REST APIs, JWT authentication, and deployment on
            Render and Vercel. Proven ability to deliver production-ready solutions with optimized performance.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>2022+</h4>
              <p>Year Started</p>
            </div>
            <div className="stat-item">
              <h4>10+</h4>
              <p>Projects Done</p>
            </div>
            <div className="stat-item">
              <h4>1</h4>
              <p>Internship</p>
            </div>
          </div>
          <a
            href="/assest/Vishal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="heading">My <span>Skills</span> Progression</h2>
        <div className="skills-timeline-container">
          <div className="timeline-line"></div>
          <div className="skills-timeline-grid">
            <div className="timeline-item-modern">
              <div className="timeline-dot-modern"></div>
              <div className="timeline-content-modern">
                <span className="timeline-year">2023</span>
                <h4>Frontend Basics</h4>
                <p>Mastered HTML5, CSS3, and Responsive Design. Started building static sites.</p>
              </div>
            </div>
            <div className="timeline-item-modern">
              <div className="timeline-dot-modern"></div>
              <div className="timeline-content-modern">
                <span className="timeline-year">2024</span>
                <h4>Full Stack Entry</h4>
                <p>Learned JavaScript (ES6+), Node.js, and Express. Built the Secure Data Sharing system.</p>
              </div>
            </div>
            <div className="timeline-item-modern">
              <div className="timeline-dot-modern"></div>
              <div className="timeline-content-modern">
                <span className="timeline-year">2025</span>
                <h4>MERN Specialization</h4>
                <p>Deep dive into React.js, MongoDB, and Socket.IO. Developed Random Chatter and Book Store System.</p>
              </div>
            </div>
            <div className="timeline-item-modern">
              <div className="timeline-dot-modern"></div>
              <div className="timeline-content-modern">
                <span className="timeline-year">2025</span>
                <h4>Professional Industry</h4>
                <p>Web Development Intern at **ReachCure**. Optimized production APIs and frontend performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications-section" style={{ marginTop: '8rem' }}>
        <h2 className="heading">My <span>Certifications</span></h2>
        <div className="education-container">
          <div className="education-card">
            <div className="education-icon"><i className='bx bxs-badge-check'></i></div>
            <div className="education-info">
              <h3>Data Structures & Algorithms in C++</h3>
              <p className="institution">CodeHelp</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-icon"><i className='bx bxs-badge-check'></i></div>
            <div className="education-info">
              <h3>Programming in C & C++</h3>
              <p className="institution">NPTEL, IIT Roorkee</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-icon"><i className='bx bxs-badge-check'></i></div>
            <div className="education-info">
              <h3>MERN Stack Web Development</h3>
              <p className="institution">CodeWithRandom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
