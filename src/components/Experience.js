import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section alt-bg-2">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Experience
        </h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Software Intern</h3>
                  <div className="timeline-company">Jio Kivihealth</div>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-duration">June 2025 - July 2025</span>
                  <span className="timeline-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Remote
                  </span>
                </div>
              </div>
              
              <ul className="timeline-achievements">
                <li>Engineered a responsive clinic management system using React 18 and CSS3, supporting 100+ demo users, secure authentication, and appointment workflows.</li>
                <li>Enhanced user experience through modern UI/UX practices (glassmorphism, animations, mobile-first design), increasing usability across mobile and desktop devices.</li>
                <li>Deployed and maintained the application on Vercel with CI/CD, reducing deployment time by 30% and improving page load performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;