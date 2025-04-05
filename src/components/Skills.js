import React from 'react';
import JavaImg from '../images/JAVA.png';
import ReactImg from '../images/React.png';
import SpringImg from '../images/Spring.png';
import DataAnalyticsImg from '../images/DataAnalytics.png';
import SQLImg from '../images/SQL.png';
import HibernateImg from '../images/Hibernate.png';
import WebTechImg from '../images/WebTech.png';
import PHPImg from '../images/PHP.png';
import './Skills.css';

const skills = [
  { name: 'Java', img: JavaImg },
  { name: 'React', img: ReactImg },
  { name: 'Spring Boot', img: SpringImg },
  { name: 'Data Analytics', img: DataAnalyticsImg },
  { name: 'SQL', img: SQLImg },
  { name: 'Hibernate', img: HibernateImg },
  { name: 'Web-tech', img: WebTechImg },
  { name: 'PHP', img: PHPImg }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;