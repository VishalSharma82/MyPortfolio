import React from "react";

const Header = () => {
  // Function to open the color picker when clicking the rainbow icon
  const triggerColorInput = () => {
    document.getElementById("colorInput").click();
  };

  // Change the CSS variable --main-color based on chosen color
  const updateColor = (e) => {
    document.documentElement.style.setProperty("--main-color", e.target.value);
  };

  return (
    <header className="header">
      {/* Color Picker */}
      <div className="color-picker-container">
        <div
          id="rainbow-spinner"
          className="rainbow-spinner"
          onClick={triggerColorInput}
          style={{ cursor: "pointer" }}
          title="Pick a color"
        ></div>
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
      <a href="#home" className="logo">
        Vishal<span>Sharma</span>
      </a>

      {/* Navigation Links */}
      <nav className="navbar">
        {[
          "home",
          "about",
          "education",
          "experience",
          "services",
          "projects",
          "contact",
        ].map((link) => (
          <a
            href={`#${link}`}
            key={link}
            className={link === "home" ? "active" : ""}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile menu icon (you can add functionality later) */}
      <div id="menu-icon" className="bx bx-menu"></div>
    </header>
  );
};

export default Header;
