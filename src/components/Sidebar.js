import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <motion.aside 
      className="sidebar-nav"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="sidebar-logo">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="logo-circle"
        >
          DJ
        </motion.div>
      </div>

      <nav className="sidebar-links">
        <ul>
          <MagneticLink text="About" href="#about" />
          <MagneticLink text="Skills" href="#skills" />
          <MagneticLink text="Education" href="#education" />
          <MagneticLink text="Experience" href="#experience" />
          <MagneticLink text="Projects" href="#projects" />
          <MagneticLink text="Contact" href="#contact" />
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="vertical-line"></div>
      </div>
    </motion.aside>
  );
};

const MagneticLink = ({ text, href }) => {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const onMouseLeave = () => {
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <motion.li
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ color: '#00ffff' }}
      className="sidebar-item"
    >
      <a href={href} className="sidebar-link">
        <span className="link-text">{text}</span>
      </a>
    </motion.li>
  );
};

export default Sidebar;
