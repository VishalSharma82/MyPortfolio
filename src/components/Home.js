import React from 'react';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const Home = () => {
  return (
     <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, It's <span>Vishal</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3>
            <p>Passionate Web Developer skilled in creating responsive, user-friendly websites. Proficient in front-end
                and back-end technologies, with a strong focus on UI/UX design and optimized web performance.</p>
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

            <div className="btn-group">
                <a href="btn" className="btn">Hire</a>
                <a href="#contact" className="btn">Contact</a>
            </div>
        </div>
        <div className="home-img">
            <img src="./assest/images/profile.png" alt=""/>
        </div>
    </section>
  );
};

export default Home;
