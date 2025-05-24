import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.glow}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.subheading}>Oops! Looks like you're offbeat 🎵</p>
        <p style={styles.description}>
          This page doesn't exist. Maybe you're looking for a different track.
        </p>
        <Link to="/" style={styles.button}>
          🎶 Back to Home
        </Link>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
  },
  glow: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '60px 30px',
    borderRadius: '20px',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 20px rgba(255,255,255,0.1)',
    animation: 'pulse 3s infinite',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '5rem',
    margin: 0,
    color: '#ff6f61',
    letterSpacing: '5px',
    fontWeight: '800',
  },
  subheading: {
    fontSize: '1.5rem',
    margin: '20px 0 10px',
    fontWeight: 600,
  },
  description: {
    fontSize: '1rem',
    marginBottom: '30px',
    opacity: 0.8,
  },
  button: {
    backgroundColor: '#ff6f61',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
};
