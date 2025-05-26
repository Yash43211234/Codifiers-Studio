import React from 'react';

export default function About() {
  const styles = {
    page: {
      
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(to bottom right, #fefce8, #fde68a)',
      color: '#333',
      padding: '2rem',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#ca8a04',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    subheader: {
      fontSize: '1.25rem',
      color: '#444',
      marginBottom: '2rem',
      textAlign: 'center',
      maxWidth: '700px',
      marginInline: 'auto',
    },
    section: {
      display: 'flex',
      flexDirection: 'column', // mobile-first
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2rem',
      padding: '2rem 0',
    },
    image: {
      width: '100%',
      maxWidth: '450px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '50%'
    },
    content: {
      maxWidth: '500px',
      textAlign: 'left',
    },
    text: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <>
      <div style={styles.page}>
        <h1 style={styles.header}>Welcome to The Chordifiers Studio</h1>
        <p style={styles.subheader}>
          Where creativity meets technology. We empower artists and producers to shape the future of sound through innovation and collaboration.
        </p>

        <section className="about-section" style={styles.section}>
          <img
            src="tcs.jpg"
            alt="Creative Workspace"
            style={styles.image}
          />
          <div style={styles.content}>
            <p style={styles.text}>
              At The Chordifiers Studio, we provide a nurturing space for aspiring musicians, sound engineers, and digital creators. Our environment is designed to spark imagination, support creative growth, and foster collaboration. With industry-standard tools, mentoring, and community support, we help turn raw ideas into polished productions.
            </p>
            <p style={{ ...styles.text, marginTop: '1rem' }}>
              Whether you're a beginner exploring your passion or a professional refining your craft, our studio is your launchpad into the world of modern music production.
            </p>
          </div>
        </section>
      </div>

      {/* Responsive layout for wider screens */}
      <style>{`
        @media (min-width: 768px) {
          .about-section {
            flex-direction: row !important;
          }
        }
      `}</style>
    </>
  );
}
