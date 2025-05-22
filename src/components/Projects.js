import React from 'react';

const Projects = () => {
  return (
     <section className="projects" id="projects">
        <h2 className="heading">My Last<span>Projects</span></h2>
        <div className="projects-container">

            {/* Personal Projects */}
            <div className="project-box">
                <img src="./assest/images/p7.png" alt="Online Quiz"/>
                <h3>Online Quiz</h3>
                <p>A web-based quiz application that fetches quiz data from an external API, allowing users to answer questions and see their scores in real-time</p>
                <a href="https://quiz-gray-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
            </div>            
            <div className="project-box">
                <img src="./assest/images/p1.png" alt="Surgeon"/>
                <h3>Surgeon Website</h3>
                <p>A professional website designed for a surgeon, showcasing their services, expertise, and client testimonials with a clean, responsive design.</p>
                <a href="https://plastic-surgeon-pi.vercel.app/" className="btn">View Project</a>
            </div>
            <div className="project-box">
                <img src="./assest/images/p2.png" alt="E-commerce"/>
                <h3>FlexWear Website</h3>
                <p>An online store for clothing, built with a responsive layout and smooth user experience, allowing users to browse, filter, and purchase apparel seamlessly.</p>
                <a href="https://flex-wear-website.vercel.app/" type="button" className="btn">View Project</a>
            </div>

             {/* <div className="project-box">
                <img src="./assest/images/p8.png" alt="Rock-Paper-Scissors">
                <h3>Rock Paper Scissors Game</h3>
                <p>A simple interactive web game where users can play rock-paper-scissors against the computer with dynamic results displayed after each round.</p>
                <a href="https://github.com/yourgithub/rps-game" target="_blank" className="btn">View Project</a>
            </div>  */}

            <div className="project-box">
                <img src="./assest/images/p4.png" alt="BloomScroll"/>
                <h3>BloomScroll</h3>
                <p>A visually engaging website with a unique scrolling experience, enhanced by animations that bring the content to life as users scroll down the page.</p>
                <a href="https://bloomscroll-nine.vercel.app/"  className="btn">View Project</a>
            </div>

            <div className="project-box">
                <img src="./assest/images/p3.png" alt="Restorant"/>
                <h3>Restorant Website</h3>
                <p>A website for a fast food restaurant with an attractive menu, online ordering system, and a responsive design to engage customers and streamline their ordering process.</p>
                <a href="https://restorant-eta.vercel.app/" className="btn">View Project</a>
            </div>
        </div>
    </section>
  );
};

export default Projects;
