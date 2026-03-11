import React, { useState, useEffect } from "react";

const navLinks = ["home", "education", "experience", "services", "projects", "contact"];

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((id) => document.getElementById(id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveLink(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const triggerColorInput = () => document.getElementById("colorInput").click();
  const updateColor = (e) => {
    const color = e.target.value;
    document.documentElement.style.setProperty("--main-color", color);
    
    // Dynamically calculate glow colors based on the main color
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    document.documentElement.style.setProperty("--accent-glow", `rgba(${r}, ${g}, ${b}, 0.4)`);
    document.documentElement.style.setProperty("--card-border", `rgba(${r}, ${g}, ${b}, 0.15)`);
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} style={{ zIndex: menuOpen ? 2000 : 1000 }}>
      {/* Color Picker */}
      <div className="color-picker-container">
        <div
          id="rainbow-spinner"
          className="rainbow-spinner"
          onClick={triggerColorInput}
          title="Pick a color"
        />
        <input
          type="color"
          id="colorInput"
          defaultValue="#00ffee"
          className="color-input"
          onChange={updateColor}
          style={{ display: "none" }}
        />
      </div>

      {/* Logo */}
      <a href="/#home" className="logo">
        Vishal<span>Sharma</span>
      </a>

      {/* Navigation */}
      <nav className={`navbar${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            href={`/#${link}`}
            key={link}
            className={activeLink === link ? "active" : ""}
            onClick={() => handleLinkClick(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        id="menu-icon"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
