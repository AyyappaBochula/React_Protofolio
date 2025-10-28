import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="boxes">
        <div className="box">
          <h3>E-Commerce Website</h3>
          <p>Developed a full-stack e-commerce website using Django and ReactJS with product listing, shopping cart, and payment integration.</p>
        </div>
        <div className="box">
          <h3>Bank Management System</h3>
          <p>Built a Python-based system to manage banking transactions, customer data, and account operations with CRUD functionalities.</p>
        </div>
        <div className="box">
          <h3>Hangman Game</h3>
          <p>Created an interactive Python Hangman game with random word generation, score tracking, and user-friendly console interface.</p>
        </div>
        <div className="box">
          <h3>Quiz Game</h3>
          <p>Developed a Quiz Game by using ReactJS and it mainly having to choose one ans from the 4 options if wont select it will not move to next question and finally it will Give total Score at the End.</p>
        </div>
        </div>
    </section>
  );
}

export default Projects;
