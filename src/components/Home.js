import React from 'react';
import './Home.css';
import profilePic from './image1.jpg';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, I'm Ayyappa Bochula</h1>
          <p>Full Stack Developer | Python & Django Enthusiast</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
