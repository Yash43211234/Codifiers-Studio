// src/components/CompanySections.jsx
import React, { useEffect, useState } from 'react';
import DottedBackground from './DottedBackground';
import CustomCarousel from './CustomCarousel';
import OurWorkSection from './OurWorkSection';

const images = ['48.jpg', '26_10.jpg', '37.jpg'];
const TCMISection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const buttonStyle = {
    position: 'absolute',
    top: '150%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    zIndex: 1,
  };

  const sectionTitle = (title, subtitle) => (
    <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
      <h2 style={{
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: 600,
        textTransform: 'uppercase',
        color: '#555',
        fontFamily: "'Anton', sans-serif",
        letterSpacing: '0.05em',
      }}>{title}</h2>
      <p style={{ fontSize: isMobile ? '12px' : '14px', color: '#777', marginTop: '0.25rem' }}>{subtitle}</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <div style={{ flexGrow: 1, borderTop: '1px solid #ccc', margin: '0 0.5rem' }}></div>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#aaa', borderRadius: '50%' }}></div>
        <div style={{ flexGrow: 1, borderTop: '1px solid #ccc', margin: '0 0.5rem' }}></div>
      </div>
    </div>
  );

  const headingStyle = {
    fontSize: isMobile ? '40px' : '60px',
    fontWeight: 800,
    color: '#1a1a1a',
    lineHeight: 1.1,
    marginTop: '20px',
    fontFamily: "'Anton', sans-serif",
    textTransform: 'uppercase',
  };

  const contentBox = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '0' : '2rem',
    backgroundColor: '#fff',
    padding: isMobile ? '1.5rem' : '2.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  };

  return (
    <>
      {/* Top Title */}
      <div style={{
        backgroundColor: '', // Light gray background
        padding: isMobile ? '2rem 1rem' : '3rem 0',
        textAlign: 'center',
        fontFamily: "'Anton', sans-serif",
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '2rem',
        }}>
          {/* Left Line */}
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#aaa',
          }}></div>

          {/* Center Text */}
          <div>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              fontWeight: 700,
              margin: 0,
              color: '#777',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Story About Us</h2>
            <p style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#999',
              marginTop: '0.25rem',
              letterSpacing: '0.15em',
            }}>THE THINGS YOU SHOULD KNOW</p>
          </div>

          {/* Right Line */}
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#aaa',
          }}></div>
        </div>
      </div>

      
      <section style={{
        padding: isMobile ? '3rem 0' : '3rem 0',
        background: '#DEDEDE',
        fontFamily: "'Antonio', sans-serif",
        color: '#333',
        boxSizing: 'border-box',
      }}>

        <div style={containerStyle}>


          {/* Image */}
          <CustomCarousel />

          {/* About Us Content */}
          <div style={{  marginBottom: '-100px' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                marginTop:isMobile?'-60px':'0rem',
                padding: isMobile ? '2rem 1.2rem' : '3rem 5rem 4rem 5rem',
                gap: isMobile ? '1.5rem' : '3rem',
                boxSizing: 'border-box',
                borderBottom: '1px solid #eee',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',

              }}
            >
              <div
                style={{
                  width: '100%',
                  fontSize: isMobile ? '13px' : '15px',
                  lineHeight: isMobile ? '1.9' : '2',
                  color: '#666666',
                  textAlign: 'justify',
                  fontFamily: "'Lora', serif",
                  letterSpacing: '0.3px',
                  fontWeight: 400,
                }}
              >
                <p>
                  We believe learning music should be an exciting experience. That's why we offer thoughtfully
                  designed courses in a creative and inspiring environment. With access to modern facilities,
                  up-to-date equipment, and experienced mentors, our students learn in a setting that mirrors
                  the real music industry. Whether you're just starting out or looking to level up your skills,
                  we offer a wide range of diploma and certification programs. From live classes to flexible
                  online options, our courses are designed to fit your goals, your schedule, and your unique
                  learning style.
                </p>
              </div>
            </div>
          </div>


          <div style={{ height: '50px', marginBottom: '60px' }}>

          </div>
        </div>
      </section>

      <OurWorkSection />

    </>
  );
};

export default TCMISection;
