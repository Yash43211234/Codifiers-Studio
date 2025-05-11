import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000, // Ensures it's above all content
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      width: '100%',
      height: '74px',
      boxSizing: 'border-box',
    },
    navSection: {
      display: 'flex',
      height: '100%',
    },
    navItem: {
      padding: '0 24px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRight: '1px solid #444',
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.2rem',
      whiteSpace: 'nowrap',
    },
    lastItem: {
      padding: '0 24px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      fontSize: '2rem',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
    },
  };

  return (
    <nav style={styles.nav}>
      {/* Brand Name on the left now */}
      <Link to="/" style={styles.lastItem}>The Chordifiers Studio.</Link>

      {/* Links and Address moved to the right */}
      <div style={styles.navSection}>
        <Link to="/institute" style={styles.navItem}>Institute</Link>
        <Link to="/creativity" style={styles.navItem}>Record Label</Link>
        <Link to="/about" style={styles.navItem}>About</Link>
      
      </div>
    </nav>
  );
}
