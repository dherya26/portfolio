import React from 'react';
import './Experience.css';

const Education = () => {
  const items = [
    {
      degree: "Master Of Computer Application",
      score: "Percentage: 89%",
      institution: "Centre For Development of Advanced Computing (C-DAC)",
      university: "Guru Gobind Singh Indraprastha University, Delhi, India",
      duration: "2024 - Present",
      location: "Noida, India"
    },
    {
      degree: "Bachelor Of Computer Application",
      score: "CGPA: 7.51",
      institution: "Govt. Madhav Science College",
      university: "Vikram University, Ujjain",
      duration: "2021 - 2024",
      location: "Ujjain, India"
    },
    {
      degree: "12 CBSE Board",
      score: "Percentage: 87.4%",
      institution: "Kendriya Vidyalaya",
      duration: "2020 - 2021",
      location: "Ujjain, India"
    },
    {
      degree: "10 ICSE Board",
      score: "Percentage: 77.8%",
      institution: "St. Thomas School",
      duration: "2019 - 2020",
      location: "Ujjain, India"
    }
  ];

  return (
    <section id="education" className="experience-section alt-bg-1">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Education
        </h2>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          {items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-marker ${index % 2 !== 0 ? 'secondary' : ''}`}></div>
              <div className={`timeline-card ${index % 2 !== 0 ? 'secondary' : ''}`}>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.degree}</h3>
                    <div className="timeline-company">{item.institution}</div>
                    {item.university && <p className="text-sm text-muted-foreground italic mt-1">{item.university}</p>}
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-duration">{item.duration}</span>
                    <span className="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {item.location}
                    </span>
                    <span className="text-primary font-bold mt-1">{item.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;