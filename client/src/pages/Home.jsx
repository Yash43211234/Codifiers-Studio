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
      paddingTop: '70px',
    },
    image: {
      width: '100%',
      height: isMobile ? '200px' : '600px',
      display: showVideo ? 'none' : 'block',
      objectFit: 'cover',
    },
    video: {
      width: '100%',
      height: isMobile ? '200px' : 'auto',
      display: showVideo ? 'block' : 'none',
    },
    heading: {
      fontSize: isMobile ? '2.5rem' : '8rem',
      position: 'absolute',
      top: isMobile ? '20%' : '40%',
      left: isMobile ? '30%' : '34%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'white',
      textAlign: 'left',
    },
    button: {
      position: 'absolute',
      top: isMobile ? '35%' : '95%',
      left: isMobile ? '30%' : '19%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'black',
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      cursor: 'pointer',
      fontSize: isMobile ? '0.9rem' : '1rem',
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
      padding: '15px 0',
      fontSize: isMobile ? '1rem' : '1.3rem',
      marginTop: '0rem',
      textAlign: 'center',
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
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            // src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/Sequence+01.mp"
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

      <h1 style={styles.marquee}>
        <marquee><p style={{ margin: 0, lineHeight: '1.14' }}>Find your flow.</p></marquee>
      </h1>

      {/* First row */}
      <div style={styles.row}>
        <div style={styles.colHalf}>
          <img
            src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
            style={styles.imageTall}
            alt="img1"
          />
        </div>
        <div style={styles.textCol}>
          <h2>Who we are</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            The Chordifiers Studio in Siliguri, India, is a professional Record Label and Music School. We offer comprehensive music education and training, providing students with access to industry-standard facilities and experienced professionals...
          </p>
          <button style={styles.button_about_us}>
            About Us
          </button>
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
    <button
      style={{ marginTop: '5px', padding: '5px 10px' }}
      onClick={handleRegisterClick}
    >
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
            src="https://images.pexels.com/photos/8512206/pexels-photo-8512206.jpeg"
            style={styles.imageMedium}
            alt="Founders"
          />
        </div>
      </div>


      {/* Fourth row - Testimonials / Leadership Quote */}
      <div style={styles.row}>
        <div style={styles.quoteTextCol}>
          <p style={{ fontSize: isMobile ? '24px' : '35px', fontStyle: 'italic' }}>
            "Great music isn't just heard — it's felt. Learn to produce what moves the world."
          </p>
          <p>— Sophia Bennett</p>
        </div>

        <div style={styles.colHalf}>
          {/* First Profile Card */}
          <div style={{ background: '#d900ff', padding: '15px 20px', color: 'white' }}>
            <h1 style={{ margin: '0' }}>Sophia Bennett</h1>
            <p style={{ margin: '0' }}>Founder & Lead Instructor</p>
          </div>
          <div>
            <img
              src="https://focusphotography.com/wp-content/uploads/2024/11/H2732-Spencer-Cook-125-A-550x367.webp"
              style={styles.imageMedium}
              alt="Sophia Bennett"
            />
          </div>

          {/* Second Profile Card */}
          <div style={{ background: '#d0fbf9', padding: '25px 20px', color: 'black' }}>
            <h1 style={{ margin: '0' }}>Alisa Morris</h1>
            <p style={{ margin: '0' }}>Program Director & Industry Mentor</p>
          </div>
        </div>
      </div>


      <div style={styles.footerBanner}>
        <h2 style={{ fontSize: isMobile ? '1.5rem' : '40px' }}>
          Whether you're a curious beginner or a seasoned artist, our Music Production courses will elevate your skills with real studio experience and industry tools.
        </h2>
        <button style={styles.footerButton}>
          Reserve Your Spot
        </button>
      </div>

    </div>
  );
}
