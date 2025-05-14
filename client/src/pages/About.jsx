import React from 'react';

export default function About() {
  const styles = {
    page: {
      marginTop: '75px',
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
        <h1 style={styles.header}>About The Chordifiers Studio.</h1>
        <p style={styles.subheader}>
          We believe everyone has a spark of creativity within. Our mission is to provide the tools and inspiration to help you express your imagination.
        </p>

        <section className="about-section" style={styles.section}>
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
            alt="Creative Workspace"
            style={styles.image}
          />
          <div style={styles.content}>
            <p style={styles.text}>
              The Chordifiers Studio is built for dreamers, makers, writers, and designers. Whether you're sketching ideas, writing stories, or exploring digital art, our platform is a safe space to explore and grow. We're a community-driven initiative encouraging collaboration and expression.
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
