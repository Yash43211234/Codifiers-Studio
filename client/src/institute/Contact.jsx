import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    wrapper: {
      backgroundColor: '#f1f4f6',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    section: {
      maxWidth: '1200px',
      margin: 'auto',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#222',
      textAlign: isMobile ? 'center' : 'left',
      color:'rgb(153, 153, 153)'
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '30px',
    },
    leftPanel: {
      flex: '1',
      position: 'relative',
      backgroundColor: '#000',
      color: '#fff',
      width: '100%',
      height: isMobile ? '300px' : 'auto',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '20px',
      backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
    },
    date: {
      fontSize: '14px',
      color: '#ccc',
      marginBottom: '10px',
    },
    highlightTitle: {
      fontSize: isMobile ? '1rem' : '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    highlightText: {
      fontSize: isMobile ? '0.8rem' : '16px',
      color: '#eee',
    },
    rightPanel: {
      flex: '1',
      backgroundColor: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    newsBlock: {
      marginBottom: '20px',
    },
    newsDate: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '4px',
    },
    newsTitle: {
      fontSize: isMobile ? '14px' : '15px',
      color: '#c70039',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '12px',
    },
    moreBtn: {
      marginTop: 'auto',
      padding: '10px 20px',
      border: '1px solid #333',
      background: 'none',
      color: '#333',
      cursor: 'pointer',
      fontWeight: '500',
      letterSpacing: '1px',
      alignSelf: isMobile ? 'center' : 'flex-start',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.section}>
        <h2 style={styles.title}>Right Now at the TCMI</h2>
        <div style={styles.content}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            <img
              src="institute-bottom-image.jpg"
              alt="Highlight"
              style={styles.image}
            />
            <div style={styles.overlay}>
              <p style={styles.date}>Date: 1 July 2025</p>
              <h3 style={styles.highlightTitle}> Getting ready for our workshop session's.</h3>
              <p style={styles.highlightText}>
               Workshops & Demo classes by TCMI, where students will learn, more about music production and music in general.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div style={styles.rightPanel}>
            <div style={styles.newsBlock}>
              <p style={styles.newsDate}>Date 2 July 2025 :</p>
              <a href="#" style={styles.newsTitle}>
                 Music production workshop open at TCMI
              </a>

              <p style={styles.newsDate}>Date 1 June 2025 :</p>
              <a href="#" style={styles.newsTitle}>
                 Admissions for New Music production 2025 batche's open .
              </a>

              
            </div>

            <button style={styles.moreBtn}>MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
