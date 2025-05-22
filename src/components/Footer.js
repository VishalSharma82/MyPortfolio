import React, { useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    // Guard against null refs
    if (!menuIcon || !navbar) return;

    const navLinks = navbar.querySelectorAll("a");

    const toggleNavbar = (e) => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
      e.stopPropagation();
    };

    const closeNavbar = () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    const linkClickHandler = () => {
      if (window.innerWidth <= 768) {
        closeNavbar();
      }
    };

    menuIcon.addEventListener("click", toggleNavbar);
    navLinks.forEach((link) => link.addEventListener("click", linkClickHandler));

    return () => {
      menuIcon.removeEventListener("click", toggleNavbar);
      navLinks.forEach((link) => link.removeEventListener("click", linkClickHandler));
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-heading">Have You Any Question?</h2>
        <p className="footer-subheading">I'M AT YOUR SERVICES</p>

        <div className="footer-info">
          <div className="footer-row">
            {/* WhatsApp */}
            <div className="footer-item">
              <i className="bx bxl-whatsapp footer-icon"></i>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/9166682131">+91 9166682131</a>
              </p>
            </div>

            {/* Location */}
            <div className="footer-item">
              <i className="bx bx-map footer-icon"></i>
              <h3>Location</h3>
              <p>Bhiwadi</p>
            </div>
          </div>

          <div className="footer-row">
            {/* Email */}
            <div className="footer-item">
              <i className="bx bx-envelope footer-icon"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:vishalsharma42619@gmail.com">
                  vishalsharma42619@gmail.com
                </a>
              </p>
            </div>

            {/* Website */}
            <div className="footer-item">
              <i className="bx bx-globe footer-icon"></i>
              <h3>Website</h3>
              <p>
                <a href="https://www.domain.com">www.Domain.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add menu icon with ref */}
      <div
        ref={menuIconRef}
        className="menu-icon bx bx-menu"
        style={{ cursor: "pointer", margin: "1rem" }}
        title="Toggle menu"
      ></div>

      {/* Add navbar container with ref */}
      <nav ref={navbarRef} className="footer-navbar">
        <ul className="list">
          <li>
            <a href="faq">FAQ</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="about">About Me</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
<div className="social-icons">
  <a href="https://www.linkedin.com/in/vishal-sharma-3rd-b46a14252" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={28} color="#0077b5" />
  </a>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={28} color="#4267B2" />
  </a>

  <a href="https://www.instagram.com/vishal42619" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={28} color="#E1306C" />
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={28} color="#1DA1F2" />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={28} color="#FF0000" />
  </a>

  <a href="https://wa.me/919166682131" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={28} color="#25D366" />
  </a>
</div>


      <p className="copyright">@ Vishal Sharma | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
