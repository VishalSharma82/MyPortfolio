import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-v2">
      <div className="footer-top">
        <div className="footer-logo">
          Vishal<span>Sharma</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/vishal-sharma-3rd-b46a14252" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/VishalSharma82" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/vishal42619" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/919166682131" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Vishal Sharma | All Rights Reserved</p>
        <p className="footer-tagline">Crafting digital experiences with passion.</p>
      </div>

      <div className="scroll-to-top">
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
      </div>
    </footer>
  );
};

export default Footer;
