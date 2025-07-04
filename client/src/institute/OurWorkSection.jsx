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
      padding: isMobile ? '3rem 0rem' : '1rem 0rem',
      backgroundColor:'#DEDEDE',
      fontFamily: fonts.body,


    },
    headingGroup: {
      marginBottom: isMobile ? '3rem' : '4rem',
      maxWidth: '100%',
      margin: '0 auto',
      backgroundColor:'#FFFFFF'

    },
    mainHeading: {
      fontSize: isMobile ? '2.5rem' : '36px',
      fontWeight: 700,
      color: colors.darkText,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontFamily: fonts.heading,
      marginBottom: '1rem',
      lineHeight: 1.1,
    },
    subHeading: {
      fontSize: isMobile ? '1rem' : '14px',
      color: colors.lightText,
      fontFamily: fonts.subHeading,
      fontFamily:'sans-serif',
      marginBottom: '1.5rem',
       textTransform: 'uppercase',
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
      margin: '60px auto 4rem',
      backgroundColor: colors.backgroundSecondary,
      boxShadow: `0 8px 25px ${colors.shadow}`,
      border: `1px solid ${colors.border}`,
      overflow: 'hidden',
      
    },
    mediaSection: {
      flex: '1 1 50%',
      position: 'relative',
      height: isMobile ? '250px' : '300px',
      minHeight: '200px',
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
      
<div style={{
  backgroundColor: '#FFFFFF',
  padding: isMobile ? '2rem 1rem' : '3rem 0',
  textAlign: 'center',
  fontFamily: "'Anton', sans-serif",
}}>
  {isMobile ? (
    // Mobile View
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 700,
        margin: 0,
        color: '#777',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        Story About Us
      </h2>

      {/* Subheading with left/right lines on the same line */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        marginTop: '1rem',
      }}>
        {/* Left Line */}
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#aaa',
          position: 'relative',
          top: '-15px',
        }}></div>

        {/* Subheading */}
        <p style={{
          fontSize: '12px',
          color: '#999',
          margin: 0,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          The Things You Should Know
        </p>

        {/* Right Line */}
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#aaa',
          position: 'relative',
          top: '-15px',
        }}></div>
      </div>
    </div>
  ) : (
    // Desktop View (unchanged)
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '2rem',
    }}>
      <div style={{
        flex: 1,
        height: '1px',
        backgroundColor: '#aaa',
      }}></div>

      <div>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 700,
          margin: 0,
          color: '#777',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Story About Us
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#999',
          marginTop: '0.25rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          The Things You Should Know
        </p>
      </div>

      <div style={{
        flex: 1,
        height: '1px',
        backgroundColor: '#aaa',
      }}></div>
    </div>
  )}
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
            <img src="batiNaHoti.jpg" alt="Project 1" style={styles.mediaElement} />
          )}

        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}> BETI NA HOTI</h3>
          <p style={styles.textParagraph}>
            A quiet storm of pain and resilience, this song echoes India's unspoken stories of violence and injustice.

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
            <img src="citiesOnFires.jpg" alt="Project 2" style={styles.mediaElement} />
          )}

        </div>
        <div style={styles.textSection}>
          <h3 style={styles.textTitle}>Cities on fires</h3>
          <p style={styles.textParagraph}>
            War divides what humanity unites—peace is our shared destiny, not destruction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
