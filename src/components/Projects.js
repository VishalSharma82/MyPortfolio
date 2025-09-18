import React from 'react';

const Projects = () => {
  return (
     <section className="projects" id="projects">
        <h2 className="heading">My Last<span>Projects</span></h2>
        <div className="projects-container">

            {/* Personal Projects */}
            <div className="project-box">
                <img src="./assest/images/p7.png" alt="Online Quiz"/>
                <h3>Booket</h3>
                <p>Booket is a book selling platform, wherer user can buy,sell and also could exchange their old books.</p>
                <a href="https://book-store-project-ci8v.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
            </div>            
            <div className="project-box">
                <img src="./assest/images/p1.png" alt="Surgeon"/>
                <h3>Surgeon Website</h3>
                <p>A professional website designed for a surgeon, showcasing their services, expertise, and client testimonials with a clean, responsive design.</p>
                <a href="https://plastic-surgeon-pi.vercel.app/" className="btn">View Project</a>
            </div>
            <div className="project-box">
                <img src="./assest/images/p2.png" alt="E-commerce"/>
                <h3>Random Chatter</h3>
                <p>A user friendly platform where user can spend their free time with random person online.</p>
                <a href="https://random-chatterbot.onrender.com/" type="button" className="btn">View Project</a>
            </div>

            <div className="project-box">
                <img src="./assest/images/p4.png" alt="BloomScroll"/>
                <h3>MusicPlayer</h3>
                <p>Here user can play same song with two device simultaneously by connecting their bluetooth.</p>
                <a href="https://musicplayer-07bb.onrender.com/"  className="btn">View Project</a>
            </div>

            {/* <div className="project-box">
                <img src="./assest/images/p3.png" alt="Restorant"/>
                <h3>Restorant Website</h3>
                <p>A website for a fast food restaurant with an attractive menu, online ordering system, and a responsive design to engage customers and streamline their ordering process.</p>
                <a href="https://restorant-eta.vercel.app/" className="btn">View Project</a>
            </div> */}
        </div>
    </section>
  );
};

export default Projects;
