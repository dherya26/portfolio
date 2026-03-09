import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillGroups = [
    {
      name: "Frontend Development",
      icon: (
        <svg className="skill-icon" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: [
        { name: "React.js", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "HTML / CSS", level: "95%" },
        { name: "Tailwind CSS", level: "88%" }
      ]
    },
    {
      name: "Backend Development",
      icon: (
        <svg className="skill-icon" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: [
        { name: "Java", level: "82%" },
        { name: "Node.js", level: "78%" },
        { name: "REST APIs", level: "85%" }
      ]
    },
    {
      name: "Database",
      icon: (
        <svg className="skill-icon" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      skills: [
        { name: "MongoDB", level: "80%" },
        { name: "MySQL", level: "83%" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Technical Skills
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const isActive = activeCategory === index;
            return (
              <div 
                key={index} 
                className={`skill-category-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="skill-card-inner">
                  <div className="skill-icon-container">
                    {group.icon}
                  </div>
                  <h3 className="skill-category-title">{group.name}</h3>
                  <div className="skills-list">
                    {group.skills.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className={`skill-percentage transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-bar-fill" 
                            style={{ width: isActive ? skill.level : '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;