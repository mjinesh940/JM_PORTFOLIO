import React from 'react';
import Skills from '../components/Skills'; // adjust path based on your folder structure
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">Passionate | Dedicated | Creative</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Jinesh Jitendra Modi</strong>, a passionate Software Engineer specializing in Full-Stack Development. 
            I thrive on building scalable, dynamic, and user-friendly web applications. With expertise in 
            <strong> Java, JavaScript, React, Spring Boot,</strong> and other modern technologies, I aim to deliver robust solutions and exceptional code quality.
          </p>
          <p>
            I am always eager to explore new challenges, contribute to impactful projects, and grow both professionally and personally. 
            My experience includes leading development teams, designing innovative solutions, and excelling in academic and professional environments.
          </p>
        </div>

        {/* ✅ Reuse the Skills Component */}
        <Skills />

        <div className="about-extra">
          <h2>What Drives Me?</h2>
          <p>
            Beyond coding, I love to lead teams, solve complex problems, and continually innovate. 
            Whether it's captaining a basketball team to victory or successfully managing a development project, 
            I bring the same energy and focus to everything I do.
          </p>
        </div>

        <div className="cta-section">
          <a href="https://drive.google.com/file/d/1_9vcv9c8irGRlV8xLlAadc17vDxn_yQM/view?usp=sharing" 
             className="cta-button">Download My Resume</a>
          <a href="https://github.com/mjinesh940" 
             className="cta-button">Visit My GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default About;