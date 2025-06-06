import React, { useEffect, useState } from 'react';

const TCMISection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen(); // initial check
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: isMobile ? '20px' : '100px',
        paddingRight: isMobile ? '20px' : '100px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? '100%' : '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '1.8rem' : '2.8rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            lineHeight: '1.25',
          }}
        >
          The Chordifiers Music Institute (TCMI)
        </h1>

        <p
          style={{
            fontSize: isMobile ? '1rem' : '1.525rem',
            color: '#4B5563',
            lineHeight: '1.75',
            maxWidth: '1152px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          We believe learning music should be an exciting experience. That's why we offer thoughtfully
          designed courses in a creative and inspiring environment; With access to modern facilities, up-to-date
          equipment, and experienced mentors, our students get to learn in a setting that mirrors the real music
          industry. Whether you're just starting out or looking to level up your skills, we offer a wide range of
          diploma and certification programs that cover every corner of music education. From live classes to
          flexible online options, our courses are designed to fit your goals, your schedule, and your unique
          learning style.
        </p>
      </div>
    </div>
  );
};

export default TCMISection;
