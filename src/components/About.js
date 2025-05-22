import React from 'react';
const About = () => {
  return (
    <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-container">
            <div className="about-content">
                <h3>I'm Vishal Sharma</h3>
                <p>
                    A passionate Web Developer with experience in **frontend and backend development**.
                    Currently pursuing **B.Tech in Computer Science** at **Global Institute of Technology and
                    Management, Gurgaon**,
                    I specialize in building **high-performance, user-friendly web applications**.
                    I have hands-on experience with **HTML, CSS, JavaScript, TailwindCSS, Bootstrap, React.js, MongoDB,
                    and Node.js**.
                    I am always eager to **learn new technologies** and enhance my problem-solving skills.
                </p>
                <a href="./assest/VishalSharma_Resume.pdf" target="_blank"
  rel="noopener noreferrer" download className="btn">Download CV</a>
            </div>

            {/* Right Side: Skills Timeline */}
            <div className="skills-timeline">
                <h3>My Skills Progression</h3>
                <div className="timeline">
                    <div className="timeline-item">
                        <h4>2023 - HTML & CSS</h4>
                        <p>Started with web basics and built responsive websites.</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2024 - JavaScript & UI/UX</h4>
                        <p>Learned dynamic interactions and enhanced user experience.</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2025 - React & Backend</h4>
                        <p>Developed full-stack applications with React, Node.js & MongoDB.</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2025 - Advanced Web Development</h4>
                        <p>Worked on **internships & client projects**, mastering APIs & full-stack development.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;