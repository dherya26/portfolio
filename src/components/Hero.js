import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        nameRef.current.style.setProperty('--mouse-x', `${x}px`);
        nameRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <span className="greeting">Hello, I'm</span>
          <h1 className="hero-title">
            <div className="name-container" ref={nameRef}>
              <span className="name-base">Dherya Jain</span>
              <span className="name-mask">Dherya Jain</span>
            </div>
          </h1>
          <p className="hero-subtitle">Master Of Computer Application (MCA)</p>
          <p className="hero-description">
            Strong foundations in software development, data analysis, and network security. 
            Passionate about building responsive, user-centric applications with modern UI/UX practices.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <svg 
          className="scroll-icon" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;