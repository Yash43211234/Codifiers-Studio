import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Creativity() {
  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(to bottom right, #e0e7ff, #bfdbfe)',
      color: '#333',
     
    },
    header: {
   
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4f46e5',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: window.innerWidth >= 768 ? 'row' : 'column-reverse',
      gap: '2rem',
      padding: '2rem',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    section: {
      display: 'flex',
      flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem',
      gap: '2rem',
    },
    sectionAlt: {
      flexDirection: window.innerWidth >= 768 ? 'row-reverse' : 'column',
    },
    heroText: {
      maxWidth: '600px',
    },
    h2: {
      fontSize: '2.5rem',
      color: '#6d28d9',
      marginBottom: '1rem',
    },
    highlight: {
      color: '#2563eb',
    },
    paragraph: {
      fontSize: '1.1rem',
      color: '#555',
      marginBottom: '1.5rem',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#7c3aed',
      color: 'white',
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.page}>
      

      {/* Section 1: Ignite Creativity */}
      <main style={styles.hero}>
        <div style={styles.heroText}>
          <h2 style={styles.h2}>
            Ignite Your <span style={styles.highlight}>Creativity</span>
          </h2>
          <p style={styles.paragraph}>
            Dive into a world where ideas come alive. Whether you're composing melodies, designing visuals, or experimenting with sound, this is your spark zone.
          </p>
          <button style={styles.button}>
            <Sparkles style={styles.icon} />
            Get Inspired
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=80"
            alt="Creativity"
            style={styles.image}
          />
        </div>
      </main>

      {/* Section 2: Visual Art */}
      <section style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.heroText}>
          <h2 style={styles.h2}>
            Express with <span style={styles.highlight}>Colors</span>
          </h2>
          <p style={styles.paragraph}>
            Bring your imagination to life through digital painting, illustrations, and design. From concept to canvas, explore new styles and visual storytelling.
          </p>
          <button style={styles.button}>
            <Sparkles style={styles.icon} />
            Start Painting
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
            alt="Artistic Expression"
            style={styles.image}
          />
        </div>
      </section>

      {/* Section 3: Sharing Ideas */}
      <section style={styles.section}>
        <div style={styles.heroText}>
          <h2 style={styles.h2}>
            Share Your <span style={styles.highlight}>Vision</span>
          </h2>
          <p style={styles.paragraph}>
            Collaborate, post, and publish your ideas with a supportive community. Let your voice reach the world through creative projects and open collaboration.
          </p>
          <button style={styles.button}>
            <Sparkles style={styles.icon} />
            Publish Now
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80"
            alt="Creative Sharing"
            style={styles.image}
          />
        </div>
      </section>

      {/* Section 4: Writing Stories */}
      <section style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.heroText}>
          <h2 style={styles.h2}>
            Unleash Your <span style={styles.highlight}>Story</span>
          </h2>
          <p style={styles.paragraph}>
            Craft tales that move hearts. From short stories to songwriting, explore your emotions and experiences through powerful words and narratives.
          </p>
          <button style={styles.button}>
            <Sparkles style={styles.icon} />
            Start Writing
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
            alt="Creative Writing"
            style={styles.image}
          />
        </div>
      </section>
    </div>
  );
}
