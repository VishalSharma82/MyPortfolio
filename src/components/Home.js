import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/vishal-sharma-3rd-b46a14252", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
  { href: "https://github.com/VishalSharma82", icon: <FaGithub size={22} />, label: "GitHub" },
  { href: "https://www.instagram.com/vishal42619", icon: <FaInstagram size={22} />, label: "Instagram" },
  { href: "https://www.twitter.com", icon: <FaTwitter size={22} />, label: "Twitter" },
  { href: "https://www.youtube.com", icon: <FaYoutube size={22} />, label: "YouTube" },
  { href: "https://wa.me/919166682131", icon: <FaWhatsapp size={22} />, label: "WhatsApp" },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-greeting">👋 Hello, World!</div>
        <h1>
          I'm <span>Vishal</span> Sharma
        </h1>
        <h3 className="text-animation">
          I'm a&nbsp;<span> </span>
        </h3>
        <p>
          Full Stack MERN Developer with hands-on experience building scalable and 
          secure web applications using React.js, Node.js, Express.js, and MongoDB. 
          Skilled in REST APIs, JWT authentication, and optimized performance.
        </p>

        <div className="social-icons">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="btn-group">
          <a
            href="https://wa.me/919166682131?text=Hi%20Vishal,%20I%20want%20to%20hire%20you"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <a
            href="/assest/Vishal Sharma Resume.pdf"
            className="btn btn-outline"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="home-img animate-reveal">
        <div className="home-img-glow" />
        <img src="./assest/images/profile.png" alt="Vishal Sharma" />
      </div>
    </section>
  );
};

export default Home;
