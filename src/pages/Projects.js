import React from 'react';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Certification from '../components/Certification';

const Projects = () => {
  return (
    <section className="projects-section">
      <p className="projects-subtitle">Explore some of my highlighted works and hands-on experience.</p>
      <ProjectsCarousel />
      <Certification />
    </section>
  );
};

export default Projects;