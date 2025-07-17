import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>

        <button 
          className="navbar-toggle" 
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className={`navbar-right ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <a className="navbar-cta" href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
