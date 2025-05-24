import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  };

  const isMobile = windowWidth <= 768;

  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      textAlign: 'left',
      paddingTop: '60px',
    },
    image: {
      width: '100%',
      height: isMobile ? '250px' : '600px', // SAME height
      display: showVideo ? 'none' : 'block',
      objectFit: 'cover',
    },
    video: {
      width: '100%',
      height: isMobile ? '250px' : 'auto', // MATCHES image height
      display: showVideo ? 'block' : 'none',
      objectFit: 'cover',
    },
    heading: {
      fontSize: isMobile ? '2.5rem' : '8rem',
      position: 'absolute',
      top: isMobile ? '15%' : '40%',
      left: isMobile ? '30%' : '34%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'white',
      textAlign: 'left',
    },
    button: {
      position: 'absolute',
      top: isMobile ? '32%' : '95%',
      left: isMobile ? '25%' : '19%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'black',
      padding: isMobile ? '8px 16px' : '10px 24px',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      cursor: 'pointer',
      fontSize: isMobile ? '0.8rem' : '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      border: 'none',
      transition: 'all 0.3s ease-in-out',
    },
    button_about_us: {
      marginTop: '1.5rem',
      padding: '10px 20px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    marquee: {
      backgroundColor: 'blue',
      color: 'white',
      padding: isMobile ? '5px' : '15px 0',
      fontSize: isMobile ? '0.9rem' : '1.3rem',
      marginTop: '0',
      textAlign: 'center',
      whiteSpace: 'nowrap', // ensures smooth scroll on mobile too
    },

    row: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      marginTop: isMobile ? '0px' : '-14px',
    },
    rowReverse: {
      display: 'flex',
      flexDirection: isMobile ? 'column-reverse' : 'row',
      marginTop: isMobile ? '0px' : '-28px',
    },
    colHalf: {
      width: isMobile ? '100%' : '50%',
    },
    imageTall: {
      width: '100%',
      height: isMobile ? '300px' : '700px',
      objectFit: 'cover',
    },
    imageMedium: {
      width: '100%',
      height: isMobile ? '250px' : '500px',
      objectFit: 'cover',
    },
    textCol: {
      width: isMobile ? '100%' : '50%',
      padding: isMobile ? '1.5rem' : '5rem',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5',
    },
    textColWide: {
      width: isMobile ? '100%' : '50%',
      padding: isMobile ? '2rem' : '10rem',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5',
    },
    quoteTextCol: {
      fontSize: isMobile ? '18px' : '23px',
      width: isMobile ? '100%' : '50%',
      padding: isMobile ? '1.5rem' : '2.2rem',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5',
    },
    footerBanner: {
      height: isMobile ? 'auto' : '350px',
      background: 'blue',
      color: 'white',
      padding: isMobile ? '2rem' : '5rem',
      textAlign: 'center',
    },
    footerButton: {
      border: 'none',
      borderRadius: '4px',
      padding: '10px',
      backgroundColor: '#d0fbf9',
      marginTop: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <img
          src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/Home_banner.jpg"
          alt="Home Banner"
          style={styles.image}
          onLoad={handleImageLoad}
        />
        {showVideo && (
          <video
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/Sequence+01+(online-video-cutter.com)+(1).mp4"
            autoPlay
            muted
            loop
            style={styles.video}
          />
        )}


        <h1 style={styles.heading}>
          <p style={{ margin: 0, lineHeight: '.9' }}>Find your <br /> flow.</p>
        </h1>

        <button style={styles.button} onClick={handleRegisterClick}>
          Reserve your slot
        </button>
      </div>

      {/* Marquee Section */}
      <div style={styles.marquee}>
        <marquee>
          <p style={{ margin: 0, lineHeight: '1.14' }}>
            Find your flow. Discover world-class music production courses, hands-on studio training, expert mentorship, and the creative freedom to turn your ideas into hits. Whether you're a beginner or a pro, this is your stage — learn, create, and thrive in sound.
          </p>
        </marquee>
      </div>

      {/* First row */}
      <div style={styles.row}>
        <div style={styles.colHalf}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg"
            style={styles.imageTall}
            alt="img1"
          />
        </div>
        <div style={styles.textCol}>
          <h2>Who we are</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            The Chordifiers Studio in Siliguri, India, is a professional Record Label and Music School. We offer comprehensive music education and training, providing students with access to industry-standard facilities and experienced professionals...
          </p>
          <button style={styles.button_about_us} onClick={() => navigate('/about')}>About Us</button>

        </div>
      </div>

      {/* Second row */}
      <div style={styles.row}>
        <div style={styles.colHalf}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/IMG-20250410-WA0007.jpg"
            style={styles.imageTall}
            alt="Music production classroom"
          />
        </div>
        <div style={styles.textCol}>
          <h2>About the Institute</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Founded by acclaimed producer <strong>Alex Rivera</strong>, our Music Production Institute bridges the gap between creativity and cutting-edge audio technology. Whether you're diving into beat-making, sound design, or mixing/mastering, our curriculum is tailored to industry demands.
            <br /><br />
            Learn from professionals using FL Studio, Ableton Live, Logic Pro, and more — in real studios, with real projects.
          </p>
          <button style={styles.footerButton} onClick={handleRegisterClick}>
            Register Your Slot
          </button>
        </div>
      </div>

      {/* Third row */}
      <div style={styles.rowReverse}>
        <div style={styles.textColWide}>
          <h1>Meet the Founders</h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Industry professionals with decades of combined experience in sound engineering, composition, and live performance. Our mentors have worked with top-tier artists and bring real-world insights into every session.
          </p>
        </div>
        <div style={styles.colHalf}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4c1616793e2b0571fa739cffa93b13a63adbc649+-+Copy.jpg"
            style={styles.imageMedium}
            alt="Founders"
          />
        </div>
      </div>

      {/* Fourth row - Testimonials / Leadership Quote */}
      <div style={styles.row}>
        <div style={styles.quoteTextCol}>
          <p style={{ fontSize: isMobile ? '24px' : '35px', fontStyle: 'italic' }}>
            "Every track tells a story. Learn how to craft yours with clarity, emotion, and precision."
          </p>
          <p>— Julian Cross</p>
        </div>

        <div style={styles.colHalf}>
          {/* First Profile Card */}
          <div style={{ background: '#1a1a1a', padding: '15px 20px', color: 'white' }}>
            <h1 style={{ margin: '0' }}>Julian Cross</h1>
            <p style={{ margin: '0' }}>Creative Director & Audio Visionary</p>
          </div>
          <div>
            <img
              src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/23f4e11a55b906a4310e045982373adcbcdbef9a.jpg"

              style={styles.imageMedium}
              alt="Julian Cross"
            />
          </div>

          {/* Second Profile Card */}
          <div style={{ background: '#eaeaea', padding: '25px 20px', color: '#222' }}>
            <h1 style={{ margin: '0' }}>Rina Kapoor</h1>
            <p style={{ margin: '0' }}>Lead Curriculum Architect</p>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div style={styles.footerBanner}>
        <h2 style={{ fontSize: isMobile ? '1.5rem' : '40px' }}>
          Whether you're a curious beginner or a seasoned artist, our Music Production courses will elevate your skills with real studio experience and industry tools.
        </h2>
        <button style={styles.footerButton} onClick={handleRegisterClick}>Reserve Your Spot</button>
      </div>
    </div>

  );
}
