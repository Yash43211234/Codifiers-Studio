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

      {/* ABOUT US SECTION */}
      <section style={{
        padding: isMobile ? '3rem 0' : '0rem 0',
        background:'#DEDEDE',
        fontFamily: "'Antonio', sans-serif",
        color: '#333',
        boxSizing: 'border-box',
      }}>

        <div style={containerStyle}>


          {/* Image */}
          <CustomCarousel/>

          {/* About Us Content */}
          <div style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            padding: isMobile ? '2rem 1rem' : '2rem 4rem 4rem 4rem',
            gap: isMobile ? '1.5rem' : '3rem',
            boxSizing: 'border-box',
            borderBottom: '1px solid #ddd',
          }}>
            {/* Left Title */}
            <div style={{
              width: isMobile ? '100%' : '30%',
              fontSize: isMobile ? '24px' : '50px',
              fontWeight: 700,
              color: '#444444',
              textAlign: isMobile ? 'center' : 'left',
              fontFamily: "'Antonio', sans-serif",
              lineHeight: '1.2',
              paddingTop: "10px"
            }}>
              ABOUT US
            </div>

            {/* Right Paragraph */}
            <div style={{
              width: isMobile ? '100%' : '70%',
              fontSize: isMobile ? '12px' : '14px',
              lineHeight: '1.8',
              color: '#999999',
              textAlign: 'justify',
              fontFamily: "'Open Sans', sans-serif",
            }}>
              <p> We believe learning music should be an exciting experience. That's why we offer thoughtfully
                designed courses in a creative and inspiring environment; With access to modern facilities, up-to-date
                equipment, and experienced mentors, our students get to learn in a setting that mirrors the real music
                industry. Whether you're just starting out or looking to level up your skills, we offer a wide range of
                diploma and certification programs that cover every corner of music education. From live classes to
                flexible online options, our courses are designed to fit your goals, your schedule, and your unique
                learning style.</p>
            </div>
          </div>


          <div style={{ height: '50px', borderTop: '1px solid #999999', marginBottom: '60px' }}>

          </div>
        </div>
      </section>

      <DottedBackground />

      <OurWorkSection/>
      <DottedBackground />

      {/* SERVICES SECTION */}
      <section style={{
        paddingTop: isMobile ? '3rem' : '4rem',
        paddingBottom: isMobile ? '3rem' : '4rem',
        backgroundColor: '#f0f0f0',
        fontFamily: "'Antonio', sans-serif",
        color: '#333',
        marginTop: isMobile ? '3rem' : '4rem',
      }}>
        <div style={containerStyle}>
          <div style={{

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
                }}>OUR SERVICES</h2>
                <p style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#999',
                  marginTop: '0.25rem',
                  letterSpacing: '0.15em',
                }}>WHAT WE REALLY CAN PROVIDE</p>
              </div>

              {/* Right Line */}
              <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: '#aaa',
              }}></div>
            </div>
          </div>

          {/* Content Box */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            backgroundColor: '#fff',
            padding: isMobile ? '1.5rem' : '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          }}>
            {/* Left Column: Heading */}
            <div style={{
              width: isMobile ? '100%' : '30%',
              fontWeight: 700,
              fontSize: isMobile ? '26px' : '38px',
              color: '#333',
              lineHeight: '1.2',
            }}>
              OUR<br />SERVICES
            </div>

            {/* Right Column: List */}
            <ul style={{
              width: isMobile ? '100%' : '70%',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '2',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {[
                'TV Commercial',
                'Music Video Production',
                'Audio Recording/Mixing/Mastering',
                'Music Production',
                'Film Scoring',
                'Event Documentation',
                'Documentary Production',
                'Photography',
              ].map((service, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '50%',
                    fontSize: '12px',
                    textAlign: 'center',
                    lineHeight: '20px',
                    marginRight: '1rem',
                  }}>▢</span>
                  {service}
                </li>
              ))}
            </ul>

          </div>
          <hr style={{
            marginTop: isMobile ? '2.5rem' : '4rem',
            borderColor: '#ccc',
            maxWidth: '900px',
            marginInline: 'auto',
          }} />

          {/* Bottom Line */}

        </div>


      </section>


      <DottedBackground />
    </>
  );
};

export default TCMISection;
