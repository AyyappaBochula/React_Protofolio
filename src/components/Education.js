import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="boxes">
        <div className="box">
          <h3>Master's Of Computer Science (MCA) 2023-2025</h3>
          <h4>Acharya Nagarjuna University</h4>
          <p>Completed the Master's in Computer Applications with 8.0 CGPA, emphasizing software engineering, Python development, and database systems.</p>
        </div>
        <div className="box">
          <h3>Bachelor's Degree in Computer Science 2020-2023</h3>
          <h4>SVKP and Dr.K.S. Raju Arts and Science College</h4>
          <p>Graduated with 85% aggregate, gaining a strong foundation in programming, data structures, algorithms, and web technologies.</p>
        </div>
        <div className="box">
          <h3>Intermediate 2018-2020</h3>
          <h4>SVKP and PV Junior College</h4>
          <p>Completed Intermediate with 91%, focusing on Mathematics, Physics, and Chemistry, building analytical and logical reasoning skills.</p>
        </div>
        <div className="box">
          <h3>Xth Standard 2018</h3>
          <h4>Sri Siddhartha School</h4>
          <p>Completed secondary education with strong academic performance, developing foundational skills in problem-solving and logical thinking.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
