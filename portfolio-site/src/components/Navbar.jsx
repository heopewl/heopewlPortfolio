import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navWrapper}>
      <div style={styles.nav} className="glass-card">
        <Link to="/" style={styles.logo}>Jun Xian</Link>
        <ul style={styles.links}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
          <li><Link to="/skills" style={styles.link}>Skills</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navWrapper: {
    position: 'fixed',
    top: '20px',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '0 1rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    width: '100%',
    maxWidth: '600px',
    borderRadius: '50px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  logo: {
    fontWeight: 800,
    fontSize: '1.2rem',
    background: 'linear-gradient(to right, #fff, #ccc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--text-color)',
    opacity: 0.8,
  }
};

export default Navbar;
