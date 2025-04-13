import React from 'react';
import './Certification.css';

const certificationsData = [
  {
    title:  "Software Engineer Virtual Expirience",
    issuer: "JP MORGAN CHASE & CO",
    date:   "Juky 2023",
    link:   "https://drive.google.com/file/d/1cFtQPiA1PXzadwMKir3MljNQhnRZ6GJf/view?usp=sharing"
  },
  {
    title:  "Project Management",
    issuer: "LINKEDIN LEARNING",
    date:   "August 2023",
    link:   "https://drive.google.com/file/d/1hP6yxQsJBcbe-hBpfx9iYsx31imH4HtM/view?usp=sharing"
  },
  {
    title:  "Java Full Stack Development",
    issuer: "QSPIDERS",
    date:   "August 2024",
    link:  "https://example.com/certificate1"
  },
  {
    title:  "Introduction to OpenShift Applications (DO101)",
    issuer: "REDHAT",
    date:   "July 2023",
    link:   "https://drive.google.com/file/d/1fBSlhO0iL1quBgrk3FvOexjduPgRb-TJ/view?usp=sharing"
  },
  {
    title:  "Android development",
    issuer: "GSI GROUP",
    date:   "SEPT 2024",
    link:  "https://drive.google.com/file/d/1JoipovnLX217H29XdfSTldYQDAVpMWm6/view?usp=sharing"
  },
  {
    title:  "Elements of AI",
    issuer: "University of Helsinki",
    date:   "July 2023",
    link:  "https://certificates.mooc.fi/validate/v13rrd6p9w"
  },
  {
    title:  "Artificial Intelligence Primer Certification",
    issuer: "INFOSYS SPRINGBOARD",
    date:   "July 2023",
    link:  "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0134898743771545602_shared/overview"
  },
  {
    title:  "Agile Methodologies",
    issuer: "JP MORGAN CHASE & CO",
    date:   "July 2023",
    link:  "https://www.theforage.com/achievements"
  },
  {
    title:  "AU Data Analytics",
    issuer: "KPMG",
    date:   "August 2023",
    link:  "https://www.theforage.com/achievements"
  }
];

const Certification = () => {
  return (
    <div className="certifications-section">
      <h2 class="section-title">Certifications</h2>
      <p className="cert-subtitle">
         Here are some of the certifications I’ve earned, reflecting my commitment to continuous learning and technical growth.
      </p>
      <div className="cert-list">
        {certificationsData.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <a href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;