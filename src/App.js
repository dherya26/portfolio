import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect, useState, useRef } from 'react';

function App() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mousePos.current = { x: clientX, y: clientY };
      
      // Update small dot immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
    };

    const animateCursor = () => {
      // Smooth interpolation for the large circle
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    const animationFrame = requestAnimationFrame(animateCursor);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI', 'A', 'BUTTON'].includes(target.tagName);
      const isInteractive = 
        isText ||
        target.closest('.skill-category-card') ||
        target.closest('.project-card') ||
        target.closest('.social-link') ||
        target.closest('.logo-circle');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="App">
      <div className="home-container min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
        <div 
          ref={cursorRef}
          className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        />
        <div 
          ref={dotRef}
          className="cursor-dot"
        />
        <AudioPlayer />
        <Sidebar />
         <Header />
        <Hero />
        <Profile />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;