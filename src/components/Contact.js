import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Positions of Responsibility */}
        <div className="responsibility-container mb-24">
          <h2 className="section-title">
            <span className="title-number">05.</span> Responsibility
          </h2>
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <div className="responsibility-card">
              <h3 className="responsibility-title">Volunteer</h3>
              <p className="responsibility-org text-primary font-medium">ETTIS 2025 Symposium</p>
              <p className="responsibility-desc text-muted-foreground mt-2">
                Assisted in organizing the Emerging Trends and Technology of Intelligent Systems symposium by supporting logistics and coordinating participants.
              </p>
            </div>
            <div className="responsibility-card">
              <h3 className="responsibility-title">Event Host</h3>
              <p className="responsibility-org text-primary font-medium">ADIOS Farewell 2025</p>
              <p className="responsibility-desc text-muted-foreground mt-2">
                Hosted and managed stage proceedings, engaging the audience and coordinating event flow for a memorable C-DAC farewell.
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title">
          <span className="title-number">06.</span> Get In Touch
        </h2>

        <div className="contact-content">
          <div className="contact-card">
            <p className="contact-intro">
              I'm currently looking for new opportunities! Whether you have a question or just want to say hi, I'll try my best to get back to you.
            </p>

            <div className="contact-methods">
              <a href="mailto:jaindherya03@gmail.com" className="contact-method">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email Me</span>
                  <span className="contact-value">jaindherya03@gmail.com</span>
                </div>
              </a>

              <a href="tel:7489730278" className="contact-method">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Call Me</span>
                  <span className="contact-value">+91 7489730278</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Ujjain, Madhya Pradesh</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3 className="social-title">Connect with me</h3>
              <div className="social-links-large">
                <a href="https://linkedin.com/in/dherya-jain26" target="_blank" rel="noopener noreferrer" className="social-link-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/dherya26" target="_blank" rel="noopener noreferrer" className="social-link-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>© 2026 Dherya Jain. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;