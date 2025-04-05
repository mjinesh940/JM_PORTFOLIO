import React from 'react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import ProjectsCarousel from '../components/ProjectsCarousel';
import '../pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Skills />
      <ProjectsCarousel />
    </div>
  );
};

export default Home;