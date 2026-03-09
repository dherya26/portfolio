import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Bid Bazaar",
      subtitle: "E-Bidding Platform for Handmade Artworks",
      description: "Built a full-stack web platform enabling NGOs and 20+ local artisans to auction handmade, culturally significant products. Implemented real-time bidding, role-based access control, and secure authentication.",
      impact: "Supporting simultaneous multi-user participation and promoting traditional artwork",
      tags: ["React", "Node.js", "MongoDB", "WebSocket", "Authentication"],
      link: "https://github.com/dherya26"
    },
    {
      title: "Chat Chattore",
      subtitle: "Food Recipe Website",
      description: "Designed and launched a responsive recipe platform showcasing 50+ recipes from the Chat Chattore YouTube channel. Integrated images, step-by-step instructions, and embedded videos.",
      impact: "Increased average session duration by ~25%",
      tags: ["React", "CSS3", "Responsive Design", "SEO", "YouTube API"],
      link: "https://github.com/dherya26"
    },
    {
      title: "Clinic Management System",
      subtitle: "Healthcare Platform (Jio Kivihealth)",
      description: "Engineered a responsive clinic management system using React 18 and CSS3, supporting 100+ demo users with secure authentication and appointment workflows. Deployed on Vercel with CI/CD.",
      impact: "Reduced deployment time by 30% and improved performance",
      tags: ["React 18", "CSS3", "Vercel", "CI/CD", "Glassmorphism"],
      link: "https://github.com/dherya26"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-number">04.</span> Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                
                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-impact">
                    <span className="impact-label">IMPACT:</span>
                    <span className="impact-text">{project.impact}</span>
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    GitHub
                  </a>
                  <a href="#projects" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 10"/><line x1="10" y1="14" x2="22" y2="3"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;