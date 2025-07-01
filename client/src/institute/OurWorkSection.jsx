import React, { useEffect, useState } from 'react';

const OurWorkSection = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      color: colors.mediumText,
      boxSizing: 'border-box',
    },
    headingGroup: {
      marginBottom: isMobile ? '3rem' : '5rem',
      maxWidth: '800px',
      margin: '0 auto ' + (isMobile ? '3rem' : '5rem'),
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
      color:'#999999'
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
      width: '100%',
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

    // New: Style for each full-width content row
    contentRowContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row', // Stack on mobile, side-by-side on desktop
      alignItems: 'stretch', // Ensure children stretch to match height
      justifyContent: 'center',
      maxWidth: '1200px', // Max width for the entire row block
      margin: '0 auto ' + (isMobile ? '2.5rem' : '4rem'), // Margin between rows
      backgroundColor: colors.backgroundSecondary, // White background for the whole block
      borderRadius: '12px',
      boxShadow: `0 8px 25px ${colors.shadow}`,
      border: `1px solid ${colors.border}`,
      overflow: 'hidden', // Essential for internal border-radius to apply
    },

    // Individual sections within the contentRowContainer
    mediaSection: {
      flex: '1 1 50%', // Takes 50% width of the row
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '200px' : 'auto', // Min height for mobile images
    },
    mediaElement: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },

    textSection: {
      flex: '1 1 50%', // Takes 50% width of the row
      padding: isMobile ? '1.5rem' : '3rem', // More padding for larger text block
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Vertically center content
    },
    textTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem', // Larger titles for prominent blocks
      fontWeight: 600,
      color: colors.darkText,
      fontFamily: fonts.subHeading,
      marginBottom: '1.2rem',
      lineHeight: 1.2,
    },
    textParagraph: {
      fontSize: isMobile ? '1rem' : '1.15rem', // Slightly larger paragraph text
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

      {/* Row 1: Media Left, Text Right */}
      <div style={styles.contentRowContainer}>
        <div style={styles.mediaSection}>
          <img src="48.jpg" alt="Project 1" style={styles.mediaElement} />
          {/* <video style={styles.mediaElement} controls> <source src="video1.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> */}
        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Creative Project Showcase</h3>
          <p style={styles.textParagraph}>
            Explore how our students bring innovative ideas to life, from concept development to final execution, demonstrating mastery in their chosen fields. This project highlights their collaborative spirit and technical prowess.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Media Right (Opposite) */}
      <div style={styles.contentRowContainer}
           style={{
             ...styles.contentRowContainer,
             flexDirection: isMobile ? 'column' : 'row-reverse' // Reverses order on desktop
           }}>
        <div style={styles.mediaSection}>
          <img src="37.jpg" alt="Project 2" style={styles.mediaElement} />
          {/* <video style={styles.mediaElement} controls> <source src="video2.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> */}
        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Behind the Scenes: Our Process</h3>
          <p style={styles.textParagraph}>
            Discover the dedication and meticulous work involved in crafting compelling projects. Our students follow industry-standard workflows to deliver high-quality, impactful results, from ideation to deployment.
          </p>
        </div>
      </div>

      {/* Example for a third row if needed - Media Left, Text Right again */}
      <div style={styles.contentRowContainer}>
        <div style={styles.mediaSection}>
          <img src="159.jpg" alt="Project 3" style={styles.mediaElement} />
          {/* <video style={styles.mediaElement} controls> <source src="video3.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> */}
        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Client Success Stories</h3>
          <p style={styles.textParagraph}>
            See how our students apply their skills to real-world client briefs, delivering professional solutions that exceed expectations and make a tangible impact. Their solutions are both innovative and practical.
          </p>
        </div>
      </div>

       {/* Example for a fourth row if needed - Text Left, Media Right again */}
      <div style={styles.contentRowContainer}
           style={{
             ...styles.contentRowContainer,
             flexDirection: isMobile ? 'column' : 'row-reverse'
           }}>
        <div style={styles.mediaSection}>
          <img src="26_10.jpg" alt="Project 4" style={styles.mediaElement} />
          {/* <video style={styles.mediaElement} controls> <source src="video4.mp4" type="video/mp4" /> Your browser does not support the video tag. </video> */}
        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Innovative Technical Solutions</h3>
          <p style={styles.textParagraph}>
            Delve into the technical intricacies of projects that push boundaries. Our students are adept at leveraging cutting-edge technology to solve complex challenges, ensuring robust and scalable solutions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default OurWorkSection;