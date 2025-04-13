import React from 'react';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {
  const projects = [
    {
      title: 'Scholarship Portal',
      description: 'A comprehensive solution for managing scholarship applications.',
      link: 'https://github.com/mjinesh940/Scholarship-Portal',
    },
    {
      title: 'Feed Forward Portal',
      description: 'An interactive platform for sharing feedback and suggestions.',
      link: 'https://github.com/mjinesh940/Feed_Forward',
    },
    {
      title: 'Text & Sentiment Analysis',
      description: 'An application using ML algorithms for text classification.',
      link: 'https://github.com/mjinesh940/Text_Analysis',
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        Explore some of the exciting projects I’ve worked on, showcasing my skills in development and problem-solving.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in">
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;