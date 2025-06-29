import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function About() {

  const timelineData = [
    { date: 'Aug, 2022', text: 'Founded & Established' },
    { date: 'March, 2023', text: "Ranked to Top 10 Music Studio's In North Bengal" },
    { date: 'April, 2023', text: 'Introduced the First Music Production School in the town' },
    { date: 'June, 2023', text: 'Introduced Other Courses' },
    { date: 'Dec, 2024', text: "Ranked to Top 3 Music Studio's & School category In North Bengal" },
    { date: 'June, 2024', text: 'Renovations Started' },
    { date: 'Nov, 2024', text: 'Renovations Ongoing' },
    { date: '2025', text: 'Relaunching Soon' },
  ];

  const itemData = [
    { img: '/48.jpg', title: 'Coffee' },
    { img: '/37.jpg', title: 'Storage' },
    { img: '/48.jpg', title: 'Coffee table' },
    { img: '/26_10.jpg', title: 'Blinds' },
    { img: '/image11.jpg', title: 'Coffee' },
    { img: '/image12.jpg', title: 'Storage' },
  ];

  const styles = {
    page: {
      color: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      background: 'rgb(252, 238, 9)',
      padding: '2rem',
    },
    header: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
      fontFamily: 'Crimson',
    },
    subheader: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      textAlign: 'center',
      maxWidth: '700px',
      marginInline: 'auto',
    },
    aboutSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2rem',
      padding: '2rem 1rem',
    },
    image: {
      width: '100%',
      maxWidth: '450px',
      borderRadius: '50%',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    },
    aboutContent: {
      maxWidth: '600px',
      textAlign: 'center',
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    timelineSection: {
      padding: '20px 20px',
      maxWidth: '800px',
      margin: 'auto',
    },
    timelineHeading: {
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    timelineContainer: {
      position: 'relative',
      marginLeft: '20px',
    },
    verticalLine: {
      position: 'absolute',
      top: 0,
      left: '4px',
      width: '2px',
      height: '100%',
      backgroundColor: '#fdd835',
    },
    timelineRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      position: 'relative',
    },
    timelineDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#fdd835',
      position: 'absolute',
      left: '-1px',
      top: '4px',
    },
    timelineContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '30px',
      gap: '30px',
    },
    timelineDate: {
      minWidth: '100px',
      fontWeight: '500',
      fontSize: '1.2rem',
      color: '#333',
    },
    timelineText: {
      fontSize: '1.2rem',
      color: '#000',
    },
    locationSection: {
      marginTop: '4rem',
    },
    locationHeader: {
      backgroundColor: '#111',
      padding: '2rem',
      textAlign: 'center',
    },
    locationTitle: {
      color: '#fff',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: 0,
    },
    mapContainer: {
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
  };

  return (
    <>
      <div id="about-section" style={styles.page}>
        <h1 style={styles.header}>Welcome to The Chordifiers Studio</h1>
        <p style={styles.subheader}>
          Where creativity meets technology. We empower artists and producers to shape the future of sound through innovation and collaboration.
        </p>

        <section className="about-section" style={styles.aboutSection}>
          <img src="tcs.jpg" alt="Creative Workspace" className="about-image" style={styles.image} />
          <div className="about-content" style={styles.aboutContent}>
            <p style={styles.aboutText}>
              At The Chordifiers Studio, we provide a nurturing space for aspiring musicians, sound engineers, and digital creators. Our environment is designed to spark imagination, support creative growth, and foster collaboration.
            </p>
            <p style={{ ...styles.aboutText, marginTop: '1rem' }}>
              Whether you're a beginner exploring your passion or a professional refining your craft, our studio is your launchpad into the world of modern music production.
            </p>
          </div>
        </section>
      </div>

      <section id="our-stories" style={styles.timelineSection}>
        <h2 style={styles.timelineHeading}>Our Story</h2>
        <div className="timeline-container" style={styles.timelineContainer}>
          <div style={styles.verticalLine}></div>
          {timelineData.map((item, index) => (
            <div key={index} style={styles.timelineRow}>
              <div style={styles.timelineDot}></div>
              <div className="timeline-content" style={styles.timelineContent}>
                <span className="timeline-date" style={styles.timelineDate}>{item.date}</span>
                <span className="timeline-text" style={styles.timelineText}><strong>{item.text}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="our-gallery" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>Gallery</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '2rem auto' }}>
          "Step into the heartbeat of creativity at The Chordifiers Studio—each photo unveils our passion, energy, and the magic behind every note."
        </p>

        <ImageList
          sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto',  overflow: 'visible', // prevents scroll
    height: 'auto',    }}
          variant="woven"
          cols={3}
          gap={10}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=300&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0px',
                  transition: 'transform 0.4s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>

      <section id="our-location" style={styles.locationSection}>
        <div style={styles.locationHeader}>
          <h2 style={styles.locationTitle}>Location</h2>
        </div>
        <div style={styles.mapContainer}>
          <iframe
            title="The Chordifiers Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5492559700447!2d88.4100217742397!3d26.69489467677753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441acea247e9b%3A0x77c74beed4aadd84!2sThe%20Chordifiers%20Studio%20(TCS)!5e0!3m2!1sen!2sin!4v1749987584228!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Responsive Styling */}
      <style>{`
        @media (min-width: 768px) {
          .about-section {
            flex-direction: row !important;
            text-align: left !important;
          }
          .about-content {
            padding-left: 2rem;
          }
        }

        @media (max-width: 767px) {
          .timeline-content {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .timeline-text {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}