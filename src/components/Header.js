import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Ayyappa Bochula</h2>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
