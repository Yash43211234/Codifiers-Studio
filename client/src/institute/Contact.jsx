import React from 'react';

const Contact = () => {
  const styles = {
    wrapper: {
      backgroundColor: '#ddd',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    header: {
      textAlign: 'center',
      paddingBottom: '20px',
      
      
      marginBottom: '30px',
    },
    headerTitle: {
      margin: 0,
      fontSize: '28px',
      color: '#555',
    },
    headerSubtitle: {
      color: '#888',
      fontSize: '14px',
      marginTop: '5px',
    },
    body: {
      display: 'flex',
      backgroundColor: '#fff',
      padding: '40px',
      maxWidth: '1000px',
      margin: 'auto',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    left: {
      flex: '1 1 200px',
    },
    heading: {
      fontSize: '30px',
      color: '#333',
      fontWeight: 'bold',
    },
    right: {
      flex: '2 1 500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    blockHeading: {
      fontSize: '18px',
      color: '#444',
      marginBottom: '10px',
    },
    blockText: {
      color: '#666',
      fontSize: '15px',
      marginBottom: '8px',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>OUR CONTACT</h2>
        <p style={styles.headerSubtitle}>START COMMUNICATE WITH US</p>
      </div>

      {/* Right now at the TCMI – Redesigned like CONTACT section */}
      <div style={styles.body}>
        <div style={styles.left}>
          <h3 style={styles.heading}>RIGHT NOW AT <br/> THE   TCMI</h3>
        </div>

        <div style={styles.right}>
          <div>
            <h3 style={styles.blockHeading}>📰 News</h3>
            <p style={styles.blockText}><strong>New Partnership:</strong> TCMI signs MoU with Sony Music India.</p>
            <p style={styles.blockText}><strong>Featured:</strong> TCMI ranked in top 5 creative media institutes.</p>
            <p style={styles.blockText}><strong>In Press:</strong> Rolling Stone India features TCMI’s success story.</p>
          </div>

          <div>
            <h3 style={styles.blockHeading}>📢 Updates</h3>
            <p style={styles.blockText}><strong>Admissions Open:</strong> 2025 batch for Sound Engineering is live.</p>
            <p style={styles.blockText}><strong>Live Show:</strong> Join us for “Sounds of TCMI” this Sunday at 7PM IST.</p>
            <p style={styles.blockText}><strong>Workshop:</strong> Register now for Audio Mixing Bootcamp, July 15–18.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
