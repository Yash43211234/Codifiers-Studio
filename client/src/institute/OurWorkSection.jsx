import React, { useEffect, useState } from 'react';

const OurWorkSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredVideo1, setHoveredVideo1] = useState(false);
  const [hoveredVideo2, setHoveredVideo2] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const colors = {
    backgroundPrimary: '#F8F8F8',
    backgroundSecondary: '#FFFFFF',
    darkText: '#999999',
    mediumText: '#666666',
    lightText: '#AAAAAA',
    border: '#E0E0E0',
    shadow: 'rgba(0, 0, 0, 0.15)',
  };

  const fonts = {
    heading: "'Anton', sans-serif",
    subHeading: "'Playfair Display', serif",
    body: "'Lora', serif",
  };

  const styles = {
    section: {
      textAlign: 'center',
      padding: isMobile ? '4rem 1rem' : '6rem 2rem',
      backgroundColor: colors.backgroundPrimary,
      fontFamily: fonts.body,
      
    },
    headingGroup: {
      marginBottom: isMobile ? '3rem' : '5rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    mainHeading: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 700,
      color: colors.darkText,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontFamily: fonts.heading,
      marginBottom: '1rem',
      lineHeight: 1.1,
    },
    subHeading: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      color: colors.lightText,
      fontFamily: fonts.subHeading,
      fontStyle: 'italic',
      marginBottom: '1.5rem',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '500px',
      margin: '0 auto',
    },
    line: {
      flexGrow: 1,
      height: '1px',
      backgroundColor: colors.border,
      margin: '0 0.75rem',
    },
    dot: {
      width: '10px',
      height: '10px',
      backgroundColor: colors.lightText,
      borderRadius: '50%',
      flexShrink: 0,
    },
    contentRowContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      maxWidth: '1000px',
      margin: '0 auto 4rem',
      backgroundColor: colors.backgroundSecondary,
      boxShadow: `0 8px 25px ${colors.shadow}`,
      border: `1px solid ${colors.border}`,
      overflow: 'hidden',
    },
    mediaSection: {
      flex: '1 1 50%',
      position: 'relative',
      height: '300px',
    },
    mediaElement: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    },
    textSection: {
      flex: '1 1 50%',
      padding: isMobile ? '1.5rem' : '3rem',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: 600,
      color: colors.darkText,
      fontFamily: fonts.subHeading,
      marginBottom: '1.2rem',
    },
    textParagraph: {
      fontSize: isMobile ? '1rem' : '1.15rem',
      lineHeight: 1.7,
      color: colors.mediumText,
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.headingGroup}>
        <h2 style={styles.mainHeading}>Our Work</h2>
        <p style={styles.subHeading}>Where Our Students Have Worked On</p>
        <div style={styles.divider}>
          <div style={styles.line}></div>
          <div style={styles.dot}></div>
          <div style={styles.line}></div>
        </div>
      </div>

      {/* Row 1 */}
      <div style={styles.contentRowContainer}>
        <div
          style={styles.mediaSection}
          onMouseEnter={() => setHoveredVideo1(true)}
          onMouseLeave={() => setHoveredVideo1(false)}
        >
          {hoveredVideo1 ? (
  <iframe
    style={styles.iframe}
    src="https://www.youtube.com/embed/r2GYhQB23Io?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
    title="Project 1 Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
) : (
  <img src="48.jpg" alt="Project 1" style={styles.mediaElement} />
)}

        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Creative Project Showcase</h3>
          <p style={styles.textParagraph}>
            Explore how our students bring innovative ideas to life, from concept to execution, showcasing their mastery.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div
        style={{
          ...styles.contentRowContainer,
          flexDirection: isMobile ? 'column' : 'row-reverse',
        }}
      >
        <div
          style={styles.mediaSection}
          onMouseEnter={() => setHoveredVideo2(true)}
          onMouseLeave={() => setHoveredVideo2(false)}
        >
          {hoveredVideo2 ? (
  <iframe
    style={styles.iframe}
    src="https://www.youtube.com/embed/unuEh1CLgZw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
    title="Project 2 Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
) : (
  <img src="37.jpg" alt="Project 2" style={styles.mediaElement} />
)}

        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Behind the Scenes: Our Process</h3>
          <p style={styles.textParagraph}>
            Discover the process and dedication our students invest to deliver real-world results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
